import type {} from '@flax/canvas/globals';
import { CanvasView } from '@flax/canvas';
import { runApp } from '@flax/flutter/widgets';

const canvas = new OffscreenCanvas(64, 64);
const context = canvas.getContext('2d')!;
type EncoderCanvas = OffscreenCanvas & { flush(): void };
type Call = (operation: string, ...args: unknown[]) => unknown;
// Reuse the installed 2D backend with a reference host, without bundling another encoder.
const host = (
  globalThis as unknown as {
    __flaxCanvasHost: {
      backend(canvas: OffscreenCanvas): object;
      target(canvas: OffscreenCanvas): object;
    };
  }
).__flaxCanvasHost;
const CanvasEncoder = host.backend(canvas).constructor as new (
  canvas: OffscreenCanvas,
  call: Call,
  target: object,
) => { getContext(): OffscreenCanvasRenderingContext2D; flush(): void };
const reference = new OffscreenCanvas(64, 64);
const dartCanvas = new CanvasEncoder(
  reference,
  (operation, ...args) => {
    if (operation === 'create') return { width: args[0], height: args[1] };
    if (operation === 'commit') {
      const call = (
        globalThis as unknown as { __flaxCanvasDartBatch(bytes: Uint8Array): void }
      ).__flaxCanvasDartBatch;
      return call(args[1] as Uint8Array);
    }
    if (operation === 'disposeSurface') return;
    throw new Error('Unsupported reference operation: ' + operation);
  },
  host.target(reference),
);
const dartContext = dartCanvas.getContext()!;

Object.assign(globalThis, {
  canvasNativeBenchmark: {
    native(count: number): number {
      for (let i = 0; i < count; i++) context.fillRect(i % 64, (i >>> 6) % 64, 1, 1);
      (canvas as EncoderCanvas).flush();
      return 0;
    },
    dart(count: number): number {
      for (let i = 0; i < count; i++)
        dartContext.fillRect(i % 64, (i >>> 6) % 64, 1, 1);
      dartCanvas.flush();
      return 0;
    },
  },
});
runApp(CanvasView(canvas, { width: 64, height: 64 }));
