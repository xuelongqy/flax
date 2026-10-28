# Historical runtime fixtures

These factory-parameterized Dart fixtures record the former standalone SDK deployment.
The independent `engines.dart` consumer is retired. Current runtime, loop-closure and
session-isolation contracts belong to `flax_test` and use the maintained V8 Flutter
engine. Run `dart run melos run check:runtime`; no engine-selection option is needed.
