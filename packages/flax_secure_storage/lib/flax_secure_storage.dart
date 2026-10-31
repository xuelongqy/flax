/// Optional native storage. Import only from trusted Dart host code.
library;

import 'dart:async';
import 'dart:convert';

import 'package:crypto/crypto.dart';
import 'package:flax/secure_storage.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';

export 'package:flax/secure_storage.dart';

/// Keychain on Apple platforms; Android Keystore AES-GCM and no-backup files.
final class FlaxPlatformSecureStorage implements FlaxSecureStorage {
  FlaxPlatformSecureStorage._(this.namespace);

  static const _channel = MethodChannel('dev.flax.secure_storage');
  static final _instances = <String, Future<FlaxPlatformSecureStorage>>{};
  static const maxRecordBytes = 1024 * 1024;
  final String namespace;
  Future<void> _queue = Future.value();

  static Future<FlaxPlatformSecureStorage> open({String namespace = 'flax'}) {
    _address(namespace);
    if (kIsWeb ||
        !{
          TargetPlatform.iOS,
          TargetPlatform.macOS,
          TargetPlatform.android,
        }.contains(defaultTargetPlatform)) {
      throw const FlaxSecureStorageException(
        FlaxSecureStorageFailure.unsupported,
      );
    }
    return _instances.putIfAbsent(namespace, () async {
      final storage = FlaxPlatformSecureStorage._(namespace);
      try {
        await storage._invoke<void>('initialize');
        return storage;
      } catch (_) {
        _instances.remove(namespace);
        rethrow;
      }
    });
  }

  String get _root => sha256.convert(utf8.encode(namespace)).toString();
  static String _hash(Object value) =>
      sha256.convert(utf8.encode(jsonEncode(value))).toString();
  static void _address(String value) {
    if (value.isEmpty || utf8.decode(utf8.encode(value)) != value) {
      throw ArgumentError('Secure storage addresses must be nonempty Unicode');
    }
  }

  String _key(String module, String owner, String key) {
    for (final value in [module, owner, key]) {
      _address(value);
    }
    return 'v1_${_hash(owner)}_${_hash([module, owner, key])}';
  }

  Future<T> _serialize<T>(Future<T> Function() action) {
    final result = _queue.then((_) => action());
    _queue = result.then<void>((_) {}, onError: (Object _) {});
    return result;
  }

  Future<T?> _invoke<T>(String method, {String? key, String? value}) async {
    try {
      return await _channel.invokeMethod<T>(method, {
        'namespace': _root,
        'key': ?key,
        'value': ?value,
      });
    } on MissingPluginException catch (error) {
      throw FlaxSecureStorageException(
        FlaxSecureStorageFailure.unsupported,
        cause: error,
      );
    } on PlatformException catch (error) {
      final reason = FlaxSecureStorageFailure.values
          .where((reason) => reason.name == error.code)
          .firstOrNull;
      throw FlaxSecureStorageException(
        reason ?? FlaxSecureStorageFailure.ioFailure,
        cause: error,
      );
    }
  }

  Map<String, Object?> _decode(String value, String storageKey) {
    try {
      final record = (jsonDecode(value) as Map).cast<String, Object?>();
      if (record['format'] != 1 ||
          record['namespace'] != namespace ||
          record['module'] is! String ||
          record['owner'] is! String ||
          record['key'] is! String ||
          record['value'] is! String ||
          _key(
                record['module'] as String,
                record['owner'] as String,
                record['key'] as String,
              ) !=
              storageKey) {
        throw const FormatException('Secure storage address mismatch');
      }
      return record;
    } catch (error) {
      throw FlaxSecureStorageException(
        FlaxSecureStorageFailure.integrityFailure,
        cause: error,
      );
    }
  }

  @override
  Future<Uint8List?> read({
    required String module,
    required String owner,
    required String key,
  }) {
    final storageKey = _key(module, owner, key);
    return _serialize(() async {
      final value = await _invoke<String>('read', key: storageKey);
      if (value == null) return null;
      final record = _decode(value, storageKey);
      try {
        return Uint8List.fromList(base64Decode(record['value'] as String));
      } catch (error) {
        throw FlaxSecureStorageException(
          FlaxSecureStorageFailure.integrityFailure,
          cause: error,
        );
      }
    });
  }

  @override
  Future<void> write({
    required String module,
    required String owner,
    required String key,
    required Uint8List value,
  }) {
    final storageKey = _key(module, owner, key);
    if (value.length > maxRecordBytes) {
      throw ArgumentError('Secure record exceeds 1 MiB');
    }
    // Snapshot before the caller can mutate its buffer while this operation queues.
    final encoded = jsonEncode({
      'format': 1,
      'namespace': namespace,
      'module': module,
      'owner': owner,
      'key': key,
      'value': base64Encode(value),
    });
    return _serialize(
      () async => _invoke<void>('write', key: storageKey, value: encoded),
    );
  }

  @override
  Future<void> delete({
    required String module,
    required String owner,
    required String key,
  }) {
    final storageKey = _key(module, owner, key);
    return _serialize(() async => _invoke<void>('delete', key: storageKey));
  }

  @override
  Future<void> deleteOwner({required String owner}) {
    _address(owner);
    final prefix = 'v1_${_hash(owner)}_';
    return _serialize(() async {
      final keys = await _invoke<List<Object?>>('keys');
      if (keys == null) {
        throw const FlaxSecureStorageException(
          FlaxSecureStorageFailure.integrityFailure,
        );
      }
      for (final key in keys.cast<String>().where(
        (key) => key.startsWith(prefix),
      )) {
        // The address selects the owner even if its encrypted payload is corrupt.
        await _invoke<void>('delete', key: key);
      }
    });
  }
}
