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

const { modeOrder, refreshRate, workerVideoAcquisition } = globalThis.__videoConfig;
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

function primary(pixel, channel) {
  return (
    pixel[channel] > 220 &&
    pixel.slice(0, 3).every((value, i) => i === channel || value < 35) &&
    pixel[3] === 255
  );
}

function nearPixel(actual, expected, tolerance = 5) {
  return actual.every(
    (value, channel) => Math.abs(value - expected[channel]) <= tolerance,
  );
}

function verifyFrameTransferRollback(source) {
  const leases = () =>
    JSON.parse(report({ kind: 'resources' }))
      .slice(10, 12)
      .join();
  const before = leases();
  const reject = (operation, name = 'DataCloneError') => {
    let failure;
    try {
      operation();
    } catch (error) {
      failure = error.name;
    }
    require(failure === name, `Frame transfer failure: ${failure} != ${name}`);
  };
  for (const mode of ['duplicate', 'uncloneable', 'throw', 'close', 'nested']) {
    const frame = source.clone();
    const bytes = new ArrayBuffer(4);
    let nested;
    const payload = {
      frame,
      get last() {
        if (mode === 'uncloneable') return () => {};
        if (mode === 'throw') throw new RangeError('Graph getter');
        if (mode === 'close') frame.close();
        if (mode === 'nested') nested = structuredClone(frame, { transfer: [frame] });
        return true;
      },
    };
    const transfer = mode === 'duplicate' ? [bytes, frame, frame] : [bytes, frame];
    reject(
      () => structuredClone(payload, { transfer }),
      mode === 'throw' ? 'RangeError' : 'DataCloneError',
    );
    require(bytes.byteLength ===
      4, `Failed frame transfer detached another buffer: ${mode}`);
    if (mode !== 'close' && mode !== 'nested')
      require(frame.format ===
        source.format, `Failed transfer closed the frame: ${mode}`);
    if (mode === 'nested')
      require(frame.format === null &&
        nested?.format === source.format, 'Nested transfer lost ownership');
    frame.close();
    nested?.close();
    require(leases() === before, `Failed frame transfer retained a lease: ${mode}`);
  }
  const changed = source.clone();
  Object.setPrototypeOf(changed, null);
  reject(() => structuredClone(changed));
  const received = structuredClone(changed, { transfer: [changed] });
  require(received instanceof
    VideoFrame, 'Changed prototype lost the VideoFrame brand');
  received.close();
  reject(() => structuredClone(null, { transfer: [changed] }));

  const queued = source.clone();
  const { port1, port2 } = new MessageChannel();
  port1.postMessage(queued, [queued]);
  require(queued.format === null &&
    leases() !== before, 'Queued frame lost its native lease');
  port2.close();
  port1.close();
  require(leases() === before, 'Discarding the queue retained a video lease');

  for (const [prototype, method] of [
    [WeakMap.prototype, 'get'],
    [WeakMap.prototype, 'set'],
    [Set.prototype, 'add'],
  ]) {
    const frame = source.clone();
    const bytes = new Uint8Array([19, 23]).buffer;
    const previous = prototype[method];
    let result;
    try {
      result = structuredClone(
        {
          frame,
          alias: frame,
          bytes,
          get last() {
            prototype[method] = () => {
              throw new Error('Unexpected collection hook');
            };
            return true;
          },
        },
        { transfer: [frame, bytes] },
      );
    } finally {
      prototype[method] = previous;
    }
    require(frame.format === null &&
      bytes.byteLength === 0 &&
      result.last &&
      result.frame instanceof VideoFrame &&
      result.frame === result.alias &&
      result.frame.format === source.format &&
      new Uint8Array(result.bytes).join() ===
        '19,23', `Referenced frame transfer invoked ${method} after commit`);
    result.frame.close();
    require(leases() ===
      before, `Received frame retained a lease after ${method} hook`);
  }

  const unused = source.clone();
  const oldGet = WeakMap.prototype.get;
  try {
    structuredClone(
      {
        get last() {
          WeakMap.prototype.get = () => {
            throw new Error('Unexpected WeakMap hook');
          };
          return true;
        },
      },
      { transfer: [unused] },
    );
  } finally {
    WeakMap.prototype.get = oldGet;
  }
  require(unused.format === null, 'Transfer-only frame did not close');
  return true;
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
  const gray = result.topRight.slice(0, 3);
  require(primary(result.topLeft, index) &&
    primary(result.bottomRight, 2) &&
    primary(result.flutterTexture, index) &&
    gray.every((value) => value > 100 && value < 180) &&
    Math.max(...gray) - Math.min(...gray) <=
      8, `Wrong displayed BT.709 pixels: ${JSON.stringify(result)}`);
}

function directEncoder(device, format) {
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
  return function encode(frame, target, useBundle = false, recording) {
    const external = device.importExternalTexture({ source: frame });
    if (!(external instanceof GPUExternalTexture))
      throw new Error('Wrong external texture brand');
    const group = device.createBindGroup({
      layout,
      entries: [
        { binding: 0, resource: external },
        { binding: 1, resource: sampler },
      ],
    });
    const encoder = recording?.encoder ?? device.createCommandEncoder();
    const pass =
      recording?.pass ??
      encoder.beginRenderPass({
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
  };
}

function directStage(canvas, device) {
  const context = canvas.getContext('webgpu');
  const format = navigator.gpu.getPreferredCanvasFormat();
  context.configure({ device, format, alphaMode: 'opaque' });
  const encode = directEncoder(device, format);
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
        const recorded = [false, true].map((useBundle) => {
          const original = acquireVideoFrame('movie');
          const clone = original.clone();
          original.close();
          return encode(clone, target, useBundle);
        });
        const unused = new WeakRef(acquireVideoFrame('movie'));
        const unusedReceived = new WeakRef(
          (() => {
            const frame = acquireVideoFrame('movie');
            return structuredClone(frame, { transfer: [frame] });
          })(),
        );
        for (let attempt = 0; attempt < 20; attempt++) {
          // The previous WeakRef read keeps the control alive for that job.
          await raf();
          globalThis.__videoGcPressure = Array.from({ length: 65536 }, (_, i) => ({
            index: i,
            pair: [i, i + 1],
          }));
          await new Promise((resolve) => setTimeout(resolve, 8));
          if (unused.deref() === undefined && unusedReceived.deref() === undefined)
            break;
        }
        delete globalThis.__videoGcPressure;
        require(unused.deref() === undefined, 'GC control frame was still reachable');
        require(unusedReceived.deref() ===
          undefined, 'Received GC control frame was still reachable');
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
      const before = JSON.parse(report({ kind: 'resources' }));
      const clone = frame.clone();
      const retimed = new VideoFrame(frame, { timestamp: -1, duration: 1000 });
      const withClones = JSON.parse(report({ kind: 'resources' }));
      require(withClones[10] === before[10] + 2 &&
        withClones[11] ===
          before[11], `Clones copied or reacquired pixels: ${before} -> ${withClones}`);
      const timestamp = frame.timestamp,
        duration = frame.duration;
      const colors = frame.colorSpace;
      const command = encode(frame, target);
      const clonedCommand = encode(clone, target);
      const retimedCommand = encode(retimed, target, true);
      const rollback = verifyFrameTransferRollback(frame);
      const { port1, port2 } = new MessageChannel();
      const bytes = new Uint8Array([42]).buffer;
      const moved = structuredClone(
        {
          frame,
          alias: frame,
          bytes,
          port: port2,
          get sourceLive() {
            return frame.format === 'NV12';
          },
        },
        { transfer: [frame, bytes, port2] },
      );
      require(moved.frame instanceof VideoFrame &&
        moved.frame === moved.alias &&
        moved.sourceLive &&
        frame.format === null &&
        moved.frame.timestamp === timestamp &&
        moved.frame.duration === duration &&
        moved.frame.colorSpace instanceof VideoColorSpace &&
        moved.frame.colorSpace !== colors &&
        JSON.stringify(moved.frame.colorSpace) === JSON.stringify(colors) &&
        bytes.byteLength === 0 &&
        new Uint8Array(moved.bytes)[0] === 42 &&
        moved.port instanceof
          MessagePort, 'Mixed structuredClone lost frame data or aliases');
      moved.port.close();
      port1.close();
      require(frame.codedWidth === 0 &&
        frame.codedHeight === 0 &&
        frame.displayWidth === 0 &&
        frame.displayHeight === 0 &&
        frame.codedRect === null &&
        frame.visibleRect === null &&
        frame.format === null &&
        frame.rotation === 0 &&
        !frame.flip &&
        frame.timestamp === timestamp &&
        frame.duration === duration &&
        frame.colorSpace ===
          colors, 'Closing a frame changed retained metadata or left live dimensions');
      for (const read of [
        () => frame.clone(),
        () => frame.metadata(),
        () => new VideoFrame(frame),
      ]) {
        let failure;
        try {
          read();
        } catch (error) {
          failure = error.name;
        }
        require(failure === 'InvalidStateError', `Closed frame operation: ${failure}`);
      }
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
      frame.close();
      device.pushErrorScope('validation');
      device.queue.submit([clonedCommand, retimedCommand]);
      const clonePixel = await uploadedPixel(device, clone, 'srgb');
      const cloneError = await device.popErrorScope();
      require(!cloneError &&
        primary(clonePixel, 0) &&
        retimed.timestamp === -1 &&
        retimed.duration === 1000 &&
        clone.timestamp === timestamp &&
        clone.duration ===
          duration, `Clone lost independent pixels/timing: ${cloneError?.message}, ${clonePixel}`);
      clone.close();
      device.pushErrorScope('validation');
      device.queue.submit([clonedCommand]);
      const expiredClone = await device.popErrorScope();
      require(expiredClone instanceof
        GPUValidationError, 'Closing the clone did not expire its imported external texture');
      const retainedPixel = await uploadedPixel(device, retimed, 'srgb');
      require(primary(
        retainedPixel,
        0,
      ), `Closing one clone expired its sibling: ${retainedPixel}`);
      const receivedPixel = await uploadedPixel(device, moved.frame, 'srgb');
      require(primary(
        receivedPixel,
        0,
      ), `Transferred frame lost independent pixels: ${receivedPixel}`);
      moved.frame.close();
      retimed.close();
      target.destroy();
      return {
        closedError,
        resubmitError: error.message,
        clonePixel,
        retainedPixel,
        receivedPixel,
        rollback,
        before,
        withClones,
      };
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

function checkFrame(frame, format, fullRange = format === 'BGRA') {
  require(frame instanceof VideoFrame &&
    frame.format === format &&
    frame.codedWidth === width &&
    frame.codedHeight === height &&
    frame.displayWidth === width &&
    frame.displayHeight ===
      height, `Decoder did not supply a 1920x1080 ${format} VideoFrame`);
  const expectedRect = {
    x: 0,
    y: 0,
    width,
    height,
    top: 0,
    right: width,
    bottom: height,
    left: 0,
  };
  require(frame.rotation === 0 &&
    frame.flip === false &&
    frame.codedRect !== frame.codedRect &&
    JSON.stringify(frame.codedRect.toJSON()) === JSON.stringify(expectedRect) &&
    JSON.stringify(frame.visibleRect.toJSON()) === JSON.stringify(expectedRect) &&
    Object.isFrozen(frame.visibleRect), 'Wrong readonly full-frame rectangles');
  const colors = frame.colorSpace;
  require(colors instanceof VideoColorSpace &&
    colors.primaries === 'bt709' &&
    colors.matrix === (format === 'NV12' ? 'bt709' : 'rgb') &&
    colors.fullRange === fullRange &&
    (colors.transfer === 'bt709' ||
      (format === 'BGRA' && colors.transfer === 'iec61966-2-1')) &&
    JSON.stringify(colors.toJSON()) ===
      JSON.stringify({
        primaries: colors.primaries,
        transfer: colors.transfer,
        matrix: colors.matrix,
        fullRange,
      }) &&
    Object.keys(frame.metadata()).length === 0 &&
    frame.metadata() !==
      frame.metadata(), `Wrong host frame metadata: ${JSON.stringify(colors)}`);
  return frame;
}

async function verifyFrameReadback(frame, index) {
  const check = (ok, message) => {
    if (!ok) throw new Error(message);
  };
  const width = frame.codedWidth,
    height = frame.codedHeight;
  const nv12 = frame.format === 'NV12';
  const expectedLayout = nv12
    ? [
        { offset: 0, stride: width },
        { offset: width * height, stride: width },
      ]
    : [{ offset: 0, stride: width * 4 }];
  const full = new Uint8Array(frame.allocationSize());
  const layout = await frame.copyTo(full);
  check(
    JSON.stringify(layout) === JSON.stringify(expectedLayout) &&
      full.length === width * height * (nv12 ? 1.5 : 4),
    'Wrong original plane allocation',
  );
  const x = 128,
    y = 128;
  let pixel;
  if (nv12) {
    const uv = layout[1].offset + (y / 2) * width + x;
    const range = frame.colorSpace.fullRange;
    const luma = ((full[y * width + x] - (range ? 0 : 16)) * 255) / (range ? 255 : 219);
    const cb = ((full[uv] - 128) * 255) / (range ? 255 : 224);
    const cr = ((full[uv + 1] - 128) * 255) / (range ? 255 : 224);
    pixel = [
      luma + 1.5748 * cr,
      luma - 0.18732427 * cb - 0.46812427 * cr,
      luma + 1.8556 * cb,
      255,
    ].map((value) => Math.round(Math.max(0, Math.min(255, value))));
  } else {
    const at = (y * width + x) * 4;
    pixel = [full[at + 2], full[at + 1], full[at], full[at + 3]];
  }
  check(
    pixel[index] > 220 &&
      pixel[3] === 255 &&
      pixel.slice(0, 3).every((value, channel) => channel === index || value < 35),
    `Wrong original ${frame.format} bytes: ${pixel}`,
  );

  const options = {
    rect: { x, y, width: 3, height: 3 },
    layout: nv12
      ? [
          { offset: 16, stride: 5 },
          { offset: 1, stride: 6 },
        ]
      : [{ offset: 3, stride: 16 }],
  };
  const size = frame.allocationSize(options);
  const shared = typeof SharedArrayBuffer === 'function';
  const destination = new Uint8Array(
    shared ? new SharedArrayBuffer(size + 16) : new ArrayBuffer(size + 16),
  ).fill(165);
  const view = new DataView(destination.buffer, 8, size);
  const cloneSource = frame.clone(),
    clone = cloneSource.clone();
  cloneSource.close();
  let cropLayout;
  try {
    const pending = clone.copyTo(view, options);
    clone.close();
    cropLayout = await pending;
    check(
      JSON.stringify(cropLayout) === JSON.stringify(options.layout),
      'Wrong custom copy layout',
    );
    const expected = new Uint8Array(destination.length).fill(165);
    for (let plane = 0; plane < layout.length; plane++) {
      const sample = plane === 1 ? 2 : 1,
        bytesPerSample = nv12 ? sample : 4;
      const rowBytes = Math.ceil(3 / sample) * bytesPerSample;
      for (let row = 0; row < Math.ceil(3 / sample); row++) {
        const at =
          layout[plane].offset +
          (y / sample + row) * layout[plane].stride +
          (x / sample) * bytesPerSample;
        expected.set(
          full.subarray(at, at + rowBytes),
          8 + options.layout[plane].offset + row * options.layout[plane].stride,
        );
      }
    }
    check(
      destination.every((value, at) => value === expected[at]),
      'Cropped plane bytes or destination padding changed',
    );
  } finally {
    clone.close();
  }
  let closed;
  try {
    await clone.copyTo(view, options);
  } catch (error) {
    closed = error.name;
  }
  check(closed === 'InvalidStateError', 'Closed clone was readable');
  const reentrant = frame.clone();
  let getterClosed;
  try {
    await reentrant.copyTo(view, {
      get rect() {
        reentrant.close();
        return options.rect;
      },
    });
  } catch (error) {
    getterClosed = error.name;
  } finally {
    reentrant.close();
  }
  check(
    getterClosed === 'InvalidStateError',
    'Options getter left a stale native frame',
  );
  const packed = {};
  for (const format of ['RGBA', 'RGBX', 'BGRA', 'BGRX']) {
    const isBgr = format[0] === 'B';
    const request = {
      format,
      ...(isBgr && { colorSpace: 'display-p3' }),
      rect: options.rect,
      layout: [{ offset: 3, stride: 16 }],
    };
    const size = frame.allocationSize(request);
    const bytes = new Uint8Array(size + 8).fill(165);
    const view = bytes.subarray(4, 4 + size);
    const copied = await frame.copyTo(view, request);
    check(
      size === 51 && JSON.stringify(copied) === JSON.stringify(request.layout),
      `Wrong packed ${format} layout`,
    );
    const first = [...view.subarray(3, 7)];
    const expected = new Uint8Array(bytes.length).fill(165);
    for (let row = 0; row < 3; ++row)
      for (let column = 0; column < 3; ++column)
        expected.set(first, 7 + row * 16 + column * 4);
    check(
      bytes.every((value, offset) => value === expected[offset]) && first[3] === 255,
      `Wrong packed ${format} bytes or destination padding`,
    );
    packed[format] = isBgr ? [first[2], first[1], first[0], first[3]] : first;
  }
  check(
    packed.RGBA[index] > 220 &&
      packed.RGBA.slice(0, 3).every(
        (value, channel) => channel === index || value < 35,
      ) &&
      packed.RGBA.join() === packed.RGBX.join() &&
      packed.BGRA.join() === packed.BGRX.join() &&
      packed.BGRA[index] > 220 &&
      packed.BGRA.join() !== packed.RGBA.join(),
    `Wrong packed RGB conversion: ${JSON.stringify(packed)}`,
  );
  let conversion;
  try {
    await frame.copyTo(full, { format: 'NV12' });
  } catch (error) {
    conversion = error.name;
  }
  check(
    conversion === 'NotSupportedError',
    'Explicit non-RGB format silently copied original bytes',
  );
  return {
    size: full.length,
    layout,
    pixel,
    cropLayout,
    shared,
    closed,
    getterClosed,
    conversion,
    packed,
  };
}

async function readVideoPixel(device, texture) {
  const buffer = device.createBuffer({
    size: 256,
    usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
  });
  try {
    const encoder = device.createCommandEncoder();
    encoder.copyTextureToBuffer({ texture }, { buffer, bytesPerRow: 256 }, [1, 1]);
    device.queue.submit([encoder.finish()]);
    await buffer.mapAsync(GPUMapMode.READ);
    return [...new Uint8Array(buffer.getMappedRange(0, 4))];
  } finally {
    buffer.destroy();
  }
}

async function uploadedPixel(device, frame, colorSpace, readPixel = readVideoPixel) {
  const texture = device.createTexture({
    size: [1, 1],
    format: 'rgba8unorm',
    usage:
      GPUTextureUsage.COPY_DST |
      GPUTextureUsage.COPY_SRC |
      GPUTextureUsage.RENDER_ATTACHMENT,
  });
  try {
    device.queue.copyExternalImageToTexture(
      { source: frame, origin: [128, 128] },
      { texture, colorSpace },
      [1, 1],
    );
    return await readPixel(device, texture);
  } finally {
    texture.destroy();
  }
}

async function verifyPixels(stage, mode, format, device) {
  await sourceCommand('load', format);
  const timestamps = [];
  let expiry;
  let p3;
  let recordedFrameGc;
  let colorSpace;
  const readback = [];
  for (let index = 0; index < 2; index++) {
    if (index) await sourceCommand('next');
    const frame = checkFrame(
      acquireVideoFrame('movie'),
      format === 'bgra' ? 'BGRA' : 'NV12',
      format !== 'nv12',
    );
    try {
      timestamps.push(frame.timestamp);
      colorSpace = frame.colorSpace.toJSON();
      readback.push(await verifyFrameReadback(frame, index));
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
        require(nearPixel(
          readback[index].packed.BGRA,
          p3,
        ), 'CPU and GPU Display P3 conversion differ');
        expiry = await stage.verifyExpiry(frame);
        await stage.verifyRecordedFrame();
        recordedFrameGc = true;
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
  return { timestamps, colorSpace, readback, expiry, p3, recordedFrameGc };
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

function workerVideo(acquire, buildEncoder, upload, readPixel, readback, nearPixel) {
  let device, target, encode, recording;
  onmessage = async ({ data, ports }) => {
    try {
      if (data === 'prepare') {
        const adapter = await navigator.gpu.requestAdapter();
        if (!adapter) throw new Error('No Worker Metal adapter');
        device = await adapter.requestDevice();
        device.onuncapturederror = (event) =>
          postMessage({ error: event.error.message });
        const format = 'rgba8unorm';
        target = device.createTexture({
          size: [4, 4],
          format,
          usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC,
        });
        encode = buildEncoder(device, format);
        if (!acquire) {
          const encoder = device.createCommandEncoder();
          const pass = encoder.beginRenderPass({
            colorAttachments: [
              { view: target.createView(), loadOp: 'clear', storeOp: 'store' },
            ],
          });
          recording = { encoder, pass };
        }
        postMessage({ ready: true });
        return;
      }
      const { index, port, bytes } = data;
      let frame;
      if (acquire) {
        const original = acquire('movie');
        if (!(original instanceof VideoFrame))
          throw new Error('Missing Worker VideoFrame');
        frame = index === 0 ? original.clone() : new VideoFrame(original);
        original.close();
        if (original.visibleRect !== null || acquire('session-only') !== null)
          throw new Error('Worker acquisition or clone ownership is incorrect');
      } else {
        frame = data.frame;
        if (
          data.alias !== frame ||
          (index === 0 &&
            (!(port instanceof MessagePort) ||
              port !== ports[0] ||
              new Uint8Array(bytes)[0] !== 37))
        )
          throw new Error(
            'Worker transfer lost aliases, bytes or MessagePort identity',
          );
        data.frame = data.alias = null;
      }
      if (
        !(frame instanceof VideoFrame) ||
        !(frame.colorSpace instanceof VideoColorSpace) ||
        frame.colorSpace.matrix !== 'bt709' ||
        frame.colorSpace.fullRange !== false ||
        frame.visibleRect.width !== 1920 ||
        frame.rotation !== 0 ||
        frame.flip !== false ||
        Object.keys(frame.metadata()).length
      )
        throw new Error('Wrong Worker frame metadata');

      const originalPixels = await readback(frame, index);
      device.pushErrorScope('validation');
      const command = encode(frame, target, index === 1, recording);
      recording = undefined;
      let retainedAcrossGc = false;
      if (!acquire && index === 0) {
        const recorded = new WeakRef(frame);
        // Native finalizer cleanup can lag behind WeakRef clearing.
        const unused = new WeakRef({});
        frame = null;
        for (let attempt = 0; attempt < 20; attempt++) {
          await new Promise((resolve) => setTimeout(resolve, 8));
          globalThis.__videoGcPressure = Array.from({ length: 65536 }, (_, i) => ({
            index: i,
            pair: [i, i + 1],
          }));
          if (unused.deref() === undefined) break;
        }
        delete globalThis.__videoGcPressure;
        frame = recorded.deref();
        if (!frame || unused.deref() !== undefined)
          throw new Error(
            'The Worker command did not retain the received frame across GC',
          );
        retainedAcrossGc = true;
      }
      device.queue.submit([command]);
      const imported = await readPixel(device, target);
      const copied = await upload(device, frame, 'srgb', readPixel);
      const error = await device.popErrorScope();
      if (error) throw new Error(error.message);
      if (!nearPixel(originalPixels.packed.RGBA, copied))
        throw new Error('CPU and GPU Worker color conversion differ');
      const result = {
        timestamp: frame.timestamp,
        duration: frame.duration,
        format: frame.format,
        size: [frame.codedWidth, frame.codedHeight],
        imported,
        copied,
        colorSpace: frame.colorSpace.toJSON(),
        readback: originalPixels,
        retainedAcrossGc,
      };
      // Leave the second frame and its GPU import live for native Worker retirement.
      if (index === 1) globalThis.__heldWorkerFrame = frame;
      else if (port) {
        port.postMessage({ frame, alias: frame, bytes }, [frame, bytes]);
        if (frame.format !== null || bytes.byteLength !== 0)
          throw new Error('MessagePort did not transfer the Worker frame and bytes');
        port.close();
      } else frame.close();
      postMessage(result);
    } catch (error) {
      postMessage({ error: error.stack ?? String(error) });
    }
  };
}

async function verifyWorkerVideo() {
  await sourceCommand('load', 'nv12');
  checkFrame(acquireVideoFrame('session-only'), 'NV12').close();
  const resources = () => JSON.parse(report({ kind: 'resources' }));
  const before = resources();
  const acquisition = workerVideoAcquisition
    ? `import { acquireVideoFrame } from '@flax/webgpu';`
    : `const acquireVideoFrame = null;
      const acquireImportDenied = await import('@flax/webgpu').then(
        () => false, (error) => error.message.includes('Unresolved bare import'));
      if (!acquireImportDenied || globalThis[Symbol.for('flax.webgpu.acquireVideoFrame')])
        throw new Error('Frame reception granted Worker source acquisition');`;
  const entry = `${acquisition}
    const privateImportDenied = await import('@flax/webgpu/host').then(
      () => false, (error) => error.message.includes('Unresolved bare import'));
    if (!privateImportDenied) throw new Error('Private WebGPU host module was importable');
    (${workerVideo})(acquireVideoFrame, ${directEncoder}, ${uploadedPixel},
      ${readVideoPixel}, ${verifyFrameReadback}, ${nearPixel});`;
  const url = URL.createObjectURL(new Blob([entry], { type: 'text/javascript' }));
  const worker = new Worker(url, { type: 'module' });
  const sample = (index) =>
    new Promise((resolve, reject) => {
      const transfer = !workerVideoAcquisition && index !== 'prepare';
      const channel = transfer && index === 0 ? new MessageChannel() : null;
      let result, reply;
      const close = () => {
        clearTimeout(timeout);
        channel?.port1.close();
        channel?.port2.close();
      };
      const failed = (error) => {
        close();
        reject(error);
      };
      const done = () => {
        if (!result || (channel && !reply)) return;
        close();
        resolve({ ...result, reply });
      };
      const timeout = setTimeout(() => failed(Error('Worker video timed out')), 5000);
      worker.onmessage = ({ data }) => {
        if (data.error) failed(Error(data.error));
        else {
          result = data;
          done();
        }
      };
      worker.onerror = (event) => failed(Error(event.message));
      worker.onmessageerror = () => failed(Error('Worker frame receive failed'));
      try {
        if (!transfer) {
          worker.postMessage(index === 'prepare' ? index : { index });
          return;
        }
        const source = checkFrame(acquireVideoFrame('movie'), 'NV12');
        const frame = channel
          ? new VideoFrame(source, { timestamp: -31, duration: 777 })
          : source;
        if (channel) source.close();
        const bytes = channel ? new Uint8Array([37]).buffer : undefined;
        const port = channel?.port2;
        if (channel) {
          channel.port1.onmessage = ({ data }) => {
            reply = data;
            done();
          };
          channel.port1.onmessageerror = () =>
            failed(Error('Video MessagePort receive failed'));
        }
        worker.postMessage(
          { index, frame, alias: frame, bytes, port },
          channel ? [frame, bytes, port] : [frame],
        );
        require(frame.format === null &&
          (!bytes ||
            bytes.byteLength ===
              0), 'Worker.postMessage did not transfer the frame and bytes');
      } catch (error) {
        failed(error);
      }
    });
  const frames = [];
  let withFrame;
  try {
    require((await sample('prepare')).ready, 'Worker video device was not ready');
    for (let index = 0; index < 2; index++) {
      if (index) await sourceCommand('next');
      const frame = await sample(index);
      const expectedTimestamp =
        !workerVideoAcquisition && index === 0 ? -31 : index * 16667;
      require(frame.format === 'NV12' &&
        frame.readback.size === width * height * 1.5 &&
        frame.readback.getterClosed === 'InvalidStateError' &&
        frame.size.join() === `${width},${height}` &&
        Math.abs(frame.timestamp - expectedTimestamp) < 2 &&
        primary(frame.imported, index) &&
        primary(
          frame.copied,
          index,
        ), `Wrong Worker video frame: ${JSON.stringify(frame)}`);
      if (!workerVideoAcquisition && index === 0) {
        const { reply } = frame;
        const returned = checkFrame(reply.frame, 'NV12');
        require(frame.retainedAcrossGc &&
          frame.duration === 777 &&
          returned === reply.alias &&
          returned.timestamp === -31 &&
          returned.duration === 777 &&
          new Uint8Array(reply.bytes)[0] ===
            37, 'VideoFrame MessagePort return lost data');
        const options = {
          format: 'RGBA',
          rect: { x: 128, y: 128, width: 1, height: 1 },
        };
        const pixel = new Uint8Array(returned.allocationSize(options));
        await returned.copyTo(pixel, options);
        require(primary(pixel, 0), 'Returned frame lost its pixels');
        returned.close();
        frame.portReturn = true;
        delete frame.reply;
      }
      frames.push(frame);
    }
    withFrame = resources();
    require(withFrame[0] === before[0] + 1 &&
      withFrame[10] === before[10] + 1 &&
      withFrame[11] >= before[11] + 1, `Missing live Worker video lease: ${withFrame}`);
  } finally {
    worker.terminate();
    URL.revokeObjectURL(url);
  }
  const deadline = performance.now() + 2500;
  let after = resources();
  while (
    after.some((count, index) => count !== before[index]) &&
    performance.now() < deadline
  ) {
    await raf();
    after = resources();
  }
  require(after.every(
    (count, index) => count === before[index],
  ), `Worker video resources did not retire: ${before} -> ${after}`);
  return { acquisition: workerVideoAcquisition, frames, before, withFrame, after };
}

async function main() {
  let initialCanvas = new OffscreenCanvas(width, height);
  show(initialCanvas);
  const modes = modeOrder.split(',');
  require(modes.length === 2 &&
    modes.includes('direct') &&
    modes.includes('three'), 'Video acceptance requires direct and three exactly once');
  require(acquireVideoFrame('not-granted') ===
    null, 'An unauthorized source was visible');
  const workerVideo = await verifyWorkerVideo();
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
  const last = checkFrame(acquireVideoFrame('movie'), 'NV12');
  await sourceCommand('dispose');
  require(acquireVideoFrame('movie') === null, 'A disposed video source was visible');
  const held = structuredClone(last, { transfer: [last] });
  const readAfterDispose = await verifyFrameReadback(held, 1);
  require(last.format === null, 'Retired source frame did not transfer');
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
    readAfterDispose,
    workerVideo,
    results,
  });
}

main().catch((error) =>
  report({ kind: 'failure', error: error.stack ?? String(error) }),
);
