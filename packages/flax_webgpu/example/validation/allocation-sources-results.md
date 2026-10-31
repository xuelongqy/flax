# WebGPU allocation sources: rejected candidates and Edge retest

**No new optimization is retained.** Three measured candidates did not establish a
repeatable reduction in joint-GC stalls. All implementation and test edits from this
investigation are restored byte-for-byte. The previous retained optimizations remain; no
commit or push is made.

## What the allocation profile identifies

A fresh V8 allocation sampler observes the existing six-scene Spectrum suite, including
startup and warmup. Its baseline estimates **737.38 MB cumulatively allocated** across
5722 accepted measured submissions. This is neither resident memory nor evidence of a
leak. The main self-allocation locations include:

| Allocation location                                 | Baseline estimate MB |
| --------------------------------------------------- | -------------------: |
| WeakRef deref, mostly Core reference-cache sweeping |                69.98 |
| WebGPU descriptor conversion                        |                67.65 |
| DescriptorArena.struct                              |                53.91 |
| Generic FFI field views                             |                49.56 |
| Object.entries across conversion/descriptor paths   |                36.12 |

The raw call trees retain script URLs, line/column positions and parent nodes. These
identify allocation locations, **not which objects survive minor GC or are promoted to
old space**. A large reduction in one row does not by itself establish a lower major-GC
frequency.

Natural V8 major-GC log entries describe incremental-marking completion. Some startup
entries have old-generation usage above the allocation limit. The `memory pressure`
entries are largely the V8 collections explicitly requested inside joint tracing, as
confirmed by the native scope ordering. They must not be mistaken for proof that Dawn
GPU memory or FFI external-size accounting initiated the original collection. The exact
surviving/promoted allocation sites that cause recurring old-space pressure remain open.

## Three candidates and retention decisions

1. Cache fixed descriptor field lists, normalized type strings and native declarations;
   remove one redundant typed-array wrapper. The sampled estimate falls to **656.49 MB
   (-11.0%)**, but sampled requested passes change from 4 to 6. One sampled run per
   variant cannot establish a GC regression or improvement.
2. Combine those changes with GC-notification-driven Core weak-alias pruning. The Core
   WeakRef-deref hotspot falls from **69.98 to 2.63 MB**, while the whole sampled
   estimate is **643.83 MB (-12.7%)**. Core JS 108/108 and WebGPU conversion 5/5 pass.
   The sustained control below still does not improve collection cadence. These changes
   are reverted.
3. Create FFI field views with `Object.setPrototypeOf({}, null)` instead of
   `Object.create(null)`. The actual private V8 engine confirms fast-property mode while
   retaining the null prototype; Node's V8 also confirms shared maps in a small probe.
   This shape distinction is not a performance result. The sampled estimate instead
   rises to **841.62 MB**, and the sustained control changes total blocking by only
   about 1%. This candidate and its additional assertions are also reverted.

The supplied AGENTS instructions require stopping after three unsuccessful fixes. This
investigation therefore stops implementation experiments. The doubtful assumption is
that reducing **total JS allocation** necessarily reduces the **old-space pressure**
that initiates joint collection. A subsequent investigation needs survival/promotion
attribution rather than another speculative allocation rewrite.

## Sustained controls without the allocation sampler

Each candidate group uses fresh processes in **baseline → candidate → candidate →
baseline** order. Every run has 60 accepted warmups followed by **60 seconds** of the
same balanced particles scene at **960 × 540**. These are active measurement windows,
not a repeat of process-time 0–60 s cold-start capture. No CPU or allocation sampler,
concurrent build or test runs during them. The same archived diagnostic engine records
native GC/JIT markers; observer overhead remains.

The collector aligns JS submission starts with native GC scopes through a paired
native/performance-clock anchor. Anchor uncertainty is below 1 ms in every run. Nested
Dart/V8 pause spans are unioned for interval overlap. The requested-pass totals below
measure the complete posted Dart collection span, not a sum of nested GC phases.

| Candidate group                      | Baseline requested passes, two runs | Candidate requested passes, two runs | Baseline total blocking ms | Candidate total blocking ms |
| ------------------------------------ | ----------------------------------: | -----------------------------------: | -------------------------: | --------------------------: |
| metadata-and-reference-notifications |                               7 / 8 |                                8 / 8 |                     336.77 |                      329.33 |
| fast-property-views                  |                               8 / 9 |                                8 / 8 |                     317.37 |                      314.15 |

The first group reduces sampled allocation but increases requested-pass count in these
controls. The shape group differs by only one pass across two minutes per variant; its
cumulative blocking reduction is about 1%, with no reduction in both paired counts.
Neither passes a useful stall-reduction gate. Single requested passes still commonly
last around 20 ms. Other long intervals also remain; GC does not explain every delay.

## Same-period comparison with Edge

Apple M2 Max, 30 GPU cores, macOS 27.0.1, AC power, 3440 × 1440 at 120 Hz. Edge is
156.0.4314.50. Both hosts have a 1180 × 908 viewport, DPR 1, an 880 × 495 logical
canvas, and identical per-case backing resolution and draw counts.
Renderer/shader/metrics SHA-256:
`e4ccf6e2c85b22d527ba63f40095d26ddd4b7a878a95c95eec064098f9e4d69c`.

The unprofiled matrix order is **baseline → combined candidate → Edge → Edge → combined
candidate → baseline**. Each case has 60 accepted warmups, an 8-second measurement, at
most three GPU submissions in flight, and readback only afterward. Every process passes;
Flax resource counters return to zero. The candidate is subsequently discarded. The
table uses the two **baseline** runs, which match the restored final source/app, and the
two Edge runs. Values are means of per-run percentiles, not pooled percentiles.

| Scene / backing             | Current Flax completed FPS | Edge completed FPS | Flax encode P95 ms | Edge encode P95 ms | Flax completion P95 ms | Edge completion P95 ms |
| --------------------------- | -------------------------: | -----------------: | -----------------: | -----------------: | ---------------------: | ---------------------: |
| Particles / balanced / 540p |                    118.812 |            119.438 |              0.748 |              0.128 |                  2.151 |                  4.135 |
| Particles / high / 1080p    |                    118.312 |            120.000 |              0.741 |              0.118 |                  3.558 |                  5.350 |
| Cubes / instanced / 540p    |                    118.812 |            120.000 |              0.817 |              0.105 |                  1.618 |                  3.315 |
| Cubes / per-object / 540p   |                    119.312 |            120.000 |              1.273 |              0.200 |                  2.154 |                  3.778 |
| Prism / balanced / 540p     |                    119.500 |            119.812 |              0.592 |              0.128 |                  1.849 |                  3.652 |
| Prism / high / 1080p        |                    119.875 |            119.500 |              0.584 |              0.100 |                  4.514 |                  6.223 |

Current Flax ranges from 118.31 to 119.88 completed FPS. Its largest deficit to the
matched Edge case is about 1.41%; Prism/1080p is slightly ahead in this small sample.
The rejected combined candidate does not improve every case: its Prism/1080p mean is
118.19 FPS versus baseline 119.88 FPS. That result is retained rather than hidden.

Flax still spends more CPU time inside encoding. In this matrix its GPU-completion
Promise notification arrives sooner than Edge's at P95. This is a notification endpoint,
**not evidence of lower screen latency or faster GPU execution**. Backend work placement
also differs; see the [encoding comparison](encoding-submit-results.md). Edge records 8
skipped submissions across its 12 case executions; Flax records zero across all 24.
Skipped work remains in the results. Display-capped FPS is not maximum throughput.

## Evidence and final state

The [machine receipt](allocation-sources-macos-arm64.json) records per-candidate sampled
estimates, all eight sustained controls, the full six-scene comparison aggregates, clock
checks, version and source hashes. Raw allocation trees, native events, submission
samples, screenshots and process logs remain in `.local/webgpu-alloc/`. Discarded source
snapshots and diagnostic host assets are archived there; owned app/build scratch is
removed after preserving evidence.

All **18 measurement processes** pass, including **16 Flax hosts** closing with all six
native resource counters at zero. Candidate test results describe those candidates only.
All **224 original source files**, the previously clean reference-cache source, retained
engine/receipt, and measured baseline studio assets are restored or unchanged. Only this
report and receipt are new public files. Documentation formatting, links and whitespace
are checked. Full runtime/CTS acceptance is not rerun after restoring the original code.

Unresolved: survival/promotion allocation stacks, the remaining callback-delivery gaps,
physical input-to-display latency, other platforms, and a verified GC-stall
optimization.
