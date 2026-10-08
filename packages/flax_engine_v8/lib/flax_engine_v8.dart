/// Compatibility factory for the V8 runtime in the maintained Flutter engine.
library;

import 'package:flax/runtime.dart';

abstract final class FlaxV8Engine {
  static FlaxJsRuntime createRuntime() {
    return FlaxEngine.createRuntime();
  }
}
