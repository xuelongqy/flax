# @flax/core

The JavaScript side of the Flax core package. Runtime signals are exported from the
package root, Flutter bindings from `@flax/core/flutter`, binding types from
`@flax/core/bindings`, and host declarations from `@flax/core/host`.

Install the same version as the Dart `flax` package:

```sh
pnpm add @flax/core@<version>
```

The root and `/flutter` exports contain application runtime code. `/bindings` supplies
shared interop types. `/host` declares globals installed by the Dart session host and
does not install them. Compile sources using that global entry in an ES-only TypeScript
project; `lib.dom` declares a competing browser environment.

This package is private while Flax is under development.
