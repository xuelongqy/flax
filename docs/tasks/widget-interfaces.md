# Task: Widget Interfaces and Material Page Shells

Status: complete

## Goal and scope

Generate fixed Widget interface configuration and real Scaffold/AppBar/PreferredSize
bindings. Retain local descendant signals, native type/key matching and application
ownership. Protocol 12 replaces 11; the native ABI and dependencies are unchanged.

## Results and validation

The generator and constructor/native-Widget baselines passed before implementation.
Independent interface fixtures compile Dart and TS, including interface inheritance and
reversed cross-module configuration order. Node tests pass. Targeted real Hermes tests
verify native preferred sizes, private theme-height behavior, local title updates,
parent configuration updates, native Widget passback, state retention and error
recovery. The example test verifies a JS-owned Scaffold, generated back navigation and
reentry.

A native consumer reading an unmounted old interface configuration in didUpdateWidget
first failed because node cleanup cleared its cached value. Fixed configuration now
follows the proxy's Dart lifetime while bridge resources still release on time; the
regression verifies old and current values independently.

An instrumented fixture performed 100 interface getter reads with zero extra bridge
calls, zero additional Widget constructions and an unchanged 13-handle baseline. First
use of the custom State loads six existing shared lifecycle helpers. After that warm-up,
30 round-trip toolbar replacements kept 30 tracked handles and 3 subscriptions; close
cleared both. These are deterministic ownership checks, not claims about GC timing.

Final local verification passed on Flutter 3.47.2 / Dart 3.13.2, macOS arm64:

- `dart run melos run check`: 26 generator tests, 37 Node tests, reproducible generated
  output, Dart/TS analysis, formatting, documentation checks and CMake configuration.
- `dart run melos run check:ui`: one native ABI test, 28 runtime tests, independent JIT
  and relocated AOT (including missing/corrupt assets), 195 real Hermes framework tests,
  7 example tests, two macOS integration scenarios and a 25.7 MB release build.
- The integration receipt records widgetInterfacesAndScaffold and completed as true.
- All 371 nonignored source files had identical hashes before and after complete checks.
  This final handoff was updated afterward and passed scoped documentation checks.
- Native sources, ABI, dependency manifests/lockfiles and the pinned toolchain did not
  change. Temporary bundles, generated plugin fixtures, logs and build assets are
  ignored.

Generated core bindings are 200,077 Dart / 104,080 TS bytes; Material bindings are
57,816 Dart / 27,293 TS bytes. Scaffold, AppBar and PreferredSize each need one direct
constructor call branch. The final pages bundle is 149,155 bytes. Logs and source
fingerprints are in ignored .local/widget-interfaces.

## Handoff

All planned checks are complete. The existing scaffold named page demonstrates fixed
interface configuration and descendant signals. Broader interface capabilities and
independent application tooling remain separate work.

The [contract](../architecture/widget-interfaces.md) and
[decision](../decisions/0011-widget-interface-configuration.md) describe fixed arguments
and the selected interface boundary. No commit, push or publication is requested.
