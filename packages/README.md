# Capability Packages

`packages/*` is the ownership boundary for Flax capabilities. A package keeps its Dart
API, JavaScript package, binding selection and manifest, tests, example, host bootstrap,
and native code together when those parts exist. An extension depends on `flax` and
`@flax/core`; extensions do not acquire hidden dependencies on one another.

| Package                                            | Role                                                                                               |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [flax](flax/README.md)                             | Engine-independent runtime, host environment, Flutter bindings, sessions, and shared native bridge |
| [flax_material_ui](flax_material_ui/README.md)     | Generated Material bindings and Route/Page adapters                                                |
| [flax_cupertino_ui](flax_cupertino_ui/README.md)   | Reserved Cupertino binding extension; no runtime implementation yet                                |
| [flax_codegen](flax_codegen/README.md)             | Analyzer-based Dart/TypeScript binding generator                                                   |
| [flax_test](flax_test/README.md)                   | Development-only engine-neutral runtime contracts and shared test harnesses                        |
| [flax_engine_hermes](flax_engine_hermes/README.md) | Hermes adapter, pinned inputs, assets, and runtime tests                                           |
| [flax_engine_v8](flax_engine_v8/README.md)         | Experimental V8 adapter, pinned inputs, assets, and runtime tests                                  |
| [flax_fetch](flax_fetch/README.md)                 | Optional Fetch session plugin                                                                      |
| [flax_websocket](flax_websocket/README.md)         | Optional WebSocket session plugin                                                                  |
| [flax_local_storage](flax_local_storage/README.md) | Optional persistent localStorage session plugin                                                    |
| [flax_canvas](flax_canvas/README.md)               | Optional Canvas host plugin and generated CanvasView binding                                       |

The core JavaScript package is `@flax/core`. Runtime signals use its root entry;
Flutter, binding types, and host declarations use `/flutter`, `/bindings`, and `/host`.
Each optional Dart package owns the matching `@flax/*` JS package where one is needed.

Each directory commits `flax_package.yaml`. Package tools use it to discover the public
Dart entry point, optional npm peer, capabilities, and registration symbols. A paired
Pub/npm capability uses the same version in both manifests; separate Flax capabilities
may release independently. The metadata never registers a plugin at runtime.

Package-local examples use only the package under test, core, and a selected engine. The
top-level examples verify several packages together. Publication remains disabled;
archive checks operate only on temporary copies and do not contact a registry.

Run one package's static checks with:

```sh
dart run tool/package.dart check flax_fetch
```

Run its real UI tests and macOS example with prepared assets using:

```sh
dart run tool/package.dart integration flax_fetch --engine=hermes
```

See [package architecture](../docs/architecture/packaging.md) and the
[scoped command table](../CONTRIBUTING.md#checks).
