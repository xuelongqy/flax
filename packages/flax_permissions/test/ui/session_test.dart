import 'dart:async';

import 'package:flax/flax.dart';
import 'package:flax_permissions/flax_permissions.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

import '../support/storage.dart';

const _orders = FlaxPermissionDefinition(
  id: 'example.orders.read',
  title: 'Read orders',
  authorization: FlaxPermissionAuthorization.runtime,
);

class _Capture extends FlaxPlugin implements FlaxPluginInstance {
  _Capture(this.definition);
  final FlaxPermissionDefinition definition;
  late final FlaxPermissionContext permissions;
  @override
  String get id => 'test.${definition.id}';
  @override
  Set<String> get globals => const {};
  @override
  List<FlaxPermissionDefinition> get permissionDefinitions => [definition];
  @override
  FlaxPluginInstance install(FlaxHostContext context) {
    permissions = context.permissions!;
    return this;
  }

  @override
  void close() {}
  @override
  void dispose() {}
}

class _Native implements FlaxNativePermissionRequester {
  static const adapter = FlaxPermissionHandlerAdapter(requestOnDemand: true);
  final tokens = <FlaxNativePermissionRequest>[];
  var settled = 0;
  @override
  Future<FlaxNativePermissionStatus> query(String permission, Object scope) =>
      adapter.query(permission, scope);
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

Future<(_Capture, FlaxSession)> _session(
  FlaxPermissionManager manager,
  FlaxPermissionDefinition definition,
  FlaxPermissionRequestHandler consent, {
  FlaxPermissionApplication? application,
}) async {
  final app =
      application ??
      await manager.approveInstallation(
        sourceIdentity: 'test:host',
        manifest: FlaxPermissionManifest(
          appId: 'test.${definition.id}',
          defaultLocale: 'en',
          permissions: {
            definition.id: FlaxPermissionDeclaration(
              purpose: const {'en': 'Use native fixture'},
            ),
          },
        ),
      );
  final plugin = _Capture(definition);
  final errors = <Object>[];
  final session = FlaxSession(
    createRuntime: FlaxEngine.createRuntime,
    permissionManifest: app.manifest,
    permissions: FlaxPermissionPolicy(
      application: app,
      allow: {definition.id},
      onRequest: consent,
    ),
    plugins: [plugin],
    bindings: FlaxBindingRegistry([flutterBindings]),
    onError: (error, _) => errors.add(error),
    source: "import {runApp, Text} from '@flax/flutter/widgets'; runApp(Text('native permission fixture'));",
  );
  addTearDown(() async {
    await session.close();
    expect(errors, isEmpty);
  });
  await session.ready;
  return (plugin, session);
}

Future<void> _until(bool Function() condition) async {
  for (var i = 0; i < 100; i++) {
    if (condition()) return;
    await Future<void>.delayed(Duration.zero);
  }
  fail('Session permission checkpoint was not reached');
}

void main() {
  final binding = TestWidgetsFlutterBinding.ensureInitialized();
  const channel = MethodChannel('flutter.baseflow.com/permissions/methods');
  late Completer<Map<int, int>> physical;
  Completer<int>? heldQuery;
  var status = 0, nativeCalls = 0, queries = 0;
  setUp(() {
    debugDefaultTargetPlatformOverride = TargetPlatform.iOS;
    binding.handleAppLifecycleStateChanged(AppLifecycleState.resumed);
    physical = Completer<Map<int, int>>();
    status = 0;
    nativeCalls = 0;
    queries = 0;
    heldQuery = null;
    TestDefaultBinaryMessengerBinding.instance.defaultBinaryMessenger
        .setMockMethodCallHandler(channel, (call) async {
          if (call.method == 'checkPermissionStatus') {
            queries++;
            return heldQuery?.future ?? status;
          }
          if (call.method == 'requestPermissions') {
            nativeCalls++;
            final result = await physical.future;
            status = 1;
            return result;
          }
          fail('Unexpected native method: ${call.method}');
        });
  });
  tearDown(() {
    debugDefaultTargetPlatformOverride = null;
    TestDefaultBinaryMessengerBinding.instance.defaultBinaryMessenger
        .setMockMethodCallHandler(channel, null);
    binding.handleAppLifecycleStateChanged(AppLifecycleState.resumed);
  });

  test(
    'Session close preserves its peer during shared post-consent refresh',
    () async {
      status = 1;
      final native = _Native();
      final manager = FlaxPermissionManager(
        storage: PermissionTestStorage(),
        native: native,
      );
      addTearDown(manager.close);
      final answer = Completer<FlaxPermissionDecision>();
      var prompts = 0;
      FlaxPermissionRequest? consent;
      Future<FlaxPermissionDecision> prompt(FlaxPermissionRequest request) {
        prompts++;
        consent = request;
        return answer.future;
      }

      final (first, firstSession) = await _session(
        manager,
        FlaxPermissionDefinitions.camera,
        prompt,
      );
      final application = await manager.openApplication(
        appId: 'test.flax.camera',
        sourceIdentity: 'test:host',
      );
      final (peer, peerSession) = await _session(
        manager,
        FlaxPermissionDefinitions.camera,
        prompt,
        application: application!,
      );
      Object? retired;
      final closed = first.permissions
          .request('flax.camera')
          .then<Object>(
            (value) => retired = value,
            onError: (Object error) => retired = error,
          );
      final live = peer.permissions.request('flax.camera');
      await _until(() => prompts == 1);
      await Future<void>.delayed(Duration.zero);
      heldQuery = Completer<int>();
      final beforeQuery = queries;
      answer.complete(FlaxPermissionDecision.allow);
      await _until(() => queries > beforeQuery);
      await firstSession.close();
      await Future<void>.delayed(Duration.zero);
      final beforeRelease = retired;
      final consentCancelled = consent!.isCancelled;
      heldQuery!.complete(1);
      await closed;
      final result = await live;
      await peerSession.close();
      expect(beforeRelease, isStateError);
      expect(consentCancelled, isFalse);
      expect(result.state, FlaxPermissionState.granted);
      expect(prompts, 1);
      expect(nativeCalls, 0);
    },
  );

  test('OS inactive/paused preserves native work, waits for resumed, and cancels unrelated module UI', () async {
    final native = _Native();
    final manager = FlaxPermissionManager(
      storage: PermissionTestStorage(),
      native: native,
      providers: const [FlaxPermissionProvider(_orders)],
    );
    addTearDown(manager.close);
    var nativeModules = 0;
    final (camera, _) = await _session(
      manager,
      FlaxPermissionDefinitions.camera,
      (_) async {
        nativeModules++;
        return FlaxPermissionDecision.allow;
      },
    );
    FlaxPermissionRequest? ordinary;
    final answer = Completer<FlaxPermissionDecision>();
    final (orders, _) = await _session(manager, _orders, (request) {
      ordinary = request;
      return answer.future;
    });
    final first = camera.permissions.request('flax.camera');
    await _until(() => nativeCalls == 1);
    final second = orders.permissions.request(_orders.id);
    await _until(() => ordinary != null);
    binding.handleAppLifecycleStateChanged(AppLifecycleState.inactive);
    binding.handleAppLifecycleStateChanged(AppLifecycleState.paused);
    await ordinary!.whenCancelled;
    expect(native.tokens.single.isCancelled, isFalse);
    physical.complete({1: 1});
    for (var i = 0; i < 12; i++) {
      await Future<void>.delayed(Duration.zero);
    }
    expect(native.settled, 0);
    expect(nativeModules, 0);
    binding.handleAppLifecycleStateChanged(AppLifecycleState.resumed);
    expect((await first).state, FlaxPermissionState.granted);
    expect(nativeModules, 1);
    expect(nativeCalls, 1);
    answer.complete(FlaxPermissionDecision.allow);
    expect((await second).state, FlaxPermissionState.prompt);
  });

  for (final phase in ['native Future', 'foreground wait']) {
    test(
      'Session close during $phase retires authority without late module consent',
      () async {
        final native = _Native();
        final manager = FlaxPermissionManager(
          storage: PermissionTestStorage(),
          native: native,
        );
        addTearDown(manager.close);
        var modules = 0;
        final (camera, session) = await _session(
          manager,
          FlaxPermissionDefinitions.camera,
          (_) async {
            modules++;
            return FlaxPermissionDecision.allow;
          },
        );
        final request = camera.permissions.request('flax.camera');
        final closed = expectLater(request, throwsStateError);
        await _until(() => nativeCalls == 1);
        binding.handleAppLifecycleStateChanged(AppLifecycleState.paused);
        if (phase == 'foreground wait') {
          physical.complete({1: 1});
          for (var i = 0; i < 12; i++) {
            await Future<void>.delayed(Duration.zero);
          }
        }
        expect(native.settled, 0);
        await session.close();
        await closed;
        expect(native.tokens.single.isCancelled, isTrue);
        if (!physical.isCompleted) physical.complete({1: 1});
        await _until(() => native.settled == 1);
        binding.handleAppLifecycleStateChanged(AppLifecycleState.resumed);
        expect(modules, 0);
        expect(nativeCalls, 1);
      },
    );
  }
}
