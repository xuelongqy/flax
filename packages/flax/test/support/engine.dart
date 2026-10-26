import 'dart:io';

import 'package:flax/runtime.dart';
import 'package:flax/src/native/native_runtime.dart';

FlaxJsRuntime createTestRuntime() {
  final runtime = FlaxEngine.createRuntime();
  if (Platform.environment.containsKey('FLAX_ENGINE_RESULTS')) {
    (runtime as FlaxNativeJsRuntime).useEngineResultsForExperiment(
      Platform.environment['FLAX_ENGINE_RESULTS'] == '1',
      arguments: Platform.environment['FLAX_ENGINE_ARGUMENTS'] == '1',
    );
  }
  for (final (name, flag) in const [
    ('__flaxWidgetBatch', 'FLAX_WIDGET_BATCH'),
    ('__flaxObjectArguments', 'FLAX_OBJECT_ARGUMENTS'),
    ('__flaxCallbackMemo', 'FLAX_CALLBACK_MEMO'),
    ('__flaxArgumentReferences', 'FLAX_ARGUMENT_REFERENCES'),
  ]) {
    if (Platform.environment.containsKey(flag)) {
      runtime.evaluate(
        'globalThis.$name = ${Platform.environment[flag] == '1'}',
      );
    }
  }
  return runtime;
}
