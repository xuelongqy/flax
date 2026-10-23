# Native Canvas batch migration

This macOS arm64 V8 experiment compares four ways to record solid black `fillRect`
operations and commit a real Flutter Picture:

| Path                 | Per-rectangle work                       | Commit                                                                  |
| -------------------- | ---------------------------------------- | ----------------------------------------------------------------------- |
| Native               | Shared JS Canvas encoder                 | Canvas plugin, one engine call, full C++ decoder and DisplayListBuilder |
| Dart reference       | Same installed JS Canvas encoder         | Retained test-only Dart decoder                                         |
| Minimal native batch | Same installed JS Canvas encoder         | Original fillRect-only C++ probe                                        |
| Native direct        | JSI host function and DisplayListBuilder | Native DisplayList completion                                           |

All four paths wrap their result in an outer Flutter Picture. The complete plugin enters
Dart once per batch and passes the shared byte view to one non-leaf engine call. Drawing
opcodes are decoded in the engine; image registration, retain calls and source Canvas
snapshots still cross the host boundary. The two minimal JSI probes hand off their
finished DisplayList once. No image readback or texture upload implements the native
handoff. Pixels are read back only for correctness checks outside the timing samples.

The JS fixture reuses the installed encoder's internal base constructor and `flush()`.
These are experiment-only accesses, not new public application APIs. The Canvas plugin
uses the complete engine decoder; its old Dart implementation lives in test/support. The
native branch retains `__flaxCanvasPrototype` in each runtime and explicitly releases
pending frames on runtime close.

## Build and run

The current paired implementation requires the Canvas engine extension, with Session
module fonts and PNG/JPEG/WebP export. The expanded suite passes 370 upstream workers
and all three original-threshold reference grids in Debug and Release. CSS font grammar
adds 315 valid and 16 invalid inputs through the documented Canvas adapter. See the
[migration record](../../docs/tasks/canvas-native-migration.md) for current checks; the
performance samples below retain their original API 4 provenance.

Use a separate Flutter worktree containing the prototype source changes. The build
helper recompiles that worktree's `runtime.cpp` and relinks separate binaries using
read-only objects from matching maintained debug/release builds. It neither changes the
base engine source nor overwrites its binaries. The release framework is cloned before
relinking. Build receipts contain source and binary hashes and exact commands.

The renderer overlay also recompiles `ContentContext` and its `AiksContext` allocation
site, plus the changed snapshot/blur and inline-pass consumers. This is required when
adding scoped filter command-buffer storage; replacing only the method implementations
would leave the old object allocation size in the isolated framework. The Canvas
allocation site is also rebuilt with InlinePassContext's deferred texture storage.
Header hashes in each receipt cover both internal layout changes.

Prepare this Flax worktree's ordinary dependencies and JS output first. Set absolute
workspace-volume temporary and output paths; the example below assumes this checkout is
on that volume:

```sh
mkdir -p "$PWD/.local/tmp"
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
export FLUTTER_ROOT=/path/to/maintained-flutter
export PATH="$FLUTTER_ROOT/bin:$PATH"
pnpm --silent run js:build
python3 experiments/canvas_native/build.py \
  --base "$FLUTTER_ROOT" --prototype /path/to/flutter-prototype-worktree \
  --output "$PWD/.local/canvas-native" --mode debug
python3 experiments/canvas_native/build.py \
  --base "$FLUTTER_ROOT" --prototype /path/to/flutter-prototype-worktree \
  --output "$PWD/.local/canvas-native" --mode release
export FLUTTER_ENGINE="$PWD/.local/canvas-native/engine-src"
dart --packages=.dart_tool/package_config.json experiments/canvas_native/run.dart debug
dart --packages=.dart_tool/package_config.json experiments/canvas_native/run.dart debug-app
dart --packages=.dart_tool/package_config.json experiments/canvas_native/run.dart release
dart --packages=.dart_tool/package_config.json tool/check_runtime.dart --engine=v8
```

The debug build produces both flutter_tester and FlutterMacOS.framework, then copies the
framework into an owned XCFramework. Neither application mode links back to the base
XCFramework. Build receipts record each binary's hash and verify Canvas exports.

The debug-app and release runners create disposable macOS consumers, use an ad-hoc
signature and disable only those consumers' App Sandbox so they can read fixtures and
write local receipts. Both compare the packaged framework with the selected engine after
removing signatures from temporary copies, then check the framework actually loaded by
dyld inside the application. The application and sources are deleted after recording
application-debug-app.json or application-release.json in the evidence directory. The
debug mode retains the original flutter_tester benchmark. These are local acceptance
runners, not distribution signing or sandbox configurations.

## Mobile acceptance

The mobile runner reuses the package's command, UI, bitmap/font and WPT suites. It
selects Hermes for iOS and V8 for Android, verifies the packaged engine and records
individual test results. Viewport and iOS semantics setup are shared with the normal
platform runner; worker assertions and pixel thresholds are unchanged.

Mobile builds require a complete, matching engine and patched Dart SDK. The mobile
helper clones the maintained output into the paired engine worktree and runs its full
Ninja target, including renderer shaders. Missing third-party checkouts are borrowed
read-only from the base checkout; writable outputs remain in the paired worktree. This
also refreshes the XCFramework or Android JAR used by Flutter application packaging.
Android exports the same Canvas dispatch/probe symbols as macOS and iOS. The Hermes
producer must include this branch's TypedArray index patch; use an isolated cache so the
maintained SDK remains unchanged. Simulator and device builds may share a prepared
cache with the same locked recipe. Cache validation unwinds overlapping patches in
reverse order in a disposable copy; changed recipes still require a fresh cache.

With the workspace-local temporary environment above:

```sh
node tool/ui_bundle.mjs --package flax_canvas
python3 /path/to/flutter-prototype-worktree/engine/src/flutter/flax/tools/build_hermes.py \
  --cache /path/to/flutter-prototype-worktree/.local/canvas-hermes \
  --target ios-simulator-arm64 --jobs 8
python3 experiments/canvas_native/build_mobile.py \
  --base "$FLUTTER_ROOT" --prototype /path/to/flutter-prototype-worktree \
  --output "$PWD/.local/canvas-native" --target ios-simulator-arm64 \
  --hermes-build /path/to/flutter-prototype-worktree/.local/canvas-hermes/ios-simulator-arm64
export FLUTTER_ENGINE="$PWD/.local/canvas-native/engine-src"
FLAX_CHECK_TARGET=ios-simulator-arm64 FLAX_CHECK_DEVICE=<simulator-udid> \
  dart --packages=.dart_tool/package_config.json experiments/canvas_native/run_mobile.dart

python3 experiments/canvas_native/build_mobile.py \
  --base "$FLUTTER_ROOT" --prototype /path/to/flutter-prototype-worktree \
  --output "$PWD/.local/canvas-native" --target android-arm64
export ANDROID_HOME=/path/to/android-sdk
export PATH="$FLUTTER_ROOT/engine/src/flutter/buildtools/mac-arm64/clang/bin:$PATH"
FLAX_CHECK_TARGET=android-arm64 FLAX_CHECK_DEVICE=<adb-serial> \
  dart --packages=.dart_tool/package_config.json experiments/canvas_native/run_mobile.dart
```

For physical iOS, build `ios-device-arm64` Hermes in a separate cache, then select
`--target ios-device-arm64 --mode release` in `build_mobile.py`. Set `FLAX_IOS_TEAM` to
the installed development team's identifier and use `FLAX_CHECK_TARGET=ios-device-arm64`
with the physical device UDID when running `run_mobile.dart release`. The helper
refreshes a missing cloned Apple SDK path from the active Xcode installation. Android
Release uses `--target android-arm64 --mode release` and `run_mobile.dart release`.

The disposable application uses `dev.flax.canvas.acceptance` and is uninstalled after
execution. Source/build receipts, application audits and per-case results remain in
`.local/canvas-native`. Device execution results and limits belong in the
[migration record](../../docs/tasks/canvas-native-migration.md).

## Measurement and limits

Each fillRect path warms up for 30 frames, followed by nine samples of ten frames. First
position rotates through all four paths. Timing includes the JS loop, encoding where
applicable, native/Dart recording, commit, the outer Picture and the microtask
checkpoint. Final Picture disposal, rasterization, frame scheduling, layout and display
presentation are excluded. Raw samples are saved as
`.local/canvas-native/benchmark-{mode}.json`.

The benchmark correctness check compares all RGBA pixels against the Dart reference,
tests non-finite coordinates, negative sizes, malformed packets and invalid native
targets, and verifies that runtime close releases an unconsumed probe frame and that
plugin close releases native host/surface/image registrations. The minimal probes
require coordinates to be finite with absolute values at most 100,000,000; rectangle
sizes must be nonnegative. The native probe decoder accepts only command version 1 with
`fillRect` records.

The complete decoder handles all 48 command opcodes and 13 path opcodes, drawing state,
clipping, text/metrics, filters, gradients, patterns, images and pixel uploads. The
application runners also execute the package's shared Dart-reference/native pixel/state
tests and the Canvas UI API regressions under Impeller. The temporary consumer uses V8
for the UI harness. Debug tester runs cover the Skia software path; debug-app runs the
same full integration/WPT suite as release in a real Debug/Metal application. Comparison
allows one 8-bit channel step for GPU rounding. Debug-only layout flags are checked only
in debug; real sizes remain checked in release.

See the [task record](../../docs/tasks/canvas-native-migration.md) for measured results
and validation. Native runtime ABI 2 and generated Flutter binding rules are unchanged.
The Canvas extension does not require an exact feature-version match. Browser
conformance and distribution signing remain outside these measurements. Mobile runtime
acceptance uses the separate runner above. The fillRect timings exclude frame rate; the
real-window experiment below measures drawImage frame cadence. The
[API audit](../../docs/architecture/canvas-api-coverage.md) records existing semantic
gaps.

The semantics validation includes the
[pinned WPT suite](../../packages/flax_canvas/test/wpt/README.md). The build helper also
overlays the changed renderer/snapshot objects and paired headers, and recompiles the
Metal libraries affected by the shared blend shader. It never rebuilds into or modifies
the maintained base outputs. All three reference grids pass their original pixel budget
and channel limit. The [task record](../../docs/tasks/canvas-native-migration.md)
records the source-bitmap quantization fix, per-stage evidence and platform limits. The
fillRect benchmark does not measure drawImage source snapshots, image-retain calls or
GPU raster costs.

## Picture snapshot experiment

Flutter already provides both Picture APIs:

```dart
final image = picture.toImageSync(width, height);
final readyImage = await picture.toImage(width, height);
```

The synchronous API returns a deferred image handle. Rasterization runs on the raster
task runner and may execute inline if that runner is already current. The asynchronous
API delivers its image through a Future. Neither return alone means pixels have been
copied to the CPU. Both APIs keep their existing implementation and signatures.

The runner also measures these APIs and a reused image at 64, 512 and 2,048 pixels per
side. Each source has 1,000 colored rectangles. Three warmups precede nine samples per
mode, with rotating order. The modes use the same default Flutter pixel format; these
measurements do not compare HDR snapshots with Canvas's explicit RGBA8 snapshots.

`api_return_us` ends when the handle or awaited image returns. `end_to_end_us` ends
after a scaled draw into a new Picture, asynchronous destination snapshot and raw RGBA
readback. This common endpoint includes GPU completion and CPU readback, so a deferred
handle's short return time cannot hide later work. The first sample of every mode and
size is compared byte-for-byte against the reused-image output. Cached image creation is
excluded from its samples. Source Picture recording, JS bridge/image-retain calls,
screen presentation and frame rate are outside this benchmark. For the asynchronous
mode, return time means awaited image delivery, not Future creation cost or time spent
blocking the UI thread.

Raw results are saved as `.local/canvas-native/picture-snapshot-{mode}.json`. Debug
software-raster results verify behavior; use the Release/Metal results for the GPU
comparison. Reuse the synchronous handle API when subsequent drawing can remain on the
rendering pipeline, and keep the asynchronous API for callers awaiting image delivery.
For static content, reusing one image avoids source rasterization on every draw.

The paired macOS arm64 Release/AOT/Metal run produced these medians (microseconds for
API return, milliseconds through first scaled draw and readback):

| Size        | Async delivery (us) | Sync handle (us) | Async total (ms) | Sync total (ms) | Reused total (ms) |
| ----------- | ------------------: | ---------------: | ---------------: | --------------: | ----------------: |
| 64 x 64     |                 637 |                6 |            1.327 |           1.328 |             0.431 |
| 512 x 512   |                 690 |                9 |            2.560 |           3.278 |             1.755 |
| 2048 x 2048 |                 831 |               13 |           16.851 |          16.994 |            15.816 |

The synchronous API reduces caller latency, but this run does not show a reduction in
total first-use work; the 512-pixel case was slower. A short handle-return time is not a
completed rasterization. Large-image readback dominates this endpoint, which must not be
interpreted as frame time. Both APIs remain available; no blocking GPU-wait API or new
engine entry is needed for the synchronous-handle experiment.

Debug's two experiment tests and the full Release experiment pass, including identical
snapshot pixels and all original WPT thresholds (22,642 / 33,000 for each grid). The
concise receipt is `.local/canvas-native/verification-picture-snapshot.json`.

## drawImage in a real window

With the same isolated engine selected, run:

```sh
dart --packages=.dart_tool/package_config.json experiments/canvas_native/run.dart frames
```

This builds a regular Release application using WidgetsFlutterBinding, a visible
CanvasView and the host's requestAnimationFrame/vsync scheduling. It does not use
WidgetTester, manual frame pumping, destination snapshots or pixel readback. Two frozen
source Canvases contain the same 64 colored, partially transparent rectangles at 256 and
1,024 pixels per side. The 512-pixel destination clears and redraws each frame.
Multi-image cases animate 64-pixel sprites within the destination.

- **OffscreenCanvas:** pass the source Canvas to each drawImage call, taking a new
  synchronous snapshot handle for every draw.
- **ImageBitmap:** create one bitmap per source before the experiment and reuse it.
  Preparation and first use occur before timing; source contents never change.

Each of the five cases runs both modes for three rounds, rotating case order and
alternating mode order. Each phase has 20 warmup frames, then at least two seconds and
30 measured frames. CPU submission brackets the JS drawing loop, explicit flush, native
batch decode and borrowed-image releases. Two additional probe host calls per frame
establish this bracket; their boundary cost is common to both modes. The host's ordinary
rAF call is also common.

Every sampled frame number must match a real FrameTiming report. The receipt contains
CPU submission, Flutter build/raster durations, vsync intervals and raster-finish
timestamps. FPS comes from those measured intervals, never from the reciprocal of CPU
submission time. FrameTiming raster duration is not GPU execution time; deferred source
snapshots can also execute outside the destination frame's raster span. These counters
do not measure physical display presentation or a GPU completion fence.

On Apple M2 Max (30-core GPU), macOS arm64 V8, Dart AOT and Impeller Metal, the
foreground window was 800 x 600 physical pixels at DPR 1 on a 120 Hz display. The
following values are medians of the three round results; CPU values are round p50s:

| Source      | Draws/frame | Snapshot CPU (ms) | Bitmap CPU (ms) | Snapshot FPS | Bitmap FPS |
| ----------- | ----------: | ----------------: | --------------: | -----------: | ---------: |
| 256 x 256   |           1 |             0.179 |           0.109 |        117.5 |      118.5 |
| 256 x 256   |          32 |             1.056 |           0.240 |        108.0 |      115.0 |
| 256 x 256   |         128 |             4.185 |           0.780 |         59.7 |      109.5 |
| 1024 x 1024 |           1 |             0.089 |           0.057 |        118.5 |      119.0 |
| 1024 x 1024 |           8 |             0.346 |           0.104 |        115.5 |      117.5 |

The 128-sprite snapshot phases measured 58.5, 59.7 and 61.7 FPS; bitmap phases measured
109.5, 108.0 and 110.5 FPS. Destination raster p50s for this case were 0.850/0.281 ms;
the 1,024-pixel, eight-draw case measured 0.963/0.199 ms. Low-load CPU results vary
between short phases and FPS is capped by display cadence; they do not establish a
monotonic image-size scaling curve.

### Dart calls and operation work

A second, separate Session instruments the Canvas host callback bodies. Its timings are
diagnostic and are excluded from the FPS comparison. It verifies exactly one commit per
sampled frame, N snapshotImageSync/closeImage pairs for the Canvas mode, and N
retainImage/closeImage pairs for the bitmap mode. Both therefore make **2N + 1 Canvas
host calls per frame** in this workload. Clear/fill/draw commands share one batch; rAF
and benchmark probes are outside that count.

For 128 draws, the diagnostic callback-body averages per frame were:

| Operation                       | Snapshot (ms) | Bitmap (ms) |
| ------------------------------- | ------------: | ----------: |
| snapshotImageSync / retainImage |         1.420 |       0.012 |
| closeImage                      |         0.078 |       0.011 |
| commit, including engine decode |         0.063 |       0.064 |

These body times exclude the outer JSI/Dart argument conversion and return boundary, and
do not wait for GPU completion. They cannot be added to timings from another Session to
form an exact per-frame decomposition.

The uninstrumented Session separately measures nine batches of 40,000 scalar (operation,
image-id) calls after two warmups, rotating an empty JS function, a normal Dart host
no-op and the real retain/close path. After subtracting the JS loop baseline, the no-op
boundary costs **2.048 us/call**. The complete retain/close path, including the JS
resource sweep and Dart work, costs **2.199 us/call**. At 128 draws, 256 such
image-reference calls would cost about 0.563 ms, estimated from the isolated loop; the
commit has a different payload and is measured separately.

Reusing a bitmap removes repeated snapshot creation and its rendering/resource work. It
does not reduce this implementation's number of image host calls. Static or rarely
changing sources should prepare and reuse a bitmap; changed source content requires
rebuilding that bitmap. This experiment does not compare a cache against a changing
source or include its cache-invalidation cost.

All 30 uninstrumented phases (6,630 frames) and ten diagnostic phases (569 frames)
passed, with matching frame timings, exact operation counts, no readback operations and
native host/surface/image registrations returning from zero to zero. Raw samples are in
`.local/canvas-native/draw-image-frames.json`; the concise source/build receipt is
`.local/canvas-native/verification-draw-image.json`. The runner deletes its copied
consumer and application. This adds experiment code only and uses the existing paired
engine API 4; it does not alter Canvas semantics, WPT thresholds or engine APIs. Mobile
devices, physical presentation timestamps and long-duration stress remain outside this
measurement.
