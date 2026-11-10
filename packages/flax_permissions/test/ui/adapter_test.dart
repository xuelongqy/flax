import 'dart:async';

import 'package:flax/permissions.dart';
import 'package:flax_permissions/flax_permissions.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:permission_handler/permission_handler.dart';

import '../support/storage.dart';

class _Probe implements FlaxNativePermissionRequester {
  _Probe(this.adapter, {this.forceRequestability = false});
  final FlaxPermissionHandlerAdapter adapter;
  final bool forceRequestability;
  final tokens = <FlaxNativePermissionRequest>[];
  int settled = 0;
  @override
  Future<FlaxNativePermissionStatus> query(String permission, Object scope) =>
      forceRequestability
      ? Future.value(
          const FlaxNativePermissionStatus(
            state: FlaxPermissionState.denied,
            canRequest: true,
          ),
        )
      : adapter.query(permission, scope);
  @override
  Future<void> request(FlaxNativePermissionRequest request) async {
    tokens.add(request);
    try {
      await adapter.request(request);
    } finally {
      settled++;
    }
  }
}

Future<FlaxPermissionContext> _context(
  _Probe native, {
  String permission = 'flax.camera',
  FlaxPermissionRequestHandler? onRequest,
  bool Function()? canInteract,
}) async {
  final manager = FlaxPermissionManager(
    storage: PermissionTestStorage(),
    native: native,
  );
  addTearDown(manager.close);
  final app = await manager.approveInstallation(
    sourceIdentity: 'test:host',
    manifest: FlaxPermissionManifest(
      appId: 'test.native',
      defaultLocale: 'en',
      permissions: {
        permission: FlaxPermissionDeclaration(
          purpose: const {'en': 'Use camera fixture'},
        ),
      },
    ),
  );
  return FlaxPermissionContext(
    manifest: app.manifest,
    canInteract: canInteract,
    policy: FlaxPermissionPolicy(
      application: app,
      allow: {permission},
      onRequest: onRequest ?? (_) async => FlaxPermissionDecision.allow,
    ),
  );
}

Future<void> _until(bool Function() condition) async {
  for (var i = 0; i < 100; i++) {
    if (condition()) return;
    await Future<void>.delayed(Duration.zero);
  }
  fail('Asynchronous permission checkpoint was not reached');
}

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  const channel = MethodChannel('flutter.baseflow.com/permissions/methods');
  const adapter = FlaxPermissionHandlerAdapter();
  var status = 0;
  var service = 1;
  final calls = <String>[];
  final statuses = <int, int>{};
  final requests = <List<int>>[];
  Future<Map<int, int>> Function(List<int>)? requestAnswer;
  void Function(int)? onStatusQuery;
  // These mobile fixtures require Flutter's debug-only platform override.
  setUp(() {
    debugDefaultTargetPlatformOverride = TargetPlatform.iOS;
    status = 0;
    service = 1;
    statuses.clear();
    requests.clear();
    requestAnswer = null;
    onStatusQuery = null;
    calls.clear();
    TestWidgetsFlutterBinding.instance.handleAppLifecycleStateChanged(
      AppLifecycleState.resumed,
    );
    TestDefaultBinaryMessengerBinding.instance.defaultBinaryMessenger
        .setMockMethodCallHandler(channel, (call) async {
          calls.add(call.method);
          if (call.method == 'checkPermissionStatus') {
            onStatusQuery?.call(call.arguments as int);
            return statuses[call.arguments] ?? status;
          }
          if (call.method == 'checkServiceStatus') return service;
          if (call.method == 'requestPermissions') {
            final ids = (call.arguments as List).cast<int>();
            requests.add(ids);
            final result =
                await requestAnswer?.call(ids) ?? {for (final id in ids) id: 1};
            statuses.addAll(result);
            return result;
          }
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
    skip: !kDebugMode,
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
  }, skip: !kDebugMode);

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
    skip: !kDebugMode,
  );

  test(
    'requestability is opt-in and excludes unsafe or ambiguous statuses',
    () async {
      const enabled = FlaxPermissionHandlerAdapter(requestOnDemand: true);
      expect(
        (await adapter.query('flax.camera', const {})).canRequest,
        isFalse,
      );
      expect((await enabled.query('flax.camera', const {})).canRequest, isTrue);
      for (final value in [1, 2, 3, 4, 5]) {
        status = value;
        expect(
          (await enabled.query('flax.camera', const {})).canRequest,
          isFalse,
        );
      }
      status = 0;
      for (final value in [0, 2]) {
        service = value;
        expect(
          (await enabled.query('flax.location', const {})).canRequest,
          isFalse,
        );
      }
      service = 1;
      expect(
        (await enabled.query('flax.location.background', const {})).canRequest,
        isFalse,
      );
      expect(
        (await enabled.query('flax.network.local', const {})).canRequest,
        isFalse,
      );
      debugDefaultTargetPlatformOverride = TargetPlatform.android;
      expect((await enabled.query('flax.camera', const {})).canRequest, isTrue);
      expect(
        (await enabled.query('flax.photos.add', const {})).canRequest,
        isFalse,
      );
      expect(requests, isEmpty);
    },
    skip: !kDebugMode,
  );

  test('native grant still requires module consent and avoids global chained callbacks', () async {
    var foreignCallbacks = 0, modules = 0;
    Permission.camera.onGrantedCallback(() => foreignCallbacks++);
    addTearDown(() => Permission.camera.onGrantedCallback(null));
    final probe = _Probe(
      const FlaxPermissionHandlerAdapter(requestOnDemand: true),
    );
    final context = await _context(
      probe,
      onRequest: (_) async {
        modules++;
        return FlaxPermissionDecision.deny;
      },
    );
    final result = await context.request('flax.camera');
    expect(result.reason, 'moduleDenied');
    expect(result.requested, isTrue);
    expect(modules, 1);
    expect(requests, [
      [Permission.camera.value],
    ]);
    expect(foreignCallbacks, 0);
  }, skip: !kDebugMode);

  test('direct adapter requests recheck opt-out, restricted and background eligibility', () async {
    for (final (nativeAdapter, permission, nativeStatus) in [
      (const FlaxPermissionHandlerAdapter(), 'flax.camera', 0),
      (
        const FlaxPermissionHandlerAdapter(requestOnDemand: true),
        'flax.camera',
        2,
      ),
      (
        const FlaxPermissionHandlerAdapter(requestOnDemand: true),
        'flax.location.background',
        0,
      ),
    ]) {
      status = nativeStatus;
      final probe = _Probe(nativeAdapter, forceRequestability: true);
      final context = await _context(probe, permission: permission);
      await context.request(permission);
      expect(probe.tokens, hasLength(1));
    }
    expect(requests, isEmpty);
  }, skip: !kDebugMode);

  test(
    'separate managers serialize physical OS Futures after all waiters close',
    () async {
      final firstPhysical = Completer<Map<int, int>>();
      requestAnswer = (ids) => requests.length == 1
          ? firstPhysical.future
          : Future.value({for (final id in ids) id: 1});
      final leftProbe = _Probe(
        const FlaxPermissionHandlerAdapter(requestOnDemand: true),
      );
      final rightProbe = _Probe(
        const FlaxPermissionHandlerAdapter(requestOnDemand: true),
      );
      final left = await _context(leftProbe);
      final right = await _context(rightProbe, permission: 'flax.microphone');
      final first = left.request('flax.camera');
      final closed = expectLater(first, throwsStateError);
      await _until(() => requests.length == 1);
      final second = right.request('flax.microphone');
      await _until(() => rightProbe.tokens.isNotEmpty);
      await left.close();
      await closed;
      expect(leftProbe.settled, 0);
      expect(requests, hasLength(1));
      firstPhysical.complete({Permission.camera.value: 1});
      expect((await second).state, FlaxPermissionState.granted);
      expect(requests, [
        [Permission.camera.value],
        [Permission.microphone.value],
      ]);
      expect(leftProbe.settled, 1);
    },
    skip: !kDebugMode,
  );

  test('queued cancellation skips native UI and granted queue recheck waits for resumed', () async {
    final physical = Completer<Map<int, int>>();
    requestAnswer = (_) => physical.future;
    final firstProbe = _Probe(
      const FlaxPermissionHandlerAdapter(requestOnDemand: true),
    );
    final cancelledProbe = _Probe(
      const FlaxPermissionHandlerAdapter(requestOnDemand: true),
    );
    final grantedProbe = _Probe(
      const FlaxPermissionHandlerAdapter(requestOnDemand: true),
    );
    final first = await _context(firstProbe);
    final cancelled = await _context(
      cancelledProbe,
      permission: 'flax.microphone',
    );
    final granted = await _context(grantedProbe);
    final one = first.request('flax.camera');
    final firstClosed = expectLater(one, throwsStateError);
    await _until(() => requests.length == 1);
    final two = cancelled.request('flax.microphone');
    final cancelledResult = expectLater(two, throwsStateError);
    final three = granted.request('flax.camera');
    await _until(
      () => cancelledProbe.tokens.isNotEmpty && grantedProbe.tokens.isNotEmpty,
    );
    await cancelled.close();
    await cancelledResult;
    await first.close();
    await firstClosed;
    final binding = TestWidgetsFlutterBinding.instance;
    binding.handleAppLifecycleStateChanged(AppLifecycleState.paused);
    physical.complete({Permission.camera.value: 1});
    await _until(() => firstProbe.settled == 1 && cancelledProbe.settled == 1);
    expect(grantedProbe.settled, 0);
    binding.handleAppLifecycleStateChanged(AppLifecycleState.resumed);
    expect((await three).state, FlaxPermissionState.granted);
    expect(requests, hasLength(1));
    expect(cancelledProbe.settled, 1);
    expect(grantedProbe.settled, 1);
  }, skip: !kDebugMode);

  for (final outcome in ['resume', 'cancel', 'restricted']) {
    test('queued denied target waits for foreground: $outcome', () async {
      final physical = Completer<Map<int, int>>();
      requestAnswer = (ids) => requests.length == 1
          ? physical.future
          : Future.value({for (final id in ids) id: 1});
      final firstProbe = _Probe(
        const FlaxPermissionHandlerAdapter(requestOnDemand: true),
      );
      final queuedProbe = _Probe(
        const FlaxPermissionHandlerAdapter(requestOnDemand: true),
      );
      final first = await _context(firstProbe);
      final queued = await _context(queuedProbe, permission: 'flax.microphone');
      final firstResult = first.request('flax.camera');
      final firstClosed = expectLater(firstResult, throwsStateError);
      await _until(() => requests.length == 1);
      final pending = queued.request('flax.microphone');
      final result = pending.then<Object>(
        (value) => value,
        onError: (Object error) => error,
      );
      await _until(() => queuedProbe.tokens.isNotEmpty);
      final binding = TestWidgetsFlutterBinding.instance;
      binding.handleAppLifecycleStateChanged(AppLifecycleState.paused);
      await first.close();
      await firstClosed;
      physical.complete({Permission.camera.value: 1});
      await _until(() => firstProbe.settled == 1);
      for (var turn = 0; turn < 12; turn++) {
        await Future<void>.delayed(Duration.zero);
      }
      expect(
        requests,
        hasLength(1),
        reason: 'No queued OS launch while paused',
      );
      if (outcome == 'cancel') {
        await queued.close();
        await _until(() => queuedProbe.settled == 1);
        expect(await result, isStateError);
      } else {
        if (outcome == 'restricted') statuses[Permission.microphone.value] = 2;
        binding.handleAppLifecycleStateChanged(AppLifecycleState.resumed);
        final response = await result as FlaxPermissionResult;
        expect(
          response.state,
          outcome == 'resume'
              ? FlaxPermissionState.granted
              : FlaxPermissionState.denied,
        );
        expect(requests, hasLength(outcome == 'resume' ? 2 : 1));
        if (outcome == 'restricted') expect(response.requested, isFalse);
      }
      binding.handleAppLifecycleStateChanged(AppLifecycleState.resumed);
    }, skip: !kDebugMode);
  }

  test(
    'native launch rechecks lifecycle after its asynchronous status query',
    () async {
      var observations = 0;
      final binding = TestWidgetsFlutterBinding.instance;
      onStatusQuery = (_) {
        if (++observations == 2) {
          binding.handleAppLifecycleStateChanged(AppLifecycleState.paused);
        }
      };
      final probe = _Probe(
        const FlaxPermissionHandlerAdapter(requestOnDemand: true),
      );
      final context = await _context(probe);
      final pending = context
          .request('flax.camera')
          .then<Object>((value) => value, onError: (Object error) => error);
      await _until(() => observations == 2);
      for (var turn = 0; turn < 12; turn++) {
        await Future<void>.delayed(Duration.zero);
      }
      expect(requests, isEmpty);
      binding.handleAppLifecycleStateChanged(AppLifecycleState.resumed);
      expect(
        (await pending as FlaxPermissionResult).state,
        FlaxPermissionState.granted,
      );
      expect(requests, hasLength(1));
    },
    skip: !kDebugMode,
  );

  test(
    'cancelled foreground wait is removed and native errors free the queue',
    () async {
      final binding = TestWidgetsFlutterBinding.instance;
      final physical = Completer<Map<int, int>>();
      requestAnswer = (_) => physical.future;
      final probe = _Probe(
        const FlaxPermissionHandlerAdapter(requestOnDemand: true),
      );
      final context = await _context(probe);
      final pending = context.request('flax.camera');
      final closed = expectLater(pending, throwsStateError);
      await _until(() => requests.isNotEmpty);
      binding.handleAppLifecycleStateChanged(AppLifecycleState.paused);
      physical.complete({Permission.camera.value: 1});
      await Future<void>.delayed(Duration.zero);
      expect(probe.settled, 0);
      await context.close();
      await closed;
      await _until(() => probe.settled == 1);
      binding.handleAppLifecycleStateChanged(AppLifecycleState.resumed);
      statuses.clear();
      requestAnswer = (_) async =>
          throw PlatformException(code: 'REQUEST_FAILED');
      final failing = await _context(
        _Probe(const FlaxPermissionHandlerAdapter(requestOnDemand: true)),
      );
      await expectLater(
        failing.request('flax.camera'),
        throwsA(isA<PlatformException>()),
      );
      requestAnswer = null;
      final next = await _context(
        _Probe(const FlaxPermissionHandlerAdapter(requestOnDemand: true)),
      );
      expect(
        (await next.request('flax.camera')).state,
        FlaxPermissionState.granted,
      );
    },
    skip: !kDebugMode,
  );
}
