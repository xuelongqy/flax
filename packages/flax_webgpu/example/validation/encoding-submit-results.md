# WebGPU encoding and submission: macOS and Edge

The retained changes reduce **encoding P95 by 3.3–14.8%** across the six measured
scenes. In the 2304-draw scene, encoding P50 falls **2.481 → 2.227 ms (10.2%)** and P95
falls **3.230 → 3.123 ms (3.3%)**. Completion latency does not improve uniformly. This
is an uncommitted private macOS arm64 experiment.

## Where the gap comes from

Flax calls native Dawn through generic JSI/libffi. It converts descriptors and owns
native arguments/handles on the JS/UI thread; queue submission also runs native Dawn and
Metal work before returning. The before trace samples substantial bridge work: 5321
inclusive ms under the host-function trampoline, including 2487 ms under FFI invocation.
Native handle wrappers, scopes and scalar input conversion are visible hot paths. These
sampled markers overlap and include warmup/other UI activity; they are not an additive
CPU accounting or a measured percentage of encoding cost.

Chromium's documented path serializes Dawn Wire commands in the renderer and runs the
native backend in its GPU process. Its queue implementation flushes commands on submit.
The two JS timers therefore cover different amounts of backend work. This architecture
explains part of the comparison; it does not isolate the cost of a JS API adapter. See
the [Dawn overview](https://github.com/google/dawn/blob/main/docs/dawn/overview.md),
[Chromium command-buffer architecture](https://chromium.googlesource.com/chromium/src.git/+/HEAD/docs/security/research/graphics/gpu_command_buffer.md)
and
[queue implementation](https://github.com/chromium/chromium/blob/main/third_party/blink/renderer/modules/webgpu/gpu_queue.cc).
These sources describe Chromium architecture; the exact Edge build's multiprocess CPU
costs were not separately traced.

```text
Flax JS → descriptor conversion → JSI/libffi → native Dawn on UI thread → Metal
Edge JS → Blink / Dawn Wire → GPU process → native Dawn → Metal
```

Identical phase probes sample one of every 16 frames. The before diagnostic groups 2304
draws between two clocks: **1.949 ms in Flax versus 0.157 ms in Edge**. Ordinary Flax
phases include encoder creation around 0.13–0.15 ms, render-pass creation around
0.17–0.23 ms, and submit around 0.11–0.14 ms. These are profiled means including warmup,
not the clean benchmark's percentiles.

The final diagnostic also separates the interval after submit from encoding. In the
2304-draw scene, its sampled post-submit wait averages **0.931 ms in Flax versus 2.085
ms in Edge**. This interval includes backend work, GPU execution and event delivery; it
is not GPU duration. A low JS encoding time alone cannot establish lower total work. Raw
phase means, sampled percentiles and clocks are in the receipt/local evidence.

## Retained implementation

- Both JSI argument-conversion layers use stack storage for up to eight arguments,
  retaining heap fallback for larger signatures and the existing release/error paths.
- FFI pointer validation reads the validated uint64 address once. Type/range checks
  remain, including the pointer-width check.
- Descriptor packing reuses Dawn's initialized empty label. Explicit nonempty labels and
  label setters retain their existing string conversion and native calls.
- The existing Context contract now checks nested first → second → first calls and
  restoration after a nested JS exception. No new public API, batching layer or worker
  was introduced.

An experimental context/locking fast path passed functional checks but did not establish
a tail-latency benefit: its matched 2304-draw encoding P95 rose 2.753 → 3.408 ms. That
candidate was removed. The retained patch leaves context entry and locking intact. Its
rejected source and measurements are kept locally, separate from final results.

## Matched measurement protocol

Measured on 29 October 2026, Apple M2 Max (30 GPU cores), macOS 27.0.1, AC power, 3440 ×
1440 at 120 Hz, DPR 1. Every host uses a 1180 × 908 content viewport and an 880 × 495
logical canvas. Backing resolution, shader, scene parameters and draw count match. The
renderer/shaders/metrics source hash remains
`e4ccf6e2c85b22d527ba63f40095d26ddd4b7a878a95c95eec064098f9e4d69c`. Edge is
`Edg/156.0.4314.50`; Flax uses the pinned Dawn/Metal Release/AOT profile.

A fresh initial ABBA matrix was captured. The final matrix brackets a fresh Flax → Edge
→ Edge → Flax comparison with preserved original Flax runs: **original → optimized →
Edge → Edge → optimized → original**. Each case has 60 accepted warmup frames and an
8-second window, at most three submissions in flight, with readback only after
measurement. Across 36 final case executions, Flax has zero skipped submissions; Edge
skips one submission in its first instanced-cubes run. That run is retained in the
results. Every native session close returns all six tracked counters to zero. The final
matrix contains no profiler, allocation sampler or phase probes.

Values below are means of two runs. Percentiles are means of per-run percentiles, not
pooled percentiles. The original controls ran during the same sequence; earlier
measurements alone were not used to attribute a code improvement.

## Encoding and completion

Encoding spans uniform upload through `queue.submit()`. Completion spans encoding start
through the JS `onSubmittedWorkDone()` notification. The latter includes CPU, GPU and
event delivery. It does not measure physical presentation/input latency.

| Scene / backing size        | Original encode P50 ms | Final encode P50 ms | Original encode P95 ms | Final encode P95 ms | Edge encode P95 ms |
| --------------------------- | ---------------------: | ------------------: | ---------------------: | ------------------: | -----------------: |
| Particles / balanced / 540p |                  0.631 |               0.833 |                  1.416 |               1.206 |              0.105 |
| Particles / high / 1080p    |                  0.827 |               0.710 |                  1.365 |               1.276 |              0.180 |
| Cubes / instanced / 540p    |                  0.769 |               0.639 |                  1.481 |               1.264 |              0.145 |
| Cubes / per-object / 540p   |                  2.480 |               2.227 |                  3.230 |               3.123 |              0.280 |
| Prism / balanced / 540p     |                  0.901 |               0.723 |                  1.302 |               1.177 |              0.138 |
| Prism / high / 1080p        |                  0.675 |               0.741 |                  1.422 |               1.282 |              0.120 |

| Scene                       | Original completion P95 ms | Final completion P95 ms | Edge completion P95 ms |
| --------------------------- | -------------------------: | ----------------------: | ---------------------: |
| Particles / balanced / 540p |                      3.183 |                   3.130 |                  2.307 |
| Particles / high / 1080p    |                      4.606 |                   4.654 |                  4.592 |
| Cubes / instanced / 540p    |                      2.690 |                   2.518 |                  2.565 |
| Cubes / per-object / 540p   |                      3.953 |                   4.128 |                  2.980 |
| Prism / balanced / 540p     |                      3.112 |                   3.041 |                  3.003 |
| Prism / high / 1080p        |                      5.496 |                   5.426 |                  5.132 |

All six observed encoding P95 values fall, but medians and completion tails are mixed.
Balanced-particle encoding P50 rises about 0.203 ms; 2304-draw completion P95 rises
about 0.175 ms. This result supports a narrower encoding-tail improvement, with no claim
of uniform CPU or end-to-end latency reduction or statistical non-regression. Edge
remains substantially cheaper in its JS encoding interval.

## Capped frame rate

| Scene                       | Original FPS | Final Flax FPS | Edge FPS | Final difference from Edge |
| --------------------------- | -----------: | -------------: | -------: | -------------------------: |
| Particles / balanced / 540p |      119.750 |        119.812 |  120.062 |                     -0.21% |
| Particles / high / 1080p    |      119.625 |        119.688 |  120.125 |                     -0.36% |
| Cubes / instanced / 540p    |      119.562 |        119.875 |  119.875 |                      0.00% |
| Cubes / per-object / 540p   |      119.500 |        119.688 |  120.125 |                     -0.36% |
| Prism / balanced / 540p     |      119.750 |        119.938 |  120.062 |                     -0.10% |
| Prism / high / 1080p        |      120.000 |        119.938 |  120.125 |                     -0.16% |

Final Flax averages 119.69–119.94 FPS; Edge averages 119.88–120.13 FPS. The per-scene
shortfall is 0–0.36%. Throughput is effectively display-capped; it does not establish
maximum GPU throughput or physical presentation cadence.

## Validation and scope

- Maintained runtime: 58/58 default plus 58/58 explicit V8, including the extended
  nested-Context and exception-restoration assertions.
- Final private Release engine: 979 named FFI assertions, including >8-argument
  signatures, callbacks/reentry/retention, errors, retirement, native count cleanup, and
  all 14 engine-GC contracts. The tested native sources and embedded FFI script match
  the measured engine overlay. Stress: 6256 calls in 5011 ms.
- WebGPU: three sessions/360 frames, image/texture/Three.js readbacks, Canvas 2D
  coexistence, 65 pinned CTS cases per session (195 executions, no failure/skip), and
  all six native counters zero after each close.
- Core JS 108/108, Canvas JS 35/35, FFI archive 6/6, WebGPU conversion 5/5, metrics 2/2
  and the WebGPU typecheck pass. Full Canvas widget/WPT acceptance was not repeated for
  this native bridge change.

The [receipt](encoding-submit-macos-arm64.json) contains the final bracketed matrix,
initial baseline, diagnostic phase data, engine/input hashes and exact validation
counts. Raw traces, phase samples, logs and the rejected candidate remain under
`.local/webgpu-encode/`. Temporary apps/test-source copies/test engine are removed after
recording; maintained studio/API apps, normal private engine and Dawn SDK remain. Shared
Flutter sources are unchanged. No commit or push.

Full CTS, other platforms, maximum throughput, isolated GPU duration and physical
input/display latency remain unverified. Rare complete joint-GC pauses remain.
