// ignore_for_file: implementation_imports
import 'dart:convert';

import 'package:flax/runtime.dart';
import 'package:flax/src/native/native_runtime.dart';

/// One AOT/runtime; alternate only preparation of borrowed input descriptions.
void runArgumentsProbe() {
  final runtime = FlaxEngine.createRuntime() as FlaxNativeJsRuntime;
  runtime.useEngineResultsForExperiment(true);
  runtime.registerHostFunction(
    'argumentProbeHost',
    (_, args) => FlaxJsNumber(args.length.toDouble()),
  );
  final run = runtime.evaluate('''
    (() => {
      const values = [1, 'text', {}, null, x => x, undefined, true, 1n, -0, NaN];
      return (count, iterations) => {
        const args = values.slice(0, count);
        let sum = 0;
        for (let i=0; i<iterations; i++) sum += argumentProbeHost(...args);
        return sum;
      };
    })()
  ''') as FlaxJsFunction;
  const iterations = 10000;
  final rows = <Map<String, Object>>[];
  try {
    for (final count in [0, 1, 3, 5, 10]) {
      for (final enabled in [false, true]) {
        runtime.useEngineResultsForExperiment(true, arguments: enabled);
        run.call([FlaxJsNumber(count.toDouble()), const FlaxJsNumber(1000)]);
      }
      for (var round = 0; round < 6; round++) {
        for (final enabled in round.isEven ? [false, true] : [true, false]) {
          runtime.useEngineResultsForExperiment(true, arguments: enabled);
          final watch = Stopwatch()..start();
          final result = run.call([
            FlaxJsNumber(count.toDouble()),
            const FlaxJsNumber(10000),
          ]) as FlaxJsNumber;
          watch.stop();
          if (result.value != count * iterations) {
            throw StateError('Borrowed argument checksum failed');
          }
          rows.add({
            'count': count,
            'combined': enabled,
            'round': round,
            'iterations': iterations,
            'microseconds': watch.elapsedMicroseconds,
          });
        }
      }
    }
    // ignore: avoid_print
    print('ARGUMENTS_RESULT ${jsonEncode(rows)}');
  } finally {
    run.release();
    runtime.dispose();
  }
}
