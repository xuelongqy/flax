import type {} from '@flax/core/host';
import type {} from '@flax/webgpu/globals';
import { acquireVideoFrame, type GPUTextureViewDimension } from '@flax/webgpu';
import type {} from '@flax/canvas/globals';
import { CanvasView } from '@flax/core/bindings';

const canvas = new OffscreenCanvas(64, 64);
canvas.style.width = '64px';
CanvasView(canvas, { width: 64, height: 64 });
const transferred = document.createElement('canvas').transferControlToOffscreen();
CanvasView(transferred);
// @ts-expect-error The HTML placeholder owns the Flutter layout and input adapter.
void transferred.style;
canvas.getContext('2d')?.fillRect(0, 0, 1, 1);
const context = canvas.getContext('webgpu');
function videoBindings(device: GPUDevice, destination: GPUTexture) {
  const frame: unknown = acquireVideoFrame('player');
  if (!(frame instanceof VideoFrame)) return;
  const clone = frame.clone();
  const retimed = new VideoFrame(frame, { timestamp: -1, duration: 16667 });
  const colors: VideoColorSpace = new VideoColorSpace(frame.colorSpace.toJSON());
  const rect: number | undefined = clone.visibleRect?.right;
  const metadata: Record<string, never> = clone.metadata();
  const copyOptions: VideoFrameCopyToOptions = {
    rect: { x: 0, y: 0, width: 3, height: 3 },
    layout: new Set<PlaneLayout>([
      { offset: 0, stride: 4 },
      { offset: 12, stride: 4 },
    ]),
  };
  const readback: Promise<PlaneLayout[]> = frame.copyTo(
    new DataView(new SharedArrayBuffer(frame.allocationSize(copyOptions))),
    copyOptions,
  );
  const pixelFormat: VideoPixelFormat = 'NV12';
  void [readback, pixelFormat];
  // @ts-expect-error A plain object is not writable BufferSource storage.
  frame.copyTo({ byteLength: 4 });
  // @ts-expect-error Unknown output formats are rejected during IDL conversion.
  frame.allocationSize({ format: 'YUV' });
  void [colors, rect, metadata, clone.rotation, clone.flip];
  clone.close();
  retimed.close();
  // @ts-expect-error VideoFrame metadata is readonly.
  frame.colorSpace.fullRange = true;
  // @ts-expect-error Raw-pixel construction is outside the host frame profile.
  new VideoFrame(new Uint8Array(4));
  const texture: unknown = device.importExternalTexture({
    source: frame,
    colorSpace: 'display-p3',
  });
  if (!(texture instanceof GPUExternalTexture)) return;
  const layout = device.createBindGroupLayout({
    entries: [{ binding: 0, visibility: GPUShaderStage.FRAGMENT, externalTexture: {} }],
  });
  device.createBindGroup({ layout, entries: [{ binding: 0, resource: texture }] });
  device.queue.copyExternalImageToTexture(
    { source: frame, flipY: true },
    { texture: destination },
    [frame.displayWidth, frame.displayHeight],
  );
  frame.close();
  // @ts-expect-error Construction requires an existing host frame.
  new VideoFrame();
  // @ts-expect-error External textures are imported through a GPUDevice.
  new GPUExternalTexture();
}
void videoBindings;
const adapter = await navigator.gpu.requestAdapter();
if (adapter && context) {
  const device = await adapter.requestDevice({
    requiredLimits: { maxBufferSize: 4096 },
  });
  context.configure({ device, format: navigator.gpu.getPreferredCanvasFormat() });
  const buffer = device.createBuffer({
    size: 16,
    usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
  });
  device.queue.writeBuffer(buffer, 0, new Float32Array(4));
  const encoder = device.createCommandEncoder();
  const compute = encoder.beginComputePass();
  compute.setImmediates(0, new Uint32Array(4));
  compute.setImmediates(0, new SharedArrayBuffer(16));
  compute.end();
  const bundle = device.createRenderBundleEncoder({ colorFormats: ['rgba8unorm'] });
  bundle.setImmediates(0, new Float32Array(4), 0, 4);
  bundle.finish();
  const texture = device.createTexture({
    size: [1, 1],
    format: 'rgba8unorm',
    usage: GPUTextureUsage.TEXTURE_BINDING,
    textureBindingViewDimension: '2d',
  });
  texture.createView({ swizzle: 'bgra' });
  const bindingDimension: GPUTextureViewDimension | undefined =
    texture.textureBindingViewDimension;
  void bindingDimension;
  const pass = encoder.beginRenderPass({
    maxDrawCount: 1,
    colorAttachments: [
      {
        view: context.getCurrentTexture().createView(),
        loadOp: 'clear',
        storeOp: 'store',
      },
    ],
  });
  pass.setImmediates(0, new ArrayBuffer(16), 0, 16);
  pass.end();
  device.queue.submit([encoder.finish()]);
  await device.queue.onSubmittedWorkDone();
}
