/// Optional persistent localStorage, selected by the session namespace.
library;

import 'dart:convert';
import 'dart:io';

import 'package:crypto/crypto.dart';
import 'package:flax/flax.dart';
import 'package:flutter/foundation.dart';
import 'package:path/path.dart' as p;
import 'package:path_provider/path_provider.dart';

import 'src/generated/host_bootstrap.g.dart';
import 'src/store.dart';

class FlaxLocalStoragePlugin extends FlaxPlugin {
  const FlaxLocalStoragePlugin();

  static final _areas = <String?, _StorageArea>{};

  /// Initialize each application before installing its plugin. The host area is separate.
  static Future<void> initialize({
    FlaxSandbox? sandbox,
    String? directory,
    int quotaBytes = 10485760,
  }) {
    if (quotaBytes <= 0) throw ArgumentError.value(quotaBytes, 'quotaBytes');
    if (sandbox != null && directory != null) {
      throw ArgumentError('Sandbox storage uses its application home');
    }
    final key = sandbox?.homePath;
    final area = _areas.putIfAbsent(key, _StorageArea.new);
    if (area.shuttingDown != null) {
      throw StateError('localStorage is shutting down');
    }
    final path = sandbox != null
        ? p.join(sandbox.homePath, 'local_storage')
        : directory == null
        ? null
        : p.normalize(p.absolute(directory));
    final configuration = (path, quotaBytes);
    if (area.configuration != null && area.configuration != configuration) {
      throw StateError(
        'Shut down localStorage before changing its configuration',
      );
    }
    if (area.initializing != null) return area.initializing!;
    if (area.store != null) return Future<void>.value();
    area.configuration = configuration;
    return area.initializing = _open(area, path, quotaBytes, sandbox != null);
  }

  static Future<void> _open(
    _StorageArea area,
    String? directory,
    int quota,
    bool sandboxed,
  ) async {
    try {
      final path =
          directory ??
          p.join(
            (await getApplicationSupportDirectory()).path,
            'flax',
            'local_storage',
          );
      final box = sandboxed
          ? 'flax_storage_${sha256.convert(utf8.encode(path))}'
          : FlaxLocalStorageStore.boxName;
      if (sandboxed) {
        final home = p.dirname(path);
        if (await Directory(home).resolveSymbolicLinks() != home ||
            FileSystemEntity.isLinkSync(path)) {
          throw const FlaxSandboxException(
            operation: 'localStorage.initialize',
            message: 'Linked storage directories are unavailable',
          );
        }
        await Directory(path).create();
        if (Directory(path)
            .listSync(followLinks: false)
            .any((entry) => entry is Link)) {
          throw const FlaxSandboxException(
            operation: 'localStorage.initialize',
            message: 'Linked storage files are unavailable',
          );
        }
      }
      area.store = await FlaxLocalStorageStore.open(
        path,
        quota,
        name: box,
        isolated: sandboxed,
      );
    } catch (_) {
      area.configuration = null;
      rethrow;
    } finally {
      area.initializing = null;
    }
  }

  static FlaxLocalStorageStore _requireStore(String? key) {
    final area = _areas[key];
    if (area?.store == null ||
        area!.initializing != null ||
        area.shuttingDown != null) {
      throw StateError(
        'Await FlaxLocalStoragePlugin.initialize() for this application before using localStorage',
      );
    }
    return area.store!;
  }

  static Future<void> flush({FlaxSandbox? sandbox}) =>
      _requireStore(sandbox?.homePath).flush();

  static Future<void> shutdown({FlaxSandbox? sandbox}) {
    final key = sandbox?.homePath;
    final area = _areas[key];
    if (area == null) return Future<void>.value();
    if (area.shuttingDown != null) return area.shuttingDown!;
    if (area.initializing != null) {
      throw StateError('Await localStorage initialization before shutdown');
    }
    final store = area.store;
    if (store == null) {
      _areas.remove(key);
      return Future<void>.value();
    }
    if (store.attachments != 0) {
      throw StateError(
        'Close the Flax sessions using localStorage before shutdown',
      );
    }
    return area.shuttingDown = () async {
      try {
        await store.close();
      } finally {
        _areas.remove(key);
      }
    }();
  }

  @override
  String get id => 'flax.localStorage';
  @override
  Set<String> get jsModules => const {'@flax/local-storage'};
  @override
  Set<String> get globals => const {
    'localStorage',
    'Storage',
    'StorageEvent',
    'onstorage',
  };
  @override
  FlaxPluginInstance install(FlaxHostContext context) {
    final host = _StorageHost(
      context,
      _requireStore(context.sandbox?.homePath),
    );
    try {
      host.install();
      return host;
    } catch (_) {
      host.dispose();
      rethrow;
    }
  }
}

class _StorageArea {
  FlaxLocalStorageStore? store;
  Future<void>? initializing;
  Future<void>? shuttingDown;
  (String?, int)? configuration;
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
