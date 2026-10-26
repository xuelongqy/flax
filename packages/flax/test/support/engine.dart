import 'dart:io';

import 'package:flax/runtime.dart';
import 'package:flax/src/native/native_runtime.dart';

FlaxJsRuntime createTestRuntime() {
  final runtime = FlaxEngine.createRuntime();
  if (Platform.environment['FLAX_ENGINE_RESULTS'] == '1') {
    (runtime as FlaxNativeJsRuntime).useEngineResultsForExperiment(
      true,
      arguments: Platform.environment['FLAX_ENGINE_ARGUMENTS'] == '1',
    );
  }
  runtime.evaluate('globalThis.__flaxStartupLazy = true');
  if (Platform.environment['FLAX_WIDGET_BATCH'] == '1') {
    runtime.evaluate('globalThis.__flaxWidgetBatch = true');
  }
  if (Platform.environment['FLAX_OBJECT_ARGUMENTS'] == '1') {
    runtime.evaluate('globalThis.__flaxObjectArguments = true');
  }
  if (Platform.environment['FLAX_CALLBACK_MEMO'] == '1') {
    runtime.evaluate('globalThis.__flaxCallbackMemo = true');
  }
  if (Platform.environment['FLAX_ARGUMENT_REFERENCES'] == '1') {
    runtime.evaluate('globalThis.__flaxArgumentReferences = true');
  }
  return runtime;
}
