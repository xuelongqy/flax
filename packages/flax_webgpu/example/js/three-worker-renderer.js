const requiredFrames = [
  'features-model-textured-cube-gltf',
  'features-model-textured-cube-glb',
  ...['DirectionalLight', 'PointLight', 'SpotLight'].flatMap((type) =>
    ['lit', 'shadow'].map((phase) => 'features-' + type + '-' + phase),
  ),
  ...['plain', 'inverted', 'bloom'].map((effect) => 'features-post-' + effect),
  ...['skinned', 'morph'].flatMap((model) =>
    ['rest', 'pose', 'restored'].map((pose) => 'advanced-' + model + '-' + pose),
  ),
  'advanced-meshopt',
  'ktx-etc1s',
  'ktx-uastc',
];
const displayedFrames = new Set([
  'features-model-textured-cube-glb',
  'features-post-plain',
  'features-post-inverted',
  'features-post-bloom',
  'advanced-skinned-rest',
  'advanced-skinned-pose',
  'advanced-skinned-restored',
  'ktx-uastc',
]);
const state = () => JSON.parse(__threeWorkerState());
const workerUrl = () => globalThis.__threeModelBaseUrl + 'three-renderer-worker.js';

export async function verifyThreeWorkerRenderer(assert, rootFrames, show, report) {
  const idleDeadline = performance.now() + 5000;
  while (state().workers.some(Boolean) && performance.now() < idleDeadline)
    await new Promise((resolve) => setTimeout(resolve, 5));
  assert(
    state().workers.every((value) => value === 0),
    'Previous decoder Workers retire',
  );
  for (const name of requiredFrames)
    assert(rootFrames.has(name), 'Root reference rendered ' + name);
  const before = state();
  const html = document.createElement('canvas');
  html.width = html.height = 192;
  show(html);
  const canvas = html.transferControlToOffscreen();
  const worker = new Worker(workerUrl(), { type: 'module' });
  const comparisons = [],
    displays = [],
    nested = [];
  let receipt;
  try {
    receipt = await new Promise((resolve, reject) => {
      const timeout = setTimeout(
        () => reject(Error('Three.js renderer Worker timed out')),
        120000,
      );
      const failed = (error) => {
        clearTimeout(timeout);
        reject(error);
      };
      worker.onerror = (event) => failed(Error(event.message));
      worker.onmessage = ({ data }) => {
        (async () => {
          if (data.type === 'error') throw Error(data.error);
          if (data.type === 'image') {
            const { type, ...image } = data;
            report(image);
            return;
          }
          if (data.type === 'nested') {
            const live = state().workers;
            assert(
              data.workers === 1 && live.every((count) => count >= 2),
              'Rendering Worker owns an active nested KTX2 Worker',
            );
            nested.push({ mode: data.mode, workers: live });
          } else if (data.type === 'frame') {
            const reference = rootFrames.get(data.name);
            assert(
              requiredFrames.includes(data.name) && reference,
              'Worker rendered a required original scene: ' + data.name,
            );
            assert(
              !comparisons.some((row) => row.name === data.name),
              'Each Worker frame is checked once: ' + data.name,
            );
            assert(
              reference.width === data.width &&
                reference.height === data.height &&
                data.pixels.length === reference.pixels.length,
              'Root and Worker use identical dimensions: ' + data.name,
            );
            let maxError = 0;
            for (let i = 0; i < reference.pixels.length; i++)
              maxError = Math.max(
                maxError,
                Math.abs(reference.pixels[i] - data.pixels[i]),
              );
            assert(maxError <= 1, data.name + ' root/Worker pixel error: ' + maxError);
            comparisons.push({
              name: data.name,
              width: data.width,
              height: data.height,
              maxError,
            });
            if (displayedFrames.has(data.name)) {
              let binary = '';
              for (let i = 0; i < data.pixels.length; i += 8192)
                binary += String.fromCharCode(...data.pixels.subarray(i, i + 8192));
              globalThis.__threeWorkerCapture = null;
              report({
                kind: 'three-worker-capture',
                name: data.name,
                width: data.width,
                height: data.height,
                base64: btoa(binary),
              });
              const deadline = performance.now() + 5000;
              while (
                globalThis.__threeWorkerCapture === null &&
                performance.now() < deadline
              )
                await new Promise(requestAnimationFrame);
              const capture = globalThis.__threeWorkerCapture;
              assert(
                capture?.name === data.name &&
                  capture.coloredPixels >= 100 &&
                  capture.meanError <= 6 &&
                  capture.layout.join() === [data.width, data.height].join(),
                'Actual Worker canvas composites in Flutter: ' +
                  data.name +
                  ' ' +
                  JSON.stringify(capture),
              );
              displays.push(capture);
            }
          } else if (data.type === 'complete') {
            clearTimeout(timeout);
            resolve(data);
            return;
          } else throw Error('Unexpected Three.js renderer Worker message');
          worker.postMessage({ action: 'continue' });
        })().catch(failed);
      };
      worker.postMessage(
        { action: 'run', canvas, baseUrl: globalThis.__threeModelBaseUrl },
        [canvas],
      );
    });
    assert(
      canvas.width === 0 && receipt.domFree && receipt.version === '186',
      'Upstream Three.js WebGPURenderer runs in the DOM-free Worker',
    );
    assert(
      receipt.advanced.animationLoopFrames === 3,
      'Upstream Worker renderer animation loop renders three actual frames',
    );
    assert(
      comparisons.length === requiredFrames.length &&
        requiredFrames.every((name) => comparisons.some((row) => row.name === name)),
      'Every required root/Worker scene has actual pixel comparison',
    );
    assert(
      displays.length === displayedFrames.size && nested.length === 2,
      'Flutter displays all required Worker frames and both nested KTX2 modes ran',
    );
  } finally {
    worker.terminate();
    rootFrames.clear();
  }
  const deadline = performance.now() + 5000;
  while (state().workers.some(Boolean) && performance.now() < deadline)
    await new Promise((resolve) => setTimeout(resolve, 5));
  const after = state();
  assert(
    after.workers.every((value) => value === 0),
    'Three.js renderer and nested decoder Workers retire after disposal/termination',
  );
  return {
    version: receipt.version,
    domFree: receipt.domFree,
    pixelSnapshots: true,
    comparisons,
    displays,
    nested,
    features: receipt.features,
    advanced: receipt.advanced,
    ktx: receipt.ktx,
    workersBefore: before.workers,
    workersAfter: after.workers,
  };
}

export async function armThreeWorkerRendererForSessionClose(report) {
  const worker = new Worker(workerUrl(), { type: 'module' });
  try {
    const armed = await new Promise((resolve, reject) => {
      let ready = false;
      const timeout = setTimeout(
        () => reject(Error('Three.js Session-close Worker timed out')),
        30000,
      );
      const failed = (error) => {
        clearTimeout(timeout);
        if (ready) report({ error: error.stack ?? String(error) });
        else reject(error);
      };
      worker.onerror = (event) => failed(Error(event.message));
      worker.onmessage = ({ data }) => {
        if (data.error) failed(Error(data.error));
        else {
          clearTimeout(timeout);
          ready = true;
          resolve(data);
        }
      };
      const canvas = new OffscreenCanvas(16, 16);
      worker.postMessage(
        { action: 'arm', canvas, baseUrl: globalThis.__threeModelBaseUrl },
        [canvas],
      );
    });
    if (
      armed.type !== 'armed' ||
      armed.renderer !== 'WebGPURenderer' ||
      armed.nestedWorkers !== 1
    )
      throw Error(
        'Session close must receive a real Three.js renderer and nested decoder',
      );
    return { armed: true, nestedWorkers: armed.nestedWorkers };
  } catch (error) {
    worker.terminate();
    throw error;
  }
}
