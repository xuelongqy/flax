import * as THREE from 'three/webgpu';
import { KTX2Loader } from 'three/addons/loaders/KTX2Loader.js';
import { readTexturePixels } from './images.js';

export async function verifyThreeKtxWorkers(assert, options = {}) {
  const adapter = await navigator.gpu.requestAdapter();
  const compressed = adapter.features.has('texture-compression-bc');
  const device = await adapter.requestDevice({
    requiredFeatures: compressed ? ['texture-compression-bc'] : [],
  });
  const gpuErrors = [];
  const failed = (error) => {
    gpuErrors.push(error);
    options.onGpuError?.(error);
  };
  device.addEventListener('uncapturederror', (event) => failed(event.error.message));
  const canvas = options.canvas ?? new OffscreenCanvas(16, 16);
  const renderer = new THREE.WebGPURenderer({ canvas, device, antialias: false });
  const geometry = new THREE.PlaneGeometry(2, 2);
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
  camera.position.z = 1;
  const target = device.createTexture({
    size: [16, 16],
    format: 'rgba8unorm',
    usage:
      GPUTextureUsage.COPY_DST |
      GPUTextureUsage.COPY_SRC |
      GPUTextureUsage.RENDER_ATTACHMENT,
  });
  const results = [];
  try {
    await renderer.init();
    renderer.setSize(16, 16, false);
    for (const mode of ['etc1s', 'uastc']) {
      const loader = new KTX2Loader()
        .setWorkerLimit(1)
        .setTranscoderPath(globalThis.__threeModelBaseUrl + 'basis/');
      loader.detectSupport(renderer);
      const textures = [];
      let material;
      try {
        const bytes = await (
          await fetch(globalThis.__threeModelBaseUrl + 'worker-red-' + mode + '.ktx2')
        ).arrayBuffer();
        const decode = (input) =>
          new Promise((resolve, reject) => loader.parse(input, resolve, reject));
        const firstInput = bytes.slice(0);
        const start = performance.now();
        const texture = await decode(firstInput);
        const coldMs = performance.now() - start;
        textures.push(texture);
        assert(
          firstInput.byteLength === 0,
          'KTX2Loader transfers compressed ' + mode + ' input',
        );
        assert(
          loader.workerPool.workers.length === 1 &&
            loader.workerPool.workers[0] instanceof Worker,
          'KTX2Loader runs its Wasm transcoder in a real Dedicated Worker',
        );
        await options.onDecoderReady?.({
          mode,
          workers: loader.workerPool.workers.length,
        });
        assert(
          texture.image.width === 8 &&
            texture.image.height === 8 &&
            texture.mipmaps[0].data.byteLength > 0,
          'KTX2Loader preserves original texture dimensions and returns transcoded bytes',
        );
        const secondInput = bytes.slice(0),
          repeat = performance.now();
        const second = await decode(secondInput);
        const reusedMs = performance.now() - repeat;
        textures.push(second);
        assert(
          secondInput.byteLength === 0 &&
            second.format === texture.format &&
            second.mipmaps[0].data.every(
              (value, i) => value === texture.mipmaps[0].data[i],
            ),
          'Reused KTX2 Worker returns identical pixels for identical input',
        );
        material = new THREE.MeshBasicMaterial({ map: texture });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        await new Promise(requestAnimationFrame);
        renderer.render(scene, camera);
        const bitmap = await createImageBitmap(canvas);
        try {
          device.queue.copyExternalImageToTexture(
            { source: bitmap },
            { texture: target },
            [16, 16],
          );
        } finally {
          bitmap.close();
        }
        const pixels = await readTexturePixels(device, target, 16, 16);
        const at = (8 * 16 + 8) * 4;
        assert(
          pixels[at] > 220 &&
            pixels[at + 1] < 30 &&
            pixels[at + 2] < 30 &&
            pixels[at + 3] === 255,
          'Worker-decoded ' +
            mode +
            ' texture uploads and renders its original red pixels',
        );
        if (options.keepAnimating)
          renderer.setAnimationLoop(() => {
            try {
              renderer.render(scene, camera);
            } catch (error) {
              renderer.setAnimationLoop(null);
              failed(error.stack ?? String(error));
            }
          });
        await options.onCapture?.('ktx-' + mode, pixels, 16, 16);
        scene.remove(mesh);
        results.push({
          mode,
          inputBytes: bytes.byteLength,
          outputBytes: texture.mipmaps[0].data.byteLength,
          format: texture.format,
          workerCount: loader.workerPool.workers.length,
          coldMs,
          reusedMs,
          centerPixel: Array.from(pixels.slice(at, at + 4)),
        });
      } finally {
        material?.dispose();
        for (const texture of textures) texture.dispose();
        loader.dispose();
      }
    }
    return {
      decoder: 'KTX2Loader',
      version: '0.186.1',
      compressedBC: compressed,
      results,
    };
  } finally {
    geometry.dispose();
    await renderer.dispose();
    target.destroy();
    await device.queue.onSubmittedWorkDone();
    device.destroy();
    assert(gpuErrors.length === 0, 'KTX2 renderer GPU errors: ' + gpuErrors.join('; '));
  }
}
