import { CanvasView as BoundCanvasView } from './generated/bindings.js';
import type { OffscreenCanvas } from './types.js';
export type { CanvasMatrix2DInit, CanvasTransform, ImageDataSettings, CanvasRadius, TextMetrics, ImageBitmapOptions, CanvasGradient, CanvasPattern, ImageBitmap, ImageData, OffscreenCanvas, OffscreenCanvasRenderingContext2D, Path2D, } from './types.js';
export declare function CanvasView(canvas: OffscreenCanvas, options?: Parameters<typeof BoundCanvasView>[1]): ReturnType<typeof BoundCanvasView>;
