import type {} from '@flax/canvas/globals';
import { CanvasView } from '@flax/canvas';
import { runApp } from '@flax/flutter/widgets';

type NativeCanvas = {
  begin(): void;
  fillRect(x: number, y: number, width: number, height: number): void;
  batch(bytes: Uint8Array): void;
  commit(): number;
};
const native = (globalThis as unknown as { __flaxCanvasPrototype: NativeCanvas })
  .__flaxCanvasPrototype;
if (!native) throw new Error('Canvas prototype engine is required');

const canvas = new OffscreenCanvas(64, 64);
const context = canvas.getContext('2d')!;
type EncoderCanvas = OffscreenCanvas & { flush(): void };
type Call = (operation: string, ...args: unknown[]) => unknown;
// The benchmark reuses the installed encoder instead of bundling a second copy.
const CanvasEncoder = Object.getPrototypeOf(OffscreenCanvas) as new (
  width: number,
  height: number,
  call: Call,
) => EncoderCanvas;
const batchCanvas = new CanvasEncoder(64, 64, (operation, ...args) => {
  if (operation === 'create') return { width: args[0], height: args[1] };
  if (operation === 'commit') return native.batch(args[1] as Uint8Array);
  if (operation === 'disposeSurface') return;
  throw new Error('Unsupported prototype operation: ' + operation);
});
const batchContext = batchCanvas.getContext('2d')!;
const dartCanvas = new CanvasEncoder(64, 64, (operation, ...args) => {
  if (operation === 'create') return { width: args[0], height: args[1] };
  if (operation === 'commit') {
    const call = (globalThis as unknown as { __flaxCanvasDartBatch(bytes: Uint8Array): void }).__flaxCanvasDartBatch;
    return call(args[1] as Uint8Array);
  }
  if (operation === 'disposeSurface') return;
  throw new Error('Unsupported reference operation: ' + operation);
});
const dartContext = dartCanvas.getContext('2d')!;

Object.assign(globalThis, {
  canvasNativeBenchmark: {
    native(count: number): number {
      for (let i = 0; i < count; i++) context.fillRect(i % 64, (i >>> 6) % 64, 1, 1);
      (canvas as EncoderCanvas).flush();
      return 0;
    },
    dart(count: number): number {
      for (let i = 0; i < count; i++) dartContext.fillRect(i % 64, (i >>> 6) % 64, 1, 1);
      dartCanvas.flush();
      return 0;
    },
    batch(count: number): number {
      native.begin();
      for (let i = 0; i < count; i++)
        batchContext.fillRect(i % 64, (i >>> 6) % 64, 1, 1);
      batchCanvas.flush();
      return native.commit();
    },
    direct(count: number): number {
      native.begin();
      for (let i = 0; i < count; i++) native.fillRect(i % 64, (i >>> 6) % 64, 1, 1);
      return native.commit();
    },
  },
});
runApp(CanvasView(canvas, { width: 64, height: 64 }));
