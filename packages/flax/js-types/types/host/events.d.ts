export type EventListener = ((event: Event) => void) | {
    handleEvent(event: Event): void;
};
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
export declare function setEventErrorReporter(callback: (error: unknown) => void): void;
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
export declare const DOMException: DOMExceptionConstructor;
export declare class Event {
    static readonly NONE = 0;
    static readonly CAPTURING_PHASE = 1;
    static readonly AT_TARGET = 2;
    static readonly BUBBLING_PHASE = 3;
    readonly type: string;
    readonly bubbles: boolean;
    readonly cancelable: boolean;
    readonly composed: boolean;
    readonly isTrusted = false;
    readonly timeStamp: number;
    target: EventTarget | null;
    currentTarget: EventTarget | null;
    eventPhase: number;
    defaultPrevented: boolean;
    /** @internal */ dispatching: boolean;
    /** @internal */ immediate: boolean;
    /** @internal */ passive: boolean;
    cancelBubble: boolean;
    constructor(type: string, options?: EventInit);
    preventDefault(): void;
    stopPropagation(): void;
    stopImmediatePropagation(): void;
    composedPath(): EventTarget[];
    get returnValue(): boolean;
    set returnValue(value: boolean);
}
export declare class CustomEvent<T = unknown> extends Event {
    readonly detail: T;
    constructor(type: string, options?: EventInit & {
        detail?: T;
    });
}
export interface MessageEventInit<T = unknown> extends EventInit {
    data?: T;
    origin?: string;
    lastEventId?: string;
    source?: EventTarget | null;
    ports?: readonly unknown[];
}
export declare class MessageEvent<T = unknown> extends Event {
    readonly data: T;
    readonly origin: string;
    readonly lastEventId: string;
    readonly source: EventTarget | null;
    readonly ports: readonly unknown[];
    constructor(type: string, options?: MessageEventInit<T>);
}
export declare class EventTarget {
    private readonly listeners;
    private receiver;
    /** @internal */ static installGlobal(global: typeof globalThis): () => void;
    protected hasListeners(type: string): boolean;
    protected listenersChanged(_type: string): void;
    addEventListener(type: string, callback: EventListener | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener(type: string, callback: EventListener | null, options?: boolean | EventListenerOptions): void;
    dispatchEvent(event: Event): boolean;
}
export declare class AbortSignal extends EventTarget {
    private _aborted;
    private _reason;
    private sources;
    private dependents;
    private readonly retainedDependents;
    protected listenersChanged(type: string): void;
    private listener;
    /** @internal */ constructor(token: object);
    get aborted(): boolean;
    get reason(): unknown;
    throwIfAborted(): void;
    get onabort(): ((event: Event) => void) | null;
    set onabort(callback: ((event: Event) => void) | null);
    /** @internal */ abort(reason?: unknown): void;
    static abort(reason?: unknown): AbortSignal;
    static timeout(milliseconds: number): AbortSignal;
    static any(signals: Iterable<AbortSignal>): AbortSignal;
}
export declare class AbortController {
    readonly signal: AbortSignal;
    abort(reason?: unknown): void;
}
