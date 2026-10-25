# iOS V8 jitless migration acceptance

Status: migration accepted. The SDK producer and maintained Flutter changes are
committed; this record accompanies the Flax main integration. No push or SDK publication
is included. Earlier [fixed-engine timings](fixed-ios-results.md) describe the
experimental dynamic SDK and FFI-disabled controls; they are not measurements of the
production candidate.

## Production boundary

The maintained iOS engine selects V8 15.4.80.15 at
`e959d47215186f24e182a0503a52374c96569722`. Both arm64 SDK 0.3.1 targets are static,
jitless and uncaged: CppGC pointer compression and young generation, TurboFan and
WebAssembly are disabled. Native ABI 2, GC extension 1, binding extension 8 and UI
protocol 24 are preserved. macOS and Android retain their verified SDK 0.3.0 inputs and
V8 JIT. The legacy iOS Hermes factory delegates to the common factory with a deprecation
notice; no second VM, HBC support or engine selector is added.

The normal Flutter producer builds iOS simulator Debug and device Release/AOT with
matching macOS host tools. The framework includes the SDK manifest and upstream notices.
Application audits verify archive/input hashes, source removal before relocated launch,
one V8 closure, actual jitless execution, development signing and no JS JIT entitlement.
Private Abseil and Unicode namespaces avoid static symbol collisions with Flutter.

| iOS SDK target  | Static archive SHA-256                                             |
| --------------- | ------------------------------------------------------------------ |
| Device arm64    | `c96ed9dde86e1248330366458e342523c5cf010d94b83031aa165583598f7f95` |
| Simulator arm64 | `e421e53a84ad85528a9f14e26ba04659e867fc0b114cf902efdeda717e1a6162` |

## Completed acceptance

Counts below exclude setup/teardown hooks. Named receipt maps may contain fewer entries
because upstream integration reporting merges repeated bare descriptions; the complete
console logs retain every executed test.

| Gate                             | Result                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SDK inputs                       | Both normal builds, four rejection cases per target, relocated simulator execution, relocated device compile/link and both package/archive checks pass                                                                                                                                                                                                                                            |
| Simulator Debug application      | 1,059 test bodies pass, including production FFI smoke and the legacy factory; zero failures or skips                                                                                                                                                                                                                                                                                             |
| Physical Release/AOT application | 1,053 test bodies pass; six debug-only cases are inapplicable; zero failures; production FFI smoke passes all ten checks and the legacy factory resolves to V8                                                                                                                                                                                                                                    |
| macOS Debug                      | 45 runtime/GC contracts and 1,058 package-owned UI cases pass; examples and aggregate pass                                                                                                                                                                                                                                                                                                        |
| macOS Release application        | 1,051 test bodies pass; six debug-only native Flutter diagnostic/rebuild cases are inapplicable; zero failures                                                                                                                                                                                                                                                                                    |
| Optional FFI                     | All seven selection variants pass in each of macOS Debug, macOS Release and iOS simulator Debug; full physical dynamic-asset coverage is not claimed                                                                                                                                                                                                                                              |
| Simulator HMR                    | All three contracts pass                                                                                                                                                                                                                                                                                                                                                                          |
| Android regression comparison    | The 1,057-body Pixel 4 run has 1,052 successes and five failures: one obsolete clock-fixture assertion is fixed and its 16-body focused rerun passes; the remaining four refresh/cleanup failures reproduce with the pre-migration engine on the same phone. The emulator's eight failures also reproduce on its baseline. Zero new migration failures; neither full Android run is claimed green |

The Release fixtures retain positive behavior, identity and resource assertions. Only
Flutter debug observers/getters/assertion diagnostics are guarded by the corresponding
build mode. The live-test harness establishes an actual idle window for eventual-GC
checks, restores frame policy in `finally`, and preserves mounted-owner retention tests.
The application runner fails on plain-test errors as well as widget failures.

The workspace check driver exceeded its 90-minute limit during code generation; the
remaining checks were executed separately. The union covers 749 codegen tests, 253 JS
tests, Dart/package/tool tests, analysis, formatting, documentation, packaging and
native configuration. This is a split verification receipt, not a successful
uninterrupted `melos run check` invocation. The final changed tooling checks pass 13/13,
SDK input checks 2/2 and documentation tooling 4/4.

## Dependency revisions

The iOS SDK producer commit is `c3cf4e795ecb7727f8932aef206075e4be3801fb` in
`flax_js_runtime`, based on `b76a32068192467c2fcdd18ee65f3229219c36ac`. This is a
migration increment on its producer branch; unrelated earlier producer commits are not
merged into SDK main. The maintained Flutter migration is
`bb7e27654b9090e9f985b730915a6e33c9c60973` on local `flax/main`, with the producer
revision pinned per iOS target in `flax/source.lock.json`. Flax includes this record in
its migration commit, based on `74dab9f76c4d370dcbd924e9e8a036825f4e4683`.

Normal simulator/device rebuilds after the Flutter commit update only the engine version
object and relink/package the framework. The measured native/runtime sources and pinned
SDK archives are unchanged; performance receipts retain the exact pre-commit binary
hashes. The landed-state smoke separately verifies the rebuilt engine.

Actual simulator/device global inventories expose Date, RegExp, WeakRef and
FinalizationRegistry as functions; Intl, Temporal and WebAssembly are undefined. This
records the configured SDK surface, not full ECMAScript conformance or a new shim.

## Joint GC

A separate untraced physical-device Release run completes 900 seconds of requested
stress in 917.105 seconds: 20 cycles, 66,578 native frames and 280 GC-contract
executions. Two independent Sessions alternate animation, Dart/JS allocation pressure,
callback and microtask work, idle windows and close. Bridge cells return to zero in
every cycle and at final shutdown. No sustained process-memory growth is observed:
sampled active RSS medians are 373.13 MiB in the first 60 samples and 353.52 MiB in the
last 60; idle RSS moves from 336.66 to 318.81 MiB. The full sampled range is
309.875–460.672 MiB. These whole-process measurements are not JS heap sizes or a
universal leak bound.

The final static/uncaged simulator trace confirms the native 100 ms frame-inactivity
guard. Weave records zero proactive requests; slow traced Bloom records four, all after
native frame gaps of at least 100 ms. Pressure collection remains effective and a
dropped JS wrapper is reclaimed after animation stops while its Dart owner remains live.
The one-second deferral preserves pending changes. This heuristic does not promise zero
GC during animation, and traced frame timings are excluded from the performance study.

## Final physical Canvas comparison

Eight valid new-process trials follow H/V/V/H/V/H/H/V, four per engine and 4,800
measured frames, with 45 warmup frames per scene/process. All native samples are nominal
thermal state and Low Power Mode off; every sampled scene has an active, attached
window. Both 880 x 480 output PNGs are byte-identical across all eight processes. The
unchanged workload SHA-256 is
`cb2f0757872db72f5881271be598041cf9fffd675818b7a6c416a05fa8f1ce9d`. The
[aggregate receipt](migration-ios-results.json) retains per-process ranges, maxima,
source/SDK hashes and application inputs.

The candidate and preserved old Hermes control both use normal engine builds with FFI
enabled. Of their common renderer inputs, 1,036 objects have identical loadable
code/data; three additional differences are restricted to debug metadata. The exact Dart
AOT image, pre-resigning Runner input and JS assets match. Signed Mach-O bytes are
recorded separately from original engine input hashes because each signing operation can
produce a new CMS signature. These are development-signed iPhone 14 Pro / iOS 27.0.1
measurements at 120 Hz, DPR 3 and 1179 x 2556 physical pixels.

Two thermal-rejected processes are retained separately: an initial Hermes trial after
the full UI suite and the first attempt at trial 8/V8. Both started in the fair thermal
state. After five-minute cooldowns, the batch and then trial 8 resumed; all seven
already-valid trials remain in the aggregate. No valid formal result was discarded. This
interruption and OS power/clock variation limit strict timing comparisons between
rounds. Separate identity probes and traced simulator runs are excluded from these
performance results.

### Startup

Times are milliseconds, median [per-process range]. The boundary starts at Dart `main`;
pre-main loading, SpringBoard launch and cold filesystem/dyld-cache effects are
excluded.

| Boundary             | Hermes                    | V8 jitless                |
| -------------------- | ------------------------- | ------------------------- |
| Assets               | 17.874 [13.458–20.624]    | 16.247 [12.420–26.173]    |
| Runtime creation     | 2.842 [2.258–3.473]       | 4.543 [3.900–21.749]      |
| Session to ready     | 766.178 [701.595–867.114] | 241.829 [240.561–280.594] |
| Main to ready        | 790.413 [724.211–883.578] | 261.909 [256.852–333.555] |
| Main to first raster | 835.358 [763.971–924.205] | 300.108 [290.219–400.385] |

V8's first-raster median is 64.1% lower. The retained final V8 run creates its runtime
in 21.749 ms and reaches first raster in 400.385 ms; it is included in the reported
range. Hermes creates the bare runtime faster, while V8 initializes the source-loaded
Session faster. No application HBC, persistent V8 code cache or application startup
snapshot is supplied.

### Frame costs

Times are milliseconds, p50 / p95. Each cell is the median of four per-process
statistics, not a pooled-frame percentile. CPU includes JS drawing/encoding, explicit
flush and native batch decode. Raster and total span do not measure a GPU completion
fence or physical screen presentation.

| Scene / engine     | CPU           | UI/build      | Raster          | Total span      |
| ------------------ | ------------- | ------------- | --------------- | --------------- |
| Weave / Hermes     | 1.286 / 3.846 | 1.312 / 3.870 | 2.490 / 6.675   | 4.779 / 8.216   |
| Weave / V8 jitless | 1.126 / 1.537 | 1.167 / 1.583 | 2.739 / 6.480   | 4.065 / 7.659   |
| Bloom / Hermes     | 5.772 / 5.990 | 5.819 / 6.061 | 19.581 / 21.027 | 34.936 / 40.047 |
| Bloom / V8 jitless | 2.986 / 3.266 | 3.067 / 3.356 | 20.314 / 21.988 | 35.897 / 41.144 |

| Scene | Hermes callback FPS [range] | V8 jitless callback FPS [range] |
| ----- | --------------------------- | ------------------------------- |
| Weave | 119.51 [118.71–119.91]      | 119.70 [119.11–119.91]          |
| Bloom | 50.89 [50.78–51.07]         | 49.04 [48.84–50.93]             |

Weave remains near the 120 Hz callback limit. Each engine has two of 1,196 measured
Weave intervals above 12.5 ms; the longest is 31.182 ms for Hermes and 26.175 ms for V8.
The repeated one-second Weave deficit is not reproduced. These untraced measurements do
not identify the cause of individual gaps or promise zero future GC pauses.

Bloom remains raster-bound: V8's callback median is 3.6% lower than Hermes, despite
lower JS/encoding CPU time. V8 Weave raster p50 spans 2.479–3.240 ms; all runs are
retained. The normal static/FFI-enabled candidate preserves the previous comparison's
qualitative outcome. Cross-batch differences from the earlier experimental builds do not
isolate SDK linkage, FFI or OS clock effects.

### Process memory

Values are MiB, median [per-process range]. Scene peaks are boundary/one-second samples;
they can miss transient peaks and include Flutter/graphics memory, not just the JS heap.

| Metric                       | Hermes                 | V8 jitless          |
| ---------------------------- | ---------------------- | ------------------- |
| First raster footprint       | 366.4 [362.9–375.6]    | 265.1 [246.8–290.7] |
| Weave footprint sampled peak | 657.5 [656.5–662.3]    | 534.3 [527.4–540.9] |
| Bloom footprint sampled peak | 1038.5 [1019.2–1055.8] | 916.1 [890.6–941.4] |
| Weave RSS sampled peak       | 378.2 [375.9–381.7]    | 214.7 [211.1–217.2] |
| Bloom RSS sampled peak       | 380.1 [371.4–388.6]    | 220.1 [202.8–223.1] |

V8 sampled footprint peaks are 18.7% lower for Weave and 11.8% lower for Bloom. Together
with the separate ownership/stress checks, these observations support the migration;
they are not another-device certification or a universal memory/performance guarantee.

Reproduce the production gates with the commands in the [runtime guide](../../README.md)
and [FFI runner](../../packages/flax_ffi/test/runtime/README.md). Raw successful and
failed receipts are retained locally under `.local/ios-v8-migration/` and
`.local/ffi-dlopen/`. SDK publication, distribution/App Store signing, device
Debug/Profile, simulator Profile/Release, x64, native ESM, remote import and sandbox
implementation remain outside this migration.
