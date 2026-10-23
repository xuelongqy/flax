import { Afterglow } from '../../packages/flax_canvas/example/js/src/drawing';
import { animate, configure } from './afterglow_cases';
import { CanvasView } from '@flax/canvas';
import { runApp } from '@flax/flutter/widgets';

const host = globalThis as unknown as {
  __afterglow(phase: string, value: number, data?: unknown): void;
};
const scene = new Afterglow();
Object.assign(globalThis, {
  afterglow: {
    start(index: number) {
      void animate(
        scene,
        index,
        (step, timestamp) => host.__afterglow('begin', step, timestamp),
        (step) => host.__afterglow('end', step),
        () => host.__afterglow('encoded', 0),
      ).then(() => host.__afterglow('done', index));
    },
    async snapshot(index: number) {
      configure(scene, index);
      scene.draw();
      const blob = await scene.canvas.convertToBlob({ type: 'image/png' });
      host.__afterglow('pixels', index, new Uint8Array(await blob.arrayBuffer()));
    },
    close() {
      scene.dispose();
    },
  },
});
scene.draw();
runApp(CanvasView(scene.canvas, { width: 880, height: 480 }));
host.__afterglow('ready', 0);
