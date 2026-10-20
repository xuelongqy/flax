# flax_cupertino_ui

Generated bindings for the supported public `cupertino_ui` library.

The public JavaScript module is `@flax/cupertino-ui`. The Dart package owns the
corresponding binding registration and `FlaxCupertinoPlugin` opts the module into a
`FlaxView` host. Flutter/Core-owned values keep their existing provider identity.

Automatic selection covers the public `cupertino_ui` entry, with explicit skip reasons
and a blacklist for concrete localization language implementations. Core no longer
contains native Flutter Material/Cupertino bindings. The removed
`@flax/flutter/cupertino` entry is not an alias for these Dart classes. Selection
follows four shared rules: generate the configured source, reuse Core and declared
providers, allow opted-in owner-local external types, otherwise skip the affected
signature. Core is implicit and cannot be duplicated.

A reusable external provider needs matching direct Dart and public JS types
dependencies. The source JS package must also depend on the provider's physical runtime
package, not just its declarations. Generated Dart wiring resolves the provider
Manifest's `modules[].dartLibrary` package URI, including generated `lib/src` paths; it
does not require the main Dart entry point to re-export the binding module. Prepared JS
delivery follows the runtime dependency without inlining it. Neither metadata nor
binding wiring automatically activates host-capability plugins.

Intl formatters are not exposed by this binding package. Applications normally use
`GlobalCupertinoLocalizations.delegate` or `.delegates`; Dart creates the date and
number formatters internally. Public localization queries and base interfaces remain
bound. The formatter-taking Global constructor and JS subclass construction through it
are skipped by the normal dependency rules. A separately declared Intl binding provider
could support these signatures in a future selection; no such package is currently
provided. See the
[binding dependency policy](../../docs/architecture/packaging.md#binding-dependency-policy).

Whole-library automatic discovery (`--library`) reads `bindings/flax_overrides.yaml` and
excludes the declaring directory `package:cupertino_ui/src/l10n/`. Its concrete
`CupertinoLocalization*` classes and translation helpers stay inside Dart. These classes
remain absent from the generated public surface. When selecting localization APIs,
applications normally use `GlobalCupertinoLocalizations.delegates`. The exclusions and
omitted formatter bindings do not remove the upstream Dart package's dependency on
`intl`. Without a binding provider, the whole affected signature is skipped, including
signatures where the unavailable input is optional; the generator does not silently
remove that parameter.

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
