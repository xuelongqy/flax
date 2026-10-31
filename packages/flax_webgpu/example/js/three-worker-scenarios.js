import * as THREE from 'three/webgpu';
import { texture } from 'three/tsl';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { KTX2Loader } from 'three/addons/loaders/KTX2Loader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { readTexturePixels } from './images.js';

const base = () => globalThis.__threeModelBaseUrl;
const state = () => JSON.parse(__threeWorkerState());
const bytes = async (name) => (await fetch(base() + name)).arrayBuffer();
const equal = (a, b) => a.length === b.length && a.every((value, i) => value === b[i]);

async function retired(assert) {
  const deadline = performance.now() + 5000;
  while (state().workers.some((value) => value !== 0) && performance.now() < deadline)
    await new Promise((resolve) => setTimeout(resolve, 5));
  const result = state();
  assert(
    result.workers.every((value) => value === 0),
    'Decoder Workers retire before Session close',
  );
  return result;
}

// Keep a separate post-completion window for delayed GC; validate output afterward.
async function measured(action) {
  const before = state();
  let ticks = 0,
    ticksDuringWork = 0,
    maxGapMs = 0,
    maxGapDuringWorkMs = 0,
    completedAt,
    last = performance.now();
  const timer = setInterval(() => {
    const now = performance.now();
    maxGapMs = Math.max(maxGapMs, now - last);
    if (completedAt === undefined) {
      ticksDuringWork++;
      maxGapDuringWorkMs = Math.max(maxGapDuringWorkMs, now - last);
    }
    last = now;
    ticks++;
  }, 1);
  const start = performance.now();
  try {
    const output = await action();
    completedAt = performance.now();
    maxGapDuringWorkMs = Math.max(maxGapDuringWorkMs, completedAt - last);
    await new Promise((resolve) => setTimeout(resolve, 30));
    const end = performance.now(),
      after = state();
    return {
      output,
      metrics: {
        completedMs: completedAt - start,
        observationMs: 30,
        observedMs: end - start,
        ticks,
        ticksDuringWork,
        maxGapDuringWorkMs,
        maxGapMs: Math.max(maxGapMs, end - last),
        rssBefore: before.rss,
        rssAfter: after.rss,
        processPeakRss: after.peakRss,
      },
    };
  } finally {
    clearInterval(timer);
  }
}

export async function verifyThreeWorkerScenarios(assert) {
  const NativeWorker = globalThis.Worker,
    observed = [];
  // Observe the original library messages; never replace decoder work or results.
  globalThis.Worker = class extends NativeWorker {
    constructor(...args) {
      super(...args);
      this.receipt = { tasks: 0, replies: 0, errors: 0 };
      observed.push(this.receipt);
      this.addEventListener('message', ({ data }) => {
        if (data?.action || ['decode', 'transcode', 'error'].includes(data?.type)) {
          this.receipt.replies++;
          if (data.action === 'reject' || data.type === 'error') this.receipt.errors++;
        }
      });
    }
    postMessage(message, transfer) {
      if (message?.id || ['decode', 'transcode'].includes(message?.type))
        this.receipt.tasks++;
      return super.postMessage(message, transfer);
    }
  };
  const report = { version: '0.186.1', meshopt: [], textures: [], combined: [] };
  try {
    await retired(assert);
    await MeshoptDecoder.ready;
    const meta = await (await fetch(base() + 'worker-grid.json')).json(),
      input = new Uint8Array(await bytes('worker-grid.meshopt.bin')),
      expected = new Float32Array(meta.count * 8);
    for (let i = 0; i < meta.count; i++)
      expected.set(
        [i % 256, i >> 8, (i % 17) / 16, 0, 0, 1, (i % 256) / 255, (i >> 8) / 255],
        i * 8,
      );
    const golden = new Uint8Array(expected.buffer);
    report.meshoptInput = meta;
    // Forward/reverse order controls for drift. Each pool gets identical fresh inputs.
    for (const workers of [0, 1, 2, 2, 1, 0]) {
      const offset = observed.length;
      const cold = await measured(async () => {
        MeshoptDecoder.useWorkers(workers);
        return Promise.all(
          Array.from({ length: 2 }, () =>
            MeshoptDecoder.decodeGltfBufferAsync(
              meta.count,
              meta.stride,
              input.slice(),
              meta.mode,
            ),
          ),
        );
      });
      for (const output of cold.output)
        assert(equal(output, golden), 'Cold Meshopt bytes equal original geometry');
      const warmInputs = Array.from({ length: 8 }, () => input.slice());
      const reused = await measured(() =>
        Promise.all(
          warmInputs.map((source) =>
            MeshoptDecoder.decodeGltfBufferAsync(
              meta.count,
              meta.stride,
              source,
              meta.mode,
            ),
          ),
        ),
      );
      for (const output of reused.output)
        assert(equal(output, golden), 'Reused Meshopt bytes equal original geometry');
      const dispatch = observed.slice(offset);
      assert(
        dispatch.length === workers &&
          dispatch.every(
            (worker) => worker.tasks > 0 && worker.replies === worker.tasks,
          ),
        'Meshopt dispatches and completes real work on every requested Worker',
      );
      if (workers)
        assert(
          cold.metrics.ticksDuringWork > 0,
          'Main timer advances while Meshopt Workers decode',
        );
      report.meshopt.push({
        workers,
        coldTasks: 2,
        reusedTasks: 8,
        cold: cold.metrics,
        reused: reused.metrics,
        dispatch,
        live: state().workers,
      });
      MeshoptDecoder.useWorkers(0);
      report.meshopt.at(-1).retired = (await retired(assert)).workers;
    }
    MeshoptDecoder.useWorkers(2);
    const corruptStart = observed.length - 2;
    const corrupt = await Promise.allSettled([
      MeshoptDecoder.decodeGltfBufferAsync(4, 32, new Uint8Array([0]), 'ATTRIBUTES'),
      MeshoptDecoder.decodeGltfBufferAsync(6, 2, new Uint8Array([0]), 'TRIANGLES'),
    ]);
    assert(
      corrupt.every(
        (result) =>
          result.status === 'rejected' && /Malformed/.test(String(result.reason)),
      ),
      'Corrupt Meshopt resources reject through both real Workers',
    );
    report.meshoptErrors = observed.slice(corruptStart);
    MeshoptDecoder.useWorkers(0);
    await retired(assert);

    const adapter = await navigator.gpu.requestAdapter(),
      bc = adapter.features.has('texture-compression-bc'),
      device = await adapter.requestDevice({
        requiredFeatures: bc ? ['texture-compression-bc'] : [],
      }),
      canvas = document.createElement('canvas'),
      renderer = new THREE.WebGPURenderer({ canvas, device, antialias: false }),
      target = device.createTexture({
        size: [128, 128],
        format: 'rgba8unorm',
        usage:
          GPUTextureUsage.COPY_DST |
          GPUTextureUsage.COPY_SRC |
          GPUTextureUsage.RENDER_ATTACHMENT,
      }),
      scene = new THREE.Scene(),
      camera = new THREE.OrthographicCamera(-1.6, 1.6, 1.6, -1.6, 0.1, 10),
      geometry = new THREE.PlaneGeometry(2.4, 2.4),
      material = new THREE.MeshBasicMaterial({ transparent: true }),
      panel = new THREE.Mesh(geometry, material);
    const gpuErrors = [];
    device.onuncapturederror = (event) => gpuErrors.push(event.error.message);
    scene.background = new THREE.Color(0x101010);
    camera.position.z = 3;
    const capture = async (name) => {
      renderer.render(scene, camera);
      const bitmap = await createImageBitmap(canvas);
      try {
        device.queue.copyExternalImageToTexture(
          { source: bitmap },
          { texture: target },
          [128, 128],
        );
      } finally {
        bitmap.close();
      }
      const pixels = await readTexturePixels(device, target, 128, 128);
      if (name) {
        const png = new Uint8Array(await (await canvas.convertToBlob()).arrayBuffer());
        let binary = '';
        for (let i = 0; i < png.length; i += 8192)
          binary += String.fromCharCode(...png.subarray(i, i + 8192));
        __webGpuReport(
          JSON.stringify({
            kind: 'three-image',
            name: 'workers-' + name,
            base64: btoa(binary),
          }),
        );
      }
      return pixels;
    };
    const sampleError = (a, b, points) =>
      Math.max(
        ...points.flatMap(([x, y]) =>
          [0, 1, 2, 3].map((c) =>
            Math.abs(a[(y * 128 + x) * 4 + c] - b[(y * 128 + x) * 4 + c]),
          ),
        ),
      );
    const points = [
      [40, 40],
      [88, 40],
      [40, 88],
      [88, 88],
    ];
    let reference;
    try {
      await renderer.init();
      renderer.setSize(128, 128, false);
      reference = await new THREE.TextureLoader().loadAsync(
        base() + 'worker-pattern.png',
      );
      reference.colorSpace = THREE.SRGBColorSpace;
      reference.flipY = false;
      material.map = reference;
      scene.add(panel);
      const original = await capture();
      const readMip = async (map) => {
        const sample = texture(map).level(8),
          mipMaterial = new THREE.MeshBasicNodeMaterial({
            transparent: true,
            colorNode: sample.rgb,
            opacityNode: sample.a,
          });
        panel.material = mipMaterial;
        try {
          const pixels = await capture(),
            at = (64 * 128 + 64) * 4;
          return pixels.slice(at, at + 4);
        } finally {
          panel.material = material;
          mipMaterial.dispose();
        }
      };
      const referenceMip = await readMip(reference);
      report.compressedBC = bc;
      let rawUastc;
      for (const mode of ['etc1s', 'uastc', 'uastc-zstd']) {
        const loader = new KTX2Loader()
            .setWorkerLimit(2)
            .setTranscoderPath(base() + 'basis/'),
          textures = [],
          offset = observed.length;
        loader.detectSupport(renderer);
        try {
          const source = await bytes('worker-pattern-' + mode + '.ktx2'),
            header = new DataView(source);
          assert(
            header.getUint32(40, true) === 9 &&
              header.getUint32(44, true) ===
                (mode === 'etc1s' ? 1 : mode === 'uastc' ? 0 : 2),
            'Fixture reaches its actual mip/supercompression branch',
          );
          const decode = (buffer) =>
            new Promise((resolve, reject) => loader.parse(buffer, resolve, reject));
          const coldInputs = Array.from({ length: 4 }, () => source.slice(0));
          const cold = await measured(() => Promise.all(coldInputs.map(decode)));
          textures.push(...cold.output);
          const warmInputs = Array.from({ length: 4 }, () => source.slice(0));
          const reused = await measured(() => Promise.all(warmInputs.map(decode)));
          textures.push(...reused.output);
          assert(
            [...coldInputs, ...warmInputs].every((buffer) => buffer.byteLength === 0),
            'KTX2 tasks transfer fresh input identities, bypassing task cache',
          );
          const first = textures[0];
          assert(
            first.image.width === 256 && first.mipmaps.length === 9,
            'KTX2 returns every original mip',
          );
          assert(
            textures.every((texture) =>
              texture.mipmaps.every((mip, i) => equal(mip.data, first.mipmaps[i].data)),
            ),
            'Concurrent KTX2 results match every mip byte',
          );
          const dispatch = observed.slice(offset);
          assert(
            dispatch.length === 2 &&
              dispatch.every((worker) => worker.tasks === 4 && worker.replies === 4),
            'Both KTX2 Workers complete queued tasks',
          );
          material.map = first;
          material.needsUpdate = true;
          const rendered = await capture('texture-' + mode),
            error = sampleError(original, rendered, points);
          assert(
            error <= 8,
            'KTX2 alpha blending preserves original PNG sample pixels: ' + error,
          );
          const mipPixel = await readMip(first),
            mipError = Math.max(
              ...mipPixel.map((value, i) => Math.abs(value - referenceMip[i])),
            );
          assert(
            mipPixel.slice(0, 3).every((channel) => channel > 60 && channel < 240) &&
              mipError <= 8,
            'GPU samples terminal mip8 color/alpha against original PNG: ' + mipError,
          );
          if (mode === 'uastc') rawUastc = first.mipmaps.map((mip) => mip.data.slice());
          if (mode === 'uastc-zstd')
            assert(
              first.mipmaps.every((mip, i) => equal(mip.data, rawUastc[i])),
              'Zstd and uncompressed UASTC transcode to identical mip bytes',
            );
          const damaged = source.slice(0),
            damagedBytes = new Uint8Array(damaged),
            firstLevel = Number(header.getBigUint64(80, true));
          damagedBytes.fill(0, firstLevel);
          new DataView(damaged).setBigUint64(88, 1n, true);
          const failure = await Promise.allSettled([decode(damaged)]);
          assert(
            failure[0].status === 'rejected',
            'Corrupt KTX2 compressed payload rejects',
          );
          material.map = first;
          const recovered = await decode(source.slice(0));
          textures.push(recovered);
          assert(
            equal(recovered.mipmaps[0].data, first.mipmaps[0].data),
            'KTX2 Worker remains usable after decoder failure',
          );
          report.textures.push({
            mode,
            inputBytes: source.byteLength,
            outputBytes: first.mipmaps.reduce(
              (sum, mip) => sum + mip.data.byteLength,
              0,
            ),
            levels: first.mipmaps.length,
            coldTasks: 4,
            reusedTasks: 4,
            cold: cold.metrics,
            reused: reused.metrics,
            dispatch,
            sampleMaxError: error,
            terminalMip: 8,
            mipPixel,
            referenceMip,
            mipError,
            corruptRejected: true,
          });
        } finally {
          material.map = null;
          for (const texture of textures) texture.dispose();
          loader.dispose();
        }
        report.textures.at(-1).retired = (await retired(assert)).workers;
      }
      scene.remove(panel);

      const ktx = new KTX2Loader()
        .setWorkerLimit(2)
        .setTranscoderPath(base() + 'basis/');
      ktx.detectSupport(renderer);
      const loader = new GLTFLoader()
          .setMeshoptDecoder(MeshoptDecoder)
          .setKTX2Loader(ktx),
        loaded = [],
        mixers = [];
      MeshoptDecoder.useWorkers(2);
      try {
        let referenceRest, referencePose;
        for (const name of [
          'worker-reference.gltf',
          'worker-combined.gltf',
          'worker-combined.glb',
        ]) {
          const start = performance.now(),
            model = await loader.loadAsync(base() + name);
          const loadMs = performance.now() - start;
          loaded.push(model.scene);
          const mesh = model.scene.getObjectByName('CombinedPanel'),
            mixer = new THREE.AnimationMixer(model.scene);
          mixers.push([mixer, model.scene]);
          assert(
            mesh.geometry.index.count === 6 &&
              mesh.geometry.attributes.position.count === 4 &&
              model.animations.length === 1,
            'Combined asset preserves geometry and animation',
          );
          if (!name.includes('reference'))
            assert(
              mesh.material.map.isCompressedTexture &&
                mesh.material.map.mipmaps.length === 9,
              'GLTFLoader uses KHR_texture_basisu with all mips',
            );
          mixer.clipAction(model.animations[0]).play();
          scene.add(model.scene);
          camera.position.y = 0.6;
          camera.lookAt(0, 0.6, 0);
          mixer.setTime(0);
          await capture();
          const rest = await capture(name.replace('.', '-') + '-rest');
          mixer.setTime(0.5);
          assert(
            Math.abs(mesh.position.x - 0.65) < 0.000001,
            'Combined animation updates the loaded node',
          );
          const posed = await capture(name.replace('.', '-') + '-pose');
          let changed = 0;
          for (let i = 0; i < rest.length; i += 4)
            if (
              Math.abs(rest[i] - posed[i]) +
                Math.abs(rest[i + 1] - posed[i + 1]) +
                Math.abs(rest[i + 2] - posed[i + 2]) >
              40
            )
              changed++;
          assert(
            changed > 500,
            'Compressed textured animation changes real GPU pixels',
          );
          mixer.setTime(0);
          const restored = await capture();
          assert(
            sampleError(rest, restored, [
              [54, 54],
              [74, 54],
              [54, 74],
              [74, 74],
            ]) <= 1,
            'Animation restores original rendered pixels',
          );
          if (name.includes('reference')) {
            referenceRest = rest;
            referencePose = posed;
          }
          const restError = sampleError(referenceRest, rest, [
              [52, 52],
              [76, 52],
              [52, 76],
              [76, 76],
            ]),
            poseError = sampleError(referencePose, posed, [
              [78, 52],
              [102, 52],
              [78, 76],
              [102, 76],
            ]);
          assert(
            restError <= 8 && poseError <= 8,
            'Combined glTF/GLB rendering matches PNG reference in both poses',
          );
          report.combined.push({
            asset: name,
            loadMs,
            changedPixels: changed,
            restSampleMaxError: restError,
            poseSampleMaxError: poseError,
          });
          scene.remove(model.scene);
        }
      } finally {
        for (const [mixer, root] of mixers) {
          mixer.stopAllAction();
          mixer.uncacheRoot(root);
        }
        for (const model of loaded)
          model.traverse((object) => {
            if (!object.isMesh) return;
            object.geometry.dispose();
            object.material.map?.dispose();
            object.material.map?.image?.close?.();
            object.material.dispose();
          });
        ktx.dispose();
        MeshoptDecoder.useWorkers(0);
      }
      report.combinedRetired = (await retired(assert)).workers;

      const draco = new DRACOLoader()
          .setWorkerLimit(2)
          .setDecoderPath(base() + 'draco/'),
        offset = observed.length;
      try {
        const source = await bytes('worker-quad.drc'),
          decode = (data) =>
            new Promise((resolve, reject) => draco.parse(data, resolve, reject));
        const outputs = await Promise.all(
          Array.from({ length: 4 }, () => decode(source.slice(0))),
        );
        try {
          assert(
            outputs.every(
              (geometry) =>
                geometry.index.count === 6 && geometry.attributes.position.count === 4,
            ),
            'Concurrent DRACO tasks preserve topology',
          );
        } finally {
          for (const geometry of outputs) geometry.dispose();
        }
        const bad = await Promise.allSettled([
          decode(new Uint8Array([0, 1, 2, 3]).buffer),
        ]);
        assert(
          bad[0].status === 'rejected',
          'Corrupt DRACO resource rejects in Worker',
        );
        assert(
          observed.slice(offset).length === 2 &&
            observed.slice(offset).every((worker) => worker.tasks > 0),
          'DRACO dispatches to both Workers',
        );
        report.draco = {
          tasks: 4,
          corruptRejected: true,
          dispatch: observed.slice(offset),
        };
      } finally {
        draco.dispose();
      }
      report.draco.retired = (await retired(assert)).workers;
    } finally {
      reference?.dispose();
      reference?.image?.close?.();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      target.destroy();
      await device.queue.onSubmittedWorkDone();
      device.destroy();
      assert(
        gpuErrors.length === 0,
        'Worker scenario has no uncaptured GPU errors: ' + gpuErrors.join('; '),
      );
    }
    // Leave real library Workers alive deliberately; the host must reclaim them on close.
    MeshoptDecoder.useWorkers(2);
    const outputs = await Promise.all(
      Array.from({ length: 2 }, () =>
        MeshoptDecoder.decodeGltfBufferAsync(
          meta.count,
          meta.stride,
          input.slice(),
          meta.mode,
        ),
      ),
    );
    assert(
      outputs.every((output) => equal(output, golden)),
      'Session-owned Meshopt Workers complete original work',
    );
    report.sessionOwned = state();
    assert(
      report.sessionOwned.workers.every((value) => value === 2),
      'Session close receives two live library Workers',
    );
    return report;
  } finally {
    globalThis.Worker = NativeWorker;
  }
}
