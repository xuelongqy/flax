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

The default command uses FlaxView.bundle and reads built-in assets without extraction.
`--sandbox-assets` demonstrates FlaxView.directory with the copied directory. The other
local sources use the same business code and image/JSON keys:

```sh
dart run tool/standalone_run.dart --package-assets
dart run tool/standalone_run.dart --script-assets
```

Package mode copies the bundled `.flax` file to application support storage, then lets
FlaxView.package install/cache it under `<ApplicationSupport>/flax/installed/<digest>/`.
Script mode copies app.js and uses FlaxView.file with the built-in resource Bundle; no
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
built-in business resource Bundle; a remote package supplies its own PNG/JSON.
Programmatic startApplication arguments also demonstrate headers, cacheDirectory and
downloader injection. The scenario serves actual JS/package build outputs over loopback
HTTP, requires a request header, pins their digests, and checks cold 200/warm 304 loads,
decoded PNG variants, JSON and unchanged installation receipts. Download cache defaults
to `<ApplicationSupport>/flax/downloads/`; installation defaults remain unchanged.
Production URLs, credentials and update selection belong to the host application.
