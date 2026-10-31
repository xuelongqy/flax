// Types only: Core owns OffscreenCanvas; FlaxCanvasPlugin installs 2D globals.
import type {} from '@flax/core/host';
import type {
  ImageBitmapOptions,
  ImageDataSettings,
  CanvasGradient,
  CanvasPattern,
  ImageBitmap,
  ImageData,
  OffscreenCanvas,
  OffscreenCanvasRenderingContext2D,
  Path2D,
} from './types.js';

declare global {
  var OffscreenCanvasRenderingContext2D: {
    prototype: OffscreenCanvasRenderingContext2D;
  };
  var Path2D: {
    new (path?: Path2D | string): Path2D;
  };
  var CanvasGradient: {
    prototype: CanvasGradient;
  };
  var CanvasPattern: {
    prototype: CanvasPattern;
  };
  type OffscreenCanvasRenderingContext2D =
    import('./types.js').OffscreenCanvasRenderingContext2D;
  type Path2D = import('./types.js').Path2D;
  type CanvasGradient = import('./types.js').CanvasGradient;
  type CanvasPattern = import('./types.js').CanvasPattern;
}
export {};
