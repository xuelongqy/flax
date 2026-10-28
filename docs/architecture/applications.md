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

Every application entry is native ESM without an entry-mode or descriptor-version
setting. JS, JSON and Wasm dependencies share one runtime graph, including remote
imports. Session readiness includes top-level await. See [native modules](modules.md)
for transport policy and source-provider APIs.

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

Declare the generated business directories in the Flutter application's pubspec. Asset
declarations include their direct files; declare image and JSON subdirectories too.
Flutter discovers image-density variants under the declared image directory.

```yaml
flutter:
  assets:
    - assets/flax/
    - assets/flax/assets/images/
    - assets/flax/assets/data/
```

`flax.json` sits beside the entry and describes the business package:

```json
{
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

| Owning View                                                  | Input                                                 | Default resource source                            | Reads flax.json |
| ------------------------------------------------------------ | ----------------------------------------------------- | -------------------------------------------------- | --------------- |
| `FlaxView(source: ...)`                                      | Already loaded JS string                              | `assets/flax/` inside the inherited host bundle    | No              |
| `FlaxView.bundle(...)`                                       | Built-in prefix or explicit business-root AssetBundle | The selected bundle; default prefix `assets/flax/` | Yes             |
| `FlaxView.directory(...)`                                    | Prepared Directory                                    | The supplied directory, read in place              | Yes             |
| `FlaxView.package(...)`                                      | Local .flax File                                      | Its installed directory                            | Yes             |
| `FlaxView.file(...)`                                         | Local JS File                                         | `assets/flax/` inside the inherited host bundle    | No              |
| `FlaxView.network(..., format: FlaxRemoteFormat.javascript)` | HTTP(S) JS artifact                                   | `assets/flax/` inside the inherited host bundle    | No              |
| `FlaxView.network(..., format: FlaxRemoteFormat.package)`    | HTTP(S) .flax artifact                                | Its installed directory                            | Yes             |

The source/file/network-JS defaults can be replaced with an explicit `assetBundle`. They
do not discover resources beside the script file or relative to its remote URL.

`FlaxView.session` and `.page` mount an existing Session; they are not additional
loading modes. Keep the existing source entry for hosts that already manage loading. The
file/package distinction stays explicit locally and remotely; URL extensions do not
select behavior. Internal source configurations are typed rather than nullable
combinations of file, directory and URL fields.

Choose one of these alternatives using the host's existing `createRuntime` and
`bindings`. Here `source` is a JS string, `applicationDirectory` is a Directory, and
`packageFile` and `jsFile` are Files selected by the host.

```dart
FlaxView(
  source: source,
  createRuntime: createRuntime,
  bindings: bindings,
);

FlaxView.bundle(
  createRuntime: createRuntime,
  bindings: bindings,
);

FlaxView.directory(
  directory: applicationDirectory,
  createRuntime: createRuntime,
  bindings: bindings,
);

FlaxView.package(
  file: packageFile,
  createRuntime: createRuntime,
  bindings: bindings,
);

FlaxView.file(
  file: jsFile,
  createRuntime: createRuntime,
  bindings: bindings,
);

FlaxView.network(
  uri: Uri.parse('https://example.com/app.js'),
  format: FlaxRemoteFormat.javascript,
  createRuntime: createRuntime,
  bindings: bindings,
);

FlaxView.network(
  uri: Uri.parse('https://example.com/app.flax'),
  format: FlaxRemoteFormat.package,
  createRuntime: createRuntime,
  bindings: bindings,
);
```

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

### Resource and cache locations

`ApplicationSupport` below means the directory returned by
`getApplicationSupportDirectory()` on the current platform. No absolute sandbox path is
hard-coded into Flax.

| Location                    | Default                                | Override and behavior                                                                                                   |
| --------------------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Built-in business resources | Flutter assets under `assets/flax/`    | `.bundle(prefix: ...)`, or an explicit `FlaxPrefixedAssetBundle` for source/file/network entries; no startup extraction |
| Prepared directory          | The Directory supplied to `.directory` | No implicit default, copy or id/version hierarchy                                                                       |
| Package installation root   | `<ApplicationSupport>/flax/`           | `installationDirectory`; the installer appends `installed/<package-sha256>/`                                            |
| Network artifact cache      | `<ApplicationSupport>/flax/downloads/` | `cacheDirectory`; the downloader appends `requests/` and `blobs/`                                                       |

These installation/cache defaults apply without a sandbox. Supplying a `FlaxSandbox`
groups the application's managed files under one root instead:

```text
<ApplicationSupport>/flax/
  apps/<sha256(appId)>/
    .flax-install.json
    bundle/
      flax.json
      app.js
      flax.assets.json
      assets/...
    downloads/
      requests/<request-key>.json
      blobs/<artifact-sha256>
    data/
      local_storage/...

  # Shared locations used by loaders without a sandbox:
  downloads/
    requests/<request-key>.json
    blobs/<artifact-sha256>
  installed/<package-sha256>.install.json
  installed/<package-sha256>/
    flax.json
    app.js
    flax.assets.json
    assets/...
```

A local or remote package uses the same installer. An unchanged package reuses its
installation after integrity checks. With a sandbox, unpacked files sit directly in
`bundle/`; the sibling `.flax-install.json` at the application root records the archive
SHA-256. Different bytes are rejected while that bundle remains installed. The host must
close its Sessions and remove the old bundle before installing a different package,
keeping `data/` intact. Without a sandbox, the shared cache retains
`installed/<archive-sha256>/`. With a sandbox, `installationDirectory` defaults to
`sandbox.applicationPath` and `cacheDirectory` defaults to its `downloads/` child,
including remote ESM/JSON/Wasm imports from bundle, file and network entries. The
download and installation overrides remain independent settings.

The sandbox's only writable home is `data/`; sibling bundle/download files cannot be
opened through its File bindings. Creating the sandbox does not create `bundle` or copy
externally supplied resources. `FlaxSandbox.create(appsDirectory: ...)` replaces the
common apps parent. After all using Sessions, localStorage stores and outstanding loads
close, the host can remove the complete `applicationPath` for uninstall. External
resources and override locations need host cleanup. See
[application isolation](sandbox.md#configuration-and-identity).

### Packaged resources and independent HTTP resources

| Resource                                                   | Image API            | JSON API                           | Storage behavior                                            |
| ---------------------------------------------------------- | -------------------- | ---------------------------------- | ----------------------------------------------------------- |
| Built-in business resources                                | `Image.asset(key)`   | `getAssetBundle().loadString(key)` | Reads the selected Flutter assets                           |
| Prepared directory or installed local/remote .flax package | `Image.asset(key)`   | `getAssetBundle().loadString(key)` | Reads the selected business directory                       |
| Independent HTTP(S) URL                                    | `Image.network(url)` | `fetch(url)`                       | Separate requests; outside the Flax artifact download cache |

The same business code works for built-in assets and remote package contents:

```typescript
import { Image } from '@flax/flutter/widgets';
import { getAssetBundle } from '@flax/core/assets';

Image.asset('assets/images/flutter.png');

async function loadBundledConfiguration() {
  const text = await getAssetBundle().loadString('assets/data/example.json');
  return JSON.parse(text);
}
```

For an independent server resource, use an HTTP(S) URL:

```typescript
import type {} from '@flax/fetch/globals';
import { Image } from '@flax/flutter/widgets';

Image.network('https://example.com/flutter.png');

async function loadRemoteConfiguration(signal: AbortSignal) {
  const response = await fetch('https://example.com/config.json', { signal });
  if (!response.ok) {
    await response.body?.cancel();
    throw new Error(`HTTP ${response.status}`);
  }
  return response.json();
}
```

Business `fetch` requires the Dart `flax_fetch` package and a registered
`const FlaxFetchPlugin()` in the View/Session plugins, plus `@flax/fetch` for TypeScript
declarations. Keep other plugins required by the application in that list. Relative
Fetch URLs require the plugin's `baseUrl`. Give `Image.network` an absolute URL: it does
not inherit that baseUrl or a remote JS artifact's URL. Image.network and the
FlaxView.network artifact downloader do not require the Fetch plugin.

Image.network follows Flutter's native image-cache behavior; Flax adds no persistent
image cache. Fetch has no HTTP cache. FlaxView.network's `headers`, ETag handling,
`expectedSha256` and `cacheDirectory` apply to the application artifact only; configure
independent image/API requests separately. Keep each JSON-loading Promise in State and
pass it to FutureBuilder rather than issuing requests from build.

Pass a State-owned AbortController's signal to the JSON loader and abort it in dispose.
An HTTP error also needs to cancel its unread response body before reporting the error;
the example uses its request controller for that cleanup. The controller owns the JSON
Fetch only. Image.network retains Flutter's request and image-cache lifetime, so an
image transfer can finish after its page closes. Flax does not add per-page image
transfer cancellation.

The standalone [packaged resource page](../../examples/standalone/js/src/assets.ts) and
[independent HTTP page](../../examples/standalone/js/src/network_assets.ts) show both
paths. The scenario supplies a local HTTP server and checks decoded images, invalid
JSON/URLs, HTTP and image failures, and JSON cancellation before response headers and
during body reading, without relying on an external website.

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

`format` is required: `FlaxRemoteFormat.javascript` loads an ESM entry and its imported
dependencies, while `.package` uses FlaxPackage.install and the directory loader.
JavaScript responses require a JavaScript MIME type, and custom download adapters must
supply their final response URL. Resource reads use the built-in `assets/flax/` business
Bundle by default, or an explicit resource Bundle. Imported JSON is a module dependency;
it does not change the Bundle used by Flutter assets. Remote JS therefore uses the
resource version shipped with the host App by default; ship a remote package when code
and resources need to change together. Package mode rejects an external assetBundle.
`installationDirectory` only applies to package mode. The network JS source URL omits
query parameters, which may contain tokens.

`cacheDirectory` overrides the download cache root, defaulting to
`<ApplicationSupport>/flax/downloads/`. Its `requests/<key>.json` records contain
content digest, size, ETag, final URL and MIME type; `blobs/<sha256>` stores complete
immutable payloads. The request key includes URL, format, canonical request headers and
expected digest, so changing credentials or pinning a new digest does not reuse another
request's validator. Metadata and payload files are staged then renamed; a failed
download or digest check does not replace the previous record. Cached bytes are rehashed
before sending If-None-Match. Cache metadata uses internal format version 3; earlier
records trigger a full GET rather than reusing validators created without the redirect
policy. A valid 304 reuses the payload; missing ETag or corrupt cached bytes cause a
full GET. Only 200 and a validated conditional 304 are accepted.

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
Without a sandbox, the root defaults to `<ApplicationSupport>/flax/`; packages reside in
`installed/<archive-sha256>/`. Passing `sandbox: sandbox` selects its application root
and `bundle/`; application loaders pass this configuration through. Its completion
receipt lives beside `bundle/` in the application root and stores the archive hash
instead of adding a hash directory. Shared installations use a sibling
`installed/<package-sha256>.install.json` receipt. Neither layout adds installer files
to the package contents. Do not overwrite or delete live installations. A different
sandbox package requires the host to close all affected Sessions, remove the old bundle
and reload the application from the new package. Application data is separate and
retained. Discard old FlaxApplication/AssetBundle instances after replacement because
they cache source/resources. Ordinary shared caches continue to separate different
contents by archive hash.

Hashing, ZIP processing and installation validation run in a background isolate.
Requests for the same file/root join one in-flight operation; installation operations in
a root are serialized, with an OS file lock for cooperating processes. Each new
operation reads the archive to compute SHA-256; file size and modification time are not
content identity. A cache hit verifies the completion receipt, inventory digest, and
every expected file's size and SHA-256, including resource payloads. Hashing streams
file bytes in the installation isolate; it does not load the whole package into memory
or block the UI isolate. Reuse still reads the archived and installed bytes, so its cost
scales with package size; it avoids extraction and replacement.

The application root, its `data/`, or an interrupted `.install-*` directory does not
mean a package is installed. Only the requested archive's content directory with a valid
completion receipt and inventory can be reused. The identity is the selected application
or installation root plus the archive SHA-256, not only the app ID, version, filename or
URL. Call the idempotent `install` operation directly; its existing queue and file lock
keep validation and installation together. A mismatched sandbox receipt produces a
StateError requiring explicit replacement; missing or damaged completion records are not
reused. The hash remains the content identity even though it is no longer a sandbox
directory name.

A first installation validates normalized relative paths, duplicate/case-conflicting
names, regular files, supported compression and size limits (10,000 entries / 512 MiB
uncompressed). Symlinks, encrypted entries and explicit directory entries are rejected.
Files are streamed to a fresh staging directory with explicit size and CRC checks; the
ZIP library's verify flag alone is not relied upon. Every inventory SHA-256 and size is
then verified, resource references and required files are checked, and the source
archive is rehashed to reject concurrent replacement. The contents and receipt are
prepared separately in one staging directory. After the contents are renamed into place,
the sibling completion receipt is atomically renamed last. If publishing the receipt
fails, only that attempt's new contents are removed. Failed attempts clean up their own
staging tree. A process interruption may leave staging files or a bundle without a
matching receipt; neither is accepted as a completed installation.

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
