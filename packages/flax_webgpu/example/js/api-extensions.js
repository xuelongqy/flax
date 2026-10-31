import { readTexturePixels } from './images.js';

// Exercise native results, including snapshots of immediate bytes at encoding time.
export async function verifyApiExtensions(defaultDevice, assert) {
  const adapter = await navigator.gpu.requestAdapter();
  assert(adapter, 'Extension acceptance requires a Metal adapter');
  const swizzle = adapter.features.has('texture-component-swizzle');
  const immediates = adapter.limits.maxImmediateSize >= 16;
  const device = await adapter.requestDevice({
    requiredFeatures: swizzle ? ['texture-component-swizzle'] : [],
    requiredLimits: immediates ? { maxImmediateSize: 16 } : {},
  });
  const target = device.createTexture({
    size: [1, 1],
    format: 'rgba8unorm',
    usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC,
  });
  const source = device.createTexture({
    size: [1, 1],
    format: 'rgba8unorm',
    usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST,
    textureBindingViewDimension: '2d',
  });
  const vertex = `
    @vertex fn vertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {
      let positions = array(vec2f(-1, -1), vec2f(3, -1), vec2f(-1, 3));
      return vec4f(positions[i], 0, 1);
    }`;
  const attachment = {
    view: target.createView(),
    loadOp: 'clear',
    storeOp: 'store',
    clearValue: [0, 0, 0, 0],
  };
  try {
    const group = device.createBindGroup({
      layout: device.createBindGroupLayout({ entries: [] }),
      entries: [],
    });
    for (const kind of ['compute', 'render', 'bundle']) {
      const encoder = device.createCommandEncoder();
      const pass =
        kind === 'compute'
          ? encoder.beginComputePass()
          : kind === 'bundle'
            ? device.createRenderBundleEncoder({ colorFormats: ['rgba8unorm'] })
            : encoder.beginRenderPass({ colorAttachments: [attachment] });
      pass.setBindGroup(0, group, new Uint32Array(2), 2, 0);
      for (const [start, length] of [
        [3, 0],
        [1, 2],
        [0, 3],
        [2, 1],
      ]) {
        let error;
        try {
          pass.setBindGroup(0, group, new Uint32Array(2), start, length);
        } catch (value) {
          error = value;
        }
        assert(
          error instanceof RangeError,
          kind + ' rejects out-of-bounds dynamic offset ranges',
        );
      }
      if (kind === 'bundle') pass.finish();
      else {
        pass.end();
        encoder.finish();
      }
    }
    assert(
      'textureBindingViewDimension' in GPUTexture.prototype,
      'Texture binding dimension has a native-backed getter',
    );
    assert(
      source.textureBindingViewDimension === undefined,
      "Core mode preserves Dawn's undefined texture binding dimension",
    );
    if (swizzle) {
      device.queue.writeTexture(
        { texture: source },
        new Uint8Array([20, 40, 80, 255]),
        {},
        [1, 1],
      );
      const module = device.createShaderModule({
        code:
          vertex +
          `
        @group(0) @binding(0) var image: texture_2d<f32>;
        @fragment fn fragment() -> @location(0) vec4f {
          return textureLoad(image, vec2i(0), 0);
        }`,
      });
      const pipeline = device.createRenderPipeline({
        layout: 'auto',
        vertex: { module },
        fragment: { module, targets: [{ format: 'rgba8unorm' }] },
      });
      for (const [swizzle, expected] of [
        ['bgra', [80, 40, 20, 255]],
        ['rrr1', [20, 20, 20, 255]],
        ['01rg', [0, 255, 20, 40]],
      ]) {
        const group = device.createBindGroup({
          layout: pipeline.getBindGroupLayout(0),
          entries: [{ binding: 0, resource: source.createView({ swizzle }) }],
        });
        const encoder = device.createCommandEncoder();
        const pass = encoder.beginRenderPass({ colorAttachments: [attachment] });
        pass.setPipeline(pipeline);
        pass.setBindGroup(0, group);
        pass.draw(3);
        pass.end();
        device.queue.submit([encoder.finish()]);
        assert(
          JSON.stringify(await readTexturePixels(device, target, 1, 1)) ===
            JSON.stringify(expected),
          'Texture swizzle changes actual GPU pixels: ' + swizzle,
        );
      }
      const plain = defaultDevice.createTexture({
        size: [1],
        format: 'rgba8unorm',
        usage: GPUTextureUsage.TEXTURE_BINDING,
      });
      defaultDevice.pushErrorScope('validation');
      plain.createView({ swizzle: 'bgra' });
      assert(
        (await defaultDevice.popErrorScope()) instanceof GPUValidationError,
        'Non-default swizzle requires the enabled device feature',
      );
      plain.destroy();
    }
    if (immediates) {
      const layout = device.createPipelineLayout({
        bindGroupLayouts: [],
        immediateSize: 16,
      });
      const module = device.createShaderModule({
        code:
          vertex +
          `
        var<immediate> color: vec4f;
        @fragment fn fragment() -> @location(0) vec4f { return color; }`,
      });
      const pipeline = device.createRenderPipeline({
        layout,
        vertex: { module },
        fragment: { module, targets: [{ format: 'rgba8unorm' }] },
      });
      for (const bundle of [false, true]) {
        const encoder = device.createCommandEncoder();
        const pass = encoder.beginRenderPass({
          colorAttachments: [attachment],
          maxDrawCount: 1,
        });
        const commands = bundle
          ? device.createRenderBundleEncoder({ colorFormats: ['rgba8unorm'] })
          : pass;
        commands.setPipeline(pipeline);
        const colors = new Float32Array([9, 0.25, 0.5, 1, 1]);
        commands.setImmediates(
          0,
          bundle ? colors.buffer : colors,
          bundle ? 4 : 1,
          bundle ? 16 : 4,
        );
        colors.fill(0);
        commands.draw(3);
        if (bundle) pass.executeBundles([commands.finish()]);
        pass.end();
        device.queue.submit([encoder.finish()]);
        const pixels = await readTexturePixels(device, target, 1, 1);
        assert(
          Math.abs(pixels[0] - 64) <= 1 &&
            Math.abs(pixels[1] - 128) <= 1 &&
            pixels[2] === 255 &&
            pixels[3] === 255,
          'Immediate data reaches ' + (bundle ? 'render bundles' : 'render passes'),
        );
      }
      const output = device.createBuffer({
        size: 16,
        usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
      });
      const readback = device.createBuffer({
        size: 16,
        usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
      });
      const upload = device.createBuffer({
        size: 24,
        usage: GPUBufferUsage.COPY_SRC,
        mappedAtCreation: true,
      });
      try {
        const data = new Uint32Array(upload.getMappedRange());
        data.set([0, 11, 22, 33, 44, 0]);
        const module = device.createShaderModule({
          code: `
          var<immediate> values: vec4u;
          @group(0) @binding(0) var<storage, read_write> output: vec4u;
          @compute @workgroup_size(1) fn main() { output = values; }`,
        });
        const groupLayout = device.createBindGroupLayout({
          entries: [
            {
              binding: 0,
              visibility: GPUShaderStage.COMPUTE,
              buffer: { type: 'storage' },
            },
          ],
        });
        const pipeline = device.createComputePipeline({
          layout: device.createPipelineLayout({
            bindGroupLayouts: [groupLayout],
            immediateSize: 16,
          }),
          compute: { module },
        });
        const group = device.createBindGroup({
          layout: groupLayout,
          entries: [{ binding: 0, resource: { buffer: output } }],
        });
        const encoder = device.createCommandEncoder();
        const pass = encoder.beginComputePass();
        pass.setPipeline(pipeline);
        pass.setBindGroup(0, group);
        pass.setImmediates(0, data, 1, 4);
        upload.unmap();
        const patch = new Uint32Array([0, 99, 0]);
        pass.setImmediates(4, new DataView(patch.buffer, 4, 8), 0, 4);
        pass.dispatchWorkgroups(1);
        pass.end();
        encoder.copyBufferToBuffer(output, readback);
        device.queue.submit([encoder.finish()]);
        await readback.mapAsync(GPUMapMode.READ);
        assert(
          JSON.stringify(Array.from(new Uint32Array(readback.getMappedRange()))) ===
            '[11,99,33,44]',
          'Compute immediates honor typed-array offsets, byte views and mapped-source detachment',
        );
        readback.unmap();
      } finally {
        upload.destroy();
        readback.destroy();
        output.destroy();
      }
      device.pushErrorScope('validation');
      const encoder = device.createCommandEncoder();
      const pass = encoder.beginRenderPass({
        colorAttachments: [attachment],
        maxDrawCount: 0,
      });
      pass.setPipeline(pipeline);
      pass.setImmediates(0, new Float32Array(4));
      pass.draw(3);
      pass.end();
      encoder.finish();
      assert(
        (await device.popErrorScope()) instanceof GPUValidationError,
        'maxDrawCount is validated when finishing the encoder',
      );
    }
    return { swizzle, immediates, maxImmediateSize: device.limits.maxImmediateSize };
  } finally {
    source.destroy();
    target.destroy();
    device.destroy();
  }
}
