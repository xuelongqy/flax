# Embedded Aggregate Host

This application is the minimal cross-module aggregate fixture. It loads the prepared
module inventory, mounts one `FlaxView`, and verifies that core plus selected plugins
can share a session without duplicate module initialization.

Package-specific Widget behavior belongs in `packages/<owner>/test/ui` and each package
example. This app intentionally does not duplicate layout, text editing, navigation,
storage, Canvas, or other owner scenarios.

`test/aggregate_test.dart` verifies plugin-driven module selection and session
recreation. `integration_test/app_test.dart` drives the same aggregate on macOS and
writes the `embedded-module-aggregate` receipt consumed by the test driver.

Use `dart run melos run check:aggregate` after preparing Hermes assets, or
`check:aggregate:v8` after preparing V8 assets. Full `check:ui` runs all UI-owning
package integrations first and this aggregate last.
