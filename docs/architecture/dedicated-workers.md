# Dedicated Workers

Core provides browser-shaped `Worker` instances with a default pure JavaScript and
WebAssembly environment. A selected native provider can add the bounded WebGPU profile
described below. Each worker uses `Isolate.spawn` in the owning Dart isolate group and a
separate V8 Isolate/Context. Ordinary Flax runtimes still require the Flutter UI isolate
and joint Dart/V8 GC. The detached creation entry does not weaken that check or reuse
the startup preparation heap.

## Ownership and scheduling

The optional engine extension `engine_workers.h` requires profile version 2 and its own
size check; native ABI 2, the binding extension and the UI protocol are unchanged. A
detached runtime retains JS results explicitly, releases unreachable Dart facades
through a Dart finalizer and retains its small set of host callbacks until disposal. It
cannot bind Dart object peers or install Flutter UI. Runtime calls still originate from
the owning Dart isolate. V8 Lockers cover entries when Dart schedules that isolate on a
different native thread.

Dart/JS shared-buffer leases depend on the UI owner and are rejected in detached
runtimes. Host services use owned byte copies instead. Neither runtime facades nor
external Dart byte views are sent between isolates; transferred JS buffers remain in the
native channel until the destination takes ownership.

V8 foreground tasks notify an owning Dart native port. That isolate pumps the bounded
foreground queue and explicitly drains its Context's microtasks. Core timers and Fetch
settlements use the same checkpoint. There is no production polling loop, Node runtime,
worker thread pool or alternate main-thread decoder.

Ready message events, timers, native FFI callbacks and animation callbacks share one
FIFO task queue. Each task completes the Worker's microtask, rejection-notification and
follow-up microtask checkpoint before the next task runs. A flush handles the tasks
queued when it begins. Newly queued work waits for the next Dart turn. Messages to the
Worker global wait for entry initialization to finish. Started MessagePorts and other
host tasks keep running during module loading and top-level await.

`terminate()` closes the native channel, discards queued packets, calls V8's thread-safe
`TerminateExecution` and wakes the owning Dart isolate. Native interruption handles
executing JS, Wasm and microtasks before Dart disposes its host and runtime. Channels
belong to the individual runtime state/Context, because main Sessions share a V8
Isolate. Registry locking serializes interruption with native retirement. `close()`
stops subsequent worker work and retains already posted outgoing messages for parent
delivery. Exit drains those messages before releasing the channel and host records.
Nested workers reuse the same carrier and resource broker. Parent close or termination
interrupts descendants and awaits their native disposal before retiring the parent
Context. Session close interrupts its workers before retiring the parent Context.
`Isolate.kill` is not used. A parent Context retiring outside normal Session cleanup
also interrupts and wakes its children. Detached runtimes and channels expose internal
counts for lifecycle tests.

Every detached Worker close disposes its independent V8 isolate after cancelling Dart
host services and awaiting descendants. It never re-enters JavaScript teardown or runs
application stream cancellation/finally hooks. This keeps termination interruptible even
when such a hook would loop forever. Native isolate disposal cancels pending Wasm
compilation jobs and reclaims their streams and Context references.

## Messages

V8 `ValueSerializer`/`ValueDeserializer` implement structured clone, including cycles,
repeated references, ordinary records/arrays, Map, Set, Date, RegExp, Error, BigInt,
ArrayBuffer, TypedArrays and DataView. Core also provides synchronous global
`structuredClone(value, { transfer })` through this same native serializer in main
Sessions and Workers. Blob/File clones preserve bytes, MIME type, name and modification
time, with repeated object identity retained. DOMException preserves name and message.
Compiled WebAssembly.Module clones retain V8 compiled-code ownership and recreate the
module in the receiving isolate; modules are cloneable, not transferable. The payload
never becomes JSON or a Dart object graph. Dart ports carry channel IDs and
lifecycle/control values only.

Core also owns the native-free `GPUCompilationInfo` and `GPUCompilationMessage` data
objects in both environments. Explicit codec branches preserve readonly backing values,
frozen message arrays and repeated graph references, including user-shadowed public
properties. These native-free data classes do not themselves install `navigator.gpu`,
canvas services or native FFI. Native GPU resources remain uncloneable. Public
diagnostic declarations belong to the optional WebGPU SDK. `GPUPipelineError` follows
the existing DOMException scalar clone steps; it does not gain an invented `reason`
serialization.

A transfer list accepts unique, attached, detachable ArrayBuffers, including resizable
buffers. All entries are validated before serialization; they are revalidated after
getters run. Detachment happens only after successful serialization. The packet retains
the same native BackingStore, and the destination ArrayBuffer takes that shared
ownership without copying its bytes through Dart. Views retain offsets, fixed or
length-tracking behavior and shared buffer identity. Resizable buffers retain their
current and maximum sizes. Normal messages copy buffer contents through V8's wire
format. Transfer-only buffers are detached even when they are not reachable from the
message.

Invalid transfers, functions, Proxies, promises, shared buffers and unsupported platform
objects raise `DataCloneError`. Core, Canvas and WebGPU platform objects are marked
explicitly so their private implementation cannot silently clone as an empty record.
Streams, GPU handles and compiled WebAssembly.Module transfer remain unavailable.
ImageBitmap is cloneable and transferable. The selected WebGPU profile also adds
contextless OffscreenCanvas render ownership and live VideoFrame leases to the transfer
list. Blob/File are cloned without detaching their immutable contents, and are rejected
in transfer lists. Deserialization failures dispatch `messageerror`; normal user
exceptions dispatch `error`.

## Message channels

Core exposes `MessageChannel` and `MessagePort` in Sessions and Dedicated Workers on the
matching engine. `new MessageChannel()` creates two entangled ports. A port receives
`message` and `messageerror` events after `start()` or the first assignment to
`onmessage`. An `addEventListener('message', ...)` listener needs an explicit `start()`.

`Worker.postMessage`, the Worker global `postMessage`, `MessagePort.postMessage`, and
`structuredClone` can transfer a port alongside the other supported transferable types.
A port must be in the transfer list to appear in a cloned graph. Message events expose
all transferred ports in a frozen `event.ports` array, in transfer-list order, even when
the message graph does not reference them. When both refer to a transferred port, they
share the same receiver object.

Native endpoints own their queues independently of the Worker parent/child channel.
Sibling Workers can exchange messages directly after they each receive an endpoint.
Transfer detaches the old wrapper and moves its pending FIFO to the new wrapper, whose
queue starts paused. The existing clone transaction revalidates ports, buffers and
platform transfer state after serialization before it commits ownership changes.

`close()` discards the port's pending inbound messages and disconnects its peer.
Messages already queued at the peer remain available. Native retirement closes endpoints
still owned by a terminating realm and releases transfers in discarded packets,
including ports nested in their queues. Started ports stay reachable while they can
receive messages. Unreachable paused ports can release their native endpoint through
garbage collection. See the
[HTML message port contract](https://html.spec.whatwg.org/multipage/web-messaging.html#message-ports).

## Still images

Pure Core Workers install `ImageData`, `ImageBitmap` and `createImageBitmap` without a
renderer plugin. Blob decoding and sRGB RGBA8 bitmap transforms reuse CPU image
operations in `Isolate.run`. Wide-gamut and float16 image transforms keep their pixel
format and color space in Core. Inferred resize dimensions round up. HTML
Image/HTMLImageElement, bitmaprenderer and Flutter image objects are root-only.

ImageData serialization includes its actual Uint8ClampedArray or Float16Array in the
existing V8 graph. Cloned or transferred `.data.buffer` aliases, view offsets and
repeated ImageData references therefore survive both message directions and nested
Workers. Private data and dimensions are authoritative even when application code
shadows public getters. ImageData itself is not transferable; its buffer is. The
constructor preserves the supplied typed-array view and requires ordinary ArrayBuffer
backing; shared backing is rejected. Public declarations expose that transferable buffer
type.

An ImageBitmap owns private pixel bytes and metadata. Clone copies those bytes; transfer
moves an ordinary detachable buffer and immediately exposes zero sender dimensions.
Renderer consumers receive independent pixel snapshots. Native renderer resources are
imported or captured lazily; Dart IDs, ui.Image objects and GPU pointers never cross the
channel. A receiver remains usable after its sender closes or exits.

A captured Widget `ElementImage` uses the same private pixel transfer. Include it in the
transfer list to draw it on the receiver's WebGPU queue. Successful transfer consumes
the sender's snapshot, and `close()` releases a live snapshot.

Bitmap buffers, ordinary buffers and authenticated canvas leases share one native
transfer list. Native serialization validates buffers, runs a private precommit check,
revalidates and only then detaches. The check covers transfer-only entries and uses
captured intrinsics and indexed loops, without application getters or provider
callbacks. Failed serialization does not consume unrelated senders. Detached backing is
authoritative; nonthrowing local cleanup and checkpoint sweeps release cached resources.
Image activity enables that sweep even in an image-only Core Worker or root Session,
without an unconditional per-frame bridge call or dependence on JS finalizers.

Worker close and termination close the image host before native runtime disposal. Codec
completion checks closing state before enqueueing and again before delivery; late or
queued image results release their ownership. Shutdown does not invoke application
cleanup handlers. Unopened packets retain only native backing ownership and are
reclaimed with their channel.

## Errors and rejected Promises

Runtime errors preserve available script URLs and line/column positions. V8 error stacks
supply the original script location rather than the host reporting wrapper. JS callback
error handlers retain the original error value; native evaluation failures may supply
only scalar diagnostics. Cross-isolate error notifications carry scalar diagnostics, not
a shared Error object. Native syntax failures retain their entry URL even when the
engine provides no line/column.

Workers dispatch `unhandledrejection` and `rejectionhandled` with the original Promise
and reason in that Worker realm. Handlers attached in the same microtask checkpoint
suppress the unhandled event; later handlers retain identity. `preventDefault()`
suppresses the default rejection log. Native rejection callbacks only queue records;
application handlers execute at host checkpoints. Drained native references are
released, and a JS WeakMap tracks already-reported promises without permanently rooting
them. These events do not install a replacement Promise implementation.

## Loading and environment

Worker construction supports HTTP(S), data, session Blob URLs and application-owned
flax/file URLs. Local entry and dependency requests use the owning Session's selected
module source loader, with its existing manifest, root and symlink checks. The loader
and AssetBundle stay on the parent isolate. Source/resource bytes use transferable Dart
data; ordinary JS messages still use the native channel. Relative constructor URLs use
the application entry URI when supplied. Parent Fetch captures a Blob before immediate
URL revocation and owns cancellation during loading. HTTP failures and invalid scripts
report an asynchronous error. Messages can be queued before loading completes; transfer
validation and detachment remain synchronous.

Classic sources evaluate as scripts. Module sources use the existing native ESM loader,
including relative HTTP(S)/application dependencies, inherited import maps, data modules
and asynchronous Wasm work. `WebAssembly.compileStreaming` and `instantiateStreaming`
consume Core Response streams in chunks through V8's native Wasm streaming interface.
They validate status, exact application/wasm MIME, body ownership and reader errors.
Main/shared-session host close aborts active compilations and cancels their readers.
Worker close and termination reclaim active compilations and readers through native
isolate disposal without invoking application cancellation hooks. No full-body buffering
substitute is installed. Local GET/HEAD Fetch inside a Worker loads declared JS, JSON
and Wasm resources through the same application loader. HTTP Fetch operations use the
existing Core transport through a root-isolate broker, retaining request bodies,
headers, streaming, redirects and cancellation. HTTP module requests use the Session's
selected module loader. Permission managers, leases and HTTP clients remain on the root
isolate; only operation IDs, values, bytes and structured errors cross Dart ports.
`importScripts` works synchronously for data URLs and Worker-owned Blob URLs in classic
workers; other URLs throw `NotSupportedError`. Blob module dependencies and GET Fetch of
live parent Blob URLs use the same cancellable resource broker, preserving MIME metadata
and Range responses. Revoked URLs fail. Relative imports from opaque Blob URLs still
require absolute URLs or an import map. Module workers reject `importScripts` with
`TypeError`. Arbitrary filesystem access, arbitrary synchronous network imports and
credential inclusion are not implemented. Fetch credentials retain Core's existing
transport limits; this host does not implement browser origin/CORS isolation.

Workers inherit the owning Session's [approved permissions](permissions.md). HTTP entry
scripts and module imports require `flax.module.remote`; business Fetch requires
`flax.network`. Each destination is checked before transport, including redirects,
cached modules and final source publication. The existing application manifest, file
root and symlink checks also apply to Worker resources. Declaring one network permission
does not grant the other.

The root retains observed origin leases until Worker exit, including after a response
body reaches EOF. Revocation cancels pending transport and interrupts the affected
Worker and its descendants, discarding queued native messages before they can deliver
stale results. Already delivered values cannot be recalled. Worker-only module use does
not retain a parent UI lease. Its revocation terminates the affected Worker tree while
the parent Session remains usable. A parent that also imports the remote module retains
its own ordinary Session-closing lease.

Wasm authority is checked when a Worker starts. Without approval, ordinary JS remains
available while Wasm constructors, prototype aliases, compilation, streaming and module
loading fail closed. Workers reuse the Session's synchronous Wasm guard. A newly granted
Wasm permission requires recreating an existing Worker; startup never prompts. Revoking
an observed Wasm lease interrupts executing Workers and awaits native retirement.

Workers reuse Core Console, encoding, Blob/File, URL, events, timers, Web Streams,
Fetch, User Timing, PerformanceObserver, secure random APIs and the still-image
foundation above. `self === globalThis`. Worker-only FileReaderSync reads Core Blob/File
bytes without blocking the UI. WorkerGlobalScope/DedicatedWorkerGlobalScope,
WorkerNavigator and WorkerLocation prototypes describe the installed scope; constructors
are illegal. `navigator.hardwareConcurrency` uses Dart's logical processor count in both
environments. The default environment does not install `window`, `document`, canvas
renderers, Flutter bindings, rAF, localStorage or native FFI. A selected WebGPU provider
adds native GPU APIs, OffscreenCanvas and rAF, while keeping HTML and Flutter services
on the root. SharedArrayBuffer and Atomics globals are unavailable; native atomic waits
are disabled. This is not a sandbox against arbitrary trusted host code or a Wasm
threads implementation.

Main-session TypeScript users import `@flax/core/host`. Worker scripts import types from
`@flax/core/host/worker`, whose shared host declarations include still images and
exclude window, document, Image and HTMLImageElement globals. Core-only Worker types
omit the OffscreenCanvas constructor and animation-frame globals. Importing
`@flax/webgpu/globals` adds those selected-profile declarations and augments the public
canvas maps in `@flax/core/host/canvas-contexts`. Navigator remains owned by
`@flax/core/host/common`, where WebGPU adds its `gpu` property without importing main
DOM globals. Importing these entries does not install any environment.

## Selected Worker WebGPU

A nonsandboxed Session that explicitly installs `FlaxWebGpuPlugin` also selects its
binding-free host factory and bundled native asset for Dedicated Workers and their
children. Core reuses the prepared module inventory; it does not import Dawn or install
Flutter bindings in a Worker. A Core-only or sandboxed parent does not grant Worker
native authority. A selected Worker has its parent's existing trusted native authority;
this extension does not create a new FFI security sandbox.

A provider can explicitly expose selected prepared, binding-free modules to Worker ESM.
A WebGPU video grant makes `@flax/webgpu` importable for
[SDR frame acquisition](webgpu.md#sdr-video-frames). The Worker loader resolves only the
provider's explicit exports as prepared SDK imports.

When the Session has video sources, a selected Worker can receive a VideoFrame in a
transfer list regardless of its acquisition grants. Its own realm creates a frame lease
over the same pixels. The sender's GPU imports expire at commit. A discarded packet
releases its native lease through the private transferred backing store.

Each Worker owns a separate Dawn context, adapters and devices. JS encodes commands and
submits directly through that Worker's JSI/libffi path. GPUDevice, GPUTexture and other
GPU resources cannot be cloned or transferred. Compute results can use ordinary mapped
readback; presentation uses native IOSurfaces and the existing producer/consumer fences.
No draw command or frame pixels pass through the UI isolate.

Core's Worker canvas is an OffscreenCanvas and EventTarget without HTML layout methods.
The root retains HTMLCanvasElement, input, CanvasView placement and texture
registration. `HTMLCanvasElement.transferControlToOffscreen()` requires a contextless
source, returns its render owner and leaves an HTML placeholder. Width/height writes and
a repeated transfer on that placeholder throw InvalidStateError. An OffscreenCanvas can
transfer only before it selects a context; context-bearing transfers throw
InvalidStateError. The source detaches only after the entire graph and transfer list
validate. Ordinary messages cannot clone an OffscreenCanvas without transferring it.

Core privately maps each canvas transfer to a native-owned ArrayBuffer lease. V8 retains
its original BackingStore across source, packet and destination, including transfer-only
entries. Native address registration rejects a copied buffer as a lease. The native
cleanup and image pin outlive the sender's FFI installation, and discarded packets
release their leases without application callbacks. A trusted precommit check catches
getters that select a context during serialization before any mixed transfer detaches.
The receiving canvas reads the final native dimensions and starts with a transparent
bitmap. A receiver in the main realm creates a real Core placement target; a Worker
receiver creates no Flutter object.

The UI owns the display endpoint; the Worker owns its producer Surface and Dawn pool.
Resize sends coalesced control notifications through the existing Worker broker. The UI
reads the endpoint's current atomic dimensions, so delayed notifications from a former
owner cannot overwrite a newer size. CanvasView layout and canvas input geometry then
follow the new bitmap dimensions. Vsync notifications use the same broker, while each
Worker reports rAF time using its own performance clock. Completed Worker checkpoints
implicitly present their canvases after messages, animation callbacks and microtasks.

Worker termination never invokes JS teardown, Promise handlers or finalizer helpers.
Native FFI retirement stops producers and discards deliveries. The native GPU context
clears its Surface outputs and pools before destroying its devices. Device-loss cleanup
releases ordinary ownership references, and the native GPUDevice finalizer retires its
matching Surfaces and releases the context owner before the JS-owned raw reference.
Explicit destruction and GC therefore do not retain every device until Session close.
Mappings, native callbacks and resource finalizers then retire before V8 disposal.

The native ABI, UI protocol and Worker profile remain independent and unchanged. Worker
graphics requires the maintained owned-buffer primitive and atomic canvas transfer
capability; an older engine fails before Worker GPU context/listener creation. Worker
WebGPU canvases use the same
[color configuration and presentation](webgpu.md#mapping-and-presentation) as main
Sessions. Canvas 2D, document/HTML simulation, shared GPU resources, video and XR remain
outside this profile. See the [delivery task](../tasks/webgpu-worker-rendering.md) for
lifecycle evidence.

Selected Workers accept ImageData, ImageBitmap and their OffscreenCanvas snapshots in
`copyExternalImageToTexture`. Sources are captured at call time. `convertToBlob` exports
PNG, JPEG or WebP, with PNG fallback for unsupported MIME types. `transferToImageBitmap`
expires the current canvas texture and replaces its content with transparent black, or
opaque black for an opaque canvas. Explicit GPU image capture/export synchronously waits
for readback and can stall the Worker. The [still-image task](../tasks/worker-images.md)
records the candidate's verification gates.

## Existing Core APIs and remaining gaps

Workers reuse Core's existing Blob/File, FileReader, encoding, events, Streams, Fetch,
performance, random and non-HTML still-image APIs. Those implementations are shared with
main Sessions; Worker support does not introduce a second browser compatibility library.
Flutter services stay excluded; the selected WebGPU profile supplies native
OffscreenCanvas rendering and explicit still-image import/export.

Transferable Streams remain unavailable. Stream transfer needs a protocol for
backpressure, cancellation and cross-realm error propagation over the message channel.

Synchronous HTTP(S)/application imports and synchronous access to another realm's Blob
registry remain unavailable. Dart's resource loaders are asynchronous while
importScripts runs within a synchronous Dart/V8 callback. Supporting them requires a
separate blocking loader protocol with interruption and deadlock handling, rather than
pumping the Dart or UI event loop recursively. Worker-owned Blob and data imports cover
the synchronous cases that need no such protocol.

Browser credentials/origin/CORS policy and the remaining WorkerNavigator browser state
(language/online events, storage and security context) are not emulated. Shared memory,
GPU resource sharing, SharedWorker and Service Worker remain outside this profile.

## Validation

The [task record](../tasks/dedicated-workers.md) distinguishes carrier evidence, native
integration, Three.js decoding and measured costs. Tests must run with the maintained
engine matching the Flax checkout; changing the revision checks to accommodate a newer
shared Flutter checkout does not validate a worker.

The [Release investigation](../../experiments/dedicated_workers/release-results.md)
separates native transfer cost from external-memory-triggered Dart/V8 collection. Its
continuous test includes collection outliers, a timer observation after the last
transfer and native retirement. Low median transfer latency does not imply that full
joint-GC pauses or memory costs have disappeared.
