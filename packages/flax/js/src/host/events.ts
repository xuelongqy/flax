import StandardDOMException from 'core-js-pure/actual/dom-exception/index.js';

export type EventListener =
  ((event: Event) => void) | { handleEvent(event: Event): void };
export interface EventListenerOptions {
  capture?: boolean;
}
export interface AddEventListenerOptions extends EventListenerOptions {
  once?: boolean;
  passive?: boolean;
  signal?: AbortSignal;
}
export interface EventInit {
  bubbles?: boolean;
  cancelable?: boolean;
  composed?: boolean;
}

let report = (error: unknown): void => {
  throw error;
};
export function setEventErrorReporter(callback: (error: unknown) => void): void {
  report = callback;
}

export interface DOMException extends Error {
  readonly code: number;
}
export interface DOMExceptionConstructor {
  new (message?: string, name?: string): DOMException;
  readonly prototype: DOMException;
  readonly INDEX_SIZE_ERR: 1;
  readonly DOMSTRING_SIZE_ERR: 2;
  readonly HIERARCHY_REQUEST_ERR: 3;
  readonly WRONG_DOCUMENT_ERR: 4;
  readonly INVALID_CHARACTER_ERR: 5;
  readonly NO_DATA_ALLOWED_ERR: 6;
  readonly NO_MODIFICATION_ALLOWED_ERR: 7;
  readonly NOT_FOUND_ERR: 8;
  readonly NOT_SUPPORTED_ERR: 9;
  readonly INUSE_ATTRIBUTE_ERR: 10;
  readonly INVALID_STATE_ERR: 11;
  readonly SYNTAX_ERR: 12;
  readonly INVALID_MODIFICATION_ERR: 13;
  readonly NAMESPACE_ERR: 14;
  readonly INVALID_ACCESS_ERR: 15;
  readonly VALIDATION_ERR: 16;
  readonly TYPE_MISMATCH_ERR: 17;
  readonly SECURITY_ERR: 18;
  readonly NETWORK_ERR: 19;
  readonly ABORT_ERR: 20;
  readonly URL_MISMATCH_ERR: 21;
  readonly QUOTA_EXCEEDED_ERR: 22;
  readonly TIMEOUT_ERR: 23;
  readonly INVALID_NODE_TYPE_ERR: 24;
  readonly DATA_CLONE_ERR: 25;
}
export const DOMException: DOMExceptionConstructor = StandardDOMException;

export class Event {
  static readonly NONE = 0;
  static readonly CAPTURING_PHASE = 1;
  static readonly AT_TARGET = 2;
  static readonly BUBBLING_PHASE = 3;
  readonly type: string;
  readonly bubbles: boolean;
  readonly cancelable: boolean;
  readonly composed: boolean;
  readonly isTrusted = false;
  readonly timeStamp = globalThis.performance?.now() ?? Date.now();
  target: EventTarget | null = null;
  currentTarget: EventTarget | null = null;
  eventPhase = 0;
  defaultPrevented = false;
  /** @internal */ dispatching = false;
  /** @internal */ immediate = false;
  /** @internal */ passive = false;
  cancelBubble = false;
  constructor(type: string, options: EventInit = {}) {
    this.type = String(type);
    this.bubbles = Boolean(options.bubbles);
    this.cancelable = Boolean(options.cancelable);
    this.composed = Boolean(options.composed);
  }
  preventDefault(): void {
    if (this.cancelable && !this.passive) this.defaultPrevented = true;
  }
  stopPropagation(): void {
    this.cancelBubble = true;
  }
  stopImmediatePropagation(): void {
    this.immediate = true;
    this.stopPropagation();
  }
  composedPath(): EventTarget[] {
    return this.currentTarget ? [this.currentTarget] : [];
  }
  get returnValue(): boolean {
    return !this.defaultPrevented;
  }
  set returnValue(value: boolean) {
    if (!value) this.preventDefault();
  }
}

export class CustomEvent<T = unknown> extends Event {
  readonly detail: T;
  constructor(type: string, options: EventInit & { detail?: T } = {}) {
    super(type, options);
    this.detail = (options.detail ?? null) as T;
  }
}
export interface MessageEventInit<T = unknown> extends EventInit {
  data?: T;
  origin?: string;
  lastEventId?: string;
  source?: EventTarget | null;
  ports?: readonly unknown[];
}
export class MessageEvent<T = unknown> extends Event {
  readonly data: T;
  readonly origin: string;
  readonly lastEventId: string;
  readonly source: EventTarget | null;
  readonly ports: readonly unknown[];
  constructor(type: string, options: MessageEventInit<T> = {}) {
    super(type, options);
    this.data = (options.data === undefined ? null : options.data) as T;
    this.origin = String(options.origin ?? '');
    this.lastEventId = String(options.lastEventId ?? '');
    this.source = options.source ?? null;
    this.ports = Object.freeze([...(options.ports ?? [])]);
  }
}
interface Listener {
  type: string;
  callback: EventListener;
  capture: boolean;
  once: boolean;
  passive: boolean;
  detach?: () => void;
}
export class EventTarget {
  private readonly listeners: Listener[] = [];
  private receiver: EventTarget = this;
  /** @internal */ static installGlobal(global: typeof globalThis): () => void {
    const target = new EventTarget();
    target.receiver = global as unknown as EventTarget;
    global.addEventListener = target.addEventListener.bind(target);
    global.removeEventListener = target.removeEventListener.bind(target);
    global.dispatchEvent = target.dispatchEvent.bind(target);
    return () => {
      for (const listener of [...target.listeners]) {
        target.removeEventListener(listener.type, listener.callback, listener.capture);
      }
    };
  }
  protected hasListeners(type: string): boolean {
    return this.listeners.some((listener) => listener.type === type);
  }
  protected listenersChanged(_type: string): void {}
  addEventListener(
    type: string,
    callback: EventListener | null,
    options: boolean | AddEventListenerOptions = {},
  ): void {
    if (callback == null) return;
    if (typeof callback !== 'function' && typeof callback !== 'object')
      throw new TypeError('Invalid event listener');
    const settings =
      typeof options === 'boolean' ? { capture: options } : (options ?? {});
    if (settings.signal != null && !(settings.signal instanceof AbortSignal))
      throw new TypeError('Expected AbortSignal');
    const capture = Boolean(settings.capture);
    type = String(type);
    if (
      settings.signal?.aborted ||
      this.listeners.some(
        (l) => l.type === type && l.callback === callback && l.capture === capture,
      )
    )
      return;
    const listener: Listener = {
      type,
      callback,
      capture,
      once: Boolean(settings.once),
      passive: Boolean(settings.passive),
    };
    this.listeners.push(listener);
    this.listenersChanged(type);
    if (settings.signal) {
      const remove = () => this.removeEventListener(type, callback, capture);
      settings.signal.addEventListener('abort', remove, { once: true });
      listener.detach = () => settings.signal!.removeEventListener('abort', remove);
    }
  }
  removeEventListener(
    type: string,
    callback: EventListener | null,
    options: boolean | EventListenerOptions = {},
  ): void {
    const capture = typeof options === 'boolean' ? options : Boolean(options?.capture);
    const index = this.listeners.findIndex(
      (l) =>
        l.type === String(type) && l.callback === callback && l.capture === capture,
    );
    if (index < 0) return;
    const [listener] = this.listeners.splice(index, 1);
    listener?.detach?.();
    this.listenersChanged(listener!.type);
  }
  dispatchEvent(event: Event): boolean {
    if (!(event instanceof Event)) throw new TypeError('Expected Event');
    if (event.dispatching)
      throw new DOMException('Event is already being dispatched', 'InvalidStateError');
    event.dispatching = true;
    event.target = this.receiver;
    event.currentTarget = this.receiver;
    event.eventPhase = Event.AT_TARGET;
    try {
      for (const listener of [...this.listeners]) {
        if (listener.type !== event.type || !this.listeners.includes(listener))
          continue;
        if (listener.once)
          this.removeEventListener(listener.type, listener.callback, listener.capture);
        event.passive = listener.passive;
        try {
          if (typeof listener.callback === 'function')
            listener.callback.call(this.receiver, event);
          else listener.callback.handleEvent(event);
        } catch (error) {
          report(error);
        }
        if (event.immediate) break;
      }
    } finally {
      event.dispatching = false;
      event.currentTarget = null;
      event.eventPhase = 0;
      event.passive = false;
      event.immediate = false;
      event.cancelBubble = false;
    }
    return !event.defaultPrevented;
  }
}

const abortToken = {};
export class AbortSignal extends EventTarget {
  private _aborted = false;
  private _reason: unknown;
  private sources: AbortSignal[] = [];
  private dependents: WeakRef<AbortSignal>[] = [];
  private readonly retainedDependents = new Set<AbortSignal>();
  protected override listenersChanged(type: string): void {
    if (type !== 'abort') return;
    const retain = !this.aborted && this.hasListeners('abort');
    for (const source of this.sources) {
      if (retain) source.retainedDependents.add(this);
      else source.retainedDependents.delete(this);
    }
  }
  private listener: ((event: Event) => void) | null = null;
  /** @internal */ constructor(token: object) {
    super();
    if (token !== abortToken) throw new TypeError('Illegal constructor');
  }
  get aborted(): boolean {
    return this._aborted;
  }
  get reason(): unknown {
    return this._reason;
  }
  throwIfAborted(): void {
    if (this.aborted) throw this.reason;
  }
  get onabort(): ((event: Event) => void) | null {
    return this.listener;
  }
  set onabort(callback: ((event: Event) => void) | null) {
    this.removeEventListener('abort', this.listener);
    this.listener = callback;
    this.addEventListener('abort', callback);
  }
  /** @internal */ abort(
    reason: unknown = new DOMException('The operation was aborted', 'AbortError'),
  ): void {
    if (this._aborted) return;
    // Set every dependent's state before notifying source listeners.
    const signals: AbortSignal[] = [this];
    for (const ref of this.dependents) {
      const signal = ref.deref();
      if (signal && !signal.aborted) signals.push(signal);
    }
    for (const signal of signals) {
      signal._aborted = true;
      signal._reason = reason;
    }
    for (const signal of signals) {
      try {
        signal.dispatchEvent(new Event('abort'));
      } finally {
        for (const source of signal.sources) source.retainedDependents.delete(signal);
        signal.sources = [];
        signal.dependents = [];
        signal.retainedDependents.clear();
      }
    }
  }
  static abort(reason?: unknown): AbortSignal {
    const signal = new AbortSignal(abortToken);
    signal.abort(reason);
    return signal;
  }
  static timeout(milliseconds: number): AbortSignal {
    if (
      !Number.isInteger(milliseconds) ||
      milliseconds < 0 ||
      milliseconds > Number.MAX_SAFE_INTEGER
    )
      throw new RangeError('Invalid timeout');
    const signal = new AbortSignal(abortToken);
    globalThis.setTimeout(
      () => signal.abort(new DOMException('The operation timed out', 'TimeoutError')),
      milliseconds,
    );
    return signal;
  }
  static any(signals: Iterable<AbortSignal>): AbortSignal {
    const sources = [...signals];
    for (const source of sources)
      if (!(source instanceof AbortSignal)) throw new TypeError('Expected AbortSignal');
    const result = new AbortSignal(abortToken);
    const aborted = sources.find((s) => s.aborted);
    if (aborted) {
      result.abort(aborted.reason);
      return result;
    }
    // Sources must not keep every completed Request's following signal alive.
    // Flatten dependency chains so collecting an intermediate signal is harmless.
    result.sources = [
      ...new Set(
        sources.flatMap((source) =>
          source.sources.length ? source.sources : [source],
        ),
      ),
    ];
    for (const source of result.sources) {
      source.dependents = source.dependents.filter((ref) => ref.deref() !== undefined);
      source.dependents.push(new WeakRef(result));
    }
    return result;
  }
}
export class AbortController {
  readonly signal = new AbortSignal(abortToken);
  abort(reason?: unknown): void {
    this.signal.abort(reason);
  }
}
