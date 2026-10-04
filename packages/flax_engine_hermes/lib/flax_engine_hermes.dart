/// Experimental Hermes runtime creation through a bundled native asset.
library;

import 'package:flax/native_runtime.dart';
import 'package:flax/runtime.dart';
import 'package:flax/native_target.dart';

import 'src/hermes_bindings.g.dart';

abstract final class FlaxHermesEngine {
  static FlaxJsRuntime createRuntime() {
    requireFlaxNativeAbi();
    return FlaxNativeJsRuntime.fromApi(
      flax_hermes_get_api(FLAX_ABI_VERSION).cast<FlaxApi>(),
    );
  }
}
