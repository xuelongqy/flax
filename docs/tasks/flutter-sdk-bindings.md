# Task: Flutter SDK Binding Verification

Status: Shared object subtype indexes and candidate caches implemented, reviewed and
verified on macOS V8 release/AOT and iOS Simulator Hermes debug

## Shared object subtype selection

The four shared runtime changes from the validated candidate-index experiment are now
implemented. Binding modules lazily share an ancestor-to-candidate index through a
weak-key Expando. Sessions cache provider-filtered lists, invalidate them after generic
materialization and clear them during close. Actual value predicates still run on every
return. No generator, generated binding, JS API, Manifest, protocol, ABI or engine
change is required.

Permanent regressions cover changing matches on the same object, transitive ancestry
across modules of one provider, aliases and foreign-provider exclusion, ignored user
`runtimeType` overrides, generic candidate invalidation and independent Sessions reusing
the same module metadata. The shared-module case uses direct Sessions over identical
module objects, with runtime tracking and zero-handle close checks. The standalone
engine application runs these cases alongside its existing inheritance, override, super
and joint-GC checks. Implementation acceptance receipts are kept in
`.local/object-type-index-implementation-20261019/`; the prototype measurements below
remain historical experiment evidence.

Acceptance uses the normal `tool/check_engine_application.dart` gate with `release` on
macOS and `debug` with `FLAX_CHECK_TARGET=ios-simulator-arm64` on the booted simulator.
V8 passes 248 cases, including both new regressions; two Flutter-debug-only checks are
explicitly inapplicable. Hermes passes all 250 cases. All 246 shared V8 and 248 shared
Hermes results from the prototype acceptance are preserved, with the two private probes
replaced by the permanent regressions. The gates cover real subtype/provider selection,
nested generics, JS inheritance and private fields, overrides, lexical/async super, both
business roots, rootless callback/proxy/Future cycles and zero-handle teardown. Copied
application inputs match all four working-tree runtime files on both targets. Signing
and single-engine closure audits pass; V8 verifies JIT and Hermes verifies its embedded
interpreter. No engine or SDK is rebuilt.

Review additionally verifies an isolated cache-only staging tree, excluding the pending
description-size changes. Both focused cases pass on V8 release/AOT and Hermes simulator
debug, including direct Sessions sharing actual module objects and zero-handle close.
Signing and single-engine audits pass on both targets. The four working-tree runtime
files are unchanged during review; the full-suite counts above remain the implementation
acceptance evidence. Review receipts are in `.local/object-type-index-review-20261020/`.

Core and application-entry analysis, Dart formatting, Markdown formatting/lint/tests,
local links and diff checks pass. Existing unrelated uncommitted changes are preserved.
No new performance or memory comparison is claimed for this adoption; the prototype
results below retain their measured scope. Android, physical-device and frame-time
performance are not rerun. Task-owned application copies, the simulator test
installation and its temporary Xcode DerivedData are removed after recording receipts.
The cache change is independent of the pending description-size optimizations. This
acceptance does not publish or trigger CI.

## Object-return type-selection experiment

Historical checkpoint before the implementation above: references to unchanged
production sources in this section describe the prototype experiment only. Measurements
use that worktree, including its pending description-size optimizations, rather than an
isolated cache-only commit.

Result: the private candidate-index prototype preserves the tested behavior and
substantially reduces warm object-creation cost. Production sources remain unchanged;
this is verification evidence for a subsequent implementation, not a shipped cache. The
earlier compact runtime-table scheme remains rejected.

The prototype changes four shared runtime files. Each immutable binding module lazily
indexes its ordinary-object declarations by ancestor ID in a weak-key Expando, so
independent registries can reuse that metadata. A Session caches provider-filtered
candidate lists. Materializing a generic binding invalidates those lists, and closing
the Session clears its dynamic metadata and candidates. Candidate order, alias
exclusion, provider boundaries and the existing generic checks remain unchanged. Every
actual value still runs the applicable `matches` predicates; caching a final result by
VM Type would incorrectly freeze value-dependent hand-written matches. No business value
is a cache key or value. The generator, generated bindings, JS API, Manifest, protocol
and native ABI are unchanged.

The macOS arm64 release/AOT comparison registers the complete current SDK selection: 16
modules and 2,330 type entries. It uses the production runtime without the test handle
tracker. Both applications contain identical frozen JS fixtures and unsigned engine
libraries, verified as one V8 closure with JIT entitlement. Both AOT images are
71,968,096 bytes, including the identical benchmark and full acceptance entrypoint; this
is not a binding-only binary size.

Six fresh processes run serially in the order baseline, indexed, indexed, baseline,
baseline, indexed, after compiler and functional-test processes have exited. Each path
has two 100-object warm-up batches and seven measured 200-object batches per process.
Scheduled Session checkpoints run between batches outside the timer. The table shows the
pooled median of 21 batch averages per variant in microseconds per creation, not a
per-object latency percentile. Samples in one process are not independent runs.

| Creation path                  | Baseline, us | Indexed, us | Speedup |
| ------------------------------ | -----------: | ----------: | ------: |
| Duration factory               |      248.240 |      44.320 |   5.60x |
| BoxConstraints factory         |      245.680 |      35.630 |   6.90x |
| JS subclass of RenderProxyBox  |      272.800 |      59.725 |   4.57x |
| Selected MapEntry<String, int> |      258.120 |      37.735 |   6.84x |

All three process medians show the same direction, and the full warm sample ranges do
not overlap between variants. This establishes an improvement for these creation paths,
not a frame-rate or general application speedup. First measured Duration calls have
medians 5.808 ms and 7.463 ms respectively, including first-use setup; their broad
ranges overlap. A one-time index build remains necessary, and this first-call difference
is not an isolated measurement of index-building cost. Desktop activation is requested
at phase boundaries without exclusive foreground ownership; activation and front PIDs
are recorded. No unstable timing assertion is introduced.

Memory uses external process `phys_footprint` samples, not retained-heap accounting.
Each phase has one sample per fresh process; values below are means of three samples, in
decimal MB. The live phase retains 1,000 objects of each kind, 4,000 total. The final
phase drops those roots and applies the same JS/Dart allocation-pressure collections.

| Physical-footprint phase   | Baseline, MB | Indexed, MB |
| -------------------------- | -----------: | ----------: |
| Warmed                     |      243.587 |     239.628 |
| 4,000 live objects         |      270.969 |     261.079 |
| After roots dropped and GC |      263.801 |     265.773 |

The post-GC ranges overlap: 262.753–264.997 MB and 258.510–272.781 MB. The experiment
therefore does not establish stable memory savings or quantify the cache's retained heap
cost. The speed benefit, rather than a memory-reduction claim, supports this
candidate-index design. RSS, individual samples and cold-phase variation are retained in
the private receipt.

Baseline and indexed V8 release each pass the same 248 named cases, with two explicit
Flutter-debug-only checks inapplicable. Indexed Hermes iOS Simulator debug passes all
250 cases, preserving every previously recorded Hermes result. The two additional
regressions check changing predicates on the same real object, actual subtype/provider
and alias selection, ignored user `runtimeType` overrides, and a subtype materialized
after its base candidates have been cached. Existing cases cover nested generics, JS
private fields, inheritance, overrides, lexical/async super, live Dart/JS roots,
rootless callback and proxy cycles, multiple Sessions and teardown with zero tracked
handles. Hermes, Android and device release creation performance were not measured.

An initial instrumented, non-yielding smoke probe was interrupted while sampled stacks
were dominated by joint GC; it is excluded. A later production-runtime smoke probe
passed but overlapped the Hermes functional run, so it is also excluded from comparison.
The formal runs use the same corrected benchmark without either overlap. Their raw
samples, compiled-source hashes, engine audits, regression receipts and private
four-file patch are under `.local/object-type-index-20261019/`. No engine/SDK rebuild,
commit, push or CI trigger is performed.

## Compact runtime-table experiment

Decision: retain the existing generated descriptors and inherited-member caches. All
runtime, generator and generated-source inputs from this experiment are restored to the
task's starting worktree, including its earlier uncommitted optimizations. The evaluated
schemas and cache alternatives remain private experiment artifacts, not supported APIs.
No Manifest, JS API, protocol or ABI change is introduced.

The compact prototype stores method names, indexes, flags and descriptions in shared
rows, with typed call targets kept separate. It reuses the existing conversion rules and
readable IDs. Its view also resolves inherited entries lazily. A separate lazy-only
control removes packing, and a split-cache control retains flattened method maps while
separating their cache from getter/setter lists.

| Measurement                                       | Starting implementation | Compact rows and lazy inheritance | Lazy-only control | Split-cache control |
| ------------------------------------------------- | ----------------------: | --------------------------------: | ----------------: | ------------------: |
| Complete Core generated Dart, 17 files, bytes     |              45,217,391 |                        44,302,319 |        45,217,391 |          45,217,391 |
| Same complete-SDK acceptance app AOT image, bytes |              71,968,096 |                        72,050,176 |        71,951,680 |          71,968,096 |

The compact+lazy prototype reduces generated source by 915,072 bytes (2.02%), excluding
its runtime reader, while its AOT image grows by 82,080 bytes relative to baseline. The
lazy-only control's earlier separate memory run demonstrates that the observed memory
benefit does not require a packed schema. It also introduces recursive lookup and live
parent-map semantics. The split control keeps ordinary lookup, ordering, overrides,
local-only lexical super and post-snapshot immutability, but changes when each metadata
category takes its snapshot.

The measured AOT image is `App.framework/Versions/A/App`: it includes the identical
private measurement entrypoint, all complete SDK module roots and application code.
Separate Flutter/V8 native binaries and bundled assets are excluded from that image;
whole-bundle sizes and fixture/unsigned-engine hashes are recorded separately. These are
not binding-only binary sizes and cannot be subtracted from the preceding
71,836,768-byte application, which lacks that entrypoint. Section sizes are retained.

Memory and traversal measurements use separate fresh macOS release processes in mirrored
order: starting implementation, compact, split, split, compact, starting implementation.
Each process constructs the same 16 SDK module roots, traverses ordinary-object and
Widget-view method metadata once, and then repeats that traversal ten times. Every
traversal produces checksum 1,979,903. The five-second phase windows exclude the timed
traversal; every external footprint sample completes within three seconds.

| Measurement                                                          | Starting implementation | Compact rows and lazy inheritance | Split-cache control |
| -------------------------------------------------------------------- | ----------------------: | --------------------------------: | ------------------: |
| Initial physical footprint, mean bytes                               |             100,205,696 |                       100,000,920 |         100,164,724 |
| First-traversal physical footprint, mean bytes                       |             108,192,896 |                       104,875,160 |         107,308,148 |
| After ten additional traversals, physical footprint, mean bytes      |             121,291,916 |                       111,183,000 |         120,497,280 |
| After ten additional traversals, RSS, mean bytes                     |             226,885,632 |                       216,711,168 |         226,082,816 |
| Pooled median of 20 repeated traversals, two processes, microseconds |                   2,267 |                            10,739 |             2,439.5 |

These are process physical-footprint and RSS observations from two independent processes
per variant, not retained Dart/JS heap or business-session savings. Repeated samples
within a process are not independent replications. The compact traversal takes about
4.74 times as long, despite the lower process footprint. The split control saves about
0.795 MB in this method-only workload, without reducing generated source or AOT size.
Ordinary object-operation resolution generally reads both metadata categories, so this
probe does not establish the same saving in normal application calls; separate caches
also add bookkeeping when both categories are populated. These gains do not justify the
new schema, lookup behavior or snapshot timing.

The original inherited maps, const descriptions, typed invocations, generic factories
and joint-GC ownership therefore remain unchanged. The experiment adds no production
cache or decoder. Raw measurements, case maps, source hashes, archived prototype code
and rejected/interrupted runs are retained under
`.local/compact-runtime-tables-20261019/`.

The same mirrored order is used for the six full V8 release acceptance launches. Each
process runs two warm-up batches and five measured batches of 200 composite rendering
iterations. The following numbers are pooled medians and full sample ranges in
milliseconds, with ten measured batches from two independent processes per variant:

| Warm rendering path                         |   Starting implementation | Compact rows and lazy inheritance |       Split-cache control |
| ------------------------------------------- | ------------------------: | --------------------------------: | ------------------------: |
| JS inherited calls                          | 359.140 (333.162–375.640) |         350.887 (342.450–380.498) | 349.675 (338.362–382.425) |
| JS override and lexical super               | 312.562 (284.089–333.145) |         311.005 (291.173–326.632) | 302.606 (283.647–328.503) |
| Native parent through JS override and super | 388.123 (372.340–413.983) |         387.329 (378.035–396.041) | 383.788 (370.752–396.610) |

Every checksum matches: 6,400 for inherited calls and 8,000 for the two override/super
paths. The ranges overlap, and baseline process medians also vary; these samples do not
establish a stable speedup. The owned render harness materializes inherited method maps
before timing, so these are warm-dispatch measurements, not measurements of cold method
resolution or lazy inherited-name lookup. Desktop foreground state is not pinned; one
backgrounded control run was reactivated. Full-suite elapsed times are not compared as
performance results. Raw per-process medians and samples are retained, with no timing
assertions or frame-rate claims.

The complete generator suite passes all 655 cases. Official generation checks for Core,
Canvas, Cupertino and Material, public-type projection and module delivery pass. All
9,325 recorded generated files (9,295 JS/TS and 30 Dart) and five binding manifests are
byte-identical to the starting worktree. The compact prototype also preserves all 17
expanded Dart descriptor graphs and typed call bodies. All six final V8 launches pass
the same 246 named cases, with two explicit debug-only rebuild checks inapplicable in
release. The split-cache control additionally passes all 248 Hermes debug cases on the
existing iOS 27.0 Simulator, matching the previous case map and engine hashes. These
include generic contexts, JS inheritance, overrides, lexical/async super and both Dart
and JS roots before cycle collection. The compact schema itself was not rerun on Hermes
after the unfavorable size result; none of the evaluated runtime changes is retained.

The initial baseline launch timed out without captured assertion failures; its unchanged
binary passes both final serial launches. The original cause is not established.
Interrupted prototype suites, a temporary source-file removal during a duplicated
compilation, and the corrected test instrumentation remain in the private evidence. The
enclosing `bindings:check` command was interrupted after its generation/delivery stages
to stop an unnecessary duplicate generator suite; it is not reported as a green whole
invocation. The separate full generator run passes. No SDK/engine rebuild, commit, push
or CI trigger is performed.

After restoration, all eight registry cases and the previously interrupted dependent
bounds compilation regression pass again. Documentation checks cover 184 linted files,
four tooling tests and 765 local links. Seven task-owned application copies, totaling
1,395,740,145 logical file bytes, the expanded baseline source copy and this
experiment's Xcode DerivedData are removed after recording file hashes. The identical
fixture snapshot is retained as gzip. The failed iOS 27.1 migration is left without
erasing user data; that Simulator is back in its original shutdown state. The existing
iOS 27.0 Simulator remains booted and the newly installed test application is
uninstalled. Maintained SDK/engine builds and unrelated task files are preserved.

## Shared Dart conversion descriptions

Generated Dart now directly references common const descriptions exported by
`flax/bindings.dart`, without `_flaxBindingN` aliases for those public values. The
existing module constant pool recognizes complete emitted descriptions. It retains its
fallback for module-specific conversions, provider identities and generic-local
callbacks. No new runtime registry, lookup, callback instance cache or GC edge is added.

The catalog contains 15 primitive descriptions, 13 proxy-only signatures, nine callable
bindings, their 18 nullable/non-nullable function references, and 20 frequently used
native/Core views. The additional views include Duration, DateTime, Color, Offset, Size,
Rect, EdgeInsets and Uint8List. Core-owned views require their exact provider ID; an
independently bound Duration keeps its own metadata. Special encoding, parameter names,
roles, snapshots, scope flags and generic identities cannot be merged by type name.
Source-frequency estimates exclude candidates that would grow the output. Shared names
remain readable; shorter proxy signature names avoid repeating `CallbackSignature` at
thousands of call sites.

Measurements use the task's starting worktree, including the earlier uncommitted Dart
optimizations and the preceding JS parameter-layout commit:

| Measurement                                         | Before bytes | After bytes | Difference |
| --------------------------------------------------- | -----------: | ----------: | ---------: |
| Complete Core generated Dart, 17 files              |   45,258,062 |  45,217,391 |    -40,671 |
| New shared base definitions and part directive      |            0 |       8,844 |     +8,844 |
| Net Dart source change                              |              |             |    -31,827 |
| Same full-SDK acceptance application AOT executable |   71,836,768 |  71,836,768 |          0 |

Dart already canonicalizes equal const values; these source reductions alone do not
claim an AOT or live-memory improvement. The measured AOT executable size is unchanged,
so this is source deduplication rather than a measured application-size optimization.
The controlled native comparison reuses the baseline application's exact fixture asset,
including TLS material. Its private runner uses the original application checker,
assertions, budgets and maintained engine while isolating output paths. Engine and SDK
builds are unchanged.

All 75 catalog entries match their exported base definitions. All 17 complete generated
modules have equal descriptor graphs and typed source after resolving constants,
normalizing spelling and excluding only the replaced declarations. The provider
regression compiles the real Duration call and rejects reuse for a foreign provider ID.
No aliases to public common descriptions remain. Exact size receipts, source hashes,
generator logs and native acceptance are recorded under
`.local/shared-type-refs-20261019/`.

Official four-package generation, complete Core reproducibility, public-type projection
and module delivery pass. All 6,179 tracked generated JS/TS files and five binding
manifests are byte-identical. All 203 workspace JS cases and scoped Dart analysis pass.
The initial complete generator run passes 654 cases but records one newly added
provider-sharing activation assertion against an intermediate catalog. The additional
catalog's expression spelling is corrected; the fresh complete shared-binding file
passes all ten cases, including the real provider call and independent provider
rejection. The original failed run is retained rather than reported as a single fully
green invocation. Together these runs provide passing evidence for all 655 cases.

Fresh V8 macOS release/AOT acceptance passes the same 246 named cases as the baseline.
Two debug-only Flutter rebuild cases remain inapplicable in release. The exact fixture
asset and five unsigned V8 library hashes match; signing, JIT entitlement, one engine
closure and source removal before launch are verified. These cases include generic
contexts, JS inheritance, overrides, lexical/async super and bidirectional roots before
collection. Fresh iOS Simulator Hermes debug acceptance passes all 248 named cases,
matching the prior acceptance map. Its normalized engine and three static-library hashes
are unchanged; the embedded interpreter has no JIT. No engine/SDK rebuild, commit, push
or CI run is performed. Task-owned applications, expanded baseline copies and Xcode
DerivedData are removed after preserving their hashes and receipts. The fixture snapshot
is retained as gzip, and the Simulator returns to its previous shutdown state; the
pre-existing booted device is preserved.

## Shared JS parameter layouts

Split JS binding declarations now reuse complete parameter layouts from their existing
module helper. No additional runtime registry, public API or configuration is
introduced. The key preserves ordered names, required/positional flags and Context
conversion IDs. Existing runtime readers freeze the rows and share argument parsers
through their WeakMap; receiver-specific calls, generic contexts, native super targets
and callback ownership stay on their existing paths. Factory-only layouts retain lazy
allocation. Unused shared constants remain removable by the existing bundler.

Measurements compare this task's starting worktree, including the preceding uncommitted
Dart optimizations, with the final official four-package generation. Complete SDK
delivery includes all 25 Core module entries and their registry, using the existing
production preparation command and unchanged minification options.

| Measurement                          | Before bytes | After bytes | Change |
| ------------------------------------ | -----------: | ----------: | -----: |
| Complete prepared SDK JS             |    6,118,308 |   5,608,230 | -8.34% |
| Core generated TS                    |   30,565,124 |  30,177,686 | -1.27% |
| Core generated JS before bundling    |   13,068,202 |  12,609,965 | -3.51% |
| Core declarations, including helpers |   20,599,191 |  20,787,445 | +0.91% |

Rendering delivery shrinks from 1,464,397 to 1,205,237 bytes (17.70%), Widgets from
1,561,234 to 1,440,748 (7.72%), and Material from 1,285,795 to 1,237,113 (3.79%). The
declaration increase is confined to 17 private module helpers; all 3,055 other public
declaration files are byte-identical. Private exports use the existing `MemberParameter`
interface instead of repeating full literal tuple types.

All 3,119 generated TS files are token-equivalent after resolving parameter aliases and
removing only their private layout declarations/imports. This includes generic types,
signatures, inheritance and lexical-super code. The former 11,501 local layout constants
become 2,389 module constants and five unchanged single-file constants. Thirty-five
generated Dart, Manifest and runtime files remain byte-identical, including the
preceding Dart optimizations. Manifest 27, UI protocol 24 and native ABI 2 are
unchanged. The implementation acceptance recorded matching hashes for all 3,149 runtime
inputs; its final private type annotation changes only declarations.

All 653 generator cases have passing evidence: the full run passes 651 and records two
three-minute timeouts; the unmodified cases pass individually in 70 and 55 seconds under
their original limits. All 203 workspace JS cases, strict Core TypeScript, generator
analysis, formatting, Markdown lint and local links pass. The unused-layout regression
confirms tree shaking, while the shared-runtime regression checks frozen rows and
independent receivers. Official four-package generation, reproducibility, public-type
projection and module-delivery checks pass.

The initial V8 release/AOT run passes 245 of 246 applicable cases but records one
pending host callback after the eight-second cleanup window in
`active JS collection tolerates expired Dart origins`. Review reproduces this
independently of generated JS bindings in two of 20 release/AOT trials. Both business
objects and all native cells are already gone; a weak reference still observes the Dart
callback. In both misses, the first additional ordinary Dart collection releases the
callback and its trampoline. Native pruning and Dart-only finalization need not finish
in the same collection, and an idle empty bridge need not trigger another Dart GC. This
is a test assumption about finalizer scheduling, not a retained cross-heap business
cycle.

The shared test helper still requires idle joint GC to release the Dart owner, JS
wrapper and native cells before adding any pressure. Only a remaining Dart-only callback
triggers the existing Dart collection helper. All four zero-count assertions, the 80
polling attempts and application timeouts remain; production dispatch, ownership and
engine code are unchanged. The earlier interrupted desktop rerun remains excluded from
acceptance.

After correction, a fresh macOS V8 release/AOT application passes all 246 applicable
named cases, and the same exact application passes 20 consecutive repetitions of the
original failing case. Two debug-only rebuild checks remain inapplicable in release. A
fresh iOS Simulator Hermes debug application passes all 248 named cases. Both complete
case maps match the preceding acceptance; all five unsigned V8 library hashes, the
normalized Hermes engine hash and Hermes static libraries are unchanged. Signing, V8 JIT
entitlement and single-engine-closure checks pass. These cases exercise generic
contexts, JS inheritance, overrides, async super, independent Sessions and bidirectional
business roots followed by collection. Review also reruns all eight split-module tests,
ten shared-call tests and 203 workspace JS cases; scoped analysis has no issues.

Implementation evidence is in `.local/js-parameter-layouts-20261019/`; diagnosis and
fresh acceptance are in `.local/js-layout-review-20261019/`. Test-owned application
copies, fixture snapshots and Xcode DerivedData are removed after recording their hashes
and results; the test-booted Simulator returns to shutdown. Runtime throughput, other
platforms, compact super-member lists and delivery-JSON sharing remain outside this
change. The preceding Dart description optimizations are preserved separately. No push,
CI run or engine/SDK rebuild is performed.

## Shared super descriptions

The baseline includes the preceding uncommitted compact-description implementation.
Closed super-call descriptions now use the existing module constant pool when they
target an already-shared typed dispatch helper. The generator interns 983 complete
method rows; each class keeps its own method map, readable keys, operation order and
native lexical-super bodies. Factory-local descriptions retain their existing scope.
Runtime definitions, generic factory emission and metadata ownership are byte-identical
to this baseline. There is no new runtime representation, lookup or GC cache.

| Measurement                                 | Before bytes | After bytes | Reduction |
| ------------------------------------------- | -----------: | ----------: | --------: |
| Complete Core Dart, excluding bootstrap     |   46,520,829 |  45,258,062 |     2.71% |
| Rendering Dart                              |   14,669,520 |  13,821,257 |     5.78% |
| Same standard macOS release application AOT |   71,836,768 |  71,836,768 |     0.00% |

All 9,929 tracked JS/TS/JSON files remain byte-identical, including five Manifests and
all 3,076 Core TS files. Manifest 27, UI protocol 24 and native ABI 2 are unchanged.
Recursive constant/declaration comparison of 20 generated Dart files finds no semantic
differences after resolving the new aliases. It includes imports, type aliases, ordinary
and generic functions, proxy classes, method order and proxy member slots.

An eager shared-map prototype was rejected. It reduced Core source to 44,730,534 bytes
and the instrumented acceptance AOT by 65,664 bytes, but introduced cached table
expansion. Two first-use observations per variant under concurrent checks showed about
1.41 MB of extra RSS growth. These are process observations, not precise heap-allocation
measurements or timing acceptance. The adopted constant-row approach removes that new
runtime field and expansion path entirely.

The all-SDK first-use probe also changed the native application's initial metadata
state: an unchanged baseline containing that probe exceeded the existing ten-minute
desktop limit. Final V8 correctness and call measurements therefore use the original
acceptance entrypoint without the probe; logs stream live with the existing activation
and timeout behavior. Prototype and interrupted checks are retained separately and are
not acceptance evidence.

All 652 generator tests and eight metadata/registry tests pass. Four-package generation
reproducibility, public type projection, module delivery and workspace analysis pass.
iOS Simulator Hermes debug passes the same 248 named cases and retains the previous
Hermes static-library and normalized engine hashes. Covered behavior includes owner and
method generics, JS inheritance, overrides, async super, callback cycles and joint
collection. The task-booted Simulator is restored to shutdown. Four macOS V8 release/AOT
launches each pass the same 246 named cases; two debug-only rebuild checks are
inapplicable in release. Both standard application builds retain identical Flutter
engine hashes and all five unsigned V8 library hashes, with signing, JIT entitlement and
single-engine-closure checks passing. The standard baseline AOT also matches the
previous accepted application's exact size. AOT measures the whole application,
including Flutter and tests, not bindings alone. Identical constant rows were already
canonicalized by Dart, so this optimization reduces source rather than binary size.

The standard application uses the original acceptance entrypoint. Runs use baseline,
optimized, optimized, baseline order after other builds, checks and the Simulator have
finished. Each process warms up two batches and measures five batches of 200 composite
operations per path. The table pools ten measured batches per variant in microseconds;
all iterations and checksums agree.

| Path                         |     Baseline median (range) |    Optimized median (range) | Median change |
| ---------------------------- | --------------------------: | --------------------------: | ------------: |
| JS inherited calls           | 351,698.5 (327,792–378,821) |   352,655 (332,939–380,725) |        +0.27% |
| JS override and super        |   310,583 (275,598–326,364) | 313,123.5 (278,250–322,869) |        +0.82% |
| Native parent override/super |   382,323 (371,867–390,951) |   382,503 (377,090–390,461) |        +0.05% |

The sample ranges overlap. These observations show no clear throughput regression and do
not establish a speed improvement or universal latency guarantee. Workspace-wide
TypeScript was not rerun: tracked API files are byte-identical and strict TS consumers
are exercised in the generator fixtures. Other platforms were not rerun.

Evidence is kept in `.local/super-tables-20261019/`. No commit, push, CI run or
engine/SDK rebuild is part of this task.

## Compact common descriptions

The measurements compare the current implementation with baseline `da91eb25`.

Common metadata uses five shared compact implementations in the base package rather than
one implementation per bound class. Required parameters store their name and type;
ordinary callback parameters and getters derive default encoding. Plain methods keep
only their call description and typed invocation, or a reference to an existing proxy
signature. Required positional callback flags are omitted from generated source. Special
encoding, snapshots, scoped callbacks, optional/defaulted arguments, navigation and
generic dispatch keep the complete policy. Existing metadata constructors remain valid.

| Measurement                               | Before bytes | After bytes | Reduction |
| ----------------------------------------- | -----------: | ----------: | --------: |
| Complete Core Dart, excluding bootstrap   |   47,091,884 |  46,520,829 |     1.21% |
| Same macOS release application AOT binary |   72,263,584 |  71,836,768 |     0.59% |

The shared base implementation adds 2,951 source bytes. Rendering saves 213,207 source
bytes, Widgets 125,576 and Material 36,816. The AOT code section saves 192,512 bytes and
its constant section saves 229,360. AOT measures the complete acceptance application,
including Flutter and tests, not binding code alone. Signing, hardened-runtime/JIT and
single-V8-closure checks pass; all five unsigned V8 library hashes match the baseline.

All 9,929 tracked JS/TS/JSON files remain byte-identical, including five package
Manifests. The current JS API, readable IDs, Manifest 27, UI protocol 24 and native ABI
2 are unchanged. Token comparison of all 21 generated Dart files, after expanding
compact metadata defaults and removing optional formatting commas, finds no other code
changes. Typed adapters, factory-local generic context, native inheritance, overrides
and lexical super bodies are unchanged. The compact forms add no business-reference
cache or joint-GC root. A focused regression checks conversion roles, errors and
complete-policy fallback; it also corrects an existing registry expectation missing the
Context-call capability.

All 652 generator tests and eight metadata/registry contract tests pass. Official
four-package generation and reproducibility, public types, module delivery, strict
workspace TypeScript and full workspace Dart analysis pass. Changed-source formatting,
Markdown lint and local links pass. iOS Simulator Hermes debug passes all 248 named
cases, matching the previous accepted case map and engine hashes. Four macOS V8
release/AOT launches each pass the same 246 named cases; two debug-only rebuild checks
are inapplicable in release. Covered behavior includes owner/method generic contexts, JS
inheritance, overrides, lexical super and bidirectional collection, including repeated
Widget/State lifecycle cycles. The task-owned Simulator is restored to shutdown.

The Rendering benchmark runs in baseline, optimized, optimized, baseline order after all
other builds, checks and the Simulator run have finished. Each application process warms
up two batches and measures five batches of 200 composite operations per path. The table
pools ten measured batches per variant and reports microseconds; iterations and
checksums agree in all four processes. FlutterMacOS and all five unsigned V8 libraries
are identical between applications.

| Path                         |     Baseline median (range) |    Optimized median (range) | Median change |
| ---------------------------- | --------------------------: | --------------------------: | ------------: |
| JS inherited calls           |   347,892 (335,419–380,117) |   354,518 (333,286–372,530) |        +1.90% |
| JS override and super        | 307,835.5 (289,581–328,583) |   308,176 (274,800–321,284) |        +0.11% |
| Native parent override/super | 381,438.5 (373,458–391,312) | 384,902.5 (374,948–393,211) |        +0.91% |

The sample ranges overlap. These observations show no clear throughput regression but do
not establish a speed improvement or a universal timing guarantee. Cold generic factory
creation, every SDK operation and complete optional-plugin UI suites were not measured
separately; other platforms were not rerun. Review finds no additional
business-reference root or change to conversion policy.

Evidence is kept in `.local/compact-descriptors-20261019/`; task-owned application
copies, Xcode DerivedData and completed scratch directories are removed after recording
results. No commit, push, CI run or engine/SDK rebuild is part of this task.

## Fixed descriptions in generic factories

Generic class and method factories now reuse the existing module constant pool for
closed conversion descriptions and parameter lists. Types depending on an owner or
method parameter remain local. Closed callbacks and deferred constructors also remain
local because their helper functions can capture the current type context. Generic
method factories use the ordinary parameter emitter, preserving defaults and omission
rules. Receiver calls, native super bodies and bridge ownership are unchanged.

| Measurement                               | Before bytes | After bytes | Reduction |
| ----------------------------------------- | -----------: | ----------: | --------: |
| Complete Core Dart, excluding bootstrap   |   48,448,429 |  47,091,884 |     2.80% |
| Same macOS release application AOT binary |   73,412,704 |  72,263,584 |     1.57% |

Widgets saves 421,053 source bytes, Rendering 352,538 and Material 233,473. The AOT code
section saves 793,488 bytes and its constant section saves 352,944. The V8 library
hashes are unchanged; signing and single-engine-closure checks pass. AOT measures the
complete acceptance application, not binding code alone. The current 9,309 generated
API, type-projection, delivery and Manifest files remain byte-identical, including all
3,062 Core TS files and five package Manifests. JS APIs, Manifest 27, UI protocol 24 and
native ABI 2 are unchanged.

All 652 generator tests pass, including the generated-code regression for shared fixed
List, Record, Future and parameter descriptions, distinct String/int owner types,
wrong-type rejection, named callback adapters and factory-local deferred constructors.
Official four-package generation and reproducibility, public-type projection, module
delivery, strict workspace TypeScript and full workspace Dart analysis pass. Changed
Dart formatting, Markdown lint, local links and whitespace checks pass.

Two optimized macOS V8 release/AOT launches each pass the same 246 named cases as two
baseline launches. Two debug-only checks are inapplicable in release. iOS Simulator
Hermes debug acceptance passes all 248 named cases, matching the previous accepted case
map. Covered cases include generic JS inheritance, overrides, lexical super and
bidirectional collection. The task-owned Simulator is restored to shutdown.

The existing Rendering benchmark runs in baseline, optimized, optimized, baseline order.
Each application process warms up two batches and measures five batches of 200 composite
operations per path. The table pools ten measured batches per variant and reports
microseconds; checksums and iteration counts agree in all four runs.

| Path                         | Baseline median (range)     | Optimized median (range)  | Median change |
| ---------------------------- | --------------------------- | ------------------------- | ------------: |
| JS inherited calls           | 347,472.5 (331,059–383,560) | 350,331 (329,617–370,507) |        +0.82% |
| JS override and super        | 310,767.5 (285,897–330,823) | 311,132 (278,936–321,646) |        +0.12% |
| Native parent override/super | 383,285.5 (377,566–390,812) | 383,079 (366,720–386,328) |        −0.05% |

Review reruns pass 15 focused generator cases covering fixed descriptions, lexical
generic scopes, nested callbacks, inheritance, overrides and super. Scoped Dart analysis
and full four-package reproducibility pass. The reviewed production source matches the
accepted dual-engine implementation above; JS, Manifests, runtime and engine sources are
unchanged. Shared constants contain only declaration metadata and top-level typed
helpers, while Session-owned type caches retain their existing close behavior.

The ranges overlap; these small samples establish no speed guarantee or timing
assertion. Cold generic-factory creation cost is not measured separately. Other
platforms, every SDK member and complete optional-plugin suites were not rerun. No push,
CI run or engine/SDK rebuild is included. Source snapshots, raw benchmark samples and
acceptance receipts are in `.local/generic-descriptor-hoist-20261019/`; task-owned
application copies are removed after recording their results.

## Metadata sharing and compact storage

Four changes reuse existing declaration metadata and dispatch. Closed required-only
ordinary and lexical-super operations share matching proxy signatures. Static Dart
constants share conversion groups and readable IDs, with function descriptors created
only when used. Default-valued Dart metadata fields and false JS parameter flags are
omitted. Manifest 27 adds a shared member table alongside its existing type table;
expansion preserves every semantic field and decodes generic scopes independently.

There are 26,572 shared-signature uses and 140 constant groups in Core. The groups
replace 11,761 individual constant registrations. Computed getters, final/late fields,
setters, real defaults and open generic factories retain their existing paths. Public
function enumeration remains available through a cached complete view. Shared metadata
contains no business receivers or callback instances. Sparse parameter readers check own
fields, preserving omission even if application code modifies `Object.prototype`.

| Measurement                                | Before bytes | After bytes | Reduction |
| ------------------------------------------ | -----------: | ----------: | --------: |
| Generated Core Dart, excluding bootstrap   |   49,811,555 |  48,448,429 |   2.7366% |
| Generated Core TS, 3,062 files             |   31,241,006 |  30,565,124 |   2.1634% |
| Compiled generated Core JS, 3,062 files    |   13,818,884 |  13,068,202 |   5.4323% |
| Core Manifest                              |   35,173,787 |  20,270,360 |  42.3708% |
| Acceptance application's delivered JS      |    4,976,652 |   4,642,716 |   6.7101% |
| macOS release App.framework AOT executable |   73,708,192 |  73,412,704 |   0.4009% |

The Manifest has 2,462 shared member entries. After expanding only those references and
normalizing the format number, its complete JSON equals the baseline, including all 17
module models and the unchanged type table. Material Dart saves 736,097 bytes; Rendering
saves 123,606 and remains 15,235,265 bytes. Typed proxy bodies and super adapters still
account for much of Rendering. These are complete SDK source counts and one
representative application measurement, not universal application sizes.

The generator run exercised 651 cases: 650 passed initially, and one old Manifest
version assertion was corrected and passed in the 15-case storage/delivery rerun.
Already passing generator cases were not repeated. Shared/static regressions pass 23
cases, Core JS 82 and `@flax/build` 53. Strict workspace TypeScript, four-package
reproducibility, public-type projection, module delivery and the regenerated author
template pass. Review repeats the 23 shared/static cases, eight storage/delivery cases
and 82 Core JS cases. Full workspace Dart analysis is clean. Current module hashes and
the Core Manifest still match the dual-engine acceptance artifacts. Formatting and
documentation checks pass.

Fresh macOS V8 release/AOT acceptance passes the same 246 named cases as the baseline,
with two debug rebuild checks inapplicable. Fresh iOS Simulator Hermes acceptance passes
248 named cases, including those debug checks. The three native V8 hot-reload cases
pass. The covered cases retain JS inheritance, overrides, lexical super and
bidirectional collection. Both applications embed the same current 31 shared modules,
their registry and 29 business fixture bodies. V8 engine-library hashes and the
application's font hash are unchanged; application signing and execution after removing
temporary sources pass.

The existing five-sample Rendering benchmark retains identical iterations and checksums.
Batch medians change from 357,598 to 359,462 microseconds for inherited calls, 318,841
to 309,571 for JS override/super and 389,326 to 388,665 for native-parent
override/super. A single first-frame sample changes from 269,110 to 286,328
microseconds. Concurrent checks and Simulator execution prevent a controlled latency
conclusion. A separate Node-only constructor benchmark adds about 0.03 microseconds for
two parameters and 0.13 for ten when checking own flags; it excludes FFI and Dart. No
speed guarantee or timing assertion is added.

JS APIs and readable operation IDs remain intact; UI protocol 24 and native ABI 2 are
unchanged. All current package Manifests and the author template use format 27;
providers and consumers must regenerate together. Other platforms, every SDK member and
complete optional-plugin UI suites were not rerun. No push, CI run or SDK rebuild is
included. Concise receipts and the baseline source archive are retained in
`.local/metadata-sharing-20261019/`; task-owned application copies and caches are
removed after auditing, and the Simulator returns to Shutdown. The later sections retain
measurements from earlier stages.

## Widget member sharing and constructor layouts

Closed Widget object views now reuse the existing ordinary-object descriptor and typed
adapter sharing. Dart parents remain within one generated module. Exact member matching
preserves defaults and conversion policies; narrowed members keep local adapters.
Generic owners, native proxy subclasses and lexical super retain their existing
generation paths. JS private prototypes reuse selected parents through the existing
provider registration, including deferred registration across module cycles. Complete
identical constructor and method parameter layouts share arrays within a generated file;
factory-only arrays stay lazy. Neither cache retains business receivers or callback
instances.

All 17 Core module API-model digests and the shared type-table digest match the fresh
baseline. Manifest 26 remains 35,173,787 bytes; UI protocol 24 and native ABI 2 are
unchanged. The production runtime, maintained engine and dependency locks are unchanged.

| Measurement                                | Before bytes | After bytes | Reduction |
| ------------------------------------------ | -----------: | ----------: | --------: |
| Generated Core Dart, excluding bootstrap   |   50,867,559 |  49,811,555 |    2.076% |
| Generated Core TS, 3,062 files             |   31,841,667 |  31,241,006 |   1.8864% |
| Compiled generated Core JS, 3,062 files    |   14,494,369 |  13,818,884 |   4.6603% |
| macOS release App.framework AOT executable |   75,103,552 |  73,708,192 |   1.8579% |

Dart savings are 882,678 bytes in SDK Widgets, 158,984 in SDK Material, 10,108 in SDK
Cupertino and 4,234 in curated Flutter. Rendering remains 15,358,871 bytes. The AOT
measurement uses one unchanged acceptance application and engine closure; it is not a
universal application-size estimate or an application-only binding selection.

The generator suite exercised 659 cases: 656 passed initially and three existing fixture
assumptions were corrected and passed on rerun. The complete suite was not repeated
after those fixture-only corrections. Exact negative-path fixtures now isolate package
lookup on the workspace volume, and numeric collection callbacks use their common
iterable input view. Core JS passes 81 cases, prepared-module delivery 17 and Manifest
delivery three. Strict workspace TS, Dart analysis, four-package reproducibility, public
type projection and delivery inventory checks pass. All 22 generated library indexes
load, exposing 5,786 names.

Fresh V8 release/AOT acceptance passes the same 246 named cases with two debug-only
checks inapplicable. Engine-library hashes are unchanged. All 31 embedded test-module
bodies match the current prepared JS artifacts, including the updated Widget modules.
The three native V8 hot-reload cases pass. Fresh iOS Simulator Hermes acceptance passes
248 named cases, including the two debug checks. Both engines verify signing, one
unchanged engine closure and execution after temporary source removal. The Simulator is
restored to its initial Shutdown state and task-owned application/DerivedData copies are
removed after recording results.

The existing Rendering control benchmark keeps identical checksums. Five-sample batch
medians change from 361,182 to 339,160 microseconds for inherited calls, 320,440 to
302,551 for JS override/super and 398,356 to 373,768 for native-parent override/super.
One first-frame measurement changes from 307,335 to 319,675 microseconds. Concurrent
static checks and a brief progress sample prevent treating this as a controlled latency
benchmark; no performance guarantee or time assertion is added. Widget-specific call
latency and exhaustive execution of every SDK member are not claimed.

Sources, examples and UI fixtures were regenerated through official commands. Local
evidence is in `.local/widget-binding-sharing-20261019/`. No commit, push, CI run or SDK
rebuild is included.

## Current shared capability completion

The production binding backend is unchanged. Five corrections share existing selection,
conversion and runtime mechanisms:

1. Non-virtual members remain ordinary callable members of native proxies. Only illegal
   Dart overrides and generated super adapters are excluded. Shared JS descriptors also
   handle parents registered later by cyclic modules. Async type registration refreshes
   any ordinary prototype prepared before Future or Stream ancestry was known.
2. Context instance methods reuse State's typed invocation, callback ownership, generic
   calls and return conversion. Mounted and session checks remain mandatory.
3. Widget identity resolves through the package source-owner index across library
   boundaries. Widget-constrained mixins remain non-constructible object views.
4. Invalid observed dynamic generic uses no longer discard legal constructor plans.
   Explicit type arguments still enforce bounds. Abstract optional non-null parameters
   preserve real omission rather than guessing a null default.
5. One dependency scope selects 39 public vector, encoding, IO, developer and isolate
   types needed by Flutter signatures. Source ownership remains shared. Numeric typed
   arrays reuse shared-buffer conversion for compatible List/Iterable inputs;
   incompatible element types, ArrayBuffer and DataView are rejected.

Core now has 17 modules and 3,080 outputs. Reproducibility passes; its source index has
14,628 owner rows, 1,477 references, no duplicate owner and no unresolved reference. The
raw skip rows fall from 4,196 to 4,119; distinct rows fall from 2,081 to 1,991. These
are diagnostics, not independent missing APIs. The Manifest is 35,173,787 bytes,
compared with 34,416,060 before this completion. Rendering Dart is 15,358,871 bytes,
compared with 15,167,003; these are source sizes, not application binary sizes.

Focused V8 execution passes the 14 SDK public-entry smoke cases and five shared
Rendering/SDK cases. The latter cover inheritance, overrides, super, callbacks, Context
invalidation and actual bidirectional collection. All 81 Core JS cases and 17 module
delivery cases pass, as do strict TypeScript, public type projection, generated Dart
analysis and documentation checks. The full generator run exercised 648 cases; two
failures were corrected and all 23 cases in the affected files passed on rerun.

The final macOS V8 release/AOT application passes 246 named cases; two Flutter
debug-rebuild checks are explicitly inapplicable. The final iOS Simulator Hermes
application passes 248 named cases, including actual Action construction and Dart-to-JS
override invocation. The focused final V8 debug run also exercises that Action call.
Both application audits verify signing, a single unchanged engine dependency closure and
execution after removing the temporary source workspace. V8 release retains the required
JIT entitlement. The task-booted Simulator is restored to Shutdown.

The first Hermes attempt used fixture bundles pinned to an earlier Core JS artifact and
was correctly rejected by module compatibility checks. Official fixture regeneration
preserves that validation; both subsequent complete Hermes runs pass. The final shared
Future/Stream prototype registration regression passes all 81 JS cases before the final
dual-engine application acceptance. Initial failing logs remain in the local evidence.

The dependency selection does not promise the whole IO/vector library surface. Private
Flutter types such as WindowingOwner and private generic aspects remain unavailable. The
current extends-proxy constructor rule also still excludes redirecting/factory
constructors such as Action.overridable. No engine, ABI, UI protocol or Manifest format
change is required. Local evidence is in `.local/sdk-capability-completion-20261018/`.
Every SDK member, optional plugin suite, other platforms and mobile hot reload were not
freshly rerun. No commit, push, CI run or SDK rebuild is part of this task.

## Pre-completion full-SDK audit

The production backend is retained. A fresh audit at Flax `1e70814481b8` and maintained
Flutter `49e4666a853` resolves all 13 native public Flutter entries plus `dart:ui`.
Package generation consistency passes for all 16 modules and 3,028 outputs. Strict
generated Dart/TypeScript, public types and module delivery pass. The source index has
14,481 owners, 1,443 references, no duplicate owner and no unresolved emitted reference.

The public census contains 2,960 distinct declarations. Production models represent
2,933 source identities; this is not complete member or runtime coverage. The 27
unrepresented declarations include nine visibility exclusions, six native JS binary
mappings, the explicit `runApp` exclusion and 11 dependency/selection restrictions. The
4,196 raw skip rows must not be interpreted as independent failures.

Actual macOS arm64 V8 debug execution passes one representative call from each of the 14
SDK entries and both existing Rendering inheritance/super/joint-GC cases. A new
callable-member contract fails for JS-created proxies: `AssetImage.resolve`,
`ImageStreamCompleter.maybeDispose` and `NumericFocusOrder.compareTo` are absent.
Cleanup completes before the failing assertion. The corresponding SDK methods are
non-virtual; forbidding overrides must not remove ordinary calls.

| Remaining area                             | Cause and proposed shared correction                                                                                                                                                                                                                                                                                                |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ordinary calls on proxies                  | 13 diagnostic rows across ImageProvider, ImageStreamCompleter and FocusOrder conflate override eligibility with callable-member selection. Preserve ordinary typed calls while omitting illegal overrides and super entries. Three representative missing methods are reproduced in V8.                                             |
| Context instance methods                   | 16 BuildContext methods remain blocked by the special adapter; its runtime descriptor has no instance method table. Reuse typed invocation with mounted/session checks. The separate NavigatorState constructor rejection remains appropriate.                                                                                      |
| Type lookup and mixin classification       | Widget Preview requires Widget to be re-exported locally despite its existing package owner, producing eight member/typedef diagnostics. SlottedMultiChildRenderObjectWidgetMixin is classified as a constructible Widget and omitted with two dependents. Reuse authoritative source identities and non-constructible mixin views. |
| Generic constructors and abstract defaults | Observed dynamic arguments normalized to Object? discard Action/ThemeExtension constructor plans on bound failure. Reuse legal defaults or checked explicit types. Decoration.createBoxPainter also needs omission forwarding for its abstract optional callback instead of a guessed default.                                      |
| Dependency type scope                      | Vector/Matrix/Quad dependencies account for 63 diagnostic rows, restricting Matrix4 and InteractiveViewer. Encoding and IO/isolate/platform types cause additional partial surfaces. Select necessary public dependency types through the shared owner plan; retain private/API visibility and platform boundaries.                 |

Evidence and every remaining diagnostic are in
`.local/flutter-sdk-validation-20261018/`: `README.md`, `audit.json`,
`unique-skips.json`, per-library inventories and native/static logs. No generator,
runtime, engine or generated output changed. Hermes, release/AOT, all SDK members and
platform services were not freshly rerun. The older acceptance sections below remain
scoped historical evidence, not proof that these API gaps are closed.

## Scope

Generate all 13 public `package:flutter/*.dart` entries and complete `dart:ui` in
`packages/flax` on `feat/flutter-sdk-bindings`, using the maintained Flutter fork.
`flax_sdk_*.yaml` declares automatic library scopes. Existing Core selections keep
necessary semantic overrides and stable binding IDs; all scopes share one package
transaction, declaration-identity plan and Manifest. Public declarations remain in
`packages/flax_flutter` and `packages/flax_dart`.

The locked `material_ui` and `cupertino_ui` libraries remain independent plugins under
`@flax/material-ui` and `@flax/cupertino-ui`. Flutter's own Material and Cupertino
bindings belong to Core. Their declaration-only `@flax/material-ui` and
`@flax/cupertino-ui` packages remain separate from `-runtime` source packages and use
the same public-type projection and plugin injection as other optional packages. Earlier
per-package probes below are diagnostic baselines, not the final package layout. Engine
binaries and dependency versions remain locked; CI, SDK rebuilds, commits and
publication are outside this task.

## Core integration

- Reuse Manifest source identities for dependency and sibling lookup. Explicit scopes
  take precedence; automatic reexports choose the nearest public carrier, with a stable
  module-name tie break. Bare `types` selections reuse unique imported owners, including
  enums, and canonical wire IDs determine emission regardless of module order. Prepare
  the whole type pool and infer every scope before parsing signatures, so parents and
  generic defaults do not depend on config order.
- Compose disjoint contributions to one public-library facade. Runtime requirements
  already support multiple binding modules per public entry. Other output collisions and
  conflicting declarations remain errors.
- Resolve native carrier declarations through analyzer rather than guessing an identity
  from a reexport URI. Keep each provider's authoritative named-type model. Preserve
  semantic Widget ancestry after source identities become wire IDs.
- Core callback values use ordinary native objects instead of the retired selected
  Offset/key/pointer snapshot projections. Explicit snapshot generation remains
  available to independently configured adapters.
- Automatic proxies inherit non-virtual native methods without generating overrides.
  Opaque private generic ancestors retain only source-identity metadata; their private
  constructors and methods are not exposed. Widget static generic methods use the
  ordinary checked call path rather than ordinary-object deferred factories.
- Preserve complete nominal ancestry and descriptor generic arguments, including input
  markers required by Dart covariant callbacks. Existing native input adapters also
  accept the direct declaration brand. Use the public override signature and the actual
  concrete method signature for proxy `super` calls; named parameters are matched by
  name, positional parameters by position. Cross-module deferred factories reuse the
  session's function registry. Ordinary classes and enhanced enums share
  inherited-member conflict handling. Runtime subtype selection normalizes generic
  specialization IDs to declaration identities while keeping independent package
  namespaces isolated.
- Retain enum constant identity when a public constant aliases an enum value. Separate
  case-colliding private filenames without renaming public declarations. Report dynamic
  constructors with `@mustBeConst` arguments as unsupported, keeping const getters.
- Calculate module capability requirements once per split plan, rather than once per
  declaration chunk. SDK callback values and Canvas fixtures use ordinary event/key/
  Offset references, `instanceof`, and the existing joint collector.

Before capability completion, the formal Core Manifest had 16 modules: the two curated
modules and 14 automatic SDK scopes. Its source-index audit records 14,481 owner rows
and 1,443 references, with no duplicate owner or unresolved reference. Owner rows
include static operations and are not a class count. The models contain 2,263 classes,
125 top-level functions, five extensions and 335 typedefs. Ordinary supported members
are inferred; unsupported selections still retain their skip reasons.

Before the shared-generation optimization below, uncompressed generated outputs occupied
130,036,843 Dart bytes and 38,198,346 TypeScript bytes; the pretty-printed Manifest is
295,851,237 bytes. Complete SDK signatures and ancestor metadata materially increase
cold compiler and analysis costs. These sizes are source/metadata measurements, not
application binary sizes. Shared public-type projection runs once per workspace JS
build. Capability probes share the analyzer environment while keeping independent parser
selections; fixture modules normalize their dependency Manifest only once.

Manifest 24 storage remains unchanged in this task. A shared type-table storage
experiment is deferred to the next round; the current 296 MB Manifest cannot be pushed
as an ordinary GitHub file. No commit or push is part of this validation.

Validation receipts are stored in `.local/sdk-core-unification-20261017/`:

- Formal workspace regeneration consistency, strict Dart/TypeScript, JS builds,
  public-type projection and module delivery pass. The final formal package check takes
  822 seconds; the shared capability matrix takes 34 seconds.
- Generator coverage combines the full run's 619 passes with successful focused repairs
  of all 17 failures, covering 636 logical cases. This is combined evidence, not a fresh
  passing run of the entire generator suite. The final JS suite passes 194 tests; other
  package units pass 54, tooling passes 91 with one Windows-only CDB self-test
  inapplicable on macOS, and engine tooling passes eight.
- The final V8 framework run passes all 615 cases without failures or skips, including a
  real Physics import using the default binding registry. Its runner takes 1,669
  seconds. All seven owner example Widget tests and six native example integrations
  pass; Cupertino has no separate native example integration fixture. Both aggregate
  Widget tests and the native aggregate application also pass.
- The signed, relocated macOS release/AOT application passes 240 cases with V8 JIT
  proof; two Flutter debug-hook checks are inapplicable. The signed, relocated iOS arm64
  simulator debug application passes all 242 cases with one embedded Hermes interpreter
  closure. Final regeneration leaves runtime Dart unchanged; a semantic audit confirms
  the only fixture JS difference is whitespace and its delivery metadata differs only in
  the lock digest. The Hermes result therefore remains applicable. Runtime gates cover
  inheritance, overrides, `super`, callbacks, provider selection and actual joint GC.
- Independent Dart/npm archive consumers pass in 751 seconds. Final host
  reproducibility, workspace analysis, formatting, documentation and diff checks pass.
  No CI, engine rebuild, commit or push is part of this acceptance.

V8 UI acceptance combines the successful framework and owner-example stages with the
corrected formal aggregate replay. The first full UI command and an unchanged verbose
aggregate control failed during DDS startup, before the driver could negotiate
`getVersion`. The same application, driver and assertions pass with a direct VM
connection. The aggregate entry now uses `--no-dds`, matching the existing maintained
engine application gates; no Dart/JS runtime or GC change is needed for this correction.
The corrected formal aggregate command passes in 198 seconds. The original failed
invocations remain recorded rather than being described as successful full commands.
Hashes confirm all 518 runtime/test program and prepared-module files remain identical
to final regeneration throughout acceptance.

Superseded failures, resource-contention failures and a stopped unit command that
accidentally included UI tests remain in local evidence. Only the corrected unit file
selection and successful final gates are counted as passes. Full SDK entry generation
does not certify every source API; unsupported selections keep their actual skip
reasons.

## Shared Dart generation

The `RenderObject` → `RenderBox` → `RenderProxyBox` probe uses the formal Rendering
Manifest and the production emitter. Equivalent ordinary member adapters now reuse a
selected ancestor within the same module. Dart retains virtual dispatch. Lexical `super`
entries, narrowed signatures, operators and generic owner/method factories keep their
own adapters. Complete conversion metadata, including omitted parameters and callback
policy, participates in the sharing key.

Closed callback adapters are interned by their full structural signature. Immutable
runtime type, callback and member descriptors are emitted once as module constants. This
shares code and immutable metadata, never callback instances or business roots. The
existing object registry, proxy peer, callback ownership and joint collector remain
unchanged. Generic callbacks retain the selected owner scope when their local type
parameters are defaulted; rebuilding metadata from an unspecialized declaration could
otherwise reintroduce an out-of-scope owner type parameter.

The formatted three-class probe shrinks from 1,033,572 to 596,157 bytes (42.3%); its
callback adapter factories fall from 321 to 68, with 186 ordinary member aliases.
Applying the same emitter to Core shrinks generated Dart from 130,036,843 to 76,292,133
bytes (41.3%). Rendering falls from 53,389,386 to 26,966,218 bytes (49.5%). Core
callback factory counts fall from 32,561 to 4,692; Rendering falls from 15,662 to 961.
These are source measurements, not AOT binary reductions. All 6,371 recorded JS and
Manifest files remain byte-identical at this measurement. Manifest 24 storage, protocol
24 and native ABI 2 are unchanged.

The macOS arm64 release comparison uses identical application/test sources and the same
maintained engine. The signed `App.framework/Versions/A/App` AOT binary falls from
152,504,992 to 98,939,584 bytes (35.1%, saving 53,565,408 bytes). Its code and read-only
constant sections both shrink:

| Mach-O section | Before (bytes) | After (bytes) |
| -------------- | -------------: | ------------: |
| `__text`       |     81,152,384 |    54,779,136 |
| `__const`      |     71,005,856 |    43,915,728 |

The snapshot includes Flutter, the test application and all referenced bindings; these
are controlled whole-application differences, not isolated binding-only binary sizes.
All 70 executable fixture JS files and the prepared module inventory are byte-identical.
The fixture asset also embeds generated Dart source, so its separate size reduction is
not counted in the AOT figure; fresh TLS fixtures and the delivery lock digest are
accounted for separately. The two benchmark applications freeze the same test source.
Subsequent fixture lint fixes only spell out `Map<dynamic, dynamic>`, add braces around
a conditional `break`, and apply Dart formatting; local evidence records their
normalized equivalence.

Reproduce generation with `dart run tool/package.dart bindings`. The focused native
fixture is `packages/flax/test/ui/render_bindings_test.dart`; it is also included in
`examples/standalone/integration_test/engine_gc_test.dart` for V8 release/AOT and Hermes
simulator acceptance. It covers private JS fields, inherited calls, method overrides,
explicit `super`, `mustCallSuper`, child callback identity, and a real Dart→JS→Dart
callback cycle with each side independently rooted and then both roots removed. Its
benchmark reports warmed batches of 200 rounds, five samples per path and checked
results; each round performs several calls. It has no timing assertion.

The accepted ABBA comparison completes four application launches, each passing all 242
named cases. Each variant contributes two launches and ten batches per path, with 200
rounds per batch. One round performs several layout/intrinsic/size calls. Median
microseconds per round are:

| Path                              | Before (µs/round) | After (µs/round) | Change |
| --------------------------------- | ----------------: | ---------------: | -----: |
| JS inherited calls                |           1846.07 |          1838.31 |  -0.4% |
| JS override + super               |           1567.76 |          1589.17 |  +1.4% |
| Dart parent → JS override + super |           1936.18 |          1950.87 |  +0.8% |

The before/after sample ranges overlap substantially. These observations show no
persistent call-cost regression in the measured paths and do not establish a universal
speedup. No timing assertion is added. An attempted after-run stopped advancing in a
frame-dependent case until its window was reactivated; that interrupted run is retained
and excluded. The successful initial baseline is reused; the remaining accepted launches
keep the test window active. Workspace compilation, other task tests and the simulator
are stopped during sampling. Per-launch medians, ranges, checksums and foreground policy
are recorded in `performance-summary.json` and `performance-runs.json` under the local
evidence directory.

Validation for shared emission:

- The final focused generator file passes all six cases, including separate business
  callbacks, reversed class order, narrowed signatures, omitted override defaults,
  cross-module isolation and nested callback-local/owner generic scopes. Three earlier
  timeout cases pass their serial replay with their original timeouts. The existing main
  generator group passed 43 cases before the final callback-metadata refinement; this is
  combined evidence, not a fresh passing run of the entire generator suite.
- Formal workspace regeneration and final Core regeneration pass. All three optional
  generated plugin modules reproduce byte-for-byte with the final emitter. Final
  generator/Core output/test-entry analysis reports no issues. Original concurrent
  timeouts and the stopped broader suite remain in local evidence.
- The signed, relocated V8 release/AOT application passes the same 242 named cases on
  both sides. Two Flutter debug-hook checks remain inapplicable. New Render cases cover
  actual virtual dispatch, JS private fields, mandatory `super`, independently rooted
  peers and collection of a rootless callback cycle before Session closure. Final review
  finds no new descriptor ownership or callback capture problem.
- The final signed, relocated iOS arm64 simulator debug application passes all 244 cases
  with embedded Hermes. Both new Render cases pass, including rootless collection before
  Session closure. The task-booted simulator is shut down after acceptance.

Disposable sources, baseline hashes, logs and measurements live in
`.local/binding-sharing-20261018/`. Both AOT applications use the same test sources and
engine binaries. Whole application AOT size includes Flutter, test code and all
bindings; it is not a measurement of bindings in isolation. Timings collected during
concurrent compilation are retained as diagnostic data and excluded from performance
conclusions.

## Initial evidence

The initial primary census contains 2,960 distinct source declarations. Counting
re-exported APIs separately would overstate that surface. Initially only Physics passed
generation, strict Dart/TS checks, bundling and reproducibility; Foundation generated
but failed strict checks, and the other public entries stopped during generation.

A real V8 Physics probe passed native calls, JS subclass overrides, private fields,
`super`, enums, checked casts and cleanup. Initial Foundation probes confirmed two real
runtime failures: a business `constructor` getter executed during proxy registration,
and Future subclasses rejected standard Promise adoption. These failures are retained as
baseline evidence, not current restrictions.

## Shared implementation

- Public protected members remain callable and overridable. Normalize selected members,
  disposer and listener metadata before comparing provider capabilities. Generated
  adapters isolate protected-use and retained-upstream deprecation diagnostics.
- Resolve dependency carriers by declaration identity and actual Manifest ownership.
  Independent packages may still bind the same Dart declaration. Consumers reuse
  compatible providers, including Core functions, without merging equal short names.
  Dart uses prefixed imports and JS uses provider namespaces.
- Preserve selected nominal bounds, inherited signatures and native buffer conversion.
  TypeScript views own their selected overrides and type-token witness, including
  covariant methods, mixins and typed-buffer projections. Private enum constants use the
  public `values` list; they retain indices and round trips without named JS exports.
- Future object subclasses share Promise adoption and standard completion methods;
  Stream object subclasses reuse typed subscription projection and async iteration.
  These adapters require the additive `native-async-objects` capability, with protocol
  24 and native ABI 2 unchanged.
- Capture proxy class identity before installing business accessors. Prefix converted
  proxy results to avoid business parameters named `result`. Build generic callback
  metadata in top-level typed factories: a session cache must not capture an instance or
  its per-call super closure.

The Future regression includes JS overrides, `super.then`, `await`, Promise adoption,
Stream iteration and discarded cross-heap cycles. Moving callback metadata out of the
instance scope fixes the confirmed receiver retention without changing engine GC.

## Verification workflow

Temporary owner packages use the production automatic pipeline. Build complete providers
before consumers and declare the actual binding dependencies. In particular, Services
must depend on the `vector_math` provider as well as Foundation/Scheduler and `dart:ui`;
otherwise its public Matrix4 re-export correctly creates an independent provider that
becomes ambiguous downstream.

Generation success, strict Dart analysis, TypeScript checking, bundling, reproducibility
and native acceptance are recorded separately. A generated provider that fails
compilation may unblock further diagnosis but is not accepted. Unsupported selection
skips retain their actual codes and reasons.

Earlier source tests, strict checks and V8 regressions are recorded under
`.local/flutter-sdk-fixes-20261017/`. That round's dependency matrix is
`graph-results.json`; logs retain failed controls separately. Initial census and runtime
receipts remain under `.local/flutter-sdk-bindings-20261017/`.

## Previous per-package SDK verification

The review rerun covers every one of the 13 public Flutter `lib/*.dart` entries,
complete `dart:ui`, one `vector_math` provider and two locked UI package comparisons.
Fresh owner packages use the production automatic pipeline and declared dependency
providers. Receipts, complete skips, logs and generated outputs live in
`.local/flutter-sdk-review-20261017/`; `matrix-audit.json` separates all five static
stages and records blocked targets without treating them as executed successes.

Nine of the 14 SDK entries pass generation, strict Dart analysis, strict TypeScript,
bundling and reproducibility: `dart:ui`, Foundation, Physics, Scheduler, Animation,
Semantics, Services, Gestures and Painting. The auxiliary vector-math provider also
passes all five stages. Automatic selection still reports unsupported declarations and
members as skips; a successful entry is not a claim that every source API is bound.

| Target                                           | Current result                                              | Remaining cause                                                     |
| ------------------------------------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------- |
| Rendering                                        | Generation, Dart, bundle and reproducibility pass; TS fails | 143 diagnostics in three shared type-view families, described below |
| Widgets                                          | Generation fails                                            | `Unbound runtime type argument: InheritedWidget`                    |
| Material, Cupertino, Widget previews             | Blocked, not executed                                       | Widgets has no generated provider                                   |
| Locked Material/Cupertino UI package comparisons | Blocked, not executed                                       | Widgets has no generated provider                                   |

Rendering's 143 TypeScript diagnostics are 141 `TS2344` and two `TS2741` errors. They
reduce to three related contracts:

- Core's `BoxConstraints` view lacks the full Constraints view's brand and type-token
  witness, so valid RenderBox/RenderSliver subtype bounds fail structural checking.
- Dart's covariant `handleEvent` entry parameters narrow to BoxHitTestEntry or
  SliverHitTestEntry. The generated callable views then fail HitTestTarget
  assignability.
- AppKitViewController and UiKitViewController return views lack the type-token witness
  required by DarwinPlatformViewController's generated type.

These need a shared nominal-bound/view solution. The current rerun retains each actual
TS failure without changing the generated types to `any` or excluding those APIs.
Widgets separately needs its generic default type resolution reconciled with abstract
Widget bindings. Rendering's failed provider is usable for diagnosis, not acceptance;
Widgets fails before its own compile, bundle or reproducibility stages can run.

Full native runtime/UI suites were not rerun for this review. The prior maintained V8
and Hermes results below cover the curated production bindings, not every SDK API.

## Curated configuration migration

A subsequent approved task moves default selections to `flax_bindings.yaml` and
`flax_components.yaml`. Declaration scopes reuse the automatic selector; only routing,
fixed State mixins, callback/lifecycle policy and deliberate surface overrides remain.
Rendering-only Widgets share an override that preserves reactive descriptions, while
native Widget views retain their real-object contract. The four production selection
files shrink from 1,881 to 586 lines. The previous class categories, IDs, members and
constructor parameters remain present; additional supported APIs are now inferred.

The Duration prototype includes native Dart calls and strict TypeScript declaration
emission for re-exported factories. Production generation, public-type projection and
module delivery reproduce through the official commands. Verification receipts and raw
logs for this follow-up live under `.local/binding-config-migration-20261017/`. This
configuration migration does not certify the complete Flutter SDK matrix above.

That migration was validated with 629 generator tests, 194 JS tests, 91 tool tests and
eight engine-tool tests; the Windows-only CDB self-test is skipped on macOS. Analysis,
formatting, strict TypeScript, documentation, archive consumers and native configuration
also pass. Workspace verification combines the successful preparation stages and scoped
reruns after correcting outdated fixture expectations.

Maintained V8 covers all 614 owner UI cases through the initial successful cases and two
focused reruns, followed by all seven owner examples and the aggregate application. The
initial run retains a stale capability assertion and a VM-service GC request timeout as
failed controls; the assertion is updated and the GC timeout does not recur in the
focused rerun. No GC behavior or timing assertion is changed. Maintained Hermes passes
242 runtime/UI cases in a relocated, signed iOS arm64 simulator debug application, with
zero failures and one embedded Hermes closure. Signals business subscriptions use the
existing signals-core instance and pass their four new behavior tests and public type
checks.

## Configuration and signals review

Two paths rejected valid partial overrides after reusing an adequate provider: scoped
classes and top-level functions. The shared selector now checks the requested override
before reuse, keeps the imported API intact, falls back to a local binding for an
insufficient non-Core provider, and rejects incompatible Core overrides. Function data
conversion and route-builder policy participate in compatibility checks. Regression
coverage includes narrow provider views, unknown members, ordinary object references,
Future data copying and Core ownership. Signals keep the existing signals-core instance
and subscription lifecycle; the review found no additional signals defect.

Final frozen-source verification passes all 630 generator tests, 65 focused
configuration and provider tests, and 73 Core JS tests. Generator Dart analysis,
workspace TypeScript, all five production configuration reproducibility checks, public
type projection and module delivery also pass. The earlier full run loaded the selector
before the final function fix and is retained as a failed control;
`codegen-full-final.log` is the fresh passing run. `verification-receipt.json`
identifies the final checks and source hashes. Review corrections remain local, with no
new commit, push, CI run or engine rebuild.

## Inherited metadata and JS compaction

Readable operation IDs are retained. Ordinary non-generic bindings now store a selected
parent and changed members; Dart caches the effective immutable table once and JS uses
private prototype inheritance. Complete effective signatures still govern adapter
sharing. Restricted selections cannot gain extra APIs, and lexical proxy `super`,
generic scopes and narrowed signatures remain explicit. The omitted-JS fallback reuses
the checked super helper. Collection proxies also copy inherited synthetic collection
accessors; traversing only the immediate prototype would lose APIs such as `length`.
Selected parents register before children within each generated module, because
collection proxy initialization reads those prototypes eagerly. Exact closed generic
views retain their operation identity without allowing sibling views to substitute.

Closed parameter lists and proxy rows are shared. TypeScript uses common type aliases
for repeated omitted-member key sets. Static readers share an installer and operation
prefix while retaining every selected name. These mechanisms retain metadata, not
business receivers or callback instances; joint-GC ownership is unchanged.

The comparison starts from the preceding sharing implementation, using the same Core
generated file paths (decimal bytes):

| Output                        | Before (bytes) | After (bytes) |
| ----------------------------- | -------------: | ------------: |
| Core Dart, 17 generated files |     76,292,133 |    62,665,877 |
| Rendering Dart                |     26,966,218 |    20,325,018 |
| Core TypeScript, 3,011 files  |     38,198,346 |    31,258,293 |
| Material Icons emitted JS     |      1,324,609 |       190,655 |
| Cupertino Icons emitted JS    |        218,167 |        26,246 |

The Icon JS comparison uses the same esbuild TypeScript transform before and after,
without minification; it excludes the shared runtime implementation. All 8,824 selected
Material reads and 1,322 Cupertino reads retain exactly the same readable operation IDs.
Aliases, dynamic names and adaptive icons remain available. A maintained-frontend AOT
experiment confirmed that constructing `IconData` from runtime code points produces a
non-constant location rejected by Flutter's release font tree shaker. The shared-reader
implementation therefore preserves native Dart constants rather than requiring
`--no-tree-shake-icons` or removing dynamic access.

The relocated macOS release acceptance app uses the same embedded V8 library, selected
type/function identities and test cases. Both ordinary example assets and the separate
UI fixture inventory were rebuilt with the official commands and matched against the
packaged files; updating only the runtime bundle leaves stale fixture dependencies. The
measured application sizes are:

| Packaged output               | Before (bytes) | After (bytes) | Reduction |
| ----------------------------- | -------------: | ------------: | --------: |
| Dart AOT application binary   |     98,939,584 |    98,168,032 |     0.78% |
| Ordinary module JS, 23 files  |     10,382,949 |     9,484,444 |     8.65% |
| Test-only module JS inventory |     15,917,134 |    13,639,144 |    14.31% |
| Complete test fixture JSON    |     46,447,398 |    41,411,806 |    10.84% |

These are different scopes, not additive savings. The acceptance app includes full SDK
bindings and test fixtures; it is not a minimal business application. Source reduction
does not imply the same reduction in compiled AOT code or live heap usage.

Final maintained-engine acceptance passes 242 V8 macOS release/AOT cases and 244 Hermes
iOS simulator debug cases. The two additional Hermes cases use Flutter debug rebuild
hooks unavailable in release. Both runs verify source-independent application delivery;
the simulator was restored to its original shutdown state. The generator suite has
passing evidence for all 642 cases: three stale generated-output assertions were updated
and two timeouts passed isolated reruns without increased limits. The last parent-order
change additionally passed six shared-emission, 18 capability-emission and one
cross-module-order regression. All 76 Core JS tests, Core TypeScript checks and
generated Dart analysis pass. Full native runs include inheritance, overrides, lexical
`super`, exact generic views, callbacks and cross-heap cycle collection.

The same-device release comparison ran baseline/after/after/baseline, with every launch
passing all 242 cases. Each path used two warm-up batches and five measured batches of
200 composite Render operations per launch. Pooling the ten samples per variant gives:

| Composite path                        | Before median (ms) | After median (ms) | Change |
| ------------------------------------- | -----------------: | ----------------: | -----: |
| JS inherited calls                    |            356.892 |           355.419 | -0.41% |
| JS override and lexical `super`       |            315.730 |           316.293 | +0.18% |
| Dart parent into override and `super` |            391.919 |           392.981 | +0.27% |

Checksums match in every batch. The observed hot-path cost is effectively unchanged;
these are composite batches, not individual bridge-call latency. Two launches per
variant are insufficient for a general speedup claim. First-frame samples were
548.968/739.493 ms before and 489.599/652.757 ms after; their spread and the
instrumented test harness do not establish production startup improvement. Raw samples,
per-launch medians and ranges are in `performance-runs.json` and
`performance-summary.json` under the evidence directory.

The remaining Rendering source contains 8.15 MB of typed proxy classes and 3.70 MB of
lexical super adapters. Readable ID literals occupy 0.36 MB. A Dart proxy for
`RenderProxyBox` must remain a real `RenderProxyBox`; making it extend the proxy for
`RenderBox` would change its native behavior. Further reductions in these typed entries
need a separately measured compiler/runtime design, not an erased receiver or a smaller
supported API set. Raw evidence is in `.local/binding-inheritance-20261018/`.

## Shared closed proxy dispatch

Equivalent closed proxy overrides now call module-local typed functions. Each proxy
keeps its native superclass, Widget mixin, constructor defaults and lexical-super
helpers. Small overrides pass their actual member index directly. Private interfaces
supply the peer, native-super helpers and existing super guards; no extra base class,
slot table, callback instance or joint-GC root is introduced. Full signatures and
conversion policies must match. Open generic scopes and the existing special proxy paths
stay local. Selection ranks repeated bodies and caps each proxy at three interface
groups.

A shared-mixin prototype passed 642 generator tests and the 242-case V8 release suite,
but increased the same application's Dart AOT binary from 98,168,032 to 98,726,176 bytes
(+0.57%). Both code and constants grew. It was rejected despite reducing the Rendering
source further. The final shared-function application, rebuilt after refreshing all UI
fixtures, reduced Dart AOT to 94,178,944 bytes (-4.06%). Executable JS fixtures, public
module/type/function identities and the embedded V8 libraries match the baseline.

| Measurement                        | Before       | Shared functions |
| ---------------------------------- | ------------ | ---------------- |
| Native Rendering source (49 files) | 1,948,820 B  | 1,948,820 B      |
| Rendering generated Dart           | 20,325,018 B | 18,582,566 B     |
| Core generated Dart (17 files)     | 62,665,877 B | 60,267,647 B     |
| Delivered JavaScript               | 9,484,444 B  | 9,484,444 B      |
| Release application Dart AOT       | 98,168,032 B | 94,178,944 B     |

Rendering uses 144 shared functions and 30 private interfaces across 191 proxies; there
are no shared-dispatch mixin applications or slot tables. Constructor and lexical-super
code remains class-specific. IDs, Manifest 24 storage, JS APIs, UI protocol 24 and
native ABI 2 are unchanged. The original generated registrations, provider associations
and inherited member sharing remain in place.

The focused shared-binding regression covers reordered member indices, covariant
arguments, native virtual dispatch, inherited defaults, getters/setters, operators,
nested super guards and synchronous/asynchronous missing-super failures. The real
Rendering fixture covers JS private fields, overrides, explicit super, native parent
calls and joint collection with either side rooted and with neither side rooted. Source
hashes, rejected prototypes, application receipts and raw performance samples are
retained in `.local/binding-mixins-20261018/`. The final implementation passed all 642
generator tests, 242 V8 macOS release/AOT cases (two debug-only checks are not
applicable), and 244 Hermes iOS Simulator debug cases. All four formal package
regeneration checks and public types/module delivery checks pass. Final source and
relevant generated fixtures analyze cleanly. The full generator suite took 41 minutes 3
seconds; the four performance launches took 14 minutes 26 seconds in total.

Release/AOT call measurements use baseline/shared/shared/baseline launch order on the
same device and engine. Each path runs two warmup batches and five measured batches per
launch, giving ten measured samples per version. Each batch performs 200 composite
render operations, not 200 isolated bridge calls. Every launch also passes all 242
acceptance cases, and all measured checksums match.

| Call path                              | Baseline median | Shared median | Change |
| -------------------------------------- | --------------- | ------------- | ------ |
| JS inherited calls                     | 362.57 ms       | 369.04 ms     | +1.78% |
| JS override and super                  | 322.30 ms       | 323.67 ms     | +0.43% |
| Native parent to JS override and super | 396.05 ms       | 405.05 ms     | +2.27% |

All three medians were slightly higher. The observed baseline/shared ranges overlap:
345.64–387.20 / 356.26–394.63 ms for inherited calls, 295.30–337.97 / 295.80–339.94 ms
for JS overrides, and 391.87–405.53 / 393.50–418.93 ms for native parent calls. Two
launches per version do not establish statistical significance or latency neutrality.
This is a measured size improvement with a small observed call-cost increase, not a
performance speedup. No timing assertion was added. Independent joint-GC pause profiling
and other target platforms were not rerun in this change.

## Validated extraction candidates (not applied)

The isolated follow-up validates two additional extractions for the base package:

- Separate ordinary proxy parameter/result signatures from standalone function adapters.
  Real callbacks and generic method `super` contexts keep their callable adapters.
  Signature-only entries fail loudly if accidentally used as function adapters.
- Share zero-, one- and two-required-positional callback families, with separate void
  handling, using generic base-package functions. Resolved owner types reuse those same
  functions. Named/optional inputs, snapshots, extension representations,
  Future/FutureOr results and special Widget-list casts retain the existing path. No
  callback instances, business roots, extra bridge calls or ownership caches are
  introduced.

The prototype adds 2,854 bytes of base support and references shared factories in 2,288
places across the 16 measured modules. Readable IDs, JS APIs, Manifest 24 storage, UI
protocol 24 and ABI 2 remain unchanged. Formal generator/runtime sources have not been
changed for these two candidates.

| Output                   | Current      | Signature separation | Plus shared factories |
| ------------------------ | ------------ | -------------------- | --------------------- |
| Core generated Dart      | 60,267,647 B | 55,639,449 B         | 54,500,057 B          |
| Rendering generated Dart | 18,582,566 B | 17,684,280 B         | 17,280,908 B          |
| Same acceptance app AOT  | 94,178,944 B | 85,248,640 B         | 81,571,456 B          |

The small shared implementation is outside generated-source totals. Whole-application
AOT includes Flutter and the same acceptance fixtures; its 13.39% reduction is not a
promise for other applications. The code section shrinks by 6,710,816 bytes and
constants by 5,887,968 bytes. Existing parameter pooling already shares 181 lists among
9,006 Rendering super entries and ordinary methods; another builder layer is not
justified for that portion.

All three V8 macOS release/AOT variants pass the same 245 cases, including three
isolated adapter checks; two debug-only checks are inapplicable. The combined Hermes iOS
arm64 Simulator debug prototype passes 247 cases. Covered behavior includes JS
inheritance, private fields, overrides, generic `super`, either-side roots and rootless
cycle collection. All 14 fixture TypeScript outputs remain identical after isolated path
normalization. Source analysis passes; engine binaries are unchanged.

Final performance sampling runs the baseline and combined release apps sequentially,
once each, after the simulator is shut down. Each path has two warm-up batches and five
measured batches of 200 composite operations. Median changes are -0.41%, +2.21% and
+0.63% for inherited, JS override/super and native-parent override/super calls. Ranges
overlap; this small sample does not establish a speedup or latency neutrality. Full
workspace checks, the full generator suite and independent GC pause profiling were not
rerun for this prototype. Local macOS copies use ad-hoc signing with library validation
disabled; production distribution signing is outside this comparison.

Evidence is in `.local/binding-extraction-20261018/`: `result.json`, `README.md`, native
receipts, exact source and AOT sizes, and raw timing samples. Formal rollout should
apply signature separation first, then common callback factories, preserving
special-case conversion and ownership rules and running the normal regeneration and
acceptance gates. No commit, push, CI run or engine rebuild is part of this follow-up.

### Remaining candidates after extraction

A second AST census uses the combined isolated prototype above, not the older formal
output, so these candidates do not count the two validated extractions again. Source
sizes use decimal bytes and include formatting. Estimates below are not measured AOT
reductions and are not additive with the already-validated results.

| Candidate                                                         | Current evidence                                                                                                                                                                                                                                  | Boundary and priority                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Share outer `super` adapters through existing dispatch interfaces | 13,712 wrappers form 973 matching groups across Core. Removing duplicates has a source upper estimate of 3,016,812 bytes before new helper overhead; Rendering contributes 2,065,894 bytes across 8,619 wrappers.                                 | Highest priority for the next prototype. Keep native lexical-super helpers per class, receiver checks, complete conversion policies, covariant signatures and super guards.                                                                                     |
| Use shared readers for actual Dart constants                      | 10,145 selected `Icons`/`CupertinoIcons` constant readers occupy 1,125,681 source bytes. This is the affected code, not a saving estimate.                                                                                                        | Keep native constant references and validate release font tree shaking. `Icons.adaptive` is a getter and is excluded. Writable, lazy and computed properties remain live reads.                                                                                 |
| Reduce production JS delivery overhead                            | The current standalone app has 23 JS assets totalling 9,484,444 bytes. In-memory esbuild minification with names preserved produces 6,198,208 bytes. Identical binding requirement entries repeat 984,981 bytes before shared-reference overhead. | Independent of Dart AOT. Shared requirement tables must preserve capability/version checks and standalone loading. Minification needs production bundle, inheritance/super and HMR regression checks; development output can retain readable formatting.        |
| Share owner-independent members of generic proxies                | 935 method/getter/setter bodies contain no owner-type token or generic-signature request and occupy 316,162 bytes, including 154,130 bytes in Rendering.                                                                                          | Lower priority. This is only a textual filter; prove lexical type identity, covariance and conversion equivalence first. It does not justify removing all generic-owner restrictions or claim the whole generic factory size as savings.                        |
| Select an application binding capability set                      | The default host references all SDK registration modules, so reducing JS imports alone does not remove Dart registration roots.                                                                                                                   | Potentially larger binary impact, but changes which future JS updates can run. Keep the default full SDK; any optional application subset must explicitly cover later updates, not infer support from today's imports alone. No size benefit has been measured. |

For example, `RenderBox` and `RenderProxyBox` each repeat the same conversion of an
`attach(owner)` argument before calling their `_flaxSuper_attach` helper. An existing
shared dispatch interface can potentially carry that outer call. The helper that calls
Dart `super.attach(owner)` must remain on the concrete proxy, since its native
superclass is different. This does not make the `RenderProxyBox` proxy inherit the
`RenderBox` proxy, add a business-object cache, or change ownership.

Immutable descriptor constants still occupy 12,602,138 bytes across the 16 measured
modules, but many are already pooled. Replacing their constructors with another builder
only makes source shorter unless it also removes runtime objects or compiled functions;
it can instead add allocations and indirection. Ordinary parameter metadata and callback
metadata have different omission, positional, scoped and encode semantics. Do not erase
those distinctions merely to share a constructor. Readable IDs stay unchanged.

The JS requirement-table opportunity is separate from the deferred generator Manifest
storage-format change. Its duplicate-byte count and the minified-byte count describe
overlapping delivery data, so they must not be added as independent reductions. The
minification probe retains names and legal comments, does not mangle property names, and
leaves original assets byte-identical. A real build must also refresh artifact hashes
and the module inventory. No new runtime, GC, AOT or hot-reload validation is claimed
here.

Raw follow-up evidence and scripts are in
`.local/binding-extraction-20261018/followup/`: `remaining.json`, `candidates.json`,
`icons.json`, `js-delivery.json`, `js-binding-requirements.json` and `analysis.json`.
The next bounded experiment is outer-super sharing on the same Rendering hierarchy,
followed by source/AOT/call-cost comparison and the existing dual-engine ownership
cases.

## Shared binding implementation after the extraction experiments

The earlier extraction and candidate sections above are historical measurements. The
formal rollout now combines signature-only proxy metadata, shared positional callback
factories, outer-super sharing, closed generic-owner members, actual static constants
and smaller prepared JavaScript modules. Readable IDs and the full SDK surface remain.

| Candidate                        | Decision and measured evidence                                                                                                                                                                                                            |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Outer-super wrappers             | Adopt existing typed dispatch interfaces. The isolated application AOT fell from 81,571,456 to 75,481,120 bytes; each proxy retains its native lexical-super body and the bridge validates its concrete owner.                            |
| Closed members in generic owners | Adopt only when the complete proxy and callable signatures contain no open type variables. The next isolated AOT was 75,021,472 bytes. Owner-dependent members and generic methods keep their typed factories.                            |
| Actual static constants          | Adopt native constant values with one shared reader. The Icons-only prototype reached 73,035,136 AOT bytes; the formal generator recognizes all selected static const fields. Computed, final, late and writable values remain live.      |
| Production JS delivery           | Adopt minification with names preserved and remove unused duplicated JS registration fields. The complete module inventory remains available to Dart validation. The 23-file standalone prototype fell from 9,484,444 to 5,088,536 bytes. |
| Application-specific SDK subset  | Do not make this the default. The isolated AOT fell to 54,288,064 bytes, but existing modules immediately failed because Cupertino bindings were absent. A smaller surface cannot promise compatibility with later JS updates.            |

The formal Core Dart output is 49,886,303 bytes across 17 files, compared with
60,267,647 bytes before these extractions. Rendering is 15,167,003 bytes, compared with
18,582,566 bytes. These are generated source sizes, not installed application sizes. The
formal output has 4,497 signature-only proxy descriptors, 2,288 shared callback-factory
uses and 11,676 static constant bindings. The shared functions retain full parameter,
type and ownership metadata.

The formal macOS release/AOT application has a 72,673,984-byte application binary,
compared with 94,178,944 bytes in the immutable baseline (22.83% smaller). Its V8
libraries and Material Icons font have identical hashes. The standalone JS module files
total 5,088,536 bytes, compared with 9,484,444 bytes (46.35% smaller); this does not
include the full `modules.json` inventory. These measurements use the same complete SDK
surface, without the incompatible application-specific subset.

`FlaxFunctionBinding.constant` uses the existing top-level invocation and conversion
path. The generator records actual static const fields as `isConst: true`. Manifest 26
stores repeated complete type descriptions in a shared postorder table; providers and
consumers regenerate together. JS APIs, UI protocol 24 and native ABI 2 are unchanged.
Shared helpers retain no callback instances or business receivers and introduce no new
GC roots.

The super and Icons-constant prototypes each passed 245 macOS V8 release/AOT cases,
including inheritance, overrides, lexical super and joint collection. Two debug-only
checks were inapplicable. Native application audits confirm one unchanged V8 dependency
closure and the expected local ad-hoc signing/JIT settings. These prototype results do
not replace final acceptance of formally regenerated output and compact JS assets.

Formal output reproducibility passes for all four binding packages and the author
template. The optimized macOS V8 release application passes 245 cases in 203.907
seconds; the iOS Simulator Hermes application passes 247 cases, and hot reload passes
three cases. The focused checks pass 22 generator cases, 53 build-package Node tests and
91 tool tests; one Windows-only tool case is inapplicable on macOS. Initial failures and
interrupted checks remain recorded in `.local/binding-optimization-20261018/`.

A subsequent immutable-baseline run exposed an existing engine GC assertion. A Dart
origin can expire while its JS peer retains a different Dart target; collection during
an active JS job then tried to mark the finalized origin. A minimal allocation-pressure
regression reproduces the assertion before the fix and passes after it. The shared VM
marker now ignores finalized registered handles, preserves the unregistered-handle check
and never resurrects the origin. The regression also verifies target retention and
eventual reclamation. The rebuilt macOS V8 runtime/GC gate passes 45 cases, and the
release/AOT application passes 246 cases in 219.411 seconds. The iOS Hermes application
passes 248 cases, and its integration binding reports all three HMR cases successful.
The task-booted Simulator is restored to Shutdown. V8 and Hermes SDK inputs remain
unchanged.

The VM correction is maintained in Flutter commit
[`49e4666a853`](https://github.com/xuelongqy/flutter/commit/49e4666a853).

The shared type table reduces the formal Core Manifest from 296,236,543 to 34,416,060
bytes, with 9,968 complete type entries. All five manifests retain byte-equivalent
expanded semantic metadata after updating the format version; 10,609 generated files
retain identical SHA-256 hashes. The reader rejects invalid references, forward/cyclic
edges, duplicate and unused entries, and excessive expansion. Generic lexical scopes are
resolved independently after expansion. Strict duplicate-key checks scan validated JSON
directly, avoiding the previous second parse through YAML. JavaScript delivery reads
ownership and operation IDs without expanding type metadata.

Final local acceptance covers:

- All 645 generator cases: the full run passed 644 and exposed one stale version-25
  expectation; correcting that expectation passes all seven cases in its file. The
  current Manifest contract separately passes 79 cases, including reserved `$type`
  names, generic scopes and expansion limits.
- All 618 named framework UI cases, all nine package examples, the embedded aggregate
  and two standalone Widget cases. The standalone example now explicitly selects
  `DartMapInput<string, unknown>` when popping its typed map route, using ordinary
  generic conversion rather than a navigation-specific rule.
- The maintained runtime/GC, V8 release/AOT, Hermes and mobile HMR gates above. The
  controlled baseline with the same fixed engine passes 245 cases; the optimized app
  passes the same cases plus the new GC regression, for 246 cases.
- The 197 JS workspace cases and 91 tool cases, with one Windows CDB case inapplicable
  on macOS. Workspace analysis, formatting, documentation, archive consumers, all four
  official binding reproducibility checks and the author template pass.

The sequential controlled pair retains identical V8 closure hashes, AOT inputs apart
from generated bindings and the added GC test, and matching benchmark checksums.
Inherited JS calls, JS override/super and native-parent override/super have median
synthetic costs 1.53%, 1.97% and 3.90% higher, respectively. The shared callback
microbenchmark median is 25.42% lower. These are single-pair observations, not stable
frame-time guarantees. The AOT size remains 72,673,984 versus 94,178,944 bytes (22.83%
smaller); readable IDs and the complete selected SDK surface remain available.

No new binding backend or CI run is part of this baseline. SDK archives and toolchain
locks remain unchanged; the next backend experiment starts from the accepted baseline.
