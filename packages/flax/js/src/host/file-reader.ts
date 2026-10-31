import { Blob, blobBuffer } from './data.js';
import type { DOMException, EventTarget, ProgressEvent } from './events.js';

type Handler = ((this: FileReader, event: ProgressEvent) => unknown) | null;
export interface FileReaderSync {
  readAsArrayBuffer(blob: Blob): ArrayBuffer;
  readAsText(blob: Blob, encoding?: string): string;
  readAsDataURL(blob: Blob): string;
  readAsBinaryString(blob: Blob): string;
}

function readResult(
  g: any,
  blob: Blob,
  buffer: ArrayBuffer,
  kind: string,
  encoding?: string,
): string | ArrayBuffer {
  if (kind === 'text') {
    const charset = /charset\s*=\s*"?([^;"\s]+)/i.exec(blob.type)?.[1];
    for (const label of [encoding, charset, 'utf-8']) {
      if (label === undefined) continue;
      let decoder;
      try {
        decoder = new g.TextDecoder(label);
      } catch {
        continue;
      }
      return decoder.decode(buffer);
    }
  }
  if (kind === 'data' || kind === 'binary') {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    for (let at = 0; at < bytes.length; at += 8192)
      binary += String.fromCharCode(...bytes.subarray(at, at + 8192));
    return kind === 'binary'
      ? binary
      : `data:${blob.type || 'application/octet-stream'};base64,${g.btoa(binary)}`;
  }
  return buffer;
}

export function installFileReaderSync(global: typeof globalThis): void {
  const g = global as any;
  g.FileReaderSync = class FileReaderSync {
    #brand = true;
    readAsArrayBuffer(blob: Blob): ArrayBuffer {
      if (!(#brand in this)) throw new TypeError('Illegal FileReaderSync invocation');
      return blobBuffer(blob);
    }
    readAsText(blob: Blob, encoding?: string): string {
      if (!(#brand in this)) throw new TypeError('Illegal FileReaderSync invocation');
      return readResult(g, blob, blobBuffer(blob), 'text', encoding) as string;
    }
    readAsDataURL(blob: Blob): string {
      if (!(#brand in this)) throw new TypeError('Illegal FileReaderSync invocation');
      return readResult(g, blob, blobBuffer(blob), 'data') as string;
    }
    readAsBinaryString(blob: Blob): string {
      if (!(#brand in this)) throw new TypeError('Illegal FileReaderSync invocation');
      return readResult(g, blob, blobBuffer(blob), 'binary') as string;
    }
    get [Symbol.toStringTag](): string {
      return 'FileReaderSync';
    }
  };
}
export interface FileReader extends EventTarget {
  readonly EMPTY: 0;
  readonly LOADING: 1;
  readonly DONE: 2;
  readonly readyState: 0 | 1 | 2;
  readonly result: string | ArrayBuffer | null;
  readonly error: DOMException | null;
  onloadstart: Handler;
  onprogress: Handler;
  onload: Handler;
  onabort: Handler;
  onerror: Handler;
  onloadend: Handler;
  readAsArrayBuffer(blob: Blob): void;
  readAsText(blob: Blob, encoding?: string): void;
  readAsDataURL(blob: Blob): void;
  readAsBinaryString(blob: Blob): void;
  abort(): void;
}
export interface FileReaderConstructor {
  new (): FileReader;
  readonly prototype: FileReader;
  readonly EMPTY: 0;
  readonly LOADING: 1;
  readonly DONE: 2;
}

export function installFileReader(global: typeof globalThis) {
  const g = global as any;
  const active = new Map<HostFileReader, () => void>();
  const handlers = new WeakMap<
    object,
    Map<string, { callback: Handler; listener: (event: ProgressEvent) => void }>
  >();
  let open = true;
  class HostFileReader extends g.EventTarget {
    #state: 0 | 1 | 2 = 0;
    #result: string | ArrayBuffer | null = null;
    #error: DOMException | null = null;
    #generation = 0;
    #timer: number | undefined;
    constructor() {
      super();
      handlers.set(this, new Map());
    }
    get readyState() {
      return this.#state;
    }
    get result() {
      return this.#result;
    }
    get error() {
      return this.#error;
    }
    #emit(type: string, loaded = 0, total = 0, lengthComputable = false) {
      this.dispatchEvent(
        new g.ProgressEvent(type, { lengthComputable, loaded, total }),
      );
    }
    #read(blob: Blob, kind: string, encoding?: string) {
      if (!open) throw new g.DOMException('The session is closed', 'InvalidStateError');
      if (!(blob instanceof g.Blob))
        throw new TypeError('Expected a Blob from this session');
      if (this.#state === 1)
        throw new g.DOMException('FileReader is already loading', 'InvalidStateError');
      const generation = ++this.#generation;
      this.#state = 1;
      this.#result = null;
      this.#error = null;
      active.set(this, () => this.#cancel());
      const current = () =>
        open && this.#generation === generation && this.#state === 1;
      this.#timer = g.setTimeout(() => {
        this.#timer = undefined;
        if (!current()) return;
        this.#emit('loadstart', 0, blob.size, true);
        if (!current()) return;
        void Promise.resolve()
          .then(() => g.Blob.prototype.arrayBuffer.call(blob))
          .then((buffer: ArrayBuffer) => {
            if (!current()) return;
            this.#emit('progress', buffer.byteLength, blob.size, true);
            if (!current()) return;
            const result = readResult(g, blob, buffer, kind, encoding);
            this.#result = result;
            this.#state = 2;
            active.delete(this);
            this.#emit('load', blob.size, blob.size, true);
            if (this.#generation === generation)
              this.#emit('loadend', blob.size, blob.size, true);
          })
          .catch((error: unknown) => {
            if (!current()) return;
            this.#error = new g.DOMException(String(error), 'NotReadableError');
            this.#state = 2;
            active.delete(this);
            this.#emit('error');
            if (this.#generation === generation) this.#emit('loadend');
          });
      }, 0);
    }
    readAsArrayBuffer(blob: Blob) {
      this.#read(blob, 'buffer');
    }
    readAsText(blob: Blob, encoding: string | undefined = undefined) {
      this.#read(blob, 'text', encoding === undefined ? undefined : '' + encoding);
    }
    readAsDataURL(blob: Blob) {
      this.#read(blob, 'data');
    }
    readAsBinaryString(blob: Blob) {
      this.#read(blob, 'binary');
    }
    abort() {
      this.#result = null;
      if (this.#state !== 1) return;
      this.#cancel();
      const generation = this.#generation;
      this.#emit('abort');
      if (this.#generation === generation) this.#emit('loadend');
    }
    #cancel() {
      this.#generation++;
      this.#state = 2;
      this.#result = null;
      if (this.#timer !== undefined) g.clearTimeout(this.#timer);
      this.#timer = undefined;
      active.delete(this);
    }
  }
  Object.defineProperty(HostFileReader, 'name', { value: 'FileReader' });
  for (const [name, value] of Object.entries({ EMPTY: 0, LOADING: 1, DONE: 2 })) {
    Object.defineProperty(HostFileReader, name, { value, enumerable: true });
    Object.defineProperty(HostFileReader.prototype, name, { value, enumerable: true });
  }
  for (const type of ['loadstart', 'progress', 'load', 'abort', 'error', 'loadend'])
    Object.defineProperty(HostFileReader.prototype, 'on' + type, {
      configurable: true,
      enumerable: true,
      get(this: HostFileReader) {
        const values = handlers.get(this);
        if (!values) throw new TypeError('Illegal FileReader invocation');
        return values.get(type)?.callback ?? null;
      },
      set(this: HostFileReader, value: Handler) {
        const values = handlers.get(this);
        if (!values) throw new TypeError('Illegal FileReader invocation');
        let entry = values.get(type);
        if (typeof value !== 'function') {
          if (entry) this.removeEventListener(type, entry.listener);
          values.delete(type);
          return;
        }
        if (!entry) {
          entry = {
            callback: value,
            listener: (event: ProgressEvent) =>
              values.get(type)?.callback?.call(this as unknown as FileReader, event),
          };
          values.set(type, entry);
          this.addEventListener(type, entry.listener);
        } else entry.callback = value;
      },
    });
  Object.defineProperty(HostFileReader.prototype, Symbol.toStringTag, {
    value: 'FileReader',
    configurable: true,
  });
  Object.defineProperty(g, 'FileReader', {
    value: HostFileReader,
    writable: true,
    configurable: true,
  });
  return {
    close() {
      open = false;
      for (const cancel of active.values()) cancel();
      active.clear();
    },
  };
}
