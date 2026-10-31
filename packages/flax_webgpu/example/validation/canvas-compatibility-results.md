# Canvas compatibility: matched macOS comparison

Measured on 29 October 2026 (UTC+08), Apple M2 Max (30 GPU cores), macOS 27.0.1, AC
power. The active display was **1920 x 1080 at 60 Hz**, DPR 1. The previous studio
receipt used 120 Hz, so its FPS is a historical reference, not a regression baseline.

The same renderer/shader/metrics source ran in Flax and Edge Edg/156.0.4314.50. Order:
Flax, Edge, Edge, Flax. Each of six cases warms up for 60 accepted frames, then measures
8 seconds with at most three submissions in flight. Pixel readbacks and interaction
checks run outside the measurement windows. Both Flax sessions retired all native
counters to zero. No case skipped a submission due to the limit.

| Scene                       | Resolution  | Flax FPS | Edge FPS | Flax encode P95 ms | Edge encode P95 ms | Flax completion P95 ms | Edge completion P95 ms |
| --------------------------- | ----------- | -------: | -------: | -----------------: | -----------------: | ---------------------: | ---------------------: |
| Particles / balanced / 540p | 960 x 540   |   59.313 |   60.125 |              1.322 |              0.178 |                  3.426 |                  3.045 |
| Particles / high / 1080p    | 1920 x 1080 |   58.875 |   60.125 |              1.420 |              0.230 |                  5.270 |                  5.005 |
| Cubes / instanced / 540p    | 960 x 540   |   59.625 |   60.063 |              1.382 |              0.213 |                  2.947 |                  3.275 |
| Cubes / per-object / 540p   | 960 x 540   |   58.250 |   60.063 |              4.867 |              0.605 |                  6.762 |                  4.237 |
| Prism / balanced / 540p     | 960 x 540   |   58.875 |   60.000 |              1.392 |              0.207 |                  3.961 |                  3.630 |
| Prism / high / 1080p        | 1920 x 1080 |   58.813 |   60.125 |              1.595 |              0.207 |                  6.312 |                  5.850 |

FPS and percentile values are means of two independent runs; percentiles are not pooled.
Completion means submission to the JS GPU-work-completion notification. It includes GPU
work and host/browser scheduling, not scan-out. No display-latency difference can be
inferred. The ordinary cases differ by roughly 0.3-0.5 ms at P95 (with the instanced
cube case faster in Flax in this sample). The 2,304-draw case retains a larger CPU
submission cost and a 2.5 ms completion difference.

Ordinary rendering still uses pooled IOSurfaces and GPU fences. Shared image decode,
upload and explicit snapshot/export are separate paths; exports intentionally read
pixels back. The asynchronous Dawn event pump stops when requests settle.

[Machine-readable receipt](canvas-compatibility-macos-arm64.json) records hashes and the
measurement scope. Run the example build from [the example guide](../README.md), then
run `node packages/flax_webgpu/tool/compare_example.mjs`. The runner uses an isolated
Edge CDP profile and removes it afterward.
