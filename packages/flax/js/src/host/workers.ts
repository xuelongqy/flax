import { DOMException, Event, EventTarget, MessageEvent } from './events.js';
import type { EventInit } from './events.js';
import { Response } from './fetch/http.js';
import { ReadableStream } from 'web-streams-polyfill';
import { blobRange } from './fetch/local-resources.js';
import {
  Blob,
  blobParts,
  blobType,
  fileMetadata,
  blobBuffer,
  restoreBlob,
} from './data.js';

export interface WorkerOptions {
  type?: 'classic' | 'module';
  name?: string;
  credentials?: 'omit' | 'same-origin' | 'include';
}
export type Transferable = ArrayBuffer;
export interface StructuredSerializeOptions {
  transfer?: Transferable[];
}
export interface ErrorEventInit {
  message?: string;
  filename?: string;
  lineno?: number;
  colno?: number;
  error?: unknown;
  cancelable?: boolean;
}
export class ErrorEvent extends Event {
  readonly message: string;
  readonly filename: string;
  readonly lineno: number;
  readonly colno: number;
  readonly error: unknown;
  constructor(type: string, init: ErrorEventInit = {}) {
    super(type, init);
    this.message = String(init.message ?? '');
    this.filename = String(init.filename ?? '');
    this.lineno = Number(init.lineno ?? 0);
    this.colno = Number(init.colno ?? 0);
    this.error = init.error ?? null;
  }
}
export interface PromiseRejectionEventInit extends EventInit {
  promise: Promise<unknown>;
  reason?: unknown;
}
export class PromiseRejectionEvent extends Event {
  readonly promise: Promise<unknown>;
  readonly reason: unknown;
  constructor(type: string, init: PromiseRejectionEventInit) {
    super(type, init);
    this.promise = init.promise;
    this.reason = init.reason;
  }
}
export interface Worker extends EventTarget {
  onmessage: ((this: Worker, event: MessageEvent<any>) => unknown) | null;
  onmessageerror: ((this: Worker, event: MessageEvent<any>) => unknown) | null;
  onerror: ((this: Worker, event: ErrorEvent) => unknown) | null;
  postMessage(
    message: unknown,
    transferOrOptions?: Transferable[] | StructuredSerializeOptions,
  ): void;
  terminate(): void;
}
export interface WorkerConstructor {
  new (scriptURL: string | URL, options?: WorkerOptions): Worker;
}

type Call = (operation: string, ...args: unknown[]) => unknown;
export interface WorkerScopeOptions {
  id: number;
  name: string;
  type: 'classic' | 'module';
}

function transfers(
  input: Transferable[] | StructuredSerializeOptions | undefined,
): unknown[] {
  if (input == null) return [];
  if (typeof input !== 'object' && typeof input !== 'function')
    throw new TypeError('Expected transfer list or options');
  const list = Symbol.iterator in input ? input : input.transfer;
  if (list === undefined) return [];
  if (typeof list !== 'object' || !(Symbol.iterator in list))
    throw new TypeError('Expected an iterable transfer list');
  return Array.from(list as Iterable<unknown>);
}
function handlers(target: any, types: string[], globalErrors = false) {
  for (const type of types) {
    let callback: ((...args: any[]) => unknown) | null = null;
    const listener = (event: Event) => {
      const result =
        globalErrors && event instanceof ErrorEvent
          ? callback?.call(
              target,
              event.message,
              event.filename,
              event.lineno,
              event.colno,
              event.error,
            )
          : callback?.call(target, event);
      if (type === 'error' && result === globalErrors) event.preventDefault();
    };
    Object.defineProperty(target, 'on' + type, {
      configurable: true,
      enumerable: true,
      get: () => callback,
      set(value) {
        if (typeof value !== 'function') value = null;
        if (!callback && value) target.addEventListener(type, listener);
        if (callback && !value) target.removeEventListener(type, listener);
        callback = value;
      },
    });
  }
}

export function installWorkers(
  global: typeof globalThis,
  call: Call,
  scope?: WorkerScopeOptions,
) {
  const g = global as any;
  const native = g.__flaxNativeWorker;
  delete g.__flaxNativeWorker;
  const workers = new Map<number, HostWorker>();
  const resources = new Map<
    number,
    {
      resolve(value: ArrayBuffer, url: string, kind: string): void;
      abort(error: unknown): void;
    }
  >();
  let nextResource = 0;
  const nativeRequired = () => {
    if (!native)
      throw new DOMException(
        'Dedicated Workers require a matching Flax engine',
        'NotSupportedError',
      );
    return native;
  };
  const exceptionName = Object.getOwnPropertyDescriptor(
    DOMException.prototype,
    'name',
  )!.get!;
  const exceptionMessage = Object.getOwnPropertyDescriptor(
    DOMException.prototype,
    'message',
  )!.get!;
  const serializeHost = (value: object) => {
    const parts = blobParts(value);
    if (parts) {
      const file = fileMetadata(value);
      return file
        ? ['File', parts, blobType(value), ...file]
        : ['Blob', parts, blobType(value)];
    }
    if (value instanceof DOMException)
      return ['DOMException', exceptionMessage.call(value), exceptionName.call(value)];
    return undefined;
  };
  const deserializeHost = (record: any[]) => {
    if (record[0] === 'DOMException') return new DOMException(record[1], record[2]);
    if (record[0] === 'Blob' || record[0] === 'File')
      return restoreBlob(record[1], record[2], record[3], record[4]);
    throw new DOMException('Invalid platform clone record', 'DataCloneError');
  };
  Object.defineProperty(g, 'structuredClone', {
    configurable: true,
    writable: true,
    value: function <T>(value: T, options?: StructuredSerializeOptions): T {
      if (!arguments.length) throw new TypeError('structuredClone needs a value');
      if (
        options != null &&
        typeof options !== 'object' &&
        typeof options !== 'function'
      )
        throw new TypeError('Expected structured clone options');
      const transfer = options?.transfer;
      const engine = nativeRequired();
      if (!engine.clone)
        throw new DOMException(
          'structuredClone requires a matching Flax engine',
          'NotSupportedError',
        );
      return engine.clone(
        value,
        transfers(transfer === undefined ? [] : { transfer }),
        serializeHost,
        deserializeHost,
      );
    },
  });
  let closed = false;
  interface WasmSink {
    write(bytes: Uint8Array): void;
    finish(url: string): void;
    abort(error: unknown): void;
  }
  const wasmStreams = new Map<
    WasmSink,
    {
      reader: ReadableStreamDefaultReader<Uint8Array> | undefined;
      stopped: boolean;
    }
  >();
  native?.streaming?.(async (response: Response, token: WasmSink) => {
    const state = {
      reader: undefined as ReadableStreamDefaultReader<Uint8Array> | undefined,
      stopped: false,
    };
    wasmStreams.set(token, state);
    try {
      if (closed) throw new DOMException('The host is closed', 'AbortError');
      if (
        !(response instanceof Response) ||
        !response.ok ||
        response.headers.get('content-type')?.trim().toLowerCase() !==
          'application/wasm'
      )
        throw new TypeError('Wasm streaming requires an OK application/wasm Response');
      if (response.bodyUsed || response.body?.locked)
        throw new TypeError('Wasm streaming Response body is already used');
      state.reader = response.body?.getReader();
      if (state.reader) {
        for (;;) {
          const chunk = await state.reader.read();
          if (state.stopped) return;
          if (chunk.done) break;
          if (!(chunk.value instanceof Uint8Array))
            throw new TypeError('Wasm chunks must be Uint8Array');
          token.write(chunk.value);
        }
      }
      const url = response.url;
      token.finish(url);
      state.stopped = true;
    } catch (error) {
      if (!state.stopped) {
        state.stopped = true;
        token.abort(error);
        void state.reader?.cancel(error).catch(() => {});
      }
    } finally {
      state.reader?.releaseLock();
      wasmStreams.delete(token);
    }
  });
  class HostWorker extends EventTarget implements Worker {
    declare onmessage: Worker['onmessage'];
    declare onmessageerror: Worker['onmessageerror'];
    declare onerror: Worker['onerror'];
    readonly #id: number;
    #terminated = false;
    readonly #abort = new AbortController();
    constructor(input: string | URL, options: WorkerOptions = {}) {
      super();
      if (closed) throw new DOMException('The session is closed', 'InvalidStateError');
      if (arguments.length === 0) throw new TypeError('Worker needs a script URL');
      options ??= {};
      const name = String(options.name ?? '');
      const type = String(options.type ?? 'classic');
      if (type !== 'classic' && type !== 'module')
        throw new TypeError('Invalid Worker type');
      const credentials = options.credentials ?? 'same-origin';
      if (!['omit', 'same-origin', 'include'].includes(credentials))
        throw new TypeError('Invalid Worker credentials');
      if (credentials === 'include')
        throw new DOMException(
          'Worker credentials include is not supported',
          'NotSupportedError',
        );
      const url = new URL(
        input,
        (call('workerBaseUrl') as string | undefined) ?? g.location.href,
      ).href;
      if (
        !['http:', 'https:', 'data:', 'blob:', 'flax:', 'file:'].includes(
          new URL(url).protocol,
        )
      )
        throw new DOMException('Unsupported Worker script URL', 'NotSupportedError');
      nativeRequired();
      this.#id = call('workerCreate') as number;
      workers.set(this.#id, this);
      handlers(this, ['message', 'messageerror', 'error']);
      if (['http:', 'https:', 'flax:', 'file:'].includes(new URL(url).protocol)) {
        call('workerLoad', this.#id, url, type, name);
        return;
      }
      // Fetch captures a Blob URL before the caller can revoke it.
      void g
        .fetch(url, { signal: this.#abort.signal, credentials })
        .then(async (response: any) => {
          if (!response.ok) throw new Error(`Worker script HTTP ${response.status}`);
          const source = await response.text();
          if (!this.#terminated && !closed)
            call('workerStart', this.#id, response.url || url, type, name, source);
        })
        .catch((error: unknown) => {
          if (this.#terminated || closed) return;
          this.dispatchEvent(
            new ErrorEvent('error', { message: String(error), filename: url }),
          );
          this.terminate();
        });
    }
    postMessage(
      message: unknown,
      input?: Transferable[] | StructuredSerializeOptions,
    ): void {
      if (!arguments.length) throw new TypeError('postMessage needs a message');
      nativeRequired().post(this.#id, false, message, transfers(input), serializeHost);
    }
    terminate(): void {
      if (this.#terminated) return;
      this.#terminated = true;
      this.#abort.abort();
      workers.delete(this.#id);
      call('workerTerminate', this.#id);
    }
  }
  Object.defineProperties(g, {
    Worker: { value: HostWorker, configurable: true, writable: true },
    ErrorEvent: { value: ErrorEvent, configurable: true, writable: true },
  });
  if (scope) {
    const navigator = g.navigator,
      location = g.location;
    const requireScope = (receiver: unknown) => {
      if (receiver !== g) throw new TypeError('Illegal invocation');
    };
    class WorkerGlobalScope extends EventTarget {
      constructor() {
        super();
        throw new TypeError('Illegal constructor');
      }
      get self() {
        requireScope(this);
        return g;
      }
      get navigator() {
        requireScope(this);
        return navigator;
      }
      get location() {
        requireScope(this);
        return location;
      }
      get origin() {
        requireScope(this);
        return location.origin;
      }
      importScripts(...urls: string[]) {
        requireScope(this ?? g);
        if (scope!.type === 'module')
          throw new TypeError('importScripts is unavailable in module Workers');
        for (const input of urls) {
          const url = new URL(input, location.href);
          if (url.protocol === 'blob:') {
            const blob = g[Symbol.for('flax.blob.url')]?.(url.href);
            if (!blob)
              throw new DOMException(
                'Synchronous importScripts requires a Worker-owned Blob URL',
                'NotSupportedError',
              );
            call(
              'workerImportSource',
              new g.TextDecoder().decode(blobBuffer(blob)),
              url.href,
            );
            continue;
          }
          if (url.protocol !== 'data:')
            throw new DOMException(
              'Synchronous importScripts currently supports data URLs only',
              'NotSupportedError',
            );
          call('workerImport', url.href);
        }
      }
      get [Symbol.toStringTag]() {
        return 'WorkerGlobalScope';
      }
    }
    class DedicatedWorkerGlobalScope extends WorkerGlobalScope {
      get name() {
        requireScope(this);
        return scope!.name;
      }
      postMessage(
        message: unknown,
        input?: Transferable[] | StructuredSerializeOptions,
      ) {
        requireScope(this ?? g);
        if (!arguments.length) throw new TypeError('postMessage needs a message');
        nativeRequired().post(
          scope!.id,
          true,
          message,
          transfers(input),
          serializeHost,
        );
      }
      close() {
        requireScope(this ?? g);
        if (closed) return;
        closed = true;
        call('workerClose');
      }
      override get [Symbol.toStringTag]() {
        return 'DedicatedWorkerGlobalScope';
      }
    }
    for (const name of ['self', 'navigator', 'location']) delete g[name];
    Object.setPrototypeOf(g, DedicatedWorkerGlobalScope.prototype);
    g.WorkerGlobalScope = WorkerGlobalScope;
    g.DedicatedWorkerGlobalScope = DedicatedWorkerGlobalScope;
    handlers(
      g,
      ['message', 'messageerror', 'error', 'unhandledrejection', 'rejectionhandled'],
      true,
    );
    g.PromiseRejectionEvent = PromiseRejectionEvent;
    const fetch = g.fetch;
    g.fetch = async (input: any, init?: any) => {
      const url = new URL(
        input instanceof g.Request ? input.url : String(input),
        g.location.href,
      );
      const parentBlob =
        url.protocol === 'blob:' && !g[Symbol.for('flax.blob.url')]?.(url.href);
      if (!['flax:', 'file:'].includes(url.protocol) && !parentBlob)
        return fetch(input, init);
      const request = new g.Request(input, init);
      return new Promise<Response>((resolve, reject) => {
        request.signal.throwIfAborted();
        if (!['GET', 'HEAD'].includes(request.method))
          throw new TypeError('Worker resources require GET or HEAD');
        if (parentBlob && request.method !== 'GET')
          throw new TypeError('Blob resources require GET');
        const id = ++nextResource;
        let controller: ReadableByteStreamController | undefined;
        let reader: ReadableStreamDefaultReader<Uint8Array> | undefined;
        let completed = false;
        const cleanup = () => {
          completed = true;
          resources.delete(id);
          request.signal.removeEventListener('abort', onAbort);
        };
        const abort = (reason: unknown) => {
          if (completed) return;
          call('workerResourceCancel', id);
          controller?.error(reason);
          void reader?.cancel(reason).catch(() => {});
          cleanup();
          reject(reason);
        };
        const onAbort = () => abort(request.signal.reason);
        resources.set(id, {
          resolve: (value, url, kind) => {
            if (completed) return;
            try {
              let blob = new Blob([value], { type: kind });
              const headers: [string, string][] = [['content-type', kind]];
              let status = 200,
                statusText = 'OK';
              const range = parentBlob ? request.headers.get('range') : null;
              if (range !== null) {
                const selected = blobRange(blob, range);
                blob = selected.blob;
                status = 206;
                statusText = 'Partial Content';
                headers.push(['content-range', selected.range]);
              }
              headers.push(['content-length', String(blob.size)]);
              let body: ReadableStream<Uint8Array> | null = null;
              if (request.method === 'HEAD') cleanup();
              else {
                reader = blob.stream().getReader();
                body = new ReadableStream<Uint8Array>({
                  type: 'bytes',
                  start(value) {
                    controller = value;
                  },
                  async pull(value) {
                    try {
                      const chunk = await reader!.read();
                      if (completed) return;
                      if (chunk.done) {
                        cleanup();
                        value.close();
                        value.byobRequest?.respond(0);
                      } else value.enqueue(chunk.value);
                    } catch (error) {
                      if (completed) return;
                      cleanup();
                      value.error(error);
                    }
                  },
                  cancel(reason) {
                    cleanup();
                    return reader!.cancel(reason);
                  },
                });
              }
              resolve(
                Response.fromNetwork(
                  {
                    status,
                    statusText,
                    url,
                    redirected: false,
                    headers,
                  },
                  body,
                ),
              );
            } catch (error) {
              abort(error);
            }
          },
          abort,
        });
        request.signal.addEventListener('abort', onAbort, { once: true });
        try {
          call('workerResource', id, request.url);
        } catch (error) {
          abort(error);
        }
      });
    };
    g.SharedArrayBuffer = undefined;
    g.Atomics = undefined;
  }
  const reported = new WeakMap<Promise<unknown>, unknown>();
  function receive(id: number) {
    if (closed) return false;
    const ownScope = scope?.id === id;
    const target = ownScope ? g : workers.get(id);
    if (!target) return false;
    let packet;
    try {
      packet = nativeRequired().take(id, !ownScope, deserializeHost);
    } catch {
      target.dispatchEvent(new MessageEvent('messageerror'));
      return true;
    }
    if (packet) {
      const event = new MessageEvent('message', { data: packet[0] });
      // MessageEventInit defaults undefined to null; posted undefined is actual data.
      if (packet[0] === undefined)
        Object.defineProperty(event, 'data', { value: undefined });
      target.dispatchEvent(event);
      return true;
    }
    return false;
  }
  return {
    receive,
    details(error: unknown): string[] {
      return nativeRequired().details(error);
    },
    report(error: unknown) {
      call('workerReport', ...nativeRequired().details(error));
    },
    rejections() {
      if (!scope || closed) return;
      const pending = new Map<Promise<unknown>, unknown>();
      const records = nativeRequired().rejections();
      for (const [promise, reason, handled] of records) {
        if (!handled) pending.set(promise, reason);
        else {
          pending.delete(promise);
          if (reported.has(promise)) {
            const original = reported.get(promise);
            reported.delete(promise);
            g.dispatchEvent(
              new PromiseRejectionEvent('rejectionhandled', {
                promise,
                reason: original,
              }),
            );
          }
        }
      }
      for (const [promise, reason] of pending) {
        reported.set(promise, reason);
        if (
          g.dispatchEvent(
            new PromiseRejectionEvent('unhandledrejection', {
              promise,
              reason,
              cancelable: true,
            }),
          )
        )
          g.console.error('Unhandled promise rejection', reason);
      }
      if (records.length) call('workerCheckpoint');
    },
    resourceSettled(
      id: number,
      ok: boolean,
      value: ArrayBuffer | string,
      url: string,
      kind: string,
    ) {
      const pending = resources.get(id);
      if (!pending) return;
      if (!ok) pending.abort(new TypeError(String(value)));
      else pending.resolve(value as ArrayBuffer, url, kind);
    },
    finished(id: number) {
      // Exit can arrive before port notifications; deliver all posted messages first.
      while (receive(id)) {}
      workers.delete(id);
      nativeRequired().finish(id);
    },
    error(
      id: number,
      message: string,
      filename = '',
      line = '0',
      column = '0',
      stack = '',
      error: unknown = null,
    ) {
      if (closed) return;
      const position =
        /(?:\(|\s|^)((?:https?:|file:|flax:|blob:|data:)[^\n]*?):(\d+):(\d+)\)?(?:\n|$)/m.exec(
          stack,
        );
      if (position) {
        filename = position[1]!;
        line = position[2]!;
        column = position[3]!;
      }
      const target = scope?.id === id ? g : workers.get(id);
      return target?.dispatchEvent(
        new ErrorEvent('error', {
          message,
          filename,
          lineno: Number(line),
          colno: Number(column),
          error,
          cancelable: true,
        }),
      );
    },
    close() {
      for (const worker of [...workers.values()]) worker.terminate();
      closed = true;
      for (const [token, state] of wasmStreams) {
        if (state.stopped) continue;
        state.stopped = true;
        const error = new DOMException('The host is closed', 'AbortError');
        token.abort(error);
        void state.reader?.cancel(error).catch(() => {});
      }
      wasmStreams.clear();
      workers.clear();
      for (const pending of resources.values()) {
        pending.abort(new DOMException('The host is closed', 'AbortError'));
      }
      resources.clear();
    },
  };
}
