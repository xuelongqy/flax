import type {} from '@flax/canvas/globals';
import type {} from '@flax/core/host';
import { CanvasView } from '@flax/canvas';
import { runApp } from '@flax/flutter/widgets';

const host = globalThis as unknown as {
  __pacing(op: string, step: number): void;
};
const canvas = new OffscreenCanvas(128, 128);
const context = canvas.getContext('2d')!;
let retained: { value: number }[] = [];
Object.assign(globalThis, {
  pacing: {
    start(mode: number) {
      let step = 0;
      function frame() {
        host.__pacing('begin', step);
        if (mode >= 2) {
          context.fillStyle = step % 2 ? '#245c48' : '#4ba090';
          context.fillRect(0, 0, 128, 128);
          context.fillStyle = '#fff';
          context.fillRect(step % 120, 60, 8, 8);
          (canvas as OffscreenCanvas & { flush(): void }).flush();
        }
        if (mode === 3) {
          retained = Array.from({ length: 8192 }, (_, i) => ({ value: step + i }));
          if (retained[8191]!.value !== step + 8191) throw Error('Allocation probe');
        }
        host.__pacing('end', step);
        if (++step < 390) requestAnimationFrame(frame);
        else host.__pacing('done', step);
      }
      requestAnimationFrame(frame);
    },
    close() { retained = []; },
  },
});
runApp(CanvasView(canvas, { width: 128, height: 128 }));
host.__pacing('ready', 0);
