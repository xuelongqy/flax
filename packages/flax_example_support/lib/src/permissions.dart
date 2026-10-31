import 'package:flax/flax.dart';
import 'package:flax_permissions/flax_permissions.dart';
import 'package:flax_secure_storage/flax_secure_storage.dart';

/// Explicit host approval for checked-in, trusted example code only.
/// Untrusted installation flows must show the declarations before approving them.
Future<FlaxPermissionPolicy> approveTrustedExamplePermissions(
  String appId, {
  FlaxPermissionManifest? manifest,
}) async {
  final manager = FlaxPermissionManager(
    storage: await FlaxPlatformSecureStorage.open(),
    native: const FlaxPermissionHandlerAdapter(),
  );
  manifest ??= FlaxPermissionManifest(
    appId: appId,
    defaultLocale: 'en',
    permissions: {
      for (final id in [
        'flax.network',
        'flax.module.remote',
        'flax.wasm',
        'flax.clipboard.read',
        'flax.clipboard.write',
      ])
        id: FlaxPermissionDeclaration(
          purpose: const {'en': 'Run the checked-in Flax example'},
        ),
    },
  );
  final application = await manager.approveInstallation(
    manifest: manifest,
    sourceIdentity: 'flax:checked-in-examples',
  );
  return FlaxPermissionPolicy(
    application: application,
    allow: manifest.permissions.keys.toSet(),
  );
}
