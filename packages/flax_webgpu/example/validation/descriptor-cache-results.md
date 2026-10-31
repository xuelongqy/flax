# Descriptor metadata cache: isolated, unprofiled controls

**No new cache is retained.** Three isolated metadata-cache implementations eliminate
repeated array construction, but none meets the pre-recorded requirement that encoding
remain within the nonregression allowance in every scene. All implementation and test
edits are restored byte-for-byte; prior optimizations remain. No commit or push.

## Scope and protocol

Only `packages/flax_webgpu/js/src/convert.ts` changes between variants. Tests add checks
for repeated caller getters, reentrant conversion and fresh default arrays. Core, FFI,
GC policy, native code, the retained engine, and rendering code remain unchanged.
Type-normalization caching and typed-array-wrapper removal are excluded.

Each variant receives a new eight-run same-period control: **baseline → candidate →
candidate → baseline → candidate → baseline → baseline → candidate**. Four neighboring
pairs alternate their order. Every process runs the same six Spectrum cases with **60
accepted warmups, 8 seconds per case, at most three submissions in flight**, and
readback only after each measured window. Timing runs contain no counters, CPU/heap
sampler or native trace probes. No task-owned build or test runs concurrently.

The renderer/shader/metrics source SHA-256 remains
`e4ccf6e2c85b22d527ba63f40095d26ddd4b7a878a95c95eec064098f9e4d69c`. Both variants use
the same engine binary, a 1180 × 908 viewport, DPR 1, and an 880 × 495 logical canvas.
Backing resolutions and draw counts match per case: 960 × 540 or 1920 × 1080, including
the 2304-draw case. Hardware is Apple M2 Max, 30 GPU cores, macOS 27.0.1 on AC power.

### Pre-recorded retention gates

The plan is written before each measurement, preserving the original thresholds:

- Benefit: at least 25% fewer logical `Object.entries` result/pair arrays per measured
  submission in all six cases, checked in separate counter-only processes.
- Encoding: each scene's four-run mean encoding P50 **and** P95 must be no higher than
  baseline plus **max(0.020 ms, 3% of baseline)**. Reject a persistent slowdown beyond
  that same allowance in at least three of four neighboring pairs.

This is a practical timing-noise allowance, not a proof of statistical equivalence.
Means are means of per-run percentiles, not pooled percentiles. No failed run or
unfavorable case is removed, and the gate is not relaxed after seeing results.

### Display-mode change

The first matrix starts with a recorded 3440 × 1440 / 120 Hz display and runs near 120
FPS. A later probe finds 1920 × 1080 / 60 Hz; all runs of the second matrix show
approximately 60 FPS. The third matrix records identical **1920 × 1080 / 60 Hz and AC**
state before and after every process. The application viewport and GPU backing sizes
remain fixed throughout.

The matrices are analyzed independently; their absolute timings are never pooled. Timing
also drifts between matrices, so the display change alone is not assumed to explain
every timing difference. No user display setting is changed by these tools.

## Allocation-construction check

Separate counter-only app copies wrap `Object.entries`, count one result array plus one
pair array per returned entry, and use the same six cases at their original resolutions.
Each counter case uses 60 warmups and a 1-second window. The measurement normalizes by
accepted submissions and can include occasional unrelated UI enumeration. No heap
sampler is used, and these counters are absent from all encoding measurements.

The broad field/native-declaration cache reduces observed per-frame entries arrays from
71–92 to zero. Both smaller dictionary-only variants reduce that subset by about 46–48%;
native-struct enumeration remains. These are **logical array-construction counts**, not
measured resident bytes or total JS allocation. Removing these repeated constructions
does not by itself prove lower CPU time or fewer major collections.

## Retention decisions

| Variant                                                             | Encoding gate                          | Decision |
| ------------------------------------------------------------------- | -------------------------------------- | -------- |
| Cached dictionary fields plus pre-parsed native declarations        | Fails particles/540p P50 and P95       | Reverted |
| Separate dictionary field-list table                                | Fails four scenes                      | Reverted |
| Prepared internal dictionary records, with entries in `spec.fields` | Fails per-object cubes and Prism/1080p | Reverted |

The first variant's particles/540p encoding P50 rises from 0.438 to 0.465 ms and P95
from 0.772 to 0.922 ms. Three of four neighboring pairs exceed the noise allowance. The
second removes native pre-parsing but still fails the encoding gate. The third also
removes the extra per-call secondary-table lookup, without mutating the raw metadata or
caller data. It does not pass every scene either.

The experiments do not establish that any cache must always be slower, or identify one
internal cause of the mixed timings. They do fail the requested adoption condition under
these controls. A partial allocation benefit is not used to excuse an encoding
regression in another scene.

## Final candidate: same-period 60 Hz results

The table is the final prepared-record variant and its four matching baseline runs.
Every run has identical recorded display/power state before and after measurement. All
rows keep the same backing size and draw count between baseline and candidate.

| Scene / backing             | Baseline encode P50 ms | Candidate encode P50 ms | Baseline encode P95 ms | Candidate encode P95 ms | Gate |
| --------------------------- | ---------------------: | ----------------------: | ---------------------: | ----------------------: | ---- |
| Particles / balanced / 540p |                  0.480 |                   0.487 |                  0.614 |                   0.597 | Pass |
| Particles / high / 1080p    |                  0.466 |                   0.469 |                  0.580 |                   0.584 | Pass |
| Cubes / instanced / 540p    |                  0.481 |                   0.499 |                  0.611 |                   0.611 | Pass |
| Cubes / per-object / 540p   |                  1.030 |                   1.064 |                  1.188 |                   1.262 | Fail |
| Prism / balanced / 540p     |                  0.456 |                   0.464 |                  0.699 |                   0.573 | Pass |
| Prism / high / 1080p        |                  0.429 |                   0.460 |                  0.531 |                   0.581 | Fail |

Per-object cubes' encoding P95 rises about **6.3%**; Prism/1080p rises about **9.3%**.
These exceed the recorded allowance. GPU-completion notification and frame-gap
statistics are retained in the receipt, but do not override the encoding gate or measure
physical screen/input latency. The 60 Hz cap limits throughput conclusions.

## Verification and final state

All **24 unprofiled timing processes** and **6 counter-only processes** pass their
workload/pixel checks. Every Flax close returns all six native resource counters to
zero. Each candidate passes the existing **5/5** conversion tests and typecheck/build,
including the additional getter/reentry/default assertions. After restoring the original
source and tests, its build and **5/5** tests pass again.

All **226 initial source hashes**, the retained engine/receipt and the measured baseline
studio assets are restored or unchanged. Only this report and its
[machine-readable receipt](descriptor-cache-macos-arm64.json) are new public files. No
candidate test or implementation remains, and no commit or push is made. Full
runtime/CTS acceptance is not rerun after restoring the original implementation.

Raw plans, all three matrices, per-run environment snapshots, screenshots, counter
results, candidate sources and hashes remain under `.local/webgpu-descriptors/`. Owned
app clones are removed after archiving their assets; the maintained SDK, engine, studio
app and prior experiment evidence remain. Logical construction counts do not certify
heap-byte savings, resident-memory reduction or reduced GC stalls.
