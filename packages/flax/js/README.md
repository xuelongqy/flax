# @flax/core

The physical JavaScript runtime and Core binding-delivery package. Runtime signals are
exported from the package root, binding transport from `@flax/core/bindings`, Flax-owned
navigation from `@flax/core/navigation`, and host declarations from `@flax/core/host`.
Public Flutter and Dart SDK declarations live under `@flax/flutter/*` and
`@flax/dart/*`; this package may physically carry their selected implementation modules
without changing those public specifiers.

Install the same version as the Dart `flax` package:

```sh
pnpm add @flax/core@<version>
```

The root, `/bindings`, and `/navigation` exports contain runtime code. `/host` declares
globals installed by the Dart session host and does not install them. Compile sources
using that global entry in an ES-only TypeScript project; `lib.dom` declares a competing
browser environment. `flax_modules.json` describes public modules physically delivered
by this package for host preparation and bundler resolution.

This package is private while Flax is under development.
