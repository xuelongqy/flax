# WebSocket event order, close budget and listener types

Status: implemented and verified on macOS arm64 Hermes and V8.

## Changes

- Queue open before subscribing to channel messages so an upgrade packet's messages
  cannot be discarded while JS still reports CONNECTING.
- Notify Dart immediately of close intent. One five-second timer covers accepted sends
  and the closing handshake; actual close does not restart it. Timeout uses existing
  transport abort and reference cleanup.
- Export WebSocketEventMap and declaration-only listener overloads. Runtime registration
  and dispatch remain inherited from the base EventTarget.

No dependency, UI protocol or native ABI change. bufferedAmount remains absent. The
close budget is a Flax client policy; Dart event-loop scheduling still applies.

## Verification

Before the fix, both coalesced-upgrade transport cases failed event-order assertions,
the Node blocked-send case omitted the immediate close notification, and four TypeScript
checks failed on message/close fields. Existing tests passed: 24 Dart and five Node.

The complete commands passed on Flutter 3.47.2 / Dart 3.13.2, with desktop integrations
run serially:

```sh
dart run melos run check
dart run melos run check:ui
dart run melos run check:ui:v8
```

- Scoped checks: 28 Dart transport tests, nine Node WebSocket tests, TypeScript listener
  inference and negative assertions, and nine real WebSocket session tests per engine.
- Ordinary check: 28 generator tests, all 67 JS tests, workspace type checking and
  analysis, formatting, documentation, reproducible generated bindings and host scripts.
- Both complete engine runs: native tests, 39 runtime tests, outside-repository JIT/AOT,
  251 framework tests, seven example tests and three embedded macOS integration tests.
- Both external standalone consumers passed package installation, integration and
  production release builds. Relocated release receipts report completed=true,
  failures=[], externalPackages=true and sourceRemovedBeforeLaunch=true. The V8 receipt
  also reports JIT observed in a separate process.

The shared raw test peer lives with the transport tests. V8's temporary embedded test
project copies that helper, keeping the same handshake and blocked-peer probes without
adding an example dependency or a second implementation.

Source fingerprints were unchanged across each complete check. A concurrent update to
the unrelated proxy-properties task record before validation was preserved. Ignored logs
and fingerprints are in `.local/websocket-fixes`; relocated receipts are in
`build/standalone/verification.json` and `build/standalone-v8/verification.json`.

## Costs and handoff

The first close request on an OPEN connection adds one JS-to-Dart beginClose call;
repeated close calls do not repeat it. Type overloads emit no JavaScript and add no
listener table. Measured on both engines:

| Observation                      | Result                                                          |
| -------------------------------- | --------------------------------------------------------------- |
| WebSocket IIFE                   | 7,900 -> 7,924 bytes                                            |
| Twenty normal connect/close runs | Native handles 38 -> 38; 20 beginClose calls                    |
| Blocked send and close           | One send, one beginClose, no late send/close/abort bridge calls |
| Binary round trip                | Unchanged: seven bytes in two uploads and two downloads         |
| State property reads             | Zero extra bridge calls                                         |
| Session disposal                 | Zero remaining native handles                                   |

The five-second tests check a timeout policy, not a hardware performance budget. The
[WebSocket contract](../architecture/websocket.md) documents the updated behavior.

Preserve unrelated worktree edits. No commit, push or publication is part of this task.
