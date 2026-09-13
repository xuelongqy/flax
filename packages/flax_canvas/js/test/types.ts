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
