# Task: Staged Session Startup Experiment

Status: adopted by normal owning FlaxViews and the maintained macOS engine. Historical
measurement rounds below retain their original scope and limits. See
[formal startup](../architecture/session-startup.md#owning-view-startup) for the current
entry, fallback and cancellation contract.

The checkpoint is based on main `a6ea2404b`. Earlier no-commit statements below describe
the original measurement runs. The earlier rebase acceptance passed 131 focused tests
and five gallery tests. Native frameworks, private compiler outputs and detailed
receipts stay outside Git; the executable gallery shell source is included.

## Maintained integration

Normal owning FlaxViews now prepare automatically. They register modules and initialize
maintained runtime factories in one pristine background Context, compile the business
entry, then install Dart hosts and activate it on UI. Consumer factories retain their
require-time initialization. Explicit Session/page loading remains synchronous. Other
live runtimes, preconfigured contexts, FFI installation and unsupported targets select
the existing staged UI path. Cancellation and failed preparation retain the same runtime
factory object and restore UI ownership before cleanup.

A synchronous runtime created during pure preparation interrupts the worker, releases
the shared heap and makes the first View retry on UI. Partial globals stay inaccessible
until its preparation completes. Both contexts remain isolated, and disposing a pending
runtime releases the worker before another runtime can use its heap.

The maintained Flutter build and DEPS hook apply the consolidated fixed-entry compiler
repair. Earlier patched checkouts receive the same tree through `dart-startup.patch`;
fresh/upgrade patch equivalence is checked with isolated Git indexes. Debug and Release
build the execution extension into the ordinary framework and tester exports. No private
compiler, copied engine, helper dylib or V8 SDK rebuild is needed. ABI 2, UI protocol
24, binding extension 8 and application call signatures remain unchanged.

Shared Widget/argument transport and combined native results are selected automatically;
older engines/helpers retain conversion fallbacks. Review corrected the automatic
Session error callback, cleared completed startup queue entries, preserved custom
runtime configuration, and kept background scope exit out of UI-owned GC idle state. GC
tests continue to require actual rootless-cycle collection before close and zero handles
at shutdown. Test result validation rejects interrupted Flutter suites even if their
process returns zero, and copied package examples resolve their workspace test
dependencies.

Integration acceptance used the maintained Debug and Release engines, without private
compiler or runtime paths:

- All 1,079 framework cases passed, including generic and ordinary JS inheritance,
  overrides, super, LayoutBuilder, session isolation and joint collection. The default
  and explicit V8 runtime gates each passed 45 cases; the startup subset passed 25.
- Release/AOT passed the complete seven-entrance gallery and all 14 joint-GC contracts,
  including rootless cycles before close and 1,000 repeated bridge cycles. The app audit
  verified its signature, JIT entitlement and single V8 library closure.
- Three actual hot reloads preserved one State/runtime across four revisions and 44
  checks. Three hot restarts produced four fresh isolate epochs.
- The aggregate passed seven Widget cases and its native application scenario. Seven
  package examples passed their Widget cases; six also passed native integration.
- Both compiler modes passed 43 default-call checks and two invalid-program rejection
  cases. Patch boundary/upgrade tests passed, and fresh versus upgraded source trees
  matched. The workspace's 749 generator cases, 94 Core JS cases and remaining static,
  archive, documentation and reproducible FFI gates passed.

The first monolithic workspace run stopped at an isolated asynchronous-job template that
requires its own private compiler patch. That template is now explicitly excluded from
production analysis; the remaining workspace gates were resumed successfully. Local
evidence is in `.local/startup-integration-20261026-111806/`, including retained initial
failures and the final accepted journals. These correctness runs add no new performance
claim to the historical timing tables below.

The measurement rounds below are historical. Background preparation is accepted on macOS
arm64; other platforms retain staged UI startup and are not recertified by this
integration. Synchronous business evaluation, Dart declaration/JIT work and first-screen
Flutter building can still occupy UI; this is not a guarantee for arbitrary scripts or
120 Hz rendering.

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

Local checkpoint `acfb213a` retains the preceding experiment sources on main
`a6ea2404b`. The uncommitted
[Widget batch follow-up](../../experiments/widget_batch/README.md) reuses
conversion/construction for multiple immutable descriptions in one borrowed call. It
passes 133 focused tests, 90 Core JS tests and 408 complete-gallery checks; the
five-pair release comparison improves drawFrame medians by about 13% while still missing
the frame budget. Packet bounds and metadata decoding remain prototype costs.

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

The additional shared transport follow-up passes 241 focused Dart/runtime/UI tests, 93
Core JS tests, five gallery tests, both 45-test official runtime gates and 44 checks
across four actual VM hot-reload versions. A fixed-input 24-process / 48-Session release
matrix passes 816 checks; first/subsequent drawFrame medians move 23.357/30.666 to
21.199/26.045 ms. A slow 45.272 ms first-frame sample is retained. Sixteen additional
Sessions diagnose RSS after close/collection without changing production GC policy; all
248 checks pass and only the one intentional diagnostic peer remains. There is no
memory-saving or 16.7 ms claim. See the
[shared-path results and limits](../../experiments/widget_batch/README.md#shared-constructor-callback-and-reference-follow-up)
and `.local/latest-bridge-next-evidence`. Business APIs, public ABI/protocol, generated
class APIs and maintained engine artifacts are unchanged. The private native experiment
table is version 2; this follow-up is archived locally on the experimental branch and
has not been pushed.

The
[same-screen native control](../../experiments/gallery_handoff/README.md#same-screen-native-flutter-release-control)
compares one AOT/engine/window with pixel-identical native Flutter and Flax entrances.
Five unprofiled processes per final path measure first/subsequent frames at 5.673/5.364
ms natively and 14.575/15.101 ms without test facade wrappers. Maximum
animation-callback gap medians remain 13.945/13.272 versus 22.334/19.745 ms; one Flax
frame takes 16.824 ms, so there is no zero-jank or 120 Hz guarantee. These are prepared
content frames, not complete startup durations.

The shared example text helper now avoids Context Builders for explicit immutable
colors, while preserving theme-dependent colors. This removes 48 unused hosts and keeps
the image unchanged. One redundant native receiver allocation is also removed. A
static-mount shortcut with no stable benefit is withdrawn. Final acceptance passes 245
focused Dart/UI/HMR tests, six gallery/theme tests, 93 JS tests, both 45-test official
runtime gates, actual four-version VM reload and the tracked release gallery's 34
checks, including both heaps collecting State peers before close. The directory in
`.local/latest-native-comparison-evidence` retains matrices, rejected variants and
integrity receipts. APIs and maintained engine/SDK artifacts are unchanged; nothing is
pushed. Local review additionally bounds packet traversal, preserves callback Symbol
rejection and respects ByteData capture views. Reviewed sources and tests are retained
in the experimental checkpoint; the historical timing matrix is not relabeled as a new
run.

Post-review acceptance passes 246 focused Dart/UI/HMR tests, 43 fallback-path tests, six
gallery/theme tests, 94 Core JS tests and both 45-test runtime gates. Three release
processes pass 53 checks: the full two-Session tour collects both State peers before
close, while native/Flax captures retain identical pixels and render object counts. The
earlier actual four-version VM reload receipt is reused. No mobile or 120 Hz acceptance
is inferred from this macOS review.
