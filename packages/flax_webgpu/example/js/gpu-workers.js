import { verifyCanvasConfiguration } from './canvas-config.js';
import {
  readTexturePixels,
  readCanvasPixels,
  verifyWideStillImages,
  verifyWorkerStillImages,
} from './images.js';

// Real detached Dawn producers; only lifecycle/control messages cross the UI isolate.
function workerEntry(
  verifyCanvasConfiguration,
  readTexturePixels,
  readCanvasPixels,
  verifyWideStillImages,
  verifyWorkerStillImages,
) {
  let device, canvas, context;
  async function initialize() {
    if (device) return;
    if (typeof document !== 'undefined' || typeof HTMLCanvasElement !== 'undefined')
      throw Error('Worker unexpectedly has a DOM');
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) throw Error('Worker Metal adapter unavailable');
    device = await adapter.requestDevice();
    device.onuncapturederror = (event) => postMessage({ error: event.error.message });
  }
  function draw(color) {
    const encoder = device.createCommandEncoder();
    const pass = encoder.beginRenderPass({
      colorAttachments: [
        {
          view: context.getCurrentTexture().createView(),
          clearValue: color,
          loadOp: 'clear',
          storeOp: 'store',
        },
      ],
    });
    pass.end();
    device.queue.submit([encoder.finish()]);
  }
  onmessage = async ({ data }) => {
    try {
      if (data.action === 'ready') {
        postMessage({ ready: true });
        return;
      }
      if (data.action === 'return') {
        const value = new OffscreenCanvas(23, 11);
        postMessage({ canvas: value }, [value]);
        close();
        return;
      }
      if (data.action === 'echo') {
        postMessage({ canvas: data.canvas }, [data.canvas]);
        return;
      }
      if (data.action === 'nested') {
        const url = URL.createObjectURL(
          new Blob([
            `(${workerEntry.toString()})(${verifyCanvasConfiguration.toString()},${readTexturePixels.toString()},${readCanvasPixels.toString()},${verifyWideStillImages.toString()},${verifyWorkerStillImages.toString()})`,
          ]),
        );
        const child = new Worker(url);
        try {
          const value = await new Promise((resolve, reject) => {
            child.onmessage = ({ data }) =>
              data.error ? reject(Error(data.error)) : resolve(data);
            child.onerror = (event) => reject(Error(event.message));
            child.postMessage({ action: 'compute' });
          });
          postMessage({ nested: value.values });
        } finally {
          child.terminate();
          URL.revokeObjectURL(url);
        }
        return;
      }
      await initialize();
      if (data.action === 'canvas-configuration') {
        const result = await verifyCanvasConfiguration(
          device,
          (condition, message) => {
            if (!condition) throw Error(message);
          },
          (targetDevice, canvas, bitmap) =>
            readCanvasPixels(targetDevice, canvas, readTexturePixels, bitmap),
        );
        if (result.pixelSnapshots !== true)
          throw Error('Worker canvas pixels were skipped');
        postMessage({ canvasConfiguration: result });
      } else if (data.action === 'still-images') {
        const { receipt, bitmap, wide } = await verifyWorkerStillImages(
          device,
          (ok, message) => {
            if (!ok) throw Error(message);
          },
          readTexturePixels,
          readCanvasPixels,
          verifyWideStillImages,
        );
        postMessage({ stillImages: receipt, bitmap, alias: bitmap, wide }, [
          bitmap,
          wide.bitmap,
        ]);
      } else if (data.action === 'image-roundtrip' || data.action === 'image-echo') {
        const transfer = (packet) => [
          packet.bitmap,
          packet.buffer,
          packet.plain,
          packet.canvas,
        ];
        if (
          data.bitmap !== data.alias ||
          data.pixels.data !== data.view ||
          data.view.buffer !== data.buffer ||
          data.map.get(data.bitmap) !== data.view ||
          data.map.get(data.canvas) !== data.plain ||
          data.canvas.width !== 3 ||
          new Uint8Array(data.plain)[0] !== 73
        )
          throw Error('Mixed image/canvas packet lost graph identity');
        const target = device.createTexture({
          size: [2, 2],
          format: 'rgba8unorm',
          usage:
            GPUTextureUsage.COPY_SRC |
            GPUTextureUsage.COPY_DST |
            GPUTextureUsage.RENDER_ATTACHMENT,
        });
        try {
          device.queue.copyExternalImageToTexture(
            { source: data.bitmap },
            { texture: target },
            [2, 2],
          );
          const pixels = await readTexturePixels(device, target);
          if (pixels.join() !== Array.from(data.view).join())
            throw Error('Mixed packet bitmap GPU pixels changed');
        } finally {
          target.destroy();
        }
        data.hops = (data.hops ?? 0) + 1;
        if (data.action === 'image-roundtrip') {
          const url = URL.createObjectURL(
            new Blob([
              `(${workerEntry.toString()})(${verifyCanvasConfiguration.toString()},${readTexturePixels.toString()},${readCanvasPixels.toString()},${verifyWideStillImages.toString()},${verifyWorkerStillImages.toString()})`,
            ]),
          );
          const child = new Worker(url);
          try {
            const packet = await new Promise((resolve, reject) => {
              child.onmessage = ({ data }) =>
                data.error ? reject(Error(data.error)) : resolve(data.packet);
              child.onerror = (event) => reject(Error(event.message));
              data.action = 'image-echo';
              child.postMessage(data, transfer(data));
            });
            postMessage({ packet }, transfer(packet));
          } finally {
            child.terminate();
            URL.revokeObjectURL(url);
          }
        } else {
          postMessage({ packet: data }, transfer(data));
          close();
        }
      } else if (data.action === 'canvas-usage') {
        const copy = data.usage === 'copy-dst';
        context.configure({
          device,
          format: 'rgba8unorm',
          usage: copy ? GPUTextureUsage.COPY_DST : GPUTextureUsage.STORAGE_BINDING,
          alphaMode: 'opaque',
        });
        const texture = context.getCurrentTexture();
        if (copy) {
          const pixels = new Uint8Array(canvas.width * canvas.height * 4);
          for (let at = 0; at < pixels.length; at += 4) pixels[at] = 255;
          device.queue.writeTexture(
            { texture },
            pixels,
            { bytesPerRow: canvas.width * 4 },
            [canvas.width, canvas.height],
          );
        } else {
          const pipeline = device.createComputePipeline({
            layout: 'auto',
            compute: {
              module: device.createShaderModule({
                code: `@group(0) @binding(0) var output: texture_storage_2d<rgba8unorm, write>;
                @compute @workgroup_size(1) fn main(@builtin(global_invocation_id) id: vec3u) {
                  textureStore(output, vec2i(id.xy), vec4f(0, 1, 0, 0));
                }`,
              }),
              entryPoint: 'main',
            },
          });
          const group = device.createBindGroup({
            layout: pipeline.getBindGroupLayout(0),
            entries: [{ binding: 0, resource: texture.createView() }],
          });
          const encoder = device.createCommandEncoder();
          const pass = encoder.beginComputePass();
          pass.setPipeline(pipeline);
          pass.setBindGroup(0, group);
          pass.dispatchWorkgroups(canvas.width, canvas.height);
          pass.end();
          device.queue.submit([encoder.finish()]);
        }
        postMessage({ usage: texture.usage });
      } else if (data.action === 'canvas-unused') {
        postMessage({ usage: context.getCurrentTexture().usage });
      } else if (data.action === 'device-churn') {
        for (let index = 0; index < 8; index++) {
          const adapter = await navigator.gpu.requestAdapter();
          const extra = await adapter.requestDevice();
          extra.destroy();
          await extra.lost;
        }
        postMessage({ churned: 8 });
      } else if (data.action === 'compute') {
        const begin = performance.now();
        const input = device.createBuffer({
          size: 16,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
          mappedAtCreation: true,
        });
        new Uint32Array(input.getMappedRange()).set([4, 6, 8, 10]);
        input.unmap();
        const shader = device.createShaderModule({
          code: '@group(0) @binding(0) var<storage, read_write> values: array<u32>; @compute @workgroup_size(4) fn main(@builtin(global_invocation_id) id: vec3u) { values[id.x] *= 3u; }',
        });
        const pipeline = await device.createComputePipelineAsync({
          layout: 'auto',
          compute: { module: shader, entryPoint: 'main' },
        });
        const group = device.createBindGroup({
          layout: pipeline.getBindGroupLayout(0),
          entries: [{ binding: 0, resource: { buffer: input } }],
        });
        const output = device.createBuffer({
          size: 16,
          usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
        });
        const encoder = device.createCommandEncoder();
        const pass = encoder.beginComputePass();
        pass.setPipeline(pipeline);
        pass.setBindGroup(0, group);
        pass.dispatchWorkgroups(1);
        pass.end();
        encoder.copyBufferToBuffer(input, 0, output, 0, 16);
        const encoded = performance.now();
        device.queue.submit([encoder.finish()]);
        await output.mapAsync(GPUMapMode.READ);
        const values = Array.from(new Uint32Array(output.getMappedRange()));
        output.unmap();
        input.destroy();
        output.destroy();
        postMessage({
          values,
          pipelineAndEncodingMs: encoded - begin,
          completionMs: performance.now() - encoded,
        });
      } else if (data.action === 'render') {
        canvas = data.canvas;
        context = canvas.getContext('webgpu');
        context.configure({
          device,
          format: navigator.gpu.getPreferredCanvasFormat(),
          alphaMode: 'opaque',
        });
        requestAnimationFrame((time) => {
          const now = performance.now();
          draw([1, 0, 0, 1]);
          postMessage({
            rendered: 'red',
            width: canvas.width,
            height: canvas.height,
            time,
            now,
          });
        });
      } else if (data.action === 'resize') {
        canvas.width = 128;
        canvas.height = 72;
        requestAnimationFrame((time) => {
          const now = performance.now();
          draw([0, 1, 0, 1]);
          postMessage({
            rendered: 'green',
            width: canvas.width,
            height: canvas.height,
            time,
            now,
          });
        });
      } else if (data.action === 'pending' || data.action === 'session-close') {
        if (data.action === 'session-close') {
          canvas = new OffscreenCanvas(16, 16);
          context = canvas.getContext('webgpu');
          context.configure({
            device,
            format: navigator.gpu.getPreferredCanvasFormat(),
            alphaMode: 'opaque',
          });
          draw([0, 0, 1, 1]);
        }
        const mapped = device.createBuffer({
          size: 4096,
          usage: GPUBufferUsage.MAP_WRITE | GPUBufferUsage.COPY_SRC,
          mappedAtCreation: true,
        });
        globalThis.retainedGpuMapping = mapped.getMappedRange();
        const read = device.createBuffer({
          size: 4096,
          usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
        });
        void read.mapAsync(GPUMapMode.READ).then(() => {
          for (;;) {}
        });
        void device.queue.onSubmittedWorkDone().then(() => {
          for (;;) {}
        });
        void device.lost.then(() => {
          for (;;) {}
        });
        postMessage({ pending: true });
        for (;;) {}
      }
    } catch (error) {
      postMessage({ error: String(error.stack || error) });
    }
  };
}

export async function verifyGpuWorkers(assert, show, report) {
  const url = URL.createObjectURL(
    new Blob(
      [
        `(${workerEntry.toString()})(${verifyCanvasConfiguration.toString()},${readTexturePixels.toString()},${readCanvasPixels.toString()},${verifyWideStillImages.toString()},${verifyWorkerStillImages.toString()})`,
      ],
      {
        type: 'text/javascript',
      },
    ),
  );
  await new Promise((resolve) => setTimeout(resolve, 250));
  const worker = new Worker(url);
  let resolve, reject;
  const errors = [];
  worker.onmessage = ({ data }) => {
    if (data.error) {
      errors.push(data.error);
      reject?.(Error(data.error));
    } else resolve?.(data);
  };
  worker.onerror = (event) => reject?.(Error(event.message));
  const message = (value, transfer = []) =>
    new Promise((yes, no) => {
      resolve = yes;
      reject = no;
      worker.postMessage(value, transfer);
    });
  const throws = (action, name) => {
    try {
      action();
    } catch (error) {
      assert(error.name === name, `${name}: ${error}`);
      return;
    }
    throw Error(`Expected ${name}`);
  };
  try {
    const begin = performance.now();
    const computed = await message({ action: 'compute' });
    assert(
      computed.values.join() === '12,18,24,30',
      'Worker computes and reads mapped Dawn buffers',
    );
    const roundTripMs = performance.now() - begin;
    const { canvasConfiguration } = await message({ action: 'canvas-configuration' });
    assert(
      canvasConfiguration.pixelSnapshots === true &&
        [
          'rgba8unorm/storage',
          'transient-attachment',
          'format-sequencing',
          'device-loss',
        ].every((name) => canvasConfiguration.cases.includes(name)),
      'Worker canvas usage, format and device-loss regressions ran',
    );
    const imageResult = await message({ action: 'still-images' });
    const stillImages = imageResult.stillImages;
    const imageCheck = (ok, label) => {
      stillImages.assertions++;
      assert(ok, label);
    };
    imageCheck(
      stillImages.pixelSnapshots === true && imageResult.bitmap === imageResult.alias,
      'Worker still images return a distinct pixel receipt and aliased bitmap',
    );
    const pattern = [
      255, 0, 0, 255, 0, 255, 0, 128, 0, 0, 255, 255, 255, 255, 255, 255,
    ];
    const imageData = new ImageData(new Uint8ClampedArray(pattern), 2, 2);
    const atomicBitmap = await createImageBitmap(imageData);
    const atomicCanvas = new OffscreenCanvas(3, 2),
      atomicBytes = new ArrayBuffer(8);
    const atomicList = [atomicBitmap, atomicCanvas, atomicBytes];
    throws(
      () => worker.postMessage({ atomicBitmap }, [...atomicList, atomicBitmap]),
      'DataCloneError',
    );
    throws(
      () => worker.postMessage({ atomicBitmap, invalid() {} }, atomicList),
      'DataCloneError',
    );
    throws(
      () =>
        worker.postMessage(
          {
            atomicBitmap,
            get invalid() {
              throw Error('getter');
            },
          },
          atomicList,
        ),
      'Error',
    );
    imageCheck(
      atomicBitmap.width === 2 &&
        atomicCanvas.width === 3 &&
        atomicBytes.byteLength === 8,
      'Duplicate, unsupported and throwing mixed graphs preserve all owners',
    );
    throws(
      () =>
        structuredClone(
          {
            get value() {
              atomicBitmap.close();
              return 1;
            },
          },
          { transfer: atomicList },
        ),
      'DataCloneError',
    );
    imageCheck(
      atomicCanvas.width === 3 && atomicBytes.byteLength === 8,
      'Closing a transfer-only bitmap in a getter leaves canvas and buffer attached',
    );
    const guardedBitmap = await createImageBitmap(imageData);
    const guardedCanvasImage = new OffscreenCanvas(3, 2),
      guardedImageBytes = new ArrayBuffer(8);
    const savedGetImage = WeakMap.prototype.get,
      savedValuesImage = Map.prototype.values;
    const savedIteratorImage = Array.prototype[Symbol.iterator];
    let imageFailure;
    try {
      structuredClone(
        {
          get value() {
            guardedCanvasImage.getContext('webgpu');
            WeakMap.prototype.get =
              Map.prototype.values =
              Array.prototype[Symbol.iterator] =
                () => {
                  throw Error('Application collection hook');
                };
            return 1;
          },
        },
        { transfer: [guardedBitmap, guardedCanvasImage, guardedImageBytes] },
      );
    } catch (error) {
      imageFailure = error;
    } finally {
      WeakMap.prototype.get = savedGetImage;
      Map.prototype.values = savedValuesImage;
      Array.prototype[Symbol.iterator] = savedIteratorImage;
    }
    imageCheck(
      imageFailure?.name === 'InvalidStateError' &&
        guardedBitmap.width === 2 &&
        guardedCanvasImage.width === 3 &&
        guardedImageBytes.byteLength === 8,
      'Mixed precommit ignores replaced collection hooks and rejects a newly acquired context',
    );
    guardedBitmap.close();
    guardedCanvasImage.getContext('webgpu').unconfigure();
    stillImages.cases.push('mixed-transfer-atomicity');

    const mixedBitmap = await createImageBitmap(imageData);
    const mixedCanvas = new OffscreenCanvas(3, 2),
      plain = new ArrayBuffer(8);
    new Uint8Array(plain)[0] = 73;
    const { packet } = await message(
      {
        action: 'image-roundtrip',
        bitmap: mixedBitmap,
        alias: mixedBitmap,
        pixels: imageData,
        view: imageData.data,
        buffer: imageData.data.buffer,
        canvas: mixedCanvas,
        plain,
        map: new Map([
          [mixedBitmap, imageData.data],
          [mixedCanvas, plain],
        ]),
      },
      [mixedBitmap, imageData.data.buffer, mixedCanvas, plain],
    );
    imageCheck(
      mixedBitmap.width === 0 &&
        mixedCanvas.width === 0 &&
        imageData.data.byteLength === 0 &&
        plain.byteLength === 0,
      'One native commit consumes all mixed transfer entries',
    );
    imageCheck(
      packet.hops === 2 &&
        packet.bitmap === packet.alias &&
        packet.pixels.data === packet.view &&
        packet.view.buffer === packet.buffer &&
        packet.map.get(packet.bitmap) === packet.view &&
        packet.map.get(packet.canvas) === packet.plain &&
        packet.canvas.width === 3 &&
        new Uint8Array(packet.plain)[0] === 73,
      'Nested Worker mixed roundtrip preserves aliases, bytes and canvas authentication',
    );
    stillImages.cases.push('mixed-transfer-roundtrip');
    const nested = await message({ action: 'nested' });
    assert(
      nested.nested.join() === '12,18,24,30',
      'Nested Worker inherits the selected native provider',
    );
    const devicesBeforeChurn = JSON.parse(__threeWorkerState()).gpu[9];
    const churned = await message({ action: 'device-churn' });
    const devicesAfterChurn = JSON.parse(__threeWorkerState()).gpu[9];
    assert(
      churned.churned === 8 && devicesAfterChurn <= devicesBeforeChurn,
      'Destroying devices releases the native session ledger before Session close',
    );
    const contextless = new OffscreenCanvas(8, 4);
    const bytes = new ArrayBuffer(16);
    throws(
      () => worker.postMessage({ contextless }, [contextless, contextless]),
      'DataCloneError',
    );
    assert(
      contextless.width === 8 && bytes.byteLength === 16,
      'Duplicate canvas transfer remains atomic',
    );
    throws(
      () =>
        structuredClone(
          {
            get value() {
              contextless.getContext('webgpu');
              return contextless;
            },
          },
          { transfer: [bytes, contextless] },
        ),
      'InvalidStateError',
    );
    assert(
      contextless.width === 8 && bytes.byteLength === 16,
      'Getter-created GPU context leaves every transfer attached',
    );
    const guardedCanvas = new OffscreenCanvas(9, 5),
      guardedBytes = new ArrayBuffer(8);
    const savedKeys = Map.prototype.keys,
      savedGet = WeakMap.prototype.get;
    let guardedError;
    try {
      structuredClone(
        {
          get value() {
            guardedCanvas.getContext('webgpu');
            Map.prototype.keys = WeakMap.prototype.get = () => {
              throw Error('Application hook after graph serialization');
            };
            return 42;
          },
        },
        { transfer: [guardedCanvas, guardedBytes] },
      );
    } catch (error) {
      guardedError = error;
    } finally {
      Map.prototype.keys = savedKeys;
      WeakMap.prototype.get = savedGet;
    }
    assert(
      guardedError?.name === 'InvalidStateError' &&
        guardedBytes.byteLength === 8 &&
        guardedCanvas.width === 9,
      'Prototype-mutating graph getters cannot bypass context validation or detach mixed transfers',
    );
    const resized = new OffscreenCanvas(8, 4);
    const received = structuredClone(
      {
        get canvas() {
          resized.width = 31;
          return resized;
        },
      },
      { transfer: [resized] },
    );
    assert(
      resized.width === 0 && received.canvas.width === 31,
      'Transfer reads dimensions after graph getters',
    );
    const echo = await message({ action: 'echo', canvas: received.canvas }, [
      received.canvas,
    ]);
    assert(
      echo.canvas.width === 31 && echo.canvas.height === 4,
      'Contextless canvas transfers back from another runtime',
    );
    const html = document.createElement('canvas');
    html.width = 96;
    html.height = 48;
    const offscreen = html.transferControlToOffscreen();
    new Uint8Array(globalThis.__flaxCanvasHost.transferToken(offscreen))[0] = 0x5a;
    throws(() => {
      html.width = 12;
    }, 'InvalidStateError');
    throws(() => html.transferControlToOffscreen(), 'InvalidStateError');
    show(html);
    const rendered = await message({ action: 'render', canvas: offscreen }, [
      offscreen,
    ]);
    assert(
      offscreen.width === 0 && rendered.width === 96 && rendered.height === 48,
      'Worker owns transferred drawing dimensions',
    );
    assert(
      Math.abs(rendered.time - rendered.now) < 50,
      'Late-created Worker rAF uses its own performance clock',
    );
    async function capture(phase, dimensions) {
      globalThis.__workerGpuCapture = null;
      report({ kind: 'worker-capture', phase });
      const deadline = performance.now() + 5000;
      while (globalThis.__workerGpuCapture === null && performance.now() < deadline)
        await new Promise(requestAnimationFrame);
      const value = globalThis.__workerGpuCapture;
      assert(value !== null, `${phase} Flutter capture completed`);
      assert(
        value.pixels >= 100,
        `${phase} native Worker texture is visible in Flutter: ${value.pixels}`,
      );
      if (phase === 'unused' || phase === 'terminated')
        assert(
          value.pixels === value.samples,
          `${phase} Worker canvas clears every sampled pixel`,
        );
      assert(
        value.layout.join() === dimensions.join(),
        `${phase} Flutter CanvasView layout follows native dimensions: ${value.layout}`,
      );
    }
    await capture('red', [96, 48]);
    const resizedFrame = await message({ action: 'resize' });
    assert(
      resizedFrame.width === 128 &&
        resizedFrame.height === 72 &&
        resizedFrame.time >= rendered.time,
      'Worker resize and root-vsync animation callbacks',
    );
    assert(
      Math.abs(resizedFrame.time - resizedFrame.now) < 50,
      'Resized Worker rAF retains the Worker performance clock',
    );
    await capture('green', [128, 72]);
    for (const [usage, flag] of [
      ['copy-dst', GPUTextureUsage.COPY_DST],
      ['storage', GPUTextureUsage.STORAGE_BINDING],
    ]) {
      const written = await message({ action: 'canvas-usage', usage });
      assert(
        written.usage === flag,
        `Worker ${usage} exposes exactly its requested usage`,
      );
      await capture(usage, [128, 72]);
      for (let frame = 0; frame < 3; frame++) {
        const unused = await message({ action: 'canvas-unused' });
        assert(
          unused.usage === flag,
          `Worker ${usage} retains usage on subsequent frames`,
        );
        await capture('unused', [128, 72]);
      }
    }
    const geometry = html.getBoundingClientRect();
    assert(
      geometry.width === 128 && geometry.height === 72,
      'HTML placeholder input geometry follows the resized native bitmap',
    );
    await message({ action: 'pending' });
    const termination = performance.now();
    worker.terminate();
    while (
      JSON.parse(__threeWorkerState()).workers.some(Boolean) &&
      performance.now() - termination < 5000
    )
      await new Promise((yes) => setTimeout(yes, 5));
    assert(
      JSON.parse(__threeWorkerState()).workers.every((count) => count === 0),
      'Worker channels and native runtimes retire',
    );
    assert(
      performance.now() - termination < 2000,
      'Forced Worker termination retires pending GPU work without application callbacks',
    );
    await capture('terminated', [128, 72]);
    assert(errors.length === 0, 'Worker GPU callbacks stay in their live runtime');

    const tokensBeforeDrop = JSON.parse(__threeWorkerState()).gpu[6];
    const dropped = new Worker(url);
    const droppedCanvas = new OffscreenCanvas(7, 5);
    const droppedBitmap = await createImageBitmap(new ImageData(2, 2));
    const droppedBytes = new ArrayBuffer(8);
    dropped.postMessage({ ignored: true }, [
      droppedCanvas,
      droppedBitmap,
      droppedBytes,
    ]);
    dropped.terminate();
    assert(
      droppedCanvas.width === 0 &&
        JSON.parse(__threeWorkerState()).gpu[6] === tokensBeforeDrop,
      'Discarding an unopened native packet releases transfer-only canvas leases',
    );
    imageCheck(
      droppedBitmap.width === 0 && droppedBytes.byteLength === 0,
      'Unopened mixed packet releases transfer-only image ownership',
    );
    stillImages.cases.push('mixed-transfer-drop');

    // The received canvas must retain native ownership after sender V8 and FFI close.
    const sender = new Worker(url);
    await new Promise((yes, no) => {
      sender.onmessage = ({ data }) => (data.error ? no(Error(data.error)) : yes(data));
      sender.onerror = (event) => no(Error(event.message));
      sender.postMessage({ action: 'ready' });
    });
    const returned = new Promise((yes, no) => {
      sender.onmessage = ({ data }) =>
        data.error ? no(Error(data.error)) : yes(data.canvas);
      sender.onerror = (event) => no(Error(event.message));
    });
    sender.postMessage({ action: 'return' });
    const retirement = performance.now();
    let senderState = JSON.parse(__threeWorkerState());
    while (senderState.workers[1] !== 0 && performance.now() - retirement < 5000) {
      await new Promise((yes) => setTimeout(yes, 5));
      senderState = JSON.parse(__threeWorkerState());
    }
    assert(
      senderState.workers[1] === 0,
      `Sender V8 and FFI retire before the returned canvas is used: ${JSON.stringify(senderState)}`,
    );
    const returnedCanvas = await returned;
    assert(
      returnedCanvas.width === 23 && returnedCanvas.height === 11,
      'Native canvas lease survives sender library retirement',
    );
    sender.terminate();
    const adapter = await navigator.gpu.requestAdapter();
    const mainDevice = await adapter.requestDevice();
    async function renderReceived(value, phase, dimensions) {
      const context = value.getContext('webgpu');
      context.configure({
        device: mainDevice,
        format: navigator.gpu.getPreferredCanvasFormat(),
        alphaMode: 'opaque',
      });
      show(value);
      const encoder = mainDevice.createCommandEncoder();
      const pass = encoder.beginRenderPass({
        colorAttachments: [
          {
            view: context.getCurrentTexture().createView(),
            clearValue: [1, 0, 0, 1],
            loadOp: 'clear',
            storeOp: 'store',
          },
        ],
      });
      pass.end();
      mainDevice.queue.submit([encoder.finish()]);
      await capture(phase, dimensions);
    }
    try {
      const rootTarget = mainDevice.createTexture({
        size: [2, 2],
        format: 'rgba8unorm',
        usage:
          GPUTextureUsage.COPY_SRC |
          GPUTextureUsage.COPY_DST |
          GPUTextureUsage.RENDER_ATTACHMENT,
      });
      try {
        for (const bitmap of [imageResult.bitmap, packet.bitmap]) {
          mainDevice.queue.copyExternalImageToTexture(
            { source: bitmap },
            { texture: rootTarget },
            [2, 2],
          );
          const pixels = await readTexturePixels(mainDevice, rootTarget);
          imageCheck(
            pixels.join() === pattern.join(),
            'Root uploads exact Worker bitmap pixels after sender runtime retirement',
          );
          bitmap.close();
        }
        stillImages.cases.push('root-receiver');
      } finally {
        rootTarget.destroy();
      }
      const wide = imageResult.wide;
      const wideTarget = mainDevice.createTexture({
        size: [2, 2],
        format: 'rgba16float',
        usage:
          GPUTextureUsage.COPY_SRC |
          GPUTextureUsage.COPY_DST |
          GPUTextureUsage.RENDER_ATTACHMENT,
      });
      try {
        mainDevice.queue.copyExternalImageToTexture(
          { source: wide.bitmap },
          {
            texture: wideTarget,
            colorSpace: 'display-p3',
            premultipliedAlpha: true,
          },
          [2, 2],
        );
        const bytes = new Uint8Array(
          await readTexturePixels(mainDevice, wideTarget, 2, 2, 8),
        );
        imageCheck(
          new Float16Array(bytes.buffer).every((value, i) => value === wide.values[i]),
          'Root uploads exact P3 FP16 pixels from the retired Worker',
        );
        stillImages.cases.push('wide-color-root-receiver');
      } finally {
        wideTarget.destroy();
        wide.bitmap.close();
      }
      const local = new OffscreenCanvas(40, 20);
      const clone = structuredClone(local, { transfer: [local] });
      await renderReceived(clone, 'clone', [40, 20]);
      await renderReceived(returnedCanvas, 'returned', [23, 11]);
    } finally {
      mainDevice.destroy();
    }
    return {
      compute: computed.values,
      canvasConfiguration,
      stillImages,
      roundTripMs,
      pipelineAndEncodingMs: computed.pipelineAndEncodingMs,
      completionMs: computed.completionMs,
      rendered: ['red', 'green', 'copy-dst', 'storage', 'unused'],
      resized: [128, 72],
      deviceLedger: [devicesBeforeChurn, devicesAfterChurn],
    };
  } finally {
    worker.terminate();
    URL.revokeObjectURL(url);
  }
}

export async function armGpuWorkerForSessionClose() {
  const url = URL.createObjectURL(
    new Blob([
      `(${workerEntry.toString()})(${verifyCanvasConfiguration.toString()},${readTexturePixels.toString()},${readCanvasPixels.toString()},${verifyWideStillImages.toString()},${verifyWorkerStillImages.toString()})`,
    ]),
  );
  const worker = new Worker(url);
  try {
    await new Promise((resolve, reject) => {
      worker.onmessage = ({ data }) =>
        data.error ? reject(Error(data.error)) : resolve(data);
      worker.onerror = (event) => reject(Error(event.message));
      worker.postMessage({ action: 'session-close' });
    });
    return { armed: true };
  } catch (error) {
    worker.terminate();
    throw error;
  } finally {
    URL.revokeObjectURL(url);
  }
}

export async function verifyGpuDeviceGc(assert) {
  if (typeof globalThis.__webGpuCollect !== 'function') {
    return {
      supported: false,
      reason: 'Requires the matching instrumented engine collect entry',
    };
  }
  const before = JSON.parse(__threeWorkerState()).gpu[9];
  async function unretained() {
    const adapter = await navigator.gpu.requestAdapter();
    const value = await adapter.requestDevice();
    return new WeakRef(value);
  }
  const devices = [];
  for (let index = 0; index < 3; index++) devices.push(await unretained());
  for (let attempt = 0; attempt < 8; attempt++) {
    const previous = globalThis.__webGpuGcEpoch ?? 0;
    __webGpuCollect();
    while ((globalThis.__webGpuGcEpoch ?? 0) === previous)
      await new Promise(requestAnimationFrame);
    await new Promise((resolve) => setTimeout(resolve, 5));
    if (
      devices.every((value) => value.deref() === undefined) &&
      JSON.parse(__threeWorkerState()).gpu[9] <= before
    )
      break;
  }
  const after = JSON.parse(__threeWorkerState()).gpu[9];
  assert(
    devices.every((value) => value.deref() === undefined),
    'Unretained live GPUDevices are actually collected',
  );
  assert(
    after <= before,
    'GPUDevice GC releases native ledger ownership without explicit device.destroy',
  );
  return { supported: true, collected: devices.length, before, after };
}
