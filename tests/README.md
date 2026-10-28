# Cross-Package Tests

[runtime](runtime/) retains factory-parameterized fixtures from the former standalone
SDK deployment. Current runtime and loop-closure contracts belong to `flax_test` and run
through the maintained V8 Flutter engine with `dart run melos run check:runtime`.

UI contract tests live with their owning packages. `ui:test` discovers and runs those
suites with V8. Native shared tests belong to
[`packages/flax/native`](../packages/flax/native/README.md), and V8-specific tests
belong to `flax_engine_v8`. Documentation checker tests live with the
[maintenance tool](../tool/README.md).
