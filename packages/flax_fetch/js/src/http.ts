import type { AbortSignal as AbortSignalType, URL as URLType } from '@flax/core/host';
import { Blob, FormData, ReadableStream, TransformStream } from './base.js';
import { isDisturbed, assertUnused } from './streams.js';
import {
  Headers,
  extractBody,
  readAll,
  parseForm,
  type BodyInit,
  type BodyRecord,
  type HeadersInit,
} from './data.js';

export type RequestRedirect = 'follow' | 'error' | 'manual';
export type RequestCredentials = 'omit' | 'same-origin' | 'include';
export interface RequestInit {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit | null;
  signal?: AbortSignalType | null;
  redirect?: RequestRedirect;
  credentials?: RequestCredentials;
  mode?: 'cors';
  cache?: 'default' | 'no-store' | 'reload';
  referrer?: '' | 'about:client';
  referrerPolicy?: '';
  integrity?: '';
  keepalive?: false;
  duplex?: 'half';
  priority?: 'auto';
  window?: null;
}
export interface ResponseInit {
  status?: number;
  statusText?: string;
  headers?: HeadersInit;
}
export interface ResponseMetadata {
  status: number;
  statusText: string;
  headers: [string, string][];
  url: string;
  redirected: boolean;
}
let baseUrl: string | undefined;
export function setBaseUrl(value: string | undefined): void {
  baseUrl = value;
}

class Body {
  protected record: BodyRecord | null = null;
  get body(): ReadableStream<Uint8Array> | null {
    return this.record?.stream ?? null;
  }
  get bodyUsed(): boolean {
    return this.body !== null && isDisturbed(this.body);
  }
  protected setBody(record: BodyRecord | null): void {
    if (record) assertUnused(record.stream);
    this.record = record;
  }
  protected cloneBody(): BodyRecord | null {
    if (this.body) assertUnused(this.body);
    if (!this.record) return null;
    const [left, right] = this.record.stream.tee();
    const record = this.record;
    this.setBody({ ...record, stream: left });
    return { ...record, stream: right };
  }
  protected async consume(): Promise<Uint8Array> {
    if (this.body) assertUnused(this.body);
    return readAll(this.body);
  }
  async arrayBuffer(): Promise<ArrayBuffer> {
    const bytes = await this.consume();
    return bytes.buffer as ArrayBuffer;
  }
  bytes(): Promise<Uint8Array> {
    return this.consume();
  }
  async text(): Promise<string> {
    return new TextDecoder().decode(await this.consume());
  }
  async json(): Promise<unknown> {
    return JSON.parse(await this.text());
  }
  async blob(): Promise<Blob> {
    return new Blob([await this.consume()], { type: this.contentType() });
  }
  async formData(): Promise<FormData> {
    return parseForm(await this.consume(), this.contentType());
  }
  protected contentType(): string {
    return '';
  }
}

export class Request extends Body {
  readonly url: string;
  readonly method: string;
  readonly headers: Headers;
  readonly signal: AbortSignalType;
  readonly redirect: RequestRedirect;
  readonly credentials: RequestCredentials;
  readonly mode = 'cors';
  readonly cache: 'default' | 'no-store' | 'reload';
  readonly referrer: '' | 'about:client';
  readonly referrerPolicy = '';
  readonly integrity = '';
  readonly keepalive = false;
  readonly duplex = 'half';
  readonly destination = '';
  constructor(input: string | URLType | Request, init: RequestInit = {}) {
    super();
    const source = input instanceof Request ? input : null;
    const url = new URL(source?.url ?? String(input), baseUrl);
    if (!['http:', 'https:'].includes(url.protocol))
      throw new TypeError('Fetch supports HTTP and HTTPS URLs');
    if (url.username || url.password)
      throw new TypeError('Credentials in request URLs are not supported');
    this.url = url.href;
    let method = String(init.method ?? source?.method ?? 'GET');
    if (
      !/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/.test(method) ||
      ['CONNECT', 'TRACE', 'TRACK'].includes(method.toUpperCase())
    )
      throw new TypeError('Invalid request method');
    if (
      ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'].includes(method.toUpperCase())
    )
      method = method.toUpperCase();
    this.method = method;
    this.headers = new Headers(init.headers ?? source?.headers);
    this.redirect = init.redirect ?? source?.redirect ?? 'follow';
    this.credentials = init.credentials ?? source?.credentials ?? 'same-origin';
    this.cache = init.cache ?? source?.cache ?? 'default';
    this.referrer = init.referrer ?? source?.referrer ?? 'about:client';
    if (
      !['follow', 'error', 'manual'].includes(this.redirect) ||
      !['omit', 'same-origin', 'include'].includes(this.credentials)
    )
      throw new TypeError('Invalid request options');
    if (init.mode !== undefined && init.mode !== 'cors')
      throw new TypeError('Browser request modes are not supported');
    if (!['default', 'no-store', 'reload'].includes(this.cache))
      throw new TypeError('HTTP caching is not supported');
    if (
      (init.referrer !== undefined && !['', 'about:client'].includes(init.referrer)) ||
      init.referrerPolicy ||
      init.integrity ||
      init.keepalive ||
      (init.priority !== undefined && init.priority !== 'auto') ||
      (init.window !== undefined && init.window !== null) ||
      (init.duplex !== undefined && init.duplex !== 'half')
    )
      throw new TypeError('Unsupported browser request option');
    const signal = init.signal === undefined ? source?.signal : init.signal;
    if (signal != null && !(signal instanceof AbortSignal))
      throw new TypeError('Expected AbortSignal');
    this.signal = signal ? AbortSignal.any([signal]) : new AbortController().signal;
    let record: BodyRecord | null;
    if (init.body != null) record = extractBody(init.body);
    else if (source?.record) {
      if (source.bodyUsed || source.body?.locked)
        throw new TypeError('Body is already used');
      record = source.record;
    } else record = null;
    if (record && ['GET', 'HEAD'].includes(method))
      throw new TypeError('GET and HEAD requests cannot have a body');
    if (record?.type && !this.headers.has('content-type'))
      this.headers.set('content-type', record.type);
    if (record && source?.record === record) {
      // Transfer only after validation; pipeThrough owns and disturbs the source.
      record = {
        ...record,
        stream: record.stream.pipeThrough(
          new TransformStream<Uint8Array, Uint8Array>(),
        ),
      };
    }
    this.setBody(record);
  }
  get [Symbol.toStringTag](): string {
    return 'Request';
  }
  protected override contentType(): string {
    return this.headers.get('content-type') ?? '';
  }
  /** @internal */ get replaySource(): Blob | null {
    return this.record?.source ?? null;
  }
  clone(): Request {
    const body = this.cloneBody();
    const result = new Request(this.url, {
      method: this.method,
      headers: this.headers,
      signal: this.signal,
      redirect: this.redirect,
      credentials: this.credentials,
      cache: this.cache,
      referrer: this.referrer,
    });
    result.setBody(body);
    return result;
  }
}

export class Response extends Body {
  private metadata: ResponseMetadata;
  private responseType: 'default' | 'basic' | 'error' = 'default';
  readonly headers: Headers;
  constructor(body: BodyInit | null = null, init: ResponseInit = {}) {
    super();
    const status = init.status === undefined ? 200 : Number(init.status);
    if (!Number.isInteger(status) || status < 200 || status > 599)
      throw new RangeError('Invalid response status');
    const statusText = String(init.statusText ?? '');
    if (/[^\t\x20-\x7e\x80-\xff]/.test(statusText))
      throw new TypeError('Invalid status text');
    if (body != null && [204, 205, 304].includes(status))
      throw new TypeError('This status cannot have a body');
    this.headers = new Headers(init.headers);
    const record = extractBody(body);
    if (record?.type && !this.headers.has('content-type'))
      this.headers.set('content-type', record.type);
    this.metadata = { status, statusText, headers: [], url: '', redirected: false };
    this.setBody(record);
  }
  get [Symbol.toStringTag](): string {
    return 'Response';
  }
  get status(): number {
    return this.metadata.status;
  }
  get statusText(): string {
    return this.metadata.statusText;
  }
  get ok(): boolean {
    return this.status >= 200 && this.status <= 299;
  }
  get url(): string {
    return this.metadata.url;
  }
  get redirected(): boolean {
    return this.metadata.redirected;
  }
  get type(): 'default' | 'basic' | 'error' {
    return this.responseType;
  }
  protected override contentType(): string {
    return this.headers.get('content-type') ?? '';
  }
  clone(): Response {
    const body = this.cloneBody();
    const result = new Response(null, { headers: this.headers });
    result.metadata = { ...this.metadata };
    result.responseType = this.responseType;
    result.setBody(body);
    if (result.type !== 'default') result.headers.lock();
    return result;
  }
  static error(): Response {
    const result = new Response();
    result.metadata.status = 0;
    result.responseType = 'error';
    result.headers.lock();
    return result;
  }
  static redirect(url: string | URLType, status = 302): Response {
    if (![301, 302, 303, 307, 308].includes(status))
      throw new RangeError('Invalid redirect status');
    const result = new Response(null, {
      status,
      headers: { location: new URL(String(url), baseUrl).href },
    });
    result.headers.lock();
    return result;
  }
  static json(data: unknown, init: ResponseInit = {}): Response {
    const text = JSON.stringify(data);
    if (text === undefined) throw new TypeError('Value is not JSON serializable');
    const headers = new Headers(init.headers);
    if (!headers.has('content-type')) headers.set('content-type', 'application/json');
    return new Response(text, { ...init, headers });
  }
  /** @internal */ static fromNetwork(
    metadata: ResponseMetadata,
    body: ReadableStream<Uint8Array> | null,
  ): Response {
    const result = new Response(null, { headers: metadata.headers });
    result.metadata = metadata;
    result.responseType = 'basic';
    result.setBody(
      body ? { stream: body, source: null, type: result.contentType() } : null,
    );
    result.headers.lock();
    return result;
  }
}
