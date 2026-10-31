# Flax WebGPU

Optional standard JavaScript WebGPU objects backed by pinned Dawn/Metal. Core owns
`OffscreenCanvas`, `HTMLCanvasElement`, shared images and `CanvasView`; this package
registers the independent `webgpu` context. Canvas 2D remains optional and retains its
existing imports.

This is a working **macOS arm64 development profile**, requiring macOS 26 or later and
the maintained Flax engine below. It is not a published or CTS-conformant browser
implementation. The host-selected implementation uses existing direct JSI/libffi calls
internally; application code uses standard GPU objects without raw pointers.

## Use

The Dart host installs `const FlaxWebGpuPlugin()`. Add `FlaxCanvasPlugin` only when
Canvas 2D is needed. Application TypeScript uses the declaration-only SDK:

```typescript
import type {} from '@flax/core/host';
import type {} from '@flax/webgpu/globals';
import { CanvasView } from '@flax/core/bindings';

const adapter = await navigator.gpu.requestAdapter();
if (!adapter) throw new Error('No WebGPU adapter');
const device = await adapter.requestDevice();
const canvas = new OffscreenCanvas(960, 540);
const context = canvas.getContext('webgpu');
if (!context) throw new Error('The WebGPU plugin is not installed');
context.configure({ device, format: navigator.gpu.getPreferredCanvasFormat() });
// Render to context.getCurrentTexture(); Core presents at the JS checkpoint.
const view = CanvasView(canvas);
```

The [high-frequency call comparison](example/validation/high-frequency-call-results.md)
records the latest matched macOS/Edge measurements and which optimizations were
retained. The earlier
[encoding and submission comparison](example/validation/encoding-submit-results.md)
records bridge profiling and argument-allocation changes. The
[joint-GC comparison](example/validation/joint-gc-optimization-results.md) records
allocation fixes and same-period controls.

The [Spectrum studio](example/README.md) is an interactive three-scene example with
matching HTML and a repeatable frame-rate comparison. Its Flutter host is
[example/app/lib/main.dart](example/app/lib/main.dart). The separate runnable acceptance
scene is in [example/js/main.js](example/js/main.js), with its Flutter host in
[example/app/lib/acceptance.dart](example/app/lib/acceptance.dart). The runner prepares
host modules and the ordinary Flax native-asset plan. Flutter build hooks package the
selected native library; application code needs no SDK path or framework injection.

## Run on macOS

Use macOS 26+ arm64, the repository's locked pnpm/Pub dependencies, CMake, Ninja,
CocoaPods and Xcode. The maintained Flutter 3.47.9/Dart 3.13.7 checkout must have its
ordinary `flax_mac_debug_arm64` and `flax_mac_release_arm64` builds. Build them with
`engine/src/flutter/flax/tools/build_engine.py --sdk /path/to/verified/v8-sdk --mode <debug|release>`.
The V8 SDK is independent of Dawn. The engine retains its macOS 15 baseline; this
optional Dawn binary raises only the WebGPU profile to macOS 26. The current UI isolate
must use Impeller with Metal. Installation checks the optional engine interop version
and renderer query before creating a Dawn context. Disabling Impeller rejects WebGPU
installation with an explicit diagnostic.

The native producer is explicit. Obtain the locked official Dawn archive and extract its
single top-level directory into a local SDK directory, keeping the archive as
`dawn.tar.gz` beside `include/` and `lib/`. The producer verifies both the archive hash
and every extracted SDK input; ordinary checks never download it:

```sh
mkdir -p "$PWD/.local/tmp" "$PWD/.local/webgpu-dawn/sdk"
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
export PATH="/path/to/maintained/flutter/bin:$PATH"
curl --fail --location \
  https://github.com/google/dawn/releases/download/v20261026.205545/Dawn-5fbd545292cb7a4a9a275e322abec6007ffe2ae8-macos-latest-Release.tar.gz \
  --output "$PWD/.local/webgpu-dawn/sdk/dawn.tar.gz"
tar -xzf "$PWD/.local/webgpu-dawn/sdk/dawn.tar.gz" \
  -C "$PWD/.local/webgpu-dawn/sdk" --strip-components=1
python3 packages/flax_webgpu/tool/prepare_native.py --sdk "$PWD/.local/webgpu-dawn/sdk"
dart run melos run check
python3 packages/flax_webgpu/tool/run_macos.py --flutter-root /path/to/maintained/flutter
```

The source checkout requires this producer step before workspace build/archive checks; a
missing or stale payload fails with the preparation command. The ignored producer output
`js/native/` contains one self-contained dylib, complete pinned notices and a
source/payload provenance receipt. `@flax/webgpu-runtime` includes those exact bytes in
its npm archive as the existing `kind: dynamic` asset `@flax/webgpu/dawn`. Consumers
install the archive with `--ignore-scripts` and use normal module preparation and
Flutter builds. They need neither the Dawn SDK nor a producer checkout. The Dart
package's additional license file carries the same notices into Flutter `NOTICES`.

The shared macOS CI job builds the pinned maintained engine and explicitly downloads the
locked Dawn archive, checks its checksum before extraction, then runs this producer and
`check_native.mjs`. It uses the same ordinary native-asset and archive checks; consumers
still need no SDK or install script. The current fork and Flax commits are local until
an authorized push, so no hosted execution or remote CI pass is implied. See the
[integration task](../../docs/tasks/webgpu-js-api.md#latest-main-integration).

Pass `--build-only` to build without launching, or `--preview` to leave the scene open.
Flutter's normal incremental build owns Dart, JS and native-asset freshness. Logs, the
app, `application.json` and `screenshot.png` are under `.local/webgpu-api/`. Use
`--cycles 12` for bounded repeated acceptance: every third Session uses WebGPU alone,
all native counters must retire after each close, and RSS/peak RSS are sampled after a
one-second idle period. These observations are not a general memory bound. `--sdk` is an
optional explicit producer preparation step; normal consumers omit it.

## Implemented coverage and limits

| Area              | Current macOS profile                                                                                                                                                                         |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Standard entry    | `navigator.gpu`, adapter/device requests, actual features, limits, adapter information, WGSL features                                                                                         |
| Resources         | Buffers, textures/views, samplers, shader modules, bind groups/layouts, compute/render pipelines, queries                                                                                     |
| Commands          | Compute/render passes, direct/indexed/indirect draws, render bundles, copies, clears, query resolve, queue uploads/submit/completion                                                          |
| Async/error paths | Async pipelines, compilation information, error scopes/events, device loss, mapAsync/unmap/destroy                                                                                            |
| Canvas            | Shared Core identity, current-texture identity/expiry, resize, configure/unconfigure, automatic publication, snapshots/exports; BGRA8/RGBA8 with sRGB views, sRGB, opaque/premultiplied alpha |

Input checks and pinned IDL generation cover the implemented descriptors and method
arities. This is an initial WebIDL profile, not a full conversion/prototype conformance
claim. Supported features and limits come from Dawn; private IOSurface features are not
exposed to application code. Canvas requires `RENDER_ATTACHMENT` usage and rejects
incompatible view formats, P3 display and extended HDR tone mapping.

Compute passes, render passes and render bundles implement `setImmediates`. Typed-array
offsets and sizes use elements; ArrayBuffer and DataView ranges use bytes. The frontend
checks source ranges and four-byte content alignment; Dawn validates destination
alignment, device limits and pipeline usage. Mapped sources are copied before native
encoding so later unmap cannot invalidate them.

Texture views support `swizzle`, including constant zero/one channels, when the device
enables `texture-component-swizzle`. Invalid swizzle strings throw TypeError;
unsupported feature usage follows Dawn validation. Texture binding dimensions are
forwarded through `textureBindingViewDimension` and queried from Dawn; the current
core-mode device returns `undefined`. This does not enable compatibility-mode adapters.
Render passes forward non-default `maxDrawCount`, including zero, for native draw-count
validation. Default descriptors allocate no extra extension chains. `compilationHints`
remains an accepted but unforwarded optimization hint.

Mapped ranges are protected native-owned ArrayBuffers: unmap, destroy, device loss and
session close detach all live views. Transfer/shared Dart-byte escape is rejected;
uploading a mapped range deliberately copies bytes. Normal rendering uses pooled
IOSurfaces and producer/consumer GPU fences without CPU pixel readback. The maintained
macOS engine interop currently supports one Flutter Metal consumer queue. Pool pressure
rejects texture acquisition before the application submits work.

Core supplies the canvas-scoped `document`, HTMLCanvasElement,
geometry/input/ResizeObserver, ImageData/ImageBitmap, image loading and bitmap
transforms. External-image upload accepts those resources and either renderer's
canvases. Canvas snapshots and PNG/JPEG/WebP exports are explicit CPU paths. See the
[shared canvas contract](../../docs/architecture/canvas.md#canvas-compatibility).

Core provides pure JS/Wasm Dedicated Workers. Worker graphics transfer remains outside
this profile. Not implemented: general browser DOM/CSS, GPUExternalTexture/video
sharing, HDR/P3 display, other platforms and full CTS. These remain explicit limits. See
the [architecture](../../docs/architecture/webgpu.md) and
[remaining task](../../docs/tasks/webgpu-js-api.md).

The development plugin uses CocoaPods; Swift Package Manager integration is deferred.

## Validation

The [Core browser tools acceptance](example/validation/core-browser-tools-results.md)
verifies the shared window alias, User Timing/observers and secure random APIs with
Three.js on macOS. Existing Canvas and Axios Fetch consumers remain covered.

The [advanced Three.js acceptance](example/validation/three-advanced-results.md)
verifies skeletal/Morph animation, single-thread Meshopt and textured glTF/GLB
export/import after integrating Core Fetch. It compares actual native GPU pixels against
the same Edge scenes and preserves the GPU-only session.

The [expanded Worker acceptance](example/validation/three-worker-scenarios-results.md)
verifies real Meshopt Workers, combined animated Meshopt/KTX2 glTF and GLB, concurrent
alpha/mip/Zstd transcoding, corrupt resources and repeated Session retirement. Its
identical-input measurements include a separate post-completion observation; Workers do
not remove the measured main-thread scheduling tails.

The [shared browser API acceptance](example/validation/browser-base-apis-results.md)
verifies Core-only FileReader/bitmaprenderer, Fetch data URLs/Blob ranges and Three.js
glTF/GLB export/import. It also checks dynamic-offset range errors on every encoder.

The [Three.js feature acceptance](example/validation/three-features-results.md) verifies
glTF/GLB model loading, PBR lighting, directional/point/spot shadows and TSL/Bloom
postprocessing against an isolated Edge reference. URL-based model loading uses the Core
Fetch; the acceptance host serves the original local fixtures itself.

The [API extension receipt](validation/api-extensions-macos.json) records current
extension acceptance, pinned inputs and gates. The
[canvas compatibility receipt](validation/canvas-compatibility-macos.json) records the
preceding canvas extension. The [initial profile receipt](validation/macos-arm64.json)
remains a historical record. The real app verifies compute output, async
success/failure, mapped-buffer lifetime and ownership checks, then renders three
120-frame sessions at 960 x 540. The middle session installs WebGPU alone. Session close
must return native context, canvas, storage, publication and mapping counts to zero,
with no fence retirement error.

CPU command-encoding samples in that app include only its JS/FFI work. They exclude GPU
time, Flutter composition and display latency. They are not a new Chrome comparison. The
earlier matched browser measurements remain in the original engine experiment.

The fresh
[standard API comparison](../../experiments/webgpu_dawn/standard_api/results.md) uses
the same JS workload in Flax and Microsoft Edge 156 on macOS. It separates JS encoding,
GPU timestamps, Promise completion and presentation handoff; browser feedback and
Flutter GPU completion remain different endpoints. Run its isolated profile with
`tool/run_macos.py --benchmark --build-only`; see the comparison's reproduction guide.

### Bounded CTS and library acceptance

Use the same SDK and engine build above. The runner does not fetch test sources:

```sh
mkdir -p "$PWD/.local/webgpu-cts"
gh api repos/gpuweb/cts/tarball/cc11994e92512d0a3715e9d28876ec48accb971a > "$PWD/.local/webgpu-cts/source.tar.gz"
tar -xzf "$PWD/.local/webgpu-cts/source.tar.gz" -C "$PWD/.local/webgpu-cts" --strip-components=1
python3 packages/flax_webgpu/tool/run_macos.py \
  --flutter-root /path/to/flutter \
  --sdk "$PWD/.local/webgpu-dawn/sdk" \
  --cts-root "$PWD/.local/webgpu-cts"
```

The bounded selection now runs 504 cases per session: 468 pass and 36 are explicitly
skipped, across three sessions including the GPU-only RGBA8 session. It retains the
original five groups' 65 cases and adds immediate-data validation, texture-swizzle
validation and the draw-count-limit test. The 36 skips are the pinned CTS's Proxy-based
`_Float16Array` polyfill, which is not a native BufferSource; upstream intends to
exclude Float16Array here but filters by a different constructor name. The CTS sources
remain unmodified, and the harness records the skips rather than weakening runtime input
checks.

The fixture also checks actual immediate-data and swizzled pixels, mapped-source
detachment, native binding-dimension queries, shared images/exports, committed
ResizeObserver delivery and Three.js 0.186.1 TextureLoader, WebGPURenderer and
OrbitControls. This is bounded acceptance, not full conformance. CTS's optional
terminal-color/Node performance fallbacks are not required by Flax.

The
[canvas compatibility comparison](example/validation/canvas-compatibility-results.md)
uses the same six scenes at 960 x 540 or 1920 x 1080. It records the active 60 Hz cap
and separates submission/GPU callback timings from display presentation.

The later
[trace-guided optimization and Edge comparison](example/validation/trace-optimization-results.md)
remeasures both the baseline and optimized implementation at 120 Hz. It distinguishes
whole-page statistics rebuilds, FFI submission cost and remaining joint-GC pauses.
