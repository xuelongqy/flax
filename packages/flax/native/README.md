# Native ABI headers

This directory retains the canonical ABI 2 header, internal GC extension 1 and binding
extension 1 headers. The binding table registers shared member layouts, invokes current
JS members with their actual receiver, and passes flat typed arguments for synchronous
calls. FFI generation reads these declarations. The maintained Flutter fork owns the
executable bridge, platform V8/Hermes adapters and Dart joint GC patch; see the
[runtime contract](../../../docs/architecture/runtime.md).

The prior shared JSI sources and native tests remain as source history. They are not
loaded by Flax applications or included in core archives. `native:configure` checks
CMake/toolchain structure only. Real runtime checks require the matching Flutter engine.
