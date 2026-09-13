# Optional WebSocket plugin

Status: implemented and verified on macOS arm64 Hermes and V8. Final whole-repo checks
encountered concurrent binding-test and formatting failures, detailed below.

Later event-order, total-close-budget and listener-type corrections are recorded in
[WebSocket fixes](websocket-fixes.md). Results below retain their original snapshots.

## Goal and selected boundary

Implement an optional session WebSocket plugin with standard EventTarget operations,
client headers, cancellation, heartbeat and host-configured TLS/proxies. The initial
transport gate below established that accurate bufferedAmount cannot use Socket.flush.
The accepted scope now defers that property entirely; it is not declared and has no
placeholder value. wasClean retains actual frame and transport observation. This change
does not alter the UI protocol or native ABI 2. Independent binding work advanced the
workspace from UI protocol 12 to 13 during final validation; those edits are preserved.

## Reproduction and evidence

On Flutter 3.47.2 / Dart 3.13.2, a local HTTPS server performs a real WebSocket upgrade.
The client retains HttpClientResponse.detachSocket(), wraps its public Socket writes,
then uses WebSocket.fromUpgradedSocket and IOWebSocketChannel. The channel sends one
1,024-byte binary message with compression disabled. The adapter serializes each
outgoing chunk with add followed by await flush, without binding addStream on the
underlying sink.

Immediately after the payload's Socket.flush completes, a debugger pause allows a
read-only VM service inspection of the actual TLS buffers:

| Observation                                 | Bytes |
| ------------------------------------------- | ----- |
| Message payload                             | 1,024 |
| TLS write-plaintext buffer after flush      | 1,032 |
| TLS write-encrypted buffer after flush      | 0     |
| Payload received by the server after resume | 1,024 |

The extra eight bytes are the WebSocket frame header and mask. The data is still in TLS
user-space storage, not an excluded operating-system transmit buffer. Debugger
inspection observes the stopped process; it is not a proposed production access path to
private fields and does not change the transport implementation.

The pinned SDK source explains this result:

- `_SocketStreamConsumer._previousWriteHasCompleted` treats RawSecureSocket as complete
  because TLS manages its own buffers (`socket_patch.dart`, line 2642).
- RawSecureSocket.write copies plaintext into its internal buffer and schedules the
  asynchronous TLS filter (`secure_socket.dart`, line 863).
- The public [IOSink.flush contract](https://api.dart.dev/dart-io/IOSink/flush.html)
  promises acceptance by the underlying consumer, not complete transport drainage.

Consequently, subtracting bytes when flush completes can report zero while the entire
message remains in a Dart TLS buffer. Additional delays or a larger chunk size do not
provide the missing completion contract. A counter at this boundary would have weaker
semantics than the selected bufferedAmount requirement.

## Initial feasibility validation and local artifacts

- The existing targeted Node host suite passed all 14 tests before investigation.
- The real WSS channel probe reproduced pending TLS plaintext after flush. Repeating it
  with the explicit completion assertion failed as expected at the transport gate.
- The peer received the complete message after resuming the isolate, confirming that the
  probe is an established, functioning WebSocket connection.
- At this initial gate, plugin behavior and dual-engine suites had not yet run. The
  implementation results below follow the accepted decision to omit bufferedAmount.

The ignored `.local/websocket` directory contains before.json, baseline-node.log,
tls_flush_probe.dart, inspect_tls.mjs, tls-observation.json and gate.log. Reproduce from
the repository root with the prepared workspace dependencies:

```sh
openssl req -x509 -newkey rsa:2048 -nodes \
  -keyout .local/websocket/key.pem -out .local/websocket/certificate.pem \
  -days 1 -subj /CN=localhost \
  -addext subjectAltName=DNS:localhost,IP:127.0.0.1
node .local/websocket/inspect_tls.mjs --require-network-completion
```

The diagnostic pins the generated local certificate by exact PEM identity, matching the
existing local HTTPS test approach. The expected command result is a nonzero exit with
pending TLS bytes; this is failure evidence, not an application test to skip.

## Implementation

- Added optional Dart/JS WebSocket packages and a generated installation script.
- Added MessageEvent to the base environment; the plugin reuses its constructors.
- Public HttpClient upgrade, bounded frame observation and IOWebSocketChannel provide
  transport, with one client per connection and the existing session checkpoint.
- Added client headers, timeout, AbortSignal, heartbeat, message limits, binary copies,
  ordered Blob sends, clean-close observation, TLS and proxy configuration.
- Extended the standalone example and outside-repository Dart/npm consumers with an echo
  connection and explicit State cleanup. No Fetch dependency is required by the
  WebSocket package.

## Validation and costs

The following commands completed successfully, with desktop integrations run serially:

```sh
dart run melos run check
dart run melos run check:ui
dart run melos run check:ui:v8
```

- The Hermes full run passed 39 runtime, 224 framework, 7 example and macOS integration
  tests, plus external JIT/AOT, package installation and relocated release assertions.
- The V8 full run passed 39 runtime, 230 framework, 7 example and macOS integration
  tests, plus the same external checks. V8 JIT proof was observed separately.
- Both relocated standalone receipts report completed=true, failures=[],
  externalPackages=true, externalIntegration=true and sourceRemovedBeforeLaunch=true.
- The final scoped transport suite passes 24 tests. It covers frame splits, empty and
  fragmented messages, heartbeat/close timeout, malformed handshakes, private CA, mutual
  TLS, HTTP/CONNECT proxies, authentication, certificate rejection and WS/WSS close
  acknowledgement after immediate peer output closure.
- A malformed masked close carrying code 1002 initially reproduced wasClean=true when
  the local protocol failure also used 1002. The fixed test passes: public WebSocket
  CLOSED state, not just matching observed codes, is required for a clean close.
- The final transport regression covers synchronous destruction from a Socket error
  callback without forwarding into an already closed stream controller.
- Five Node API tests include the pinned WPT subset and Node built-in reference
  assertions. Six real WebSocket framework tests pass on each engine.

Independent binding work changed UI protocol 12 to 13 between the full engine runs.
After rebuilding fixtures, the six Hermes WebSocket tests also pass on protocol 13. The
different framework totals reflect those independent tests. Later transport-only fixes
were rechecked with the 24-test suite; the full engine pipelines were not repeated for
those Dart-only guards. Complete pipeline results describe their source snapshots, not
concurrent binding edits made after each snapshot.

The final `check` rerun passes host generation and binding regeneration, but fails the
generator's public-export test: the concurrently extended MaterialApp has
`navigatorObservers`, while the test still expects the previous parameter list. This
task leaves those binding changes intact. The failure is recorded in
`.local/websocket/check-final.log`; it is not a passing current-worktree check. The
separate final format check reports three files under concurrent development:
packages/flax/bindings/config.yaml, packages/flax_material_ui/bindings/config.yaml and
packages/flax/js/src/runtime/bindings.ts. None belongs to this task's implementation.

Final scoped checks on the latest packaged sources pass: 24 Dart transport tests, 6
WebSocket session tests on each engine, all 59 JS tests, workspace TypeScript checks,
plugin Dart analysis and documentation lint/link checks. The final session runs include
the last transport guards; results are in sessions-final.log. Source is still being
edited concurrently, so these results do not certify later binding changes.

| Measurement                      | Result                                                 |
| -------------------------------- | ------------------------------------------------------ |
| Base IIFE                        | 325,027 bytes, up 396 for MessageEvent                 |
| Fetch IIFE                       | 16,107 bytes, unchanged                                |
| Optional WebSocket IIFE          | 7,900 bytes; no duplicated base implementation         |
| Twenty connect/close cycles      | Native handles 38 before and 38 after, on both engines |
| Binary fixture                   | 7 bytes in 2 uploads and 7 bytes in 2 downloads        |
| Local state reads                | No JS-to-Dart bridge calls                             |
| Final session cleanup            | Zero native handles                                    |
| Hermes standalone production app | 26,055,587 bytes; release build 31,686 ms              |
| V8 standalone production app     | 56,105,627 bytes; release build 32,801 ms              |

These are local workload observations, not hardware budgets or browser compatibility
certification. The limits bound Flax queues separately from Dart/TLS buffering. The
underlying sink's acceptance is not reported as network drainage.

Ignored evidence is in `.local/websocket`: check.log, check-ui-hermes.log,
check-ui-v8.log, hermes-final.log, transport-final.log, close-error-before.log and
close-ack.log. Relocated receipts are in build/standalone/verification.json and
build/standalone-v8/verification.json. Source fingerprints separate this task's edits
from the pre-existing worktree and concurrent binding changes. Temporary consumers,
certificates and build outputs remain ignored; embedded host scripts remain generated
source artifacts.

## Handoff

Do not reintroduce bufferedAmount based on Socket.flush or elapsed time. The source
probe above preserves the reason for deferral. Further work must distinguish actual
network observations from internal queue acceptance. No commit, push or publication is
authorized.
