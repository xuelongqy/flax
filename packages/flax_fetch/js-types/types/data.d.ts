import type { URLSearchParams as URLSearchParamsType } from '@flax/core/host';
import { Blob, FormData, ReadableStream } from './base.js';
export type HeadersInit = Headers | Iterable<readonly [string, string]> | Record<string, string>;
export declare class Headers {
    #private;
    constructor(init?: HeadersInit);
    get [Symbol.toStringTag](): string;
    /** @internal */ lock(): void;
    append(name: string, value: string): void;
    set(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string | null;
    has(name: string): boolean;
    getSetCookie(): string[];
    entries(): IterableIterator<[string, string]>;
    keys(): IterableIterator<string>;
    values(): IterableIterator<string>;
    [Symbol.iterator](): IterableIterator<[string, string]>;
    forEach(callback: (value: string, key: string, parent: Headers) => void, thisArg?: unknown): void;
}
export type BodyInit = string | URLSearchParamsType | Blob | FormData | ArrayBuffer | ArrayBufferView | ReadableStream<Uint8Array>;
export interface BodyRecord {
    stream: ReadableStream<Uint8Array>;
    source: Blob | null;
    type: string;
}
export declare function extractBody(value: BodyInit | null | undefined): BodyRecord | null;
export declare function readAll(stream: ReadableStream<Uint8Array> | null): Promise<Uint8Array>;
export declare function parseForm(bytes: Uint8Array, contentType: string): FormData;
