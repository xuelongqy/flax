# Embedded Aggregate JS

`src/main.ts` is the cross-module aggregate fixture. It imports core Widgets and
Material bindings, renders a small counter, and checks that a Material export reached
through `shared_material.ts` resolves to the same host-provided module identity.

`flax.modules.json` declares the host module delivery used by the aggregate. The root
aggregate bundler emits only this application entry; package-specific examples and UI
fixtures are built by their owning package commands.

The business bundle consumes the public type packages while host-provided module
implementations come from the prepared Flax module assets.
