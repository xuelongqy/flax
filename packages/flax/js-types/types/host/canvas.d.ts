import type { EventTarget, Event, DOMExceptionConstructor } from './events.js';
import { type CanvasElement } from './canvas-dom.js';
import { type ImageBitmap } from './images.js';
export interface CanvasContextMap {
    bitmaprenderer: ImageBitmapRenderingContext;
}
export interface CanvasContextOptionsMap {
    bitmaprenderer: {
        alpha?: boolean;
    };
}
export interface ImageBitmapRenderingContext {
    readonly canvas: OffscreenCanvas;
    transferFromImageBitmap(bitmap: ImageBitmap | null): void;
}
export interface CanvasImageBitmap {
    readonly width: number;
    readonly height: number;
    close(): void;
}
export interface CanvasBlob {
    readonly type: string;
    arrayBuffer(): Promise<ArrayBuffer>;
}
export interface OffscreenCanvas extends CanvasElement {
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
    register(mode: string, factory: Factory): () => void;
    backend(canvas: object, mode?: string): CanvasBackend | undefined;
    target(canvas: object): object;
    hold(view: object, canvas: object): void;
    held(view: object): object | undefined;
    isCanvas(value: unknown): value is OffscreenCanvas;
    present(): void;
    receive(target: object, event: Record<string, unknown>): boolean;
    close(): void;
}
export declare function canvasHost<T = CanvasHost>(value: object): T;
export declare function installCanvasHost(global: typeof globalThis, call: Call, EventTargetClass: typeof EventTarget, Exception: DOMExceptionConstructor, EventClass?: typeof Event): CanvasHost;
export {};
