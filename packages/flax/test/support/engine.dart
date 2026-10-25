import 'dart:io';

import 'package:flax/runtime.dart';
import 'package:flax/src/native/native_runtime.dart';

FlaxJsRuntime createTestRuntime() {
  final runtime = FlaxEngine.createRuntime();
  if (Platform.environment['FLAX_ENGINE_RESULTS'] == '1') {
    (runtime as FlaxNativeJsRuntime).useEngineResultsForExperiment(true);
  }
  runtime.evaluate('globalThis.__flaxStartupLazy = true');
  return runtime;
}
