import { readTexturePixels } from './images.js';
import * as THREE from 'three/webgpu';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
export async function verifyThree(device, assert, imagePng) {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const renderer = new THREE.WebGPURenderer({
    canvas,
    device,
    antialias: false,
    alpha: false,
  });
  await renderer.init();
  renderer.setSize(128, 128, false);
  const scene = new THREE.Scene(),
    camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
  camera.position.set(0, 0, 3);
  const controls = new OrbitControls(camera, canvas);
  controls.update();
  const dataUrl =
    'data:image/png;base64,' +
    btoa(String.fromCharCode(...new Uint8Array(await imagePng.arrayBuffer())));
  const texture = await new THREE.TextureLoader().loadAsync(dataUrl);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 1.5, 1.5),
    new THREE.MeshBasicMaterial({ map: texture }),
  );
  scene.add(mesh);
  renderer.render(scene, camera);
  const png = await canvas.convertToBlob();
  const snapshot = await createImageBitmap(png);
  const check = device.createTexture({
    size: [128, 128],
    format: 'rgba8unorm',
    usage:
      GPUTextureUsage.COPY_DST |
      GPUTextureUsage.COPY_SRC |
      GPUTextureUsage.RENDER_ATTACHMENT,
  });
  device.queue.copyExternalImageToTexture(
    { source: snapshot },
    { texture: check },
    [128, 128],
  );
  const pixels = await readTexturePixels(device, check, 128, 128);
  let colored = 0;
  for (let i = 0; i < pixels.length; i += 4)
    if (
      Math.max(pixels[i], pixels[i + 1], pixels[i + 2]) -
        Math.min(pixels[i], pixels[i + 1], pixels[i + 2]) >
      30
    )
      colored++;
  assert(colored > 1000, 'Three.js renders actual textured geometry: ' + colored);
  snapshot.close();
  check.destroy();
  const before = camera.position.clone();
  canvas.dispatchEvent(new WheelEvent('wheel', { deltaY: 120, cancelable: true }));
  controls.update();
  assert(
    before.distanceTo(camera.position) > 0.01,
    'OrbitControls consumes the standard wheel event',
  );
  renderer.render(scene, camera);
  controls.dispose();
  texture.dispose();
  mesh.geometry.dispose();
  mesh.material.dispose();
  renderer.dispose();
}
