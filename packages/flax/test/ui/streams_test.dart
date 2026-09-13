import 'dart:async';

import 'package:flax/flax.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

import '../support/owned_harness.dart';

Future<void> _pumpBridge(WidgetTester tester, [int count = 1]) async {
  for (var i = 0; i < count; i++) {
    await tester.pump();
  }
}

void main() {
  Future<void> waitFor(
    WidgetTester tester,
    OwnedHarness harness,
    String expression,
  ) async {
    for (var i = 0; i < 400; i++) {
      harness.runtime.drainMicrotasks();
      await tester.pump(const Duration(milliseconds: 1));
      if (harness.boolean(expression)) return;
      await tester.runAsync(
        () => Future<void>.delayed(const Duration(milliseconds: 1)),
      );
    }
  }

  testWidgets(
    'StreamBuilder follows the real stream and keeps errors nonterminal',
    (tester) async {
      final harness = OwnedHarness(fixture: 'streams');
      try {
        await tester.pumpWidget(harness.app('streams'));
        await tester.pumpAndSettle();
        expect(find.text('static-stream-sibling'), findsOneWidget);
        expect(find.text('waiting:0'), findsOneWidget);

        harness.execute('streamHooks.add(3)');
        await tester.pump();
        expect(find.text('active:3'), findsOneWidget);

        harness.execute('streamHooks.addError()');
        await tester.pump();
        expect(find.textContaining('stream fixture error'), findsOneWidget);

        harness.execute('streamHooks.add(4)');
        await tester.pump();
        expect(find.text('active:4'), findsOneWidget);

        harness.execute('streamHooks.replaceStream()');
        await tester.pump();
        expect(find.text('waiting:4'), findsOneWidget);
        harness.execute('streamHooks.addAlternate(9)');
        await tester.pump();
        expect(find.text('active:9'), findsOneWidget);
        harness.execute('void streamHooks.closeAlternate()');
        await tester.pump();
        expect(find.text('done:9'), findsOneWidget);
        expect(find.text('static-stream-sibling'), findsOneWidget);
        expect(harness.errors, isEmpty);
      } finally {
        await harness.finish(tester);
      }
    },
  );

  testWidgets(
    'AsyncIterable is lazy and StreamIterator completes without prefetch',
    (tester) async {
      final harness = OwnedHarness(fixture: 'streams');
      try {
        await tester.pumpWidget(harness.app('streams'));
        await tester.pumpAndSettle();
        expect(harness.number('streamHooks.sourceIterations'), 0);
        expect(harness.number('streamHooks.sourceNext'), 0);

        harness.execute('void streamHooks.listenAsyncSource()');
        await _pumpBridge(tester, 8);
        expect(harness.number('streamHooks.sourceIterations'), 1);
        expect(harness.number('streamHooks.sourceNext'), 3);
        expect(
          harness.boolean('streamHooks.asyncValues.join(",") === "1,2"'),
          isTrue,
        );
        expect(harness.errors, isEmpty);
      } finally {
        await harness.finish(tester);
      }
    },
  );

  testWidgets('AsyncIterable pause and cancel bound in-flight work', (
    tester,
  ) async {
    final harness = OwnedHarness(fixture: 'streams');
    try {
      await tester.pumpWidget(harness.app('streams'));
      await tester.pumpAndSettle();

      harness.execute('streamHooks.startPausedSource()');
      await _pumpBridge(tester, 6);
      expect(harness.number('streamHooks.pausedSourceNext'), 1);
      expect(
        harness.boolean('streamHooks.pausedSourceValues.length === 0'),
        isTrue,
      );

      harness.execute('streamHooks.resumePausedSource()');
      await waitFor(tester, harness, 'streamHooks.pausedSourceDone === true');
      expect(
        harness.boolean('streamHooks.pausedSourceValues.join(",") === "1,2"'),
        isTrue,
      );
      expect(harness.number('streamHooks.pausedSourceNext'), 3);

      harness.execute('void streamHooks.cancelPendingSource()');
      await waitFor(
        tester,
        harness,
        'streamHooks.pendingSourceCancelled === true',
      );
      expect(harness.number('streamHooks.pendingSourceNext'), 1);
      expect(harness.number('streamHooks.pendingSourceReturns'), 1);
      expect(harness.errors, isEmpty);
    } finally {
      await harness.finish(tester);
    }
  });

  testWidgets('transformer sinks expire when their callback returns', (
    tester,
  ) async {
    final harness = OwnedHarness(fixture: 'streams');
    try {
      await tester.pumpWidget(harness.app('streams'));
      await tester.pumpAndSettle();
      expect(
        harness.boolean('streamHooks.transformed.join(",") === "2,4"'),
        isTrue,
      );
      expect(harness.boolean('streamHooks.transformDone === true'), isTrue);
      expect(
        () => harness.execute('streamHooks.useEscapedSink()'),
        throwsA(isA<FlaxJsException>()),
      );
      expect(harness.errors, isEmpty);
    } finally {
      await harness.finish(tester);
    }
  });

  testWidgets('generated Stream operators preserve Dart results', (
    tester,
  ) async {
    final harness = OwnedHarness(fixture: 'streams');
    try {
      await tester.pumpWidget(harness.app('streams'));
      await tester.pumpAndSettle();
      harness.execute(
        'void streamHooks.runOperators().catch(error => streamHooks.operatorError = String(error))',
      );
      await waitFor(tester, harness, 'streamHooks.operatorsDone === true');
      expect(
        harness.boolean('streamHooks.operatorsDone === true'),
        isTrue,
        reason: harness.string(
          'String(streamHooks.operatorError ?? streamHooks.operatorStage ?? "")',
        ),
      );
      expect(
        harness.string('JSON.stringify(streamHooks.operatorResult)'),
        '{"empty":true,"value":7,"future":8,"futures":[1,2],'
        '"multi":[3],"periodic":[0,1],"eventTransformed":[3,6],'
        '"filtered":[2,2,3],"mapped":[2,4,4,6],'
        '"syncAsyncMapped":[2,3,3,4],'
        '"asyncMapped":[2,3,3,4],"asyncExpanded":[1,11,2,12],'
        '"expanded":[1,11,2,12],"handled":[],"handledStack":true,'
        '"reduce":8,"fold":18,"join":"1.0-2.0-2.0-3.0","contains":true,'
        '"forEach":8,"every":true,"any":true,"length":4,"last":3,'
        '"list":[1,2,2,3],'
        '"set":[1,2,3],"drain":12,"take":[1,2],'
        '"takeWhile":[1,2,2],"skip":[2,3],"skipWhile":[3],'
        '"distinct":[1,2,3],"firstWhere":2,"firstWhereFallback":99,'
        '"lastWhere":2,"singleWhere":3,"elementAt":2,"cast":3,'
        '"castInstance":1,"view":1,'
        '"iterator":[4,5],"baseTransformer":[21],'
        '"directTransformer":[31],"fromBind":[41],'
        '"consumerClosed":true,"broadcast":[8,9],"timeout":[10],'
        '"piped":[6,7]}',
      );
      expect(harness.errors, isEmpty);
    } finally {
      await harness.finish(tester);
    }
  });

  testWidgets('controllers preserve Dart timing, pause and cancellation', (
    tester,
  ) async {
    final harness = OwnedHarness(fixture: 'streams');
    try {
      await tester.pumpWidget(harness.app('streams'));
      await tester.pumpAndSettle();
      harness.execute(
        'void streamHooks.runControllers().catch(error => streamHooks.controllerError = String(error))',
      );
      await waitFor(tester, harness, 'streamHooks.controllersDone === true');
      expect(
        harness.boolean('streamHooks.controllersDone === true'),
        isTrue,
        reason: harness.string(
          'String(streamHooks.controllerError ?? "controllers pending")',
        ),
      );
      expect(
        harness.string('JSON.stringify(streamHooks.controllerResult)'),
        '{"initial":[false,true,false,"function"],"sinkIdentity":false,'
        '"paused":true,"beforeResume":[1,20],"nestedPaused":true,'
        '"afterResume":[1,20,30],"afterCancel":[false,false],'
        '"afterClose":true,'
        '"lifecycle":["listen","before-add","after-add:1","pause","resume","cancel"],'
        '"asyncImmediate":[],"asyncValues":[4],'
        '"errors":["Error: controller-error:true"],"afterError":[5],'
        '"broadcastFirst":[6],"broadcastSecond":[6,7],"asFuture":12,'
        '"cancelPending":true,"cancelCompleted":true,"addedValues":[13,14],'
        '"streamFlags":[true,true]}',
      );
      expect(harness.errors, isEmpty);
    } finally {
      await harness.finish(tester);
    }
  });

  testWidgets(
    'session close cancels bridge subscriptions without closing controllers',
    (tester) async {
      StreamController<Object?>? applicationController;
      final harness = OwnedHarness(
        fixture: 'streams',
        onCreate: (_, value) {
          if (value is StreamController<Object?>) {
            applicationController = value;
          }
        },
      );
      await tester.pumpWidget(harness.app('streams'));
      await tester.pumpAndSettle();
      harness.execute('streamHooks.startCloseResources()');
      await _pumpBridge(tester, 2);

      final controller = applicationController!;
      expect(controller.hasListener, isTrue);
      expect(controller.isClosed, isFalse);

      final closed = harness.session.close();
      await _pumpBridge(tester, 3);
      expect(controller.hasListener, isFalse);
      expect(controller.isClosed, isFalse);
      expect(harness.number('streamHooks.pendingSourceReturns'), 1);

      controller.add(42);
      await _pumpBridge(tester);
      expect(harness.number('streamHooks.closeValues.length'), 0);

      unawaited(controller.close());
      await tester.pumpWidget(const SizedBox());
      await tester.pumpAndSettle();
      await closed;
      expect(harness.runtime.handlesAtDispose, 0);
      expect(harness.runtime.activeSubscriptions, 0);
    },
  );
}
