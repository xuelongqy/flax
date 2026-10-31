import 'package:flax/permissions.dart';
import 'package:flax_permissions/flax_permissions.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  const channel = MethodChannel('flutter.baseflow.com/permissions/methods');
  const adapter = FlaxPermissionHandlerAdapter();
  var status = 0;
  final calls = <String>[];
  setUp(() {
    debugDefaultTargetPlatformOverride = TargetPlatform.iOS;
    status = 0;
    calls.clear();
    TestDefaultBinaryMessengerBinding.instance.defaultBinaryMessenger
        .setMockMethodCallHandler(channel, (call) async {
          calls.add(call.method);
          if (call.method == 'checkPermissionStatus') return status;
          if (call.method == 'checkServiceStatus') return 1;
          fail(
            'A query adapter must never request host OS permission: ${call.method}',
          );
        });
  });
  tearDown(() {
    debugDefaultTargetPlatformOverride = null;
    TestDefaultBinaryMessengerBinding.instance.defaultBinaryMessenger
        .setMockMethodCallHandler(channel, null);
  });
  test(
    'query-only mapping distinguishes denied, granted, limited and restricted',
    () async {
      expect(
        (await adapter.query('flax.camera', const {})).state,
        FlaxPermissionState.denied,
      );
      status = 1;
      expect(
        (await adapter.query('flax.camera', const {})).state,
        FlaxPermissionState.granted,
      );
      status = 3;
      final limited = await adapter.query('flax.photos.read', const {});
      expect(limited.state, FlaxPermissionState.limited);
      expect(limited.scope, isNull);
      status = 2;
      expect(
        (await adapter.query('flax.camera', const {})).reason,
        'hostRestricted',
      );
      expect(calls.toSet(), {'checkPermissionStatus'});
    },
  );
  test('location service is separate and unsupported capabilities never trigger prompts', () async {
    status = 1;
    final location = await adapter.query('flax.location', const {});
    expect(location.serviceStatus, FlaxPermissionServiceStatus.enabled);
    expect(
      (await adapter.query('example.business', const {})).state,
      FlaxPermissionState.unavailable,
    );
    debugDefaultTargetPlatformOverride = TargetPlatform.android;
    calls.clear();
    expect(
      (await adapter.query('flax.photos.add', const {})).state,
      FlaxPermissionState.unavailable,
    );
    expect(calls, isEmpty);
    status = 0;
    expect(
      (await adapter.query('flax.speech.recognition', const {})).state,
      FlaxPermissionState.denied,
    );
    expect(calls, ['checkPermissionStatus']);
    debugDefaultTargetPlatformOverride = TargetPlatform.macOS;
    expect(
      (await adapter.query('flax.camera', const {})).state,
      FlaxPermissionState.unavailable,
    );
  });

  test(
    'local network is unsupported on iOS without invoking its native group',
    () async {
      final unsupported = await adapter.query('flax.network.local', const {});
      expect(unsupported.state, FlaxPermissionState.unavailable);
      expect(unsupported.reason, 'nativeCapabilityUnsupported');
      expect(calls, isEmpty);
      debugDefaultTargetPlatformOverride = TargetPlatform.android;
      status = 1;
      expect(
        (await adapter.query('flax.network.local', const {})).state,
        FlaxPermissionState.granted,
      );
      expect(calls, ['checkPermissionStatus']);
    },
  );
}
