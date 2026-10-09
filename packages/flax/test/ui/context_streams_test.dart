import 'package:flax/flax.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../../.dart_tool/flax/ui/context_streams_bindings.dart';
import '../fixtures/context_streams.dart';
import '../support/owned_harness.dart';

Future<void> pumpBridge(WidgetTester tester) async {
  for (var i = 0; i < 40; i++) {
    await tester.pump(const Duration(milliseconds: 1));
  }
}

Future<void> waitFor(WidgetTester t, OwnedHarness h, String expression) async {
  for (var i = 0; i < 400; i++) {
    h.runtime.drainMicrotasks();
    await t.pump(const Duration(milliseconds: 1));
    if (h.boolean(expression)) return;
    await t.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 1)),
    );
  }
  expect(h.boolean(expression), isTrue, reason: expression);
}

void main() {
  late ContextStreams values;
  OwnedHarness harness() => OwnedHarness(
    fixture: 'context_streams',
    extra: [context_streamsBindings],
    onCreate: (_, value) {
      if (value is ContextStreams) values = value;
    },
  );
  Future<void> mount(WidgetTester t, OwnedHarness h) async {
    await t.pumpWidget(h.app('context-streams'));
    await t.pumpAndSettle();
  }

  Future<void> result(WidgetTester t, OwnedHarness h, String expression) async {
    h.execute(
      'contextStreamHooks.result = null; contextStreamHooks.error = null; '
      'Promise.resolve($expression).then(value => contextStreamHooks.result = value)'
      '.catch(error => contextStreamHooks.error = String(error));',
    );
    await waitFor(
      t,
      h,
      'contextStreamHooks.result !== null || contextStreamHooks.error !== null',
    );
    expect(h.string('String(contextStreamHooks.error)'), 'null');
    expect(h.boolean('contextStreamHooks.result === true'), isTrue);
  }

  testWidgets('erased Record reads reject unknown and ambiguous shapes', (
    t,
  ) async {
    final h = OwnedHarness(
      fixture: 'context_streams',
      extra: [
        context_streamsBindings,
        FlaxBindingModule(
          'record-validation',
          const [],
          moduleId: 'test/record-validation',
          uiProtocol: flaxBindingVersion,
          requiredCapabilities: const [],
          records: [
            for (final kind in ['int', 'num'])
              FlaxTypeRef(
                'record',
                record: FlaxRecordBinding(
                  [
                    FlaxRecordFieldBinding(
                      r'$1',
                      FlaxTypeRef(kind),
                      (value) => (value as (num,)).$1,
                    ),
                  ],
                  (values) => (values.single as num,),
                  signature: '($kind,)',
                  matches: (value) =>
                      kind == 'int' ? value is (int,) : value is (num,),
                ),
              ),
          ],
          functions: [
            for (final name in ['unknown', 'ambiguous'])
              FlaxFunctionBinding(
                'test/record-validation#function:$name',
                const [],
                const FlaxTypeRef('any'),
                (_) => name == 'unknown' ? (unknown: true) : (1,),
              ),
          ],
        ),
      ],
    );
    try {
      await mount(t, h);
      for (final (name, message) in [
        ('unknown', 'Unbound Dart value'),
        ('ambiguous', 'Ambiguous Dart Record projection'),
      ]) {
        expect(
          () => h.execute(
            '__flaxInvokeOperation(__flaxResolveOperation(23, "test/record-validation#function:$name", "top", "call", ""), 0)',
          ),
          throwsA(
            isA<FlaxJsException>().having(
              (error) => error.toString(),
              'message',
              contains(message),
            ),
          ),
        );
      }
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });

  for (final method in [
    'generic',
    'native',
    'operators',
    'aggregates',
    'derivedRecords',
    'asyncCombinations',
  ]) {
    testWidgets(
      'Context Stream $method round-trip preserves identity and null',
      (t) async {
        final h = harness();
        try {
          await mount(t, h);
          await result(t, h, 'contextStreamHooks.$method()');
          expect(h.errors, isEmpty);
        } finally {
          await h.finish(t);
        }
      },
    );
  }

  testWidgets(
    'Context Stream retained JS callback supplies real Dart Context values',
    (t) async {
      final h = harness();
      try {
        await mount(t, h);
        h.execute(
          'contextStreamHooks.store.keep(() => contextStreamHooks.store.nativeStream(contextStreamHooks.saved))',
        );
        final received = await t.runAsync(() => values.retained!().toList());
        expect(received, hasLength(2));
        expect(received!.first, isA<BuildContext>());
        expect(received.first!.mounted, isTrue);
        expect(received.last, isNull);
        await result(
          t,
          h,
          'contextStreamHooks.store.collect(() => contextStreamHooks.store.nativeStream(contextStreamHooks.saved)).then(list => list.get(0) === contextStreamHooks.saved && list.get(1) === null)',
        );
        expect(h.errors, isEmpty);
      } finally {
        values.retained = null;
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'Context Stream AsyncIterable preserves pause resume cancellation',
    (t) async {
      final h = harness();
      try {
        await mount(t, h);
        expect(h.number('contextStreamHooks.sourceNext'), 0);
        h.execute(
          'contextStreamHooks.subscription = contextStreamHooks.startPaused()',
        );
        await pumpBridge(t);
        expect(h.number('contextStreamHooks.sourceNext'), 1);
        expect(
          h.boolean(
            'contextStreamHooks.received[0] === contextStreamHooks.saved',
          ),
          isTrue,
        );
        await pumpBridge(t);
        expect(h.number('contextStreamHooks.sourceNext'), 1);
        h.execute('contextStreamHooks.subscription.resume()');
        await pumpBridge(t);
        expect(h.number('contextStreamHooks.sourceNext'), 2);
        expect(h.boolean('contextStreamHooks.received[1] === null'), isTrue);
        h.execute(
          'contextStreamHooks.subscription.cancel().then(() => contextStreamHooks.cancelled = true)',
        );
        await pumpBridge(t);
        expect(h.boolean('contextStreamHooks.cancelled === true'), isTrue);
        expect(h.number('contextStreamHooks.sourceReturns'), 1);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'Context Stream concrete events reject forged wrong type null undefined',
    (t) async {
      final h = harness();
      try {
        await mount(t, h);
        for (final value in [
          '42',
          '{}',
          'null',
          'undefined',
          '{mounted:true}',
        ]) {
          h.execute(
            'contextStreamHooks.error = null; '
            'contextStreamHooks.store.strict(() => contextStreamHooks.store.nativeStream(contextStreamHooks.saved).map(() => ($value))).toList()'
            '.catch(error => contextStreamHooks.error = String(error));',
          );
          await pumpBridge(t);
          expect(
            h.boolean('typeof contextStreamHooks.error === "string"'),
            isTrue,
            reason: value,
          );
        }
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'Context Stream converted collection rejects reads after unmount',
    (t) async {
      final h = harness();
      try {
        await mount(t, h);
        h.execute(
          'contextStreamHooks.store.nativeStream(contextStreamHooks.saved).toList().then(list => contextStreamHooks.list = list)',
        );
        h.execute(
          'contextStreamHooks.store.records(() => '
          'contextStreamHooks.store.nativeStream(contextStreamHooks.saved)'
          '.where(value => value !== null)'
          '.map(value => ({context:value, siblings:[value,null]})))'
          '.toList().then(list => contextStreamHooks.records = list)',
        );
        await waitFor(
          t,
          h,
          'contextStreamHooks.list !== undefined && contextStreamHooks.records !== undefined',
        );
        expect(
          h.boolean(
            'contextStreamHooks.list.get(0) === contextStreamHooks.saved',
          ),
          isTrue,
        );
        await flaxTestUnmount(t);
        expect(
          () => h.execute('contextStreamHooks.list.get(0)'),
          throwsA(isA<FlaxJsException>()),
        );
        expect(
          () => h.execute('contextStreamHooks.records.get(0)'),
          throwsA(isA<FlaxJsException>()),
        );
        expect(
          () => h.execute('contextStreamHooks.generic()'),
          throwsA(isA<FlaxJsException>()),
        );
        expect(h.boolean('contextStreamHooks.saved.mounted === false'), isTrue);
        h.execute(
          'contextStreamHooks.list = null; contextStreamHooks.records = null',
        );
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'Context Stream late AsyncIterable event rejects unmounted Context',
    (t) async {
      final h = harness();
      try {
        await mount(t, h);
        h.execute(
          'contextStreamHooks.startPending().catch(error => contextStreamHooks.error = String(error))',
        );
        await pumpBridge(t);
        expect(
          h.boolean('typeof contextStreamHooks.resolve === "function"'),
          isTrue,
        );
        await flaxTestUnmount(t);
        h.execute(
          'contextStreamHooks.resolve({done:false, value:contextStreamHooks.saved}); contextStreamHooks.resolve = null;',
        );
        await waitFor(t, h, 'typeof contextStreamHooks.error === "string"');
        expect(
          h.boolean('typeof contextStreamHooks.error === "string"'),
          isTrue,
        );
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'Context Stream late native event rejects unmounted Context on JS read',
    (t) async {
      final h = harness();
      try {
        await mount(t, h);
        h.execute(
          'contextStreamHooks.store.keep(() => contextStreamHooks.store.nativeStream(contextStreamHooks.saved))',
        );
        final received = await t.runAsync(() => values.retained!().toList());
        final context = received!.first!;
        h.execute(
          'contextStreamHooks.store.controlled().take(1).toList().then(list => list.get(0))'
          '.catch(error => contextStreamHooks.error = String(error));',
        );
        await flaxTestUnmount(t);
        values.controller!.add(context);
        await pumpBridge(t);
        expect(
          h.boolean('typeof contextStreamHooks.error === "string"'),
          isTrue,
        );
        await t.runAsync(() => values.controller!.close());
        values.controller = null;
        values.retained = null;
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'Context Stream real source retains Dart values while JS Context aliases stay weak',
    (t) async {
      final h = harness();
      try {
        await mount(t, h);
        h.execute(
          'contextStreamHooks.store.rememberWeak(contextStreamHooks.saved); '
          'contextStreamHooks.liveStream = contextStreamHooks.store.nativeStream(contextStreamHooks.saved); '
          'contextStreamHooks.store.keep(() => contextStreamHooks.store.nativeStream(contextStreamHooks.saved));',
        );
        expect(values.observedWeak!.target, isNotNull);
        await flaxTestUnmount(t);
        await t.pumpAndSettle();
        await t.runAsync(() async {
          for (var i = 0; i < 3; i++) {
            h.execute(flaxTestJsGarbagePressure);
            await flaxTestCollectDartGarbage();
          }
        });
        bool retainedUnmounted() =>
            values.observedWeak!.target?.mounted == false;
        expect(retainedUnmounted(), isTrue);
        h.execute('contextStreamHooks.liveStream = null');
        await t.runAsync(() async {
          for (var i = 0; i < 3; i++) {
            h.execute(flaxTestJsGarbagePressure);
            await flaxTestCollectDartGarbage();
          }
        });
        expect(values.observedWeak!.target, isNull);
        expect(values.retained, isNotNull);
        expect(h.errors, isEmpty);
      } finally {
        values.retained = null;
        await h.finish(t);
      }
    },
  );

  testWidgets('Context Stream foreign Session handle and close remain safe', (
    t,
  ) async {
    final a = harness();
    final b = harness();
    try {
      await t.pumpWidget(
        Directionality(
          textDirection: TextDirection.ltr,
          child: Row(
            children: [
              Expanded(child: a.app('context-streams')),
              Expanded(child: b.app('context-streams')),
            ],
          ),
        ),
      );
      await t.pumpAndSettle();
      final foreign =
          a.runtime.evaluate('contextStreamHooks.saved') as FlaxJsObject;
      final local = b.runtime.getGlobal('contextStreamHooks') as FlaxJsObject;
      try {
        expect(
          () => local.setProperty('foreign', foreign),
          throwsArgumentError,
        );
      } finally {
        foreign.release();
        local.release();
      }
      b.execute(
        'contextStreamHooks.store.keep(() => contextStreamHooks.store.nativeStream(contextStreamHooks.saved)); '
        'contextStreamHooks.startPending().catch(() => {});',
      );
      await pumpBridge(t);
      final retained = values.retained!;
      await flaxTestUnmount(t);
      await flaxTestCloseSession(t, b.session);
      await pumpBridge(t);
      expect(() => retained(), throwsStateError);
      expect(b.runtime.handlesAtDispose, 0);
      expect(b.runtime.activeSubscriptions, 0);
      expect(a.errors, isEmpty);
      expect(b.errors, isEmpty);
    } finally {
      values.retained = null;
      await a.finish(t);
      await b.finish(t);
    }
  });
}
