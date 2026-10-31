# Dedicated Workers

Core provides browser-shaped `Worker` instances for pure JavaScript and WebAssembly.
Each worker uses `Isolate.spawn` in the owning Dart isolate group and a separate V8
Isolate/Context. Ordinary Flax runtimes still require the Flutter UI isolate and joint
Dart/V8 GC. The detached creation entry does not weaken that check or reuse the startup
preparation heap.

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
Streams, image/canvas/GPU handles, MessagePort and compiled WebAssembly.Module transfer
are outside this profile. Blob/File are cloned without detaching their immutable
contents, and are rejected in transfer lists. Deserialization failures dispatch
`messageerror`; normal user exceptions dispatch `error`.

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
Fetch, User Timing, PerformanceObserver and secure random APIs. `self === globalThis`.
Worker-only FileReaderSync reads Core Blob/File bytes without blocking the UI.
WorkerGlobalScope/DedicatedWorkerGlobalScope, WorkerNavigator and WorkerLocation
prototypes describe the installed scope; constructors are illegal.
`navigator.hardwareConcurrency` uses Dart's logical processor count in both
environments. They do not install `window`, `document`, canvas/image services, Flutter
bindings, rAF, localStorage or native FFI. SharedArrayBuffer and Atomics globals are
unavailable; native atomic waits are disabled. This is not a sandbox against arbitrary
trusted host code or a Wasm threads implementation.

Main-session TypeScript users import `@flax/core/host`. Worker scripts import types from
`@flax/core/host/worker`, whose shared host declarations exclude window, document and
animation frames. Importing these entries does not install any environment.

## Existing Core APIs and remaining gaps

Workers reuse Core's existing Blob/File, FileReader, encoding, events, Streams, Fetch,
performance and random APIs. Those implementations are shared with main Sessions; Worker
support does not introduce a second browser compatibility library. Canvas/image and
Flutter services stay excluded from the Worker scope.

The remaining message gap is MessageChannel/MessagePort and transferable Streams. The
native channel currently binds a parent/child runtime pair. Transferable ports need
independent endpoint ownership, queue migration, atomic mixed transfers and cleanup of
ports discarded in transit. Stream transfer additionally needs that channel plus
backpressure, cancellation and cross-realm error propagation. A same-thread channel
facade would not satisfy those contracts, so neither API is installed.

Synchronous HTTP(S)/application imports and synchronous access to another realm's Blob
registry remain unavailable. Dart's resource loaders are asynchronous while
importScripts runs within a synchronous Dart/V8 callback. Supporting them requires a
separate blocking loader protocol with interruption and deadlock handling, rather than
pumping the Dart or UI event loop recursively. Worker-owned Blob and data imports cover
the synchronous cases that need no such protocol.

Browser credentials/origin/CORS policy and the remaining WorkerNavigator browser state
(language/online events, storage and security context) are not emulated. Shared memory,
GPU/canvas transfer, SharedWorker and Service Worker remain outside this profile.

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
