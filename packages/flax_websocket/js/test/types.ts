import type {} from '@flax/websocket/globals';
import type { WebSocketOptions, WebSocketEventMap } from '@flax/websocket';
import type { WebSocketEventMap as GlobalEventMap } from '@flax/websocket/globals';
const options: WebSocketOptions = {
  headers: { Authorization: 'x', Cookie: ['a=1'] },
  signal: new AbortController().signal,
};
const ws = new WebSocket('wss://example.test', ['chat'], options);
ws.addEventListener('message', (event) => {
  const data: unknown = event.data;
  void data;
  // @ts-expect-error MessageEvent does not carry close codes.
  event.code;
});
ws.addEventListener('close', (event) => {
  const result: [number, string, boolean] = [event.code, event.reason, event.wasClean];
  void result;
  // @ts-expect-error CloseEvent does not carry message data.
  event.data;
});
const message = function (this: WebSocket, event: WebSocketEventMap['message']) {
  const socket: WebSocket = this;
  const base: MessageEvent = event;
  void [socket, base];
};
ws.addEventListener('message', message, {
  once: true,
  passive: true,
  signal: options.signal!,
});
ws.removeEventListener('message', message, { capture: false });
ws.addEventListener('open', function (event) {
  const socket: WebSocket = this;
  const base: Event = event;
  void [socket, base];
  // @ts-expect-error Open is an ordinary Event.
  event.data;
});
ws.addEventListener('error', {
  handleEvent(event) {
    const base: Event = event;
    void base;
  },
});
const close = {
  handleEvent(event: GlobalEventMap['close']) {
    const code: number = event.code;
    void code;
  },
};
ws.addEventListener('close', close, true);
ws.removeEventListener('close', close, true);
ws.addEventListener('message', {
  handleEvent(event) {
    const data: unknown = event.data;
    void data;
  },
});
ws.removeEventListener('close', (event) => {
  const code: number = event.code;
  void code;
});
const customName: string = 'application-event';
ws.addEventListener(customName, (event) => {
  const base: Event = event;
  void base;
  // @ts-expect-error Arbitrary event names retain the base Event fallback.
  event.wasClean;
});
ws.removeEventListener(customName, null);
new WebSocket('wss://example.test', options);
ws.onmessage = (event) => {
  const value: unknown = event.data;
  void value;
};
ws.onclose = (event) => {
  const clean: boolean = event.wasClean;
  void clean;
};
ws.send(new Blob(['x']));
ws.send(new Uint8Array(8).subarray(2));
ws.close(1000, 'done');
// @ts-expect-error bufferedAmount is explicitly deferred.
ws.bufferedAmount;
// @ts-expect-error Node EventEmitter is not part of this interface.
ws.on('open', () => {});
// @ts-expect-error compression is not negotiated.
new WebSocket('wss://example.test', { compression: true });
