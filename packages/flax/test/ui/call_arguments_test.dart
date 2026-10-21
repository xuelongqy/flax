import 'dart:async';

import 'package:flax/flax.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter_test/flutter_test.dart';

FlaxOwnedTestHarness _harness(List<FlaxFunctionBinding> functions) =>
    FlaxOwnedTestHarness(
      createRuntime: FlaxEngine.createRuntime,
      bindings: FlaxBindingRegistry([
        FlaxBindingModule(
          'call-arguments',
          const [],
          moduleId: 'test/call-arguments',
          uiProtocol: flaxBindingVersion,
          requiredCapabilities: const [],
          functions: functions,
        ),
      ]),
      source: '''
const { invokeTopLevel } = __flaxModules.require('@flax/core/bindings');
const widgets = __flaxModules.require('@flax/flutter/widgets');
globalThis.callArguments = (name, values) =>
  invokeTopLevel('test/call-arguments#function:' + name, values);
widgets.runApp(widgets.SizedBox());
''',
    );

void main() {
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
try { callArguments('invalid', [firstArgument, secondArgument, 'wrong']); }
catch (_) {}
''');
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
