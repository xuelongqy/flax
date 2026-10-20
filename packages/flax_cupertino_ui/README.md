# flax_cupertino_ui

Generated bindings for the supported standalone Cupertino UI subset.

The public JavaScript module is `@flax/cupertino-ui`. The Dart package owns the
corresponding binding registration and `FlaxCupertinoPlugin` opts the module into a
`FlaxView` host. Flutter/Core-owned values keep their existing provider identity.

The standalone selection remains curated. Core still generates Flutter's native Material
and Cupertino libraries; this package is not a completed replacement or full-library
split. Selection follows four shared rules: generate the configured `cupertino_ui`
source, reuse Core and declared providers, allow explicitly opted-in owner-local
external types, otherwise skip the affected signature. Core is implicit and cannot be
duplicated.

A reusable external provider needs matching direct Dart and public JS types
dependencies. The source JS package must also depend on the provider's physical runtime
package, not just its declarations. Generated Dart wiring resolves the provider
Manifest's `modules[].dartLibrary` package URI, including generated `lib/src` paths; it
does not require the main Dart entry point to re-export the binding module. Prepared JS
delivery follows the runtime dependency without inlining it. Neither metadata nor
binding wiring automatically activates host-capability plugins.

Without a provider, an owner can allow required `intl` types through:

```yaml
# flax_package.yaml
bindingDependencies:
  generate: [intl]
```

This additionally requires a direct `intl` dependency in `pubspec.yaml`; transitive
dependencies are insufficient. Omission or an empty list generates no external views.
The metadata allows `intl`, but the curated selection does not reference its types and
therefore emits no `intl` views. Whole-library discovery can generate the required views
without changing that selection. Generated owner-local views use
`@flax/cupertino-ui/dependencies/intl`, runtime source
`dist/generated/dependencies/intl/index.js` and the matching directory `subpathRoot`.
The specific types-only `./dependencies/*` export uses an array:
`types/generated/dependencies/*.d.ts` first, then
`types/generated/dependencies/*/index.d.ts`. The runtime package uses the same two
targets under `dist/generated/dependencies/`, ahead of `./*`. The direct file candidate
supports nested generated type helpers; the index fallback resolves the dependency root.
Public specifiers stay unchanged and need no API aliases. Manifest 28 marks these owning
identities with sparse `localDependency: true`; absent means false, and these rows are
excluded from automatic provider discovery. Format 27 is rejected. Existing shared
`asDart(value, Target)` requests an exact registered view of the same Dart object, with
normal generic checks and unchanged joint-GC ownership, rather than merging independent
bindings. See the
[binding dependency policy](../../docs/architecture/packaging.md#binding-dependency-policy).

Whole-library automatic discovery (`--library`) reads `bindings/flax_overrides.yaml` and
excludes the concrete `CupertinoLocalization*` language implementations. These classes
are also absent from the current curated selection. When selecting localization APIs,
applications normally use `GlobalCupertinoLocalizations.delegates`; Dart creates the
date and number formatters internally. This does not require exposing `intl` objects to
JavaScript. The base localization constructor and `getCupertinoTranslation` still accept
`intl` formatters and need bindings for those types if selected. The exclusions do not
remove the upstream Dart package's dependency on `intl`. Without such bindings, the
whole affected signature is skipped, including signatures where the unavailable input is
optional; the generator does not silently remove that parameter.

`CupertinoApp.navigatorObservers` uses ordinary observer-list conversion, preserving
constructor defaults and supplied order. `FlaxNavigatorObserver` is an optional host
observer; it does not delay Session close. Route values and results use ordinary object
conversion. See the [navigation contract](../../docs/architecture/navigation.md).

See [architecture](../../docs/architecture/README.md) and
[scoped checks](../../CONTRIBUTING.md#checks).

The selected navigation slice includes `CupertinoNavigationBar` and
`CupertinoPageScaffold.navigationBar`. Generated hosts implement
`ObstructingPreferredSizeWidget`; Flutter reads `preferredSize` and calls
`shouldFullyObstruct(context)` directly on the real native configuration. Update a fixed
navigation bar by binding the scaffold's `navigationBar` property. These native
interface members are not JS methods.
