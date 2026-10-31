# High-frequency WebGPU calls: measured retention

The retained version reduces the 2304-draw scene's encoding P50 from **2.318 to 0.967 ms
(58.3%)**, encoding P95 from **2.979 to 2.060 ms**, and completion P95 from **3.903 to
3.150 ms**. Other scenes and percentiles are reported below; this is not a claim of
uniform end-to-end improvement. The summary combines four original and four combined
Flax runs, with two Edge runs. The changes remain uncommitted.

## Retention decisions

- Native numeric calls: **retained**. Two exact nonvariadic, scalar, void-returning
  signatures used by `draw` and `drawIndexed` avoid temporary JSI ABI values and libffi
  dispatch. All other signatures retain their existing path. Generic Buffer pointer
  conversion, integer/pointer validation and call/retirement guards remain.
- JS prebinding and empty-offset allocation avoidance: **retained**. The decision uses
  the final native-only versus combined comparison, rather than assuming that the
  initial JS-only gain necessarily adds to the native gain.
- Completion delivery: **unchanged**. Temporary clocks/probes were removed. Native
  completion to poll delivery has diagnostic P95 of 0.153–0.439 ms; this does not
  justify a new notification architecture. Rare delivery waits still reach 16–28 ms.

The practical gates were recorded before the final matrix: native calls need at least
20% lower encoding P50 in both runs and improved mean completion P95 against the
original; the JS group needs at least 3% lower encoding P50 in both runs against
native-only, with no more than a 3% mean completion-P95 regression. These gates are
experiment decisions, not statistical significance or broad non-regression guarantees.
The receipt records every ratio.

## Final matched protocol

Apple M2 Max (30 GPU cores), macOS 27.0.1, AC power, 3440 × 1440 at 120 Hz, DPR 1. Both
hosts use a 1180 × 908 viewport and an 880 × 495 logical canvas. Backing sizes are 960 ×
540 and 1920 × 1080. Renderer/shaders/metrics source SHA-256:
`e4ccf6e2c85b22d527ba63f40095d26ddd4b7a878a95c95eec064098f9e4d69c`. Edge:
`Edg/156.0.4314.50`.

Ten unprofiled runs use this order: **original → JS-only → native-only → combined → Edge
→ Edge → combined → native-only → JS-only → original**. Native-only uses the current
engine and the exact original application assets. Each case has 60 accepted warmups, an
8-second measurement, at most three submissions in flight and readback after
measurement. All scene names, backing dimensions and draw counts match. No tests/builds
run concurrently with the measurement. No probe code is present. Skipped submissions are
retained in raw results.

The ablation table uses two runs per variant from the ten-run matrix. The scene summary
includes an additional original → combined → combined → original confirmation: four
original/four combined runs and two Edge runs. Every run is retained; percentile means
are not pooled percentiles. Initial JS and native ablations, plus an intermediate matrix
before exception-path correction, remain local. The tables below use the final corrected
engine only.

## 2304-draw ablation

| Variant     | Encode P50 ms | Encode P95 ms | Completion P95 ms | Completed FPS |
| ----------- | ------------: | ------------: | ----------------: | ------------: |
| Original    |         2.328 |         3.073 |             3.953 |       119.437 |
| JS only     |         2.181 |         2.979 |             4.043 |       119.438 |
| Native only |         1.404 |         2.801 |             3.945 |       119.438 |
| Combined    |         0.990 |         1.808 |             3.081 |       119.188 |
| Edge        |         0.185 |         0.305 |             3.195 |       120.000 |

## Retained version versus original and Edge

Encoding spans uniform upload through `queue.submit()`. Completion spans encoding start
through the JS `onSubmittedWorkDone()` notification. The two hosts place backend work
differently, as explained in the [previous encoding report](encoding-submit-results.md).
The JS encoding delta is not a measurement of pure adapter overhead or GPU speed.

| Scene / backing             | Original encode P95 ms | Retained encode P95 ms | Edge encode P95 ms |
| --------------------------- | ---------------------: | ---------------------: | -----------------: |
| Particles / balanced / 540p |                  1.246 |                  1.103 |              0.088 |
| Particles / high / 1080p    |                  1.273 |                  1.095 |              0.138 |
| Cubes / instanced / 540p    |                  1.362 |                  1.178 |              0.132 |
| Cubes / per-object / 540p   |                  2.979 |                  2.060 |              0.305 |
| Prism / balanced / 540p     |                  1.208 |                  1.119 |              0.128 |
| Prism / high / 1080p        |                  1.125 |                  1.197 |              0.118 |

| Scene                       | Original completion P95 ms | Retained completion P95 ms | Edge completion P95 ms | Retained FPS | Edge FPS |
| --------------------------- | -------------------------: | -------------------------: | ---------------------: | -----------: | -------: |
| Particles / balanced / 540p |                      3.082 |                      2.921 |                  1.987 |      118.906 |  120.000 |
| Particles / high / 1080p    |                      4.515 |                      4.357 |                  4.008 |      118.562 |  120.000 |
| Cubes / instanced / 540p    |                      2.698 |                      2.492 |                  2.292 |      119.344 |  120.000 |
| Cubes / per-object / 540p   |                      3.903 |                      3.150 |                  3.195 |      119.375 |  120.000 |
| Prism / balanced / 540p     |                      3.082 |                      3.029 |                  2.572 |      119.938 |  120.000 |
| Prism / high / 1080p        |                      5.425 |                      5.633 |                  5.233 |      119.844 |  120.000 |

## Confirmation after intermittent frame-rate drops

The ten-run matrix contains low frame-rate intervals (combined particles down to 115.25
FPS; native-only instanced cubes/1080p Prism down to 115.375 FPS). No submissions were
skipped in those intervals. The 1080p Prism completion P95 also rose in that matrix.
These results were not discarded or labeled a proven code regression.

A further four-run confirmation with unchanged sources/engine used original → combined →
combined → original. Combined per-run FPS returned to 119.375–120 and the 1080p Prism
completion tail returned below its matched controls. The frame-rate regression did not
reproduce in this confirmation; the cause of the earlier stalls remains unattributed.
This does not establish a broad frame-pacing guarantee.

| Scene                       | Original FPS | Combined FPS | Original completion P95 ms | Combined completion P95 ms |
| --------------------------- | -----------: | -----------: | -------------------------: | -------------------------: |
| Particles / balanced / 540p |      119.875 |      119.562 |                      3.043 |                      3.011 |
| Particles / high / 1080p    |      119.813 |      119.938 |                      4.293 |                      4.311 |
| Cubes / instanced / 540p    |      119.812 |      119.750 |                      2.666 |                      2.645 |
| Cubes / per-object / 540p   |      119.562 |      119.562 |                      3.853 |                      3.219 |
| Prism / balanced / 540p     |      119.750 |      120.000 |                      2.977 |                      2.946 |
| Prism / high / 1080p        |      119.812 |      119.750 |                      5.579 |                      5.396 |

Throughput is near the display cap; it does not measure maximum GPU throughput or
physical presentation cadence. The practical benefit is reduced CPU encoding work in a
large-draw workload. Ordinary scenes and completion tails still vary.

## Implementation and validation

The private `numeric.patch` reuses the existing host-function ownership and ABI value
cloning, including primitive JS exceptions. It shares the normal prepared-call path for
library activity, callbacks, errors and retirement. It adds no public API and keeps
Dawn, the standard frontend API and texture/fence ownership intact. Shared Flutter
sources remain unchanged; the overlay receipt hashes the tested engine sources.

- Final private Release engine: **1035 named FFI assertions**, including numeric limits,
  Buffer fallback, reentry, active-close rejection, primitive exceptions and calls after
  close; all **14 engine GC contracts** pass. Native counts reach zero.
- WebGPU: three sessions/360 frames, image/texture/Three.js readbacks and Canvas 2D
  coexistence; **195 CTS subset executions**, no failure/skip, all six native counters
  zero after every close.
- Maintained runtime: **58/58 default plus 58/58 explicit V8**. Core JS 108/108, Canvas
  JS 35/35, FFI archive 6/6, WebGPU conversion 5/5, metrics 2/2 and typecheck pass.

The [receipt](high-frequency-call-macos-arm64.json) contains the complete final matrix
and confirmation, initial ablations, decision ratios, diagnostic summary, source/engine
hashes and exact validation counts. Local raw results, logs and source evidence remain
under `.local/webgpu-fastcalls/`. Owned app/test-source/CTS copies are removed after
recording; maintained studio/API apps, the private engine and Dawn SDK remain. No commit
or push.

Full CTS, other platforms, complete Canvas widget/WPT acceptance, maximum throughput,
physical input/display latency and isolated GPU duration remain unverified. Rare long
main-thread/delivery pauses remain; their precise cause was not traced in this run.
