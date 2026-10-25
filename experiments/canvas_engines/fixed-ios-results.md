# Fixed V8 jitless versus Hermes on iPhone

Measured on 2026-10-25 after the [idle-GC scheduling fix](gc-trace-results.md). With
application JavaScript loaded as source, V8 jitless reaches the same near-120 Hz Weave
callback cadence as Hermes. V8 has lower source startup time, drawing/encoding CPU time
and process memory in both scenes. Hermes retains an approximately 3% callback-FPS
advantage in the raster-heavy Bloom scene.

## Configuration and acceptance

- iPhone 14 Pro (iPhone15,2), iOS 27.0.1 (24A446), portrait, 1179 x 2556 physical
  pixels, DPR 3, 120 Hz display. Flutter Release/AOT with Impeller Metal. Canvas backing
  remains 880 x 480, displayed at raster scale 1.23068.
- Flax `74dab9f76`, maintained Flutter fork `7073a170189`, with the uncommitted native
  GC fix. Both adapters were rebuilt against the same existing renderer objects. Both
  applications share one Dart AOT image, Runner input and all 25 JS source assets
  (4,506,283 bytes), plus common embedded source bootstraps. The fixture source SHA-256
  matches the earlier studies. No application HBC, persistent V8 code cache or
  application startup snapshot is supplied. TypeScript packaging happens before the
  experiment; both engines compile the resulting JavaScript at runtime.
- Hermes 260318099.0.4 (`d412d3bd851278712c20cca25d094e32641a0465`); V8 15.4.80.15
  (`e959d47215186f24e182a0503a52374c96569722`). The physical-device V8 SDK is unchanged
  from the earlier experiment: jitless, with CppGC cage, CppGC pointer compression and
  CppGC young generation disabled. Joint GC remains enabled; unused optional direct FFI
  is disabled in both adapters.
- Eight valid new-process trials in order H/V/V/H/V/H/H/V, four per engine. Every
  process runs both scenes with 45 warmup plus 300 measured frames: 4,800 measured
  frames total. All native samples report nominal thermal state and Low Power Mode off.
  No measured trial was rejected or replaced. Tracing and engine verification probes are
  off throughout the measured batch.
- Two separate proof processes pass the Hermes identity and V8 no-generated-code checks.
  Both output PNGs are byte-for-byte identical across all eight measured processes. The
  aggregator validates frame counts, monotonic frame/vsync IDs, display configuration,
  common application inputs, thermal state and output hashes.

Values below are medians of four per-process results. A p95 cell is the median of four
per-process p95 values, rather than a pooled-frame percentile. The
[aggregate receipt](fixed-ios-results.json) contains ranges and per-process maxima. Raw
records, source/build hashes, SDK metadata and compile/link commands are retained
locally under `.local/canvas-device-fixed/`.

## Startup

Times are milliseconds. The boundary starts at Dart `main`; it excludes pre-main native
loading, SpringBoard launch latency and cold OS/dyld cache effects. Readiness includes
Session initialization, source evaluation, host/plugin setup and initial submission.
Every trial is a new process; filesystem and dyld caches were not cleared.

| Measurement          | Hermes median [range]     | Fixed V8 jitless median [range] |
| -------------------- | ------------------------- | ------------------------------- |
| Asset loading        | 12.558 [11.882–18.588]    | 17.307 [11.638–18.742]          |
| Runtime creation     | 2.960 [2.876–3.326]       | 5.283 [4.234–6.103]             |
| Session to ready     | 730.094 [712.106–746.047] | 240.714 [238.541–242.970]       |
| Main to ready        | 749.565 [727.794–762.989] | 261.292 [256.252–263.702]       |
| Main to first raster | 791.531 [768.613–804.193] | 300.652 [291.215–303.637]       |

V8's main-to-first-raster median is 62.0% lower. Hermes still creates the bare runtime
faster; V8's larger advantage appears during Session/source initialization. This is a
comparison of the current source-loading paths, not offline optimized Hermes HBC.

## Frame costs and cadence

Weave crisp uses existing path calculation and command encoding without blur; it is not
a pure numerical benchmark. Bloom soft adds native blur, saturation, screen blending and
translucent paths. Both engines submit the same geometry at the same frame phase. Times
are milliseconds, p50 / p95.

| Scene / engine           | CPU submission | UI/build      | Raster          | Frame total span |
| ------------------------ | -------------- | ------------- | --------------- | ---------------- |
| Weave / Hermes           | 1.294 / 3.789  | 1.319 / 3.814 | 2.642 / 6.773   | 4.798 / 8.279    |
| Weave / V8 jitless fixed | 1.112 / 1.535  | 1.148 / 1.583 | 2.475 / 6.653   | 3.947 / 7.831    |
| Bloom / Hermes           | 5.755 / 5.993  | 5.799 / 6.064 | 19.640 / 21.028 | 35.132 / 40.067  |
| Bloom / V8 jitless fixed | 2.923 / 3.203  | 3.002 / 3.306 | 20.136 / 21.973 | 36.325 / 40.911  |

CPU submission includes JS drawing/encoding, explicit flush and native batch decoding,
with the same three probe host calls for both engines. It excludes inter-callback GC.
Total span measures vsync to raster finish, including scheduling delay, and is not the
sum of CPU and raster medians. Raster timing is not a completed GPU fence or physical
display presentation.

V8 reduces CPU submission p50 by 14.0% in Weave and 49.2% in Bloom. Its native commit
p50 remains higher: 0.180 versus 0.142 ms in Weave and 0.640 versus 0.529 ms in Bloom.
The advantage comes from drawing/encoding before commit. Bloom's native raster work is
slightly slower with V8 in this batch; faster JS does not remove that bottleneck.

| Scene / engine           | Callback FPS [range]   | Interval p95 (ms) | Longest interval across four processes (ms) |
| ------------------------ | ---------------------- | ----------------- | ------------------------------------------- |
| Weave / Hermes           | 119.51 [119.11–119.91] | 8.424             | 20.280                                      |
| Weave / V8 jitless fixed | 119.90 [119.11–119.91] | 8.419             | 25.398                                      |
| Bloom / Hermes           | 50.96 [50.71–51.00]    | 25.103            | 25.197                                      |
| Bloom / V8 jitless fixed | 49.45 [49.25–49.66]    | 25.118            | 25.269                                      |

Weave is effectively tied at the display limit; its per-process FPS ranges overlap. The
1,196 measured Weave callback intervals per engine include four intervals over 12.5 ms
for Hermes and one for fixed V8. V8's isolated 25.398 ms interval remains in the
aggregate. The former roughly once-per-second Weave gaps are not reproduced in this
batch; this does not promise zero future pauses or disable pressure GC.

Bloom remains about 3.0% slower in callback FPS with V8. Its ordinary intervals
alternate between approximately 16.7 and 25 ms, so p95 alone conceals a cadence
difference. FPS is derived from callback vsync timestamps; it does not count physical
screen presentations.

The [original physical batch](results.md) recorded 117.36 FPS and 15/1,196 Weave
intervals over 12.5 ms for V8. It used the old GC timer. These are separate batches on
different days with rebuilt consumers; they are context, not a paired physical
before/after causal experiment. The separate simulator trace established the timer
cause. This physical timing batch does not capture a new GC trace.

## Process memory

Values are MiB. Footprint is native `task_vm_info.phys_footprint`; RSS is resident size.
Scene peaks are the largest boundary/one-second samples in each process, summarized
across four processes. First-raster figures are single boundary samples. Pixel capture
and shutdown are outside scene peaks.

| Phase / metric               | Hermes median [range]     | Fixed V8 jitless median [range] |
| ---------------------------- | ------------------------- | ------------------------------- |
| First raster footprint       | 366.7 [360.2–367.1]       | 250.8 [245.0–264.6]             |
| Weave footprint sampled peak | 657.3 [653.7–663.9]       | 532.7 [522.9–533.4]             |
| Bloom footprint sampled peak | 1,031.5 [1,013.1–1,055.8] | 913.0 [888.2–947.1]             |
| Weave RSS sampled peak       | 380.1 [377.8–383.5]       | 211.9 [211.4–217.2]             |
| Bloom RSS sampled peak       | 388.7 [385.1–391.7]       | 218.7 [215.0–221.3]             |

V8's sampled scene footprint peaks are 19.0% and 11.5% lower. These are whole-process
measurements, including Flutter, source/binding data and graphics allocations, not JS
heap sizes. One-second sampling can miss short peaks. Timer deferral does not establish
unchanged memory growth during a long allocation-heavy animation.

## Validation and scope

The two proof runs, eight measured processes, 4,800 frames and image/input assertions
pass. SDK input tests pass 3/3. The fixed source hash matches the native source from the
previously validated 45/45 macOS runtime/GC suite; that suite was not rerun in this
device-only follow-up. This is not full physical-device joint-GC compatibility
certification. No engine source policy or runtime implementation was changed during this
retest; the analyzer adds physical/untraced checks, interval counts and maxima.

For these two source-loaded scenes, the evidence favors V8 jitless for startup, CPU
submission and process memory. Weave no longer has the recurring cadence deficit in the
previous V8 batch. A frame-rate-only decision still needs to account for Hermes's
remaining Bloom advantage. The uncaged SDK remains experimental.

Other devices, cold pre-main launch, optimized HBC, extended allocation/lifetime stress,
multiple Sessions, native ESM/remote imports and distribution signing are outside this
experiment. The dedicated device app and temporary application copies are removed after
recording the results; raw evidence, engine/SDK builds and source are retained. No
commit or push is performed.
