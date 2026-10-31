# Joint-GC allocation optimization: macOS and Edge

Flax submits **119.44–120.00 FPS**, compared with **120.00–120.13 FPS in Edge**. The
per-scene difference is **0–0.47%**. Frequent allocation-triggered joint collections are
reduced; occasional complete collections still cause long frames. Changes are
uncommitted. This is the private macOS arm 64 Dawn/Metal profile.

## Conditions and timing endpoints

Measured on 29 October 2026: Apple M2 Max (30 GPU cores), macOS 27.0.1, AC power, 3440 ×
1440 at 120 Hz, DPR 1. Both hosts have a 1180 × 908 content viewport and an 880 × 495
logical canvas. Backing sizes are fixed per scene below. The display and AC state were
rechecked afterward. Edge is `Edg/156.0.4314.50`.

The formal comparison runs Flax → Edge → Edge → Flax, with 60 accepted warmup frames, 8
seconds per case, at most 3 GPU submissions in flight and no scene readback inside the
measured window. All 24 case executions have zero skipped submissions; every Flax close
returns all 6 native counters to zero. The exact same renderer, shader and metrics
source is used in both hosts:
`e4ccf6e2c85b22d527ba63f40095d26ddd4b7a878a95c95eec064098f9e4d69c`. No profiler,
allocation sampler or Metal validation layer runs in this matrix.

FPS counts accepted scene submissions. Encoding spans uniform upload through
`queue.submit()`. Completion spans encoding start through the JS `onSubmittedWorkDone()`
notification, including CPU work, GPU work and notification scheduling. These endpoints
do not measure physical screen or input latency, isolated GPU duration, or the isolated
cost of one API layer. The 120 Hz cap limits throughput claims.

## Matched results

Values are arithmetic means of two runs. Percentiles are means of per-run percentiles,
not pooled percentiles.

| Scene / backing size        | Flax FPS | Edge FPS | Flax difference |
| --------------------------- | -------: | -------: | --------------: |
| Particles / balanced / 540p |  119.812 |  120.000 |          -0.16% |
| Particles / high / 1080p    |  119.438 |  120.000 |          -0.47% |
| Cubes / instanced / 540p    |  119.750 |  120.000 |          -0.21% |
| Cubes / per-object / 540p   |  119.625 |  120.000 |          -0.31% |
| Prism / balanced / 540p     |  119.875 |  120.125 |          -0.21% |
| Prism / high / 1080p        |  120.000 |  120.000 |           0.00% |

| Scene                       | Flax encode P95 ms | Edge encode P95 ms | Flax completion P95 ms | Edge completion P95 ms |
| --------------------------- | -----------------: | -----------------: | ---------------------: | ---------------------: |
| Particles / balanced / 540p |              1.748 |              0.140 |                  3.964 |                  2.793 |
| Particles / high / 1080p    |              1.852 |              0.188 |                  5.305 |                  4.935 |
| Cubes / instanced / 540p    |              1.764 |              0.135 |                  3.332 |                  2.220 |
| Cubes / per-object / 540p   |              3.065 |              0.340 |                  4.286 |                  3.495 |
| Prism / balanced / 540p     |              1.646 |              0.147 |                  3.733 |                  2.767 |
| Prism / high / 1080p        |              1.597 |              0.115 |                  6.133 |                  5.128 |

Flax completion P95 remains **0.37–1.17 ms higher**. Encoding remains substantially more
expensive, particularly for 2304 individual draws. Similar capped FPS does not establish
equal CPU cost, maximum throughput or display latency.

## Trace finding and changes

Completed V8 major GC schedules an owner-thread Dart collection. Dart reachability and
V8/CppHeap tracing then form the cross-heap fixed point. A requested pass commonly costs
about 20 ms, including a 5–6 ms V8 pass. Root-table preparation is around 0.1 ms. Every
observed full pass had unmarked Dart targets: the existing direct-roots shortcut cannot
safely replace those passes. The main avoidable trigger is repeated allocation.

The final changes:

- Reuse the private carrier FunctionTemplate per heap, with a separate constructor per
  V8 Context; empty checkpoint sweeps return null and avoid an empty cross-heap facade.
- Forward the current WebGPU methods through six explicit argument slots. Preserve
  receiver/argument checks and Promise error behavior; the pinned IDL generator rejects
  methods exceeding that limit. Viewport/scissor calls keep explicit conversions and
  ignore additional arguments. Method lengths follow required WebIDL arity.
- Share FFI struct field accessors across immutable layouts, with storage weakly indexed
  by the receiving view. Own enumerable fields, nested/array views, validation and byte
  ownership remain. Hoist scalar dispatch metadata and use validated 64-bit DataView
  operations, retaining the previous 32-bit path.
- Regenerate and hash embedded FFI JS in the private engine build. Redirect private
  header includes consistently because the carrier cache changes JointHeap's layout.

Collection policy, heap limits, active-job protection, conditional tracing and resource
retirement retain their existing rules. The shared Flutter source checkout stays clean.

Paired instrumented six-scene captures include warmup and are separate from timing runs.
Both use V8 GC callbacks and allocation sampling. The earlier capture already includes
carrier-template reuse and empty-result changes; the table isolates the subsequent
frontend/FFI allocation changes. Allocation estimates describe cumulative allocation,
not resident memory.

| Diagnostic                       | Before frontend/FFI changes |  Final |
| -------------------------------- | --------------------------: | -----: |
| Owner-requested joint passes     |                          34 |      7 |
| Total requested-pass blocking ms |                      703.88 | 137.34 |
| Full V8 passes inside Dart GC    |                          60 |     22 |
| Requested pass P50 ms            |                      19.351 | 19.516 |
| Sampled allocation estimate GB   |                       1.320 |  1.158 |

The frequency reduction is 79.4%; cumulative requested-pass blocking falls 80.5%. A
complete pass still takes about 20 ms. Good frame-gap P99 does not rule out rarer
pauses. Earlier 1 ms Instruments stacks also showed registration/binding work falling
from 418 ms to 23 ms after carrier/template and empty-result changes; that pair alone
did not lower collection frequency. These sampled totals are diagnostic observations,
not latency gates.

## Same-period old/new control

Encoding rose across the measurement period even for the preserved, unmodified old
application. Comparing early and late samples alone would wrongly attribute all of this
change to the patch. A later old → new control reruns all 6 cases with the same full 8
second windows and 60 warmups. It is a single pair, separate from the formal two-run
Edge table. Shorter four-way app/engine controls are retained only as diagnostics.

| Scene                       |     Old → new FPS | Old → new encode P95 ms | Old → new completion P95 ms |
| --------------------------- | ----------------: | ----------------------: | --------------------------: |
| Particles / balanced / 540p | 118.500 → 119.500 |           1.456 → 1.532 |               3.863 → 3.713 |
| Particles / high / 1080p    | 117.875 → 119.625 |           1.571 → 1.643 |               5.219 → 5.266 |
| Cubes / instanced / 540p    | 117.875 → 119.875 |           1.430 → 1.760 |               3.193 → 3.255 |
| Cubes / per-object / 540p   | 118.250 → 119.500 |           3.289 → 3.159 |               4.034 → 3.957 |
| Prism / balanced / 540p     | 118.750 → 119.625 |           1.658 → 1.603 |               3.802 → 3.664 |
| Prism / high / 1080p        | 118.750 → 119.625 |           1.520 → 1.531 |               6.215 → 6.093 |

This control improves FPS in every scene. Encoding and completion do not improve
uniformly: instanced-cube encoding P95 rises 0.330 ms in this pair. No broad latency
reduction or statistically established non-regression is claimed.

## Verification and retained evidence

- Core JS 108/108, Canvas JS 35/35, FFI archive 6/6, WebGPU conversion 5/5, metrics 2/2;
  six scoped typechecks and Core Dart analysis pass.
- Maintained runtime 58/58 default plus 58/58 explicit V8; Core canvas UI2/2, Session
  UI5/5 and Canvas framework/WPT 393/393 pass.
- Canvas Afterglow widget 1/1 and real macOS integration 1/1 pass: drag,
  animation/pause, PNG capture/reset and disposal. The integration launcher reports an
  unsuccessful foreground request; its automated app assertions still complete
  successfully.
- Private Release FFI: 175 complete ABI checks plus the other scalar/memory/callback,
  async and lifecycle checks, and 14 engine-GC contracts. The generated embedded script
  matches the measured private engine byte-for-byte; native counters return to zero.
- Private WebGPU: 3 sessions/360 frames, shared-image and texture readbacks, Three.js
  acceptance and 5 additional invocation checks per session;65/65 pinned CTS cases in
  each session (195 executions, zero failures/skips), all 6 native counters zero after
  close.

The [receipt](joint-gc-optimization-macos-arm64.json) contains both formal matrices,
late full controls, source/engine/script hashes and validation counts. Raw diagnostics,
Instruments traces, allocation profiles and logs remain under `.local/webgpu-gc/`.
Temporary apps, test-source copies and the test engine are removed after recording. The
maintained studio/API apps, engine and Dawn SDK remain. No commit or push.

Full CTS, other platforms and physical display/input latency are unverified.
