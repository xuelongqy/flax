# Native Tests

`runtime_test.cpp` exercises the real engine's exported C function table. It checks ABI
negotiation, object identity, stale/foreign IDs, synchronous nested callbacks,
recoverable exceptions, active destruction rejection, concurrent access rejection,
explicit Promise jobs, and repeated teardown with live references.

Tests use checks that remain enabled in Release builds. CTest runs the executable with a
timeout. The root `dart run melos run check:runtime` command builds and runs these tests
before Dart integration and package loading verification. Tests never substitute a stub
engine. Toolchain-only CMake configuration is not runtime coverage.

The same C ABI test body runs against either bootstrap, including serialized thread
migration with reference release and destruction on the new thread. V8 additionally runs
[its adapter lifecycle test](../../../flax_engine_v8/native/lifecycle_test.cpp), which
verifies foreground task execution only during entry and cancellation of queued/delayed
tasks. `value_id_test.cpp` checks namespace assignment, concurrent allocation and
permanent sequence exhaustion without an engine. It runs with each explicit runtime
CTest suite. `check:engines` validates both packaged engines through Dart, then runs
`engines_test.cpp` directly against their C ABI tables. It verifies foreign/stale ID
rejection without relying on Dart guards, unchanged local objects, and recreation.
Performance measurements belong to the separate engine benchmarks.
