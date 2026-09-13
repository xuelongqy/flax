import type {
  AbortSignal,
  AddEventListenerOptions,
  Blob,
  Event,
  EventInit,
  EventListener,
  EventListenerOptions,
  MessageEvent,
  URL,
} from '@flax/core/host';

export interface WebSocketOptions {
  headers?: Record<string, string | readonly string[]>;
  handshakeTimeout?: number;
  signal?: AbortSignal;
  pingInterval?: number | null;
  maxPayload?: number;
}

export interface CloseEventInit extends EventInit {
  wasClean?: boolean;
  code?: number;
  reason?: string;
}

export interface CloseEvent extends Event {
  readonly wasClean: boolean;
  readonly code: number;
  readonly reason: string;
}

export interface CloseEventConstructor {
  new (type: string, options?: CloseEventInit): CloseEvent;
  readonly prototype: CloseEvent;
}

export interface WebSocketEventMap {
  open: Event;
  message: MessageEvent;
  error: Event;
  close: CloseEvent;
}

type SocketListener<T extends Event> =
  ((this: WebSocket, event: T) => void) | { handleEvent(event: T): void };

export interface WebSocket {
  readonly CONNECTING: 0;
  readonly OPEN: 1;
  readonly CLOSING: 2;
  readonly CLOSED: 3;
  readonly url: string;
  readonly readyState: number;
  readonly protocol: string;
  readonly extensions: string;
  binaryType: 'blob' | 'arraybuffer';
  onopen: ((event: Event) => unknown) | null;
  onmessage: ((event: MessageEvent) => unknown) | null;
  onerror: ((event: Event) => unknown) | null;
  onclose: ((event: CloseEvent) => unknown) | null;
  send(data: string | Blob | ArrayBuffer | ArrayBufferView): void;
  close(code?: number, reason?: string): void;
  dispatchEvent(event: Event): boolean;
  addEventListener<K extends keyof WebSocketEventMap>(
    type: K,
    callback: SocketListener<WebSocketEventMap[K]> | null,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener(
    type: string,
    callback: EventListener | null,
    options?: boolean | AddEventListenerOptions,
  ): void;
  removeEventListener<K extends keyof WebSocketEventMap>(
    type: K,
    callback: SocketListener<WebSocketEventMap[K]> | null,
    options?: boolean | EventListenerOptions,
  ): void;
  removeEventListener(
    type: string,
    callback: EventListener | null,
    options?: boolean | EventListenerOptions,
  ): void;
}

export interface WebSocketConstructor {
  new (url: string | URL, options?: WebSocketOptions): WebSocket;
  new (
    url: string | URL,
    protocols?: string | Iterable<string>,
    options?: WebSocketOptions,
  ): WebSocket;
  readonly prototype: WebSocket;
  readonly CONNECTING: 0;
  readonly OPEN: 1;
  readonly CLOSING: 2;
  readonly CLOSED: 3;
}
