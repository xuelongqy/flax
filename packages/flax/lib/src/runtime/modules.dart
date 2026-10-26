import 'dart:async';
import 'dart:collection';
import 'dart:convert';
import 'dart:typed_data';

import 'api.dart';

enum FlaxModuleKind { javascript, json, wasm }

/// Immutable source bytes; module state is owned by each loader, not by this value.
final class FlaxModuleSource {
  FlaxModuleSource({
    required this.uri,
    required this.kind,
    required Uint8List bytes,
  }) : bytes = Uint8List.fromList(bytes).asUnmodifiableView();

  final Uri uri;
  final FlaxModuleKind kind;
  final Uint8List bytes;
}

final class FlaxModuleRequest {
  const FlaxModuleRequest({
    required this.uri,
    required this.expectedKind,
    required this.cancelled,
  });

  final Uri uri;
  final FlaxModuleKind? expectedKind;
  final Future<void> cancelled;
}

typedef FlaxModuleSourceLoader = Future<FlaxModuleSource> Function(
  FlaxModuleRequest request,
);

/// Owns one native module graph. Close before disposing its runtime.
/// Returned namespaces/module sources are owned references and must be released.
final class FlaxModuleLoader {
  FlaxModuleLoader({
    required this.runtime,
    required this.loadSource,
    Map<String, Uri> imports = const {},
    this.hostModule,
    this.onError,
  }) : imports = Map.unmodifiable(imports) {
    if (runtime is! FlaxJsModuleRuntime ||
        ((runtime as FlaxJsModuleRuntime).moduleCapabilities & 1) == 0) {
      throw UnsupportedError('This engine does not support native ESM');
    }
    final name = '__flaxModuleBridge${_nextBridge++}';
    runtime.registerHostFunction(name, _dispatch);
    final callback = runtime.getGlobal(name) as FlaxJsFunction;
    final factory = runtime.evaluate(
      _bridgeSource,
      sourceUrl: 'flax:module-bridge',
    ) as FlaxJsFunction;
    final global = runtime.evaluate('globalThis') as FlaxJsObject;
    try {
      _helper = factory.call([callback]) as FlaxJsObject;
      final importer = _helper!.getProperty('importer') as FlaxJsFunction;
      try {
        final weak = WeakReference(this);
        _controller = (runtime as FlaxJsModuleRuntime).installModuleLoader(
          importer,
          onWakeup: () => weak.target?._checkpoint(),
        );
      } finally {
        importer.release();
      }
    } catch (_) {
      _helper?.release();
      rethrow;
    } finally {
      global.setProperty(name, const FlaxJsUndefined());
      global.release();
      callback.release();
      factory.release();
    }
  }

  final FlaxJsRuntime runtime;
  final FlaxModuleSourceLoader loadSource;
  final Map<String, Uri> imports;

  /// Returns an owned reference to an installed SDK namespace, or null.
  final FlaxJsObject? Function(String specifier)? hostModule;
  final void Function(Object error, StackTrace stack)? onError;
  static int _nextBridge = 0;
  FlaxJsObject? _controller;
  FlaxJsObject? _helper;
  final _cancelled = Completer<void>();
  final _loads = <(Uri, FlaxModuleKind?), Future<_ModuleNode>>{};
  final _nodes = <String, _ModuleNode>{};
  final _evaluations = <(String, bool), Future<FlaxJsObject>>{};
  final _evaluationValues = <FlaxJsObject>[];
  final _promises = <int, Completer<FlaxJsValue>>{};
  final _nativeErrors = <FlaxJsException, FlaxJsObject>{};
  final _imports = <_ModuleImport>{};
  final _fetchQueue = Queue<Completer<void>>();
  int _activeFetches = 0;
  int _bytes = 0;
  int _nextPromise = 0;
  bool _closed = false;
  bool _started = false;

  Future<void> get cancelled => _cancelled.future;

  /// Starts a native ESM application. Graphs without dependencies or top-level
  /// await execute immediately; other entries complete asynchronously.
  FutureOr<void> start(FlaxModuleSource entry) {
    _check();
    if (_started) throw StateError('The application entry was already started');
    if (entry.kind != FlaxModuleKind.javascript) {
      throw ArgumentError('An application entry must be JavaScript ESM');
    }
    _started = true;
    final node = _compile(entry);
    _loads[(node.uri, null)] = Future.value(node);
    if (node.synchronous) {
      _release(
        _nativeCall('evaluate', [
          FlaxJsString(node.key),
          const FlaxJsNumber(0),
        ]),
      );
      return null;
    }
    return () async {
      await _graph(node);
      final namespace = await _evaluate(node, false);
      namespace.release();
    }();
  }

  void _check() {
    if (_closed || runtime.isDisposed) {
      throw StateError('Flax module loader is closed');
    }
  }

  void _capability(FlaxModuleKind kind, bool sourcePhase) {
    final supported = (runtime as FlaxJsModuleRuntime).moduleCapabilities;
    if ((supported & (1 << kind.index)) == 0 ||
        sourcePhase && (supported & 8) == 0) {
      throw UnsupportedError(
        'Unsupported native module capability: ${kind.name}',
      );
    }
  }

  /// Evaluates the entry graph, including top-level await.
  Future<FlaxJsObject> load(FlaxModuleSource entry) async {
    _check();
    if (entry.kind != FlaxModuleKind.javascript) {
      throw ArgumentError('An application entry must be JavaScript ESM');
    }
    final key = (entry.uri.normalizePath(), null);
    if (!_loads.containsKey(key) && _loads.length >= 256) {
      throw StateError('Module request limit exceeded');
    }
    // Failed compilation has the same per-URL lifetime as a successful module.
    final node = await _loads.putIfAbsent(key, () async => _compile(entry));
    if (node.kind != FlaxModuleKind.javascript) {
      throw FormatException('Module type mismatch for ${entry.uri.path}');
    }
    await _graph(node);
    return _evaluate(node, false);
  }

  Future<FlaxJsObject> importModule(
    Uri uri, {
    FlaxModuleKind? kind,
    bool sourcePhase = false,
  }) async {
    _check();
    if (sourcePhase) {
      if (kind != null && kind != FlaxModuleKind.wasm) {
        throw ArgumentError('Only Wasm supports source imports');
      }
      _capability(FlaxModuleKind.wasm, true);
    }
    final node = await _fetch(
      uri.normalizePath(),
      sourcePhase ? FlaxModuleKind.wasm : kind,
    );
    if (!sourcePhase) await _graph(node);
    return _evaluate(node, sourcePhase);
  }

  Future<_ModuleNode> _fetch(Uri uri, FlaxModuleKind? expected) {
    _check();
    if (expected != null) _capability(expected, false);
    final loadKind = expected == FlaxModuleKind.json ? expected : null;
    final key = (uri, loadKind);
    if (!_loads.containsKey(key) && _loads.length >= 256) {
      throw StateError('Module request limit exceeded');
    }
    return _loads
        .putIfAbsent(key, () async {
          _check();
          if (!{'http', 'https', 'file', 'flax'}.contains(uri.scheme) ||
              uri.userInfo.isNotEmpty) {
            throw ArgumentError('Unsupported module URL: ${uri.scheme}');
          }
          final slot = Completer<void>();
          if (_activeFetches < 8) {
            _activeFetches++;
            slot.complete();
          } else {
            _fetchQueue.add(slot);
          }
          await slot.future;
          final abort = Completer<void>();
          try {
            _check();
            final source =
                await Future.any([
                  loadSource(
                    FlaxModuleRequest(
                      uri: uri,
                      expectedKind: loadKind,
                      cancelled: Future.any([cancelled, abort.future]),
                    ),
                  ),
                  cancelled.then<FlaxModuleSource>(
                    (_) => throw StateError('Flax module loader is closed'),
                  ),
                ]).timeout(
                  const Duration(seconds: 30),
                  onTimeout: () {
                    abort.complete();
                    throw TimeoutException('Module request timed out');
                  },
                );
            _check();
            if (loadKind != null && source.kind != loadKind ||
                loadKind == null && source.kind == FlaxModuleKind.json) {
              throw FormatException('Module type mismatch for ${uri.path}');
            }
            if (uri.scheme == 'https' && source.uri.scheme != 'https' ||
                {'http', 'https'}.contains(uri.scheme) &&
                    !{'http', 'https'}.contains(source.uri.scheme)) {
              throw FormatException('Invalid module redirect');
            }
            final node = _compile(source);
            if (_loads.length < 256) {
              _loads.putIfAbsent((
                source.uri.normalizePath(),
                loadKind,
              ), () => Future.value(node));
            }
            return node;
          } finally {
            if (_fetchQueue.isEmpty) {
              _activeFetches--;
            } else {
              _fetchQueue.removeFirst().complete();
            }
          }
        })
        .then((node) {
          if (expected != null && node.kind != expected) {
            throw FormatException('Module type mismatch for ${uri.path}');
          }
          return node;
        });
  }

  _ModuleNode _compile(FlaxModuleSource source) {
    _check();
    _capability(source.kind, false);
    final uri = source.uri.normalizePath();
    if (!{'http', 'https', 'file', 'flax'}.contains(uri.scheme) ||
        uri.userInfo.isNotEmpty) {
      throw ArgumentError(
        'Expected an absolute module URL without credentials',
      );
    }
    final key = '${source.kind.name}:$uri';
    final cached = _nodes[key];
    if (cached != null) return cached;
    final limit = switch (source.kind) {
      FlaxModuleKind.javascript => 4 * 1024 * 1024,
      FlaxModuleKind.json => 1024 * 1024,
      FlaxModuleKind.wasm => 16 * 1024 * 1024,
    };
    if (source.bytes.length > limit ||
        _bytes + source.bytes.length > 64 * 1024 * 1024 ||
        _nodes.length >= 256) {
      throw StateError('Module byte or graph limit exceeded');
    }
    final input = source.kind == FlaxModuleKind.wasm
        ? runtime.createArrayBuffer(source.bytes)
        : FlaxJsString(utf8.decode(source.bytes));
    try {
      _bytes += source.bytes.length;
      final requests = _nativeCall('compile', [
        FlaxJsString(key),
        FlaxJsString(uri.toString()),
        FlaxJsNumber(source.kind.index.toDouble()),
        input,
        FlaxJsString(
          Uri(
            scheme: uri.scheme,
            host: uri.host,
            port: uri.hasPort ? uri.port : null,
            path: uri.path,
          ).toString(),
        ),
      ]) as FlaxJsObject;
      try {
        final asynchronous = requests.getProperty('async');
        final dependencies = _requests(requests);
        final node = _ModuleNode(
          key,
          uri,
          dependencies,
          kind: source.kind,
          synchronous:
              dependencies.isEmpty &&
              asynchronous is FlaxJsBoolean &&
              !asynchronous.value,
        );
        _nodes[key] = node;
        return node;
      } finally {
        requests.release();
      }
    } finally {
      _release(input);
    }
  }

  List<(String, String, bool)> _requests(FlaxJsObject list) {
    final length = (list.getProperty('length') as FlaxJsNumber).value.toInt();
    if (length > 256) throw StateError('Module dependency limit exceeded');
    return [
      for (var i = 0; i < length; i++)
        _request(list.getProperty('$i') as FlaxJsObject),
    ];
  }

  (String, String, bool) _request(FlaxJsObject item) {
    try {
      return (
        (item.getProperty('0') as FlaxJsString).value,
        (item.getProperty('1') as FlaxJsString).value,
        (item.getProperty('2') as FlaxJsNumber).value == 1,
      );
    } finally {
      item.release();
    }
  }

  Future<void> _graph(_ModuleNode root) {
    var expired = false;
    Future<void> visit() async {
      final queue = Queue<_ModuleNode>()..add(root);
      final visited = <String>{};
      while (queue.isNotEmpty) {
        _check();
        if (expired) throw TimeoutException('Module graph timed out');
        final parent = queue.removeFirst();
        if (!visited.add(parent.key)) continue;
        final children = await Future.wait([
          for (final (specifier, type, sourcePhase) in parent.requests)
            _dependency(parent.uri, specifier, type, sourcePhase),
        ]);
        _check();
        if (expired) throw TimeoutException('Module graph timed out');
        for (var i = 0; i < parent.requests.length; i++) {
          final (specifier, type, sourcePhase) = parent.requests[i];
          final child = children[i];
          _release(
            _nativeCall('bind', [
              FlaxJsString(parent.key),
              FlaxJsString(specifier),
              FlaxJsString(type),
              FlaxJsNumber(sourcePhase ? 1 : 0),
              FlaxJsString(child.key),
            ]),
          );
          if (!sourcePhase) queue.add(child);
        }
      }
    }

    return visit().timeout(
      const Duration(minutes: 2),
      onTimeout: () {
        expired = true;
        throw TimeoutException('Module graph timed out');
      },
    );
  }

  Future<_ModuleNode> _dependency(
    Uri referrer,
    String specifier,
    String type,
    bool sourcePhase,
  ) async {
    _check();
    if (type != '' && type != 'json') {
      throw FormatException('Unsupported import type');
    }
    if (sourcePhase && type.isNotEmpty) {
      throw FormatException('Invalid source import');
    }
    if (sourcePhase) _capability(FlaxModuleKind.wasm, true);
    final parsed = Uri.parse(specifier);
    final bare =
        !parsed.hasScheme &&
        !specifier.startsWith('./') &&
        !specifier.startsWith('../') &&
        !specifier.startsWith('/');
    if (bare && !imports.containsKey(specifier)) {
      if (type.isNotEmpty || sourcePhase) {
        throw FormatException(
          'Host modules require ordinary JavaScript imports',
        );
      }
      final key = 'host:$specifier';
      final cached = _nodes[key];
      if (cached != null) return cached;
      final exports = hostModule?.call(specifier);
      if (exports == null) {
        throw ArgumentError('Unresolved bare import: $specifier');
      }
      try {
        if (_nodes.length >= 256) {
          throw StateError('Module graph limit exceeded');
        }
        final uri = Uri(scheme: 'flax', path: 'host/$specifier');
        final requests = _call(_controller!, 'compile', [
          FlaxJsString(key),
          FlaxJsString(uri.toString()),
          const FlaxJsNumber(3),
          exports,
        ]);
        _release(requests);
        return _nodes[key] = _ModuleNode(key, uri, const []);
      } finally {
        exports.release();
      }
    }
    final uri = (bare ? imports[specifier]! : referrer.resolveUri(parsed))
        .normalizePath();
    if ({'http', 'https'}.contains(referrer.scheme) &&
        !{'http', 'https'}.contains(uri.scheme)) {
      throw ArgumentError('Remote modules cannot import local files');
    }
    if (referrer.scheme == 'https' && uri.scheme == 'http') {
      throw ArgumentError('HTTPS modules cannot import insecure HTTP modules');
    }
    return _fetch(
      uri,
      sourcePhase
          ? FlaxModuleKind.wasm
          : type == 'json'
          ? FlaxModuleKind.json
          : null,
    );
  }

  Future<FlaxJsObject> _evaluate(_ModuleNode node, bool sourcePhase) async {
    final value = await _evaluations.putIfAbsent(
      (node.key, sourcePhase),
      () async {
        final value = await _evaluateNative(node, sourcePhase);
        if (_closed) {
          value.release();
          throw StateError('Flax module loader is closed');
        }
        _evaluationValues.add(value);
        return value;
      },
    );
    _check();
    return value.retain();
  }

  Future<FlaxJsObject> _evaluateNative(
    _ModuleNode node,
    bool sourcePhase,
  ) async {
    _check();
    final promise = _nativeCall('evaluate', [
      FlaxJsString(node.key),
      FlaxJsNumber(sourcePhase ? 1 : 0),
    ]);
    try {
      final result = await _await(promise);
      if (sourcePhase) return result as FlaxJsObject;
      final wrapped = result as FlaxJsObject;
      try {
        return wrapped.getProperty('0') as FlaxJsObject;
      } finally {
        wrapped.release();
      }
    } finally {
      _release(promise);
    }
  }

  Future<FlaxJsValue> _await(FlaxJsValue promise) {
    _check();
    final id = _nextPromise++;
    final result = Completer<FlaxJsValue>();
    _promises[id] = result;
    try {
      _release(
        _call(_helper!, 'observe', [promise, FlaxJsNumber(id.toDouble())]),
      );
      runtime.drainMicrotasks();
    } catch (error, stack) {
      _promises.remove(id);
      result.completeError(error, stack);
    }
    return result.future;
  }

  FlaxJsValue _dispatch(FlaxJsValue _, List<FlaxJsValue> args) {
    if (_closed) return const FlaxJsUndefined();
    if (args.isEmpty || args[0] is! FlaxJsNumber) {
      throw ArgumentError('Invalid module event');
    }
    if ((args[0] as FlaxJsNumber).value == 1) {
      final id = (args[1] as FlaxJsNumber).value.toInt();
      final result = _promises.remove(id);
      if (result != null) {
        if ((args[2] as FlaxJsBoolean).value) {
          final value = args[3];
          result.complete(value is FlaxJsObject ? value.retain() : value);
        } else {
          final error = FlaxJsException(
            (args[4] as FlaxJsString).value,
            jsStack: (args[5] as FlaxJsString).value,
          );
          _nativeErrors[error] = (args[3] as FlaxJsObject).retain();
          result.completeError(error);
        }
      }
    } else {
      if (args.length != 7) throw ArgumentError('Invalid module import');
      final pending = _ModuleImport(
        (args[5] as FlaxJsFunction).retain() as FlaxJsFunction,
        (args[6] as FlaxJsFunction).retain() as FlaxJsFunction,
      );
      _imports.add(pending);
      unawaited(
        _dynamic(
          args[1] is FlaxJsString
              ? (args[1] as FlaxJsString).value
              : 'flax:anonymous',
          (args[2] as FlaxJsString).value,
          (args[3] as FlaxJsString).value,
          (args[4] as FlaxJsNumber).value == 1,
          pending,
        ),
      );
    }
    return const FlaxJsUndefined();
  }

  Future<void> _dynamic(
    String referrer,
    String specifier,
    String type,
    bool sourcePhase,
    _ModuleImport pending,
  ) async {
    try {
      final node = await _dependency(
        Uri.parse(referrer),
        specifier,
        type,
        sourcePhase,
      );
      if (!sourcePhase) await _graph(node);
      final result = await _evaluate(node, sourcePhase);
      try {
        if (!_closed) _release(pending.resolve.call([result]));
      } finally {
        result.release();
      }
    } catch (error) {
      if (!_closed) {
        final native = error is FlaxJsException ? _nativeErrors[error] : null;
        final value =
            native ??
            _call(_helper!, 'error', [FlaxJsString(error.toString())]);
        try {
          _release(pending.reject.call([value]));
        } finally {
          if (native == null) _release(value);
        }
      }
    } finally {
      _imports.remove(pending);
      pending.release();
      _checkpoint();
    }
  }

  void _checkpoint() {
    if (_closed) return;
    if (runtime.isDisposed) {
      close();
      return;
    }
    try {
      runtime.drainMicrotasks();
    } catch (error, stack) {
      final handler = onError;
      if (handler != null) {
        handler(error, stack);
      } else {
        Zone.current.handleUncaughtError(error, stack);
      }
    }
  }

  FlaxJsValue _call(
    FlaxJsObject object,
    String method,
    List<FlaxJsValue> args,
  ) {
    final function = object.getProperty(method) as FlaxJsFunction;
    try {
      return function.call(args, thisValue: object);
    } finally {
      function.release();
    }
  }

  FlaxJsValue _nativeCall(String method, List<FlaxJsValue> args) {
    try {
      return _call(_controller!, method, args);
    } on FlaxJsException catch (error) {
      if (!_closed) {
        final value = _call(_controller!, 'takeError', const []);
        if (value is FlaxJsObject) _nativeErrors[error] = value;
      }
      rethrow;
    }
  }

  static void _release(FlaxJsValue value) {
    if (value is FlaxJsObject) value.release();
  }

  void close() {
    if (_closed) return;
    _closed = true;
    _cancelled.complete();
    for (final slot in _fetchQueue) {
      slot.completeError(StateError('Flax module loader is closed'));
    }
    _fetchQueue.clear();
    for (final promise in _promises.values) {
      promise.completeError(StateError('Flax module loader is closed'));
    }
    _promises.clear();
    final helper = _helper;
    if (!runtime.isDisposed && helper != null) {
      final error = _call(helper, 'error', [
        const FlaxJsString('FlaxSessionClosed'),
      ]);
      try {
        for (final pending in _imports) {
          _release(pending.reject.call([error]));
        }
      } finally {
        _release(error);
      }
      _release(_call(_controller!, 'close', const []));
    }
    for (final pending in _imports) {
      pending.release();
    }
    _imports.clear();
    _controller?.release();
    _helper?.release();
    _controller = null;
    _helper = null;
    _nodes.clear();
    _loads.clear();
    _evaluations.clear();
    for (final value in _evaluationValues) {
      value.release();
    }
    _evaluationValues.clear();
    for (final error in _nativeErrors.values) {
      error.release();
    }
    _nativeErrors.clear();
  }
}

final class _ModuleNode {
  const _ModuleNode(
    this.key,
    this.uri,
    this.requests, {
    this.kind,
    this.synchronous = false,
  });
  final String key;
  final Uri uri;
  final List<(String, String, bool)> requests;
  final FlaxModuleKind? kind;
  final bool synchronous;
}

final class _ModuleImport {
  _ModuleImport(this.resolve, this.reject);
  final FlaxJsFunction resolve;
  final FlaxJsFunction reject;
  bool _released = false;
  void release() {
    if (_released) return;
    _released = true;
    resolve.release();
    reject.release();
  }
}

const _bridgeSource = r"""
(dispatch) => {
  const PromiseType = Promise, ErrorType = TypeError, stringify = String;
  return {
    importer: (referrer, specifier, type, phase) => new PromiseType((resolve, reject) =>
      dispatch(0, referrer, specifier, type, phase, resolve,
          boxed => reject(boxed[0]))),
    observe: (promise, id) => PromiseType.resolve(promise).then(
      value => dispatch(1, id, true, value),
      error => {
        let message = 'Module evaluation failed', stack = '';
        try { message = stringify(error); } catch {}
        try { stack = stringify(error?.stack ?? ''); } catch {}
        dispatch(1, id, false, [error], message, stack);
      }),
    error: message => [new ErrorType(message)],
  };
}
""";
