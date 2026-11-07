import type {} from '@flax/core/host/worker';
import type {} from '@flax/webgpu/globals';

const canvas = new OffscreenCanvas(64, 64);
void navigator.gpu.requestAdapter();
canvas.getContext('webgpu')?.configure({
  device: null as unknown as GPUDevice,
  format: 'bgra8unorm',
});
postMessage({ canvas }, [canvas]);
const frame = requestAnimationFrame((time) => void time);
cancelAnimationFrame(frame);
async function stillImages(device: GPUDevice, texture: GPUTexture) {
  const pixels = new ImageData(new Uint8ClampedArray(16), 2, 2);
  const bitmap = await createImageBitmap(pixels, { imageOrientation: 'flipY' });
  device.queue.copyExternalImageToTexture({ source: bitmap }, { texture }, [2, 2]);
  const blob: Blob = await canvas.convertToBlob({ type: 'image/webp', quality: 0.8 });
  const decoded = await createImageBitmap(blob);
  const snapshot = await createImageBitmap(canvas, 0, 0, 2, 2);
  postMessage({ snapshot, decoded }, [snapshot, decoded]);
  const transferred: ImageBitmap = canvas.transferToImageBitmap();
  transferred.close();
  bitmap.close();
}
void stillImages;
// @ts-expect-error A WebGPU Worker has no HTML Image constructor.
new Image();
// @ts-expect-error A WebGPU Worker has no HTML image type.
let htmlImage: HTMLImageElement;
// @ts-expect-error Worker Canvas 2D operations are outside the selected provider.
canvas.getContext('2d')?.fillRect(0, 0, 1, 1);
// @ts-expect-error A Worker has no document.
void document;
// @ts-expect-error A Worker has no window.
void window;
// @ts-expect-error Worker OffscreenCanvas has no HTML style adapter.
void canvas.style;
// @ts-expect-error Worker OffscreenCanvas has no owner document.
void canvas.ownerDocument;
