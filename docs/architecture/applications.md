# Standalone Applications

## Application root

The standalone example reuses the same FlaxView, runtime and generated bindings as an
embedded region. A thin Dart main initializes Flutter and host plugins, then mounts an
owning FlaxView. FlaxView can load a business bundle, directory, local or remote `.flax`
package, or JS file; the original source-string entry remains available. JS runApp
supplies exactly one application root. A generated MaterialApp can be that root; it is
not an additional native window or a second session.

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

Main-project business code and resources form one directory, separate from prepared host
modules. `prepareApplication()` from `@flax/build/application` stages resources from the
JS project's `assets/` directory and generates `flax.json`; the existing esbuild
configuration compiles to its returned `entryPath`. The default output is
`../assets/flax/`, relative to the JS project. No directory configuration is required.
Flutter packages that directory through `pubspec.yaml` and generates its native asset
manifest, including resolution-aware image variants. Resources are not inlined into JS.

```text
assets/flax/
  flax.json
  app.js
  flax.assets.json
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
`assetsDirectory` and `outputDirectory`. Output is generated: staging replaces only its
`assets/` subtree, so removed source resources do not remain in the next build.
`FlaxManifest.load(bundle)` validates the descriptor and its relative entry path before
startup. Unknown descriptor fields are allowed; unsupported format versions are
rejected. Both the builder and loader reject absolute, traversal, NUL and reserved entry
paths (`flax.json`, `assets/` and `AssetManifest.*`). The business version is metadata,
not a native-binding compatibility check or a filesystem layout rule. This descriptor is
separate from host `modules.json`.

Use application-root asset keys such as `assets/images/flutter.png` and
`assets/data/example.json`, without a leading slash. These keys are independent of the
calling TS file; `./` and `../` source-relative strings and filesystem paths are outside
this resource convention. Native Flutter package assets outside the business root
require an explicit host bundle, for example `bundle: rootBundle` on the Dart side.

### Application loading modes

| Owning View               | Input                                         | Descriptor and resources                                                       |
| ------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------ |
| `FlaxView(source: ...)`   | Already loaded JS string                      | Explicit Bundle or built-in business prefix; no descriptor discovery           |
| `FlaxView.bundle(...)`    | Business-root AssetBundle, or built-in prefix | Reads flax.json and the entry from that Bundle                                 |
| `FlaxView.directory(...)` | Prepared Directory                            | Reads descriptor, entry and resources in place                                 |
| `FlaxView.package(...)`   | Local .flax File                              | Installs once per content digest, then loads its Directory                     |
| `FlaxView.file(...)`      | Local JS File                                 | Explicit Bundle or built-in business prefix; no neighboring resource discovery |
| `FlaxView.network(...)`   | HTTP(S) Uri and explicit format               | JS uses the business Bundle default; packages use their installed resources    |

`FlaxView.session` and `.page` mount an existing Session; they are not additional
loading modes. Keep the existing source entry for hosts that already manage loading. The
file/package distinction stays explicit locally and remotely; URL extensions do not
select behavior. Internal source configurations are typed rather than nullable
combinations of file, directory and URL fields.

`FlaxView.bundle(createRuntime: ..., bindings: ...)` reads `flax.json` and its entry
from the default `assets/flax/` prefix of the inherited Flutter bundle. Set `prefix` to
change that built-in root. An explicit `assetBundle` already represents the business
root; it is used directly without adding a prefix. Combining it with a nondefault
`prefix` is rejected. No extraction occurs for this entry.

`FlaxView.directory(directory: ..., createRuntime: ..., bindings: ...)` creates a
FlaxDirectoryAssetBundle and uses the same descriptor and source loading path.
`FlaxView.package(file: ..., createRuntime: ..., bindings: ...)` installs a local
`.flax` file when necessary, then loads its installed directory. `installationDirectory`
overrides the default `<ApplicationSupport>/flax/` installation root.

`FlaxView.file(file: ..., createRuntime: ..., bindings: ...)` reads exactly one JS file.
It does not discover neighboring metadata or assets. Like the source-string and network
JS entries, its optional `assetBundle` defaults to `assets/flax/` inside the inherited
Flutter bundle. A script with companion resources should use an application directory,
or explicitly select its bundle. The source-string constructor keeps its existing
signature and const support, with the same business resource default.

All five automatic constructors accept the existing namespace, plugins and onError
options. `loadingBuilder` defaults to an empty Widget; `errorBuilder` defaults to the
existing bounded Flax error Widget. Loading errors are reported once, with no implicit
retry or fallback. Configuration identity holds the loading Future and Session across
ordinary rebuilds. Changing a source, relevant bundle identity, runtime factory or
binding registry creates a new load and Session. Replacing a file's bytes at the same
path is not watched: explicitly remount the View, for example with a new key. A load
completing after unmount never creates a runtime. Application replacement is not
development HMR.

Explicit hosts can use `FlaxApplication.bundle`, `.directory`, `.package`, `.file` or
`.network` and pass the loaded value to `FlaxSession.application`. This shares loading
and installation without introducing another resource or image API. The source-string
Session constructor remains available. FlaxApplication's manifest is null for
script-only mode. Script loaders do not read flax.json, and scripts without resource
reads do not require a built-in business directory. Prepared host modules, binding
registries and plugin capabilities still come from the host; a business archive does not
supply native bindings.

`FlaxSession(assetBundle: bundle)` selects one stable native `AssetBundle` for the
Session; its default is `FlaxPrefixedAssetBundle()`, exposing `assets/flax/` from
Flutter's rootBundle. `FlaxApplication.file` and network JS use that same default
without a BuildContext. An owning source/file/network-JS View instead wraps the
surrounding DefaultAssetBundle with the same prefix. The inherited object is the host
container; an explicitly supplied assetBundle already represents the business root and
is used unchanged, without another prefix. Automatic wrappers are created once per
owning Session or loading operation. Ordinary rebuilds retain both the wrapper and
Session; changing the underlying host bundle's identity replaces them. Borrowed root and
named page Views use their Session's bundle.

Switching between the prefixed default and an explicit bundle also replaces an owning
View's Session, even when both selections use the same underlying host object. Explicit
selection changes the resource root; an ordinary rebuild with the same selection does
not.

This changes the previous script defaults, which directly used the host/inherited
bundle. Callers that intentionally use host-root keys must pass
`assetBundle: rootBundle`, or explicitly pass `DefaultAssetBundle.of(context)` to retain
a custom inherited business bundle without prefixing it. An inherited bundle is not
inspected to guess its root. There is no missing-resource fallback to another bundle. A
script file's parent directory and a network download cache are never treated as
resource directories.

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
Its `loadBuffer` uses Flutter's native file-buffer API. A physical `AssetManifest.bin`
is accepted; otherwise the generated `flax.assets.json` resource index is validated and
converted to Flutter's native binary manifest. Numeric image scales are encoded as
doubles. The index is generated by prepareApplication and includes image variants, so a
directory does not require a Flutter asset build. Directory paths are not exposed to
application JS. The standalone example copies the descriptor, entry, PNG variants, JSON
and the projected native manifest into `<ApplicationSupport>/flax/` to demonstrate this
source. The destination is an explicit `Directory`, without an enforced id/version
hierarchy. The example accepts `FLAX_SANDBOX_DIRECTORY` to override it. Its
demonstration copier refreshes the managed `assets/` subtree on startup in sandbox mode,
removing stale resources. A nonempty destination must already contain a descriptor with
the same id; unrelated directories are rejected. This copy is not an atomic update
installer.

Built-in resources load directly from Flutter assets without startup extraction. An
installed business package can supply the JS entry and resources from one immutable
directory to a new Session. Metadata does not make overwriting an active directory safe;
versioned or staging directories remain useful for atomic activation. Keep an active
Session's directory intact: overwriting it can mix versions and leave native image
caches stale. Bundle identity separates native image cache entries across versions.
Prepared host modules and native bindings remain supplied by the host. Archive creation,
downloading and installation are supported below. Update selection, activation pointers,
rollback, old-install cleanup and publisher signature verification are not implemented;
development HMR does not implement them.

### Remote JS and .flax downloads

```dart
FlaxView.network(
  uri: Uri.parse('https://example.com/application'),
  format: FlaxRemoteFormat.package,
  createRuntime: createRuntime,
  bindings: bindings,
  headers: {'Authorization': 'Bearer ...'},
  expectedSha256: trustedDigest,
);
```

The default native downloader performs GET, follows at most five same-origin redirects,
and rejects cross-origin redirects rather than forwarding authorization to a new host.
Redirect targets are fetched without conditional validators, and their ETags are not
stored against the original URL: different resources can use the same ETag. Direct
responses still support conditional 304 reuse. It uses 30-second
connection/response/body-idle timeouts and a 512 MiB artifact byte limit. HTTP(S) URLs
must not contain credentials or fragments. Use HTTPS for production artifacts. Response
bytes are checked before any JS is evaluated or package installed. `expectedSha256`,
when supplied, is a 64-character hexadecimal digest of the artifact bytes after HTTP
decompression; it is checked on both fresh and cached loads. A trusted expected digest
can pin content; the package's own inventory is only an integrity check.

`format` is required: `FlaxRemoteFormat.javascript` reads one JS file, while `.package`
uses FlaxPackage.install and the directory loader. Script mode does not fetch companion
images or JSON; it uses the built-in `assets/flax/` business Bundle by default, or an
explicit resource Bundle. Remote JS therefore shares the App's installed resource
version; ship a remote package when code and resources need to change together. Package
mode rejects an external assetBundle. `installationDirectory` only applies to package
mode. The network JS source URL omits query parameters, which may contain tokens.

`cacheDirectory` overrides the download cache root, defaulting to
`<ApplicationSupport>/flax/downloads/`. Its `requests/<key>.json` records contain only
content digest, size and ETag; `blobs/<sha256>` stores complete immutable payloads. The
request key includes URL, format, canonical request headers and expected digest, so
changing credentials or pinning a new digest does not reuse another request's validator.
Metadata and payload files are staged then renamed; a failed download or digest check
does not replace the previous record. Cached bytes are rehashed before sending
If-None-Match. Cache metadata uses internal format version 2; earlier records trigger a
full GET rather than reusing validators created without the redirect policy. A valid 304
reuses the payload; missing ETag or corrupt cached bytes cause a full GET. Only 200 and
a validated conditional 304 are accepted.

This is an artifact revalidation cache: each new load contacts the server, regardless of
HTTP freshness age. Ordinary Widget rebuilds retain the existing load and Session.
`Cache-Control: no-store` and `Vary: *` skip persistent download caching, including when
returned on a 304. Package installation remains a separate application-data cache.
Network failures surface through onError/errorBuilder, without implicit stale fallback.
There is no automatic eviction. Changing URL, format, header contents, digest,
downloader, cache/install path or relevant Bundle identity replaces the owning load. Use
a new Widget key to explicitly revalidate an otherwise unchanged source.

Supply `download: (FlaxDownloadRequest request) async => FlaxDownloadResponse(...)` to
adapt an existing HTTP client. Injected adapters share the loader's 30-second
response/idle timeouts and byte limit. The request provides URI, immutable headers
(including the loader's conditional validator), and a cancellation Future. The response
provides statusCode, headers, a byte stream and optional onClose for releasing client
resources. Return an unconsumed byte stream; Flax cancels it even for rejected or late
responses. Adapter cleanup and stream cancellation start together so neither waits for
the other to begin. Return decoded artifact bytes; content-length must describe those
bytes or be omitted. Injected clients that follow redirects must also avoid transferring
validators between resource URLs or storing a target's ETag against the original URL.
Flax owns file writes, caching, size/digest checks and response cleanup. Honor
cancellation and the supplied headers. If the adapter adds account-specific credentials
outside those headers, use an account-specific cacheDirectory. Unmounting signals
cancellation, closes the default client and ignores late results; an adapter response
arriving later is also closed. Local immutable installation already in progress may
finish after unmounting. Explicit FlaxApplication.network callers may pass their own
cancelled Future. Cancellation is checked before cache preparation and before returning
the loaded application, including after file reads or an in-progress installation; a
cancelled load does not return a late application.

Hosts choose URLs, authentication and expected digests. Downloading and installing do
not select an update version, activate it for other Sessions, roll back, verify
publisher signatures or manage a hotfix lifecycle.

### Local .flax packages and installation cache

After compiling the entry, `packApplication({ directory, outputFile? })` from
`@flax/build/application` writes a ZIP container, defaulting to `directory + '.flax'`.
It includes only flax.json, the entry, flax.assets.json and the resources referenced by
that index. It adds `flax.files.json` format 1, mapping every other packaged file to its
byte size and SHA-256. Output is staged beside the target and renamed after completion;
packaging errors retain the previous archive. These generated files are reserved
entries.

`FlaxPackage.install(file, installationDirectory: ...)` returns the installed Directory.
The root defaults to `<ApplicationSupport>/flax/`; packages reside in
`installed/<archive-sha256>/`. This is an internal content cache, not a required
business id/version hierarchy. Different content with the same id/version uses separate
directories. Existing Sessions retain their immutable directories. Do not overwrite or
delete live installations. The host owns cache cleanup after those Sessions close.

Hashing, ZIP processing and installation validation run in a background isolate.
Requests for the same file/root join one in-flight operation; installation operations in
a root are serialized, with an OS file lock for cooperating processes. Each new
operation reads the archive to compute SHA-256; file size and modification time are not
content identity. A cache hit verifies the completion receipt, inventory digest, every
expected file's presence/size, and the hashes of metadata, entry and resource index. It
skips resource payload hashes, so same-size resource damage after installation is not
always detected.

A first installation validates normalized relative paths, duplicate/case-conflicting
names, regular files, supported compression and size limits (10,000 entries / 512 MiB
uncompressed). Symlinks, encrypted entries and explicit directory entries are rejected.
Files are streamed to a fresh staging directory with explicit size and CRC checks; the
ZIP library's verify flag alone is not relied upon. Every inventory SHA-256 and size is
then verified, resource references and required files are checked, and the source
archive is rehashed to reject concurrent replacement. The completion receipt is written
last and the directory is renamed into place. Failed attempts remove only their own
staging tree. A process interruption may leave an unused staging directory, which never
counts as a completed installation.

A damaged existing installation fails visibly and is never overwritten automatically.
The host may remove that cache entry after its Sessions close, then retry installation.
An unrelated corrupt cache is not grounds to overwrite live directories. Hashes and CRC
provide damage detection, not publisher authentication or untrusted-code isolation.

## Startup and ownership

Factory and binding registry identities stay stable. Ordinary Flutter rebuilds keep the
session, source executes once, and generated MaterialApp updates retain its Navigator.
Navigation and asynchronous results use the existing [session contract](navigation.md).

An application load failure is reported by Dart and displayed by the View error builder,
which does not require a Material ancestor. Host initialization errors in the example
use ErrorWidget. JS initialization failures use FlaxView's existing error reporting and
bounded placeholder. There is no automatic retry.

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
