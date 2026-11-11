import { REVISION } from 'three/webgpu';
import { verifyThreeFeatures } from './three-features.js';
import { verifyThreeAdvanced } from './three-advanced.js';
import { verifyThreeKtxWorkers } from './three-ktx-workers.js';

let resume;
const assert = (condition, message) => {
  if (!condition) throw Error(message);
};
const exchange = (value, transfer = []) =>
  new Promise((resolve) => {
    resume = resolve;
    postMessage(value, transfer);
  });

async function run({ action, canvas, baseUrl }) {
  assert(
    typeof window === 'undefined' &&
      typeof document === 'undefined' &&
      typeof Image === 'undefined' &&
      new OffscreenCanvas(1, 1).getContext('2d') === null,
    'Three.js renderer Worker must use the real DOM-free Worker environment',
  );
  globalThis.__threeModelBaseUrl = baseUrl;
  if (action === 'arm') {
    // Pause with the real renderer, texture, and nested decoder alive for Session close.
    let nestedWorkers = 0;
    await verifyThreeKtxWorkers(assert, {
      canvas,
      keepAnimating: true,
      onGpuError: (error) => postMessage({ type: 'error', error }),
      onDecoderReady: (value) => {
        nestedWorkers = value.workers;
      },
      onCapture: async () => {
        postMessage({ type: 'armed', renderer: 'WebGPURenderer', nestedWorkers });
        await new Promise(() => {});
      },
    });
    return;
  }
  const adapter = await navigator.gpu.requestAdapter();
  assert(adapter, 'Three.js renderer Worker requires a real Metal adapter');
  const device = await adapter.requestDevice();
  const errors = [];
  device.addEventListener('uncapturederror', (event) =>
    errors.push(event.error.message),
  );
  const options = {
    canvas,
    animationLoop: true,
    reportImage: (value) =>
      postMessage({ type: 'image', ...value, name: 'renderer-worker-' + value.name }),
    onCapture: async (name, values, width, height) => {
      const pixels = Uint8Array.from(values);
      await exchange({ type: 'frame', name, width, height, pixels }, [pixels.buffer]);
    },
    onDecoderReady: (value) => exchange({ type: 'nested', ...value }),
    onGpuError: (error) => postMessage({ type: 'error', error }),
  };
  let receipt;
  try {
    const features = await verifyThreeFeatures(device, assert, options);
    const advanced = await verifyThreeAdvanced(device, assert, options);
    assert(
      advanced.texturedExports.length === 0 && advanced.texturedExportSkip,
      'Worker image export correctly retains the Canvas 2D boundary',
    );
    const ktx = await verifyThreeKtxWorkers(assert, options);
    await device.queue.onSubmittedWorkDone();
    assert(errors.length === 0, 'Three.js Worker GPU errors: ' + errors.join('; '));
    receipt = {
      type: 'complete',
      version: REVISION,
      domFree: true,
      features,
      advanced,
      ktx,
    };
  } finally {
    canvas.getContext('webgpu')?.unconfigure();
    device.destroy();
  }
  postMessage(receipt);
}

let started = false;
self.onmessage = ({ data }) => {
  if (data.action === 'continue') {
    const resolve = resume;
    resume = undefined;
    resolve?.();
    return;
  }
  if (started) return;
  started = true;
  run(data).catch((error) =>
    postMessage({ type: 'error', error: error.stack ?? String(error) }),
  );
};
