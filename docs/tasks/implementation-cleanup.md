# Implementation Cleanup

Status: implemented and locally verified on macOS arm64 with Hermes.

## Scope

Central session admission/retention/release, immutable callback scope, explicit result
handling, and per-node reuse of validated Widgets without binding or callback inputs.
The generator validates model categories and centralizes constructor/default emission.
Public application APIs, protocol 4, native ABI, packages and engine scope are
unchanged.

Framework, example and support tests remain inside the existing embedded Flutter host.
`example:bundle` and `ui:bundle` prepare separate assets; `ui:test` uses prepared Hermes
without a native build. The codegen package declares the existing Flutter test SDK for
executing generated default-parameter fixtures; no third-party version or lockfile
changed.

## Evidence

Baseline with Flutter 3.47.0 / Dart 3.13.0 on macOS arm64: `check` and 42 Hermes Flutter
tests passed before editing core behavior. Existing uncommitted source was snapshotted
under ignored `.local/refactor/before/`.

- Shared static Text validation/mount construction decreased from 3 calls to 1. Bound
  Text remains at 3 initial calls and 2 additional calls for a two-host frame update.
  Both mounted instances keep independent Element/State and builder-local signals.
- The same workload retains 6 subscriptions, uses 1 mount and 9 invalidation callbacks,
  and has 23 handles before unmount and 0 at engine disposal, matching the baseline.
- Builder regression: 26 steady handles, 100 rebuilds / 100 member calls, 1000
  constraint reads / 0 getter calls. Navigation regression: 31 steady handles and 2
  subscriptions after 15 cycles, with no pending Futures. These baselines remain
  unchanged.
- Nine generator tests passed, including generated Dart/TS compilation and actual
  execution of eight omitted-parameter combinations plus explicit null. That fixture
  emits 2699 Dart bytes and eight direct constructor calls; the deliberate combination
  cost remains documented. Existing production generated files remain identical.

Final acceptance on 2026-09-07 with the pinned toolchain:

- `dart run melos run check` passed: nine generator tests, sixteen Node tests, Dart
  analysis, formatting, TS checks/builds, both asset bundles, documentation and
  toolchain-only CMake configuration. Missing UI assets fail with the preparation
  command without writing files.
- `dart run melos run check:ui` passed: native ABI suite, fifteen runtime tests,
  standalone JIT and missing/corrupt-asset rejection, relocated AOT, 43 framework tests
  and two example Router tests.
- The real macOS integration driver recorded `embedded-navigation-pages-router` with
  `completed: true`. The release app built successfully (23.8 MB reported by Flutter).
  SDK foreground/plugin warnings were non-fatal; the driver result was verified.
- All 248 source files were identical before and after full acceptance. Both lockfiles,
  existing generated bindings/FFI and native implementation sources remain unchanged
  from the initial working-tree snapshot. Build and test artifacts remain ignored.

Logs and source-preservation evidence stay under `.local/refactor/`, including
`check.log`, `ui.log`, `baseline-cost.log`, `refactored-ui.log` and `source-check.json`.
GitHub Actions was not run remotely.

## Handoff

Continue Controller creation, listener ownership and disposal using the existing runtime
and session resource boundaries. No additional engine/platform support, publication or
performance budget is claimed. No commit, push or publish ran.
