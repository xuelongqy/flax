# Task: Staged Session Startup Experiment

Status: validated macOS arm64 V8 experiments retained as a local checkpoint; not a
production rollout.

The checkpoint is based on main `a6ea2404b`. Earlier no-commit statements below describe
the original measurement runs. Latest rebase acceptance passes 131 focused tests and
five gallery tests. Native frameworks, private compiler outputs and detailed receipts
stay outside Git; the executable gallery shell source is included.

## Goal and scope

Measure the full embedded gallery while an independent native Flutter animation runs.
Use a new workspace-volume worktree, `feat/startup-staging-experiment`, based on Flax
`c3603d910b6e4257368f58c1d7207d2fa5a41f76`. The maintained Flutter checkout remains
`183508ece44ae312a7339bd2ede245e16cf485f3`; reuse its debug and release engines. No
commit, push, CI trigger, engine rebuild, platform change, or main-checkout edit.

The workload has all seven gallery entrances, 73,713 bytes of application JS, and 29
prepared module scripts totaling 5,978,958 bytes. Nothing was omitted to improve startup
measurements. Native macOS applications were built in debug and release/AOT.

## Acceptance criteria

- Compare synchronous startup, lazy proxy initialization, staged startup, and both.
- Measure the first Session and subsequent Sessions through the first Flutter frame.
- Keep the native animation alive; measure wall-clock frame gaps and event-loop gaps.
- Verify all gallery entrances, cancellation during preparation, Session cleanup,
  ordinary/generic JS inheritance, overrides, super, isolation, and joint collection.

## Approach

The prototype is intentionally small and stays in the shared paths:

1. `defineProxyBase` retains type registration and selected super descriptors. An
   experimental JS flag defers copying native fallback members until the first proxy
   construction. A WeakMap stores this per-Context metadata. Ordinary native values
   continue to use the existing object-prototype path. Generated class APIs are not
   individually patched; metadata factories and module factories remain eager where they
   were eager before.
2. `FlaxSession.prepareForExperiment()` prepares an explicit Session before mounting.
   The synchronous control and staged variant consume the same `loadSteps` iterator. The
   staged variant yields between complete module registrations and other startup phases
   after a 4 ms budget, using `endOfFrame` followed by a Dart event-loop yield. It never
   suspends a JS stack, host callback, constructor, or a single module script.
3. Incomplete startup blocks normal checkpoints. Cancellation between phases closes the
   partially initialized runtime, and finishing registration enables checkpoints. This
   fixes an experimental failure where sweeping ran before JS helpers existed.

The 4 ms value is a scheduling threshold checked _after_ each phase, not a guarantee
that a phase takes at most 4 ms. The benchmark's native animation runs throughout asset
loading and startup. The app verifies every entrance before unmounting, closes every
Session, and checks zero tracked handles at runtime disposal.

## Results and validation

There are 24 fresh process launches: three per build/mode, alternating order, with three
Sessions per process. All 72 Session samples completed with seven entrances, no reported
errors, and zero handles at disposal. Compiler and test processes were stopped before
performance sampling. OS caches were not flushed.

All times below are milliseconds. Load is Session construction through the first Flutter
build/layout/paint submission; it is not OS process startup or a presentation fence.
Assets are timed separately: debug median 214.3 ms (187.3–324.0), release median 28.8 ms
(15.8–48.2). Thus startup work was not silently moved before the timer.

The two gap columns report the median of each sample's _largest_ observed gap. Heartbeat
gaps use a 2 ms periodic Dart timer, including its normal period and any scheduler/GC
delay. Native frame gaps use wall-clock persistent frame callbacks while the native
animation is active (idle intervals were approximately 8.3 ms). Gaps intersecting the
load window include the first delayed callback after the first frame. They measure
responsiveness, not CPU execution time. Raster timings and build durations are recorded
separately; build duration alone misses work done between frames.

### First Session in a fresh process (three samples per row)

| Build   | Mode     | Load to first frame | Maximum heartbeat gap | Maximum native frame gap |
| ------- | -------- | ------------------: | --------------------: | -----------------------: |
| debug   | baseline |              4651.5 |                3772.0 |                   4652.8 |
| debug   | lazy     |              4631.2 |                3766.9 |                   4633.5 |
| debug   | staged   |              5302.3 |                2256.8 |                   2244.2 |
| debug   | combined |              5449.9 |                2287.7 |                   2288.6 |
| release | baseline |               338.6 |                 335.1 |                    340.5 |
| release | lazy     |               308.7 |                 307.6 |                    323.0 |
| release | staged   |               453.1 |                 199.3 |                    235.5 |
| release | combined |               428.8 |                 181.8 |                    216.6 |

### Subsequent Sessions (six samples per row)

| Build   | Mode     | Load to first frame | Maximum heartbeat gap | Maximum native frame gap |
| ------- | -------- | ------------------: | --------------------: | -----------------------: |
| debug   | baseline |               392.3 |                 396.7 |                    397.9 |
| debug   | lazy     |               377.9 |                 378.9 |                    384.0 |
| debug   | staged   |               757.9 |                 210.8 |                    281.9 |
| debug   | combined |               743.0 |                 207.6 |                    294.4 |
| release | baseline |               297.6 |                 295.6 |                    302.7 |
| release | lazy     |               278.2 |                 277.4 |                    284.2 |
| release | staged   |               422.8 |                 203.6 |                    238.8 |
| release | combined |               407.7 |                 185.8 |                    219.8 |

For the first release Session, combined startup reduces the median largest heartbeat gap
by 45.7% and the largest native frame gap by 36.4%, while increasing load time by 26.6%.
Actual largest frame gaps across the three release launches were 331.4–354.5 ms for
baseline and 212.0–233.4 ms for combined. Debug combined reduces the median largest
frame gap by 50.8%, while increasing first load time by 17.2%.

Lazy initialization alone reduces the release first-load median by 8.8% (338.6 to 308.7
ms) and subsequent-load median by 6.5% (297.6 to 278.2 ms). The debug first-load change
is only 0.4%, within ordinary run variation. Combined debug results do not establish a
benefit over staging alone. Three fresh samples per mode are exploratory, not a stable
cross-device performance claim; no time threshold is asserted by tests.

### Remaining blocking work

Debug spends about 3.1 seconds before runtime creation on first access to Dart binding
registries and generated declarations/JIT work. Staging still leaves a roughly 2.3 s
block. In release, the aggregate JS entry alone takes a median 187.3 ms in baseline and
171.4 ms combined. Entry evaluation includes synchronous dependency-factory execution.
The staged scheduler cannot interrupt that call. The final first Widget frame also
remains approximately 41 ms in the combined release sample.

Therefore the prototype improves responsiveness but does **not** deliver smooth loading:
even release retains more than 200 ms between native frames. Total latency also rises
because the framework gets time to render between stages.

### Correctness

- 45/45 real V8 debug regressions: proxy properties/operators, typed generic inheritance
  and async super, module isolation/failure cleanup, weak references and actual joint
  cycle collection. The lazy flag was enabled in the shared test runtime factory.
- 5/5 complete-gallery tests: all seven module entrances, controls and navigation,
  recreation, staged mount/unmount, and cancellation between module registrations.
- 86/86 Core JS unit tests; source build/type compilation and scoped Dart analysis pass.
- Release/AOT has the real-gallery and zero-handle startup/close checks above. The full
  weak-reference/joint-cycle contract was run in debug, not repeated in release.

Initial pilot failures and test-harness cleanup failures are retained in local logs.
They are excluded from the performance matrix. The test cleanup uses the existing
`waitGalleryIO` helper in the same test clock that created storage work. A first pilot
used AnimationController listeners, which underreported frame gaps; final measurements
use persistent frame callbacks. All final matrix rows use the corrected probe.

## Handoff

Do not directly merge this experiment as a finished loading solution. Keep the
synchronous API unchanged until a production async-loading/cancellation contract is
selected. Lazy fallback members can change prototype reflection before the first proxy
construction; passing inheritance/override tests does not prove reflection or hot-reload
compatibility. Neither HMR nor Android/iOS/Hermes was tested in this turn.

The subsequent [complete-gallery handoff](../../experiments/gallery_handoff/README.md)
moves pure JS module initialization to a worker before UI adoption. Its main-GC recheck
rebases onto Flax `74dab9f76` and uses maintained Flutter `7073a170189`. The updated GC
trigger filter does not materially change the controlled startup observations. A private
empty-heap fast path avoids waiting for V8 during ordinary Dart GC without unregistering
the collector; nonempty-heap joint tracing remains unchanged. The next startup targets
are repeated adoption-source encoding/comparison and coarse Dart declaration
initializers. Neither handoff variant permits moving live Dart/Widget/Context calls to a
worker.

The combined follow-up validates immutable source identity and preparing the base-host
installer without executing its Dart connection. Thirteen fresh native processes / 26
Sessions pass 428 top-level assertions. In the matched AOT build, cold release largest
activation-frame gaps fall from 316 ms synchronously to 46–47 ms; subsequent Sessions
still reach 60–62 ms. The remaining synchronous first-widget build, debug
declaration/JIT stalls, and higher total cold-load time prevent calling this a
frame-budget solution. Background Dart metadata warming is rejected because its own
debug phase still stalls UI. See the
[follow-up results and limits](../../experiments/gallery_handoff/README.md#combined-preparation-follow-up).
No generated class binding, public JS API, maintained engine output or main checkout is
changed; the prototypes remain uncommitted in this worktree.

The first-widget follow-up separates nested JS, Dart argument conversion, actual Dart
factories and Flutter work using exclusive spans. In six matched AOT processes / 12
Sessions, all 204 assertions pass. Immutable argument-name snapshots reduce the plain
first build from 34.5–39.1 ms to 29.0–30.4 ms; the two-sample median improves by about
19%. The separate test-tracker change removes repeated weak-slot scans and must not be
counted as a production application speedup. Dart factory execution is below 1 ms;
synchronous argument conversion and boundary work inside build/layout remain dominant.
The refreshed checks pass 62/62 V8 regressions, 87/87 Core JS tests and 5/5
complete-gallery tests. See the
[decomposition and limits](../../experiments/gallery_handoff/README.md#first-widget-build-decomposition).
These measurements still exceed a 60 Hz frame budget; mobile engines and HMR are not
validated by this follow-up. Receipts and input hashes are in `.local/first-build/`.

The parameter-transport follow-up batches immutable provided arguments through a
borrowed receiver and combines typed reference identity queries. The final matched
release matrix has ten processes / 20 Sessions / 340 passing top-level assertions. Plain
first-build medians improve from 33.55 to 25.57 ms, and subsequent builds from 43.29 to
32.85 ms. The 16.7 ms target remains unmet. The current checks pass 67/67 V8
regressions, 87/87 Core JS tests and 5/5 gallery tests. Conversion preserves original
Dart errors as well as nested-read cleanup. See the
[matched results and boundaries](../../experiments/gallery_handoff/README.md#batched-parameter-transport-and-typed-references)
and `.local/argument-bridge/` for retained evidence. The native allocator prototype is
not adopted; maintained engines and SDKs are unchanged.

The Widget metadata follow-up keeps one shared weak-key text cache and the existing
foreign/legacy fallback. Twelve matched release processes / 24 Sessions pass 408
assertions with the same 1,347 Elements and 205 Flax hosts. Property reads fall from
1,666 to 1,054; plain first/subsequent medians move from 29.445/39.595 to 28.376/38.349
ms, with overlapping ranges and slow cold samples on both sides. The 16.7 ms goal
remains unmet. Additional native spans identify function-call boundaries and owned
result decoding as larger costs than Dart factories or host adoption. Focused checks
pass 69/69 V8, 88/88 JS and 5/5 gallery tests. See the
[metadata results and remaining costs](../../experiments/gallery_handoff/README.md#widget-metadata-and-remaining-bridge-costs)
and `.local/frame-hotpath/`. Main, maintained engine outputs and SDKs are unchanged.

The result-entry follow-up combines JS call/property results with their native value
description, reusing the original decoder and joint-GC ownership. It removes 2,392
separate inspect crossings from the traced first frame. Twelve matched release processes
/ 24 Sessions pass 408 checks; plain first/subsequent drawFrame medians move from
31.757/37.125 to 28.178/34.090 ms. Ranges overlap, frame-gap and RSS measurements do not
establish uniform improvement, and 16.7 ms remains unmet. The opt-in private engine path
passes 31 runtime and 67 focused UI/GC regressions. A cold-cache mixed-file test run
reproduces missing compiler fixed entries on the maintained tester with the original
return path. The [fixed-entry follow-up](../../experiments/fixed_entries/README.md) now
repairs the serialized dependency cache and delta output through shared library-change
notifications. Verified private debug/release compiler artifacts pass their JIT/AOT
contracts; cold original, cold combined and warm combined mixed-file runs each pass
102/102 tests. See the
[combined result measurements](../../experiments/gallery_handoff/README.md#combined-engine-result-entries)
and `.local/engine-results/`. Only private engine copies are linked; maintained engines,
SDKs and main remain unchanged. No commit or push is made.

The fixed-entry release recheck passes 123 value/ownership assertions and 204 gallery
checks across six processes / 12 Sessions. Number/string call medians retain reductions
of 14.4%/10.7%, while first/subsequent drawFrame medians are 25.029/32.826 ms for the
original result path and 25.219/32.369 ms for the combined path. Overlapping ranges do
not establish a stable frame improvement; 16.7 ms remains unmet. The application AOT
bytes and prepared JS hashes are unchanged. Full receipts and compiler identity checks
are in `.local/fixed-entry/`; the repair is kept as an experimental compiler patch.

The
[hot reload review](../../experiments/fixed_entries/README.md#review-and-actual-hot-reload)
verifies three actual Dart VM reloads on each result path, preserving State/runtime
identity through body/default/optional-parameter edits (44 checks per path), plus 3/3
real Vite/WebSocket HMR cases. Both weak peers collect before runtime close after
dropping their independent roots. A diagnostic-start exception formerly bypassed result
cleanup; the shared decoder repair passes four tests that fail before it, without manual
release of the failed result. Private macOS XCFramework selection is verified separately
from the tester. Final cold-cache mixed-file acceptance passes 109/109, with scoped
analysis and documentation checks clean. Receipts and retained setup failures are in
`.local/review-hmr/`. The experiment is rebased onto Flax main `a9c1ae88b`, using
Flutter `bb7e27654` and its V8-only policy. All 84 pre-rebase working files are restored
with identical hashes. Post-rebase debug checks relink only private runtime/joint-GC
objects; installed engines remain unchanged. Earlier measurements retain their original
baseline. The experimental changes are uncommitted.

The current-main release follow-up refreshes the complete gallery against that rebased
baseline and retains one shared change: known binding IDs no longer eagerly decompose
every SDK class Type. The eight final comparison processes / 16 Sessions pass 272
checks; focused acceptance passes 131 runtime/compiler/UI/provider/generic/GC tests and
five gallery tests. Entry activation falls from 15.345/12.552 ms to 8.620/8.630 ms for
first/subsequent Sessions, but drawFrame and maximum UI gap do not improve consistently
across both positions. A separate memory diagnostic finds comparable physical footprints
and does not reproduce the matched RSS increase. The exact timing definitions, rejected
probes and limitations are in the
[release recheck](../../experiments/gallery_handoff/README.md#current-main-release-recheck-and-lazy-type-sources).
Receipts are retained in `.local/loading-main-release/`. The frame-budget and production
handoff/cancel API remain open; no commit or push is made.

Raw JSON, logs, binary hashes, harnesses and summaries are in the ignored
`.local/startup-staging/` directory. `measurements/` contains the final 24 processes;
`pilot/` and the earlier root-level pilot logs are not part of the summary. Use
`summary.json` for medians and full ranges. `bench.dart`, `build.dart`, `run.py`,
`matrix.py`, `regression_prepare.dart` and `regression_run.dart` reproduce the local
experiment. Rebuild prepared assets with `prepare.dart` before rebuilding either app.
Local ad-hoc benchmark signing temporarily disables the sandbox to keep all scratch
storage on the workspace volume; `build.dart` restores the project entitlements. This is
not distribution signing validation. Disposable app/compiler output is removed after
recording the result; source, receipts and maintained engines are retained.
