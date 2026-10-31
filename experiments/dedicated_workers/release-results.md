# macOS Release Worker latency

Status: external-memory follow-up coalescing retained; no commit, push or publication.
The [receipt](results-macos-release.json) contains complete runs, diagnostics, source
hashes, engine provenance, calibration and application acceptance.

## Finding and relation to the WebGPU investigation

The earlier
[WebGPU investigation](../../packages/flax_webgpu/example/validation/joint-gc-optimization-results.md)
already established the same V8 major GC → Dart/V8 joint-collection chain. Reducing
forwarding arrays, FFI closures and carrier-template allocation reduced its frequency;
individual full passes still cost approximately 20 ms. Those changes remain intact. The
Core empty-sweep changes were already inherited. The carrier cache remains in the
existing private `gc.patch` overlay, whose bytes were not changed.

Applying only that existing template cache to the ordinary Release engine did not
establish an additional large-message improvement: baseline transfer medians were
24.704–25.215 ms and cached medians 24.391–26.308 ms. That ordinary-engine port was
reverted. No second implementation of the earlier allocation optimizations is kept.

Large-buffer messaging exposes a different pressure source. A diagnostic with 260 large
round trips observed 260 ordinary external-memory major-GC callbacks, with V8 flags 40
(external-memory collection and synchronous callbacks). In a separate Release
diagnostic, 60 large round trips incurred 60 requested Dart collection passes, median
21.798 ms. Native transferred packets contained only 29 wire bytes and a retained
BackingStore. Native serialization/detachment took roughly 0.008–0.010 ms per send; the
payload was not copied through Dart. Queue delays alone do not account for every stall:
joint collection can interrupt different parts of a round trip.

## Accepted change

`JointHeap::JsCollected` merges only ordinary external-memory-triggered Dart follow-up
requests over 8 ms on the existing owner runner. V8 collection/accounting, ordinary
JS-heap allocation pressure, direct Dart pressure, forced/last-resort collection,
cross-heap tracing and explicit disposal retain their existing paths. An actual Dart
trace cancels the pending follow-up. The task holds a weak heap reference and discards
work after shutdown or bridge retirement. There is one pending bit and no new public
API, pool, configuration or memory-accounting override.

A broader all-major-GC delay was withdrawn before performance acceptance when the
earlier work was reviewed. The accepted predicate specifically selects V8's external
memory flag. One new contract verifies that naturally triggered external-buffer
collections preserve live conditional callbacks and reclaim their dead cycles.

## Matched Release comparison

Apple M2 Max, macOS arm64, AC power, maintained Flutter 3.47.6 source lock, Dart 3.13.5
and V8 15.4.80.15. These are actual Release/AOT applications. The matrix runs baseline →
candidate → candidate → baseline, in fresh processes, without concurrent builds, tests,
profilers or native timing probes. The Dart application and benchmark asset hashes are
identical across variants; only the engine changes.

Each process creates one first worker and ten new workers, then reuses one worker for
100 small messages, twenty 16 MiB transfers before copying, twenty copies, twenty
transfers after copying and 200 sustained transfers. Identical contents and both
directions are checked; transfer inputs must be detached. The sustained phase records
P99/max, waits 30 ms after the final reply, and observes a 5 ms main timer for the same
nominal 500 ms in both variants. Actual observation durations are retained.

Values below are the range of per-process statistics, not pooled percentiles.

| Metric                                       |          Baseline | Retained 8 ms follow-up window |
| -------------------------------------------- | ----------------: | -----------------------------: |
| First Worker creation, ms                    |    97.017–114.134 |                111.459–119.134 |
| Repeated new Worker median, ms               |     28.178–28.337 |                  28.029–29.246 |
| Small round-trip median, ms                  |       0.062–0.063 |                    0.044–0.063 |
| 16 MiB copy round-trip median, ms            |     27.890–28.406 |                    4.388–5.464 |
| 16 MiB transfer round-trip median, ms        |     26.087–26.156 |                    0.084–0.092 |
| Sustained transfer P95, ms                   |     31.463–32.637 |                    0.091–0.205 |
| Sustained transfer P99, ms                   |     49.095–52.804 |                  24.670–29.119 |
| 200 transfers including final 30 ms wait, ms | 5364.061–5375.364 |                110.832–187.725 |
| Peak process footprint, MiB                  |       333.1–333.3 |                    368.8–381.7 |

The initial Debug tester result, 46.402 ms, remains in `results-macos.json`. Build mode,
host and harness changed, so its difference from Release is not attributed to this
optimization. The table above uses the matched Release control.

## Limits and window calibration

This trades collection frequency for temporary retention. Peak footprint increases about
36–49 MiB in the primary matrix. This is a peak measurement, not a permanent
resident-memory increase or a universal bound. All benchmark processes report zero
native Worker runtimes and channels after Session close.

Full-GC outliers remain. Sustained round-trip maxima were 61.158–65.327 ms before and
40.115–76.130 ms afterward. The observed maximum main-timer gap reaches 73.045 ms in one
candidate run, versus 49.215 ms in the controls. Typical message latency and total work
improve substantially; worst-case UI responsiveness is not uniformly improved. These
results do not establish a stable frame budget or physical input/display latency.

A separate eight → four → four → eight millisecond control used the same immutable
application and input. Four milliseconds lowered observed footprints but did not
establish a tail improvement: its sustained P99 was 29.675/46.275 ms, versus
28.303/28.852 ms with eight. Its settled 200-transfer duration was 183–191 ms, versus
128–155 ms with eight. Eight milliseconds is retained for this throughput/latency
target; no optimal-window or statistical-significance claim is made from two runs per
variant. The calibration source change was removed. Relinking restored eight with
identical stored code/data sections; the receipt records differing import stubs and
UUIDs rather than claiming bit-identical binaries.

## Validation and reproduction

The accepted algorithm passes 59 maintained runtime/GC tests, 9 Worker tests, 22 host
tests, 3 Core Canvas tests and 395 Canvas framework/WPT tests: 488 native tests, counted
once. Scoped Dart analysis, syntax and generated-file checks also pass. Release
application acceptance passes 87 records, three GPU Sessions and 360 frames, including
real DRACOLoader Workers, Wasm, model loading, lighting, shadows, postprocessing,
skeletal/Morph animation, Meshopt and textured export. Native GPU counters return to
zero. DRACO cold decode is 37.524–40.872 ms and reuse 0.241–0.284 ms for the original
75-byte correctness fixture.

Use the [reproduction instructions](README.md). `run_macos.py` stages a disposable Core
application, verifies its mode and checks retirement. The existing WebGPU harness runs
with `--mode release`; its existing GC allocation overlay remains applied once. All
compiler scratch and test applications stay on the workspace volume and are removed
after receipts are recorded. Maintained SDK/engine builds are preserved.

Mobile platforms, KTX2Loader, full Worker exception coverage in AOT, browser performance
comparison and large production decoder throughput are not validated here. Native ABI 2,
GC extension 1, Worker extension 1 and UI protocol 24 are unchanged.
