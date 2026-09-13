import { ReadableStream } from 'web-streams-polyfill';

const encoder = () => new TextEncoder();
export type BlobPart = string | Blob | ArrayBuffer | ArrayBufferView;
export interface BlobPropertyBag {
  type?: string;
  endings?: 'transparent' | 'native';
}
export interface FilePropertyBag extends BlobPropertyBag {
  lastModified?: number;
}

export class Blob {
  #parts: Uint8Array[];
  readonly size: number;
  readonly type: string;
  constructor(parts: Iterable<BlobPart> = [], options: BlobPropertyBag = {}) {
    if (
      options.endings !== undefined &&
      !['transparent', 'native'].includes(options.endings)
    )
      throw new TypeError('Invalid Blob endings');
    this.#parts = [];
    for (const part of parts) {
      if (part instanceof Blob) this.#parts.push(...part.#parts);
      else if (ArrayBuffer.isView(part))
        this.#parts.push(
          new Uint8Array(part.buffer, part.byteOffset, part.byteLength).slice(),
        );
      else if (part instanceof ArrayBuffer)
        this.#parts.push(new Uint8Array(part).slice());
      else {
        let text = String(part);
        if (options.endings === 'native') text = text.replace(/\r\n?|\n/g, '\n');
        this.#parts.push(encoder().encode(text));
      }
    }
    this.size = this.#parts.reduce((size, part) => size + part.byteLength, 0);
    const type = String(options.type ?? '');
    this.type = /[^\x20-\x7e]/.test(type) ? '' : type.toLowerCase();
  }
  get [Symbol.toStringTag](): string {
    return 'Blob';
  }
  slice(start = 0, end = this.size, type = ''): Blob {
    const index = (value: number) => {
      value = Math.trunc(Number(value)) || 0;
      return value < 0 ? Math.max(this.size + value, 0) : Math.min(value, this.size);
    };
    const from = index(start),
      to = Math.max(from, index(end));
    const parts: Uint8Array[] = [];
    let offset = 0;
    for (const part of this.#parts) {
      if (offset < to && offset + part.byteLength > from)
        parts.push(
          part.subarray(
            Math.max(0, from - offset),
            Math.min(part.byteLength, to - offset),
          ),
        );
      offset += part.byteLength;
    }
    return new Blob(parts, { type });
  }
  async arrayBuffer(): Promise<ArrayBuffer> {
    const result = new Uint8Array(this.size);
    let offset = 0;
    for (const part of this.#parts) {
      result.set(part, offset);
      offset += part.byteLength;
    }
    return result.buffer;
  }
  async bytes(): Promise<Uint8Array> {
    return new Uint8Array(await this.arrayBuffer());
  }
  async text(): Promise<string> {
    return new TextDecoder().decode(await this.arrayBuffer());
  }
  stream(): ReadableStream<Uint8Array> {
    const parts = this.#parts;
    let index = 0,
      offset = 0;
    return new ReadableStream<Uint8Array>({
      type: 'bytes',
      pull(controller) {
        while (index < parts.length && offset === parts[index]!.byteLength) {
          index++;
          offset = 0;
        }
        if (index === parts.length) {
          controller.close();
          controller.byobRequest?.respond(0);
          return;
        }
        const part = parts[index]!;
        // Bounded copies keep one large Blob from becoming a single queued chunk.
        const end = Math.min(part.byteLength, offset + 65536);
        const chunk = part.slice(offset, end);
        offset = end;
        controller.enqueue(chunk);
      },
    });
  }
}
export class File extends Blob {
  readonly name: string;
  readonly lastModified: number;
  readonly webkitRelativePath = '';
  constructor(parts: Iterable<BlobPart>, name: string, options: FilePropertyBag = {}) {
    super(parts, options);
    this.name = String(name);
    this.lastModified =
      options.lastModified === undefined
        ? Date.now()
        : Math.trunc(Number(options.lastModified));
  }
  override get [Symbol.toStringTag](): string {
    return 'File';
  }
}

export type FormDataEntryValue = string | File;
export class FormData {
  #entries: [string, FormDataEntryValue][] = [];
  get [Symbol.toStringTag](): string {
    return 'FormData';
  }
  append(name: string, value: string | Blob, filename?: string): void {
    this.#entries.push([String(name), this.#value(value, filename)]);
  }
  set(name: string, value: string | Blob, filename?: string): void {
    name = String(name);
    const next = this.#value(value, filename);
    const index = this.#entries.findIndex(([key]) => key === name);
    if (index < 0) this.#entries.push([name, next]);
    else {
      this.#entries[index] = [name, next];
      this.#entries = this.#entries.filter(([key], i) => key !== name || i === index);
    }
  }
  #value(value: string | Blob, filename?: string): FormDataEntryValue {
    if (value instanceof Blob)
      return value instanceof File && filename === undefined
        ? value
        : new File([value], filename ?? 'blob', { type: value.type });
    if (filename !== undefined) throw new TypeError('Filename requires a Blob');
    return String(value);
  }
  get(name: string): FormDataEntryValue | null {
    return this.#entries.find(([key]) => key === String(name))?.[1] ?? null;
  }
  getAll(name: string): FormDataEntryValue[] {
    return this.#entries
      .filter(([key]) => key === String(name))
      .map(([, value]) => value);
  }
  has(name: string): boolean {
    return this.#entries.some(([key]) => key === String(name));
  }
  delete(name: string): void {
    this.#entries = this.#entries.filter(([key]) => key !== String(name));
  }
  *entries(): IterableIterator<[string, FormDataEntryValue]> {
    for (const [key, value] of this.#entries) yield [key, value];
  }
  *keys(): IterableIterator<string> {
    for (const [key] of this.#entries) yield key;
  }
  *values(): IterableIterator<FormDataEntryValue> {
    for (const [, value] of this.#entries) yield value;
  }
  [Symbol.iterator](): IterableIterator<[string, FormDataEntryValue]> {
    return this.entries();
  }
  forEach(
    callback: (value: FormDataEntryValue, key: string, parent: FormData) => void,
    thisArg?: unknown,
  ): void {
    for (const [key, value] of this.#entries) callback.call(thisArg, value, key, this);
  }
}
