# WebGPU on macOS

The optional `FlaxWebGpuPlugin` installs standard JS GPU objects backed by pinned
Dawn/Metal. The implemented development profile is macOS arm64, macOS 26 or later, with
the maintained Flax engine interop profile 1. It is not a conformant browser
implementation or a published capability. See the
[package guide](../../packages/flax_webgpu/README.md) for reproduction and API limits.

## Widget image uploads

With [Widget canvas sources](canvas.md#widget-canvas-sources) enabled in the root
session, `GPUQueue.copyElementImageToTexture(source, destination)` supports the Chrome
150 dictionary form used by Three.js `HTMLTexture`. The newer
`drawElementImageToTexture(source, destination)` accepts `sourceX`, `sourceY`,
`sourceWidth`, and `sourceHeight` and a tagged destination texture with optional `size`.
These experimental interfaces are exported separately as `FlaxElementImageQueue`,
`FlaxDrawableCanvas`, and `FlaxWidgetCanvasSource` from `@flax/webgpu`.
[Chrome's API changes](https://developer.chrome.com/blog/html-in-canvas-ot-changes#webgpu_1)

Both methods synchronously upload the last painted snapshot through the existing Dawn
external image path, including destination alpha and color space conversion. Widget
rectangles use logical pixels. All four crop fields must be supplied together. Outsets
beyond the captured boundary sample transparent pixels. Scaling uses nearest sampling of
the cached raster and a copy writes one destination texture layer.
`HTMLCanvasElement.captureElementImage(child)` captures a registered drawable child's
last painted snapshot. Transfer the result in the message transfer list, then call
`drawElementImageToTexture` with the received `ElementImage` on a WebGPU Worker queue.
Worker callers can use the `FlaxWorkerElementImageQueue` type from `@flax/webgpu`. The
snapshot has its own lifetime and remains usable after the Widget changes or unmounts.
Call `close()` to release it. Flutter owns the registered children's layout.

## SDR video frames

The native macOS `FlaxWebGpuVideoSource` is a FlutterTexture producer that retains
the latest ready IOSurface-backed CVPixelBuffer. Flutter draws the texture ID. A
separate UUID identifies the producer within the Flutter texture registry, and
`FlaxWebGpuPlugin(videoSources: ...)` grants selected names to a Session.
`acquireVideoFrame(name)` obtains the latest frame through the existing native
asset and returns a realm-branded VideoFrame. Frame acquisition and sampling stay
on the JS/native path after the registry is ready.

Dawn imports full-frame SDR BGRA and BT.709 NV12 in video or full range.
`GPUDevice.importExternalTexture` samples the surface's native plane views, and
`GPUQueue.copyExternalImageToTexture` performs GPU color conversion and copying.
An acquired frame owns its buffer lease independently of the producer. Close and
Session teardown expire imports, end shared access and hold the decoder buffer
until the completion fence. A Frame and its GPU objects belong to the realm that
acquired them.

## Worker rendering

A nonsandboxed parent that selects `FlaxWebGpuPlugin` installs the same binding-free
provider in its Dedicated Workers and their children. Each Worker owns independent Dawn
devices and directly encodes/submits native commands. Core supplies contextless
OffscreenCanvas transfer, HTML placeholders, placement, coalesced resize and vsync
control. The UI reads current atomic endpoint dimensions; Worker rAF uses the Worker's
performance clock. Neither commands nor presentation pixels are forwarded through Dart.

Display endpoints and producer Surfaces have separate ownership. Native context teardown
unconfigures its Surfaces before destroying devices, and native device finalizers
release ordinary ledger ownership after JS GC. The transfer BackingStore retains its own
cleanup and image lifetime through queued packets and sender retirement. See the
[Worker contract](dedicated-workers.md#selected-worker-webgpu) and
[decision](../decisions/0054-worker-webgpu-and-offscreen-canvas.md).

Core still images are available in Workers independently of this provider. Selected
WebGPU Workers can upload ImageData/ImageBitmap and canvas snapshots, export PNG/JPEG/
WebP, and send bitmaps back to the root or nested Workers. Pixel snapshots and encoding
are explicit CPU paths; they do not replace native texture presentation. Worker HTML
image elements and Canvas 2D remain excluded.

## Ownership and calls

```text
navigator.gpu -> standard JS objects -> shared JSI/libffi -> Dawn C API -> Metal
Core OffscreenCanvas -> GPUCanvasContext -> IOSurface + GPU fences -> Flutter/Impeller
```

Core owns canvas constructors, dimensions, mode lock, placement, shared images, the
canvas-scoped document/input adapter and the minimal `navigator` holder. Canvas 2D and
WebGPU register independent providers. Installing either provider first preserves canvas
identity. `CanvasView` comes from Core; an application using only WebGPU does not depend
on the 2D plugin.

The declaration-only `@flax/webgpu` SDK contains standard type shapes without importing
`lib.dom`. The Dart plugin selects `@flax/webgpu-runtime`'s private host module. Public
application code never supplies C signatures, pointers or an explicit present call. The
implementation reuses existing direct JSI/libffi calls rather than adding a second
native binding engine. Generated layouts and signatures bind the pinned Dawn header
once. Opaque JS wrappers check resource kind/session ownership before invoking native
code; Dawn retains device and validation semantics. Upstream native symbols remain
hidden behind the package's private C exports.

The frontend maps `setImmediates` to each programmable encoder's Dawn operation. Source
ranges follow BufferSource element/byte units, with protected mapped storage copied
before encoding. Native validation owns destination limits and pipeline state. Texture
swizzle, texture binding dimensions and render-pass draw limits use the pinned Dawn
extension descriptors; standard default values avoid allocating extension chains.
Binding-dimension queries return Dawn's actual value rather than echoing the requested
descriptor; that value is `undefined` in core mode. Adapter requests support native
`core` and `compatibility` feature levels. The latter uses Dawn's actual device defaults
and a compatibility-limit chain for the four independent storage stage limits. Adapter
feature capability does not identify the selected device profile; explicitly requiring
`core-features-and-limits` can upgrade a compatibility request.

Core supplies native-free `GPUCompilationInfo` and `GPUCompilationMessage` objects in
main and Worker realms. WebGPU creates them from real compiler results through the
shared Core factory. Their specialized structured-clone codec preserves private data
slots and graph identity without exposing GPU handles or importing Dawn into Core.
Compiler locations use Dawn's UTF-16 diagnostic extension so JS offsets and lengths
remain correct for non-ASCII source; the native callback copies these scalar values.
Canonical public declarations remain in the WebGPU SDK. Compilation hints retain
standard conversion but are not mapped to speculative pipeline prewarming: the pinned
Dawn ABI has no equivalent entry-point/layout hint operation.

All three programmable encoders check the Uint32Array dynamic-offset range before
`setBindGroup` reaches Dawn. An out-of-bounds start or length throws RangeError; an
empty range at the array end remains valid.

Native asynchronous callbacks enqueue copied results and wake the existing host
checkpoint; they never execute JS from Metal/Dawn threads. While API requests remain
unresolved, a coalesced JS event pump advances Dawn; its 1 ms fallback stops when the
requests settle. Native callback notifications are acknowledged only when their FFI
listener runs, so a burst of microtasks cannot fill the notification queue. Each session
owns its devices, callbacks and canvases. Root Session close stops callbacks, detaches
mapped views, settles pending work and releases resources. Detached Worker close instead
uses native retirement without application Promise handlers or teardown hooks. The
native library remains resident once per process because upstream callback tasks can
outlive a dynamic-library lease.

## Mapping and presentation

Mapped ranges use native-owned shadow storage with protected V8 ArrayBuffers. Unmap,
destroy, device loss and session close detach views before releasing storage. JS cannot
transfer these buffers, and shared Dart/FFI byte access rejects them. Uploading a mapped
range copies bytes deliberately. Mapping is an explicit CPU path; ordinary drawing does
not use it or read pixels back. Both structuredClone and Worker transfer validation
reject protected mappings before detaching any ordinary buffer, including reentrant
changes during serialization.

The GPU context returns one texture per frame. A complete JS checkpoint publishes it
without a second application rAF. Logical textures expire after publication; IOSurface
storage is pooled behind producer and consumer GPU fences. Flutter samples the same GPU
storage. A retained texture lease prevents reuse until consumer work completes.
Acquisition fails explicitly if all eight slots are occupied; already submitted GPU work
is not discarded. The maintained macOS interop currently assumes one Flutter Metal queue
and counts violations as retirement errors.

The profile supports BGRA8/RGBA8 with matching sRGB views, RGBA16Float, sRGB and Display
P3, standard and extended tone mapping, and opaque/premultiplied alpha. Canvas usage
defaults to `RENDER_ATTACHMENT`, but an explicit usage is not widened: `COPY_DST`-only
and valid `STORAGE_BINDING`-only configurations are supported. BGRA storage requires
`bgra8unorm-storage` on the configured device. Invalid usage still produces native
validation errors and error textures; transient-attachment usage is rejected by
dictionary-level `TypeError`.

Devices enable Dawn's private internal-usage feature. The application texture retains
exactly the configured public usage. Native initialization, color projection and
snapshots can use private texture usages. Every acquisition starts uninitialized,
including recycled storage.

Display P3 is converted on the GPU to extended sRGB for Flutter composition. Standard
FP16 projects in Display P3 first, so a color within P3 can survive even when its sRGB
encoding has negative channels or channels above one. Extended sRGB FP16 shares its
texture directly. The same producer/consumer fences protect all published surfaces. The
macOS host can opt into FP16/EDR backing with `FLTEnableExtendedDynamicRange`. Flutter
selects the surface format for each window according to screen capability.

Configuration input is snapshotted during dictionary conversion. Each
`getConfiguration()` call copies the outer dictionary, `viewFormats` and `toneMapping`,
preserving `GPUDevice` identity; an unconfigured context returns `null`. Device loss
clears presentation and mapped ranges while preserving the configured device's JS
identity. Invalid texture descriptors, including incompatible views, are reported
through GPU validation while the attempted configuration stays visible. A zero size or a
resize beyond the device limit validates on the next acquisition. Canvas transfers and
Worker rendering use unsigned 32-bit dimensions in the native ownership token. Larger
dimensions throw `TypeError` at the token boundary. An invalid frame keeps one error
texture until expiry. Reconfiguration or valid dimensions can restore presentation. See
the [canvas configuration follow-up](../tasks/webgpu-canvas-configuration.md) for scoped
regressions and validation evidence.

## Native delivery

The maintained fork owns shared image operations, mapped-buffer lifetime guards and
macOS Metal texture/fence interop. Flax-only compile guards leave other platforms and
ordinary Flutter builds unchanged. Installation requires optional interop version 1 and
a separate renderer query confirming that the current root UI isolate uses Impeller with
Metal. Missing queries or a different renderer fail before Dawn context creation.
Support is queried for each installation, without a process-wide renderer cache; native
ABI 2, UI protocol 24 and Worker profile 2 are unchanged.

An explicit producer verifies the pinned Dawn archive and extracted inputs and stages a
self-contained macOS dylib, complete upstream notices and provenance in the runtime npm
package. Consumers use the existing dynamic native-asset descriptor and Flutter build
hook. Host-module factory and application bundle inputs contribute to the same plan;
rebuilding or withdrawing either contribution preserves the other. Unselected host
modules contribute no native library. Missing producer payloads fail workspace/package
checks instead of downloading an SDK. Flutter additional licenses include the same
notices in application NOTICES.

## Generation and acceptance

`native/generated/inputs.json` pins Dawn, WebGPU IDL and CTS revisions. The generator
verifies input hashes and emits public types, method arities, conversion metadata,
native layouts and descriptor initializers. Ordinary checks do not fetch an engine or
SDK. This is separate from Dart binding generation.

The checked-in acceptance app exercises public imports, real WGSL compute/rendering,
mapping lifetime, async pipelines/errors, two devices, Canvas 2D coexistence, a GPU-only
session and repeated session close. The
[validation receipt](../../packages/flax_webgpu/validation/canvas-compatibility-macos.json)
records the measured scope. The original
[Dawn experiment](../../experiments/webgpu_dawn/README.md) contains earlier matched
Chrome and fence measurements; those numbers do not certify the standard JS frontend.

The
[advanced Three.js receipt](../../packages/flax_webgpu/validation/three-advanced-macos.json)
extends library acceptance to skeletal/Morph animation, single-thread Meshopt and
textured export/import. Core supplies Fetch, object URLs and FileReader. Textured
GLTFExporter requires Canvas 2D; ordinary GPU rendering and compressed model import
retain a GPU-only session. The comparison uses original fixtures and identical Edge
scenes, with explicit model warmup before animated pose sampling.

`copyExternalImageToTexture` accepts Core ImageData, ImageBitmap, decoded image
resources in the root, and canvases from the installed provider. Workers accept the
non-HTML ImageData, ImageBitmap and OffscreenCanvas sources. It captures source pixels
at call time, before subsequent mutation or transfer, and snapshots CPU pixels only for
explicit image copies, reuses a per-queue staging texture and delegates flip, alpha,
destination format and color conversion to Dawn's browser-copy operation. This does not
modify the ordinary zero-copy presentation path.

Canvas snapshots wait for submitted GPU work before reading the drawing buffer. A
snapshot preserves the current texture identity; transfer expires it and publishes
transparent black, or opaque black for an opaque canvas. The resulting Core bitmap owns
its pixels independently, including the configured gamut, float16 samples and alpha
mode. Transformed presentation retains a reusable copy of the unprojected buffer for
snapshots after frame publication. Direct IOSurface presentation uses the original
storage. PNG export tags Display P3 and writes float16 sources at 16 bits per channel.
Extended float16 canvases export HDR PNG in Rec.2020 PQ. JPEG exports use SDR and keep
the configured color profile. WebP uses the shared sRGB SDR encoder. Unsupported export
MIME types fall back to PNG.

File export captures pixels at the call. `convertToBlob()` and `toBlob()` compress them
off the JS thread. The explicit GPU readback can block both main and Worker callers, and
`toDataURL()` also compresses synchronously.

The Worker acceptance fixture returns `stillImages` with assertions, named cases,
formats and `pixelSnapshots: true`. Dart acceptance requires those receipts and actual
canvas-configuration pixel snapshots in every cycle, so omitted image paths cannot pass
silently. See the [still-image task](../tasks/worker-images.md) for validation status.

Complete WebIDL/CTS conformance, HDR and Worker video sources, Worker Canvas 2D
services and other platforms remain open. See the
[remaining task](../tasks/webgpu-js-api.md).
