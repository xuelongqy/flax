import {
  CanvasView as BoundCanvasView,
  type FlaxCanvasSurface,
} from './generated/bindings.js';
import { holdCanvas, surfaceOf } from './canvas.js';
import type { OffscreenCanvas } from './types.js';

export type {
  CanvasGradient,
  CanvasPattern,
  ImageBitmap,
  ImageData,
  OffscreenCanvas,
  OffscreenCanvasRenderingContext2D,
  Path2D,
} from './types.js';

export function CanvasView(
  canvas: OffscreenCanvas,
  options?: Parameters<typeof BoundCanvasView>[1],
): ReturnType<typeof BoundCanvasView> {
  const view = BoundCanvasView(surfaceOf(canvas) as FlaxCanvasSurface, options);
  holdCanvas(view, canvas);
  return view;
}
