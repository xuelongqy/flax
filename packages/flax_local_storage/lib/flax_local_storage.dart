/// Optional persistent localStorage, selected by the session namespace.
library;

import 'package:flax/flax.dart';
import 'package:flutter/foundation.dart';
import 'package:path/path.dart' as p;
import 'package:path_provider/path_provider.dart';

import 'src/generated/host_bootstrap.g.dart';
import 'src/store.dart';

class FlaxLocalStoragePlugin extends FlaxPlugin {
  const FlaxLocalStoragePlugin();

  static FlaxLocalStorageStore? _store;
  static Future<void>? _initializing;
  static Future<void>? _shuttingDown;
  static (String?, int)? _configuration;

  /// Call and await this before installing the plugin in any session.
  static Future<void> initialize({
    String? directory,
    int quotaBytes = 10485760,
  }) {
    if (quotaBytes <= 0) throw ArgumentError.value(quotaBytes, 'quotaBytes');
    if (_shuttingDown != null) {
      throw StateError('localStorage is shutting down');
    }
    final path = directory == null ? null : p.normalize(p.absolute(directory));
    final configuration = (path, quotaBytes);
    if (_configuration != null && _configuration != configuration) {
      throw StateError(
        'Shut down localStorage before changing its configuration',
      );
    }
    if (_initializing != null) return _initializing!;
    if (_store != null) return Future<void>.value();
    _configuration = configuration;
    return _initializing = _open(path, quotaBytes);
  }

  static Future<void> _open(String? directory, int quota) async {
    try {
      final path =
          directory ??
          p.join(
            (await getApplicationSupportDirectory()).path,
            'flax',
            'local_storage',
          );
      _store = await FlaxLocalStorageStore.open(path, quota);
    } catch (_) {
      _configuration = null;
      rethrow;
    } finally {
      _initializing = null;
    }
  }

  static FlaxLocalStorageStore _requireStore() {
    if (_store == null || _initializing != null || _shuttingDown != null) {
      throw StateError(
        'Await FlaxLocalStoragePlugin.initialize() before using localStorage',
      );
    }
    return _store!;
  }

  static Future<void> flush() => _requireStore().flush();

  static Future<void> shutdown() {
    if (_shuttingDown != null) return _shuttingDown!;
    if (_initializing != null) {
      throw StateError('Await localStorage initialization before shutdown');
    }
    final store = _store;
    if (store == null) return Future<void>.value();
    if (store.attachments != 0) {
      throw StateError(
        'Close the Flax sessions using localStorage before shutdown',
      );
    }
    return _shuttingDown = _shutdown(store);
  }

  static Future<void> _shutdown(FlaxLocalStorageStore store) async {
    try {
      await store.close();
    } finally {
      _store = null;
      _configuration = null;
      _shuttingDown = null;
    }
  }

  @override
  String get id => 'flax.localStorage';
  @override
  Set<String> get globals => const {
    'localStorage',
    'Storage',
    'StorageEvent',
    'onstorage',
  };
  @override
  FlaxPluginInstance install(FlaxHostContext context) {
    final host = _StorageHost(context, _requireStore());
    try {
      host.install();
      return host;
    } catch (_) {
      host.dispose();
      rethrow;
    }
  }
}

class _StorageHost implements FlaxPluginInstance {
  _StorageHost(this.context, this.store);
  final FlaxHostContext context;
  final FlaxLocalStorageStore store;
  FlaxJsObject? _state;
  bool _closed = false;

  void install() {
    final report = _writeReporter(WeakReference(this));
    context.registerFunction('__flaxLocalStorageCall', (_, args) {
      final operation = (args[0] as FlaxJsString).value;
      final namespace = context.namespace;
      String string(int index) => (args[index] as FlaxJsString).value;
      try {
        switch (operation) {
          case 'get':
            return _js(store.getItem(namespace, string(1)));
          case 'length':
            return FlaxJsNumber(store.length(namespace).toDouble());
          case 'key':
            return _js(
              store.key(namespace, (args[1] as FlaxJsNumber).value.toInt()),
            );
          case 'keys':
            final keys = store.keys(namespace).toList();
            final result = args[1] as FlaxJsObject;
            for (var i = 0; i < keys.length; i++) {
              result.setProperty('$i', FlaxJsString(keys[i]));
            }
            return const FlaxJsUndefined();
          case 'set':
            store.setItem(namespace, string(1), string(2), this, report);
          case 'remove':
            store.removeItem(namespace, string(1), this, report);
          case 'clear':
            store.clear(namespace, this, report);
          default:
            throw ArgumentError('Unknown localStorage operation');
        }
      } on FlaxStorageQuotaExceeded {
        return const FlaxJsBoolean(false);
      }
      return const FlaxJsBoolean(true);
    }, allowClosing: true);
    _state = context.evaluate(
      flaxLocalStorageBootstrap,
      sourceUrl: 'flax:local-storage',
    ) as FlaxJsObject;
    store.attach(this, context.namespace, (change) {
      if (_closed || !context.isActive) return;
      context.enqueue(() {
        final state = _state;
        if (_closed || state == null) return;
        final callback = state.getProperty('event') as FlaxJsFunction;
        try {
          final result = callback.call([
            _js(change.key),
            _js(change.oldValue),
            _js(change.newValue),
          ]);
          if (result is FlaxJsObject) result.release();
        } finally {
          callback.release();
        }
      });
    });
  }

  // Disk completions keep only a weak owner, not an installation closure frame.
  static void Function(Object, StackTrace) _writeReporter(
    WeakReference<_StorageHost> owner,
  ) {
    return (error, stack) {
      final host = owner.target;
      if (host != null && host._state != null && host.context.isActive) {
        host.context.report(error, stack);
      } else {
        FlutterError.reportError(
          FlutterErrorDetails(
            exception: error,
            stack: stack,
            library: 'flax_local_storage',
          ),
        );
      }
    };
  }

  static FlaxJsValue _js(String? value) =>
      value == null ? const FlaxJsNull() : FlaxJsString(value);

  @override
  void close() => _closed = true;

  @override
  void dispose() {
    close();
    store.detach(this);
    _state?.release();
    _state = null;
  }
}
