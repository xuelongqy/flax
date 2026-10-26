import 'dart:async';

import 'package:flax/flax.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

FlaxOwnedTestHarness _harness(
  List<FlaxFunctionBinding> functions, {
  List<FlaxTypeBinding> types = const [],
  bool legacy = false,
  bool widgetBatch = true,
}) => FlaxOwnedTestHarness(
  createRuntime: () {
    final runtime = FlaxEngine.createRuntime();
    if (!widgetBatch) runtime.evaluate('globalThis.__flaxWidgetBatch = false');
    return runtime;
  },
  bindings: FlaxBindingRegistry([
    FlaxBindingModule(
      'call-arguments',
      types,
      moduleId: 'test/call-arguments',
      uiProtocol: flaxBindingVersion,
      requiredCapabilities: const [],
      functions: functions,
    ),
  ]),
  source:
      '''
const { invokeTopLevel } = __flaxModules.require('@flax/core/bindings');
const widgets = __flaxModules.require('@flax/flutter/widgets');
${legacy ? "globalThis.__flaxBindings = Object.freeze(Object.fromEntries(Object.entries(__flaxBindings).filter(([name]) => !['argumentKeys', 'readArguments', 'typedReference', 'widgetInfo'].includes(name))));" : ''}
globalThis.callArguments = (name, values) =>
  invokeTopLevel('test/call-arguments#function:' + name, values);
widgets.runApp(widgets.SizedBox());
''',
);

void main() {
  for (final legacy in [false, true]) {
    testWidgets(
      'Widget metadata preserves foreign getter order (legacy=$legacy)',
      (tester) async {
        final builders = <Widget Function()>[];
        final signature = FlaxTypeRef(
          'callback',
          callback: FlaxCallbackBinding(
            const [],
            const FlaxTypeRef('widget'),
            (callback) =>
                () => callback.call(const [], const {}) as Widget,
            id: 'test/call-arguments#callback:metadata-builder',
            invoke: (value, _, _) => (value as Widget Function())(),
            matches: (value) => value is Widget Function(),
          ),
        );
        final harness = _harness([
          FlaxFunctionBinding(
            'test/call-arguments#function:captureMetadata',
            [FlaxParameter.required('builder', signature)],
            flaxVoidType,
            (values) => builders.add(values['builder'] as Widget Function()),
          ),
        ], legacy: legacy);
        try {
          await tester.pumpWidget(FlaxView.session(session: harness.session));
          harness.execute('''
const { SizedBox } = __flaxModules.require('@flax/flutter/widgets');
const value = SizedBox({width:3, height:4});
globalThis.metadataReads = [];
const foreign = Object.freeze({
  get kind() { metadataReads.push('kind'); return value.kind; },
  get type() { metadataReads.push('type'); return value.type; },
  get ctor() { metadataReads.push('ctor'); return value.ctor; },
  get args() { metadataReads.push('args'); return value.args; },
});
callArguments('captureMetadata', [() => value]);
callArguments('captureMetadata', [() => foreign]);
''');
          final known = builders[0]();
          expect(harness.string('JSON.stringify(metadataReads)'), '[]');
          final foreign = builders[1]();
          expect(
            harness.string('JSON.stringify(metadataReads)'),
            '["kind","type","ctor","args"]',
          );
          await tester.pumpWidget(Center(child: known));
          expect(tester.getSize(find.byWidget(known)), const Size(3, 4));
          await tester.pumpWidget(Center(child: foreign));
          expect(tester.getSize(find.byWidget(foreign)), const Size(3, 4));
          expect(
            harness.string('JSON.stringify(metadataReads)'),
            '["kind","type","ctor","args"]',
          );
          expect(harness.errors, isEmpty);
        } finally {
          builders.clear();
          await harness.finish(tester);
        }
      },
    );
  }
  for (final legacy in [true, false]) {
    testWidgets(
      'constructor conversion preserves Dart errors (legacy=$legacy)',
      (tester) async {
        Widget Function()? build;
        final error = StateError('argument conversion sentinel');
        final rejected = FlaxTypeRef(
          'callback',
          callback: FlaxCallbackBinding(
            const [],
            flaxVoidType,
            (_) => throw error,
            id: 'test/call-arguments#callback:rejected',
            invoke: (value, _, _) => (value as void Function())(),
            matches: (value) => value is void Function(),
          ),
        );
        final builder = FlaxTypeRef(
          'callback',
          callback: FlaxCallbackBinding(
            const [],
            const FlaxTypeRef('widget'),
            (callback) =>
                () => callback.call(const [], const {}) as Widget,
            id: 'test/call-arguments#callback:builder',
            invoke: (value, _, _) => (value as Widget Function())(),
            matches: (value) => value is Widget Function(),
          ),
        );
        final harness = _harness(
          [
            FlaxFunctionBinding(
              'test/call-arguments#function:capture',
              [FlaxParameter.required('builder', builder)],
              flaxVoidType,
              (values) => build = values['builder'] as Widget Function(),
            ),
          ],
          legacy: legacy,
          types: [
            FlaxWidgetBinding(
              'test/call-arguments#type:Rejected',
              {
                '': [FlaxParameter.required('callback', rejected)],
              },
              (_) => throw StateError(
                'Conversion must reject before construction',
              ),
            ),
          ],
        );
        try {
          await tester.pumpWidget(FlaxView.session(session: harness.session));
          harness.execute('''
const { construct } = __flaxModules.require('@flax/core/bindings');
const value = construct('widget', 'test/call-arguments#type:Rejected', '',
  [{name:'callback', required:true}], [], {callback:() => {}});
callArguments('capture', [() => value]);
''');
          expect(() => build!(), throwsA(same(error)));
          expect(harness.errors, isEmpty);
        } finally {
          build = null;
          await harness.finish(tester);
        }
      },
    );
  }
  for (final legacy in [false, true]) {
    testWidgets(
      'constructor snapshots preserve defaults and foreign accessors (legacy=$legacy)',
      (tester) async {
        final received = <Map<String, Object?>>[];
        final harness = _harness(
          [
            FlaxFunctionBinding(
              'test/call-arguments#function:accept',
              const [
                FlaxParameter.required(
                  'value',
                  FlaxTypeRef('object', id: 'test/call-arguments#type:Probe'),
                ),
              ],
              flaxBoolType,
              (values) => values['value'] is _ArgumentProbe,
            ),
          ],
          legacy: legacy,
          widgetBatch: false,
          types: [
            FlaxObjectBinding(
              'test/call-arguments#type:Probe',
              const [],
              const {},
              constructors: const {
                '': [
                  FlaxParameter.required('value', flaxIntType),
                  FlaxParameter(
                    'optional',
                    flaxNullableStringType,
                    required: false,
                    omitWhenAbsent: true,
                  ),
                  FlaxParameter(
                    'fallback',
                    flaxIntType,
                    required: false,
                    defaultValue: 7,
                  ),
                ],
              },
              create: (_, values) {
                received.add(Map.of(values));
                return _ArgumentProbe();
              },
              matches: (value) => value is _ArgumentProbe,
            ),
          ],
        );
        try {
          await tester.pumpWidget(FlaxView.session(session: harness.session));
          harness.execute('''
const { construct, defineObject } = __flaxModules.require('@flax/core/bindings');
const type = 'test/call-arguments#type:Probe';
defineObject(type, [], [], {}, []);
const parameters = [{name:'value', required:true}, {name:'optional'}, {name:'fallback'}];
const create = args => __flaxCreateObject(24, type, {ctor:'', args});
const reference = create(construct('value', type, '', parameters, [], {value:3, optional:null}).args);
if (!callArguments('accept', [reference])) throw new Error('Typed reference rejected');
create(construct('value', type, '', parameters, [], {value:5, optional:undefined}).args);
globalThis.argumentReads = 0;
const foreign = Object.create({value:8, fallback:9});
Object.defineProperty(foreign, 'optional', {get() { argumentReads++; return null; }});
create(foreign);
globalThis.argumentFailures = 0;
for (const args of [{}, {value:null}, {value:'bad'}, {value:1, unknown:2}]) {
  try { create(args); } catch { argumentFailures++; }
}
''');
          expect(received, [
            {'value': 3, 'optional': null, 'fallback': 7},
            {'value': 5, 'fallback': 7},
            {'value': 8, 'optional': null, 'fallback': 9},
          ]);
          expect(
            (harness.runtime.evaluate('argumentReads') as FlaxJsNumber).value,
            1,
          );
          expect(
            (harness.runtime.evaluate(
              'argumentFailures',
            ) as FlaxJsNumber).value,
            4,
          );
          expect(harness.errors, isEmpty);
          expect(
            harness.runtime.jsCalls.containsKey('__flaxBindings.argumentKeys'),
            !legacy,
          );
          expect(
            harness.runtime.hostCalls.containsKey('__flaxReadArguments'),
            !legacy,
          );
          expect(
            harness.runtime.jsCalls.containsKey(
              '__flaxBindings.typedReference',
            ),
            !legacy,
          );
          expect(
            harness.runtime.jsCalls.containsKey('__flaxBindings.widgetInfo'),
            !legacy,
          );
        } finally {
          await harness.finish(tester);
        }
      },
    );
  }
  testWidgets(
    'argument batches restore nested reads and reject stale delivery',
    (tester) async {
      final received = <int>[];
      final harness = _harness(
        [],
        types: [
          FlaxObjectBinding(
            'test/call-arguments#type:Reentrant',
            const [],
            const {},
            constructors: const {
              '': [
                FlaxParameter.required('value', flaxIntType),
                FlaxParameter(
                  'callback',
                  flaxVoidCallbackType,
                  required: false,
                  omitWhenAbsent: true,
                ),
              ],
            },
            create: (_, values) {
              received.add(values['value'] as int);
              (values['callback'] as void Function()?)?.call();
              return _ArgumentProbe();
            },
            matches: (value) => value is _ArgumentProbe,
          ),
        ],
      );
      try {
        await tester.pumpWidget(FlaxView.session(session: harness.session));
        harness.execute('''
const { construct, defineObject } = __flaxModules.require('@flax/core/bindings');
const type = 'test/call-arguments#type:Reentrant';
defineObject(type, [], [], {}, []);
const parameters = [{name:'value', required:true}, {name:'callback'}];
const create = options => __flaxCreateObject(24, type,
  construct('value', type, '', parameters, [], options));
globalThis.batchHits = 0;
let nested = false;
const callback = () => batchHits++;
Object.defineProperty(callback, 'kind', {get() {
  if (!nested) { nested = true; create({value:8}); }
  return 'ordinary';
}});
create({value:3, callback});
let failed = false;
try { create({value:4, callback:'bad'}); } catch { failed = true; }
if (!failed) throw new Error('Wrong callback must fail');
create({value:5});
try { __flaxReadArguments('value', 99); throw new Error('Stale batch accepted'); }
catch (error) { if (!String(error).includes('No argument read in progress')) throw error; }
''');
        expect(received, [8, 3, 5]);
        expect(harness.number('batchHits'), 1);
        expect(harness.errors, isEmpty);
      } finally {
        await harness.finish(tester);
      }
    },
  );
  testWidgets('call argument Maps stay mutable and isolated during reentry', (
    tester,
  ) async {
    Map<String, Object?>? retained;
    var innerCalls = 0;
    final harness = _harness([
      FlaxFunctionBinding(
        'test/call-arguments#function:outer',
        const [
          FlaxParameter.required('callback', flaxVoidCallbackType),
          FlaxParameter(
            'absent',
            flaxNullableIntType,
            required: false,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            'present',
            flaxNullableIntType,
            required: false,
            omitWhenAbsent: true,
          ),
        ],
        flaxVoidType,
        (values) {
          expect(values.containsKey('absent'), isFalse);
          expect(values.containsKey('present'), isTrue);
          expect(values['present'], isNull);
          retained = values;
          final callback = values.remove('callback')! as void Function();
          values['present'] = 9;
          callback();
          expect(values, {'present': 9});
          return null;
        },
      ),
      FlaxFunctionBinding(
        'test/call-arguments#function:inner',
        const [FlaxParameter.required('value', flaxIntType)],
        flaxVoidType,
        (values) {
          expect(values['value'], 7);
          values.clear();
          innerCalls++;
          return null;
        },
      ),
    ]);
    try {
      await tester.pumpWidget(FlaxView.session(session: harness.session));
      harness.execute('''
callArguments('outer', [() => callArguments('inner', [7]), undefined, null]);
callArguments('inner', [7]);
''');
      expect(innerCalls, 2);
      expect(retained, {'present': 9});
      expect(harness.errors, isEmpty);
    } finally {
      retained = null;
      await harness.finish(tester);
    }
  });

  testWidgets('failed argument decoding releases earlier callback borrows', (
    tester,
  ) async {
    var calls = 0;
    final harness = _harness([
      FlaxFunctionBinding(
        'test/call-arguments#function:invalid',
        const [
          FlaxParameter.required('first', flaxVoidCallbackType),
          FlaxParameter.required('second', flaxVoidCallbackType),
          FlaxParameter.required('value', flaxIntType),
        ],
        flaxVoidType,
        (_) {
          calls++;
          return null;
        },
      ),
    ]);
    try {
      await tester.pumpWidget(FlaxView.session(session: harness.session));
      harness.execute('''
const firstArgument = () => {};
const secondArgument = () => {};
''');
      // Warm both fresh and memoized callback conversion before comparing handles.
      for (var i = 0; i < 2; i++) {
        expect(
          () => harness.execute(
            "callArguments('invalid', [firstArgument, secondArgument, 'wrong'])",
          ),
          throwsA(isA<FlaxJsException>()),
        );
      }
      // Error return handles drain at the next frame checkpoint.
      await tester.pump();
      final handles = harness.runtime.handles;
      final labels = harness.runtime.handleLabels;
      for (var i = 0; i < 4; i++) {
        expect(
          () => harness.execute(
            "callArguments('invalid', [firstArgument, secondArgument, 'wrong'])",
          ),
          throwsA(isA<FlaxJsException>()),
        );
        expect(
          harness.runtime.handleLabels.where(
            (label) => label == '__flaxInvokeOperation.arg',
          ),
          isEmpty,
        );
        await tester.pump();
        expect(
          harness.runtime.handles,
          handles,
          reason: 'Before: $labels; after: ${harness.runtime.handleLabels}',
        );
      }
      expect(calls, 0);
      expect(harness.errors, isEmpty);
    } finally {
      await harness.finish(tester);
    }
  });

  testWidgets('retained argument Maps do not own released callback metadata', (
    tester,
  ) async {
    Map<String, Object?>? retained;
    void Function()? callback;
    final harness = _harness([
      FlaxFunctionBinding(
        'test/call-arguments#function:retainThenThrow',
        const [FlaxParameter.required('callback', flaxVoidCallbackType)],
        flaxVoidType,
        (values) {
          retained = values;
          callback = values.remove('callback')! as void Function();
          values.clear();
          throw StateError('retained before failure');
        },
      ),
    ]);
    Future<void> collect() async {
      harness.execute(flaxTestJsGarbagePressure);
      await tester.runAsync(flaxTestCollectDartGarbage);
      await tester.pumpAndSettle();
    }

    try {
      await tester.pumpWidget(FlaxView.session(session: harness.session));
      harness.execute('''
var retainedArgumentHits = 0;
var weakArgument;
(() => {
  const callback = () => retainedArgumentHits++;
  weakArgument = new WeakRef(callback);
  try { callArguments('retainThenThrow', [callback]); }
  catch (error) {
    if (!String(error).includes('retained before failure')) throw error;
  }
})();
''');
      await collect();
      callback!();
      expect(harness.number('retainedArgumentHits'), 1);
      expect(harness.boolean('weakArgument.deref() !== undefined'), isTrue);
      callback = null;
      for (var i = 0; i < 8; i++) {
        await collect();
        if (harness.boolean('weakArgument.deref() === undefined')) break;
      }
      expect(harness.boolean('weakArgument.deref() === undefined'), isTrue);
      // The application still owns the raw Map, but no conversion resources.
      expect(retained, isEmpty);
      expect(harness.runtime.isDisposed, isFalse);
      expect(harness.errors, isEmpty);
    } finally {
      callback = null;
      retained = null;
      await harness.finish(tester);
    }
  });

  testWidgets('Stream argument mutation preserves callbacks and retirement', (
    tester,
  ) async {
    final controller = StreamController<int>(sync: true);
    Map<String, Object?>? retained;
    var listenCalls = 0;
    final harness = _harness([
      FlaxFunctionBinding(
        'test/call-arguments#function:stream',
        const [],
        flaxAnyType,
        (_) => controller.stream,
      ),
    ]);
    final mapBinding = harness.runtime.mapDartBinding!;
    harness.runtime.mapDartBinding = (binding) {
      final mapped = mapBinding(binding);
      if (mapped is! FlaxStreamTypeBinding) return mapped;
      final listen = mapped.instanceMethods['listen']!;
      return FlaxStreamTypeBinding(
        mapped.id,
        mapped.getters,
        {
          ...mapped.instanceMethods,
          'listen': FlaxInstanceMethod(
            listen.parameters,
            listen.result,
            (receiver, values) {
              final subscription = listen.invoke(receiver, values);
              retained = values;
              values.clear();
              listenCalls++;
              return subscription;
            },
            startsRoute: listen.startsRoute,
            genericFactory: listen.genericFactory,
            ownerTypes: listen.ownerTypes,
            requiresTypeArguments: listen.requiresTypeArguments,
          ),
        },
        view: mapped.view,
        constructors: mapped.constructors,
        create: mapped.create,
        matches: mapped.matches,
        methods: mapped.methods,
      );
    };
    try {
      await tester.pumpWidget(FlaxView.session(session: harness.session));
      harness.execute('''
__flaxModules.require('@flax/dart/async');
var streamArgumentEvents = [];
var weakStreamArgument;
var argumentSubscription;
(() => {
  const onData = value => streamArgumentEvents.push(value);
  weakStreamArgument = new WeakRef(onData);
  argumentSubscription = callArguments('stream', []).listen(onData, {
    onError: () => streamArgumentEvents.push('error'),
    onDone: () => streamArgumentEvents.push('done'),
    cancelOnError: false,
  });
})();
''');
      expect(listenCalls, 1);
      expect(retained, isEmpty);
      controller.add(7);
      controller.addError(StateError('expected stream error'));
      var closed = false;
      unawaited(controller.close().then((_) => closed = true));
      // Native completion can cross both bridge and Flutter checkpoints.
      for (var i = 0; i < 80 && !closed; i++) {
        await tester.pump();
        await tester.runAsync(() => Future<void>.delayed(Duration.zero));
      }
      expect(closed, isTrue, reason: 'Stream close must finish after delivery');
      expect(
        harness.string('JSON.stringify(streamArgumentEvents)'),
        '[7,"error","done"]',
      );
      for (var i = 0; i < 8; i++) {
        harness.execute(flaxTestJsGarbagePressure);
        await tester.runAsync(flaxTestCollectDartGarbage);
        await tester.pumpAndSettle();
        if (harness.boolean('weakStreamArgument.deref() === undefined')) break;
      }
      expect(
        harness.boolean('weakStreamArgument.deref() === undefined'),
        isTrue,
      );
      expect(retained, isEmpty);
      expect(harness.runtime.isDisposed, isFalse);
      expect(harness.errors, isEmpty);
    } finally {
      if (!controller.isClosed) unawaited(controller.close());
      retained = null;
      await harness.finish(tester);
    }
  });
}

class _ArgumentProbe {}
