import { assertUnused } from './streams.js';
import type { URLSearchParams as URLSearchParamsType, BlobPart } from '@flax/core/host';
import { Blob, File, FormData, ReadableStream } from './base.js';
const encoder = () => new TextEncoder();

export type HeadersInit =
  Headers | Iterable<readonly [string, string]> | Record<string, string>;
const headerName = (input: string) => {
  const value = String(input);
  if (!/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/.test(value))
    throw new TypeError('Invalid header name');
  return value.toLowerCase();
};
const headerValue = (input: string) => {
  const value = String(input).replace(/^[\t\n\r ]+|[\t\n\r ]+$/g, '');
  if (/[\0\r\n\u0100-\uffff]/.test(value)) throw new TypeError('Invalid header value');
  return value;
};
const iteratorSteps = new WeakMap<object, () => IteratorResult<unknown>>();
const headersIteratorPrototype = Object.create(
  Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())),
  {
    next: {
      enumerable: true,
      configurable: true,
      writable: true,
      value(this: object) {
        const step = iteratorSteps.get(this);
        if (!step) throw new TypeError('Invalid Headers iterator');
        return step();
      },
    },
    [Symbol.toStringTag]: { value: 'Headers Iterator', configurable: true },
  },
);

export class Headers {
  #entries: [string, string][] = [];
  #immutable = false;
  #sorted: [string, string][] | null = null;
  constructor(init: HeadersInit = {}) {
    if (init === null || (typeof init !== 'object' && typeof init !== 'function'))
      throw new TypeError('HeadersInit must be an object');
    const pairs =
      Symbol.iterator in Object(init)
        ? (init as Iterable<readonly [string, string]>)
        : Object.entries(init);
    for (const pair of pairs) {
      if (pair.length !== 2) throw new TypeError('Expected a header pair');
      this.append(pair[0], pair[1]);
    }
  }
  get [Symbol.toStringTag](): string {
    return 'Headers';
  }
  /** @internal */ lock(): void {
    this.#immutable = true;
  }
  #write(): void {
    if (this.#immutable) throw new TypeError('Immutable headers');
    this.#sorted = null;
  }
  append(name: string, value: string): void {
    this.#write();
    this.#entries.push([headerName(name), headerValue(value)]);
  }
  set(name: string, value: string): void {
    this.#write();
    name = headerName(name);
    value = headerValue(value);
    this.delete(name);
    this.#entries.push([name, value]);
  }
  delete(name: string): void {
    this.#write();
    name = headerName(name);
    this.#entries = this.#entries.filter(([key]) => key !== name);
  }
  get(name: string): string | null {
    name = headerName(name);
    const values = this.#entries
      .filter(([key]) => key === name)
      .map(([, value]) => value);
    return values.length ? values.join(', ') : null;
  }
  has(name: string): boolean {
    return this.get(name) !== null;
  }
  getSetCookie(): string[] {
    return this.#entries
      .filter(([key]) => key === 'set-cookie')
      .map(([, value]) => value);
  }
  #list(): [string, string][] {
    if (this.#sorted) return this.#sorted;
    const sorted: [string, string][] = [];
    for (const name of [...new Set(this.#entries.map(([key]) => key))].sort()) {
      if (name === 'set-cookie') {
        for (const value of this.getSetCookie()) sorted.push([name, value]);
      } else sorted.push([name, this.get(name)!]);
    }
    return (this.#sorted = sorted);
  }
  #iterator<T>(select: (entry: [string, string]) => T): IterableIterator<T> {
    let index = 0,
      done = false;
    const iterator = Object.create(headersIteratorPrototype) as IterableIterator<T>;
    iteratorSteps.set(iterator, () => {
      const list = this.#list();
      if (done || index >= list.length) {
        done = true;
        return { done: true, value: undefined };
      }
      return { done: false, value: select(list[index++]!) };
    });
    return iterator;
  }
  entries(): IterableIterator<[string, string]> {
    return this.#iterator(([name, value]) => [name, value]);
  }
  keys(): IterableIterator<string> {
    return this.#iterator(([name]) => name);
  }
  values(): IterableIterator<string> {
    return this.#iterator(([, value]) => value);
  }
  [Symbol.iterator](): IterableIterator<[string, string]> {
    return this.entries();
  }
  forEach(
    callback: (value: string, key: string, parent: Headers) => void,
    thisArg?: unknown,
  ): void {
    for (const [key, value] of this.entries()) callback.call(thisArg, value, key, this);
  }
}

export type BodyInit =
  | string
  | URLSearchParamsType
  | Blob
  | FormData
  | ArrayBuffer
  | ArrayBufferView
  | ReadableStream<Uint8Array>;
export interface BodyRecord {
  stream: ReadableStream<Uint8Array>;
  source: Blob | null;
  type: string;
}
const crlf = (text: string) => text.replace(/\r\n|\r|\n/g, '\r\n');
const quoted = (text: string) =>
  crlf(text).replace(/\r/g, '%0D').replace(/\n/g, '%0A').replace(/"/g, '%22');
export function extractBody(value: BodyInit | null | undefined): BodyRecord | null {
  if (value == null) return null;
  if (value instanceof ReadableStream) {
    assertUnused(value);
    return { stream: value, source: null, type: '' };
  }
  let source: Blob;
  if (value instanceof Blob) source = value;
  else if (value instanceof FormData) {
    const boundary = `----flax-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`;
    const parts: BlobPart[] = [];
    for (const [key, entry] of value) {
      parts.push(
        `--${boundary}\r\nContent-Disposition: form-data; name="${quoted(key)}"`,
      );
      if (typeof entry === 'string') parts.push(`\r\n\r\n${crlf(entry)}\r\n`);
      else
        parts.push(
          `; filename="${quoted(entry.name)}"\r\nContent-Type: ${entry.type || 'application/octet-stream'}\r\n\r\n`,
          entry,
          '\r\n',
        );
    }
    parts.push(`--${boundary}--\r\n`);
    source = new Blob(parts, { type: `multipart/form-data; boundary=${boundary}` });
  } else if (value instanceof globalThis.URLSearchParams)
    source = new Blob([value.toString()], {
      type: 'application/x-www-form-urlencoded;charset=UTF-8',
    });
  else if (value instanceof ArrayBuffer || ArrayBuffer.isView(value))
    source = new Blob([value]);
  else source = new Blob([String(value)], { type: 'text/plain;charset=UTF-8' });
  return { source, stream: source.stream(), type: source.type };
}

export async function readAll(
  stream: ReadableStream<Uint8Array> | null,
): Promise<Uint8Array> {
  if (stream === null) return new Uint8Array();
  const reader = stream.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (!(value instanceof Uint8Array))
        throw new TypeError('Body chunks must be Uint8Array');
      if (value.byteLength === 0) continue;
      // Ordinary stream producers retain ownership and may reuse this buffer.
      chunks.push(new Uint8Array(value));
      size += value.byteLength;
    }
  } catch (error) {
    await reader.cancel(error).catch(() => {});
    throw error;
  } finally {
    reader.releaseLock();
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return bytes;
}

export function parseForm(bytes: Uint8Array, contentType: string): FormData {
  const form = new FormData();
  if (/^application\/x-www-form-urlencoded(?:;|$)/i.test(contentType)) {
    for (const [key, value] of new URLSearchParams(new TextDecoder().decode(bytes)))
      form.append(key, value);
    return form;
  }
  const match = /^multipart\/form-data\s*;.*\bboundary=(?:"([^"]+)"|([^;\s]+))/i.exec(
    contentType,
  );
  const boundary = match?.[1] ?? match?.[2];
  if (!boundary) throw new TypeError('Unsupported form data content type');
  const delimiter = encoder().encode(`--${boundary}`);
  const find = (needle: Uint8Array, start: number) => {
    outer: for (let i = start; i <= bytes.length - needle.length; i++) {
      for (let j = 0; j < needle.length; j++)
        if (bytes[i + j] !== needle[j]) continue outer;
      return i;
    }
    return -1;
  };
  let cursor = find(delimiter, 0);
  if (cursor < 0) throw new TypeError('Invalid multipart body');
  while (cursor >= 0) {
    cursor += delimiter.length;
    if (bytes[cursor] === 45 && bytes[cursor + 1] === 45) return form;
    if (bytes[cursor] !== 13 || bytes[cursor + 1] !== 10)
      throw new TypeError('Invalid multipart separator');
    const headersEnd = find(new Uint8Array([13, 10, 13, 10]), cursor + 2);
    if (headersEnd < 0) throw new TypeError('Invalid multipart headers');
    const headers = new Map<string, string>();
    for (const line of new TextDecoder()
      .decode(bytes.subarray(cursor + 2, headersEnd))
      .split('\r\n')) {
      const colon = line.indexOf(':');
      if (colon < 1) throw new TypeError('Invalid multipart header');
      headers.set(
        line.slice(0, colon).trim().toLowerCase(),
        line.slice(colon + 1).trim(),
      );
    }
    const disposition = headers.get('content-disposition') ?? '';
    if (!/^form-data(?:;|$)/i.test(disposition))
      throw new TypeError('Invalid multipart disposition');
    const parameter = (name: string) =>
      new RegExp(`(?:^|;)\\s*${name}="((?:[^"\\\\]|\\\\.)*)"`, 'i')
        .exec(disposition)?.[1]
        ?.replace(/\\(.)/g, '$1');
    const name = parameter('name');
    if (name === undefined) throw new TypeError('Missing form field name');
    const nextDelimiter = encoder().encode(`\r\n--${boundary}`);
    let end = find(nextDelimiter, headersEnd + 4);
    while (
      end >= 0 &&
      !(
        (bytes[end + nextDelimiter.length] === 45 &&
          bytes[end + nextDelimiter.length + 1] === 45) ||
        (bytes[end + nextDelimiter.length] === 13 &&
          bytes[end + nextDelimiter.length + 1] === 10)
      )
    )
      end = find(nextDelimiter, end + 1);
    if (end < 0) throw new TypeError('Unterminated multipart body');
    const data = bytes.subarray(headersEnd + 4, end);
    const filename = parameter('filename');
    if (filename === undefined) form.append(name, new TextDecoder().decode(data));
    else
      form.append(
        name,
        new File([data], filename, {
          type: headers.get('content-type') ?? 'text/plain',
        }),
      );
    cursor = end + 2;
  }
  throw new TypeError('Invalid multipart body');
}
