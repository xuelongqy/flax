# Native ESM SDK regression on iOS Simulator

Status: simulator measurements and the predefined regression checks pass. These are
Debug simulator checks, not physical Release/AOT performance or distribution acceptance.

## Inputs and method

The preserved SDK 0.3.1 static V8 jitless engine is the control. The candidate uses SDK
0.3.2, V8 15.4.80.15, DrumBrake with explicit bounds checks and V8 pointer compression.
CppGC remains uncaged, without pointer compression or young generation. The candidate
also includes native ESM and foreground-task notifications.

Both controls receive one identical Dart kernel, Runner and source-loaded Canvas
fixture. Neither uses application HBC, a JS code cache or a startup snapshot. Weave
crisp and Bloom soft retain their original 45 warmup and 300 measured frames. Eight
fresh processes use the balanced B/V/V/B/V/B/B/V order, four per engine. Decoded output
and source/kernel identities must agree before timings are interpreted. Trace/proof runs
are separate from measured runs. Other task builds and test processes must finish before
sampling.

Investigation triggers, fixed before the eight-trial run, compare medians of the four
per-process results. They allow simulator scheduling noise and do not establish
statistical equivalence:

| Measurement                       | Investigate candidate growth above the control |
| --------------------------------- | ---------------------------------------------- |
| CPU submission p50/p95            | Greater of 15% or 1 ms                         |
| Callback interval p95             | One display refresh period                     |
| Scene footprint peak              | Greater of 10% or 16 MiB                       |
| Session-to-ready and first raster | Greater of 15% or 150 ms                       |

The Canvas cases instantiate no Wasm modules or linear memories. A separate original ESM
probe compares signed 32-bit sums in JS and a native Wasm module with no linear memory.
It warms each implementation three times, then records nine alternating samples, each
summing one million integers twice. Every checksum must match `1783293664`; Wasm
speedups in this case do not predict Flutter raster performance.

## Results

All eight processes complete with nominal thermal state and Low Power Mode off. The
validator accepts 4800 measured frames, matching JS/Kernel/Runner inputs and identical
PNGs for each scene. Every predefined investigation trigger passes. Values below are
medians of four per-process quantiles, in milliseconds (p50 / p95).

| Scene and engine | CPU submission | Raster          | Total span      | Callback interval |
| ---------------- | -------------- | --------------- | --------------- | ----------------- |
| Weave control    | 3.30 / 3.57    | 33.92 / 43.33   | 80.59 / 96.97   | 33.33 / 50.00     |
| Weave candidate  | 3.23 / 3.47    | 31.31 / 40.35   | 74.23 / 90.13   | 33.33 / 50.00     |
| Bloom control    | 7.66 / 8.00    | 125.64 / 142.44 | 267.34 / 296.06 | 133.33 / 150.00   |
| Bloom candidate  | 7.62 / 7.89    | 109.90 / 127.62 | 235.60 / 261.56 | 116.67 / 133.33   |

Whole-process sampled scene footprint peaks are 326.50 -> 309.84 MiB for Weave and
342.08 -> 327.59 MiB for Bloom; RSS peaks are 970.55 -> 955.62 and 990.80 -> 977.20 MiB.
Simulator RSS is not a device memory estimate or JS heap size. Session-to-ready is
1986.55 -> 1961.43 ms; first raster is 2699.50 -> 2688.84 ms. Runtime construction is
46.41 -> 49.23 ms. Launches do not clear OS/dyld caches. These observations cover the
complete candidate configuration/integration change; they do not establish that Wasm
improves Canvas, which instantiates no Wasm here.

The separate quiet JS/Wasm compute probe passes all 18 checksums. Median batch time is
24.078 ms for JS and 16.294 ms for DrumBrake, with nine samples each. The graph has two
modules, 1047 source bytes including a 68-byte Wasm binary, and zero linear-memory
bytes. This is one integer-loop case in one process, not general engine conformance or a
prediction for a production workload.

The candidate trace records 12 Weave and 34 Bloom proactive-GC deferrals. Weave has no
idle collection request during its active scene. Bloom has five requests after
100.51–119.52 ms since the last Dart frame's target timestamp, respecting the existing
100 ms guard; the final idle segment collects normally. Use target timestamps from
`VsyncProcessCallback`, matching `Animator::BeginFrame`, rather than the slightly later
Dart `Frame` trace start. Pressure collections remain permitted. Traces are excluded
from timing aggregates.

Receipts are `build/engine-gc-ios-simulator-arm64-debug.json`,
`.local/esm-canvas-trials/{applications,summary,thresholds}.json`,
`.local/esm-canvas-trace/{guard-summary,idle-requests}.json` and
`.local/esm-compute-quiet.json`. Inputs are recorded by SHA-256; the JS fixture is
`cb2f0757872db72f5881271be598041cf9fffd675818b7a6c416a05fa8f1ce9d` and the candidate
Dart kernel is `be4c705e4152ae642a811f84157d3f4a3c4cb34a8655a0ab6f55c2ade4787a9f`.

## Size and SDK checks

| Artifact                                          | Control bytes | Candidate bytes |
| ------------------------------------------------- | ------------- | --------------- |
| Static simulator SDK archive (`libv8_monolith.a`) | 27,862,944    | 36,986,112      |
| Debug framework input                             | 129,183,440   | 135,860,072     |
| Signed benchmark application, sum of file sizes   | 348,646,021   | 354,533,082     |

The framework grows by 6,676,632 bytes (5.17%). These sizes include engine/module
integration and are not Release size measurements. Both iOS SDK archives build and pass
six rejection checks each. The simulator relocated consumer executes Wasm, memory growth
and out-of-bounds checks with an attached CppHeap; the device consumer passes relocated
compile/link only.

## Limits

This simulator report does not establish physical iOS address-space behavior,
Release/AOT startup/memory, distribution signing or App Store acceptance. SDK and engine
changes are local, uncommitted candidates. The
[module task](../../docs/tasks/native-esm-and-wasm.md) records separate functional
acceptance and the remaining platform scope.
