import type {} from '@flax/canvas/globals';
import type {} from '@flax/core/host';
import { CanvasView } from '@flax/canvas';
import { runApp } from '@flax/flutter/widgets';

type Host = {
  __drawImageReady(): void;
  __drawImageFrame(phase: 'begin' | 'end'): boolean;
  __drawImageNoop(operation: string, id: number): void;
};
const host = globalThis as unknown as Host;
const target = new OffscreenCanvas(512, 512);
const ctx = target.getContext('2d')!;
const sources = new Map<number, OffscreenCanvas>();
const bitmaps = new Map<number, ImageBitmap>();
type EncoderCanvas = OffscreenCanvas & {
  flush(): void;
  call(operation: string, ...args: unknown[]): unknown;
};

for (const size of [256, 1024]) {
  const source = new OffscreenCanvas(size, size);
  const paint = source.getContext('2d')!;
  // Both modes draw the same frozen, nontrivial sprite, prepared before sampling.
  for (let i = 0; i < 64; i++) {
    paint.fillStyle = `rgba(${(i * 43) % 256}, ${(i * 71) % 256}, ${(i * 113) % 256}, 0.75)`;
    paint.fillRect(
      ((i % 8) * size) / 8,
      (Math.floor(i / 8) * size) / 8,
      size / 7,
      size / 7,
    );
  }
  sources.set(size, source);
}

Object.assign(globalThis, {
  drawImageBenchmark: {
    start(mode: string, size: number, count: number): void {
      const source = mode === 'offscreen' ? sources.get(size)! : bitmaps.get(size)!;
      if (!source || !['offscreen', 'bitmap'].includes(mode))
        throw new Error('Invalid drawImage benchmark case');
      let step = 0;
      const width = count === 1 ? 512 : 64;
      function frame() {
        host.__drawImageFrame('begin');
        ctx.clearRect(0, 0, 512, 512);
        ctx.fillStyle = '#202830';
        ctx.fillRect(0, 0, 512, 512);
        for (let i = 0; i < count; i++) {
          const x = count === 1 ? 0 : (i * 67 + step * 3) % 448;
          const y = count === 1 ? 0 : (i * 97 + step * 2) % 448;
          ctx.drawImage(source, x, y, width, width);
        }
        // Include commit and borrowed-image releases in CPU submission timing.
        (target as EncoderCanvas).flush();
        step++;
        if (host.__drawImageFrame('end')) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    },
    bridge(mode: string, count: number): number {
      const bitmap = bitmaps.get(256)!;
      const id = (bitmap as unknown as Record<symbol, number>)[
        Symbol.for('flaxCanvasImageId')
      ]!;
      const call =
        mode === 'js'
          ? (_operation: string, _id: number) => {}
          : mode === 'host'
            ? host.__drawImageNoop
            : (target as EncoderCanvas).call;
      let sum = 0;
      for (let i = 0; i < count; i++) {
        call('retainImage', id);
        call('closeImage', id);
        sum += i & 1;
      }
      return sum;
    },
    close(): void {
      for (const bitmap of bitmaps.values()) bitmap.close();
    },
  },
});

runApp(CanvasView(target, { width: 512, height: 512 }));
Promise.all(
  [...sources].map(async ([size, source]) => {
    bitmaps.set(size, await createImageBitmap(source));
  }),
).then(() => host.__drawImageReady());
