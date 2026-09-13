part of '../../bindings.dart';

/// Defaults used by subsequently created sessions in this Dart isolate.
abstract final class Flax {
  static List<FlaxPlugin> _plugins = const [];

  /// Replaces the complete default list. An empty list restores the base host.
  static void registerPlugins(List<FlaxPlugin> plugins) {
    _plugins = _pluginSnapshot(plugins);
  }
}

FlaxBindingRegistry _bindingsWithPlugins(
  FlaxBindingRegistry bindings,
  List<FlaxPlugin> plugins,
) {
  final extra = [for (final plugin in plugins) ...plugin.bindingModules];
  if (extra.isEmpty) return bindings;
  return FlaxBindingRegistry([...bindings.modules, ...extra]);
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
  List<FlaxBindingModule> get bindingModules => const [];
  FlaxPluginInstance install(FlaxHostContext context);
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
  FlaxJsRuntime get runtime;
  bool get isClosing;
  bool get isActive;
  void registerFunction(
    String name,
    FlaxJsHostFunction callback, {
    bool allowClosing = false,
  });
  FlaxJsValue evaluate(String source, {String sourceUrl = 'flax:host'});

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
  FlaxJsRuntime get runtime => session.runtime;
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
    final all = <FlaxPlugin>[const _BaseHostPlugin(), ...plugins];
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
  Set<String> get globals => const {
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
  int? _rafHandle;

  void install() {
    context.registerFunction('__flaxBaseCall', (_, args) {
      final operation = (args[0] as FlaxJsString).value;
      switch (operation) {
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
    _state = context.evaluate(
      flaxBaseBootstrap,
      sourceUrl: 'flax:base',
    ) as FlaxJsObject;
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
  }

  @override
  void dispose() {
    close();
    _state?.release();
    _state = null;
    _clock.stop();
  }
}
