# Hermes Adapter

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
[transfer patch](https://github.com/xuelongqy/flax_js_runtime/blob/main/engines/hermes/patches/hermes-transfer.patch)
in the SDK repository implements ArrayBuffer.transfer using VM detach, including
detached buffer/view getters. The rc.1 consumer contract currently exposes a failure
when constructing Uint8Array from a detached buffer; that failure remains an acceptance
blocker in Flax rather than being hidden by an adapter shim. Both engines expose copied
binary transport through ABI 2; BYOB tests require old views to detach. This does not
add general structured cloning or shared buffers.
