export async function readTexturePixels(device, texture, width = 2, height = 2) {
  const stride = Math.ceil((width * 4) / 256) * 256;
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
    pixels.push(...bytes.subarray(y * stride, y * stride + width * 4));
  buffer.unmap();
  buffer.destroy();
  return pixels;
}

// Real GPU pixel acceptance; shared with the WebGPU-only and Canvas 2D sessions.
export async function verifyImages(device, assert) {
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
