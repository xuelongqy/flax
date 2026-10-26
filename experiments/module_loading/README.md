# Default ESM entry responsiveness

Status: implemented and reviewed. Default entry loading is verified on macOS V8 and
physical iOS V8 jitless; the final review fixes have macOS runtime coverage and both
macOS and iOS engine builds.

## Goal and scope

All Flax application entries use native ESM without `formatVersion`, `entryFormat` or an
entry-format CLI flag. This includes single-file bundles. Module inventories remain
optional. File outputs keep factory HMR; directory outputs serve original ESM through
Vite. Low-level `FlaxJsRuntime.evaluate` remains Script evaluation for host/bootstrap
code. No legacy application-entry fallback or sandbox implementation is added.

## Acceptance and method

The runner builds a source-loaded iOS Release/AOT app using the maintained V8 jitless
engine, checks its signed engine product, removes its temporary source project, then
launches it on the device. It uses ordinary Flutter frame callbacks and real
`FrameTiming` values. A Flutter spinner and an existing Flax rAF loop animate while
another owning View loads. A third View starts 200 ms later to detect serialized
startup.

Three rounds compare a completed baseline, a 3-second top-level await, a static HTTP
import delayed 3 seconds and a dynamic HTTP import delayed 3 seconds. Two additional
cases load an original external HTTPS module and deliberately block JavaScript for 250
ms. Each retired runtime must finish disposal. The run records 14 cases, raw frame
timestamps, frame gaps, build/raster durations, rAF counts and sibling readiness.

The coarse guard rejects gaps over 500 ms or sibling startup over 1 second; these are
stall detectors, not smooth-frame acceptance budgets. The blocking control must produce
a wait-window gap of at least 150 ms. Frame measurements include startup and completion,
not only a quiet interval after loading. `waitingGapsMs` can still contain the third
View's SDK initialization.

```sh
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
export FLUTTER_ROOT=/path/to/maintained/flutter
export PATH="$FLUTTER_ROOT/bin:$PATH"
FLAX_CHECK_TARGET=ios-device-arm64 FLAX_CHECK_DEVICE=<device-id> \
  DEVICECTL_CHILD_FLAX_VERIFY_V8_JIT=1 \
  dart run experiments/module_loading/run.dart
```

Results are written to `build/module-loading/results.json`. Set `FLAX_ENTRY_TRACE=1` for
existing runtime-tracker spans of at least 4 ms; that diagnostic run writes
`build/module-loading-trace/results.json` and changes instrumentation overhead.

## Findings and limits

Await and HTTP I/O release the event loop. SDK initialization, source parsing, linking
and module evaluation still execute on the owning UI thread. A large module or a long
synchronous computation can therefore miss frames. The trace identifies an approximately
150 ms first SDK `require` call, also present in the baseline. Prewarming one SDK module
per startup stage did not reduce it because SDK dependencies contain cycles; that trial
was removed rather than retained as ineffective initialization work.

## Physical iOS results

Measured on 2026-10-26 with iPhone 14 Pro, iOS 27.0.1, V8 jitless and Flutter
Release/AOT. The final uninstrumented run passes all 14 cases and records 4,716 frames.
The signed product confirms static V8, no JS JIT entitlement, Extended Virtual
Addressing and a successful jitless execution probe. The measurement used Flax base
`8f123f3b9`, Flutter base `3f9e753074a` and the default-entry changes. It precedes the
final exception-path and transport review fixes described below.

| Scenario (three rounds)  | Entry ready    | Sibling ready | Full-window largest frame gap | Quiet-window largest frame gap |
| ------------------------ | -------------- | ------------- | ----------------------------- | ------------------------------ |
| Baseline                 | 273–282 ms     | 299–323 ms    | 191 ms                        | 8.6 ms                         |
| Top-level await, 3 s     | 3,245–3,290 ms | 263–322 ms    | 195 ms                        | 15.8 ms                        |
| Static HTTP import, 3 s  | 3,322–3,361 ms | 308–330 ms    | 193 ms                        | 27.0 ms                        |
| Dynamic HTTP import, 3 s | 264–281 ms     | 303–321 ms    | 175 ms                        | 8.6 ms                         |

The quiet window starts one second after each case's first recorded vsync. SDK startup
has completed by then; this derived view isolates network waiting and completion. It is
reported alongside the entire window, including SDK and sibling startup. Quiet-window
frame-gap P95 is 8.39–8.46 ms across these twelve cases. Full-window build P95 is
0.56–0.72 ms and raster P95 is below 0.5 ms. A static import's completion can still miss
a frame; network waiting does not imply that module parsing/evaluation is free.

The original external HTTPS module completes in 0.99 seconds while animation continues.
Its quiet-window maximum gap is 8.7 ms. The 250 ms synchronous positive control produces
a 311 ms wait-window gap (including overlapping sibling startup), confirming that the
probe detects a blocked UI thread. Trace spans separately record the loop itself at
approximately 250 ms and first SDK initialization at approximately 150 ms.

Raw measurements and signed-product hashes are in `build/module-loading/results.json`.
The baseline trace and the rejected prewarming trial are retained separately under
`.local/module-loading/`. The experiment does not establish arbitrary-module frame
budgets, Android timing, or sandbox isolation.

## Implementation and validation

Entry readiness releases the owning-View startup queue before awaiting the application.
Prepared SDK adoption rebuilds the host namespace index. Failed asynchronous entries
retire their Session; synchronous entry failures remain synchronous, and network
cancellation is checked again after download completion and reading source bytes.
Application variables have ESM scope; test probes needing external access explicitly
publish values through `globalThis`. The construction check accounts for two fixed
loader handles while retaining its business-object budget and zero-handle disposal gate.

- `check:ui:v8` passes: 1,103 framework tests (428 Core, 393 Canvas, 245 Material and 37
  other owner tests), 13 package-example tests, seven aggregate Widget tests and one
  native aggregate scenario. Its driver verifies all seven owner entrances, Session
  recreation and zero handles at disposal.
- `check:runtime` and `check:runtime:v8` each pass 58 runtime/module/joint-GC contracts,
  including 1,000 bridge cycles. The focused navigation gate also passes all 14 tests.
- `@flax/build` passes 82 tests and its type check. Application descriptors omit both
  removed fields; the module-directory Vite endpoint starts without a format flag.
- Workspace analysis, formatting and documentation checks pass. Both changed native
  engine targets build; the module extension retains ABI 2 without header changes.
- The final physical iOS run passes 14 cases with no reported errors. JSON measurements,
  source hashes, logs and the cleanup inventory remain in `build/module-loading/` and
  `.local/module-loading/`. Temporary application copies and their seven iOS Xcode
  DerivedData directories were removed; maintained engines and SDKs were preserved.

The initial all-owner run failed fixtures that relied on Script-global declarations.
Their failed assertions skipped cleanup and eventually exhausted the test process's V8
heap. Explicit global probes and the synchronous-close mounting fix resolve the
failures; the complete gate above then passes. This work does not add a Script fallback
or increase the heap limit.

Review reproduced and fixed four boundary failures: closing a prepared Session twice
from a plugin callback completed its cancellation twice; an entry throwing after
reentrant close lost its original JavaScript error and retained a native exception;
direct JavaScript downloads silently ignored a package-only installation directory; and
dependency downloads captured a mutable caller-owned headers map. Focused regressions
failed before each fix. The current gates above cover the fixes, including zero retained
native errors after close and stable same-origin authorization headers.

Android timing, physical iOS execution of these final exception paths and the full
repository release/package matrix were not rerun. The physical iOS frame results remain
the earlier measurement above; they are not new timing data for the review fixes.
