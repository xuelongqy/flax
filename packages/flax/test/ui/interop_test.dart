import 'package:flax_test/flax_test.dart';

import '../fixtures/interop.dart' as fixture;

import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';

import '../../.dart_tool/flax/ui/interop_bindings.dart';
import '../support/owned_harness.dart';

Future<void> _waitFor(
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

void main() {
  testWidgets('typed Stream views validate events and preserve Dart errors', (
    tester,
  ) async {
    final harness = OwnedHarness(fixture: 'interop', extra: [interopBindings]);
    try {
      await tester.pumpWidget(harness.app('interop'));
      await tester.pumpAndSettle();
      harness.execute(r'''
          var streamValues = interop.DeferredValues();
          var returnedStreams;
          var validLabels;
          var invalidLabelError;
          var failureIdentity;
          var futureInputs;
          void Promise.all([
            streamValues.ticks.toList(),
            streamValues.labels.toList(),
          ]).then(values => {
            returnedStreams = JSON.stringify([
              values[0].toArray(),
              values[1].toArray(),
            ]);
          });

          var validLabelController = StreamController();
          void streamValues.collectLabels(validLabelController.stream).then(
            values => validLabels = JSON.stringify(values.toArray()),
          );
          validLabelController.add('a');
          validLabelController.add('b');
          void validLabelController.close();

          var invalidLabelController = StreamController();
          void streamValues.collectLabels(invalidLabelController.stream).then(
            () => invalidLabelError = 'missing error',
            error => invalidLabelError = String(error),
          );
          invalidLabelController.add(1);
          void invalidLabelController.close();

          streamValues.failingTicks.listen(null, {
            onError(error, stackTrace) {
              failureIdentity = streamValues.matchesFailure(error, stackTrace);
            },
          });
          void Promise.all([
            streamValues.awaitInt(Promise.resolve(6)),
            streamValues.awaitIntOr(Promise.resolve(7)),
            streamValues.awaitIntOr(8),
            streamValues.awaitInts([Promise.resolve(9), Promise.resolve(10)]),
          ]).then(values => futureInputs = JSON.stringify([
            values[0],
            values[1],
            values[2],
            values[3].toArray(),
          ]));

        ''');
      await _waitFor(
        tester,
        harness,
        'returnedStreams !== undefined && validLabels !== undefined && '
        'invalidLabelError !== undefined && failureIdentity !== undefined && '
        'futureInputs !== undefined',
      );
      expect(harness.string('returnedStreams'), '[[1,2,3],["a","b"]]');
      expect(harness.string('futureInputs'), '[6,7,8,[9,10]]');
      expect(harness.string('validLabels'), '["a","b"]');
      expect(harness.string('invalidLabelError'), contains('String'));
      expect(harness.boolean('failureIdentity === true'), isTrue);
      expect(harness.errors, isEmpty);
    } finally {
      await harness.finish(tester);
    }
  });

  testWidgets(
    'generated callback shapes preserve omission and generic erasure',
    (t) async {
      fixture.GenericContract? contract;
      final h = OwnedHarness(
        fixture: 'interop',
        extra: [interopBindings],
        onCreate: (_, value) {
          if (value is fixture.GenericContract) contract = value;
        },
      );
      await t.pumpWidget(h.app('interop'));
      await t.pumpAndSettle();
      h.execute('''
        var genericContract = interop.GenericContract.implement([], {
          read: value => value,
          choose: (_first, second) => second,
          numeric: value => value,
          later: async value => value,
          optional: (value = 7) => value,
          named: (value, {label, count = 5}) =>
            String(value) + ':' + label + ':' + String(count),
        });
      ''');
      final value = fixture.Token(9);
      expect(contract, isNotNull);
      expect(contract!.optional(), 7);
      expect(contract!.optional(4), 4);
      expect(contract!.named(3, label: 'three'), '3:three:5');
      expect(contract!.named(3, label: 'three', count: null), '3:three:null');
      expect(identical(contract!.read<fixture.Token>(value), value), isTrue);
      expect(contract!.numeric<int>(4), 4);
      expect(contract!.numeric<double>(4.5), 4.5);
      final pending = contract!.later<fixture.Token>(value);
      await t.pumpAndSettle();
      expect(identical(await pending, value), isTrue);
      await h.finish(t);
      expect(h.errors, isEmpty);
    },
  );

  testWidgets(
    'returned Dart functions preserve defaults, named values and generics',
    (t) async {
      final h = OwnedHarness(fixture: 'interop', extra: [interopBindings]);
      await t.pumpWidget(h.app('interop'));
      await t.pumpAndSettle();
      h.execute('''
        var returnedFunctions = interop.UnsupportedFunctionResults();
        var optionalFunction = returnedFunctions.optional;
        var optionalPairFunction = returnedFunctions.optionalPair;
        var namedFunction = returnedFunctions.named;
        var genericFunction = returnedFunctions.generic;
        var genericAsyncFunction = returnedFunctions.genericAsync;
        var returnedToken = interop.Token(12);
        var genericCollections = interop.GenericFunctionCollections();
        var genericListFunction = genericCollections.callbacks.get(0);
        genericCollections.callbacks.add(value => value);
        var genericMapFunction = genericCollections.mapping.get('identity');
      ''');
      expect(h.number('optionalFunction()'), 7);
      expect(h.number('optionalFunction(2)'), 2);
      expect(h.number('optionalPairFunction()'), 79);
      expect(h.number('optionalPairFunction(undefined)'), 79);
      expect(h.number('optionalPairFunction(2)'), 29);
      expect(h.number('optionalPairFunction(2, undefined)'), 29);
      expect(h.string('namedFunction(1, {label: "one"})'), '1:one:-1');
      expect(
        h.string('namedFunction(1, {label: "one", count: null})'),
        '1:one:-1',
      );
      expect(
        h.boolean('genericFunction(returnedToken) === returnedToken'),
        isTrue,
      );
      expect(
        h.boolean(
          'genericListFunction(returnedToken) === returnedToken && '
          'genericCollections.callbacks.get(1)(returnedToken) === returnedToken && '
          'genericMapFunction(returnedToken) === returnedToken',
        ),
        isTrue,
      );
      h.execute(
        'var returnedLater; genericAsyncFunction(returnedToken).then(value => returnedLater = value)',
      );
      await t.pumpAndSettle();
      expect(h.boolean('returnedLater === returnedToken'), isTrue);
      expect(
        () => h.execute('namedFunction(1, {label: "one", extra: 2})'),
        throwsA(isA<FlaxJsException>()),
      );
      expect(
        () => h.execute('optionalPairFunction(undefined, 2)'),
        throwsA(isA<FlaxJsException>()),
      );
      await h.finish(t);
      expect(h.errors, isEmpty);
    },
  );

  final probes = <String, String>{
    'derived wrappers expose the inherited generated surface':
        'child.inherited === 42 && typeof child.ping === "function"',
    'collection and static enum results retain canonical identity': 'p.modes.get(0) === interop.Mode.first && p.mapping.get("a") === interop.Mode.first && interop.Probe.defaultMode === interop.Mode.first',
    'Object parameters accept bound Dart references': 'p.echo(child) === child',
    'returned callback collections survive delivery to Dart':
        'p.callReturned(() => [() => 42]) === 42',
  };
  for (final probe in probes.entries) {
    testWidgets(probe.key, (t) async {
      final h = OwnedHarness(fixture: 'interop', extra: [interopBindings]);
      try {
        await t.pumpWidget(h.app('interop'));
        await t.pumpAndSettle();
        h.execute('var p = interop.Probe(); var child = interop.Child();');
        expect(h.boolean(probe.value), isTrue);
      } finally {
        await h.finish(t);
      }
    });
  }
  testWidgets(
    'inherited wrappers use subtype signatures, listeners and disposal',
    (t) async {
      final h = OwnedHarness(fixture: 'interop', extra: [interopBindings]);
      await t.pumpWidget(h.app('interop'));
      await t.pumpAndSettle();
      h.execute(
        'var child = interop.Child(); child.inherited = 9; var events = 0; var listener = () => events++; child.watch(listener); child.watch(listener)',
      );
      expect(h.number('child.inherited'), 9);
      expect(h.number('child.ping()'), 30);
      expect(
        h.boolean(
          'interop.Base.tag === "base" && interop.Base.identify() === "base" && interop.Child.tag === undefined && interop.Child.named === undefined',
        ),
        isTrue,
      );
      expect(h.number('child.ping({second: 7})'), 17);
      h.execute('child.notify(); child.unwatch(listener); child.notify()');
      expect(h.number('events'), 3);
      expect(h.number('child.listeners'), 1);
      h.execute(
        'var token = interop.Token(5); var derived = interop.Derived(token); derived.items = [token]; derived.groups = {x:[token]}',
      );
      expect(
        h.boolean(
          'derived.items.get(0) === token && derived.groups.get("x").get(0) === token && derived.select(token) === token',
        ),
        isTrue,
      );
      h.execute('child.finish()');
      expect((h.created.single as fixture.Child).finished, isTrue);
      expect((h.created.single as fixture.Child).listeners, 0);
      expect(() => h.execute('child.ping()'), throwsA(isA<FlaxJsException>()));
      expect(
        () => h.execute('child.finish()'),
        throwsA(isA<FlaxJsException>()),
      );
      // Flutter allows listener cleanup after disposal.
      h.execute('child.unwatch(listener)');
      expect(h.actualDisposals, 1);
      await h.finish(t);
      expect(h.errors, isEmpty);
    },
  );

  testWidgets(
    'enum results share identity across every return path without handle growth',
    (t) async {
      final h = OwnedHarness(fixture: 'interop', extra: [interopBindings]);
      await t.pumpWidget(h.app('interop'));
      await t.pumpAndSettle();
      h.execute(
        'var p = interop.Probe(); var first = interop.Mode.first; var second = interop.Mode.second; var list = p.modes; var map = p.mapping',
      );
      for (final expression in [
        'p.mode === first',
        'p.nullableMode === null',
        'interop.Probe.defaultMode === first',
        'p.echoMode(first) === first',
        'list.get(0) === first',
        'map.get("a") === first',
        'map.get("missing") === null',
        'list.toArray()[0] === first',
        'map.toMap().get("a") === first',
        'p.inspectMode((value, nullable) => value === first && nullable === null)',
        'p.echo(first) === first',
        'p.defaultValue() === first',
        'p.defaultValue({value: undefined}) === first',
        'p.echoDynamic(second) === second',
      ]) {
        expect(h.boolean(expression), isTrue, reason: expression);
      }
      h.execute(
        'list.add(second); map.set("b", second); p.nullableMode = second',
      );
      expect(
        h.boolean(
          'list.removeAt(1) === second && map.remove("b") === second && p.nullableMode === second',
        ),
        isTrue,
      );
      h.execute(
        'var futureMode; var futureNull; p.laterMode().then(value => futureMode = value); p.nullableMode = null; p.laterNull().then(value => futureNull = value)',
      );
      await t.pumpAndSettle();
      expect(h.boolean('futureMode === first && futureNull === null'), isTrue);
      // Warm the cache before measuring retained handles and host invocations.
      h.execute('p.mode');
      await t.pumpAndSettle();
      final handles = h.runtime.handles;
      final calls = h.runtime.hostCalls['__flaxObject'] ?? 0;
      h.execute(
        'for (let i=0;i<100;i++) { if (p.mode !== first) throw Error("enum identity"); }',
      );
      await t.pumpAndSettle();
      expect((h.runtime.hostCalls['__flaxObject'] ?? 0) - calls, 100);
      expect(h.runtime.handles, handles);
      await h.finish(t);
      expect(h.errors, isEmpty);
    },
  );

  testWidgets(
    'ordinary Object interop and explicit data copies remain separate',
    (t) async {
      final h = OwnedHarness(fixture: 'interop', extra: [interopBindings]);
      await t.pumpWidget(h.app('interop'));
      await t.pumpAndSettle();
      h.execute(
        'var token = interop.Token(1); var input = {nested:[1,2]}; var p = interop.Probe({data: input}); input.nested[0]=9; var list = p.echo([token, interop.Mode.first]); var map = p.echo(new Map([[token, list]]))',
      );
      expect(
        h.boolean(
          'p.echo(token) === token && p.nonNull(token) === token && p.echoDynamic(token) === token && p.echo(null) === null',
        ),
        isTrue,
      );
      expect(
        h.boolean(
          'p.echo(list) === list && list.get(0) === token && list.get(1) === interop.Mode.first && map.get(token) === list',
        ),
        isTrue,
      );
      expect(h.number('p.data.nested[0]'), 1);
      h.execute('var dataCopy = p.data; dataCopy.nested[0] = 8');
      expect(h.number('p.data.nested[0]'), 1);
      expect(
        h.boolean(
          'p.copy(input) !== input && interop.Probe.copyStatic(input) !== input',
        ),
        isTrue,
      );
      expect(
        h.boolean('p.copyCallback(value => value, input).nested[0] === 9'),
        isTrue,
      );
      h.execute(
        'var laterData; p.copyLater(input).then(value => laterData = value); input.nested[0] = 10',
      );
      await t.pumpAndSettle();
      expect(h.number('laterData.nested[0]'), 9);
      for (final code in [
        'p.copy(token)',
        'p.copy(interop.Mode.first)',
        'p.copy(new Map())',
        'var cycle = []; cycle.push(cycle); p.copy(cycle)',
        'p.nonNull(null)',
        'p.echo(undefined)',
        'p.echo(() => 1)',
        'p.echo(new Date())',
        'p.echo(9007199254740992)',
        'p.unsafeNumber()',
        'p.unboundValue()',
        'p.echo([undefined])',
        'p.copy({bad:undefined})',
        'p.copyCallback(value => token, input)',
      ]) {
        expect(
          () => h.execute(code),
          throwsA(isA<FlaxJsException>()),
          reason: code,
        );
      }
      expect(
        h.boolean('p.echo(1.5) === 1.5 && p.echo(Infinity) === Infinity'),
        isTrue,
      );
      await h.finish(t);
      expect(h.errors, isEmpty);
    },
  );

  testWidgets(
    'returned callback collections survive delivery and release through real GC or close',
    (t) async {
      final h = OwnedHarness(fixture: 'interop', extra: [interopBindings]);
      await t.pumpWidget(h.app('interop'));
      await t.pumpAndSettle();
      h.execute(
        'var p = interop.Probe(); var producer = () => [{a: () => 42}]; var failed = () => [{a: () => 99}, {a: 3}]',
      );
      expect(h.number('p.callMap(() => ({a: () => 7}))'), 7);
      h.execute('p.save(producer)');
      await t.pumpAndSettle();
      expect(h.number('p.invokeSaved()'), 42);
      expect(
        () => h.execute('p.save(failed)'),
        throwsA(isA<FlaxJsException>()),
      );
      expect(h.number('p.invokeSaved()'), 42);
      // Count closures retained by Dart independently of temporary JS handles.
      h.execute('p.clearSaved()');
      await t.pumpAndSettle();
      for (var i = 0; i < 10; i++) {
        await t.runAsync(flaxTestCollectDartGarbage);
        await t.pumpAndSettle();
      }
      final baseline = h.runtime.handles;
      h.execute('p.save(producer)');
      await t.pumpAndSettle();
      expect(h.runtime.handles, greaterThan(baseline));
      h.execute('p.clearSaved()');
      for (var i = 0; i < 30 && h.runtime.handles != baseline; i++) {
        await t.runAsync(flaxTestCollectDartGarbage);
        await t.pumpAndSettle();
      }
      expect(
        h.runtime.handles,
        baseline,
        reason: 'Actual Dart Finalizer must release returned closures',
      );
      h.execute('p.save(producer)');
      final retained = fixture.Probe.retained!;
      await h.finish(t);
      expect(() => retained(), throwsStateError);
      fixture.Probe.retained = null;
      expect(h.errors, isEmpty);
    },
  );

  testWidgets('generated collections retain originals and copy cyclic graphs', (
    t,
  ) async {
    final h = OwnedHarness(fixture: 'interop', extra: [interopBindings]);
    await t.pumpWidget(h.app('interop'));
    await t.pumpAndSettle();
    h.execute(
      'var c = interop.Collections(); var numbers = c.numbers; numbers.add(3); numbers.set(0, 9)',
    );
    expect(h.boolean('c.numbers === numbers'), isTrue);
    expect(h.string('numbers.toArray().join(",")'), '9,2,3');
    expect(h.string('c.defaults().toArray().join(",")'), '7,8');
    h.execute('numbers.addAll([4,5]); numbers.removeAt(1)');
    expect(h.string('numbers.toArray().join(",")'), '9,3,4,5');
    h.execute(
      'var unique = c.unique; unique.add(3); unique.addAll(new Set([3,4])); var acceptedSet = c.acceptSet(new Set([5,6])); var acceptedIterable = c.acceptIterable({*[Symbol.iterator](){yield 7; yield 8}})',
    );
    expect(h.boolean('unique === c.unique && unique.contains(4)'), isTrue);
    expect(h.string('[...unique].join(",")'), '1,2,3,4');
    expect(h.boolean('unique.toSet() instanceof Set'), isTrue);
    expect(h.string('acceptedSet.toArray().join(",")'), '5,6');
    expect(h.string('acceptedIterable.toArray().join(",")'), '7,8');
    h.execute('var lazyIterable = c.iterable');
    final iterableCalls = h.runtime.hostCalls['__flaxObject'] ?? 0;
    h.execute('[...lazyIterable]');
    expect((h.runtime.hostCalls['__flaxObject'] ?? 0) - iterableCalls, 1);
    h.execute('c.counts.set("a", 3); c.counts.set("b", null)');
    expect(
      h.boolean(
        'c.counts.get("b") === null && c.counts.containsKey("b") && !c.counts.containsKey("missing")',
      ),
      isTrue,
    );
    expect(h.boolean('c.counts.toMap() instanceof Map'), isTrue);
    h.execute(
      'var keyA = interop.Token(7); var keyB = interop.Token(7); c.labels.set(keyA, "first"); c.labels.set(keyB, "second")',
    );
    // JS wrappers use identity; the original Dart Map uses the keys' equality.
    expect(h.boolean('keyA !== keyB'), isTrue);
    expect(h.number('c.labels.length'), 1);
    expect(h.string('c.labels.get(keyA)'), 'second');
    expect(h.boolean('c.labels.toMap().has(keyA)'), isTrue);
    expect(h.string('c.labels.remove(keyB)'), 'second');
    expect(h.number('c.labels.length'), 0);
    h.execute('var nested = c.nested({x: [1,2]}); nested.get("x").add(3)');
    expect(h.string('nested.toMap().get("x").join(",")'), '1,2,3');
    h.execute(
      'var graph = []; var map = new Map(); graph.push(graph, map, map); map.set("self", map); map.set("root", graph); c.graph = graph; var copy = c.graph.toArray()',
    );
    expect(
      h.boolean(
        'copy[0] === copy && copy[1] === copy[2] && copy[1].get("self") === copy[1] && copy[1].get("root") === copy',
      ),
      isTrue,
    );
    h.execute(
      'var cyclicSet = new Set(); cyclicSet.add(cyclicSet); c.graph = [cyclicSet]; var setCopy = c.graph.toArray()[0]',
    );
    expect(h.boolean('setCopy instanceof Set && setCopy.has(setCopy)'), isTrue);
    for (final code in [
      'numbers.add("x")',
      'c.accept([undefined])',
      'c.frozen.add(1)',
      'c.fixed.add(1)',
      'c.nested({x:[null]})',
    ]) {
      expect(() => h.execute(code), throwsA(isA<FlaxJsException>()));
    }
    final before = h.runtime.hostCalls['__flaxObject'] ?? 0;
    h.execute('numbers.toArray()');
    expect((h.runtime.hostCalls['__flaxObject'] ?? 0) - before, 1);
    await h.finish(t);
    expect(h.errors, isEmpty);
  });
  testWidgets(
    'generated proxies initialize callbacks before super and preserve real identity',
    (t) async {
      final h = OwnedHarness(fixture: 'interop', extra: [interopBindings]);
      await t.pumpWidget(h.app('interop'));
      await t.pumpAndSettle();
      h.execute('''
var token = interop.Token(7);
var store = interop.Store(token);
var proxy = interop.Evaluator.implement([3], {evaluate(value) {return value + 1}});
class PlainEvaluator extends interop.Evaluator {
  evaluate(value) { return value + 1; }
}
var DerivedEvaluator = class extends interop.Evaluator {
  evaluate(value) { return value + 1; }
  twice(value) { return super.twice(value) + 1; }
};
var plainEvaluator = new PlainEvaluator(3);
var derivedEvaluator = new DerivedEvaluator(3);
var evaluatorConsumer = interop.EvaluatorConsumer();
class GoodRequiredSuper extends interop.RequiredSuper {
  refresh() { super.refresh(); }
}
class BadRequiredSuper extends interop.RequiredSuper {
  refresh() {}
}
var ConstructorSuperEvaluator = class extends interop.ConstructorSuperEvaluator {
  evaluate(value) { return super.evaluate(value) + 1; }
};
var goodRequiredSuper = new GoodRequiredSuper();
var badRequiredSuper = new BadRequiredSuper();
var requiredSuperConsumer = interop.RequiredSuperConsumer();
class GoodAsyncRequiredSuper extends interop.AsyncRequiredSuper {
  async load(value) { return (await super.load(value)) + 1; }
  normalize(value) { return super.normalize(value) + 1; }
}
class PromiseAsyncRequiredSuper extends interop.AsyncRequiredSuper {
  async load(value) { return (await super.load(value)) + 2; }
  async normalize(value) { return (await super.normalize(value)) + 2; }
}
class LateAsyncRequiredSuper extends interop.AsyncRequiredSuper {
  async load(value) { await Promise.resolve(); return super.load(value); }
  async normalize(value) { await Promise.resolve(); return super.normalize(value); }
}
class RejectingAsyncRequiredSuper extends interop.AsyncRequiredSuper {
  load(value) { return Promise.reject(new Error('async required super rejection')); }
  normalize(value) { return Promise.reject(new Error('futureOr required super rejection')); }
}
class ThrowingAsyncRequiredSuper extends interop.AsyncRequiredSuper {
  load(value) { throw new Error('async required super throw'); }
  normalize(value) { throw new Error('futureOr required super throw'); }
}
var goodAsyncRequiredSuper = new GoodAsyncRequiredSuper();
var promiseAsyncRequiredSuper = new PromiseAsyncRequiredSuper();
var lateAsyncRequiredSuper = new LateAsyncRequiredSuper();
var rejectingAsyncRequiredSuper = new RejectingAsyncRequiredSuper();
var throwingAsyncRequiredSuper = new ThrowingAsyncRequiredSuper();
var asyncRequiredSuperConsumer = interop.AsyncRequiredSuperConsumer();
var selector = interop.Selector.implement([], {choose(value) {return value}});
var fn = interop.Functions(value => value);
''');
      for (final operation in [
        'interop.Functions.fail(value => value)',
        'interop.Functions.retainAndThrow(value => value)',
      ]) {
        expect(() => h.execute(operation), throwsA(isA<FlaxJsException>()));
        expect(
          h.boolean('interop.Functions.callRetained(token) === token'),
          isTrue,
        );
        h.execute('interop.Functions.clearRetained()');
      }
      expect(h.number('proxy.initialResult'), 4);
      expect(h.number('proxy.twice(4)'), 10);
      expect(h.number('plainEvaluator.initialResult'), 4);
      expect(h.number('derivedEvaluator.initialResult'), 4);
      expect(
        h.boolean(
          'derivedEvaluator instanceof DerivedEvaluator && '
          'derivedEvaluator instanceof interop.Evaluator',
        ),
        isTrue,
      );
      expect(h.number('evaluatorConsumer.run(plainEvaluator, 4)'), 10);
      expect(h.number('evaluatorConsumer.run(derivedEvaluator, 4)'), 11);
      expect(
        h.boolean(
          'evaluatorConsumer.identity(derivedEvaluator) === derivedEvaluator',
        ),
        isTrue,
      );
      expect(h.number('requiredSuperConsumer.run(goodRequiredSuper)'), 1);
      expect(
        () => h.execute('requiredSuperConsumer.run(badRequiredSuper)'),
        throwsA(isA<FlaxJsException>()),
      );
      h.execute('''
var asyncLoadResult = null;
var asyncNormalizeResult = null;
var asyncPromiseNormalizeResult = null;
var lateLoadError = null;
var lateNormalizeError = null;
var rejectedLoadError = null;
var rejectedNormalizeError = null;
void asyncRequiredSuperConsumer.load(goodAsyncRequiredSuper, 3)
  .then(value => asyncLoadResult = value);
void asyncRequiredSuperConsumer.normalize(goodAsyncRequiredSuper, 3)
  .then(value => asyncNormalizeResult = value);
void asyncRequiredSuperConsumer.normalize(promiseAsyncRequiredSuper, 3)
  .then(value => asyncPromiseNormalizeResult = value);
void asyncRequiredSuperConsumer.load(lateAsyncRequiredSuper, 3)
  .catch(error => lateLoadError = String(error));
void asyncRequiredSuperConsumer.normalize(lateAsyncRequiredSuper, 3)
  .catch(error => lateNormalizeError = String(error));
void asyncRequiredSuperConsumer.load(rejectingAsyncRequiredSuper, 3)
  .catch(error => rejectedLoadError = String(error));
void asyncRequiredSuperConsumer.normalize(rejectingAsyncRequiredSuper, 3)
  .catch(error => rejectedNormalizeError = String(error));
''');
      await t.pump();
      await t.pump();
      expect(h.number('asyncLoadResult'), 7);
      expect(h.number('asyncNormalizeResult'), 5);
      expect(h.number('asyncPromiseNormalizeResult'), 6);
      expect(
        h.string('lateLoadError'),
        contains('load must call super.load()'),
      );
      expect(
        h.string('lateNormalizeError'),
        contains('normalize must call super.normalize()'),
      );
      expect(
        h.string('rejectedLoadError'),
        contains('async required super rejection'),
      );
      expect(
        h.string('rejectedNormalizeError'),
        contains('futureOr required super rejection'),
      );
      expect(
        () => h.execute(
          'asyncRequiredSuperConsumer.load(throwingAsyncRequiredSuper, 3)',
        ),
        throwsA(
          isA<FlaxJsException>().having(
            (error) => error.toString(),
            'message',
            contains('async required super throw'),
          ),
        ),
      );
      expect(
        () => h.execute('new ConstructorSuperEvaluator(3)'),
        throwsA(
          isA<FlaxJsException>().having(
            (error) => error.toString(),
            'message',
            contains('Dart proxy construction is not complete'),
          ),
        ),
      );
      expect(
        h.boolean(
          'store.echo(token) === token && store.select(token) === token && selector.choose(token) === token && fn.apply(token) === token',
        ),
        isTrue,
      );
      h.execute(
        'store.items = [token]; store.groups = new Map([["a", [token]]])',
      );
      expect(
        h.boolean(
          'store.items.get(0) === token && store.groups.get("a").get(0) === token',
        ),
        isTrue,
      );
      expect(
        () => h.execute('interop.Selector.implement([], {})'),
        throwsA(isA<FlaxJsException>()),
      );
      await h.finish(t);
    },
  );
  testWidgets('JS weak collection and Dart Finalizer release escaped callbacks', (
    t,
  ) async {
    final h = OwnedHarness(fixture: 'interop', extra: [interopBindings]);
    await t.pumpWidget(h.app('interop'));
    await t.pumpAndSettle();
    h.execute('var anchor = interop.Collections(); anchor.numbers.length');
    await t.pumpAndSettle();
    final baseline = h.runtime.handles;
    final labels = h.runtime.handleLabels;
    h.execute(
      'var identityCallback = value => value; var weak; (() => { const temporary = interop.Functions(identityCallback); weak = new WeakRef(temporary); })()',
    );
    expect(h.runtime.handles, greaterThan(baseline));
    var collected = false;
    for (var attempt = 0; attempt < 60; attempt++) {
      h.runtime.drainMicrotasks();
      h.execute('${flaxTestJsGarbagePressure}anchor.numbers.length');
      await t.pumpAndSettle();
      collected = h.boolean('weak.deref() === undefined');
      // Let the Dart collector run and deliver real Finalizer events.
      await t.runAsync(flaxTestCollectDartGarbage);
      if (collected && h.runtime.handles <= baseline) break;
    }
    expect(
      collected,
      isTrue,
      reason: 'The engine must actually collect the unreachable wrapper',
    );
    expect(
      h.runtime.handles,
      baseline,
      reason:
          'Dart Finalizer must actually release the escaped function: $labels -> ${h.runtime.handleLabels}',
    );
    await h.finish(t);
  });
  testWidgets(
    'registered cross-language cycles require explicit disconnection or close',
    (t) async {
      final h = OwnedHarness(fixture: 'interop', extra: [interopBindings]);
      await t.pumpWidget(h.app('interop'));
      await t.pumpAndSettle();
      h.execute('var anchor = interop.Collections(); anchor.numbers.length');
      await t.pumpAndSettle();
      final baseline = h.runtime.handles;
      h.execute(
        'var cycle; (() => { let owner; owner = interop.Functions(value => owner ? value : interop.Token(0)); cycle = new WeakRef(owner); })()',
      );
      for (var i = 0; i < 3; i++) {
        h.runtime.drainMicrotasks();
        h.execute('${flaxTestJsGarbagePressure}anchor.numbers.length');
        await t.pumpAndSettle();
        await t.runAsync(flaxTestCollectDartGarbage);
      }
      expect(h.boolean('cycle.deref() !== undefined'), isTrue);
      expect(h.runtime.handles, greaterThan(baseline));
      h.execute('cycle.deref().clear()');
      for (var i = 0; i < 30; i++) {
        await t.runAsync(flaxTestCollectDartGarbage);
        h.runtime.drainMicrotasks();
        h.execute('${flaxTestJsGarbagePressure}anchor.numbers.length');
        await t.pumpAndSettle();
        if (h.boolean('cycle.deref() === undefined') &&
            h.runtime.handles == baseline) {
          break;
        }
      }
      expect(h.boolean('cycle.deref() === undefined'), isTrue);
      expect(h.runtime.handles, baseline);
      // An intentionally unbroken cycle is still deterministically cleaned on close.
      h.execute(
        '(() => { let owner; owner = interop.Functions(value => owner ? value : interop.Token(0)); })()',
      );
      expect(h.runtime.handles, greaterThan(baseline));
      await h.finish(t);
    },
  );
}
