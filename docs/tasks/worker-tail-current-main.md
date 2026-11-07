# Task: Diagnose the remaining Worker tail on current main

Status: performance and required functional validation complete; no new runtime
optimization retained. Independent acceptance is tracked in the external evidence.
Uncommitted; no push or publication.

## Goal and scope

Explain the roughly 25 ms Worker observation gap on current main, retain a change only
with useful probe-free benefit, and repeat the matched WebGPU comparison with Edge.
Preserve inherited descriptor shortcuts, exact cross-heap tracing, memory accounting,
task/microtask ordering, output validation and deterministic retirement.

The
[machine receipt](../../packages/flax_webgpu/example/validation/worker-tail-current-main-macos-arm64.json)
records per-process results. Evidence root:
`/Volumes/MAC_HOME/CodexHome/review-evidence/worker-tail-main-20261102-100714/`. Initial
source receipts, immutable apps and the final independent verdict live there as
`initial-receipts.json`, `artifacts-v1/manifest.json` and
`independent-final-review.json`. The external verdict owns final acceptance; no
whole-task independent PASS is asserted here.

## Protocol and provenance

Initial revisions are Flax `d954085ff34814cab21d8991b6b590bec9e182eb`, Flutter
`439033d726d47670b7228864298cce3e9ddbd4c9` and Dart
`416e33b0ffaef062a60ec966bb8c82ed2b83f128` with the maintained patch applied. Inherited
edits are preserved. Matching engines are the read-only
`flax_mac_joint_gc_candidate_{debug,release}_arm64` outputs; canonical ordinary engine
outputs were not replaced.

Diagnostic builds compile five current-ABI source copies with the accepted compile flags
and replace only those objects in an isolated link. Shared Flutter/Dart source and
accepted objects/frameworks remain unchanged. Light tracing removes `GetHeapStatistics`
callbacks, which can mutate V8 allocation areas, and suppresses main-checkpoint logging.
Copied Dart packages retain port/handler, Worker checkpoint and frame markers. Frame
wall alignment uses `rasterFinishWallTime - rasterFinish`; no animation is added. Static
decoder sections do not establish dropped frames. Probe-free apps reuse the original
native and Dart AOT code; re-signing changes signature bytes only. Diagnostic timings
explain ordering and are not quiet metrics.

The default fixture excludes CTS. Decoder inputs and forward/reverse Worker order
`0,1,2,2,1,0` match across diagnostic and quiet apps. Meshopt uses two cold and eight
reused tasks; every measurement retains its 30 ms post-completion window, with output
validation afterward. The initial 4/4 KTX2 dispatch assertion failed because upstream
WorkerPool immediately gives queued work to whichever Worker finishes. The corrected
check requires two Workers, eight total tasks, work on each and matching replies. Later
corrupt-input checks add two tasks, so the final mutable dispatch totals ten. This
fixture correction changes neither inputs nor runtime scheduling.

The valid complete sequence lasts 307.00 s: 276 one-second process samples show no
build/test/snapshot overlap, on AC with no recorded thermal warnings. This was not a
lab-idle machine: ordinary `mds_stores` and Codex Renderer samples reach 254% and 272%
CPU. Sampling can miss shorter interference. Earlier sequences with actual foreign
snapshot/runtime-test overlap are discarded, including `discarded-sequence-1`. The
current display is 3440×1440 at 120 Hz, viewport 1100×668, DPR 1. Prior 60 Hz
measurements are not a before/after control.

## Findings and decision

The valid light trace contains 15,945 native events, 2,983 Dart events, 845 frames and
54 decoder batches without buffer overflow. Its 94 requested collections contain 93
single Dart old passes and one conditional double pass. Of 139 joint phases, 76 contain
one V8 major and 63 contain two. Two V8 majors inside one Dart pass remain after
removing heap-statistics probes; they are not duplicate Dart passes.

All 279 parent-directed replies match successful native post calls, port delivery and
handler completion. All 664 native post calls return true. The analysis pairs actual
post begin/end records: delivery can precede the sender wrapper's return, so it retains
signed timing bounds rather than asserting return-before-delivery. A representative
channel60/batch46 reply takes 26.062 ms from post-API begin to port, including 26.008 ms
of logged Dart STW body; port-to-handler is 0.050 ms. These are instrumented causal
witnesses, not uninstrumented performance estimates. The STW body marker excludes
safepoint entry and teardown.

Five of six reused one-Worker batches have outstanding replies spanning that STW body
before completion; all six two-Worker batches complete before the corresponding
collection, which remains visible in the post window. Selected joint phases each contain
two V8 majors in one Dart pass. Their requests follow the immediate V8 callback branch
with observed flags64; one proactive-idle request follows batch4 completion. Flags are
metadata, not a complete allocation/idle trigger reason. There are no background-Dart
request markers; active-JS Dart deferrals are separate. Seven other delayed requests
lack a direct source marker and are not fully attributed. Independent native Worker
V8/Wasm execution is not claimed to stop with Dart STW.

No supported minimal runtime optimization is justified. The pinned V8 critical
memory-pressure policy can retry when estimated recoverable memory, including external
memory, exceeds its thresholds. This is not proof of redundant cross-heap work. Moderate
pressure does not provide the required synchronous fixed point; testing APIs are not a
production substitute. Scheduler batching cannot remove the observed STW block. GC
delay, accounting and semantics therefore remain unchanged, and the inherited three
default-descriptor shortcuts are preserved.

Two fresh probe-free processes reproduce the tail. Values below are medians of six
reused batches per Worker count in each process; heartbeat values summarize each batch's
maximum gap, not retained P95/P99 heartbeat distributions.

| Metric, ms                         | Process 1 | Process 2 |
| ---------------------------------- | --------: | --------: |
| 1-Worker completion                |    32.143 |    32.921 |
| 2-Worker completion                |     6.739 |     6.597 |
| 1-Worker full-window heartbeat gap |    25.683 |    26.292 |
| 2-Worker full-window heartbeat gap |    25.152 |    25.864 |
| 0-Worker full-window heartbeat gap |    28.644 |    28.466 |

## Fresh browser comparison and checks

Edge 156.0.4314.58 and Flax run the same scene in Flax/Edge/Edge/Flax order at 960×540,
640×360 and 960×540. Each eight-second phase includes the first 31 submitted frames,
which are excluded as warmup. At 960×540, four separate phase quantiles per
implementation give API P50 ranges 0.350–0.692 ms for Flax and 0.020–0.080 ms for Edge;
P95 ranges are 1.585–1.742 and 0.100–0.135 ms. API measurements include native backend
work, from frame API start through return from `queue.submit`. Completion-Promise uses
that same start and ends in the `onSubmittedWorkDone` callback, including API CPU, GPU
waiting and notification delivery. Its P95 is 3.163–3.250 ms versus 1.800–2.350 ms. Both
remain near the 120 FPS display cap; these results do not establish maximum throughput
or a cross-period FPS gain.

Separate detailed rounds give 960×540 encoding P95 0.888/0.936 ms for Flax and
0.045/0.055 ms for Edge, and submit P95 0.371/0.381 versus 0.025/0.035 ms. Separate GPU
timestamp P50/P95 is 0.32768 ms for both at 960×540, with quantization. Native
publication to Flutter texture read has P95 0.303–0.307583 ms; publication to Flutter
consumer GPU completion has P95 1.436208–1.442 ms. The browser presentation trace joins
987 marks without unmatched records; presentation-feedback P95 is 18.889/12.398/18.924
ms. GPU completion, browser presentation feedback and physical illumination are distinct
endpoints; these numbers must not be subtracted to claim screen-latency differences.

Fresh checks pass: six WebGPU and two example JS tests, both typechecks, all 59 runtime
contracts and FFI reproducibility, independently reproduced on the task's code. The two
probe-free runs complete six Sessions, 720 frames, 810 Worker assertions and eight zero
retirements; the diagnostic run separately completes three Sessions, 405 Worker
assertions and four zero retirements. Separate functional-only CTS runs complete three
Sessions with 1,404 passes and 108 skips in the pinned groups. This is not new
12-Session acceptance or full CTS/WebIDL conformance; the existing 21 compatibility
differences remain outside this task.

Final post-close RSS is 403.4/404.5 MiB, with peaks 453.9/469.4 MiB. These finite
three-Session process observations do not establish a general leak bound. Source,
artifact and final independent acceptance guards remain recorded externally.

## Handoff

The remaining tail is reproduced and its owner-side GC/message ordering is explained. No
new runtime optimization is retained. Future work would need a supported cheaper
synchronous cross-heap collection contract and separate correctness/benefit evidence.
