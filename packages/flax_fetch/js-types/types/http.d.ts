import type { AbortSignal as AbortSignalType, URL as URLType } from '@flax/core/host';
import { Blob, FormData, ReadableStream } from './base.js';
import { Headers, type BodyInit, type BodyRecord, type HeadersInit } from './data.js';
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
export declare function setBaseUrl(value: string | undefined): void;
declare class Body {
    protected record: BodyRecord | null;
    get body(): ReadableStream<Uint8Array> | null;
    get bodyUsed(): boolean;
    protected setBody(record: BodyRecord | null): void;
    protected cloneBody(): BodyRecord | null;
    protected consume(): Promise<Uint8Array>;
    arrayBuffer(): Promise<ArrayBuffer>;
    bytes(): Promise<Uint8Array>;
    text(): Promise<string>;
    json(): Promise<unknown>;
    blob(): Promise<Blob>;
    formData(): Promise<FormData>;
    protected contentType(): string;
}
export declare class Request extends Body {
    readonly url: string;
    readonly method: string;
    readonly headers: Headers;
    readonly signal: AbortSignalType;
    readonly redirect: RequestRedirect;
    readonly credentials: RequestCredentials;
    readonly mode = "cors";
    readonly cache: 'default' | 'no-store' | 'reload';
    readonly referrer: '' | 'about:client';
    readonly referrerPolicy = "";
    readonly integrity = "";
    readonly keepalive = false;
    readonly duplex = "half";
    readonly destination = "";
    constructor(input: string | URLType | Request, init?: RequestInit);
    get [Symbol.toStringTag](): string;
    protected contentType(): string;
    /** @internal */ get replaySource(): Blob | null;
    clone(): Request;
}
export declare class Response extends Body {
    private metadata;
    private responseType;
    readonly headers: Headers;
    constructor(body?: BodyInit | null, init?: ResponseInit);
    get [Symbol.toStringTag](): string;
    get status(): number;
    get statusText(): string;
    get ok(): boolean;
    get url(): string;
    get redirected(): boolean;
    get type(): 'default' | 'basic' | 'error';
    protected contentType(): string;
    clone(): Response;
    static error(): Response;
    static redirect(url: string | URLType, status?: number): Response;
    static json(data: unknown, init?: ResponseInit): Response;
    /** @internal */ static fromNetwork(metadata: ResponseMetadata, body: ReadableStream<Uint8Array> | null): Response;
}
export {};
