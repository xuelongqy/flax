import { readTexturePixels } from './images.js';
import { verifyInputSemantics } from './input-semantics.js';
import { verifyCompatibilityProfile } from './compatibility.js';
import { verifyDiagnostics } from './diagnostics.js';

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
    const inputSemantics = await verifyInputSemantics(device, assert);
    const compatibility = await verifyCompatibilityProfile(assert);
    const diagnostics = await verifyDiagnostics(device, assert);
    const defaultDescriptors = [
      [
        'createCommandEncoder',
        () =>
          (...args) =>
            device.createCommandEncoder(...args),
      ],
      [
        'createView',
        () =>
          (...args) =>
            target.createView(...args),
      ],
      [
        'finish',
        () => {
          const encoder = device.createCommandEncoder();
          return (...args) => encoder.finish(...args);
        },
      ],
    ];
    for (const [name, prepare] of defaultDescriptors) {
      for (const args of [[], [undefined], [null]]) {
        const call = prepare();
        const saved = Object.getOwnPropertyDescriptor(Object.prototype, 'label');
        let reads = 0,
          result;
        try {
          Object.defineProperty(Object.prototype, 'label', {
            configurable: true,
            get() {
              reads++;
              return 'unexpected';
            },
          });
          result = call(...args);
        } finally {
          if (saved) Object.defineProperty(Object.prototype, 'label', saved);
          else delete Object.prototype.label;
        }
        assert(
          reads === 0 && result.label === '',
          name + ' nullish defaults ignore prototype getters',
        );
      }
      assert(
        prepare()({}).label === '',
        name + ' explicit empty descriptor keeps defaults',
      );
      assert(
        prepare()({ label: 'explicit' }).label === 'explicit',
        name + ' preserves explicit label',
      );
      let reads = 0;
      const inherited = Object.create({
        get label() {
          reads++;
          return 'inherited';
        },
      });
      assert(
        prepare()(inherited).label === 'inherited' && reads === 1,
        name + ' reads explicit inherited label once',
      );
      for (const withSetter of [false, true]) {
        for (const descriptor of [{}, { label: 'explicit' }]) {
          const saved = Object.getOwnPropertyDescriptor(Object.prototype, 'label');
          let reads = 0,
            writes = 0,
            result;
          try {
            Object.defineProperty(Object.prototype, 'label', {
              configurable: true,
              get() {
                reads++;
                return 'prototype';
              },
              ...(withSetter
                ? {
                    set() {
                      writes++;
                    },
                  }
                : {}),
            });
            result = prepare()(descriptor);
          } finally {
            if (saved) Object.defineProperty(Object.prototype, 'label', saved);
            else delete Object.prototype.label;
          }
          assert(
            result.label === (descriptor.label ?? 'prototype') &&
              reads === (descriptor.label === undefined ? 1 : 0) &&
              writes === 0,
            name + ' copies explicit dictionary members despite prototype accessors',
          );
        }
      }
      let proxyReads = 0;
      const memberReads = [];
      const proxy = new Proxy(
        { label: 'proxy' },
        {
          get(value, key, receiver) {
            memberReads.push(key);
            if (key === 'label') proxyReads++;
            return Reflect.get(value, key, receiver);
          },
        },
      );
      assert(
        prepare()(proxy).label === 'proxy' && proxyReads === 1,
        name + ' preserves explicit Proxy conversion',
      );
      assert(
        JSON.stringify(memberReads) ===
          JSON.stringify(
            name === 'createView'
              ? [
                  'label',
                  'arrayLayerCount',
                  'aspect',
                  'baseArrayLayer',
                  'baseMipLevel',
                  'dimension',
                  'format',
                  'mipLevelCount',
                  'swizzle',
                  'usage',
                ]
              : ['label'],
          ),
        name + ' reads inherited dictionary members before sorted own members',
      );
      const sentinel = Error('descriptor getter sentinel');
      let thrown;
      try {
        prepare()({
          get label() {
            throw sentinel;
          },
        });
      } catch (error) {
        thrown = error;
      }
      assert(
        thrown === sentinel,
        name + ' preserves descriptor getter exception identity',
      );
      for (const descriptor of [
        42,
        false,
        'invalid',
        Symbol('descriptor'),
        { label: Symbol('label') },
      ]) {
        let error;
        try {
          prepare()(descriptor);
        } catch (value) {
          error = value;
        }
        assert(
          error instanceof TypeError,
          name + ' preserves invalid explicit descriptor rejection',
        );
      }
    }
    const uploadBuffer = device.createBuffer({
      size: 16,
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
    });
    const uploadReadback = device.createBuffer({
      size: 16,
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
    });
    try {
      device.pushErrorScope('validation');
      for (const data of [
        new Uint8Array(3),
        new Uint16Array(3),
        new DataView(new ArrayBuffer(7)),
      ]) {
        let error;
        try {
          device.queue.writeBuffer(uploadBuffer, 0, data);
        } catch (value) {
          error = value;
        }
        assert(
          error?.name === 'OperationError',
          'writeBuffer rejects non-four-byte content synchronously',
        );
      }
      device.queue.writeBuffer(
        uploadBuffer,
        0,
        new Uint8Array([99, 1, 2, 3, 4, 99]),
        1,
        4,
      );
      device.queue.writeBuffer(
        uploadBuffer,
        4,
        new Uint16Array([99, 0x0605, 0x0807, 99]),
        1,
        2,
      );
      device.queue.writeBuffer(
        uploadBuffer,
        8,
        new DataView(new Uint8Array([99, 9, 10, 11, 12, 99]).buffer, 1, 4),
      );
      device.queue.writeBuffer(
        uploadBuffer,
        12,
        new Uint8Array([99, 13, 14, 15, 16, 99]).buffer,
        1,
        4,
      );
      const encoder = device.createCommandEncoder();
      encoder.copyBufferToBuffer(uploadBuffer, uploadReadback);
      device.queue.submit([encoder.finish()]);
      await uploadReadback.mapAsync(GPUMapMode.READ);
      assert(
        JSON.stringify(Array.from(new Uint8Array(uploadReadback.getMappedRange()))) ===
          '[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]',
        'writeBuffer uses typed-array elements and ArrayBuffer/DataView bytes',
      );
      uploadReadback.unmap();
      assert(
        (await device.popErrorScope()) === null,
        'Rejected writeBuffer content leaves valid uploads usable',
      );
      device.pushErrorScope('validation');
      device.queue.writeBuffer(uploadBuffer, 2, new Uint8Array(4));
      assert(
        (await device.popErrorScope()) instanceof GPUValidationError,
        'writeBuffer destination alignment remains native validation',
      );
    } finally {
      uploadReadback.destroy();
      uploadBuffer.destroy();
    }
    const indexBuffer = device.createBuffer({
      size: 12,
      usage: GPUBufferUsage.INDEX | GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
    });
    const indexedModule = device.createShaderModule({
      code: `
        @vertex fn vertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {
          let positions = array(vec2f(-1, -1), vec2f(3, -1), vec2f(-1, 3));
          return vec4f(positions[i % 3u], 0, 1);
        }
        @fragment fn fragment() -> @location(0) vec4f { return vec4f(0, 1, 0, 1); }`,
    });
    const indexedPipeline = device.createRenderPipeline({
      layout: 'auto',
      vertex: { module: indexedModule },
      fragment: { module: indexedModule, targets: [{ format: 'rgba8unorm' }] },
    });
    try {
      device.queue.writeBuffer(indexBuffer, 0, new Uint32Array([1, 2, 3]));
      for (const bundle of [false, true]) {
        device.pushErrorScope('validation');
        for (const baseVertex of [-1, 1]) {
          const encoder = device.createCommandEncoder();
          const pass = encoder.beginRenderPass({ colorAttachments: [attachment] });
          const commands = bundle
            ? device.createRenderBundleEncoder({ colorFormats: ['rgba8unorm'] })
            : pass;
          commands.setPipeline(indexedPipeline);
          commands.setIndexBuffer(indexBuffer, 'uint32');
          if (baseVertex === -1) {
            let offsetReads = 0;
            commands.setVertexBuffer(0, indexBuffer, {
              valueOf() {
                offsetReads++;
                return 0.5;
              },
            });
            assert(
              offsetReads === 1,
              'setVertexBuffer converts its offset once before deriving the range',
            );
            for (const buffer of [false, 0, '']) {
              let error;
              try {
                commands.setVertexBuffer(0, buffer);
              } catch (value) {
                error = value;
              }
              assert(
                error instanceof TypeError,
                'setVertexBuffer rejects non-null primitive buffers',
              );
            }
            for (const buffer of [null, undefined]) {
              for (const size of [NaN, -1, 1n]) {
                let error;
                try {
                  commands.setVertexBuffer(0, buffer, 0, size);
                } catch (value) {
                  error = value;
                }
                assert(
                  error instanceof TypeError,
                  'setVertexBuffer converts explicit sizes before nullish unbinding',
                );
              }
            }
            for (const value of [NaN, Infinity, -2147483649, 2147483648, 1n]) {
              let error;
              try {
                commands.drawIndexed(3, 1, 0, value);
              } catch (value) {
                error = value;
              }
              assert(
                error instanceof TypeError,
                'drawIndexed enforces the signed 32-bit baseVertex range',
              );
            }
          }
          commands.setVertexBuffer(0, null);
          commands.setVertexBuffer(0, undefined);
          commands.drawIndexed(3, 1, 0, baseVertex);
          if (bundle) pass.executeBundles([commands.finish()]);
          pass.end();
          device.queue.submit([encoder.finish()]);
          assert(
            JSON.stringify(await readTexturePixels(device, target, 1, 1)) ===
              '[0,255,0,255]',
            'Signed indexed draws render through ' + (bundle ? 'bundles' : 'passes'),
          );
        }
        assert(
          (await device.popErrorScope()) === null,
          'Render commands accept signed offsets and nullish vertex-buffer unbinding',
        );
      }
    } finally {
      indexBuffer.destroy();
    }
    const viewDevice = await (await navigator.gpu.requestAdapter()).requestDevice();
    const viewTexture = viewDevice.createTexture({
      size: [1, 1],
      format: 'rgba8unorm',
      usage: GPUTextureUsage.RENDER_ATTACHMENT,
    });
    const lostTexture = viewDevice.createTexture({
      size: [1, 1],
      format: 'rgba8unorm',
      usage: GPUTextureUsage.RENDER_ATTACHMENT,
    });
    try {
      const first = viewTexture.createView(),
        second = viewTexture.createView();
      assert(
        first !== second && first.label === '' && second.label === '',
        'Default views have distinct JS identity and empty labels',
      );
      first.label = 'first';
      assert(
        second.label === '',
        'A default view label does not change another wrapper',
      );
      second.label = 'second';
      assert(first.label === 'first', 'Default view labels remain independent');
      viewTexture.destroy();
      viewDevice.pushErrorScope('validation');
      const destroyedView = viewTexture.createView();
      assert(
        destroyedView.label === '' && (await viewDevice.popErrorScope()) === null,
        'A warmed destroyed texture still permits creating a view',
      );
      viewDevice.pushErrorScope('validation');
      const encoder = viewDevice.createCommandEncoder();
      const pass = encoder.beginRenderPass({
        colorAttachments: [{ view: destroyedView, loadOp: 'clear', storeOp: 'store' }],
      });
      pass.end();
      viewDevice.queue.submit([encoder.finish()]);
      assert(
        (await viewDevice.popErrorScope()) instanceof GPUValidationError,
        'Submitting a destroyed texture view retains native validation',
      );
      lostTexture.createView();
      viewDevice.destroy();
      assert(
        (await viewDevice.lost).reason === 'destroyed',
        'The default-view owner reports device destruction',
      );
      viewDevice.pushErrorScope('validation');
      const lostView = lostTexture.createView();
      assert(
        lostView.label === '' && (await viewDevice.popErrorScope()) === null,
        'A warmed default view retains lost-device creation behavior',
      );
    } finally {
      viewTexture.destroy();
      lostTexture.destroy();
      viewDevice.destroy();
    }
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
    return {
      swizzle,
      immediates,
      maxImmediateSize: device.limits.maxImmediateSize,
      inputSemantics,
      compatibility,
      diagnostics,
      standardInputSemantics: {
        assertions: 57,
        dictionaryAccessors: true,
        dictionaryMemberOrder: true,
        writeBufferReadback: true,
        signedIndexedDraws: true,
        nullishVertexBuffers: true,
      },
    };
  } finally {
    source.destroy();
    target.destroy();
    device.destroy();
  }
}
