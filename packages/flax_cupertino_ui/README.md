# flax_cupertino_ui

Generated bindings for the supported standalone Cupertino UI subset.

The public JavaScript module is `@flax/cupertino-ui`. The Dart package owns the
corresponding binding registration and `FlaxCupertinoPlugin` opts the module into a
`FlaxView` host. Flutter/Core-owned values keep their existing provider identity.

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
