import * as THREE from 'three/webgpu';
import { pass, vec4 } from 'three/tsl';
import { bloom } from 'three/addons/tsl/display/BloomNode.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { KTX2Loader } from 'three/addons/loaders/KTX2Loader.js';
import { clone } from 'three/addons/utils/SkeletonUtils.js';
import { encodeRgbaPng, readBgraTexture } from './capture.mjs';

const frame = () => new Promise(requestAnimationFrame);
const assert = (condition, message) => {
  if (!condition) throw Error(message);
};

// This exact neutral bundle is imported in all three producer realms.
export async function createProducer(canvas, config, acknowledge) {
  const began = performance.now();
  const adapter = await navigator.gpu.requestAdapter({
    powerPreference: 'high-performance',
  });
  assert(adapter, 'A real WebGPU adapter is required');
  const requiredFeatures = ['texture-compression-bc'];
  assert(
    requiredFeatures.every((name) => adapter.features.has(name)),
    'BC texture compression must match in every arm',
  );
  const device = await adapter.requestDevice({ requiredFeatures });
  const errors = [];
  device.addEventListener('uncapturederror', (event) =>
    errors.push(event.error.message),
  );
  let closing = false;
  device.lost.then((info) => {
    if (!closing) errors.push('Device lost: ' + info.message);
  });
  const renderer = new THREE.WebGPURenderer({
    canvas,
    device,
    antialias: false,
    alpha: false,
  });
  await renderer.init();
  renderer.setPixelRatio(1);
  renderer.setSize(config.width, config.height, false);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.info.autoReset = false;
  const canvasFormat = navigator.gpu.getPreferredCanvasFormat();
  assert(
    canvasFormat === 'bgra8unorm',
    'All arms must use the same preferred canvas format',
  );
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x111827);
  const camera = new THREE.PerspectiveCamera(45, config.width / config.height, 0.1, 80);
  camera.position.set(10, 10, 15);
  camera.lookAt(0, 0.4, 0);
  const ambient = new THREE.AmbientLight(0xffffff, 0.65);
  const light = new THREE.DirectionalLight(0xfff4dd, 3.5);
  light.position.set(-5, 12, 6);
  light.castShadow = true;
  light.shadow.mapSize.set(1024, 1024);
  light.shadow.camera.left = light.shadow.camera.bottom = -9;
  light.shadow.camera.right = light.shadow.camera.top = 9;
  light.shadow.camera.far = 40;
  light.shadow.bias = -0.001;
  scene.add(ambient, light, light.target);
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(18, 18),
    new THREE.MeshStandardMaterial({ color: 0x718096, roughness: 0.8 }),
  );
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);
  const loadStart = performance.now();
  const loader = new GLTFLoader();
  const [cube, skinned, morph] = await Promise.all(
    ['textured-cube.glb', 'skinned.gltf', 'morph.gltf'].map((name) =>
      loader.loadAsync(config.baseUrl + name),
    ),
  );
  const ktx = new KTX2Loader()
    .setWorkerLimit(1)
    .setTranscoderPath(config.baseUrl + 'basis/');
  ktx.detectSupport(renderer);
  const texture = await ktx.loadAsync(
    config.baseUrl + 'worker-pattern-uastc-zstd.ktx2',
  );
  assert(
    ktx.workerPool.workers.length === 1,
    'The KTX2 asset must use one real decoder Worker',
  );
  assert(
    texture.image.width === 256 && texture.mipmaps.length === 9,
    'The original KTX2 mip chain must load',
  );
  const panels = [skinned, morph];
  for (const model of panels)
    model.scene.traverse((object) => {
      if (object.isMesh) {
        object.material.map = texture;
        object.material.side = THREE.DoubleSide;
        object.material.needsUpdate = true;
      }
    });
  const mixers = [];
  const objects = [];
  const grid = Math.ceil(Math.sqrt(config.models));
  const spacing = 12 / grid;
  for (let i = 0; i < config.models; i++) {
    const model = i % 4 < 2 ? cube : panels[(i % 4) - 2];
    const object = clone(model.scene);
    object.position.set(
      ((i % grid) - (grid - 1) / 2) * spacing,
      0,
      (Math.floor(i / grid) - (grid - 1) / 2) * spacing,
    );
    object.scale.setScalar(spacing * 0.68);
    object.traverse((child) => {
      if (child.isMesh) child.castShadow = true;
    });
    scene.add(object);
    objects.push(object);
    if (model.animations.length) {
      const mixer = new THREE.AnimationMixer(object);
      mixer.clipAction(model.animations[0]).play();
      mixers.push({ mixer, object, phase: i * 0.037 });
    }
  }
  const loadMs = performance.now() - loadStart;
  const scenePass = pass(scene, camera);
  const color = scenePass.getTextureNode();
  const glow = bloom(color, 0.6, 0.3, 0.6);
  const pipeline = new THREE.RenderPipeline(renderer);
  pipeline.outputNode = vec4(color.rgb.add(glow.rgb), 1);
  let input = 0;
  const pendingInputs = [];
  let measurement;
  const checkErrors = () => assert(errors.length === 0, errors.join('; '));
  const renderAt = (time) => {
    checkErrors();
    for (let i = 0; i < objects.length; i++)
      if (i % 4 < 2) objects[i].rotation.y = time * 0.45 + i * 0.17;
    for (const { mixer, phase } of mixers) mixer.setTime((time + phase) % 1);
    camera.position.x = 10 + Math.sin(input * 0.7) * 0.2;
    camera.lookAt(0, 0.4, 0);
    renderer.info.reset();
    pipeline.render();
  };
  await frame();
  renderAt(0);
  await device.queue.onSubmittedWorkDone();
  const firstFrameMs = performance.now() - began;
  const resources = () => ({
    drawCalls: renderer.info.render.drawCalls,
    triangles: renderer.info.render.triangles,
    sceneModels: objects.length,
    skinnedModels: mixers.length / 2,
    morphModels: mixers.length / 2,
    memory: { ...renderer.info.memory },
  });
  const firstResources = resources();
  assert(
    firstResources.drawCalls >= config.models,
    'Each model must produce a real draw',
  );
  assert(
    firstResources.triangles > config.models * 2,
    'Real model geometry must render',
  );
  const metadata = {
    threeRevision: THREE.REVISION,
    requiredFeatures,
    canvasFormat,
    rendererPixelRatio: renderer.getPixelRatio(),
    alpha: false,
    antialias: false,
    shadow: { type: 'PCFShadowMap', mapSize: 1024 },
    bloom: { strength: 0.6, radius: 0.3, threshold: 0.6 },
    decoderWorkers: ktx.workerPool.workers.length,
    textureFormat: texture.format,
    textureMipLevels: texture.mipmaps.length,
    adapter: adapter.info
      ? {
          vendor: adapter.info.vendor,
          architecture: adapter.info.architecture,
          device: adapter.info.device,
          description: adapter.info.description,
        }
      : null,
    loadMs,
    firstFrameMs,
    firstResources,
  };
  return {
    metadata,
    async warm({ warmupMs, warmupFrames }) {
      const start = performance.now();
      let frames = 0;
      while (performance.now() - start < warmupMs || frames < warmupFrames) {
        await frame();
        renderAt((performance.now() - start) / 1000);
        frames++;
      }
      await device.queue.onSubmittedWorkDone();
      checkErrors();
      return { frames, elapsedMs: performance.now() - start, resources: resources() };
    },
    input(id) {
      pendingInputs.push(id);
    },
    start({ kind, durationMs }, windowEnded) {
      assert(!measurement, 'Collect the previous measurement before starting another');
      input = 0;
      pendingInputs.length = 0;
      measurement = (async () => {
        await device.queue.onSubmittedWorkDone();
        const startsMs = [];
        const renderMs = [];
        let start;
        let ended;
        let frames = 0;
        await new Promise((resolve, reject) => {
          const tick = () => {
            try {
              const now = performance.now();
              start ??= now;
              if (now - start >= durationMs) {
                ended = now;
                windowEnded();
                resolve();
                return;
              }
              startsMs.push(now - start);
              const id = pendingInputs.shift();
              if (id !== undefined) input = id;
              renderAt((now - start) / 1000);
              frames++;
              renderMs.push(performance.now() - now);
              if (kind === 'latency' && id !== undefined)
                device.queue.onSubmittedWorkDone().then(
                  () => acknowledge(id),
                  (error) => errors.push(String(error)),
                );
              requestAnimationFrame(tick);
            } catch (error) {
              reject(error);
            }
          };
          requestAnimationFrame(tick);
        });
        const drainStart = performance.now();
        await device.queue.onSubmittedWorkDone();
        checkErrors();
        return {
          kind,
          frames,
          elapsedMs: ended - start,
          renderedFps: (frames * 1000) / (ended - start),
          gpuDrainMs: performance.now() - drainStart,
          startsMs,
          renderMs,
          coalescedBeforeRender: 0,
        };
      })();
      return measurement;
    },
    async collect() {
      const result = await measurement;
      let drainedProbes = 0;
      const drainStart = performance.now();
      // The collect message follows every dispatched input, including a late Worker delivery.
      while (result.kind === 'latency' && pendingInputs.length) {
        const id = pendingInputs.shift();
        input = id;
        await frame();
        drainedProbes++;
        renderAt((result.elapsedMs + performance.now() - drainStart) / 1000);
        await device.queue.onSubmittedWorkDone();
        acknowledge(id);
      }
      result.probesRenderedAfterWindow = drainedProbes;
      result.probeDrainMs = performance.now() - drainStart;
      measurement = undefined;
      return result;
    },
    async snapshot(time) {
      input = 0;
      await frame();
      renderAt(time);
      // Copy this frame before an await can yield to canvas presentation/expiration.
      const texture = canvas.getContext('webgpu').getCurrentTexture();
      const rgba = await readBgraTexture(device, texture, config.width, config.height);
      checkErrors();
      const bytes = encodeRgbaPng(rgba, config.width, config.height);
      let binary = '';
      for (let i = 0; i < bytes.length; i += 8192)
        binary += String.fromCharCode(...bytes.subarray(i, i + 8192));
      return { time, pngBase64: btoa(binary), resources: resources() };
    },
    async close() {
      await device.queue.onSubmittedWorkDone();
      ktx.dispose();
      const geometries = new Set(),
        materials = new Set(),
        textures = new Set([texture]);
      for (const { mixer, object } of mixers) {
        mixer.stopAllAction();
        mixer.uncacheRoot(object);
      }
      scene.traverse((object) => {
        object.skeleton?.dispose();
        if (object.geometry) geometries.add(object.geometry);
        for (const material of object.material ? [object.material].flat() : []) {
          materials.add(material);
          for (const value of Object.values(material))
            if (value?.isTexture) textures.add(value);
        }
      });
      for (const geometry of geometries) geometry.dispose();
      for (const material of materials) material.dispose();
      for (const value of textures) {
        value.dispose();
        value.image?.close?.();
      }
      glow.dispose();
      scenePass.dispose();
      pipeline.dispose();
      await renderer.dispose();
      canvas.getContext('webgpu').unconfigure();
      await device.queue.onSubmittedWorkDone();
      closing = true;
      device.destroy();
      checkErrors();
    },
  };
}
