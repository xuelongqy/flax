import 'dart:async';

import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';

import '../../.dart_tool/flax/ui/interop_bindings.dart';
import '../fixtures/async_stream_callbacks.dart';
import '../fixtures/interop.dart' show CodegenThenObject;
import '../support/owned_harness.dart';

Future<void> _pump(WidgetTester tester, [int count = 12]) async {
  for (var i = 0; i < count; i++) {
    await tester.pump(const Duration(milliseconds: 1));
    await tester.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 1)),
    );
  }
}

Future<T> _settle<T>(WidgetTester tester, Future<T> pending) async {
  var done = false;
  T? value;
  Object? error;
  pending.then(
    (result) {
      value = result;
      done = true;
    },
    onError: (Object failure) {
      error = failure;
      done = true;
    },
  );
  await _pump(tester, 80);
  expect(
    done,
    isTrue,
    reason: 'Future did not settle after 80 bridge checkpoints',
  );
  if (error != null) throw error!;
  return value as T;
}

void main() {
  late AsyncStreamCallbacks callbacks;
  late CodegenThenObject thenObject;
  OwnedHarness harness() => OwnedHarness(
    fixture: 'async_stream_callbacks',
    extra: [interopBindings],
    onCreate: (_, value) {
      if (value is AsyncStreamCallbacks) callbacks = value;
      if (value is CodegenThenObject) thenObject = value;
    },
  );

  Future<Object?> adaptCollection(String method, Object value) {
    final binding = interopBindings.types
        .whereType<FlaxObjectBinding>()
        .singleWhere((type) => type.id.endsWith('::AsyncStreamCallbacks'));
    final event =
        binding.instanceMethods[method]!.result.callback!.result.item!;
    return event.future!.adapt(Future<Object?>.value(value));
  }

  test(
    'erased collection adapters reject wrong kinds and broad Dart references',
    () async {
      for (final (method, value) in <(String, Object)>[
        ('echoStreamFutureList', <double>{1, 2}),
        ('echoStreamFutureList', <Object?>[1, 2]),
        ('echoStreamFutureMap', <String, Object?>{'count': 1}),
        ('echoStreamFutureSet', <Object?>{1, 2}),
        ('echoStreamFutureSet', <int>[1, 2]),
        ('echoStreamFutureIterable', <Object?>[1, 2]),
      ]) {
        await expectLater(adaptCollection(method, value), throwsArgumentError);
      }
    },
  );

  test(
    'erased collection adapters preserve compatible Dart references',
    () async {
      final list = <int>[1, 2];
      final map = <String, int>{'count': 1};
      final set = <int>{1, 2};
      for (final (method, value) in <(String, Object)>[
        ('echoStreamFutureList', list),
        ('echoStreamFutureMap', map),
        ('echoStreamFutureSet', set),
        ('echoStreamFutureIterable', list),
        ('echoStreamFutureIterable', set),
      ]) {
        expect(identical(await adaptCollection(method, value), value), isTrue);
      }
      final restored =
          await adaptCollection('echoStreamFutureList', list) as List<int>;
      restored.add(3);
      expect(list, [1, 2, 3]);
    },
  );

  testWidgets('a bound Dart then method remains an ordinary object reference', (
    tester,
  ) async {
    final h = harness();
    try {
      await tester.pumpWidget(h.app('async-stream-callbacks'));
      await tester.pumpAndSettle();
      expect(h.boolean('asyncStreamHooks.echoThenObject()'), isTrue);
      await _pump(tester);
      expect(thenObject.calls, 0);
      expect(h.runtime.pendingPromises, 0);
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(tester);
    }
  });

  testWidgets('Promise collection events reject a JS Set in a List position', (
    tester,
  ) async {
    final h = harness();
    try {
      await tester.pumpWidget(h.app('async-stream-callbacks'));
      await tester.pumpAndSettle();
      h.execute(
        'asyncStreamHooks.wrongCollection().then(() => { asyncStreamHooks.wrongAccepted = true; }, error => { asyncStreamHooks.wrongError = String(error); })',
      );
      await _pump(tester, 80);
      expect(h.boolean('asyncStreamHooks.wrongAccepted === true'), isFalse);
      expect(
        h.string('String(asyncStreamHooks.wrongError)'),
        contains('Incompatible'),
      );
      h.execute(
        'asyncStreamHooks.broadDartCollection().then(() => { asyncStreamHooks.broadAccepted = true; }, error => { asyncStreamHooks.broadError = String(error); })',
      );
      await _pump(tester, 80);
      expect(h.boolean('asyncStreamHooks.broadAccepted === true'), isFalse);
      expect(
        h.string('String(asyncStreamHooks.broadError)'),
        contains('Incompatible'),
      );
      h.execute(
        'asyncStreamHooks.rejectedVoidTask().catch(error => { asyncStreamHooks.voidError = String(error); })',
      );
      await _pump(tester, 80);
      expect(
        h.string('String(asyncStreamHooks.voidError)'),
        contains('void task failed'),
      );
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(tester);
    }
  });

  testWidgets(
    'all four async Stream callback shapes round-trip in both directions',
    (tester) async {
      final h = harness();
      try {
        await tester.pumpWidget(h.app('async-stream-callbacks'));
        await tester.pumpAndSettle();
        h.execute(
          'asyncStreamHooks.startRoundTrips().catch(error => { asyncStreamHooks.failure = String(error); })',
        );
        await _pump(tester, 80);
        expect(
          h.boolean('asyncStreamHooks.done === true'),
          isTrue,
          reason: '${h.errors} ${h.string('String(asyncStreamHooks.failure)')}',
        );
        expect(
          h.boolean('asyncStreamHooks.roundTrips === "1,2,1,2,1,2,3,4,5,6"'),
          isTrue,
        );
        expect(h.boolean('asyncStreamHooks.nullable'), isTrue);

        final source = Stream<int>.fromIterable([11, 12]);
        final pending = callbacks.futureStream(Future.value(source));
        await _pump(tester);
        expect(await (await pending).toList(), [11, 12]);
        h.execute('asyncStreamHooks.mode = "identity"');
        final direct = callbacks.futureOrStream(Stream<int>.fromIterable([13]));
        expect(direct, isA<Stream<int>>());
        expect(await (direct as Stream<int>).toList(), [13]);
        h.execute('asyncStreamHooks.mode = "async"');
        final later = callbacks.futureOrStream(Stream<int>.fromIterable([14]));
        expect(later, isA<Future<Stream<int>>>());
        await _pump(tester);
        expect(await (await later).toList(), [14]);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(tester);
      }
    },
  );

  testWidgets(
    'JS controller Future events are typed independently and errors recover',
    (tester) async {
      final h = harness();
      final tasks = <Future<int>>[];
      final errors = <Object>[];
      StreamSubscription<Future<int>>? subscription;
      try {
        await tester.pumpWidget(h.app('async-stream-callbacks'));
        await tester.pumpAndSettle();
        h.execute('asyncStreamHooks.mode = "controller"');
        final stream = callbacks.streamFuture(
          const Stream<Future<int>>.empty(),
        );
        subscription = stream.listen((task) {
          task.ignore();
          tasks.add(task);
        }, onError: errors.add);
        h.execute('asyncStreamHooks.add(21)');
        await _pump(tester);
        expect(tasks.length, 1);
        expect(await _settle(tester, tasks.removeAt(0)), 21);
        // Observe the Future immediately after delivery, before rejection settles.
        final wrong = Completer<Object>();
        final rejected = Completer<Object>();
        subscription.onData((task) {
          task.then(
            (_) {},
            onError: (Object error) {
              if (!wrong.isCompleted) {
                wrong.complete(error);
              } else {
                rejected.complete(error);
              }
            },
          );
        });
        h.execute('asyncStreamHooks.addWrong()');
        await _pump(tester);
        expect(wrong.isCompleted, isTrue, reason: h.errors.toString());
        expect(await wrong.future, isA<TypeError>());
        h.execute(
          'asyncStreamHooks.addRejected(); asyncStreamHooks.addError()',
        );
        await _pump(tester);
        expect(rejected.isCompleted, isTrue, reason: h.errors.toString());
        expect(await rejected.future, isA<FlaxJsException>());
        expect(errors.single, isA<FlaxJsException>());
        subscription.onData((task) {
          task.ignore();
          tasks.add(task);
        });
        h.execute('asyncStreamHooks.add(22)');
        await _pump(tester);
        expect(await _settle(tester, tasks.single), 22);
        expect(h.errors, isEmpty);
      } finally {
        if (subscription != null) await _settle(tester, subscription.cancel());
        await h.finish(tester);
      }
    },
  );

  testWidgets(
    'Stream FutureOr events preserve immediate and asynchronous branches',
    (tester) async {
      final h = harness();
      final values = <FutureOr<int>>[];
      StreamSubscription<FutureOr<int>>? subscription;
      try {
        await tester.pumpWidget(h.app('async-stream-callbacks'));
        await tester.pumpAndSettle();
        h.execute('asyncStreamHooks.mode = "controller"');
        subscription = callbacks
            .streamFutureOr(const Stream<FutureOr<int>>.empty())
            .listen(values.add);
        h.execute('asyncStreamHooks.addMixed()');
        await _pump(tester);
        expect(values.first, 7);
        expect(values.last, isA<Future<int>>());
        expect(await _settle(tester, values.last as Future<int>), 8);
        expect(h.errors, isEmpty);
      } finally {
        if (subscription != null) await _settle(tester, subscription.cancel());
        await h.finish(tester);
      }
    },
  );

  testWidgets(
    'Future Stream failures and session close settle pending callbacks',
    (tester) async {
      final h = harness();
      try {
        await tester.pumpWidget(h.app('async-stream-callbacks'));
        await tester.pumpAndSettle();
        for (final mode in ['reject', 'wrong-stream']) {
          h.execute('asyncStreamHooks.mode = "$mode"');
          final failed = expectLater(
            callbacks.futureStream(Future.value(const Stream<int>.empty())),
            throwsA(
              mode == 'reject' ? isA<FlaxJsException>() : isA<ArgumentError>(),
            ),
          );
          await _pump(tester);
          await failed;
          expect(h.runtime.pendingPromises, 0);
        }
        h.execute('asyncStreamHooks.mode = "pending"');
        final closed = expectLater(
          callbacks.futureStream(Future.value(const Stream<int>.empty())),
          throwsA(
            isA<StateError>().having(
              (error) => error.message,
              'message',
              'FlaxSessionClosed',
            ),
          ),
        );
        await _pump(tester);
        await h.finish(tester);
        await closed;
        // The tracker counts observed promises cumulatively; cancellation does
        // not emit a settlement. Real teardown is checked by zero owned handles.
        expect(h.runtime.handlesAtDispose, 0);
      } finally {
        await h.finish(tester);
      }
    },
  );
  testWidgets(
    'Promise events recursively restore collections, Records and void',
    (tester) async {
      final h = harness();
      try {
        await tester.pumpWidget(h.app('async-stream-callbacks'));
        await tester.pumpAndSettle();
        h.execute(
          'asyncStreamHooks.structured().catch(error => { asyncStreamHooks.failure = String(error); })',
        );
        await _pump(tester, 100);
        expect(
          h.boolean('asyncStreamHooks.structuredDone === true'),
          isTrue,
          reason: h.string('String(asyncStreamHooks.failure)'),
        );
        expect(
          h.string('asyncStreamHooks.structuredValues'),
          '9,10|11|12:record|undefined|13,14|15,16',
        );
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(tester);
      }
    },
  );

  testWidgets(
    'Future events arrive before completion and retain independent timing',
    (tester) async {
      final h = harness();
      final controller = StreamController<Future<int>>(sync: true);
      try {
        await tester.pumpWidget(h.app('async-stream-callbacks'));
        await tester.pumpAndSettle();
        h.execute('asyncStreamHooks.mode = "observe"');
        final native = controller.stream;
        final result = callbacks.streamFuture(native);
        expect(identical(result, native), isTrue);
        final first = Completer<int>();
        final second = Completer<int>();
        controller.add(first.future);
        controller.add(second.future);
        await _pump(tester);
        expect(h.number('asyncStreamHooks.events'), 2);
        expect(h.string('asyncStreamHooks.completed.join(",")'), '');
        second.complete(2);
        await _pump(tester);
        expect(h.string('asyncStreamHooks.completed.join(",")'), '2');
        first.complete(1);
        await _pump(tester);
        expect(h.string('asyncStreamHooks.completed.join(",")'), '2,1');
        h.execute('asyncStreamHooks.pause()');
        controller.add(Future.value(3));
        await _pump(tester);
        expect(h.number('asyncStreamHooks.events'), 2);
        h.execute('asyncStreamHooks.resume()');
        await _pump(tester);
        expect(h.string('asyncStreamHooks.completed.join(",")'), '2,1,3');
        h.execute('void asyncStreamHooks.cancel()');
        await _pump(tester);
        expect(controller.hasListener, isFalse);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(tester);
        expect(controller.isClosed, isFalse);
        await _settle(tester, controller.close());
      }
    },
  );

  testWidgets(
    'Promise-valued AsyncIterable stays lazy and cancellation returns the source',
    (tester) async {
      final h = harness();
      StreamSubscription<Future<int>>? subscription;
      final tasks = <Future<int>>[];
      try {
        await tester.pumpWidget(h.app('async-stream-callbacks'));
        await tester.pumpAndSettle();
        h.execute('asyncStreamHooks.mode = "iterable"');
        final stream = callbacks.streamFuture(
          const Stream<Future<int>>.empty(),
        );
        await _pump(tester);
        expect(h.number('asyncStreamHooks.sourceNext'), 0);
        subscription = stream.listen((task) {
          task.ignore();
          tasks.add(task);
          subscription!.pause();
        });
        await _pump(tester);
        expect(tasks.length, 1);
        expect(h.number('asyncStreamHooks.sourceNext'), 1);
        await _settle(tester, subscription.cancel());
        expect(h.number('asyncStreamHooks.sourceReturns'), 1);
        expect(await _settle(tester, tasks.single), 1);
        expect(h.errors, isEmpty);
      } finally {
        if (subscription != null) await _settle(tester, subscription.cancel());
        await h.finish(tester);
      }
    },
  );
}
