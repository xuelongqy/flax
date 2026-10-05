# @flax/core-runtime

The physical JavaScript runtime and Core binding-delivery package. Applications import
signals from `@flax/core`, binding transport from `@flax/core/bindings`, Flax-owned
navigation from `@flax/core/navigation`, and host declarations from `@flax/core/host`.
Public Flutter and Dart SDK declarations live under `@flax/flutter/*` and
`@flax/dart/*`; this package may physically carry their selected implementation modules
without changing those public specifiers.

Install the same version as the Dart `flax` package:

```sh
pnpm add @flax/core@<version> @flax/core-runtime@<version>
```

The public `@flax/core` package contains declarations only. The default Dart plugin
injects the prepared runtime modules; business bundles resolve public imports through
that inventory. Installing this source package does not activate a plugin. `/host`
declares globals installed by the Dart session host. Compile sources using that global
entry in an ES-only TypeScript project; `lib.dom` declares a competing browser
environment. `flax_modules.json` describes public modules physically delivered by this
package for host preparation and bundler resolution.

This package is private while Flax is under development.
