/// Reserved compatibility factory for the maintained iOS Hermes engine.
library;

import 'dart:io';

import 'package:flax/runtime.dart';

abstract final class FlaxHermesEngine {
  static FlaxJsRuntime createRuntime() {
    if (!Platform.isIOS) {
      throw UnsupportedError('Hermes is reserved for the Flax iOS engine');
    }
    return FlaxEngine.createRuntime();
  }
}
