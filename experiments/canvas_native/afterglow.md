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

The same mobile runner selects Debug for the simulator and Release for physical devices.
Simulator launches use Hermes, the paired Canvas framework and the same three-run,
six-scene, two-size workload below. Results use `debug` filenames and are copied from
the simulator's app data container. Console routing preserves simulator Flutter logs;
only physical iOS routes prints to CoreDevice stdout. Mobile timing does not enable the
desktop Debug timeline recorder.

The current iPhone 18 Pro / iOS 27.0 simulator runs on an Apple M2 Max host with macOS
27.0.1. It reports 60 Hz, DPR 3 and a 1206 × 2622 view. The separate macOS Flax example
was closed before sampling. All three launches remained resumed and produced 36 complete
rows / 4,320 measured frames without in-frame pixel readback. All 12 repeated phase-zero
PNG comparisons are pixel-identical. At 880 × 480, medians across the three launches
are:

| Scene       |  FPS | CPU submission p50 | Raster p50 |
| ----------- | ---: | -----------------: | ---------: |
| Bloom crisp | 18.0 |            7.19 ms |   51.51 ms |
| Bloom soft  |  8.4 |            8.39 ms |  114.18 ms |
| Orbit crisp | 31.6 |            3.01 ms |   25.50 ms |
| Orbit soft  | 22.3 |            3.90 ms |   42.52 ms |
| Weave crisp | 27.1 |            3.29 ms |   33.17 ms |
| Weave soft  | 15.3 |            5.03 ms |   61.98 ms |

Soft Bloom ranges from 8.05 to 8.45 FPS; soft Weave ranges from 13.01 to 16.15 FPS. At
screen-fit scale 1.2614, they reach 7.8 / 13.4 FPS with raster p50 124.34 / 71.15 ms.

The engine's actual Impeller compile command uses `-O0` and `IMPELLER_DEBUG=1`. Its
existing `DeviceSupportsFramebufferFetch` implementation explicitly returns false for
iOS simulators. Consequently advanced blends, including screen, use `FlipBackdrop` and
intermediate textures instead of framebuffer-fetch blending. The existing guard remains
intact. These are confirmed configuration and path differences; the measurements do not
isolate each one's share of the raster cost.

The refreshed simulator correctness gate passes 413 ordinary test bodies, including 370
selected upstream workers and 78 reference scenes; all 403 Widget journal entries
succeed. The three grids each remain 23,171 / 33,000 at channel limit 4. The API,
upstream WPT, adapter and drawing hashes are unchanged, and the gate and benchmark
package the same verified engine. Raw samples, PNGs and
`verification-ios-simulator.json` live in `.local/canvas-native/afterglow/mobile/`. The
installed test apps and temporary projects are removed; the existing simulator and
maintained builds are preserved.

Simulator measurements use the Mac's CPU/GPU and Flutter Debug mode. They validate the
simulator path and help diagnose frame costs; they do not predict physical iPhone
Release performance or establish a mobile browser comparison.

## iOS simulator frame pacing and joint GC

The pacing fixture isolates scheduling from the expensive Debug renderer. It uses 128 ×
128 backing pixels, 30 warmup and 360 measured frames per case, with pure Dart frame
callbacks, empty JS rAF, two Canvas fills, Canvas plus 8,192 temporary JS objects per
frame, and a final Dart control. No timed case reads pixels. All runs enable the same
Dart/Embedder/GC timeline streams and keep the app resumed on the 60 Hz simulator.

```sh
node experiments/canvas_native/afterglow_bundle.mjs --pacing
FLAX_CHECK_TARGET=ios-simulator-arm64 FLAX_CHECK_DEVICE=<simulator-udid> \
  PACING_LABEL=frame-aware dart run experiments/canvas_native/run_afterglow_mobile.dart --pacing
python3 experiments/canvas_native/analyze_pacing.py \
  .local/canvas-native/afterglow/pacing/frame-aware --check-frame-aware
```

Three launches per policy, five cases per launch, provide 16,200 measured frames in
total. Median callback FPS across the three launches:

| Case                            | Original | Old-generation notifications only | Frame-aware idle collection |
| ------------------------------- | -------: | --------------------------------: | --------------------------: |
| Dart frames                     |    58.69 |                             57.29 |                       60.00 |
| Empty JS rAF                    |    55.09 |                             54.26 |                       60.00 |
| Canvas fills                    |    55.52 |                             56.39 |                       60.00 |
| Canvas with allocation pressure |    32.43 |                             54.95 |                       56.54 |
| Dart frames after JS            |    57.14 |                             56.39 |                       60.00 |

The original callback escalated every Hades young collection to a full Dart/Hermes
collection. The retained allocation-pressure traces contain 189 full collections; the
final policy contains 12 necessary old-generation pressure collections. Original full
collections typically took 50–80 ms in this Debug engine, versus about 0.3 ms for the
lightweight Canvas callback. Independent one-second idle requests also interrupted
animation, even with no JS allocation. Separating completed old-generation events
removes the pressure amplification; checking recent Flutter frames removes idle timer
interruptions. Both changes preserve the existing fixed-point collector.

Across 1,080 measured frames per case and policy, callback gaps over 25 ms fall from 37
to 2 for Canvas fills and from 530 to 30 for allocation pressure. Empty rAF falls from
34 to 1. These counts describe the diagnostic workload, not WPT tolerances or a promise
of zero pauses. Pressure-driven full collections remain synchronous. All final animation
traces have zero timer-triggered full collections, exercise the frame deferral, and
record idle collection resuming after animation. The JS-pressure case still exercises
old-generation collection.

The VM timeline is a bounded ring; some case prefixes are overwritten. Attribution
counts use only complete intervals in the retained trace window, while FPS and gap
counts use all 360 samples. The analysis rejects traces covering less than half a case
and checks the frame/pressure/idle conditions above. Receipts and raw traces are under
`.local/canvas-native/afterglow/pacing/{baseline,major-only,frame-aware}/`. This
diagnoses the simulator GC policy; physical iPhone Release and its earlier 120 Hz gaps
require their own follow-up measurement. It does not remove Bloom/Weave's Debug raster
cost.

The final engine passes 413 Canvas tests plus all 14 existing joint-GC cases in an
independent iOS 27.0 simulator. The 417 Widget journal entries all succeed; the test
counter is 431 including setup/teardown. This includes 370 upstream workers, 78
reference scenes, live roots, active-job protection, three-session marking, JS/Dart
pressure, discarded wrappers and 1,000 rootless bridge cycles. All three reference grids
remain 23,171 / 33,000 at channel limit 4. The six protected API/WPT/drawing hashes are
unchanged. An earlier run interrupted by another app taking the shared simulator's
foreground is retained separately and excluded from acceptance. The independent app has
the same audited engine hash as the final pacing runs.

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

## Pixel 4 GLES input reuse

The Android continuation uses a physical Pixel 4, Android 13, Adreno 640 and Release/AOT
with V8. The engine selects Impeller OpenGLES. Its GL reactor executes render operations
in order; the Metal command-buffer batching paths remain unchanged. Temporary counters
record executed GLES render passes separately from timing. The following medians include
the final onscreen pass; the removed passes are offscreen source-to-input copies.

| Soft scene | Physical raster scale | Original passes | Retained passes | Copies removed |
| ---------- | --------------------: | --------------: | --------------: | -------------: |
| Bloom      |                 1.000 |             442 |             441 |              1 |
| Weave      |                 1.000 |             340 |             336 |              4 |
| Bloom      |                 1.127 |             442 |             435 |              7 |
| Weave      |                 1.127 |             340 |             340 |              0 |

GLES reuses a resolved source only when its extent and origin exactly match the unused
input target. Existing opacity, format, blend, clipping and target-use checks still
apply. Ending the source pass retains its MSAA resolve; subsequent drawing materializes
the deferred copy. Blur, color processing and each screen blend keep their original
order and quantization boundaries. Target allocations are unchanged.

Allowing differently sized sources to supply transparent padding removed 73/56 passes
from the 1x Bloom/Weave cases, but changed their filter sampling. Soft-scene PNGs
differed by up to 3/2/4 channel codes for Bloom/Orbit/Weave, despite passing the
original WPT suite. This candidate is rejected. Restricting GLES to identical extents
restores exact PNG equality for all six scenes. Metal retains its previously validated
padding path.

The Android measurement app locks portrait orientation, waits for portrait metrics and
rejects viewport changes during sampling. An initial run with a different screen-fit
size and incomplete output is excluded. The rendering example and its JS drawing code
are unchanged. The existing layer regression now has an asymmetric image and a shifted
source followed by another draw, covering texture orientation and copy materialization
or fallback without introducing a tolerance.

Three crossed, uninstrumented A/B rounds run in order A1, B1, B2, A2, A3, B3. A is the
original engine and B is the same-extent reuse above; the APKs have identical Dart AOT,
JS assets and all other payload entries. Each launch measures 12 cases, with 30 warmup
and 120 measured frames per case, without pixel readback during animation. The portrait
viewport is 1080 x 2214 at DPR 2.75. The initial display mode and recorded vsync
intervals are consistent with 60 Hz. The following medians describe these 8,640 measured
frames; they do not establish a causal speedup:

| Soft scene | Raster scale | Original FPS | Reuse FPS | Original raster p50 | Reuse raster p50 |
| ---------- | -----------: | -----------: | --------: | ------------------: | ---------------: |
| Bloom      |        1.000 |        18.63 |     20.10 |           52.110 ms |        48.844 ms |
| Weave      |        1.000 |        17.49 |     17.58 |           57.217 ms |        57.019 ms |
| Bloom      |        1.127 |        16.99 |     16.95 |           58.001 ms |        56.970 ms |
| Weave      |        1.127 |        13.59 |     13.62 |           73.811 ms |        73.715 ms |

Thermal status is normal throughout A1, changes from normal to light throttling during
B1, and is light before and after A2, A3, B2 and B3. Equal thermal severity does not
guarantee equal GPU clocks. Bloom at 1x ranges from 18.02 to 23.79 FPS for A and 18.93
to 23.17 FPS for B; the apparent median improvement is within this variation. Its one
removed copy covers only 196 source pixels. Weave's timings are nearly unchanged.
Gaussian filter passes remain 219 per frame for Bloom and 168 for Weave. This limited
reuse does not remove the remaining per-stroke blur and screen-composition work.

A supplemental B4/A4 pair starts with normal thermal status but both launches finish
with light throttling. A4 also changes cadence to approximately 90 Hz during screen-fit
cases, although the receipt's display mode was captured only at startup. These runs are
retained as evidence and excluded from the timing medians. All 24 fixed-phase PNG pairs
across the four A/B pairs are byte-identical; this does not compare every animation
frame. FPS measures callback cadence, and Flutter raster duration includes CPU
encoding/submission, not isolated GPU time or physical presentation timestamps.

The final uninstrumented engine passes 428 ordinary test executions on the Pixel 4 (432
including suite hooks; 417 distinct result names), including 370 WPT workers and 78
reference scenes. All three filter/shadow/composite reference grids remain 22,686 /
33,000, with the original channel limit 4. The WPT files, JS API implementation and
example drawing code are byte-identical to the branch baseline. Static analysis and diff
whitespace checks pass. Both timed APKs and the final acceptance APK pass the signature,
V8 dependency, Dart AOT and 16 KB alignment audits; the final rebuilt engine matches the
engine used in B runs and acceptance.

Raw timings, thermal observations, executed-pass counters, PNGs, rejected-candidate
differences, binary audits and source hashes are retained under
`.local/canvas-native/afterglow/pixel4-gles-20261023/`; `verification.json`
distinguishes the primary comparison from the supplemental runs. The safe GLES change
removes a few copies without changing the checked pixels, but a substantial or stable
Bloom/Weave speedup is not demonstrated. Other GPUs and iOS are not remeasured. The
retained change is included in the Canvas closeout; see the task record for current
integration status.

## Pixel 4 small-kernel Gaussian optimization

The follow-up retains one additional GLES optimization: three- and four-sample Gaussian
kernels use constant uniform-array indices instead of the dynamic loop. Coefficients,
sample positions and accumulation order are unchanged. Other kernel sizes retain the
loop, and Metal/Vulkan retain the original shader path. This reduces work inside the
existing passes; it does not remove textures, passes or quantization boundaries.

A separate diagnostic build finds 144 directional passes for Bloom and 110 for Weave
using these small kernels, in addition to the common marker. Their directional target
areas total 7.42 / 29.84 million pixels at 1x and 9.33 / 37.75 million at screen-fit
scale. The kernels have three samples at 1x and four at screen-fit scale. This explains
why Weave benefits more from avoiding dynamic indexing. Counters are removed from the
timed and acceptance engines.

The other measured candidates are closed without retaining their code:

| Candidate                                              | Result and decision                                                                                                               |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| Skip the GLES blur-input copy                          | About 4–5% faster in the exploratory Weave run, but scene pixels change by up to three channel codes. Rejected.                   |
| Propagate the color-matrix coverage hint               | Exact checked pixels, but no meaningful reduction in the measured raster cost. Rejected.                                          |
| Bypass screen arithmetic for transparent source pixels | Exact checked pixels, but less than 1% Weave raster improvement in the exploratory run and no consistent wider benefit. Rejected. |

The first coverage-hint experiment accidentally retained an earlier three-sample shader
because a restored file had an older timestamp. Its receipt identifies the combined
variant and excludes it from single-change conclusions. Subsequent restores force
recompilation. The final engine and APKs have matching source/product hashes.

The final A/B uses the previous section's safe same-extent GLES renderer as A and adds
only the small-kernel shader for B. Both APKs have identical Dart AOT, JS and resources.
Six valid launches run in order A1, B1, B2, A2, A3, B3. Every launch starts at normal
thermal severity and skin temperature at or below 34°C; severity is also normal at
completion. Refresh rate is fixed at 60 Hz and checked after every case. Viewport, DPR,
warmup and frame-count guards remain active. No readback occurs during measured frames.
One incomplete B2 attempt lost foreground state to an unrelated Android HMR test; the
whole attempt is excluded and rerun. The runner now waits for active device checks.

Medians of the three per-round statistics, across 8,640 measured and 2,160 warmup
frames:

| Soft scene | Raster scale | Before FPS | After FPS | Before raster p50 | After raster p50 |
| ---------- | -----------: | ---------: | --------: | ----------------: | ---------------: |
| Bloom      |        1.000 |      23.02 |     22.95 |         41.231 ms |        41.333 ms |
| Weave      |        1.000 |      17.58 |     18.40 |         57.011 ms |        54.465 ms |
| Bloom      |        1.127 |      21.56 |     21.37 |         45.163 ms |        45.274 ms |
| Weave      |        1.127 |      13.62 |     14.33 |         73.841 ms |        69.871 ms |

Weave raster p50 falls 4.5% / 5.4%, with callback FPS improving 4.7% / 5.2%. Its FPS
ranges do not overlap between A and B at either scale. Bloom and Orbit show no stable
benefit; all twelve case results and ranges are retained in the verification receipt.
The Pixel 4 still does not reach 60 FPS in the heavy soft scenes. GPU clocks are not
locked, FPS measures callback cadence, and Flutter raster duration includes CPU
encoding/submission rather than isolated GPU execution.

All 36 fixed-phase A/B PNG pairs are byte-identical: each pair of launches checks six
880 x 480 logical snapshots and six 992 x 542 repaint-boundary captures at screen-fit
scale. These captures occur after timing and do not certify every animation frame or
physical display presentation. The final Release/V8 engine passes 428 ordinary test
executions, 432 including suite hooks, with 370 WPT workers and 78 reference scenes. The
three reference grids remain 22,686 / 33,000 with channel limit 4. JS API, drawing, WPT
worker, adapter and threshold sources are unchanged. Static analysis, whitespace, APK
signature, V8 closure, AOT and 16 KB alignment checks pass.

Raw results, rejected-candidate evidence, source/build audits and reproduction helpers
are in `.local/canvas-native/afterglow/pixel4-gles-complete-20261023/`. Temporary APKs
and binary copies are removed after verification; maintained engine products are
retained. The phone's original refresh settings and diagnostic property are restored,
and only the temporary measurement/test apps are removed. Other GPUs and iOS are not
remeasured. The retained change is included in the Canvas closeout; see the task record
for current integration status.

## Closeout: conservative source reuse

The final exact layer regression adds an asymmetric translucent image and shifted
geometry. Omitting a source-to-input copy on Metal changed 39 channel values. A second
comparison confirmed that flattening the source layer is not a valid exact oracle: that
removes a quantization boundary even without the optimization.

The retained path now requires identical texture origins/extents and a clip that fully
contains the source. Metal also requires lossless unorm source and parent attachments;
GLES retains its uncompressed unorm path. Differently sized padding reuse is removed.
The exact reference materializes an initially transparent parent before restoring the
same child, with the same clip and layer stack. The same AOT application fails on the
earlier renderer and passes with these guards, without changing a tolerance.

Earlier Metal input-reuse FPS tables document that experiment, not the final
conservative renderer. The small-kernel GLES optimization remains. No new 120 Hz
performance claim is made in closeout; preserving the drawing result takes priority over
retaining the omitted copies.

## Post-integration 120 Hz remeasurement (2026-10-24)

Flax `main` at `7445d569` uses the final Canvas engine artifact built at `ff9c455fe4f`.
The engine checkout gained the independent FFI commit `7073a170189` during preparation;
its Impeller sources are unchanged, and that FFI change is not included in this
measurement. The maintained engine binary still matches the recorded final Canvas build
hash. Application signing, SDK closure and the loaded engine mapping are audited.

The control recompiles only `canvas.cc` from `56b02f72202`, using the final build's
other objects, shaders and SDK libraries. Both variants run the same Release/AOT
application and JS assets. This isolates the final source-reuse safety change without
altering maintained source or binaries. The control is diagnostic: it retains the unsafe
behavior rejected by the exact asymmetric-layer regression.

Apple M2 Max / macOS 27.0.1 and Edge/Chromium 155 use 120 Hz, DPR 1 and the same 880 ×
480 workload. Three runs per renderer and three HTML runs retain 54 scene rows / 6,480
measured frames and 1,620 warmup frames. Every native row reports resumed, 120 Hz and
complete frame timing. Each launch checks for active compilation; the known-busy
calibration, an incomplete startup and inactive-window attempts are excluded. All valid
formal runs are retained, including a 115.2 FPS control Bloom-crisp run. Values are
medians of per-round statistics:

| Scene       | HTML FPS | Pre-closeout strategy FPS | Final FPS | Final FPS change | Raster p50 before → final |
| ----------- | -------: | ------------------------: | --------: | ---------------: | ------------------------: |
| Bloom crisp |    119.0 |                     119.0 |     118.0 |            -0.8% |          4.466 → 4.404 ms |
| Bloom soft  |    110.7 |                      92.1 |      74.0 |           -19.7% |        10.434 → 13.783 ms |
| Weave crisp |    118.0 |                     118.0 |     118.0 |             0.0% |          3.000 → 2.992 ms |
| Weave soft  |    120.0 |                     110.7 |      90.4 |           -18.4% |         8.737 → 10.641 ms |

Soft Bloom raster p50 rises 32.1%; soft Weave rises 21.8%. CPU encoding plus commit
changes only from 1.295 to 1.312 ms and 0.878 to 0.903 ms respectively. Intervals above
12.5 ms rise from 30.3% to 62.2% for soft Bloom and 7.6% to 32.8% for soft Weave. The
final renderer remains 33.2% / 24.7% below HTML's soft-scene callback rates. Crisp
behavior is essentially unchanged. Rebase/fast-forward integration adds no renderer
change; the single-file A/B locates this regression in the final reuse restrictions.

All 36 native phase-zero PNGs are byte-identical by scene across both renderers and
repeats. Those six scenes do not invalidate the independent layer-regression
counterexample, so their equality does not justify restoring the unsafe optimization.
Drawing source, JS API, WPT inputs, adapter and original thresholds are unchanged. WPT
and mobile acceptance are not rerun for this measurement-only update.

FPS is callback cadence, and Flutter raster duration includes encoding/submission. New
physical-presentation timestamps, GPU kernel timings and pass/encoder counters are not
captured. Other normal background services remain running; these are local paired
results, not an isolated-laboratory or other-device certification. Raw timing arrays,
engine/source hashes, phase-zero PNGs and the standalone report are retained under
`.local/canvas-native/afterglow/main-120hz-20261024/`.

An additional confirmation after the independent FFI task finished could not keep the
macOS window active. It was stopped without weakening the lifecycle gate and supplies no
additional performance evidence; the table retains the original three valid rounds.

## Soft-layer diagnostics and rejected Canvas-only changes (2026-10-24)

Independent `feat/canvas-soft-layers` worktrees start at Flax `74dab9f76c4` and engine
`7073a170189`. Private diagnostic frameworks replace only the Canvas dispatcher and
Metal command-buffer/render-pass objects. Counters observe successful Metal encoder
creation, successful render-pass creation, command buffers, resolve attachments and the
previous reuse candidates. Every observed pass count equals its encoder count.
Histograms cover all candidates; example geometry logs are capped separately.

The real 1000 × 760 window target and the source/parent texture pairs inspected by the
reuse guard use `B10G10R10A10XR`, with framebuffer fetch enabled. Every candidate fails
both the lossless and unorm8 guards. In 150 view-sized replays per soft scene, 90.2% of
Bloom candidates and 94.4% of Weave candidates also fail the extent/origin guard; 4.6%
of Weave candidates additionally fail exact clip containment. Rejection reasons overlap.
Removing geometric mismatches alone cannot enable reuse on this target.

| Scene       | Render passes / encoders | Command buffers | Resolve attachments | Candidate copies | Reused copies | Attachment pixel extents | Encoder creation CPU |
| ----------- | -----------------------: | --------------: | ------------------: | ---------------: | ------------: | -----------------------: | -------------------: |
| Bloom crisp |                       88 |              84 |                  10 |                2 |             0 |                        — |                    — |
| Bloom soft  |                      376 |             156 |                 226 |               74 |             0 |               22,053,954 |              2.19 ms |
| Weave crisp |                       71 |              67 |                  10 |                2 |             0 |                        — |                    — |
| Weave soft  |                      291 |             122 |                 175 |               57 |             0 |               76,125,432 |              1.77 ms |

Values are medians per view-sized replay. Soft mode adds exactly four render passes per
filtered draw: 72 draws for Bloom and 55 for Weave. Attachment extents are summed over
encoders, not unique texture allocations, shaded pixels or VRAM. Encoder CPU timing is
diagnostic and includes instrumentation under concurrent build load; it is not GPU
execution time or a formal performance result. Enclosing pass setup, including encoder
creation, measures 2.45 / 1.97 ms respectively.

Three Canvas-only candidates retain the source layer and leave renderer reuse guards
unchanged:

| Candidate                                                  | Pixel result                                                                                    | Actual resource result                                                                | Decision                      |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ----------------------------- |
| Round the internal source clip out and align filter bounds | Bloom soft changes 48,080 pixels, maximum channel difference 5; Weave changes 15,334, maximum 3 | Passes unchanged; attachment extents increase                                         | Reject                        |
| Align only filter bounds, keeping the original source clip | All six fixed-phase PNGs are byte-identical                                                     | Passes, buffers and attachment extents unchanged                                      | Remove the ineffective change |
| Defer the final filter chain to the screen layer           | All six fixed-phase PNGs are byte-identical                                                     | Passes unchanged; buffers increase from 156 to 228 for Bloom and 122 to 177 for Weave | Reject                        |

The first row describes example-image differences, not a claimed WPT failure. None of
these candidates meets the combined correctness and performance requirement. The final
Canvas decoder and all upstream renderer sources are restored exactly. All nonempty
Mach-O sections, including code and data, match the pre-experiment framework; rebuild
metadata makes the whole-file signatures differ. No rendering optimization is retained
or credited with a speedup.

The only engine source change is in Flax's own `BUILD.gn`: vendored Apple libffi C files
select GNU C11 after the default strict C11 configuration, so their existing GNU inline
assembly compiles in a fresh worktree. Debug and Release producers build. No vendored or
upstream source is changed.

Final Metal/Release acceptance passes 417 executions, including 370 pinned WPT workers
and 78 reference scenes. All three grids remain 22,642 / 33,000 at channel limit 4.
Canvas command tests pass 21; JS tests pass 35 and Canvas type checks pass. The packaged
and actually loaded framework are audited. API, drawing, WPT worker, adapter and
threshold hashes are unchanged. Mobile acceptance is not rerun.

Raw profiles, rejection histograms, exact-image comparisons, section hashes and build
receipts are retained in `.local/canvas-native/soft-layers-20261024/`.

### Formal 120 Hz comparison after the parallel checks

After both independent checks finish, the same uninstrumented Release/AOT application
and JS asset run three times, alternating with three Edge/Chromium 155 runs. Launch
snapshots contain no active compiler processes. All native rows report resumed, 120 Hz,
DPR 1, fixed viewport and complete timing. The 880 × 480 workload, 30 warmup frames, 120
measured frames, Aurora palette and frame-index phase remain unchanged. All six valid
launches are retained: 4,320 measured and 1,080 warmup frames. No timed frame reads
pixels. Medians of per-round statistics:

| Scene       | HTML FPS | Flax Release FPS |  Flax range | Raster p50 | JS encode + commit p50 |
| ----------- | -------: | ---------------: | ----------: | ---------: | ---------------------: |
| Bloom crisp |    120.0 |            117.0 | 116.1–118.0 |   4.436 ms |               0.936 ms |
| Bloom soft  |    107.4 |             73.6 |   72.1–74.4 |  13.846 ms |               1.260 ms |
| Weave crisp |    119.0 |            118.0 | 117.0–119.0 |   2.717 ms |               0.602 ms |
| Weave soft  |    118.0 |             88.1 |   87.6–90.4 |  10.796 ms |               0.829 ms |

Soft Bloom and Weave remain 31.4% / 25.3% below HTML callback cadence. The result
reproduces the conservative renderer's remaining soft-mode cost; this experiment retains
no Canvas change and demonstrates no speedup. Historical measurements occur in a
different time window and cannot establish a new source-level regression or improvement.
Callback cadence and Flutter raster durations still do not measure physical presentation
or isolated GPU kernels.

All 18 native fixed-phase PNGs are byte-identical by scene across the three runs and
match the pre-experiment baseline. All 18 HTML PNGs are also byte-identical by scene.
The selected final framework, packaged framework and loaded image path are audited;
normalized engine bytes match. The earlier inactive-window attempt and incomplete
counter pilot remain excluded. Sources, original WPT thresholds and acceptance counts
above are unchanged. No commit, push or main integration is performed.

The local report, full six-scene statistics, per-round receipts and PNGs are
`report.html`, `comparison.json`, `verification.json` and `runs/` in the evidence
directory above. Temporary application and diagnostic framework copies are removed after
hashing; the independent engine builds and SDK remain available.

## Canvas-owned intermediate storage (2026-10-24)

The independent worktrees now mark Canvas DisplayLists for lossless RGBA8 intermediate
storage. The replay scope forwards this selection to the existing save-layer and filter
target allocator/cache, then restores the caller's selection. The display target and
ordinary Flutter drawing outside that scope retain their default format. The blur
padding-copy guard compares against the selected intermediate format. No separate pool,
global format override, allocation-geometry change or relaxed reuse guard is added.

Actual Metal diagnostic counts confirm that XR10/lossless rejections disappear. Median
Bloom passes/encoders fall from 376 to 369, and Weave from 291 to 289; command buffers
remain 156 and 122. Newly created texture allocation bytes, measured with Metal
`allocatedSize`, fall from 52,895,744 to 39,436,288 for Bloom and from 15,745,024 to
12,673,024 for Weave (25.4% and 19.5%). Texture counts are unchanged. These byte sums
are per replay, not peak memory, residency or measured bandwidth. Different extents and
fractional clips continue to block most remaining candidates.

The same Release AOT application and drawing assets run three alternating rounds each
with the untouched baseline engine, the candidate engine and HTML. All nine rounds
retain foreground/viewport checks and a one-second external-build monitor. Each case
warms up for 30 frames and measures 120, at DPR 1 and 880 x 480 on a 120Hz display. All
6,480 measured frames and 1,620 warmup frames are retained.

| Soft scene | HTML FPS | Flax baseline FPS | Flax RGBA8 FPS | Baseline / candidate raster p50 |
| ---------- | -------: | ----------------: | -------------: | ------------------------------: |
| Bloom      |    109.0 |              74.0 |           75.6 |              13.646 / 13.506 ms |
| Weave      |    120.0 |              89.8 |           89.8 |              10.698 / 10.576 ms |

The retained benefit is lower allocation bytes and a small Bloom cadence improvement;
the large HTML gap is not closed. Weave has no median cadence gain. Automatic diagnostic
startup produces different timing on both baseline and candidate, so none of its FPS
figures enter the formal comparison. Manual-start diagnostics confirm identical pass,
format and allocation counts. The exact OS/interaction timing contribution remains
unisolated. Flutter raster durations still include encoding/submission and do not
isolate GPU execution.

Release/Metal and Debug/Metal each pass 417 executions, including 370 pinned WPT workers
and 78 reference scenes. The three grids remain 22,642 / 33,000 at channel limit 4.
Command tests (21), JS tests (35), type checks and V8 runtime/joint-GC tests (45) pass.
Two checked-in C++ regression bodies execute in a private real-Metal harness for policy
equality, nested inheritance and restoration; the complete upstream gtest targets are
not built. Restore/composition logic and allocation geometry are byte-identical to the
baseline source. All 36 native PNGs match by scene before/after; all 18 HTML PNGs match
their repetitions. API, drawing, WPT inputs, adapters and thresholds remain unchanged.

Receipts, the full six-scene comparison and images are in
`.local/canvas-native/layer-storage-20261024/`. No mobile rerun, commit, push or main
integration is performed. Temporary app/framework copies are removed after hashing; the
independent engine builds and SDK remain available.

## Deferred Canvas attachments and scratch reuse (2026-10-25)

This comparison starts from the retained quantized-source implementation above. Canvas
Metal/RGBA8 layers capture size, format and clear color without immediately allocating
attachments. The first actual render pass performs the original allocation; metadata
queries and source borrowing leave an unused layer unallocated. The format is captured
before nested DisplayList replay can restore the renderer's format scope.

The rejected second candidate returned a private Gaussian intermediate to the existing
exact-size cache after its final reader's command buffer has been submitted. Only
Metal's tracked resources on the same ordered queue are eligible. The original input,
final output, MSAA targets and depth/stencil targets are excluded. A retained command
buffer prevents reuse while filter/output grouping still has an unsubmitted reader. It
passed pixel and lifetime checks, but Weave was slower in all three paired rounds:
median FPS fell from 110.7 to 107.4 versus deferred allocation alone, and intervals over
12.5 ms rose from 8.4% to 11.8%. Bloom median FPS also fell 1.9%. The reuse code and its
cache, command-buffer and allocator API additions were removed. Only deferred allocation
remains; no GPU lifetime or quantization change is retained.

Separate instrumented frameworks count actual Metal allocations and passes. Their
timings are excluded from the animation comparison. Median counts per 1000 x 760
application replay, containing an 880 x 480 Canvas, are:

| Soft scene | Configuration            | Passes / encoders | Command buffers | Newly allocated bytes | Cached targets |
| ---------- | ------------------------ | ----------------: | --------------: | --------------------: | -------------: |
| Bloom      | Previous implementation  |               302 |             156 |            39,436,288 |            972 |
| Bloom      | Deferred allocation only |               302 |             156 |            34,480,128 |            806 |
| Bloom      | Both candidates          |               302 |             156 |            32,366,592 |            767 |
| Weave      | Previous implementation  |               236 |             122 |            12,673,024 |          528.5 |
| Weave      | Deferred allocation only |               236 |             122 |            11,698,176 |          440.5 |
| Weave      | Both candidates          |               236 |             122 |            10,715,136 |            416 |

Deferred allocation avoids 74 unused targets in Bloom and 55 in Weave per replay. New
allocation bytes fall 12.6% and 7.7%; this is the sum of actual Metal `allocatedSize`,
not peak resident memory or GPU bandwidth. Pass and encoder counts remain unchanged. The
rejected reuse candidate supplied another 11 and 18 cache hits respectively, without
reducing passes or improving cadence.

Release/Metal and Debug/Metal each pass 417 executions at the original WPT thresholds.
All three composite grids remain at 22,642 / 33,000 with channel limit 4. Six diagnostic
scene pairs and 16 viewport pairs (two soft scenes, two phases and four scales) are
byte-identical. After removing reuse, the final Debug and Release builds each pass 417
executions again, and all 16 viewport pairs remain byte-identical. Four checked-in C++
test bodies run in the private Metal harness; full upstream gtest targets are not built.
The removed reuse candidate also passed its separate lifetime regression.

Two Debug attempts are rejected: one timed out and exposed a false-positive success
marker in the desktop launcher; another acquired an accessibility handle while its
window was being inspected. The launcher now rejects test-runner failure records even
with a success marker and exit code zero. Its three tests pass. The same Debug app
passes all 417 executions without inspecting its accessibility tree during the suite;
test timeouts and assertions are unchanged.

The first 12 valid formal 120 Hz rounds contain three alternating rounds each of the
previous implementation, deferred allocation, both candidates, and HTML. Deferred
allocation's median Bloom / Weave FPS was 91.5 / 110.7 versus the previous 91.5 / 109.8
and HTML's 114.3 / 120.0. The separate confirmation stopped after three valid rounds
when the branches were synchronized with V8-only main. These samples remain historical
and are excluded from the completed post-sync comparison below. All variants within each
phase share the same AOT and JS, without timed pixel readback. Evidence is in
`.local/canvas-native/lazy-targets-20261025/`; no mobile rerun or commit was performed.

## Quantized source bitmap as filter input (2026-10-25)

The paired worktrees retain a narrower Metal optimization on top of the RGBA8 storage
policy. An unused, transparent Canvas filter-input layer can borrow a contained,
lossless source bitmap at its original integer offset. Snapshot metadata preserves the
input layer's complete pixel viewport; decal sampling supplies its transparent padding.
Gaussian UV mapping and output allocation use that viewport, without copying the source
into another input texture first. Source rasterization, resolve, directional blur, color
output and screen quantization remain separate.

This extension requires a translation-only device transform, a decal blur that needs no
downsampling, matching unorm8 formats and a parent clip containing every source texel.
Other cases keep the existing path. An unrestricted prototype changed some pixels by up
to two channels at a 2x view scale; that path was rejected. The final implementation's
16 before/after viewport pairs are byte-identical across two animation phases, two soft
scenes and view scales 0.5, 1, 1.25 and 2. The new metadata does not alter the display
format, blur kernels, render-target cache or GPU resource lifetimes.

Real Metal diagnostics reduce Bloom soft passes/encoders from 369 to 302 and Weave from
289 to 236. Command buffers stay at 156 and 122, and newly allocated texture
counts/bytes remain unchanged: the unused parent target is still allocated. These counts
come from diagnostic frameworks; their timing is excluded from formal FPS.

Three foreground rounds per renderer use the same native AOT and JS asset, replacing
only the framework between the RGBA8 baseline and candidate. Each of six cases warms up
for 30 frames and measures 120, at DPR 1 and 880 x 480 on the 120Hz display. The
comparison retains all nine valid rounds: 6,480 measured frames and 1,620 warmup frames.
One attempt lost foreground and another overlapped a detected background build; both are
archived separately and rerun. No valid round is discarded. Background services remain
running, and one-second process samples accompany every formal round.

| Soft scene | HTML FPS | Flax RGBA8 baseline FPS | Direct-input FPS | Baseline / candidate raster p50 |
| ---------- | -------: | ----------------------: | ---------------: | ------------------------------: |
| Bloom      |    119.0 |                    75.2 |             89.2 |              13.779 / 10.698 ms |
| Weave      |    120.0 |                    88.7 |            104.2 |               10.698 / 9.132 ms |

Median cadence improves 18.7% and 17.5%; the three candidate ranges do not overlap their
baseline ranges for either soft scene. Three rounds do not establish a general
statistical guarantee. Crisp FPS changes remain within overlapping ranges. The HTML gap
persists, and both soft raster medians still exceed the 8.33 ms frame budget. Raster
durations do not isolate GPU execution.

Final Debug/Metal and Release/Metal each pass 417 executions, including 370 unchanged
WPT workers and 78 reference scenes. All three grids remain 22,642 / 33,000 at the
original channel limit 4. Package checks pass commands (21), JS (35), the interactive
example (1), types, analysis and generated binding reproducibility. Three checked-in C++
test bodies run in a private real-Metal harness, including the new viewport/origin
regression; the complete upstream gtest targets are not built. All 36 formal native PNGs
match by scene before/after; all 18 HTML PNGs match their repetitions. The eight
protected JS, drawing, WPT and adapter inputs remain unchanged.

The Canvas example now uses the existing platform-aware engine factory, fixing its macOS
Hermes rejection, and excludes pnpm dependencies from Dart analysis. A private
acceptance copy initially omitted foreground activation and timed out; the unchanged
tests pass after rerunning with the existing desktop application launcher.

Evidence and the interactive report are in
`.local/canvas-native/source-input-20261025/`. No mobile rerun, commit, push or main
integration is performed. Temporary app/framework copies are removed after hashing; the
independent engine builds and SDK remain available.

## V8-only main confirmation (2026-10-25)

Both experiment branches were rebased onto Flax
`a9c1ae88beac9a72bb70637e923e3382ac82a260` and engine
`bb7e27654b9090e9f985b730915a6e33c9c60973`. The 19 retained Canvas source files are
byte-identical to their pre-sync versions. Main already contains the GNU C11 libffi
configuration, so its duplicate was removed. Matching maintained V8 Debug and Release
engines were rebuilt; no maintained Hermes build is used for this confirmation.

The new eager-allocation control rebuilds one private `canvas.cc` object with only the
Canvas deferred-allocation eligibility condition forced false. Class layout, filters,
quantization, clipping and other code match the retained framework. Both share one new
AOT and unchanged JS. This control isolates deferred allocation; it is not a comparison
against an old main binary. All nine fresh rounds are retained, in alternating order:
three each for the control, deferred allocation and HTML. Each scene uses 30 warmup and
120 measured frames at 880 x 480, DPR 1, on the 120 Hz display: 6,480 measured and 1,620
warmup frames total, without timed pixel readback. Foreground and host-load guards pass
for every accepted round. One HTML attempt overlapping a compiler and Simulator activity
is archived and excluded. Earlier phases are not combined with these samples.

| Soft scene | HTML median FPS (range) | Eager control FPS (range) | Deferred FPS (range) | Deferred vs control | Control / deferred raster p50 |
| ---------- | ----------------------: | ------------------------: | -------------------: | ------------------: | ----------------------------: |
| Bloom      |     114.3 (109.0-116.0) |          93.9 (91.5-94.6) |     92.1 (85.0-93.9) |               -1.9% |            10.424 / 10.556 ms |
| Weave      |     120.0 (119.9-120.0) |       113.3 (111.6-115.2) |  112.4 (109.8-113.3) |               -0.8% |              8.774 / 8.862 ms |

Deferred allocation does not improve animation cadence in this phase. Its medians are
slightly lower, the three-round ranges overlap, and the valid 85 FPS Bloom round is
retained. These measurements do not establish zero regression. Other scenes have equal
control/deferred median cadence at approximately 119-120 FPS. Native accessibility is
enabled consistently in all six rounds; no native-window screenshots are taken during
their application lifetimes. FPS measures callback/engine frame timestamp cadence, not a
separately captured display-present sequence. Raster includes encoding, submission and
possible waits; the browser GPU backend is not independently verified.

Deferred allocation remains as an allocation reduction only: the same Canvas code's
pre-sync diagnostics avoided 74 / 55 unused targets and reduced new texture bytes by
12.6% / 7.7% for Bloom / Weave. Those are historical sums of Metal `allocatedSize`, not
new peak-memory or bandwidth measurements. Passes / encoders remain 302 / 236, which is
consistent with the remaining raster cost. Intermediate texture reuse remains removed
after its earlier paired slowdown. No FPS speedup is claimed for deferred allocation,
and no filter, origin, clip or quantization boundary is changed.

Fresh Debug and Release applications each pass 417 Canvas regression executions with
audited loaded frameworks. All eight protected JS/drawing/WPT inputs remain unchanged.
The three reference grids each still report 22,642 **differing** pixels out of 33,000 at
channel limit 4 in both modes. These are unchanged difference reports, not passed pixel
counts or proof of complete browser/WPT conformance. All 36 native PNGs match by scene
across the control and deferred variants; all 18 HTML PNGs match their own repetitions.
The eight launcher/journal tests and targeted production static analysis pass. The four
native C++ test bodies passed before synchronization; complete upstream gtest targets
and mobile tests are not rerun in this phase.

The report, all valid and rejected samples, source/binary fingerprints and validation
receipts are in `.local/canvas-native/rebase-main-20261025/`. Source backups and
maintained engine/SDK builds are preserved. Private measurement apps, framework copies,
objects and generated gate fixtures are removed after recording their hashes. No new
commit, push or merge is performed.

## Quantized color-matrix and screen fusion (2026-10-26)

The retained candidate combines the final color-matrix filter and its parent plain
screen blend during Canvas RGBA8 replay on macOS Metal. It retains the source resolve,
directional blur, original viewport, transparent padding, pixel origins and clipping.
The removed intermediate attachment's RGBA8 store and subsequent sample are reproduced
inside the screen shader. The path requires integer texel mapping, a single-mip RGBA8
input, unit opacity and a finite bounded alpha-preserving matrix without color offsets.
Other configurations keep the original matrix pass; a later draw materializes it first.
The JS API, command format and native decoder are unchanged by this candidate.

Desktop Metal compiles this shader's nominal half arithmetic as float32. Simply rounding
`value * 255` changed three pixels in an early candidate. The retained shader uses the
float32 significand for attachment rounding and reconstructs the normalized texture
sample. A real 4x-MSAA RGBA8 store/sample probe agrees on all 65,536 float32 near-tie
channels. Sixteen fixed-phase viewport pairs (two scenes, two phases and four scales)
are byte-identical to the matched baseline. Five native regression bodies pass in a
private real-Metal assertion runner; this does not certify the full upstream gtest
suite. Final maintained Debug and Release frameworks each pass 417/417 Canvas regression
executions with audited loaded binaries and unchanged WPT thresholds. The three
reference grids still each report 22,642/33,000 **differing** pixels at channel limit 4;
successful execution is not complete WPT pixel conformance.

The initial desktop acceptance restricted fusion to `FML_OS_MACOSX && !FML_OS_IOS` on
Metal. The physical iOS follow-up below extends the same implementation to iOS Metal.
Android retains the ordinary path, and the iOS Simulator's existing no-framebuffer-fetch
capability keeps it on that path. The shared matrix contents now use a typed object in
place of a captured render closure, preserving the original shader and math for ordinary
rendering. This and the small deferred-state/pipeline additions are the maintenance cost
of fusion; the general Flutter/Skia scheduler is unchanged.

A fresh automatic-foreground, semantics-off group contains nine accepted rounds:
baseline1, candidate1, HTML1, candidate2, baseline2, HTML2, baseline3, candidate3,
HTML3. The baseline includes the earlier retained Canvas optimizations, with this fusion
absent; it is not an old main binary. All native variants use the same frozen AOT and
drawing JS. Each round has six cases, 30 warmup and 120 measured frames per case at 880
x 480 / DPR 1, targeting 120 Hz. There is no timed pixel readback. Original foreground,
lifecycle, dimensions, host-load and semantics guards remain enabled; no native
accessibility-tree queries or screenshots occur during measured app lifetimes. The first
native pair records Flutter's 120 Hz metadata; the other seven rounds also have
independent system display checks before and after measurement. A 60 Hz calibration
attempt and a later HTML attempt overlapping a foreign build are archived and excluded.
The earlier four accessibility-on rounds and one manual accessibility-off observation
remain separate; they are not pooled into this group.

| Soft scene | HTML / Edge 156 median FPS (range) | Baseline FPS (range) |  Fusion FPS (range) | Baseline / fusion raster p50 |
| ---------- | ---------------------------------: | -------------------: | ------------------: | ---------------------------: |
| Bloom      |                  97.1 (97.1-113.3) |    91.5 (82.1-120.0) | 109.0 (104.2-120.0) |            10.571 / 8.934 ms |
| Weave      |                109.9 (102.7-120.0) |   110.7 (98.5-120.0) | 120.0 (120.0-120.0) |             8.892 / 7.449 ms |

All valid variability is retained. Raster p50 improves in each of the three paired
comparisons: 15.5-22.0% for Bloom and 16.2-18.1% for Weave. Across-round raster medians
fall 15.5% / 16.2%. Median proportions of intervals over 12.5 ms fall from 31.09% to
10.08% / 8.40% to 0%. All 36 native PNGs are byte-identical by scene across baseline and
fusion; all 18 HTML PNGs agree with their own repetitions. This does not assert
native/browser PNG equality. Separate instrumented diagnostics remove 72 Bloom and 55
Weave passes/encoders per frame, while command-buffer counts stay at 156 / 122.
Diagnostic timings are not mixed into the formal group.

After restricting eligibility to desktop Metal, a separate old/final/final/old group
checks the final binary with the same frozen AOT and JS. All four rounds pass the
original guards, including independent 120 Hz display checks; all 24 PNGs are identical
to the main group's fusion images. Bloom soft raster p50 medians are 6.600 / 6.634 ms
(+0.5% final versus old), and Weave 5.377 / 5.330 ms (-0.9%). Other cases vary from
-3.3% to +3.3%; callback cadence is 119-120 FPS. These four rounds are a final-binary
check, not additional fusion-versus-baseline samples or a new speedup claim. The valid
differences are retained and do not establish zero regression on every workload.

FPS measures callback/engine frame timestamp cadence, not independently captured
physical presents. Raster includes CPU/driver work and possible waits, not isolated GPU
shader time. The browser's actual GPU backend is not independently verified. Results
cover this Apple M2 Max host and these six cases, not a universal ordering between
Flutter and browsers.

The finite source/trace review retains fusion and adds no further speculative cache,
transport or scheduling layer. JS encoding is about 0.25-0.53 ms and commit/decoder work
0.40-0.74 ms at per-run p50, below the 8.33 ms frame budget. The command payload is
already shared synchronously and its buffer retains capacity. Image ownership,
mutation/reset/close/GC work cannot simply be removed. Earlier scratch-texture reuse
regressed paired animation despite cache hits, bounds alignment changed pixels, and
delaying source submission increased command buffers and regressed performance. Those
changes remain withdrawn; their expected benefit does not justify broader upstream
maintenance or another unchanged experiment.

Raw accepted/rejected samples, fingerprints, probes and the interactive report are in
`.local/canvas-native/color-screen-20261025/automatic/`; final scope/build receipts and
the four-round confirmation are in
`.local/canvas-native/optimization-autonomy-20261026/`. Source backups and maintained
engine/SDK builds are preserved. Owned private apps, framework copies and objects are
removed after fingerprinting. No commit, push, merge or rebase is performed in this
phase.

## Physical iOS color-matrix and screen fusion (2026-10-26)

The shared Canvas fusion is retained on physical iOS Metal after matched Release
validation on a wired iPhone 14 Pro / Apple A16 GPU / iOS 27.0.1. The maintained engine
uses static jitless V8 SDK 0.3.1, with no JavaScript JIT entitlement. The drawing JS,
Dart Canvas host, command format and public API are shared with macOS.

The iOS increment changes three engine files. Eligibility and pipeline initialization
include iOS, the new framebuffer-fetch shader uses a 32-bit sampled image followed by an
explicit half conversion to satisfy SPIR-V validation, and the clip eligibility matches
the existing `SetClipScissor` outward rounding. A strict floating-rectangle check passed
functional tests but fused only offscreen captures on this device. The integer-scissor
check enables ordinary displayed frames while preserving the original viewport,
geometry, sample grid and clip operation. No second mobile rendering implementation or
general Flutter/Skia scheduling change is added.

A real A16 Metal probe checks all 15,361 nonnegative half values through one across
65,536 channels against actual 4x-MSAA RGBA8 attachment store/sample: zero differences.
The half rounding branch retains nearest-even UNorm8 conversion; desktop Metal keeps its
float32 significand and texture-sample reconstruction. Both macOS Debug and Release
generate byte-identical Metal shader source before/after the sampler declaration fix.
Their shared clip change passes 417/417 regression executions per mode and another 16/16
old/final viewport pixel pairs.

The physical iOS fusion-disabled baseline and final candidate each pass 432 test
executions with 418 successful Widget journal entries. The original WPT channel limit 4
is unchanged; all three reference grids still report 23,236/33,000 **differing** pixels.
This is successful execution and baseline equivalence, not full WPT pixel conformance.
Sixteen mounted-view captures at two phases and four capture pixel ratios are
byte-identical. Five native policy assertion bodies also pass in a private real-Metal
runner; the full upstream gtest suite is not certified.

The formal group has six accepted rounds in B1, C1, C2, B2, B3, C3 order. Every round
uses the same frozen AOT and drawing JS, with six cases at fixed 880 x 480 physical
pixels and screen-fit raster scale 1.23068. The phone reports 120 Hz, DPR 3 and a 1179 x
2556 viewport. Each case has 30 warmup and 120 measured frames: 8,640 measured and 2,160
warmup frames in total. Actual resumed lifecycle, no interruptions, semantics disabled,
stable viewport/refresh, and nominal thermal state with low-power mode off before/after
each case are required. There is no timed pixel readback. A full five-minute host
quiescence check precedes the group; per-second records reject concurrent build or
Flutter/native validation load. No native accessibility-tree or screenshot query occurs
during measured app lifetimes.

All six soft cases improve raster p50 in each of the three paired comparisons. Values
below are medians across the three per-run results; valid variability remains visible.

| Backing / soft scene | Baseline / fusion raster p50 (ms) | Reduction |   Baseline / fusion FPS, median (range) |
| -------------------- | --------------------------------: | --------: | --------------------------------------: |
| 880 x 480 / Bloom    |                   20.293 / 16.026 |     21.0% |     49.0 (37.9-50.1) / 62.0 (61.0-62.9) |
| 880 x 480 / Orbit    |                    10.259 / 6.211 |     39.5% |  96.4 (93.3-97.1) / 119.9 (119.9-119.9) |
| 880 x 480 / Weave    |                   20.740 / 17.525 |     15.5% |     48.2 (46.5-49.0) / 56.6 (56.0-57.1) |
| Screen fit / Bloom   |                   20.629 / 16.828 |     18.4% |     48.5 (38.6-49.2) / 59.0 (57.8-59.7) |
| Screen fit / Orbit   |                    10.377 / 7.035 |     32.2% | 95.8 (89.2-110.6) / 119.9 (118.9-119.9) |
| Screen fit / Weave   |                   22.188 / 20.066 |      9.6% |     44.7 (43.4-45.6) / 49.4 (49.0-49.5) |

The first accepted Bloom baseline is slower than the other two and remains in the
results. At fixed size, measured JS draw-loop plus commit wall-time medians fall 12.4% /
47.6% / 8.2% for Bloom / Orbit / Weave; screen-fit values fall 6.1% / 37.0%, while Weave
changes by +0.4%. These are wall-time observations, not isolated CPU or GPU kernel
measurements. Crisp cases remain around 119.9 FPS and have mixed paired raster changes.
Fixed-size Weave crisp has a +0.101 ms (+7.7%) median raster difference, with paired
changes +16.5%, +7.7% and -10.9%. The group does not establish zero regression for every
workload or a new crisp-path speedup.

All 36 formal 880 x 480 PNG exports are byte-identical by scene across the six rounds. A
separate displayed-pixel check compares six 1083 x 591 screen-fit captures and also
finds exact byte equality. The final candidate's existing captures are recovered with an
identical run receipt; the additional baseline round was declared pixel-only before
launch. Its host-load-rejected timing remains excluded, while its completed, identified
pixel output is compared separately. None of those extra timings enter the table.
Private diagnostics show 72 / 55 screen fusions per ordinary Bloom / Weave replay:
passes and encoders fall 370 -> 298 / 285 -> 230, while command buffers stay 150 / 116.
Diagnostic timings and operation counts are not used as a throughput estimate.

The initial iOS environment/configuration observation, a build-contaminated timing
attempt and a later preflight veto remain archived and excluded. Native launch
configuration is read explicitly because iOS Dart exposes an empty process environment.
Raw per-frame timings, accepted/rejected identities, PNGs, hashes and source backups
remain in `.local/canvas-native/ios-device-color-screen-20261026/`. Owned private apps,
frameworks and object copies are removed after fingerprinting; source and maintained
engine/SDK builds remain. The full interactive iPhone studio remains installed.

FPS denotes callback/engine timestamp cadence, not independently observed physical
presents. Raster includes CPU, driver and possible waits. This validates one A16 device
and these scenes, without a mobile-browser comparison, sustained thermal certification,
full HDR-display conformance or other-device performance claim. Android and iOS
Simulator retain their existing rendering path. No commit, push, merge or rebase is
performed by this validation.

## Physical iPhone HTML comparison (2026-10-26)

A separate three-run-per-host group compares the retained Flax fusion with Safari 27.0.1
on the same wired iPhone 14 Pro / A16 / iOS 27.0.1. Flax uses Release/AOT and the
maintained static, jitless V8 SDK 0.3.1. Both fixtures import the same `drawing.ts` and
`afterglow_cases.ts`, use 880 x 480 backing pixels, and submit phase `frame / 60` with
30 warmup and 120 measured callbacks per scene. No drawing implementation, API, origin,
clipping rule or WPT threshold is changed for this comparison. Earlier native
baseline/fusion groups are not pooled with these new samples.

The crisp-scene results are medians of the three launches; ranges include every valid
launch:

| Crisp scene | Flax FPS, median (range)  | Safari FPS, median (range) |
| ----------- | ------------------------- | -------------------------- |
| Bloom       | 119.909 (119.908-119.919) | 59.950 (58.969-59.980)     |
| Orbit       | 119.893 (119.889-119.920) | 59.950 (59.950-59.980)     |
| Weave       | 119.903 (119.892-119.904) | 59.950 (59.950-59.980)     |

Safari's empty-rAF calibration also measures 59.950 FPS in all three runs. Thus the
roughly twofold callback-rate difference is observed in this Safari test configuration;
it does not establish twice the rendering throughput or GPU efficiency. The device
reports a 120 Hz display, while the browser's measured callback cadence remains around
60 Hz. These remain animation/engine timestamp measurements, not independent physical
present counts or an unrestricted comparison of every Safari configuration.

Native crisp submission/raster p50 medians are 2.123 / 2.282 ms for Bloom, 1.639 / 1.442
ms for Orbit, and 1.531 / 1.291 ms for Weave. Submission includes JS encoding and
explicit commit/decoding; raster includes CPU, driver work and possible waits. Safari's
submission samples have coarse 1 ms increments, often giving a zero median, and exclude
deferred raster/GPU work. They do not demonstrate zero CPU cost and cannot support a
cross-host CPU-speed ratio.

### Safari soft scenes are unequal rendering work

This Safari context supports `reset` and `letterSpacing`, but has no Canvas 2D `filter`
property. Assigning `blur(4px)` to a separate 32 x 32 probe leaves the pixel outside an
8 x 8 white rectangle fully transparent. A second check compares each scene's crisp and
soft phase-zero images in the 880 x 420 picture area, excluding the bottom label: Safari
has zero differing pixels in all three scenes. Flax changes 78,865 / 91,543 / 172,718
pixels for Bloom / Orbit / Weave. The browser is omitting the requested blur and
saturation, rather than producing the same soft image more cheaply.

Native soft FPS medians are 60.977 / 119.908 / 56.621 for Bloom / Orbit / Weave.
Safari's soft-labelled callbacks remain around 59.950 FPS, but these rows are retained
only as capability observations and excluded from equal-rendering performance ranking.
No filter polyfill or DOM feature is added to manufacture a comparison. Pixel results
from different renderers are not claimed to be byte-identical or WPT-conformant.

### Controls, evidence and limits

Apple's
[Safari WebDriver on iOS](https://developer.apple.com/documentation/safari-developer-tools/ios-enabling-webdriver)
controls the physical phone. The user enabled Web Inspector/Remote Automation and closed
its Device Hub screen window before measurement. The final browser fixture is an inline
data URL sent over USB: one pending asynchronous command starts its button handler and
returns after all six timed scenes and untimed exports. There are no LAN requests,
further WebDriver calls, external AX queries or screenshots during sampling.
Source/backing size is 880 x 480; Safari displays approximately 293.33 x 160 CSS pixels
at DPR 3. Native's additional screen-fit rows remain separate from this table.

The accepted order is Flax 1, Safari 1, Safari 2, Flax 2, Flax 3, Safari 3. The captured
other work round completes before formal qualification, followed by 300 continuously
observed quiet seconds. Per-second compiler/Flutter/simulator-load guards pass for every
accepted round. Native stays actually resumed with semantics disabled and no focus
interruptions; viewport/DPR/refresh remain stable. Native temperature is nominal and
low-power mode is off before/after every case. Native health-only launches also check
these conditions before/after each whole browser round; this is not continuous browser
thermal telemetry. The small filter probe runs before timing; scene PNG exports occur
only after every timed scene has finished.

The new group records 4,320 native frames, 2,160 browser frames and 360 empty-rAF
calibration frames. Native's second size accounts for half its frames. The main 880 x
480 comparison has 2,160 frames per host, including 1,080 rankable crisp frames per
host. The 18 source PNGs per host are stable across all three launches: all 24
within-host repeat comparisons have zero differing pixels. Native's extra 18 screen-fit
exports are preserved separately. Rejected configuration/HTTP attempts start no timed
frames. One complete native attempt is excluded because a SimMetalHost sample reaches
15.7% CPU; its timings/images remain archived and a fresh 300-second quiet window
precedes its replacement.

Raw valid/rejected samples, calibration timestamps, native health/load receipts,
source/binary fingerprints and collector versions remain under
`.local/canvas-native/ios-html-20261026/`. The local HTTP approach is abandoned after
load failures, without changing network/security settings; the final USB-only transport
is used in all three accepted browser rounds. Product drawing code and maintained
engine/SDK artifacts remain unchanged. This task does not commit, push, merge or rebase.

## Physical Android HTML comparison (2026-10-26)

A separate three-run-per-host group compares Flax Release/AOT with Chrome 154.0.8037.94
on the same wired Pixel 4 / Android 13 / Adreno 640. The native application packages
this branch's rebuilt Android arm64 engine and V8 SDK 0.3.0 (V8 15.4.80.15, JIT
enabled). Runtime logs confirm the final Impeller OpenGLES backend. Android keeps its
existing GLES path; the Apple color-matrix/screen fusion is disabled on this platform.
The comparison changes no product drawing, Dart/runtime/engine source, public API,
sampling origin, clipping rule or WPT threshold.

Both fixtures import the same `drawing.ts` and `afterglow_cases.ts`, use 880 x 480
source/backing pixels, and submit phase `frame / 60` with 30 warmup and 120 measured
callbacks per scene. Native raster scale is 1.0. At DPR 2.75 the displayed canvas is 320
x approximately 174.545 DIP/CSS pixels. The device is temporarily fixed at 60 Hz for
both hosts, with the original refresh preferences saved for restoration. Earlier
Android, iOS and desktop optimization groups are not pooled with these samples.

These are medians of the three per-round statistics. FPS ranges include every valid
launch; the percentage is Flax's callback-rate change relative to Chrome:

| Scene       | Flax FPS, median (range) | Chrome FPS, median (range) | Flax change | Flax raster p50 median |
| ----------- | ------------------------ | -------------------------- | ----------: | ---------------------: |
| Bloom crisp | 57.591 (57.116-59.006)   | 60.004 (59.998-60.010)     |       -4.0% |              10.277 ms |
| Bloom soft  | 24.710 (23.960-24.789)   | 13.626 (13.248-13.732)     |      +81.3% |              40.339 ms |
| Orbit crisp | 60.003 (59.996-60.007)   | 60.001 (60.001-60.004)     | Both capped |              16.600 ms |
| Orbit soft  | 48.241 (47.602-49.586)   | 31.733 (31.456-33.839)     |      +52.0% |              20.116 ms |
| Weave crisp | 30.384 (30.380-30.389)   | 59.998 (59.998-60.004)     |      -49.4% |              32.968 ms |
| Weave soft  | 18.355 (18.351-18.358)   | 17.039 (17.000-17.374)     |       +7.7% |              54.752 ms |

Flax has higher callback rates in all three soft scenes; the Weave soft difference is
smaller than the Bloom and Orbit differences. Chrome has a much higher rate in Weave
crisp and a small advantage in Bloom crisp. Orbit crisp reaches the 60 Hz ceiling in
both hosts, so FPS does not establish equal rendering cost or unrestricted throughput.
Chrome's empty-rAF calibration is 59.998 FPS at the median, with a 59.998-60.007 range.
These measurements describe this phone, refresh mode and workload, not an overall
Android winner or independent physical-present counts.

Native submission p50 medians are 4.443 / 11.105 ms for Bloom crisp/soft, 2.887 / 5.617
ms for Orbit, and 5.279 / 5.000 ms for Weave. This includes JS encoding and explicit
commit/decoding. Chrome submission medians are approximately 1.8 / 2.2, 1.4 / 1.3 and
1.4 / 1.5 ms, with roughly 0.1 ms timer increments, and exclude deferred raster/GPU
work. These differently scoped metrics do not support a cross-host CPU-speed ratio.
Native raster includes CPU, driver work and possible waits; it is not isolated GPU time.
Weave crisp's approximately 33 ms raster duration exceeds the 16.7 ms budget even though
its submission time is lower. No new trace-based claim about the particular
Chrome/native rendering passes is made here.

### Android filter and pixel checks

Chrome supports `filter`, `reset` and `letterSpacing`. Its 32 x 32 `blur(4px)` sentinel
produces alpha 60 outside the white source rectangle. In the 880 x 420 picture area,
excluding the bottom label, crisp/soft images differ in 80,967 / 106,948 / 176,718
pixels for Chrome Bloom / Orbit / Weave. Native images differ in 78,707 / 91,413 /
172,714 pixels. Both hosts therefore execute the requested soft effects; all six scenes
can be compared using the shared inputs. Different renderers are not claimed to produce
identical pixels or identical filter implementations.

All 36 source PNGs have 880 x 480 pixels. The 24 within-host repeat comparisons are
pixel-identical across the three launches. Native's 18 supplemental repaint-boundary
exports have 880 x 481 pixels: the fractional DIP height rounds upward during this
untimed capture, and the extra row is fully transparent. Their top 480 rows match the
source snapshots in five scenes. Weave soft consistently differs at 50 pixels, with a
maximum difference of three channel codes. These supplementary captures are preserved at
their original size; they do not replace the source comparison grid or certify WPT
conformance. No pixel readback occurs during the measured callbacks.

### Android controls, exclusions and cleanup

The user authorizes official
[ChromeDriver for Android](https://developer.chrome.com/docs/chromedriver/get-started/android)
over the already trusted USB ADB connection. ChromeDriver attaches to the running Chrome
application with `androidUseRunningApp`, preserving its data. Each round creates and
closes only its own tab. The inline fixture uses no LAN service. A real heading click
acquires document focus before timing; focus/visibility and stable viewport/DPR are
checked throughout. One pending asynchronous command then runs all timed cases and
untimed exports, without further browser commands during sampling.

The accepted order is Flax 1, Chrome 1, Chrome 2, Flax 2, Flax 3, Chrome 3. Native
remains actually resumed with semantics disabled and no focus interruptions. Its
PowerManager thermal status is zero, power saving is off, and refresh is approximately
60 Hz before/after every scene. ADB health checks before/after each whole round confirm
those conditions, with HAL skin sensors at or below 34 C before starting. Browser
thermal checks are whole-round spot checks, not continuous telemetry. Fresh 300-second
quiet-host qualifications and per-second compiler/Flutter/simulator-load guards qualify
the accepted samples. No external native AX queries or screenshots occur during the
native measurement application's lifetime.

Three complete attempts are retained and excluded in full. The first native attempt
passes its per-case 60 Hz checks, but returning to Chrome after exit switches the
display to 90 Hz, failing the strict whole-round gate. The final cohort fixes System
peak/min refresh at 60 Hz. One Chrome attempt encounters a 13.9% CPU SimMetalHost sample
and fails the host-load gate. Another has a visible document whose keyboard focus
remains in the address bar. Two independent untimed smoke sessions reproduce that focus
state and verify the real-click fix before the final fixture is frozen. No other
application is stopped to pass these guards.

The accepted group records 2,160 measured native frames, 2,160 measured Chrome frames
and 360 empty-rAF calibration frames. The three excluded attempts retain another 2,160
measured frames and 240 calibration frames, without contributing to the table. Raw
samples, health/load records, all valid/rejected PNGs, collector versions and
source/APK/AOT/engine/SDK fingerprints remain under
`.local/canvas-native/android-html-20261026/`.

This is a measurement-only task. The rebuilt maintained Android engine and existing
Mac/iOS engines and SDKs are preserved. Private measurement APK/application and driver
copies are removed after recording their fingerprints; original device refresh
preferences and Home foreground are restored. No 90 Hz, sustained thermal, pure GPU, new
full-WPT or other-device certification is claimed. No commit, push, merge or rebase is
performed.

## Android GLES optimization verification (2026-10-27)

No additional production optimization is retained. Two resource-bookkeeping candidates
were evaluated in new Flax/engine worktrees, preserving the previous workspaces and
their dirty files. The frozen source baseline is Flax `a6ea2404b` and engine
`bb7e27654`, with the already validated local Canvas changes. A complete independent
engine build reproduced the baseline binary byte-for-byte.

The Pixel 4 baseline uses Impeller OpenGLES. A diagnostic Perfetto capture places about
17 ms of Weave crisp's approximately 33 ms draw in swap/fence waiting. Bloom soft spends
about 6.67 ms per traced frame inside `ConsolidateHandles`. These are inclusive
instrumented durations, not isolated shader or map-scan costs; their FPS is excluded
from the comparison.

The first candidate made Android's debug-label capability follow the proc table's actual
support. Its two exploratory pairs showed no primary benefit and it was removed. Those
incomplete samples overlap another task's active work turn and do not establish formal
acceptance.

The second candidate consolidated a pending-handle set instead of scanning all live
handles. Both APKs use identical AOT, drawing code, assets and dependencies; only
`libflutter.so` and signing metadata differ. The complete Release comparison uses three
rounds per variant, crossed A1/B1/B2/A2/A3/B3, with 30 warmup and 120 measured frames
per scene, 880 by 480 backing pixels, DPR 2.75 and 60 Hz. This records 2,160 measured
frames per variant.

For this physical-Android-only cohort, the user authorized recording Mac compiler and
simulator load without rejecting a round for it. All phone-local gates remain strict:
actual resumed/foreground state, semantics disabled, no focus interruptions, no external
native AX queries or screenshots during the process, thermal status zero, power saving
off, 60 Hz before/after each case and round, and current HAL skin sensors at or below 34
C before launch. APK installation precedes the cooldown check. Old host-gate rejections
and instrumented timing are excluded from the new group.

| Scene       | Baseline / candidate FPS | Baseline / candidate raster p50 |
| ----------- | ------------------------ | ------------------------------- |
| Bloom crisp | 59.014 / 58.540          | 10.395 / 10.262 ms              |
| Bloom soft  | 24.290 / 24.542          | 41.178 / 40.571 ms              |
| Orbit crisp | 60.008 / 60.013          | 16.636 / 16.617 ms              |
| Orbit soft  | 46.675 / 48.257          | 20.770 / 20.097 ms              |
| Weave crisp | 30.517 / 30.387          | 32.924 / 32.940 ms              |
| Weave soft  | 18.356 / 18.358          | 54.746 / 54.752 ms              |

Bloom soft's median raster reduction is only 1.47%, below the preregistered 5% minimum;
its paired reductions are -0.96%, +2.39% and -4.53%. The direction is inconsistent, the
ranges overlap, and Weave throughput is effectively unchanged. The extra mutable
resource state and generic Android GLES maintenance are therefore not justified.
Callback cadence is not measured physical presentation, and raster time includes
synchronization; capped FPS or one raster fluctuation is not a stable speedup.

Correctness passed for the withdrawn candidate: 432 Release Dart tests, including 417
reported widget cases, using the original Canvas/WPT thresholds; seven Android Reactor
resource tests, with one upstream unavailable-label test skipped; and 60 byte-exact
source/boundary image comparisons across the formal rounds. An additional 12 diagnostic
image pairs are exact. Rendering correctness alone does not justify retaining it.

Both candidates and their temporary test/build additions are removed. The maintained
Android engine is rebuilt to the exact baseline SHA-256
`92ed557739efae30fadf05fb372bd3bbc593ca0a28892de893a773976ea58c38`. Source patches,
accepted/rejected samples, diagnostic trace, device/load records and receipts remain
under `.local/android-gles-20261026/`; the second candidate's complete results are in
`pending-handles/comparison.json` and `full-acceptance/`.

Broader render-pass and synchronization changes are deferred. Previous GLES blur-copy
removal changed pixels by up to three channel codes, and hardware-screen probes did not
preserve the accepted precision contract. The existing Metal fusion depends on its
attachment/quantization path and is not enabled on GLES by changing a platform switch.
No pixel threshold, origin, clip, sample grid or JS API is relaxed to claim a gain, and
there is no new other-GPU or platform certification.

The private measurement and acceptance applications are removed, original device refresh
preferences are restored, and the four pre-existing applications remain installed.
Private APK/library/probe/tool and dedicated probe-object copies are removed; source,
raw evidence and maintained engine/SDK builds remain. An empty local fixture-directory
link preserves this worktree's lockfile discovery without retaining generated module
copies. No commit, push, merge or rebase is performed.

## Android GLES rendering and synchronization follow-up (2026-10-27)

No new production optimization is retained. This follow-up checks whether earlier
execution of completed Canvas offscreen work can improve CPU/GPU overlap without
changing any draw, pass, texture, resolve, clip, origin or RGBA8 quantization boundary.
It uses the existing independent Android Flax/engine worktrees and the byte-exact engine
baseline from the preceding experiment.

The retained baseline trace places Weave crisp's approximately 16.7 ms fence wait inside
`queueBuffer`, within approximately 32.8 ms of raster work. Buffer dequeue is much
shorter. The trace does not provide isolated GPU render-stage durations, so these
inclusive timings cannot identify one shader's cost. No EGL production throttling, swap
interval, fence wait or frame-queue limit is removed to shorten a reported metric.

The first candidate drains the GLES reactor every 16 Canvas DisplayList restores. Its 12
diagnostic source/boundary image pairs are exact, but the trace shows zero trigger
executions in Weave crisp: that scene creates its intermediate passes inside advanced
blend rendering instead of through frequent DisplayList restores. The candidate was
withdrawn, and its formal orchestration was stopped before the first native timing
launch. It has no admitted formal frames and makes no speedup claim.

The second candidate instead drains completed inputs after every 16 actual rendered
Canvas entities. It is scoped to Android GLES during Canvas RGBA8 replay; ordinary
Flutter display lists and other platforms retain their paths. A diagnostic capture
confirms approximately five drains per Weave-crisp frame and has no trace error or data
loss. Its 12 diagnostic image pairs are also exact.

Both variants use the same frozen Release APK payloads, AOT, drawing code, assets and
SDK closure; only `libflutter.so` and signing metadata differ. The protocol plans three
crossed pairs, A1/B1/B2/A2/A3/B3, with 30 warmup and 120 measured frames per each of six
scenes, 880 by 480 backing pixels, DPR 2.75 and 60 Hz. Retention requires at least 5%
median improvement in Weave-crisp full-frame interval, positive direction in every pair,
no greater than 3% frame-interval or raster regression in another scene, exact pixels
and the original regression thresholds. A shorter swap or raster wait alone cannot
establish a gain.

The first host-gated baseline attempt is rejected after one of 34 Mac observations
records SimRenderServer at 5.1% CPU. All 720 frames and their rejection evidence remain
excluded. The user's earlier phone-local admission authorization for this same physical
Android comparison is then continued prospectively, before any round is admitted to the
replacement cohort. Mac activity remains recorded. Phone resumed/foreground state,
semantics disabled, no external native AX queries or screenshots during the process, 60
Hz, thermal status zero, power saving off, HAL skin sensors no warmer than 34 C before
launch, installation before cooldown and at least 60 seconds between rounds remain
required. No earlier or instrumented timing is mixed in.

Two complete crossed pairs are sufficient for the preregistered rejection rule: Weave
crisp's frame interval worsens by 1.28% and 1.30%, so the necessary consistently
positive direction is already impossible. The last planned pair is omitted for
rejection, not used to establish an improvement. The following are medians of two
per-variant round values, from 1,440 admitted measured frames per variant:

| Scene       | Baseline / candidate FPS | Baseline / candidate raster p50 |
| ----------- | ------------------------ | ------------------------------- |
| bloom-crisp | 58.078 / 58.785          | 10.344 / 10.724 ms              |
| bloom-soft  | 24.343 / 23.378          | 41.051 / 42.459 ms              |
| orbit-crisp | 60.015 / 60.014          | 16.575 / 16.629 ms              |
| orbit-soft  | 46.894 / 46.083          | 20.718 / 21.320 ms              |
| weave-crisp | 30.458 / 30.071          | 32.979 / 33.285 ms              |
| weave-soft  | 18.312 / 18.218          | 54.766 / 55.261 ms              |

Bloom soft also regresses from approximately 41.05 to 42.46 ms raster time. The extra
per-Canvas counter, reactor/resource work and earlier buffer uploads do not justify
maintenance without a throughput gain. Both candidates and all their source increments
are removed.

All 36 formal source/boundary image comparisons are byte-exact. Together with the two
candidates' diagnostic comparisons, this follow-up checks 60 exact image pairs and 2,880
admitted formal frames; 2,160 diagnostic frames and the 720 host-gate-rejected frames
remain outside the formal group. No pixel or WPT threshold is relaxed. The complete
original-threshold Canvas suite is not rerun for a performance-rejected candidate that
leaves no production increment; the preceding 432-test baseline acceptance remains
separate evidence.

The maintained Android engine is rebuilt to the exact baseline SHA-256
`92ed557739efae30fadf05fb372bd3bbc593ca0a28892de893a773976ea58c38`. Original workspaces
and their dirty sources are preserved. The private measurement app, owned remote traces
and private APK/library/tool copies are removed; original phone refresh preferences are
restored. Source patches, accepted/rejected samples, diagnostic traces and receipts
remain under `.local/android-gles-sync-20261027/`, with the formal comparison in
`entity-drain/comparison.json`. Maintained engine/SDK outputs remain.

Broader pass restructuring and already rejected blur-copy/hardware-screen changes are
not forced through the existing precision contract. This is Pixel 4 evidence, not
other-GPU certification or proof that no further GLES optimization exists. No commit,
push, merge or rebase is performed.

## Android GLES pass and intermediate texture follow-up (2026-10-27)

No new production optimization is retained. This follow-up uses the independent Android
Flax/engine worktrees, Pixel 4 / Adreno 640, Release builds and the preceding byte-exact
engine baseline. The existing APIs, drawing semantics, clips, origins, sample grids,
RGBA8 boundaries and WPT thresholds remain unchanged.

The retained baseline trace has no explicit hardware blit commands inside the six steady
scene windows. Its 17 blits occur outside those windows; timed intermediate copies use
texture draws and offscreen passes. A framebuffer cache for explicit blits would miss
the observed hot path and is not implemented.

An isolated native GLES 3 probe compares real RGBA8 storage and sampling against
arithmetic quantizers over 65,536 float32 channel inputs around every 8-bit midpoint. On
this driver, the existing mobile formula differs in 257 stored bytes and 32,387 sampled
float32 bit patterns. The high-precision desktop formula differs in 255 stored bytes;
two half-up alternatives still differ in 128 and 127. Dither off/on gives the same
outcomes. Formula tweaking stops: this does not justify moving the Metal matrix/screen
fusion to GLES, and no production quantization shader is changed.

A separate real-storage probe finds 65,536 byte-exact channels between 4x implicit MSAA
and single-sample integer-covered rectangles, with dither off/on. This supports a
bounded candidate: keep the original matrix shader, real RGBA8 texture, store/sample
boundary and framebuffer screen shader, but use a single-sample intermediate for
strictly eligible Canvas layers. Eligibility retains the integer input mapping,
alpha-preserving matrix, unused transparent target, complete target clip and plain
unit-opacity screen guards. Android GLES keeps separate filter command buffers; other
backends keep their paths. Only `impeller/display_list/canvas.cc` changes in the trial.

The candidate's diagnostic trace confirms activation in all three soft scenes, with no
reported trace errors or data loss. All 12 fixed source/boundary image pairs are
byte-exact. Its viewport fixture then exports 12 byte-exact images across two scenes,
phases and 0.5x/1x/1.25x/2x scales, before a raster-thread SIGSEGV prevents the last
four exports. The stack enters the Adreno GLES driver through `EncodeCommandsInReactor`;
the precise driver/resource cause is not established. Stale files from the previous
baseline run are excluded. This is an incomplete, rejected viewport run, not a passing
pixel gate. The candidate is withdrawn without a broader driver workaround.

The planned crossed performance group never starts. Both diagnostic timing runs, 1,440
frames in total, remain excluded; there is no formal speedup result. The full
original-threshold Canvas suite is not rerun for a crash-rejected candidate that leaves
no production increment. The preceding 432-test baseline acceptance remains separate
evidence. After withdrawal, the same baseline viewport APK completes 16/16 exports
again, all byte-exact against its first run.

The maintained Android engine rebuild reproduces SHA-256
`92ed557739efae30fadf05fb372bd3bbc593ca0a28892de893a773976ea58c38`. All four workspaces'
starting heads, dirty source contents and statuses are verified unchanged before this
report is appended. Original phone refresh preferences are restored and all four
pre-existing applications remain installed. The owned measurement app, remote probes and
trace, and private APK/library/tool copies are removed. Sources, patches, accepted and
rejected exports, diagnostic trace, crash stack and receipts remain under
`.local/android-gles-passes-20261027/`; maintained engine/SDK builds remain.

The additional deferral, target and resource-lifetime path is not worth retaining
without complete correctness and repeated throughput evidence. Broader pass
restructuring and previously rejected precision-changing copy removal are deferred.
These findings do not establish behavior on other GPUs or rule out further GLES work. No
commit, push, merge or rebase is performed.

## Android Flax/Chrome remeasurement and source comparison (2026-10-27)

A new three-round-per-host Release group confirms that the gap depends on the scene.
Chrome has approximately 1.97 times Flax's callback throughput in Weave crisp; Flax has
higher throughput in all three soft scenes in every crossed pair. No new production
optimization is implemented or retained by this measurement/source review. Earlier
optimization candidates remain withdrawn.

Both hosts run the same frozen drawing and case inputs, 880 x 480 backing pixels, DPR
2.75, fixed 60 Hz, phase `frame / 60`, 30 warmup and 120 measured callbacks per scene.
The accepted order is Flax 1 / Chrome 1 / Chrome 2 / Flax 2 / Flax 3 / Chrome 3. These
are medians of three round statistics, with every round's FPS range shown:

| Scene       | Flax callback FPS (range) | Chrome callback FPS (range) | Flax change | Flax raster p50 |
| ----------- | ------------------------- | --------------------------- | ----------: | --------------: |
| bloom-crisp | 58.053 (57.587–59.017)    | 60.007 (59.998–60.007)      |       -3.3% |       10.327 ms |
| bloom-soft  | 24.370 (23.883–24.540)    | 13.152 (12.934–15.161)      |      +85.3% |       41.360 ms |
| orbit-crisp | 60.006 (59.997–60.007)    | 60.007 (60.004–60.010)      | Both capped |       16.594 ms |
| orbit-soft  | 47.295 (46.679–48.572)    | 31.734 (31.051–32.163)      |      +49.0% |       20.212 ms |
| weave-crisp | 30.513 (30.388–30.515)    | 60.010 (60.004–60.019)      |      -49.2% |       32.909 ms |
| weave-soft  | 18.311 (18.309–18.358)    | 16.644 (16.494–17.375)      |      +10.0% |       54.832 ms |

The fresh cohort contains 2,160 measured callbacks per host and 360 empty-rAF
calibration callbacks. All six rounds pass the phone-local gates. The user's existing
physical-Android authorization continues: Mac compiler/simulator activity is recorded,
with no host-load veto. Native remains actually resumed with semantics disabled; no
external native AX query or screenshot occurs during its process. Refresh is
approximately 60 Hz, PowerManager thermal status is zero and power saving is off
before/after every native scene and each whole round. HAL skin sensors are at most 34 C
before launch, and rounds are separated by at least 60 seconds. Browser health checks
are whole-round spot checks. Its document stays visible/focused with a stable viewport;
one pending asynchronous command covers all timing and later exports.

Chrome's empty-rAF median is 59.998 FPS. Its blur sentinel has nonzero alpha outside the
source, and filter/reset/letterSpacing support is present. Crisp and soft image
differences confirm the requested effects execute. All 24 within-host source-image
repeat comparisons are byte-exact. Cross-renderer PNGs differ; they are not claimed to
have identical antialiasing, fonts or intermediate precision. Native's 18 separate 880 x
481 boundary exports retain the transparent extra row. The Weave-soft boundary differs
from its source snapshot at the same 50 pixels, by at most three codes, as in the
preceding cohort. No pixel readback runs during timed callbacks.

### Live Android backend and diagnostic trace

Live `chrome://version` identifies Chrome 154.0.8037.94 at Chromium
`5bbbefeff14f16f56713e7a3a3e58328aa48e6a5`. `chrome://gpu` confirms hardware
Canvas/rasterization, Ganesh and ANGLE OpenGLES on Adreno 640 driver 0490.0; Graphite
and Vulkan are disabled. The same revision's `DEPS` confirms Skia
`2466dcf3937437e217e7f284afe0e1aae15891ce` and ANGLE
`802a8704ca940b633b731493ee192e0661eb8cdd`. Flax's final runtime log confirms Impeller
OpenGLES, and its packaged engine is the unchanged SHA-256
`92ed557739efae30fadf05fb372bd3bbc593ca0a28892de893a773976ea58c38`.

A separate explicit DevTools diagnostic captures 77,533 trace events without a data-loss
indication. During the marked 2.50-second Weave-crisp window it records 150 GPU-process
raster batch starts and 148 compositor DrawFrame slices. This supports real sustained
GPU rasterization in that scene. The Weave-soft GPU-process flush slice has
approximately 46.15 ms median inclusive CPU duration in the diagnostic; it includes
submission and possible waits, not isolated shader time. A browser raster batch/flush is
not one GL render pass, and compositor draws are not independent physical-presentation
counts. All diagnostic timings remain outside the formal table. The first
attached-driver performance-log diagnostic returned no trace events; its complete
timings/exports and rejection are retained separately.

### What the matching source can teach Flax

1. **Screen composition and its source snapshot are the first target.**
   [Skia's coefficient table](https://github.com/google/skia/blob/2466dcf3937437e217e7f284afe0e1aae15891ce/src/gpu/BlendFormula.cpp#L118)
   and
   [PorterDuff processor selection](https://github.com/google/skia/blob/2466dcf3937437e217e7f284afe0e1aae15891ce/src/gpu/ganesh/effects/GrPorterDuffXferProcessor.cpp#L364)
   support normal screen blending with one / inverse-source-color factors. Unfiltered
   ordinary strokes do not require Blink's composited-draw layer. Current Impeller
   instead routes screen through `FramebufferBlendContents::Render`, which requests a
   source snapshot with MSAA before drawing the framebuffer blend. Weave has 55 thin
   gradient strokes that span the canvas width, so their bounding textures cover much
   more area than the stroke geometry. Avoiding that materialization is a plausible
   source-level reason for Chrome's advantage; no measured fraction of the 1.97x ratio
   is assigned to it. The earlier macOS/Metal hardware-screen trial changed crisp pixels
   by one code; it does not establish Android GLES behavior. A bounded Android-specific
   probe should first retain the real RGBA8 source snapshot and isolate only final
   screen blending. This review does not enable that path or discard the current
   quantization boundary.

2. **Study selective AA as a complete target-lifecycle policy.**
   [Canvas2DResourceProvider](https://github.com/chromium/chromium/blob/5bbbefeff14f16f56713e7a3a3e58328aa48e6a5/third_party/blink/renderer/platform/graphics/canvas_2d_resource_provider.cc#L663)
   requests a one-sample base target with dynamic MSAA when capability checks permit;
   the
   [GPU decoder](https://github.com/chromium/chromium/blob/5bbbefeff14f16f56713e7a3a3e58328aa48e6a5/gpu/command_buffer/service/raster_decoder.cc#L2871)
   applies the dynamic-MSAA surface flag. This does not prove every Chrome intermediate
   is single-sampled. It is a useful allocation/resolve policy to study, with attachment
   configuration and resource lifetime included. The previously rejected single-sample
   matrix trial's driver crash remains unresolved; changing a sample-count switch is not
   an accepted fix.

3. **Plan temporary resources around their last use.**
   [Ganesh's allocator](https://github.com/google/skia/blob/2466dcf3937437e217e7f284afe0e1aae15891ce/src/gpu/ganesh/GrResourceAllocator.cpp#L324)
   expires completed proxy intervals and reuses compatible scratch registers; its
   [drawing manager](https://github.com/google/skia/blob/2466dcf3937437e217e7f284afe0e1aae15891ce/src/gpu/ganesh/GrDrawingManager.cpp#L400)
   can schedule and merge compatible tasks. The maintained Impeller render-target cache
   matches size/format/configuration but does not lend a target already used in the
   frame. This is a concrete design reference for reducing peak intermediates and
   bookkeeping, with GPU dependency ordering preserved. It is not evidence that all task
   merging is active here or that a new cache will yield a stable speedup.

[Current Skia blur](https://github.com/google/skia/blob/2466dcf3937437e217e7f284afe0e1aae15891ce/src/effects/imagefilters/SkBlurImageFilter.cpp#L155)
delegates through `SkBlurEngine` algorithm selection. Neither a classic Gaussian
implementation's source nor its nominal pass count is treated as proof of Chrome's
active blur plan. Likewise,
[deferred color-filter composition](https://github.com/google/skia/blob/2466dcf3937437e217e7f284afe0e1aae15891ce/src/core/SkImageFilterTypes.cpp#L933)
is a reference mechanism, not permission to remove a quantization boundary that already
failed GLES pixel gates. The current data favors investigating Weave crisp while
preserving the soft paths that already perform well on this phone.

Callback cadence is not measured display presentation. Chrome callback CPU time omits
deferred raster/GPU work, while Flax submission includes encoding and explicit
commit/decoding; their CPU figures do not support a direct speed ratio. There is no new
full-WPT, other-GPU or other-platform certification. No commit, push, merge or rebase is
performed. Raw samples, PNGs, frozen-input receipts, version/backend evidence,
diagnostic trace and revision-pinned source receipts remain under
`.local/android-chrome-compare-20261027/`; private apps, APK/driver/download copies and
owned forwards are cleaned up and original refresh preferences/Home are restored.

## Android GLES screen and resource experiments (2026-10-27)

The revision-matched Chrome review above led to four bounded experiments on the same
physical Pixel 4, Adreno 640 driver 0490.0. Only the restricted final `screen` blend is
retained. No source snapshot, resolve, MSAA boundary, Canvas API or WPT threshold is
removed or changed. The other workspaces' existing edits are preserved; there is no
commit, push, merge or rebase.

| Direction                    | Result                                                                                                          | Decision                                                                                               |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Fixed-function final screen  | Independent three-pair confirmation: Weave soft 18.314 to 32.320 callback FPS; raster p50 54.795 to 31.019 ms   | Keep only nearest-sampled, unit-opacity RGBA8 snapshots in Android GLES Canvas replay                  |
| GLES state-query/reset cache | Native Release driver-call probe: about 0.0126 ms combined at 65 passes, without drawing                        | Skip a shared state cache; this is a CPU cost estimate, not an application speedup or a GPU-wait bound |
| Selective AA / FBO lifecycle | Fractional rectangle placement changes 508 channels, up to 96 codes, when MSAA4 becomes single-sample           | Reject the pixel-changing route; the earlier real viewport driver crash remains unresolved             |
| Last-use texture reuse       | Weave crisp: 63 consumed transient targets need 62 compatible slots; only 784 resolved-color bytes are reusable | Skip a new allocator; large inputs overlap until their common parent pass                              |

### Retained screen path and precision gates

The original source snapshot is still rendered and stored as RGBA8. Eligible screen
composition uses source factor One and destination factor OneMinusSourceColor
(OneMinusSourceAlpha for alpha). Both source and destination must be RGBA8. The source
must have one mip level, snapshot opacity must equal one, min/mag sampling must be
nearest, and the source must be a regular 2D or multisample 2D texture with native decal
sampling available. The existing snapshot geometry, clip depth and ordering remain.
Other cases retain the framebuffer fetch shader; the ordinary cache key is unchanged and
the new pipeline has its own bit.

A native Release probe uses the actual generated GLES3 framebuffer-blend shader as its
oracle and the generated texture-fill shader for the candidate. Across 48 cases and
12,582,912 compared channels, all eight nearest/unit-opacity cases are exact; 32 cases
with additional fractional opacity differ by one code. All eight unit-opacity cases with
linear sampling also differ by one code. A second nearest probe with sample-varying MSAA
destinations passes all eight unit-opacity cases. These failures are retained as
eligibility limits. This is not permission to remove color-matrix storage or change the
crisp fixture's default linear snapshot sampler.

### Matched Release measurements

An exploratory crossed three-pair cohort first keeps its original Weave-crisp primary
result: no useful gain. A separate Weave-soft-primary protocol is frozen before its
independent confirmation. Each cohort uses B1 / C1 / C2 / B2 / B3 / C3, with 30 warmup
and 120 measured callbacks for each of six scenes, 880 x 480 backing pixels and 60 Hz.
Phone-local foreground, refresh, temperature and power gates remain mandatory. Mac load
is recorded under the user's existing device-local authorization. Native remains resumed
with semantics disabled; there are no external native AX queries or screenshots and no
pixel readbacks during timed callbacks.

The independent confirmation has 2,160 measured callbacks per variant:

| Scene       | Baseline callback FPS | Candidate callback FPS |
| ----------- | --------------------: | ---------------------: |
| bloom-crisp |                58.064 |                 59.031 |
| bloom-soft  |                25.233 |                 25.056 |
| orbit-crisp |                60.013 |                 60.017 |
| orbit-soft  |                49.251 |                 48.915 |
| weave-crisp |                30.390 |                 30.521 |
| weave-soft  |                18.314 |                 32.320 |

Weave-soft FPS improves 76.48%; its three paired mean-frame-interval reductions are
43.19%, 43.34% and 43.59%. Raster p50 drops 43.39%. The other scenes show no consistent
material callback-FPS regression across the two cohorts. At the 60 Hz cap, Orbit-crisp
raster p50 varies between roughly 10.7 and 16.6 ms even in baseline rounds; this
includes presentation/synchronization phase and is not an isolated GPU duration. Its
linear sampling path is unchanged. The significant Weave-crisp gap against the earlier
Chrome cohort remains; these runs do not establish a new simultaneous Chrome speed
ratio.

### Resource and safety limits

A separate diagnostic records 18,027 complete FBO passes and zero incomplete passes. Its
read/write intervals explain why Weave's largest source textures cannot alias: up to 57
produced inputs are consumed together in one parent pass. An optimistic color-only
compatibility model finds about 13.42% reusable resolved-color bytes for Bloom soft, but
negligible savings for the main Weave bottleneck. It excludes external, wrapped,
mip/slice and separate-resolve resources and assumes no unobserved escapes or loads. It
is neither an allocator-safety proof nor actual GPU-memory or timing savings. The
profile's timings are excluded. No allocator is implemented.

A native FBO stress probe detects 2,000 incomplete mismatched-sample configurations and
2,000 complete restored configurations without a crash; it does not reproduce or fix the
previous viewport crash. Diagnostic source hooks and private binaries are removed from
the retained implementation. Raw accepted and rejected evidence stays in
`.local/android-chrome-experiments-20261027/`, including the separate protocols, shader
probes, PNGs, resource identities, final patch and build provenance.

### Final build validation

The final Android guard also requires one mip level: `TextureContents` can pass through
an existing texture instead of allocating the requested snapshot. External, cube and
multiple-mip inputs keep the original shader. The measured render targets already
satisfy this restriction. The independent confirmation remains a separate cohort; the
final smoke deliberately reuses its own previously accepted, unchanged baseline and
collects a fresh candidate after the final narrowing.

The final Release engine SHA-256 is
`25e25272ffbe6a1dda640d102341e14bdb9cea29f0f485cb9e152a7301f1c540`. Its delivered
application passes 432/432 tests, including 417/417 binding cases and the original WPT
thresholds. Both test and measurement APKs preserve all frozen AOT, assets and other
native payloads; only `libflutter.so` changes. Three compile-time cache-key assertions
pass. Three shared C++ sources have private macOS compile-only checks; there is no new
macOS or iOS runtime/pixel certification. The last narrowing is inside the Android-only
preprocessor branch.

An earlier full suite used stale diagnostic objects because restoring source also
restored old modification times. That result is excluded from final acceptance. The
restored inputs were explicitly rebuilt, and the final engine and runtime logs are
checked for the absence of the temporary resource hooks. Accepted exploratory,
confirmation, pre-narrowing smoke and final smoke samples remain separately labeled;
partial fixture failures and rejected native probes are retained with their reasons.

The final single-mip candidate smoke retains the gain: Weave soft is 18.359 to 32.307
callback FPS and raster p50 is 54.819 to 31.032 ms. All 128 image-pair comparisons are
exact RGBA pixels: 36 exploratory and 36 confirmation fixed-image pairs, 16 initial
viewport pairs, 12 pre-narrowing smoke pairs, and 12 fixed plus 16 viewport pairs for
the final candidate. These pixel counts combine passing checks; performance cohorts are
not pooled. The viewport grid covers two scenes, two fixed phases and four scales.
Private application, APK, probe and object copies are cleaned after recording the
receipts; sources, accepted/rejected evidence and maintained engine/SDK builds remain.

## Android GLES Weave crisp follow-up (2026-10-27)

A separate follow-up retains a sparse-stroke framebuffer-screen shader on the same
physical Pixel 4 / Adreno 640. Weave crisp improves from 30.393 to 42.509 callback FPS,
while its source snapshots, quantization and MSAA boundaries remain unchanged. The
baseline includes the preceding Weave-soft optimization. Rebuilding that baseline after
shader-tool regeneration reproduces its original engine hash exactly, avoiding a
compiler/build-basis mismatch.

### Transparent stroke fragments

Each thin screen-blended stroke still renders into its existing RGBA8 snapshot. Its
bounding rectangle contains many transparent texels. The new fragment shader discards
zero-alpha source samples and otherwise executes the original sampling, opacity and
blend math. The generated GLES shader hoists its destination fetch before the discard,
so this result establishes savings in remaining arithmetic and writeback, not removal of
that initial fetch.

Eligibility is limited to unfiltered geometry with the existing stroke
`kPreventOverdraw` mode, during Android GLES Canvas RGBA8 replay. Source and destination
must be RGBA8, the source must have one mip and a regular 2D or multisample 2D type, and
the final pipeline must disable depth writes and ignore stencil. The existing
framebuffer-screen caller supplies destination opacity one. Fills, filtered sources and
layer restores do not use this sparse variant; the preceding nearest/unit-opacity
fixed-function screen path remains first. No new public API, cache-key flag,
configuration, source-copy rule or pass scheduler is introduced.

An earlier broader variant also improves Weave crisp by about 40% and passes its frozen
material-performance gate, but all three Bloom-crisp pairs regress by about 2.4%. It is
not selected. The narrower stroke variant receives a fresh, separate three-pair
confirmation; the two performance cohorts are not pooled.

### Independent Release confirmation

The protocol is frozen before measurements: crossed B1/C1/C2/B2/B3/C3, six scenes, 30
warmup and 120 measured callbacks per scene, 880 x 480 backing pixels, DPR 2.75 and
fixed 60 Hz. Retention requires more than 5% median paired mean-frame-interval
reduction, positive direction in every primary pair and no material regression in the
other five scenes. This cohort records 2,160 measured callbacks per variant. Real
resumed foreground, semantics disabled, no external native AX queries or screenshots,
thermal/power/refresh gates and installation before cooldown remain required. Mac
activity is recorded without an idle veto under the existing phone-local gate
authorization.

| Scene       | Baseline FPS | Stroke candidate FPS | Baseline / candidate raster p50 |
| ----------- | -----------: | -------------------: | ------------------------------: |
| bloom-crisp |       59.022 |               58.544 |              10.153 / 10.283 ms |
| bloom-soft  |       24.885 |               25.059 |              40.123 / 39.798 ms |
| orbit-crisp |       60.018 |               60.017 |              16.625 / 16.599 ms |
| orbit-soft  |       48.257 |               48.258 |              20.018 / 20.098 ms |
| weave-crisp |       30.393 |               42.509 |              32.892 / 23.517 ms |
| weave-soft  |       32.314 |               32.317 |              31.023 / 31.055 ms |

Weave-crisp throughput improves 39.87%; the three paired mean-frame-interval reductions
are 28.51%, 28.20% and 28.52%. Other scenes' median FPS changes stay within 1%. At the
Orbit-crisp refresh cap, raster p50 is 16.625 to 16.599 ms; it does not establish an
additional speedup. Raster timings include CPU, driver and synchronization costs.

The earlier same-phone Chrome reference is 60.010 callback FPS for Weave crisp. Against
that historical reference, Flax's deficit falls from about 49.4% to 29.2%; no new Chrome
cohort is taken here. These are callback-throughput comparisons, not physical display
presentation counts or cross-device GPU comparisons.

### Pixels and remaining work

The actual generated shader passes 576 native Release cases / 150,994,944 channel
comparisons exactly. They cover nearest/linear fractional sampling, native/emulated
decal, single/MSAA4 targets, sparse/dense/zero sources, valid RGBA8 destination channel
and alpha pairs, six opacities, scissor and a subsequent sample-coverage draw. Both
actual generated shader strings are verified in the probe executable. The final
application also passes all 60 exact RGBA image pairs: 36 fixed source/boundary pairs
plus 24 viewport pairs across Bloom soft, Weave crisp and Weave soft, two phases and
four raster scales. No WPT tolerance is relaxed.

A separate diagnostic observes 55 new-path selections and 65 GLES render passes in each
of 150 consecutive Weave-crisp root draws, including warmup. This confirms activation
and the unchanged pass count; source snapshots and their pass overhead remain candidates
for future investigation. The trace reports 35 category-setup notices and three
discarded chunks, and its Android-log datasource is empty. It is used only for the
observed activation/pass signatures, never as a loss-free capture or a ranked timing
sample. The initial config-path permission rejection is retained; feeding the same
Perfetto configuration through stdin resolves it.

### Final acceptance and scope

The final engine SHA-256 is
`54773d5ae22b1598324ab7ada793a8452e5f1f2588bdba86e5e0df18f5909bf2`. The delivered
Release APK passes 432/432 tests, including 417/417 explicit binding reports and the
original Canvas/WPT thresholds. Signature, one V8 closure, 16 KiB native alignment,
AOT/assets identity and the absence of temporary resource hooks are audited. Three
shared C++ sources also pass private macOS compile-only checks. Other backends keep the
existing shader; no new Apple runtime or other-GPU certification is claimed.

The first full execution also reports all 432 tests passed, but its integration binding
map omits one GC result and the strict host report-count gate rejects it. Recovery logs
confirm that omission; its internal cause is not established. A single fresh execution
of the identical APK produces all 417 successful binding reports. Both executions are
preserved; no source, AOT, test or tolerance change is used to obtain the final
acceptance.

The additional maintained cost is one fragment shader, its independent pipeline and a
private stroke tag through the existing draw path. The broader sparse variant is
removed; no opaque-destination or alternate-sampling variant is stacked onto this
change. Existing rejected quantization, AA, reactor, state-cache and allocator
experiments are not repeated. The remaining gap does not justify removing an unproven
RGBA8 snapshot or MSAA boundary.

Four workspace heads and all unrelated dirty files are preserved. Task-private
applications, APK/engine/probe/object copies and the private trace-processor binary are
removed after validation, while source, backups, raw accepted/rejected evidence, PNGs,
the trace and maintained engine/SDK builds remain in place. Original phone refresh
settings and the four pre-existing application install paths are verified. Evidence is
retained in `.local/android-weave-crisp-20261027/`; nothing is committed, pushed, merged
or rebased.

## Android GLES tight screen scissor (2026-10-28)

The follow-up retains a final-draw scissor optimization on the physical Pixel 4 / Adreno
640, Android 13, driver 0490.0. Its baseline already includes the zero-alpha screen
skip. Weave crisp improves from 42.507 to 60.017 callback FPS, reaching the experiment's
fixed 60 Hz cap. The earlier same-phone Chrome reference is 60.010 FPS; Chrome is not
remeasured here. Equal capped callback rates do not establish equal GPU work or physical
presentation counts.

### Preserve the source image, restrict its transparent region

SkPath's fast bounds include curve control points, which can enclose much more area than
the painted curve. The original source snapshots and full textured quads remain
unchanged. Eligible translation-only unfiltered screen strokes obtain conservative tight
path bounds, padded by the existing stroke radius/cap/join calculation and two
additional pass pixels for sampling. If the inherited-clip intersection reduces the
source quad area by more than 20%, only that draw's scissor is reduced. Non-finite or
unsupported bounds, transforms, formats and pipelines keep the existing path.

The geometry reference follows the existing immediate draw lifetime of the child
contents and replaces its private boolean stroke tag. A read-only pass query finds the
pending or last recorded scissor. The previous scissor is restored after drawing,
including failure, so following sprites, text and clip operations keep their state. No
source texture dimensions/origin, UVs, sampler, shader, MSAA, quantization boundary,
draw order, JS API or DOM capability changes. The geometry query is Android-only; the
optimization call remains scoped to the existing GLES Canvas RGBA8 sparse-screen
pipeline. Other backends keep their existing draw path.

### Release confirmation and precision

The protocol is frozen before timing: B1/C1/C2/B2/B3/C3, six scenes, 30 warmup and 120
measured callbacks per scene, 880 x 480 backing pixels, DPR 2.75, fixed 60 Hz and 2,160
admitted callbacks per variant. Real resumed foreground, semantics false, thermal, power
and refresh gates remain required. No external native AX query or screenshot occurs
during the native process. Mac activity is recorded without an idle veto under the
existing phone-local gate policy.

| Scene       | Baseline FPS | Tight-scissor FPS | Baseline / candidate raster p50 |
| ----------- | -----------: | ----------------: | ------------------------------: |
| bloom-crisp |       58.536 |            59.025 |              10.197 / 10.508 ms |
| bloom-soft  |       24.882 |            25.144 |              40.338 / 39.845 ms |
| orbit-crisp |       60.006 |            60.012 |              16.579 / 16.581 ms |
| orbit-soft  |       48.578 |            48.246 |              19.908 / 20.223 ms |
| weave-crisp |       42.507 |            60.017 |              23.527 / 16.587 ms |
| weave-soft  |       32.314 |            32.319 |              31.037 / 31.047 ms |

Weave-crisp throughput improves 41.19%. Its three paired mean-frame-interval reductions
are 29.16%, 29.60% and 29.16%, satisfying the frozen requirement of positive direction
in every pair and more than 5% median improvement. Other scenes' median FPS changes
range from -0.68% to +1.05%, within the original material-regression guard. No broad
speedup is claimed for them. Bloom-crisp inclusive raster p50 is 10.197 to 10.508 ms
while its callback FPS improves slightly; raster includes driver/scheduling/pacing, not
just GPU execution. Candidate Weave-crisp round raster p50s range from 10.310 to 16.607
ms at the refresh cap, so neither those spans nor FPS are a pure-GPU ratio.

All 72 exact RGBA image pairs pass: 24 viewport pairs over three scenes, two phases and
four raster scales; 36 formal fixed source/boundary pairs; and 12 additional diagnostic
fixed-image pairs. The unchanged fragment shader does not repeat the prior native
quantization sweep. The delivered Release APK passes 432/432 tests and 417/417 explicit
binding reports with the original Canvas/WPT thresholds. Signature, AOT/assets identity,
one V8 closure, 16 KiB alignment and absence of temporary resource hooks pass. Four
shared C++ sources pass private macOS compile-only checks; no new Apple runtime or
other-Android-GPU certification is claimed.

A final compile-boundary cleanup makes the geometry virtual interface depend only on
Android, rather than a per-target GLES define. Caller eligibility stays GLES-scoped. The
rebuilt Android engine is byte-identical to the formal candidate, so its audited APK,
pixel evidence and performance cohort remain exact matches. The final engine SHA-256 is
`22f9df83de05dd5895365e4e6a31ce13638d3e73691cd6cfb702eeed7f837d28`.

A separate trace observes 55 tight-scissor selections and 65 GLES passes in each of 150
consecutive Weave-crisp root draws, including warmup. Source pass count and texture
sizes are unchanged; fewer transparent pixels participate in texture/framebuffer reads
and fragment processing. The trace reports 35 category-setup notices and three discarded
chunks. Only the observed activation/pass signatures are used; no loss-free capture or
diagnostic timing sample is claimed.

### Other pass and allocation candidates

The retained resource diagnostic still shows overlapping source lifetimes: the
optimistic same-frame color-target model saves only 784 resolved-color bytes for Weave
crisp. Exact depth configurations repeat seven times among 60 offscreen uses, leaving 53
classes; the old trace's depth field is a boolean, not resource identity. These facts do
not justify a new shared attachment allocator. Atlas pass merging would require proven
per-region viewport/UV/decal, clipping and lifetime behavior. It is deferred rather than
removing an unproven source or MSAA boundary, especially now that the measured target
reaches the existing refresh cap.

The implicit-MSAA allocator does construct an unused resolve texture object, but that
object never initializes image storage. A separate native driver-call probe measures
about 0.00679 ms for 55 GL-name creation/deletion pairs. It excludes C++ object
overhead, drawing and GPU allocation; it is not an application speedup or a total-cost
bound. No production branch is added for this low-value candidate. Previously rejected
quantization, AA, reactor and state-cache experiments are not repeated.

The initial prototype fails to compile because the generic Contents interface has no
geometry accessor. It is corrected by carrying the existing stroke geometry reference;
no failing binary enters the accepted cohort. All four workspace heads and unrelated
dirty files remain protected. Private apps, APK/engine/object/probe copies and the
private trace processor are cleaned after validation; source, backups, raw admitted and
rejected evidence, PNGs, trace and maintained engine/SDK builds remain. Original phone
refresh settings and four original application install paths are verified. Evidence is
in `.local/android-weave-passes-20261027/`. Nothing is committed, pushed, merged or
rebased.

## Android GLES soft filter investigation (2026-10-28)

No new rendering optimization is retained. Pixel 4 / Adreno 640 Release traces locate
442 GLES passes per Bloom-soft root draw and 340 per Weave-soft draw. In 116 complete
steady root draws per scene, each frame contains respectively 73 and 56 three-pass
Gaussian chains (padding/downsample, Y and X), including one shadow. The blur stages
each cover about 3.71 and 14.81 million texels per frame. These are texture extents, not
counts of nontransparent ink. No explicit blit occurs in either measured window: the
copies are textured render passes. Pass counts and inclusive driver spans do not
establish GPU execution time or an application speedup. Diagnostic traces remain outside
throughput cohorts.

Two engine-only APK trials preserve the frozen AOT/assets and phone-local 60 Hz,
foreground, semantics-disabled, nominal-thermal and power gates. The exact RGBA gate
rejects both before extending their performance cohorts:

| Trial                                          | Bloom soft FPS | Weave soft FPS | Exact image pairs |
| ---------------------------------------------- | -------------: | -------------: | ----------------: |
| Matched baseline                               |         25.230 |         32.309 |         Reference |
| Borrow contained resolved bitmap for GLES blur |         25.139 |         32.451 |              6/12 |
| Omit aligned unorm transparent-padding copy    |         25.962 |         35.346 |              0/12 |

Each value is one untraced 30-warmup/120-sample window, not a stable throughput
estimate. Backing-image differences for the bitmap trial affect 514 Bloom-soft and 4,524
Weave-soft channels, with maximum differences of two and three byte codes. Padding-copy
omission affects 3,490 and 9,646 channels respectively; its shadow also changes crisp
pixels. The largest difference across its six scenes is three byte codes. Both
candidates are restored without changing sampling, quantization or WPT tolerances to
accommodate them. All 36 diagnostic control image pairs match the original engine
exactly.

A matrix-snapshot depth/stencil prototype activates zero times: these soft matrix
results render directly into the parent. No attachment API or branch is retained.
Kernel-generation and interpolation CPU scopes total at most about 0.27 / 0.21 ms per
steady root, including tracing; that small ceiling does not justify a new cache. A
sparse-blur scissor would need conservative ink bounds propagated through nested
filtered layers while preserving existing texture extents and origins. That broader
metadata/lifecycle work is deferred; no safe speedup is inferred from the unused texture
area alone. Earlier quantizer, single-sample, reactor-drain and allocator experiments
are not repeated.

The restored source and maintained engine are byte-identical to the starting state,
including engine SHA-256
`b85a1cf8691dfa1ca5efef8c7def36d2fb4b7dc1c114ebdb6436e8010013a79a` and the three Android
packaging archives. The already validated normal APK therefore remains on that engine.
Full acceptance and viewport grids are not rerun for rejected binaries; no new browser,
Apple or other-GPU certification is claimed. Local evidence is in
`.local/android-soft-filters-20261028/`. Private APK, engine and trace-database/tool
copies are cleaned, with source, exact pixels, rejected trials, compressed traces and
maintained builds retained. Nothing is committed, pushed, merged or rebased.

### GLES padding-copy precision follow-up

The copy-elision assumption is tested separately on the same Pixel 4 / Adreno 640 driver
using the maintained engine's actual generated GLES3 texture-copy and Gaussian shaders.
Eight deterministic premultiplied RGBA8 inputs cover small, odd, wide and power-of-two
texture sizes. These are offscreen diagnostic inputs, not new Afterglow throughput
samples or a full renderer acceptance run.

The existing linear padding pass is not a byte-preserving move on this driver: it
changes source bytes in all eight cases, with a maximum difference of two codes. The 896
x 265 case changes 26,197 channels. Interior witnesses include source channel values 6
-> 7 and alpha 23 -> 24, two pixels inside the image; the difference is therefore not
confined to the transparent-border clip. Nearest-neighbor copy preserves every source
byte in all eight cases. Raising both float and sampler precision still leaves
source-byte differences in all eight cases. This isolates the linear resampling/store
path as observable behavior; it does not identify a particular undocumented hardware
instruction.

A correction prototype retains the old padded UV grid and kernel-offset constants, then
maps each Gaussian tap to the physical unpadded input in the fragment shader. All eight
first-Y-blur RGBA8 comparisons still differ from the original copy-then-blur path;
differences also exist when the blur is written to RGBA32F before its final byte store.
Restoring coordinates alone cannot restore the already changed, stored intermediate
pixels. Merely changing the old copy to nearest sampling or higher precision would also
change the existing output and does not meet the exact-pixel contract.

No production shader or engine source is changed. A fully equivalent fused shader would
need to reproduce the old resampling, intermediate RGBA8 store, and subsequent linear
reads for the contributing texels. The added sampling, rounding and driver-specific
validation is not justified by the prior unaccepted single-round gain; no stable speedup
is claimed and no app FPS cohort is started for this rejected prototype. The original
copy, sampling and quantization remain in place, with no WPT tolerance changes. Evidence
and frozen shaders are kept in `.local/android-padding-precision-20261028/`; the private
local/phone probe binary is removed. The maintained engine and three Android archives
remain byte-identical.

## Android GLES conservative soft-scissor trial (2026-10-28)

The conservative blur-scissor candidate is rejected. A narrow three-pair soft-scene
cohort passes its primary performance and exact-pixel gates, but an independent
six-scene regression check and one matched confirmation both observe lower Orbit-soft
throughput. The six engine-file increments are removed; the existing renderer and all
earlier accepted optimizations remain at their exact starting source bytes.

The prototype carries conservative value-only ink bounds from a first unfiltered stroke
in a fresh transparent Canvas layer. Further commands or a restarted pass invalidate the
proof. Plain layer copies and full-source snapshots can propagate it to an unscaled,
translation-only RGBA8 decal Gaussian filter. Y/X draw scissors can then skip
sufficiently large transparent regions while preserving every full clear, padding copy,
texture dimension/origin, UV, MSAA resolve and RGBA8 store. No new shader, quantizer,
public API or cache is used. This describes rejected source kept only with the local
experiment evidence, not the maintained implementation.

The physical Pixel 4 / Adreno 640 runs Android 13, driver 0490.0, Release/AOT at 60 Hz
with the same 880 x 480 backing and frozen AOT/assets. The original phone-local
foreground, semantics-disabled, nominal-thermal and power gates remain. Every round
cools for at least 60 seconds and starts with both skin sensors at or below 33.8 C. Mac
activity is recorded without a host-idle veto. No native AX-tree reads or screenshots
occur during the app process; all pixel readback follows timing.

The registered soft-only order B1/C1/C2/B2/B3/C3 uses 30 warmup and 120 measured
callbacks per window. Pooled FPS divides 357 callback intervals by their total elapsed
vsync time per variant; it is not the mean of per-round FPS.

| Scene      | Baseline pooled FPS | Candidate pooled FPS |  Change | Baseline / candidate raster p50 |
| ---------- | ------------------: | -------------------: | ------: | ------------------------------: |
| Bloom soft |              24.901 |               24.788 |  -0.45% |              39.747 / 40.100 ms |
| Weave soft |              32.301 |               35.754 | +10.69% |              30.968 / 27.974 ms |

Weave improves +11.06%, +10.52% and +10.50% across the three pairs. The separate
six-scene screen then raises an Orbit-soft concern. Exactly one additional matched pair
is registered before collecting its follow-up samples; these samples remain separate
from the original primary gain cohort. All four six-scene rounds are kept:

| Scene       | B1 FPS | C1 FPS | B2 FPS | C2 FPS |     Paired change |
| ----------- | -----: | -----: | -----: | -----: | ----------------: |
| bloom-crisp | 59.983 | 59.990 | 59.985 | 59.988 |   +0.01% / +0.00% |
| bloom-soft  | 24.120 | 24.534 | 23.101 | 24.872 |   +1.71% / +7.67% |
| orbit-crisp | 59.992 | 59.993 | 59.982 | 59.990 |   +0.00% / +0.01% |
| orbit-soft  | 48.897 | 47.913 | 48.226 | 45.758 |   -2.01% / -5.12% |
| weave-crisp | 59.986 | 59.493 | 59.983 | 59.978 |   -0.82% / -0.01% |
| weave-soft  | 32.448 | 35.868 | 32.447 | 35.870 | +10.54% / +10.55% |

Orbit soft is lower in both pairs, by 2.01% and 5.12%; its raster p50 also rises 19.987
-> 20.499 ms and 20.209 -> 21.502 ms. These observations do not isolate a particular
driver or GPU cause, but they fail to establish the required absence of regressions. No
further gain-seeking rounds, scene special cases or extra metadata rules are added to
rescue the candidate.

The capped Bloom-crisp raster p50 changes 9.981 -> 16.624 ms in the first screen, but
the unchanged baseline itself measures 16.682 ms in the repeat, against 16.615 ms for
the candidate. Both variants maintain about 60 FPS. That timing-mode change is therefore
not assigned to the candidate. Aggregate FrameTiming values are not paired causally with
adjacent callback gaps or treated as pure GPU work.

All 84 candidate image pairs match byte-for-byte: 36 fixed images across the primary
three pairs, 24 viewport/phase pairs, and 24 fixed images across the two six-scene
pairs. Another 36 baseline-repeat comparisons also match. The viewport grid covers Bloom
soft, Weave crisp and Weave soft at two deterministic phases and scales 0.5, 1.0, 1.25
and 2.0. Candidate Android Release original-threshold acceptance passes 432/432,
including 417 explicit Widget binding cases; WPT tolerances are unchanged. Those
correctness results do not override the performance rejection.

A diagnostic trace, excluded from throughput, observes 55 Y and 55 X scissor selections
and the original 340 GLES passes in each of 116 complete steady Weave root draws. Bloom
has no selections and 442 passes per root. This proves activation and pass preservation,
not GPU execution duration. Four shared source files compile for macOS to private
outputs. No new Apple runtime, other-GPU or browser performance validation is claimed;
deeper driver attribution is skipped after the failed regression gate, and the
prototype's maintenance cost is not accepted.

The maintained engine and all three Android packaging archives return byte-for-byte to
their starting versions. The normal public Release APK is rebuilt and verified against
that restored engine after ordinary NDK symbol stripping, including signature, Canvas/V8
closure, Dart AOT and 16 KB alignment checks. Private apps, binaries, archive backups,
objects and trace databases/tools are removed; source, raw JSON/PNGs/logs, lossless
compressed trace and concise receipts remain under
`.local/android-soft-scissor-20261028/`. Nothing is committed, pushed, merged or
rebased.

## Android GLES Orbit/Weave paired follow-up (2026-10-28)

A narrower blur-scissor cost guard is retained after a fresh six-scene cohort and
correctness checks. It requires more than 50% area reduction for each Y/X draw, instead
of the rejected prototype's 20%. The first-draw transparent-pass proof and its
invalidation/propagation remain value-only. This adds no shader, quantizer, texture
cache, public JS API, DOM feature or scheduler policy. Full clears, padding copies,
texture extents/origins, UVs, MSAA, RGBA8 stores and draw order are unchanged. The
existing unfiltered final-screen scissor keeps its separate 20% guard.

The same physical Pixel 4 / Adreno 640 / Android 13 / GLES Release setup and phone-local
gates apply. A single frozen AOT/assets APK is repackaged with only its engine changed.
Full six-scene order preserves the context of the earlier Orbit regression. Four crossed
diagnostic traces use B/C/C/B order, 900 frame markers per trace, and 116 complete
steady raster roots per requested soft scene. Traced FPS is excluded from ranking. CPU
stacks, scheduler states and frequency events are used; Release GPU elapsed-time queries
remain disabled.

The old prototype leaves Orbit at 178 GLES passes and Weave at 340. Orbit selects about
20 Y/16 X cuts; its cost is predominantly on-CPU, with almost no EGL sleep. Prime-core
execution falls from 84%/100% in controls to 67%/53% in candidates, so migration
confounds direct driver-cost attribution. GPU frequency remains 345 MHz. Weave
consistently selects 55 Y+55 X cuts at 585 MHz. Its mean EGL swap span falls 8.05/8.21
-> 5.34/5.38 ms while mean on-CPU work stays close to 23 ms. Long sleeps are inside
`eglSwapBuffers -> queueBuffer -> waitForever`. Android's
[BufferQueueProducer](https://android.googlesource.com/platform/frameworks/native/+/refs/tags/android-13.0.0_r8/libs/gui/BufferQueueProducer.cpp#1069)
waits for the prior queued acquire fence to throttle EGL production. The wait is
preserved; reducing real filter work is the measured approach.

The retained guard selects no Orbit blur cuts and about 52 Y+52 X cuts per Weave root in
its activation diagnostic. Crisp scenes remain near 60 FPS. Their longer aggregate
raster spans can include `dequeueBuffer` sleeping inside pass execution: matched traces
show about 10.6-11.2 ms of on-CPU raster work for both implementations. Neither those
wall spans nor swap waiting are described as pure GPU duration.

The fresh untraced order B1/C1/C2/B2/B3/C3 measures 4,320 callbacks after 1,080 warmups.
Pooled FPS uses 357 intervals per scene/variant divided by total elapsed vsync time. No
gain-seeking extension of the cohort is performed.

| Scene       | Baseline pooled FPS | Candidate pooled FPS |  Change |
| ----------- | ------------------: | -------------------: | ------: |
| bloom-crisp |              59.833 |               60.010 |  +0.30% |
| bloom-soft  |              24.964 |               24.737 |  -0.91% |
| orbit-crisp |              59.998 |               60.002 |  +0.01% |
| orbit-soft  |              48.570 |               48.028 |  -1.12% |
| weave-crisp |              59.999 |               60.005 |  +0.01% |
| weave-soft  |              32.307 |               35.761 | +10.69% |

Weave soft improves +10.51%, +10.49% and +11.06% across the three pairs. Its pooled
raster p50 drops from 31.026 to 28.052 ms. Orbit changes -3.31%, -1.34% and +1.36%: the
pooled -1.12% is inside the preregistered 2% noise allowance, with no repeated
CPU/raster regression across all pairs. It is not claimed to be an Orbit speedup or
proof of exactly zero cost. All remaining scenes pass the registered guard;
near-refresh-rate raster mode changes are checked against actual CPU/wait scopes.

All 60 registered candidate pixel comparisons are byte-exact: 36 backing/screen pairs
from the three six-scene pairs and 24 phase/scale viewport pairs for Bloom soft, Weave
crisp and Weave soft. The original-threshold Android Release suite passes 432/432,
including 417 explicit Widget binding results. No WPT tolerance, origin, sampling grid
or quantization change is accepted. Non-Android code is the same as the previously
compiled shared prototype, except for an Android-only cost guard; no fresh Apple runtime
or other-GPU performance certification is claimed.

The four paired traces have complete CPU profiles and no error/data-loss statistics;
unsupported vendor-ftrace notices remain recorded. The initial preflight and final
activation trace lack CPU stack samples despite complete frame/scheduler data and are
not used as paired CPU profiles. SurfaceFlinger FrameTimeline covers only a subset of
app frames, so it cannot establish full physical presentation FPS here.

The maintained raw engine, both JARs and SDK artifacts archive are synchronized. The
ordinary public Release build is verified against the selected engine after normal NDK
symbol stripping, including signature, Canvas/V8 closure, Dart AOT and 16 KB alignment;
it is not patched after building or installed over the user's app. Local evidence, raw
samples/images, source and lossless compressed traces remain in
`.local/android-orbit-weave-trace-20261028/`. Private app/binary/tool copies are removed
after receipts; earlier work and maintained builds remain. Nothing is committed, pushed,
merged or rebased.

## Integration review and current-main validation (2026-10-28)

The retained Metal and Android GLES paths were reviewed against the current local Flax
and maintained Flutter engine mains. Review covered their callers, nested DisplayList
state, texture and geometry lifetimes, scissor restoration, RGBA8 quantization and
proactive-GC ownership. Vulkan keeps its original intermediate format and resolve
behavior until platform validation is available. Rejected experiments above remain
excluded; this integration introduces no new rendering optimization or API.

The Android build helper now refreshes the engine JARs and SDK archive together with the
raw library. The legacy native runner uses an isolated consumer, clears stale success
receipts and waits for the current two-stage Canvas initialization; benchmark success is
recorded only after resource cleanup. A focused regression checks eight byte-exact
nearest/linear uniform-screen pairs, including a trailing antialiased draw. Analyzer
configuration excludes installed example dependencies, and desktop-launch tests cover
failed-test output even when a process exits zero.

Current-main validation includes the physical Pixel 4 Release suite (reported counter
432, 417 explicit binding results), the additional eight-pair sampling probe, macOS V8
runtime 58/58, headless Canvas 395/395, and example Widget and desktop integration
checks 1/1 each. The actual macOS Release Metal native suite passes with a reported
counter of 418 and original pixel/WPT thresholds. Debug and Release macOS engines and
the Android Release engine build successfully. Canonical GC headers and regenerated FFI
declarations agree. The final Android raw library, both JARs and nested SDK archive
contain the same engine bytes.

These are integration and correctness checks, not a new FPS comparison. The registered
paired measurements above remain the performance evidence. This review does not
recertify physical iOS, Vulkan, other Android GPUs or Chrome performance. Local main
integration is authorized; no remote push or publication is included.
