# Dart and Flutter Packages

This directory contains the five members of the root Pub workspace:

| Package                                            | Intended role                  |
| -------------------------------------------------- | ------------------------------ |
| [flax](flax/README.md)                             | Flutter host and base bindings |
| [flax_material_ui](flax_material_ui/README.md)     | Material UI bindings           |
| [flax_cupertino_ui](flax_cupertino_ui/README.md)   | Cupertino UI bindings          |
| [flax_codegen](flax_codegen/README.md)             | Dart API binding generator     |
| [flax_engine_hermes](flax_engine_hermes/README.md) | Hermes native distribution     |

All libraries are empty scaffolds with publication disabled. Their manifests declare
workspace relationships, not a functioning runtime.

See [contribution commands](../CONTRIBUTING.md#checks) and
[package boundaries](../docs/architecture/packaging.md).
