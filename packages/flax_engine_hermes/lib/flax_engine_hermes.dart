/// Experimental Hermes runtime creation through a bundled native asset.
library;

import 'dart:ffi';
import 'dart:io';

import 'package:flax/native_runtime.dart';
import 'package:flax/runtime.dart';

import 'src/hermes_bindings.g.dart';

abstract final class FlaxHermesEngine {
  static FlaxJsRuntime createRuntime() {
    if (!Platform.isMacOS || Abi.current() != Abi.macosArm64) {
      throw UnsupportedError('Hermes currently supports macOS arm64 only');
    }
    return FlaxNativeJsRuntime.fromApi(
      flax_hermes_get_api(FLAX_ABI_VERSION).cast<FlaxApi>(),
    );
  }
}
