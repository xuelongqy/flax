import 'dart:ffi';
import 'dart:io';

import '../runtime/api.dart';
import 'native_runtime.dart';
import 'runtime_bindings.g.dart';

/// Creates the runtime supplied by the matching Flax Flutter engine.
abstract final class FlaxEngine {
  static FlaxJsRuntime createRuntime() {
    if (!(Platform.isMacOS && Abi.current() == Abi.macosArm64 ||
        Platform.isAndroid && Abi.current() == Abi.androidArm64 ||
        Platform.isIOS && Abi.current() == Abi.iosArm64)) {
      throw UnsupportedError(
        'The Flax engine currently supports macOS, Android and iOS arm64',
      );
    }
    try {
      final bindings = FlaxBindings(
        Platform.isAndroid
            ? DynamicLibrary.open('libflutter.so')
            : DynamicLibrary.process(),
      );
      return FlaxNativeJsRuntime.fromEngine(
        bindings.flax_engine_get_api(FLAX_ABI_VERSION),
        bindings.flax_engine_get_gc_api(FLAX_ENGINE_GC_VERSION),
      );
    } on ArgumentError catch (error) {
      throw UnsupportedError(
        'Flax requires its matching Flutter engine. '
        'Build with --local-engine and --local-engine-host. $error',
      );
    }
  }
}
