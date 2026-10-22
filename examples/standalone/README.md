# Standalone Flutter Host

The private flax_standalone application uses the maintained Flutter 3.47.6 / Dart 3.13.5
engine and macOS arm64 (macOS 15 or newer). main.dart initializes Flutter and host
plugins, then mounts FlaxView.bundle, which automatically reads `assets/flax/flax.json`
and its JS entry. It adds no MaterialApp, Theme, Navigator or Scaffold around the JS
root.

The details route returns `Map<String, Object?>`. Its JS pop call selects
`DartMapInput<string, unknown>` so a plain object becomes that Dart map type; the push
result is read as `DartMap<string, unknown>`. This follows ordinary function conversion:
the separate pop call cannot infer a route's result type from its Navigator.

The sibling JS project supplies the generated asset. From that project, run
`pnpm run bundle`; then use `dart run melos run standalone:run` from the repository root
after building the local Flax engine. See the [complete setup](../README.md).

The **Open assets** page displays a bundled PNG and reads `assets/data/example.json`
through the generated Flutter bindings. `pnpm run bundle` copies resources from
`js/assets/` into the independent `assets/flax/` business directory and generates
`flax.json` and the portable `flax.assets.json` index beside `app.js`. It also writes
`assets/flax.flax`, including a file inventory for local installation. Its `id` is
`main`; version and description come from `js/package.json`. The pubspec declares the
generated directories; Flutter builds the native image-variant manifest. The PNG reuses
this example's existing Flutter application icon.

Resource keys such as `assets/images/flutter.png` start at the application resource
root, with no leading slash or source-file-relative `./` or `../`. Images use
`Image.asset`, and JSON uses `getAssetBundle().loadString` from `@flax/core/assets`.
Both follow the Session's native Flutter asset bundle. To copy the application JS, PNG
variants and JSON into application support storage and run from that directory:

```sh
dart run tool/standalone_run.dart --sandbox-assets
```

Run this command from the repository root. The sandbox JSON displays a different
message; the JS resource keys and native Image API stay the same. Refreshing the demo
removes stale files from its managed `assets/` directory. An unrelated nonempty
destination, or a directory with another package id, is rejected. This is a
demonstration copier, not a hotfix installer. The normal command loads built-in assets
directly through `FlaxPrefixedAssetBundle`; it does not copy or extract them.

The default roots are `assets/flax/` for built-in resources and
`<ApplicationSupport>/flax/` for the sandbox demo. Both contain `flax.json` and `app.js`
with the same logical `assets/...` resource layout. No id/version directory is required.
To customize the built-in root, set `FLAX_ASSET_PREFIX` when running the command and
update the asset directories in `pubspec.yaml` to match. The bundle script uses the same
variable. `FLAX_SANDBOX_DIRECTORY` selects an exact sandbox destination. Both are
optional; public Bundle constructors also accept explicit paths. See the
[application resource contract](../../docs/architecture/applications.md#application-resources).

Tests here cover this application only. Framework contract tests stay in their owning
packages. The release verification target is integration_test/app_test.dart and contains
its own completion receipt; the normal lib/main.dart release does not include tests.
Flutter input-channel injection verifies editing without claiming system IME coverage.

The app registers Fetch and WebSocket independently. FLAX_FETCH_BASE_URL supplies the
example server base for both; `/status` serves JSON and `/socket` echoes WebSocket
messages. State.dispose explicitly closes its page connection.

`integration_test/engine_gc_test.dart` reuses shared runtime/GC and original Widget,
State, callback, Future, Stream, FlaxView and extension receiver-view assertions. Run
`dart run tool/check_engine_application.dart debug|profile|release` from the root. The
fixed suite also includes the binding selection-parity fixture: Widget setters and
interface callback ownership, ordinary business member names, Never failures, and opaque
Core values with Record/callback cycle collection. Fixture bundling alone does not
register a test in this application; new acceptance cases must join this entry point.
Profile adds measured GC/frame/RSS workloads; release launches the signed AOT artifact
after removing its source consumer and checks actual V8 JIT. Normal application builds
keep the `lib/main.dart` entry and do not contain these tests.

The same engine GC target runs on Android arm64 with
`FLAX_CHECK_TARGET=android-arm64 FLAX_CHECK_DEVICE=<adb-id> dart run tool/check_engine_application.dart debug|release`.
Set `ANDROID_HOME` and build the matching Android engine and macOS host tools first. The
gate installs the audited APK on the selected emulator or physical device and captures
complete test results; release verifies Dart AOT. The API 37 emulator and a Pixel 4
running Android 13 pass these debug and release checks. This is focused engine/GC
correctness acceptance, not all Android platform UI coverage or GC/frame performance.

`dart run tool/check_engine_restart.dart` starts the real application with live Dart/JS
cycles, performs three hot restarts, checks fresh Context and callback state, and stops
the same app. Its receipt is `build/engine-hot-restart.json`. Local staged applications
use ad-hoc signatures and a temporary library-validation exception. This verifies local
execution, not Developer ID distribution signing.

## Automatic loading examples

| Input                | Example entrance                                           | Default resource source                                    |
| -------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| JS string            | `startApplication(source: source)`                         | Built-in `assets/flax/`                                    |
| Built-in application | Default command, `FlaxView.bundle`                         | Built-in `assets/flax/`, including flax.json and its entry |
| Prepared directory   | `--sandbox-assets`, `FlaxView.directory`                   | The supplied directory                                     |
| Local package        | `--package-assets`, `FlaxView.package`                     | Its installed directory                                    |
| Local JS file        | `--script-assets`, `FlaxView.file`                         | Built-in `assets/flax/`                                    |
| Remote JS            | `--remote-js`, `FlaxView.network` with javascript format   | Built-in `assets/flax/`                                    |
| Remote package       | `--remote-package`, `FlaxView.network` with package format | Its installed directory                                    |

The
[Dart constructor examples](../../docs/architecture/applications.md#application-loading-modes)
show every entrance with the required runtime factory and binding registry. Explicit
assetBundle arguments on script entries are used unchanged. A script's directory or URL
does not select companion resources; choose a package when code and resources must be
updated together.

The default command uses FlaxView.bundle and reads built-in assets without extraction.
`--sandbox-assets` demonstrates FlaxView.directory with the copied directory. The other
local sources use the same business code and image/JSON keys:

```sh
dart run tool/standalone_run.dart --package-assets
dart run tool/standalone_run.dart --script-assets
```

Package mode copies the bundled `.flax` file to application support storage, then lets
FlaxView.package install/cache it under `<ApplicationSupport>/flax/installed/<digest>/`.
Script mode copies app.js and uses FlaxView.file's default built-in business Bundle; no
flax.json is required by that entry. The scenario validates built-in, directory, package
cold/warm cache loads and single-file entrances, including actual decoded image pixels,
JSON and native image variants. The package cache has no automatic rollback or cleanup.
Damaged completed installations fail without overwriting live files.

Remote modes use the same constructors and resource rules:

```sh
FLAX_NETWORK_URL=https://example.com/app.js dart run tool/standalone_run.dart --remote-js
FLAX_NETWORK_URL=https://example.com/app.flax dart run tool/standalone_run.dart --remote-package
```

Optionally set `FLAX_EXPECTED_SHA256` to a trusted artifact digest. Remote JS uses the
built-in business resource Bundle without manually supplying it; a remote package
supplies its own PNG/JSON. Programmatic startApplication arguments also demonstrate
headers, cacheDirectory and downloader injection. The scenario serves actual JS/package
build outputs over loopback HTTP, requires a request header, pins their digests, and
checks cold 200/warm 304 loads, decoded PNG variants, JSON and unchanged installation
receipts. Download cache defaults to `<ApplicationSupport>/flax/downloads/`;
installation defaults remain unchanged. Production URLs, credentials and update
selection belong to the host application.

Programmatic `startApplication(source: jsSource)` demonstrates the source-string entry
with the same default business Bundle. The scenario verifies source/file/network-JS
images and JSON without passing an assetBundle. A custom FLAX_ASSET_PREFIX still selects
an explicit prefixed Bundle in the example. Host-root resources require an explicit
assetBundle, such as rootBundle; a script's disk location does not select resources.

The sandbox demonstration selects `<ApplicationSupport>/flax/` directly. The directory
API itself requires a caller-supplied Directory and reads it in place. Package
installation uses `<ApplicationSupport>/flax/installed/<package-sha256>/`; network
artifact downloads use `<ApplicationSupport>/flax/downloads/requests/` and `blobs/`.
`installationDirectory` replaces the installation root and still gets an
`installed/<sha256>/` child. `cacheDirectory` replaces the downloads root. These
settings are independent. See the
[complete location table](../../docs/architecture/applications.md#resource-and-cache-locations).

## Independent network images and JSON

**Open assets** always uses Image.asset and the Session's business Bundle, whether the
application came from built-in assets, a sandbox directory, or an installed remote
package. **Open network assets** demonstrates a separate server request through Fetch,
then displays the response's absolute image URL with Image.network. It does not read the
business Bundle or use the application artifact cache.

To use the network page manually, run a server that responds to `/assets/config.json`
with JSON such as:

```json
{
  "message": "JSON loaded over HTTP",
  "imageUrl": "http://127.0.0.1:8080/assets/flutter.png"
}
```

Serve a PNG at that image URL, then launch from the repository root:

```sh
FLAX_FETCH_BASE_URL=http://127.0.0.1:8080/ dart run tool/standalone_run.dart
```

The existing host registers FlaxFetchPlugin and forwards that base URL to it. The
relative JSON URL uses the plugin's baseUrl; Image.network uses the absolute URL from
the JSON response. The page checks HTTP errors and JSON fields, keeps one loading
Promise in State, and aborts a pending request on disposal. The application scenario
provides both endpoints on a loopback server and verifies JSON, actual HTTP requests,
and decoded PNG pixels, without a public network dependency.

HTTP failures abort the unread JSON response immediately, while the error remains
visible on the page. Leaving the page aborts JSON loading even while waiting for headers
or reading its body. The scenario exercises these cases along with invalid
JSON/fields/URLs and a failed image request. Image.network uses Flutter's request and
cache lifetime independently of that controller; its transfer can continue after leaving
the page.

FlaxView.network's request headers, SHA256 check, ETag and download cache apply only to
the JS/.flax artifact. Independent images use Flutter's native image cache, and Fetch
has no HTTP cache. Configure credentials and any persistent caching for those requests
separately. See the
[resource API comparison](../../docs/architecture/applications.md#packaged-resources-and-independent-http-resources).
