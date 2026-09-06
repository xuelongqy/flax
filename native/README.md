# Native Runtime

Status: CMake configuration scaffold only.

- [include/flax](include/flax/README.md) will own public C ABI declarations.
- [src](src/README.md) will own shared native runtime implementation.
- [engines](engines/README.md) reserves per-engine adapters.
- [third_party](third_party/README.md) will own pinned upstream inputs and patches.
- [tests](tests/README.md) reserves native behavior verification.

The current CMake project detects C and C++ compilers and sets language baselines. It
does not define runtime libraries, fetch dependencies, or build an engine.

Run the [native configuration check](../CONTRIBUTING.md#checks) from the root. Read
[local agent guidance](AGENTS.md) before changing this layer.
