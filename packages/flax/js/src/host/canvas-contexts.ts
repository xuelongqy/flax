// Context providers augment this pure type leaf without loading realm globals.
export interface CanvasContextMap {
  bitmaprenderer: import('./canvas.js').ImageBitmapRenderingContext;
}
export interface CanvasContextOptionsMap {
  bitmaprenderer: { alpha?: boolean };
}
