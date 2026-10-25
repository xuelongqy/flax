/// Legacy iOS factory for the runtime in the maintained Flutter engine.
///
/// The iOS engine uses V8 jitless. This alias does not load Hermes or accept HBC.
library;

import 'dart:io';

import 'package:flax/runtime.dart';

abstract final class FlaxHermesEngine {
  @Deprecated('Use FlaxEngine.createRuntime(); iOS now uses V8 jitless.')
  static FlaxJsRuntime createRuntime() {
    if (!Platform.isIOS) {
      throw UnsupportedError(
        'The legacy iOS factory requires the maintained Flax iOS engine',
      );
    }
    return FlaxEngine.createRuntime();
  }
}
