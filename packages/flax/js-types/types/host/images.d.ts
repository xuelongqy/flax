import type { CanvasHost, CanvasTransfers } from './canvas.js';
import type { DOMExceptionConstructor } from './events.js';
import type { Blob } from './data.js';
import type { Event, EventTarget } from './events.js';
export interface ImageBitmapOptions {
    imageOrientation?: 'from-image' | 'flipY';
    premultiplyAlpha?: 'default' | 'premultiply' | 'none';
    colorSpaceConversion?: 'default' | 'none';
    resizeWidth?: number;
    resizeHeight?: number;
    resizeQuality?: 'pixelated' | 'low' | 'medium' | 'high';
}
export interface ImageDataSettings {
    colorSpace?: 'srgb' | 'display-p3';
    pixelFormat?: 'rgba-unorm8' | 'rgba-float16';
}
export interface ImageData {
    readonly width: number;
    readonly height: number;
    readonly data: Uint8ClampedArray<ArrayBuffer>;
    readonly colorSpace: 'srgb';
    readonly pixelFormat: 'rgba-unorm8';
}
export interface ImageBitmap {
    readonly width: number;
    readonly height: number;
    close(): void;
}
/** An image resource for canvas renderers, without an HTML layout node. */
export interface HTMLImageElement extends EventTarget {
    src: string;
    readonly currentSrc: string;
    width: number;
    height: number;
    readonly naturalWidth: number;
    readonly naturalHeight: number;
    readonly complete: boolean;
    crossOrigin: string | null;
    onload: ((event: Event) => unknown) | null;
    onerror: ((event: Event) => unknown) | null;
    decode(): Promise<void>;
}
export interface PixelImage {
    data: Uint8Array;
    width: number;
    height: number;
    colorSpace?: 'srgb' | 'display-p3';
    premultiplied?: boolean;
}
export interface BitmapSource {
    width: number;
    height: number;
    close(): void;
    pixels(): PixelImage;
    native?(): object;
    canvasId?: number;
    canvasOwner?: unknown;
}
export declare const imageIdKey: unique symbol;
export declare const ImageData: {
    new (width: number, height: number, settings?: ImageDataSettings): ImageData;
    new (data: Uint8ClampedArray<ArrayBuffer>, width: number, height?: number, settings?: ImageDataSettings): ImageData;
    new (data: Uint8ClampedArray<ArrayBuffer>, width: number, settings?: ImageDataSettings): ImageData;
    readonly prototype: ImageData;
};
export declare const ImageBitmap: {
    new (): ImageBitmap;
    readonly prototype: ImageBitmap;
};
type Call = (operation: string, ...args: unknown[]) => unknown;
type Options = [
    ImageBitmapOptions?
] | [number, number, number, number, ImageBitmapOptions?];
export interface ImageHost {
    isSource(source: unknown): boolean;
    bitmap(source: BitmapSource): ImageBitmap;
    transfer(bitmap: ImageBitmap): ImageBitmap;
    prepareTransfers(list: unknown[]): CanvasTransfers;
    deserialize(record: any[]): ImageData | ImageBitmap;
    source(bitmap: object): BitmapSource;
    read(source: unknown): PixelImage;
    onClose(bitmap: object, callback: () => void): void;
    register(factory: (source: unknown, ...options: Options) => Promise<ImageBitmap> | undefined): () => void;
    create(source: unknown, ...options: Options): Promise<ImageBitmap>;
    fromPixels(pixels: PixelImage): ImageBitmap;
    encode(pixels: PixelImage, type: string, quality?: number): Promise<Blob>;
    dataURL(pixels: PixelImage, type?: string, quality?: number): string;
    settle(id: number, ok: boolean, value: any): void;
    sweep(): void;
    close(): void;
}
export declare function imageHost(global?: typeof globalThis): ImageHost;
export declare function installImageHost(global: typeof globalThis, call: Call, canvases: CanvasHost | undefined, Exception: DOMExceptionConstructor, worker?: boolean): ImageHost;
export {};
