# Spectrum studio: macOS / HTML frame-rate comparison

On this M2 Max, Flax sustained about **114 submitted scene frames/s** in the ordinary
cases, versus about **120 in HTML**. The largest difference was the 2,304-draw cube
case: **110.1 vs 120.1**, or **8.3% lower**. These are submission/completion throughput
measurements, not screen-presentation counts or input latency.

## Matched workload

Measured on 2026-10-28, macOS 27.0.1 (26A434), Apple M2 Max with 30 GPU cores, AC power,
3440 × 1440 / 120 Hz display, DPR 1. Flax used Release/V8 JIT, Dawn/Metal and the
private `flax_mac_webgpu_fenced_release_arm64` engine. HTML used Microsoft Edge
`156.0.4314.50` through CDP in fresh profiles. This is an Edge/Chromium measurement;
Google Chrome was not separately measured in this matrix.

Both hosts used the same renderer, WGSL and metrics, identified by SHA-256
`e4ccf6e2c85b22d527ba63f40095d26ddd4b7a878a95c95eec064098f9e4d69c`. The window content
size was 1180 × 908 and the complete displayed canvas was 880 × 495 logical pixels in
both hosts. The GPU texture size and quality are specified per case below; neither
follows browser zoom or device pixel ratio.

Order: Flax → HTML → HTML → Flax. Each of the 24 measured cases warmed up for 60
accepted frames, then measured 8 seconds with at most three GPU submissions in flight.
The loop used rAF in both hosts, reset the animation time and pointer, retained GPU
resources, and performed no pixel readback during measurement. Pixel checks and PNG
captures happened after the measurement and GPU drain. Both native sessions returned all
six resource/error counters to zero after close.

## Frame rates

Values are the arithmetic means of two equally long runs. The ranges show both runs;
they are not confidence intervals. Difference is `(Flax / HTML - 1) × 100`.

| Scene / GPU texture     | Load                                   | Flax FPS | HTML FPS | Difference |
| ----------------------- | -------------------------------------- | -------: | -------: | ---------: |
| Particles / 960 × 540   | 65,536 particles                       |    114.6 |    120.1 |      −4.6% |
| Particles / 1920 × 1080 | 262,144 particles                      |    113.8 |    120.0 |      −5.2% |
| Cubes / 960 × 540       | 2,304 cubes, 1 instanced draw, 4× MSAA |    114.4 |    120.0 |      −4.6% |
| Cubes / 960 × 540       | Same 2,304 cubes, 2,304 draws, 4× MSAA |    110.1 |    120.1 |      −8.3% |
| Prism / 960 × 540       | 64 maximum ray-march steps             |    114.0 |    119.6 |      −4.7% |
| Prism / 1920 × 1080     | 96 maximum ray-march steps             |    115.4 |    118.9 |      −2.9% |

| Case, in the same order | Flax run 1 / run 2 | HTML run 1 / run 2 |
| ----------------------- | -----------------: | -----------------: |
| Particles balanced      |  115.625 / 113.625 |  120.125 / 120.125 |
| Particles high          |  113.875 / 113.625 |  120.000 / 120.000 |
| Cubes instanced         |  113.500 / 115.375 |  120.000 / 120.000 |
| Cubes per-object        |  108.250 / 111.875 |  120.125 / 120.000 |
| Prism balanced          |  111.625 / 116.375 |  120.000 / 119.250 |
| Prism high              |  115.250 / 115.500 |  120.000 / 117.750 |

Submission and GPU-completion counts differed by at most three frames at a window
boundary. Fractional values slightly above 120 come from counting frames in a bounded
8-second window; they do not imply a display faster than 120 Hz.

## API encoding and frame pacing

CPU encoding runs from uniform upload through `queue.submit()`, including encoder, pass
and draw API calls. It excludes `onSubmittedWorkDone()` registration, asynchronous GPU
execution, Flutter/Chromium composition and display presentation. The following are the
means of the two per-run medians, not pooled medians.

| 2,304-cube case        | Flax CPU encoding P50 | HTML CPU encoding P50 |
| ---------------------- | --------------------: | --------------------: |
| One instanced draw     |              0.422 ms |              0.065 ms |
| 2,304 per-object draws |              3.263 ms |              0.115 ms |

The standard API/FFI path still has measurable CPU cost, especially with thousands of
calls. Instancing avoids most of that cost and is the default in the example. The
ordinary one-draw scenes encoded in about 0.4–0.45 ms on Flax, leaving substantial room
inside an 8.33 ms frame budget on this machine.

Every Flax case reported zero skipped submissions from the three-frame limit, and its
accepted frame count equaled its rAF callback count. Its frame-gap P99 was about 24–34
ms, while the ordinary HTML cases were usually around 9–10 ms. This locates the observed
throughput loss in less frequent callback delivery rather than rejection by this
example's in-flight guard. A trace is still needed to distinguish JS work, GC, Flutter
scheduling and other causes; FPS alone does not identify that root cause. HTML's second
Prism run also hit the guard, illustrating run-to-run variation.

## Validation and limits

The [machine-readable receipt](macos-arm64.json) retains all 24 per-case measurements,
GPU-completion rates, timing distributions, adapter/browser versions and the six native
retirement counters. The comparison also checks matching fingerprints, dimensions, case
ordering and colored pixels. A separate three-scene HTML smoke run verifies
scene/quality/resolution/palette controls, reset, play/pause, GPU restart and changed
pixels after dragging a paused scene.

Two focused metric tests, example TypeScript checking, HTML bundling, macOS Release
build and Dart analysis passed. The existing Canvas implementation was not changed by
the studio work. This matrix does not replace the separate Core/Canvas/runtime gates.

This is one device and two runs per host under a 120 Hz cap. It does not establish
uncapped maximum GPU throughput, browser conformance, performance on other platforms, or
a common screen-presentation/latency endpoint. GPU completion timings include JS
notification delivery. See the
[reproduction commands](../README.md#compare-frame-rates).
