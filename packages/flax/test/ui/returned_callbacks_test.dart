import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';

import '../../.dart_tool/flax/ui/interop_bindings.dart';
import '../support/owned_harness.dart';

import 'package:flax_test/flax_test.dart';

import '../fixtures/interop.dart' show DeferredValues;

void main() {
  testWidgets(
    'returned function views validate inputs and keep listener identity',
    (t) async {
      final h = OwnedHarness(fixture: 'interop', extra: [interopBindings]);
      try {
        await t.pumpWidget(h.app('interop'));
        h.execute(
          'var review = interop.DeferredValues(); var integer = review.integerView; var real = review.doubleView',
        );
        expect(
          h.boolean(
            'integer !== real && integer === review.integerView && integer(3) === real(3.8)',
          ),
          isTrue,
        );
        expect(
          () => h.execute('integer(1.5)'),
          throwsA(isA<FlaxJsException>()),
        );
        expect(
          () => h.execute('review.same(integer)'),
          throwsA(isA<FlaxJsException>()),
        );
        h.execute(
          'var base = interop.Base(); var fn = review.listeners.get(0); base.watch(fn); base.watch(fn)',
        );
        final before = DeferredValues.notifications;
        h.execute(
          'base.notify(); base.unwatch(fn); base.notify(); base.unwatch(fn); base.notify()',
        );
        expect(DeferredValues.notifications - before, 3);
        expect(h.number('base.listeners'), 0);
        h.execute(
          'var hits = 0; var jsfn = review.echo([() => ++hits]).get(0)',
        );
        expect(
          () => h.execute("review.echo([() => 'wrong']).get(0)()"),
          throwsA(isA<FlaxJsException>()),
        );
        expect(h.number('jsfn()'), 1);
        expect(
          () => h.execute('review.untypedCallbacks.toArray()'),
          throwsA(isA<FlaxJsException>()),
        );
        expect(
          () => h.execute('review.direct(undefined)'),
          throwsA(isA<FlaxJsException>()),
        );
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'returned functions use one entry and release after real collectors',
    (t) async {
      final h = OwnedHarness(fixture: 'interop', extra: [interopBindings]);
      try {
        await t.pumpWidget(h.app('interop'));
        h.execute(
          'var anchor = interop.DeferredValues(); var native = anchor.callbacks.get(0); var js = anchor.echo([() => 4]).get(0)',
        );
        await t.pumpAndSettle();
        final baseline = h.runtime.handles;
        final calls = h.runtime.hostCalls['__flaxFunction'] ?? 0;
        h.execute(
          'for (let i=0; i<20; i++) { native(); js(); if (native !== anchor.callbacks.get(0)) throw Error("identity"); }',
        );
        await t.pumpAndSettle();
        expect(h.runtime.hostCalls['__flaxFunction']! - calls, 40);
        // Reentering a JS-source function caches one shared invocation helper.
        final steadyHandles = baseline + 1;
        expect(h.runtime.handles, steadyHandles);
        expect(
          h.runtime.handleLabels
              .where((label) => label == '__flaxBindings.invokeCallback')
              .length,
          1,
        );
        // ignore: avoid_print
        print(
          'Returned calls: 40 shared host entries, 20 JS-source reentries; live handles $baseline -> ${h.runtime.handles}',
        );
        h.execute(
          'var original = () => 6; var weak; (() => { const transient = anchor.echo([original]).get(0); weak = new WeakRef(transient); })()',
        );
        for (var i = 0; i < 60; i++) {
          h.runtime.drainMicrotasks();
          h.execute('${flaxTestJsGarbagePressure}anchor.callbacks.length');
          await t.pumpAndSettle();
          final collected = h.boolean('weak.deref() === undefined');
          await t.runAsync(flaxTestCollectDartGarbage);
          if (collected && h.runtime.handles == steadyHandles) break;
        }
        expect(h.boolean('weak.deref() === undefined'), isTrue);
        expect(h.runtime.handles, steadyHandles);
      } finally {
        await h.finish(t);
      }
    },
  );

  for (final item in [
    (
      'present Future',
      'var result = 0; review.present.then(v => result = v)',
      7,
    ),
    (
      'Stream values and done',
      '''var seen = []; var result = 0;
review.ticks.listen(
  (v) => seen.push(v),
  {
    onError: (e) => { result = -1; },
    onDone: () => { result = seen.reduce((a, b) => a + b, 0) * 10 + 1; },
  },
);''',
      61,
    ),
    (
      'Stream error',
      '''var result = 0;
review.failingTicks.listen(
  (v) => { result = -2; },
  {
    onError: (e) => { result = String(e).includes('stream boom') ? 7 : -1; },
    onDone: () => { result = result * 10 + 1; },
  },
);''',
      71,
    ),
    (
      'Stream cancel after first event',
      '''var seen = []; var result = 0;
var sub = review.ticks.listen((v) => {
  seen.push(v);
  if (seen.length === 1) {
    sub.cancel();
    result = seen.length * 10 + seen[0];
  }
});''',
      11,
    ),
    ('nullable Future', 'var result = Number(review.absent === null)', 1),
    ('native callback', 'var result = review.callbacks.get(0)()', 42),
    ('JS callback', 'var result = review.echo([() => 19]).get(0)()', 19),
    ('removed callback', 'var result = review.callbacks.removeAt(0)()', 42),
    ('copied callback', 'var result = review.callbacks.toArray()[0]()', 42),
    (
      'Future null distinctions',
      '''var result = 0;
      if (interop.DeferredValues.staticAbsent === null && review.missing() === null && review.futures.get(0) === null) result++;
      review.nullableResult.then(v => {if (v === null) result++});
      review.nothing.then(v => {if (v === undefined) result++});
      review.failure.catch(e => {if (String(e).includes('deferred failure')) result++});
      review.futures.get(1).then(v => {if (v === 9) result++});
    ''',
      5,
    ),
    (
      'function fields and Future',
      '''var result = review.direct() + interop.DeferredValues.staticFunction();
      review.laterFunction.then(fn => {if (fn === review.direct) result++});''',
      55,
    ),
    (
      'function identity and retention',
      '''var fn = review.callbacks.get(0);
      var result = Number(fn === review.callbacks.get(0) && review.same(fn));
      var removed = review.callbacks.removeAt(0);
      if (fn === removed && fn() === 42) result++;
      review.echo([fn]).get(0) === fn && result++;
    ''',
      3,
    ),
    (
      'uniform collection call semantics',
      '''var native = review.transforms.get(0);
      var js = review.passTransforms([values => [...values.toArray(), 8]]).get(0);
      var result = native([1, 2]).get(2) + js([1, 2]).get(2);
      var copied = review.passTransforms([js]).toArray()[0];
      if (copied === js && copied([9]).get(1) === 8) result++;
    ''',
      14,
    ),
    (
      'Map callback get remove and copy',
      '''var m = review.mapping;
      var fn = m.get('a'); var copied = m.toMap().get('a'); var removed = m.remove('a');
      var result = Number(fn === copied && fn === removed && m.get('a') === null) + removed();
    ''',
      22,
    ),
    (
      'shared copies retain graph identity and callable elements',
      '''var list = review.sharedCallbacks.toArray();
      var map = review.groupedCallbacks.toMap();
      var result = Number(list[0] === list[1]) + Number(map.get('first') === map.get('second')) + list[0][0]();
    ''',
      44,
    ),
    (
      'object and enum callback results',
      '''var token = interop.Token(3);
      var result = Number(review.tokens.get(0)(token) === token) + Number(review.modes.get(0)(interop.Mode.second) === interop.Mode.second);
    ''',
      2,
    ),
  ]) {
    testWidgets(item.$1, (t) async {
      final h = OwnedHarness(fixture: 'interop', extra: [interopBindings]);
      try {
        await t.pumpWidget(h.app('interop'));
        h.execute('var review = interop.DeferredValues()');
        h.execute(item.$2);
        await t.pumpAndSettle();
        expect(h.number('result'), item.$3);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    });
  }
}
