# Standalone Applications

## Application root

The standalone example reuses the same FlaxView, runtime and generated bindings as an
embedded region. A thin Dart main initializes Flutter, loads a JS asset and passes it to
an owning FlaxView. JS runApp supplies exactly one application root. A generated
MaterialApp can be that root; it is not an additional native window or a second session.

MaterialApp selects key, title, home, theme, darkTheme, themeMode and
debugShowCheckedModeBanner. All except key accept ordinary property bindings. ThemeMode
uses the real Material enum. Defaults and nullable values are forwarded to Flutter; this
example uses home. Other supported parameters and constructors come from automatic
selection rather than an application-specific API list.

MaterialApp establishes the actual application Theme, Directionality and Navigator.
Contexts used for those services must be below it. The Dart host does not preinstall
those ancestors. Title signals inside an AppBar remain local; binding MaterialApp's
themeMode updates its native configuration and preserves Flutter's type/key matching.
Flutter's own theme animation and inherited rebuilds are not additional Flax scheduling.

## Application resources

Main-project business code and resources form one directory, separate from prepared
host modules. `prepareApplication()` from `@flax/build/application` stages resources
from the JS project's `assets/` directory and generates `flax.json`; the existing
esbuild configuration compiles to its returned `entryPath`. The default output is
`../assets/flax/`, relative to the JS project. No directory configuration is required.
Flutter packages that directory through `pubspec.yaml` and generates its native asset
manifest, including resolution-aware image variants. Resources are not inlined into JS.

```text
assets/flax/
  flax.json
  app.js
  assets/images/flutter.png
  assets/images/2.0x/flutter.png
  assets/data/example.json
```

`flax.json` sits beside the entry and describes the business package:

```json
{
  "formatVersion": 1,
  "id": "main",
  "version": "1.0.0",
  "entry": "app.js",
  "description": "Main application"
}
```

`id` defaults to `package.json`'s `flax.id`, then its `name`; `version` and optional
`description` come from that file. The builder accepts an explicit `id`, `entry`,
`assetsDirectory` and `outputDirectory`. Output is generated: staging replaces only
its `assets/` subtree, so removed source resources do not remain in the next build.
`FlaxManifest.load(bundle)` validates the descriptor and its relative entry path before
startup. Unknown descriptor fields are allowed; unsupported format versions are rejected.
Both the builder and loader reject absolute, traversal, NUL and reserved entry paths
(`flax.json`, `assets/` and `AssetManifest.*`).
The business version is metadata, not a native-binding compatibility check or a
filesystem layout rule. This descriptor is separate from host `modules.json`.

Use application-root asset keys such as `assets/images/flutter.png` and
`assets/data/example.json`, without a leading slash. These keys are independent of the
calling TS file; `./` and `../` source-relative strings and filesystem paths are outside
this resource convention. Native Flutter package assets outside the business root
require an explicit host bundle, for example `bundle: rootBundle` on the Dart side.

`FlaxSession(assetBundle: bundle)` selects one stable native `AssetBundle` for the
Session; its default is Flutter's `rootBundle`. An owning `FlaxView` also accepts
`assetBundle` and otherwise captures the surrounding `DefaultAssetBundle`. Changing that
bundle's identity replaces an owning View's Session. Borrowed root and named page Views
use their Session's bundle.

Generated `Image.asset`, `AssetImage` and `ImageProvider` keep their native behavior.
Session roots and named pages inject `DefaultAssetBundle`. Native Route and dialog
builders also scope their returned Widgets when building outside the Session subtree.
The builder remains synchronous and receives Flutter's original context; that context is
above the newly injected bundle. Use `getAssetBundle()` there, or read the inherited
bundle inside the returned page's build method. Deliberate local `DefaultAssetBundle`
overrides inside the Session subtree remain effective. An image's explicit `bundle`
still wins.

Context-free business code reads the same native object through `@flax/core/assets`:

```typescript
import { getAssetBundle } from '@flax/core/assets';

const configuration = JSON.parse(
  await getAssetBundle().loadString('assets/data/example.json'),
);
```

Use `DefaultAssetBundle.of(context)` when a local inherited override is intentional.
Keep loading Futures in State and let Flutter's `FutureBuilder` own asynchronous
presentation. Direct `getRootBundle()` reads intentionally access host resources.
Resource errors remain visible; there is no fallback from missing Session resources to
host resources.

`FlaxPrefixedAssetBundle()` exposes the built-in `assets/flax/` directory without
copying files. It prepends the configurable `prefix` to ordinary reads and native buffer
loads, and projects Flutter's global asset manifest into package-relative keys and
variants. The projection is cached by Flutter when images request it. Host resources
outside the prefix are not part of this bundle. Set `bundle` to wrap another native
bundle. Trailing directory slashes are accepted and normalized.

`FlaxDirectoryAssetBundle(Directory(path))` reads an installed directory with the same
logical keys. It rejects absolute paths, traversal and symlinks escaping its directory.
Its `loadBuffer` uses Flutter's native file-buffer API. Include a Flutter-compatible
`AssetManifest.bin` for native resolution-aware images; directory paths are not exposed
to application JS. The standalone example copies the descriptor, entry, PNG variants,
JSON and the projected native manifest into `<ApplicationSupport>/flax/` to demonstrate this source.
The destination is an explicit `Directory`, without an enforced id/version hierarchy.
The example accepts `FLAX_SANDBOX_DIRECTORY` to override it. Its demonstration copier
refreshes the managed `assets/` subtree on startup in sandbox mode, removing stale
resources. A nonempty destination must already contain a descriptor with the same id;
unrelated directories are rejected. This copy is not an atomic update installer.

Built-in resources load directly from Flutter assets without startup extraction. A
future installed business package can supply the JS entry and resources from one
immutable directory to a new Session. Metadata does not make overwriting an active
directory safe; versioned or staging directories remain useful for atomic activation.
Keep an active Session's directory intact: overwriting it can mix versions and leave
native image caches stale. Bundle identity
separates native image cache entries across versions. Prepared host modules and native
bindings remain supplied by the host. Archive creation, downloads, validation,
installation and activation are deferred; development HMR does not implement them.

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

Applications use Flutter 3.47.6 from `flax/main` and its matching local engine.
`FlaxEngine.createRuntime()` supplies the platform runtime without a package asset hook.
Source consumers copy Dart packages with relative path dependencies, but their Flutter
engine remains an explicit prerequisite. The engine application gate is
`dart run tool/check_engine_application.dart debug|profile|release`.

The public declaration packages and corresponding `-runtime` source packages for Core
and the example's extensions are packed locally and installed as tarballs. The temporary
consumer explicitly maps transitive Flax dependencies to those tarballs because none are
published. It checks normal exports and a single runtime installation, then performs its
own TypeScript check and bundle build. No root bundler aliases, source entrypoints,
node_modules or build caches are copied. Local Flutter SDK and package caches are
allowed.

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
