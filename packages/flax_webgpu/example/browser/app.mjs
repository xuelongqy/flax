import {
  Studio,
  scenes,
  qualities,
  resolutions,
  palettes,
  benchmarkCases,
} from '../js/src/studio.ts';
const canvas = document.querySelector('canvas'),
  status = document.querySelector('#status'),
  detail = document.querySelector('#detail'),
  fps = document.querySelector('#fps'),
  result = document.querySelector('#result');
let studio;
function controls() {
  for (const button of document.querySelectorAll('[data-choice]'))
    button.setAttribute(
      'aria-pressed',
      String(studio?.settings[button.dataset.choice] === Number(button.dataset.index)),
    );
  document.querySelector('#motion').textContent = studio?.playing
    ? 'Pause motion'
    : 'Play motion';
  document.querySelector('#submission').textContent =
    `Cube submission: ${studio?.settings.individual ? 'per-object' : 'instanced'}`;
  for (const button of document.querySelectorAll('button'))
    button.disabled = !studio || studio.measuring;
}
function update(value) {
  status.textContent =
    value.error ||
    `${studio?.adapter.device || studio?.adapter.description || studio?.adapter.vendor || 'WebGPU'} · ready`;
  detail.textContent = studio?.detail || 'Preparing GPU resources';
  fps.textContent = value.measuring
    ? 'Sampling: 60 warmup frames, then 8 seconds…'
    : value.playing
      ? `${value.submittedFps.toFixed(1)} scene FPS · ${value.completedFps.toFixed(1)} GPU completions/s · CPU ${value.encodeMs.toFixed(2)} ms`
      : 'Paused · move the scene or press Play motion';
  controls();
}
for (const [key, values] of Object.entries({
  scene: scenes,
  quality: qualities,
  resolution: resolutions,
  palette: palettes,
})) {
  const container = document.querySelector(`#${key}`);
  values.forEach((value, index) => {
    const button = document.createElement('button');
    button.textContent = value;
    button.dataset.choice = key;
    button.dataset.index = index;
    button.onclick = () => {
      studio.configure({ [key]: index });
      result.textContent = '';
      controls();
    };
    container.append(button);
  });
}
document.querySelector('#motion').onclick = () =>
  studio.playing ? studio.pause() : studio.play();
document.querySelector('#center').onclick = () => studio.move(0, 0);
document.querySelector('#reset').onclick = () => {
  studio.reset();
  result.textContent = '';
  controls();
};
document.querySelector('#submission').onclick = () => {
  studio.configure({ individual: !studio.settings.individual });
  controls();
};
document.querySelector('#restart').onclick = () => void start();
document.querySelector('#sample').onclick = async () => {
  try {
    const r = await studio.benchmark('Current scene', studio.settings);
    result.textContent = `${r.submittedFps.toFixed(1)} submitted FPS · ${r.completedFps.toFixed(1)} GPU-completed FPS · CPU P95 ${r.encodeMs.p95.toFixed(2)} ms`;
  } catch (error) {
    result.textContent = String(error);
  }
};
canvas.onpointerdown = (e) => {
  canvas.setPointerCapture(e.pointerId);
  move(e);
};
canvas.onpointermove = (e) => {
  if (canvas.hasPointerCapture(e.pointerId)) move(e);
};
function move(e) {
  const r = canvas.getBoundingClientRect();
  studio?.move(
    ((e.clientX - r.left) / r.width) * 2 - 1,
    -(((e.clientY - r.top) / r.height) * 2 - 1),
  );
}
async function start() {
  globalThis.studioReady = false;
  studio?.close();
  studio = undefined;
  controls();
  try {
    studio = await Studio.create(canvas, update);
    update({
      playing: false,
      measuring: false,
      submittedFps: 0,
      completedFps: 0,
      encodeMs: 0,
      error: '',
    });
    globalThis.studioReady = true;
  } catch (error) {
    status.textContent = `GPU unavailable: ${String(error)}`;
    controls();
    document.querySelector('#restart').disabled = false;
  }
}
globalThis.runStudioBenchmark = async (options = {}) => {
  if (!studio) throw Error('GPU not ready');
  const cases = [];
  for (const index of options.indices ?? benchmarkCases.map((_, i) => i)) {
    const entry = benchmarkCases[index];
    const measured = await studio.benchmark(
      entry.name,
      entry,
      options.duration ?? 8000,
    );
    studio.draw();
    const snapshot = canvas.toDataURL('image/png');
    const check = document.createElement('canvas');
    check.width = canvas.width;
    check.height = canvas.height;
    const bitmap = await createImageBitmap(await (await fetch(snapshot)).blob());
    const context = check.getContext('2d', { willReadFrequently: true });
    context.drawImage(bitmap, 0, 0);
    bitmap.close();
    const rgba = context.getImageData(0, 0, check.width, check.height).data;
    let colored = 0;
    for (let i = 0; i < rgba.length; i += 4)
      if (
        Math.max(rgba[i], rgba[i + 1], rgba[i + 2]) -
          Math.min(rgba[i], rgba[i + 1], rgba[i + 2]) >
        15
      )
        colored++;
    if (colored < 1000) throw Error(`${entry.name}: no rendered color`);
    cases.push({ ...measured, colored, snapshot });
  }
  return {
    passed: true,
    cases,
    sourceSha256: globalThis.__studioSourceSha256,
    adapter: {
      vendor: studio.adapter.vendor,
      description: studio.adapter.description,
      device: studio.adapter.device,
    },
    userAgent: navigator.userAgent,
    viewport: { width: innerWidth, height: innerHeight, devicePixelRatio },
  };
};
window.addEventListener('pagehide', () => studio?.close());
void start();
