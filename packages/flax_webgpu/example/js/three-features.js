import * as THREE from 'three/webgpu';
import { pass, vec4 } from 'three/tsl';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { bloom } from 'three/addons/tsl/display/BloomNode.js';
import { readTexturePixels } from './images.js';

export async function verifyThreeFeatures(device, assert, options = {}) {
  const size = 192;
  const canvas = options.canvas ?? new OffscreenCanvas(size, size);
  const reportImage =
    options.reportImage ?? ((value) => __webGpuReport(JSON.stringify(value)));
  const renderer = new THREE.WebGPURenderer({
    canvas,
    device,
    antialias: false,
    alpha: false,
  });
  await renderer.init();
  renderer.setSize(size, size, false);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x080808);
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 30);
  camera.position.set(2.5, 2.2, 3.5);
  camera.lookAt(0, 0.4, 0);
  const target = device.createTexture({
    size: [size, size],
    format: 'rgba8unorm',
    usage:
      GPUTextureUsage.COPY_DST |
      GPUTextureUsage.COPY_SRC |
      GPUTextureUsage.RENDER_ATTACHMENT,
  });
  const models = [];
  const lights = [];
  let floor, scenePass, glow, pipeline;
  const capture = async (name) => {
    const exported = name ? canvas.convertToBlob() : null;
    const bitmap = await createImageBitmap(canvas);
    device.queue.copyExternalImageToTexture({ source: bitmap }, { texture: target }, [
      size,
      size,
    ]);
    bitmap.close();
    if (exported) {
      const bytes = new Uint8Array(await (await exported).arrayBuffer());
      reportImage({
        kind: 'three-image',
        name,
        base64: btoa(String.fromCharCode(...bytes)),
      });
    }
    const pixels = await readTexturePixels(device, target, size, size);
    if (name) await options.onCapture?.('features-' + name, pixels, size, size);
    return pixels;
  };
  const nextFrame = () => new Promise((resolve) => requestAnimationFrame(resolve));
  const brightness = (pixels) => {
    let total = 0;
    for (let i = 0; i < pixels.length; i += 4)
      total += pixels[i] + pixels[i + 1] + pixels[i + 2];
    return total / (size * size * 3);
  };
  const report = { models: [], lighting: [], shadows: [], postprocessing: [] };
  try {
    const loader = new GLTFLoader();
    for (const name of ['textured-cube.gltf', 'textured-cube.glb']) {
      const progress = [];
      const gltf = await loader.loadAsync(
        globalThis.__threeModelBaseUrl + name,
        (event) => {
          progress.push({
            loaded: event.loaded,
            total: event.total,
            lengthComputable: event.lengthComputable,
          });
        },
      );
      models.push(gltf.scene);
      const mesh = gltf.scene.getObjectByName('TexturedCube');
      assert(
        mesh?.isMesh && mesh.geometry.index.count === 36,
        name + ' loads indexed geometry',
      );
      assert(
        mesh.material.isMeshStandardMaterial && mesh.material.map?.image.width === 2,
        name + ' loads its PBR material and actual PNG texture',
      );
      assert(
        progress.length > 0 &&
          progress.at(-1).lengthComputable &&
          progress.at(-1).loaded === progress.at(-1).total,
        name + ' reports real streamed download progress',
      );
      scene.add(gltf.scene);
      const light = new THREE.AmbientLight(0xffffff, 2);
      scene.add(light);
      await nextFrame();
      renderer.render(scene, camera);
      const pixels = await capture('model-' + name.replace('.', '-'));
      assert(brightness(pixels) > 10, name + ' produces textured model pixels');
      scene.remove(gltf.scene, light);
      report.models.push({
        name,
        progressEvents: progress.length,
        brightness: brightness(pixels),
      });
    }
    const model = models[1];
    model.position.y = 0.5;
    scene.add(model);
    floor = new THREE.Mesh(
      new THREE.PlaneGeometry(8, 8),
      new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 1 }),
    );
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);
    const ambient = new THREE.AmbientLight(0xffffff, 0.05);
    scene.add(ambient);
    lights.push(ambient);
    const directional = new THREE.DirectionalLight(0xffffff, 3);
    directional.position.set(-3, 5, 2);
    directional.shadow.camera.left = directional.shadow.camera.bottom = -3;
    directional.shadow.camera.right = directional.shadow.camera.top = 3;
    const point = new THREE.PointLight(0xffffff, 100);
    point.position.set(-2, 3, 1);
    const spot = new THREE.SpotLight(0xffffff, 100, 20, Math.PI / 4, 0.2);
    spot.position.set(-2, 4, 1);
    lights.push(directional, point, spot);
    await nextFrame();
    renderer.render(scene, camera);
    const dark = await capture();
    for (const light of [directional, point, spot]) {
      light.castShadow = true;
      light.shadow.mapSize.set(256, 256);
      light.shadow.bias = -0.001;
      scene.add(light);
      if (light.target) scene.add(light.target);
      await nextFrame();
      renderer.render(scene, camera);
      const litFrame = renderer.info.frame;
      const lit = await capture(light.type + '-lit');
      assert(
        brightness(lit) > brightness(dark) + 8,
        light.type + ' changes PBR lighting',
      );
      report.lighting.push({
        type: light.type,
        dark: brightness(dark),
        lit: brightness(lit),
      });
      light.shadow.needsUpdate = true;
      model.traverse((object) => {
        if (object.isMesh) object.castShadow = true;
      });
      await nextFrame();
      renderer.render(scene, camera);
      const shadowFrame = renderer.info.frame;
      assert(
        shadowFrame > litFrame,
        light.type + ' renders shadow changes in a new Three.js frame',
      );
      const shadowed = await capture(light.type + '-shadow');
      let darker = 0;
      for (let i = 0; i < lit.length; i += 4)
        if (
          lit[i] +
            lit[i + 1] +
            lit[i + 2] -
            shadowed[i] -
            shadowed[i + 1] -
            shadowed[i + 2] >
          30
        )
          darker++;
      assert(darker > 50, light.type + ' produces a visible shadow: ' + darker);
      report.shadows.push({
        type: light.type,
        darkerPixels: darker,
        litFrame,
        shadowFrame,
      });
      model.traverse((object) => {
        if (object.isMesh) object.castShadow = false;
      });
      scene.remove(light);
      if (light.target) scene.remove(light.target);
    }
    directional.castShadow = false;
    scene.add(directional, directional.target);
    scenePass = pass(scene, camera);
    const color = scenePass.getTextureNode();
    pipeline = new THREE.RenderPipeline(renderer);
    pipeline.outputColorTransform = false;
    pipeline.outputNode = vec4(color.rgb, 1);
    await nextFrame();
    pipeline.render();
    const plain = await capture('post-plain');
    pipeline.outputNode = vec4(color.rgb.oneMinus(), 1);
    pipeline.needsUpdate = true;
    await nextFrame();
    pipeline.render();
    const inverted = await capture('post-inverted');
    let maxError = 0;
    for (let i = 0; i < plain.length; i += 4)
      for (let channel = 0; channel < 3; channel++)
        maxError = Math.max(
          maxError,
          Math.abs(plain[i + channel] + inverted[i + channel] - 255),
        );
    assert(
      maxError <= 3,
      'TSL scene-pass inversion matches actual pixels: ' + maxError,
    );
    report.postprocessing.push({ effect: 'TSL inversion', maxError });
    glow = bloom(color, 0.8, 0.2, 0.1);
    pipeline.outputNode = vec4(color.rgb.add(glow.rgb), 1);
    pipeline.needsUpdate = true;
    await nextFrame();
    pipeline.render();
    const bloomed = await capture('post-bloom');
    assert(
      brightness(bloomed) > brightness(plain) + 2,
      'Bloom adds measured brightness through its intermediate passes',
    );
    report.postprocessing.push({
      effect: 'Bloom',
      plain: brightness(plain),
      bloom: brightness(bloomed),
    });
    return report;
  } finally {
    pipeline?.dispose();
    glow?.dispose();
    scenePass?.dispose();
    for (const light of lights) light.shadow?.dispose();
    floor?.geometry.dispose();
    floor?.material.dispose();
    const textures = new Set();
    for (const model of models)
      model.traverse((object) => {
        if (!object.isMesh) return;
        object.geometry.dispose();
        for (const material of Array.isArray(object.material)
          ? object.material
          : [object.material]) {
          if (material.map) textures.add(material.map);
          material.dispose();
        }
      });
    for (const texture of textures) {
      texture.image?.close?.();
      texture.dispose();
    }
    target.destroy();
    await renderer.dispose();
  }
}
