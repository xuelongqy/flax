// Types only: FlaxCanvasPlugin installs the Canvas globals.
import type {
  CanvasGradient,
  CanvasPattern,
  ImageBitmap,
  ImageData,
  OffscreenCanvas,
  OffscreenCanvasRenderingContext2D,
  Path2D,
} from './types.js';

declare global {
  var OffscreenCanvas: {
    new (width: number, height: number): OffscreenCanvas;
  };
  var OffscreenCanvasRenderingContext2D: {
    prototype: OffscreenCanvasRenderingContext2D;
  };
  var Path2D: {
    new (path?: Path2D | string): Path2D;
  };
  var ImageData: {
    new (width: number, height: number): ImageData;
    new (data: Uint8ClampedArray, width: number, height?: number): ImageData;
  };
  var ImageBitmap: {
    prototype: ImageBitmap;
  };
  var CanvasGradient: {
    prototype: CanvasGradient;
  };
  var CanvasPattern: {
    prototype: CanvasPattern;
  };
  function createImageBitmap(
    source:
      | ImageBitmap
      | ImageData
      | OffscreenCanvas
      | { arrayBuffer(): Promise<ArrayBuffer> },
  ): Promise<ImageBitmap>;
  type OffscreenCanvas = import('./types.js').OffscreenCanvas;
  type OffscreenCanvasRenderingContext2D =
    import('./types.js').OffscreenCanvasRenderingContext2D;
  type Path2D = import('./types.js').Path2D;
  type ImageData = import('./types.js').ImageData;
  type ImageBitmap = import('./types.js').ImageBitmap;
  type CanvasGradient = import('./types.js').CanvasGradient;
  type CanvasPattern = import('./types.js').CanvasPattern;
}
export {};
