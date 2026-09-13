import type {
  CloseEvent as CloseEventContract,
  CloseEventInit,
  WebSocketOptions,
} from '../types.js';
// Base capabilities are installed once per session, before this plugin.
const {
  Event,
  EventTarget,
  MessageEvent,
  Blob,
  URL,
  DOMException,
  TextEncoder,
  AbortSignal,
} = globalThis;
type Call = (operation: string, ...args: unknown[]) => unknown;
let call: Call;
let baseUrl: string | undefined;
let closed = false;
let nextId = 1;
const sockets = new Map<number, WebSocket>();
const encoder = new TextEncoder();
const maxQueueBytes = 64 * 1024 * 1024;
const maxQueueMessages = 1024;

export class CloseEvent extends Event implements CloseEventContract {
  readonly wasClean: boolean;
  readonly code: number;
  readonly reason: string;
  constructor(type: string, options: CloseEventInit = {}) {
    super(type, options);
    this.wasClean = Boolean(options.wasClean);
    this.code = Number(options.code ?? 0) & 0xffff;
    this.reason = String(options.reason ?? '');
  }
}
function text(value: unknown): string {
  if (typeof value === 'symbol') throw new TypeError('Cannot convert Symbol to string');
  return String(value);
}
function syntax(message: string): never {
  throw new DOMException(message, 'SyntaxError');
}
const token = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
function finiteOption(
  value: number | undefined,
  fallback: number,
  name: string,
  minimum: number,
): number {
  if (value === undefined) return fallback;
  if (!Number.isSafeInteger(value) || value < minimum)
    throw new TypeError(`Invalid ${name}`);
  return value;
}
type Handler = ((event: any) => unknown) | null;
type Outgoing = string | Uint8Array | Blob;
export class WebSocket extends EventTarget {
  static readonly CONNECTING = 0;
  static readonly OPEN = 1;
  static readonly CLOSING = 2;
  static readonly CLOSED = 3;
  get CONNECTING(): 0 {
    return 0;
  }
  get OPEN(): 1 {
    return 1;
  }
  get CLOSING(): 2 {
    return 2;
  }
  get CLOSED(): 3 {
    return 3;
  }
  private readonly id: number;
  private readonly address: string;
  private readonly origin: string;
  private state = 0;
  private selectedProtocol = '';
  private binary: 'blob' | 'arraybuffer' = 'blob';
  private signal: AbortSignal | undefined;
  private readonly onAbort = () => {
    this.state = 2;
    call('abort', this.id);
  };
  private readonly handlers = new Map<
    string,
    { value: Handler; listener: (event: Event) => void }
  >();
  private queue: { value: Outgoing; size: number }[] = [];
  private queuedBytes = 0;
  private sending = false;
  private acknowledged: (() => void) | undefined;
  private closeArgs: [number | null, string] | undefined;

  constructor(url: string | URL, options?: WebSocketOptions);
  constructor(
    url: string | URL,
    protocols?: string | Iterable<string>,
    options?: WebSocketOptions,
  );
  constructor(
    url: string | URL,
    protocolsOrOptions: string | Iterable<string> | WebSocketOptions = [],
    options: WebSocketOptions = {},
  ) {
    super();
    if (closed) throw new Error('FlaxSessionClosed');
    if (arguments.length === 0) throw new TypeError('WebSocket requires a URL');
    let protocols: string[];
    if (
      protocolsOrOptions !== null &&
      typeof protocolsOrOptions === 'object' &&
      !(Symbol.iterator in protocolsOrOptions)
    ) {
      if (arguments.length > 2) throw new TypeError('Options supplied twice');
      options = protocolsOrOptions as WebSocketOptions;
      protocols = [];
    } else
      protocols = (
        protocolsOrOptions !== null && typeof protocolsOrOptions === 'object'
          ? Array.from(protocolsOrOptions as Iterable<unknown>)
          : [protocolsOrOptions]
      ).map(text);
    if (options === null || typeof options !== 'object')
      throw new TypeError('Invalid WebSocket options');
    for (const key of Object.keys(options)) {
      if (
        ![
          'headers',
          'handshakeTimeout',
          'signal',
          'pingInterval',
          'maxPayload',
        ].includes(key)
      )
        throw new TypeError(`Unsupported WebSocket option: ${key}`);
    }
    const address = text(url);
    let parsed: URL;
    try {
      parsed = new URL(address, baseUrl);
    } catch {
      syntax('Invalid WebSocket URL');
    }
    if (parsed.protocol === 'http:') parsed.protocol = 'ws:';
    if (parsed.protocol === 'https:') parsed.protocol = 'wss:';
    if (
      !['ws:', 'wss:'].includes(parsed.protocol) ||
      parsed.href.includes('#') ||
      parsed.username ||
      parsed.password
    )
      syntax('Invalid WebSocket URL');
    if (
      new Set(protocols).size !== protocols.length ||
      protocols.some((p) => !token.test(p))
    )
      syntax('Invalid WebSocket subprotocol');
    const headers: Record<string, string[]> = Object.create(null);
    if (
      options.headers !== undefined &&
      (options.headers === null ||
        typeof options.headers !== 'object' ||
        Array.isArray(options.headers))
    )
      throw new TypeError('Invalid headers');
    for (const [name, value] of Object.entries(options.headers ?? {})) {
      if (
        !token.test(name) ||
        /^(sec-websocket-.*|connection|upgrade|host|content-length|transfer-encoding)$/i.test(
          name,
        )
      )
        throw new TypeError(`Reserved or invalid handshake header: ${name}`);
      const values = Array.isArray(value) ? value : [value];
      if (
        values.some((v) => typeof v !== 'string' || /[^\t\x20-\x7e\x80-\xff]/.test(v))
      )
        throw new TypeError(`Invalid handshake header: ${name}`);
      headers[name] = [...values] as string[];
    }
    const settings = {
      url: parsed.href,
      protocols,
      headers,
      handshakeTimeout: finiteOption(
        options.handshakeTimeout,
        30000,
        'handshakeTimeout',
        0,
      ),
      pingInterval:
        options.pingInterval == null
          ? null
          : finiteOption(options.pingInterval, 0, 'pingInterval', 1),
      maxPayload: finiteOption(options.maxPayload, 16 * 1024 * 1024, 'maxPayload', 1),
    };
    if (options.signal !== undefined && !(options.signal instanceof AbortSignal))
      throw new TypeError('Expected AbortSignal');
    this.address = parsed.href;
    // MessageEvent.origin uses the corresponding HTTP origin.
    parsed.protocol = parsed.protocol === 'ws:' ? 'http:' : 'https:';
    this.origin = parsed.origin;
    this.id = nextId++;
    this.signal = options.signal;
    sockets.set(this.id, this);
    try {
      call('open', this.id, JSON.stringify(settings));
      if (this.signal?.aborted) this.onAbort();
      else this.signal?.addEventListener('abort', this.onAbort, { once: true });
    } catch (error) {
      this.release();
      throw error;
    }
  }
  get url(): string {
    return this.address;
  }
  get readyState(): number {
    return this.state;
  }
  get protocol(): string {
    return this.selectedProtocol;
  }
  get extensions(): string {
    return '';
  }
  get binaryType(): 'blob' | 'arraybuffer' {
    return this.binary;
  }
  set binaryType(value: string) {
    if (value === 'blob' || value === 'arraybuffer') this.binary = value;
  }
  get onopen(): ((event: Event) => unknown) | null {
    return this.handler('open');
  }
  set onopen(value: ((event: Event) => unknown) | null) {
    this.setHandler('open', value);
  }
  get onmessage(): ((event: MessageEvent) => unknown) | null {
    return this.handler('message');
  }
  set onmessage(value: ((event: MessageEvent) => unknown) | null) {
    this.setHandler('message', value);
  }
  get onerror(): ((event: Event) => unknown) | null {
    return this.handler('error');
  }
  set onerror(value: ((event: Event) => unknown) | null) {
    this.setHandler('error', value);
  }
  get onclose(): ((event: CloseEvent) => unknown) | null {
    return this.handler('close');
  }
  set onclose(value: ((event: CloseEvent) => unknown) | null) {
    this.setHandler('close', value);
  }
  private handler(type: string): Handler {
    return this.handlers.get(type)?.value ?? null;
  }
  private setHandler(type: string, value: Handler): void {
    const existing = this.handlers.get(type);
    if (typeof value !== 'function') {
      if (existing) this.removeEventListener(type, existing.listener);
      this.handlers.delete(type);
    } else if (existing) existing.value = value;
    else {
      const entry = {
        value,
        listener: (event: Event) => entry.value.call(this, event),
      };
      this.handlers.set(type, entry);
      this.addEventListener(type, entry.listener);
    }
  }
  send(data: string | Blob | ArrayBuffer | ArrayBufferView): void {
    if (arguments.length === 0) throw new TypeError('send requires data');
    if (this.state === 0)
      throw new DOMException('WebSocket is connecting', 'InvalidStateError');
    let value: Outgoing, size: number;
    if (data instanceof Blob) {
      value = data;
      size = data.size;
    } else if (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) {
      value =
        data instanceof ArrayBuffer
          ? new Uint8Array(data).slice()
          : new Uint8Array(data.buffer, data.byteOffset, data.byteLength).slice();
      size = value.byteLength;
    } else {
      value = text(data);
      size = encoder.encode(value).length;
    }
    if (this.state !== 1) return;
    if (
      this.queue.length >= maxQueueMessages ||
      this.queuedBytes + size > maxQueueBytes
    ) {
      this.state = 2;
      call('abort', this.id);
      return;
    }
    this.queue.push({ value, size });
    this.queuedBytes += size;
    void this.drain();
  }
  private async drain(): Promise<void> {
    if (this.sending) return;
    this.sending = true;
    try {
      while (this.queue.length && this.state !== 3) {
        const entry = this.queue[0]!;
        const data =
          entry.value instanceof Blob ? await entry.value.arrayBuffer() : entry.value;
        if (this.state === 3) break;
        const written = new Promise<void>((resolve) => {
          this.acknowledged = resolve;
        });
        call('send', this.id, data);
        await written;
        if (this.state === 3) break;
        this.queue.shift();
        this.queuedBytes -= entry.size;
      }
      if (this.state !== 3 && this.closeArgs) call('close', this.id, ...this.closeArgs);
    } catch {
      if (this.state !== 3) {
        this.state = 2;
        call('abort', this.id);
      }
    } finally {
      this.sending = false;
    }
  }
  close(code?: number, reason = ''): void {
    const numeric = Math.min(65535, Math.max(0, Number(code) || 0));
    const rounded = Math.round(numeric);
    const value =
      code === undefined
        ? null
        : numeric % 1 === 0.5 && rounded % 2
          ? rounded - 1
          : rounded;
    if (value !== null && value !== 1000 && (value < 3000 || value > 4999))
      throw new DOMException('Invalid close code', 'InvalidAccessError');
    reason = text(reason);
    if (encoder.encode(reason).length > 123)
      syntax('Close reason exceeds 123 UTF-8 bytes');
    if (this.state >= 2) return;
    const previous = this.state;
    this.state = 2;
    if (previous === 0) {
      call('abort', this.id);
      return;
    }
    this.closeArgs = [value ?? (reason ? 1000 : null), reason];
    call('beginClose', this.id);
    void this.drain();
  }
  /** @internal */ receive(kind: string, value: unknown): void {
    if (this.state === 3) return;
    if (kind === 'open') {
      if (this.state !== 0) return;
      this.selectedProtocol = value as string;
      this.state = 1;
      this.dispatchEvent(new Event('open'));
    } else if (kind === 'closing') {
      this.state = 2;
    } else if (kind === 'message') {
      if (this.state !== 1) return;
      const data =
        typeof value === 'string'
          ? value
          : this.binary === 'blob'
            ? new Blob([value as ArrayBuffer])
            : value;
      this.dispatchEvent(new MessageEvent('message', { data, origin: this.origin }));
    } else if (kind === 'written') {
      this.acknowledged?.();
      this.acknowledged = undefined;
    } else if (kind === 'close') {
      const result = JSON.parse(value as string) as CloseEventInit & { error: boolean };
      this.state = 3;
      this.release();
      if (result.error) this.dispatchEvent(new Event('error'));
      this.dispatchEvent(new CloseEvent('close', result));
    }
  }
  private release(): void {
    sockets.delete(this.id);
    this.signal?.removeEventListener('abort', this.onAbort);
    this.signal = undefined;
    this.queue = [];
    this.queuedBytes = 0;
    this.acknowledged?.();
    this.acknowledged = undefined;
  }
}
export function install(
  global: typeof globalThis,
  host: Call,
): {
  event(id: number, kind: string, value: unknown): void;
  close(): void;
} {
  for (const [name, value] of Object.entries({
    CONNECTING: 0,
    OPEN: 1,
    CLOSING: 2,
    CLOSED: 3,
  })) {
    for (const target of [WebSocket, WebSocket.prototype])
      Object.defineProperty(target, name, {
        value,
        writable: false,
        enumerable: true,
        configurable: false,
      });
  }
  call = host;
  baseUrl = call('baseUrl') as string | undefined;
  Object.defineProperty(global, 'WebSocket', {
    value: WebSocket,
    writable: true,
    configurable: true,
  });
  Object.defineProperty(global, 'CloseEvent', {
    value: CloseEvent,
    writable: true,
    configurable: true,
  });
  return {
    event(id, kind, value) {
      sockets.get(id)?.receive(kind, value);
    },
    close() {
      closed = true;
      for (const socket of [...sockets.values()])
        socket.receive(
          'close',
          JSON.stringify({ code: 1006, wasClean: false, error: true }),
        );
    },
  };
}
