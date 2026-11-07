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
    await validation(
      device,
      () => {
        const texture = context.getCurrentTexture();
        check(texture.usage === usage, 'Error texture retains the requested usage');
        check(
          texture.width === 2 && texture.format === format,
          'Error texture properties',
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
      'Invalid configuration returns a validation error texture',
    );
    context.unconfigure();
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
  try {
    check(
      GPUTextureUsage.TRANSIENT_ATTACHMENT === 32 && Object.isFrozen(GPUTextureUsage),
      'The shared runtime exposes the frozen transient attachment constant',
    );
    check(
      context.getConfiguration() === null,
      'Configuration is null before configure',
    );
    const zero = new OffscreenCanvas(0, 2).getContext('webgpu');
    throws(() => zero.configure({ device, format: 'rgba8unorm' }), 'OperationError');
    check(zero.getConfiguration() === null, 'Failed configure retains null state');
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
      throws(
        () =>
          context.configure({
            device,
            format: 'rgba8unorm',
            viewFormats: ['bgra8unorm', format],
            colorSpace: 'display-p3',
          }),
        device.features.has(feature) ? 'NotSupportedError' : 'TypeError',
      );
      check(
        context.getCurrentTexture() === preserved,
        'View-format feature validation precedes profile restrictions and preserves current texture',
      );
    }
    for (const options of [
      { format: 'rgba16float' },
      { colorSpace: 'display-p3' },
      { viewFormats: ['bgra8unorm'] },
      { toneMapping: { mode: 'extended' } },
    ]) {
      throws(
        () => context.configure({ device, format: 'rgba8unorm', ...options }),
        'NotSupportedError',
      );
      throws(
        () =>
          context.configure({
            device,
            format: 'rgba8unorm',
            ...options,
            usage:
              GPUTextureUsage.TRANSIENT_ATTACHMENT | GPUTextureUsage.RENDER_ATTACHMENT,
          }),
        'TypeError',
      );
      check(
        context.getCurrentTexture() === preserved,
        'Profile and transient rejection preserve current texture',
      );
    }
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
  return verifyCanvasConfiguration(device, assert, (targetDevice, canvas) =>
    readCanvasPixels(targetDevice, canvas, readTexturePixels),
  );
}
