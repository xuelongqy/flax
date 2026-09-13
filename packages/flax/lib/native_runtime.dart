/// Experimental extension boundary for native engine packages.
///
/// Applications should import runtime.dart instead. ABI types are not stable.
library;

export 'src/native/runtime_bindings.g.dart' show FlaxApi, FLAX_ABI_VERSION;
export 'src/native/native_runtime.dart' show FlaxNativeJsRuntime;
