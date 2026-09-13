# Standalone Flutter Host

The private flax_standalone application uses Flutter 3.47.2 / Dart 3.13.2 and macOS
arm64 (macOS 15 or newer). main.dart initializes Flutter, loads assets/app.js, registers
core/Material bindings, and mounts an owning FlaxView. It adds no MaterialApp, Theme,
Navigator or Scaffold around the JS root.

The sibling JS project supplies the generated asset. From that project, run
`pnpm run bundle`; then run `flutter run --no-pub -d macos` here after dependency and
native asset preparation. See the [complete setup](../README.md).

Tests here cover this application only. Framework contract tests stay in their owning
packages. The release verification target is integration_test/app_test.dart and contains
its own completion receipt; the normal lib/main.dart release does not include tests.
Flutter input-channel injection verifies editing without claiming system IME coverage.

The app registers Fetch and WebSocket independently. FLAX_FETCH_BASE_URL supplies the
example server base for both; `/status` serves JSON and `/socket` echoes WebSocket
messages. State.dispose explicitly closes its page connection.
