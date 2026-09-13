# Task: Returned Callbacks, Native Widgets and Nullable Futures

Status: complete

## Goal and scope

Fix returned typed callback collections and nullable Future results. Add callable Dart
function wrappers and opaque native Widget references without changing native ABI,
Flutter matching, application disposal responsibility or the pinned toolchain. UI
protocol 11 replaces protocol 10.

## Acceptance criteria

- Generated Dart/TS callbacks work in both directions and reject unsupported signatures.
- Collection reads/removals/copies retain signatures, identity and graph validation.
- Returned native/JS builders retain Context and result resources until handoff.
- Native roots keep sessions alive until unmount, without an extra Widget boundary.
- Existing lifecycle, GC, signals, navigation and runtime checks remain valid.

## Results and validation

The six formal reproduction cases initially produced one pass and five failures. The
shared Future null handling and callback result paths now pass all six. Targeted Hermes
runs also cover function views, collection results, native Widget mounting, recovery,
listener identity, genuine GC observation and deterministic close cleanup.

A fixed loop made 40 shared function-host calls: 20 native calls and 20 JS-source calls.
The latter require 20 JS reentries. Tracked native JS handles remained 14 before/after
that loop. The cost includes typed conversion rather than an original-JS-function
shortcut. Ordinary listener registrations retain one callback handle as before.

Final validation passed on Flutter 3.47.2 / Dart 3.13.2, macOS arm64:

- `dart run melos run check`: 24 generator tests, 36 Node tests, reproducible generated
  output, Dart/TS analysis, formatting, documentation links and CMake configuration.
- `dart run melos run check:ui`: native ABI test, 28 runtime tests, standalone JIT and
  relocated AOT (including missing/corrupt asset checks), 189 real Hermes framework
  tests, 6 example tests, two macOS integration scenarios and release build (25.7 MB).
- The driver receipt reports completed and returnedNativeWidgets as true. The release
  build and test driver both exited successfully.
- All 360 nonignored source files had identical hashes before and after those checks.
  This handoff and the final contract clarification were updated afterward and passed
  scoped documentation checks.

The ordinary-callback regression initially exposed an extra cached helper. Returned
function branding now avoids that helper for ordinary JS functions, and existing handle
baselines pass unchanged. A separate test verifies a native Center retaining its
JS-built child until adoption; no extra Element is inserted for the returned value.

Local logs and source fingerprints are in ignored .local/returned-callbacks. Fixture
bundles and the Dart source embedded by the macOS integration target remain under
ignored .dart_tool/flax/ui; production app assets do not gain the fixture.

## Handoff

No commit, push, package publication or dependency change. Current contracts are in
[interop](../architecture/interop.md#returned-functions-and-widgets) and
[ownership](../architecture/objects.md). Cross-language cycles still require explicit
disconnection or session close. Optional/named/generic callbacks, native Route
references and Promise-to-Future remain unsupported. Widget collections expose reads,
copies and removal, but JS insertion/replacement and callbacks transporting Widget
collections are rejected until arbitrary Dart retention of JS-built subtrees has an
explicit ownership contract.
