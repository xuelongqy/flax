import 'dart:ffi';
import 'dart:io';

import '../runtime/api.dart';
import 'native_runtime.dart';
import 'runtime_bindings.g.dart';

/// Creates the runtime supplied by the matching Flax Flutter engine.
abstract final class FlaxEngine {
  static FlaxJsRuntime createRuntime() => _createRuntime(false);

  static FlaxNativeJsRuntime _createRuntime(bool detached) {
    if (!(Platform.isMacOS && Abi.current() == Abi.macosArm64 ||
        Platform.isAndroid && Abi.current() == Abi.androidArm64 ||
        Platform.isIOS && Abi.current() == Abi.iosArm64)) {
      throw UnsupportedError(
        'The Flax engine currently supports macOS, Android and iOS arm64',
      );
    }
    try {
      final library = Platform.isAndroid
          ? DynamicLibrary.open('libflutter.so')
          : DynamicLibrary.process();
      final bindings = FlaxBindings(library);
      return FlaxNativeJsRuntime.fromEngine(
        bindings.flax_engine_get_api(FLAX_ABI_VERSION),
        bindings.flax_engine_get_gc_api(FLAX_ENGINE_GC_VERSION),
        bindings.flax_engine_get_binding_api(FLAX_ENGINE_BINDING_VERSION),
        library.providesSymbol('flax_engine_get_ffi_api')
            ? bindings.flax_engine_get_ffi_api(FLAX_ENGINE_FFI_VERSION)
            : nullptr,
        library.providesSymbol('flax_get_engine_execution_api')
            ? bindings.flax_get_engine_execution_api(
                FLAX_ENGINE_EXECUTION_VERSION,
              )
            : nullptr,
        library.providesSymbol('flax_engine_get_modules_api')
            ? bindings.flax_engine_get_modules_api(FLAX_ENGINE_MODULES_VERSION)
            : nullptr,
        library.providesSymbol('flax_engine_get_workers_api')
            ? bindings.flax_engine_get_workers_api(FLAX_ENGINE_WORKERS_VERSION)
            : nullptr,
        detached,
      );
    } on ArgumentError catch (error) {
      throw UnsupportedError(
        'Flax requires its matching Flutter engine. '
        'Build with --local-engine and --local-engine-host. $error',
      );
    }
  }
}

// Internal carrier entry; deliberately excluded from runtime.dart exports.
FlaxNativeJsRuntime createDetachedWorkerRuntime() =>
    FlaxEngine._createRuntime(true);
