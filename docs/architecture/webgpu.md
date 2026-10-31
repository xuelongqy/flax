# WebGPU on macOS

The optional `FlaxWebGpuPlugin` installs standard JS GPU objects backed by pinned
Dawn/Metal. The implemented development profile is macOS arm64, macOS 26 or later, with
the maintained Flax engine interop profile 1. It is not a conformant browser
implementation or a published capability. See the
[package guide](../../packages/flax_webgpu/README.md) for reproduction and API limits.

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
descriptor; that value is `undefined` in the current core-mode profile. This does not
widen the supported adapter profile to compatibility mode.

All three programmable encoders check the Uint32Array dynamic-offset range before
`setBindGroup` reaches Dawn. An out-of-bounds start or length throws RangeError; an
empty range at the array end remains valid.

Native asynchronous callbacks enqueue copied results and wake the existing host
checkpoint; they never execute JS from Metal/Dawn threads. While API requests remain
unresolved, a coalesced JS event pump advances Dawn; its 1 ms fallback stops when the
requests settle. Native callback notifications are acknowledged only when their FFI
listener runs, so a burst of microtasks cannot fill the notification queue. Each session
owns its devices, callbacks and canvases. Closing stops callbacks, detaches mapped
views, settles pending work and releases resources. The native library remains resident
once per process because upstream callback tasks can outlive a dynamic-library lease.

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

The profile supports BGRA8/RGBA8, matching sRGB views, sRGB presentation,
opaque/premultiplied alpha and render-attachment canvas usage. Device loss clears
presentation and mapped ranges while preserving the configured device's JS identity.
Reconfiguration can install a replacement device.

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
resources, and canvases from either provider. It snapshots CPU pixels only for explicit
image copies, reuses a per-queue staging texture and delegates flip, alpha, destination
format and color conversion to Dawn's browser-copy operation. This does not modify the
ordinary zero-copy presentation path.

Canvas snapshots wait for submitted GPU work before reading the IOSurface. A snapshot
preserves the current texture identity; transfer expires it and publishes a cleared
canvas. The resulting Core bitmap owns its pixels independently. PNG/JPEG/WebP exports
use the shared codecs; they are explicit CPU readback paths and can stall the caller.

Complete WebIDL/CTS conformance, HDR/P3 display, GPUExternalTexture/video sharing,
Worker graphics transfer and other platforms remain open. See the
[remaining task](../tasks/webgpu-js-api.md).
