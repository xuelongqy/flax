part of '../../bindings.dart';

// Preserve Blob MIME metadata across the private Worker resource broker.
final _workerSourceTypes = Expando<String>('Worker resource MIME');

typedef _WorkerSetup = ({
  List<(String, String)> sources,
  List<(String, Map<String, Object?>)> modules,
  Set<String> importModules,
  Set<String> nativeAssets,
});

class _DedicatedWorker {
  bool started = false, terminated = false, exited = false;
  final cancelled = Completer<void>();
  final loads = <int, Completer<void>>{};
  final permissions = <String, FlaxPermissionLease>{};
  final fetches = <int, _FetchHost>{};
  SendPort? control;
  RawReceivePort? exit;
  bool framePending = false;
  int? frameHandle;
}

class _DedicatedWorkers {
  _DedicatedWorkers(this.context, this.deliver, this.loadBlob) {
    port = RawReceivePort(receive, 'Flax Dedicated Worker messages')
      ..keepIsolateAlive = false;
    (context.runtime as FlaxNativeJsRuntime).installWorkerBridge(
      port.sendPort.nativePort,
    );
    bridge = context.runtime.getGlobal('__flaxNativeWorker') as FlaxJsObject;
  }
  final FlaxHostContext context;
  final void Function(int, String, List<String>) deliver;
  final FlaxModuleSource? Function(Uri) loadBlob;
  late final RawReceivePort port;
  late final FlaxJsObject bridge;
  final workers = <int, _DedicatedWorker>{};
  bool closed = false;
  bool retiring = false;
  final finished = Completer<void>();
  Future<_WorkerSetup>? _setup;

  Future<_WorkerSetup> configuration() => _setup ??= _loadConfiguration();
  Future<_WorkerSetup> _loadConfiguration() async {
    if (context case final _WorkerHostContext host) return host.setup;
    final session = (context as _HostContext).session;
    final providers = session.sandbox == null
        ? session._hostInstallations
              .map((value) => value.instance)
              .whereType<FlaxWorkerPluginInstance>()
              .toList()
        : const <FlaxWorkerPluginInstance>[];
    if (providers.isEmpty) {
      return (
        sources: const <(String, String)>[],
        modules: const <(String, Map<String, Object?>)>[],
        importModules: const <String>{},
        nativeAssets: const <String>{},
      );
    }
    final importModules = {
      for (final provider in providers)
        if (provider case final FlaxWorkerModuleExports exports)
          ...exports.workerImportModules,
    };
    return (
      sources: session._moduleInstallation!.workerSources({
        for (final provider in providers) provider.workerModule,
        ...importModules,
      }),
      modules: [
        for (final provider in providers)
          (provider.workerModule, await provider.workerConfiguration),
      ],
      importModules: importModules,
      nativeAssets: {
        for (final provider in providers) ...provider.workerNativeAssets,
      },
    );
  }

  int create() {
    if (closed) throw StateError('FlaxSessionClosed');
    final open = bridge.getProperty('open') as FlaxJsFunction;
    try {
      final id = (open.call(const []) as FlaxJsNumber).value.toInt();
      workers[id] = _DedicatedWorker();
      return id;
    } finally {
      open.release();
    }
  }

  FlaxPermissionLease observe(
    _DedicatedWorker worker,
    String key,
    FlaxPermissionLease Function() create,
  ) {
    if (closed || worker.terminated || worker.exited) {
      throw StateError('Worker is closed');
    }
    final lease = worker.permissions.putIfAbsent(key, () {
      final lease = create();
      lease.onRevoke(() {
        final id = workers.entries
            .where((entry) => identical(entry.value, worker))
            .firstOrNull
            ?.key;
        if (id != null) terminate(id);
      });
      return lease;
    });
    lease.requireActive();
    return lease;
  }

  void authorizeSource(_DedicatedWorker worker, Uri uri, FlaxModuleKind? kind) {
    if (closed || worker.terminated || worker.exited) {
      throw StateError('Worker is closed');
    }
    final session = (context as _HostContext).session;
    session.authorizeModule(
      uri,
      kind,
      retain: (key, create) {
        observe(worker, key, create);
      },
    );
  }

  Future<FlaxModuleSource> loadSource(
    _DedicatedWorker worker,
    Uri uri,
    FlaxModuleKind? kind, {
    Future<void>? cancelled,
    bool module = true,
  }) async {
    void checkResource(Uri uri) {
      if (closed ||
          worker.terminated ||
          worker.exited ||
          context.isClosing ||
          !context.isActive ||
          context.permissions?.isOpen == false) {
        throw StateError('Worker is closed');
      }
      if (!{'flax', 'file', 'blob'}.contains(uri.scheme) ||
          uri.userInfo.isNotEmpty) {
        throw UnsupportedError(
          'Worker resources require local URLs without credentials',
        );
      }
    }

    if (uri.userInfo.isNotEmpty) {
      throw ArgumentError('Worker module URL credentials are unsupported');
    }
    if (!module) checkResource(uri);
    final request = FlaxModuleRequest(
      uri: uri,
      expectedKind: kind,
      cancelled: cancelled ?? worker.cancelled.future,
      authorize: !module
          ? checkResource
          : context is _HostContext
          ? (uri) => authorizeSource(worker, uri, kind)
          : null,
    );
    final FlaxModuleSource result;
    if (context case final _WorkerHostContext host) {
      result = await host.loadSource(request, module: module);
    } else {
      if (module) authorizeSource(worker, uri, kind);
      final source = uri.scheme == 'blob' ? loadBlob(uri) : null;
      final session = (context as _HostContext).session;
      result =
          source ??
          await (session._moduleLoader?.loadSource ??
              FlaxApplication.loadRemoteModule)(request);
      if (module) authorizeSource(worker, result.uri, result.kind);
    }
    if (!module) checkResource(result.uri);
    return result;
  }

  void retire(_DedicatedWorker worker) {
    final frame = worker.frameHandle;
    if (frame != null) {
      SchedulerBinding.instance.cancelFrameCallbackWithId(frame);
    }
    worker.frameHandle = null;
    for (final fetch in worker.fetches.values) {
      fetch.dispose();
    }
    worker.fetches.clear();
    for (final lease in worker.permissions.values) {
      lease.close();
    }
    worker.permissions.clear();
  }

  Future<void> load(int id, String url, String type, String name) async {
    final worker = workers[id];
    if (closed || worker == null || worker.terminated) return;
    try {
      final source = await loadSource(
        worker,
        Uri.parse(url),
        FlaxModuleKind.javascript,
      );
      if (source.kind != FlaxModuleKind.javascript) {
        throw StateError('Worker entry must be JavaScript');
      }
      _start(id, source.uri.toString(), type, name, utf8.decode(source.bytes));
    } catch (error) {
      if (!closed && !worker.terminated) {
        _finishStartup(id, worker, [error.toString(), url]);
      }
    }
  }

  Future<void> _start(
    int id,
    String url,
    String type,
    String name,
    String source,
  ) async {
    final worker = workers[id];
    if (closed || worker == null || worker.terminated || worker.started) return;
    String? wasmDenied;
    if (context case final _WorkerHostContext host) {
      wasmDenied = host.wasmDenied;
    } else {
      try {
        final session = (context as _HostContext).session;
        observe(
          worker,
          'wasm',
          () =>
              session.permissions.lease('flax.wasm', operation: 'WebAssembly'),
        );
      } on FlaxPermissionException catch (error) {
        wasmDenied = jsonEncode(error.toJson());
      }
    }
    worker.started = true;
    late _WorkerSetup setup;
    try {
      setup = await Future.any<_WorkerSetup>([
        configuration(),
        worker.cancelled.future.then<_WorkerSetup>(
          (_) => throw StateError('Worker is closed'),
        ),
      ]);
    } catch (error) {
      _finishStartup(id, worker, [error.toString(), url]);
      return;
    }
    if (closed || worker.terminated) {
      _finishStartup(id, worker);
      return;
    }
    worker.exit = RawReceivePort((dynamic _) {
      // onExit follows native disposal in the worker's finally block.
      worker.exit?.close();
      _enqueueFinish(id);
      if (!worker.cancelled.isCompleted) worker.cancelled.complete();
      worker.exited = true;
      worker.control = null;
      retire(worker);
      workers.remove(id);
      finishClose();
    }, 'Flax Dedicated Worker exit')..keepIsolateAlive = false;
    Isolate.spawn(
      _runDedicatedWorker,
      (
        id,
        url,
        type,
        name,
        source,
        wasmDenied,
        port.sendPort,
        switch (context) {
          _WorkerHostContext host => host.imports,
          _HostContext host =>
            host.session._moduleLoader?.imports ?? const <String, Uri>{},
          _ => const <String, Uri>{},
        },
        setup,
      ),
      debugName: name.isEmpty ? 'Flax Dedicated Worker $id' : name,
      onExit: worker.exit!.sendPort,
    ).then(
      (_) {},
      onError: (Object error, StackTrace stack) {
        _finishStartup(id, worker, [error.toString()]);
      },
    );
  }

  void _finishStartup(
    int id,
    _DedicatedWorker worker, [
    List<String>? details,
  ]) {
    if (!identical(workers[id], worker)) return;
    final error = worker.terminated ? null : details;
    worker.exit?.close();
    worker.exited = true;
    if (worker.terminated) {
      retire(worker);
      workers.remove(id);
    } else {
      terminate(id);
    }
    finishClose();
    _enqueueFinish(id, error);
  }

  void _enqueueFinish(int id, [List<String>? error]) {
    if (closed || context.isClosing) return;
    context.enqueue(() {
      if (closed || context.isClosing) return;
      try {
        if (error != null) deliver(id, 'error', error);
      } finally {
        if (!closed && !context.isClosing) deliver(id, 'finish', const []);
      }
    });
  }

  void receive(dynamic value) {
    if (value is int) {
      // Negative native tickets wake MessagePorts, including during Worker startup.
      bool active() =>
          !closed && (value < 0 || workers[value]?.terminated == false);
      if (active()) {
        context.enqueue(() {
          if (active()) {
            deliver(value, 'message', const []);
          }
        });
      }
      return;
    }
    if (value is! List || value.length < 3) return;
    final id = value[0] as int;
    final worker = workers[id];
    if (worker == null) return;
    if (value[1] == 'control') {
      worker.control = value[2] as SendPort;
      if (closed || worker.terminated) worker.control!.send('stop');
    } else if (value[1] == 'raf' && !closed && !worker.terminated) {
      if (worker.framePending) return;
      worker.framePending = true;
      void send(double time) {
        worker.framePending = false;
        worker.frameHandle = null;
        if (!closed && !worker.terminated) worker.control?.send(['raf', time]);
      }

      if (context case final _WorkerHostContext host) {
        host.scheduleFrame(send);
      } else {
        worker.frameHandle = SchedulerBinding.instance.scheduleFrameCallback(
          (time) => send(time.inMicroseconds / 1000),
        );
      }
    } else if (value[1] == 'provider' && !closed && !worker.terminated) {
      final module = value[2] as String;
      final operation = value[3] as String;
      final arguments = (value[4] as List).cast<Object?>();
      if (context case final _WorkerHostContext host) {
        host.providerMessage(module, operation, arguments);
      } else {
        final session = (context as _HostContext).session;
        if (session.sandbox != null) return;
        final provider = session._hostInstallations
            .map((value) => value.instance)
            .whereType<FlaxWorkerPluginInstance>()
            .where((value) => value.workerModule == module)
            .firstOrNull;
        if (provider != null) {
          context.enqueue(() => provider.workerMessage(operation, arguments));
        }
      }
    } else if (value[1] == 'cancelLoad') {
      final pending = worker.loads.remove(value[2]);
      if (pending != null && !pending.isCompleted) pending.complete();
    } else if (value[1] == 'load' && !closed && !worker.terminated) {
      unawaited(() async {
        final token = value[2] as int;
        final cancelled = Completer<void>();
        worker.loads[token] = cancelled;
        try {
          final source = await loadSource(
            worker,
            Uri.parse(value[3] as String),
            value[4] == null ? null : FlaxModuleKind.values[value[4] as int],
            cancelled: cancelled.future,
            module: value.length < 6 || value[5] == true,
          );
          if (!closed && !worker.terminated && !cancelled.isCompleted) {
            worker.control?.send([
              'source',
              token,
              source.uri.toString(),
              source.kind.index,
              TransferableTypedData.fromList([source.bytes]),
              _workerSourceTypes[source],
            ]);
          }
        } catch (error) {
          if (!closed && !worker.terminated && !cancelled.isCompleted) {
            worker.control?.send(['source', token, _workerErrorData(error)]);
          }
        } finally {
          worker.loads.remove(token);
        }
      }());
    } else if (value[1] == 'fetch' && !closed && !worker.terminated) {
      final token = value[2] as int;
      final origin = value[3] as int;
      final operation = value[4] as String;
      final requestId = value[5] as int;
      final input = value[6] is TransferableTypedData
          ? (value[6] as TransferableTypedData).materialize().asUint8List()
          : value[6];
      void settle(int token, bool ok, Object? result) {
        if (!closed && !worker.terminated) {
          worker.control?.send([
            'fetch',
            token,
            ok,
            result is Uint8List
                ? TransferableTypedData.fromList([result])
                : result,
          ]);
        }
      }

      if (context case final _WorkerHostContext host) {
        host
            .fetch(origin, operation, requestId, input)
            .then(
              (result) => settle(token, true, result),
              onError: (Object error) =>
                  settle(token, false, _workerErrorData(error)),
            );
      } else {
        final fetch = worker.fetches.putIfAbsent(
          origin,
          () => _FetchHost(
            context,
            null,
            onSettled: settle,
            observeNetwork: (uri) => observe(
              worker,
              'network:${FlaxOriginPermissionScope.origin(uri)}',
              () => context.permissions!.network(uri),
            ),
          ),
        );
        try {
          fetch.dispatch(operation, token, requestId, input);
        } catch (error) {
          settle(token, false, _workerErrorData(error));
        }
      }
    } else if (value[1] == 'fetchClose') {
      final origin = value[2] as int;
      if (context case final _WorkerHostContext host) {
        host.closeFetch(origin);
      } else {
        worker.fetches.remove(origin)?.dispose();
      }
    } else if (value[1] == 'error' && !closed && !worker.terminated) {
      final details = value.skip(2).cast<String>().toList();
      context.enqueue(() {
        if (!closed && !worker.terminated) deliver(id, 'error', details);
      });
    }
  }

  void terminate(int id) {
    final worker = workers[id];
    if (worker == null || worker.terminated) return;
    worker.terminated = true;
    if (!worker.cancelled.isCompleted) worker.cancelled.complete();
    for (final pending in worker.loads.values) {
      if (!pending.isCompleted) pending.complete();
    }
    worker.loads.clear();
    (context.runtime as FlaxNativeJsRuntime).interruptWorker(id);
    worker.control?.send('stop');
    for (final fetch in worker.fetches.values) {
      fetch.close();
    }
    if (context case final _WorkerHostContext host) host.closeFetch(id);
    if (!worker.started || worker.exited) {
      retire(worker);
      workers.remove(id);
      if (!worker.exited) _enqueueFinish(id);
    }
  }

  void close() {
    if (closed) return;
    closed = true;
    for (final id in workers.keys.toList()) {
      terminate(id);
    }
    if (workers.isNotEmpty && context is _HostContext) {
      retiring = true;
      (context as _HostContext).session._nativeRetirements++;
    }
    bridge.release();
    finishClose();
  }

  void finishClose() {
    if (!closed || workers.isNotEmpty) return;
    port.close();
    if (!finished.isCompleted) finished.complete();
    if (retiring) {
      retiring = false;
      (context as _HostContext).session._nativeRetirements--;
      context.requestCheckpoint();
    }
  }
}

// Isolate.spawn keeps this carrier in the parent's isolate group. Only immutable
// startup strings and control messages cross Dart; JS payloads stay native.
Future<void> _runDedicatedWorker(
  (
    int,
    String,
    String,
    String,
    String,
    String?,
    SendPort,
    Map<String, Uri>,
    _WorkerSetup,
  )
  input,
) async {
  final (id, url, type, name, source, wasmDenied, parent, imports, setup) =
      input;
  final context = _WorkerHostContext(
    id,
    parent,
    url,
    imports,
    wasmDenied,
    setup,
  );
  parent.send([id, 'control', context.port.sendPort]);
  try {
    context._runtime = createDetachedWorkerRuntime();
    context.runtime.attachWorker(id, context.port.sendPort.nativePort);
    context.runtime.installWorkerBridge(context.port.sendPort.nativePort);
    context.runtime.setHostJobHandler(context.requestCheckpoint);
    context.base = _BaseHost(
      context,
      url,
      workerId: id,
      workerName: name,
      workerType: type,
      workerNativeAssets: setup.nativeAssets,
    )..install();
    for (final (source, url) in setup.sources) {
      _releaseJs(context.evaluate(source, sourceUrl: url));
    }
    for (final (module, configuration) in setup.modules) {
      final value = context.evaluate(
        'globalThis.__flaxModules.require(${jsonEncode(module)}).installWorker('
        'globalThis, ${jsonEncode(configuration)})',
        sourceUrl: 'flax:worker-provider',
      );
      if (value is FlaxJsObject) context.providers.add(value);
    }
    _installWasmPermissionGuard(context.runtime, context.requireWasm);
    if (type == 'module') {
      context.modules = FlaxModuleLoader(
        runtime: context.runtime,
        imports: imports,
        loadSource: context.loadSource,
        hostModule: setup.importModules.isEmpty
            ? null
            : context.moduleNamespace,
        onError: context.report,
        authorize: (_, kind) {
          if (context.isClosing) throw StateError('Worker is closed');
          if (kind == FlaxModuleKind.wasm) context.requireWasm();
        },
        encodeError: (error, _) => context.runtime.evaluate(
          'Object.assign(new Error(${jsonEncode(error.toString())}), '
          '${jsonEncode(error is FlaxPermissionException ? error.toJson() : const <String, Object?>{})})',
        ),
      );
      await context.modules!.start(
        FlaxModuleSource(
          uri: Uri.parse(url),
          kind: FlaxModuleKind.javascript,
          bytes: Uint8List.fromList(utf8.encode(source)),
        ),
      );
    } else {
      _releaseJs(context.evaluate(source, sourceUrl: url));
    }
    context.ready = true;
    while (!context.isClosing && context.pendingMessages > 0) {
      context.pendingMessages--;
      context.enqueue(context._deliverMessage);
    }
    context.requestCheckpoint();
  } catch (error, stack) {
    if (!context.isClosing) context.report(error, stack);
    context.close();
  }
}

class _WorkerHostContext extends FlaxHostContext {
  _WorkerHostContext(
    this.id,
    this.parent,
    this.scriptUrl,
    this.imports,
    this.wasmDenied,
    this.setup,
  ) {
    port = RawReceivePort((dynamic message) {
      if (message is List && message.first == 'raf') {
        if (closing) return;
        final callbacks = frames.toList();
        frames.clear();
        for (final callback in callbacks) {
          enqueue(() => callback(message[1] as double));
        }
        return;
      }
      if (message is List && message.first == 'source') {
        final pending = loads.remove(message[1]);
        if (pending == null) return;
        if (message.length == 3) {
          pending.completeError(_workerError(message[2]));
        } else {
          final source = FlaxModuleSource(
            uri: Uri.parse(message[2] as String),
            kind: FlaxModuleKind.values[message[3] as int],
            bytes: (message[4] as TransferableTypedData)
                .materialize()
                .asUint8List(),
          );
          if (message.length > 5 && message[5] is String) {
            _workerSourceTypes[source] = message[5] as String;
          }
          pending.complete(source);
        }
        return;
      }
      if (message is List && message.first == 'fetch') {
        final pending = fetches.remove(message[1]);
        if (pending != null) {
          final value = message[3] is TransferableTypedData
              ? (message[3] as TransferableTypedData)
                    .materialize()
                    .asUint8List()
              : message[3];
          if (message[2] == true) {
            pending.complete(value);
          } else {
            pending.completeError(_workerError(value));
          }
        }
        return;
      }
      if (message == 'stop' || message == 0) {
        close();
        return;
      }
      if (message is int && !isClosing) {
        if (ready) {
          enqueue(_deliverMessage);
        } else {
          pendingMessages++;
          requestCheckpoint();
        }
      }
    }, 'Flax Dedicated Worker tasks');
  }
  final int id;
  final SendPort parent;
  final String scriptUrl;
  final String? wasmDenied;
  final _WorkerSetup setup;
  final frames = <void Function(double)>[];
  final providerMessages = <(String, String, Object?), List<Object?>>{};
  bool providerMessagesQueued = false;
  void providerMessage(
    String module,
    String operation,
    List<Object?> arguments,
  ) {
    if (closing) return;
    if (!setup.modules.any((entry) => entry.$1 == module)) {
      throw StateError('Worker provider was not selected: $module');
    }
    providerMessages[(module, operation, arguments.firstOrNull)] = arguments;
    if (providerMessagesQueued) return;
    providerMessagesQueued = true;
    enqueue(() {
      providerMessagesQueued = false;
      final messages = Map.of(providerMessages);
      providerMessages.clear();
      for (final entry in messages.entries) {
        parent.send([id, 'provider', entry.key.$1, entry.key.$2, entry.value]);
      }
    });
  }

  final providers = <FlaxJsObject>[];
  void scheduleFrame(void Function(double) callback) {
    if (closing) return;
    frames.add(callback);
    if (frames.length == 1) parent.send([id, 'raf', null]);
  }

  void requireWasm() {
    if (closing) throw StateError('Worker is closed');
    if (wasmDenied != null) throw _workerError(jsonDecode(wasmDenied!));
  }

  final fetches = <int, Completer<Object?>>{};
  Future<Object?> fetch(
    int origin,
    String operation,
    int requestId,
    Object? input,
  ) {
    if (closing) return Future.error(StateError('Worker is closed'));
    final token = ++nextLoad;
    final result = Completer<Object?>();
    if (operation != 'abort') fetches[token] = result;
    parent.send([
      id,
      'fetch',
      token,
      origin,
      operation,
      requestId,
      input is Uint8List ? TransferableTypedData.fromList([input]) : input,
    ]);
    if (operation == 'abort') result.complete(null);
    return result.future;
  }

  void closeFetch(int origin) => parent.send([id, 'fetchClose', origin]);
  final Map<String, Uri> imports;
  late final RawReceivePort port;
  FlaxNativeJsRuntime? _runtime;
  @override
  FlaxNativeJsRuntime get runtime => _runtime!;
  _BaseHost? base;
  FlaxModuleLoader? modules;
  final loads = <int, Completer<FlaxModuleSource>>{};
  final resources = <int, Completer<void>>{};
  int nextLoad = 0;
  bool ready = false,
      scheduled = false,
      flushing = false,
      closing = false,
      disposed = false;
  // Entry initialization can await host tasks before buffered messages may run.
  int pendingMessages = 0;
  final tasks = Queue<void Function()>();
  final results = <FlaxJsObject>[];
  Future<void> loadResource(int token, String url) async {
    final cancelled = Completer<void>();
    resources[token] = cancelled;
    try {
      final source = await loadSource(
        FlaxModuleRequest(
          uri: Uri.parse(url),
          expectedKind: null,
          cancelled: cancelled.future,
        ),
        module: false,
      );
      if (closing || cancelled.isCompleted) return;
      enqueue(() {
        final bytes = runtime.createArrayBuffer(source.bytes);
        try {
          base!._call('workerResourceSettled', [
            FlaxJsNumber(token.toDouble()),
            const FlaxJsBoolean(true),
            bytes,
            FlaxJsString(source.uri.toString()),
            FlaxJsString(
              _workerSourceTypes[source] ??
                  switch (source.kind) {
                    FlaxModuleKind.wasm => 'application/wasm',
                    FlaxModuleKind.json => 'application/json',
                    FlaxModuleKind.javascript => 'application/javascript',
                  },
            ),
          ]);
        } finally {
          bytes.release();
        }
      });
    } catch (error) {
      if (closing || cancelled.isCompleted) return;
      enqueue(
        () => base!._call('workerResourceSettled', [
          FlaxJsNumber(token.toDouble()),
          const FlaxJsBoolean(false),
          FlaxJsString(error.toString()),
          FlaxJsString(url),
          const FlaxJsString(''),
        ]),
      );
    } finally {
      resources.remove(token);
    }
  }

  void cancelResource(int token) {
    final pending = resources.remove(token);
    if (pending != null && !pending.isCompleted) pending.complete();
  }

  Future<FlaxModuleSource> loadSource(
    FlaxModuleRequest request, {
    bool module = true,
  }) async {
    if (closing) throw StateError('Worker is closed');
    if (request.uri.scheme == 'data') {
      return FlaxModuleSource(
        uri: request.uri,
        kind: request.expectedKind ?? FlaxModuleKind.javascript,
        bytes: request.uri.data!.contentAsBytes(),
      );
    }
    if (request.uri.scheme == 'blob') {
      final source = base!._blobSource(request.uri);
      if (source != null) return source;
    }
    if (![
      'http',
      'https',
      'flax',
      'file',
      'blob',
    ].contains(request.uri.scheme)) {
      throw UnsupportedError('Unsupported Worker module URL: ${request.uri}');
    }
    final token = ++nextLoad;
    final result = Completer<FlaxModuleSource>();
    loads[token] = result;
    request.cancelled.then((_) {
      final pending = loads.remove(token);
      if (pending == null) return;
      parent.send([id, 'cancelLoad', token]);
      pending.completeError(StateError('Worker module cancelled'));
    });
    parent.send([
      id,
      'load',
      token,
      request.uri.toString(),
      request.expectedKind?.index,
      module,
    ]);
    return result.future;
  }

  FlaxJsObject? moduleNamespace(String specifier) {
    if (closing || !setup.importModules.contains(specifier)) return null;
    final registry = runtime.getGlobal('__flaxModules') as FlaxJsObject;
    try {
      return _requirePreparedModule(registry, specifier);
    } finally {
      registry.release();
    }
  }

  @override
  String? get namespace => null;
  @override
  List<FlaxBindingModule> get bindingModules => const [];
  @override
  bool get isClosing => closing;
  @override
  bool get isActive => !disposed;
  @override
  void registerFunction(
    String name,
    FlaxJsHostFunction callback, {
    bool allowClosing = false,
  }) {
    runtime.registerHostFunction(name, (receiver, arguments) {
      if (closing && !allowClosing) throw StateError('Worker is closed');
      try {
        return callback(receiver, arguments);
      } finally {
        requestCheckpoint();
      }
    });
  }

  @override
  FlaxJsValue evaluate(String source, {String sourceUrl = 'flax:worker'}) {
    try {
      return runtime.evaluate(source, sourceUrl: sourceUrl);
    } finally {
      requestCheckpoint();
    }
  }

  void _deliverMessage() {
    base!._call('workerMessage', [FlaxJsNumber(id.toDouble())]);
  }

  @override
  void enqueue(void Function() action) {
    if (closing) return;
    tasks.add(action);
    requestCheckpoint();
  }

  @override
  void requestCheckpoint() {
    if (closing || scheduled || flushing) return;
    scheduled = true;
    Timer.run(flush);
  }

  void flush() {
    scheduled = false;
    if (closing || flushing) return;
    flushing = true;
    try {
      // New checkpoint work yields to Dart ports before the next flush.
      var remainingTasks = tasks.length;
      do {
        if (remainingTasks > 0) {
          tasks.removeFirst()();
          remainingTasks--;
        }
        runtime.drainMicrotasks();
        if (!closing) base!._call('workerRejections', const []);
        if (!closing) runtime.drainMicrotasks();
      } while (!closing && remainingTasks > 0);
      if (!closing) base?.presentCanvases();
    } catch (error, stack) {
      if (!closing) report(error, stack);
      close();
    } finally {
      for (final result in results) {
        result.release();
      }
      results.clear();
      flushing = false;
      if (!closing && tasks.isNotEmpty) {
        requestCheckpoint();
      }
    }
  }

  @override
  void report(Object error, StackTrace stack) {
    if (!closing) {
      parent.send([
        id,
        'error',
        error is FlaxJsException ? error.message : error.toString(),
        scriptUrl,
        '0',
        '0',
        error is FlaxJsException ? error.jsStack : stack.toString(),
      ]);
    }
  }

  @override
  FlaxJsObject exposeObject(Object value, String typeId) =>
      throw UnsupportedError('Workers have no Flutter object peers');
  @override
  T requireObject<T>(FlaxJsValue value, String typeId) =>
      throw UnsupportedError('Workers have no Flutter object peers');
  void close() {
    if (closing) return;
    closing = true;
    frames.clear();
    providerMessages.clear();
    for (final token in resources.keys.toList()) {
      cancelResource(token);
    }
    Timer.run(() async {
      if (disposed) return;
      tasks.clear();
      try {
        try {
          base?.close();
        } finally {
          try {
            await base?._workers?.finished.future;
          } finally {
            for (final pending in loads.values) {
              pending.completeError(StateError('Worker is closed'));
            }
            loads.clear();
            for (final pending in fetches.values) {
              pending.completeError(StateError('Worker is closed'));
            }
            fetches.clear();
            closeFetch(id);
          }
        }
      } finally {
        try {
          // Destroy the independent isolate without running application teardown hooks.
          while (_runtime != null && !_runtime!.retireNativeFfi()) {
            await Future<void>.delayed(const Duration(milliseconds: 1));
          }
          _runtime?.dispose();
          providers.clear();
          try {
            modules?.close();
          } finally {
            base?.dispose();
          }
        } finally {
          disposed = _runtime?.isDisposed ?? true;
          port.close();
        }
      }
    });
  }
}

Object _workerErrorData(Object error) =>
    error is FlaxPermissionException ? error.toJson() : error.toString();
Object _workerError(Object? value) =>
    value is Map && value['code'] == FlaxPermissionException.deniedCode
    ? FlaxPermissionException(
        permission: value['permission'] as String,
        operation: value['operation'] as String,
        reason: value['reason'] as String,
      )
    : StateError(value.toString());
