# Shared Native Runtime

This directory owns Flax's public C ABI and engine-independent JSI bridge.

- `include/flax/runtime.h` is the canonical ABI 2 header.
- `src/` implements shared values, references, calls, callbacks, and byte transport.
- `tests/` verifies shared behavior without selecting an engine package.

Hermes and V8 adapters, pinned upstream inputs, patches, and engine-specific tests live
in their respective packages. The adapters include this directory through the common
CMake boundary; core code never selects an engine.

Use `dart run melos run native:configure` for a toolchain-only check. Use the explicit
runtime and UI checks for real engine behavior. See the
[runtime contract](../../../docs/architecture/runtime.md).
