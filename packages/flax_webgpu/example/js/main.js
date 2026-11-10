// This application uses standard GPU objects; native signatures stay in the host.
import { CanvasView } from '@flax/core/bindings';
import { signal } from '@flax/core';
import { verifyThree } from './three-acceptance.js';
import { verifyImages } from './images.js';
import { verifyCanvasConfigurationPixels } from './canvas-config.js';
import { verifyApiExtensions } from './api-extensions.js';
import { verifyThreeFeatures } from './three-features.js';
import { verifyBrowserBase } from './browser-base.js';
import { verifyThreeAdvanced } from './three-advanced.js';
import { verifyThreeWorkers } from './three-workers.js';
import { verifyThreeKtxWorkers } from './three-ktx-workers.js';
import { verifyThreeWorkerScenarios } from './three-worker-scenarios.js';
import {
  verifyThreeWorkerRenderer,
  armThreeWorkerRendererForSessionClose,
} from './three-worker-renderer.js';
import { verifyHostTools } from './host-tools.js';
import {
  verifyGpuWorkers,
  armGpuWorkerForSessionClose,
  verifyGpuDeviceGc,
} from './gpu-workers.js';
import { runApp, Center } from '@flax/flutter/widgets';
const canvas = new OffscreenCanvas(960, 540);
const displayedCanvas = signal(CanvasView(canvas));
runApp(Center({ child: displayedCanvas.bind }));
let observedSize;
const resizeObserver = new ResizeObserver((entries) => {
  observedSize = entries[0];
});
resizeObserver.observe(canvas, { box: 'device-pixel-content-box' });
const report = (value) => __webGpuReport(JSON.stringify(value));
let assertions = 0;
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
  assertions++;
};
const throws = (action, name) => {
  try {
    action();
  } catch (error) {
    assert(error.name === name, `${error.name}: ${error.message}`);
    return;
  }
  throw new Error(`Expected ${name}`);
};
(async () => {
  report({ kind: 'host-tools', ...(await verifyHostTools(assert)) });
  report({
    kind: 'gpu-workers',
    ...(await verifyGpuWorkers(
      assert,
      (value) => {
        displayedCanvas.value = CanvasView(value);
      },
      report,
    )),
  });
  displayedCanvas.value = CanvasView(canvas);
  const adapter = await navigator.gpu.requestAdapter({
    powerPreference: 'high-performance',
  });
  assert(adapter, 'A Metal adapter is required');
  const device = await adapter.requestDevice();
  report({ kind: 'gpu-device-gc', ...(await verifyGpuDeviceGc(assert)) });
  const canvasFormat = globalThis.__expectCanvas2D
    ? navigator.gpu.getPreferredCanvasFormat()
    : 'rgba8unorm';
  const canvas2D = new OffscreenCanvas(4, 4),
    ctx2D = canvas2D.getContext('2d');
  if (globalThis.__expectCanvas2D) {
    assert(ctx2D, 'The Canvas 2D provider must remain installed');
    ctx2D.fillStyle = 'red';
    ctx2D.fillRect(0, 0, 4, 4);
    const pixel = ctx2D.getImageData(1, 1, 1, 1).data;
    assert(
      pixel[0] === 255 && pixel[1] === 0 && pixel[3] === 255,
      'Canvas 2D pixels must survive coexistence',
    );
  } else assert(ctx2D === null, 'WebGPU-only sessions must not require Canvas 2D');
  device.addEventListener('uncapturederror', (event) =>
    report({ error: event.error.message }),
  );
  report({
    kind: 'canvas-configuration',
    ...(await verifyCanvasConfigurationPixels(device, assert)),
  });
  const initialization = device.createBuffer({
    size: 16,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    mappedAtCreation: true,
  });
  const initial = initialization.getMappedRange();
  new Uint32Array(initial).set([1, 2, 3, 4]);
  assert(
    __webGpuRejectShared(new Uint8Array(initial)),
    'Mapped storage must not escape to Dart',
  );
  const mappedUpload = device.createBuffer({
    size: 16,
    usage: GPUBufferUsage.COPY_DST,
  });
  device.queue.writeBuffer(mappedUpload, 0, new Uint32Array(initial));
  throws(() => initialization.getMappedRange(0, 8), 'OperationError');
  assert(
    typeof initial.transfer === 'function',
    'The maintained V8 must expose ArrayBuffer transfer',
  );
  throws(() => initial.transfer(), 'TypeError');
  const ordinary = new ArrayBuffer(8);
  throws(() => structuredClone(initial, { transfer: [initial] }), 'TypeError');
  throws(
    () => structuredClone([ordinary, initial], { transfer: [ordinary, initial] }),
    'TypeError',
  );
  assert(
    ordinary.byteLength === 8 && initial.byteLength === 16,
    'Rejected mapped transfer must be atomic',
  );
  throws(
    () => structuredClone(null, { transfer: [initial, ordinary, ordinary] }),
    'DataCloneError',
  );
  const getterError = new Error('Mapped transfer getter failure');
  try {
    structuredClone(
      { get value() { throw getterError; } },
      { transfer: [initial, ordinary] },
    );
    assert(false, 'Mapped transfer must run serialization getters');
  } catch (error) {
    assert(error === getterError, 'Getter errors must precede mapped transfer errors');
  }
  assert(
    ordinary.byteLength === 8 && initial.byteLength === 16,
    'Earlier transfer errors must preserve every buffer',
  );
  const workerUrl = URL.createObjectURL(new Blob(['onmessage = () => {};']));
  const transferWorker = new Worker(workerUrl);
  try {
    throws(() => transferWorker.postMessage(initial, [initial]), 'TypeError');
    throws(
      () => transferWorker.postMessage([ordinary, initial], [ordinary, initial]),
      'TypeError',
    );
    assert(
      ordinary.byteLength === 8 && new Uint32Array(initial)[0] === 1,
      'Worker rejection must preserve both buffers',
    );
  } finally {
    transferWorker.terminate();
    URL.revokeObjectURL(workerUrl);
  }
  const guarded = new ArrayBuffer(8);
  throws(
    () =>
      structuredClone(
        {
          get value() {
            globalThis.__flaxFfiMemory.protectMappedArrayBuffer(guarded);
            return 1;
          },
        },
        { transfer: [ordinary, guarded] },
      ),
    'TypeError',
  );
  assert(
    ordinary.byteLength === 8 && guarded.byteLength === 8,
    'Reentrant protection must be checked before any detach',
  );
  globalThis.__flaxFfiMemory.detachMappedArrayBuffer(guarded);
  initialization.unmap();
  assert(initial.byteLength === 0, 'unmap must detach mapped views');
  initialization.destroy();
  const values = new Uint32Array([1, 2, 3, 4, 10, 20, 30, 40]);
  const storage = device.createBuffer({
    size: values.byteLength,
    usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
  });
  const readback = device.createBuffer({
    size: values.byteLength,
    usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
  });
  device.queue.writeBuffer(storage, 0, values);
  const computeShader = device.createShaderModule({
    code: '@group(0) @binding(0) var<storage,read_write> data:array<u32>; @compute @workgroup_size(1) fn main(@builtin(global_invocation_id) id:vec3u) {data[id.x]=data[id.x]*2u+1u;}',
  });
  const pipeline = await device.createComputePipelineAsync({
    layout: 'auto',
    compute: { module: computeShader, entryPoint: 'main' },
  });
  const group = device.createBindGroup({
    layout: pipeline.getBindGroupLayout(0),
    entries: [{ binding: 0, resource: { buffer: storage } }],
  });
  const encoder = device.createCommandEncoder();
  const pass = encoder.beginComputePass();
  pass.setPipeline(pipeline);
  pass.setBindGroup(0, group);
  pass.dispatchWorkgroups(values.length);
  pass.end();
  encoder.copyBufferToBuffer(storage, 0, readback, 0, values.byteLength);
  device.queue.submit([encoder.finish()]);
  await readback.mapAsync(GPUMapMode.READ);
  const mapped = readback.getMappedRange();
  const result = Array.from(new Uint32Array(mapped));
  assert(
    result.every((value, i) => value === values[i] * 2 + 1),
    `WGSL result: ${result}`,
  );
  readback.unmap();
  assert(mapped.byteLength === 0, 'read unmap must detach');
  device.pushErrorScope('validation');
  device.createBuffer({
    size: 4,
    usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.VERTEX,
  });
  const error = await device.popErrorScope();
  assert(
    error instanceof GPUValidationError,
    'Validation must be captured by the error scope',
  );
  const diagnostics = await computeShader.getCompilationInfo();
  assert(diagnostics.messages.length === 0, 'The valid shader must compile');
  await device
    .createComputePipelineAsync({
      layout: 'auto',
      compute: { module: computeShader, entryPoint: 'missing' },
    })
    .then(
      () => {
        throw new Error('An invalid asynchronous pipeline must reject');
      },
      (error) =>
        assert(
          error instanceof GPUPipelineError && error.reason === 'validation',
          'Asynchronous pipeline error type',
        ),
    );
  const other = await (await navigator.gpu.requestAdapter()).requestDevice();
  const foreign = other.createBuffer({
    size: 16,
    usage: GPUBufferUsage.STORAGE,
    mappedAtCreation: true,
  });
  const foreignView = foreign.getMappedRange();
  const foreignCanvas = new OffscreenCanvas(2, 2);
  const foreignContext = foreignCanvas.getContext('webgpu');
  foreignContext.configure({
    device: other,
    format: canvasFormat,
  });
  device.pushErrorScope('validation');
  device.createBindGroup({
    layout: pipeline.getBindGroupLayout(0),
    entries: [{ binding: 0, resource: { buffer: foreign } }],
  });
  assert(
    (await device.popErrorScope()) instanceof GPUValidationError,
    'Cross-device resources must be validated',
  );
  other.destroy();
  const lostTexture = foreignContext.getCurrentTexture();
  assert(
    lostTexture instanceof GPUTexture &&
      lostTexture.width === 2 &&
      lostTexture.height === 2 &&
      lostTexture.format === canvasFormat &&
      lostTexture.usage === GPUTextureUsage.RENDER_ATTACHMENT &&
      foreignContext.getCurrentTexture() === lostTexture,
    'A configured lost device returns a cached invalid texture with canvas metadata',
  );
  assert(
    foreignContext.getConfiguration().device === other,
    'Device loss must preserve configuration identity',
  );
  assert(foreignView.byteLength === 0, 'Device destruction must detach mapped views');
  assert(
    (await other.lost).reason === 'destroyed',
    'Device loss must settle on the owning JS thread',
  );
  foreignContext.unconfigure();
  mappedUpload.destroy();
  report({ kind: 'compute', adapter: adapter.info, values: result, assertions });
  const context = canvas.getContext('webgpu');
  assert(
    context instanceof GPUCanvasContext && context.canvas === canvas,
    'Shared canvas context',
  );
  assert(canvas.getContext('2d') === null, 'Context mode lock');
  context.configure({
    device,
    format: canvasFormat,
    alphaMode: 'opaque',
  });
  const imagePng = await verifyImages(device, assert);
  report({ kind: 'browser-base', ...(await verifyBrowserBase(device, assert)) });
  report({ kind: 'images', assertions });
  await verifyThree(device, assert, imagePng);
  report({ kind: 'three', assertions });
  const rootThreeFrames = new Map();
  const captureThreeFrame = (name, pixels, width, height) => {
    assert(!rootThreeFrames.has(name), 'Root scene snapshot names are unique');
    rootThreeFrames.set(name, { pixels: Uint8Array.from(pixels), width, height });
  };
  report({
    kind: 'three-features',
    ...(await verifyThreeFeatures(device, assert, { onCapture: captureThreeFrame })),
    assertions,
  });
  report({
    kind: 'api-extensions',
    ...(await verifyApiExtensions(device, assert)),
    assertions,
  });
  report({
    kind: 'three-advanced',
    ...(await verifyThreeAdvanced(device, assert, { onCapture: captureThreeFrame })),
    assertions,
  });
  report({ kind: 'three-workers', ...(await verifyThreeWorkers(assert)), assertions });
  report({
    kind: 'three-ktx-workers',
    ...(await verifyThreeKtxWorkers(assert, { onCapture: captureThreeFrame })),
    assertions,
  });
  report({
    kind: 'three-worker-renderer',
    ...(await verifyThreeWorkerRenderer(
      assert,
      rootThreeFrames,
      (value) => {
        displayedCanvas.value = CanvasView(value);
      },
      report,
    )),
    assertions,
  });
  displayedCanvas.value = CanvasView(canvas);
  const scenarioAssertions = assertions;
  report({
    kind: 'three-worker-scenarios',
    ...(await verifyThreeWorkerScenarios(assert)),
    scenarioAssertions: assertions - scenarioAssertions,
    assertions,
  });
  if (globalThis.__runWebGpuCts) {
    const result = await globalThis.__runWebGpuCts();
    report({ kind: 'cts', ...result });
    assert(
      result.results.every(([, r]) => r.status === 'pass' || r.status === 'skip'),
      'Pinned CTS subset: ' +
        JSON.stringify(
          result.results.filter(([, r]) => r.status !== 'pass' && r.status !== 'skip'),
        ),
    );
  }
  const module = device.createShaderModule({ code: globalThis.__sceneWGSL });
  const renderPipeline = await device.createRenderPipelineAsync({
    layout: 'auto',
    vertex: { module, entryPoint: 'vertex' },
    fragment: {
      module,
      entryPoint: 'fragment',
      targets: [{ format: canvasFormat }],
    },
    primitive: { topology: 'triangle-list' },
  });
  const uniform = device.createBuffer({
    size: 16,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
  });
  const renderGroup = device.createBindGroup({
    layout: renderPipeline.getBindGroupLayout(0),
    entries: [{ binding: 0, resource: { buffer: uniform } }],
  });
  let frames = 0;
  const encoded = [];
  const parameters = new Float32Array(4);
  const frame = (time) => {
    try {
      const started = performance.now();
      parameters.set([time / 1000, canvas.width, canvas.height, 0]);
      device.queue.writeBuffer(uniform, 0, parameters);
      const texture = context.getCurrentTexture();
      assert(texture === context.getCurrentTexture(), 'Current texture identity');
      const commands = device.createCommandEncoder();
      const draw = commands.beginRenderPass({
        colorAttachments: [
          {
            view: frames % 2 ? texture : texture.createView(),
            loadOp: 'clear',
            storeOp: 'store',
            clearValue: [0, 0, 0, 1],
          },
        ],
      });
      if (frames === 0) {
        assert(
          draw.draw.length === 1 && draw.setViewport.length === 6,
          'WebIDL method lengths',
        );
        throws(() => draw.draw(), 'TypeError');
        throws(() => draw.draw.call({}, 3), 'TypeError');
        throws(
          () => draw.setViewport(0, 0, canvas.width, canvas.height, 0),
          'TypeError',
        );
        throws(() => draw.setViewport(0, 0, NaN, canvas.height, 0, 1), 'TypeError');
      }
      draw.setViewport(0, 0, canvas.width, canvas.height, 0, 1, 'ignored');
      draw.setScissorRect(0, 0, canvas.width, canvas.height, 'ignored');
      draw.setPipeline(renderPipeline);
      draw.setBindGroup(0, renderGroup);
      draw.draw(3);
      draw.end();
      device.queue.submit([commands.finish()]);
      if (frames >= 30) encoded.push(performance.now() - started);
      if (frames === 5)
        assert(
          observedSize?.contentRect.width > 0 &&
            Math.floor(observedSize.contentRect.width) === canvas.clientWidth,
          'ResizeObserver follows the real canvas placement',
        );
      if (++frames === 120) {
        resizeObserver.disconnect();
        globalThis.retainedMappedBuffer = device.createBuffer({
          size: 16,
          usage: GPUBufferUsage.UNIFORM,
          mappedAtCreation: true,
        });
        globalThis.retainedMappedRange =
          globalThis.retainedMappedBuffer.getMappedRange();
        encoded.sort((a, b) => a - b);
        const rendered = {
          kind: 'rendered',
          frames,
          format: texture.format,
          cpuEncodeMs: {
            p50: encoded[Math.floor(encoded.length * 0.5)],
            p95: encoded[Math.floor(encoded.length * 0.95)],
          },
        };
        (globalThis.__preview
          ? Promise.resolve([{ armed: false }, { armed: false }])
          : Promise.all([
              armGpuWorkerForSessionClose(),
              armThreeWorkerRendererForSessionClose(report),
            ])
        )
          .then(([worker, three]) =>
            report({
              ...rendered,
              gpuWorkerAtSessionClose: worker.armed,
              threeWorkerRendererAtSessionClose: three.armed,
              threeWorkerRendererNestedAtSessionClose: three.nestedWorkers,
            }),
          )
          .catch((error) => report({ error: error.stack ?? String(error) }));
      }
      if (frames < 120 || globalThis.__preview) requestAnimationFrame(frame);
    } catch (error) {
      report({ error: error.stack ?? String(error) });
    }
  };
  requestAnimationFrame(frame);
})().catch((error) => report({ error: error.stack ?? String(error) }));
