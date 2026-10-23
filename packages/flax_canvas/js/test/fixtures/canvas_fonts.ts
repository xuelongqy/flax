import type {} from '@flax/canvas/globals';
import { CanvasView } from '@flax/canvas';
import { registerFont } from '@flax/core/assets';
import { runApp } from '@flax/flutter/widgets';

const host = globalThis as unknown as {
  __canvasModuleFont: boolean;
  canvasFontReady: Promise<void>;
  canvasFontResult: string;
};
const canvas = new OffscreenCanvas(64, 64);
const ctx = canvas.getContext('2d')!;
runApp(CanvasView(canvas, { width: 64, height: 64 }));
const ready = host.__canvasModuleFont
  ? registerFont({ manifest: 'assets/canvas-fonts.json', name: 'body' }).ready
  : Promise.resolve('Flax Canvas "Shared"');
host.canvasFontReady = ready.then((family) => {
  ctx.font = `40px ${JSON.stringify(family)}`;
  const metrics = ctx.measureText('A');
  ctx.textBaseline = 'top';
  ctx.fillStyle = 'white';
  ctx.fillText('A', 0, 0);
  host.canvasFontResult = JSON.stringify({
    ascent: metrics.fontBoundingBoxAscent,
    descent: metrics.fontBoundingBoxDescent,
    width: metrics.width,
    pixels: [...ctx.getImageData(0, 0, 64, 64).data],
  });
});
