# iOS Canvas engine results

Measured on 2026-10-24. With the current Flax source-loading path, V8 jitless had lower
source startup time, CPU submission time and process memory than Hermes. Hermes had
slightly higher callback frame rates in both scenes. These measurements support V8 as a
candidate for engine consolidation, but do not establish a universal frame-rate win.

## Configuration and acceptance

- iPhone 14 Pro, iOS 27.0.1 (24A446), portrait, 1179 x 2556 physical pixels, DPR 3, 120
  Hz display. Flutter Release/AOT with Impeller Metal. Canvas backing: 880 x 480;
  display width: 361 logical pixels, raster scale: 1.23068.
- Flax `74dab9f76`, maintained Flutter fork `7073a170189`. Both engine overlays reuse
  the same renderer objects. The common Dart AOT image, Runner input and all JS source
  assets match. The application has 25 JS asset files totalling 4,506,283 bytes, plus
  the same embedded source bootstraps. No application HBC, persistent V8 code cache or
  application startup snapshot is supplied.
- Hermes 260318099.0.4, revision `d412d3bd851278712c20cca25d094e32641a0465`; V8
  15.4.80.15, revision `e959d47215186f24e182a0503a52374c96569722`. V8 is built jitless,
  with CppGC cage, CppGC pointer compression and CppGC young generation disabled. Flax
  joint GC remains connected. Unused optional direct FFI is disabled in both overlays.
  Neither engine's application evaluation strategy was tuned.
- Eight valid new-process trials, order H/V/V/H/V/H/H/V. Each process runs 45 warmup
  frames and 300 measured frames for each scene: 1,200 frames per engine per scene,
  4,800 measured frames total. All accepted native samples report nominal thermal state
  and Low Power Mode off. One additional attempt failed foreground/frame completeness
  checks, was retained separately and excluded before the remaining four trials were
  resumed with the same application inputs.
- Separate device proof runs pass interpreter identity/no-JIT checks. Both 880 x 480
  output PNGs are byte-for-byte identical across all eight valid trials and both
  engines. Pixel capture happens after timing. SDK input tests pass 3/3; Dart
  analysis/formatting, JS formatting, Python compilation and documentation checks pass.
  The required macOS `check:runtime` and `check:runtime:v8` commands each pass 45/45;
  both use the maintained macOS V8 engine, not the experimental iOS SDK.

Values below are medians of the four per-process results. For p95, the table reports
median per-process p95, not the percentile of a pooled frame population. The
[aggregate receipt](results.json) contains all per-process-result ranges. Raw frame,
memory, signature, source/build and failure receipts remain local under
`.local/canvas-engines/`.

## Startup

All times are milliseconds. Startup begins at Dart `main`, after native process loading;
first raster ends at Flutter's first-raster notification. OS/SpringBoard launch and
pre-main dylib loading are outside this boundary, and OS file/dyld caches were not
cleared. Readiness includes Session initialization, source evaluation, host/plugin
setup, used modules and initial scene submission.

| Measurement          | Hermes median [range]     | V8 jitless median [range] |
| -------------------- | ------------------------- | ------------------------- |
| Asset loading        | 15.698 [13.027–20.267]    | 18.292 [17.262–25.748]    |
| Runtime creation     | 3.208 [2.825–7.554]       | 5.711 [4.749–15.630]      |
| Session to ready     | 757.337 [710.766–783.761] | 253.052 [238.020–322.769] |
| Main to ready        | 783.109 [727.995–799.984] | 279.297 [260.216–363.190] |
| Main to first raster | 826.483 [768.685–841.045] | 317.603 [298.772–400.627] |

V8's main-to-first-raster median is 61.6% lower. Hermes creates the bare runtime faster;
the larger difference appears during the actual Session/source initialization.

## Frame costs

Weave crisp is the existing path/encoding-oriented scene, not a pure numerical stress
workload. Bloom soft uses native blur, saturation, screen blending and translucent
paths. Both submit identical geometry per frame. Times are milliseconds, p50 / p95.

| Scene / engine           | CPU submission | UI/build      | Raster          | Frame total span |
| ------------------------ | -------------- | ------------- | --------------- | ---------------- |
| Weave crisp / Hermes     | 1.303 / 3.760  | 1.330 / 3.788 | 4.117 / 6.909   | 6.938 / 8.525    |
| Weave crisp / V8 jitless | 1.074 / 1.531  | 1.114 / 1.580 | 4.041 / 6.972   | 5.376 / 8.151    |
| Bloom soft / Hermes      | 5.734 / 5.984  | 5.783 / 6.054 | 19.697 / 21.577 | 34.996 / 40.093  |
| Bloom soft / V8 jitless  | 2.814 / 3.148  | 2.902 / 3.262 | 20.355 / 22.130 | 36.411 / 41.206  |

CPU submission includes JS drawing/encoding, explicit flush and synchronous batch
decoding, with three measurement host calls common to both engines. It excludes work
between callbacks. Frame total span includes scheduling delay from vsync to raster
finish; it is not the sum of the CPU and raster medians. Raster duration does not mean a
completed GPU fence or physical display presentation.

V8 reduces CPU submission p50 by 17.6% for Weave and 50.9% for Bloom. Its native commit
p50 is higher: Weave 0.173 vs 0.142 ms; Bloom 0.618 vs 0.529 ms. The CPU advantage comes
from the pre-commit drawing/encoding segment. Bloom remains dominated by raster work;
reduced JS submission time does not translate to improved frame cadence.

| Scene       | Hermes callback FPS [range] | V8 jitless callback FPS [range] |
| ----------- | --------------------------- | ------------------------------- |
| Weave crisp | 119.91 [119.11–119.91]      | 117.36 [117.16–117.55]          |
| Bloom soft  | 50.60 [50.50–50.78]         | 48.88 [48.45–50.00]             |

Callback FPS is 2.1% / 3.4% lower with V8 in this sample. Weave has 15 callback
intervals over 12.5 ms out of 1,196 intervals with V8, versus 1/1,196 with Hermes. V8's
longest interval is 29.191 ms; Hermes's is 21.178 ms. V8's long intervals recur
approximately once per second, outside most timed CPU submission brackets.

The current V8 bridge's `JointHeap::ScheduleIdle` requests joint GC after 1,000 ms, and
outermost `V8Scope` exits schedule this work. The cadence is consistent with that path,
but causality has not been established with a trace. Memory sampling occurs at different
phase offsets. These are measurements of the current Flax engine/bridge/GC combination,
not isolated JavaScript VM arithmetic. No GC policy was altered to improve benchmark
scores.

## Process memory

Values are MiB. Footprint is native `task_vm_info.phys_footprint`; RSS is
`resident_size`. Scene peaks are the largest boundary/one-second samples in each
process, summarized across four processes. First-raster figures are single boundary
samples. Pixel capture and shutdown are outside the scene peaks.

| Phase / metric               | Hermes median [range]     | V8 jitless median [range] |
| ---------------------------- | ------------------------- | ------------------------- |
| First raster footprint       | 366.5 [365.8–367.3]       | 264.6 [255.2–325.2]       |
| Weave footprint sampled peak | 660.4 [659.0–662.5]       | 529.3 [528.4–533.5]       |
| Bloom footprint sampled peak | 1,049.0 [1,021.9–1,076.5] | 927.9 [895.3–938.7]       |
| Weave RSS sampled peak       | 376.4 [375.1–382.5]       | 211.2 [209.7–214.3]       |
| Bloom RSS sampled peak       | 386.2 [384.4–393.1]       | 215.8 [201.1–216.8]       |

V8's scene footprint peaks are 19.9% / 11.5% lower. These values include Flutter,
source/binding data and graphics resources; they cannot be read as JavaScript heap
sizes. Blur and compositing make graphics memory substantial. One-second sampling can
miss transient peaks; no forced GC or normalization by allocated JS bytes was applied.

The [simulator trace follow-up](gc-trace-results.md) has since confirmed and fixed the
bridge timer defect. These physical-device figures remain the original, unmodified
baseline. The subsequent [fixed-engine device retest](fixed-ios-results.md) compares the
repaired V8 engine with Hermes in a separate physical-device batch.

## Implication and remaining limits

For source-loaded Flax applications, this result favors continuing the V8 jitless
consolidation evaluation: startup and process memory improve, and drawing/encoding
submission is faster. The current Hermes integration gives steadier callback cadence
here. A frame-rate-first decision must account for V8's recurring gaps rather than
relying on its lower median CPU time.

The stock V8 SDK failed CppGC cage reservation on this iPhone before Canvas startup.
Getting a working candidate required an upstream configuration change, matching adapter
defines and experimental iOS SDK selection. Local SDK building also needed
Xcode-compatible GN/host-linker setup. No VM ESM implementation or production engine
policy was changed for this experiment.

This is one device and two existing scenes. Heavy physics, long-running allocation
churn, many Flutter object lifetimes, simultaneous Sessions, native ESM/remote import,
full joint-GC correctness for the experimental iOS configuration, distribution signing
and other devices remain unmeasured. The experimental uncaged V8 configuration is not
production acceptance. All work is local and uncommitted.
