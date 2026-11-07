export type * from './common.js';
export type { CanvasBackend, CanvasHost } from './canvas.js';
export type { CanvasElement, CanvasDocument, CanvasRect, CanvasStyle, HTMLCanvasElement, CanvasInputInit, ResizeObserver, ResizeObserverEntry, ResizeObserverSize, ResizeObserverCallback, } from './canvas-dom.js';
import type * as CanvasDOM from './canvas-dom.js';
import type * as Images from './images.js';
export type { ImageData, ImageBitmap, ImageDataSettings, ImageBitmapOptions, HTMLImageElement, PixelImage, } from './images.js';
declare global {
    type ResizeObserver = CanvasDOM.ResizeObserver;
    type ResizeObserverEntry = CanvasDOM.ResizeObserverEntry;
    type ResizeObserverSize = CanvasDOM.ResizeObserverSize;
    var ResizeObserver: {
        new (callback: CanvasDOM.ResizeObserverCallback): ResizeObserver;
    };
    type HTMLImageElement = Images.HTMLImageElement;
    var Image: {
        new (width?: number, height?: number): HTMLImageElement;
    };
    var HTMLImageElement: {
        new (): HTMLImageElement;
        readonly prototype: HTMLImageElement;
    };
    function createImageBitmap(source: ImageBitmap | ImageData | HTMLImageElement | OffscreenCanvas | {
        arrayBuffer(): Promise<ArrayBuffer>;
    }, ...args: [Images.ImageBitmapOptions?] | [number, number, number, number, Images.ImageBitmapOptions?]): Promise<ImageBitmap>;
}
export type { OffscreenCanvas, CanvasContextMap, CanvasContextOptionsMap, ImageBitmapRenderingContext, } from './canvas.js';
import type { ImageBitmapRenderingContext as HostBitmapContext } from './canvas.js';
import type { OffscreenCanvasConstructor } from './canvas.js';
declare module './canvas.js' {
    interface OffscreenCanvasConstructor {
        new (width: number, height: number): OffscreenCanvas & CanvasDOM.CanvasElement;
    }
}
declare global {
    type ImageBitmapRenderingContext = HostBitmapContext;
    var ImageBitmapRenderingContext: {
        readonly prototype: HostBitmapContext;
    };
}
declare global {
    var window: typeof globalThis;
    var document: CanvasDOM.CanvasDocument;
    var devicePixelRatio: number;
    var innerWidth: number;
    var innerHeight: number;
    var OffscreenCanvas: OffscreenCanvasConstructor;
    var HTMLCanvasElement: {
        new (): CanvasDOM.HTMLCanvasElement;
    };
    type HTMLCanvasElement = CanvasDOM.HTMLCanvasElement;
    var MouseEvent: {
        new (type: string, init?: CanvasDOM.CanvasInputInit): CanvasDOM.MouseEvent;
    };
    type MouseEvent = CanvasDOM.MouseEvent;
    var PointerEvent: {
        new (type: string, init?: CanvasDOM.CanvasInputInit): CanvasDOM.PointerEvent;
    };
    type PointerEvent = CanvasDOM.PointerEvent;
    var WheelEvent: {
        new (type: string, init?: CanvasDOM.CanvasInputInit): CanvasDOM.WheelEvent;
        readonly DOM_DELTA_PIXEL: 0;
        readonly DOM_DELTA_LINE: 1;
        readonly DOM_DELTA_PAGE: 2;
    };
    type WheelEvent = CanvasDOM.WheelEvent;
    var KeyboardEvent: {
        new (type: string, init?: CanvasDOM.CanvasInputInit): CanvasDOM.KeyboardEvent;
    };
    type KeyboardEvent = CanvasDOM.KeyboardEvent;
    function requestAnimationFrame(callback: (time: number) => void): number;
    function cancelAnimationFrame(id?: number): void;
}
export interface FlaxPermissionResult {
    readonly permission: string;
    readonly state: 'prompt' | 'granted' | 'limited' | 'denied' | 'unavailable' | 'unknown';
    readonly requested: boolean;
    readonly reason?: string;
    readonly scope?: unknown;
    readonly serviceStatus: 'enabled' | 'disabled' | 'notApplicable' | 'unknown';
}
export interface FlaxPermissions {
    query(id: string, options?: {
        scope?: unknown;
    }): Promise<FlaxPermissionResult>;
    request(id: string, options?: {
        scope?: unknown;
    }): Promise<FlaxPermissionResult>;
}
declare global {
    var permissions: FlaxPermissions;
}
