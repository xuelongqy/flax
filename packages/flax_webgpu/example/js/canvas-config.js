import { readTexturePixels, readCanvasPixels } from './images.js';

// Keep this function self-contained: the Worker fixture serializes it into its Blob.
export async function verifyCanvasConfiguration(device, assert, snapshot) {
  let assertions = 0;
  const check = (value, message) => {
    assertions++;
    assert(value, message);
  };
  const canvas = new OffscreenCanvas(2, 2);
  const context = canvas.getContext('webgpu');
  const cases = [];
  async function validation(target, action, expected, label) {
    target.pushErrorScope('validation');
    let pending;
    try {
      action();
    } finally {
      pending = target.popErrorScope();
    }
    const error = await pending;
    check(
      expected ? error instanceof GPUValidationError : error === null,
      `${label}: ${error?.message ?? 'no validation error'}`,
    );
  }
  const throws = (action, name) => {
    let caught;
    try {
      action();
    } catch (error) {
      caught = error;
    }
    check(caught?.name === name, `Canvas configuration throws ${name}`);
  };
  async function transientAttachments() {
    const transient = GPUTextureUsage.TRANSIENT_ATTACHMENT;
    const usage = transient | GPUTextureUsage.RENDER_ATTACHMENT;
    const descriptor = { size: [2, 2], format: 'rgba8unorm', usage };
    let texture, multisampled;
    try {
      await validation(
        device,
        () => {
          texture = device.createTexture(descriptor);
          check(
            texture.usage === usage,
            'Native transient texture retains exact usage',
          );
          const encoder = device.createCommandEncoder();
          const pass = encoder.beginRenderPass({
            colorAttachments: [
              { view: texture.createView(), loadOp: 'clear', storeOp: 'discard' },
            ],
          });
          pass.end();
          device.queue.submit([encoder.finish()]);
        },
        false,
        'Transient attachment accepts clear/discard submission',
      );
      for (const invalid of [
        transient,
        ...[
          GPUTextureUsage.COPY_SRC,
          GPUTextureUsage.COPY_DST,
          GPUTextureUsage.TEXTURE_BINDING,
          GPUTextureUsage.STORAGE_BINDING,
        ].map((flag) => usage | flag),
      ]) {
        await validation(
          device,
          () => {
            device.createTexture({ ...descriptor, usage: invalid }).destroy();
          },
          true,
          `Transient attachment rejects usage ${invalid}`,
        );
      }
      await validation(
        device,
        () => {
          texture.createView({ usage: GPUTextureUsage.RENDER_ATTACHMENT });
        },
        true,
        'A view cannot remove transient usage',
      );
      for (const [loadOp, storeOp] of [
        ['load', 'discard'],
        ['clear', 'store'],
      ]) {
        await validation(
          device,
          () => {
            const encoder = device.createCommandEncoder();
            const pass = encoder.beginRenderPass({
              colorAttachments: [{ view: texture.createView(), loadOp, storeOp }],
            });
            pass.end();
            encoder.finish();
          },
          true,
          `Transient attachment rejects ${loadOp}/${storeOp}`,
        );
      }
      await validation(
        device,
        () => {
          multisampled = device.createTexture({
            ...descriptor,
            usage: GPUTextureUsage.RENDER_ATTACHMENT,
            sampleCount: 4,
          });
        },
        false,
        'Resolve source is a valid multisampled attachment',
      );
      await validation(
        device,
        () => {
          const encoder = device.createCommandEncoder();
          const pass = encoder.beginRenderPass({
            colorAttachments: [
              {
                view: multisampled.createView(),
                resolveTarget: texture.createView(),
                loadOp: 'clear',
                storeOp: 'discard',
              },
            ],
          });
          pass.end();
          encoder.finish();
        },
        true,
        'Transient attachment cannot be a resolve target',
      );
      cases.push('transient-attachment');
    } finally {
      multisampled?.destroy();
      texture?.destroy();
    }
  }
  async function deviceLoss() {
    const adapter = await navigator.gpu.requestAdapter();
    const lostDevice = await adapter.requestDevice();
    const lostCanvas = new OffscreenCanvas(3, 2);
    const lostContext = lostCanvas.getContext('webgpu');
    const idleCanvas = new OffscreenCanvas(2, 3);
    const idleContext = idleCanvas.getContext('webgpu');
    const freshContext = new OffscreenCanvas(2, 2).getContext('webgpu');
    const usage = GPUTextureUsage.COPY_DST;
    const configuration = {
      device: lostDevice,
      format: 'rgba8unorm',
      usage,
      viewFormats: ['rgba8unorm-srgb'],
    };
    const metadata = (texture, target, format, expectedUsage) =>
      check(
        texture instanceof GPUTexture &&
          texture.width === target.canvas.width &&
          texture.height === target.canvas.height &&
          texture.depthOrArrayLayers === 1 &&
          texture.mipLevelCount === 1 &&
          texture.sampleCount === 1 &&
          texture.dimension === '2d' &&
          texture.format === format &&
          texture.usage === expectedUsage &&
          texture.label === '',
        'Lost-device texture preserves the complete observable canvas descriptor',
      );
    try {
      lostContext.configure(configuration);
      idleContext.configure(configuration);
      const acquired = lostContext.getCurrentTexture();
      lostDevice.destroy();
      check(
        lostContext.getCurrentTexture() === acquired,
        'Device loss alone does not expire an acquired current texture',
      );
      check(
        lostContext.getConfiguration().device === lostDevice,
        'Device loss preserves the configured device',
      );
      metadata(acquired, lostContext, 'rgba8unorm', usage);
      // Internal creation must not invoke an application-overridden JS method.
      lostDevice.createTexture = () => {
        throw Error('Public createTexture override');
      };
      const idle = idleContext.getCurrentTexture();
      metadata(idle, idleContext, 'rgba8unorm', usage);
      check(
        idleContext.getCurrentTexture() === idle,
        'Loss before first acquisition returns one cached invalid texture',
      );
      lostCanvas.width = lostCanvas.width;
      let current = lostContext.getCurrentTexture();
      check(
        current !== acquired,
        'Same-width assignment expires a lost current texture',
      );
      metadata(current, lostContext, 'rgba8unorm', usage);
      current.destroy();
      check(
        lostContext.getCurrentTexture() === current,
        'Explicit destruction preserves invalid current texture identity',
      );
      lostCanvas.height = lostCanvas.height;
      check(
        lostContext.getCurrentTexture() !== current,
        'Same-height assignment expires a destroyed current texture',
      );
      for (const width of [0, 5]) {
        current = lostContext.getCurrentTexture();
        lostCanvas.width = width;
        lostCanvas.height = 4;
        check(
          lostContext.getCurrentTexture() !== current,
          'Resize expires invalid current texture',
        );
        metadata(lostContext.getCurrentTexture(), lostContext, 'rgba8unorm', usage);
      }
      current = lostContext.getCurrentTexture();
      lostContext.configure({
        ...configuration,
        format: 'bgra8unorm',
        viewFormats: ['bgra8unorm-srgb'],
      });
      check(
        lostContext.getCurrentTexture() !== current,
        'Reconfigure on a lost device expires invalid current texture',
      );
      metadata(lostContext.getCurrentTexture(), lostContext, 'bgra8unorm', usage);
      freshContext.configure(configuration);
      metadata(freshContext.getCurrentTexture(), freshContext, 'rgba8unorm', usage);
      check(
        freshContext.getCurrentTexture().createView() instanceof GPUTextureView,
        'Lost-device texture owns a real native texture usable by native API calls',
      );
      idleContext.unconfigure();
      check(idleContext.getConfiguration() === null, 'Lost context unconfigures');
      throws(() => idleContext.getCurrentTexture(), 'InvalidStateError');
      check((await lostDevice.lost).reason === 'destroyed', 'Device loss settles');
      current = lostContext.getCurrentTexture();
      check(
        lostContext.getCurrentTexture() === current,
        'Invalid texture identity is stable after the loss callback',
      );
      const encoder = lostDevice.createCommandEncoder();
      const pass = encoder.beginRenderPass({
        colorAttachments: [
          { view: current.createView(), loadOp: 'clear', storeOp: 'store' },
        ],
      });
      pass.end();
      lostDevice.queue.submit([encoder.finish()]);
      // Queue completion does not prove that work executed on a lost device.
      if (snapshot) {
        lostCanvas.width = lostCanvas.height = 2;
        for (const alphaMode of ['opaque', 'premultiplied']) {
          lostContext.configure({ ...configuration, alphaMode });
          current = lostContext.getCurrentTexture();
          const pixels = snapshot(device, lostCanvas);
          check(
            lostContext.getCurrentTexture() !== current,
            `${alphaMode} image transfer expires invalid current texture`,
          );
          const expected = [0, 0, 0, alphaMode === 'opaque' ? 255 : 0];
          check(
            (await pixels).every((value, i) => value === expected[i % 4]),
            `Lost ${alphaMode} canvas snapshot preserves configured alpha`,
          );
        }
      }
      await validation(
        device,
        () => {
          lostContext.configure({ device, format: 'rgba8unorm' });
          const texture = lostContext.getCurrentTexture();
          metadata(
            texture,
            lostContext,
            'rgba8unorm',
            GPUTextureUsage.RENDER_ATTACHMENT,
          );
          const encoder = device.createCommandEncoder();
          const pass = encoder.beginRenderPass({
            colorAttachments: [
              { view: texture.createView(), loadOp: 'clear', storeOp: 'store' },
            ],
          });
          pass.end();
          device.queue.submit([encoder.finish()]);
        },
        false,
        'Reconfiguration with a live device restores rendering',
      );
      cases.push('device-loss');
    } finally {
      lostContext.unconfigure();
      idleContext.unconfigure();
      freshContext.unconfigure();
      lostDevice.destroy();
    }
  }
  async function invalidCurrentTexture(label, previous) {
    const { format, usage } = context.getConfiguration();
    let texture;
    await validation(
      device,
      () => {
        texture = context.getCurrentTexture();
        check(
          texture instanceof GPUTexture &&
            texture !== previous &&
            texture.width === canvas.width &&
            texture.height === canvas.height &&
            texture.depthOrArrayLayers === 1 &&
            texture.mipLevelCount === 1 &&
            texture.sampleCount === 1 &&
            texture.dimension === '2d' &&
            texture.usage === usage &&
            texture.format === format,
          `${label} returns a new GPUTexture with the requested metadata`,
        );
        check(
          context.getCurrentTexture() === texture,
          'Validation failure retains current texture identity',
        );
        texture.destroy();
        check(
          context.getCurrentTexture() === texture,
          'Destroying an error texture does not expire it',
        );
      },
      true,
      `${label} reports a validation error on acquisition`,
    );
    return texture;
  }
  async function invalidUsage(format, usage) {
    await validation(
      device,
      () => context.configure({ device, format, usage }),
      true,
      `${format}/${usage} rejects invalid configuration usage`,
    );
    check(
      context.getConfiguration().usage === usage,
      'Invalid usage remains reflected',
    );
    await invalidCurrentTexture('Invalid usage');
    context.unconfigure();
  }
  async function invalidCanvasDescriptor() {
    const config = { device, format: 'rgba8unorm', usage: GPUTextureUsage.COPY_DST };
    context.configure({ device, format: config.format });
    const previous = context.getCurrentTexture();
    const viewFormats = ['rgba8unorm-srgb', 'bgra8unorm'];
    await validation(
      device,
      () => context.configure({ ...config, viewFormats }),
      true,
      'Incompatible canvas view format at configure',
    );
    check(
      context.getConfiguration().viewFormats.join() === viewFormats.join() &&
        context.getConfiguration().usage === config.usage,
      'Invalid view format configuration remains reflected',
    );
    await invalidCurrentTexture('Incompatible canvas view format', previous);
    context.unconfigure();
    const invalidWidths = [0, device.limits.maxTextureDimension2D + 1];
    // Worker canvases use the transfer token's 32-bit dimensions.
    if (typeof document !== 'undefined') invalidWidths.push(2 ** 32 + 2);
    for (const width of invalidWidths) {
      canvas.width = width;
      await validation(
        device,
        () => context.configure(config),
        true,
        `Invalid canvas width ${width} at configure`,
      );
      const invalid = await invalidCurrentTexture(`Configured width ${width}`);
      let recovered;
      await validation(
        device,
        () => {
          canvas.width = 2;
          recovered = context.getCurrentTexture();
          check(
            recovered !== invalid && recovered.width === 2,
            'Valid resize recovers',
          );
          recovered.createView();
        },
        false,
        'Valid resize recovers without reconfiguration',
      );
      await validation(
        device,
        () => (canvas.width = width),
        false,
        `Resize to invalid width ${width} defers validation`,
      );
      await invalidCurrentTexture(`Resized width ${width}`, recovered);
      context.unconfigure();
    }
    canvas.width = 2;
    cases.push('descriptor-validation');
  }
  async function exercise(target, format, usage) {
    const copy = usage === GPUTextureUsage.COPY_DST;
    const label = `${format}/${copy ? 'copy-dst' : 'storage'}`;
    const expected = copy ? [128, 0, 0, 128] : [0, 255, 0, 255];
    const blank = copy ? [0, 0, 0, 0] : [0, 0, 0, 255];
    // Seed all pixels, then partially overwrite new acquisitions across pool reuse.
    for (let frame = 0; frame < 4; frame++) {
      const partial = frame > 0;
      const size = partial ? 1 : 2;
      const origin = partial ? 1 : 0;
      let pixels;
      await validation(
        target,
        () => {
          if (!partial)
            context.configure({
              device: target,
              format,
              usage,
              alphaMode: copy ? 'premultiplied' : 'opaque',
            });
          const texture = context.getCurrentTexture();
          check(texture.usage === usage, `${label} has exactly the public usage`);
          check(
            context.getCurrentTexture() === texture,
            `${label} current texture identity`,
          );
          if (copy) {
            const pixel = format === 'bgra8unorm' ? [0, 0, 64, 128] : [64, 0, 0, 128];
            target.queue.writeTexture(
              { texture, origin: [origin, origin] },
              new Uint8Array(
                partial ? pixel : [...pixel, ...pixel, ...pixel, ...pixel],
              ),
              { bytesPerRow: size * 4 },
              [size, size],
            );
          } else {
            const pipeline = target.createComputePipeline({
              layout: 'auto',
              compute: {
                module: target.createShaderModule({
                  code: `@group(0) @binding(0) var output: texture_storage_2d<${format}, write>;
                  @compute @workgroup_size(1) fn main(@builtin(global_invocation_id) id: vec3u) {
                    textureStore(output, vec2i(id.xy) + vec2i(${origin}), vec4f(0, 1, 0, 0));
                  }`,
                }),
                entryPoint: 'main',
              },
            });
            const group = target.createBindGroup({
              layout: pipeline.getBindGroupLayout(0),
              entries: [{ binding: 0, resource: texture.createView() }],
            });
            const encoder = target.createCommandEncoder();
            const pass = encoder.beginComputePass();
            pass.setPipeline(pipeline);
            pass.setBindGroup(0, group);
            pass.dispatchWorkgroups(size, size);
            pass.end();
            target.queue.submit([encoder.finish()]);
          }
          // Capture before yielding: a host checkpoint expires the current texture.
          if (snapshot) pixels = snapshot(target, canvas);
        },
        false,
        `${label} accepts and submits ${partial ? 'partial' : 'full'} write ${frame}`,
      );
      if (snapshot) {
        check(
          (await pixels).every(
            (value, i) =>
              Math.abs(value - (partial && i < 12 ? blank : expected)[i % 4]) <= 1,
          ),
          partial
            ? `${label} partial write ${frame} preserves one texel and clears the other three`
            : `${label} snapshot preserves upload/compute and alpha handling`,
        );
      }
    }
    if (snapshot) {
      // transferToImageBitmap publishes a cleared replacement using pooled storage.
      for (let frame = 0; frame < 3; frame++) {
        check(
          (await snapshot(target, canvas)).every((value, i) => value === blank[i % 4]),
          `${label} recycled publication ${frame} contains only cleared pixels`,
        );
      }
      context.getCurrentTexture();
      check(
        (await snapshot(target, canvas)).every((value, i) => value === blank[i % 4]),
        `${label} untouched current texture is initialized before snapshot`,
      );
    }
    await validation(
      target,
      () => {
        // Acquire and encode together so expiry cannot explain the expected error.
        const texture = context.getCurrentTexture();
        const encoder = target.createCommandEncoder();
        const pass = encoder.beginRenderPass({
          colorAttachments: [
            { view: texture.createView(), loadOp: 'clear', storeOp: 'store' },
          ],
        });
        pass.end();
        encoder.finish();
      },
      true,
      `${label} ordinary render pass cannot use private RENDER_ATTACHMENT`,
    );
    context.unconfigure();
    cases.push(label);
  }
  async function colorProfiles() {
    function draw(color) {
      const texture = context.getCurrentTexture();
      const encoder = device.createCommandEncoder();
      const pass = encoder.beginRenderPass({
        colorAttachments: [
          {
            view: texture.createView(),
            clearValue: color,
            loadOp: 'clear',
            storeOp: 'store',
          },
        ],
      });
      pass.end();
      device.queue.submit([encoder.finish()]);
      return texture;
    }
    function expectColor(pixels, expected, label, tolerance = 1) {
      check(
        pixels.length === canvas.width * canvas.height * 4 &&
          pixels.every((value, i) => Math.abs(value - expected[i % 4]) <= tolerance),
        `${label}: ${pixels}`,
      );
    }
    for (const format of ['rgba8unorm', 'bgra8unorm', 'rgba16float']) {
      for (const colorSpace of ['srgb', 'display-p3']) {
        for (const mode of ['standard', 'extended']) {
          const label = `${format}/${colorSpace}/${mode}`;
          const opaque = format === 'bgra8unorm';
          const alphaMode = opaque ? 'opaque' : 'premultiplied';
          const usage =
            GPUTextureUsage.RENDER_ATTACHMENT |
            (format === 'rgba16float' && colorSpace === 'display-p3'
              ? GPUTextureUsage.TEXTURE_BINDING
              : 0);
          let pixels;
          await validation(
            device,
            () => {
              context.configure({
                device,
                format,
                colorSpace,
                toneMapping: { mode },
                usage,
                alphaMode,
              });
              const config = context.getConfiguration();
              check(
                config.format === format &&
                  config.colorSpace === colorSpace &&
                  config.toneMapping.mode === mode,
                `${label} configuration round-trips independently`,
              );
              const texture = draw(
                opaque ? [0.5, 0.25, 0.125, 0] : [0.25, 0.125, 0.0625, 0.5],
              );
              check(
                texture.format === format && texture.usage === usage,
                `${label} texture exposes its exact format and usage`,
              );
              if (snapshot) pixels = snapshot(device, canvas);
            },
            false,
            `${label} renders with the declared usage`,
          );
          if (pixels) {
            const rgb = colorSpace === 'srgb' ? [128, 64, 32] : [137, 59, 21];
            expectColor(await pixels, [...rgb, opaque ? 255 : 128], label, 2);
          }
        }
      }
    }
    cases.push('color-profiles');
    await validation(
      device,
      () => {
        context.configure({ device, format: 'rgba16float' });
        const layout = device.createBindGroupLayout({
          entries: [{ binding: 0, visibility: GPUShaderStage.FRAGMENT, texture: {} }],
        });
        device.createBindGroup({
          layout,
          entries: [{ binding: 0, resource: context.getCurrentTexture().createView() }],
        });
      },
      true,
      'Standard FP16 projection does not grant a public TEXTURE_BINDING usage',
    );
    if (!snapshot) return;

    for (const [colorSpace, mode, expected] of [
      ['srgb', 'standard', [128, 64, 32, 128]],
      ['srgb', 'extended', [128, 64, 32, 128]],
      ['display-p3', 'extended', [137, 59, 21, 128]],
    ]) {
      const label = `${colorSpace}/${mode}`;
      context.configure({
        device,
        format: 'rgba16float',
        colorSpace,
        toneMapping: { mode },
        alphaMode: 'premultiplied',
      });
      let captured;
      await validation(
        device,
        () => {
          const texture = draw([0.25, 0.125, 0.0625, 0.5]);
          texture.destroy();
          check(
            context.getCurrentTexture() === texture,
            `${label} explicit destroy preserves current texture identity until expiry`,
          );
          captured = createImageBitmap(canvas, { premultiplyAlpha: 'none' });
        },
        false,
        `${label} explicit destroy and snapshot avoid private validation errors`,
      );
      expectColor(
        await snapshot(device, canvas, await captured),
        expected,
        `${label} snapshot preserves drawing submitted before destroy`,
      );
      await new Promise(requestAnimationFrame);
      expectColor(
        await snapshot(device, canvas),
        expected,
        `${label} published frame preserves drawing submitted before destroy`,
      );
      if (colorSpace === 'srgb' && mode === 'extended') {
        let empty;
        await validation(
          device,
          () => {
            context.getCurrentTexture().destroy();
            empty = snapshot(device, canvas);
          },
          false,
          'Destroying an unused FP16 texture avoids validation errors',
        );
        expectColor(
          await empty,
          [0, 0, 0, 0],
          'An unused recycled FP16 texture stays clear',
        );
      }
    }
    cases.push('color-destroy');

    context.configure({
      device,
      format: 'rgba16float',
      colorSpace: 'display-p3',
      toneMapping: { mode: 'extended' },
      alphaMode: 'premultiplied',
    });
    const texture = draw([0.25, 0.125, 0.0625, 0.5]);
    const bitmap = createImageBitmap(canvas, { premultiplyAlpha: 'none' });
    const exporting = canvas.convertToBlob();
    const jpegExport = canvas.convertToBlob({ type: 'IMAGE/JPEG', quality: 0.9 });
    check(
      context.getCurrentTexture() === texture,
      'Color capture preserves texture identity',
    );
    draw([0, 0.5, 0, 0.5]);
    await new Promise(requestAnimationFrame);
    expectColor(
      await snapshot(device, canvas, await bitmap),
      [137, 59, 21, 128],
      'createImageBitmap captures the P3 pixels at call time',
      2,
    );
    function checkPng(buffer, depth, colorTag, label) {
      const bytes = new DataView(buffer);
      check(
        bytes.getUint32(0) === 0x89504e47 && bytes.getUint8(24) === depth,
        `${label} writes ${depth}-bit PNG samples`,
      );
      let profile;
      let dpi96 = false;
      for (let offset = 8; offset + 12 <= bytes.byteLength;) {
        const length = bytes.getUint32(offset);
        const name = bytes.getUint32(offset + 4);
        const data = offset + 8;
        if (name === 0x63494350 && length === 4) profile = bytes.getUint32(data);
        if (name === 0x70485973 && length === 9)
          dpi96 =
            bytes.getUint32(data) === 3780 &&
            bytes.getUint32(data + 4) === 3780 &&
            bytes.getUint8(data + 8) === 1;
        offset += 12 + length;
      }
      check(profile === colorTag && dpi96, `${label} writes its color tag and 96 dpi`);
    }
    const blob = await exporting;
    check(blob.type === 'image/png', 'The default color canvas export is PNG');
    checkPng(await blob.arrayBuffer(), 16, 0x09100001, 'Extended FP16 export');
    const jpeg = await jpegExport;
    check(
      jpeg.type === 'image/jpeg' &&
        new TextDecoder().decode(await jpeg.arrayBuffer()).includes('ICC_PROFILE'),
      'JPEG export normalizes MIME and includes the SDR Display P3 profile',
    );
    const sdrCanvas =
      typeof document === 'undefined'
        ? new OffscreenCanvas(1, 1)
        : document.createElement('canvas');
    sdrCanvas.width = sdrCanvas.height = 1;
    const sdrContext = sdrCanvas.getContext('webgpu');
    try {
      sdrContext.configure({
        device,
        format: 'rgba8unorm',
        colorSpace: 'display-p3',
        usage: GPUTextureUsage.COPY_DST,
      });
      device.queue.writeTexture(
        { texture: sdrContext.getCurrentTexture() },
        new Uint8Array([180, 32, 12, 255]),
        {},
        [1, 1],
      );
      const type = 'application/x-unsupported';
      const sdrBlob = sdrCanvas.toBlob
        ? await new Promise((resolve) => sdrCanvas.toBlob(resolve, type))
        : await sdrCanvas.convertToBlob({ type });
      check(sdrBlob?.type === 'image/png', 'Unsupported MIME falls back to PNG');
      checkPng(await sdrBlob.arrayBuffer(), 8, 0x0c0d0001, 'SDR Display P3 export');
      if (sdrCanvas.toDataURL) {
        const prefix = 'data:image/png;base64,';
        const url = sdrCanvas.toDataURL(type);
        check(url.startsWith(prefix), 'toDataURL falls back to PNG');
        const encoded = Uint8Array.from(atob(url.slice(prefix.length)), (c) =>
          c.charCodeAt(0),
        );
        checkPng(encoded.buffer, 8, 0x0c0d0001, 'Display P3 data URL');
      }
    } finally {
      sdrContext.unconfigure();
    }
    cases.push('color-exports');
    expectColor(
      await snapshot(device, canvas),
      [0, 255, 0, 128],
      'A published P3 snapshot captures the later drawing',
    );
    expectColor(
      await snapshot(device, canvas),
      [0, 0, 0, 0],
      'Transfer clears publication',
    );
    const acquired = draw([0.5, 0, 0, 0.5]);
    const transferred = snapshot(device, canvas);
    check(
      context.getCurrentTexture() !== acquired,
      'Transfer expires the P3 input texture',
    );
    expectColor(
      await transferred,
      [255, 0, 0, 128],
      'Transfer captures the current P3 input',
    );

    const resized = draw([0, 0.5, 0, 0.5]);
    canvas.width = 3;
    check(
      context.getCurrentTexture() !== resized &&
        context.getCurrentTexture().width === 3 &&
        context.getConfiguration().colorSpace === 'display-p3',
      'Color canvas resize replaces the input and preserves its configuration',
    );
    expectColor(
      await snapshot(device, canvas),
      [0, 0, 0, 0],
      'Resize clears old color pixels',
    );
    canvas.width = 2;
    context.configure({
      device,
      format: 'rgba16float',
      toneMapping: { mode: 'extended' },
      alphaMode: 'premultiplied',
    });
    draw([1, 0.125, -0.125, 0.5]);
    expectColor(
      await snapshot(device, canvas),
      [255, 64, 0, 128],
      'Reconfigured HDR snapshot unpremultiplies and clamps to sRGB RGBA8',
    );
    context.unconfigure();
    cases.push('color-snapshots');
  }
  try {
    check(
      GPUTextureUsage.TRANSIENT_ATTACHMENT === 32 && Object.isFrozen(GPUTextureUsage),
      'The shared runtime exposes the frozen transient attachment constant',
    );
    check(
      context.getConfiguration() === null,
      'Configuration is null before configure',
    );
    throws(() => context.getCurrentTexture(), 'InvalidStateError');
    context.configure({ device, format: 'rgba8unorm' });
    const defaults = context.getConfiguration();
    check(
      defaults.usage === GPUTextureUsage.RENDER_ATTACHMENT &&
        defaults.toneMapping.mode === 'standard' &&
        defaults.viewFormats.length === 0 &&
        defaults.device === device,
      'Canvas defaults retain render usage, standard tone mapping and device identity',
    );
    check(
      context.getCurrentTexture().usage === GPUTextureUsage.RENDER_ATTACHMENT,
      'Default texture usage',
    );
    const input = {
      device,
      format: 'rgba8unorm',
      usage: GPUTextureUsage.COPY_DST,
      viewFormats: ['rgba8unorm-srgb'],
      toneMapping: { mode: 'standard' },
    };
    context.configure(input);
    input.device = null;
    input.usage = GPUTextureUsage.RENDER_ATTACHMENT;
    input.viewFormats[0] = 'bgra8unorm';
    input.toneMapping.mode = 'extended';
    const first = context.getConfiguration();
    const second = context.getConfiguration();
    check(
      first !== second &&
        first.viewFormats !== second.viewFormats &&
        first.toneMapping !== second.toneMapping &&
        first.device === device &&
        second.device === device,
      'Every configuration returns independent nested values and the same GPUDevice',
    );
    check(
      first.usage === GPUTextureUsage.COPY_DST &&
        first.viewFormats.join() === 'rgba8unorm-srgb' &&
        first.toneMapping.mode === 'standard',
      'Mutating original configuration leaves the stored snapshot unchanged',
    );
    first.device = null;
    first.usage = GPUTextureUsage.RENDER_ATTACHMENT;
    first.viewFormats.length = 0;
    first.toneMapping.mode = 'extended';
    const later = context.getConfiguration();
    check(
      later.device === device &&
        later.usage === GPUTextureUsage.COPY_DST &&
        later.viewFormats.join() === 'rgba8unorm-srgb' &&
        later.toneMapping.mode === 'standard' &&
        second.viewFormats.join() === 'rgba8unorm-srgb' &&
        second.toneMapping.mode === 'standard',
      'Mutating a returned configuration leaves previous and future snapshots unchanged',
    );
    check(
      context.getCurrentTexture().usage === GPUTextureUsage.COPY_DST,
      'Return mutations do not change native usage',
    );
    const preserved = context.getCurrentTexture();
    for (const format of [
      'r8unorm',
      'rgba8unorm-srgb',
      'bgra8unorm-srgb',
      'depth24plus',
    ]) {
      throws(
        () => context.configure({ device, format, colorSpace: 'display-p3' }),
        'TypeError',
      );
      check(
        context.getCurrentTexture() === preserved,
        'Unsupported canvas format preserves current texture',
      );
    }
    for (const [format, feature] of [
      ['depth32float-stencil8', 'depth32float-stencil8'],
      ['bc1-rgba-unorm', 'texture-compression-bc'],
      ['etc2-rgb8unorm', 'texture-compression-etc2'],
      ['eac-r11unorm', 'texture-compression-etc2'],
      ['astc-4x4-unorm', 'texture-compression-astc'],
      ['rgba16snorm', 'texture-formats-tier1'],
    ]) {
      if (device.features.has(feature)) continue;
      throws(
        () =>
          context.configure({
            device,
            format: 'rgba8unorm',
            viewFormats: ['bgra8unorm', format],
            colorSpace: 'display-p3',
          }),
        'TypeError',
      );
      check(
        context.getCurrentTexture() === preserved,
        'View-format feature validation precedes profile restrictions and preserves current texture',
      );
    }
    throws(
      () =>
        context.configure({
          device,
          format: 'rgba8unorm',
          viewFormats: ['bgra8unorm'],
          usage:
            GPUTextureUsage.TRANSIENT_ATTACHMENT | GPUTextureUsage.RENDER_ATTACHMENT,
        }),
      'TypeError',
    );
    check(
      context.getCurrentTexture() === preserved,
      'Transient rejection precedes view-format validation and preserves current texture',
    );
    throws(
      () =>
        context.configure({
          device,
          format: 'rgba8unorm',
          usage: GPUTextureUsage.TRANSIENT_ATTACHMENT,
        }),
      'TypeError',
    );
    check(
      context.getConfiguration().usage === GPUTextureUsage.COPY_DST,
      'Transient rejection preserves configuration',
    );
    cases.push('format-sequencing');
    context.unconfigure();
    check(
      context.getConfiguration() === null,
      'Configuration is null after unconfigure',
    );
    throws(() => context.getCurrentTexture(), 'InvalidStateError');
    check(
      [...device.features].every(
        (name) => !/dawn|shared-texture|shared-fence|transient/i.test(name),
      ),
      'Native internal usage and interop features remain private',
    );
    await transientAttachments();
    await invalidCanvasDescriptor();
    await colorProfiles();
    for (const usage of [0, 0x40000000]) await invalidUsage('rgba8unorm', usage);
    if (!device.features.has('bgra8unorm-storage'))
      await invalidUsage('bgra8unorm', GPUTextureUsage.STORAGE_BINDING);
    for (const format of ['rgba8unorm', 'bgra8unorm'])
      await exercise(device, format, GPUTextureUsage.COPY_DST);
    await exercise(device, 'rgba8unorm', GPUTextureUsage.STORAGE_BINDING);
    const adapter = await navigator.gpu.requestAdapter();
    check(
      [...adapter.features].every(
        (name) => !/dawn|shared-texture|shared-fence|transient/i.test(name),
      ),
      'Private Dawn features remain hidden on the adapter',
    );
    await deviceLoss();
    const bgraStorage = adapter.features.has('bgra8unorm-storage');
    if (bgraStorage) {
      const storageDevice = await adapter.requestDevice({
        requiredFeatures: ['bgra8unorm-storage'],
      });
      try {
        await exercise(storageDevice, 'bgra8unorm', GPUTextureUsage.STORAGE_BINDING);
      } finally {
        storageDevice.destroy();
      }
    }
    return { assertions, cases, bgraStorage, pixelSnapshots: Boolean(snapshot) };
  } finally {
    context.unconfigure();
  }
}

export async function verifyCanvasConfigurationPixels(device, assert) {
  return verifyCanvasConfiguration(device, assert, (targetDevice, canvas, bitmap) =>
    readCanvasPixels(targetDevice, canvas, readTexturePixels, bitmap),
  );
}
