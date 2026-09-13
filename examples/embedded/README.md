# Embedded Flutter Host

`lib/main.dart` loads the JS asset and creates two independent FlaxViews under a native
Material shell. Only the macOS platform project is enabled, targeting macOS 15+ arm64.
See [setup and validation](../README.md).

`integration_test/app_test.dart` drives the real example on macOS;
`test_driver/integration_test.dart` collects its results. Test hooks stay in fixtures.

The application owns the shared navigation session above its Navigator. MiniAppPage owns
a session for its JS-created nested Navigator. Host Material is explicitly above the
Navigator so minimal JS pages inherit it. The integration scenario covers both flows in
addition to the existing reactive regions.

`lib/pages.dart` owns the named-entry session, URL parser, and native Router delegate.
Package-local framework tests cover factory/parameter identity, Page callbacks and
resource replacement. This aggregate app keeps Router and mixed-package behavior tests,
and the macOS integration scenario exercises the same page bundle and host Router.

The Text input entry opens the named [textEditing page](js/src/text_editing.ts). It
shows single and multiline Material fields, editing snapshots, complete value
replacement, clear, controller replacement and reentry. The macOS test injects
composition through Flutter's input channel; system IME behavior is not certified by
that test.

The Flutter State demo keeps a named component session while the host changes Theme.
Framework component tests use independent fixtures; example tests cover its input,
configuration updates and navigation.
