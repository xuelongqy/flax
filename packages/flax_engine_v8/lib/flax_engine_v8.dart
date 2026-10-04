/// Experimental V8 runtime creation through a bundled native asset.
library;

import 'package:flax/native_runtime.dart';
import 'package:flax/runtime.dart';
import 'package:flax/native_target.dart';

import 'src/v8_bindings.g.dart';

abstract final class FlaxV8Engine {
  static FlaxJsRuntime createRuntime() {
    requireFlaxNativeAbi();
    return FlaxNativeJsRuntime.fromApi(
      flax_v8_get_api(FLAX_ABI_VERSION).cast<FlaxApi>(),
    );
  }
}
