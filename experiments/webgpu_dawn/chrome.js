const canvas = document.querySelector('canvas');
const footer = document.querySelector('footer');
const shader = await (await fetch('scene.wgsl')).text();
const shaderSha256 = [
  ...new Uint8Array(
    await crypto.subtle.digest('SHA-256', new TextEncoder().encode(shader)),
  ),
]
  .map((byte) => byte.toString(16).padStart(2, '0'))
  .join('');
const warmup = 31;

function distribution(values) {
  const sorted = [...values].sort((a, b) => a - b);
  const p = (fraction) =>
    sorted[Math.max(0, Math.ceil(sorted.length * fraction) - 1)] ?? 0;
  return { count: sorted.length, p50Ms: p(0.5), p95Ms: p(0.95), p99Ms: p(0.99) };
}

async function phase(width, height, gpuTiming, durationMs, trace) {
  if (!isSecureContext || !navigator.gpu)
    throw Error('WebGPU requires a supported secure context');
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
    alphaMode: 'opaque',
    colorSpace: 'srgb',
  });
  const module = device.createShaderModule({ code: shader });
  const messages = await module.getCompilationInfo();
  if (messages.messages.some((message) => message.type === 'error'))
    throw Error(JSON.stringify(messages.messages));
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
  const params = new Float32Array([0, width, height, 0]);
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
  const calls = [],
    completions = [],
    intervals = [],
    callbackIntervals = [],
    gpu = [];
  let submitted = 0,
    completed = 0,
    skipped = 0,
    frames = 0,
    busy = false;
  let origin,
    lastTime,
    pending = Promise.resolve(),
    timestampReadbacks = 0;
  let snapshot;
  let lastCallback;
  await new Promise((resolvePhase, rejectPhase) => {
    function frame(time) {
      try {
        const callbackTime = performance.now();
        if (lastCallback !== undefined && submitted >= warmup)
          callbackIntervals.push(callbackTime - lastCallback);
        lastCallback = callbackTime;
        if (document.visibilityState !== 'visible')
          throw Error('Benchmark page was hidden');
        if (origin === undefined) origin = time;
        if (lastTime !== undefined && submitted >= warmup)
          intervals.push(time - lastTime);
        lastTime = time;
        const verification = time - origin >= durationMs;
        frames++;
        if (busy && gpuTiming) {
          skipped++;
          requestAnimationFrame(frame);
          return;
        }
        busy = true;
        const measured = submitted >= warmup && !verification;
        const sequence = ++submitted;
        const start = performance.now();
        if (trace) performance.mark(`webgpu-start-${sequence}`);
        params[0] = (time - origin) / 1000;
        device.queue.writeBuffer(uniform, 0, params);
        const encoder = device.createCommandEncoder();
        const texture = context.getCurrentTexture();
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
        device.queue.submit([encoder.finish()]);
        pending = device.queue
          .onSubmittedWorkDone()
          .then(async () => {
            completed++;
            if (measured) completions.push(performance.now() - start);
            if (trace) performance.mark(`webgpu-done-${sequence}`);
            if (gpuTiming) {
              await readback.mapAsync(GPUMapMode.READ);
              const ticks = new BigUint64Array(readback.getMappedRange());
              if (ticks[1] < ticks[0]) throw Error('GPU timestamps are not monotonic');
              if (measured) gpu.push(Number(ticks[1] - ticks[0]) / 1e6);
              readback.unmap();
              timestampReadbacks++;
            }
            busy = false;
          })
          .catch(rejectPhase);
        if (measured) calls.push(performance.now() - start);
        if (verification) {
          // WebGPU canvas contents expire after this animation task.
          snapshot = canvas.toDataURL('image/png');
          resolvePhase();
          return;
        }
        if (sequence % 120 === 0)
          footer.textContent = `${adapter.info.description || adapter.info.vendor} | GPU frames: ${completed} | Chrome WebGPU`;
        requestAnimationFrame(frame);
      } catch (error) {
        rejectPhase(error);
      }
    }
    requestAnimationFrame(frame);
  });
  await pending;
  await device.queue.onSubmittedWorkDone();
  if (errors.length || completed < 60 || calls.length < 30)
    throw Error(JSON.stringify({ errors, completed, measured: calls.length }));
  const bitmap = await createImageBitmap(await (await fetch(snapshot)).blob());
  const check = document.createElement('canvas');
  check.width = width;
  check.height = height;
  const pixels = check.getContext('2d', { willReadFrequently: true });
  pixels.drawImage(bitmap, 0, 0);
  bitmap.close();
  const rgba = pixels.getImageData(0, 0, width, height).data;
  const colors = new Set();
  for (let y = Math.floor(height / 3); y < (height * 2) / 3; y += 5) {
    for (let x = Math.floor(width / 3); x < (width * 2) / 3; x += 5) {
      const index = (y * width + x) * 4;
      colors.add((rgba[index] << 16) | (rgba[index + 1] << 8) | rgba[index + 2]);
    }
  }
  if (colors.size < 20) throw Error(`Snapshot contains only ${colors.size} colors`);
  const receipt = {
    width,
    height,
    submitted,
    completed,
    skippedBusy: skipped,
    jsFrames: frames,
    warmupSubmittedFrames: warmup,
    renderGpuTimingEnabled: gpuTiming,
    jsSubmitCall: distribution(calls),
    submitToProducerGpuCompletionPromise: distribution(completions),
    rafInterval: distribution(intervals),
    renderGpuPass: distribution(gpu),
    rafCallbackInterval: distribution(callbackIntervals),
    rafCallbackFps:
      (callbackIntervals.length * 1000) /
      callbackIntervals.reduce((total, value) => total + value, 0),
    gpuTimestampReadbacks: timestampReadbacks,
    frameCpuReadbacks: 0,
    adapter: {
      vendor: adapter.info.vendor,
      architecture: adapter.info.architecture,
      device: adapter.info.device,
      description: adapter.info.description,
      isFallbackAdapter: adapter.info.isFallbackAdapter,
    },
    viewport: {
      devicePixelRatio,
      logicalWidth: innerWidth,
      logicalHeight: innerHeight,
      physicalWidth: innerWidth * devicePixelRatio,
      physicalHeight: innerHeight * devicePixelRatio,
      displayPhysicalWidth: screen.width * devicePixelRatio,
      displayPhysicalHeight: screen.height * devicePixelRatio,
      screenX,
      screenY,
    },
    error: errors.join('\n'),
    verificationColors: colors.size,
    verificationDraws: 1,
    snapshot,
  };
  context.unconfigure();
  retired = true;
  device.destroy();
  return receipt;
}

globalThis.runBenchmark = async ({
  gpuTiming = false,
  durationMs = 8000,
  trace = false,
} = {}) => {
  const phases = [];
  for (const [width, height] of [
    [960, 540],
    [640, 360],
    [960, 540],
  ]) {
    phases.push(await phase(width, height, gpuTiming, durationMs, trace));
  }
  return {
    passed: true,
    shaderSha256,
    userAgent: navigator.userAgent,
    crossOriginIsolated,
    phases,
    closedDevices: 3,
    snapshotReadbacks: 3,
    steadyStateFrameReadbacks: 0,
    gpuTiming,
  };
};
globalThis.benchmarkReady = true;
