import 'package:flax/flax.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter_test/flutter_test.dart';

import '../../.dart_tool/flax/ui/complex_bounds_bindings.dart';
import '../fixtures/complex_bounds.dart' as fixture;
import '../support/owned_harness.dart';

void main() {
  testWidgets('complex bounds select real types and reject invalid calls', (
    tester,
  ) async {
    final h = OwnedHarness(
      fixture: 'complex_bounds',
      extra: [complex_boundsBindings],
    );
    try {
      await tester.pumpWidget(h.app('complexBounds'));
      expect(h.errors, isEmpty);
      h.execute('''
        var StringBox = complex.RecursiveBox.\$type(dartTypes.string);
        var stringBox = new StringBox('value');
        var value = complex.ComparableValue('object');
        var objectBox = new (complex.RecursiveBox.\$type(complex.ComparableValue))(value);
        var owner = new (complex.ComplexMethods.\$type(dartTypes.string))();
        var recursive = dartType(owner, 'recursive', dartTypes.string);
        var top = dartType(complex.recursiveTop, dartTypes.string);
        var staticEcho = dartType(complex.ComplexMethods.staticEcho, dartTypes.string);
        var factoryValue = dartType(complex.RecursiveFactory.create, dartTypes.string)(() => 'factory');
        var mutual = dartType(complex.mutual, complex.Left, complex.Right);
        var extension = complex.RecursiveValues(['first']);
        var firstValue = dartType(extension, 'firstValue', dartTypes.string);
        var choose = dartType(extension, 'choose', dartTypes.string, dartTypes.string);
      ''');
      expect(h.string('stringBox.typeName'), 'String');
      expect(h.string('stringBox.values().get(0)'), 'value');
      expect(h.boolean('objectBox.value === value'), isTrue);
      expect(
        h.boolean(
          'objectBox instanceof complex.RecursiveBox && !(objectBox instanceof StringBox)',
        ),
        isTrue,
      );
      expect(
        h.boolean(
          'recursive === dartType(owner, "recursive", dartTypes.string)',
        ),
        isTrue,
      );
      expect(h.string('recursive("method").get(0)'), 'method');
      expect(h.string('top("function")'), 'function');
      expect(h.string('staticEcho("static")'), 'static');
      expect(h.string('complex.keepFactory(factoryValue).value'), 'factory');
      expect(h.string('mutual(complex.Left(), complex.Right())'), 'Left/Right');
      expect(h.string('firstValue()'), 'first');
      expect(h.string('choose("extension")'), 'extension');
      expect(h.string('owner.narrowed("captured")'), 'captured');
      expect(h.boolean('asDart(stringBox, StringBox) === stringBox'), isTrue);
      for (final source in [
        'complex.RecursiveBox("missing types")',
        'asDart(stringBox, complex.RecursiveBox)',
        'complex.RecursiveBox.\$type(dartTypes.bool)',
        'complex.RecursiveBox.\$type()("missing types")',
        'complex.RecursiveBox.\$type(dartTypes.string, dartTypes.int)',
        'dartType(complex.mutual, complex.Left, complex.Left)',
        'dartType(complex.recursiveTop, dartTypes.bool)',
        'dartType(complex.RecursiveFactory.create, dartTypes.bool)',
        'dartType(complex.RecursiveFactory.create, dartTypes.string)(() => 1)',
        'complex.RecursiveFactory.create(() => "missing types")',
        'complex.recursiveTop("missing types")',
        'owner.recursive("missing types")',
        'recursive(1)',
        'recursive(null)',
        'recursive(undefined)',
        'recursive()',
        'recursive("a", "b")',
        'owner.narrowed(1)',
        'choose(1)',
      ]) {
        expect(
          () => h.execute(source),
          throwsA(isA<FlaxJsException>()),
          reason: source,
        );
      }
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(tester);
    }
  });

  testWidgets(
    'recursive bounds preserve JS inheritance, overrides and async super',
    (tester) async {
      final boxes = <fixture.RecursiveBox<String>>[];
      final h = OwnedHarness(
        fixture: 'complex_bounds',
        extra: [complex_boundsBindings],
        onCreate: (_, value) {
          if (value is fixture.RecursiveBox<String>) boxes.add(value);
        },
      );
      try {
        await tester.pumpWidget(h.app('complexBounds'));
        expect(h.errors, isEmpty);
        h.execute('''
        // Later evaluations read these constructors through global bindings.
        var ComplexChild = class ComplexChild extends complex.ComplexMethods.\$type(dartTypes.string) {
          #suffix = '!';
          recursive(value, call) {
            const result = call.super(value);
            result.set(0, result.get(0) + this.#suffix);
            return result;
          }
          narrowed(value, call) { return call.super(value) + this.#suffix; }
          async later(value, call) {
            await Promise.resolve();
            const result = await call.super(value);
            result.set(0, result.get(0) + this.#suffix);
            return result;
          }
        }
        var child = new ComplexChild();
        var RecursiveChild = class RecursiveChild extends complex.RecursiveBox.\$type(dartTypes.string) {
          #suffix = '!';
          values() {
            const values = super.values();
            values.set(0, values.get(0) + this.#suffix);
            return values;
          }
        }
        var recursiveChild = new RecursiveChild('class');
        var asynchronous;
        complex.callLater(child, 'async').then(value => asynchronous = value.get(0));
        var MissingSuper = class MissingSuper extends complex.ComplexMethods.\$type(dartTypes.string) {
          recursive(value) { return [value]; }
          async later(value) { await Promise.resolve(); return [value]; }
        }
        var missing = new MissingSuper();
        var missingSuper;
        complex.callLater(missing, 'bad').catch(error => missingSuper = String(error));
      ''');
        expect(
          h.string('complex.callRecursive(child, "sync").get(0)'),
          'sync!',
        );
        expect(h.string('complex.callNarrowed(child, "owner")'), 'owner!');
        expect(boxes.single.values().single, 'class!');
        expect(
          h.boolean(
            'recursiveChild instanceof RecursiveChild && recursiveChild instanceof complex.RecursiveBox',
          ),
          isTrue,
        );
        expect(
          h.boolean(
            'child instanceof ComplexChild && child instanceof complex.ComplexMethods',
          ),
          isTrue,
        );
        expect(
          () => h.execute('complex.callRecursive(missing, "bad")'),
          throwsA(isA<FlaxJsException>()),
        );
        for (var i = 0; i < 100; i++) {
          h.runtime.drainMicrotasks();
          await tester.pump(const Duration(milliseconds: 1));
          if (h.boolean(
            'asynchronous !== undefined && missingSuper !== undefined',
          )) {
            break;
          }
          await tester.runAsync(
            () => Future<void>.delayed(const Duration(milliseconds: 1)),
          );
        }
        expect(h.string('asynchronous'), 'async!');
        expect(h.string('missingSuper'), contains('super'));
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(tester);
      }
    },
  );

  testWidgets(
    'generic callbacks preserve captured types and collect cross-heap cycles',
    (tester) async {
      final owners = <WeakReference<fixture.ComplexMethods<String>>>[];
      final h = OwnedHarness(
        fixture: 'complex_bounds',
        extra: [complex_boundsBindings],
        onCreate: (_, value) {
          if (value is fixture.ComplexMethods<String>) {
            owners.add(WeakReference(value));
          }
        },
      );
      try {
        await tester.pumpWidget(h.app('complexBounds'));
        expect(h.errors, isEmpty);
        h.execute('''
        var callback = complex.returnRecursive();
        var selected = dartType(callback, dartTypes.string);
        var nested = dartType(complex.nestedRecursive(), dartTypes.string)('outer');
        var inner = dartType(nested, dartTypes.string);
      ''');
        expect(h.string('selected("returned")'), 'returned');
        expect(h.string('inner("nested")'), 'nested');
        expect(h.string('nested("captured")'), 'captured');
        expect(
          h.boolean('selected === dartType(callback, dartTypes.string)'),
          isTrue,
        );
        expect(
          h.string('complex.visitRecursive(value => value + "!")'),
          'callback!',
        );
        for (final source in [
          'callback("missing types")',
          'dartType(callback, dartTypes.bool)',
          'selected(1)',
          'nested(1)',
          'complex.visitRecursive(value => 1)',
        ]) {
          expect(
            () => h.execute(source),
            throwsA(isA<FlaxJsException>()),
            reason: source,
          );
        }
        h.execute('''
        var weak;
        (() => {
          class CallbackChild extends complex.ComplexMethods.\$type(dartTypes.string) {
            #suffix = '!';
            recursive(value, call) {
              const result = call.super(value);
              result.set(0, result.get(0) + this.#suffix);
              return result;
            }
          }
          const owner = new CallbackChild();
          const captured = owner.capturedCallback();
          if (captured('captured') !== 'captured' || dartType(captured, dartTypes.string)('typed') !== 'typed')
            throw new Error('Captured callback type lost');
          owner.callback = dartType(owner.recursiveCallback(), dartTypes.string);
          if (owner.callback('cycle') !== 'cycle!') throw new Error('Callback override lost');
          weak = new WeakRef(owner);
        })();
      ''');
        for (var i = 0; i < 40; i++) {
          h.runtime.drainMicrotasks();
          h.execute('${flaxTestJsGarbagePressure}selected("checkpoint")');
          await tester.pumpAndSettle();
          await tester.runAsync(flaxTestCollectDartGarbage);
          if (h.boolean('weak.deref() === undefined')) break;
        }
        expect(h.boolean('weak.deref() === undefined'), isTrue);
        expect(owners.single.target, isNull);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(tester);
      }
    },
  );
}
