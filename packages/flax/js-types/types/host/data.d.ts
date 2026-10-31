import { ReadableStream } from 'web-streams-polyfill';
export type BlobPart = string | Blob | ArrayBuffer | ArrayBufferView;
export interface BlobPropertyBag {
    type?: string;
    endings?: 'transparent' | 'native';
}
export interface FilePropertyBag extends BlobPropertyBag {
    lastModified?: number;
}
export declare let blobParts: (value: object) => readonly Uint8Array[] | undefined;
export declare let blobType: (value: object) => string | undefined;
export declare let fileMetadata: (value: object) => readonly [string, number] | undefined;
export declare let restoreBlob: (parts: Uint8Array[], type: string, name?: string, lastModified?: number) => Blob;
export declare function blobBuffer(value: object): ArrayBuffer;
export declare class Blob {
    #private;
    readonly size: number;
    get type(): string;
    constructor(parts?: Iterable<BlobPart>, options?: BlobPropertyBag);
    get [Symbol.toStringTag](): string;
    slice(start?: number, end?: number, type?: string): Blob;
    arrayBuffer(): Promise<ArrayBuffer>;
    bytes(): Promise<Uint8Array>;
    text(): Promise<string>;
    stream(): ReadableStream<Uint8Array>;
}
export declare class File extends Blob {
    #private;
    get name(): string;
    get lastModified(): number;
    readonly webkitRelativePath = "";
    constructor(parts: Iterable<BlobPart>, name: string, options?: FilePropertyBag);
    get [Symbol.toStringTag](): string;
}
export type FormDataEntryValue = string | File;
export declare class FormData {
    #private;
    get [Symbol.toStringTag](): string;
    append(name: string, value: string | Blob, filename?: string): void;
    set(name: string, value: string | Blob, filename?: string): void;
    get(name: string): FormDataEntryValue | null;
    getAll(name: string): FormDataEntryValue[];
    has(name: string): boolean;
    delete(name: string): void;
    entries(): IterableIterator<[string, FormDataEntryValue]>;
    keys(): IterableIterator<string>;
    values(): IterableIterator<FormDataEntryValue>;
    [Symbol.iterator](): IterableIterator<[string, FormDataEntryValue]>;
    forEach(callback: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: unknown): void;
}
