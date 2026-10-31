import 'dart:async';
import 'dart:typed_data';

import 'package:flax/flax.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

import '../support/engine.dart';

const _first = FlaxPermissionDefinition(
  id: 'example.native.first',
  title: 'First native resource',
  authorization: FlaxPermissionAuthorization.runtime,
);
const _second = FlaxPermissionDefinition(
  id: 'example.native.second',
  title: 'Second native resource',
  authorization: FlaxPermissionAuthorization.runtime,
);
const _a = {
  'origins': ['https://a.example'],
};
const _b = {
  'origins': ['https://b.example'],
};
const _ab = {
  'origins': ['https://a.example', 'https://b.example'],
};

class _Storage implements FlaxSecureStorage {
  final values = <(String, String, String), Uint8List>{};
  @override
  Future<Uint8List?> read({
    required String module,
    required String owner,
    required String key,
  }) async => values[(module, owner, key)];
  @override
  Future<void> write({
    required String module,
    required String owner,
    required String key,
    required Uint8List value,
  }) async {
    values[(module, owner, key)] = Uint8List.fromList(value);
  }

  @override
  Future<void> delete({
    required String module,
    required String owner,
    required String key,
  }) async {
    values.remove((module, owner, key));
  }

  @override
  Future<void> deleteOwner({required String owner}) async {
    values.removeWhere((key, _) => key.$2 == owner);
  }
}

class _Native implements FlaxNativePermissionAdapter {
  Future<FlaxNativePermissionStatus> Function(String, Object)? answer;
  final calls = <(String, Object)>[];
  @override
  Future<FlaxNativePermissionStatus> query(String permission, Object scope) {
    calls.add((permission, scope));
    return answer?.call(permission, scope) ??
        Future.value(
          FlaxNativePermissionStatus(
            state: FlaxPermissionState.granted,
            scope: scope,
          ),
        );
  }
}

class _Plugin extends FlaxPlugin implements FlaxPluginInstance {
  const _Plugin(this.definition);
  final FlaxPermissionDefinition definition;
  @override
  String get id => 'test.${definition.id}';
  @override
  Set<String> get globals => const {};
  @override
  List<FlaxPermissionDefinition> get permissionDefinitions => [definition];
  @override
  FlaxPluginInstance install(FlaxHostContext context) => this;
  @override
  void close() {}
  @override
  void dispose() {}
}

class _Owner {
  final errors = <Object>[];
  final runtime = createTestRuntime();
  late final FlaxSession session;
  late final FlaxPermissionContext context;

  static Future<_Owner> open(
    FlaxPermissionManager manager,
    FlaxPermissionDefinition definition,
    Object scope,
    String appId, {
    FlaxPermissionRequestHandler? onRequest,
    FlaxPermissionDefinition? extra,
  }) async {
    final owner = _Owner();
    final application = await manager.approveInstallation(
      sourceIdentity: 'test:trusted',
      manifest: FlaxPermissionManifest(
        appId: appId,
        defaultLocale: 'en',
        permissions: {
          definition.id: FlaxPermissionDeclaration(
            purpose: const {'en': 'Read native fixture'},
            scope: scope,
          ),
          if (extra != null)
            extra.id: FlaxPermissionDeclaration(
              purpose: {'en': 'Read another native fixture'},
              scope: _b,
            ),
        },
      ),
    );
    const capture = 'test.native/api#function:capture';
    const read = 'test.native/api#function:read';
    final module = FlaxBindingModule(
      'Native lifecycle fixture',
      [],
      moduleId: 'test.native/api',
      uiProtocol: flaxBindingVersion,
      requiredCapabilities: const [],
      functions: [
        FlaxFunctionBinding(capture, const [], const FlaxTypeRef('String'), (
          _,
        ) {
          owner.context = FlaxPermissionContext.current;
          return 'captured';
        }),
        FlaxFunctionBinding(read, const [], const FlaxTypeRef('String'), (_) {
          FlaxPermissionContext.current.require(
            definition.id,
            operation: 'native.read',
            scope: scope,
          );
          return 'allowed';
        }),
      ],
    );
    owner.session = FlaxSession(
      createRuntime: () => owner.runtime,
      bindings: FlaxBindingRegistry([flutterBindings, module]),
      permissions: FlaxPermissionPolicy(
        application: application,
        allow: {definition.id, if (extra != null) extra.id},
        onRequest: onRequest ?? (_) async => FlaxPermissionDecision.allow,
      ),
      permissionManifest: application.manifest,
      plugins: [_Plugin(definition), if (extra != null) _Plugin(extra)],
      onError: (error, _) => owner.errors.add(error),
      source:
          '''
import {runApp, Text} from '@flax/flutter/widgets';
import {invokeTopLevel} from '@flax/core/bindings';
runApp(Text('native lifecycle'));
invokeTopLevel('$capture', []);
globalThis.nativeRead = () => {
  try { return invokeTopLevel('$read', []); }
  catch (error) { return error.reason ?? error.message ?? String(error); }
};
''',
    );
    await owner.session.ready;
    return owner;
  }

  String read() => (runtime.evaluate('nativeRead()') as FlaxJsString).value;
}

Future<void> _turns() async {
  for (var i = 0; i < 12; i++) {
    await Future<void>.delayed(Duration.zero);
  }
}

void main() {
  final binding = TestWidgetsFlutterBinding.ensureInitialized();
  for (final shape in [
    'different IDs',
    'disjoint targets',
    'equal targets',
    'covering targets',
  ]) {
    test(
      'shared native lifecycle refresh preserves $shape and detaches closed owners',
      () async {
        final native = _Native();
        final manager = FlaxPermissionManager(
          storage: _Storage(),
          native: native,
          providers: const [
            FlaxPermissionProvider(
              _first,
              requiresNative: true,
              scope: FlaxOriginPermissionScope(),
            ),
            FlaxPermissionProvider(
              _second,
              requiresNative: true,
              scope: FlaxOriginPermissionScope(),
            ),
          ],
        );
        binding.handleAppLifecycleStateChanged(AppLifecycleState.resumed);
        final left = await _Owner.open(
          manager,
          _first,
          shape == 'covering targets' ? _ab : _a,
          'test.native.left',
        );
        final right = await _Owner.open(
          manager,
          shape == 'different IDs' ? _second : _first,
          shape == 'disjoint targets' ? _b : _a,
          'test.native.right',
        );
        try {
          await left.context.request(_first.id);
          await right.context.request(
            shape == 'different IDs' ? _second.id : _first.id,
          );
          expect([left.read(), right.read()], ['allowed', 'allowed']);
          native.calls.clear();
          final held = <(Object, Completer<FlaxNativePermissionStatus>)>[];
          native.answer = (_, scope) {
            final c = Completer<FlaxNativePermissionStatus>();
            held.add((scope, c));
            return c.future;
          };
          binding.handleAppLifecycleStateChanged(AppLifecycleState.paused);
          binding.handleAppLifecycleStateChanged(AppLifecycleState.resumed);
          for (final (scope, result) in held) {
            result.complete(
              FlaxNativePermissionStatus(
                state: FlaxPermissionState.granted,
                scope: scope,
              ),
            );
          }
          await _turns();
          expect([left.read(), right.read()], ['allowed', 'allowed']);
          expect(native.calls, hasLength(shape == 'equal targets' ? 1 : 2));
          expect([left.errors, right.errors], [isEmpty, isEmpty]);
          await left.session.close();
          native.answer = null;
          native.calls.clear();
          binding.handleAppLifecycleStateChanged(AppLifecycleState.paused);
          binding.handleAppLifecycleStateChanged(AppLifecycleState.resumed);
          await _turns();
          expect(right.read(), 'allowed');
          expect(native.calls, hasLength(1));
          await right.session.close();
          native.calls.clear();
          binding.handleAppLifecycleStateChanged(AppLifecycleState.paused);
          binding.handleAppLifecycleStateChanged(AppLifecycleState.resumed);
          await _turns();
          expect(native.calls, isEmpty);
        } finally {
          await left.session.close();
          await right.session.close();
          await manager.close();
        }
      },
    );
  }

  test(
    'lifecycle refresh reports only current errors to their own open Session',
    () async {
      final native = _Native();
      final manager = FlaxPermissionManager(
        storage: _Storage(),
        native: native,
        providers: const [
          FlaxPermissionProvider(
            _first,
            requiresNative: true,
            scope: FlaxOriginPermissionScope(),
          ),
          FlaxPermissionProvider(
            _second,
            requiresNative: true,
            scope: FlaxOriginPermissionScope(),
          ),
        ],
      );
      final left = await _Owner.open(
        manager,
        _first,
        _a,
        'test.native.errors.left',
      );
      final right = await _Owner.open(
        manager,
        _second,
        _b,
        'test.native.errors.right',
      );
      try {
        await left.context.request(_first.id);
        await right.context.request(_second.id);
        final held =
            <(String, Object, Completer<FlaxNativePermissionStatus>)>[];
        native.answer = (id, scope) {
          final c = Completer<FlaxNativePermissionStatus>();
          held.add((id, scope, c));
          return c.future;
        };
        void cycle() {
          binding.handleAppLifecycleStateChanged(AppLifecycleState.paused);
          binding.handleAppLifecycleStateChanged(AppLifecycleState.resumed);
        }

        cycle();
        final old = held.toList();
        held.clear();
        cycle();
        for (final (id, scope, result) in old) {
          if (id == _first.id) {
            result.completeError(StateError('OLD_NATIVE_ERROR'));
          } else {
            result.complete(
              FlaxNativePermissionStatus(
                state: FlaxPermissionState.granted,
                scope: scope,
              ),
            );
          }
        }
        await _turns();
        expect([left.errors, right.errors], [isEmpty, isEmpty]);
        for (final (id, scope, result) in held) {
          if (id == _first.id) {
            result.completeError(StateError('CURRENT_NATIVE_ERROR'));
          } else {
            result.complete(
              FlaxNativePermissionStatus(
                state: FlaxPermissionState.granted,
                scope: scope,
              ),
            );
          }
        }
        await _turns();
        expect(left.errors.single.toString(), contains('CURRENT_NATIVE_ERROR'));
        expect(right.errors, isEmpty);
        expect(right.read(), 'allowed');
        held.clear();
        cycle();
        await left.session.close();
        for (final (_, _, result) in held) {
          result.completeError(StateError('CLOSED_NATIVE_ERROR'));
        }
        await _turns();
        expect(left.errors, hasLength(1));
        expect(right.errors.single.toString(), contains('CLOSED_NATIVE_ERROR'));
        await manager.close();
        expect(right.read(), isNot('allowed'));
      } finally {
        await left.session.close();
        await right.session.close();
        await manager.close();
      }
    },
  );

  test(
    'one failed native ID does not stop another ID in the same Session',
    () async {
      final native = _Native();
      final manager = FlaxPermissionManager(
        storage: _Storage(),
        native: native,
        providers: const [
          FlaxPermissionProvider(
            _first,
            requiresNative: true,
            scope: FlaxOriginPermissionScope(),
          ),
          FlaxPermissionProvider(
            _second,
            requiresNative: true,
            scope: FlaxOriginPermissionScope(),
          ),
        ],
      );
      final owner = await _Owner.open(
        manager,
        _first,
        _a,
        'test.native.multiple',
        extra: _second,
      );
      try {
        await owner.context.request(_first.id);
        await owner.context.request(_second.id);
        native.calls.clear();
        native.answer = (id, scope) => id == _first.id
            ? Future.error(StateError('FIRST_ID_FAILED'))
            : Future.value(
                FlaxNativePermissionStatus(
                  state: FlaxPermissionState.granted,
                  scope: scope,
                ),
              );
        binding.handleAppLifecycleStateChanged(AppLifecycleState.paused);
        binding.handleAppLifecycleStateChanged(AppLifecycleState.resumed);
        await _turns();
        expect(
          native.calls.map((call) => call.$1),
          containsAll([_first.id, _second.id]),
        );
        expect(owner.errors.single.toString(), contains('FIRST_ID_FAILED'));
        expect(
          () => owner.context.require(
            _second.id,
            operation: 'second.read',
            scope: _b,
          ),
          returnsNormally,
        );
      } finally {
        await owner.session.close();
        await manager.close();
      }
    },
  );

  test(
    'background cancels shared consent without accepting a late answer',
    () async {
      final native = _Native();
      final manager = FlaxPermissionManager(
        storage: _Storage(),
        native: native,
        providers: const [
          FlaxPermissionProvider(
            _first,
            requiresNative: true,
            scope: FlaxOriginPermissionScope(),
          ),
        ],
      );
      final answer = Completer<FlaxPermissionDecision>();
      var prompts = 0, cancellations = 0;
      Future<FlaxPermissionDecision> consent(FlaxPermissionRequest request) {
        prompts++;
        request.whenCancelled.then((_) => cancellations++);
        return answer.future;
      }

      final left = await _Owner.open(
        manager,
        _first,
        _a,
        'test.native.consent',
        onRequest: consent,
      );
      final right = await _Owner.open(
        manager,
        _first,
        _a,
        'test.native.consent',
        onRequest: consent,
      );
      try {
        final first = left.context.request(_first.id);
        final second = right.context.request(_first.id);
        await _turns();
        expect(prompts, 1);
        binding.handleAppLifecycleStateChanged(AppLifecycleState.paused);
        await _turns();
        expect(cancellations, 1);
        binding.handleAppLifecycleStateChanged(AppLifecycleState.resumed);
        answer.complete(FlaxPermissionDecision.allow);
        expect((await first).state, isNot(FlaxPermissionState.granted));
        expect((await second).state, isNot(FlaxPermissionState.granted));
        await _turns();
        expect([left.read(), right.read()], isNot(['allowed', 'allowed']));
      } finally {
        if (!answer.isCompleted) answer.complete(FlaxPermissionDecision.cancel);
        await left.session.close();
        await right.session.close();
        await manager.close();
      }
    },
  );
}
