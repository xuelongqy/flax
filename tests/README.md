# Cross-Package Tests

[runtime](runtime/) contains factory-parameterized Dart runtime and loop-closure tests
used by both engine packages. Its `engines.dart` fixture is copied into an independent
consumer for coexistence and AOT-host measurements by `tool/check_engines.dart`.

UI contract tests live with their owning packages. `ui:test` selects Hermes and
`ui:test:v8` selects prepared V8 assets, then discovers those package suites. Native
shared tests belong to [`packages/flax/native`](../packages/flax/native/README.md), and
engine-specific tests belong to the engine packages. Documentation checker tests live
with the [maintenance tool](../tool/README.md).
