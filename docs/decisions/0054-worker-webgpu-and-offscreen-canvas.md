# ADR 0054: Worker-owned WebGPU and transferable OffscreenCanvas

Status: experimental integration; acceptance is recorded separately

Date: 2026-11-02

## Context

Dedicated Workers already own separate V8 isolates, native structured-clone channels and
interruptible teardown. Their initial pure JS/Wasm profile excludes native rendering.
Forwarding each GPU operation through the UI isolate would retain the same bridge and
encoding cost, while frame readback would defeat the shared-texture presentation path.

## Decision

An explicitly selected WebGPU provider in a nonsandboxed parent supplies its
binding-free prepared host factory and native asset to Workers. Each Worker owns and
directly uses its own Dawn context and devices. Core owns transferable OffscreenCanvas
semantics and the UI placement target; the WebGPU package owns native display endpoints
and producer Surfaces. No GPUDevice or GPUTexture is transferable.

A private native-owned ArrayBuffer retains each contextless canvas lease through V8's
existing source-to-packet-to-destination BackingStore transfer. Cleanup retains an
independent native image pin. Final graph validation precedes detachment, and abandoned
packets release their leases without JS. Main receivers create real UI placement
targets; Worker receivers hold native-only targets.

Only control metadata for sizing and scheduling crosses the UI isolate. Resize is
coalesced, and the root reads the native endpoint's current atomic size rather than
trusting an older sender's dimensions. Worker animation callbacks use the Worker's own
performance clock. Drawing, queue submission, shared texture publication and fences stay
on the producer's native path.

Detached native retirement runs no application JS. The GPU context clears producer
Surfaces before destroying its devices and cancelling callbacks. Device loss releases
ordinary per-device ownership references promptly, and native GPUDevice finalization
releases the context owner before the last JS-owned raw reference. Worker V8 disposal
follows native resource retirement.

### Non-HTML still images

Core installs ImageData, ImageBitmap and createImageBitmap independently of renderer
selection. Existing CPU codec operations 0..2 run in `Isolate.run`, including when the
caller is a pure Core Worker. HTML image elements, Flutter image import/readback and
bitmaprenderer remain root-only.

ImageData records contain the actual Uint8ClampedArray, preserving aliases in the same
V8 serialization graph. ImageBitmap records contain only pixels and metadata. Their
ordinary detachable pixel buffers are immutable through encapsulation; protected native
BackingStores are not used for bitmap transfers. Bitmap buffers, ordinary buffers and
authenticated canvas tokens share the existing native validate/precommit/revalidate/
detach sequence. Private precommit checks include transfer-only entries and invoke no
application getters, provider callbacks or overridable collection methods. Sender
validity follows native detachment, with nonthrowing cache cleanup at host checkpoints.
No native ABI change or second serialization framework is introduced.

Image-only hosts enable demand-driven sweeping. Worker host close releases image
ownership, and late codec results check closing state before enqueueing and delivery. No
application JS is required to reclaim images during termination. Selected WebGPU Workers
reuse explicit external-image upload, snapshot and export operations; their synchronous
GPU readback can stall, while normal presentation stays native.

### Native SDR video

A nonsandboxed host can grant its Dedicated Workers selected names from the Session's
native video sources. The provider snapshots those names during installation and
explicitly exports the prepared `@flax/webgpu` module to Worker ESM. Frames acquire
independent realm-owned leases from the existing native registry and release them during
native retirement. The SDR source and GPU paths follow the
[video contract](../architecture/webgpu.md#sdr-video-frames).

## Consequences

Core has one small optional Worker-provider boundary and no Dawn dependency. Core-only
and sandboxed Workers retain their existing native denial. Selected Workers inherit the
parent's existing native authority; this is not a new FFI sandbox. Native ABI 2, UI
protocol 24, Worker profile 2 and the macOS interop version remain separate contracts;
optional owned-buffer and transfer capabilities fail closed on an older engine.

The UI retains CanvasView, HTML placeholder layout/input and texture registration.
Worker Canvas 2D, HTML layout emulation, shared GPU devices/resources, VideoFrame
transfer, HTML media, HDR and XR remain excluded. Startup and encoding performance
require matched controls rather than an FPS inference from the absence of a per-draw
proxy. Still-image clone/transfer, lifecycle and pixel acceptance are tracked separately
in the [still-image task](../tasks/worker-images.md).
