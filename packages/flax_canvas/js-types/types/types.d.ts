export interface ImageBitmapOptions {
    imageOrientation?: 'from-image' | 'flipY';
    premultiplyAlpha?: 'default' | 'premultiply' | 'none';
    colorSpaceConversion?: 'default' | 'none';
    resizeWidth?: number;
    resizeHeight?: number;
    resizeQuality?: 'pixelated' | 'low' | 'medium' | 'high';
}
export interface CanvasMatrix2DInit {
    a?: number;
    b?: number;
    c?: number;
    d?: number;
    e?: number;
    f?: number;
    m11?: number;
    m12?: number;
    m21?: number;
    m22?: number;
    m41?: number;
    m42?: number;
    is2D?: boolean;
}
export type CanvasRadius = number | {
    x?: number;
    y?: number;
    z?: number;
    w?: number;
};
export interface TextMetrics {
    readonly [name: string]: number;
    readonly width: number;
    readonly actualBoundingBoxLeft: number;
    readonly actualBoundingBoxRight: number;
    readonly actualBoundingBoxAscent: number;
    readonly actualBoundingBoxDescent: number;
    readonly fontBoundingBoxAscent: number;
    readonly fontBoundingBoxDescent: number;
    readonly emHeightAscent: number;
    readonly emHeightDescent: number;
    readonly hangingBaseline: number;
    readonly alphabeticBaseline: number;
    readonly ideographicBaseline: number;
}
export interface ImageDataSettings {
    colorSpace?: 'srgb' | 'display-p3';
    pixelFormat?: 'rgba-unorm8' | 'rgba-float16';
}
export interface CanvasTransform extends Required<Pick<CanvasMatrix2DInit, 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'm11' | 'm12' | 'm21' | 'm22' | 'm41' | 'm42'>> {
    readonly is2D: boolean;
    readonly isIdentity: boolean;
    inverse(): CanvasTransform;
    multiply(other?: CanvasMatrix2DInit): CanvasTransform;
    translate(x?: number, y?: number): CanvasTransform;
    scale(x?: number, y?: number): CanvasTransform;
    rotate(angle?: number): CanvasTransform;
    transformPoint(point?: {
        x?: number;
        y?: number;
        z?: number;
        w?: number;
    }): {
        x: number;
        y: number;
        z: number;
        w: number;
    };
    toFloat32Array(): Float32Array;
    toFloat64Array(): Float64Array;
    toJSON(): object;
}
export interface ImageData {
    readonly width: number;
    readonly height: number;
    readonly data: Uint8ClampedArray;
    readonly colorSpace: 'srgb';
    readonly pixelFormat: 'rgba-unorm8';
}
export interface ImageBitmap {
    readonly width: number;
    readonly height: number;
    close(): void;
}
export interface CanvasGradient {
    addColorStop(offset: number, color: string): void;
}
export interface CanvasPattern {
    setTransform(a?: number | CanvasMatrix2DInit, b?: number, c?: number, d?: number, e?: number, f?: number): void;
}
export interface Path2D {
    addPath(path: Path2D, transform?: CanvasMatrix2DInit): void;
    closePath(): void;
    moveTo(x: number, y: number): void;
    lineTo(x: number, y: number): void;
    rect(x: number, y: number, w: number, h: number): void;
    roundRect(x: number, y: number, w: number, h: number, radii?: CanvasRadius | Iterable<CanvasRadius>): void;
    arc(x: number, y: number, r: number, start: number, end: number, ccw?: boolean): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, r: number): void;
    ellipse(x: number, y: number, rx: number, ry: number, rotation: number, start: number, end: number, ccw?: boolean): void;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
}
export interface OffscreenCanvasRenderingContext2D {
    readonly canvas: OffscreenCanvas;
    fillStyle: string | CanvasGradient | CanvasPattern;
    strokeStyle: string | CanvasGradient | CanvasPattern;
    globalAlpha: number;
    globalCompositeOperation: string;
    lineWidth: number;
    lineCap: string;
    lineJoin: string;
    miterLimit: number;
    lineDashOffset: number;
    shadowColor: string;
    shadowBlur: number;
    shadowOffsetX: number;
    shadowOffsetY: number;
    imageSmoothingEnabled: boolean;
    imageSmoothingQuality: string;
    filter: string;
    font: string;
    textAlign: string;
    textBaseline: string;
    direction: string;
    letterSpacing: string;
    wordSpacing: string;
    lang: string;
    fontKerning: string;
    fontStretch: string;
    fontVariantCaps: string;
    textRendering: string;
    isContextLost(): boolean;
    getContextAttributes(): {
        alpha: boolean;
        desynchronized: boolean;
        willReadFrequently: boolean;
        colorSpace: string;
        colorType: 'unorm8';
    };
    save(): void;
    restore(): void;
    reset(): void;
    beginPath(): void;
    closePath(): void;
    moveTo(x: number, y: number): void;
    lineTo(x: number, y: number): void;
    rect(x: number, y: number, w: number, h: number): void;
    roundRect(x: number, y: number, w: number, h: number, radii?: CanvasRadius | Iterable<CanvasRadius>): void;
    arc(x: number, y: number, r: number, start: number, end: number, ccw?: boolean): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, r: number): void;
    ellipse(x: number, y: number, rx: number, ry: number, rotation: number, start: number, end: number, ccw?: boolean): void;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
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
    setTransform(a?: number | CanvasMatrix2DInit, b?: number, c?: number, d?: number, e?: number, f?: number): void;
    resetTransform(): void;
    getTransform(): CanvasTransform;
    setLineDash(segments: number[]): void;
    getLineDash(): number[];
    fillText(text: string, x: number, y: number, maxWidth?: number): void;
    strokeText(text: string, x: number, y: number, maxWidth?: number): void;
    measureText(text: string): TextMetrics;
    drawImage(image: object, dx: number, dy: number): void;
    drawImage(image: object, dx: number, dy: number, dw: number, dh: number): void;
    drawImage(image: object, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
    createConicGradient(angle: number, x: number, y: number): CanvasGradient;
    createPattern(image: object, repeat?: string | null): CanvasPattern | null;
    createImageData(sw: number, sh: number, settings?: ImageDataSettings): ImageData;
    createImageData(image: ImageData): ImageData;
    putImageData(image: ImageData, dx: number, dy: number, dirtyX?: number, dirtyY?: number, dirtyWidth?: number, dirtyHeight?: number): void;
    getImageData(sx: number, sy: number, sw: number, sh: number, settings?: ImageDataSettings): ImageData;
    getImageDataAsync(sx: number, sy: number, sw: number, sh: number): Promise<ImageData>;
    isPointInStroke(x: number, y: number): boolean;
    isPointInStroke(path: Path2D, x: number, y: number): boolean;
    isPointInPath(pathOrX: Path2D | number, xOrY: number, yOrRule?: number | string, rule?: string): boolean;
}
export interface OffscreenCanvas {
    width: number;
    height: number;
    getContext(type: string, options?: {
        alpha?: boolean;
        desynchronized?: boolean;
        willReadFrequently?: boolean;
        colorSpace?: string;
        colorType?: 'unorm8' | 'float16';
    }): OffscreenCanvasRenderingContext2D | null;
    convertToBlob(options?: {
        type?: string;
        quality?: number;
    }): Promise<{
        arrayBuffer(): Promise<ArrayBuffer>;
        type: string;
    }>;
    transferToImageBitmap(): ImageBitmap;
}
