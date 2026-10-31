# Canvas and WebGPU: the first 60 seconds

The captures confirm a recurring **joint Dart/V8 GC pause in WebGPU**, including after
startup. They do **not** support attributing every initial or intermittent frame drop to
V8 initialization or JIT. Canvas has fewer reproducible running stalls; most of its
captured long intervals remain unattributed after excluding substantial GC and sampled
compiler work. No performance implementation was changed for this investigation.

## Capture protocol

Apple M2 Max, 30 GPU cores, macOS 27.0.1 (26A434), AC power, 3440 × 1440 at 120 Hz. Each
module uses its existing default animated showcase: Canvas Afterglow Bloom / Aurora at
880 × 480 backing pixels; WebGPU Spectrum particles at 960 × 540. The diagnostic copies
start animation automatically. These are separate module investigations, not a matched
Canvas-versus-WebGPU throughput comparison or a new browser comparison.

Four Release-process captures run in this order: **Canvas 1 → WebGPU 1 → WebGPU 2 →
Canvas 2**. Two further fresh-process controls, Canvas → WebGPU, omit Time Profiler
while retaining all other probes. Each observation window is process time **0–60
seconds**; the applications record beyond 60 seconds so intervals crossing the boundary
are not lost. No application warmup is discarded. OS and driver caches are retained.

The isolated engine records native V8 code-added events, V8 GC callbacks, Dart young/old
collections, stop-the-world scopes, and joint-heap phases. `--trace-opt --trace-deopt`
output is also retained, but stdout arrival time is not used as an exact event clock.
The hosts record Flutter `FrameTiming` phases and JS rAF callback boundaries into
preallocated arrays. Time Profiler adds 1 ms CPU samples to the four primary captures.
The controls still have diagnostic overhead; they are not probe-free benchmarks.

The recorder attaches to a process paused in the engine constructor, before Dart/V8
initialization. Only this attachment pause is removed from elapsed time. The earlier
process-loader interval is timed, **not CPU-sampled**. Native steady/wall clocks, Dart
`Timeline.now`/wall anchors, and Flutter raster-finish/wall anchors align the streams.
Flutter anchor spread is 85–143 µs; maximum Dart anchor uncertainty is 349 µs across all
six runs. CPU sampling has approximately 1 ms resolution, not that sub-millisecond
precision. All 22 Dart STW intervals lasting at least 10 ms in the four sampled runs
contain matching main-thread GC samples.

The two signed app binaries differ in code signatures. Removing signatures from copies
produces identical engine SHA-256
`1171b7889bd8c19aa53fa0204b7fd6b2b84f833373b723c93ebb2314d55e3686` and UUID
`E2EFD85A-58A5-35F7-828D-AC415FF750A8`. Per-app signed hashes are in the receipt. The
diagnostic engine includes the existing retained optimizations.

## Startup: initialization, compilation and first content

All times below retain real startup work and exclude only the recorder attachment pause.
Scene-ready is a JS lifecycle marker, not proof that pixels have reached the display.
The fixed 0–5 s bin is called startup for reporting; JIT can continue after that bin.

| Run            | Loader timed ms | V8 runtime create ms | Scene ready ms | First rAF ms | Startup requested joint passes |
| -------------- | --------------: | -------------------: | -------------: | -----------: | -----------------------------: |
| Canvas 1       |         1670.97 |                 5.78 |        2279.68 |      2308.05 |                              3 |
| Canvas 2       |           55.38 |                43.25 |         896.25 |       929.56 |                              1 |
| Canvas control |           51.71 |                49.55 |         914.74 |       946.85 |                              1 |
| WebGPU 1       |         1452.11 |                 6.10 |        2902.24 |      2926.95 |                              2 |
| WebGPU 2       |           20.10 |                 2.06 |         626.78 |       627.14 |                              1 |
| WebGPU control |           52.91 |                40.55 |         974.68 |       980.12 |                              1 |

V8 runtime creation takes **2.06–49.55 ms**, while scene readiness takes 627–2902 ms.
The first loader intervals alone take 1.45–1.67 s. Cached loaders, Dart startup, module
installation, initial UI and GPU setup also contribute. These runs do not isolate all of
those stages or distinguish disk-cache effects from other loader work.

There is real compilation activity: the four primary captures have 554–730 V8 code-added
events and 113–118 ms of sampled main-thread V8 compiler work in 0–5 s. Those sample
weights are accumulated CPU observations, not one continuous pause. Code-added events
include generated machine code and regex code; they do not all mean optimizing JIT jobs.
Separate bytecode events are preserved in the timelines.

Startup requested Dart collection passes last 20.0–32.0 ms across the six runs. Several
finish before the first animation callback, so they increase startup time without
appearing in the rAF-gap count. Initial Flutter UI build maxima are 28.7–40.2 ms and
raster maxima are 8.2–91.1 ms. Startup therefore includes multiple costs. No primary
capture has a >20 ms rAF interval with at least 3 ms of sampled main-thread compiler
work; this does not exclude shorter compilations or work between samples.

## Running phase: 5–60 seconds

A long interval here means **over 20 ms between consecutive rAF callback starts**,
compared with an 8.33 ms period at 120 Hz. It is not a measured physical dropped frame.
The GC-overlap column requires at least 5 ms of unioned Dart STW/V8 GC time. Nested
Dart/V8 scopes are counted once. Overlap identifies a contributor, not necessarily the
whole cause of a long interval.

| Run            | rAF intervals >20 ms | With ≥5 ms GC | Requested joint passes | Requested-pass P50 / max ms | UI build P99 ms | Raster P99 ms |
| -------------- | -------------------: | ------------: | ---------------------: | --------------------------: | --------------: | ------------: |
| Canvas 1       |                   21 |             1 |                      0 |                           — |            1.75 |          5.03 |
| Canvas 2       |                    3 |             0 |                      0 |                           — |            1.50 |          5.08 |
| Canvas control |                    1 |             0 |                      0 |                           — |            1.47 |          5.16 |
| WebGPU 1       |                   16 |             9 |                      9 |               20.15 / 23.41 |            1.53 |          1.23 |
| WebGPU 2       |                   14 |             6 |                      6 |               19.34 / 24.38 |            1.79 |          1.93 |
| WebGPU control |                    9 |             8 |                      8 |               18.72 / 20.45 |            1.77 |          1.39 |

### Confirmed WebGPU pause chain

All **15 running requested passes in the two profiled WebGPU runs** overlap long rAF
intervals. The control reproduces **8 more** with no CPU sampler. The collection pause
is therefore a running-time issue, not simply the engine having just loaded.

For example, WebGPU 2 at **24.519–24.555 s** has a 36.505 ms rAF interval:

1. A V8 major collection occupies 24.524880–24.529026 s.
2. A posted `Dart_FlaxCollect` runs for 24.379 ms starting at 24.529695 s. Dart
   old-space STW lasts 24.343 ms, including joint-root preparation and a nested 5.533 ms
   V8 major collection.
3. The next Flutter frame starts 28.219 ms after its vsync timestamp. The interval
   contains 29.340 ms of unioned GC, 32 ms of sampled main-thread GC work, and no
   sampled compiler work. Raster takes only 0.336 ms on that next frame.

The source path agrees with this ordering: a natural V8 major-GC completion requests a
posted Dart collection; the joint heap then traces cross-language references and can
request another V8 major pass. The `dart-old` reason 9 in these posted passes is the
Dart API's collection reason, not an application calling a stress-GC helper. No probe
forces collection. This identifies collection work as the blocker in these windows; it
does not yet identify the allocation sites that triggered the original pressure.

### Canvas and the remaining intervals

Canvas 1 has a 91.569 ms interval at 3.949772–4.041341 s, with zero GC overlap, zero
sampled compiler work, only 2 ms of sampled main-thread CPU work, a 1.599 ms UI build,
and a 3.813 ms raster. Its next frame's vsync-to-build delay is 83.293 ms. Similar
running intervals have short callback/build/raster work and little sampled main-thread
CPU activity. They establish a delay before callback/frame execution; the samples do not
establish whether the cause is host event delivery, OS scheduling, profiler effects or
another wait. Time Profiler did not record OS thread wait states.

Canvas 1 also has a boundary interval beginning at 59.783421 s and resuming at 60.034082
s. Its first 216.579 ms fall inside the window and are retained in the table. A 7.143 ms
Dart STW phase with nested joint/V8 GC occurs near its end. That GC is a contributor,
but cannot account for the whole interval. Canvas 2 and its control have no comparable
running major collection.

The unsampled controls reduce residual running intervals to one per module; this is
consistent with a sampling/environment contribution to the larger profiled tails, but
the runs are sequential and there is only one control per module. It is not a controlled
estimate of observer overhead. JIT continues after 5 s, especially in Canvas, without
sampled compiler bursts explaining these long intervals.

## Evidence, verification and limits

The compact [machine-readable receipt](startup-joint-trace-macos-arm64.json) records
per-run metrics, hashes, clock checks and source-preservation results. Local raw
evidence is under `.local/startup-joint/`. Each of the six capture directories contains
`frames.json`, `native-events.json`, `summary.json`, and **`joint-trace.json`**. The
four sampled captures also retain the Instruments **`native.trace`**, CPU summaries and
compressed sample exports. The merged JSON has separate logical tracks for lifecycle,
JIT code events, native GC, rAF, Flutter build/raster/vsync delay, and compiler/GC CPU
samples. Logical tracks do not imply separate executing threads. Open `native.trace` in
Instruments or import `joint-trace.json` into a compatible trace viewer.

All **6/6 captures** pass collection/coverage/clock/ordering checks. All **3/3 WebGPU
hosts** close with six native resource counters at zero. The 60-second boundary case is
explicitly checked. Diagnostic engine code equivalence and all 22 long STW-to-CPU
alignments pass. Probe header compilation and the independent engine/host builds pass.
Experimental app/build scratch is removed after preserving sources, binaries and
symbols.

This investigation leaves the retained engine and existing application sources
unchanged; only this report and its receipt are new public files. No commit or push is
made. Full runtime acceptance, Edge comparison, heap-allocation sampling, GPU execution
timestamps, physical input-to-display latency, OS wait-state attribution and other
showcase scenes are outside these captures. In particular, these new traces cannot
retroactively assign a cause to every low-FPS interval in the earlier unprofiled
benchmark.
