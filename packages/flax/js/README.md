# @flax/core-runtime

The physical JavaScript runtime and Core binding-delivery package. Applications import
signals from `@flax/core`, binding transport from `@flax/core/bindings`, Flax-owned
navigation from `@flax/core/navigation`, and host declarations from `@flax/core/host`.
`@flax/core/assets` exports `getAssetBundle()` for the Session's native Flutter
resources; its types use the optional `@flax/flutter` peer installed by UI applications.
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

Signals support Widget-independent business subscriptions through `effect` and
`signal.subscribe(listener)`. Both return a stop function owned by the caller. Signals
also expose `peek()`; `untracked` and `action` reuse the same signals-core instance. See
[subscription cleanup](../../../docs/architecture/ui.md#business-subscriptions) for
scheduling, ownership, and examples.

Generic Dart class exports provide `Bag.$type(dartTypes.string)` to select a real
`Bag<String>` owner. The returned handle keeps its default/named constructors and is
also usable with `asDart` and nested type tokens. All exports share one registered
selector function; generated proxy classes declare its type without duplicating its JS
implementation. It reuses `dartType` and its caches. See
[Dart type selection](../../../docs/architecture/bindings.md#dart-type-selection).

`@flax/core/bindings` exports shared `asDart(value, Target)` and `getDartType(value)`.
The former checks the real Dart instance before returning a selected class view; the
latter returns diagnostic Dart `runtimeType` text on demand. They do not construct or
copy objects. Generated target tokens, session identity and Context/State lifetimes are
validated by the existing bridge. See
[checked views](../../../docs/architecture/objects.md#checked-views-and-dart-type-diagnostics).
