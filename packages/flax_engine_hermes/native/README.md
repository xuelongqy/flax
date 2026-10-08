# Hermes Adapter

This directory retains the historical standalone SDK adapter. Hermes is reserved for the
maintained iOS engine, which is outside the current macOS implementation; see
[the package status](../README.md). The native asset hook described below is retired.

Implements engine creation with ES6 block scoping and the Hermes microtask queue
enabled, and exports `flax_hermes_get_api` as the native asset bootstrap. The bridge
uses JSI from the SDK's pinned upstream Hermes revision. [sdk.lock.json](sdk.lock.json)
pins its archive and checksum.

The pinned upstream runtime defaults block scoping off. Flax enables
`withES6BlockScoping(true)` so source evaluation, `eval`, and the `Function` constructor
preserve per-iteration lexical bindings. This requires no source rewriting or changes to
the shared JSI bridge. The focused loop regressions do not certify full ECMAScript
conformance.

CMake links the SDK import target into the platform bridge, exposing only the Flax
bootstrap symbol. The target lock records runtime minima and each archive checksum.
Flutter packages the bridge and complete runtime dependency closure as native assets.
See [platform conditions and current acceptance](../../../docs/testing-platforms.md).

Shared runtime behavior stays in [core native source](../../flax/native/src/README.md),
not this adapter. The repository root `native:build` and `check:runtime` commands build
the bridge and run CTest against the same SDK consumed by the hook. Normal
`native:configure` does not download an engine.

The pinned
[transfer patch](https://github.com/xuelongqy/flax_js_runtime/blob/v0.3.0-rc.3/engines/hermes/patches/hermes-transfer.patch)
implements ArrayBuffer.transfer using VM detach, including detached buffer/view getters
and attachment checks during typed-array construction and copying. The rc.3 SDK retains
101 independent detached-buffer assertions; Flax's original assertion remains enabled.
Both engines expose copied binary transport through ABI 2; BYOB tests require old views
to detach. This does not add general structured cloning or shared buffers.

The SDK's
[Windows stack patch](https://github.com/xuelongqy/flax_js_runtime/blob/v0.3.0-rc.3/engines/hermes/patches/hermes-windows-native-stack.patch)
handles fully committed worker stacks and checks internal-bytecode failures in Release.
Its native regression passed on Windows x64 and arm64. Actual Flax Dart FFI acceptance
remains separate; see
[the validation record](../../../docs/tasks/platform-sdk-validation.md).
