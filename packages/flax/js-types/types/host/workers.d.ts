import { Event, EventTarget, MessageEvent } from './events.js';
import type { AddEventListenerOptions, EventInit, EventListener, EventListenerOptions } from './events.js';
import type { OffscreenCanvas } from './canvas.js';
import type { ImageBitmap, ElementImage } from './images.js';
import type { URL } from './url.js';
export interface WorkerOptions {
    type?: 'classic' | 'module';
    name?: string;
    credentials?: 'omit' | 'same-origin' | 'include';
}
export type Transferable = ArrayBuffer | OffscreenCanvas | ImageBitmap | ElementImage | MessagePort;
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
export declare class ErrorEvent extends Event {
    readonly message: string;
    readonly filename: string;
    readonly lineno: number;
    readonly colno: number;
    readonly error: unknown;
    constructor(type: string, init?: ErrorEventInit);
}
export interface PromiseRejectionEventInit extends EventInit {
    promise: Promise<unknown>;
    reason?: unknown;
}
export declare class PromiseRejectionEvent extends Event {
    readonly promise: Promise<unknown>;
    readonly reason: unknown;
    constructor(type: string, init: PromiseRejectionEventInit);
}
export interface Worker extends EventTarget {
    onmessage: ((this: Worker, event: MessageEvent<any>) => unknown) | null;
    onmessageerror: ((this: Worker, event: MessageEvent<any>) => unknown) | null;
    onerror: ((this: Worker, event: ErrorEvent) => unknown) | null;
    postMessage(message: unknown, transferOrOptions?: Transferable[] | StructuredSerializeOptions): void;
    terminate(): void;
}
export interface WorkerConstructor {
    new (scriptURL: string | URL, options?: WorkerOptions): Worker;
}
export interface MessageChannel {
    readonly port1: MessagePort;
    readonly port2: MessagePort;
}
type MessagePortListener = ((this: MessagePort, event: MessageEvent<any>) => void) | {
    handleEvent(event: MessageEvent<any>): void;
};
export interface MessagePort extends EventTarget {
    onmessage: ((this: MessagePort, event: MessageEvent<any>) => unknown) | null;
    onmessageerror: ((this: MessagePort, event: MessageEvent<any>) => unknown) | null;
    addEventListener(type: 'message' | 'messageerror', callback: MessagePortListener | null, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, callback: EventListener | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener(type: 'message' | 'messageerror', callback: MessagePortListener | null, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, callback: EventListener | null, options?: boolean | EventListenerOptions): void;
    postMessage(message: unknown, transferOrOptions?: Transferable[] | StructuredSerializeOptions): void;
    start(): void;
    close(): void;
}
type Call = (operation: string, ...args: unknown[]) => unknown;
export interface WorkerScopeOptions {
    id: number;
    name: string;
    type: 'classic' | 'module';
    canvas?: boolean;
}
export declare function installWorkers(global: typeof globalThis, call: Call, scope?: WorkerScopeOptions): {
    receive: (id: number) => boolean;
    details(error: unknown): string[];
    report(error: unknown): void;
    rejections(): void;
    resourceSettled(id: number, ok: boolean, value: ArrayBuffer | string, url: string, kind: string): void;
    finished(id: number): void;
    error(id: number, message: string, filename?: string, line?: string, column?: string, stack?: string, error?: unknown): any;
    close(): void;
};
export {};
