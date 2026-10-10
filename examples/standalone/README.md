# Standalone Flutter Host

The private flax_standalone application uses the maintained Flutter 3.47.6 / Dart 3.13.5
engine and macOS arm64 (macOS 15 or newer). main.dart initializes Flutter, loads
assets/app.js, registers core/Material bindings, and mounts an owning FlaxView. It adds
no MaterialApp, Theme, Navigator or Scaffold around the JS root.

The sibling JS project supplies the generated asset. From that project, run
`pnpm run bundle`; then use `dart run melos run standalone:run` from the repository root
after building the local Flax engine. See the [complete setup](../README.md).

Tests here cover this application only. Framework contract tests stay in their owning
packages. The release verification target is integration_test/app_test.dart and contains
its own completion receipt; the normal lib/main.dart release does not include tests.
Flutter input-channel injection verifies editing without claiming system IME coverage.

The app registers Fetch and WebSocket independently. FLAX_FETCH_BASE_URL supplies the
example server base for both; `/status` serves JSON and `/socket` echoes WebSocket
messages. State.dispose explicitly closes its page connection.

`integration_test/engine_gc_test.dart` reuses shared runtime/GC and original Widget,
State, callback, Future, Stream, FlaxView and extension receiver-view assertions. Run
`dart run tool/check_engine_application.dart debug|profile|release` from the root.
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
