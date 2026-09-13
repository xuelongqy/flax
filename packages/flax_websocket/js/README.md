# @flax/websocket

Types and source for the optional Flax WebSocket host plugin. Dart registration installs
the generated script; importing this package does not install globals.

Install it at the same version as Dart `flax_websocket`. Its ESM entries are
side-effect-free placeholders backed by exported declarations; no host implementation is
duplicated in the npm archive.

```typescript
import type {} from '@flax/websocket/globals';

const socket = new WebSocket('wss://example.com/events', ['events'], {
  headers: { Authorization: 'Bearer application-token' },
  handshakeTimeout: 30_000,
  pingInterval: 20_000,
  signal: abortController.signal,
});
socket.addEventListener('message', (event) => console.log(event.data));
socket.onopen = () => socket.send(new Blob(['Hello']));
// The application closes page-owned connections when the page retires.
```

The interface follows the browser and Node built-in EventTarget API, with explicit
client options. It does not implement bufferedAmount, Node EventEmitter, automatic
reconnection or compression. See the
[support matrix](../../../docs/architecture/websocket.md).

Event listeners infer MessageEvent and CloseEvent from their names; WebSocketEventMap is
also exported as a type. The first close() while OPEN starts a total five-second budget
for accepted sends and the closing handshake. Timeout aborts the connection; draining
the queue does not reset the budget.

Runtime source is bundled once into flax_websocket. Base data and event implementations
are never bundled a second time. Tests use pinned upstream protocol validation cases,
Node's built-in WebSocket, deterministic transport fixtures and real engine sessions.
