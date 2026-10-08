import 'dart:async';
import 'dart:ffi';

import 'package:flax/flax.dart';
// Native counters verify reclamation without adding an application GC API.
// ignore: implementation_imports
import 'package:flax/src/native/native_runtime.dart';
import 'package:flutter_test/flutter_test.dart';

import '../../.dart_tool/flax/ui/interop_bindings.dart';
import '../fixtures/interop.dart' as fixture;
import '../support/owned_harness.dart';

class _Values extends fixture.DeferredValues {
  _Values([Future<int>? future]) : future = future ?? Future<int>.value(7);
  final Future<int> future;
  Future<int> Function()? futureFactory;
  Future<int>? receivedFuture;
  Stream<int>? receivedStream;
  Object failureValue = StateError('stream error');
  final failureStack = StackTrace.current;

  @override
  Future<int>? get present => futureFactory?.call() ?? future;
  @override
  Stream<int> get failingTicks => Stream<int>.error(failureValue, failureStack);
  @override
  bool matchesFailure(Object error, Object stackTrace) =>
      (error == failureValue ||
          error is double && error.isNaN && identical(error, failureValue)) &&
      identical(stackTrace, failureStack);
}

OwnedHarness _harness(_Values values) => OwnedHarness(
  fixture: 'interop',
  extra: [
    interopBindings,
    FlaxBindingModule(
      'bridge-gc',
      const [],
      moduleId: 'test/bridge-gc',
      dependencyModules: [interopBindings.moduleId],
      uiProtocol: flaxBindingVersion,
      requiredCapabilities: const [],
      functions: [
        FlaxFunctionBinding(
          'test/bridge-gc#function:values',
          const [],
          FlaxTypeRef(
            'object',
            id: interopBindings.types
                .singleWhere((type) => type.id.endsWith('::DeferredValues'))
                .id,
          ),
          (_) => values,
        ),
        FlaxFunctionBinding(
          'test/bridge-gc#function:receivePromise',
          [
            FlaxParameter(
              'callback',
              interopBindings.types
                  .whereType<FlaxObjectBinding>()
                  .singleWhere((type) => type.id.endsWith('::AsyncCallbacks'))
                  .constructors['']!
                  .first
                  .type,
              required: true,
            ),
          ],
          const FlaxTypeRef('void'),
          (arguments) {
            values.receivedFuture =
                (arguments['callback'] as Future<int> Function(int))(7);
            return null;
          },
        ),
      ],
    ),
  ],
);

Future<void> _waitForCollection(
  WidgetTester tester,
  OwnedHarness harness,
  int baselineCells,
) async {
  final runtime = harness.runtime.inner as FlaxNativeJsRuntime;
  await tester.runAsync(() async {
    for (var i = 0; i < 80; i++) {
      await Future<void>.delayed(const Duration(milliseconds: 100));
      final empty = harness.boolean(
        'weakPromises.every(p => p.deref() === undefined)',
      );
      harness.runtime.drainMicrotasks();
      if (empty && runtime.bridgeCellCount <= baselineCells) break;
    }
  });
  expect(
    harness.number('weakPromises.filter(p => p.deref() !== undefined).length'),
    0,
  );
  expect(runtime.bridgeCellCount, lessThanOrEqualTo(baselineCells));
}

void main() {
  testWidgets('paused AsyncIterable subscriptions retain their JS source', (
    tester,
  ) async {
    final harness = _harness(_Values());
    try {
      await tester.pumpWidget(harness.app('interop'));
      final runtime = harness.runtime.inner as FlaxNativeJsRuntime;
      int? baselineCells;
      // The first round initializes cached helpers; the second must not grow them.
      for (var round = 0; round < 2; round++) {
        harness.execute('''
        var pausedValues = [], pausedErrors = [], pausedReturns = 0;
        var weakStream;
        function pausedSource() {
          const stream = Stream.fromAsyncIterable({
            [Symbol.asyncIterator]() {
              let value = 0;
              return {
                async next() { return { value: ++value, done: false }; },
                async return() {
                  pausedReturns++;
                  return { value: undefined, done: true };
                },
              };
            },
          });
          weakStream = new WeakRef(stream);
          return stream;
        }
        var pausedSubscription = pausedSource().listen(value => {
          pausedValues.push(value);
          pausedSubscription.pause();
        }, { onError: error => pausedErrors.push(String(error)) });
      ''');
        for (
          var i = 0;
          i < 100 && harness.number('pausedValues.length') == 0;
          i++
        ) {
          await tester.pump(const Duration(milliseconds: 1));
          harness.runtime.drainMicrotasks();
        }
        expect(harness.number('pausedValues.length'), 1);
        await tester.runAsync(
          () => Future<void>.delayed(const Duration(seconds: 2)),
        );
        expect(harness.boolean('weakStream.deref() !== undefined'), isTrue);
        harness.runtime.drainMicrotasks();
        harness.execute('pausedSubscription.resume()');
        for (
          var i = 0;
          i < 100 && harness.number('pausedValues.length') < 2;
          i++
        ) {
          await tester.pump(const Duration(milliseconds: 1));
          harness.runtime.drainMicrotasks();
        }
        expect(harness.string('pausedErrors.join(",")'), '');
        expect(harness.string('pausedValues.join(",")'), '1,2');
        harness.execute('void pausedSubscription.cancel()');
        await tester.pump();
        harness.runtime.drainMicrotasks();
        expect(harness.number('pausedReturns'), 1);
        harness.execute('pausedSubscription = null');
        await tester.runAsync(() async {
          for (var i = 0; i < 80; i++) {
            await Future<void>.delayed(const Duration(milliseconds: 100));
            final collected = harness.boolean(
              'weakStream.deref() === undefined',
            );
            harness.runtime.drainMicrotasks();
            if (collected &&
                (baselineCells == null ||
                    runtime.bridgeCellCount <= baselineCells)) {
              break;
            }
          }
        });
        expect(harness.boolean('weakStream.deref() === undefined'), isTrue);
        if (baselineCells != null) {
          expect(runtime.bridgeCellCount, lessThanOrEqualTo(baselineCells));
        }
        baselineCells = runtime.bridgeCellCount;
      }
      expect(harness.errors, isEmpty);
    } finally {
      await harness.finish(tester);
    }
  });

  testWidgets('derived Promise Futures preserve uncaught Dart errors', (
    tester,
  ) async {
    final values = _Values();
    final harness = _harness(values);
    final errors = <Object>[];
    try {
      await tester.pumpWidget(harness.app('interop'));
      runZonedGuarded(() {
        harness.execute('''
          __flaxTopLevel(22, 'test/bridge-gc#function:receivePromise',
            () => Promise.resolve(7));
        ''');
        values.receivedFuture!.then<int>(
          (_) => throw StateError('uncaught derived Future'),
        );
      }, (error, _) => errors.add(error));
      await tester.pump();
      harness.runtime.drainMicrotasks();
      await tester.pump();
      expect(errors, hasLength(1));
      expect(
        errors.single,
        isA<StateError>().having(
          (error) => error.message,
          'message',
          'uncaught derived Future',
        ),
      );
      expect(harness.errors, isEmpty);
    } finally {
      await harness.finish(tester);
    }
  });

  testWidgets('typed Dart Futures retain JS Promises through idle GC', (
    tester,
  ) async {
    for (final (name, derive) in <(String, Future<int> Function(Future<int>))>[
      ('cast', (future) => future),
      (
        'then',
        (future) => future.then((value) => value).then((value) => value),
      ),
      (
        'catchError',
        (future) => future.catchError((Object error) => throw error),
      ),
      ('whenComplete', (future) => future.whenComplete(() {})),
      ('timeout', (future) => future.timeout(const Duration(minutes: 1))),
      ('asStream', (future) => future),
    ]) {
      final values = _Values();
      final harness = _harness(values);
      try {
        await tester.pumpWidget(harness.app('interop'));
        harness.execute('''
        var weakInput;
        __flaxTopLevel(22, 'test/bridge-gc#function:receivePromise', () => {
          const promise = new Promise(() => {});
          weakInput = new WeakRef(promise);
          return promise;
        });
        var weakDiscarded = new WeakRef(new Promise(() => {}));
      ''');
        values.receivedFuture = derive(values.receivedFuture!);
        if (name == 'asStream') {
          values.receivedStream = values.receivedFuture!.asStream();
          values.receivedFuture = values.receivedStream!.first;
        }
        var cancelled = false;
        values.receivedFuture!.then<void>(
          (_) {},
          onError: (Object error) {
            cancelled = error.toString().contains('FlaxSessionClosed');
          },
        );
        await tester.runAsync(
          () => Future<void>.delayed(const Duration(seconds: 1)),
        );
        expect(harness.boolean('weakDiscarded.deref() === undefined'), isTrue);
        expect(
          harness.boolean('weakInput.deref() !== undefined'),
          isTrue,
          reason: name,
        );
        await harness.finish(tester);
        expect(cancelled, isTrue, reason: name);
      } finally {
        await harness.finish(tester);
      }
    }
  });

  testWidgets('completed Dart Futures do not retain discarded Promise views', (
    tester,
  ) async {
    final values = _Values();
    final harness = _harness(values);
    final runtime = harness.runtime.inner as FlaxNativeJsRuntime;
    try {
      await tester.pumpWidget(harness.app('interop'));
      harness.execute(
        "var reviewValues = __flaxTopLevel(22, 'test/bridge-gc#function:values');",
      );
      // Initialize the lazily retained Future and settlement helpers first.
      harness.execute(
        'var warmValue; reviewValues.present.then(v => warmValue = v)',
      );
      await tester.pump();
      harness.runtime.drainMicrotasks();
      expect(harness.number('warmValue'), 7);
      final baselineCells = runtime.bridgeCellCount;
      harness.execute('''
        var weakPromises = [];
        for (let i = 0; i < 1000; i++) {
          weakPromises.push(new WeakRef(reviewValues.present));
        }
      ''');
      await tester.pump();
      harness.runtime.drainMicrotasks();
      await _waitForCollection(tester, harness, baselineCells);
      expect(await values.future, 7);
      expect(harness.errors, isEmpty);
    } finally {
      await harness.finish(tester);
    }
  });

  testWidgets(
    'rootless Future cycles collect without losing registered JS continuations',
    (tester) async {
      final completer = Completer<int>();
      final values = _Values(completer.future);
      final harness = _harness(values);
      final runtime = harness.runtime.inner as FlaxNativeJsRuntime;
      try {
        await tester.pumpWidget(harness.app('interop'));
        harness.execute('''
        var reviewValues = __flaxTopLevel(22, 'test/bridge-gc#function:values');
        var completion;
        void reviewValues.present.then(value => completion = value);
      ''');
        final baselineCells = runtime.bridgeCellCount;
        // The producer of each discarded view is also rootless. The retained
        // producer above still owns its registered completion listener.
        values.futureFactory = () => Completer<int>().future;
        harness.execute('''
        var weakPromises = [];
        for (let i = 0; i < 1000; i++) {
          weakPromises.push(new WeakRef(reviewValues.present));
        }
      ''');
        await _waitForCollection(tester, harness, baselineCells);
        completer.complete(9);
        for (
          var i = 0;
          i < 100 && harness.boolean('completion === undefined');
          i++
        ) {
          await tester.pump(const Duration(milliseconds: 1));
          harness.runtime.drainMicrotasks();
        }
        expect(harness.number('completion'), 9);
        expect(harness.errors, isEmpty);
      } finally {
        await harness.finish(tester);
      }
    },
  );

  testWidgets('opaque Stream errors preserve values and stack traces', (
    tester,
  ) async {
    final values = _Values();
    final harness = _harness(values);
    try {
      await tester.pumpWidget(harness.app('interop'));
      harness.execute(
        "var reviewValues = __flaxTopLevel(22, 'test/bridge-gc#function:values');",
      );
      for (final error in <Object>[
        StateError('stream error'),
        (Object(), code: 7),
        double.nan,
        double.infinity,
        double.negativeInfinity,
        Pointer<Void>.fromAddress(16),
      ]) {
        values.failureValue = error;
        harness.execute('''
          var failureIdentity;
          reviewValues.failingTicks.listen(null, {
            onError(error, stack) {
              failureIdentity = reviewValues.matchesFailure(error, stack);
            },
          });
        ''');
        for (
          var i = 0;
          i < 100 && harness.boolean('failureIdentity === undefined');
          i++
        ) {
          harness.runtime.drainMicrotasks();
          await tester.pump(const Duration(milliseconds: 1));
        }
        expect(harness.boolean('failureIdentity === true'), isTrue);
        expect(harness.errors, isEmpty);
      }
    } finally {
      await harness.finish(tester);
    }
  });
}
