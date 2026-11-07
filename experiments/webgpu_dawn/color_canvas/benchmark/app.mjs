import { CanvasView } from '@flax/core/bindings';
import { runApp } from '@flax/flutter/widgets';

const config = globalThis.__colorBenchmark;
const canvas = new OffscreenCanvas(config.width, config.height);
runApp(CanvasView(canvas, { width: 960, height: 540 }));

async function measure() {
  const { width, height, configuration, warmupMs, durationMs, completion } = config;
  const adapter = await navigator.gpu.requestAdapter({
    powerPreference: 'high-performance',
  });
  if (!adapter || adapter.info.isFallbackAdapter)
    throw new Error('Hardware WebGPU adapter required');
  const device = await adapter.requestDevice();
  const errors = [];
  device.addEventListener('uncapturederror', (event) =>
    errors.push(event.error.message),
  );
  device.lost.then((info) => errors.push(`Device lost: ${info.message}`));
  const context = canvas.getContext('webgpu');
  context.configure({ device, ...configuration });
  const active = context.getConfiguration();
  const actual = {
    format: active.format,
    colorSpace: active.colorSpace,
    toneMapping: active.toneMapping,
    alphaMode: active.alphaMode,
  };
  // The shared 24-light scene gets the same highlight gain in all three modes.
  const source = globalThis.__sceneWGSL;
  const shader = source.replace(
    '1.0 - exp(-light * 0.42)',
    '6.0 * (1.0 - exp(-light * 0.42))',
  );
  if (shader === source)
    throw new Error('The shared shader highlight expression changed');
  const module = device.createShaderModule({ code: shader });
  const pipeline = await device.createRenderPipelineAsync({
    layout: 'auto',
    vertex: { module, entryPoint: 'vertex' },
    fragment: {
      module,
      entryPoint: 'fragment',
      targets: [{ format: configuration.format }],
    },
  });
  const uniform = device.createBuffer({
    size: 16,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
  });
  const group = device.createBindGroup({
    layout: pipeline.getBindGroupLayout(0),
    entries: [{ binding: 0, resource: { buffer: uniform, size: 16 } }],
  });
  const parameters = new Float32Array([0, width, height, 0]);
  const rafGapsMs = [];
  const callbackGapsMs = [];
  const queueCompletionMs = [];
  let firstCallback, firstRaf, measuredAt, previousCallback, previousRaf;
  let latestCompletion;
  let warmupFrames = 0;
  let frames = 0;
  let texture;

  const elapsedMs = await new Promise((resolve, reject) => {
    function frame(time) {
      try {
        const now = performance.now();
        firstCallback ??= now;
        firstRaf ??= time;
        if (previousCallback !== undefined) {
          callbackGapsMs.push(now - previousCallback);
          rafGapsMs.push(time - previousRaf);
        }
        if (measuredAt !== undefined && now - measuredAt >= durationMs) {
          globalThis.__colorBenchmarkMark(false);
          resolve(now - measuredAt);
          return;
        }
        if (measuredAt === undefined && now - firstCallback >= warmupMs) {
          measuredAt = now;
          globalThis.__colorBenchmarkMark(true);
        }
        const measured = measuredAt !== undefined;
        if (measured) {
          previousCallback = now;
          previousRaf = time;
          frames++;
        } else {
          warmupFrames++;
        }
        parameters[0] = (time - firstRaf) / 1000;
        device.queue.writeBuffer(uniform, 0, parameters);
        const target = context.getCurrentTexture();
        texture ??= {
          width: target.width,
          height: target.height,
          format: target.format,
        };
        const encoder = device.createCommandEncoder();
        const pass = encoder.beginRenderPass({
          colorAttachments: [
            {
              view: target.createView(),
              loadOp: 'clear',
              storeOp: 'store',
              clearValue: [0, 0, 0, 1],
            },
          ],
        });
        pass.setPipeline(pipeline);
        pass.setBindGroup(0, group);
        pass.draw(3);
        pass.end();
        device.queue.submit([encoder.finish()]);
        if (completion && measured) {
          const submittedAt = performance.now();
          latestCompletion = device.queue.onSubmittedWorkDone().then(() => {
            queueCompletionMs.push(performance.now() - submittedAt);
          }, reject);
        }
        requestAnimationFrame(frame);
      } catch (error) {
        reject(error);
      }
    }
    requestAnimationFrame(frame);
  });
  await latestCompletion;
  await device.queue.onSubmittedWorkDone();
  if (errors.length) throw new Error(errors.join('\n'));
  return {
    config,
    actual,
    texture,
    warmupFrames,
    frames,
    elapsedMs,
    rafGapsMs,
    callbackGapsMs,
    queueCompletionMs,
    adapter: {
      vendor: adapter.info.vendor,
      architecture: adapter.info.architecture,
      device: adapter.info.device,
      description: adapter.info.description,
      isFallbackAdapter: adapter.info.isFallbackAdapter,
    },
  };
}

measure().then(
  (result) => globalThis.__colorBenchmarkReport(JSON.stringify(result)),
  (error) =>
    globalThis.__colorBenchmarkReport(
      JSON.stringify({ error: error.stack || String(error) }),
    ),
);
