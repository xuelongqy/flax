import { Blob } from './data.js';
import type { DOMException, EventTarget, ProgressEvent } from './events.js';
type Handler = ((this: FileReader, event: ProgressEvent) => unknown) | null;
export interface FileReaderSync {
    readAsArrayBuffer(blob: Blob): ArrayBuffer;
    readAsText(blob: Blob, encoding?: string): string;
    readAsDataURL(blob: Blob): string;
    readAsBinaryString(blob: Blob): string;
}
export declare function installFileReaderSync(global: typeof globalThis): void;
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
export declare function installFileReader(global: typeof globalThis): {
    close(): void;
};
export {};
