# Standard API results: Flax and Microsoft Edge

Fresh same-machine Release/AOT comparison on Apple M2 Max, macOS 27.0.1, AC power.
Browser: Microsoft Edge 156.0.4314.50 (V8 15.6.12.7). This is the user-selected Chromium
comparison, not a new Google Chrome run.

Both hosts run the same WGSL and `scene.mjs`, BGRA8/sRGB/opaque output, 1100 x 668
viewport at scale 1 on the 3440 x 1440 display. Each phase lasts eight seconds with 31
warmup submissions. The order is Flax/Edge/Edge/Flax; timestamp, native handoff, browser
tracing and detailed profiling use separate rounds.

## JS-thread encoding and submission

All times are milliseconds. Ranges retain the independent phase quantiles; they are not
pooled percentiles. There are four phase pairs at 960 x 540 and two pairs at 640 x 360.

| Resolution |    Flax P50 |    Edge P50 |    Flax P95 |    Edge P95 | Flax callback FPS | Edge callback FPS |
| ---------- | ----------: | ----------: | ----------: | ----------: | ----------------: | ----------------: |
| 960 x 540  | 0.422–0.882 | 0.035–0.065 | 1.084–1.437 | 0.100–0.125 |     118.58–119.48 |     119.98–120.00 |
| 640 x 360  | 0.421–0.796 |       0.080 | 1.058–1.522 |       0.145 |     118.06–118.19 |     120.00–120.01 |

Across matched phase pairs, the Flax JS thread spends **0.34–0.85 ms more at P50 and
0.91–1.38 ms more at P95**. Flax encoding/submission P95 consumes about 13–18% of an
8.33 ms frame budget. The frame callbacks remain near the display ceiling in this light
scene; that does not prove equal headroom for larger command streams.

These are the complete standard-API submission paths. They include validation and native
command work and do not isolate the JS wrapper alone. In the separate detailed round,
command encoding dominates: Flax P95 **0.816–0.946 ms**, Edge **0.040–0.050 ms**.
Descriptor conversion and FFI/resource wrapping are profiling candidates; this
experiment does not attribute an exact fraction to each. The calibrated Flax clock costs
roughly 2–4 microseconds per call, far below the observed difference. Detailed clock
samples are excluded from the table.

## GPU work and observable completion

| Resolution | Flax GPU P50 / P95 | Edge GPU P50 / P95 | Flax completion Promise P95 | Edge completion Promise P95 |
| ---------- | -----------------: | -----------------: | --------------------------: | --------------------------: |
| 960 x 540  |      0.328 / 0.393 |      0.328 / 0.328 |                 2.732–2.991 |                 2.355–2.580 |
| 640 x 360  |      0.131 / 0.197 |      0.131 / 0.197 |                 2.380–2.966 |                 2.555–2.665 |

GPU medians match. The 960 x 540 P95 difference is one observed timestamp quantization
step, approximately 0.066 ms. That alone is insufficient evidence of a substantial GPU
execution regression. The same `onSubmittedWorkDone()` Promise is measured in both
hosts, including host delivery and all preceding queue work. It does not measure screen
presentation.

## Presentation handoff

| Resolution | Flax publish to first Flutter texture read P95 | Flax publish to consumer GPU completion P95 |
| ---------- | ---------------------------------------------: | ------------------------------------------: |
| 960 x 540  |                                    0.199–0.234 |                                 1.497–1.635 |
| 640 x 360  |                                          0.221 |                                       1.468 |

Publication-to-acquisition remains **0.20–0.23 ms P95**; this measured handoff does not
wait another 8.33 ms frame. Most acquisitions occur before the producer fence signals,
with the GPU waits preserving ordering. All 15 Flax sessions retire the monitored
context, mapping, canvas, storage and publication counters to zero, with zero unsafe
retirements.

Edge tracing matches **988** render starts to presentation feedback with **zero
unmatched measured marks**. Its P95 is 12.371 / 12.335 / 19.549 ms for the three phases.
This includes browser presentation feedback; Flax consumer GPU completion ends earlier
in the pipeline. **Do not subtract those values to claim that Flax displays sooner.** A
same-endpoint display-latency and physical input-to-photon comparison remains
unmeasured.

## Evidence

- [Machine-readable results](results.json) preserve phase ranges, input hashes, version,
  sample counts and endpoint limits.
- The performance rounds contain **5,513 Flax and 5,576 Edge measured frames**.
- Raw JSON, PNGs and browser trace stay in `.local/webgpu-api-comparison/`.
- [Reproduction protocol](README.md) describes the independent measurement modes.
