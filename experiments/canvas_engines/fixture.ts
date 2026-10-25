import { Afterglow } from '../../packages/flax_canvas/example/js/src/drawing';
import { CanvasView } from '@flax/canvas';
import { runApp } from '@flax/flutter/widgets';

const host = globalThis as unknown as {
  __engineBench(op: string, step: number, bytes?: Uint8Array): void;
};
const scene = new Afterglow();
const cases = [
  { composition: 2, dreamy: false },
  { composition: 0, dreamy: true },
];
Object.assign(globalThis, {
  engineBench: {
    start(index: number) {
      if (!cases[index]) throw new Error('Unknown benchmark scene');
      Object.assign(scene, cases[index], { phase: 0 });
      let step = 0;
      function frame() {
        host.__engineBench('begin', step);
        scene.phase = step / 60;
        scene.draw();
        host.__engineBench('encoded', step);
        // Include the ordinary synchronous batch commit in CPU submission time.
        (scene.canvas as OffscreenCanvas & { flush(): void }).flush();
        host.__engineBench('end', step);
        if (++step < 345) requestAnimationFrame(frame);
        else host.__engineBench('done', index);
      }
      requestAnimationFrame(frame);
    },
    async snapshot(index: number) {
      Object.assign(scene, cases[index], { phase: 0 });
      scene.draw();
      const blob = await scene.canvas.convertToBlob({ type: 'image/png' });
      host.__engineBench('pixels', index, new Uint8Array(await blob.arrayBuffer()));
    },
    close() {
      scene.dispose();
    },
  },
});
scene.draw();
runApp(CanvasView(scene.canvas, { width: 880, height: 480 }));
host.__engineBench('ready', 0);
