import 'package:flax/permissions.dart';
import 'package:test/test.dart';

import '../example/existing_host.dart';
import 'support/storage.dart';

void main() {
  test('Core-only host service and one module callback work without the optional bridge', () async {
    var granted = false, nativeRequests = 0, modulePrompts = 0;
    final native = FlaxExistingHostPermissionAdapter(
      queryStatus: (_, _) async => FlaxNativePermissionStatus(
        state: granted
            ? FlaxPermissionState.granted
            : FlaxPermissionState.denied,
        canRequest: !granted,
      ),
      requestPermission: (request) async {
        expect(request.permission, 'flax.camera');
        expect(request.scope, const <String, Object?>{});
        if (!request.isCancelled) {
          nativeRequests++;
          granted = true;
        }
      },
    );
    final manager = FlaxPermissionManager(
      storage: PermissionTestStorage(),
      native: native,
    );
    addTearDown(manager.close);
    final application = await manager.approveInstallation(
      sourceIdentity: 'test:host',
      manifest: FlaxPermissionManifest(
        appId: 'test.custom.host',
        defaultLocale: 'en',
        permissions: {
          'flax.camera': FlaxPermissionDeclaration(
            purpose: const {'en': 'Use host camera'},
          ),
        },
      ),
    );
    Future<FlaxPermissionDecision> showConsent(
      FlaxPermissionRequest request,
    ) async {
      modulePrompts++;
      expect(request.purpose, 'Use host camera');
      return FlaxPermissionDecision.allow;
    }

    final context = FlaxPermissionContext(
      manifest: application.manifest,
      policy: FlaxPermissionPolicy(
        application: application,
        allow: {'flax.camera'},
        onRequest: showConsent,
      ),
    );
    expect((await context.query('flax.camera')).requested, isFalse);
    expect(nativeRequests, 0);
    expect(
      (await context.request('flax.camera')).state,
      FlaxPermissionState.granted,
    );
    expect([nativeRequests, modulePrompts], [1, 1]);
    expect(
      (await context.request('flax.camera')).state,
      FlaxPermissionState.granted,
    );
    expect([nativeRequests, modulePrompts], [1, 1]);
  });
}
