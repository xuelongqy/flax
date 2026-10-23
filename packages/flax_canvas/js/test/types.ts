import type {} from '../src/globals.js';
import {
  CanvasView,
  type CanvasGradient,
  type CanvasPattern,
  type OffscreenCanvas as PublicOffscreenCanvas,
} from '../src/index.js';
import { MAGIC, CommandBuffer } from '../src/commands.js';

const canvas = new OffscreenCanvas(2, 2);
const context = canvas.getContext('2d');
if (context) {
  context.fillRect(0, 0, 1, 1);
  const widget = CanvasView(canvas, { width: 2, height: 2 });
  void widget;
}
const buffer = new CommandBuffer();
buffer.record(1, () => buffer.f64(1));
void MAGIC;

declare const publicCanvas: PublicOffscreenCanvas;
declare const publicGradient: CanvasGradient;
declare const publicPattern: CanvasPattern;
// @ts-expect-error internal flush
publicCanvas.flush();
// @ts-expect-error internal borrowImage
publicCanvas.borrowImage(1);
// @ts-expect-error internal version
publicGradient.version;
// @ts-expect-error internal stops
publicGradient.stops;
// @ts-expect-error internal image id
publicPattern.image;

if (context) {
  context.lang = 'zh-CN';
  context.fontKerning = 'normal';
  context.fontStretch = 'condensed';
  context.fontVariantCaps = 'small-caps';
  context.textRendering = 'optimizeLegibility';
  context.fillText('text', 0, 0, 10);
  context.strokeText('text', 0, 0, 10);
  context.setTransform({ m11: 2, m22: 3 });
  publicPattern.setTransform({});
  const p = new Path2D();
  p.addPath(new Path2D(), { e: 2 });
  context.roundRect(0, 0, 10, 10, [2, { x: 2, y: 3 }]);
  const image = context.createImageData(new ImageData(2, 2));
  context.putImageData(image, 0, 0, 1, 1, 1, 1);
  context.drawImage(canvas, 0, 0, 1, 1, 0, 0, 2, 2);
  void canvas.convertToBlob({ type: 'image/webp', quality: 0.8 });
  context.isPointInStroke(p, 0, 0);
  context.isPointInStroke(0, 0);
  context.isContextLost();
  const pixels: ImageData = context.getImageData(0, 0, 1, 1);
  const baseline: number = context.measureText('x').alphabeticBaseline;
  const legacyMetrics: Record<string, number> = context.measureText('x');
  void pixels;
  void baseline;
  void legacyMetrics;
}

void createImageBitmap(canvas, 0, 0, 1, 1, {
  resizeWidth: 2,
  imageOrientation: 'flipY',
});
