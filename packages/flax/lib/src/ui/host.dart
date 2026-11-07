part of '../../bindings.dart';

final _baseHostSource = FlaxJsSource(
  '($flaxBaseBootstrap)(globalThis, $flaxBaseBootstrapBridge)',
  sourceUrl: 'flax:base',
);
final _baseHostPreparation = FlaxJsSource(
  'globalThis.__flaxPreparedBase = $flaxBaseBootstrap',
  sourceUrl: 'flax:base-prepare',
);

/// Defaults used by subsequently created sessions in this Dart isolate.
abstract final class Flax {
  static List<FlaxPlugin> _plugins = const [];

  /// Scalar-only constructor timings for the isolated startup experiment.
  static void Function(String, bool)? traceForExperiment;

  /// Modules this application can provide to subsequently created sessions.
  ///
  /// Sessions snapshot this value when they are constructed. The assets remain
  /// immutable and may be reused by independent sessions.
  static FlaxModuleAssets? moduleAssets;

  /// Replaces the complete default list. An empty list restores the base host.
  static void registerPlugins(List<FlaxPlugin> plugins) {
    _plugins = _pluginSnapshot(plugins);
  }

  /// Registers a host-owned backend before constructing permission consumers.
  static void registerSecureStorage(FlaxSecureStorage storage) =>
      FlaxSecureStorageRegistry.register(storage);
}

// Initialize one declaration group at a time; the synchronous path still consumes all.
Iterable<FlaxBindingModule> get _defaultBindingModules sync* {
  yield flutterBindings;
  yield sdk_animationBindings;
  yield sdk_dart_uiBindings;
  yield sdk_dependenciesBindings;
  yield sdk_foundationBindings;
  yield sdk_gesturesBindings;
  yield sdk_paintingBindings;
  yield sdk_physicsBindings;
  yield sdk_renderingBindings;
  yield sdk_schedulerBindings;
  yield sdk_semanticsBindings;
  yield sdk_servicesBindings;
  yield sdk_widgetsBindings;
}

FlaxBindingRegistry _bindingsWithPlugins(
  FlaxBindingRegistry bindings,
  List<FlaxPlugin> plugins,
) {
  final modules = [...bindings.modules];
  modules.insertAll(0, [
    for (final defaults in _defaultBindingModules)
      if (!modules.any((module) => module.moduleId == defaults.moduleId))
        defaults,
  ]);
  for (final plugin in plugins) {
    for (final module in plugin.bindingModules) {
      final existing = modules
          .where((entry) => entry.moduleId == module.moduleId)
          .firstOrNull;
      if (existing == null) {
        modules.add(module);
      } else if (!identical(existing, module)) {
        throw ArgumentError('Conflicting binding module: ${module.moduleId}');
      }
    }
  }
  return FlaxBindingRegistry(modules);
}

List<FlaxPlugin> _pluginSnapshot(List<FlaxPlugin> plugins) {
  final ids = <String>{'flax.base'};
  for (final plugin in plugins) {
    if (plugin.id.isEmpty || !ids.add(plugin.id)) {
      throw ArgumentError('Duplicate or invalid Flax plugin: ${plugin.id}');
    }
  }
  return List<FlaxPlugin>.unmodifiable(plugins);
}

/// Immutable plugin configuration. Install creates resources for one session.
abstract class FlaxPlugin {
  const FlaxPlugin();
  String get id;
  Set<String> get globals;
  Set<String> get jsModules => const {};
  List<FlaxBindingModule> get bindingModules => const [];
  List<FlaxPermissionDefinition> get permissionDefinitions => const [];
  FlaxPluginInstance install(FlaxHostContext context);
}

/// Installs generated bindings and prepared JS modules without host resources.
final class FlaxBindingPlugin extends FlaxPlugin {
  FlaxBindingPlugin({
    required this.id,
    required List<FlaxBindingModule> bindingModules,
    required Set<String> jsModules,
  }) : bindingModules = List.unmodifiable(bindingModules),
       jsModules = Set.unmodifiable(jsModules);

  @override
  final String id;
  @override
  final List<FlaxBindingModule> bindingModules;
  @override
  final Set<String> jsModules;
  @override
  List<FlaxPermissionDefinition> get permissionDefinitions => [
    for (final module in bindingModules)
      for (final definitions in module.permissionGuards.values) ...definitions,
  ];
  @override
  Set<String> get globals => const {};
  @override
  FlaxPluginInstance install(FlaxHostContext context) =>
      const _BindingPluginInstance();
}

final class _BindingPluginInstance implements FlaxPluginInstance {
  const _BindingPluginInstance();
  @override
  void close() {}
  @override
  void dispose() {}
}

/// Resources owned by one plugin installation, never by the global registry.
abstract class FlaxPluginInstance {
  /// Stop new operations and cancel current work while JS can still settle.
  void close();

  /// Release remaining bridge handles before the engine is destroyed.
  void dispose();
}

/// An installed native provider may initialize the same host module in Workers.
/// Configuration contains sendable values only; Flutter objects stay in this isolate.
abstract interface class FlaxWorkerPluginInstance {
  String get workerModule;
  Set<String> get workerNativeAssets;
  Future<Map<String, Object?>> get workerConfiguration;
  void workerMessage(String operation, List<Object?> arguments);
}

/// Public engine-independent extension boundary for host plugins.
abstract class FlaxHostContext {
  String? get namespace;
  FlaxSandboxContext? get sandbox => null;
  FlaxPermissionContext? get permissions => null;

  /// Session-private fonts with Flutter public/system fallback.
  ui.FlaxFontCollection? get fontCollection => null;

  FlaxJsRuntime get runtime;

  /// The immutable, already-validated registry installed for this session.
  List<FlaxBindingModule> get bindingModules;
  bool get isClosing;
  bool get isActive;
  void registerFunction(
    String name,
    FlaxJsHostFunction callback, {
    bool allowClosing = false,
  });
  FlaxJsValue evaluate(String source, {String sourceUrl = 'flax:host'});

  /// Reuses immutable source encoding without sharing runtime state.
  FlaxJsValue evaluateSource(FlaxJsSource source) =>
      evaluate(utf8.decode(source.bytes), sourceUrl: source.sourceUrl);

  /// Executes at a safe session checkpoint; discarded after this installation retires.
  /// Keep owned JS handles on the instance and release them in dispose, not here.
  void enqueue(void Function() action);
  void requestCheckpoint();
  void report(Object error, StackTrace stack);
  FlaxJsObject exposeObject(Object value, String typeId);
  T requireObject<T>(FlaxJsValue value, String typeId);
}

class _HostContext implements FlaxHostContext {
  _HostContext(this.session, this.globals);
  final Set<String> globals;
  final _registered = <String>{};
  final _Session session;
  bool retired = false;
  @override
  String? get namespace => session.namespace;
  @override
  FlaxSandboxContext? get sandbox => session.sandbox;
  @override
  FlaxPermissionContext get permissions => session.permissions;
  @override
  ui.FlaxFontCollection get fontCollection => session._fontResources.collection;
  @override
  FlaxJsRuntime get runtime => session.runtime;
  @override
  List<FlaxBindingModule> get bindingModules => session.registry.modules;
  @override
  bool get isClosing => session.closing || retired;
  @override
  bool get isActive => session.active && !retired;
  @override
  void registerFunction(
    String name,
    FlaxJsHostFunction callback, {
    bool allowClosing = false,
  }) {
    if (isClosing) throw StateError('FlaxSessionClosed');
    if (globals.contains(name)) {
      if (!_registered.add(name)) {
        throw ArgumentError('Conflicting host global: $name');
      }
    } else {
      session.claimGlobal(name);
    }
    runtime.registerHostFunction(name, (receiver, arguments) {
      if (!isActive || (!allowClosing && isClosing)) {
        throw StateError('FlaxSessionClosed');
      }
      try {
        return session.permissions.run(() => callback(receiver, arguments));
      } finally {
        requestCheckpoint();
      }
    });
  }

  @override
  FlaxJsValue evaluate(String source, {String sourceUrl = 'flax:host'}) {
    if (!isActive) throw StateError('FlaxSessionClosed');
    try {
      return runtime.evaluate(source, sourceUrl: sourceUrl);
    } finally {
      requestCheckpoint();
    }
  }

  @override
  FlaxJsValue evaluateSource(FlaxJsSource source) {
    if (!isActive) throw StateError('FlaxSessionClosed');
    try {
      return runtime.evaluateSource(source);
    } finally {
      requestCheckpoint();
    }
  }

  @override
  void enqueue(void Function() action) {
    if (!isActive) return;
    session._hostTasks.add((this, action));
    requestCheckpoint();
  }

  @override
  void requestCheckpoint() {
    if (isActive) session.checkpoint();
  }

  @override
  void report(Object error, StackTrace stack) => session.report(error, stack);

  @override
  FlaxJsObject exposeObject(Object value, String typeId) {
    if (isClosing) throw StateError('FlaxSessionClosed');
    final result = session.objectResult(
      value,
      FlaxTypeRef('object', id: typeId),
    );
    if (result is! FlaxJsObject) {
      throw ArgumentError('Expected a Dart object wrapper');
    }
    return session.holdHostResult(result) as FlaxJsObject;
  }

  @override
  T requireObject<T>(FlaxJsValue value, String typeId) {
    if (isClosing) throw StateError('FlaxSessionClosed');
    final object = session.objectReference(value, typeId).value;
    if (object is! T) {
      throw ArgumentError('Foreign, disposed, or incompatible Dart object');
    }
    return object as T;
  }
}

class _HostInstallation {
  _HostInstallation(this.context, this.instance);
  final _HostContext context;
  final FlaxPluginInstance instance;
}

extension _HostPlugins on _Session {
  void claimGlobal(String name, {bool engineDefault = false}) {
    if (!_hostGlobals.add(name)) {
      throw ArgumentError('Conflicting host global: $name');
    }
    final existing = runtime.getGlobal(name);
    try {
      if (!engineDefault && existing is! FlaxJsUndefined) {
        throw ArgumentError('Host global already exists: $name');
      }
    } finally {
      _releaseJs(existing);
    }
  }

  void installHost(List<FlaxPlugin> plugins) {
    final all = _pluginsWithBase(plugins, fetchBaseUrl: fetchBaseUrl);
    for (final plugin in all) {
      for (final name in plugin.globals) {
        claimGlobal(name, engineDefault: plugin is _BaseHostPlugin);
      }
    }
    for (final plugin in all) {
      final context = _HostContext(this, Set.of(plugin.globals));
      try {
        _hostInstallations.add(
          _HostInstallation(context, plugin.install(context)),
        );
      } catch (_) {
        context.retired = true;
        rethrow;
      }
    }
  }

  void closeHost() {
    if (_hostClosing) return;
    _hostClosing = true;
    for (final installation in _hostInstallations.reversed) {
      try {
        installation.instance.close();
      } catch (error, stack) {
        report(error, stack);
      }
    }
  }

  void disposeHost() {
    closeHost();
    for (final installation in _hostInstallations.reversed) {
      try {
        installation.instance.dispose();
      } catch (error, stack) {
        report(error, stack);
      } finally {
        installation.context.retired = true;
      }
    }
    _hostInstallations.clear();
    _hostTasks.clear();
  }
}

class _BaseHostPlugin extends FlaxPlugin {
  const _BaseHostPlugin({this.fetchBaseUrl});
  final String? fetchBaseUrl;
  @override
  String get id => 'flax.base';
  @override
  Set<String> get jsModules => const {
    '@flax/core',
    '@flax/core/host',
    '@flax/core/navigation',
    '@flax/flutter/widgets',
  };
  @override
  Set<String> get globals => const {
    'fetch',
    'Headers',
    'Request',
    'Response',
    '__flaxFfiDlopen',
    '__flaxFfiMemory',
    '__flaxFfiPlatform',
    'console',
    'performance',
    'Performance',
    'PerformanceEntry',
    'PerformanceMark',
    'PerformanceMeasure',
    'PerformanceObserver',
    'PerformanceObserverEntryList',
    'window',
    'location',
    'Crypto',
    'crypto',
    'navigator',
    'structuredClone',
    'GPUCompilationInfo',
    'GPUCompilationMessage',
    'setTimeout',
    'setInterval',
    'clearTimeout',
    'clearInterval',
    'queueMicrotask',
    'Event',
    'EventTarget',
    'addEventListener',
    'removeEventListener',
    'dispatchEvent',
    'CustomEvent',
    'ProgressEvent',
    'MessageEvent',
    'ErrorEvent',
    'Worker',
    'DOMException',
    'AbortController',
    'AbortSignal',
    'URL',
    'URLSearchParams',
    'TextEncoder',
    'TextDecoder',
    'atob',
    'btoa',
    'Blob',
    'File',
    'FileReader',
    'FormData',
    'ReadableStream',
    'ReadableStreamDefaultReader',
    'ReadableStreamBYOBReader',
    'ReadableStreamDefaultController',
    'ReadableByteStreamController',
    'ReadableStreamBYOBRequest',
    'WritableStream',
    'WritableStreamDefaultWriter',
    'WritableStreamDefaultController',
    'TransformStream',
    'TransformStreamDefaultController',
    'ByteLengthQueuingStrategy',
    'CountQueuingStrategy',
    'TextEncoderStream',
    'TextDecoderStream',
    'OffscreenCanvas',
    'HTMLCanvasElement',
    'document',
    'self',
    'devicePixelRatio',
    'innerWidth',
    'innerHeight',
    'MouseEvent',
    'PointerEvent',
    'WheelEvent',
    'KeyboardEvent',
    'ResizeObserver',
    'ImageData',
    'ImageBitmap',
    'ImageBitmapRenderingContext',
    'Image',
    'HTMLImageElement',
    'createImageBitmap',
    '__flaxCanvasHost',
    'requestAnimationFrame',
    'cancelAnimationFrame',
    'permissions',
  };
  @override
  FlaxPluginInstance install(FlaxHostContext context) {
    final instance = _BaseHost(context, fetchBaseUrl);
    try {
      instance.install();
      return instance;
    } catch (_) {
      instance.dispose();
      rethrow;
    }
  }
}

List<FlaxPlugin> _pluginsWithBase(
  List<FlaxPlugin> plugins, {
  String? fetchBaseUrl,
}) => [_BaseHostPlugin(fetchBaseUrl: fetchBaseUrl), ...plugins];

class _BaseHost implements FlaxPluginInstance {
  _BaseHost(
    this.context,
    String? fetchBaseUrl, {
    this.workerId,
    this.workerName = '',
    this.workerType = 'classic',
    this.workerNativeAssets = const {},
  }) : _fetch = _FetchHost(context, fetchBaseUrl);
  final FlaxHostContext context;
  final int? workerId;
  final String workerName, workerType;
  final Set<String> workerNativeAssets;
  _DedicatedWorkers? _workers;
  final _FetchHost _fetch;
  final _clock = Stopwatch()..start();
  math.Random? _secureRandom;
  final _origin = DateTime.now().microsecondsSinceEpoch / 1000;
  final _timers = <int, Timer>{};
  final _queued = <int>{};
  final _canvasTargets = <_CanvasTarget>{};
  final _canvasSources = <String, _WidgetCanvasSource>{};
  FlaxJsObject? _state;
  final _methods = <String, FlaxJsFunction>{};
  bool _closed = false;
  bool _rafScheduled = false;
  bool _ffiInstalled = false;
  bool _ffiRetiring = false;
  bool _ffiQueued = false;
  bool _imagesActive = false;
  int? _rafHandle;
  late final _images = _SharedImages(
    context,
    (id, ok, value) => _call('imageSettled', [
      FlaxJsNumber(id.toDouble()),
      FlaxJsBoolean(ok),
      value,
    ]),
  );

  FlaxJsValue _returnBytes(Uint8List bytes) {
    final result = context.runtime.createArrayBuffer(bytes);
    final host = context;
    if (host is _HostContext) return host.session.holdHostResult(result);
    (host as _WorkerHostContext).results.add(result);
    return result;
  }

  Uint8List _randomBytes(int length) {
    final bytes = Uint8List(length);
    if (length == 0) return bytes;
    final random = _secureRandom ??= math.Random.secure();
    final words = ByteData.sublistView(bytes);
    var offset = 0;
    // Fill words and return one bulk buffer instead of making a host call per byte.
    for (; offset + 4 <= length; offset += 4) {
      words.setUint32(offset, random.nextInt(0x100000000), Endian.little);
    }
    if (offset < length) {
      var value = random.nextInt(0x100000000);
      while (offset < length) {
        bytes[offset++] = value & 255;
        value >>= 8;
      }
    }
    return bytes;
  }

  void install() {
    final runtime = context.runtime;
    if (runtime is FlaxNativeJsRuntime && runtime.supportsWorkers) {
      _workers = _DedicatedWorkers(context, (id, event, message) {
        _call(
          switch (event) {
            'message' => 'workerMessage',
            'finish' => 'workerFinished',
            _ => 'workerError',
          },
          [
            FlaxJsNumber(id.toDouble()),
            if (event != 'message') ...message.map(FlaxJsString.new),
          ],
        );
      }, _blobSource);
    }
    context.registerFunction('__flaxBaseCall', (_, args) {
      final operation = (args[0] as FlaxJsString).value;
      if (workerId != null &&
          ((operation.startsWith('ffi') && workerNativeAssets.isEmpty) ||
              operation.startsWith('canvas') ||
              operation == 'imageNative' ||
              operation == 'imagePixels' ||
              operation == 'imageEncode' ||
              operation == 'raf' && workerNativeAssets.isEmpty)) {
        throw UnsupportedError(
          'Workers support pure JS and Wasm host operations',
        );
      }
      switch (operation) {
        case 'hardwareConcurrency':
          return FlaxJsNumber(Platform.numberOfProcessors.toDouble());
        case 'workerBaseUrl':
          final host = context;
          if (host is _WorkerHostContext) return FlaxJsString(host.scriptUrl);
          return host is _HostContext && host.session.entryUri != null
              ? FlaxJsString(host.session.entryUri.toString())
              : const FlaxJsUndefined();
        case 'workerCreate':
          return FlaxJsNumber(_workers!.create().toDouble());
        case 'workerStart':
          final uri = Uri.parse((args[2] as FlaxJsString).value);
          if (uri.userInfo.isNotEmpty ||
              !(uri.scheme == 'blob' ||
                  uri.scheme == 'data' && uri.data != null)) {
            throw UnsupportedError(
              'Inline Worker sources require data or Blob URLs',
            );
          }
          _workers!._start(
            (args[1] as FlaxJsNumber).value.toInt(),
            (args[2] as FlaxJsString).value,
            (args[3] as FlaxJsString).value,
            (args[4] as FlaxJsString).value,
            (args[5] as FlaxJsString).value,
          );
        case 'workerTerminate':
          _workers?.terminate((args[1] as FlaxJsNumber).value.toInt());
        case 'workerLoad':
          unawaited(
            _workers!.load(
              (args[1] as FlaxJsNumber).value.toInt(),
              (args[2] as FlaxJsString).value,
              (args[3] as FlaxJsString).value,
              (args[4] as FlaxJsString).value,
            ),
          );
        case 'workerResource':
          unawaited(
            (context as _WorkerHostContext).loadResource(
              (args[1] as FlaxJsNumber).value.toInt(),
              (args[2] as FlaxJsString).value,
            ),
          );
        case 'workerResourceCancel':
          (context as _WorkerHostContext).cancelResource(
            (args[1] as FlaxJsNumber).value.toInt(),
          );
        case 'workerCheckpoint':
          context.enqueue(() {});
        case 'workerProviderMessage':
          (context as _WorkerHostContext).providerMessage(
            (args[1] as FlaxJsString).value,
            (args[2] as FlaxJsString).value,
            [
              for (final value in args.skip(3))
                switch (value) {
                  FlaxJsString(:final value) => value,
                  FlaxJsNumber(:final value) => value,
                  FlaxJsBoolean(:final value) => value,
                  _ => throw ArgumentError(
                    'Worker provider messages require scalar values',
                  ),
                },
            ],
          );
        case 'workerReport':
          (context as _WorkerHostContext).parent.send([
            workerId,
            'error',
            for (final arg in args.skip(1)) (arg as FlaxJsString).value,
          ]);
        case 'workerClose':
          (context as _WorkerHostContext).close();
        case 'workerImport':
          final url = (args[1] as FlaxJsString).value;
          final data = Uri.parse(url).data;
          if (data == null) {
            throw UnsupportedError(
              'importScripts currently supports data URLs',
            );
          }
          _releaseJs(context.evaluate(data.contentAsString(), sourceUrl: url));
        case 'workerImportSource':
          final uri = Uri.parse((args[2] as FlaxJsString).value);
          if (uri.scheme != 'blob' || uri.userInfo.isNotEmpty) {
            throw UnsupportedError('Inline Worker imports require Blob URLs');
          }
          _releaseJs(
            context.evaluate(
              (args[1] as FlaxJsString).value,
              sourceUrl: (args[2] as FlaxJsString).value,
            ),
          );
        case 'random':
          if (_closed || context.isClosing) {
            throw StateError('FlaxSessionClosed');
          }
          final length = (args[1] as FlaxJsNumber).value;
          if (!length.isFinite ||
              length != length.truncateToDouble() ||
              length < 0 ||
              length > 65536) {
            throw RangeError('Invalid random byte count');
          }
          return _returnBytes(_randomBytes(length.toInt()));
        case 'fetch':
          return _fetch.call(args);
        case 'image':
          if (context.isClosing) throw StateError('FlaxSessionClosed');
          _images.start(args);
        case 'imageActivity':
          _imagesActive = (args[1] as FlaxJsBoolean).value;
        case 'imageEncode':
          return _returnBytes(
            FlaxImageCodec.encode(
              context.runtime.readBytes(args[1] as FlaxJsObject),
              (args[2] as FlaxJsNumber).value.toInt(),
              (args[3] as FlaxJsNumber).value.toInt(),
              (args[4] as FlaxJsString).value,
              ((args[5] as FlaxJsNumber).value * 100).round(),
            ),
          );
        case 'imageClose':
          _images.release((args[1] as FlaxJsNumber).value.toInt());
        case 'imageNative':
          final image = _images.image((args[1] as FlaxJsNumber).value.toInt());
          return context.exposeObject(image, flaxImageBitmapType);
        case 'imagePixels':
          final pixels = context.runtime.readBytes(args[1] as FlaxJsObject);
          return FlaxJsNumber(
            _images
                .retain(
                  pixels,
                  (args[2] as FlaxJsNumber).value.toInt(),
                  (args[3] as FlaxJsNumber).value.toInt(),
                )
                .toDouble(),
          );
        case 'canvasSourceSize':
          final name = (args[1] as FlaxJsString).value;
          final size = _canvasSources[name]?.currentBoundary?.size;
          return size == null
              ? const FlaxJsUndefined()
              : FlaxJsString('${size.width.ceil()},${size.height.ceil()}');
        case 'canvasSourceWatch':
          final name = (args[1] as FlaxJsString).value;
          if (!_closed) {
            _canvasSources[name]?.watch((args[2] as FlaxJsBoolean).value);
          }
        case 'canvasCreate':
          if (context.isClosing) throw StateError('FlaxSessionClosed');
          final target = _CanvasTarget(
            (args[1] as FlaxJsNumber).value.toInt(),
            (args[2] as FlaxJsNumber).value.toInt(),
            _canvasEvent,
          );
          _canvasTargets.add(target);
          return context.exposeObject(target, flaxCanvasTargetType);
        case 'canvasObserve':
        case 'canvasInput':
          final target = context.requireObject<FlaxCanvasTarget>(
            args[1],
            flaxCanvasTargetType,
          ) as _CanvasTarget;
          if (!_canvasTargets.contains(target) || target.closed) {
            throw StateError('Foreign or closed canvas');
          }
          if (operation == 'canvasObserve') {
            target.observe();
          } else {
            final argument = args.length < 4
                ? null
                : args[3] is FlaxJsString
                ? (args[3] as FlaxJsString).value
                : args[3] is FlaxJsNumber
                ? (args[3] as FlaxJsNumber).value
                : null;
            target.control((args[2] as FlaxJsString).value, argument);
          }
        case 'canvasBitmap':
          final target = context.requireObject<FlaxCanvasTarget>(
            args[1],
            flaxCanvasTargetType,
          ) as _CanvasTarget;
          if (!_canvasTargets.contains(target)) {
            throw StateError('Foreign canvas');
          }
          final image = args[2] is FlaxJsNull
              ? null
              : context
                    .requireObject<FlaxImageBitmapResource>(
                      args[2],
                      flaxImageBitmapType,
                    )
                    .image;
          target.setBitmap(image);
        case 'canvasResize':
          final target = context.requireObject<FlaxCanvasTarget>(
            args[1],
            flaxCanvasTargetType,
          ) as _CanvasTarget;
          if (!_canvasTargets.contains(target)) {
            throw StateError('Foreign canvas');
          }
          target.resize(
            (args[2] as FlaxJsNumber).value.toInt(),
            (args[3] as FlaxJsNumber).value.toInt(),
          );
        case 'canvasRelease':
          final target = context.requireObject<FlaxCanvasTarget>(
            args[1],
            flaxCanvasTargetType,
          ) as _CanvasTarget;
          if (_canvasTargets.remove(target)) target.dispose();
        case 'ffiInstall':
          if (context.sandbox != null) {
            throw const FlaxSandboxException(
              operation: 'ffi.install',
              message: 'Native FFI is unavailable in a sandbox',
            );
          }
          if (context.isClosing) throw StateError('FlaxSessionClosed');
          final runtime = context.runtime;
          if (runtime is! FlaxNativeJsRuntime) {
            throw UnsupportedError(
              '@flax/ffi requires the maintained native engine',
            );
          }
          runtime.installNativeFfi(_queueFfi);
          _ffiInstalled = true;
        case 'ffiAsset':
          if (context.sandbox != null) {
            throw const FlaxSandboxException(
              operation: 'ffi.asset',
              message: 'Native FFI is unavailable in a sandbox',
            );
          }
          final id = (args[1] as FlaxJsString).value;
          if (workerId != null && !workerNativeAssets.contains(id)) {
            throw StateError(
              'Native code asset is not selected for this Worker: $id',
            );
          }
          if (id.isEmpty || id.contains('\u0000')) {
            throw ArgumentError('Invalid native code asset id');
          }
          final name =
              'flax_native_${crypto.sha256.convert(utf8.encode(id)).toString().substring(0, 16)}';
          final executable = File(Platform.resolvedExecutable);
          final base = Platform.isMacOS
              ? executable.parent.parent
              : executable.parent;
          final path = '${base.path}/Frameworks/$name.framework/$name';
          if (!File(path).existsSync()) {
            throw StateError('Native code asset was not bundled: $name');
          }
          return FlaxJsString(path);
        case 'timer':
          if (context.isClosing) throw StateError('FlaxSessionClosed');
          final id = (args[1] as FlaxJsNumber).value.toInt();
          final delay = Duration(
            milliseconds: (args[2] as FlaxJsNumber).value.toInt(),
          );
          final repeat = (args[3] as FlaxJsBoolean).value;
          void fire() {
            if (_closed || !_queued.add(id)) return;
            context.enqueue(() {
              _queued.remove(id);
              if (_closed || !_timers.containsKey(id)) return;
              if (!repeat) _timers.remove(id);
              _call('fire', [FlaxJsNumber(id.toDouble())]);
            });
          }
          _timers[id] = repeat
              ? Timer.periodic(delay, (_) => fire())
              : Timer(delay, fire);
        case 'clearTimer':
          _timers.remove((args[1] as FlaxJsNumber).value.toInt())?.cancel();
        case 'now':
          return FlaxJsNumber(_clock.elapsedMicroseconds / 1000);
        case 'timeOrigin':
          return FlaxJsNumber(_origin);
        case 'log':
          debugPrint(
            '[Flax ${(args[1] as FlaxJsString).value}] ${(args[2] as FlaxJsString).value}',
          );
        case 'error':
          context.report(
            FlaxJsException((args[1] as FlaxJsString).value),
            StackTrace.current,
          );
        case 'checkpoint':
          context.requestCheckpoint();
        case 'raf':
          if (context.isClosing) throw StateError('FlaxSessionClosed');
          _scheduleRaf();
        default:
          throw ArgumentError('Unknown base host operation: $operation');
      }
      return const FlaxJsUndefined();
    }, allowClosing: true);
    if (context.sandbox != null) {
      final result = context.evaluate(r"""
(() => {
  const call = globalThis.__flaxBaseCall;
  globalThis.__flaxBaseCall = (operation, ...args) => {
    if (operation === 'ffiInstall' || operation === 'ffiAsset') {
      const error = new Error('Native FFI is unavailable in a sandbox');
      Object.defineProperties(error, {
        name: {value: 'FlaxSandboxError'},
        code: {value: 'FLAX_SANDBOX_DENIED', enumerable: true},
        operation: {value: operation === 'ffiInstall' ? 'ffi.install' : 'ffi.asset', enumerable: true},
      });
      throw error;
    }
    return call(operation, ...args);
  };
})()
""", sourceUrl: 'flax:sandbox-ffi');
      _releaseJs(result);
    }
    final host = context;
    _state =
        (host is _HostContext && host.session.modulesPrepared
                ? context.evaluate(
                    '(() => {const install = globalThis.__flaxPreparedBase; '
                    'delete globalThis.__flaxPreparedBase; '
                    'return install(globalThis, $flaxBaseBootstrapBridge);})()',
                    sourceUrl: 'flax:base',
                  )
                : workerId == null
                ? context.evaluateSource(_baseHostSource)
                : context.evaluate(
                    '($flaxBaseBootstrap)(globalThis, $flaxBaseBootstrapBridge, '
                    '${jsonEncode({'id': workerId, 'name': workerName, 'type': workerType, 'canvas': workerNativeAssets.isNotEmpty})})',
                    sourceUrl: 'flax:worker-base',
                  ))
            as FlaxJsObject;
    _fetch._state = _state!.getProperty('fetch') as FlaxJsObject;
    if (host is _HostContext && host.session.canvasSources.isNotEmpty) {
      for (final entry in host.session.canvasSources.entries) {
        final name = entry.key;
        _canvasSources[name] = _WidgetCanvasSource(
          entry.value,
          _scheduleCanvasSources,
          (width, height, pixels) =>
              _updateCanvasSource(name, width, height, pixels),
          context.report,
        );
      }
      _call('configureCanvasSources', [
        FlaxJsString(jsonEncode(_canvasSources.keys.toList())),
      ]);
    }
  }

  bool _canvasSourcesScheduled = false;

  void _scheduleCanvasSources({bool requestFrame = true}) {
    if (_closed) return;
    final binding = SchedulerBinding.instance;
    if (!_canvasSourcesScheduled) {
      _canvasSourcesScheduled = true;
      final owner = WeakReference(this);
      binding.addPostFrameCallback((_) {
        final host = owner.target;
        if (host == null || host._closed) return;
        host._canvasSourcesScheduled = false;
        for (final source in host._canvasSources.values) {
          source.afterPaint();
        }
        if (host._canvasSources.values.any((source) => source.watched)) {
          host._scheduleCanvasSources(requestFrame: false);
        }
      });
    }
    if (requestFrame) binding.ensureVisualUpdate();
  }

  void _updateCanvasSource(
    String name,
    int width,
    int height,
    Uint8List? pixels,
  ) {
    if (_closed || !context.isActive || context.isClosing) return;
    final buffer = pixels == null
        ? null
        : context.runtime.createArrayBuffer(pixels);
    try {
      _call('updateCanvasSource', [
        FlaxJsString(name),
        FlaxJsNumber(width.toDouble()),
        FlaxJsNumber(height.toDouble()),
        buffer ?? const FlaxJsNull(),
      ]);
      context.requestCheckpoint();
    } catch (error, stack) {
      context.report(error, stack);
    } finally {
      buffer?.release();
    }
  }

  void _scheduleRaf() {
    if (_rafScheduled || _closed) return;
    _rafScheduled = true;
    if (context case final _WorkerHostContext worker) {
      worker.scheduleFrame((_) {
        _rafScheduled = false;
        if (!_closed) {
          _call('fireRaf', [FlaxJsNumber(_clock.elapsedMicroseconds / 1000)]);
        }
      });
      return;
    }
    _rafHandle = SchedulerBinding.instance.scheduleFrameCallback((_) {
      _rafHandle = null;
      _rafScheduled = false;
      if (_closed) return;
      _call('fireRaf', [FlaxJsNumber(_clock.elapsedMicroseconds / 1000)]);
      try {
        if (context.runtime.drainMicrotasks(maxJobsHint: 1024)) {
          presentCanvases();
        }
      } catch (error, stack) {
        context.report(error, stack);
      }
    });
  }

  bool _canvasEvent(_CanvasTarget target, Map<String, Object?> event) {
    if (_closed || !context.isActive || _state == null) return false;
    final function = _methods['canvasEvent'] ??=
        _state!.getProperty('canvasEvent') as FlaxJsFunction;
    FlaxJsValue? object;
    try {
      object = context.exposeObject(target, flaxCanvasTargetType);
      final result = function.call([
        object,
        FlaxJsString(jsonEncode(event)),
      ], thisValue: _state!);
      context.requestCheckpoint();
      return result is FlaxJsBoolean && result.value;
    } catch (error, stack) {
      context.report(error, stack);
      return false;
    } finally {
      if (object is FlaxJsObject) object.release();
    }
  }

  void _queueFfi() {
    if (_ffiQueued || !context.isActive) return;
    _ffiQueued = true;
    context.enqueue(() {
      _ffiQueued = false;
      final runtime = context.runtime as FlaxNativeJsRuntime;
      if (_ffiRetiring) {
        if (runtime.retireNativeFfi()) {
          _ffiInstalled = false;
          _ffiRetiring = false;
          (context as _HostContext).session._nativeRetirements--;
        }
      } else if (_ffiInstalled) {
        runtime.checkpointNativeFfi();
      }
    });
  }

  void presentCanvases() {
    if (!_closed &&
        (_imagesActive ||
            _canvasTargets.isNotEmpty ||
            workerId != null && workerNativeAssets.isNotEmpty)) {
      _call('present', const []);
    }
  }

  void _call(String name, List<FlaxJsValue> args) {
    final state = _state;
    if (state == null) return;
    // These private host methods are stable; retain their handles until disposal.
    final function = _methods[name] ??=
        state.getProperty(name) as FlaxJsFunction;
    _releaseJs(function.call(args, thisValue: state));
  }

  FlaxModuleSource? _blobSource(Uri uri) {
    final state = _state;
    if (state == null || _closed) return null;
    final function = _methods['blobSource'] ??=
        state.getProperty('blobSource') as FlaxJsFunction;
    final result = function.call([
      FlaxJsString(uri.toString()),
    ], thisValue: state);
    try {
      if (result is! FlaxJsObject) return null;
      final bytes = result.getProperty('0') as FlaxJsObject;
      try {
        final type = (result.getProperty('1') as FlaxJsString).value;
        final source = FlaxModuleSource(
          uri: uri,
          kind: type == 'application/wasm'
              ? FlaxModuleKind.wasm
              : type == 'application/json'
              ? FlaxModuleKind.json
              : FlaxModuleKind.javascript,
          bytes: context.runtime.readBytes(bytes),
        );
        _workerSourceTypes[source] = type;
        return source;
      } finally {
        bytes.release();
      }
    } finally {
      _releaseJs(result);
    }
  }

  @override
  void close() {
    if (_closed) return;
    _closed = true;
    for (final source in _canvasSources.values) {
      source.watch(false);
    }
    _canvasSources.clear();
    _secureRandom = null;
    _workers?.close();
    _fetch.close();
    _images.close();
    for (final timer in _timers.values) {
      timer.cancel();
    }
    _timers.clear();
    _queued.clear();
    final rafHandle = _rafHandle;
    if (rafHandle != null) {
      SchedulerBinding.instance.cancelFrameCallbackWithId(rafHandle);
      _rafHandle = null;
      _rafScheduled = false;
    }
    // Detached Workers dispose their isolate without application teardown callbacks.
    if (workerId == null) context.enqueue(() => _call('close', const []));
    if (_ffiInstalled) {
      if (workerId != null) return;
      // Prior host settlements and their JS finally jobs run before retirement.
      (context as _HostContext).session._nativeRetirements++;
      context.enqueue(() {
        _ffiRetiring = true;
        _queueFfi();
      });
    }
  }

  @override
  void dispose() {
    close();
    _fetch.dispose();
    for (final function in _methods.values) {
      function.release();
    }
    _methods.clear();
    _state?.release();
    _state = null;
    for (final target in _canvasTargets) {
      target.dispose();
    }
    _canvasTargets.clear();
    _clock.stop();
  }
}
