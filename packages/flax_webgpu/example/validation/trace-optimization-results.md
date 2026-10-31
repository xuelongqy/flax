# Trace-guided WebGPU optimization: macOS and Edge

Flax now submits **117.88–118.94 scene frames/s**, compared with about **120 in Edge**.
The gap for each individual case is **0.94–1.82%**, down from a fresh Flax baseline of
**110.88–114.69 FPS**. These are accepted submissions and GPU completion notifications,
not display presents or input-to-display latency.

## Matched conditions

Both the baseline and final matrices were collected on 29 October 2026, Apple M2 Max (30
GPU cores), macOS 27.0.1 (26A434), AC power, **3440 × 1440 at 120 Hz**, DPR 1. The
display configuration was checked again after the final matrix. The previous 60 Hz
canvas-compatibility receipt is not this comparison's baseline.

Each matrix uses Flax → Edge → Edge → Flax. Each case warms up for 60 accepted frames,
then measures 8 seconds with at most three submissions in flight. No submission was
skipped by that limit in the final matrix. One baseline Edge instanced-cube sample
skipped one submission; it is retained in the raw baseline. No readback occurs inside
measurement; pixel checks and PNG captures follow GPU drain. The complete logical canvas
is 880 × 495 in an equal 1180 × 908 content viewport. The backing resolution is fixed
per case below.

The renderer, shaders and metrics are identical in both hosts; source SHA-256:
`e4ccf6e2c85b22d527ba63f40095d26ddd4b7a878a95c95eec064098f9e4d69c`. Edge is
`Edg/156.0.4314.50`, V8 `15.6.12.7`, using fresh isolated CDP profiles. Flax uses V8
JIT, Release/AOT Flutter and pinned Dawn/Metal. No profiler or validation layers run
during either performance matrix.

## Results

Every value below is the arithmetic mean of two runs. Percentiles are means of two
per-run percentiles, not percentiles pooled from all frames.

| Scene / backing size        | Baseline Flax FPS | Optimized Flax FPS | Edge FPS | Final difference |
| --------------------------- | ----------------: | -----------------: | -------: | ---------------: |
| Particles / balanced / 540p |           113.188 |            118.438 |  119.938 |           -1.25% |
| Particles / high / 1080p    |           114.687 |            118.062 |  120.062 |           -1.67% |
| Cubes / instanced / 540p    |           113.812 |            118.375 |  120.000 |           -1.35% |
| Cubes / per-object / 540p   |           110.875 |            117.875 |  120.062 |           -1.82% |
| Prism / balanced / 540p     |           114.562 |            118.938 |  120.125 |           -0.99% |
| Prism / high / 1080p        |           114.438 |            118.875 |  120.000 |           -0.94% |

CPU encoding spans uniform upload through `queue.submit()`. Completion spans the
sample's start through its `onSubmittedWorkDone()` JS notification. It includes CPU
encoding, GPU work and host/browser notification scheduling; it is not pure GPU time.
The completion endpoints cannot establish display latency or isolated API adapter cost.

| Scene                       | Flax encode P95, before → after (ms) | Edge encode P95 (ms) | Flax completion P95, before → after (ms) | Edge completion P95 (ms) |
| --------------------------- | -----------------------------------: | -------------------: | ---------------------------------------: | -----------------------: |
| Particles / balanced / 540p |                        1.278 → 1.497 |                0.090 |                            3.493 → 3.408 |                    2.285 |
| Particles / high / 1080p    |                        1.228 → 1.361 |                0.157 |                            4.615 → 4.744 |                    4.307 |
| Cubes / instanced / 540p    |                        0.982 → 1.345 |                0.137 |                            2.554 → 2.586 |                    2.362 |
| Cubes / per-object / 540p   |                        3.614 → 3.047 |                0.348 |                            4.913 → 3.942 |                    3.180 |
| Prism / balanced / 540p     |                        0.834 → 0.874 |                0.120 |                            2.678 → 2.520 |                    2.442 |
| Prism / high / 1080p        |                        1.053 → 0.942 |                0.118 |                            5.595 → 5.204 |                    5.505 |

The 2,304-draw case reduces encoding P95 by **15.7%**, from 3.614 to 3.047 ms.
Ordinary-case encoding does not improve uniformly; the main FPS improvement comes from
removing periodic UI stalls. The 2,304 draws are retained: they were not replaced by
instancing or a different shader. Edge still has substantially cheaper JS-thread
encoding; these differently placed host/backend costs are not a pure FFI benchmark.

| Scene                       | Flax frame-gap P99, before → after (ms) | Edge frame-gap P99 (ms) |
| --------------------------- | --------------------------------------: | ----------------------: |
| Particles / balanced / 540p |                          30.603 → 8.771 |                   9.305 |
| Particles / high / 1080p    |                          28.494 → 8.798 |                   9.368 |
| Cubes / instanced / 540p    |                          27.678 → 8.836 |                   9.315 |
| Cubes / per-object / 540p   |                          31.032 → 9.700 |                   9.388 |
| Prism / balanced / 540p     |                          27.083 → 8.503 |                   9.357 |
| Prism / high / 1080p        |                          30.593 → 8.577 |                   9.347 |

P99 is now near the ordinary 8.33 ms cadence. Rare joint-GC pauses still exceed 20 ms; a
good P99 must not be interpreted as their elimination. The display cap also prevents
these FPS results from establishing maximum GPU throughput.

## Trace evidence and changes

Separate Instruments Time Profiler captures sample native stacks every 1 ms. An injected
diagnostic wrapper records rAF start/end and telemetry notification times. An
epoch/monotonic clock anchor aligns those events with the native samples to about 1 ms.
This instrumentation is absent from the performance matrices. Counts below cover the
whole six-case diagnostic run, including warmup; they are not Flutter-present counts.

| Diagnostic capture              | rAF gaps >20 ms | Follow telemetry | Gaps with ≥5 ms sampled GC work |
| ------------------------------- | --------------: | ---------------: | ------------------------------: |
| Baseline                        |             108 |               95 |                              13 |
| Local statistics + FFI storage  |              36 |                1 |                              32 |
| Also retain Core method handles |              38 |                1 |                              33 |

The baseline's 95 telemetry-associated gaps came from a whole-page `setState` every 500
ms. Native stacks show binding creation and `Dart_FlaxRegisterHandle`, including its
free-handle-list validation, with occasional Dart/V8 joint collection. A shader change
or extra frame in texture handoff was not implicated by these captures.

The statistics text now uses the existing signal/property binding. Playback, measurement
and error transitions still rebuild controls, so the interactive example keeps the same
live counters and controls in normal use and in the benchmark.

The FFI trace showed per-argument `Slot` allocation and address-vector growth on every
native call. `experiments/webgpu_dawn/ffi.patch` gives scalar/small values aligned
inline storage and keeps up to eight argument slots/addresses on the stack. Large
aggregates and longer/variadic signatures keep their dynamic storage. Ownership,
conversion, argument validation, error routing and callback synchronization are
retained.

Core's stable private `fireRaf`, `present`, timer, image and canvas-event function
handles are reused until host disposal. This avoids repeated facade registration without
changing application handle ownership or GC semantics. In the two successive diagnostic
captures, inclusive binding-registration sample weight falls from 335 to 187 ms and
joint binding from 499 to 321 ms. The long-gap counts show this does **not** remove the
remaining major-GC stalls. No GC-pressure or collection request is suppressed.

The existing IOSurface pool and producer/consumer GPU fences are unchanged. All six
native live/error counters return to zero after both final benchmark sessions.

## Reproduce and inspect

Build the private engine and both examples as in the [example guide](../README.md), then
run `node packages/flax_webgpu/tool/compare_example.mjs` without other build/test jobs.
The machine-readable [receipt](trace-optimization-macos-arm64.json) records input hashes
and all baseline/final per-case summaries.

Local raw evidence is preserved under `.local/webgpu-profile/`: `baseline-comparison/`,
`final-comparison/`, `correlated-time.trace`, `ui-ffi-time.trace`, `final-time.trace`,
`correlated-results.json`, `final-profile-results.json`, exported sample tables and
`correlation.json`/`final-correlation.json`. `instrument.js`, `summarize_time.py` and
the correlation scripts describe the diagnostic annotations and extraction. Raw traces
are local artifacts, not package contents.

## Regression checks

All final scoped gates passed:

- Core JS 107/107, Canvas JS 35/35, WebGPU conversion 5/5, metrics 2/2; five scoped
  typechecks, Core Dart analysis and formatting.
- Maintained runtime 58/58 by default and 58/58 with explicit V8; Core canvas UI 2/2,
  Session UI 5/5 and Canvas framework/WPT 393/393.
- Canvas Afterglow widget 1/1 and actual macOS integration 1/1: drag, controls,
  animation/pause, PNG capture/reset and disposal.
- Private-engine WebGPU: three 120-frame sessions, BGRA8/RGBA8, shared image/export
  readbacks and unmodified Three.js 0.186.1 loading/rendering/interaction. Five pinned
  CTS groups pass 65/65 in each session (195 executions, zero failures/skips). Native
  counters return to zero after every close.
- FFI Release functional suite: 173 complete ABI checks, 431 async checks, the remaining
  scalar/memory/lifecycle checks and 14 engine-GC contracts. It covers large aggregates,
  more than eight arguments, varargs, callbacks/reentry and retirement. The tested
  `runtime.inc` hash equals the measured private engine overlay's source; all native
  counters return to zero. The matching test overlay uses the private engine's current
  objects, avoiding stale normal Release objects.

The shared Flutter checkout remains clean. Changes remain uncommitted and unpushed. Full
CTS, other platforms and actual display latency were not tested.
