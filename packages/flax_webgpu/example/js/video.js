import { acquireVideoFrame } from '@flax/webgpu';
import { signal } from '@flax/core';
import { CanvasView } from '@flax/core/bindings';
import { Center, runApp } from '@flax/flutter/widgets';
import {
  Mesh,
  MeshBasicMaterial,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  SRGBColorSpace,
  VideoFrameTexture,
  WebGPURenderer,
  REVISION,
} from 'three/webgpu';

const { modeOrder, refreshRate } = globalThis.__videoConfig;
const width = 1920;
const height = 1080;
const sourceFps = 60;
const warmMs = 2000;
const measureMs = 6000;
const report = (value) => __videoReport(JSON.stringify(value));
const raf = () => new Promise(requestAnimationFrame);
const require = (ok, message) => {
  if (!ok) throw new Error(message);
};
let displayed;

function show(canvas) {
  const child = CanvasView(canvas);
  if (displayed) {
    displayed.value = child;
  } else {
    displayed = signal(child);
    runApp(Center({ child: displayed.bind }));
  }
}

async function capture(mode, format, index) {
  globalThis.__videoCapture = null;
  const name = `${mode}-${format}-${index}`;
  report({ kind: 'capture', name });
  const deadline = performance.now() + 5000;
  while (!globalThis.__videoCapture && performance.now() < deadline) await raf();
  const result = globalThis.__videoCapture;
  require(result?.name === name &&
    result.size.join(',') ===
      '960,540', `Missing Flutter capture: ${JSON.stringify(result)}`);
  const primary = (pixel, channel) =>
    pixel[channel] > 220 &&
    pixel.slice(0, 3).every((value, i) => i === channel || value < 35) &&
    pixel[3] === 255;
  const gray = result.topRight.slice(0, 3);
  require(primary(result.topLeft, index) &&
    primary(result.bottomRight, 2) &&
    primary(result.flutterTexture, index) &&
    gray.every((value) => value > 100 && value < 180) &&
    Math.max(...gray) - Math.min(...gray) <=
      8, `Wrong displayed BT.709 pixels: ${JSON.stringify(result)}`);
}

function directStage(canvas, device) {
  const context = canvas.getContext('webgpu');
  const format = navigator.gpu.getPreferredCanvasFormat();
  context.configure({ device, format, alphaMode: 'opaque' });
  const module = device.createShaderModule({
    code: `
struct Vertex { @builtin(position) position: vec4f, @location(0) uv: vec2f }
@vertex fn vertex(@builtin(vertex_index) index: u32) -> Vertex {
  let p = array(vec2f(-1,-1), vec2f(3,-1), vec2f(-1,3))[index];
  return Vertex(vec4f(p,0,1), p * vec2f(.5,-.5) + .5);
}
@group(0) @binding(0) var frame: texture_external;
@group(0) @binding(1) var frameSampler: sampler;
@fragment fn fragment(in: Vertex) -> @location(0) vec4f {
  return textureSampleBaseClampToEdge(frame, frameSampler, in.uv);
}`,
  });
  const layout = device.createBindGroupLayout({
    entries: [
      { binding: 0, visibility: GPUShaderStage.FRAGMENT, externalTexture: {} },
      {
        binding: 1,
        visibility: GPUShaderStage.FRAGMENT,
        sampler: { type: 'filtering' },
      },
    ],
  });
  const pipeline = device.createRenderPipeline({
    layout: device.createPipelineLayout({ bindGroupLayouts: [layout] }),
    vertex: { module, entryPoint: 'vertex' },
    fragment: { module, entryPoint: 'fragment', targets: [{ format }] },
  });
  const sampler = device.createSampler({ minFilter: 'linear', magFilter: 'linear' });
  function encode(frame, target, useBundle = false) {
    const external = device.importExternalTexture({ source: frame });
    require(external instanceof GPUExternalTexture, 'Wrong external texture brand');
    const group = device.createBindGroup({
      layout,
      entries: [
        { binding: 0, resource: external },
        { binding: 1, resource: sampler },
      ],
    });
    const encoder = device.createCommandEncoder();
    const pass = encoder.beginRenderPass({
      colorAttachments: [
        { view: target.createView(), loadOp: 'clear', storeOp: 'store' },
      ],
    });
    const draw = (commands) => {
      commands.setPipeline(pipeline);
      commands.setBindGroup(0, group);
      commands.draw(3);
    };
    if (useBundle) {
      const bundle = device.createRenderBundleEncoder({ colorFormats: [format] });
      draw(bundle);
      pass.executeBundles([bundle.finish()]);
    } else {
      draw(pass);
    }
    pass.end();
    return encoder.finish();
  }
  return {
    render(frame) {
      device.queue.submit([encode(frame, context.getCurrentTexture())]);
    },
    async verifyRecordedFrame() {
      const target = device.createTexture({
        size: [1, 1],
        format,
        usage: GPUTextureUsage.RENDER_ATTACHMENT,
      });
      try {
        const recorded = [false, true].map((useBundle) =>
          encode(acquireVideoFrame('movie'), target, useBundle),
        );
        const unused = new WeakRef(acquireVideoFrame('movie'));
        for (let attempt = 0; attempt < 20; attempt++) {
          // The previous WeakRef read keeps the control alive for that job.
          await raf();
          globalThis.__videoGcPressure = Array.from({ length: 65536 }, (_, i) => ({
            index: i,
            pair: [i, i + 1],
          }));
          await new Promise((resolve) => setTimeout(resolve, 8));
          if (unused.deref() === undefined) break;
        }
        delete globalThis.__videoGcPressure;
        require(unused.deref() === undefined, 'GC control frame was still reachable');
        device.pushErrorScope('validation');
        device.queue.submit(recorded);
        const error = await device.popErrorScope();
        require(!error, `Recorded external frame was lost across GC: ${error?.message}`);
        await device.queue.onSubmittedWorkDone();
      } finally {
        target.destroy();
      }
    },
    async verifyExpiry(frame) {
      const target = device.createTexture({
        size: [1, 1],
        format,
        usage: GPUTextureUsage.RENDER_ATTACHMENT,
      });
      const command = encode(frame, target);
      frame.close();
      frame.close();
      let closedError;
      try {
        device.importExternalTexture({ source: frame });
      } catch (error) {
        closedError = error.name;
      }
      require(closedError ===
        'InvalidStateError', `Closed frame import returned ${closedError}`);
      device.pushErrorScope('validation');
      device.queue.submit([command]);
      const error = await device.popErrorScope();
      require(error instanceof GPUValidationError &&
        /external texture|current access/i.test(
          error.message,
        ), `Expired submit: ${error?.message}`);
      target.destroy();
      return { closedError, resubmitError: error.message };
    },
    close() {
      context.unconfigure();
    },
  };
}

async function threeStage(canvas, device) {
  const renderer = new WebGPURenderer({ canvas, device, antialias: false });
  renderer.setPixelRatio(1);
  renderer.setSize(width, height, false);
  await renderer.init();
  require(renderer.backend.isWebGPUBackend, 'Three renderer did not use WebGPU');
  const texture = new VideoFrameTexture();
  texture.colorSpace = SRGBColorSpace;
  const material = new MeshBasicMaterial({ map: texture, toneMapped: false });
  const geometry = new PlaneGeometry(2, 2);
  const scene = new Scene();
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
  camera.position.z = 1;
  scene.add(new Mesh(geometry, material));
  return {
    render(frame) {
      texture.setFrame(frame);
      renderer.render(scene, camera);
    },
    close() {
      texture.dispose();
      material.dispose();
      geometry.dispose();
      renderer.dispose();
    },
  };
}

async function sourceCommand(method, argument) {
  globalThis.__videoSourceReply = null;
  report({ kind: 'source', method, argument });
  const deadline = performance.now() + 5000;
  while (!globalThis.__videoSourceReply && performance.now() < deadline) await raf();
  const reply = globalThis.__videoSourceReply;
  require(reply &&
    !reply.error, `Video source ${method}: ${reply?.error ?? 'timed out'}`);
  return reply.value;
}

function checkFrame(frame, format) {
  require(frame instanceof VideoFrame &&
    frame.format === format &&
    frame.codedWidth === width &&
    frame.codedHeight === height &&
    frame.displayWidth === width &&
    frame.displayHeight ===
      height, `Decoder did not supply a 1920x1080 ${format} VideoFrame`);
  return frame;
}

async function uploadedPixel(device, frame, colorSpace) {
  const texture = device.createTexture({
    size: [1, 1],
    format: 'rgba8unorm',
    usage:
      GPUTextureUsage.COPY_DST |
      GPUTextureUsage.COPY_SRC |
      GPUTextureUsage.RENDER_ATTACHMENT,
  });
  const buffer = device.createBuffer({
    size: 256,
    usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
  });
  try {
    device.queue.copyExternalImageToTexture(
      { source: frame, origin: [128, 128] },
      { texture, colorSpace },
      [1, 1],
    );
    const encoder = device.createCommandEncoder();
    encoder.copyTextureToBuffer({ texture }, { buffer, bytesPerRow: 256 }, [1, 1]);
    device.queue.submit([encoder.finish()]);
    await buffer.mapAsync(GPUMapMode.READ);
    return [...new Uint8Array(buffer.getMappedRange(0, 4))];
  } finally {
    buffer.destroy();
    texture.destroy();
  }
}

async function verifyPixels(stage, mode, format, device) {
  await sourceCommand('load', format);
  const timestamps = [];
  let expiry;
  let p3;
  let recordedFrameGc;
  for (let index = 0; index < 2; index++) {
    if (index) await sourceCommand('next');
    const frame = checkFrame(
      acquireVideoFrame('movie'),
      format === 'bgra' ? 'BGRA' : 'NV12',
    );
    try {
      timestamps.push(frame.timestamp);
      device.pushErrorScope('validation');
      stage.render(frame);
      const error = await device.popErrorScope();
      require(!error, `GPU validation before close: ${error?.message}`);
      if (index === 0 && mode === 'direct' && format === 'nv12') {
        // Hold imports for both destination color spaces until the same frame closes.
        const p3Texture = device.importExternalTexture({
          source: frame,
          colorSpace: 'display-p3',
        });
        require(p3Texture instanceof
          GPUExternalTexture, 'Missing Display P3 external texture');
        p3 = await uploadedPixel(device, frame, 'display-p3');
        require(p3.every(
          (value, channel) => Math.abs(value - [234, 52, 35, 255][channel]) <= 5,
        ), `Wrong Display P3 upload: ${p3}`);
        await stage.verifyRecordedFrame();
        recordedFrameGc = true;
        expiry = await stage.verifyExpiry(frame);
      } else {
        frame.close();
      }
      await device.queue.onSubmittedWorkDone();
      await raf();
      await capture(mode, format, index);
    } finally {
      frame.close();
    }
  }
  require(timestamps[0] === 0 &&
    Math.abs(timestamps[1] - 16667) <
      2, `Unexpected decoded timestamps: ${timestamps}`);
  return { timestamps, expiry, p3, recordedFrameGc };
}

async function playback(stage, mode, device) {
  await sourceCommand('load', 'nv12');
  await sourceCommand('play');
  const samples = [];
  const acknowledgements = [];
  let skipped = 0;
  let previousTimestamp;
  let priorRender;
  const started = performance.now();
  let end;
  let published;
  try {
    for (;;) {
      await raf();
      const tick = performance.now();
      const elapsed = tick - started;
      if (elapsed >= warmMs + measureMs) {
        end = tick;
        break;
      }
      const frame = acquireVideoFrame('movie');
      const available = performance.now();
      if (frame === null) continue;
      if (frame.timestamp === previousTimestamp) {
        frame.close();
        continue;
      }
      if (elapsed >= warmMs && samples.length === 0) report({ kind: 'start', mode });
      if (previousTimestamp !== undefined && elapsed >= warmMs) {
        skipped += Math.max(
          0,
          Math.round(((frame.timestamp - previousTimestamp) * sourceFps) / 1e6) - 1,
        );
      }
      previousTimestamp = frame.timestamp;
      try {
        stage.render(frame);
      } finally {
        frame.close();
      }
      const submitted = performance.now();
      if (elapsed < warmMs) continue;
      samples.push({
        tick: elapsed,
        acquireMs: available - tick,
        renderMs: submitted - available,
        intervalMs: priorRender === undefined ? null : submitted - priorRender,
      });
      priorRender = submitted;
      if (samples.length % 12 === 0) {
        acknowledgements.push(
          device.queue.onSubmittedWorkDone().then(() => performance.now() - available),
        );
      }
    }
  } finally {
    report({ kind: 'stop', mode });
    published = await sourceCommand('stop');
  }
  const gpuAckMs = await Promise.all(acknowledgements);
  const fps = (samples.length * 1000) / (end - started - warmMs);
  require(samples.length >= 300 &&
    gpuAckMs.length >= 20 &&
    published >= 460, 'Insufficient 60 fps source or playback samples');
  return {
    samples,
    fps,
    skipped,
    gpuAckMs,
    durationMs: end - started - warmMs,
    published,
  };
}

async function main() {
  let initialCanvas = new OffscreenCanvas(width, height);
  show(initialCanvas);
  const modes = modeOrder.split(',');
  require(modes.length === 2 && modes.includes('direct') && modes.includes('three'),
    'Video acceptance requires direct and three exactly once');
  require(acquireVideoFrame('not-granted') ===
    null, 'An unauthorized source was visible');
  const adapter = await navigator.gpu.requestAdapter();
  require(adapter, 'No Metal WebGPU adapter');
  const device = await adapter.requestDevice();
  const errors = [];
  device.addEventListener('uncapturederror', (event) =>
    errors.push(event.error.message),
  );
  const results = {};
  for (const mode of modes) {
    const canvas = initialCanvas ?? new OffscreenCanvas(width, height);
    if (!initialCanvas) show(canvas);
    initialCanvas = null;
    const stage =
      mode === 'direct'
        ? directStage(canvas, device)
        : await threeStage(canvas, device);
    await raf();
    const formats = {};
    for (const format of ['nv12', 'nv12-full', 'bgra']) {
      formats[format] = await verifyPixels(stage, mode, format, device);
    }
    const playbackMetrics = await playback(stage, mode, device);
    await device.queue.onSubmittedWorkDone();
    stage.close();
    require(errors.length === 0, `Uncaptured WebGPU errors: ${JSON.stringify(errors)}`);
    results[mode] = { formats, performance: playbackMetrics };
  }
  const held = checkFrame(acquireVideoFrame('movie'), 'NV12');
  await sourceCommand('dispose');
  require(acquireVideoFrame('movie') === null, 'A disposed video source was visible');
  const afterDispose = await uploadedPixel(device, held, 'srgb');
  require(afterDispose[0] < 35 &&
    afterDispose[1] > 220 &&
    afterDispose[2] <
      35, `Acquired frame lost its pixels after source disposal: ${afterDispose}`);
  require(errors.length === 0, `Uncaptured WebGPU errors: ${JSON.stringify(errors)}`);
  // Exercise session teardown with a live frame and its cached imported texture.
  globalThis.__heldAcceptanceFrame = held;
  report({
    kind: 'complete',
    width,
    height,
    sourceFps,
    refreshRate,
    threeRevision: REVISION,
    afterDispose,
    results,
  });
}

main().catch((error) =>
  report({ kind: 'failure', error: error.stack ?? String(error) }),
);
