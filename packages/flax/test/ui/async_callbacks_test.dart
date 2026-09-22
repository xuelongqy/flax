import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../../.dart_tool/flax/ui/interop_bindings.dart';
import '../../.dart_tool/flax/ui/repeated_bindings.dart';
import '../fixtures/interop.dart' as fixture;
import '../fixtures/repeated.dart' as fixture;
import '../support/owned_harness.dart';

class _Fixture {
  late fixture.AsyncCallbacks callbacks;
  late fixture.AsyncContract contract;
  late fixture.AsyncWidgetStore widgets;

  OwnedHarness harness() => OwnedHarness(
    fixture: 'async_callbacks',
    extra: [interopBindings, repeatedBindings],
    onCreate: (_, value) {
      if (value is fixture.AsyncCallbacks) callbacks = value;
      if (value is fixture.AsyncContract) contract = value;
      if (value is fixture.AsyncWidgetStore) widgets = value;
    },
  );
}

Future<void> _pumpAsync(
  WidgetTester tester, [
  Duration elapsed = Duration.zero,
]) async {
  await tester.pump(elapsed);
  await tester.pump();
}

void main() {
  testWidgets('Promise callbacks assimilate values and preserve async timing', (
    tester,
  ) async {
    final fixture = _Fixture();
    final harness = fixture.harness();
    await tester.pumpWidget(harness.app('async-callbacks'));
    await tester.pumpAndSettle();

    var completed = false;
    final resolved = fixture.callbacks.apply(2)..then((_) => completed = true);
    expect(completed, isFalse);
    await _pumpAsync(tester);
    expect(await resolved, 3);
    expect(completed, isTrue);

    harness.execute('asyncHooks.mode = "twice"');
    final thenable = fixture.callbacks.apply(2);
    await _pumpAsync(tester);
    expect(await thenable, 5);

    harness.execute('asyncHooks.mode = "delayed"');
    var delayedCompleted = false;
    final delayed = fixture.callbacks.apply(3)
      ..then((_) => delayedCompleted = true);
    expect(harness.runtime.pendingPromises, 1);
    await _pumpAsync(tester, const Duration(milliseconds: 19));
    expect(delayedCompleted, isFalse);
    await _pumpAsync(tester, const Duration(milliseconds: 1));
    expect(await delayed, 5);
    expect(harness.runtime.pendingPromises, 0);

    harness.execute('asyncHooks.mode = "resolved"');
    final contract = fixture.contract.read();
    final list = fixture.callbacks.callbacks.single(4);
    final map = fixture.callbacks.mapping['triple']!(4);
    await _pumpAsync(tester);
    expect(await contract, 11);
    expect(await list, 8);
    expect(await map, 12);

    harness.execute('asyncHooks.mode = "staggered"');
    final completionOrder = <int>[];
    final concurrent = [
      for (var value = 1; value <= 3; value++)
        fixture.callbacks.apply(value)..then(completionOrder.add),
    ];
    for (var i = 0; i < 3; i++) {
      await _pumpAsync(tester, const Duration(milliseconds: 10));
    }
    expect(await Future.wait(concurrent), [1, 2, 3]);
    expect(completionOrder, [3, 2, 1]);

    harness.execute('void asyncHooks.roundTrips()');
    await tester.pumpAndSettle();
    expect(harness.boolean('asyncHooks.roundTripsDone'), isTrue);
    expect(harness.number('asyncHooks.returned'), 6);
    expect(harness.boolean('asyncHooks.sameToken'), isTrue);
    expect(harness.number('asyncHooks.listValue'), 4);
    expect(harness.number('asyncHooks.dataValue'), 9);
    expect(harness.boolean('asyncHooks.nullable === null'), isTrue);
    expect(harness.boolean('asyncHooks.sameMode'), isTrue);
    expect(harness.number('asyncHooks.callbackValue'), 17);
    expect(harness.number('asyncHooks.asyncCallbackValue'), 18);
    expect(harness.number('asyncHooks.nativeAsyncValue'), 1);
    expect(harness.errors, isEmpty);
    await harness.finish(tester);
  });

  testWidgets(
    'Promise failures become Dart Future errors and remain recoverable',
    (tester) async {
      final fixture = _Fixture();
      final harness = fixture.harness();
      await tester.pumpWidget(harness.app('async-callbacks'));
      await tester.pumpAndSettle();

      for (final mode in [
        'rejected',
        'primitive-rejection',
        'symbol-rejection',
        'accessor-rejection',
        'proxy-rejection',
        'getter-error',
        'call-error',
        'wrong-value',
      ]) {
        harness.execute('asyncHooks.mode = "$mode"');
        final expectation = expectLater(
          fixture.callbacks.apply(1),
          throwsA(
            mode == 'wrong-value'
                ? isA<ArgumentError>()
                : isA<FlaxJsException>(),
          ),
        );
        await _pumpAsync(tester);
        await expectation;
        expect(harness.runtime.pendingPromises, 0);
      }

      harness.execute('asyncHooks.mode = "scalar"');
      expect(() => fixture.callbacks.apply(1), throwsA(isA<FlaxJsException>()));
      harness.execute('asyncHooks.mode = "null-future"');
      expect(fixture.callbacks.applyOptional(), isNull);
      harness.execute('asyncHooks.mode = "resolved"');
      final recovered = fixture.callbacks.apply(4);
      await _pumpAsync(tester);
      expect(await recovered, 5);
      expect(harness.errors, isEmpty);
      await harness.finish(tester);
    },
  );

  testWidgets('nested Future and FutureOr values round-trip recursively', (
    tester,
  ) async {
    final fixture = _Fixture();
    final harness = fixture.harness();
    await tester.pumpWidget(harness.app('async-callbacks'));
    await tester.pumpAndSettle();

    expect(await fixture.callbacks.applyNested(), 21);

    harness.execute('void asyncHooks.nestedRoundTrips()');
    await tester.pumpAndSettle();
    expect(harness.boolean('asyncHooks.nestedRoundTripsDone'), isTrue);
    expect(harness.number('asyncHooks.nestedValue'), 31);
    expect(harness.number('asyncHooks.nestedFutureOrValue'), 32);
    expect(harness.number('asyncHooks.futureOrNestedValue'), 33);
    expect(harness.number('asyncHooks.nestedCallback'), 41);
    expect(harness.number('asyncHooks.nestedFutureOrCallback'), 42);
    expect(harness.boolean('asyncHooks.futureOrUsesFutureBranch'), isTrue);
    expect(harness.number('asyncHooks.nestedMapDirect'), 51);
    expect(harness.number('asyncHooks.nestedMapAsync'), 52);
    expect(harness.number('asyncHooks.nestedRecordFirst'), 61);
    expect(harness.string('asyncHooks.nestedRecordValue'), 'record');
    expect(harness.boolean('asyncHooks.nullableDirect === null'), isTrue);
    expect(harness.boolean('asyncHooks.nullableAsync === null'), isTrue);
    expect(harness.number('asyncHooks.nestedAlias'), 71);

    harness.execute('void asyncHooks.nestedListTiming()');
    await _pumpAsync(tester, const Duration(milliseconds: 19));
    expect(harness.boolean('asyncHooks.nestedListDone === true'), isFalse);
    await _pumpAsync(tester, const Duration(milliseconds: 1));
    expect(harness.boolean('asyncHooks.nestedListDone'), isTrue);
    expect(harness.number('asyncHooks.nestedListFirst'), 1);
    expect(harness.number('asyncHooks.nestedListSecond'), 2);

    harness.execute('void asyncHooks.nestedFailures()');
    await tester.pumpAndSettle();
    expect(harness.boolean('asyncHooks.nestedFailuresDone'), isTrue);
    expect(harness.boolean('asyncHooks.nestedOuterRejected'), isTrue);
    expect(harness.boolean('asyncHooks.nestedInnerRejected'), isTrue);
    expect(harness.errors, isEmpty);
    await harness.finish(tester);
  });

  testWidgets('async Widget results retain configuration until mounted', (
    tester,
  ) async {
    final fixture = _Fixture();
    final harness = fixture.harness();
    await tester.pumpWidget(harness.app('async-callbacks'));
    await tester.pumpAndSettle();

    final pending = fixture.widgets.load();
    await _pumpAsync(tester);
    final widget = await pending;
    await tester.pumpWidget(MaterialApp(home: widget));
    await tester.pumpAndSettle();
    expect(find.text('initial'), findsOneWidget);
    harness.execute('asyncHooks.label.value = "updated"');
    await tester.pump();
    expect(find.text('updated'), findsOneWidget);
    expect(harness.errors, isEmpty);
    await harness.finish(tester);
  });

  testWidgets('session close rejects pending callback Futures', (tester) async {
    final fixture = _Fixture();
    final harness = fixture.harness();
    await tester.pumpWidget(harness.app('async-callbacks'));
    await tester.pumpAndSettle();
    harness.execute('asyncHooks.mode = "delayed"');
    final pending = expectLater(
      fixture.callbacks.apply(1),
      throwsA(
        isA<StateError>().having(
          (error) => error.message,
          'message',
          'FlaxSessionClosed',
        ),
      ),
    );
    final closing = harness.session.close();
    await _pumpAsync(tester);
    await pending;
    await _pumpAsync(tester, const Duration(milliseconds: 30));
    expect(harness.runtime.hostCalls['__flaxPromiseSettlement'] ?? 0, 0);
    await harness.finish(tester);
    await closing;
  });

  testWidgets('session close rejects pending nested callback Futures', (
    tester,
  ) async {
    final fixture = _Fixture();
    final harness = fixture.harness();
    await tester.pumpWidget(harness.app('async-callbacks'));
    await tester.pumpAndSettle();
    harness.execute('asyncHooks.mode = "nested-delayed"');
    final pending = expectLater(
      fixture.callbacks.applyNested(),
      throwsA(
        isA<StateError>().having(
          (error) => error.message,
          'message',
          'FlaxSessionClosed',
        ),
      ),
    );
    final closing = harness.session.close();
    await _pumpAsync(tester);
    await pending;
    await _pumpAsync(tester, const Duration(milliseconds: 30));
    expect(harness.runtime.hostCalls['__flaxPromiseSettlement'] ?? 0, 0);
    await harness.finish(tester);
    await closing;
  });
}
