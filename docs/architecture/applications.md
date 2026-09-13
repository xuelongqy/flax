# Standalone Applications

## Application root

The standalone example reuses the same FlaxView, runtime and generated bindings as an
embedded region. A thin Dart main initializes Flutter, loads a JS asset and passes it to
an owning FlaxView. JS runApp supplies exactly one application root. A generated
MaterialApp can be that root; it is not an additional native window or a second session.

MaterialApp selects key, title, home, theme, darkTheme, themeMode and
debugShowCheckedModeBanner. All except key accept ordinary property bindings. ThemeMode
uses the real Material enum. Defaults and nullable values are forwarded to Flutter; this
subset uses home, not route tables, builder or MaterialApp.router.

MaterialApp establishes the actual application Theme, Directionality and Navigator.
Contexts used for those services must be below it. The Dart host does not preinstall
those ancestors. Title signals inside an AppBar remain local; binding MaterialApp's
themeMode updates its native configuration and preserves Flutter's type/key matching.
Flutter's own theme animation and inherited rebuilds are not additional Flax scheduling.

## Startup and ownership

Factory and binding registry identities stay stable. Ordinary Flutter rebuilds keep the
session, source executes once, and generated MaterialApp updates retain its Navigator.
Navigation and asynchronous results use the existing [session contract](navigation.md).

An asset load failure is reported by Dart and displayed using ErrorWidget, which does
not require a Material ancestor. JS initialization failures use FlaxView's existing
error reporting and bounded placeholder. There is no automatic retry.

Unloading the root or replacing its source retires its real Flutter subtree before the
session is destroyed. JS State.dispose releases application-owned Controllers; closing a
session only cleans bridge resources. Operating-system process termination does not
guarantee that Flutter calls dispose. Deterministic cleanup is tested through unmount.

## Outside-repository verification

check:standalone uses already prepared Hermes assets (or V8 through
`tool/check_standalone.dart --engine=v8`) and copies source files into a system
temporary directory. Dart flax, flax_material_ui, flax_fetch and the selected engine
package copies use relative path dependencies without workspace resolution. Native
assets and notices travel with the engine package; its hook remains the loading
authority.

`@flax/core` and the example's npm extensions (`@flax/material-ui`, `@flax/fetch`,
`@flax/websocket`, `@flax/local-storage`, and `@flax/canvas`) are packed locally and
installed as tarballs. The temporary consumer explicitly maps transitive Flax
dependencies to those tarballs because none are published. It checks normal exports and
a single runtime installation, then performs its own TypeScript check and bundle build.
No root bundler aliases, source entrypoints, node_modules or build caches are copied.
Local Flutter SDK and package caches are allowed.

The same source application runs macOS integration tests outside the repository. Its
normal entrypoint produces build/standalone/flax_standalone.app at the repository root.
A separate release integration target runs real WidgetTester assertions and emits a
machine-readable result. That .app is copied preserving framework symlinks and modes;
the temporary source and original build are removed before launch, without DYLD or
LD_LIBRARY_PATH overrides. A process start alone is not a successful UI result. The
verification receipt is build/standalone/verification.json. Only processes started by
the verifier are stopped during cleanup.

This proves local source consumption and artifact loading, not registry availability,
notarization, offline installation or reproducible binary hashes. CLI templates remain
future work. See the [example](../../examples/standalone/README.md).

The standalone example opts into Fetch and offers an explicit local-status request. Set
`FLAX_FETCH_BASE_URL` when supplying a server. Its sandbox entitlements allow client
networking. Only the temporary release integration build enables server networking for
the local test server; the normal production build does not. Verification activates the
exact app path because several temporary copies share a macOS bundle identifier.
