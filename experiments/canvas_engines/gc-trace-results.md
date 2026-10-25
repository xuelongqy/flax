# V8 idle-GC trace and simulator retest

Measured on 2026-10-24. The recurring pause is a Flax bridge scheduling defect: the V8
one-second timer requests synchronous Dart/V8 joint collection while frames are still
arriving. The pause is outside the JS drawing probe, so low drawing CPU p50 does not
imply steady callback cadence. This is not evidence that raw V8 arithmetic pauses once
per second.

## Evidence and fix

The original bridge emits `FlaxRequestIdleGC`, posts `FlaxCollect`, enters `FlaxJointGC`
and invokes `FlaxV8Collection` on the same UI thread as `CanvasFrame`. The final traces
cover all 345 callbacks in each scene, including 45 warmup frames. Joint collection
occupies the interval between callbacks; it does not overlap the bracketed drawing work.
Its median duration is about 41 ms in this simulator, spanning Dart collection, the V8
phase and weak processing.

| Trace observation                          | Weave before | Weave fixed | Bloom before | Bloom fixed |
| ------------------------------------------ | -----------: | ----------: | -----------: | ----------: |
| Active-window timer collection requests    |           12 |           0 |           39 |           7 |
| Requests within 100 ms of a measured vsync |           10 |           0 |           24 |           0 |
| Active-window `FlaxCollect` spans          |           12 |           0 |           39 |           8 |
| Median active `FlaxCollect` duration (ms)  |       41.381 |           — |       41.809 |      41.732 |

V8 now applies the existing Hermes rule: before a proactive idle request, check the last
native frame time and defer when it is younger than 100 ms. Rescheduling preserves the
dirty state. Shutdown/empty-heap checks remain explicit. Dart/V8 pressure requests,
active-job handling and the collector's tracing/ownership algorithm are unchanged. No
GC-disable switch, slower timer or change to JS code is used to obtain the result.

This is a frame-inactivity heuristic. The slow, GPU-limited simulator Bloom scene has
some gaps over 100 ms; those still permit proactive collection. Pressure-triggered
collections are also preserved. The acceptance condition is not “zero GC throughout an
animation”: no proactive request may run inside the recent-frame window, and idle
reclamation must still work.

Both trace processes pass one dropped-wrapper probe after the two animations stop.

The trace regression checks all frame IDs and counts, verifies UI-thread spans, joins
measured vsync timestamps to idle requests and checks the dropped-wrapper probe. That
probe retains a Dart owner while dropping its JS wrapper, then confirms eventual JS
reclamation. The [trace summary](gc-trace-summary.json) retains request timing and
collector/deferral counts.

## Simulator and measurement boundary

A dedicated iPhone 18 Pro simulator runs iOS 27.0 (24A434) on the host, with a 60 Hz
virtual display, 1206 x 2622 physical pixels and DPR 3. Canvas backing remains 880
x 480. The Xcode installation lacks the Simulator GUI application, so this is a headless
CoreSimulator run with native frame timings and rendered output. Flutter and Dart run in
Debug; V8 15.4.80.15 is a jitless simulator SDK. It retains CppGC cage, unlike the
uncaged physical-device SDK in the [earlier report](results.md).

Baseline and fixed overlays share the same debug renderer objects, V8 SDK/library,
source assets and application inputs. Both variants in each study share the same kernel
and Runner input. Application JS is still loaded as source: no HBC, application snapshot
or persistent V8 code cache. The original physical-device comparison is preserved. A
later [fixed-engine device retest](fixed-ios-results.md) compares the repaired V8 engine
with Hermes in a separate Release/AOT batch.

Tracing and performance are separate studies. The app emits frame spans and a small
VM-service handshake; the host downloads, decodes and saves the complete endless
timeline after each phase. Trace JSON is not decoded into the measured UI heap. Earlier
diagnostic traces that decoded JSON in the app remain local and are excluded from the
final evidence. Traced runs are excluded from performance aggregates.

## Untraced retest

Four baseline and four fixed processes alternate B/F/F/B/F/B/B/F. Every process runs
both scenes with 45 warmup plus 300 measured frames: 4,800 measured frames total.
Accepted samples remain nominal thermal state with Low Power Mode off. All output PNGs
match byte for byte. The kernel, source asset, Runner input and signed V8 library hashes
match between policies. Values are medians of four per-process results; ranges are in
the [benchmark receipt](gc-benchmark-summary.json).

| Scene / policy   | CPU p50 / p95 (ms) | Raster p50 (ms) | Callback interval p95 (ms) | Callback FPS [range] |
| ---------------- | ------------------ | --------------- | -------------------------- | -------------------- |
| Weave / baseline | 3.278 / 3.596      | 28.066          | 50.000                     | 32.23 [29.41–35.25]  |
| Weave / fixed    | 3.220 / 3.502      | 26.794          | 33.334                     | 34.49 [31.70–35.60]  |
| Bloom / baseline | 7.591 / 8.076      | 104.282         | 141.667                    | 9.24 [8.45–10.01]    |
| Bloom / fixed    | 7.504 / 7.951      | 97.039          | 125.000                    | 9.81 [8.83–10.16]    |

CPU probes include encoding and native commit, not inter-callback GC. The median of
per-process maximum callback intervals falls from 91.667 to 50.001 ms for Weave and
175.001 to 158.333 ms for Bloom. FPS medians improve approximately 7.0% and 6.1%, but
per-process ranges overlap and simulator raster work dominates. These are descriptive
simulator observations, not predicted physical-device gains.

Sampled process footprint peaks are 325.1 / 330.0 MiB for baseline/fixed Weave and 338.7
/ 336.5 MiB for Bloom. These include the simulator process's Dart/Flutter/V8
allocations, not all host rendering-service memory. They cannot be compared directly
with physical iOS footprint. Timer deferral does not establish unchanged heap growth
under every allocation workload.

## Validation and scope

- Both native jitless probes pass. Final baseline/fixed traces cover 345 frame spans per
  scene and pass the recent-vsync deferral and post-animation idle-reclamation
  assertions. Exact source and PNG equality are checked.
- The actual fixed macOS tester passes 45/45 runtime/GC contracts, including JS
  pressure, active-job/WeakRef behavior, idle wrapper reclamation and 1,000 rootless
  bridge cycles. FFI declarations match the canonical headers. The local-engine flags
  are explicit; an inherited `FLUTTER_ENGINE` breaks the melos dependency bootstrap.
  This is the equivalent runtime/GC suite, not a claim that the wrapper command
  succeeded.
- The isolated macOS relink preserves the old base binary's optional-FFI export surface;
  it does not add stubs or modify primary builds. Simulator SDK target/integrity checks
  pass 3/3, including rejecting JIT metadata for both iOS targets.
- The simulator-only timing run does not retest physical Release/AOT, distribution, all
  platform/feature combinations or long-running allocation pressure during animation. No
  physical-device operation, commit or push is performed in this follow-up.

The engine change is in the isolated Flutter worktree's `flax/native/src/joint_gc.cc`.
Local raw traces, source/build recipes, hashes, frame/memory records and failure logs
are retained under `.local/canvas-gc-trace/`. The source and scripts are reviewable
without the disposable application copies. The change has not been merged into the
primary Flutter engine checkout.
