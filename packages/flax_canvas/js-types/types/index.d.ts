import { CanvasView as BoundCanvasView } from './generated/bindings.js';
import type { OffscreenCanvas } from './types.js';
export type { CanvasGradient, CanvasPattern, ImageBitmap, ImageData, OffscreenCanvas, OffscreenCanvasRenderingContext2D, Path2D, } from './types.js';
export declare function CanvasView(canvas: OffscreenCanvas, options?: Parameters<typeof BoundCanvasView>[1]): ReturnType<typeof BoundCanvasView>;
