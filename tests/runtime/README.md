# Shared runtime tests

`runtime_contract.dart` and `loop_closures_contract.dart` accept a runtime factory and
are invoked by each engine package's integration tests. They exercise real native
assets, not mocks. `engines.dart` is a standalone consumer fixture for same-process
coexistence and fresh-process AOT-host measurements; run
`dart run melos run check:engines` after building both engine assets.
