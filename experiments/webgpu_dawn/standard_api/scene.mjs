// Shared verbatim by Flax and the Chromium browser benchmark.
export function distribution(values) {
  const sorted = [...values].sort((a, b) => a - b);
  const percentile = (p) => sorted[Math.max(0, Math.ceil(sorted.length * p) - 1)] ?? 0;
  return {
    count: sorted.length,
    p50Ms: percentile(0.5),
    p95Ms: percentile(0.95),
    p99Ms: percentile(0.99),
  };
}

export async function runPhase({
  canvas,
  shader,
  width,
  height,
  gpuTiming = false,
  durationMs = 8000,
  detailed = false,
  snapshot,
  mark,
}) {
  const adapter = await navigator.gpu.requestAdapter({
    powerPreference: 'high-performance',
  });
  if (!adapter || adapter.info.isFallbackAdapter)
    throw Error('Hardware WebGPU adapter required');
  const device = await adapter.requestDevice({
    requiredFeatures: gpuTiming ? ['timestamp-query'] : [],
  });
  const errors = [];
  device.addEventListener('uncapturederror', (event) =>
    errors.push(event.error.message),
  );
  let retired = false;
  device.lost.then((info) => {
    if (!retired) errors.push(`Device lost: ${info.message}`);
  });
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('webgpu');
  context.configure({
    device,
    format: 'bgra8unorm',
    colorSpace: 'srgb',
    alphaMode: 'opaque',
  });
  const module = device.createShaderModule({ code: shader });
  const compilation = await module.getCompilationInfo();
  if (compilation.messages.some((message) => message.type === 'error'))
    throw Error('Shader compilation failed');
  const pipeline = await device.createRenderPipelineAsync({
    layout: 'auto',
    vertex: { module, entryPoint: 'vertex' },
    fragment: { module, entryPoint: 'fragment', targets: [{ format: 'bgra8unorm' }] },
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
  const queries = gpuTiming
    ? device.createQuerySet({ type: 'timestamp', count: 2 })
    : null;
  const resolve = gpuTiming
    ? device.createBuffer({
        size: 16,
        usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC,
      })
    : null;
  const readback = gpuTiming
    ? device.createBuffer({
        size: 16,
        usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
      })
    : null;
  const samples = Object.fromEntries(
    [
      'writeBuffer',
      'currentTexture',
      'encodeCommands',
      'submit',
      'apiTotal',
      'completionRegistration',
      'completionPromise',
      'rafInterval',
      'callbackInterval',
      'gpuPass',
    ].map((name) => [name, []]),
  );
  const warmup = 31;
  let submitted = 0,
    completed = 0,
    skippedBusy = 0,
    origin,
    lastRaf,
    lastCallback;
  let pending = Promise.resolve(),
    busy = false,
    timestampReadbacks = 0;
  let snapshotValue;
  await new Promise((done, fail) => {
    function frame(time) {
      try {
        const callbackTime = performance.now();
        if (lastCallback !== undefined && submitted >= warmup)
          samples.callbackInterval.push(callbackTime - lastCallback);
        if (lastRaf !== undefined && submitted >= warmup)
          samples.rafInterval.push(time - lastRaf);
        lastCallback = callbackTime;
        lastRaf = time;
        origin ??= time;
        if (busy && gpuTiming) {
          skippedBusy++;
          requestAnimationFrame(frame);
          return;
        }
        busy = true;
        const verification = time - origin >= durationMs;
        const measured = submitted >= warmup && !verification;
        const sequence = ++submitted;
        if (mark) mark(`webgpu-start-${sequence}`);
        const start = performance.now();
        parameters[0] = (time - origin) / 1000;
        device.queue.writeBuffer(uniform, 0, parameters);
        const uploaded = detailed ? performance.now() : 0;
        const texture = context.getCurrentTexture();
        const acquired = detailed ? performance.now() : 0;
        const encoder = device.createCommandEncoder();
        const descriptor = {
          colorAttachments: [
            {
              view: texture.createView(),
              loadOp: 'clear',
              storeOp: 'store',
              clearValue: { r: 0, g: 0, b: 0, a: 1 },
            },
          ],
        };
        if (gpuTiming)
          descriptor.timestampWrites = {
            querySet: queries,
            beginningOfPassWriteIndex: 0,
            endOfPassWriteIndex: 1,
          };
        const pass = encoder.beginRenderPass(descriptor);
        pass.setPipeline(pipeline);
        pass.setBindGroup(0, group);
        pass.draw(3);
        pass.end();
        if (gpuTiming) {
          encoder.resolveQuerySet(queries, 0, 2, resolve, 0);
          encoder.copyBufferToBuffer(resolve, 0, readback, 0, 16);
        }
        const commands = encoder.finish();
        const encoded = detailed ? performance.now() : 0;
        device.queue.submit([commands]);
        const submittedAt = performance.now();
        pending = device.queue
          .onSubmittedWorkDone()
          .then(async () => {
            completed++;
            if (measured) samples.completionPromise.push(performance.now() - start);
            if (mark) mark(`webgpu-done-${sequence}`);
            if (gpuTiming) {
              await readback.mapAsync(GPUMapMode.READ);
              const ticks = new BigUint64Array(readback.getMappedRange());
              if (ticks[1] < ticks[0]) throw Error('Non-monotonic GPU timestamps');
              if (measured) samples.gpuPass.push(Number(ticks[1] - ticks[0]) / 1e6);
              readback.unmap();
              timestampReadbacks++;
            }
            busy = false;
          })
          .catch(fail);
        const registered = detailed ? performance.now() : 0;
        if (measured) {
          samples.apiTotal.push(submittedAt - start);
          if (detailed) {
            samples.writeBuffer.push(uploaded - start);
            samples.currentTexture.push(acquired - uploaded);
            samples.encodeCommands.push(encoded - acquired);
            samples.submit.push(submittedAt - encoded);
            samples.completionRegistration.push(registered - submittedAt);
          }
        }
        if (verification) {
          snapshotValue = snapshot?.();
          done();
        } else requestAnimationFrame(frame);
      } catch (error) {
        fail(error);
      }
    }
    requestAnimationFrame(frame);
  });
  await pending;
  await device.queue.onSubmittedWorkDone();
  if (errors.length || completed !== submitted || samples.apiTotal.length < 30)
    throw Error(JSON.stringify({ errors, completed, submitted }));
  const clockStart = performance.now();
  for (let i = 0; i < 5000; i++) performance.now();
  const clockCallMs = (performance.now() - clockStart) / 5000;
  return {
    result: {
      width,
      height,
      format: 'bgra8unorm',
      warmupSubmittedFrames: warmup,
      submitted,
      completed,
      skippedBusy,
      durationMs,
      detailed,
      clockCallMs,
      renderGpuTimingEnabled: gpuTiming,
      frameCpuReadbacks: 0,
      timestampReadbacks,
      rafCallbackFps:
        (samples.callbackInterval.length * 1000) /
        samples.callbackInterval.reduce((a, b) => a + b, 0),
      samples: Object.fromEntries(
        Object.entries(samples).map(([key, values]) => [key, distribution(values)]),
      ),
      adapter: {
        vendor: adapter.info.vendor,
        architecture: adapter.info.architecture,
        device: adapter.info.device,
        description: adapter.info.description,
        isFallbackAdapter: adapter.info.isFallbackAdapter,
      },
      error: '',
    },
    snapshot: snapshotValue,
    close() {
      retired = true;
      context.unconfigure();
      device.destroy();
    },
  };
}
