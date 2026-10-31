import type {} from '@flax/core/host';
import type {} from '@flax/webgpu/globals';
import type {
  GPUBindGroupEntry,
  GPURenderPassDescriptor,
  GPUUncapturedErrorEvent,
} from '@flax/webgpu';
import * as shaders from './shaders.js';
import { frameSummary, type FrameSample } from './metrics.js';

export const scenes = ['Particles', 'Cubes', 'Prism'] as const;
export const qualities = ['Low', 'Balanced', 'High'] as const;
export const resolutions = ['960 × 540', '1920 × 1080'] as const;
export const palettes = ['Aurora', 'Violet', 'Ember'] as const;
export type Settings = {
  scene: number;
  quality: number;
  resolution: number;
  palette: number;
  individual: boolean;
};
export const defaults: Settings = {
  scene: 0,
  quality: 1,
  resolution: 0,
  palette: 0,
  individual: false,
};
export const benchmarkCases = [
  {
    name: 'Particles / balanced / 540p',
    scene: 0,
    quality: 1,
    resolution: 0,
    individual: false,
  },
  {
    name: 'Particles / high / 1080p',
    scene: 0,
    quality: 2,
    resolution: 1,
    individual: false,
  },
  {
    name: 'Cubes / instanced / 540p',
    scene: 1,
    quality: 2,
    resolution: 0,
    individual: false,
  },
  {
    name: 'Cubes / per-object / 540p',
    scene: 1,
    quality: 2,
    resolution: 0,
    individual: true,
  },
  {
    name: 'Prism / balanced / 540p',
    scene: 2,
    quality: 1,
    resolution: 0,
    individual: false,
  },
  {
    name: 'Prism / high / 1080p',
    scene: 2,
    quality: 2,
    resolution: 1,
    individual: false,
  },
] as const;
export type Telemetry = {
  playing: boolean;
  measuring: boolean;
  submittedFps: number;
  completedFps: number;
  encodeMs: number;
  error: string;
};
export type BenchmarkResult = ReturnType<typeof frameSummary> & {
  name: string;
  settings: Settings;
  width: number;
  height: number;
  drainMs: number;
  drawCalls: number;
};
type Measurement = {
  name: string;
  warmup: number;
  duration: number;
  start?: number;
  callbacks: number;
  skipped: number;
  samples: FrameSample[];
  resolve(value: BenchmarkResult): void;
  reject(error: unknown): void;
};

/** One renderer and frame loop shared by the Flutter and HTML studios. */
export class Studio {
  readonly context: GPUCanvasContext;
  settings: Settings = { ...defaults };
  phase = 0;
  pointer = { x: 0, y: 0 };
  playing = false;
  closed = false;
  error = '';
  private frame: number | undefined;
  private origin: number | undefined;
  private base = 0;
  private inFlight = 0;
  private pending = new Set<Promise<void>>();
  private measure: Measurement | undefined;
  private lastStats = performance.now();
  private liveSamples: FrameSample[] = [];
  private lastTelemetry: Telemetry = {
    playing: false,
    measuring: false,
    submittedFps: 0,
    completedFps: 0,
    encodeMs: 0,
    error: '',
  };
  private readonly parameters = new Float32Array(16);
  private uniform!: GPUBuffer;
  private particleBuffer!: GPUBuffer;
  private vertices!: GPUBuffer;
  private indices!: GPUBuffer;
  private paletteTexture!: GPUTexture;
  private msaa!: GPUTexture;
  private depth!: GPUTexture;
  private msaaView!: GPUTextureView;
  private depthView!: GPUTextureView;
  private compute!: GPUComputePipeline;
  private particles!: GPURenderPipeline;
  private cubes!: GPURenderPipeline;
  private prism!: GPURenderPipeline;
  private computeGroup!: GPUBindGroup;
  private particleGroup!: GPUBindGroup;
  private cubeGroup!: GPUBindGroup;
  private prismGroup!: GPUBindGroup;

  static async create(canvas: OffscreenCanvas, notify: (value: Telemetry) => void) {
    const adapter = await navigator.gpu.requestAdapter({
      powerPreference: 'high-performance',
    });
    if (!adapter || adapter.info.isFallbackAdapter)
      throw new Error('A hardware WebGPU adapter is required.');
    const device = await adapter.requestDevice();
    let studio: Studio | undefined;
    try {
      studio = new Studio(canvas, device, adapter.info, notify);
      await studio.prepare();
      return studio;
    } catch (error) {
      if (studio) studio.close();
      else device.destroy();
      throw error;
    }
  }
  private constructor(
    readonly canvas: OffscreenCanvas,
    readonly device: GPUDevice,
    readonly adapter: GPUAdapterInfo,
    readonly notify: (value: Telemetry) => void,
  ) {
    const context = canvas.getContext('webgpu');
    if (!context) throw new Error('The WebGPU host plugin is not installed.');
    this.context = context;
    context.configure({
      device,
      format: 'bgra8unorm',
      colorSpace: 'srgb',
      alphaMode: 'opaque',
    });
    device.addEventListener('uncapturederror', (event) =>
      this.fail((event as GPUUncapturedErrorEvent).error.message),
    );
    void device.lost.then((info) => {
      if (!this.closed) this.fail(`Device lost: ${info.message}`);
    });
  }
  get measuring() {
    return this.measure !== undefined;
  }
  get count() {
    return [8192, 65536, 262144][this.settings.quality]!;
  }
  get grid() {
    return [16, 32, 48][this.settings.quality]!;
  }
  get steps() {
    return [32, 64, 96][this.settings.quality]!;
  }
  get drawCalls() {
    return this.settings.scene === 1 && this.settings.individual
      ? this.grid * this.grid
      : 1;
  }
  get detail() {
    return this.settings.scene === 0
      ? `${this.count.toLocaleString()} GPU particles · compute + render`
      : this.settings.scene === 1
        ? `${this.grid * this.grid} cubes · ${this.drawCalls} draw call${this.drawCalls === 1 ? '' : 's'} · 4× MSAA`
        : `${this.steps} ray-march steps · palette texture`;
  }
  private buffer(data: Float32Array | Uint16Array, usage: number) {
    const buffer = this.device.createBuffer({
      size: data.byteLength,
      usage: usage | GPUBufferUsage.COPY_DST,
    });
    this.device.queue.writeBuffer(buffer, 0, data);
    return buffer;
  }
  private async prepare() {
    const d = this.device;
    this.uniform = d.createBuffer({
      label: 'Studio uniforms',
      size: 64,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });
    this.particleBuffer = d.createBuffer({
      label: 'Particle field',
      size: 262144 * 32,
      usage: GPUBufferUsage.STORAGE,
    });
    const vertices: number[] = [],
      indices: number[] = [];
    const faces = [
      [
        [0, 0, -1],
        [-1, -1, -1],
        [-1, 1, -1],
        [1, 1, -1],
        [1, -1, -1],
      ],
      [
        [0, 0, 1],
        [1, -1, 1],
        [1, 1, 1],
        [-1, 1, 1],
        [-1, -1, 1],
      ],
      [
        [-1, 0, 0],
        [-1, -1, 1],
        [-1, 1, 1],
        [-1, 1, -1],
        [-1, -1, -1],
      ],
      [
        [1, 0, 0],
        [1, -1, -1],
        [1, 1, -1],
        [1, 1, 1],
        [1, -1, 1],
      ],
      [
        [0, -1, 0],
        [-1, -1, 1],
        [-1, -1, -1],
        [1, -1, -1],
        [1, -1, 1],
      ],
      [
        [0, 1, 0],
        [-1, 1, -1],
        [-1, 1, 1],
        [1, 1, 1],
        [1, 1, -1],
      ],
    ];
    for (const face of faces) {
      const base = vertices.length / 6;
      for (const point of face.slice(1))
        vertices.push(...point.map((v) => v * 0.5), ...face[0]!);
      indices.push(base, base + 1, base + 2, base, base + 2, base + 3);
    }
    this.vertices = this.buffer(new Float32Array(vertices), GPUBufferUsage.VERTEX);
    this.indices = this.buffer(new Uint16Array(indices), GPUBufferUsage.INDEX);
    this.paletteTexture = d.createTexture({
      label: 'Color story',
      size: [256, 1, 1],
      format: 'rgba8unorm',
      usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST,
    });
    const colors = new Uint8Array(1024);
    for (let i = 0; i < 256; i++) {
      for (let c = 0; c < 3; c++)
        colors[i * 4 + c] = Math.round(
          (0.52 + 0.48 * Math.cos((i / 256) * Math.PI * 2 + c * 2.1)) * 255,
        );
      colors[i * 4 + 3] = 255;
    }
    d.queue.writeTexture(
      { texture: this.paletteTexture },
      colors,
      { bytesPerRow: 1024 },
      [256, 1, 1],
    );
    const sampler = d.createSampler({ magFilter: 'linear', minFilter: 'linear' });
    const palette = this.paletteTexture.createView();
    const module = async (label: string, code: string) => {
      const shader = d.createShaderModule({ label, code });
      const info = await shader.getCompilationInfo();
      const failures = info.messages.filter((m) => m.type === 'error');
      if (failures.length)
        throw new Error(`${label}: ${failures.map((m) => m.message).join('\n')}`);
      return shader;
    };
    const [update, particles, cubes, prism] = await Promise.all([
      module('Particle update', shaders.particlesCompute),
      module('Particle render', shaders.particlesRender),
      module('Cube field', shaders.cubes),
      module('Prism field', shaders.prism),
    ]);
    this.compute = await d.createComputePipelineAsync({
      layout: 'auto',
      compute: { module: update, entryPoint: 'update' },
    });
    this.particles = await d.createRenderPipelineAsync({
      layout: 'auto',
      vertex: { module: particles, entryPoint: 'vertex' },
      fragment: {
        module: particles,
        entryPoint: 'fragment',
        targets: [
          {
            format: 'bgra8unorm',
            blend: {
              color: { srcFactor: 'src-alpha', dstFactor: 'one', operation: 'add' },
              alpha: {
                srcFactor: 'one',
                dstFactor: 'one-minus-src-alpha',
                operation: 'add',
              },
            },
          },
        ],
      },
    });
    this.cubes = await d.createRenderPipelineAsync({
      layout: 'auto',
      vertex: {
        module: cubes,
        entryPoint: 'vertex',
        buffers: [
          {
            arrayStride: 24,
            attributes: [
              { shaderLocation: 0, offset: 0, format: 'float32x3' },
              { shaderLocation: 1, offset: 12, format: 'float32x3' },
            ],
          },
        ],
      },
      fragment: {
        module: cubes,
        entryPoint: 'fragment',
        targets: [{ format: 'bgra8unorm' }],
      },
      primitive: { topology: 'triangle-list', cullMode: 'none' },
      depthStencil: {
        format: 'depth24plus',
        depthWriteEnabled: true,
        depthCompare: 'less',
      },
      multisample: { count: 4 },
    });
    this.prism = await d.createRenderPipelineAsync({
      layout: 'auto',
      vertex: { module: prism, entryPoint: 'vertex' },
      fragment: {
        module: prism,
        entryPoint: 'fragment',
        targets: [{ format: 'bgra8unorm' }],
      },
    });
    this.computeGroup = d.createBindGroup({
      layout: this.compute.getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: { buffer: this.uniform } },
        { binding: 1, resource: { buffer: this.particleBuffer } },
      ],
    });
    const entries: GPUBindGroupEntry[] = [
      { binding: 0, resource: { buffer: this.uniform } },
      { binding: 2, resource: palette },
      { binding: 3, resource: sampler },
    ];
    this.particleGroup = d.createBindGroup({
      layout: this.particles.getBindGroupLayout(0),
      entries: [...entries, { binding: 1, resource: { buffer: this.particleBuffer } }],
    });
    this.cubeGroup = d.createBindGroup({
      layout: this.cubes.getBindGroupLayout(0),
      entries,
    });
    this.prismGroup = d.createBindGroup({
      layout: this.prism.getBindGroupLayout(0),
      entries,
    });
    this.resize();
    this.draw();
    this.publish();
  }
  configure(change: Partial<Settings>) {
    if (this.measuring) return;
    const next = { ...this.settings, ...change };
    if (
      ![0, 1, 2].includes(next.scene) ||
      ![0, 1, 2].includes(next.quality) ||
      ![0, 1].includes(next.resolution) ||
      ![0, 1, 2].includes(next.palette)
    )
      throw new RangeError('Invalid studio setting');
    const resize = next.resolution !== this.settings.resolution;
    this.settings = next;
    if (resize) this.resize();
    if (!this.playing) this.draw();
    this.publish();
  }
  private resize() {
    this.msaa?.destroy();
    this.depth?.destroy();
    const width = this.settings.resolution === 0 ? 960 : 1920,
      height = (width * 9) / 16;
    this.canvas.width = width;
    this.canvas.height = height;
    this.msaa = this.device.createTexture({
      size: [width, height, 1],
      sampleCount: 4,
      format: 'bgra8unorm',
      usage: GPUTextureUsage.RENDER_ATTACHMENT,
    });
    this.depth = this.device.createTexture({
      size: [width, height, 1],
      sampleCount: 4,
      format: 'depth24plus',
      usage: GPUTextureUsage.RENDER_ATTACHMENT,
    });
    this.msaaView = this.msaa.createView();
    this.depthView = this.depth.createView();
  }
  move(x: number, y: number) {
    if (this.measuring) return;
    this.pointer = { x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) };
    if (!this.playing) this.draw();
  }
  play() {
    if (this.closed || this.playing || this.error) return;
    this.playing = true;
    this.origin = undefined;
    this.base = this.phase;
    this.lastStats = performance.now();
    this.liveSamples = [];
    this.frame = requestAnimationFrame(this.tick);
    this.publish();
  }
  pause() {
    if (this.frame !== undefined) cancelAnimationFrame(this.frame);
    this.frame = undefined;
    this.playing = false;
    this.origin = undefined;
    this.publish();
  }
  reset() {
    if (this.measuring) return;
    this.pause();
    this.phase = 0;
    this.pointer = { x: 0, y: 0 };
    this.configure(defaults);
  }
  private tick = (time: number) => {
    this.frame = undefined;
    if (!this.playing || this.closed) return;
    const now = performance.now();
    const m = this.measure;
    if (m?.start !== undefined && now >= m.start + m.duration) {
      void this.finish(m);
      return;
    }
    if (m && m.warmup === 0 && m.start === undefined) {
      this.origin = time;
      this.base = 0;
    }
    this.origin ??= time;
    this.phase = this.base + (time - this.origin) / 1000;
    if (m?.start !== undefined) m.callbacks++;
    try {
      const sample = this.draw();
      if (m && sample) {
        m.samples.push(sample);
        if (m.warmup > 0) m.warmup--;
        else if (m.start === undefined) {
          m.start = sample.start;
          m.callbacks = 1;
        }
      } else if (m?.start !== undefined) m.skipped++;
      if (now - this.lastStats >= 500) {
        const end = performance.now();
        const stats = frameSummary(this.liveSamples, this.lastStats, end, 0, 0);
        this.lastTelemetry = {
          playing: true,
          measuring: this.measuring,
          submittedFps: stats.submittedFps,
          completedFps: stats.completedFps,
          encodeMs: stats.encodeMs.p50,
          error: this.error,
        };
        this.liveSamples = this.liveSamples.filter((s) => s.completed === undefined);
        this.lastStats = end;
        this.notify(this.lastTelemetry);
      }
    } catch (error) {
      this.fail(error instanceof Error ? error.message : String(error));
      return;
    }
    this.frame = requestAnimationFrame(this.tick);
  };
  /** Returns null when three accepted GPU submissions are still in flight. */
  draw(): FrameSample | null {
    if (this.closed || this.error || this.inFlight >= 3) return null;
    const start = performance.now(),
      p = this.parameters;
    p[0] = this.phase;
    p[1] = this.canvas.width;
    p[2] = this.canvas.height;
    p[3] = this.settings.palette;
    p[4] = this.pointer.x;
    p[5] = this.pointer.y;
    p[8] = this.count;
    p[9] = this.grid;
    p[10] = this.steps;
    p[12] = 1;
    this.device.queue.writeBuffer(this.uniform, 0, p);
    const encoder = this.device.createCommandEncoder();
    if (this.settings.scene === 0) {
      const compute = encoder.beginComputePass();
      compute.setPipeline(this.compute);
      compute.setBindGroup(0, this.computeGroup);
      compute.dispatchWorkgroups(Math.ceil(this.count / 128));
      compute.end();
    }
    const view = this.context.getCurrentTexture().createView();
    const cube = this.settings.scene === 1;
    const descriptor: GPURenderPassDescriptor = {
      colorAttachments: [
        {
          view: cube ? this.msaaView : view,
          ...(cube ? { resolveTarget: view } : {}),
          loadOp: 'clear',
          storeOp: cube ? 'discard' : 'store',
          clearValue: [0.008, 0.012, 0.028, 1],
        },
      ],
    };
    if (cube)
      descriptor.depthStencilAttachment = {
        view: this.depthView,
        depthLoadOp: 'clear',
        depthStoreOp: 'discard',
        depthClearValue: 1,
      };
    const pass = encoder.beginRenderPass(descriptor);
    if (this.settings.scene === 0) {
      pass.setPipeline(this.particles);
      pass.setBindGroup(0, this.particleGroup);
      pass.draw(6, this.count);
    } else if (cube) {
      pass.setPipeline(this.cubes);
      pass.setBindGroup(0, this.cubeGroup);
      pass.setVertexBuffer(0, this.vertices);
      pass.setIndexBuffer(this.indices, 'uint16');
      if (this.settings.individual)
        for (let i = 0; i < this.grid * this.grid; i++)
          pass.drawIndexed(36, 1, 0, 0, i);
      else pass.drawIndexed(36, this.grid * this.grid);
    } else {
      pass.setPipeline(this.prism);
      pass.setBindGroup(0, this.prismGroup);
      pass.draw(3);
    }
    pass.end();
    this.device.queue.submit([encoder.finish()]);
    const sample: FrameSample = { start, encodedMs: performance.now() - start };
    this.inFlight++;
    if (this.playing) this.liveSamples.push(sample);
    const done = this.device.queue
      .onSubmittedWorkDone()
      .then(() => {
        sample.completed = performance.now();
      })
      .catch((error) => {
        if (!this.closed) this.fail(String(error));
      })
      .finally(() => {
        this.inFlight--;
        this.pending.delete(done);
      });
    this.pending.add(done);
    return sample;
  }
  benchmark(
    name: string,
    settings: Partial<Settings>,
    duration = 8000,
  ): Promise<BenchmarkResult> {
    if (this.error) return Promise.reject(new Error(this.error));
    if (this.measuring || this.closed)
      return Promise.reject(new Error('The studio is busy or closed'));
    this.pause();
    this.phase = 0;
    this.pointer = { x: 0, y: 0 };
    this.configure({ ...defaults, ...settings });
    return new Promise((resolve, reject) => {
      this.measure = {
        name,
        warmup: 60,
        duration,
        callbacks: 0,
        skipped: 0,
        samples: [],
        resolve,
        reject,
      };
      this.play();
    });
  }
  private async finish(m: Measurement) {
    this.pause();
    const end = m.start! + m.duration;
    const drain = performance.now();
    await Promise.all([...this.pending]);
    if (this.measure !== m) return;
    this.measure = undefined;
    this.phase = m.duration / 1000;
    if (this.error) {
      m.reject(new Error(this.error));
      return;
    }
    const result: BenchmarkResult = {
      ...frameSummary(m.samples, m.start!, end, m.callbacks, m.skipped),
      name: m.name,
      settings: { ...this.settings },
      width: this.canvas.width,
      height: this.canvas.height,
      drawCalls: this.drawCalls,
      drainMs: performance.now() - drain,
    };
    m.resolve(result);
    this.publish();
  }
  private publish() {
    this.notify({
      ...this.lastTelemetry,
      playing: this.playing,
      measuring: this.measuring,
      error: this.error,
    });
  }
  private fail(message: string) {
    if (this.closed || this.error) return;
    this.error = message;
    this.pause();
    const m = this.measure;
    this.measure = undefined;
    m?.reject(new Error(message));
    this.publish();
  }
  close() {
    if (this.closed) return;
    this.closed = true;
    this.pause();
    const m = this.measure;
    this.measure = undefined;
    m?.reject(new Error('Studio closed'));
    this.context.unconfigure();
    this.uniform?.destroy();
    this.particleBuffer?.destroy();
    this.vertices?.destroy();
    this.indices?.destroy();
    this.msaa?.destroy();
    this.depth?.destroy();
    this.paletteTexture?.destroy();
    this.device.destroy();
  }
}
