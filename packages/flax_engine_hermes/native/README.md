# Hermes Adapter

Implements engine creation with ES6 block scoping and the Hermes microtask queue
enabled, and exports `flax_hermes_get_api` as the native asset bootstrap. The bridge
uses JSI from the exact same upstream revision as Hermes; [hermes.json](hermes.json)
records its checksum and license inputs.

The pinned upstream runtime defaults block scoping off. Flax enables
`withES6BlockScoping(true)` so source evaluation, `eval`, and the `Function` constructor
preserve per-iteration lexical bindings. This requires no source rewriting or changes to
the shared JSI bridge. The focused loop regressions do not certify full ECMAScript
conformance.

CMake statically links Hermes into `libflax_hermes.dylib`, exposing only the bootstrap
symbol. The current target is macOS arm64 with a macOS 15 deployment minimum. JIT, Intl,
debugger integration, engine test suites, and Apple framework packaging are disabled for
this build. Internal Hermes compiler tools are still built as required by upstream
runtime generation.

Shared runtime behavior stays in [core native source](../../flax/native/src/README.md),
not this adapter. From the package directory, `dart run tool/native.dart` owns source
preparation, CMake, CTest, assets, and notices. The root `native:build` and
`check:runtime` commands discover and invoke that entry. Normal `native:configure` does
not enter this build. This first adapter does not select a default engine.

The pinned [transfer patch](hermes-transfer.patch) implements ArrayBuffer.transfer using
VM detach, including detached buffer/view getters and view constructor checks. Its
checksum participates in source preparation and asset inputs. Both engines expose copied
binary transport through ABI 2; BYOB tests require old views to detach. This does not
add general structured cloning or shared buffers.
