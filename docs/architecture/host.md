# Session host environment

FlaxSession installs a basic JavaScript environment before application code. Optional
plugins add capabilities to the same session. Pure FlaxJsRuntime instances remain bare
and require explicit microtask draining. The UI protocol is 20; copied binary transport
requires native ABI 2. The host itself is not separately versioned.

## Registration and ownership

```dart
Flax.registerPlugins([const FlaxFetchPlugin()]);
final session = FlaxSession(
  createRuntime: createRuntime,
  source: source,
  bindings: bindings,
  plugins: [const FlaxFetchPlugin(baseUrl: 'https://api.example.com/')],
);
```

An omitted list snapshots the isolate defaults at session construction. An explicit list
replaces them; an empty list installs only the basic environment. Re-registering
defaults affects future sessions. Duplicate IDs and declared global names fail before
installation. Engine-provided basic globals may be replaced by the standard base
implementation; plugin conflicts are never silently overwritten.

FlaxView forwards plugins when creating its owned session. Ordinary rebuilds retain that
installation; use a new session or change the View's key to change plugins. Borrowed
session and page constructors use only their session's snapshot. Session and owned View
`namespace` selects an optional exact plugin scope; localStorage uses it automatically.
See [persistent storage](local-storage.md). An owned View replaces its session when the
namespace changes.

FlaxPlugin is immutable configuration; install creates a FlaxPluginInstance for one
session. FlaxHostContext exposes public runtime access, host function registration,
script evaluation, `exposeObject`/`requireObject`, safe queued calls, and reporting.
Plugins may contribute `bindingModules`; those merge with the application registry
before source runs. Duplicate module names, type ids, function ids and incompatible
protocol versions fail before installation. Declare installed public globals in
`globals`; private dispatcher names are also checked for collisions. Plugins must clean
incomplete installations themselves. Successfully installed instances close and dispose
in reverse order.

Closing stops new timers and requests, cancels active work, and delivers rejection while
the engine lives. Existing pages and Routes keep their prior exit contract. Final
disposal releases plugin handles before destroying the engine. Plugins must keep owned
JS references on their instance and release them from dispose, since queued work can be
discarded after retirement. Global registration stores no session handles. New public
Dart host types use the Flax prefix.

## Basic environment

- Console logging, assertions, stack traces, inspection, grouping, counts and timing.
- Function timers with extra arguments, numeric IDs, cancellation, and intervals.
- queueMicrotask and monotonic performance.now with an epoch timeOrigin.
- Global addEventListener/removeEventListener/dispatchEvent, sharing EventTarget.
- EventTarget, Event, CustomEvent, MessageEvent, DOMException, AbortController and
  AbortSignal.
- URL and URLSearchParams; TextEncoder, full TextDecoder encodings, atob and btoa.
- Blob, File and FormData data containers.
- Web Streams, including byte streams, BYOB, readers, writers, controllers and queuing
  strategies; TextEncoderStream and TextDecoderStream.

These data and stream constructors are installed once by the base environment, including
when `plugins: []`. They create no HTTP client. Fetch captures the existing
constructors; it installs only fetch, Headers, Request and Response. File represents
file data, not filesystem access. FormData is a container; multipart encoding/decoding
remains in Fetch. The base environment does not provide FileReader, object URLs or
structuredClone.

`@flax/core/host` owns the data and stream type exports and global declarations.
`@flax/fetch/globals` references that entry and adds only HTTP declarations. The Fetch
package no longer re-exports base data or stream types. Type imports install nothing.

Date, Promise, TypedArray and language collections remain engine implementations. There
is no window, document, Node process, string timer, or Node timer handle. Console
inspection is bounded and does not evaluate object getters. It is a logging facility,
not an interactive browser developer console.

One existing UI checkpoint runs each queued host task followed by JS microtasks, then
yields to Dart before the next task. Calls during build/layout wait for the frame to
finish. UI Future delivery, timers, and Fetch use this same checkpoint. Network
transport does not require application UI helper functions to settle its Promises.
Intervals coalesce a pending tick when the host is busy; they do not enqueue unlimited
missed ticks. Background timer execution follows Dart and operating-system scheduling.

AbortSignal.any keeps its flattened source dependencies weak by default. A source
retains a dependent while the dependent has abort listeners, including onabort. Removing
the last listener or completing abort releases that hold. Abort sets all affected
signals' states before dispatching the source event and then dependent events. Fetch
removes its listener when its request/body completes or is cancelled.

## Fetch support matrix

| Capability      | Contract                                                                        |
| --------------- | ------------------------------------------------------------------------------- |
| URLs            | Absolute HTTP/HTTPS; relative URLs require plugin baseUrl                       |
| Errors          | HTTP error statuses return Response; transport failures reject TypeError        |
| Cancellation    | AbortSignal reason is preserved; actual request and body are cancelled          |
| Request body    | Text, URLSearchParams, Blob, File, FormData, binary views and streams           |
| Response body   | Headers arrive first; bytes are read on demand                                  |
| Consumption     | text/json/bytes/arrayBuffer/blob/formData; locking and single use               |
| Cloning         | Stream tee; an unread clone may buffer while the other branch advances          |
| Redirects       | follow/error/manual; method rewriting and cross-origin sensitive header removal |
| Replay          | Replayable bodies can follow redirects; retained streamed bodies cannot         |
| Streams         | Readable/Writable/Transform streams, byte streams and real BYOB transfer        |
| Cookies         | No jar or automatic persistence; explicitly supplied headers remain explicit    |
| CORS            | No document origin or browser CORS enforcement                                  |
| Cache           | No cache; cache-only/force-cache and revalidation semantics are unsupported     |
| Browser options | Unsupported non-default modes, referrers, integrity and keepalive reject        |
| Authentication  | No session authentication manager; application supplies headers                 |

Manual redirects expose the HTTP response without browser opaque filtering. No Referer
is synthesized; explicit headers are preserved. Credentials options do not enable a
cookie store. Priority hints, non-default referrer policies and persistent requests are
rejected because this transport cannot implement their browser semantics.

Dart owns a separate HttpClient per installation. Upload writes await transport flush;
downloads use a paused StreamIterator and read one chunk at a time. Copying occurs in
bulk across the bridge; no byte arrays are serialized as JSON. Stream consumers control
backpressure. Dart openUrl has no per-request cancellation handle during DNS/connection
creation: abort rejects immediately and aborts the request as soon as that handle
arrives; session close also force-closes its entire client. Body convenience readers
necessarily accumulate the complete body, and tee follows the standard buffering
behavior rather than imposing a hidden size limit.

An application-supplied ReadableStream remains the exact Body stream and is not locked
or converted to a byte stream on acceptance. A default stream does not gain BYOB;
network and Blob byte streams retain it. Empty byte chunks are skipped during complete
consumption and upload. Ordinary chunks are not detached by Flax. Complete Body readers
copy each received chunk before requesting the next, then assemble the result. This adds
one byte copy per accumulated payload byte to protect against producer buffer reuse;
streaming upload/download still works chunk by chunk.

Body consumption state comes from web-streams-polyfill 4.3.0 through one read-only
internal adapter in `packages/flax_fetch/js/src/streams.ts`. Host generation verifies
that exact version in the runtime package; tests verify the `_disturbed` field shape and
transitions. An unknown shape fails explicitly. There is no second used flag, stream
prototype patch, or trial read. Locked or disturbed streams cannot be accepted, cloned
or consumed again. Releasing a reader lock does not reset disturbance; an untouched
closed stream is still usable. Request construction validates options before
transferring an existing request body through an identity TransformStream. The source is
immediately disturbed and locked; cancellation propagation uses the Streams pipe
machinery. Clone uses native library tee branches, including their buffering semantics.

ArrayBuffer and actual TypedArray/DataView ranges are copied; source and destination
never share bridge-owned pointers. The shared native bridge captures the engine's
ArrayBuffer constructor when creating the runtime, allocates engine-owned storage and
copies the bytes in one operation. Replacing the global constructor cannot redirect
bridge allocation. Freezing or sealing the buffer does not prevent transfer or BYOB; old
buffer views are genuinely detached. Detached/shared/foreign/released inputs are
rejected. Hermes uses the pinned source plus a recorded transfer patch using real VM
detach. V8 uses its native transfer. The patch also corrects detached buffer/view length
getters and rejects new views of detached buffers. Neither engine exposes a general
structuredClone API through Flax.

## Axios and application builds

Use the unchanged Axios Fetch adapter (`adapter: 'fetch'`). No XHR is installed. Use
Axios `postForm` for FormData: Axios's generic `post` applies a URL-encoded default
header in environments without browser globals. Flax preserves explicit headers rather
than pretending to be a browser or rewriting that Axios behavior.

Bundle browser-portable code as ES2019 IIFE with esbuild. The pinned Hermes parser
requires `supported: { 'async-generator': false, 'for-await': false }`; the repository
and portable standalone scripts apply those standard esbuild transformations. This
changes emitted syntax, not Axios source or the Fetch adapter implementation.

```typescript
import type {} from '@flax/fetch/globals';
const response = await fetch('/orders');
const orders = await response.json();
```

Types do not install globals. Applications without Fetch omit that type entry and Dart
plugin. `@flax/core/host` declares the always-installed base environment.

Host source belongs to each capability package under `packages/*/js/src/host`. The core
package owns and bundles web-streams-polyfill; Fetch imports base types only and uses
session constructors. `host:generate` creates the committed IIFEs in the owning Dart
packages and copies upstream license notices. `host:check` regenerates and compares
without loading an engine. No runtime Node dependency or repository alias is required by
installed Dart packages.

## Validation boundary

Tests use local servers, actual engine callbacks and real buffer detachment. Framework
HTTP tests restore real Dart networking instead of Flutter's default mock HTTP client.
The standalone consumer performs a local request after installing copied Dart packages
and npm tarballs, including its relocated release test application.

The pinned WPT [manifest](../../packages/flax_fetch/js/test/wpt/manifest.json) records
four complete upstream Headers test files and their checksums. A small synchronous
harness runs the same unmodified files in Node, Hermes and V8. Additional local
transport, stream and lifecycle cases are targeted tests, not claims of passing the
entire WPT suite.

This is a selected host API implementation, not a complete browser or Node environment.
XHR, SSE, storage, Crypto, Worker, FileReader and general structuredClone are outside
this delivery. App-specific Dart APIs can still use generated bindings.

Optional [WebSocket](websocket.md) installs independently of Fetch, with client headers,
TLS/proxy configuration and real close-handshake observation. bufferedAmount is
deferred.

Optional [Canvas 2D](canvas.md) installs OffscreenCanvas constructors and generated
`CanvasView`. Drawing uses a private command buffer. ABI 2 copies those bytes twice. rAF
is base-host, not part of the Canvas plugin.
