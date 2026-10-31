export type * from './common.js';
import type { MessageEvent, Event } from './events.js';
import type { EventTarget } from './events.js';
import type { ErrorEvent, PromiseRejectionEvent, PromiseRejectionEventInit, Transferable, StructuredSerializeOptions } from './workers.js';
export type WorkerNavigator = import('./common.js').Navigator;
export type WorkerLocation = Readonly<Pick<import('./url.js').URL, 'href' | 'origin' | 'protocol' | 'host' | 'hostname' | 'port' | 'pathname' | 'search' | 'hash' | 'toString'>>;
export interface WorkerGlobalScope extends Pick<EventTarget, 'addEventListener' | 'removeEventListener' | 'dispatchEvent'> {
    readonly self: typeof globalThis;
    readonly navigator: WorkerNavigator;
    readonly location: WorkerLocation;
    readonly origin: string;
    importScripts(...urls: string[]): void;
}
export interface DedicatedWorkerGlobalScope extends WorkerGlobalScope {
    readonly name: string;
    postMessage(message: unknown, options?: Transferable[] | StructuredSerializeOptions): void;
    close(): void;
}
interface IllegalConstructor<T> {
    readonly prototype: T;
    [Symbol.hasInstance](value: unknown): value is T;
}
declare global {
    type WorkerGlobalScope = import('./worker.js').WorkerGlobalScope;
    type DedicatedWorkerGlobalScope = import('./worker.js').DedicatedWorkerGlobalScope;
    type WorkerNavigator = import('./worker.js').WorkerNavigator;
    type WorkerLocation = import('./worker.js').WorkerLocation;
    var WorkerGlobalScope: IllegalConstructor<WorkerGlobalScope>;
    var DedicatedWorkerGlobalScope: IllegalConstructor<DedicatedWorkerGlobalScope>;
    var WorkerNavigator: IllegalConstructor<WorkerNavigator>;
    var WorkerLocation: IllegalConstructor<WorkerLocation>;
    var origin: string;
    type FileReaderSync = import('./file-reader.js').FileReaderSync;
    var FileReaderSync: {
        new (): FileReaderSync;
        readonly prototype: FileReaderSync;
    };
    var name: string;
    var onmessage: ((this: typeof globalThis, event: MessageEvent<any>) => unknown) | null;
    var onmessageerror: ((this: typeof globalThis, event: MessageEvent<any>) => unknown) | null;
    var PromiseRejectionEvent: {
        new (type: string, init: PromiseRejectionEventInit): PromiseRejectionEvent;
    };
    var onunhandledrejection: ((event: PromiseRejectionEvent) => unknown) | null;
    var onrejectionhandled: ((event: PromiseRejectionEvent) => unknown) | null;
    var onerror: ((this: typeof globalThis, message: string, filename: string, lineno: number, colno: number, error: unknown) => boolean | void) | null;
    function postMessage(message: unknown, transferOrOptions?: Transferable[] | StructuredSerializeOptions): void;
    function close(): void;
    function importScripts(...urls: string[]): void;
    interface FlaxGlobalEventMap {
        message: MessageEvent<any>;
        messageerror: MessageEvent<any>;
        error: ErrorEvent;
        unhandledrejection: PromiseRejectionEvent;
        rejectionhandled: PromiseRejectionEvent;
    }
}
export type { Event, MessageEvent, ErrorEvent, PromiseRejectionEvent, PromiseRejectionEventInit, };
