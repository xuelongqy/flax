import { CanvasView } from '@flax/core/bindings';
import { SchedulerBinding } from '@flax/flutter/scheduler';
import { Column, runApp } from '@flax/flutter/widgets';

const size = 64;
const primaries = [
  [0, 1, 0],
  [1, 0, 0],
  [1, 1, 1],
];
const rows = [
  ['srgb', 'bgra8unorm', 'srgb', 'standard', primaries],
  ['p3', 'bgra8unorm', 'display-p3', 'standard', primaries],
  ['hdr', 'rgba16float', 'srgb', 'extended', [1, 1.08, 1.6].map((v) => [v, v, v])],
  [
    'hdr-p3',
    'rgba16float',
    'display-p3',
    'extended',
    [primaries[0], primaries[1], [1.6, 1.6, 1.6]],
  ],
  [
    'standard-fp16',
    'rgba16float',
    'srgb',
    'standard',
    [[1.035, -0.175, -0.14], [1.6, 1.6, 1.6], primaries[2]],
  ],
  [
    'standard-p3-fp16',
    'rgba16float',
    'display-p3',
    'standard',
    [primaries[0], primaries[1], [1.6, 1.6, 1.6]],
  ],
  [
    'p3-alpha',
    'rgba8unorm',
    'display-p3',
    'extended',
    [
      [0, 0.5, 0, 0.5],
      [0.5, 0, 0, 0.5],
      [0, 0, 0, 0],
    ],
    'premultiplied',
  ],
];
const canvases = rows.map(() => new OffscreenCanvas(3 * size, size));
runApp(
  Column({
    children: canvases.map((canvas) =>
      CanvasView(canvas, { width: 3 * size, height: size }),
    ),
  }),
);

function shader(rgb) {
  const color = ([r, g, b, a = 1]) =>
    `vec4f(${[r, g, b, a].map((v) => v.toFixed(4)).join(', ')})`;
  return `
    @vertex fn vertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {
      let p = array(vec2f(-1, -1), vec2f(3, -1), vec2f(-1, 3));
      return vec4f(p[i], 0, 1);
    }
    @fragment fn fragment(@builtin(position) p: vec4f) -> @location(0) vec4f {
      if p.x < ${size}.0 { return ${color(rgb[0])}; }
      if p.x < ${2 * size}.0 { return ${color(rgb[1])}; }
      return ${color(rgb[2])};
    }`;
}

const describe = (error) => ({ name: error.name, message: error.message });
async function render() {
  await SchedulerBinding.instance.endOfFrame;
  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) throw new Error('Dawn did not return a WebGPU adapter');
  const device = await adapter.requestDevice();
  const uncapturedErrors = [];
  device.addEventListener('uncapturederror', (event) =>
    uncapturedErrors.push(describe(event.error)),
  );
  const results = [];
  for (const [
    index,
    [name, format, colorSpace, mode, rgb, alphaMode = 'opaque'],
  ] of rows.entries()) {
    const context = canvases[index].getContext('webgpu');
    const requested = {
      format,
      colorSpace,
      toneMapping: { mode },
      alphaMode,
    };
    let error = null;
    device.pushErrorScope('validation');
    try {
      context.configure({ device, ...requested });
      const module = device.createShaderModule({ code: shader(rgb) });
      const pipeline = device.createRenderPipeline({
        layout: 'auto',
        vertex: { module, entryPoint: 'vertex' },
        fragment: { module, entryPoint: 'fragment', targets: [{ format }] },
      });
      const encoder = device.createCommandEncoder();
      const pass = encoder.beginRenderPass({
        colorAttachments: [
          {
            view: context.getCurrentTexture().createView(),
            loadOp: 'clear',
            clearValue: [0, 0, 0, 1],
            storeOp: 'store',
          },
        ],
      });
      pass.setPipeline(pipeline);
      pass.draw(3);
      pass.end();
      device.queue.submit([encoder.finish()]);
      await device.queue.onSubmittedWorkDone();
    } catch (caught) {
      error = describe(caught);
    }
    const validation = await device.popErrorScope();
    const active = context.getConfiguration();
    const actual = active && {
      format: active.format,
      colorSpace: active.colorSpace,
      toneMapping: active.toneMapping,
      alphaMode: active.alphaMode,
    };
    results.push({
      name,
      requested,
      actual,
      rgb,
      error,
      validation: validation?.message ?? null,
    });
  }
  return { rows: results, uncapturedErrors };
}

render().then(
  (result) => globalThis.__colorReport(JSON.stringify(result)),
  (error) => globalThis.__colorReport(JSON.stringify({ error: describe(error) })),
);
