# Afterglow browser and Flax comparison

The browser and native fixtures import the example's `drawing.ts` and the same
`afterglow_cases.ts`. Each case uses Aurora, center (440, 254), 30 warmup frames and 120
measured frames. Phase is the submitted frame index divided by 60, so hosts render the
same sequence even at different frame rates. PNG exports use phase zero and occur only
after all timed cases. Animation never reads pixels.

```sh
node experiments/canvas_native/afterglow_bundle.mjs
python3 experiments/canvas_native/afterglow_serve.py
dart run experiments/canvas_native/run_afterglow.dart debug
dart run experiments/canvas_native/run_afterglow.dart release
```

Open the printed loopback URL and select **Run six cases**. Keep that browser tab
visible. The server accepts only the six browser PNGs and one JSON receipt, writing them
into `.local/canvas-native/afterglow/`. It binds to loopback only.

The native commands require the paired isolated engine via `FLUTTER_ENGINE`. They build
disposable V8 applications and wait for **Start measurement**. Keep the selected window
visible and pause other Canvas previews during sampling. The app records display
refresh, DPR and Flutter lifecycle state. It first matches 880 × 480 physical pixels,
then tests normal CanvasView density if DPR differs from one. CPU timings bracket JS
encoding and explicit submission separately; Flutter FrameTiming supplies build and
raster durations. Debug additionally captures the first case's Dart/Embedder/GC
timeline.

Browser CPU timing measures Canvas command submission, not deferred GPU completion. Both
FPS values describe animation callback cadence; Flutter also records raster timing.
These are local measurements on the current machine, not device-wide performance
certification. Raw samples, exact PNGs and diagnostic timelines remain in the ignored
evidence directory. WPT assertions and original fuzzy thresholds remain independent of
the visual example comparison.

## iOS simulator measurements

Build the isolated simulator engine using the
[mobile runner](README.md#mobile-acceptance), then select the booted simulator:

```sh
FLAX_CHECK_TARGET=ios-simulator-arm64 FLAX_CHECK_DEVICE=<simulator-udid> \
  dart --packages=.dart_tool/package_config.json experiments/canvas_native/run_afterglow_mobile.dart
```

The same mobile runner selects Debug for the simulator and Release for physical
devices. Simulator launches use Hermes, the paired Canvas framework and the same
three-run, six-scene, two-size workload below. Results use `debug` filenames and are
copied from the simulator's app data container. Console routing preserves simulator
Flutter logs; only physical iOS routes prints to CoreDevice stdout. Mobile timing
does not enable the desktop Debug timeline recorder.

The current iPhone 18 Pro / iOS 27.0 simulator runs on an Apple M2 Max host with
macOS 27.0.1. It reports 60 Hz, DPR 3 and a 1206 × 2622 view. The separate macOS
Flax example was closed before sampling. All three launches remained resumed and
produced 36 complete rows / 4,320 measured frames without in-frame pixel readback.
All 12 repeated phase-zero PNG comparisons are pixel-identical. At 880 × 480,
medians across the three launches are:

| Scene       | FPS  | CPU submission p50 | Raster p50 |
| ----------- | ---: | -----------------: | ---------: |
| Bloom crisp | 18.0 |            7.19 ms |   51.51 ms |
| Bloom soft  |  8.4 |            8.39 ms |  114.18 ms |
| Orbit crisp | 31.6 |            3.01 ms |   25.50 ms |
| Orbit soft  | 22.3 |            3.90 ms |   42.52 ms |
| Weave crisp | 27.1 |            3.29 ms |   33.17 ms |
| Weave soft  | 15.3 |            5.03 ms |   61.98 ms |

Soft Bloom ranges from 8.05 to 8.45 FPS; soft Weave ranges from 13.01 to 16.15 FPS.
At screen-fit scale 1.2614, they reach 7.8 / 13.4 FPS with raster p50
124.34 / 71.15 ms.

The engine's actual Impeller compile command uses `-O0` and `IMPELLER_DEBUG=1`.
Its existing `DeviceSupportsFramebufferFetch` implementation explicitly returns
false for iOS simulators. Consequently advanced blends, including screen, use
`FlipBackdrop` and intermediate textures instead of framebuffer-fetch blending.
The existing guard remains intact. These are confirmed configuration and path
differences; the measurements do not isolate each one's share of the raster cost.

The refreshed simulator correctness gate passes 413 ordinary test bodies, including
370 selected upstream workers and 78 reference scenes; all 403 Widget journal entries
succeed. The three grids each remain 23,171 / 33,000 at channel limit 4. The API,
upstream WPT, adapter and drawing hashes are unchanged, and the gate and benchmark
package the same verified engine. Raw samples, PNGs and
`verification-ios-simulator.json` live in `.local/canvas-native/afterglow/mobile/`.
The installed test apps and temporary projects are removed; the existing simulator
and maintained builds are preserved.

Simulator measurements use the Mac's CPU/GPU and Flutter Debug mode. They validate
the simulator path and help diagnose frame costs; they do not predict physical iPhone
Release performance or establish a mobile browser comparison.

## iOS simulator frame pacing and joint GC

The pacing fixture isolates scheduling from the expensive Debug renderer. It uses
128 × 128 backing pixels, 30 warmup and 360 measured frames per case, with pure Dart
frame callbacks, empty JS rAF, two Canvas fills, Canvas plus 8,192 temporary JS objects
per frame, and a final Dart control. No timed case reads pixels. All runs enable the
same Dart/Embedder/GC timeline streams and keep the app resumed on the 60 Hz simulator.

```sh
node experiments/canvas_native/afterglow_bundle.mjs --pacing
FLAX_CHECK_TARGET=ios-simulator-arm64 FLAX_CHECK_DEVICE=<simulator-udid> \
  PACING_LABEL=frame-aware dart run experiments/canvas_native/run_afterglow_mobile.dart --pacing
python3 experiments/canvas_native/analyze_pacing.py \
  .local/canvas-native/afterglow/pacing/frame-aware --check-frame-aware
```

Three launches per policy, five cases per launch, provide 16,200 measured frames in
total. Median callback FPS across the three launches:

| Case | Original | Old-generation notifications only | Frame-aware idle collection |
| --- | ---: | ---: | ---: |
| Dart frames | 58.69 | 57.29 | 60.00 |
| Empty JS rAF | 55.09 | 54.26 | 60.00 |
| Canvas fills | 55.52 | 56.39 | 60.00 |
| Canvas with allocation pressure | 32.43 | 54.95 | 56.54 |
| Dart frames after JS | 57.14 | 56.39 | 60.00 |

The original callback escalated every Hades young collection to a full Dart/Hermes
collection. The retained allocation-pressure traces contain 189 full collections;
the final policy contains 12 necessary old-generation pressure collections. Original
full collections typically took 50–80 ms in this Debug engine, versus about 0.3 ms for
the lightweight Canvas callback. Independent one-second idle requests also interrupted
animation, even with no JS allocation. Separating completed old-generation events
removes the pressure amplification; checking recent Flutter frames removes idle timer
interruptions. Both changes preserve the existing fixed-point collector.

Across 1,080 measured frames per case and policy, callback gaps over 25 ms fall from
37 to 2 for Canvas fills and from 530 to 30 for allocation pressure. Empty rAF falls
from 34 to 1. These counts describe the diagnostic workload, not WPT tolerances or a
promise of zero pauses. Pressure-driven full collections remain synchronous. All
final animation traces have zero timer-triggered full collections, exercise the frame
deferral, and record idle collection resuming after animation. The JS-pressure case
still exercises old-generation collection.

The VM timeline is a bounded ring; some case prefixes are overwritten. Attribution
counts use only complete intervals in the retained trace window, while FPS and gap
counts use all 360 samples. The analysis rejects traces covering less than half a case
and checks the frame/pressure/idle conditions above. Receipts and raw traces are under
`.local/canvas-native/afterglow/pacing/{baseline,major-only,frame-aware}/`. This diagnoses
the simulator GC policy; physical iPhone Release and its earlier 120 Hz gaps require
their own follow-up measurement. It does not remove Bloom/Weave's Debug raster cost.

The final engine passes 413 Canvas tests plus all 14 existing joint-GC cases in an
independent iOS 27.0 simulator. The 417 Widget journal entries all succeed; the test
counter is 431 including setup/teardown. This includes 370 upstream workers, 78 reference
scenes, live roots, active-job protection, three-session marking, JS/Dart pressure,
discarded wrappers and 1,000 rootless bridge cycles. All three reference grids remain
23,171 / 33,000 at channel limit 4. The six protected API/WPT/drawing hashes are
unchanged. An earlier run interrupted by another app taking the shared simulator's
foreground is retained separately and excluded from acceptance. The independent app
has the same audited engine hash as the final pacing runs.

## Physical mobile measurements

After building the paired mobile Release engine, select `FLAX_CHECK_TARGET` and
`FLAX_CHECK_DEVICE` as described in the [mobile runner](README.md#mobile-acceptance),
then run:

```sh
node experiments/canvas_native/afterglow_bundle.mjs
dart --packages=.dart_tool/package_config.json experiments/canvas_native/run_afterglow_mobile.dart
```

This creates an isolated `dev.flax.canvas.afterglow` application, uses Hermes on iOS and
V8 on Android, verifies the packaged engine, and performs three launches. Measurement
starts after the app resumes. Each launch measures the six scenes at 880 × 480 physical
pixels and at screen-fit size, recording actual DPR, reported display refresh and frame
timestamps. After all timed frames it saves JSON and six phase-zero PNGs; the host uses
ADB or CoreDevice file transfer and checks completion and frame counts. The app and
temporary project are removed after execution. Receipts live in
`.local/canvas-native/afterglow/mobile/`.

Screen-fit native rows replay vector content at a different output resolution and are
reported separately. Device refresh policy is observed without changing system settings.

The current physical-device Release measurements use three launches per phone. All six
launches report `resumed`; the two output sizes produce 72 valid timing rows and 8,640
measured frames. All 24 repeated phase-zero PNG comparisons are pixel-identical within
each device. The following values are medians of the three 880 × 480 runs:

| Scene       | Pixel 4 FPS | Android raster p50 | iPhone 14 Pro FPS | iOS raster p50 |
| ----------- | ----------: | -----------------: | ----------------: | -------------: |
| Bloom crisp |        56.2 |           10.34 ms |              47.2 |        2.15 ms |
| Bloom soft  |        23.4 |           40.50 ms |              45.3 |       13.24 ms |
| Orbit crisp |        56.2 |           12.55 ms |              79.7 |        1.21 ms |
| Orbit soft  |        44.6 |           19.94 ms |              79.7 |        2.55 ms |
| Weave crisp |        29.5 |           32.90 ms |              74.7 |        1.06 ms |
| Weave soft  |        17.5 |           57.25 ms |              67.3 |       12.99 ms |

Pixel 4 runs Android 13 / V8 / Impeller OpenGLES with an active 60 Hz display mode,
despite supporting 90 Hz. Its Vulkan initialization falls back under the engine's
existing Adreno 650-and-older driver rule. The Metal texture/pass optimizations are not
enabled on this backend. Soft Bloom and Weave spend 11.39 / 5.43 ms in CPU submission
versus 40.50 / 57.25 ms on the raster thread. The measured raster cost dominates their
frame budget. The captured Android thermal service status remains zero.

iPhone 14 Pro runs iOS 27.0.1 / the patched Hermes interpreter / Metal, reports 120 Hz,
and retains the Metal optimization. Soft Bloom and Weave exceed the 8.33 ms raster
budget. Crisp scenes additionally show periodic 28–32 ms callback gaps while their build
and raster durations are short. Those gaps establish a separate pacing problem; these
receipts do not identify whether scheduling, collection or another between-frame
operation causes it. No GC policy was changed based on this measurement alone.

At screen-fit size, soft Bloom / Weave reach 21.3 / 13.6 FPS on Android (raster scale
1.1273) and 40.0 / 52.8 FPS on iOS (scale 1.2307). These rows have different output
resolutions and are not paired with the fixed-size rows as an optimization comparison.
These are callback FPS and Flutter raster-thread times, not hardware presentation or
individual GPU-kernel measurements. No mobile before/after engine pair, sustained
thermal stress or mobile HTML comparison is claimed. Browser automation rejected the
internal remote-debugging page; the unsuccessful browser setup and log-transfer attempts
are excluded from the native timing aggregates.

Both complete mobile Release gates pass 413 ordinary test bodies. Their binding journals
contain 402 Android Widget cases and 403 iOS cases, including iOS semantics
initialization. They cover 370 selected upstream workers and 78 reference scenes; the
three reference grids remain 22,686 / 33,000 on Android and 23,236 / 33,000 on iOS, with
channel limit 4. Public API, drawing, upstream WPT and adapter hashes remain unchanged.
Engine packaging audits verify the selected binaries and iOS AOT/Hermes closure. Build
helpers now handle physical iOS Release and stale cloned SDK paths; the performance
consumer removes the unused integration-test plugin, and physical iOS test output
reaches the CoreDevice console. Source/product hashes, all raw timings, PNGs, gate
receipts and `verification.json` are retained in
`.local/canvas-native/afterglow/mobile/`. No changes were committed or pushed.

## Findings on macOS arm64 / V8

The V8 GC epilogue used to request a full joint Dart/V8 pass for intermediate GC phases.
A Canvas animation's ordinary allocations could repeatedly requeue whole-heap
collections. The engine now requests that pass only after a completed major V8
collection; the existing idle collector and active-job protection remain in place. All
45 runtime/ownership/GC checks pass with the revised engine.

Gradients also incorrectly retained their creation transform. They now use the draw-time
transform, including the local paint matrix required by baked current-path geometry. Six
unchanged upstream transform workers join the selected WPT suite. All 390 Canvas/UI
checks pass, with original WPT thresholds unchanged.

The initial 60 Hz, DPR 1, 880 × 480 run measured HTML at 58.99–60.01 FPS and Flax
Release at 59.01–60.00 FPS across six cases. Native CPU submission p50 was 0.64–1.26 ms,
including encoding and commit; browser submission was 0.30–0.50 ms and excludes deferred
GPU completion. Native raster p50 was 1.58–3.56 ms for crisp scenes and 7.31–15.88 ms
for soft scenes. Debug remained substantially slower for soft Bloom/Weave.

Earlier baseline runs used 120 Hz; those FPS values must not be compared directly with
the initial 60 Hz run. The receipts retain refresh/lifecycle metadata and raw
timestamps. That native Release window was visible but reported `inactive`; the Debug
window reported `resumed`. These measurements do not establish 120 Hz Release parity,
mobile performance, or identical generic system-font rasterization. Per-operation
filters and overlapping screen blends remain the main measured native raster cost.
Merging effects across operations would change Canvas semantics and is not part of this
fix.

## Metal soft-mode optimization at 120 Hz

The Gaussian blur renderer now records its downsample, vertical and horizontal passes
into one Metal command buffer instead of three. This reduces submission overhead while
keeping all passes, intermediate textures, sampling and RGBA8 rounding. Other backends
retain the older Adreno workaround. No Canvas command, JS API or example drawing code
changes, and filters still apply per operation.

Two runs per variant on the same M2 Max / 120 Hz display, DPR 1 and 880 × 480 produce
the following medians. Both native variants reported `resumed`. Compilation, pixel
export and the other previews were excluded from all timed intervals.

| Soft scene | HTML FPS | Flax before FPS | Flax after FPS | Raster p50 before / after |
| ---------- | -------- | --------------- | -------------- | ------------------------- |
| Bloom      | 109.9    | 61.2            | 71.8           | 16.28 / 13.82 ms          |
| Orbit      | 119.5    | 119.0           | 118.5          | 6.54 / 5.83 ms            |
| Weave      | 120.0    | 77.0            | 85.0           | 12.97 / 11.69 ms          |

Soft-scene raster p50 falls by 10–15%. Crisp scenes remain around 117–119 FPS. All six
phase-zero PNGs are byte-identical in the command-buffer-only pairing; hashes of public
Canvas types, the WPT adapter, original cases and provenance are unchanged. Receipts,
paired PNGs and the report are under `.local/canvas-native/afterglow/soft-120hz/`.

These are animation callback rates and Flutter raster-thread durations, not independent
GPU kernel timings or presentation timestamps. Bloom and Weave remain above the 8.33 ms
/ 120 Hz frame budget: the separate per-operation filters and overlapping composites are
still expensive. This change does not establish mobile or other Apple GPU acceptance.

The real Release/Metal gate also exposed seven existing exact-color failures in the
gradient transform checks. Ordered dithering used a 1/64 amplitude, larger than half an
RGBA8 code value, so pure green could become 254. Using 1/255 preserves the shader's
documented sub-half-step rounding and fixes the exact-color assertions. This separate
quantization correction intentionally changes a few gradient bytes; it does not remove
blur passes, change filter kernels or relax WPT thresholds. The original framework
reproduces the same seven gradient failures. A background-interrupted baseline and a run
where external accessibility enabled semantics during a test are excluded from aggregate
acceptance.

The final engine passes all 390 Canvas/UI checks and all 414 checks in the real
Release/Metal application, including the six exact-color upstream transform workers and
all 78 reference scenes. Original WPT sources, adapters and thresholds are unchanged.
The standalone interactive example test also passes.

## Identity-copy removal and stage ablation

Small Metal decal blurs can sample the existing texture during their vertical pass
instead of first copying it into an equally scaled texture with transparent padding. The
fast path requires integer-aligned identity UVs, no bounds or mipmaps, a nonzero
vertical kernel and a matching RGBA8, BGRA8 or XR10 unorm format. Decal sampling
supplies the same transparent gutter. The directional kernels, output bounds,
intermediate rounding and source bitmap layers remain in place. Other inputs use the
existing copy.

The ordinary view uses XR10 intermediates on this display, while explicit Canvas PNG
snapshots use RGBA8. The final copy change produces byte-identical phase-zero PNGs for
all six cases, including a repeated run. Native display captures of soft Bloom and Weave
also have zero differing Canvas pixels. Removing the source materialization layer
changed antialiasing/rounding and was discarded. A hardware-screen experiment changed a
few crisp pixels without a meaningful raster improvement and was also discarded.

Fresh paired runs on the same 120 Hz / DPR 1 / 880 × 480 setup give these medians:

| Soft scene | HTML FPS | Flax before FPS | Flax after FPS | Raster p50 before / after |
| ---------- | -------- | --------------- | -------------- | ------------------------- |
| Bloom      | 104.6    | 71.4            | 77.4           | 13.79 / 12.84 ms          |
| Weave      | 116.6    | 86.8            | 95.5           | 11.46 / 10.30 ms          |

Raster p50 falls by 6.9% and 10.1%. Callback intervals over 12.5 ms fall from 66.8% to
54.6% for Bloom and from 38.2% to 25.2% for Weave. Both remain above the 8.33 ms budget.
Crisp scenes remain around 118 FPS. These measurements use the current baseline after
the earlier command-buffer and dither fixes; they do not reuse the older 61/77 FPS
baseline. Browser results are fresh local runs, rather than an assumed 120 FPS ceiling.

Separate one-round diagnostic variants isolate the remaining costs:

| Variant                      | Bloom raster p50 before / after | Weave raster p50 before / after |
| ---------------------------- | ------------------------------- | ------------------------------- |
| Saturate, screen             | 8.63 / 8.66 ms                  | 6.49 / 6.53 ms                  |
| Blur, screen                 | 13.99 / 12.89 ms                | 11.55 / 10.42 ms                |
| Blur + saturate, source-over | 11.13 / 10.03 ms                | 9.12 / 8.11 ms                  |

The source-over variant changes composition only for diagnosis. The final example
retains screen. These are whole-variant raster timings and are not additive independent
GPU kernel durations. Adding saturate to blur has little observable extra cost here;
retaining the screen composition layers is more expensive. A separate Metal trace of the
interactive Bloom preview attributes about 50% of depth-zero fragment execution to
layers/scene work, 13% to the identity copy and 37% to the directional kernels. Encoder
order identifies the three-pass Gaussian groups. Trace overhead and preview density
exclude this capture from the FPS aggregates.

The final paired Debug and Release engines pass 390 Canvas/UI checks and 414 checks in
the real Release/Metal application. Public types, example drawing code, original WPT
workers, adapters and thresholds have unchanged SHA-256 hashes. The retained evidence
and interactive report are under `.local/canvas-native/afterglow/stages-120hz/`,
including two rounds per full-workload variant, ablation overrides, compact GPU
intervals, engine source/product hashes and both pixel paths. Mobile and other Apple GPU
performance are not established by this Metal-specific change.

## Child-layer command continuation

Rectangular scissor-only clips now wait until the first draw to open their render pass.
The first draw installs the saved scissor; clipped full-surface fills are excluded from
the clear-color optimization. A plain child layer can then finish its encoder and
continue into an unused offscreen parent in the same Metal command buffer. Filters and
advanced blends submit their dependencies before sampling. Other backends retain
separate submissions.

This keeps every layer, MSAA resolve, pixel grid, intermediate format and per-operation
blend. It removes a separate command-buffer submission for eligible parent/child copies.
A separate attempt to remove MSAA from filter input copies kept PNGs identical but gave
no meaningful speedup, so that option and its DisplayList metadata were removed.

The first-draw regression covers rectangular clips, restored clips, plain/filtered fills
and source-over/screen/copy composition with exact RGBA assertions. The final paired
engines pass 391 Canvas/UI checks and 415 checks in the real Release/Metal app; the
original WPT workers, adapter, thresholds, public types and drawing source retain their
hashes. The three Metal reference grids remain at 22,642 / 33,000 differing pixels with
the original channel limit 4.

Two fresh rounds per variant, on the same 120 Hz / DPR 1 / 880 × 480 setup:

| Soft scene | HTML FPS | Flax before FPS | Flax after FPS | Raster p50 before / after |
| ---------- | -------- | --------------- | -------------- | ------------------------- |
| Bloom      | 108.2    | 77.6            | 86.3           | 12.70 / 11.34 ms          |
| Weave      | 120.0    | 95.5            | 104.2          | 10.36 / 9.37 ms           |

Raster p50 falls by 10.8% and 9.5%. Intervals over 12.5 ms fall from 54.2% to 38.2% for
Bloom and from 25.6% to 14.7% for Weave. Crisp cases remain around 118 FPS. Neither soft
case consistently meets the 8.33 ms budget. Native commit/decode p50 stays around 0.71
ms / 0.49 ms; the measured saving is on the raster thread. These are whole-frame
encoding/submission timings, not isolated GPU kernel durations or independent
presentation counts.

The final SDK repeats all six byte-identical phase-zero PNGs. Bloom and Weave display
captures at phase 0 and 1.25 have zero differing pixels. One inactive-window run is
excluded. The baseline, candidate, final SDK and fresh HTML rounds, source/product
hashes, original-threshold logs and interactive report are in
`.local/canvas-native/afterglow/layers-120hz/`. Mobile and other GPU performance are not
measured by this continuation.

## Chromium and Skia source review

The review pins Chromium at
[`a06df90f02e3`](https://github.com/chromium/chromium/blob/a06df90f02e3a58467259afc0e0655b9c82e8545/third_party/blink/renderer/modules/canvas/canvas2d/canvas_2d_recorder_context.h)
and Skia at
[`c5f99538cbe2`](https://github.com/google/skia/blob/c5f99538cbe23771df38b7c3e63a2beb76256681/src/core/SkBlurEngine.cpp).
These are upstream implementation options; this review does not establish that the
measured browser used those revisions or a particular Ganesh/Graphite backend. One
saveLayer can still require several backend passes; the comparison concerns recording,
scheduling and resource lifetime.

| Upstream mechanism                                                                                                                                                                                                                                                                                                                                                                 | Application to Flax                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Blink's `CompositedDraw` puts the foreground filter and global blend on one saveLayer.                                                                                                                                                                                                                                                                                             | Review filter-to-composite scheduling and redundant materialization together. Flax's source layers also enforce pixel quantization, so removing a layer requires preserving its rounding boundary.                 |
| [Skia's blur effects](https://github.com/google/skia/blob/c5f99538cbe23771df38b7c3e63a2beb76256681/src/core/SkKnownRuntimeEffects.cpp) use fixed loop limits selected by kernel size. [Ganesh](https://github.com/google/skia/blob/c5f99538cbe23771df38b7c3e63a2beb76256681/src/gpu/ganesh/GrBlurUtils.cpp) also selects a one-pass 2D convolution for sufficiently small kernels. | A specialized loop can retain the existing samples. A one-pass convolution removes intermediate texture rounding and needs separate precision validation. Neither implies that every small CSS blur uses one pass. |
| [Skia's screen processor](https://github.com/google/skia/blob/c5f99538cbe23771df38b7c3e63a2beb76256681/src/gpu/ganesh/effects/GrPorterDuffXferProcessor.cpp) supports fixed-function blending.                                                                                                                                                                                     | The previous hardware-screen probe changed crisp pixels by one code value without a useful throughput gain. Keep the accepted blend path until its precision contract is preserved.                                |
| [Graphite's resource cache](https://github.com/google/skia/blob/c5f99538cbe23771df38b7c3e63a2beb76256681/src/gpu/graphite/ResourceCache.cpp) looks up resource keys, and [scratch tracking](https://github.com/google/skia/blob/c5f99538cbe23771df38b7c3e63a2beb76256681/src/gpu/graphite/ScratchResourceManager.cpp) excludes textures with pending consumers.                    | Exact-key lookup is safe to test while retaining Flax's no-reuse-within-frame rule. Earlier texture reuse needs explicit dependency tracking; reference counts alone are insufficient.                             |

A four-second Time Profiler capture of the baseline Weave preview contains 2,218
raster-thread samples. 888 include `RenderPassMTL` construction and 344 include a
`RenderTargetCache` method; 109 include cache retirement. These inclusive categories
overlap and include driver/allocation work. They are not exclusive lookup costs or GPU
kernel timings.

A separate Metal System Trace of the restored interactive Weave preview records 78,652
unique render encoders over a 4.389-second encoding-event window. This preview uses a
952 × 519 display crop and a user-moved light, rather than the fixed 880 × 480 timing
fixture. GPU execution intervals associated with those command buffers have a union of
1.085 seconds, counting overlapping Vertex/Fragment/Compute intervals once. Trace
instrumentation affects timings, and this union is not a hardware utilization counter.
The trace's frame-number field is not used as a display-frame count; no FPS or
per-display-frame encoder count is derived from it. The capture reinforces the need to
measure pass orchestration alongside shader work.

Three bounded probes were removed after measurement: a constant-index three-tap Metal
blur, in-place cache retirement, and a per-frame hash index of unused targets. The last
probe rebuilt the cache's allocation site as well as its implementation. The blur probe
had a small apparent Weave gain, but the interleaved controls did not establish a
reliable overall benefit. The cache changes also failed to improve throughput. Valid
controls themselves ranged from 86.0 to 89.2 FPS for soft Bloom and 103.5 to 106.6 FPS
for soft Weave. Two inactive-window samples and a profiler-overlapped blur round are
excluded. The six phase-zero PNGs remain byte-identical in every valid probe.

All three source changes were restored exactly. The accepted command-buffer and
identity-copy optimizations above remain. The next high-value experiment is deferred
filter/pass scheduling with explicit source quantization boundaries, measuring encoder
creation and intermediate textures together. Native C++ dispatch reduces bridge work;
browser Canvas also runs native rendering code, and the number and scheduling of GPU
passes still determine frame cost.

Source snapshots, probe code, interleaved controls, the reduced CPU profile and
verification receipts are in `.local/canvas-native/afterglow/effects-120hz/`. The
rebuilt restored SDKs pass all 391 Canvas/UI and 415 real Release/Metal checks. Public
API, drawing and original WPT hashes and thresholds remain unchanged. No new performance
patch was retained, committed or pushed.

## Filter-to-output pass scheduling

The paired Metal renderer now resolves supported blur/color-matrix chains before opening
an unused output encoder. Filter snapshots and the final color-filter output share a
command buffer. The source retains its early submission, and screen consumes the
completed output in its original order. Unsupported filters, previously used output
passes and other backends retain the existing path. The isolated build also recompiles
the ContentContext allocation site in AiksContext when adding the scoped buffer field.

This borrows the upstream approach of scheduling a complete composited operation with
explicit dependencies. It does not collapse its numerical stages: source bitmap and
filter-input layers, both directional blur outputs, color-filter output, sampling
transforms, MSAA resolves and render-target formats remain unchanged. No inter-operation
texture reuse or fixed-function screen replacement is introduced.

A separate instrumented run counts successful Metal command-buffer and render-encoder
creation between main-window Canvas replays. These runs are excluded from timings. Each
scene has at least 150 replay samples with the same six-scene workload:

| Soft scene | Command buffers before → after | Render encoders before → after |
| ---------- | -----------------------------: | -----------------------------: |
| Bloom      |                      228 → 156 |                      376 → 376 |
| Orbit      |                        96 → 68 |                      156 → 156 |
| Weave      |                      177 → 122 |                      291 → 291 |

The filter/output batch removes one command buffer per filtered operation: 72 for
Bloom's fill/stroke pairs, 28 for Orbit and 55 for Weave. A terminal texture-alias probe
never met its full-size/aligned/unclipped safety conditions in the captured workloads
and was removed. It supplies no encoder reduction. Grouping the source with the whole
filter/output chain regressed Bloom and Weave and was also removed; the retained path
submits the source first.

Fresh 120 Hz results use four uninstrumented controls, three retained-renderer runs and
two new HTML runs. All native runs report resumed, 120 Hz and DPR 1. Backing pixels,
phase advancement, warmup, measured frames and readback exclusion remain as specified
above. Values are medians of per-round statistics:

| Scene       | HTML FPS | Flax before FPS | Flax after FPS | Flax raster p50 before → after |
| ----------- | -------: | --------------: | -------------: | -----------------------------: |
| Bloom crisp |    120.0 |           118.0 |          118.0 |               3.294 → 3.318 ms |
| Bloom soft  |    102.7 |            80.7 |           79.8 |             12.338 → 12.333 ms |
| Orbit crisp |    119.5 |           118.0 |          118.0 |               1.434 → 1.482 ms |
| Orbit soft  |    117.5 |           118.5 |          119.0 |               4.766 → 3.918 ms |
| Weave crisp |    119.5 |           118.0 |          119.0 |               2.820 → 2.796 ms |
| Weave soft  |    119.0 |            97.8 |           98.5 |               9.996 → 9.997 ms |

Bloom/Weave FPS changes remain within observed run variation; their gap to HTML has not
meaningfully narrowed. Orbit's soft raster p50 falls 17.8%, with both native variants
already near the refresh cap. One valid retained Bloom-crisp sample reaches 112.4 FPS
and remains included in the aggregate. Fewer submissions do not remove the dominant
encoder/pass work, and raster duration is not a pure GPU execution timer.

All 36 native PNG comparisons across the repeated controls and retained runs are exact.
HTML and Flax remain visually similar rather than byte-identical; RGB mean absolute
differences are 1.53 codes for soft Bloom and 1.73 for soft Weave on the 0–255 scale.
Those descriptive scene differences are not a new compatibility threshold. The original
WPT workers, adapter, thresholds, public types and drawing source are unchanged. The
added regression compares resolved translucent images through nested blur/matrix and
screen layers, including integer offset, trailing drawing and clipped-output cases.

All four actual display comparisons (Bloom/Weave at phases 0 and 1.25) are also exact,
including the original XR10 render path. The final SDKs pass 392 Canvas/UI and 416 each
in real Debug/Metal and Release/Metal applications. Counters, raw timings, PNGs,
source/build hashes and the interactive comparison are retained under
`.local/canvas-native/afterglow/schedule-120hz/`. This continuation does not establish
mobile/other-GPU performance, physical presentation timestamps, full browser conformance
or a 120 FPS result for soft Bloom/Weave. No changes are committed or pushed.

## Reusing resolved filter inputs

The Metal renderer can now pass an already-resolved source texture to an unused
offscreen filter-input layer without opening a second copy encoder. It retains the
source texture and its integer offset. Any subsequent draw materializes the original
copy first, preserving draw order and the original logical target bounds.

The source must have unit opacity, no extra effects, matching formats, complete scissor
coverage and source/source-over composition onto a transparent unused target. Equal
extents can alias directly. Different extents require a translation-only, unit-opacity
source-over parent whose filter chain preserves transparent black: decal blur without
downsampling and supported color matrices. Other filters, rescaling, clipping and
previously used parents keep the existing path. The source resolve, both directional
blur outputs, color output and screen blend retain their quantization. No
cross-operation reuse, early cache retirement or reduction in target allocation count is
claimed.

Independent successful-creation counters now show actual render-pass/encoder removal:

| Soft scene | Command buffers before → after | Render encoders before → after |
| ---------- | -----------------------------: | -----------------------------: |
| Bloom      |                      156 → 156 |                      376 → 303 |
| Orbit      |                        68 → 68 |                      156 → 127 |
| Weave      |                      122 → 122 |                      291 → 237 |

These are medians across at least 150 main-window replays per scene. Weave varies from
237 to 239 encoders as clipped sources fall back. Bloom removes 72 filter-input copies
and one common marker copy. The counters run separately from timing.

Four uninstrumented controls, four final-renderer runs and three fresh Chromium/Edge 155
HTML runs use the same 120 Hz, DPR 1, 880 × 480 workload. All native runs are resumed;
each case warms up for 30 frames and measures 120, without readback, concurrent builds,
tests or profiling. All valid samples are retained. Medians of per-round statistics:

| Scene       | HTML FPS | Flax before FPS | Flax after FPS | Flax raster p50 before → after |
| ----------- | -------: | --------------: | -------------: | -----------------------------: |
| Bloom crisp |    119.0 |           118.5 |          118.0 |               3.656 → 3.719 ms |
| Bloom soft  |    115.2 |            85.5 |          103.9 |              11.520 → 9.306 ms |
| Orbit crisp |    119.0 |           118.0 |          118.0 |               1.654 → 1.506 ms |
| Orbit soft  |    117.0 |           118.0 |          118.0 |               4.021 → 3.759 ms |
| Weave crisp |    117.0 |           118.0 |          119.0 |               3.364 → 3.302 ms |
| Weave soft  |    119.1 |           103.5 |          118.5 |               9.454 → 7.141 ms |

Soft Bloom/Weave raster p50 falls 19.2% / 24.5%. Intervals above 12.5 ms fall from 39.9%
to 14.3% and 15.5% to 0.8%. Weave approaches HTML's callback cadence; Bloom still
exceeds the 8.33 ms raster budget. These FPS values do not independently measure
physical presentation, and raster duration includes CPU encoding/submission rather than
isolated GPU execution. HTML CPU call return excludes deferred GPU work.

All 42 repeated native PNG comparisons and four actual display pairs (Bloom/Weave at
phases 0 and 1.25) are exact. The latter exercise the normal XR10 path through an 8-bit
RGB screenshot, not full HDR conformance. HTML/Flax RGB mean absolute differences remain
1.53 / 1.73 codes for soft Bloom/Weave; these are descriptive, not acceptance
thresholds. The regression also covers a previously painted parent and half-pixel
scissor coverage. Final SDKs pass 392 Canvas/UI checks and 416 each in real Debug/Metal
and Release/Metal apps. Original WPT/API/drawing hashes are unchanged; the three
reference grids remain 22,642 / 33,000 with channel limit 4. Raw timings, counters,
source/product hashes, pixels and the interactive report are in
`.local/canvas-native/afterglow/input-reuse-120hz/`. Mobile and other GPUs are not
remeasured. Changes remain local and uncommitted.
