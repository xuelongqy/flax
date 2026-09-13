import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';

import '../../.dart_tool/flax/ui/interop_bindings.dart';
import '../fixtures/interop.dart' as fixture;

import 'package:flax_test/flax_test.dart';

import '../support/owned_harness.dart';

void main() {
  testWidgets('typed views preserve mutations, nullable aliases and copy identity', (
    t,
  ) async {
    final h = OwnedHarness(fixture: 'interop', extra: [interopBindings]);
    try {
      await t.pumpWidget(h.app('interop'));
      await t.pumpAndSettle();
      for (final first in [true, false]) {
        h.execute(
          'var c=interop.Collections(); ${first ? "var wide=c.broadNumbers; var typed=c.numbers" : "var typed=c.numbers; var wide=c.broadNumbers"}; typed.add(3)',
        );
        expect(
          h.boolean(
            'wide !== typed && typed === c.numbers && typed === c.nullableNumbers && c.accept(wide) === typed',
          ),
          isTrue,
        );
        expect(h.number('wide.get(2)'), 3);
        h.execute(
          '${first ? "var broad=c.broadCounts; var map=c.counts" : "var map=c.counts; var broad=c.broadCounts"}; map.set("a",3); map.set("b",null)',
        );
        expect(
          h.boolean(
            'map !== broad && broad.get("a") === 3 && map.containsKey("b") && !map.containsKey("missing")',
          ),
          isTrue,
        );
        h.execute('broad.clear(); map.set("c",4)');
        expect(h.number('broad.get("c")'), 4);
        h.execute(
          '${first ? "var wideSet=c.broadUnique; var typedSet=c.unique" : "var typedSet=c.unique; var wideSet=c.broadUnique"}; var iterableSet=c.uniqueIterable; typedSet.add(5)',
        );
        expect(
          h.boolean(
            'wideSet !== typedSet && iterableSet !== typedSet && iterableSet !== wideSet && typedSet === c.unique && wideSet === c.broadUnique && iterableSet === c.uniqueIterable && wideSet.contains(5) && iterableSet.contains(5)',
          ),
          isTrue,
        );
      }
      for (final operation in [
        'typed.add(1.5)',
        'typed.add("x")',
        'c.frozen.add(1)',
        'c.fixed.add(1)',
        'c.frozenSet.add(1)',
      ]) {
        expect(() => h.execute(operation), throwsA(isA<FlaxJsException>()));
      }
      h.execute(
        'var graph=[]; graph.push(graph,typed,wide); c.graph=graph; var copy=c.graph.toArray()',
      );
      expect(h.boolean('copy[0] === copy && copy[1] === copy[2]'), isTrue);
      for (final copy in [
        'c.iterableSetConflict.toMap()',
        'c.setIterableConflict.toMap()',
        'c.cyclicIterableSetConflict.toMap()',
        'c.cyclicSetIterableConflict.toMap()',
      ]) {
        expect(() => h.execute(copy), throwsA(isA<FlaxJsException>()));
      }
      h.execute(
        'var compatible=[...c.compatibleListIterable.toMap().entries()][0]',
      );
      expect(
        h.boolean(
          'Array.isArray(compatible[0]) && compatible[0] === compatible[1]',
        ),
        isTrue,
      );
      final definitions = h.runtime.jsCalls['__flaxBindings.defineCollection'];
      final calls = h.runtime.hostCalls['__flaxObject']!;
      h.execute('for(let i=0;i<20;i++){ c.numbers; c.broadNumbers; }');
      expect(h.runtime.jsCalls['__flaxBindings.defineCollection'], definitions);
      expect(h.runtime.hostCalls['__flaxObject']! - calls, 40);
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });
  testWidgets(
    'real view GC preserves siblings and releases the final Dart hold',
    (t) async {
      final h = OwnedHarness(fixture: 'interop', extra: [interopBindings]);
      try {
        await t.pumpWidget(h.app('interop'));
        await t.pumpAndSettle();
        h.execute(
          'var anchor=interop.Collections(); var c=interop.Collections(); var wide=c.broadNumbers; var weakView=new WeakRef(c.numbers)',
        );
        final original = fixture.Collections.lastNumbers!;
        Future<void> collect() async {
          h.runtime.drainMicrotasks();
          h.execute('${flaxTestJsGarbagePressure}anchor.numbers.length');
          await t.pumpAndSettle();
          await t.runAsync(flaxTestCollectDartGarbage);
        }

        for (var i = 0; i < 60; i++) {
          await collect();
          if (h.boolean('weakView.deref() === undefined')) break;
        }
        expect(h.boolean('weakView.deref() === undefined'), isTrue);
        h.execute('c.numbers.add(3)');
        expect(h.number('wide.get(2)'), 3);
        h.execute('c=null; wide=null');
        for (var i = 0; i < 60; i++) {
          await collect();
          if (original.target == null) break;
        }
        expect(
          original.target,
          isNull,
          reason: 'The collection view index must not retain the original after all wrappers expire',
        );
      } finally {
        await h.finish(t);
      }
    },
  );
}
