import * as THREE from 'three/webgpu';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { readTexturePixels } from './images.js';

export async function verifyBrowserBase(device, assert) {
  assert(typeof FileReader === 'function', 'FileReader is installed on the root');
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(),
    new THREE.MeshStandardMaterial({ color: 0x4080c0, roughness: 0.35 }),
  );
  const exports = [];
  try {
    for (const binary of [false, true]) {
      const exported = await new GLTFExporter().parseAsync(mesh, { binary });
      assert(
        binary
          ? exported instanceof ArrayBuffer
          : exported.buffers[0].uri.startsWith('data:application/octet-stream;base64,'),
        'Three.js exports ' + (binary ? 'GLB bytes' : 'embedded data URL buffers'),
      );
      const loaded = await new GLTFLoader().parseAsync(
        binary ? exported : JSON.stringify(exported),
        '',
      );
      let count = 0;
      loaded.scene.traverse((object) => {
        if (!object.isMesh) return;
        count++;
        assert(object.geometry.index.count === 36, 'Round-trip cube indices');
        assert(
          object.material.isMeshStandardMaterial &&
            Math.abs(object.material.roughness - 0.35) < 0.001,
          'Round-trip PBR material',
        );
        object.geometry.dispose();
        object.material.dispose();
      });
      assert(count === 1, 'Round-trip cube mesh');
      exports.push(binary ? 'glb' : 'gltf-data-url');
    }
  } finally {
    mesh.geometry.dispose();
    mesh.material.dispose();
  }
  const url = URL.createObjectURL(new Blob(['abcdef'], { type: 'text/plain' }));
  try {
    const response = await fetch(url, { headers: { Range: 'bytes=1-3' } });
    assert(
      response.status === 206 &&
        response.headers.get('Content-Range') === 'bytes 1-3/6' &&
        (await response.text()) === 'bcd',
      'Fetch plugin reads Blob URL byte ranges',
    );
  } finally {
    URL.revokeObjectURL(url);
  }
  const canvas = new OffscreenCanvas(10, 20);
  const context = canvas.getContext('bitmaprenderer');
  assert(
    context instanceof ImageBitmapRenderingContext && context.canvas === canvas,
    'Root bitmaprenderer context',
  );
  const expected = [100, 50, 20, 128, 255, 0, 0, 255];
  const bitmap = await createImageBitmap(
    new ImageData(new Uint8ClampedArray(expected), 2, 1),
  );
  context.transferFromImageBitmap(bitmap);
  assert(bitmap.width === 0 && bitmap.height === 0, 'Bitmap ownership is consumed');
  assert(
    canvas.width === 10 && canvas.height === 20,
    'Canvas attributes stay unchanged',
  );
  const transferred = canvas.transferToImageBitmap();
  assert(
    transferred.width === 2 && transferred.height === 1,
    'Bitmap dimensions survive transfer',
  );
  const target = device.createTexture({
    size: [2, 1],
    format: 'rgba8unorm',
    usage:
      GPUTextureUsage.COPY_DST |
      GPUTextureUsage.COPY_SRC |
      GPUTextureUsage.RENDER_ATTACHMENT,
  });
  try {
    device.queue.copyExternalImageToTexture(
      { source: transferred },
      { texture: target },
      [2, 1],
    );
    assert(
      JSON.stringify(await readTexturePixels(device, target, 2, 1)) ===
        JSON.stringify(expected),
      'Transferred bitmap preserves actual GPU pixels',
    );
  } finally {
    transferred.close();
    target.destroy();
  }
  const blank = canvas.transferToImageBitmap();
  assert(
    blank.width === 2 && blank.height === 1,
    'Transferred canvas keeps bitmap dimensions',
  );
  blank.close();
  context.transferFromImageBitmap(null);
  const reset = canvas.transferToImageBitmap();
  assert(
    reset.width === 10 && reset.height === 20,
    'Null transfer resets to canvas attributes',
  );
  reset.close();
  return { exports, blobRange: true, bitmaprenderer: true };
}
