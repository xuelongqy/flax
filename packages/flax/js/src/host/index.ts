// Importing this entry declares the installed session environment; it does not install it.
import type {
  AbortController as HostAbortController,
  AbortSignal as HostAbortSignal,
  Event as HostEvent,
  EventTarget as HostEventTarget,
  CustomEvent as HostCustomEvent,
  MessageEvent as HostMessageEvent,
  DOMException as HostDOMException,
} from './events.js';
export type {
  AbortController,
  AbortSignal,
  Event,
  EventTarget,
  EventInit,
  EventListener,
  EventListenerOptions,
  AddEventListenerOptions,
  CustomEvent,
  MessageEvent,
  MessageEventInit,
  DOMException,
} from './events.js';
export interface URLSearchParams {
  readonly size: number;
  append(name: string, value: string): void;
  delete(name: string, value?: string): void;
  get(name: string): string | null;
  getAll(name: string): string[];
  has(name: string, value?: string): boolean;
  set(name: string, value: string): void;
  sort(): void;
  toString(): string;
  forEach(
    callback: (value: string, key: string, parent: URLSearchParams) => void,
    thisArg?: unknown,
  ): void;
  entries(): IterableIterator<[string, string]>;
  keys(): IterableIterator<string>;
  values(): IterableIterator<string>;
  [Symbol.iterator](): IterableIterator<[string, string]>;
}
export interface URLSearchParamsConstructor {
  new (
    init?: string | Iterable<readonly [string, string]> | Record<string, string>,
  ): URLSearchParams;
}
export interface URL {
  href: string;
  readonly origin: string;
  protocol: string;
  username: string;
  password: string;
  host: string;
  hostname: string;
  port: string;
  pathname: string;
  search: string;
  hash: string;
  readonly searchParams: URLSearchParams;
  toString(): string;
  toJSON(): string;
}
export interface URLConstructor {
  new (url: string | URL, base?: string | URL): URL;
  canParse(url: string | URL, base?: string | URL): boolean;
  parse(url: string | URL, base?: string | URL): URL | null;
}
export interface TextEncoder {
  readonly encoding: 'utf-8';
  encode(input?: string): Uint8Array;
  encodeInto(input: string, destination: Uint8Array): { read: number; written: number };
}
export interface TextDecoder {
  readonly encoding: string;
  readonly fatal: boolean;
  readonly ignoreBOM: boolean;
  decode(input?: ArrayBuffer | ArrayBufferView, options?: { stream?: boolean }): string;
}
export interface Console {
  log(...data: unknown[]): void;
  info(...data: unknown[]): void;
  debug(...data: unknown[]): void;
  warn(...data: unknown[]): void;
  error(...data: unknown[]): void;
  assert(condition?: unknown, ...data: unknown[]): void;
  trace(...data: unknown[]): void;
  dir(item?: unknown): void;
  table(data?: unknown): void;
  group(...data: unknown[]): void;
  groupCollapsed(...data: unknown[]): void;
  groupEnd(): void;
  count(label?: string): void;
  countReset(label?: string): void;
  time(label?: string): void;
  timeLog(label?: string, ...data: unknown[]): void;
  timeEnd(label?: string): void;
  clear(): void;
}
declare global {
  interface FlaxGlobalEventMap {}
  function addEventListener<K extends keyof FlaxGlobalEventMap>(
    type: K,
    callback:
      | ((this: typeof globalThis, event: FlaxGlobalEventMap[K]) => void)
      | { handleEvent(event: FlaxGlobalEventMap[K]): void }
      | null,
    options?: boolean | import('./events.js').AddEventListenerOptions,
  ): void;
  function addEventListener(
    type: string,
    callback:
      | ((this: typeof globalThis, event: HostEvent) => void)
      | { handleEvent(event: HostEvent): void }
      | null,
    options?: boolean | import('./events.js').AddEventListenerOptions,
  ): void;
  function removeEventListener<K extends keyof FlaxGlobalEventMap>(
    type: K,
    callback:
      | ((this: typeof globalThis, event: FlaxGlobalEventMap[K]) => void)
      | { handleEvent(event: FlaxGlobalEventMap[K]): void }
      | null,
    options?: boolean | import('./events.js').EventListenerOptions,
  ): void;
  function removeEventListener(
    type: string,
    callback:
      | ((this: typeof globalThis, event: HostEvent) => void)
      | { handleEvent(event: HostEvent): void }
      | null,
    options?: boolean | import('./events.js').EventListenerOptions,
  ): void;
  function dispatchEvent(event: HostEvent): boolean;
  type URL = import('./index.js').URL;
  type URLSearchParams = import('./index.js').URLSearchParams;
  type TextEncoder = import('./index.js').TextEncoder;
  type TextDecoder = import('./index.js').TextDecoder;
  type Console = import('./index.js').Console;
  type Event = HostEvent;
  type EventTarget = HostEventTarget;
  type CustomEvent<T = unknown> = HostCustomEvent<T>;
  type MessageEvent<T = unknown> = HostMessageEvent<T>;
  type DOMException = HostDOMException;
  type AbortController = HostAbortController;
  type AbortSignal = HostAbortSignal;
  var console: Console;
  var performance: { now(): number; readonly timeOrigin: number };
  function setTimeout(
    callback: (...args: any[]) => void,
    milliseconds?: number,
    ...args: any[]
  ): number;
  function setInterval(
    callback: (...args: any[]) => void,
    milliseconds?: number,
    ...args: any[]
  ): number;
  function clearTimeout(id?: number): void;
  function clearInterval(id?: number): void;
  function queueMicrotask(callback: () => void): void;
  function requestAnimationFrame(callback: (time: number) => void): number;
  function cancelAnimationFrame(id?: number): void;
  function atob(value: string): string;
  function btoa(value: string): string;
  var URL: URLConstructor;
  var URLSearchParams: URLSearchParamsConstructor;
  var TextEncoder: { new (): TextEncoder };
  var TextDecoder: {
    new (
      label?: string,
      options?: { fatal?: boolean; ignoreBOM?: boolean },
    ): TextDecoder;
  };
  var Event: typeof HostEvent;
  var EventTarget: typeof HostEventTarget;
  var CustomEvent: typeof HostCustomEvent;
  var MessageEvent: typeof HostMessageEvent;
  var DOMException: typeof HostDOMException;
  var AbortController: typeof HostAbortController;
  var AbortSignal: typeof HostAbortSignal;
}

import type * as Data from './data.js';
import type * as Streams from 'web-streams-polyfill';
export type * from './data.js';
export type * from 'web-streams-polyfill';
export type TextEncoderStream = InstanceType<typeof globalThis.TextEncoderStream>;
export type TextDecoderStream = InstanceType<typeof globalThis.TextDecoderStream>;
declare global {
  var Blob: typeof Data.Blob;
  var File: typeof Data.File;
  var FormData: typeof Data.FormData;
  type Blob = Data.Blob;
  type File = Data.File;
  type FormData = Data.FormData;
  var ReadableStream: typeof Streams.ReadableStream;
  var WritableStream: typeof Streams.WritableStream;
  var TransformStream: typeof Streams.TransformStream;
  var ReadableStreamDefaultReader: typeof Streams.ReadableStreamDefaultReader;
  var ReadableStreamBYOBReader: typeof Streams.ReadableStreamBYOBReader;
  var ReadableStreamDefaultController: typeof Streams.ReadableStreamDefaultController;
  var ReadableByteStreamController: typeof Streams.ReadableByteStreamController;
  var ReadableStreamBYOBRequest: typeof Streams.ReadableStreamBYOBRequest;
  var WritableStreamDefaultWriter: typeof Streams.WritableStreamDefaultWriter;
  var WritableStreamDefaultController: typeof Streams.WritableStreamDefaultController;
  var TransformStreamDefaultController: typeof Streams.TransformStreamDefaultController;
  var ByteLengthQueuingStrategy: typeof Streams.ByteLengthQueuingStrategy;
  var CountQueuingStrategy: typeof Streams.CountQueuingStrategy;
  type ReadableStream<R = unknown> = Streams.ReadableStream<R>;
  type WritableStream<W = unknown> = Streams.WritableStream<W>;
  type TransformStream<I = unknown, O = unknown> = Streams.TransformStream<I, O>;
  type ReadableStreamDefaultReader<R = unknown> =
    Streams.ReadableStreamDefaultReader<R>;
  type ReadableStreamBYOBReader = Streams.ReadableStreamBYOBReader;
  type ReadableStreamDefaultController<R = unknown> =
    Streams.ReadableStreamDefaultController<R>;
  type ReadableByteStreamController = Streams.ReadableByteStreamController;
  type ReadableStreamBYOBRequest = Streams.ReadableStreamBYOBRequest;
  type WritableStreamDefaultWriter<W = unknown> =
    Streams.WritableStreamDefaultWriter<W>;
  type WritableStreamDefaultController = Streams.WritableStreamDefaultController;
  type TransformStreamDefaultController<O = unknown> =
    Streams.TransformStreamDefaultController<O>;
  type ByteLengthQueuingStrategy = Streams.ByteLengthQueuingStrategy;
  type CountQueuingStrategy = Streams.CountQueuingStrategy;
  type TextEncoderStream = InstanceType<typeof TextEncoderStream>;
  type TextDecoderStream = InstanceType<typeof TextDecoderStream>;
  var TextEncoderStream: {
    new (): {
      readonly encoding: 'utf-8';
      readonly readable: Streams.ReadableStream<Uint8Array>;
      readonly writable: Streams.WritableStream<string>;
    };
  };
  var TextDecoderStream: {
    new (
      label?: string,
      options?: { fatal?: boolean; ignoreBOM?: boolean },
    ): {
      readonly encoding: string;
      readonly fatal: boolean;
      readonly ignoreBOM: boolean;
      readonly readable: Streams.ReadableStream<string>;
      readonly writable: Streams.WritableStream<ArrayBuffer | ArrayBufferView>;
    };
  };
}
