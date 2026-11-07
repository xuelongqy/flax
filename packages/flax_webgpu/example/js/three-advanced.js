import * as THREE from 'three/webgpu';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { readTexturePixels } from './images.js';

export async function verifyThreeAdvanced(device, assert, options = {}) {
  const size = 192,
    models = [],
    mixers = [];
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
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x101010);
  const camera = new THREE.OrthographicCamera(-1.6, 1.6, 1.6, -1.6, 0.1, 10);
  camera.position.set(0, 0.6, 3);
  camera.lookAt(0, 0.6, 0);
  const target = device.createTexture({
    size: [size, size],
    format: 'rgba8unorm',
    usage:
      GPUTextureUsage.COPY_DST |
      GPUTextureUsage.COPY_SRC |
      GPUTextureUsage.RENDER_ATTACHMENT,
  });
  const frame = () => new Promise((resolve) => requestAnimationFrame(resolve));
  const capture = async (name) => {
    await frame();
    renderer.render(scene, camera);
    const bitmap = await createImageBitmap(canvas);
    try {
      device.queue.copyExternalImageToTexture({ source: bitmap }, { texture: target }, [
        size,
        size,
      ]);
    } finally {
      bitmap.close();
    }
    const pixels = await readTexturePixels(device, target, size, size);
    const png = new Uint8Array(await (await canvas.convertToBlob()).arrayBuffer());
    let binary = '';
    for (let i = 0; i < png.length; i += 8192)
      binary += String.fromCharCode(...png.subarray(i, i + 8192));
    reportImage({
      kind: 'three-image',
      name: 'advanced-' + name,
      base64: btoa(binary),
    });
    await options.onCapture?.('advanced-' + name, pixels, size, size);
    return pixels;
  };
  const changed = (a, b) => {
    let count = 0;
    for (let i = 0; i < a.length; i += 4)
      if (
        Math.abs(a[i] - b[i]) +
          Math.abs(a[i + 1] - b[i + 1]) +
          Math.abs(a[i + 2] - b[i + 2]) >
        30
      )
        count++;
    return count;
  };
  const maximumError = (a, b) => {
    let error = 0;
    for (let i = 0; i < a.length; i++) error = Math.max(error, Math.abs(a[i] - b[i]));
    return error;
  };
  const report = { animations: [], meshopt: null, texturedExports: [] };
  const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
  const timing = crypto.randomUUID();
  performance.mark(timing, { detail: { scene: 'three-advanced' } });
  try {
    let original;
    for (const [name, meshName] of [
      ['skinned', 'SkinnedPanel'],
      ['morph', 'MorphPanel'],
    ]) {
      const gltf = await loader.loadAsync(
        globalThis.__threeModelBaseUrl + name + '.gltf',
      );
      models.push(gltf.scene);
      const mesh = gltf.scene.getObjectByName(meshName);
      assert(gltf.animations.length === 1, 'Original ' + name + ' animation loads');
      assert(
        name === 'skinned'
          ? mesh.isSkinnedMesh && mesh.skeleton.bones.length === 2
          : mesh.morphTargetInfluences.length === 1,
        name + ' geometry loads',
      );
      scene.add(gltf.scene);
      const mixer = new THREE.AnimationMixer(gltf.scene);
      mixers.push([mixer, gltf.scene]);
      mixer.clipAction(gltf.animations[0]).play();
      mixer.setTime(0);
      // The first draw initializes Three.js geometry and uniform observation caches.
      if (options.animationLoop && name === 'skinned') {
        let frames = 0;
        await new Promise((resolve, reject) => {
          renderer.setAnimationLoop(() => {
            try {
              renderer.render(scene, camera);
              if (++frames === 3) {
                renderer.setAnimationLoop(null);
                resolve();
              }
            } catch (error) {
              renderer.setAnimationLoop(null);
              reject(error);
            }
          });
        });
        report.animationLoopFrames = frames;
      } else {
        await frame();
        renderer.render(scene, camera);
      }
      const rest = await capture(name + '-rest');
      mixer.setTime(0.5);
      if (name === 'skinned')
        assert(
          Math.abs(mesh.skeleton.bones[1].quaternion.z - 0.5) < 0.001,
          'Skeleton animation updates the joint quaternion',
        );
      else
        assert(
          Math.abs(mesh.morphTargetInfluences[0] - 1) < 0.001,
          'Morph animation updates the target influence',
        );
      const posed = await capture(name + '-pose'),
        difference = changed(rest, posed);
      assert(
        difference > 300,
        name + ' deformation changes actual GPU pixels: ' + difference,
      );
      mixer.setTime(0);
      assert(
        name === 'skinned'
          ? Math.abs(mesh.skeleton.bones[1].quaternion.z) < 0.001
          : Math.abs(mesh.morphTargetInfluences[0]) < 0.001,
        name + ' restores the CPU pose',
      );
      const restored = await capture(name + '-restored'),
        error = maximumError(rest, restored);
      assert(error <= 1, name + ' returns to the original rendered pose: ' + error);
      report.animations.push({
        kind: name,
        changedPixels: difference,
        restoredMaxError: error,
      });
      if (name === 'morph') original = rest;
      scene.remove(gltf.scene);
    }
    await MeshoptDecoder.ready;
    assert(MeshoptDecoder.supported, 'Meshopt Wasm decoder is available');
    const compressed = await loader.loadAsync(
      globalThis.__threeModelBaseUrl + 'meshopt.gltf',
    );
    models.push(compressed.scene);
    const mesh = compressed.scene.getObjectByName('MeshoptPanel'),
      position = mesh.geometry.getAttribute('position');
    assert(
      mesh.geometry.index.count === 6,
      'Meshopt decodes the compressed triangle index stream',
    );
    const expected = [-0.6, 0, 0, 0.6, 0, 0, -0.6, 1.2, 0, 0.6, 1.2, 0];
    for (let i = 0; i < 4; i++)
      for (let c = 0; c < 3; c++)
        assert(
          Math.abs(position.getComponent(i, c) - expected[i * 3 + c]) < 0.000001,
          'Meshopt decoded vertex ' + i + ':' + c,
        );
    scene.add(compressed.scene);
    const decoded = await capture('meshopt'),
      meshoptError = maximumError(original, decoded);
    assert(
      meshoptError <= 1,
      'Meshopt compressed and original geometry render equally: ' + meshoptError,
    );
    report.meshopt = {
      mode: 'single-thread Wasm',
      bufferModes: ['ATTRIBUTES', 'TRIANGLES'],
      vertices: position.count,
      maxPixelError: meshoptError,
    };
    scene.remove(compressed.scene);
    const twoD = new OffscreenCanvas(1, 1).getContext('2d');
    if (twoD) {
      for (const binary of [false, true]) {
        const exported = await new GLTFExporter().parseAsync(compressed.scene, {
          binary,
        });
        assert(
          binary
            ? exported instanceof ArrayBuffer
            : exported.images[0].uri.startsWith('data:image/png;base64,'),
          'Textured ' + (binary ? 'GLB' : 'glTF') + ' embeds PNG bytes',
        );
        const loaded = await loader.parseAsync(
          binary ? exported : JSON.stringify(exported),
          '',
        );
        models.push(loaded.scene);
        let loadedMesh;
        loaded.scene.traverse((object) => {
          if (object.isMesh) loadedMesh = object;
        });
        assert(
          loadedMesh.material.map.image.width === 2 &&
            loadedMesh.material.map.image.height === 2,
          'Exported texture is decoded at its original dimensions',
        );
        scene.add(loaded.scene);
        const output = await capture('export-' + (binary ? 'glb' : 'gltf')),
          error = maximumError(decoded, output);
        assert(
          error <= 2,
          'Textured export/import preserves actual rendered pixels: ' + error,
        );
        scene.remove(loaded.scene);
        report.texturedExports.push({
          format: binary ? 'glb' : 'gltf',
          maxPixelError: error,
        });
      }
    } else
      report.texturedExportSkip =
        'Canvas 2D is required for GLTFExporter image encoding';
    const elapsed = performance.measure(timing, { start: timing });
    assert(
      elapsed instanceof PerformanceMeasure && elapsed.duration >= 0,
      'Three.js workload is measured through Core User Timing',
    );
    report.userTiming = true;
    return report;
  } finally {
    performance.clearMarks(timing);
    performance.clearMeasures(timing);
    for (const [mixer, root] of mixers) {
      mixer.stopAllAction();
      mixer.uncacheRoot(root);
    }
    const textures = new Set(),
      images = new Set();
    for (const model of models)
      model.traverse((object) => {
        if (!object.isMesh) return;
        object.skeleton?.dispose();
        object.geometry.dispose();
        for (const material of Array.isArray(object.material)
          ? object.material
          : [object.material]) {
          if (material.map) {
            textures.add(material.map);
            images.add(material.map.image);
          }
          material.dispose();
        }
      });
    for (const texture of textures) texture.dispose();
    for (const image of images) image?.close?.();
    target.destroy();
    await renderer.dispose();
  }
}
