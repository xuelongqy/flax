# Task: Top-level Functions and Native Dialogs

Status: complete.

## Goal and scope

Generate selected public functions and call native showDialog with explicitly observed
Route ownership. UI protocol 13; native ABI 2 unchanged. No new dependencies, packages,
engines, or host APIs. Existing uncommitted work is retained.

## Implementation

Configuration and a separate function model reuse signature parsing, typed direct calls,
default omission, generic validation and data conversion. FlaxFunctionBinding registers
functions through one shared host entry. applyBoxFit and FittedSizes exercise ordinary
calls; AlertDialog and stable FlaxNavigatorObserver entries support native showDialog.

The observer retains the existing Route lease at didPush and releases it at actual
TransitionRoute.completed. Mounted callback results retain their independent ownership.
See [the decision](../decisions/0014-top-level-route-functions.md).

## Validation

- Independent function-only/re-export/plugin fixtures compile Dart and TypeScript;
  defaults, generics, explicit data and callback/Future signatures use real calls.
- Real Hermes/V8 tests exercise observers, source unmount, close before first dialog
  build, exit transitions, concurrent dialogs/sessions, failure recovery and structured
  results.
- applyBoxFit makes one JS-to-Dart host call; FittedSizes getters use normal references.
  Signal-only title updates leave the dialog component build count unchanged. Repeated
  dialog exit leaves no active subscriptions or pending Futures; close releases handles.
- `dart run melos run check` passed: 27 generator tests, 59 JS tests, Dart analysis,
  TypeScript checks, formatting, example/fixture bundles and documentation checks.
- `dart run melos run check:ui` and `dart run melos run check:ui:v8` passed in sequence.
  Each engine passed 39 runtime tests, 238 framework tests (including 14 new function
  and dialog cases), seven embedded example tests, three embedded macOS integration
  cases and release construction. Both embedded receipts include
  `generatedTopLevelDialog: true` and `completed: true`.
- Both commands verified native tests, reproducible FFI, external JIT/relocated AOT
  loading, npm tarball consumption, external standalone integration, and migrated
  release assertions after removing the source/build tree.
- The macOS driver failed to foreground the embedded apps automatically. Activating the
  actual test processes allowed the unchanged assertions to finish; no simulated
  lifecycle, skipped assertions or accessibility instrumentation was used.

Generated core Dart/TS files are 215,556/106,528 bytes; Material Dart/TS are
71,434/32,017 bytes. The embedded named-page bundle is 153,611 bytes. Top-level exports
create no per-function host registrations or function-reference wrappers. The existing
content host and Route lease are reused without an additional ownership layer.

Source fingerprints before and after validation recorded no removed source files. Native
sources, ABI declarations, pinned toolchain and both lockfiles are unchanged. Concurrent
host/WebSocket edits were retained. Generated output remains reproducible; temporary
fixtures, logs, copied consumers and application assets stay ignored.

## Handoff

Observer use is explicit; asynchronous Route creation and experimental dialog windows
are unsupported. Do not infer broad Flutter function support from the two selected
production functions. No commit, push or publication was performed.
