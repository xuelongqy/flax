import 'package:flax/flax.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

import '../../.dart_tool/flax/ui/binding_parity_bindings.dart';
import '../fixtures/binding_parity.dart';
import '../support/owned_harness.dart';

void main() {
  OwnedHarness harness() =>
      OwnedHarness(fixture: 'binding_parity', extra: [binding_parityBindings]);

  testWidgets('scoped Record copies release their temporary JS handle', (
    tester,
  ) async {
    final callback = FlaxTypeRef(
      'callback',
      callback: FlaxCallbackBinding(
        [
          FlaxCallbackParameter(
            'value',
            const FlaxTypeRef('object', id: 'flax.core/flutter#type:Record'),
            required: true,
            positional: true,
            scoped: true,
          ),
        ],
        const FlaxTypeRef('void'),
        (callback) =>
            (Record value) => callback.call([value], const {}),
        id: 'test/scoped-record#callback:visit',
        invoke: (value, positional, named) {
          (value as void Function(Record))(positional.single as Record);
          return null;
        },
        matches: (value) => value is void Function(Record),
      ),
    );
    final h = OwnedHarness(
      fixture: 'binding_parity',
      extra: [
        binding_parityBindings,
        FlaxBindingModule(
          'scoped-record',
          const [],
          moduleId: 'test/scoped-record',
          uiProtocol: flaxBindingVersion,
          requiredCapabilities: const [],
          functions: [
            FlaxFunctionBinding(
              'test/scoped-record#function:visit',
              [FlaxParameter('callback', callback, required: true)],
              const FlaxTypeRef('void'),
              (values) {
                (values['callback'] as void Function(Record))((value: 7));
                return null;
              },
            ),
          ],
        ),
      ],
    );
    try {
      await tester.pumpWidget(h.app('bindingParity'));
      h.execute('''__flaxInvokeOperation(__flaxResolveOperation(24,
        'test/scoped-record#function:visit', 'top', 'call', ''), 0, value => {
          if (value.value !== 7 || Object.getPrototypeOf(value) !== Object.prototype) {
            throw new Error('Record callback value');
          }
        });''');
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(tester);
    }
  });

  testWidgets(
    'automatic Widget writes and interface callbacks retain native owners',
    (tester) async {
      final h = harness();
      WritableTile.stored = 0;
      WritableTile.writes = 0;
      try {
        await tester.pumpWidget(h.app('bindingParity'));
        CallbackTile? native = tester.widget<CallbackTile>(
          find.byType(CallbackTile),
        );
        expect(native, isA<SizedTileContract>());
        native.trigger();
        expect(h.number('parity.calls()'), 2);
        h.execute('''
        var writable = parity.WritableTile();
        writable.setting = 2.5;
        writable.writeOnly = 3;
        parity.InheritedWritableTile().setting = 4;
        class CustomFields extends parity.BusinessFields {
          #suffix = '!';
          get kind() { return super.kind + this.#suffix; }
          set kind(value) { super.kind = value; }
        }
        var fields = new CustomFields('a');
        fields.kind = 'b';
      ''');
        expect(WritableTile.stored, 4);
        expect(WritableTile.writes, 3);
        expect(h.string('fields.kind'), 'b!');
        expect(h.string('fields.type'), 'type:b');
        expect(h.string('fields.ctor'), 'ctor:b');
        expect(h.string('fields.args.get(0)'), 'b');
        for (final source in [
          'writable.setting = "bad"',
          'writable.setting = null',
          'writable.writeOnly = undefined',
          'fields.kind = 3',
          'parity.CallbackTile({})',
        ]) {
          expect(
            () => h.execute(source),
            throwsA(isA<FlaxJsException>()),
            reason: source,
          );
        }
        expect(WritableTile.writes, 3);
        h.execute('parity.releaseTile()');
        await tester.pumpWidget(const SizedBox());
        await tester.pumpAndSettle();
        await tester.runAsync(flaxTestCollectDartGarbage);
        native.trigger();
        expect(h.number('parity.calls()'), 4);
        native = null;
        for (var i = 0; i < 40; i++) {
          h.execute(flaxTestJsGarbagePressure);
          h.runtime.drainMicrotasks();
          await tester.pump();
          await tester.runAsync(flaxTestCollectDartGarbage);
          if (!h.boolean('parity.tapAlive() || parity.tileAlive()')) break;
        }
        expect(h.boolean('parity.tapAlive() || parity.tileAlive()'), isFalse);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(tester);
        WritableTile.stored = 0;
        WritableTile.writes = 0;
      }
    },
  );

  testWidgets('Core opaque values and Never preserve types and failures', (
    tester,
  ) async {
    final h = harness();
    try {
      await tester.pumpWidget(h.app('bindingParity'));
      h.execute('''
        var core = parity.createCoreValues();
        var type = core.type;
        var symbol = parity.DartSymbol('parity');
        var record = core.record;
        var typed = core.typedRecord(record);
        var thrown;
        try { core.fail(); } catch (error) { thrown = error; }
        var sameFailure = false;
        try { core.failingCallback(); } catch (error) { sameFailure = core.matchesFailure(error); }
        var asyncFailures = 0;
        core.failLater().catch(error => { if (core.matchesFailure(error)) asyncFailures++; });
        core.invokeFutureNever(() => Promise.reject(new Error('callback'))).catch(() => asyncFailures++);
        core.invokeFutureNever(() => Promise.resolve(1)).catch(() => asyncFailures++);
        var emptyComplete = false;
        (async () => {
          for await (const value of core.emptyEvents()) throw new Error('Never event');
          emptyComplete = true;
        })();
      ''');
      expect(
        h.boolean(
          'type instanceof parity.Type && core.echoType(type) === type',
        ),
        isTrue,
      );
      expect(h.string('type.toString()'), 'String');
      expect(
        h.boolean(
          'symbol instanceof parity.DartSymbol && core.echoSymbol(symbol) === symbol',
        ),
        isTrue,
      );
      expect(h.string('symbol.toString()'), 'Symbol("parity")');
      expect(h.boolean('record instanceof parity.DartRecord'), isTrue);
      expect(h.string('parity.getDartType(record)'), contains('String'));
      expect(
        h.boolean('parity.asDart(record, parity.DartRecord) === record'),
        isTrue,
      );
      expect(
        h.string('JSON.stringify(core.echoRecord(record))'),
        '{"\$1":"record","\$2":7}',
      );
      expect(
        h.string('JSON.stringify(core.unknownRecord())'),
        '{"\$1":17,"label":true}',
      );
      expect(h.string('typed.\$1'), 'record');
      expect(h.number('typed.\$2'), 7);
      expect(h.boolean('core.visitType(value => value) === type'), isTrue);
      expect(
        h.boolean('core.visitSymbol(value => value) === core.symbol'),
        isTrue,
      );
      expect(
        h.string('JSON.stringify(core.visitRecord(value => value))'),
        '{"\$1":"record","\$2":7}',
      );
      expect(h.boolean('core.nullOnly(null) === null'), isTrue);
      expect(h.boolean('core.echoNullValue(null) === null'), isTrue);
      expect(h.number('core.emptyValues().length'), 0);
      expect(h.boolean('core.matchesFailure(thrown)'), isTrue);
      expect(h.boolean('sameFailure'), isTrue);
      for (final source in [
        'core.echoType({})',
        'core.echoSymbol(Symbol("bad"))',
        'core.nullOnly(1)',
        'core.nullOnly(undefined)',
        'core.echoNullValue(1)',
        'core.echoNullValue(undefined)',
        'core.invokeNever(() => 1)',
        'core.invokeNever(() => null)',
        'core.failureValue',
      ]) {
        expect(
          () => h.execute(source),
          throwsA(isA<FlaxJsException>()),
          reason: source,
        );
      }
      for (var i = 0; i < 100; i++) {
        h.runtime.drainMicrotasks();
        await tester.pump(const Duration(milliseconds: 1));
        if (h.boolean('asyncFailures === 3 && emptyComplete')) break;
        await tester.runAsync(
          () => Future<void>.delayed(const Duration(milliseconds: 1)),
        );
      }
      expect(h.number('asyncFailures'), 3);
      expect(h.boolean('emptyComplete'), isTrue);
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(tester);
    }
  });

  testWidgets(
    'copied Record callback cycles follow either business root and collect',
    (tester) async {
      final h = harness();
      try {
        await tester.pumpWidget(h.app('bindingParity'));
        h.execute('''
        var core = parity.createCoreValues();
        var weakRecord, rootedRecord, recordCalls = 0;
        (() => {
          const record = core.callbackRecord(() => {
            record.toString();
            recordCalls++;
          });
          rootedRecord = record;
          weakRecord = new WeakRef(record);
        })();
      ''');
        await tester.runAsync(flaxTestCollectDartGarbage);
        h.execute(flaxTestJsGarbagePressure);
        expect(h.boolean('weakRecord.deref() !== undefined'), isTrue);
        expect(CoreValues.payloadAlive, isTrue);
        h.execute('core.callRecord(rootedRecord)');
        h.execute(
          'parity.CoreValues.setRetainedRecord(rootedRecord); rootedRecord = undefined',
        );
        await tester.runAsync(flaxTestCollectDartGarbage);
        h.execute(flaxTestJsGarbagePressure);
        expect(h.boolean('weakRecord.deref() !== undefined'), isTrue);
        expect(CoreValues.payloadAlive, isTrue);
        h.execute('core.callRecord(parity.CoreValues.retainedRecord)');
        expect(h.number('recordCalls'), 2);
        CoreValues.retainedRecord = null;
        for (var i = 0; i < 40; i++) {
          h.execute(flaxTestJsGarbagePressure);
          h.runtime.drainMicrotasks();
          await tester.pump();
          await tester.runAsync(flaxTestCollectDartGarbage);
          if (!h.boolean('weakRecord.deref() !== undefined') &&
              !CoreValues.payloadAlive) {
            break;
          }
        }
        expect(h.boolean('weakRecord.deref() === undefined'), isTrue);
        expect(CoreValues.payloadAlive, isFalse);
        CoreValues.retainedRecord = ('retained', 1);
        h.execute('''
          var recordAliases = [];
          for (let i = 0; i < 64; i++) {
            recordAliases.push(new WeakRef(parity.CoreValues.retainedRecord));
          }
        ''');
        for (var i = 0; i < 40; i++) {
          h.execute(flaxTestJsGarbagePressure);
          h.runtime.drainMicrotasks();
          await tester.pump();
          await tester.runAsync(flaxTestCollectDartGarbage);
          if (h.boolean('recordAliases.every(alias => !alias.deref())')) break;
        }
        expect(
          h.number('recordAliases.filter(alias => alias.deref()).length'),
          0,
          reason: 'A live Dart Record must not retain discarded JS views',
        );
        expect(
          h.string('JSON.stringify(parity.CoreValues.retainedRecord)'),
          '{"\$1":"retained","\$2":1}',
        );
        expect(h.errors, isEmpty);
      } finally {
        CoreValues.retainedRecord = null;
        await h.finish(tester);
      }
    },
  );

  testWidgets(
    'Record objects use shared construction and existing field converters',
    (tester) async {
      final h = harness();
      try {
        await tester.pumpWidget(h.app('bindingParity'));
        h.execute('var core = parity.createCoreValues()');
        expect(
          h.string('JSON.stringify(core.createRow({quantity:3,cargo:"box"}))'),
          '{"cargo":"box","quantity":3}',
        );
        expect(
          h.boolean('Object.getPrototypeOf(core.record) === Object.prototype'),
          isTrue,
        );
        expect(
          h.string(
            'JSON.stringify(core.echoRecord({\$1:"raw",\$2:7,note:true}))',
          ),
          '{"\$1":"raw","\$2":7,"note":true}',
        );
        expect(h.string('JSON.stringify(core.emptyRecord())'), '{}');
        expect(h.string('JSON.stringify(core.echoRecord({}))'), '{}');
        expect(
          h.string('parity.getDartType(core.numericRecord())'),
          contains('int'),
        );
        expect(
          h.string('parity.getDartType(core.echoRecord(core.numericRecord()))'),
          contains('int'),
        );
        expect(
          h.string(
            'JSON.stringify(core.nestedRow({row:{cargo:"nested",quantity:4},pair:{\$1:5,\$2:true},tags:["a"],optional:null}).row)',
          ),
          '{"cargo":"nested","quantity":4}',
        );
        for (final expression in [
          'core.createRow({cargo:"missing"})',
          'core.createRow({cargo:null,quantity:1})',
          'core.createRow({cargo:"bad",quantity:1.5})',
          'core.createRow({cargo:"bad",quantity:"1"})',
          'core.echoRecord({\$2:1})',
          'core.echoRecord({"bad-name":1})',
          'core.echoRecord({hashCode:1})',
          'core.echoRecord({"if":1})',
          'core.unboundRecord()',
        ]) {
          expect(
            () => h.execute(expression),
            throwsA(isA<FlaxJsException>()),
            reason: expression,
          );
        }
        h.execute('''
        class CustomRows extends parity.CoreValues {
          #increment = 1;
          createRow(value) {
            const row = super.createRow(value);
            return {...row, quantity: row.quantity + this.#increment};
          }
        }
        var overriddenRow = parity.invokeRow(new CustomRows(), {cargo:'proxy',quantity:7});
        var futureRowDone = false;
        var streamRowsDone = false;
        core.futureRow(Promise.resolve({cargo:'future',quantity:6})).then(row => {
          if (row.cargo !== 'future' || row.quantity !== 6) throw new Error('Record Future');
          futureRowDone = true;
        });
        core.streamRows(parity.Stream.fromIterable([{cargo:'stream',quantity:8}])).toList().then(rows => {
          if (rows.get(0).cargo !== 'stream' || rows.get(0).quantity !== 8) throw new Error('Record Stream');
          streamRowsDone = true;
        });
      ''');
        expect(h.number('overriddenRow.quantity'), 8);
        for (
          var i = 0;
          i < 20 && !h.boolean('futureRowDone && streamRowsDone');
          i++
        ) {
          await tester.pump();
          h.runtime.drainMicrotasks();
        }
        expect(h.boolean('futureRowDone && streamRowsDone'), isTrue);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(tester);
      }
    },
  );
}
