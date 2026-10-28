# Native ABI headers

This directory retains the canonical ABI 2 header, internal GC extension 1, binding
extension 7 and optional FFI extension 1 headers. The binding table registers shared
member layouts, invokes current JS members with their actual receiver, and passes flat
typed arguments for synchronous calls, and shares Uint8List/Uint8Array storage without a
payload copy. FFI generation reads these declarations. The maintained Flutter fork owns
the executable bridge, V8 adapters and Dart joint GC patch; see the
[runtime contract](../../../docs/architecture/runtime.md).

`engine_ffi.h` installs the optional direct C ABI frontend, performs safe owner
checkpoints and reports native retirement completion. It is separate from the stable
runtime, GC and binding tables. Core discovers it only when the matching engine exports
the versioned query. See the [FFI contract](../../../docs/architecture/ffi.md).

The prior shared JSI sources and native tests remain as source history. They are not
loaded by Flax applications or included in core archives. `native:configure` checks
CMake/toolchain structure only. Real runtime checks require the matching Flutter engine.
