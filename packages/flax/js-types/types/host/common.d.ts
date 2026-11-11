export interface Navigator {
    readonly userAgent: string;
    readonly platform: string;
    readonly hardwareConcurrency: number;
}
export type { OffscreenCanvas, OffscreenCanvasConstructor } from './canvas.js';
export type { CanvasContextMap, CanvasContextOptionsMap } from './canvas-contexts.js';
export type { HTMLCanvasElement } from './canvas-dom.js';
export type { HTMLImageElement, ImageData, ImageBitmap, ElementImage, ImageDataSettings, ImageBitmapOptions, } from './images.js';
export type * from './wasm.js';
export type { Crypto, CryptoConstructor } from './crypto.js';
export type { Performance, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceMarkOptions, PerformanceMeasureOptions, PerformanceObserver, PerformanceObserverInit, PerformanceObserverEntryList, PerformanceObserverCallback, PerformanceObserverConstructor, PerformanceMarkConstructor, } from './performance.js';
import type * as Timing from './performance.js';
import type * as Random from './crypto.js';
import type * as Images from './images.js';
declare global {
    var ImageData: typeof Images.ImageData;
    type ImageData = Images.ImageData;
    var ImageBitmap: typeof Images.ImageBitmap;
    type ImageBitmap = Images.ImageBitmap;
    var ElementImage: {
        readonly prototype: ElementImage;
        [Symbol.hasInstance](value: unknown): value is ElementImage;
    };
    type ElementImage = Images.ElementImage;
    function createImageBitmap(source: ImageBitmap | ImageData | OffscreenCanvas | {
        arrayBuffer(): Promise<ArrayBuffer>;
    }, ...args: [Images.ImageBitmapOptions?] | [number, number, number, number, Images.ImageBitmapOptions?]): Promise<ImageBitmap>;
    type OffscreenCanvas = import('./canvas.js').OffscreenCanvas;
    function structuredClone<T>(value: T, options?: import('./workers.js').StructuredSerializeOptions): T;
    var location: Readonly<Pick<URL, 'href' | 'origin' | 'protocol' | 'host' | 'hostname' | 'port' | 'pathname' | 'search' | 'hash' | 'toString'>>;
    type Crypto = Random.Crypto;
    var Crypto: Random.CryptoConstructor;
    var crypto: Crypto;
    type Performance = Timing.Performance;
    type PerformanceEntry = Timing.PerformanceEntry;
    type PerformanceEntryList = PerformanceEntry[];
    type PerformanceMark = Timing.PerformanceMark;
    type PerformanceMeasure = Timing.PerformanceMeasure;
    type PerformanceMarkOptions = Timing.PerformanceMarkOptions;
    type PerformanceMeasureOptions = Timing.PerformanceMeasureOptions;
    type PerformanceObserver = Timing.PerformanceObserver;
    type PerformanceObserverInit = Timing.PerformanceObserverInit;
    type PerformanceObserverEntryList = Timing.PerformanceObserverEntryList;
    type PerformanceObserverCallback = Timing.PerformanceObserverCallback;
    var Performance: {
        readonly prototype: Performance;
    };
    var PerformanceEntry: {
        readonly prototype: PerformanceEntry;
    };
    var PerformanceMeasure: {
        readonly prototype: PerformanceMeasure;
    };
    var PerformanceObserverEntryList: {
        readonly prototype: PerformanceObserverEntryList;
    };
    var PerformanceMark: Timing.PerformanceMarkConstructor;
    var PerformanceObserver: Timing.PerformanceObserverConstructor;
}
export type { FileReader, FileReaderConstructor } from './file-reader.js';
import type { FileReader as HostFileReader, FileReaderConstructor } from './file-reader.js';
declare global {
    type FileReader = HostFileReader;
    var FileReader: FileReaderConstructor;
}
import type { AbortController as HostAbortController, AbortSignal as HostAbortSignal, Event as HostEvent, EventTarget as HostEventTarget, CustomEvent as HostCustomEvent, ProgressEvent as HostProgressEvent, MessageEvent as HostMessageEvent, DOMException as HostDOMException } from './events.js';
export type { AbortController, AbortSignal, Event, EventTarget, EventInit, EventListener, EventListenerOptions, AddEventListenerOptions, CustomEvent, ProgressEvent, ProgressEventInit, MessageEvent, MessageEventInit, DOMException, } from './events.js';
import type { URLConstructor, URLSearchParamsConstructor } from './url.js';
export type { URL, URLConstructor, URLSearchParams, URLSearchParamsConstructor, } from './url.js';
export interface TextEncoder {
    readonly encoding: 'utf-8';
    encode(input?: string): Uint8Array;
    encodeInto(input: string, destination: Uint8Array): {
        read: number;
        written: number;
    };
}
export interface TextDecoder {
    readonly encoding: string;
    readonly fatal: boolean;
    readonly ignoreBOM: boolean;
    decode(input?: ArrayBuffer | ArrayBufferView, options?: {
        stream?: boolean;
    }): string;
}
export interface Console {
    log(...data: unknown[]): void;
    info(...data: unknown[]): void;
    debug(...data: unknown[]): void;
    warn(...data: unknown[]): void;
    error(...data: unknown[]): void;
    assert(condition?: unknown, ...data: unknown[]): void;
    trace(...data: unknown[]): void;
    dir(item?: unknown): void;
    table(data?: unknown): void;
    group(...data: unknown[]): void;
    groupCollapsed(...data: unknown[]): void;
    groupEnd(): void;
    count(label?: string): void;
    countReset(label?: string): void;
    time(label?: string): void;
    timeLog(label?: string, ...data: unknown[]): void;
    timeEnd(label?: string): void;
    clear(): void;
}
declare global {
    var self: typeof globalThis;
    var navigator: Navigator;
    interface FlaxGlobalEventMap {
    }
    function addEventListener<K extends keyof FlaxGlobalEventMap>(type: K, callback: ((this: typeof globalThis, event: FlaxGlobalEventMap[K]) => void) | {
        handleEvent(event: FlaxGlobalEventMap[K]): void;
    } | null, options?: boolean | import('./events.js').AddEventListenerOptions): void;
    function addEventListener(type: string, callback: ((this: typeof globalThis, event: HostEvent) => void) | {
        handleEvent(event: HostEvent): void;
    } | null, options?: boolean | import('./events.js').AddEventListenerOptions): void;
    function removeEventListener<K extends keyof FlaxGlobalEventMap>(type: K, callback: ((this: typeof globalThis, event: FlaxGlobalEventMap[K]) => void) | {
        handleEvent(event: FlaxGlobalEventMap[K]): void;
    } | null, options?: boolean | import('./events.js').EventListenerOptions): void;
    function removeEventListener(type: string, callback: ((this: typeof globalThis, event: HostEvent) => void) | {
        handleEvent(event: HostEvent): void;
    } | null, options?: boolean | import('./events.js').EventListenerOptions): void;
    function dispatchEvent(event: HostEvent): boolean;
    type URL = import('./common.js').URL;
    type URLSearchParams = import('./common.js').URLSearchParams;
    type TextEncoder = import('./common.js').TextEncoder;
    type TextDecoder = import('./common.js').TextDecoder;
    type Console = import('./common.js').Console;
    type Event = HostEvent;
    type EventTarget = HostEventTarget;
    type CustomEvent<T = unknown> = HostCustomEvent<T>;
    type ProgressEvent = HostProgressEvent;
    type ProgressEventInit = import('./events.js').ProgressEventInit;
    type MessageEvent<T = unknown> = HostMessageEvent<T>;
    type DOMException = HostDOMException;
    type AbortController = HostAbortController;
    type AbortSignal = HostAbortSignal;
    var console: Console;
    var performance: Performance;
    function setTimeout(callback: (...args: any[]) => void, milliseconds?: number, ...args: any[]): number;
    function setInterval(callback: (...args: any[]) => void, milliseconds?: number, ...args: any[]): number;
    function clearTimeout(id?: number): void;
    function clearInterval(id?: number): void;
    function queueMicrotask(callback: () => void): void;
    function atob(value: string): string;
    function btoa(value: string): string;
    var URL: URLConstructor;
    var URLSearchParams: URLSearchParamsConstructor;
    var TextEncoder: {
        new (): TextEncoder;
    };
    var TextDecoder: {
        new (label?: string, options?: {
            fatal?: boolean;
            ignoreBOM?: boolean;
        }): TextDecoder;
    };
    var Event: typeof HostEvent;
    var EventTarget: typeof HostEventTarget;
    var CustomEvent: typeof HostCustomEvent;
    var ProgressEvent: typeof HostProgressEvent;
    var MessageEvent: typeof HostMessageEvent;
    var DOMException: typeof HostDOMException;
    var AbortController: typeof HostAbortController;
    var AbortSignal: typeof HostAbortSignal;
}
import type * as Data from './data.js';
import type * as Streams from 'web-streams-polyfill';
export type * from './data.js';
export type * from 'web-streams-polyfill';
export type TextEncoderStream = InstanceType<typeof globalThis.TextEncoderStream>;
export type TextDecoderStream = InstanceType<typeof globalThis.TextDecoderStream>;
declare global {
    var Blob: typeof Data.Blob;
    var File: typeof Data.File;
    var FormData: typeof Data.FormData;
    type Blob = Data.Blob;
    type File = Data.File;
    type FormData = Data.FormData;
    var ReadableStream: typeof Streams.ReadableStream;
    var WritableStream: typeof Streams.WritableStream;
    var TransformStream: typeof Streams.TransformStream;
    var ReadableStreamDefaultReader: typeof Streams.ReadableStreamDefaultReader;
    var ReadableStreamBYOBReader: typeof Streams.ReadableStreamBYOBReader;
    var ReadableStreamDefaultController: typeof Streams.ReadableStreamDefaultController;
    var ReadableByteStreamController: typeof Streams.ReadableByteStreamController;
    var ReadableStreamBYOBRequest: typeof Streams.ReadableStreamBYOBRequest;
    var WritableStreamDefaultWriter: typeof Streams.WritableStreamDefaultWriter;
    var WritableStreamDefaultController: typeof Streams.WritableStreamDefaultController;
    var TransformStreamDefaultController: typeof Streams.TransformStreamDefaultController;
    var ByteLengthQueuingStrategy: typeof Streams.ByteLengthQueuingStrategy;
    var CountQueuingStrategy: typeof Streams.CountQueuingStrategy;
    type ReadableStream<R = unknown> = Streams.ReadableStream<R>;
    type WritableStream<W = unknown> = Streams.WritableStream<W>;
    type TransformStream<I = unknown, O = unknown> = Streams.TransformStream<I, O>;
    type ReadableStreamDefaultReader<R = unknown> = Streams.ReadableStreamDefaultReader<R>;
    type ReadableStreamBYOBReader = Streams.ReadableStreamBYOBReader;
    type ReadableStreamDefaultController<R = unknown> = Streams.ReadableStreamDefaultController<R>;
    type ReadableByteStreamController = Streams.ReadableByteStreamController;
    type ReadableStreamBYOBRequest = Streams.ReadableStreamBYOBRequest;
    type WritableStreamDefaultWriter<W = unknown> = Streams.WritableStreamDefaultWriter<W>;
    type WritableStreamDefaultController = Streams.WritableStreamDefaultController;
    type TransformStreamDefaultController<O = unknown> = Streams.TransformStreamDefaultController<O>;
    type ByteLengthQueuingStrategy = Streams.ByteLengthQueuingStrategy;
    type CountQueuingStrategy = Streams.CountQueuingStrategy;
    type TextEncoderStream = InstanceType<typeof TextEncoderStream>;
    type TextDecoderStream = InstanceType<typeof TextDecoderStream>;
    var TextEncoderStream: {
        new (): {
            readonly encoding: 'utf-8';
            readonly readable: Streams.ReadableStream<Uint8Array>;
            readonly writable: Streams.WritableStream<string>;
        };
    };
    var TextDecoderStream: {
        new (label?: string, options?: {
            fatal?: boolean;
            ignoreBOM?: boolean;
        }): {
            readonly encoding: string;
            readonly fatal: boolean;
            readonly ignoreBOM: boolean;
            readonly readable: Streams.ReadableStream<string>;
            readonly writable: Streams.WritableStream<ArrayBuffer | ArrayBufferView>;
        };
    };
}
import type * as FetchData from './fetch/data.js';
import type * as FetchHttp from './fetch/http.js';
export type { Headers, HeadersInit, BodyInit } from './fetch/data.js';
export type { Request, Response, RequestInit, RequestRedirect, RequestCredentials, ResponseInit, } from './fetch/http.js';
declare global {
    var Headers: typeof FetchData.Headers;
    var Request: typeof FetchHttp.Request;
    var Response: typeof FetchHttp.Response;
    type Headers = FetchData.Headers;
    type Request = FetchHttp.Request;
    type Response = FetchHttp.Response;
    type RequestInit = FetchHttp.RequestInit;
    type ResponseInit = FetchHttp.ResponseInit;
    function fetch(input: string | URL | FetchHttp.Request, init?: FetchHttp.RequestInit): Promise<FetchHttp.Response>;
}
export type { MessageChannel, MessagePort, Worker, WorkerConstructor, WorkerOptions, Transferable, FlaxTransferableMap, StructuredSerializeOptions, ErrorEvent, ErrorEventInit, } from './workers.js';
declare global {
    type MessageChannel = import('./workers.js').MessageChannel;
    var MessageChannel: {
        new (): MessageChannel;
        readonly prototype: MessageChannel;
    };
    type MessagePort = import('./workers.js').MessagePort;
    var MessagePort: {
        readonly prototype: MessagePort;
        [Symbol.hasInstance](value: unknown): value is MessagePort;
    };
    type Worker = import('./workers.js').Worker;
    type WorkerOptions = import('./workers.js').WorkerOptions;
    type Transferable = import('./workers.js').Transferable;
    type ErrorEvent = import('./workers.js').ErrorEvent;
    var Worker: import('./workers.js').WorkerConstructor;
    var ErrorEvent: {
        new (type: string, init?: import('./workers.js').ErrorEventInit): import('./workers.js').ErrorEvent;
    };
}
