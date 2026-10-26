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

/// Public engine-independent extension boundary for host plugins.
abstract class FlaxHostContext {
  String? get namespace;

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
        return callback(receiver, arguments);
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
    final all = _pluginsWithBase(plugins);
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
  const _BaseHostPlugin();
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
    '__flaxFfiDlopen',
    '__flaxFfiMemory',
    '__flaxFfiPlatform',
    'console',
    'performance',
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
    'MessageEvent',
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
    'requestAnimationFrame',
    'cancelAnimationFrame',
  };
  @override
  FlaxPluginInstance install(FlaxHostContext context) {
    final instance = _BaseHost(context);
    try {
      instance.install();
      return instance;
    } catch (_) {
      instance.dispose();
      rethrow;
    }
  }
}

List<FlaxPlugin> _pluginsWithBase(List<FlaxPlugin> plugins) => [
  const _BaseHostPlugin(),
  ...plugins,
];

class _BaseHost implements FlaxPluginInstance {
  _BaseHost(this.context);
  final FlaxHostContext context;
  final _clock = Stopwatch()..start();
  final _origin = DateTime.now().microsecondsSinceEpoch / 1000;
  final _timers = <int, Timer>{};
  final _queued = <int>{};
  FlaxJsObject? _state;
  bool _closed = false;
  bool _rafScheduled = false;
  bool _ffiInstalled = false;
  bool _ffiRetiring = false;
  bool _ffiQueued = false;
  int? _rafHandle;

  void install() {
    context.registerFunction('__flaxBaseCall', (_, args) {
      final operation = (args[0] as FlaxJsString).value;
      switch (operation) {
        case 'ffiInstall':
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
          final id = (args[1] as FlaxJsString).value;
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
    final host = context;
    _state =
        (host is _HostContext && host.session.modulesPrepared
                ? context.evaluate(
                    '(() => {const install = globalThis.__flaxPreparedBase; '
                    'delete globalThis.__flaxPreparedBase; '
                    'return install(globalThis, $flaxBaseBootstrapBridge);})()',
                    sourceUrl: 'flax:base',
                  )
                : context.evaluateSource(_baseHostSource))
            as FlaxJsObject;
  }

  void _scheduleRaf() {
    if (_rafScheduled || _closed) return;
    _rafScheduled = true;
    _rafHandle = SchedulerBinding.instance.scheduleFrameCallback((_) {
      _rafHandle = null;
      _rafScheduled = false;
      if (_closed) return;
      _call('fireRaf', [FlaxJsNumber(_clock.elapsedMicroseconds / 1000)]);
      try {
        context.runtime.drainMicrotasks(maxJobsHint: 1024);
      } catch (error, stack) {
        context.report(error, stack);
      }
    });
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

  void _call(String name, List<FlaxJsValue> args) {
    final state = _state;
    if (state == null) return;
    final function = state.getProperty(name) as FlaxJsFunction;
    try {
      _releaseJs(function.call(args, thisValue: state));
    } finally {
      function.release();
    }
  }

  @override
  void close() {
    if (_closed) return;
    _closed = true;
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
    context.enqueue(() => _call('close', const []));
    if (_ffiInstalled) {
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
    _state?.release();
    _state = null;
    _clock.stop();
  }
}
