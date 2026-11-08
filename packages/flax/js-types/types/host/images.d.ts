/// <reference lib="es2025.float16" preserve="true" />
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
type ImageColorSpace = 'srgb' | 'display-p3';
type ImagePixelFormat = 'rgba-unorm8' | 'rgba-float16';
type ImageDataArray = Uint8ClampedArray<ArrayBuffer> | Float16Array<ArrayBuffer>;
export interface ImageDataSettings {
    colorSpace?: ImageColorSpace;
    pixelFormat?: ImagePixelFormat;
}
export interface ImageData {
    readonly width: number;
    readonly height: number;
    readonly data: ImageDataArray;
    readonly colorSpace: ImageColorSpace;
    readonly pixelFormat: ImagePixelFormat;
}
export interface ImageBitmap {
    readonly width: number;
    readonly height: number;
    close(): void;
}
declare const elementImageBrand: unique symbol;
export interface ElementImage {
    readonly [elementImageBrand]: true;
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
    /** Packed RGBA bytes. RGB uses the transfer curve of the named color space. */
    data: Uint8Array;
    width: number;
    height: number;
    colorSpace?: ImageColorSpace;
    pixelFormat?: ImagePixelFormat;
    premultiplied?: boolean;
}
/** Convert to the straight sRGB RGBA8 used by the legacy canvas and codec bridges. */
export declare function toSrgbRgba8(pixels: PixelImage): Uint8Array;
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
    new (data: ImageDataArray, width: number, height?: number, settings?: ImageDataSettings): ImageData;
    new (data: ImageDataArray, width: number, settings?: ImageDataSettings): ImageData;
    readonly prototype: ImageData;
};
export declare const ImageBitmap: {
    new (): ImageBitmap;
    readonly prototype: ImageBitmap;
};
type Call = (operation: string, ...args: unknown[]) => unknown;
type BitmapCrop = [number, number, number, number];
type Options = [ImageBitmapOptions?] | [...BitmapCrop, ImageBitmapOptions?];
export interface ImageHost {
    isSource(source: unknown): boolean;
    bitmap(source: BitmapSource): ImageBitmap;
    transfer(bitmap: ImageBitmap): ImageBitmap;
    prepareTransfers(list: unknown[]): CanvasTransfers;
    deserialize(record: any[]): ImageData | ImageBitmap | ElementImage;
    elementImage(pixels: PixelImage): ElementImage;
    readElementImage(value: unknown): PixelImage | undefined;
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
