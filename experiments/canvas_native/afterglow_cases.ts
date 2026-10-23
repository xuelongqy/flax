import { Afterglow } from '../../packages/flax_canvas/example/js/src/drawing';

export const cases = [
  { name: 'bloom-crisp', composition: 0, dreamy: false },
  { name: 'bloom-soft', composition: 0, dreamy: true },
  { name: 'orbit-crisp', composition: 1, dreamy: false },
  { name: 'orbit-soft', composition: 1, dreamy: true },
  { name: 'weave-crisp', composition: 2, dreamy: false },
  { name: 'weave-soft', composition: 2, dreamy: true },
];
export const warmup = 30;
export const frames = 120;

export function configure(scene: Afterglow, index: number): void {
  const item = cases[index];
  if (!item) throw new Error('Unknown Afterglow case');
  scene.reset();
  Object.assign(scene, item, { palette: 0, phase: 0, center: { x: 440, y: 254 } });
}

// Identical geometry per submitted frame, independent of the host's frame rate.
export function animate(
  scene: Afterglow,
  index: number,
  begin: (step: number, timestamp: number) => void,
  end: (step: number) => void,
  encoded: () => void = () => {},
): Promise<void> {
  configure(scene, index);
  let step = 0;
  return new Promise((resolve, reject) => {
    function frame(timestamp: number): void {
      try {
        begin(step, timestamp);
        scene.phase = step / 60;
        scene.draw();
        encoded();
        // Flax's explicit submission includes decoding and image ref releases.
        (scene.canvas as OffscreenCanvas & { flush?: () => void }).flush?.();
        end(step);
        if (++step < warmup + frames) requestAnimationFrame(frame);
        else resolve();
      } catch (error) {
        reject(error);
      }
    }
    requestAnimationFrame(frame);
  });
}
