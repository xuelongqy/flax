import 'dart:typed_data';

import 'package:flax/permissions.dart';
import 'package:flax/secure_storage.dart';

/// Explicit test-only installation approval. Production hosts use durable storage.
final class FlaxTestPermissions {
  FlaxTestPermissions._(this.manager, this.application);
  final FlaxPermissionManager manager;
  final FlaxPermissionApplication application;
  FlaxPermissionManifest get manifest => application.manifest;
  FlaxPermissionPolicy get policy => FlaxPermissionPolicy(
    application: application,
    allow: manifest.permissions.keys.toSet(),
    onRequest: (_) async => FlaxPermissionDecision.allow,
  );

  static Future<FlaxTestPermissions> create({
    String appId = 'flax.test.application',
    FlaxPermissionManifest? manifest,
    List<FlaxPermissionDefinition> definitions = const [],
    Map<String, Object?> permissions = const {
      'flax.network': null,
      'flax.module.remote': null,
      'flax.wasm': null,
      'flax.clipboard.read': null,
      'flax.clipboard.write': null,
    },
  }) async {
    final manager = FlaxPermissionManager(
      storage: _TestSecureStorage(),
      definitions: definitions,
    );
    try {
      final application = await manager.approveInstallation(
        sourceIdentity: 'test:trusted-fixture',
        manifest:
            manifest ??
            FlaxPermissionManifest(
              appId: appId,
              defaultLocale: 'en',
              permissions: {
                for (final entry in permissions.entries)
                  entry.key: FlaxPermissionDeclaration(
                    purpose: const {
                      'en': 'Exercise an explicitly approved test API',
                    },
                    scope: entry.value,
                  ),
              },
            ),
      );
      return FlaxTestPermissions._(manager, application);
    } catch (_) {
      await manager.close();
      rethrow;
    }
  }

  Future<void> close() => manager.close();
}

final class _TestSecureStorage implements FlaxSecureStorage {
  final _records = <(String, String, String), Uint8List>{};
  @override
  Future<Uint8List?> read({
    required String module,
    required String owner,
    required String key,
  }) async {
    final value = _records[(module, owner, key)];
    return value == null ? null : Uint8List.fromList(value);
  }

  @override
  Future<void> write({
    required String module,
    required String owner,
    required String key,
    required Uint8List value,
  }) async {
    _records[(module, owner, key)] = Uint8List.fromList(value);
  }

  @override
  Future<void> delete({
    required String module,
    required String owner,
    required String key,
  }) async {
    _records.remove((module, owner, key));
  }

  @override
  Future<void> deleteOwner({required String owner}) async {
    _records.removeWhere((key, _) => key.$2 == owner);
  }
}
