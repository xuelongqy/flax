// ignore_for_file: depend_on_referenced_packages, implementation_imports
import 'package:flax/runtime.dart';
import 'package:flax/src/native/native_runtime.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  for (final combined in [false, true]) {
    for (final property in [false, true]) {
      test(
        'failed result trace releases ownership: $combined/$property',
        () async {
          final runtime = FlaxEngine.createRuntime() as FlaxNativeJsRuntime;
          final producer = runtime.evaluate('''
          (() => {
            function create() {
              const value = {alive: true};
              globalThis.resultWeak = new WeakRef(value);
              return value;
            }
            return ${property ? '{get value() {return create();}}' : 'create'};
          })()
        ''') as FlaxJsObject;
          try {
            runtime.useEngineResultsForExperiment(combined);
            final failure = StateError('trace failed');
            runtime.traceForExperiment = (_, starting) {
              if (starting) throw failure;
            };
            try {
              expect(
                () => property
                    ? producer.getProperty('value')
                    : (producer as FlaxJsFunction).call([]),
                throwsA(same(failure)),
              );
            } finally {
              runtime.traceForExperiment = null;
            }
            var collected = false;
            for (var attempt = 0; attempt < 10; attempt++) {
              await flaxTestCollectDartGarbage();
              runtime.evaluate(flaxTestJsGarbagePressure);
              runtime.drainMicrotasks();
              await Future<void>.delayed(const Duration(milliseconds: 20));
              collected = (runtime.evaluate(
                'resultWeak.deref() === undefined',
              ) as FlaxJsBoolean).value;
              runtime.drainMicrotasks();
              if (collected) break;
            }
            expect(collected, isTrue, reason: 'No close/release of the result');
            expect(
              (runtime.evaluate('1+1') as FlaxJsNumber).value,
              2,
              reason: 'The runtime recovers after the failed trace',
            );
          } finally {
            producer.release();
            runtime.dispose();
          }
        },
      );
    }
  }
}
