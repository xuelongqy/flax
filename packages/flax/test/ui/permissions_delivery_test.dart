import 'dart:async';
import 'dart:convert';

import 'package:flax/flax.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter_test/flutter_test.dart';

import '../support/engine.dart';

const _permission = FlaxPermissionDefinition(
  id: 'example.delivery.read',
  title: 'Read protected results',
  authorization: FlaxPermissionAuthorization.runtime,
);

class _DeliveryPlugin extends FlaxPlugin implements FlaxPluginInstance {
  const _DeliveryPlugin();
  @override
  String get id => 'test.delivery';
  @override
  Set<String> get globals => const {};
  @override
  List<FlaxPermissionDefinition> get permissionDefinitions => const [
    _permission,
  ];
  @override
  FlaxPluginInstance install(FlaxHostContext context) => this;
  @override
  void close() {}
  @override
  void dispose() {}
}

class _DeliveryHarness {
  _DeliveryHarness(this.fixture, {required bool deferCancellation}) {
    events = deferCancellation
        ? StreamController<int>(
            sync: true,
            onCancel: () {
              cancellations++;
              return cancellation.future;
            },
          )
        : StreamController<int>.broadcast(
            sync: true,
            onCancel: () => cancellations++,
          );
  }

  final FlaxTestPermissions fixture;
  final runtime = createTestRuntime();
  final backend = Completer<int>();
  final cancellation = Completer<void>();
  late final StreamController<int> events;
  late final FlaxSession session;
  FlaxPermissionLease? lease;
  bool backendSettled = false;
  int cancellations = 0;

  FlaxPermissionLease get authority => lease ??= FlaxPermissionContext.current
      .lease(_permission.id, operation: 'resource.read');

  static Future<_DeliveryHarness> open(
    WidgetTester tester, {
    bool deferCancellation = false,
  }) async {
    final fixture = (await tester.runAsync(() async {
      final fixture = await FlaxTestPermissions.create(
        definitions: const [_permission],
        permissions: const {'example.delivery.read': null},
      );
      final context = FlaxPermissionContext(
        policy: fixture.policy,
        manifest: fixture.manifest,
      );
      await context.request(_permission.id);
      await context.close();
      return fixture;
    }))!;
    final harness = _DeliveryHarness(
      fixture,
      deferCancellation: deferCancellation,
    );
    const load = 'test.delivery/api#function:load';
    const watch = 'test.delivery/api#function:watch';
    final module = FlaxBindingModule(
      'Protected resource',
      [],
      moduleId: 'test.delivery/api',
      uiProtocol: flaxBindingVersion,
      requiredCapabilities: const [],
      functions: [
        FlaxFunctionBinding(
          load,
          const [],
          const FlaxTypeRef('future', item: FlaxTypeRef('int')),
          (_) {
            final future = harness.authority.guardFuture(
              () => harness.backend.future,
            );
            future.then<void>(
              (_) => harness.backendSettled = true,
              onError: (Object _, StackTrace _) =>
                  harness.backendSettled = true,
            );
            return future;
          },
        ),
        FlaxFunctionBinding(
          watch,
          const [],
          FlaxTypeRef(
            'stream',
            id: 'flax.core/flutter#type:Stream',
            item: const FlaxTypeRef('int'),
            stream: FlaxStreamBinding(
              'stream:flax.core/flutter#type:Stream[int:]',
              (value) => value is Stream<int>,
              (value) => value as Stream<int>,
            ),
          ),
          (_) => harness.authority.guardStream(
            () => harness.events.stream,
            isBroadcast: harness.events.stream.isBroadcast,
          ),
        ),
      ],
    );
    harness.session = FlaxSession(
      createRuntime: () => harness.runtime,
      bindings: FlaxBindingRegistry([flutterBindings, module]),
      permissions: fixture.policy,
      permissionManifest: fixture.manifest,
      plugins: const [_DeliveryPlugin()],
      source:
          '''
import {runApp, Text} from '@flax/flutter/widgets';
import {invokeTopLevel} from '@flax/core/bindings';
import {StreamIterator} from '@flax/dart/async';
runApp(Text('delivery'));
globalThis.load = () => invokeTopLevel('$load', []);
globalThis.watch = () => invokeTopLevel('$watch', []);
globalThis.NativeIterator = StreamIterator;
''',
    );
    await tester.runAsync(() => harness.session.ready);
    return harness;
  }

  void start(String script) =>
      runtime.evaluate('$script; queueMicrotask(() => {}); undefined;');
  Future<void> revoke() =>
      fixture.manager.revoke(fixture.application, _permission.id);

  Future<Object?> js(WidgetTester tester, String script) async {
    await tester.pump();
    await tester.runAsync(() async {
      start(
        'globalThis.deliveryResult = null; (async () => { $script })().then('
        'v => deliveryResult = JSON.stringify(v ?? null), '
        'e => deliveryResult = JSON.stringify({uncaught:String(e),stack:e.stack}))',
      );
    });
    final timer = Stopwatch()..start();
    while (timer.elapsed < const Duration(seconds: 8)) {
      final result = runtime.getGlobal('deliveryResult');
      if (result is FlaxJsString) {
        return jsonDecode(result.value) as Object?;
      }
      await tester.pump();
      await tester.runAsync(
        () => Future<void>.delayed(const Duration(milliseconds: 1)),
      );
    }
    throw StateError('Protected result did not reach its checkpoint');
  }

  Future<void> close(WidgetTester tester) async {
    await flaxTestCloseSession(tester, session);
    lease?.close();
    if (!cancellation.isCompleted) cancellation.complete();
    await _pumpFuture(tester, events.close());
    await _pumpFuture(tester, fixture.close());
  }
}

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  for (final failure in [false, true]) {
    testWidgets(
      'manual guardFuture retains authority through queued ${failure ? 'errors' : 'values'}',
      (tester) async {
        final harness = await _DeliveryHarness.open(tester);
        try {
          // Keep native frame work in this test's Future error zone.
          final testZone = Zone.current;
          Future<void>? revocation;
          tester.binding.scheduleFrameCallback(
            testZone.bindUnaryCallback<void, Duration>((_) {
              harness.start(
                'globalThis.delivered = false; globalThis.pending = load().then('
                'value => { delivered = true; return {value}; }, '
                'e => { delivered = true; return {code:e.code,message:e.message}; })',
              );
              if (failure) {
                harness.backend.completeError(
                  StateError('PRIVATE_MANUAL_ERROR'),
                );
              } else {
                harness.backend.complete(847);
              }
            }),
          );
          tester.binding.addPostFrameCallback(
            testZone.bindUnaryCallback<void, Duration>((_) {
              expectSync(harness.backendSettled, isTrue);
              expectSync(
                (harness.runtime.getGlobal('delivered') as FlaxJsBoolean).value,
                isFalse,
              );
              revocation = harness.revoke();
            }),
          );
          await tester.pump();
          await _pumpFuture(tester, revocation!);
          final result =
              await harness.js(tester, 'return await pending;') as Map;
          expect(result['code'], 'FLAX_PERMISSION_DENIED');
          expect(result['value'], isNull);
          expect(result['message'], isNot(contains('PRIVATE_MANUAL_ERROR')));
        } finally {
          await harness.close(tester);
        }
      },
    );

    testWidgets(
      'Stream iterator retains authority through queued ${failure ? 'errors' : 'values'}',
      (tester) async {
        final harness = await _DeliveryHarness.open(tester);
        try {
          final testZone = Zone.current;
          Future<void>? revocation;
          tester.binding.scheduleFrameCallback(
            testZone.bindUnaryCallback<void, Duration>((_) {
              harness.start(
                'globalThis.delivered = false; globalThis.iterator = watch()[Symbol.asyncIterator](); '
                'globalThis.pending = iterator.next().then('
                'value => { delivered = true; return {value}; }, '
                'e => { delivered = true; return {code:e.code,message:e.message}; })',
              );
              if (failure) {
                harness.events.addError(StateError('PRIVATE_ITERATOR_ERROR'));
              } else {
                harness.events.add(847);
              }
            }),
          );
          tester.binding.addPostFrameCallback(
            testZone.bindUnaryCallback<void, Duration>((_) {
              expectSync(
                (harness.runtime.getGlobal('delivered') as FlaxJsBoolean).value,
                isFalse,
              );
              revocation = harness.revoke();
            }),
          );
          await tester.pump();
          await _pumpFuture(tester, revocation!);
          final result =
              await harness.js(tester, 'return await pending;') as Map;
          expect(result['code'], 'FLAX_PERMISSION_DENIED');
          expect(result['value'], isNull);
          expect(result['message'], isNot(contains('PRIVATE_ITERATOR_ERROR')));
        } finally {
          await harness.close(tester);
        }
      },
    );
  }

  testWidgets(
    'successive next calls borrow their lease and current is checked separately',
    (tester) async {
      final harness = await _DeliveryHarness.open(tester);
      try {
        harness.start(
          'globalThis.iterator = watch()[Symbol.asyncIterator](); globalThis.pending = iterator.next()',
        );
        harness.events.add(1);
        expect(await harness.js(tester, 'return await pending;'), {
          'value': 1,
          'done': false,
        });
        expect(harness.lease!.isActive, isTrue);
        harness.start('globalThis.pending = iterator.next()');
        harness.events.add(2);
        expect(await harness.js(tester, 'return await pending;'), {
          'value': 2,
          'done': false,
        });
        expect(harness.lease!.isActive, isTrue);
        harness.start(
          'globalThis.nativeIterator = NativeIterator(watch()); globalThis.next = nativeIterator.moveNext()',
        );
        harness.events.add(3);
        expect(await harness.js(tester, 'return await next;'), isTrue);
        expect(await harness.js(tester, 'return nativeIterator.current;'), 3);
        await _pumpFuture(tester, harness.revoke());
        expect(
          await harness.js(
            tester,
            'try { return nativeIterator.current; } catch(e) { return e.code; }',
          ),
          'FLAX_PERMISSION_DENIED',
        );
        expect(
          await harness.js(
            tester,
            'await nativeIterator.cancel(); return await iterator.return();',
          ),
          {'done': true},
        );
        expect(harness.cancellations, 1);
      } finally {
        await harness.close(tester);
      }
    },
  );

  testWidgets(
    'typed map, where, take, first, toList and asFuture preserve borrowed authority',
    (tester) async {
      final harness = await _DeliveryHarness.open(tester);
      try {
        harness.start(
          'globalThis.pipeline = watch().map(value => value * 2).where(value => value > 2).take(2); '
          'globalThis.first = pipeline.first; globalThis.list = pipeline.toList(); '
          'globalThis.subscription = pipeline.listen(() => {}); globalThis.finished = subscription.asFuture(9)',
        );
        for (final value in [1, 2, 3]) {
          harness.events.add(value);
        }
        expect(
          await harness.js(
            tester,
            'return [await first, (await list).toArray(), await finished];',
          ),
          [
            4,
            [4, 6],
            9,
          ],
        );
        expect(harness.lease!.isActive, isTrue);
      } finally {
        await harness.close(tester);
      }
    },
  );

  testWidgets(
    'asyncMap cannot deliver a buffered value into a downstream JS callback after revoke',
    (tester) async {
      final harness = await _DeliveryHarness.open(tester);
      try {
        harness.start(
          'globalThis.seen = []; globalThis.release = null; '
          'globalThis.pending = watch().asyncMap(value => new Promise(resolve => { release = () => resolve(value); }))'
          '.map(value => { seen.push(value); return value; }).first.then(value => ({value}), e => ({code:e.code}));',
        );
        harness.events.add(847);
        expect(await harness.js(tester, 'return typeof release;'), 'function');
        await _pumpFuture(tester, harness.revoke());
        harness.start('release()');
        expect(await harness.js(tester, 'return [await pending, seen];'), [
          {'code': 'FLAX_PERMISSION_DENIED'},
          <Object?>[],
        ]);
        expect(harness.cancellations, 1);
      } finally {
        await harness.close(tester);
      }
    },
  );

  testWidgets('asFuture retains its check until queued JS settlement', (
    tester,
  ) async {
    final harness = await _DeliveryHarness.open(tester);
    try {
      harness.start(
        'globalThis.subscription = watch().listen(() => {}); globalThis.delivered = false; '
        'globalThis.pending = subscription.asFuture(847).then(value => { delivered = true; return {value}; }, '
        'e => { delivered = true; return {code:e.code}; })',
      );
      final testZone = Zone.current;
      Future<void>? revocation;
      tester.binding.scheduleFrameCallback(
        testZone.bindUnaryCallback<void, Duration>(
          (_) => harness.events.close(),
        ),
      );
      tester.binding.addPostFrameCallback(
        testZone.bindUnaryCallback<void, Duration>((_) {
          expectSync(
            (harness.runtime.getGlobal('delivered') as FlaxJsBoolean).value,
            isFalse,
          );
          revocation = harness.revoke();
        }),
      );
      await tester.pump();
      await _pumpFuture(tester, revocation!);
      expect(await harness.js(tester, 'return await pending;'), {
        'code': 'FLAX_PERMISSION_DENIED',
      });
      expect(
        await harness.js(tester, 'await subscription.cancel(); return true;'),
        isTrue,
      );
    } finally {
      await harness.close(tester);
    }
  });

  testWidgets(
    'cancellation runs but its queued backend error cannot leak after revoke',
    (tester) async {
      final harness = await _DeliveryHarness.open(
        tester,
        deferCancellation: true,
      );
      try {
        harness.start(
          'globalThis.subscription = watch().listen(() => {}); globalThis.delivered = false; '
          'globalThis.pending = subscription.cancel().then(() => { delivered = true; return "cancelled"; }, '
          'e => { delivered = true; return {code:e.code,message:e.message}; })',
        );
        expect(harness.cancellations, 1);
        final testZone = Zone.current;
        Future<void>? revocation;
        tester.binding.scheduleFrameCallback(
          testZone.bindUnaryCallback<void, Duration>(
            (_) => harness.cancellation.completeError(
              StateError('PRIVATE_CANCEL_ERROR'),
            ),
          ),
        );
        tester.binding.addPostFrameCallback(
          testZone.bindUnaryCallback<void, Duration>((_) {
            expectSync(
              (harness.runtime.getGlobal('delivered') as FlaxJsBoolean).value,
              isFalse,
            );
            revocation = harness.revoke();
          }),
        );
        await tester.pump();
        await _pumpFuture(tester, revocation!);
        final result = await harness.js(tester, 'return await pending;') as Map;
        expect(result['code'], 'FLAX_PERMISSION_DENIED');
        expect(result['message'], isNot(contains('PRIVATE_CANCEL_ERROR')));
        expect(harness.cancellations, 1);
      } finally {
        await harness.close(tester);
      }
    },
  );
}

Future<void> _pumpFuture(WidgetTester tester, Future<void> work) async {
  var completed = false;
  final pending = work.whenComplete(() => completed = true);
  for (var turn = 0; turn < 200 && !completed; turn++) {
    await tester.pump(const Duration(milliseconds: 1));
    await tester.runAsync(() => Future<void>.delayed(Duration.zero));
  }
  expect(completed, isTrue);
  await pending;
}
