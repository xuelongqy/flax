# Session WebSocket plugin

WebSocket is optional and independent of Fetch. Register FlaxWebSocketPlugin globally or
in a session's replacement plugin list. An empty list installs only the base APIs,
including MessageEvent, EventTarget and Blob. FlaxView borrows its session's choice.

## API and support matrix

```typescript
new WebSocket(url, protocols?, options?);
new WebSocket(url, options);
```

| Surface          | Supported behavior                                                                                        |
| ---------------- | --------------------------------------------------------------------------------------------------------- |
| States           | CONNECTING, OPEN, CLOSING, CLOSED on constructor and instances                                            |
| Information      | url, readyState, protocol, extensions and binaryType                                                      |
| Events           | open, message, error, close; event attributes and EventTarget listeners                                   |
| Sending          | Text, Blob, ArrayBuffer, TypedArray and DataView; synchronous send/close                                  |
| Binary reception | Blob by default; arraybuffer selected at event dispatch                                                   |
| Client options   | headers, handshakeTimeout, signal, pingInterval, maxPayload                                               |
| TLS and proxies  | Per-connection HttpClient factory; HTTP proxy, CONNECT, authentication, private CA and client certificate |
| bufferedAmount   | Deferred; absent from runtime objects and TypeScript declarations                                         |
| Compression      | Not requested; extensions is empty because nothing is negotiated                                          |
| Redirects        | Rejected; no credential forwarding to another destination                                                 |
| Other extensions | No reconnect, manual ping/pong, terminate, EventEmitter or WebSocketStream                                |

Options default to empty headers, a 30,000 ms handshake timeout, no signal or heartbeat,
and a 16 MiB maximum received message. Zero disables the handshake timeout; heartbeat
intervals must be positive. Limits use finite safe integers. Unknown options fail
synchronously instead of pretending to take effect.

URLs are absolute WS/WSS, with HTTP/HTTPS normalized accordingly. Relative URLs require
Dart baseUrl configuration. Fragments and URL credentials are rejected. Subprotocols use
unique, case-sensitive HTTP tokens. Application headers may include Authorization,
Cookie and Origin; protocol control headers cannot be overridden. No cookie jar or
browser origin is inferred. Arrays of header values follow HttpClient serialization.

Close accepts 1000 or 3000–4999 and at most 123 UTF-8 bytes of reason. A missing code
can send an empty close frame; received empty frames report 1005. Cancellation reasons
stay local and are never sent as close reasons. Protocol validation and message decoding
remain Dart's responsibility.

## Transport and observable state

Each connection owns an HttpClient. The client performs and validates the upgrade, then
public detachSocket and WebSocket.fromUpgradedSocket establish the WebSocket. The
IOWebSocketChannel adapts messages; normal close uses the underlying WebSocket so
channel sink completion cannot discard the peer-close event.

Open is queued before the message stream is consumed, including when the HTTP upgrade
and the first messages arrive in the same transport chunk. Existing session checkpoints
preserve event order and run microtasks between delivered events.

The Socket adapter observes frame headers, payload lengths and close frames. Data
payloads pass without a second parser or accumulated copy. The observer checks
cumulative fragment lengths because the SDK's maxPayloadLength check is per frame. Dart
performs masking, UTF-8 validation, message assembly and automatic ping/pong.

wasClean requires both close frames, Dart's public CLOSED state and matching peer close
code, normal transport input completion and successful output closure, without forced
termination or transport failure. The adapter continues observing transport EOF after
the protocol stream consumes a close frame. Missing peer completion is bounded by a
five-second close timeout. An error event precedes an abnormal close; readyState changes
before listeners run. Async listeners do not block the next event.

Socket.flush only acknowledges the underlying sink's acceptance. In particular, TLS
plaintext can remain buffered after flush. It is used for bounded write sequencing,
never as a public transmission counter. This is why bufferedAmount remains absent.

## Queues and lifecycle

send copies a binary view's actual range immediately without detaching its buffer.
Strings and immutable Blobs enter the same serial queue; Blob preparation cannot allow
later messages to overtake it. One message at a time reaches Dart. A private completion
acknowledgement releases that queue slot; it makes no network-drainage promise.

A connection's JS send queue is limited to 1,024 messages and 64 MiB. Pending host
delivery is limited to 1,024 tasks and 32 MiB per plugin instance. Exceeding a limit
aborts the connection with error and abnormal close, never silent message loss. A
message larger than the delivery budget cannot be delivered even when maxPayload is
raised.

The channel is continuously consumed; Flax never pauses only its outer stream and claims
that this stops all SDK buffering. Dart can retain the currently assembled message and
intermediate events from a transport chunk. Socket chunk processing and the message
limit bound those inputs; the frame observer does not retain full messages. These are
separate from Flax's pending JS delivery queue.

All host events use the existing session checkpoint and microtask delivery. No new
thread, timer loop or scheduler is installed. Properties read the latest delivered local
state without crossing the bridge. Sending after CLOSING/CLOSED is ignored; sending
while CONNECTING throws InvalidStateError.

The first valid close() while OPEN starts a single five-second budget in Dart. It
includes queued sends, Blob preparation and the closing handshake. Accepted sends keep
their order while time remains; draining the queue, repeated close() or peer close does
not restart the budget. Expiry destroys the transport and reports error followed by one
close event with code 1006 and wasClean=false. This is a Flax client policy, not a
browser-standard timeout. Timer execution follows the Dart event loop; it is not a
real-time scheduling guarantee. CONNECTING close, AbortSignal and session shutdown abort
immediately rather than starting a grace period.

WebSocketEventMap supplies typed addEventListener/removeEventListener overloads for
open, message, error and close. Function listeners receive the WebSocket as this; object
listeners and capture/once/passive/signal options retain the base EventTarget behavior.
Arbitrary string event names use Event. These declarations add no runtime registration
or dispatch layer and are available through the package's type-only exports.

Abort cancels the real handshake or Socket. Finished connections remove AbortSignal
listeners. Session closing rejects new connections, cancels existing operations and
queues final error/close delivery while the engine remains alive. Final disposal
releases the single plugin state handle; late transport events cannot re-enter it.
Applications still close page-owned sockets explicitly. Unmounting a borrowed view does
not close other pages' connections in the same session.

## Verification

The transport tests use local WS/WSS peers, raw frame splits and real HTTP/CONNECT
proxies. Temporary test certificates are issued by a private CA and cover mutual TLS and
certificate rejection. Framework tests use the existing embedded engine host. The
standalone application and its external consumer exercise a real echo connection,
including the relocated release verification target.

The [WPT manifest](../../packages/flax_websocket/js/test/wpt/manifest.json) pins four
complete upstream protocol-rejection tests and their constants, checksums and license.
Only server template variables are filled in by the test runner. The same subset runs in
Node, Hermes and V8; Node's built-in WebSocket runs the reference assertions too. This
is a selected subset, not a claim of complete browser or Node compatibility.

See the [transport regressions](../../packages/flax_websocket/test/),
[session host contract](host.md) and [contribution checks](../../CONTRIBUTING.md#checks)
for reproducible verification and packaging.
