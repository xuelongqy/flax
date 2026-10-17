import 'package:flax/flax.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../../.dart_tool/flax/ui/binding_completion_bindings.dart';
import '../fixtures/binding_completion.dart' as values;
import '../support/owned_harness.dart';

void main() {
  OwnedHarness harness() => OwnedHarness(
    fixture: 'binding_completion',
    extra: [binding_completionBindings],
  );

  testWidgets('async native subclasses preserve Promise, iteration and super', (
    tester,
  ) async {
    final h = harness();
    values.resetCompletionAsyncValues();
    try {
      await tester.pumpWidget(h.app('binding-completion'));
      h.execute('''
        var future = new completion.CompletionFuture(7);
        var asyncResults = [];
        var asyncDone = false;
        var asyncError = '';
        future.observe().then(v => asyncResults.push(v));
        Promise.resolve(future).then(v => asyncResults.push(v));
        (async () => {
          asyncResults.push(await future);
          var stream = new completion.CompletionStream(completion.Stream.value(3));
          for await (const value of stream) asyncResults.push(value);
        })().then(() => { asyncDone = true; }, error => { asyncError = String(error); asyncDone = true; });
      ''');
      for (var i = 0; i < 80 && !h.boolean('asyncDone'); i++) {
        await tester.pump(const Duration(milliseconds: 1));
        await _pump(tester);
      }
      expect(h.boolean('asyncDone'), isTrue);
      expect(h.string('asyncError'), isEmpty);
      expect(h.errors, isEmpty);
      expect(
        h.string('JSON.stringify(asyncResults.sort((a,b) => a-b))'),
        '[3,7,7,7]',
      );
      expect(h.number('future.calls'), greaterThan(0));
      expect(h.number('future.echo(4)'), 5);
      h.execute('future = undefined');
      for (var i = 0; i < 4 && values.liveCompletionAsyncValues != 0; i++) {
        await _collect(tester, h);
      }
      expect(
        values.liveCompletionAsyncValues,
        0,
        reason:
            '${values.liveCompletionAsyncTypes}; futures=${h.runtime.pendingFutures}; promises=${h.runtime.pendingPromises}',
      );
    } finally {
      if (!h.runtime.isDisposed) await h.finish(tester);
    }
  });

  testWidgets(
    'shared types, native structures and proxy dispatch retain Dart semantics',
    (tester) async {
      final h = harness();
      try {
        await tester.pumpWidget(h.app('binding-completion'));
        await tester.pumpAndSettle();
        expect(h.errors, isEmpty);
        h.execute('''
        var c = completion;
        var child = new c.CompletionChild();
        var getter = new c.CompletionGetter(); getter.value = 5;
        var setter = new c.CompletionSetter(); setter.value = 6;
        var decorated = new c.CompletionDecorated();
        var fn = c.nativeFunction();
        var record = c.completionRecord();
        var recordType = c.dartTypes.of(record);
        var RecordBox = c.CompletionBox.\$type(recordType);
        var recordBox = RecordBox(record);
        var recordEcho = c.dartType(c.completionEcho, recordType);
        var meters = c.CompletionMeters.view(3);
      ''');
        expect(h.string('child.call("value")'), 'value!');
        expect(h.string('child.value'), 'seed');
        expect(h.string('new c.CompletionLeftChild().value'), 'left');
        expect(h.string('new c.CompletionHiddenChild().value'), 'hidden');
        expect(h.string('c.completionCell().value'), 'cell');
        expect(h.number('getter.read()'), 9);
        expect(h.number('getter.written'), 5);
        expect(h.number('setter.value'), 7);
        expect(h.number('setter.written'), 6);
        expect(h.string('decorated.decorate("value")'), '[value]!');
        expect(
          h.string(
            'c.dartType(decorated, "box", c.dartTypes.string)(value => c.CompletionBox.\$type(c.dartTypes.string)(value)).value',
          ),
          'boxed',
        );
        expect(h.string('fn(3, {loud: true})'), 'LOUD:3');
        expect(h.string('c.echoFunction(fn)(4)'), 'soft:4');
        expect(
          h.string('c.getDartType(recordBox.value)'),
          h.string('c.getDartType(record)'),
        );
        expect(
          h.string('c.getDartType(recordEcho(record))'),
          h.string('c.getDartType(record)'),
        );
        expect(h.number('meters.plus(4)'), 7);
        expect(h.number('meters.value'), 3);
        expect(h.string('c.CompletionMeters.unit'), 'meters');
        expect(h.boolean('c.defaultSet()'), isTrue);
        expect(h.number('c.voidInput(null)'), 7);
        expect(h.number('c.voidInput(3)'), 7);
        expect(h.number('c.completionOptions(2, {amount: 3})'), 5);
        expect(
          h.number('c.voidCallback(value => value === undefined ? 9 : -1)'),
          9,
        );
        expect(h.number('c.returnedVoidCallback()(null)'), 1);
        expect(h.number('c.returnedVoidCallback()(3)'), 2);
        for (final call in [
          'recordEcho(c.completionWrongRecord())',
          'c.echoFunction(() => 1)',
          'c.nativeGenericFunction()',
          'c.asDart(c.defaultWidget(), c.GenericCell.\$type(c.dartTypes.string))',
          'fn("wrong")',
          'fn(1, {unknown: true})',
          'c.defaultWidget(null)',
          'c.defaultSet({value: null})',
          'c.voidInput()',
          'c.voidInput(undefined)',
          'c.CompletionBox.\$type(c.dartTypes.never)(3)',
          'c.dartSuper(c.MultiProxy, "absent")',
          'new (class extends c.MultiProxy { constructor() { super(c.dartSuper(c.MultiProxy, "right", {})); } })()',
          'new (class extends c.MultiProxy { constructor() { super(c.dartSuper(c.GetterProxy, "")); } })()',
        ]) {
          expect(
            () => h.execute(call),
            throwsA(isA<FlaxJsException>()),
            reason: call,
          );
        }
        h.execute('''
        var entry = c.core.MapEntry.\$type(c.dartTypes.string, c.dartTypes.int)('key', 7);
        var runes = c.core.Runes('🎯a');
        var runeIterator = runes.iterator;
        var data = c.core.UriData.fromUri(c.core.Uri.parse('data:text/plain,hello'));
        var futureBox = c.CompletionBox.\$type(c.dartTypes.future(c.dartTypes.int))(Promise.resolve(4));
        var nullBox = c.CompletionBox.\$type(c.dartTypes.null)(null);
        var bigBox = c.CompletionBox.\$type(c.dartTypes.bigInt)(123n);
        var voidBox = c.CompletionBox.\$type(c.dartTypes.void)(123);
        var futureOrBox = c.CompletionBox.\$type(c.dartTypes.futureOr(c.dartTypes.int))(5);
        var streamBox = c.CompletionBox.\$type(c.dartTypes.stream(c.dartTypes.int))(c.Stream.fromIterable([6]));
        globalThis.completionAsync = 0;
        futureBox.value.then(value => { globalThis.completionAsync += value; });
        c.completionTicker(value => value === undefined ? 7 : -1).then(value => { globalThis.completionAsync += value; });
        streamBox.value.first.then(value => { globalThis.completionAsync += value; });
      ''');
        expect(h.string('entry.key'), 'key');
        expect(h.number('entry.value'), 7);
        expect(h.number('runes.length'), 2);
        expect(
          h.boolean(
            'runeIterator.moveNext() && runeIterator.current === 127919',
          ),
          isTrue,
        );
        expect(h.string('data.contentText'), 'hello');
        expect(
          h.boolean('nullBox.value === null && bigBox.value === 123n'),
          isTrue,
        );
        expect(
          h.boolean('voidBox.value === undefined && futureOrBox.value === 5'),
          isTrue,
        );
        await _pump(tester);
        expect(h.number('completionAsync'), 17);
        expect(
          h.string('c.CompletionBox.\$type(c.dartTypes.unknown)(fn).value(4)'),
          'soft:4',
        );
        expect(
          () =>
              h.execute('c.CompletionBox.\$type(c.dartTypes.unknown)(() => 1)'),
          throwsA(isA<FlaxJsException>()),
        );
        h.execute('''
        var NativeCallbackBox = c.CompletionBox.\$type(c.dartTypes.of(fn));
        function rejectedNativeCallback() {
          try { NativeCallbackBox(() => 'wrong'); }
          catch (error) { return String(error).includes('selected typed callback signature'); }
          return false;
        }
      ''');
        expect(h.boolean('rejectedNativeCallback()'), isTrue);
        final handlesBeforeRejectedCallback = h.runtime.handles;
        for (var i = 0; i < 10; i++) {
          expect(h.boolean('rejectedNativeCallback()'), isTrue);
        }
        expect(h.runtime.handles, handlesBeforeRejectedCallback);
        h.execute('''
        var callbackOwner = c.CompletionBox.\$type(c.dartTypes.string)('borrowed');
        var savedCallbackView;
        var sharedVisitor = value => { savedCallbackView = value; };
        callbackOwner.visit(sharedVisitor);
        var retainedCallbackView = savedCallbackView;
        callbackOwner.visitScoped(sharedVisitor);
      ''');
        expect(h.string('retainedCallbackView.value'), 'borrowed');
        expect(
          () => h.execute('savedCallbackView.value'),
          throwsA(isA<FlaxJsException>()),
        );
        h.execute('''
        var reverseOwner = c.CompletionBox.\$type(c.dartTypes.int)(7);
        var reverseVisitor = value => { savedCallbackView = value; };
        reverseOwner.visitScoped(reverseVisitor);
      ''');
        expect(
          () => h.execute('savedCallbackView.value'),
          throwsA(isA<FlaxJsException>()),
        );
        h.execute('reverseOwner.visit(reverseVisitor)');
        expect(h.number('savedCallbackView.value'), 7);
        await tester.pumpWidget(h.app('completion-default'));
        await tester.pumpAndSettle();
        expect(find.text('default'), findsOneWidget);
        await tester.pumpWidget(h.app('completion-cell'));
        await tester.pumpAndSettle();
        expect(find.text('cell'), findsOneWidget);
        expect(h.errors, isEmpty);
      } finally {
        if (!h.runtime.isDisposed) await h.finish(tester);
      }
    },
  );

  testWidgets(
    'callback Map keys preserve identity and release cross-heap cycles',
    (tester) async {
      final h = harness();
      try {
        await tester.pumpWidget(h.app('binding-completion'));
        expect(h.errors, isEmpty);
        h.execute('''
        var callbackMap = completion.callbackMap();
        var callback = value => value + 1;
        var weakCallback = new WeakRef(callback);
        completion.rememberCompletionCallback(callback);
      ''');
        await _collect(tester, h);
        expect(h.boolean('completion.completionCallbackAlive()'), isTrue);
        h.execute(
          "callbackMap.set(callback, 'first'); callbackMap.set(callback, 'second');",
        );
        h.execute('''
        var boxedCallback = completion.CompletionBox.\$type(completion.dartTypes.unknown)(
          callbackMap.toMap().keys().next().value);
        callbackMap.set(boxedCallback.value, 'second');
      ''');
        expect(h.number('callbackMap.length'), 1);
        expect(h.string('callbackMap.get(callback)'), 'second');
        h.execute('callback = null');
        await _collect(tester, h);
        expect(h.boolean('weakCallback.deref() !== undefined'), isTrue);
        expect(h.string('callbackMap.get(weakCallback.deref())'), 'second');
        h.execute('callbackMap.clear()');
        await _collect(tester, h);
        expect(h.boolean('weakCallback.deref() !== undefined'), isTrue);
        h.execute('boxedCallback = null');
        for (var i = 0; i < 8; i++) {
          await _collect(tester, h);
          if (h.boolean('weakCallback.deref() === undefined')) break;
        }
        expect(h.boolean('weakCallback.deref() === undefined'), isTrue);
        expect(h.boolean('completion.completionCallbackAlive()'), isFalse);
        expect(h.errors, isEmpty);
      } finally {
        if (!h.runtime.isDisposed) await h.finish(tester);
      }
    },
  );

  testWidgets('lazy JS Iterables and Widget mutations share native ownership', (
    tester,
  ) async {
    final h = harness();
    try {
      await tester.pumpWidget(h.app('binding-completion'));
      expect(h.errors, isEmpty);
      h.execute('''
        var requests = 0, finalized = 0;
        var list = completion.completionWidgets();
        var map = completion.completionWidgetMap();
        var set = completion.completionWidgetSet();
        var widget = new completion.CompletionWidget('held');
        list.add(widget); list.set(0, widget); map.set('held', widget); set.add(widget);
        completion.keepCompletionWidgets(function* () {
          try { for (let i = 0; i < 1000; i++) { requests++; yield list.get(0); } }
          finally { finalized++; }
        });
        widget = null;
      ''');
      expect(h.number('requests'), 0);
      h.execute('''
        var nextReads = 0;
        completion.firstCompletionNumber(() => ({
          [Symbol.iterator]() { return {
            get next() { nextReads++; return () => ({done: false, value: 3}); }
          }; }
        }));
      ''');
      expect(h.number('nextReads'), 1);
      expect(
        h.boolean('''(() => {
          const iterable = { *[Symbol.iterator]() { yield 3; } };
          return completion.sameCompletionIterables([iterable, iterable]);
        })()'''),
        isTrue,
      );
      await _collect(tester, h);
      final widget = values.readCompletionWidget();
      expect(h.number('requests'), 1);
      expect(h.number('finalized'), 0);
      await tester.pumpWidget(MaterialApp(home: widget));
      await tester.pumpAndSettle();
      expect(find.text('held!'), findsOneWidget);
      expect(h.number('map.length + set.length'), 2);
      expect(
        h.boolean('list.removeAt(0) instanceof completion.CompletionWidget'),
        isTrue,
      );
      h.execute('map.clear(); set.clear()');
      expect(
        h.number(
          'completion.firstCompletionNumber(function* () {yield 3; throw Error("must stay lazy");})',
        ),
        3,
      );
      for (final body in [
        'yield "wrong";',
        'throw Error("iterator failure");',
      ]) {
        expect(
          () => h.execute(
            'completion.firstCompletionNumber(function* () {$body})',
          ),
          throwsA(isA<FlaxJsException>()),
        );
      }
      final held = values.heldCompletionWidgets!;
      values.clearCompletionWidgets();
      await h.finish(tester);
      expect(() => held.iterator, throwsStateError);
    } finally {
      values.clearCompletionWidgets();
      if (!h.runtime.isDisposed) await h.finish(tester);
    }
  });
}

Future<void> _pump(WidgetTester tester) => tester
    .runAsync(() async {
      await Future<void>.delayed(const Duration(milliseconds: 25));
    })
    .then((_) => tester.pump());

Future<void> _collect(WidgetTester tester, OwnedHarness harness) async {
  harness.execute(flaxTestJsGarbagePressure);
  await tester.runAsync(flaxTestCollectDartGarbage);
  await _pump(tester);
}
