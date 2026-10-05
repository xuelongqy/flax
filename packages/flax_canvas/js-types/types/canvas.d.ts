import { CommandBuffer } from './commands.js';
import { type Rgba } from './color.js';
import { Path2D } from './path.js';
export type Call = (operation: string, ...args: unknown[]) => unknown;
declare const surfaceKey: unique symbol;
export declare const imageIdKey: unique symbol;
export type CanvasSurface = {
    width: number;
    height: number;
};
export declare function surfaceOf(canvas: object): CanvasSurface;
export declare function holdCanvas(host: object, canvas: object): void;
export declare function heldCanvas(host: object): object | undefined;
type Style = string | CanvasGradient | CanvasPattern;
declare class Affine {
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
    constructor(a?: number, b?: number, c?: number, d?: number, e?: number, f?: number);
    clone(): Affine;
    get isIdentity(): boolean;
    get det(): number;
    get isInvertible(): boolean;
    multiply(o: Affine): Affine;
    invert(): Affine;
    map(x: number, y: number): [number, number];
}
export declare class CanvasGradient {
    readonly kind: 'linear' | 'radial' | 'conic';
    readonly values: number[];
    stops: {
        offset: number;
        color: Rgba;
    }[];
    version: number;
    constructor(kind: 'linear' | 'radial' | 'conic', values: number[], token?: symbol);
    addColorStop(offset: number, color: string): void;
}
export declare class CanvasPattern {
    readonly image: number;
    readonly repeat: string;
    transform: Affine;
    version: number;
    constructor(image: number, repeat: string, token?: symbol);
    setTransform(a?: number | Affine, b?: number, c?: number, d?: number, e?: number, f?: number): void;
}
export declare class ImageData {
    readonly width: number;
    readonly height: number;
    readonly data: Uint8ClampedArray;
    constructor(dataOrWidth: Uint8ClampedArray | number, widthOrHeight: number, height?: number);
}
export declare class OffscreenCanvasRenderingContext2D {
    readonly canvas: OffscreenCanvas;
    private readonly call;
    private readonly buffer;
    private readonly dirty;
    private state;
    private stack;
    private path;
    private fillVersion;
    private strokeVersion;
    constructor(canvas?: OffscreenCanvas, call?: Call, buffer?: CommandBuffer, dirty?: () => void, token?: symbol);
    get fillStyle(): Style;
    set fillStyle(value: Style);
    get strokeStyle(): Style;
    set strokeStyle(value: Style);
    get globalAlpha(): number;
    set globalAlpha(value: number);
    get globalCompositeOperation(): string;
    set globalCompositeOperation(value: string);
    get lineWidth(): number;
    set lineWidth(value: number);
    get lineCap(): string;
    set lineCap(value: string);
    get lineJoin(): string;
    set lineJoin(value: string);
    get miterLimit(): number;
    set miterLimit(value: number);
    get lineDashOffset(): number;
    set lineDashOffset(value: number);
    get shadowColor(): string;
    set shadowColor(value: string);
    get shadowBlur(): number;
    set shadowBlur(value: number);
    get shadowOffsetX(): number;
    set shadowOffsetX(value: number);
    get shadowOffsetY(): number;
    set shadowOffsetY(value: number);
    get imageSmoothingEnabled(): boolean;
    set imageSmoothingEnabled(value: boolean);
    get imageSmoothingQuality(): string;
    set imageSmoothingQuality(value: string);
    get filter(): string;
    set filter(value: string);
    get font(): string;
    set font(value: string);
    get textAlign(): string;
    set textAlign(value: string);
    get textBaseline(): string;
    set textBaseline(value: string);
    get direction(): string;
    set direction(value: string);
    get letterSpacing(): string;
    set letterSpacing(value: string);
    get wordSpacing(): string;
    set wordSpacing(value: string);
    save(): void;
    restore(): void;
    reset(): void;
    getContextAttributes(): {
        alpha: boolean;
        desynchronized: boolean;
        willReadFrequently: boolean;
        colorSpace: string;
    };
    beginPath(): void;
    closePath(): void;
    moveTo(x: number, y: number): void;
    lineTo(x: number, y: number): void;
    rect(x: number, y: number, w: number, h: number): void;
    roundRect(x: number, y: number, w: number, h: number, radii?: number | number[]): void;
    arc(x: number, y: number, r: number, start: number, end: number, ccw?: boolean): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, r: number): void;
    ellipse(x: number, y: number, rx: number, ry: number, rotation: number, start: number, end: number, ccw?: boolean): void;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    bezierCurveTo(a: number, b: number, c: number, d: number, e: number, f: number): void;
    fill(path?: Path2D | string, rule?: string): void;
    stroke(path?: Path2D): void;
    clip(path?: Path2D | string, rule?: string): void;
    fillRect(x: number, y: number, w: number, h: number): void;
    strokeRect(x: number, y: number, w: number, h: number): void;
    clearRect(x: number, y: number, w: number, h: number): void;
    translate(x: number, y: number): void;
    rotate(angle: number): void;
    scale(x: number, y: number): void;
    transform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    setTransform(a?: number | Affine, b?: number, c?: number, d?: number, e?: number, f?: number): void;
    resetTransform(): void;
    getTransform(): Affine;
    setLineDash(segments: number[]): void;
    getLineDash(): number[];
    fillText(text: string, x: number, y: number): void;
    strokeText(text: string, x: number, y: number): void;
    measureText(text: string): Record<string, number>;
    drawImage(image: {
        width: number;
        height: number;
    } | OffscreenCanvas | ImageData | ImageBitmap, dx: number, dy: number, dw?: number, dh?: number, ...rest: number[]): void;
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
    createConicGradient(angle: number, x: number, y: number): CanvasGradient;
    createPattern(image: OffscreenCanvas | ImageBitmap | object, repeat?: string | null): CanvasPattern | null;
    createImageData(sw: number, sh: number): ImageData;
    putImageData(image: ImageData, dx: number, dy: number): void;
    getImageDataAsync(sx: number, sy: number, sw: number, sh: number): Promise<ImageData>;
    isPointInPath(pathOrX: Path2D | number, xOrY: number, yOrRule?: number | string, rule?: string): boolean;
    resyncState(): void;
    private mapPoint;
    private extendCurrent;
    private aroundCurrentPath;
    private writeTransform;
    private syncLiveStyles;
    private syncStyle;
    private writeShadow;
    private writeStyle;
    private writePaint;
    private writeSmoothing;
    private record;
}
export declare class OffscreenCanvas {
    readonly [surfaceKey]: CanvasSurface;
    private readonly call;
    private readonly buffer;
    private context;
    private queued;
    private borrowed;
    private generation;
    private sequence;
    attributes: {
        alpha: boolean;
        desynchronized: boolean;
        willReadFrequently: boolean;
        colorSpace: string;
    };
    constructor(width: number, height: number, call: Call);
    get width(): number;
    set width(value: number);
    get height(): number;
    set height(value: number);
    getContext(type: string, options?: {
        alpha?: boolean;
        desynchronized?: boolean;
        willReadFrequently?: boolean;
        colorSpace?: string;
    }): OffscreenCanvasRenderingContext2D | null;
    borrowImage(id: number): void;
    flush(): void;
    private releaseBorrowed;
    mark(): void;
    resize(width: number, height: number): void;
    convertToBlob(options?: {
        type?: string;
    }): Promise<{
        arrayBuffer(): Promise<ArrayBuffer>;
        type: string;
    }>;
    transferToImageBitmap(): ImageBitmap;
    readPixels(sx: number, sy: number, sw: number, sh: number): Promise<ImageData>;
}
export declare function settle(id: number, ok: boolean, value: unknown): void;
export declare function closePending(): void;
export declare class ImageBitmap {
    [imageIdKey]: number;
    readonly width: number;
    readonly height: number;
    private readonly call;
    private readonly release;
    constructor(id?: number, width?: number, height?: number, call?: Call, token?: symbol);
    close(): void;
}
export declare function createImageBitmap(call: Call, source: unknown): Promise<ImageBitmap>;
export declare function installCanvas(global: typeof globalThis, call: Call): {
    settle(id: number, ok: boolean, value: unknown): void;
    close(): void;
};
export {};
