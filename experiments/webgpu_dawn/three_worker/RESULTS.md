# Three.js main/Worker/Edge results

Measured on 2026-11-04. Numeric audit v3 verified 324 statistic groups from nine
selected processes.

The whole-renderer Worker improved Flax root responsiveness and heavy-scene throughput,
while heavy-scene update latency increased. At 1920x1080 with 512 models, median
rendered FPS rose from 51.18 to 59.37 (16.01%). Median root-gap P99 fell from 53.18 to
8.48 ms, and gaps above 50 ms fell from 45 to zero over 60.96 and 60.93 observed seconds
respectively. Update-to-GPU-ack P50 increased 87.72% and P95 increased 59.84%. These
measurements do not support an unconditional Worker recommendation.

Edge retained 120.00 rendered FPS for the heavy case; Flax Worker reached 49.48% of that
rate. Edge's median update-ack P95 was 12.34 ms, compared with 91.65 ms for Flax Worker.
A substantial host performance gap remains.

## Render throughput and update latency

Values are **median [minimum–maximum] across three process trials**. Each latency
quantile is calculated within its own 99-observation round, then summarized across
trials. FPS counts successful scene render calls per second. Latency measures a planned
root update deadline through GPU-completion acknowledgement on that same root clock,
including both Worker handoffs. Screen presentation and input-to-photon latency were not
measured.

| Backing size / models | Arm         | Rendered FPS           | Update-ack P50 (ms) | Update-ack P95 (ms) |
| --------------------- | ----------- | ---------------------- | ------------------- | ------------------- |
| 960x540-64            | Flax main   | 115.35 [113.50–115.90] | 13.35 [12.84–13.35] | 15.82 [15.07–22.40] |
| 960x540-64            | Flax Worker | 119.90 [119.65–119.95] | 13.46 [6.83–13.90]  | 14.80 [14.31–14.85] |
| 960x540-64            | Edge main   | 120.00 [119.99–120.00] | 6.51 [4.19–7.88]    | 10.07 [9.83–13.26]  |
| 1920x1080-64          | Flax main   | 114.35 [113.40–114.40] | 12.92 [8.25–13.64]  | 19.76 [16.84–23.79] |
| 1920x1080-64          | Flax Worker | 119.95 [119.90–120.00] | 12.33 [6.39–13.17]  | 13.79 [13.09–14.85] |
| 1920x1080-64          | Edge main   | 120.00 [120.00–120.00] | 7.81 [5.93–9.12]    | 10.25 [8.37–11.61]  |
| 1920x1080-512         | Flax main   | 51.18 [49.81–51.25]    | 38.75 [37.12–42.30] | 57.34 [56.38–67.71] |
| 1920x1080-512         | Flax Worker | 59.37 [58.99–61.44]    | 72.74 [71.32–73.38] | 91.65 [86.77–94.43] |
| 1920x1080-512         | Edge main   | 120.00 [120.00–120.01] | 10.46 [10.18–10.75] | 12.34 [11.69–12.41] |

## Root responsiveness

The primary root statistic uses the **combined throughput observation and 300 ms tail**,
including boundary anchors. P99 cells use the same three-trial median/range format.
Counts and observed seconds are summed across those three windows. The 12.5 ms threshold
is 1.5 nominal display periods at 120 Hz; counts describe callback gaps. Flutter
FrameTiming and Edge Long Tasks remain separate host diagnostics.

| Backing size / models | Arm         | Combined root-gap P99 (ms) | Gaps >12.5 ms | Gaps >50 ms | Observed seconds |
| --------------------- | ----------- | -------------------------- | ------------- | ----------- | ---------------- |
| 960x540-64            | Flax main   | 30.10 [28.91–35.24]        | 131           | 0           | 60.93            |
| 960x540-64            | Flax Worker | 8.48 [8.46–8.48]           | 4             | 0           | 60.92            |
| 960x540-64            | Edge main   | 10.35 [10.32–10.36]        | 2             | 0           | 60.92            |
| 1920x1080-64          | Flax main   | 33.23 [32.67–34.44]        | 148           | 0           | 60.95            |
| 1920x1080-64          | Flax Worker | 8.37 [8.36–8.47]           | 0             | 0           | 60.92            |
| 1920x1080-64          | Edge main   | 10.32 [10.31–10.35]        | 0             | 0           | 60.93            |
| 1920x1080-512         | Flax main   | 53.18 [46.93–54.47]        | 3046          | 45          | 60.96            |
| 1920x1080-512         | Flax Worker | 8.48 [8.47–8.48]           | 2             | 0           | 60.93            |
| 1920x1080-512         | Edge main   | 10.31 [10.30–10.31]        | 2             | 0           | 60.92            |

For the heavy case, synchronous scene-update/render-call P50 was:

| Arm         | Call duration P50 (ms), median [range] |
| ----------- | -------------------------------------- |
| Flax main   | 16.17 [16.16–16.35]                    |
| Flax Worker | 16.31 [15.81–16.52]                    |
| Edge main   | 3.18 [3.03–3.27]                       |

These are elapsed intervals around scene updates and synchronous renderer calls. No
stage trace isolated the exact API, encoding, driver or GPU cause of the host gap.

## Matched workload and environment

All arms ran Three.js 0.186.1 from the same producer bundle. The 64-model scene contains
32 original textured GLB cubes, 16 skinned panels and 16 morph panels; the 512-model
case uses 256/128/128. Both use the original 256x256 BC-transcoded KTX2 texture with
nine mips, a PBR floor, 1024x1024 PCF shadows and TSL Bloom. Camera, elapsed-time
animation, opaque BGRA8 output and antialiasing-off settings match. Logical canvas size
is 880x495; backing sizes are 960x540 and 1920x1080 with renderer pixel ratio one.

| Input              | Recorded value                                                                                                               |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| Host               | Apple M2 Max, 12 CPU cores; macOS 27.2, build 26B123                                                                         |
| Display / viewport | 3440x1440 at 120 Hz; DPR 1; native and Edge viewport 1100x668                                                                |
| Power              | AC; no thermal warning recorded                                                                                              |
| Browser            | Edge 156.0.4314.58; V8 15.6.12.10; revision 7806b68d20d1c1273d5b07b4f4de18e8f5852581                                         |
| Native             | Flutter 439033d726d47670b7228864298cce3e9ddbd4c9; maintained Worker Release engine UUID 89331F50-993D-3518-B0D1-A5173481A26A |

Each case warmed for at least 3 seconds and 120 successful renders, then measured 20
seconds of throughput plus the separate 300 ms root tail. Throughput added no per-frame
completion callback, readback or profiling pass. A separate 10-second round scheduled
all 99 updates at 100 ms intervals and retained late dispatch/acknowledgement
observations. Fixed-pose PNG verification followed timing. Only the first case of each
process includes fresh module/process initialization; later cases recreate the renderer,
device and resources with a warm module cache. Cold measurements must be interpreted
with their case positions. OS and Metal caches were uncontrolled.

## Collection segments and recovery

The accepted dataset contains nine fresh processes in balanced **ABC / BCA / CAB**
order, where A=Flax main, B=Flax Worker and C=Edge. BCA reverses the three case sizes;
ABC and CAB use forward case order. Collection occurred in **two segments**, retaining
ABC from `matrix-2` and collecting fresh complete BCA/CAB rounds in `matrix-3`. The
manifest records a 2434.14-second interruption before resume qualification.

The earlier partial BCA Worker completed, but an unavailable PID -1 notification 149.14
ms after its complete boundary triggered the old whole-log focus validator. Independent
qualification accepted its raw checks. Recovery nevertheless excluded that partial
round, retained it as diagnostic evidence, and reran the entire BCA round; selection did
not depend on its performance values. The recovery decision is recorded in
`focus-recovery-advice.json`. This event does not establish external focus stealing. The
helper-5 to helper-6 lineage changed unavailable-identity/interval validation and
bounded resume handling; the measured app, producer and scene remained unchanged. All
failed attempts, original receipts and raw images remain retained.

## Verification and evidence

The collection wrapper passed. Independent numeric audit v3 checked 324 statistic groups
across 27 cases and all 2673 exact probe IDs. All 2673 planned probes were acknowledged.
The pixel receipt covers 54 decoded GPU images: six reference case/pose outputs and 48
nonreference comparisons with maximum and mean RGBA channel error zero. Native receipts
record zero for all ten GPU and two Worker counters after Session close.

Resource counts and allocation sizes matched. Three.js `programsSize` is an approximate
generated-source-length estimate; its order-dependent value and derived total matched
for the same declared case order.

External evidence root for this run:
`/Volumes/MAC_HOME/CodexHome/review-evidence/three-worker-comparison-20261104-b91d`. The
paths below are relative to that directory; [README.md](README.md) gives the maintained
build and browser-entry procedure.

| Receipt                                     | Contents                                                                              |
| ------------------------------------------- | ------------------------------------------------------------------------------------- |
| `matrix-3/matrix.json`                      | Nine selected raw result paths/hashes, exact process order and two-segment provenance |
| `reviewer-1/matrix-3-raw-audit-v3.json`     | Audited per-trial rows, medians/ranges and statistic definitions                      |
| `summary-root.json`                         | Cross-checked observation totals and additional diagnostics                           |
| `matrix-3/pixels.json`                      | All 54 decoded images, 48 nonreference comparisons and retained PNG hashes            |
| `matrix-3-execution/execution-receipt.json` | Exact resumed command and execution status                                            |

Producer-source SHA-256:
`8bb2dc8f646f3529873743bca81d0b724d4d835c86658ce96fa577566390ef44`. Shared scene-bundle
SHA-256: `5ca93d1bd1b47098ab37e0d7495bf2a13d1956821fb7c86746e5e7656ae88f2c`.

These three trials per arm provide observed ranges, without pooled-frame confidence
intervals or a statistical-significance claim. Results cover these original fixtures and
this macOS setup; general production assets, other platforms and physical display
latency remain unmeasured.

## Worker scheduling follow-up at 60 Hz (2026-11-05)

This follow-up uses the same Three.js 0.186.1 producer, fixtures and backing sizes
described above, on the actual 1920x1080 display at **60 Hz**, DPR 1 and viewport
1100x668. The earlier 120 Hz results remain historical and are not the control for the
gain reported here. Near-60 FPS values reflect the display cadence ceiling. All
performance measurements below used unprofiled builds with diagnostic tracing off.

### Trace finding and scheduling change

The diagnostic Worker trace demonstrated two host scheduling delays: an input-port
arrival preceded a frame-port arrival, but the frame task ran first; a GPU-completion
resolve mark also preceded another rendering task whose execution delayed the JavaScript
Promise reaction and acknowledgement. These are queue-order observations, rather than
GPU execution timings. Native completion callback timestamps describe Dawn callback
delivery; they do not measure all GPU execution time. No GC cause was established.

Ready Worker messages now enter the host-task FIFO. Each task runs the complete Flax
microtask / rejection / microtask checkpoint before the next task, and a flush handles
only the tasks present at entry before yielding through the existing `Timer.run` path.
Startup and top-level-await progress, shutdown and reference ownership retain their
tested behavior; see the
[Worker contract](../../../docs/architecture/dedicated-workers.md). The trace supports
this targeted change; its timings are not used as performance-benefit evidence.

### Separate heavy Worker A/B acceptance

Six fresh processes ran only 1920x1080-512 in **ABBAAB** order, with three controls and
three changed builds. Each used warmup of at least 3 seconds **and** 120 successful
renders, 20 seconds of throughput plus the 300 ms root-observation tail, then a separate
10-second round of 99 scheduled updates at 100 ms intervals.

| Heavy Worker metric         | Control, median of 3 | Scheduling change, median of 3 |
| --------------------------- | -------------------- | ------------------------------ |
| Planned-ack P50 (ms)        | 68.487               | 47.778                         |
| Planned-ack P95 (ms)        | 88.069               | 60.852                         |
| Rendered FPS                | 59.950               | 60.000                         |
| Update/render call P50 (ms) | 15.394               | 15.263                         |

The independently accepted planned-ack P50 improvement was **20.709 ms (30.238%)**; all
three matched pairs improved. The preregistered requirements were at least 10% and 5 ms
improvement, improvement in at least two of three pairs, P95 regression no greater than
5% and no greater than 3 ms, FPS at least 97% of control, synchronous update/render-call
P50 at most 105% of control, and zero warmed root gaps above 50 ms. All requirements
passed. FPS was 100.083% of control and call P50 was 99.149%; all six warmed
throughput-plus-tail windows had zero >50 ms root gaps. Cold initialization still
recorded >50 ms gaps; no cold-start fix is claimed.

### Fresh three-arm comparison

A separate nine-process comparison ran complete **ABC / BCA / CAB** rounds, where A=Flax
main, B=Flax Worker and C=Edge main. ABC/CAB used forward case order and BCA used
reverse order. Each process ran all three cases with the same full windows and warmup.
Later cases reused the process/module cache. These Worker values are separate from the
heavy-only A/B experiment.

Every cell below is **median [minimum–maximum] across three processes**. Latency
quantiles are computed within each process's 99 raw observations, without pooling frames
or probes. Planned latency runs from the root deadline to the root-observed
`queue.onSubmittedWorkDone()` acknowledgement, including Worker handoffs. It is not
presentation or input-to-photon latency.

| Backing size / models | Arm         | Rendered FPS        | Planned-ack P50 (ms) | Planned-ack P95 (ms) |
| --------------------- | ----------- | ------------------- | -------------------- | -------------------- |
| 960x540-64            | Flax main   | 59.05 [58.70–59.25] | 15.47 [15.43–15.73]  | 18.49 [17.44–34.07]  |
| 960x540-64            | Flax Worker | 60.00 [59.95–60.00] | 16.80 [16.31–17.69]  | 18.97 [18.67–19.31]  |
| 960x540-64            | Edge main   | 60.00 [59.99–60.00] | 16.92 [16.40–17.59]  | 19.37 [18.20–19.46]  |
| 1920x1080-64          | Flax main   | 59.05 [58.95–59.12] | 16.44 [14.68–16.45]  | 19.16 [16.75–22.67]  |
| 1920x1080-64          | Flax Worker | 60.00 [60.00–60.00] | 16.50 [15.35–16.76]  | 18.38 [17.41–18.82]  |
| 1920x1080-64          | Edge main   | 60.00 [60.00–60.00] | 17.17 [17.06–18.68]  | 19.80 [19.79–21.54]  |
| 1920x1080-512         | Flax main   | 55.35 [54.74–55.36] | 45.65 [44.65–46.48]  | 59.18 [54.62–60.61]  |
| 1920x1080-512         | Flax Worker | 60.00 [59.88–60.00] | 45.84 [40.40–49.40]  | 57.90 [57.65–63.47]  |
| 1920x1080-512         | Edge main   | 60.00 [60.00–60.00] | 21.85 [20.40–22.74]  | 23.48 [21.05–23.68]  |

The next table measures elapsed synchronous scene-update/render calls and root callback
gaps over the warmed 20-second throughput window **plus the 300 ms tail**, including
boundary anchors. Gap counts list the three process counts. Cold gaps are retained
separately.

| Backing size / models | Arm         | Update/render call P50 (ms) | Warm root-gap P99 (ms) | Gaps >50 ms, per process |
| --------------------- | ----------- | --------------------------- | ---------------------- | ------------------------ |
| 960x540-64            | Flax main   | 4.86 [4.84–4.88]            | 30.98 [30.20–40.26]    | 0 / 0 / 0                |
| 960x540-64            | Flax Worker | 5.14 [5.12–5.14]            | 17.23 [17.22–17.23]    | 0 / 0 / 0                |
| 960x540-64            | Edge main   | 1.66 [1.57–2.16]            | 18.47 [18.46–18.53]    | 0 / 0 / 0                |
| 1920x1080-64          | Flax main   | 4.92 [4.87–5.01]            | 35.33 [33.19–35.76]    | 0 / 0 / 0                |
| 1920x1080-64          | Flax Worker | 5.18 [5.16–5.19]            | 17.22 [17.22–17.23]    | 0 / 0 / 0                |
| 1920x1080-64          | Edge main   | 2.02 [1.89–2.20]            | 18.44 [18.44–18.46]    | 0 / 0 / 0                |
| 1920x1080-512         | Flax main   | 15.87 [15.74–16.14]         | 49.87 [45.54–49.89]    | 11 / 6 / 11              |
| 1920x1080-512         | Flax Worker | 15.46 [15.17–15.68]         | 17.18 [17.17–17.18]    | 0 / 0 / 0                |
| 1920x1080-512         | Edge main   | 3.84 [3.70–3.92]            | 18.58 [18.58–18.59]    | 0 / 0 / 0                |

In the heavy case, the Worker sustained about 60 FPS with zero warmed >50 ms root gaps;
main rendered 55.35 FPS and recorded 11 / 6 / 11 such gaps. The Worker still had higher
update/render-call cost and planned-ack latency than Edge. This comparison does not
isolate the remaining cause.

### Correctness, collection limits and evidence

The fresh comparison contains exactly **9 processes, 27 cases and 2673 unique FIFO probe
IDs**, with no loss or coalescing. All **54 decoded GPU images and 18 actual Flutter
RepaintBoundary captures** matched their same-case references with maximum and mean RGBA
channel error zero. Every native process retired all ten GPU and both Worker counters to
zero.

Resource counts and sizes matched except for Three.js `programsSize`, an approximate
generated-source-length estimate: the small and heavy cases differed by 23 bytes with
case position, with exactly the same delta in `memory.total`. Comparison normalizes only
that estimate and its contribution to the total; all raw values remain retained.

The frozen H3 gate required 30 continuous quiet seconds before each launch, reset by
foreign Flax processes, listed runtime/build commands at >=1% CPU, or aggregate
Spotlight CPU >=100%. Only explicitly registered owned PIDs were exempt. All foreground
intervals passed. The comparison retained 199 full process snapshots, with no foreign
contender and maximum Spotlight CPU 16.7%; the A/B run retained 54 snapshots with
maximum 12.6%. Sampling every 5 seconds cannot establish absolute quiet between samples.
No separate operator CPU/UI/status jobs ran during the accepted observation windows.

Between guarded comparison rounds, pauses were 190.762 seconds and 55.929 seconds. Exact
execution and observation boundaries are retained. Only complete qualified fresh rounds
enter these tables; contaminated, incomplete and pre-H3 attempts remain excluded,
without selecting individual processes by performance. No older numeric results are
pooled into this follow-up.

Matching maintained-engine checks passed: **31 Worker UI tests, 22 host UI tests and 59
runtime ABI/GC tests**, plus FFI declaration verification and scoped Dart analysis.
Markdown lint, the existing documentation-tooling tests and local documentation-link
checks passed. The Melos `check:runtime` command stopped during dependency resolution
before running its alias; the unchanged alias body, `dart run tool/check_runtime.dart`,
passed when executed directly with the matching maintained engine.

External evidence root:
`/Volumes/MAC_HOME/CodexHome/review-evidence/worker-ack-latency-20261104-4f62`. The
paths below are relative to that root. Producer and scene SHA-256 values are unchanged
from those recorded above.

| Receipt                                                                                                                    | Contents                                                                         |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `diagnostic-worker-1/01-worker/result.json`                                                                                | Diagnostic queue-order trace; excluded from benefit calculations                 |
| `clean-heavy-ab-4-qualification.json`; `reviewer-1/clean-heavy-ab-4-review/review.md`                                      | Raw A/B references, thresholds and independent A/B acceptance                    |
| `clean-final-aggregate/summary.json`; `clean-final-aggregate/matrix.json`; `clean-final-aggregate/collection-lineage.json` | Per-process medians/ranges, nine raw result paths/hashes, round order and pauses |
| `clean-final-aggregate/pixels.json`; `clean-final-aggregate/flutter-pixels.json`                                           | All 54 GPU and 18 Flutter decoded comparisons and image hashes                   |
| `quiet-controls-3.json`; `clean-final-aggregate-verification/execution-receipt.json`                                       | Frozen helper inventory and measured-source/native/app/browser/input guards      |
| `candidate2-scope-checks/report.json`                                                                                      | Exact maintained-engine test commands, results and Melos resolution limitation   |

These three processes per arm give observed ranges, without a statistical-significance
claim. Scope remains these fixtures and this macOS setup; other platforms, general
production assets and physical display latency remain unmeasured.

## Remaining Worker call cost: profiled diagnosis (2026-11-05)

Independent review qualified one profiled Worker record and one profiled Edge record for
the matched Three r186 heavy scene: `1920x1080/512`, with 256 textured GLB, 128 skinned
and 128 morph models. The [benchmark protocol](README.md) remains unchanged. The
recorded screen was 3440x1440; native reported 120 Hz, also supplied to the Edge
configuration. Both viewports were 1100x668 at DPR 1. Browser physical refresh was not
independently measured.

| Diagnostic metric                            | Flax Worker, native Time Profiler | Edge, JS CPU profiler |
| -------------------------------------------- | --------------------------------: | --------------------: |
| Rendered FPS                                 |                            57.883 |               119.995 |
| Update/render call P50 / P95 (ms)            |                   16.558 / 19.442 |         3.080 / 3.675 |
| Scheduled update to GPU ACK P50 / P95 (ms)   |                   59.166 / 74.106 |       12.565 / 13.290 |
| Root-frame gaps >50 ms, throughput plus tail |                                 0 |                     0 |

These are single profiled records, with independently checked warm-window coverage. They
are not repeated unprofiled retention measurements or a comparison with the original 60
Hz results. GPU ACK means queue completion, not physical presentation.

Native sampling covers all app-process CPU threads; OS thread IDs do not establish
Worker realm ownership. Edge profiling covers the attached renderer JS realm and
excludes its separate GPU-process backend. Warm native samples show `invokePrepared`,
BigInt persistent-handle creation, TLS/isolate-entry and allocator paths. Inclusive FFI
samples also contain native Dawn/Metal callee work. These overlapping paths cannot be
added or subtracted to assign the whole call-time gap to a pure bridge cost. No
removable-cost estimate or production win follows from this profile.

Both qualified canonical runs retained all 99 probe IDs. Same-pose Worker/Edge GPU PNGs
were byte-identical, and the two poses differed. Native Flutter capture passed; the
native process retired all ten GPU and both Worker counters to zero. These checks apply
to the qualified canonical runs, not the failed API attempts.

Qualified API counter sets remain **0**: both Worker API attempts failed the existing
foreground guard when a pre-existing Edge process became active. The activation trigger
remains unknown. A 30-second focus sentinel passed but did not guarantee later
stability. The subsequent route allowed exactly one Worker attempt and a conditional
Edge run; the Worker failed, so that Edge run was not started. API capture is stopped
without retry or guard relaxation.

This diagnosis introduced no production optimization, including no `0n`-to-`null`
pointer change, and accepted no new performance gain. The proposed optimization,
pre-registered unprofiled A/B and final main/Worker/Edge comparison remain
**INCOMPLETE**. There is no fresh main-thread result in this follow-up.

## Chromium-guided experiments: acceptance blocked

Four private directions were explored against the preserved implementation. C passed CPU
differential checks for forwarding full-span typed-array views to `writeBuffer`,
retaining existing paths for copied, mapped, shared, empty and detached inputs. H
explored BigInt-handle processing while retaining `V8Scope` and ownership guards;
private Debug runtime/GC checks passed. T explored typed pointer-pair calls and the
empty-offset `setBindGroup` signature. Independent source review found a closed-error
parity defect; actual engine probes reproduced it. A private testing-Debug repair passed
T/HT's 88-row focused comparisons and related FFI/runtime/GC checks. T/HT production and
Release images remained unfixed and must not be adopted.

D's synchronous render-pass batch, bounded to 64 records, passed maintained-FFI/ Dawn
Null checks for decoding, ordering, ownership, close/stop and native counter retirement.
A separate microtask-first retirement check passed on the same frozen inputs. Neither
establishes Metal presentation or real Worker retirement. Dawn Wire was unavailable in
the existing SDK; asynchronous placement remained mechanics-only, without
frontend/State/canvas or Metal integration.

The sole fresh unprofiled baseline qualification stopped in its first main arm. Passive
events proved a foreign activation 53.879 seconds after owned readiness; the requester
remains unknown. No complete arm, 99-ID round, pixel comparison or internal
ten-GPU/two-Worker retirement qualified. Integrity guards passed. All foreground macro
work remains stopped without retries.

No experimental optimization was adopted. CPU checks, profiles and partial output are
not rendering gains or retention evidence. Full production-layout/Release runtime,
GUI/GPU/Worker correctness, 99 probes, fixed-pose/displayed pixels, preregistered
unprofiled A/B retention and a fresh matched main/Worker/Edge comparison remain
**BLOCKED**. C's source was restored to its initial dirty bytes and ordinary ESM
rebuilt; other candidates remain private, with the maintained SDK and original engine
unchanged.
