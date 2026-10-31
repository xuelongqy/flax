import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

export async function verifyThreeWorkers(assert) {
  const loader = new DRACOLoader();
  loader.setWorkerLimit(1);
  loader.setDecoderPath(globalThis.__threeModelBaseUrl + 'draco/');
  const clock = () => performance.now();
  try {
    const bytes = await (
      await fetch(globalThis.__threeModelBaseUrl + 'worker-quad.drc')
    ).arrayBuffer();
    const decode = (input) =>
      new Promise((resolve, reject) => loader.parse(input, resolve, reject));
    const start = clock();
    const input = bytes.slice(0);
    const first = await decode(input);
    const coldMs = clock() - start;
    assert(input.byteLength === 0, 'DRACOLoader transfers its compressed ArrayBuffer');
    assert(
      loader.workerPool.length === 1 && loader.workerPool[0] instanceof Worker,
      'DRACOLoader uses a real Dedicated Worker',
    );
    assert(
      first.attributes.position.count === 4 && first.index.count === 6,
      'Worker Wasm decoder returns the original quad topology',
    );
    first.computeBoundingBox();
    assert(
      first.boundingBox.min.x === -1 &&
        first.boundingBox.max.x === 1 &&
        first.boundingBox.min.y === -1 &&
        first.boundingBox.max.y === 1,
      'Worker Wasm decoder preserves the original quad bounds',
    );
    const repeat = clock();
    const second = await decode(bytes.slice(0));
    const reusedMs = clock() - repeat;
    assert(
      second.attributes.position.count === 4 && second.index.count === 6,
      'Reused Dedicated Worker decodes a second independent task',
    );
    first.dispose();
    second.dispose();
    return {
      decoder: 'DRACOLoader',
      version: '0.186.1',
      workerCount: loader.workerPool.length,
      inputBytes: bytes.byteLength,
      coldMs,
      reusedMs,
    };
  } finally {
    loader.dispose();
  }
}
