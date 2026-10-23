import { Afterglow } from '../../packages/flax_canvas/example/js/src/drawing.ts';
import { cases, animate, configure, warmup } from './afterglow_cases.ts';

const canvas = document.querySelector('canvas');
const scene = new Afterglow(canvas.transferControlToOffscreen());
const output = document.querySelector('pre');
const start = document.querySelector('button');
const downloads = document.querySelector('#downloads');
scene.draw();
const stats = (values) => {
  const sorted = [...values].sort((a, b) => a - b);
  return {
    p50: sorted[Math.round((sorted.length - 1) * 0.5)],
    p95: sorted[Math.round((sorted.length - 1) * 0.95)],
  };
};
async function download(blob, name) {
  const response = await fetch(name, { method: 'POST', body: blob });
  if (!response.ok) throw new Error(`Cannot save ${name}: ${response.status}`);
  const link = document.createElement('a');
  link.href = name;
  link.download = name;
  link.textContent = name;
  downloads.append(link, document.createElement('br'));
}
start.onclick = async () => {
  start.disabled = true;
  const receipt = {
    userAgent: navigator.userAgent,
    dpr: devicePixelRatio,
    backing: [880, 480],
    phaseStep: 1 / 60,
    warmup,
    pixelReadbackDuringFrames: false,
    results: [],
  };
  try {
    for (let index = 0; index < cases.length; index++) {
      output.textContent =
        `Running ${cases[index].name}. Keep this window visible.\n` +
        JSON.stringify(receipt, null, 2);
      const timestamps = [],
        cpu = [];
      let started;
      await animate(
        scene,
        index,
        (step, time) => {
          if (document.hidden) throw new Error('Page was hidden during sampling');
          if (step >= warmup) timestamps.push(time);
          started = performance.now();
        },
        (step) => {
          if (step >= warmup) cpu.push(performance.now() - started);
        },
      );
      const intervals = timestamps.slice(1).map((v, i) => v - timestamps[i]);
      receipt.results.push({
        name: cases[index].name,
        frames: timestamps.length,
        fps: ((timestamps.length - 1) * 1000) / (timestamps.at(-1) - timestamps[0]),
        cpu_ms: stats(cpu),
        interval_ms: stats(intervals),
        timestamps_ms: timestamps,
        cpu_raw_ms: cpu,
      });
    }
    // Pixel export is deliberately outside every timed animation interval.
    for (let index = 0; index < cases.length; index++) {
      configure(scene, index);
      scene.draw();
      await download(
        await scene.canvas.convertToBlob({ type: 'image/png' }),
        `browser-${cases[index].name}.png`,
      );
    }
    receipt.complete = true;
    output.textContent = JSON.stringify(receipt, null, 2);
    await download(
      new Blob([output.textContent], { type: 'application/json' }),
      'afterglow-browser.json',
    );
  } catch (error) {
    output.textContent = String(error);
  }
  start.disabled = false;
};
