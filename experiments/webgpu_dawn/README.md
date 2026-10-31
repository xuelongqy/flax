# Dawn on macOS

This original experiment checks native WebGPU execution and Flutter composition. Its
seven texture, mapping, image, FFI, carrier-template and numeric-call patches are
preserved here as historical inputs. Their implementations now belong to the maintained
Flutter fork and are built through its ordinary Debug/Release targets; the helper no
longer copies sources, applies overlays or rewrites Ninja compile edges. The
[standard JS package](../../packages/flax_webgpu/README.md) uses normal native-asset
delivery and records its own acceptance. Historical comparison receipts below retain
their original inputs and are not new performance claims.

```text
Flax V8 JS -> existing @flax/ffi -> Dawn -> Metal -> pooled IOSurface
                                                    | producer shared event
Flutter Texture -> Impeller -> GPU event gate -> Metal fence -> texture sampling
                                                    | consumer shared event
Dawn BeginAccess <- retired texture lease <- Flutter GPU completion
```

## Scope

- Verify every output of a 262,144-element WGSL compute kernel. Record 40 measured
  batches after five warmups, with 32 dispatches per batch.
- Render the same 24-light animated shader through JS rAF and direct FFI. JS mounts the
  generated Flutter Texture in a normal FlaxView; Flutter clips it and overlays text.
- Reuse three IOSurfaces per session. Verify producer/consumer fences and actual GPU
  retirement, with three create/render/close cycles at 960 x 540 and 640 x 360.
- Deliberately hold a producer fence for at least 50 ms. Check that the GPU consumer
  cannot finish early, verify all 256 output pixels, then verify lease retirement.

This is a private probe, not a public WebGPU package. It does not implement
`navigator.gpu`, browser canvas adapters, Three.js or another platform. The separate
[standard JS API integration](../../packages/flax_webgpu/README.md) now uses this
texture path and adds a private mapped-buffer engine guard. Its standard frontend and
shared Core canvas are validated separately from this original probe.

## Run

Use macOS arm64, CMake, Ninja, Xcode and the repository's locked dependencies. The
pinned official Dawn Release archive requires **macOS 26 or newer**; Flax's platform
requirement is unchanged. The runner checks the archive's official SHA-256.

```sh
mkdir -p "$PWD/.local/tmp"
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
python3 experiments/webgpu_dawn/build_engine.py \
  --flutter-root /path/to/maintained/flutter --sdk /path/to/verified/v8-sdk
python3 experiments/webgpu_dawn/run.py --flutter-root /path/to/maintained/flutter
```

The helper delegates to the maintained engine producer and selects
`flax_mac_release_arm64`. The runner checks the current module and WebGPU interop
exports. It no longer relies on `.local/webgpu-dawn/engine-overlay.json` or a frozen
private engine. The V8 SDK and pinned Dawn SDK are separate producer inputs.

Workspace runtime/UI checks must also resolve Flutter packages from the maintained
checkout. Run its `bin/flutter pub get --enforce-lockfile` from the repository root when
the local package configuration points at a stock SDK, and put that SDK's `bin` first in
`PATH` when invoking workspace checks.

Pass `--flutter-root /path/to/flutter` to both helpers for another matching maintained
checkout. `run.py --build-only` builds without launching; `--preview` leaves the
animation running after acceptance. Close a previous preview before rerunning.

Generated projects, SDKs, builds, logs and raw receipts stay under
`.local/webgpu-dawn/`. The relocated `FlaxDawnProbe.app` remains runnable after removing
staged application sources. `provenance.json`, `native-compute.json` and
`application.json` record the built artifacts and measurements.

## Texture ownership and synchronization

`native/probe.mm` allocates three IOSurface pixel buffers and imports each into Dawn
once. Each publication creates a Metal texture view and a small lease; it does not
allocate new pixel storage or reimport the surface. A full pool skips a submission
instead of overwriting a live texture.

Dawn `EndAccess` exports its producer MTLSharedEvent and timeline value. The renderer
publishes immediately on the existing JS/UI call path, before GPU completion. The
private provider method in `native/flax_dawn_interop.h` lets the macOS texture adapter
return that view directly. Ordinary CVPixelBuffer providers retain their original path.

The Impeller Metal render pass recognizes this private view metadata. A small gate
command buffer on Flutter's queue waits for the producer event and updates a Metal
fence. The actual sampling encoder waits for that fence, including when command buffers
overlap. This extra gate avoids a CPU wait without relying on submission order between
Dawn and Flutter queues. Metal permits event waits only between passes; see
[Apple's event API](<https://developer.apple.com/documentation/metal/mtlcommandbuffer/encodewaitforevent(_:value:)>).

After sampling, Flutter encodes a consumer shared-event signal and retains the lease
through command-buffer completion. The view also owns the lease while Flutter caches or
retains it. Only the final lease release returns storage to the pool, after checking the
consumer timeline. Dawn's next `BeginAccess` imports that consumer fence/value. The
measured macOS compositor and snapshots use one Flutter Metal queue; a second consumer
queue is rejected by the probe.

The archived texture patches describe the original composition changes. The maintained
fork now owns this bounded macOS profile; broader platform and upstream engine
acceptance remain separate work.

## Accepted macOS comparison

This section records the earlier immutable-surface versus fenced-pool experiment. The
fresh browser comparison below uses a shared WGSL asset, elapsed animation time, 31
submitted warmup frames and a final explicit report at the end of each phase.

[Baseline](results-baseline.json) reruns the original immutable-surface artifact on
Apple M2 Max, macOS 27.0.1, immediately before the optimized run.
[Optimized results](results.json) use the same Release/AOT workload, sizes and Dawn
`v20261026.205545`. Both runs must be compared at their recorded rAF cadence; the
earlier approximately 60 Hz receipt is not the baseline for this comparison.

The last 960 x 540 phase measured:

| Metric              |    Immutable baseline |                          Fenced pool |
| ------------------- | --------------------: | -----------------------------------: |
| JS FFI call P95     |              1.400 ms |                             0.669 ms |
| Native encoding P95 |              1.296 ms |                             0.576 ms |
| Flutter build P95   |              1.957 ms |                             1.167 ms |
| Flutter raster P95  |              1.239 ms |                             1.354 ms |
| Storage allocation  | Every submitted frame | Three surfaces per rendering session |

The baseline waited another **8.754 ms P95** from producer completion to Flutter's first
texture acquisition. The pool publishes before completion: submission to acquisition
measured **0.937 ms P95**, and submission to Flutter GPU completion callback measured
**2.407 ms P95 / 3.136 ms P99**. These are different timing endpoints; the baseline did
not instrument the full consumer completion path. In 921 of the last 931 texture
acquisitions, the producer event was still pending. The explicit GPU waits make this
early acquisition safe. The extra frame of handoff delay is absent from this measured
path, with a 0.115 ms increase in Flutter raster P95.

The optimized sample records **2,789 completed frames and 2,789 texture reads** across
three cycles. Each cycle allocated three surfaces, with no pool miss or retirement
error; session, device and texture-lease counts all returned to zero. The separate Metal
API/GPU validation run passed three cycles and 2,716 sampled completed frames. The
forced-fence check held the producer for 52.279 ms, verified 256 pixels and retired its
lease. Maintained Debug runtime/GC checks passed 58 tests; the focused decoration UI
suite passed five. These Debug checks use the normal maintained engine; the Release
application and Metal validation exercise the private overlay.

The unchanged compute kernel measured GPU batch P95 0.262144 ms in the baseline and
0.327680 ms in the optimized application, a 0.065536 ms difference with default
timestamp quantization enabled. The experiment establishes a texture submission/handoff
improvement, not a shader execution speedup. Both final measurements ran sequentially
after repository checks finished, with Metal validation disabled. An earlier launch
overlapping runtime checks is excluded. The screenshot was also inspected for clipping,
texture content and text.

The final receipt records frame-call, acquisition and consumer-completion percentiles,
allocation/reuse counts, validation and close results. GPU completion to the first
Flutter texture acquisition is a **signed CPU timing**: with fences, Flutter can acquire
metadata before the producer completes, so negative values are expected. It must not be
presented as physical presentation latency or directly equated with GPU read time.

## Chrome WebGPU comparison

[The browser receipt](chrome-results.json) compares Chrome **156.0.8078.49**, V8
15.6.75.19 and its `GraphiteDawnMetal` compositor with the maintained Flax Release/AOT
application. Both use Apple M2 Max on macOS 27.0.1, the same 3440 x 1440 / 120 Hz
display, DPR 1 and a 1100 x 728 content viewport. The canvas/Texture occupies a 960 x
540 display box with matching rounded clipping and overlaid text. The 640 x 360 backing
texture is upscaled into that same display box on both sides.

Both renderers read [scene.wgsl](scene.wgsl), SHA-256
`68661f2c01fe1e7ca883af8f1d3a88bd55415b278bc5389b0e5380433e52da24`. The uniform is 16
bytes, time starts at the first rAF callback, the target is `bgra8unorm`, and one
triangle executes the same 24-light fragment shader. Each process runs 960 x 540, 640 x
360 and 960 x 540 for eight seconds per phase. The first 31 submitted frames are
excluded. The measurement order is Flax, Chrome, Chrome, Flax; each browser uses an
isolated temporary profile, a visible window and default hardware WebGPU. No headless,
unsafe-WebGPU, disabled-validation or disabled-vsync flags are used.

The table gives the **range of each phase's P95 across the two rounds**, not a pooled
P95. GPU timestamps come from separate diagnostic runs; ordinary measurements contain no
frame readbacks. Browser COOP/COEP headers enable high-resolution CPU timing. Actual JS
callback intervals are recorded separately from the supplied rAF timestamps.

| Metric                                | Size      |           Flax |         Chrome |
| ------------------------------------- | --------- | -------------: | -------------: |
| JS thread render/submit call P95      | 960 x 540 | 0.125–0.490 ms | 0.050–0.070 ms |
| JS thread render/submit call P95      | 640 x 360 | 0.168–0.264 ms | 0.055–0.065 ms |
| WGSL producer pass GPU P95            | 960 x 540 |    0.327680 ms |    0.327680 ms |
| WGSL producer pass GPU P95            | 640 x 360 |    0.196608 ms |    0.196608 ms |
| Host-observed producer completion P95 | 960 x 540 | 1.106–1.691 ms | 1.530–1.685 ms |
| Host-observed producer completion P95 | 640 x 360 | 0.962–1.101 ms | 1.410–1.530 ms |

Both sustain approximately 120 JS callbacks/second after warmup. This is a
display-capped result, not their maximum throughput. Normal runs record 5,743 completed
Flax producer frames and 5,766 Chrome producer frames. No busy submissions are skipped
in those final runs; Flax has no pool miss or premature retirement. Every size passes
pixel verification. Native sessions, device owners and GPU texture leases retire to
zero. The additional Metal API/GPU validation run also passes all three cycles with
render timestamps enabled.

GPU execution is indistinguishable at the recorded default timestamp precision. The
JS-thread submission gap remains: excluding neither run, Flax's first 960 x 540 phase
has a 0.490 ms P95; its other three phases have 0.125–0.179 ms P95. The corresponding
Chrome phases span 0.050–0.070 ms. Three paired 960 x 540 phase-P95 differences are
0.055–0.129 ms; the first is 0.425 ms. Native encoding itself spans 0.106–0.431 ms P95
at that size, so the gap cannot be attributed entirely to JS FFI. These call timings
include their respective timer and bridge costs; they are not total CPU work across
every process.

The source paths explain an important scope difference: Flax performs native Dawn/Metal
encoding, sharing and notification inside its JS FFI call. Chrome serializes WebGPU
commands and executes backend work in its separate GPU process. That is an inference
from the implementation and trace, not a CPU hotspot profile. This probe also batches
the complete scene into one FFI call; it does not establish the cost of a future full
Flax WebGPU JS binding.

### Latency endpoints

Flax's producer completion interval starts inside the native render call and ends in a
native Dawn callback. Chrome's starts on the JS thread before encoding and ends when
`GPUQueue.onSubmittedWorkDone()` resolves there. Chrome therefore includes JS encoding
and browser notification/JS scheduling; Flax excludes the preceding JS-to-native call
overhead. Neither endpoint includes presentation; see the
[WebGPU queue contract](https://gpuweb.github.io/gpuweb/#dom-gpuqueue-onsubmittedworkdone).
The normal Chrome loop submits every rAF; completion Promises do not throttle rendering.
An earlier Promise-gated pilot is excluded. Diagnostic timestamp reads allow one pending
readback at a time and are not used for CPU, frame-rate or callback-latency comparisons.

Flax additionally measures submission to its Flutter consumer GPU completion callback:
P95 **1.343–2.265 ms** at 960 x 540 and **1.181–1.328 ms** at 640 x 360. This includes
the sampled Flutter rendering buffer, but still excludes WindowServer/display scanout.
The source also has a separate macOS `FlutterSurfaceManager.presentSurfaces` path: it
waits for command scheduling, may pace a supplied target presentation time, and commits
a CoreAnimation transaction. Its `notify` runs before transaction commit; neither that
notification nor the GPU callback is a measured display timestamp.

A separate Chrome trace matches page render marks inside `AnimationFrame` intervals,
then joins the frame ID to `AnimationFrame::Presentation`. All 988 measured marks match.
The software presentation-feedback P95 is **18.945–20.601 ms** at 960 x 540 and **12.320
ms** at 640 x 360. The trace is deliberately separate from performance runs. These
numbers include browser compositing/presentation feedback and must not be subtracted
from Flax's GPU completion numbers. Flax has no matching presentation feedback
measurement here, so **a same-endpoint screen-presentation latency gap remains
unmeasured**. Chromium describes these stages in
[Life of a Frame](https://chromium.googlesource.com/chromium/src/+/main/docs/life_of_a_frame.md).

### Reproduce the browser comparison

After building the native application with `run.py`, use the installed macOS Chrome:

```sh
node experiments/webgpu_dawn/compare_chrome.mjs
python3 experiments/webgpu_dawn/summarize_chrome_trace.py \
  .local/webgpu-dawn/chrome/chrome-trace-trace.json \
  .local/webgpu-dawn/chrome/chrome-trace.json \
  .local/webgpu-dawn/chrome/presentation-summary.json
```

`--browser-only` runs the three browser acceptance phases. The full runner performs two
ordinary rounds per renderer, independent GPU-timestamp runs and a separate Chrome
trace. `FLAX_DAWN_GPU_TIMING=1` enables the native diagnostic only; it synchronously
maps 16-byte timestamp results and must not be used to report normal submission latency.
Raw receipts, PNGs, logs and the trace remain under `.local/webgpu-dawn/chrome/`.
Browser/driver hashes identify the comparison sources separately from the packaged Flax
application's build snapshot. Temporary profiles and staged application copies may be
removed after recording the results.

## Limits

Steady-state frames contain no CPU pixel readback. Compute verification, the small
forced-fence pixel check and the three Flutter snapshots are explicit verification
readbacks. Snapshot count means verification operations; each screenshot asks for PNG
and RGBA, not a single driver transaction.

Rendering does not synchronously wait for GPU completion. The isolated fence check waits
during startup; closing drains Dawn with a ten-second bound. Callbacks do not retain the
session/device owner. Acceptance also checks that device owners and GPU texture leases
both retire to zero.

The dylib exports only its private C probe functions. Hiding Dawn's bundled Abseil/Tint
symbols is mandatory because exporting them collided with Flutter's dependency builds.
GPU timestamps retain Dawn's default quantization. Consumer completion is measured at
the Metal completion callback, including callback scheduling; it is not screen scanout.
No Impeller replacement comparison, multi-device/queue support, production device-loss
recovery, cross-platform acceptance or long-duration soak result is claimed.
