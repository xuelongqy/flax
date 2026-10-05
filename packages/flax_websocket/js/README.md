# @flax/websocket-runtime

Runtime source for the optional Flax WebSocket host plugin. Public declarations live in
the declaration-only `@flax/websocket` package. Dart registration installs the generated
script; importing this package does not install globals.

Install both npm packages at the same version as Dart `flax_websocket`. This source
package delivers prepared modules and the generated host bootstrap. Business code uses
the public imports; private implementation imports are rejected.

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
