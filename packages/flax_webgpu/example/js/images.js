export async function readTexturePixels(
  device,
  texture,
  width = 2,
  height = 2,
  bytesPerPixel = 4,
) {
  const rowBytes = width * bytesPerPixel;
  const stride = Math.ceil(rowBytes / 256) * 256;
  const buffer = device.createBuffer({
    size: stride * height,
    usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
  });
  const encoder = device.createCommandEncoder();
  encoder.copyTextureToBuffer({ texture }, { buffer, bytesPerRow: stride }, [
    width,
    height,
  ]);
  device.queue.submit([encoder.finish()]);
  await buffer.mapAsync(GPUMapMode.READ);
  const bytes = new Uint8Array(buffer.getMappedRange()),
    pixels = [];
  for (let y = 0; y < height; y++)
    pixels.push(...bytes.subarray(y * stride, y * stride + rowBytes));
  buffer.unmap();
  buffer.destroy();
  return pixels;
}

// Both root and Worker fixtures use the same GPU readback, including exact-only usages.
export async function readCanvasPixels(
  device,
  canvas,
  readPixels,
  bitmap = canvas.transferToImageBitmap(),
) {
  const target = device.createTexture({
    size: [canvas.width, canvas.height],
    format: 'rgba8unorm',
    usage:
      GPUTextureUsage.COPY_SRC |
      GPUTextureUsage.COPY_DST |
      GPUTextureUsage.RENDER_ATTACHMENT,
  });
  try {
    device.queue.copyExternalImageToTexture({ source: bitmap }, { texture: target }, [
      canvas.width,
      canvas.height,
    ]);
    return await readPixels(device, target, canvas.width, canvas.height);
  } finally {
    bitmap.close();
    target.destroy();
  }
}

export async function verifyWideStillImages(device, check, readPixels) {
  const components = new Float16Array(new ArrayBuffer(36), 4, 16);
  components.set([
    -0.125, 1.5, 0.375, 0.5, 1.25, -0.5, 0.1875, 1, 0.25, 0.5, 1.75, 0.75, 1.75, 0.125,
    -0.25, 0.25,
  ]);
  const colorSpace = 'display-p3';
  const data = new ImageData(components, 2, 2, {
    colorSpace,
    pixelFormat: 'rgba-float16',
  });
  const target = device.createTexture({
    size: [2, 2],
    format: 'rgba16float',
    usage:
      GPUTextureUsage.COPY_SRC |
      GPUTextureUsage.COPY_DST |
      GPUTextureUsage.RENDER_ATTACHMENT,
  });
  const canvas = new OffscreenCanvas(2, 2),
    context = canvas.getContext('webgpu');
  const destination = { texture: target, colorSpace, premultipliedAlpha: true };
  const upload = (source) =>
    device.queue.copyExternalImageToTexture({ source }, destination, [2, 2]);
  async function expectPixels(expected, label) {
    const bytes = new Uint8Array(await readPixels(device, target, 2, 2, 8));
    const actual = new Float16Array(bytes.buffer);
    check(
      actual.length === expected.length &&
        actual.every((value, i) => value === expected[i]),
      `${label}: ${actual}`,
    );
  }
  let bitmap;
  try {
    const crop = [
      0.4375, 0.03125, -0.0625, 0.25, 0, 0, 0, 0, 1.25, -0.5, 0.1875, 1, 0, 0, 0, 0,
    ];
    device.queue.copyExternalImageToTexture(
      { source: data, origin: [1, 0], flipY: true },
      destination,
      [1, 2],
    );
    await expectPixels(crop, 'Offset FP16 ImageData crop, flip and premultiplication');
    device.pushErrorScope('validation');
    device.queue.copyExternalImageToTexture({ source: data }, destination, [2, 2, 0]);
    check((await device.popErrorScope()) === null, 'Zero-depth upload is valid');
    await expectPixels(crop, 'Zero-depth upload leaves the destination intact');
    let error;
    try {
      device.queue.copyExternalImageToTexture({ source: data }, destination, [2, 2, 2]);
    } catch (caught) {
      error = caught;
    }
    check(error?.name === 'OperationError', 'External image has at most one layer');

    context.configure({
      device,
      format: 'rgba16float',
      colorSpace,
      toneMapping: { mode: 'standard' },
      alphaMode: 'premultiplied',
      usage: GPUTextureUsage.COPY_DST,
    });
    const current = context.getCurrentTexture();
    const write = (pixels) =>
      device.queue.writeTexture(
        { texture: current },
        pixels,
        { bytesPerRow: 16 },
        [2, 2],
      );
    const later = new Float16Array([...components.slice(8), ...components.slice(0, 8)]);
    write(components);
    upload(canvas);
    check(context.getCurrentTexture() === current, 'FP16 snapshot preserves identity');
    write(later);
    await expectPixels(components, 'Current P3 FP16 snapshot captures at call time');
    await new Promise(requestAnimationFrame);
    upload(canvas);
    await expectPixels(later, 'Published P3 FP16 snapshot keeps the drawing buffer');

    bitmap = canvas.transferToImageBitmap();
    upload(bitmap);
    await expectPixels(later, 'Transferred P3 FP16 drawing buffer keeps raw values');
    upload(canvas);
    await expectPixels(new Float16Array(16), 'FP16 transfer clears the drawing buffer');
    return { bitmap, values: Array.from(later) };
  } catch (error) {
    bitmap?.close();
    throw error;
  } finally {
    context.unconfigure();
    target.destroy();
  }
}

// Serialized into a real Dedicated Worker. Dependencies are explicit parameters.
export async function verifyWorkerStillImages(
  device,
  assert,
  readPixels,
  readCanvas,
  verifyWide,
) {
  let assertions = 0;
  const cases = [],
    formats = [];
  const check = (ok, label) => {
    assertions++;
    assert(ok, label);
  };
  const pattern = [255, 0, 0, 255, 0, 255, 0, 128, 0, 0, 255, 255, 255, 255, 255, 255];
  const data = new ImageData(new Uint8ClampedArray(pattern), 2, 2);
  const target = device.createTexture({
    size: [2, 2],
    format: 'rgba8unorm',
    usage:
      GPUTextureUsage.COPY_SRC |
      GPUTextureUsage.COPY_DST |
      GPUTextureUsage.RENDER_ATTACHMENT,
  });
  const canvas = new OffscreenCanvas(2, 2),
    context = canvas.getContext('webgpu');
  const bitmaps = [];
  const keep = (bitmap) => {
    bitmaps.push(bitmap);
    return bitmap;
  };
  const upload = (source) =>
    device.queue.copyExternalImageToTexture({ source }, { texture: target }, [2, 2]);
  async function pixels(expected, label, tolerance = 0) {
    const actual = await readPixels(device, target);
    check(
      actual.length === expected.length &&
        actual.every((value, i) => Math.abs(value - expected[i]) <= tolerance),
      `${label}: ${actual}`,
    );
  }
  const solid = (color) => [...color, ...color, ...color, ...color];
  function configure(alphaMode = 'premultiplied') {
    context.configure({
      device,
      format: 'rgba8unorm',
      alphaMode,
      usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_DST,
    });
  }
  function draw(color) {
    const current = context.getCurrentTexture();
    const encoder = device.createCommandEncoder();
    const pass = encoder.beginRenderPass({
      colorAttachments: [
        {
          view: current.createView(),
          loadOp: 'clear',
          storeOp: 'store',
          clearValue: color,
        },
      ],
    });
    pass.end();
    device.queue.submit([encoder.finish()]);
    return current;
  }
  try {
    check(
      typeof Image === 'undefined' && typeof HTMLImageElement === 'undefined',
      'Still-image Worker has no HTML image globals',
    );
    upload(data);
    data.data.fill(0);
    await pixels(pattern, 'ImageData upload captures bytes before mutation');
    cases.push('image-data-upload');
    data.data.set(pattern);
    const bitmap = keep(await createImageBitmap(data));
    upload(bitmap);
    const moved = keep(structuredClone(bitmap, { transfer: [bitmap] }));
    moved.close();
    check(bitmap.width === 0, 'Upload source can transfer immediately');
    await pixels(pattern, 'Bitmap upload survives source transfer and close');
    cases.push('bitmap-upload', 'call-time-capture');

    configure();
    draw([0, 1, 0, 1]);
    const captured = createImageBitmap(canvas);
    upload(canvas);
    draw([0, 0, 1, 1]);
    await pixels(solid([0, 255, 0, 255]), 'Canvas upload captures call-time pixels');
    const canvasBitmap = keep(await captured);
    upload(canvasBitmap);
    await pixels(
      solid([0, 255, 0, 255]),
      'createImageBitmap snapshots the canvas before yielding',
    );
    cases.push('canvas-source');

    for (const [requested, expected, name, tolerance] of [
      ['image/png', 'image/png', 'png-export', 0],
      ['image/jpeg', 'image/jpeg', 'jpeg-export', 8],
      ['image/webp', 'image/webp', 'webp-export', 8],
      ['image/unsupported', 'image/png', 'mime-fallback', 0],
    ]) {
      const current = draw([1, 0, 0, 1]);
      const exporting = canvas.convertToBlob({ type: requested, quality: 1 });
      check(
        context.getCurrentTexture() === current,
        'Encoding preserves current texture identity',
      );
      draw([0, 0, 1, 1]);
      const blob = await exporting;
      check(
        blob.type === expected && blob.size > 16,
        `${name} returns encoded ${expected}`,
      );
      const decoded = keep(await createImageBitmap(blob));
      check(decoded.width === 2 && decoded.height === 2, `${name} decoded dimensions`);
      upload(decoded);
      await pixels(
        solid([255, 0, 0, 255]),
        `${name} captures pixels before later drawing`,
        tolerance,
      );
      decoded.close();
      cases.push(name);
      if (!formats.includes(expected)) formats.push(expected);
      if (name === 'png-export') cases.push('blob-decode-upload');
    }

    draw([0.25, 0, 0, 0.5]);
    const alphaBlob = await canvas.convertToBlob();
    const alpha = keep(await createImageBitmap(alphaBlob));
    upload(alpha);
    await pixels(solid([128, 0, 0, 128]), 'Canvas export unpremultiplies alpha', 2);
    device.queue.copyExternalImageToTexture(
      { source: alpha },
      { texture: target, premultipliedAlpha: true },
      [2, 2],
    );
    await pixels(solid([64, 0, 0, 128]), 'External upload can premultiply alpha', 2);
    cases.push('alpha');

    for (const [mode, expected, name] of [
      ['premultiplied', [0, 0, 0, 0], 'transparent-reset'],
      ['opaque', [0, 0, 0, 255], 'opaque-reset'],
    ]) {
      configure(mode);
      const current = draw([1, 0, 0, 1]);
      const frozen = keep(canvas.transferToImageBitmap());
      check(
        context.getCurrentTexture() !== current,
        'Bitmap transfer expires the canvas texture',
      );
      device.pushErrorScope('validation');
      const encoder = device.createCommandEncoder();
      const pass = encoder.beginRenderPass({
        colorAttachments: [
          {
            view: current.createView(),
            loadOp: 'clear',
            storeOp: 'store',
          },
        ],
      });
      pass.end();
      device.queue.submit([encoder.finish()]);
      const expired = device.popErrorScope();
      upload(frozen);
      await pixels(
        solid([255, 0, 0, 255]),
        `${mode} frozen bitmap retains exact pixels`,
      );
      const reset = await readCanvas(device, canvas, readPixels);
      check(reset.join() === solid(expected).join(), `${name}: ${reset}`);
      check(
        (await expired) instanceof GPUValidationError,
        'Submitting the expired canvas texture reports validation failure',
      );
      cases.push(name);
    }
    cases.push('texture-expiry');
    const outgoing = keep(await createImageBitmap(data));
    const wide = await verifyWide(device, check, readPixels);
    cases.push('wide-color-roundtrip');
    bitmaps.pop(); // The caller transfers this bitmap.
    return {
      receipt: { assertions, cases, formats, pixelSnapshots: true },
      bitmap: outgoing,
      wide,
    };
  } finally {
    for (const bitmap of bitmaps) bitmap.close();
    context.unconfigure();
    target.destroy();
  }
}

// Real GPU pixel acceptance; shared with the WebGPU-only and Canvas 2D sessions.
export async function verifyImages(device, assert) {
  const wide = await verifyWideStillImages(device, assert, readTexturePixels);
  wide.bitmap.close();
  const source = new ImageData(
    new Uint8ClampedArray([
      255, 0, 0, 255, 0, 255, 0, 128, 0, 0, 255, 255, 255, 255, 255, 255,
    ]),
    2,
    2,
  );
  const read = (texture, width = 2, height = 2) =>
    readTexturePixels(device, texture, width, height);
  function texture(width = 2, height = 2) {
    return device.createTexture({
      size: [width, height],
      format: 'rgba8unorm',
      usage:
        GPUTextureUsage.COPY_SRC |
        GPUTextureUsage.COPY_DST |
        GPUTextureUsage.RENDER_ATTACHMENT,
    });
  }
  const image = await createImageBitmap(source),
    target = texture();
  device.queue.copyExternalImageToTexture(
    { source: image },
    { texture: target },
    [2, 2],
  );
  assert(
    JSON.stringify(await read(target)) === JSON.stringify(Array.from(source.data)),
    'External bitmap upload preserves straight RGBA',
  );
  device.queue.copyExternalImageToTexture(
    { source, flipY: true },
    { texture: target },
    [2, 2],
  );
  assert(
    JSON.stringify(await read(target)) ===
      JSON.stringify([...source.data.slice(8), ...source.data.slice(0, 8)]),
    'External image flipY',
  );
  device.queue.copyExternalImageToTexture(
    { source },
    { texture: target, premultipliedAlpha: true },
    [2, 2],
  );
  const alpha = await read(target);
  assert(alpha[5] === 128 && alpha[7] === 128, 'Dawn premultiplies source alpha');
  device.queue.copyExternalImageToTexture(
    { source },
    { texture: target, colorSpace: 'display-p3' },
    [2, 2],
  );
  const p3 = await read(target);
  assert(
    Math.abs(p3[0] - 234) <= 2 &&
      Math.abs(p3[1] - 51) <= 2 &&
      Math.abs(p3[2] - 35) <= 2,
    'sRGB to Display P3 external copy conversion',
  );
  const cropped = texture(1, 1);
  device.queue.copyExternalImageToTexture(
    { source, origin: [1, 0] },
    { texture: cropped },
    [1, 1],
  );
  assert(
    JSON.stringify(await read(cropped, 1, 1)) === '[0,255,0,128]',
    'External image origin crop',
  );
  const transformed = await createImageBitmap(source, 1, 0, 1, 2, {
    resizeWidth: 1,
    imageOrientation: 'flipY',
  });
  assert(
    transformed.width === 1 && transformed.height === 2,
    'Core bitmap crop and resize',
  );
  const canvas = new OffscreenCanvas(2, 2),
    context = canvas.getContext('webgpu');
  context.configure({
    device,
    format: navigator.gpu.getPreferredCanvasFormat(),
    alphaMode: 'premultiplied',
  });
  const current = context.getCurrentTexture(),
    encoder = device.createCommandEncoder();
  const pass = encoder.beginRenderPass({
    colorAttachments: [
      {
        view: current.createView(),
        loadOp: 'clear',
        storeOp: 'store',
        clearValue: [0.25, 0, 0, 0.5],
      },
    ],
  });
  pass.end();
  device.queue.submit([encoder.finish()]);
  // convertToBlob must snapshot synchronously, before the await permits automatic presentation.
  const exporting = canvas.convertToBlob();
  assert(
    context.getCurrentTexture() === current,
    'Snapshot preserves current texture identity',
  );
  const png = await exporting,
    decoded = await createImageBitmap(png);
  assert(
    png.type === 'image/png' && decoded.width === 2 && decoded.height === 2,
    'GPU PNG decode roundtrip',
  );
  device.queue.copyExternalImageToTexture(
    { source: decoded },
    { texture: target },
    [2, 2],
  );
  const exported = await read(target);
  assert(
    Math.abs(exported[0] - 128) <= 2 && Math.abs(exported[3] - 128) <= 1,
    'GPU snapshot unpremultiplies pixels',
  );
  const frozen = canvas.transferToImageBitmap();
  device.queue.copyExternalImageToTexture(
    { source: frozen },
    { texture: target },
    [2, 2],
  );
  assert(
    Math.abs((await read(target))[0] - 128) <= 2,
    'Transferred bitmap keeps the published frame',
  );
  const blank = await createImageBitmap(canvas);
  device.queue.copyExternalImageToTexture(
    { source: blank },
    { texture: target },
    [2, 2],
  );
  assert(
    (await read(target)).every((x) => x === 0),
    'Bitmap transfer clears the canvas',
  );
  const rgbaCanvas = new OffscreenCanvas(2, 2),
    rgba = rgbaCanvas.getContext('webgpu');
  rgba.configure({ device, format: 'rgba8unorm', viewFormats: ['rgba8unorm-srgb'] });
  const rgbaTexture = rgba.getCurrentTexture();
  assert(rgbaTexture.format === 'rgba8unorm', 'RGBA8 canvas texture format');
  const rgbaEncoder = device.createCommandEncoder(),
    rgbaPass = rgbaEncoder.beginRenderPass({
      colorAttachments: [
        {
          view: rgbaTexture.createView({ format: 'rgba8unorm-srgb' }),
          loadOp: 'clear',
          storeOp: 'store',
          clearValue: [1, 0, 0, 1],
        },
      ],
    });
  rgbaPass.end();
  device.queue.submit([rgbaEncoder.finish()]);
  const rgbaImage = rgbaCanvas.transferToImageBitmap();
  device.queue.copyExternalImageToTexture(
    { source: rgbaImage },
    { texture: target },
    [2, 2],
  );
  assert(
    JSON.stringify((await read(target)).slice(0, 4)) === '[255,0,0,255]',
    'RGBA8 and matching sRGB view preserve channel order',
  );
  rgbaImage.close();
  rgba.unconfigure();
  const htmlCanvas = document.createElement('canvas');
  htmlCanvas.width = 2;
  htmlCanvas.height = 2;
  const htmlContext = htmlCanvas.getContext('webgpu');
  htmlContext.configure({ device, format: 'bgra8unorm' });
  assert(
    htmlCanvas.toDataURL().startsWith('data:image/png;base64,'),
    'HTML canvas data URL export',
  );
  const callbackBlob = await new Promise((resolve) => htmlCanvas.toBlob(resolve));
  assert(callbackBlob?.type === 'image/png', 'HTML canvas callback export');
  htmlContext.unconfigure();
  const htmlImage = document.createElement('img');
  htmlImage.src =
    'data:image/png;base64,' +
    btoa(String.fromCharCode(...new Uint8Array(await png.arrayBuffer())));
  await htmlImage.decode();
  device.queue.copyExternalImageToTexture(
    { source: htmlImage },
    { texture: target },
    [2, 2],
  );
  assert(
    Math.abs((await read(target))[0] - 128) <= 2,
    'HTML image resource uploads through WebGPU',
  );
  const twoD = new OffscreenCanvas(2, 2),
    ctx = twoD.getContext('2d');
  if (ctx) {
    ctx.drawImage(htmlImage, 0, 0);
    const px = ctx.getImageData(0, 0, 1, 1).data;
    assert(
      Math.abs(px[0] - 128) <= 2 && Math.abs(px[3] - 128) <= 1,
      'Canvas 2D imports Core bitmap',
    );
    device.queue.copyExternalImageToTexture(
      { source: twoD },
      { texture: target },
      [2, 2],
    );
    assert(
      Math.abs((await read(target))[0] - 128) <= 2,
      'WebGPU uploads Canvas 2D pixels',
    );
  }
  for (const bitmap of [image, transformed, decoded, frozen, blank]) bitmap.close();
  target.destroy();
  cropped.destroy();
  context.unconfigure();
  return png;
}
