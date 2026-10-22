# Playground directory

`src/main.ts` contains the module directory, responsive cards and route entrances.
Actual demonstrations are imported from the private `@flax/example-*/showcase` workspace
exports. Those modules contain no startup side effects: local package `main.ts` entries
and this directory call the same widget factory.

`flax.modules.json` declares the host-delivered capability modules. Public declarations
come from the existing types packages and implementations are injected by the host. The
Material identity check through `shared_material.ts` remains part of composition
acceptance.

Example exports point the bundler at TypeScript source while their declarations come
from the normal workspace build. This lets `@flax/build` preserve generic selection, JS
inheritance and `super` when consuming an example from another package. No provider
implementation is copied into the business bundle.
