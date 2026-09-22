# flax_cupertino_ui

Generated bindings for the supported standalone Cupertino UI subset.

The public JavaScript module is `@flax/flutter/cupertino`. The Dart package owns the
corresponding binding registration and `FlaxCupertinoPlugin` opts the module into a
`FlaxView` host. Flutter/Core-owned values keep their existing provider identity.

See [architecture](../../docs/architecture/README.md) and
[scoped checks](../../CONTRIBUTING.md#checks).

The selected navigation slice includes `CupertinoNavigationBar` and
`CupertinoPageScaffold.navigationBar`. Generated hosts implement
`ObstructingPreferredSizeWidget`; Flutter reads `preferredSize` and calls
`shouldFullyObstruct(context)` directly on the real native configuration. Update a fixed
navigation bar by binding the scaffold's `navigationBar` property. These native
interface members are not JS methods.
