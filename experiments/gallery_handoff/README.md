# Two-phase loading of the complete gallery

Status: historical comparison harness. Normal owning FlaxViews now use the maintained
engine's preparation and execution extension directly; see
[formal startup](../../docs/architecture/session-startup.md#owning-view-startup).
Current application builds need no helper dylib, entitlement changes or private engine.
Commands and measurements below describe the original isolated experiments.

This macOS arm64 V8 experiment uses the unchanged bundled application from
`examples/embedded`, its real 28 host modules, all seven package entrances, and the
existing engine-owned joint GC. It extends the small ownership-handoff probe without
changing generated bindings, the JS application API, protocol or ABI.

The [combined preparation follow-up](#combined-preparation-follow-up) below contains the
base approach and its remaining limits. The
[first-build follow-up](#widget-metadata-and-remaining-bridge-costs) isolates the
remaining boundary costs. Earlier measurements are retained as separate experiments, not
pooled into the new comparison.

The [fixed-entry follow-up](../fixed_entries/README.md) resolves the cold mixed-file
compiler failure and records the latest combined-result recheck. Its local call gains
remain measurable; whole-frame timing ranges overlap.

## Loading path

1. `prepare.mjs` reads the actual prepared module manifest and source assets. It
   composes the registry, module definitions, inventory seal and module initialization
   into one background script, and compiles the business entry into a deferred function.
   A Node VM with no Dart host checks that this preparation uses only JavaScript.
2. An empty maintained runtime is created on UI. The native helper serially lends its
   existing V8 Isolate/Context to a worker, with joint GC registration deferred while
   there are no Dart peers. Ordinary Dart GC continues. The file variant performs source
   reading and UTF-8 decoding in V8 on that worker; UI passes only a file path.
3. After the worker releases V8 ownership, UI restores joint GC and a normal Session
   installs Dart hosts/plugins and validates all module requirements. `GalleryRuntime`
   adopts the exact preloaded registry and compares module source bytes, the complete
   inventory statement, and business source before skipping duplicate evaluation.
4. UI executes the original business entry and mounts its real Widget tree. That entry
   creates real Dart objects, so it remains in the activation phase. Constructors,
   overrides, lexical `super` and later callbacks retain their existing synchronous
   path.

The one-time reserved-global claim in the adapter transfers ownership of this pinned
registry. It is experiment-specific, not permission to reuse arbitrary existing globals.
Production integration needs an explicit prepared-runtime/adoption contract.

## Compared modes

| Mode       | Module initialization                      | UI activation                       |
| ---------- | ------------------------------------------ | ----------------------------------- |
| `baseline` | Existing synchronous Session               | Existing synchronous mount          |
| `handoff`  | Worker, source string encoded/copied on UI | Synchronous mount                   |
| `file`     | Worker reads the prepared source file      | Synchronous mount                   |
| `staged`   | Same file path, existing lazy-proxy flag   | Existing staged Session preparation |

The declaration experiment changes the private default-module list to a lazy ordered
iterator. Synchronous loading still consumes every module in the same order. Only
`prepareForExperiment` yields after a declaration group when its accumulated work
exceeds the existing 4 ms budget. Warm declarations do not incur a fixed frame per
module. This cannot interrupt one large Dart declaration initializer or a synchronous
Widget build.

## Measurements

The native Flutter shell keeps animating and has an independently scrollable list. Every
process measures a first Session and a subsequent Session, with a full gallery tour and
close between them. Resources, engine creation, experimental capture cleanup, background
initialization, Session construction and activation are separate windows. Every phase
ends at a frame boundary before the next phase starts.

Raw persistent-frame gaps and 2 ms Dart Timer gaps include normal scheduler latency and
the first callback after a phase. They indicate responsiveness, not exclusive CPU time.
Do not attribute every frame gap to JS: cold native Flutter/JIT work, GC, foregrounding
and OS scheduling also contribute. No timing threshold is asserted by the checks.

The experimental capture helper temporarily registers a Dart callback, then uses the
existing GC helper to verify an empty bridge. This setup, including test-induced GC, is
reported separately. It is not a necessary design for a production engine handoff entry.
The helper dylib's first `dlopen` is also a separate phase. Neither cost is silently
removed from the recorded request-to-first-frame duration.

Final raw receipts and the selected comparison are in `.local/gallery-handoff/`. Early
failures remain there: an existing-global ownership guard, an incorrect assumption that
Canvas explicitly calls JS `super.dispose`, and a mistaken one-to-one assumption between
JS States and all native helper States. Collection checks require every observed Dart
State and every JS State to disappear; extra native helper States are included.

## Correctness checks

- Tour all seven real entrances, update Core signals, Material/Cupertino State, Canvas
  palette, WebSocket status and storage, then return through real navigation.
- Observe the six JS State initializations and wait for all six disposal calls after the
  final Route's exit animation. Observe real Dart component States through weak
  references to their Flutter Elements, not a synthetic object table.
- Require all recorded Dart States and JS States to collect before Session close, then
  require zero tracked runtime handles at disposal. No explicit peer unregistering is
  used to pass collection.
- Reuse the genuine generated NumberBox proxy contract after a worker-created factory:
  private state, inheritance, Dart-to-JS override, lexical `super`, exception recovery,
  roots in either language and both weak peers collected before close.
- A missing background source file must return ownership and restore GC registration;
  the same runtime must subsequently create real Dart proxies and collect them normally.

## Selected results

Apple M2 Max, 32 GiB RAM, macOS 27.0.1. These are exploratory single fresh-process
observations with a first and subsequent Session in each process, not stable medians.
`selected-runs.json` pins the raw receipts and `timings.csv` contains every selected
phase. The final debug staged result uses the 4 ms declaration budget. Synchronous debug
rows reuse the unchanged synchronous path from the preceding grouped build.

### First Session: release/AOT

| Mode                          | Background work | Background largest Timer gap | UI activation window | UI largest frame gap | UI largest Timer gap |
| ----------------------------- | --------------: | ---------------------------: | -------------------: | -------------------: | -------------------: |
| Original synchronous          |               — |                            — |             356.9 ms |             340.9 ms |             326.2 ms |
| Worker, UI source encoding    |        235.1 ms |                      17.3 ms |             154.8 ms |             138.2 ms |             124.1 ms |
| Worker, source file           |        218.2 ms |                       2.7 ms |             155.6 ms |             139.0 ms |             124.1 ms |
| File + lazy/staged activation |        199.5 ms |                       2.8 ms |             320.2 ms |              51.6 ms |              51.5 ms |

The UI activation window includes Session/declaration preparation through its first
Flutter frame, including deliberate frame waits. Request-to-first-frame times were
573.2, 620.9, 605.5 and 730.1 ms respectively. They include approximately 143–149 ms of
experimental capture/GC verification. Asset preparation is separately recorded at 27–58
ms; it was not silently moved out of the experiment.

The ordinary business entry dropped from 194.2 ms to 11.4 ms in the file variant: its
broad host-module initialization now runs on the worker. Staged activation reduces the
longest foreground gap further while adding frame waits and total latency. It does not
establish a faster complete startup.

### Subsequent Session: release/AOT

| Mode                 | Background work / largest Timer gap | UI activation window | UI largest frame / Timer gap |
| -------------------- | ----------------------------------: | -------------------: | ---------------------------: |
| Original synchronous |                                   — |             328.1 ms |             311.6 / 297.5 ms |
| File                 |                      218.2 / 2.7 ms |             136.3 ms |             119.7 / 104.2 ms |
| File + lazy/staged   |                      204.9 / 2.8 ms |             223.7 ms |               56.3 / 42.8 ms |

### Debug/JIT and remaining work

The first debug Session's UI window was 4889.9 ms for the synchronous baseline, 4445.2
ms for file handoff and 5056.5 ms for staged handoff. Largest UI frame gaps were 3934.1,
3556.7 and 1530.8 ms respectively. Grouping declarations improved the staged maximum
from about 2272 ms to 1531 ms, but individual Dart declaration groups still block.
Accessing the gallery's initial Dart registry itself cost about 0.9 s. These pauses are
not fixed by moving host JavaScript initialization alone.

For a subsequent debug Session, file handoff had a 4.9 ms background Timer gap; the
original string handoff had about 78 ms because UI encoded/copied the script. The staged
UI's maximum frame gap was 147.7 ms. A fixed frame wait per warm declaration group
increased its activation duration to about 529 ms; the shared budget reduced that to 331
ms. No per-class implementation or generated binding was added.

Two specific remaining costs merit a production design rather than further wrappers: the
experimental adoption adapter re-encodes/compares all module source bytes on UI (about
29–75 ms in the release observations), and some Dart declaration initializers and
synchronous Widget builds are still large. A production prepared-assets snapshot should
retain authenticated source identity so adoption does not repeat full encoding and byte
comparison. Module-level yielding cannot preempt a single large initializer.

The original baseline processes passed 30/30 top-level checks and each candidate 32/32,
with both Sessions completing the full tour. Their early lifecycle checkpoint counted
five disposal calls before the last Route had finished exiting; attributing the missing
call to Canvas's default disposal was incorrect. The current recheck waits for actual
completion and requires all six calls. Six JS States and all captured Dart component
States disappeared before close; runtime handle counts were zero on disposal. The
existing aggregate and staged cancellation suites also passed 5/5. The retained raw logs
include the generated proxy's separate inheritance/super/exception and two-way
weak-reference results. Static analysis and warnings-as-errors native compilation pass.

### Main joint-GC recheck

The recheck rebases the experimental worktree onto Flax `74dab9f76` and uses maintained
Flutter `7073a170189`. Engine change `b19f8a0f3a4` prevents V8 minor, incremental and
weak-callback phases from requesting full joint collection. Completed major collection,
Dart pressure and idle ownership checks keep their existing collection paths.

A controlled release comparison keeps the application and all current engine linker
inputs fixed. A private `legacy-gc` variant changes only the V8 epilogue escalation
condition back to its previous rule. Neither maintained engine source nor its built
framework is edited. Two fresh processes per case each create two Sessions.

| Controlled input, first Session  | Current rule: largest UI frame gap | Previous rule: largest UI frame gap |
| -------------------------------- | ---------------------------------: | ----------------------------------: |
| Synchronous loading              |                     311.6–327.1 ms |                      301.6–326.9 ms |
| File handoff + staged activation |                       53.1–55.4 ms |                        53.5–55.6 ms |

These overlapping observations do not establish a startup improvement from the GC rule
change. They also do not measure or dismiss its benefits for sustained GC-heavy
application workloads. The controlled input retains the preceding gallery business
bundle so that unrelated example changes do not enter this comparison; its exact sources
and hashes are retained in `.local/gc-main-recheck/controlled-inputs/`.

The latest gallery is separately rebuilt through
`node tool/example_bundle.mjs --aggregate`. This updates the settings-aware examples and
native Afterglow showcase. The original Widget-suite failure came from using the older
ignored business bundle against the newer test expectations, plus a staged fixture
missing native example chrome. Regeneration and reuse of `FlaxExampleApp` restore all
5/5 existing checks. The native tour now waits for the final Route's real disposal
before testing 6/6 lifecycle forwarding and complete Dart/JS weak-reference collection.

| Latest gallery, first Session    | Release largest UI frame gap | Debug largest UI frame gap |
| -------------------------------- | ---------------------------: | -------------------------: |
| Synchronous loading              |                     358.5 ms |                  3479.4 ms |
| File handoff                     |                     150.2 ms |                  3774.4 ms |
| File handoff + staged activation |                      57.1 ms |                  1626.0 ms |

These are one fresh process per case, with an additional subsequent Session. Debug's
first Dart registry access still costs 890–963 ms. Release's synchronous Canvas-module
require costs about 155 ms cold and 130 ms warm; preloading reduces that require to less
than 0.1 ms. The experimental adoption adapter still spends 51–64 ms total
encoding/comparing source on its first Session. Staging adds waits, so the corresponding
release request-to-first-frame observations are 564, 676 and 650 ms: lower foreground
gaps are not evidence of faster total startup.

One native debug file-handoff pilot stopped receiving frames after the Canvas entrance.
The retained native sample showed normal event-loop waits, and the VM service reported a
resumed isolate with no running stack; this does not establish a GC or V8-lock deadlock.
The old launcher ignored foreground activation failure and frame waits were unbounded.
The launcher now waits for the actual foreground window and frame waits have a
five-second diagnostic timeout. Subsequent complete native tours pass. The pilot's logs,
native samples and VM state remain separate from successful measurements.

The existing two-second probe also confirms that the current main GC filter does not
remove the lock wait when an ordinary Dart GC reaches an empty heap while a worker owns
V8. A private one-line `empty-gc` variant checks `heap.cells_.empty()` before claiming
the V8 Locker, after the existing owner/reentry guards. It leaves the Dart collector
registered and uses the unchanged nonempty-heap joint tracing path.

| Two-second worker with Dart GC, release                  | Largest frame gap | Largest Timer gap |
| -------------------------------------------------------- | ----------------: | ----------------: |
| Maintained engine, no initialization GC hook             |         1784.5 ms |         1768.2 ms |
| Original private collector handoff                       |           16.8 ms |           14.9 ms |
| Private empty-heap fast path, collector stays registered |           17.5 ms |            5.9 ms |

Each version passes 31/31 correctness checks, including ordinary generated inheritance,
override/super exceptions, roots in either language and both weak peers collected before
Session close. In the fast-path variant, `deferredJointGc` is false in every row. The
reported Dart collection helper duration (about 52 ms for the private variants) includes
its asynchronous test work and is not a single GC pause. The fast path is an experiment,
not a maintained-engine change or support for a worker sharing live Dart peers.

The fast path additionally passes the latest full gallery in debug: two Sessions, 32/32
top-level checks, 6/6 lifecycle forwarding per Session, every recorded Dart/JS State
collected before close and zero tracked handles at disposal. Both background receipts
confirm that the collector was never detached. In total the final selection contains 17
complete-gallery processes / 34 Sessions and three two-second processes; the earlier
unsuccessful pilots remain excluded and retained with their diagnostics.

Raw successful and unsuccessful receipts, matched compiler/linker inputs, the isolated
GC-condition diff, and the normalized comparison are in `.local/gc-main-recheck/`.

## Reproduce

Keep all generated data and temporary builds on the workspace volume. Reuse existing
maintained SDK/engine builds; the private GC hook relinks existing objects and does not
edit or rebuild the maintained SDK.

```sh
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
node experiments/gallery_handoff/prepare.mjs
cmake --build .local/js-handoff/native -j 4
python3 experiments/js_handoff/engine_probe.py release
dart run experiments/gallery_handoff/build.dart release
python3 experiments/js_handoff/use_engine.py release deferred
python3 experiments/gallery_handoff/run.py release baseline
python3 experiments/gallery_handoff/run.py release file
python3 experiments/gallery_handoff/run.py release staged
```

If the native helper was cleaned, configure it using the SDK path documented in
`../js_handoff/README.md` first. Repeat with `debug` for JIT. Build and static checks
must finish before measuring; do not run comparison applications concurrently.

## Boundaries

Only an empty, exclusively owned heap can enter the background phase. Active concurrent
Sessions, Hermes/mobile, HMR, cancellation or hot restart while the worker owns V8, and
untrusted code isolation are outside this experiment. Fetch/WebSocket entrance checks do
not claim network transport acceptance. Passing representative gallery interactions does
not certify every generated Flutter SDK declaration.

The experiment remains uncommitted. It is not an entirely nonblocking FlaxView startup.

## Combined preparation follow-up

This follow-up uses the same Flax `74dab9f76` and maintained Flutter `7073a170189`
inputs. The private `empty-gc` engine is used in every comparison. Joint collection
remains registered throughout preparation; all worker receipts must report
`deferredJointGc: false`. Neither maintained engine source nor its built frameworks are
changed. Generated class bindings and the complete gallery source remain intact.

Three small prototypes distinguish useful work from merely moving its timing:

1. `identity` builds a worker input from the actual immutable `FlaxJsSource` instances
   loaded by `FlaxModuleAssets`. Adoption checks those same object identities instead of
   re-encoding and comparing every source. A different source with the same URL is
   rejected. Inventory, protocol, capability and Dart-provider validation still run.
   Preparation, file writing and encoding are measured; they are not free startup work.
2. `prewarmed` additionally visits the complete Dart declaration registry in a Dart
   isolate. It creates no runtime, native Widget or Context and returns counts only: 16
   modules and 2,330 type templates. This direction is rejected. In debug its
   preparation phase still has a 1,545 ms UI frame gap, followed by a 901 ms activation
   gap. The total including preparation is 6,676 ms. Moving declaration access to an
   isolate does not remove the observed UI stalls or per-isolate initialization.
3. `factory` adds pure-JS base-host preparation to `identity`. The existing host bundler
   can return the installer without calling it; UI later passes the real
   `__flaxBaseCall` to that installer. URL, Streams, encoding and event implementation
   initialization runs on the worker. Timer creation, real time origin, error handling
   and native resources are connected on UI through the unchanged installer. The
   ordinary generated host script remains byte-for-byte identical. The prepared
   installer is accepted only after its ordinary source digest matches the immutable
   base-host source retained by the snapshot.

### Results

There are 13 successful fresh native processes, 26 full-gallery Sessions and 428 passing
top-level assertions. These include the exploratory rejected variant. The final
instrumented AOT build has two factory launches and one baseline and identity launch,
each measuring a first and subsequent Session. The table uses only this same build. Four
earlier release probes and five debug launches remain in the receipts as separate
exploratory observations. These samples are not cross-device percentile guarantees.

| Release variant                       | Cold largest UI frame gap | Subsequent largest UI frame gap | Cold UI activation window |
| ------------------------------------- | ------------------------: | ------------------------------: | ------------------------: |
| Synchronous control                   |                  316.0 ms |                        321.2 ms |                  324.2 ms |
| Immutable source identity             |                   59.5 ms |                         69.0 ms |                  167.0 ms |
| Identity plus prepared base installer |              46.0–47.4 ms |                    59.7–61.5 ms |            103.6–103.8 ms |

Repeated source comparison falls from 69.0 ms cold / 31.1 ms subsequent in the staged
control to below 0.1 ms in identity-based adoption. In the instrumented release
comparison, base host installation falls from approximately 20 ms to 0.30–0.32 ms; the
complete host-plugin step takes 3.25–3.36 ms. Other plugin installers still run normally
on UI.

The remaining cold Flutter build lasts 45.3 ms; the subsequent build lasts 53.8–56.2 ms.
These build measurements include synchronous JS builder callbacks and Dart binding calls
made by that frame. They do not establish that Flutter alone, or GC alone, consumes that
time. The runtime type-parts probe records 2,334 calls using approximately 2.5–2.8 ms
per startup, so removing that lookup work alone would not eliminate the remaining pause.

Request-to-first-frame including asset preparation and the experimental capture/GC
checks is 633.1–636.2 ms for factory versus 551.7 ms for synchronous control. Subsequent
Sessions are 525.1–551.7 ms versus 530.0 ms. This reduces concentrated UI work; it does
not establish faster total loading. Source pinning and its frame waits are included. The
capture helper's approximately 140 ms verification remains experimental overhead, not a
requirement for a production preparation API.

Cold release RSS is 346.1–346.2 MiB for factory and 331.0 MiB for control; subsequent
values are 380.4–382.8 and 372.7 MiB. RSS includes code, shared pages and different GC
histories; these observations do not establish equivalent memory use. Debug still has a
1,435 ms declaration gap and 835 ms first Flutter build in factory, versus the
synchronous control's 3,349 ms largest frame gap. This experiment does not solve debug's
initial declaration/JIT cost.

Every Session tours all seven real entrances, including its synchronous LayoutBuilder
path, and observes 6/6 JS State initialization/disposal forwarding. All captured Dart
States and JS States disappear before Session close, and tracked runtime handles are
zero on disposal. The worker-created generated ordinary proxy also retains private
fields, inheritance, overrides, super, exception recovery and roots in either language,
then loses both weak peers before close. Foreign-source rejection is checked for each
identity-based Session. The existing complete-gallery/cancellation suite passes 5/5; the
proxy, compiled-generic, module-isolation and joint-GC suite passes 45/45. These Widget
suites use the maintained test engine and ordinary Session path; the native gallery
matrix validates the prepared-installer path and private empty-heap guard.

### Recommended boundary

Retain immutable prepared assets, pure-JS installer preparation, empty-bridge GC lock
avoidance and yielding between complete UI activation steps. Keep actual Dart object
creation, LayoutBuilder callbacks, overrides and super on UI with their existing API. Do
not adopt Dart-isolate metadata warming, disable joint GC, or promise an arbitrary
synchronous JS/Dart call can fit within a frame budget.

Preparation requires the shared V8 heap to have no live Dart peers or host callbacks. It
is not permission to transfer a heap containing another active Session. Worker
cancellation, concurrent live-Session preparation, HMR, reflection before lazy proxy
construction, Android and iOS/Hermes require separate production validation. The next
measured target is the synchronous first-widget build, rather than another source cache
or type-index wrapper. No production rollout or commit is made here.

Follow-up receipts, per-step timings, source/binary guards and comparison scripts are in
`.local/startup-combined/`. `summary.json` pins all 13 native processes. Build and
initial pilot failures are retained separately from the successful matrix. Reproduce
`factory` after running `prepare.mjs`, linking the existing private `empty-gc` variant,
and selecting it with `use_engine.py`; launch with `FLAX_HANDOFF_DEFER_GC=0`.

## First-widget build decomposition

The follow-up in `.local/first-build/` separates nested work through the actual Flutter
BuildOwner and root PipelineOwner. LayoutBuilder can reenter build during layout; JS
callbacks can reenter Dart constructors and conversion. Each span records inclusive and
exclusive time, and a startup self-check plus per-frame accounting requires the
exclusive totals to equal the frame total. Frame durations are wall-clock measurements,
not exclusive CPU samples. JS spans include native crossing overhead that is outside the
Dart callback; the callback group also includes style resolvers, not just builders. No
sampled Widget, Context, callback or JS value is retained by the profiler.

Initial detailed controls show that native Dart construction is not the main cost.
Argument conversion spends time querying absent fields, while the test tracker scans its
weak-reference list on every wrap and release. These early exploratory probes were
followed by fixture builds and are retained for diagnosis, not used as the final
performance comparison. Two shared changes address the measured work:

1. `construct()` records frozen argument names in a WeakMap. The optional `argumentKeys`
   helper returns the immutable shape. Dart reads only provided fields for those known
   snapshots and still fills or omits defaults according to the same parameters. A
   foreign description or older JS keeps ordinary lazy property lookup. Accessors are
   read once, explicit null remains supplied, and conversion/error cleanup order stays
   unchanged. No per-class code, cached business value, protocol or ABI is added.
2. The test tracker stores weak slots in a Set. Each owned facade remembers its weak
   slot for constant-time removal; dead slots are pruned in batches and on diagnostics.
   Independent retains and live unreleased handles remain counted. This part improves
   test instrumentation and is not a production application speedup.

### Matched release comparison

All final cases use the same AOT application and private empty-heap engine binaries.
Compilation and tests finish before measurement. A control-only JS statement replaces
`argumentKeys` with its foreign-description path before UI activation. This disables
snapshot lookup while keeping the corrected tracker, JS API, gallery, module sources and
all other runtime behavior fixed. The control reads provided fields once, so it is
conservative relative to the earlier duplicate-read path. The probe is restored after
each process, and its input hash is recorded.

There are six fresh processes / 12 full-gallery Sessions: two plain processes for each
path and one detailed process for each path. Every process measures a first and a
subsequent Session. All 204 top-level assertions pass. These exploratory observations
are not stable frame-time percentiles and do not assert timing thresholds.

| Without detailed timing hooks | First build duration | Subsequent build duration | First largest activation-frame gap |
| ----------------------------- | -------------------: | ------------------------: | ---------------------------------: |
| Snapshot lookup disabled      |         34.5–39.1 ms |              42.3–45.8 ms |                       41.0–42.9 ms |
| Snapshot lookup enabled       |         29.0–30.4 ms |              40.1–41.2 ms |                       32.8–32.9 ms |

The two-observation first-build median falls from 36.8 to 29.7 ms, about 19%. Total
request-to-first-frame, including the same experimental preparation/capture checks, is
510.0–538.2 ms disabled versus 489.7–496.4 ms enabled. Subsequent load times overlap;
this does not establish a broad warm-load improvement.

The separate detailed first frame is 37.3 ms disabled versus 29.6 ms enabled. Its
exclusive categories below add to the latter frame rather than counting nested work
multiple times:

| Enabled path, detailed first frame                           | Exclusive time |
| ------------------------------------------------------------ | -------------: |
| JS callbacks, including LayoutBuilder and style resolvers    |        3.37 ms |
| Other JS helpers and their crossing overhead                 |        5.90 ms |
| Dart argument reading/conversion and remaining host dispatch |       13.49 ms |
| Actual Dart object / Widget factories                        |        0.14 ms |
| Flutter build / layout / paint / other frame work            |        6.43 ms |
| Diagnostic wrap/release bookkeeping                          |        0.30 ms |

Within Flutter's exclusive work, build is 3.09 ms, layout 2.85 ms and paint 0.44 ms. The
corresponding inclusive layout span contains JS, argument conversion and nested build,
so calling its whole duration native layout would misidentify the bottleneck. Dart
argument conversion alone falls from 18.08 to 11.98 ms in the detailed cold comparison,
and from 23.94 to 17.91 ms in the subsequent comparison. The detailed measurement
remains a probe; plain runs are the performance result.

The key remaining cost is synchronous conversion and boundary work inside the first
layout/build callback. Native factory execution is already small. Thirty milliseconds
still exceeds a 60 Hz frame budget; no claim of fully nonblocking loading is made. The
previous 45–54 ms observations also included more diagnostic scanning and must not be
attributed entirely to production code.

### Correctness and scope

All 12 matched Sessions tour seven entrances, retain synchronous LayoutBuilder behavior,
forward six JS State lifecycle pairs, collect every observed JS/Dart State before close,
and release every tracked handle. The worker-created native proxy retains inheritance,
private fields, overrides, lexical super, exception propagation and roots in either
language, then both weak peers collect before close.

The refreshed Core fixture suite passes 62/62 real V8 Widget tests, including layout,
private/generic default omission, ordinary/generic proxy super, legacy-helper fallback,
foreign inherited/non-enumerable accessors, explicit null, missing/wrong/unknown
arguments, independent tracked retains and collection of abandoned facades. Core JS
passes 87/87; aggregate/staged cancellation checks pass 5/5. The first fixture run used
stale bundled Core and only exercised fallback; its added fast-path assertion caught
that. A second legacy simulation incorrectly attempted deletion from frozen helpers.
Replacing the helper table correctly exercises absence. Both failed receipts are kept;
final checks use the refreshed fixtures and retain both assertions.

Metrics hooks and the custom binding are experiment-only and disabled by default. Worker
transfer still requires an empty cross-heap bridge. Android, iOS/Hermes, HMR,
active-Session worker concurrency and arbitrary long synchronous JS remain outside this
macOS V8 experiment. No commit, push, SDK rebuild or maintained-engine change is made.
Rebuildable native applications and compiler scratch are removed after receipts and
binary hashes are recorded.

## Batched parameter transport and typed references

This follow-up keeps the previous immutable argument-name snapshots and weak-slot test
tracker. It changes two shared conversion paths, with no per-class generated code:

1. An optional `readArguments` helper recognizes a snapshot through the existing WeakMap
   and sends its provided name/value pairs to one synchronous Dart receiver. The
   receiver converts in Dart parameter order and borrows inputs only until it returns.
   Nested constructor reads restore the previous receiver. Existing conversion retains
   each escaping reference; no argument value or result is cached. Foreign objects keep
   lazy field reads, including inherited and non-enumerable getters. Older JS falls back
   to the previous path without a version change.
2. An optional `typedReference` helper combines component State, enum and ordinary
   object identity queries through the existing weak tables. Dart still validates the
   actual binding, generic view, session and mounted state. No user getter is consulted
   for classification. Retired objects and States still fail. Older JS uses separate
   queries.

A conversion failure must remain the original Dart error. Throwing it directly from the
batch receiver adds a JS exception wrapper; the regression reproduces that loss of
identity. The receiver instead records the error and stack for the current call and
rethrows on Dart's original side after returning from JS. Both legacy and batch paths
now preserve the same error object. Partial sources and temporary handles are released
on failure, and the receiver is cleared/restored in `finally`.

### Batched transport measurements

A small real-engine debug probe compares four field reads with one borrowed callback,
checking scalar values, object identity and zero owned handles at disposal. The batch
observations are approximately 25–30% faster; they establish feasibility, not the
release application result. A separate AOT allocator probe saves only about 0.15
microseconds per six-allocation group. That is insufficient evidence to add a native
allocator, so the allocator prototype is not integrated.

The final gallery comparison uses one release/AOT application and one private `empty-gc`
engine binary. Ten fresh processes cover 20 Sessions and pass all 340 top-level
assertions. Compilation and tests finish before sampling. Three alternating plain
processes per main path provide the ranges and medians below. One process per individual
optimization and one detailed process per main path remain separate observations. The
control removes both optional helpers before Session loading; it does not pay for an
extra batch probe. Argument-name snapshots and the corrected tracker are present in
every case. Probe source is restored after each process and input hashes are pinned in
`.local/argument-bridge/matched/inputs.json`.

| Plain release drawFrame         | Previous conversion path | Both changes enabled |
| ------------------------------- | -----------------------: | -------------------: |
| First Session build range       |           29.08–33.59 ms |       25.08–26.50 ms |
| First Session build median      |                 33.55 ms |             25.57 ms |
| Subsequent Session build range  |           39.69–46.44 ms |       30.40–34.95 ms |
| Subsequent Session build median |                 43.29 ms |             32.85 ms |

The observed medians improve by about 24%. These are three samples per path, not stable
cross-device percentiles. The identity-only observation is 30.73/46.43 ms and batch-only
is 28.92/35.44 ms for first/subsequent Sessions. Those single observations do not
establish a standalone performance gain for identity classification.

In the detailed first frame, combined Dart argument conversion and host dispatch fall
from 14.34 to 8.23 ms. Work moves into the borrowed host callback, so looking at the old
`dart:arguments` label alone would overstate the saving. The frame's identity queries
fall from 907 separate calls to 449 combined/remaining calls. Argument-key array reads
are replaced by 337 borrowed batches. The actual Dart factory cost stays below 0.2 ms.
JS callbacks/helpers still consume about 11 ms. Exclusive Flutter work varies from 7.04
ms in the detailed control to 12.64 ms enabled; consequently detailed total frame times
are 32.96/32.13 ms. Detailed spans diagnose work; the plain runs are the performance
comparison. Every detailed frame's exclusive spans sum to its inclusive duration.

One plain control has a 193.26 ms activation-frame gap outside its 33.59 ms drawFrame.
It remains in the receipts; no GC or scheduler trace establishes its cause. Total load
observations therefore are not attributed to the conversion change. Enabled activation
frame gaps are still 28.48–29.36 ms cold and 37.86–38.97 ms subsequent. The median cold
RSS is 349.39 MiB control / 349.25 MiB enabled, and subsequent RSS is 385.09/384.89 MiB,
with overlapping ranges. These process snapshots do not certify equal memory use or a GC
pause bound.

### Verification and remaining scope

The current real V8 suite passes 67/67, including LayoutBuilder, generic and ordinary
inheritance, overrides, lexical super, Widget/Context/State views, default omission,
foreign accessors, legacy-helper absence, nested reads, original Dart errors and actual
joint cycle collection. Core JS passes 87/87 and complete-gallery/cancellation tests
pass 5/5. All 20 measured Sessions tour seven entrances, forward six State lifecycle
pairs, collect observed Dart/JS State peers before close and finish with zero tracked
handles. The real generated proxy also retains private fields and roots in either heap,
then loses both weak peers before close.

The measured first build remains above 16.7 ms, including the fastest plain sample. The
reader batches conversion; it does not yield within a synchronous LayoutBuilder or
change Flutter scheduling. Further work must reduce the remaining conversion/JS helper
entries and validate native Flutter work, rather than assuming the measured time is all
GC or Dart construction. Android, iOS/Hermes, HMR, active-Session worker concurrency and
arbitrary long synchronous JS are not validated here. No commit, push, maintained-engine
change or SDK rebuild is made. Failed fixture pilots and the error-identity reproduction
remain separate from the final matrix in `.local/argument-bridge/`. Rebuildable outputs
are removed after preserving sources, receipts and binary hashes.

## Widget metadata and remaining bridge costs

This follow-up keeps Flax `74dab9f76` and maintained Flutter `7073a170189`. It adds
balanced scalar-only spans around native result/borrowed-input decoding, tracker bridge
calls/property reads/retains/releases, and Flax host parameter adoption. The profiler
keeps no Widget, Context, callback or JS value. Plain runs disable these nested spans;
both variants retain the same tracker, private empty-heap GC fast path and active joint
collector. Maintained engine outputs and SDKs are unchanged.

### Shared metadata transport

Generated frozen Widget descriptions use one optional shared `widgetInfo` helper in
place of the native identity query followed by separate kind/type/constructor property
reads. A weak-key cache stores a type/constructor text packet, never arguments or
business objects. NUL-containing identifiers fall back; UTF-16 is preserved. Native
Widget handles retain the same Dart-side type checks. Foreign getters retain their
order, and JS without the helper uses the old path. No per-class generator code, public
JS API, protocol or ABI changes are needed.

The real-engine debug microprobe alternates four 10,000-read rounds after warmup.
Separate reads take 336,554–507,785 us; the combined helper takes 99,132–161,374 us.
This verifies the transport opportunity, not a release-frame speedup of that magnitude.

### Matched release results

Twelve fresh processes / 24 sequential Sessions pass all 408 top-level assertions. Ten
processes alternate plain control/enabled runs, with five observations per variant for
each Session position; two separate processes capture detailed spans. The same signed
App and Flutter binaries are used throughout. Control removes only the optional
`widgetInfo` helper before Session loading; argument batching and typed-reference lookup
remain enabled in both variants. Weak branding is common, while text encoding is lazy
and occurs only on the enabled path. Receipts and exact binary/probe hashes are in
`.local/frame-hotpath/matched/`; `.local/frame-hotpath/summary.json` retains every row.

| Plain drawFrame    | Helper absent, median [range] | Helper enabled, median [range] |
| ------------------ | ----------------------------- | ------------------------------ |
| First Session      | 29.445 ms [27.397–45.226]     | 28.376 ms [27.678–46.984]      |
| Subsequent Session | 39.595 ms [36.465–46.237]     | 38.349 ms [36.294–39.493]      |

The median differences are about 1.1/1.2 ms (3.6%/3.1%); overlapping ranges do not
establish a stable percentage gain. The slow first frames remain in both groups. No GC
trace establishes their cause. First-Session activation frame gaps still reach 102.798
ms enabled, including work outside drawFrame, so neither the first build nor overall
loading meets a 16.7 ms budget. Cold RSS medians are 345.92/345.61 MiB and subsequent
medians are 381.36/381.09 MiB, with overlapping ranges. These snapshots do not certify
equal allocation rates or GC pauses.

Every first-build tree still has 1,347 Elements and 205 Flax hosts. Type counts match
across variants at each Session position; the dynamic GalleryHome type alone carries a
different Session identity between positions. No host, callback, validation or UI
content is removed. Property reads fall from 1,666 to 1,054 (612 fewer, 36.7%) and owned
native result decodes from 3,378 to 2,766 (18.1%). Function/helper calls remain 1,338,
borrowed input decodes 2,408, retains 356 and releases 725.

The enabled detailed cold/subsequent frames take 32.73/47.74 ms, including profiler
overhead. Selected **exclusive**, non-overlapping spans are:

| Work                                                       | Cold      | Subsequent |
| ---------------------------------------------------------- | --------- | ---------- |
| Function call boundary, excluding nested spans             | 11.365 ms | 13.682 ms  |
| Owned native result decoding                               | 3.978 ms  | 12.210 ms  |
| Remaining native property reads, excluding result decoding | 1.505 ms  | 7.947 ms   |
| Flutter build/layout/paint/finalize and frame remainder    | 8.135 ms  | 4.819 ms   |
| Actual generated Dart factory bodies                       | 0.273 ms  | 0.164 ms   |

Borrowed native input decoding adds 0.914/0.998 ms, and Flax host parameter adoption
0.668/0.625 ms. Remaining argument/host conversion and diagnostics account for the rest;
all exclusive spans sum to their frame total. `bridge:call` still includes Dart
marshaling, native/V8 execution and unsplit boundary work: it is not pure JS CPU time.
The current native result path separately inspects its returned ID and copies primitive
text or binds an owned object. Combining that decoding with the existing engine entry is
a future measurement target, not an implemented or certified optimization here. The
separate framework overhead of Flax hosts has not been isolated. Their own parameter
adoption is below 1 ms; bypassing hosts requires a separate measurement and lifecycle
proof, so this follow-up preserves them.

### Correctness and limits

Core JS passes 88/88; focused real V8 regressions pass 69/69 and complete-gallery tests
5/5. Regressions cover foreign getter order, native references, absent helper fallback,
original Dart errors, defaults, LayoutBuilder, generic/ordinary inheritance, private
fields, overrides, super, weak peers and actual joint cycle collection. A handle-count
regression initially counted the first cached `tryObjectHandle` helper as a leak after
Widget conversion stopped loading it. The corrected test warms fresh and memoized
callback conversion before comparing repeated failures; borrowed handles remain empty
and shutdown must still reach zero. Failed attempts remain in the local logs.

Every measured Session tours all seven entrances, forwards six State lifecycle pairs,
collects observed JS/Dart State peers before close and ends with zero tracked handles.
The generated proxy also retains roots in either heap and releases both weak peers
before close. These checks do not replace HMR, Hermes/iOS, Android or active-worker
multi-Session verification. No maintained engine change, SDK rebuild, commit or push is
made. Rebuildable scratch is removed only after retaining receipts and input hashes.

## Combined engine result entries

The next experiment keeps the same JS helpers and binding API, but returns the value
kind with the helper-call/property result. Previously, a primitive result needed an
owned native ID, another `inspect` call and another `release_value` call. The private
entry describes it before returning to Dart and never inserts that primitive into the
handle table. Strings and BigInts still use an independently allocated UTF-16 snapshot,
freed by the existing decoder. Objects/functions still receive owned IDs and the same
Dart/JS joint-GC binding; borrowed host callback inputs are unchanged.

There are two shared native entries, one for calls and one for property reads. Both
reuse the existing entry guards, argument conversion, JS invocation, exception mapping
and value-description code. Dart reuses `_read`, with an already prepared description.
No business-object cache, generated-class adapter or alternate collector is added.

This remains opt-in inside the experiment: `FLAX_ENGINE_RESULTS=1` selects the private
table; `0` selects the original path in the **same** AOT app and engine. The private
table has its own version/size check and is not an installed-engine requirement. The
canonical experimental header is generated through the ordinary FFI command. Public
native ABI 2, the installed binding extension and the JS API are unchanged. Do not ship
the experiment selector as application configuration.

`experiments/js_handoff/results.patch` applies only to a copied `runtime.cpp`.
`engine_probe.py release results` compiles that copy and the existing empty-heap probe,
then relinks existing engine objects. `use_engine.py release results` changes only the
owned application copy. Maintained Flutter sources, engine outputs and SDKs are not
modified. The candidate adds neither a new SDK build nor a JS heap scan.

The standalone release probe is included in the same gallery executable. Run it with
`FLAX_ENGINE_RESULTS_PROBE=1`; it compares both paths with 41 value/ownership/exception
checks, then alternates six batches of 10,000 operations after warm-up. It covers
undefined/null, booleans, negative zero, NaN, infinity, empty/UTF-16 strings, exact
BigInts, object identity, callable results, primitive receivers, throwing getters,
callback reentry, unsupported Symbols and recovery after errors. Timings have no pass
threshold. Gallery measurements leave this probe disabled.

### Local operation measurements

Three release processes each run six alternating batches per operation and path (18
samples per path, 10,000 operations per sample). The same AOT executable and private
engine are used for both paths. Medians below are microseconds per operation; object
rows include explicit release of the returned facade. Other workspaces were compiling
during the measurements, so ranges and individual process receipts are kept.

| Operation                | Original | Combined | Median reduction |
| ------------------------ | -------: | -------: | ---------------: |
| Call returning a number  |    1.534 |    1.280 |            16.6% |
| Call returning a string  |    2.718 |    2.412 |            11.3% |
| Call returning an object |    3.795 |    3.586 |             5.5% |
| Read a number property   |    2.453 |    2.171 |            11.5% |
| Read a string property   |    3.577 |    3.338 |             6.7% |
| Read an object property  |    4.521 |    4.498 |             0.5% |

All three processes pass 41/41 checks (123 total). Object-property ranges overlap
substantially, including a slower candidate median in one process; this is not evidence
of a reliable speedup for every operation. These small-call results are not a
first-frame speedup claim. Raw samples are in `.local/engine-results/probe/` and
`.local/engine-results/probe-summary.json`.

### Complete-gallery comparison

Twelve release processes run two successive Sessions each: five unprofiled processes per
path and one traced process per path. Both paths use identical app/engine binaries,
module sources and settings; only the result-entry selector changes. The existing Widget
metadata helper remains enabled on both sides. Each Session retains the same 1,347
Elements, 205 Flax hosts and per-type Element counts.

| Unprofiled drawFrame | Original median [min, max] | Combined median [min, max] |
| -------------------- | -------------------------: | -------------------------: |
| First Session        | 31.757 [28.238, 34.939] ms | 28.178 [27.302, 30.916] ms |
| Subsequent Session   | 37.125 [34.349, 45.204] ms | 34.090 [30.728, 42.922] ms |

The median reductions are 3.579 ms (11.3%) and 3.035 ms (8.2%). Ranges overlap; this
does not establish a stable 16.7 ms frame. Loading-phase maximum frame-gap medians are
97.198 to 75.777 ms for the first Session and 38.916 to 41.464 ms for the next. The gap
includes scheduling outside drawFrame and does not show a consistent reduction for both
Session positions. End-of-sample RSS medians are 345.70 to 346.27 MiB and 372.83 to
384.55 MiB, respectively, with overlapping ranges. No memory reduction is established;
process RSS and external compiler activity limit this small comparison.

Traced first frames retain 1,338 helper calls and 1,054 property reads. The combined
entries therefore remove 2,392 separate `inspect` crossings, plus temporary native
registration/release for primitive results. They do not eliminate JS helpers, borrowed
callback decoding, object peer binding or Flutter layout. Value-description work now
sits inside call/property timing, so reduced decoder time alone is not an independent
speedup measurement. The noisy Dart-conversion spans do not establish a GC cause.

All 24 Sessions pass 408 checks in total: seven module entrances, callbacks,
LayoutBuilder, State initialization/disposal, JS inheritance/private fields, overrides
and super, roots retained from either heap, both weak peers collected before close, and
zero tracked handles after close. The combined path also passes 31/31 real V8 runtime
contract tests and 67/67 focused UI/proxy/generic/GC tests. These are focused checks,
not a full workspace or platform certification.

An initial mixed-file debug run failed: the private tester first lacked a dylib search
path, and later UI tests reported missing compiler `_flaxFixed` entries. The private
tester library path was fixed. A cold-cache mixed-file control using the **maintained
tester and original result path** also reproduces missing `_flaxFixed` entries; this
control finishes with 86 passing tests and the same 14 failing UI tests. These failures
do not require the combined-result patch. Individual runtime/UI test entries pass,
without changing their assertions. The
[cached fixed-entry follow-up](../fixed_entries/README.md) diagnoses and repairs the
compiler serialization failure through shared library-change notifications. Failed runs
remain retained rather than counted as passing.

Receipts, input hashes, every process's raw measurements and failure logs are retained
in `.local/engine-results/`; `summary.json` contains the complete gallery results. The
private entry experiment is retained for further work. Maintained engines and SDKs are
unchanged. The
[subsequent review](../fixed_entries/README.md#review-and-actual-hot-reload) adds actual
Dart VM hot reload, real Vite/WebSocket updates and diagnostic-exception cleanup checks
on the private debug engine. The experiment now rebases onto main's V8-only policy: V8
jitless on iOS, V8 JIT elsewhere. Historical Hermes references above describe earlier
test boundaries. Mobile engines, hot reload while a worker owns the heap, and concurrent
worker Sessions remain untested here. There is no commit or push.

## Current-main release recheck and lazy type sources

This recheck uses Flax main `a9c1ae88b` and maintained Flutter `bb7e27654b`. The private
release result-entry engine is relinked from that Flutter revision, including its
current joint-GC implementation. The maintained engine builds and SDK remain unchanged.
The real gallery bundle still contains all 28 host modules and seven entrances; every
measured first screen has 1,347 Elements and 205 Flax hosts.

Both loading paths retain the preceding argument/metadata/result-entry experiments; the
synchronous row describes scheduling, not an unmodified main application binary.

An initial alternating baseline uses three unprofiled processes per path and one
separate traced staged process. Values below are medians [minimum, maximum].

| Initial baseline   |         Synchronous drawFrame |           Staged drawFrame | Staged largest UI frame gap |
| ------------------ | ----------------------------: | -------------------------: | --------------------------: |
| First Session      | 335.245 [323.011, 358.461] ms | 31.812 [29.720, 34.341] ms |  70.089 [51.928, 85.207] ms |
| Subsequent Session | 324.188 [323.642, 333.621] ms | 40.157 [38.629, 40.168] ms |  46.058 [40.400, 48.100] ms |

These refresh the loading experiment on the current main revision; they do not isolate
the effect of a GC change. Background initialization continues to deliver native
animation, scroll and Dart Timer callbacks. Staging still trades total latency for
smaller foreground pauses and cannot suspend an individual synchronous Widget build.

The retained change separates the existing Dart class/shape index from the index of VM
type source names. Looking up a known binding ID needs the former. Previously it also
decomposed all unrelated SDK class Types through the engine. Source candidates are now
indexed only when a conversion actually needs source/provider matching. The same
complete candidate list, order, provider checks and generic conversion remain; the cost
is deferred for those calls rather than removed universally. All caches remain owned by
their Session and retain no business receiver.

A second, matched comparison alternates three plain processes per path and one separate
traced process per path. Only the application AOT changes; JS sources, the native
engine, probe and preparation inputs remain fixed. The final candidate contains only
this lazy source-index change, without additional host-registration yield points. Do not
pool the following values with the earlier baseline.

| Matched staged loading                  |                        Before |             Lazy source index |
| --------------------------------------- | ----------------------------: | ----------------------------: |
| First-Session type-parts queries        |                         2,334 |                             2 |
| Subsequent-Session type-parts queries   |                         2,334 |                             2 |
| First-Session business entry            |    15.345 [13.987, 16.438] ms |       8.620 [8.577, 8.832] ms |
| Subsequent-Session business entry       |    12.552 [12.363, 12.726] ms |       8.630 [8.240, 8.709] ms |
| First-Session drawFrame                 |    26.358 [25.370, 27.614] ms |    25.437 [24.788, 25.542] ms |
| Subsequent-Session drawFrame            |    35.029 [34.773, 36.226] ms |    36.426 [36.172, 38.663] ms |
| First-Session largest UI frame gap      |    32.565 [26.746, 33.619] ms |    32.195 [28.671, 32.260] ms |
| Subsequent-Session largest UI frame gap |    42.068 [39.108, 42.791] ms |    44.162 [43.946, 45.990] ms |
| First request through first frame       | 666.537 [610.252, 679.861] ms | 598.435 [598.395, 614.342] ms |
| Subsequent request through first frame  | 504.422 [489.099, 507.177] ms | 510.152 [506.646, 515.411] ms |

Request durations include asset preparation on the first Session, deliberate inter-phase
frame waits and roughly 140–155 ms of experimental capture/empty-bridge GC verification
per Session. They are experimental wall times, not production load time guarantees.
Early registry adoption also varies independently of the source-index lookup. Only the
eliminated queries and the business-entry spans support attributing a saving to this
change. Neither drawFrame nor maximum UI gap improves consistently for both Session
positions; 16.7 ms remains unmet. OS frame/Timer gaps include scheduling latency and are
not exclusive CPU pauses. Concurrent engine builds from other worktrees are recorded
with each sample and limit these small observations.

The final trace still has 1,338 bridge calls and 1,054 property reads on the first
frame. Exclusive bridge bookkeeping takes about 10.8 ms; native result/borrowed decoding
about 3.3 ms; Flutter work about 6.1 ms. Native Dart factories take about 0.3 ms. These
are nested, separately instrumented spans, not independent wall-time benchmarks.
Removing more synchronous boundary work would need a further measured change rather than
assuming Dart object construction dominates.

Two other probes were rejected. Splitting host registration into six yield groups does
not lower the dominant first-entry span and adds cancellation states. Reusing one native
callback trampoline would save less than 1 us per host in the local microprobe, compared
with about 24 us for registration itself, while complicating callback ownership. Neither
is retained. A direct global/property lookup is also slower than evaluating the two tiny
intrinsic expressions in the warm microprobe; the startup span alone does not justify
replacing those expressions.

Matched first-screen RSS medians increase from 345.61 to 404.97 MiB and subsequent
Session medians from 390.14 to 447.20 MiB. An independent, untimed `vmmap` diagnostic
does not reproduce this increase: first-screen RSS is 346.03 / 340.72 MiB and physical
footprint 258.4 / 257.5 MiB before/after. After the first Session closes, footprint is
261.8 / 262.0 MiB; live malloc allocations on the first screen are 19.5 / 19.3 MiB. The
diagnostic's collector and tour checks also pass. These samples establish neither a
stable memory saving nor the cause of the RSS variation. They do not justify attributing
it to a retained business object or changing GC policy. Diagnostic runs are separate
from timing samples because `vmmap` can interrupt the process.

The eight final release processes / 16 Sessions pass all 272 checks: the complete tour,
callbacks, actual State disposal, generated JS subclass/private fields,
override/super/exception recovery, roots from either heap, both weak peers collected
before close and zero tracked handles at close. The first-screen regression also checks
that an unrelated SDK type (`DateTime`) is not decomposed merely to resolve known
binding IDs. Raw inputs, all runs, rejected variants and summaries are retained in
`.local/loading-main-release/`. There is no commit or push.

Final focused acceptance passes 131/131 runtime/compiler/UI/provider/generic/GC tests
and 5/5 staged/aggregate gallery tests, plus scoped analysis and formatting. The
expanded provider tests exercise source-index fallback, independent packages, erased
values and generic views after delaying the index. A gallery invocation initially used
an invalid temporary path relative to its subdirectory; it failed before any test ran.
The corrected run uses the absolute worktree-local temporary directory. Full workspace
checks, mobile loading measurements and a production handoff/cancel API remain outside
this follow-up.

The next [shared Widget batch experiment](../widget_batch/README.md) reduces repeated
crossings across known immutable subtrees while reusing the same converters and
constructors. Its same-AOT comparison passes 408 checks over 24 Sessions; five plain
processes per path show first/subsequent drawFrame medians of 25.149/36.562 ms versus
21.901/31.813 ms. The batch protocol is a local opt-in prototype, separate from the
preceding local checkpoint `acfb213a`; it still exceeds a 16.7 ms frame.

## Same-screen native Flutter release control

This follow-up compares the aggregate entrance with the handwritten Dart version in
`native_gallery.dart`. Both use the same maintained engine, Material package, AOT
application, window, animation, scroll gesture, themes and first-screen content. The
native branch creates no JS runtime or binding registry. Its detail routes are
placeholders; the original seven-module Flax tour remains the functional and collection
acceptance path.

Each process mounts a first and subsequent screen. Repaint-boundary captures after
timing and gesture completion have identical 940 by 764 raw RGBA hashes and
render-object counts across the native and Flax paths, including the initial control.
Text/layout snapshots are also retained. Screenshots, disk writes, tours and collection
checks are outside the mount timing window. `drawFrame` measures the actual framework
frame; persistent-frame and 2 ms Timer gaps include scheduling latency, rather than
exclusive CPU stalls or direct display-presentation measurements. These are the
content's first frames after preparation, not total startup latency.

### Results and retained changes

Five unprofiled processes per path alternate, followed by one separate traced process
per path. A first matrix uses the original shared paths; the candidate matrix separates
test-facade overhead and tests a static-mount shortcut. The final matrix compares native
Flutter, fully tracked Flax and Flax without test facade wrappers. Paths within each
matrix share identical AOT, engine, module and JS inputs. No compiler or test from this
experiment runs during timing; host process snapshots retain other machine activity.
Different matrices are not pooled.

| Final release, median [min, max]                       |             Native Flutter | Flax without test wrappers |
| ------------------------------------------------------ | -------------------------: | -------------------------: |
| First content `drawFrame`                              |    5.673 [5.310, 7.341] ms | 14.575 [14.285, 16.233] ms |
| Subsequent content `drawFrame`                         |    5.364 [2.443, 6.583] ms | 15.101 [13.672, 16.824] ms |
| First maximum animation-callback gap during mount      | 13.945 [13.623, 15.635] ms | 22.334 [18.453, 23.727] ms |
| Subsequent maximum animation-callback gap during mount | 13.272 [10.570, 14.464] ms | 19.745 [18.734, 21.095] ms |

The final matrix has 18 processes, 36 mounts and 222 checks. Test wrappers are disabled
only in the selected screen benchmark: no owned-handle count is claimed for that path.
The fully tracked final path measures 16.310 [15.021, 21.503] ms initially and 14.862
[14.536, 15.084] ms subsequently. The tracker is a diagnostic cost, but does not explain
the remaining native/Flax difference.

The shared example `text()` helper previously created a Context Builder even for an
explicit immutable Color. It now creates Text directly for that case; named palette
colors retain their Builder and actual MediaQuery dependency. The Dart mirror uses the
equivalent direct Text path. This removes 48 unused Builders and their Flax hosts: Flax
Elements decrease from 1,348 to 1,252 and Flax hosts from 205 to 157. The helper
signature, actual Flutter layout and generated binding APIs are unchanged. The real
JS/Flutter regression flips light/dark/light, checks dependent and fixed colors
separately, then requires zero tracked handles at close.

Before this helper change, the same unwrapped-runtime variant measured 19.572 [18.721,
20.337] / 18.207 [17.183, 22.069] ms first/subsequent medians. Those earlier
observations use another AOT build and remain a separate matrix. Traced helper calls
change from 773 to 485, property reads from 100 to 52, owned-result bindings from 727 to
487, and borrowed input decodes from 2,106 to 1,914. No required input or reference
validation is skipped to obtain these counts.

The native Dart function caller also uses the existing spare argument-array slot for its
receiver, removing one native allocation per call without changing native structs,
public ABI 2, UI protocol 24 or reentry/ownership rules. The existing AOT call probe
passes 41 checks in each of three before and three after processes. Its small timings
are not treated as an isolated frame-time saving.

### Remaining cost and rejected probe

An independently traced final first frame spends about 6.20 ms in the synchronous
JS/native call path, 1.41 ms in object-constructor host handling, 0.86 ms in Widget
packet/argument processing and 0.72 ms binding owned results into joint GC. These are
exclusive diagnostic spans, not independent unprofiled wall-time medians. Recorded
native Widget factory spans total about 0.14 ms, excluding argument conversion, result
ownership and Flutter build/layout/paint. Synchronous bridge work remains the main
difference; these profiles do not establish GC pauses as the dominant loading cost.

The static-mount probe retained the same hosts and validation but avoided allocating
mounted-property records for immutable inputs. Its first median regressed from 19.572 to
20.585 ms; the subsequent median changed only 18.207 to 18.096 ms. It is removed,
including its selector and temporary fixture. Raw receipts and its patch remain ignored
evidence. No lifecycle shortcut, per-class patch or collector policy change is retained.

The Flax medians fit a 60 Hz 16.7 ms budget in this workload, but one of the ten
unwrapped samples takes 16.824 ms and animation gaps remain above the native control.
This is not a zero-jank or 120 Hz guarantee. Mobile performance, full workspace
acceptance and a production background-adoption API remain outside scope.

### Acceptance and reproduction

Focused verification passes 245 Dart/compiler/UI/provider/generic/collection/GC and HMR
tests, six aggregate/Session/theme-helper tests, and 93 Core JS tests. Both official
runtime entrypoints pass 45 tests, including 1,000 repeated bridge cycles. Actual VM hot
reload passes three reloads, four revisions and 44 checks. The fully tracked release
gallery passes 34 checks over two Sessions: all seven modules, six JS State lifetimes
per Session, both weak peers collected before close, real inheritance/override/super
behavior, and zero handles at close. Timing variants never replace this acceptance.

Use the existing preparation/local-engine build and private result engine, then select
`FLAX_GALLERY_SCREEN_ONLY=1`. Add `FLAX_GALLERY_NATIVE=1` for the native control. For
Flax keep the transport flags from the
[shared transport follow-up](../widget_batch/README.md#shared-constructor-callback-and-reference-follow-up)
enabled; set `FLAX_GALLERY_TRACKING=0` only for the unwrapped benchmark. Use
`FLAX_GALLERY_PROFILE=1` for separate diagnostics and `FLAX_HANDOFF_DEFER_GC=0` for
ordinary collection. `prepare.mjs` also builds the shared-helper regression entry; run
`../../experiments/gallery_handoff/text_helper_test.dart` from `examples/embedded`.

The directory in `.local/latest-native-comparison-evidence` retains input hashes, all
matrices and screenshots, slow/failed setup attempts, rejected code, validation logs and
integrity/cleanup receipts. Maintained engine and SDK files are unchanged. No new push
or CI run is made. Reviewed changes are archived as a local experimental checkpoint.

The review adds a 4,096-entry traversal budget on both packet sides, including shared
edges. Oversized trusted descriptions fall back before serialization; malformed incoming
plans are rejected before native Widget construction and release all temporary handles.
It also preserves the legacy rejection of a callback's Symbol-valued `kind`, and hashes
and writes only the actual ByteData view when capturing comparison images. These are
validation/capture fixes, without changing the application API or GC contract. The
preceding timing matrix remains historical; release checks after review verify the image
and complete lifecycle acceptance rather than establishing another timing distribution.

Post-review verification passes 246 focused Dart/UI/HMR tests, 43 tests with the fast
paths disabled, six gallery/theme tests, 94 Core JS tests and both 45-test runtime
gates. The release tour passes all 34 checks, including both State peers collecting
before Session close and zero tracked handles afterward. Separate native and Flax
release controls pass another 19 checks; their two captures have identical pixels and
render object counts, including the preceding matrix's RGBA hash. The earlier
four-version, 44-check actual VM hot-reload result is retained; this review reruns the
three HMR regressions inside the 246-test gate, without repeating that VM experiment.
Analysis, strict TypeScript, reproducible FFI generation, formatting and documentation
checks pass.
