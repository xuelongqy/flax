import type { EventTarget, Event, DOMExceptionConstructor } from './events.js';
import type { Blob } from './data.js';
import { type ImageBitmap, type PixelImage } from './images.js';
import type { CanvasContextMap, CanvasContextOptionsMap } from './canvas-contexts.js';
export type { CanvasContextMap, CanvasContextOptionsMap } from './canvas-contexts.js';
export interface ImageBitmapRenderingContext {
    readonly canvas: OffscreenCanvas;
    transferFromImageBitmap(bitmap: ImageBitmap | null): void;
}
export interface CanvasImageBitmap {
    readonly width: number;
    readonly height: number;
    close(): void;
}
export type CanvasBlob = Blob;
export interface OffscreenCanvas extends EventTarget {
    width: number;
    height: number;
    getContext<K extends keyof CanvasContextMap>(type: K, options?: K extends keyof CanvasContextOptionsMap ? CanvasContextOptionsMap[K] : unknown): CanvasContextMap[K] | null;
    getContext(type: string, options?: unknown): object | null;
    convertToBlob(options?: {
        type?: string;
        quality?: number;
    }): Promise<CanvasBlob>;
    transferToImageBitmap(): CanvasImageBitmap;
}
export interface OffscreenCanvasConstructor {
    new (width: number, height: number): OffscreenCanvas;
}
/** @internal A context provider owns its renderer; Core owns the canvas. */
export interface CanvasBackend {
    getContext(options?: unknown): object | null;
    resize(width: number, height: number): void;
    convertToBlob(options?: {
        type?: string;
        quality?: number;
    }): Promise<CanvasBlob>;
    transferToImageBitmap(): CanvasImageBitmap;
    flush?(): void;
    readPixels?(sx: number, sy: number, sw: number, sh: number): Promise<unknown>;
    snapshot?(): ImageBitmap;
}
type Call = (operation: string, ...args: unknown[]) => unknown;
type Factory = (canvas: OffscreenCanvas, target: object) => CanvasBackend;
export interface CanvasHost {
    /** @internal A native provider owns leases; Core owns their transfer semantics. */
    registerTransfers(provider: CanvasTransferProvider): () => void;
    transferToken(canvas: object): ArrayBuffer | undefined;
    prepareTransfers(list: unknown[]): CanvasTransfers;
    restoreTransfer(token: ArrayBuffer): OffscreenCanvas;
    register(mode: string, factory: Factory): () => void;
    backend(canvas: object, mode?: string): CanvasBackend | undefined;
    target(canvas: object): object;
    hold(view: object, canvas: object): void;
    held(view: object): object | undefined;
    isCanvas(value: unknown): value is OffscreenCanvas;
    present(): void;
    receive(target: object, event: Record<string, unknown>): boolean;
    configureSources(names: string[]): void;
    updateSource(name: string, width: number, height: number, buffer: ArrayBuffer | null): void;
    sourcePixels(value: unknown): PixelImage;
    readonly hasSources: boolean;
    close(): void;
}
export interface CanvasTransferProvider {
    create(canvas: object, target: object, width: number, height: number): ArrayBuffer;
    adopt(canvas: object, target: object, token: ArrayBuffer): void;
    dimensions(token: ArrayBuffer): [number, number];
    resize(token: ArrayBuffer, width: number, height: number): void;
}
export interface CanvasTransfers {
    buffers: unknown[];
    serialize(value: object): unknown[] | undefined;
    validate(): void;
}
export declare function canvasHost<T = CanvasHost>(value: object): T;
export declare function installCanvasHost(global: typeof globalThis, call: Call, EventTargetClass: typeof EventTarget, Exception: DOMExceptionConstructor, EventClass?: typeof Event, worker?: boolean): CanvasHost;
