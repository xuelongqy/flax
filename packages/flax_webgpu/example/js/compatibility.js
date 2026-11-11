import { readTexturePixels } from './images.js';

export async function verifyCompatibilityProfile(assert) {
  const adapter = await navigator.gpu.requestAdapter({
    featureLevel: 'compatibility',
  });
  assert(adapter, 'Compatibility acceptance requires a Metal adapter');
  const device = await adapter.requestDevice();
  const stageNames = [
    'maxStorageBuffersInVertexStage',
    'maxStorageTexturesInVertexStage',
    'maxStorageBuffersInFragmentStage',
    'maxStorageTexturesInFragmentStage',
  ];
  const defaultLimits = Object.fromEntries(
    stageNames.map((name) => [name, device.limits[name]]),
  );
  const source = device.createTexture({
    size: [1, 1],
    format: 'rgba8unorm',
    usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST,
    textureBindingViewDimension: '2d',
  });
  const target = device.createTexture({
    size: [1, 1],
    format: 'rgba8unorm',
    usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC,
  });
  let pixels;
  try {
    assert(
      !device.features.has('core-features-and-limits') &&
        device.limits.maxColorAttachments === 4,
      'Compatibility requests create a native compatibility device',
    );
    assert(
      JSON.stringify(Object.values(defaultLimits)) === '[0,0,4,4]',
      'Compatibility default stage limits come from Dawn without core aliases',
    );
    assert(
      source.textureBindingViewDimension === '2d',
      'Compatibility textures preserve their native binding dimension',
    );
    device.pushErrorScope('validation');
    const arrayView = source.createView({ dimension: '2d-array' });
    const arrayLayout = device.createBindGroupLayout({
      entries: [
        {
          binding: 0,
          visibility: GPUShaderStage.FRAGMENT,
          texture: { viewDimension: '2d-array' },
        },
      ],
    });
    assert(
      (await device.popErrorScope()) === null,
      'Compatibility allows view creation before texture binding validation',
    );
    device.pushErrorScope('validation');
    device.createBindGroup({
      layout: arrayLayout,
      entries: [{ binding: 0, resource: arrayView }],
    });
    assert(
      (await device.popErrorScope()) instanceof GPUValidationError,
      'Compatibility validates the native texture binding dimension at bind group creation',
    );
    device.pushErrorScope('validation');
    device.queue.writeTexture(
      { texture: source },
      new Uint8Array([23, 89, 177, 255]),
      {},
      [1, 1],
    );
    const module = device.createShaderModule({
      code: `
        @vertex fn vertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {
          let positions = array(vec2f(-1, -1), vec2f(3, -1), vec2f(-1, 3));
          return vec4f(positions[i], 0, 1);
        }
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
    const group = device.createBindGroup({
      layout: pipeline.getBindGroupLayout(0),
      entries: [{ binding: 0, resource: source.createView() }],
    });
    const encoder = device.createCommandEncoder();
    const pass = encoder.beginRenderPass({
      colorAttachments: [
        { view: target.createView(), loadOp: 'clear', storeOp: 'store' },
      ],
    });
    pass.setPipeline(pipeline);
    pass.setBindGroup(0, group);
    pass.draw(3);
    pass.end();
    device.queue.submit([encoder.finish()]);
    pixels = await readTexturePixels(device, target, 1, 1);
    assert(
      JSON.stringify(pixels) === '[23,89,177,255]',
      'Compatibility rendering samples actual GPU texture pixels',
    );
    assert(
      (await device.popErrorScope()) === null,
      'Compatibility rendering has no native validation errors',
    );
  } finally {
    source.destroy();
    target.destroy();
    device.destroy();
  }

  // Dawn adapters are consumed by the first successful device request.
  const requiredAdapter = await navigator.gpu.requestAdapter({
    featureLevel: 'compatibility',
  });
  const requiredLimits = Object.fromEntries(
    stageNames.map((name, index) => [name, index < 2 ? 1 : 5]),
  );
  const requiredDevice = await requiredAdapter.requestDevice({ requiredLimits });
  try {
    for (const name of stageNames)
      assert(
        requiredDevice.limits[name] === requiredLimits[name],
        'Compatibility forwards the distinct required stage limit: ' + name,
      );
    assert(
      !requiredDevice.features.has('core-features-and-limits'),
      'Required stage limits preserve the compatibility feature level',
    );
  } finally {
    requiredDevice.destroy();
  }

  const invalidAdapter = await navigator.gpu.requestAdapter({
    featureLevel: 'compatibility',
  });
  let rejected;
  try {
    await invalidAdapter.requestDevice({
      requiredLimits: {
        maxStorageTexturesInVertexStage:
          invalidAdapter.limits.maxStorageTexturesInVertexStage + 1,
      },
    });
  } catch (error) {
    rejected = error;
  }
  assert(
    rejected?.name === 'OperationError',
    'Compatibility rejects unsupported native stage limits',
  );
  for (const name of ['maxStorageBuffersInVertexStage', 'maxColorAttachments']) {
    for (const value of [0xffffffff, 0x100000001]) {
      const overflowAdapter = await navigator.gpu.requestAdapter({
        featureLevel: 'compatibility',
      });
      let error;
      try {
        const unexpected = await overflowAdapter.requestDevice({
          requiredLimits: { [name]: value },
        });
        unexpected.destroy();
      } catch (value) {
        error = value;
      }
      assert(
        error?.name === 'OperationError',
        'Required limits reject native sentinel and overflow values: ' + name,
      );
    }
  }

  let upgradedCore = false;
  if (adapter.features.has('core-features-and-limits')) {
    const coreAdapter = await navigator.gpu.requestAdapter({
      featureLevel: 'compatibility',
    });
    const coreDevice = await coreAdapter.requestDevice({
      requiredFeatures: ['core-features-and-limits'],
    });
    try {
      upgradedCore = coreDevice.features.has('core-features-and-limits');
      assert(
        upgradedCore && coreDevice.limits.maxColorAttachments === 8,
        'Requesting core-features-and-limits enables native core defaults',
      );
    } finally {
      coreDevice.destroy();
    }
  }
  return { defaultLimits, requiredLimits, upgradedCore, pixels };
}
