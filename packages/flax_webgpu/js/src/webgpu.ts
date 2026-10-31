import { DynamicLibrary, NativeFinalizer, toArrayBuffer, toString } from '@flax/ffi';
import { definitions } from './generated/definitions.g.js';
import { DescriptorArena, convert, integer, nativeEnum, text } from './convert.js';
import type { CanvasHost, OffscreenCanvas } from '@flax/core/host';
import arities from './arity.g.js';
import { imageHost } from '@flax/core-runtime/host/images';

type Call = (operation: string, ...args: unknown[]) => unknown;
type Peer = {
  kind: string;
  pointer: bigint;
  device?: any;
  label: string;
  live: boolean;
  descriptor?: any;
  mapMode?: number;
  mapOffset?: number;
  mapSize?: number;
  pendingMap?: number;
  ranges?: { buffer: ArrayBuffer; mapping: bigint; offset: number; size: number }[];
  lost?: (info: any) => void;
  destroyed?: boolean;
  canvas?: any;
};

export function installWebGpu(global: typeof globalThis, host: Call) {
  const g = global as any;
  const images = imageHost(global);
  const library = DynamicLibrary.codeAsset('@flax/webgpu/dawn');
  const signatures = definitions as any;
  const native: Record<string, any> = {};
  let startupContext = 0n,
    startupNotify = 0n;
  try {
    for (const [name, signature] of Object.entries(signatures))
      if (name.startsWith('flax_webgpu_'))
        native[name.slice(12)] = library.getFunction(name, signature as any);
    const functions = new Map<string, any>();
    function proc(name: string): any {
      let value = functions.get(name);
      if (!value) {
        const pointer = native.proc(name);
        if (!pointer || !signatures[name])
          throw new Error(`Missing Dawn function: ${name}`);
        value = library.bindFunction(pointer, signatures[name]);
        functions.set(name, value);
      }
      return value;
    }
    function check(result: number) {
      if (result !== 1)
        throw new g.DOMException(
          toString(native.error()) ?? 'WebGPU native operation failed',
          'OperationError',
        );
    }
    const memory = g.__flaxFfiMemory;
    if (
      typeof memory?.protectMappedArrayBuffer !== 'function' ||
      typeof memory?.detachMappedArrayBuffer !== 'function'
    ) {
      throw new Error('WebGPU requires the maintained mapped-buffer engine extension');
    }
    const context = native.create();
    startupContext = context;
    if (!context) throw new Error(toString(native.error()) ?? 'Cannot initialize Dawn');
    const releaseContext = new NativeFinalizer(native.release_context);
    const mappingFinalizer = new NativeFinalizer(native.mapped_release);
    const canvasFinalizer = new NativeFinalizer(native.canvas_release);
    let open = true,
      nextRequest = 1;
    const peers = new WeakMap<object, Peer>();
    const resources = new Set<WeakRef<object>>();
    const deviceObjects = new Map<string, WeakRef<any>>();
    const mapped = new Map<WeakRef<ArrayBuffer>, bigint>();
    const protectedBuffers = new WeakSet<ArrayBuffer>();
    const pending = new Map<
      number,
      { resolve: (value: any) => void; reject: (reason: unknown) => void }
    >();
    const finalizers = new Map<string, NativeFinalizer>();
    let registry: bigint = 0n;
    let initialize: (value: boolean) => void;
    const ready = new Promise<boolean>((resolve) => {
      initialize = resolve;
    });
    let initializationError: string | undefined;
    const canvasHost = g.__flaxCanvasHost as CanvasHost;
    const canvasContexts = new Set<WeakRef<any>>();
    const classes: Record<string, any> = {};
    const secret = {};
    const canvasOps = new WeakMap<
      object,
      {
        flush(): void;
        resize(): void;
        close(): void;
        device(): unknown;
        lose(): void;
        snapshot(transfer: boolean): ImageBitmap;
      }
    >();
    for (const kind of [
      'GPU',
      'GPUSupportedFeatures',
      'WGSLLanguageFeatures',
      'GPUSupportedLimits',
      'GPUAdapterInfo',
      'GPUDeviceLostInfo',
      'GPUCompilationInfo',
      'GPUCompilationMessage',
    ]) {
      const Class = class {
        constructor(key: object) {
          if (key !== secret) throw new TypeError('Illegal constructor');
        }
      };
      Object.defineProperty(Class, 'name', { value: kind });
      Object.defineProperty(Class.prototype, Symbol.toStringTag, { value: kind });
      Object.defineProperty(Class.prototype, Symbol.for('flax.uncloneable'), {
        value: true,
      });
      classes[kind] = g[kind] = Class;
    }
    function dataObject(kind: string, value: any) {
      const result = new classes[kind](secret);
      readonly(result, value);
      return result;
    }
    const exception = (message: string, name = 'OperationError') =>
      new g.DOMException(message, name);
    function peer(value: unknown, kind?: string): Peer {
      const p =
        value && (typeof value === 'object' || typeof value === 'function')
          ? peers.get(value as object)
          : undefined;
      if (!p || (kind && p.kind !== kind))
        throw new TypeError(`Expected ${kind ?? 'a WebGPU object'} from this session`);
      if (!open || !p.live)
        throw exception('The WebGPU session is closed', 'InvalidStateError');
      return p;
    }
    function pointer(value: unknown, kind: string) {
      if (kind === 'GPUCopyExternalImageSource') {
        if (!images.isSource(value))
          throw new TypeError('Expected an image source from this session');
        return 0n;
      }
      return peer(value, kind).pointer;
    }
    function arena() {
      let views: Map<object, any> | undefined;
      return new DescriptorArena(
        (name, p, size) => check(native.init(name, p, size)),
        (value, kind) => {
          const p = peer(value);
          if (p.kind === kind) return p.pointer;
          if (kind === 'GPUTextureView' && p.kind === 'GPUTexture') {
            views ??= new Map();
            let view = views.get(value as object);
            if (!view) {
              view = wrap(
                'GPUTextureView',
                proc('wgpuTextureCreateView')(p.pointer, 0n),
                p.device,
              );
              views.set(value as object, view);
            }
            return peer(view).pointer;
          }
          throw new TypeError(`Expected ${kind}`);
        },
      );
    }
    function descriptor(
      type: string,
      input: unknown,
      action: (a: DescriptorArena, value: any) => any,
    ) {
      const value = convert(type, input, pointer),
        a = arena();
      try {
        return action(a, value);
      } finally {
        a.releaseAll();
      }
    }
    function finalizer(kind: string) {
      let value = finalizers.get(kind);
      if (!value) {
        value = new NativeFinalizer(proc(`wgpu${kind.slice(3)}Release`));
        finalizers.set(kind, value);
      }
      return value;
    }
    function wrap(
      kind: string,
      handle: bigint,
      device?: any,
      desc?: any,
      borrowed = false,
    ): any {
      if (!handle) throw exception(`Cannot create ${kind}`);
      if (borrowed) proc(`wgpu${kind.slice(3)}AddRef`)(handle);
      const result = new classes[kind](secret);
      peers.set(result, {
        kind,
        pointer: handle,
        device,
        label: desc?.label ?? '',
        live: true,
        descriptor: desc,
      });
      finalizer(kind).attach(result, handle);
      resources.add(new WeakRef(result));
      return result;
    }
    function request(start: (id: number) => number): Promise<any> {
      if (!open)
        return Promise.reject(
          exception('The WebGPU session is closed', 'InvalidStateError'),
        );
      return new Promise((resolve, reject) => {
        const id = nextRequest++;
        pending.set(id, { resolve, reject });
        try {
          check(start(id));
          schedulePump();
        } catch (error) {
          pending.delete(id);
          reject(error);
        }
      });
    }
    const retiringDevices = new Set<object>();
    let pumpQueued = false,
      pumpTimer: number | undefined;
    const needsPump = () => open && (pending.size > 0 || retiringDevices.size > 0);
    function schedulePump() {
      if (!open || pumpQueued || pumpTimer !== undefined) return;
      pumpQueued = true;
      g.queueMicrotask(pump);
    }
    function pump() {
      pumpQueued = false;
      pumpTimer = undefined;
      if (!needsPump()) return;
      drain();
      // Dawn can defer queue work without posting a callback. Pump only unresolved work.
      if (needsPump()) pumpTimer = g.setTimeout(pump, 1);
    }
    function gpuError(type: string, message: string): any {
      return new g[
        type === 'validation'
          ? 'GPUValidationError'
          : type === 'out-of-memory'
            ? 'GPUOutOfMemoryError'
            : 'GPUInternalError'
      ](message);
    }
    function drain() {
      if (!open) return;
      for (;;) {
        const json = toString(native.poll(context));
        if (json === null) break;
        const event = JSON.parse(json);
        if (event.event) {
          const device = deviceObjects.get(event.device)?.deref();
          if (!device) continue;
          if (event.event === 'lost') {
            retiringDevices.delete(device);
            peer(device).destroyed = true;
            retireMappings(device);
            retireCanvases(device);
            peer(device).lost?.(
              dataObject('GPUDeviceLostInfo', {
                reason: event.reason,
                message: event.message,
              }),
            );
          } else
            device.dispatchEvent(
              new g.GPUUncapturedErrorEvent('uncapturederror', {
                error: gpuError(event.type, event.message),
              }),
            );
          continue;
        }
        const item = pending.get(event.request);
        if (!item) continue;
        pending.delete(event.request);
        if (event.error)
          item.reject(
            event.error === 'GPUPipelineError'
              ? new g.GPUPipelineError(event.message, { reason: event.reason })
              : exception(event.message, event.error),
          );
        else if (event.kind) {
          // poll() lends the event's reference until the next poll.
          const value = wrap(
            event.kind,
            BigInt(event.handle),
            undefined,
            undefined,
            true,
          );
          if (event.kind === 'GPUAdapter') initializeAdapter(value);
          if (event.kind === 'GPUDevice') initializeDevice(value);
          item.resolve(value);
        } else item.resolve(event);
      }
      if (!needsPump() && pumpTimer !== undefined) {
        g.clearTimeout(pumpTimer);
        pumpTimer = undefined;
      }
    }
    const notify = library.registerCallback(
      { arguments: [], return: 'void' },
      () => {
        if (!open) return;
        native.acknowledge(context);
        drain();
      },
      {
        mode: 'listener',
        stop: native.stop,
        stopToken: context,
      },
    );
    startupNotify = notify;
    native.signal(context, notify);
    function method(
      kind: string,
      name: string,
      fn: (p: Peer, self: any, ...args: any[]) => any,
    ) {
      const required =
        (arities as Record<string, Record<string, number>>)[kind]?.[name] ?? 0;
      // WebGPU methods take at most six arguments; avoid arrays on every draw.
      Object.defineProperty(classes[kind].prototype, name, {
        configurable: true,
        writable: true,
        value: function (
          this: any,
          a?: any,
          b?: any,
          c?: any,
          d?: any,
          e?: any,
          f?: any,
        ) {
          try {
            const p = peer(this, kind);
            if (arguments.length < required)
              throw new TypeError(`${kind}.${name} needs ${required} arguments`);
            return fn(p, this, a, b, c, d, e, f);
          } catch (error) {
            if (
              [
                'requestDevice',
                'mapAsync',
                'popErrorScope',
                'getCompilationInfo',
                'onSubmittedWorkDone',
                'createComputePipelineAsync',
                'createRenderPipelineAsync',
              ].includes(name)
            )
              return Promise.reject(error);
            throw error;
          }
        },
      });
      Object.defineProperty(classes[kind].prototype[name], 'length', {
        value: required,
      });
    }
    function getter(kind: string, name: string, fn: (p: Peer) => any) {
      Object.defineProperty(classes[kind].prototype, name, {
        configurable: true,
        enumerable: true,
        get: function (this: any) {
          return fn(peer(this, kind));
        },
      });
    }
    const kinds = [
      'GPUAdapter',
      'GPUDevice',
      'GPUQueue',
      'GPUBuffer',
      'GPUTexture',
      'GPUTextureView',
      'GPUSampler',
      'GPUShaderModule',
      'GPUBindGroupLayout',
      'GPUPipelineLayout',
      'GPUBindGroup',
      'GPUComputePipeline',
      'GPURenderPipeline',
      'GPUCommandEncoder',
      'GPUCommandBuffer',
      'GPUComputePassEncoder',
      'GPURenderPassEncoder',
      'GPURenderBundleEncoder',
      'GPURenderBundle',
      'GPUQuerySet',
    ];
    for (const kind of kinds) {
      const Parent = kind === 'GPUDevice' ? g.EventTarget : class {};
      const Class = class extends Parent {
        constructor(key: object) {
          super();
          if (key !== secret) throw new TypeError('Illegal constructor');
        }
      };
      Object.defineProperty(Class, 'name', { value: kind });
      Object.defineProperty(Class.prototype, Symbol.toStringTag, { value: kind });
      Object.defineProperty(Class.prototype, Symbol.for('flax.uncloneable'), {
        value: true,
      });
      classes[kind] = Class;
      Object.defineProperty(g, kind, {
        value: Class,
        configurable: true,
        writable: true,
      });
      if (kind !== 'GPUAdapter')
        Object.defineProperty(Class.prototype, 'label', {
          enumerable: true,
          get() {
            return peer(this, kind).label;
          },
          set(value) {
            const p = peer(this, kind),
              label = text(value),
              a = arena();
            try {
              proc(`wgpu${kind.slice(3)}SetLabel`)(p.pointer, a.string(label).$bytes);
              p.label = label;
            } finally {
              a.releaseAll();
            }
          },
        });
    }
    g.GPUError = class GPUError extends Error {
      constructor(key: object, message: string) {
        super(message);
        if (key !== secret) throw new TypeError('Illegal constructor');
      }
    };
    for (const name of [
      'GPUValidationError',
      'GPUOutOfMemoryError',
      'GPUInternalError',
    ]) {
      const Class = class extends g.GPUError {
        constructor(message: string) {
          super(secret, text(message));
          this.name = name;
        }
      };
      Object.defineProperty(Class, 'name', { value: name });
      g[name] = Class;
    }
    g.GPUUncapturedErrorEvent = class GPUUncapturedErrorEvent extends g.Event {
      declare readonly error: Error;
      constructor(type: string, init: any) {
        if (!(init?.error instanceof g.GPUError))
          throw new TypeError('Expected a GPUError');
        super(type, init);
        Object.defineProperty(this, 'error', { value: init.error, enumerable: true });
      }
    };
    g.GPUPipelineError = class GPUPipelineError extends g.DOMException {
      declare readonly reason: string;
      constructor(message = '', input: any) {
        const options = convert('GPUPipelineErrorInit', input, pointer);
        super(text(message), 'GPUPipelineError');
        Object.defineProperty(this, 'reason', {
          value: options.reason,
          enumerable: true,
        });
      }
    };
    const constantGroups = {
      GPUBufferUsage: {
        MAP_READ: 1,
        MAP_WRITE: 2,
        COPY_SRC: 4,
        COPY_DST: 8,
        INDEX: 16,
        VERTEX: 32,
        UNIFORM: 64,
        STORAGE: 128,
        INDIRECT: 256,
        QUERY_RESOLVE: 512,
      },
      GPUTextureUsage: {
        COPY_SRC: 1,
        COPY_DST: 2,
        TEXTURE_BINDING: 4,
        STORAGE_BINDING: 8,
        RENDER_ATTACHMENT: 16,
      },
      GPUShaderStage: { VERTEX: 1, FRAGMENT: 2, COMPUTE: 4 },
      GPUMapMode: { READ: 1, WRITE: 2 },
      GPUColorWrite: { RED: 1, GREEN: 2, BLUE: 4, ALPHA: 8, ALL: 15 },
    };
    for (const [name, values] of Object.entries(constantGroups))
      g[name] = Object.freeze(values);
    const readonlyValues = new WeakMap<object, Record<string, unknown>>();
    function readonly(object: object, fields: Record<string, unknown>) {
      const values = readonlyValues.get(object) ?? {};
      Object.assign(values, fields);
      readonlyValues.set(object, values);
      const prototype = Object.getPrototypeOf(object);
      for (const key of Object.keys(fields)) {
        if (Object.hasOwn(prototype, key)) continue;
        Object.defineProperty(prototype, key, {
          enumerable: true,
          configurable: true,
          get() {
            const data = readonlyValues.get(this);
            if (!data || !Object.hasOwn(data, key))
              throw new TypeError('Illegal invocation');
            return data[key];
          },
        });
      }
    }
    const featureValues = new WeakMap<object, Set<string>>();
    for (const kind of ['GPUSupportedFeatures', 'WGSLLanguageFeatures']) {
      const prototype = classes[kind].prototype;
      function values(object: object) {
        const set = featureValues.get(object);
        if (!set) throw new TypeError('Illegal invocation');
        return set;
      }
      Object.defineProperty(prototype, 'size', {
        enumerable: true,
        configurable: true,
        get() {
          return values(this).size;
        },
      });
      Object.assign(prototype, {
        has(this: object, name: unknown) {
          return values(this).has(text(name));
        },
        keys(this: object) {
          return values(this).keys();
        },
        values(this: object) {
          return values(this).values();
        },
        entries(this: object) {
          return values(this).entries();
        },
        forEach(this: object, callback: unknown, thisArg?: unknown) {
          const set = values(this);
          if (typeof callback !== 'function')
            throw new TypeError('Expected a callback');
          for (const value of set) callback.call(thisArg, value, value, this);
        },
      });
      prototype[Symbol.iterator] = prototype.values;
    }
    function featureSet(values: string[], kind = 'GPUSupportedFeatures') {
      const result = new classes[kind](secret);
      featureValues.set(result, new Set(values));
      return result;
    }
    function initializeAdapter(value: any) {
      const info = JSON.parse(toString(native.info(1, peer(value).pointer))!);
      for (const key of ['vendor', 'architecture', 'device'])
        info.info[key] = String(info.info[key])
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '');
      readonly(value, {
        features: featureSet(info.features),
        limits: dataObject('GPUSupportedLimits', info.limits),
        info: dataObject('GPUAdapterInfo', info.info),
        isFallbackAdapter: info.isFallbackAdapter,
      });
    }
    function initializeDevice(value: any) {
      const p = peer(value),
        info = JSON.parse(toString(native.info(2, p.pointer))!);
      deviceObjects.set(String(p.pointer), new WeakRef(value));
      readonly(value, {
        features: featureSet(info.features),
        limits: dataObject('GPUSupportedLimits', info.limits),
        queue: wrap('GPUQueue', proc('wgpuDeviceGetQueue')(p.pointer), value),
        lost: new Promise((resolve) => {
          p.lost = resolve;
        }),
      });
      let listener: any = null;
      Object.defineProperty(value, 'onuncapturederror', {
        get: () => listener,
        set(fn) {
          if (listener) value.removeEventListener('uncapturederror', listener);
          listener = typeof fn === 'function' ? fn : null;
          if (listener) value.addEventListener('uncapturederror', listener);
        },
      });
    }
    method('GPUAdapter', 'requestDevice', (p, self, input = {}) => {
      const desc = convert('GPUDeviceDescriptor', input, pointer);
      for (const feature of desc.requiredFeatures ?? [])
        if (!self.features.has(feature))
          return Promise.reject(new TypeError(`Unsupported feature: ${feature}`));
      return request((id) =>
        native.device(context, p.pointer, id, JSON.stringify(desc)),
      ).then((value) => {
        readonly(value, {
          adapterInfo: dataObject('GPUAdapterInfo', {
            ...readonlyValues.get(self.info)!,
          }),
        });
        peer(value).label = desc.label ?? '';
        peer(value.queue).label = desc.defaultQueue?.label ?? '';
        return value;
      });
    });
    method('GPUDevice', 'pushErrorScope', (p, _, filter) =>
      proc('wgpuDevicePushErrorScope')(
        p.pointer,
        nativeEnum('WGPUErrorFilter', filter),
      ),
    );
    method('GPUDevice', 'popErrorScope', (p) =>
      request((id) => native.pop_error(context, p.pointer, id)).then((event) =>
        event.type === 'none' ? null : gpuError(event.type, event.message),
      ),
    );
    method('GPUDevice', 'destroy', (p, self) => {
      if (!p.destroyed) {
        retireMappings(self);
        retireCanvases(self);
        p.destroyed = true;
        retiringDevices.add(self);
        proc('wgpuDeviceDestroy')(p.pointer);
        schedulePump();
      }
    });
    const creations = [
      'Buffer',
      'Texture',
      'Sampler',
      'BindGroupLayout',
      'PipelineLayout',
      'BindGroup',
      'ShaderModule',
      'ComputePipeline',
      'RenderPipeline',
      'CommandEncoder',
      'RenderBundleEncoder',
      'QuerySet',
    ];
    for (const kind of creations)
      method('GPUDevice', `create${kind}`, (p, self, input = {}) =>
        descriptor(`GPU${kind}Descriptor`, input, (a, desc) => {
          if (kind === 'ShaderModule') {
            const source = a.struct('WGPUShaderSourceWGSL', { code: desc.code });
            desc = { ...desc, nextInChain: source.pointer };
          }
          const packed = a.struct(`WGPU${kind}Descriptor`, desc);
          const object = wrap(
            `GPU${kind}`,
            proc(`wgpuDeviceCreate${kind}`)(p.pointer, packed.pointer),
            self,
            desc,
          );
          if (kind === 'Buffer') {
            const b = peer(object);
            b.mapMode = desc.mappedAtCreation ? 2 : 0;
            b.mapOffset = 0;
            b.mapSize = desc.size;
            b.ranges = [];
          }
          return object;
        }),
      );
    for (const [kind, type] of [
      ['ComputePipeline', 1],
      ['RenderPipeline', 2],
    ] as const)
      method('GPUDevice', `create${kind}Async`, (p, self, input) =>
        descriptor(`GPU${kind}Descriptor`, input, (a, desc) =>
          request((id) =>
            native.pipeline(
              context,
              p.pointer,
              id,
              type,
              a.struct(`WGPU${kind}Descriptor`, desc).pointer,
            ),
          ).then((value) => {
            const result = peer(value);
            result.device = self;
            result.label = desc.label ?? '';
            return value;
          }),
        ),
      );
    for (const kind of ['ComputePipeline', 'RenderPipeline'])
      method(`GPU${kind}`, 'getBindGroupLayout', (p, _, index) =>
        wrap(
          'GPUBindGroupLayout',
          proc(`wgpu${kind}GetBindGroupLayout`)(p.pointer, integer(index, 32)),
          p.device,
        ),
      );
    method('GPUShaderModule', 'getCompilationInfo', (p) =>
      request((id) => native.compilation_info(context, p.pointer, id)).then((event) =>
        dataObject('GPUCompilationInfo', {
          messages: Object.freeze(
            event.messages.map((message: any) =>
              dataObject('GPUCompilationMessage', message),
            ),
          ),
        }),
      ),
    );
    getter('GPUBuffer', 'size', (p) => p.descriptor.size);
    getter('GPUBuffer', 'usage', (p) => p.descriptor.usage);
    getter('GPUBuffer', 'mapState', (p) =>
      p.pendingMap ? 'pending' : p.mapMode ? 'mapped' : 'unmapped',
    );
    method(
      'GPUBuffer',
      'mapAsync',
      (p, _, mode, offset = 0, size = p.descriptor.size - integer(offset)) => {
        mode = integer(mode, 32);
        offset = integer(offset);
        size = integer(size);
        if (p.pendingMap || p.mapMode)
          return Promise.reject(exception('The buffer is already mapped or pending'));
        const generation = nextRequest;
        p.pendingMap = generation;
        return request((id) =>
          native.map(context, p.pointer, id, mode, offset, size),
        ).then(
          () => {
            if (p.pendingMap !== generation)
              throw exception('Mapping was cancelled', 'AbortError');
            p.pendingMap = 0;
            p.mapMode = mode;
            p.mapOffset = offset;
            p.mapSize = size;
          },
          (error) => {
            if (p.pendingMap === generation) p.pendingMap = 0;
            throw error;
          },
        );
      },
    );
    method(
      'GPUBuffer',
      'getMappedRange',
      (p, _, at = 0, length = p.descriptor.size - integer(at)) => {
        const offset = integer(at),
          size = integer(length);
        if (
          !p.mapMode ||
          offset % 8 ||
          size % 4 ||
          offset < p.mapOffset! ||
          offset + size > p.mapOffset! + p.mapSize! ||
          p.ranges!.some(
            (range) =>
              offset < range.offset + range.size && range.offset < offset + size,
          )
        )
          throw exception('Invalid or overlapping mapped buffer range');
        const mapping = native.mapped_range(p.pointer, p.mapMode, offset, size);
        if (!mapping) throw exception(toString(native.error())!);
        const buffer = toArrayBuffer(native.mapped_data(mapping), size, false);
        try {
          memory.protectMappedArrayBuffer(buffer);
          mappingFinalizer.attach(buffer, mapping);
        } catch (error) {
          native.mapped_release(mapping);
          throw error;
        }
        protectedBuffers.add(buffer);
        p.ranges!.push({ buffer, mapping, offset, size });
        mapped.set(new WeakRef(buffer), mapping);
        return buffer;
      },
    );
    function unmap(p: Peer, flush: boolean) {
      let failure: unknown;
      for (const range of p.ranges ?? []) {
        try {
          if (flush) check(native.mapped_flush(range.mapping));
        } catch (error) {
          failure ??= error;
        }
        memory.detachMappedArrayBuffer(range.buffer);
        mappingFinalizer.detach(range.buffer);
        native.mapped_release(range.mapping);
        for (const ref of mapped.keys())
          if (ref.deref() === range.buffer) mapped.delete(ref);
      }
      p.ranges = [];
      p.mapMode = 0;
      p.pendingMap = 0;
      proc('wgpuBufferUnmap')(p.pointer);
      if (failure) throw failure;
    }
    function retireMappings(device: any) {
      for (const ref of resources) {
        const object = ref.deref();
        if (!object) continue;
        const p = peers.get(object)!;
        if (p.live && p.kind === 'GPUBuffer' && p.device === device) unmap(p, false);
      }
    }
    function retireCanvases(device: any) {
      for (const ref of canvasContexts) {
        const canvas = ref.deref();
        const operations = canvas && canvasOps.get(canvas);
        if (operations?.device() === device) operations.lose();
      }
    }
    method('GPUBuffer', 'unmap', (p) => unmap(p, true));
    method('GPUBuffer', 'destroy', (p) => {
      unmap(p, false);
      proc('wgpuBufferDestroy')(p.pointer);
      p.destroyed = true;
    });
    method('GPUTexture', 'destroy', (p) => proc('wgpuTextureDestroy')(p.pointer));
    method('GPUTexture', 'createView', (p, _, input = {}) =>
      descriptor('GPUTextureViewDescriptor', input, (a, desc) =>
        wrap(
          'GPUTextureView',
          proc('wgpuTextureCreateView')(
            p.pointer,
            a.struct('WGPUTextureViewDescriptor', desc).pointer,
          ),
          p.device,
          desc,
        ),
      ),
    );
    for (const [name, nativeName] of Object.entries({
      width: 'GetWidth',
      height: 'GetHeight',
      depthOrArrayLayers: 'GetDepthOrArrayLayers',
      mipLevelCount: 'GetMipLevelCount',
      sampleCount: 'GetSampleCount',
      usage: 'GetUsage',
    }))
      getter('GPUTexture', name, (p) =>
        Number(proc(`wgpuTexture${nativeName}`)(p.pointer)),
      );
    getter('GPUTexture', 'format', (p) => p.descriptor.format);
    getter('GPUTexture', 'dimension', (p) => p.descriptor.dimension ?? '2d');
    const textureViewDimensions = new Map(
      ['1d', '2d', '2d-array', 'cube', 'cube-array', '3d'].map((dimension) => [
        nativeEnum('WGPUTextureViewDimension', dimension),
        dimension,
      ]),
    );
    getter('GPUTexture', 'textureBindingViewDimension', (p) =>
      textureViewDimensions.get(
        proc('wgpuTextureGetTextureBindingViewDimension')(p.pointer),
      ),
    );
    method('GPUQuerySet', 'destroy', (p) => proc('wgpuQuerySetDestroy')(p.pointer));
    getter('GPUQuerySet', 'count', (p) => p.descriptor.count);
    getter('GPUQuerySet', 'type', (p) => p.descriptor.type);
    method('GPUQueue', 'submit', (p, _, commands) => {
      const list = Array.from(commands as Iterable<any>);
      const a = arena();
      try {
        proc('wgpuQueueSubmit')(
          p.pointer,
          list.length,
          a.array('WGPUCommandBuffer', list),
        );
      } finally {
        a.releaseAll();
      }
    });
    method('GPUQueue', 'onSubmittedWorkDone', (p) =>
      request((id) => native.done(context, p.pointer, id)).then(() => undefined),
    );
    method(
      'GPUQueue',
      'writeBuffer',
      (p, _, buffer, bufferOffset, data, dataOffset = 0, size?: number) => {
        const source = byteRange(data, dataOffset, size, true);
        proc('wgpuQueueWriteBuffer')(
          p.pointer,
          pointer(buffer, 'GPUBuffer'),
          integer(bufferOffset),
          source,
          source.byteLength,
        );
      },
    );
    function byteRange(
      data: any,
      at: number,
      length: number | undefined,
      elements = false,
    ): Uint8Array {
      if (
        !(data instanceof ArrayBuffer) &&
        !(
          typeof g.SharedArrayBuffer === 'function' &&
          data instanceof g.SharedArrayBuffer
        ) &&
        !ArrayBuffer.isView(data)
      )
        throw new TypeError('Expected BufferSource');
      const unit =
        elements && ArrayBuffer.isView(data) && !(data instanceof DataView)
          ? (data as any).BYTES_PER_ELEMENT
          : 1;
      const offset = integer(at) * unit,
        size = length === undefined ? data.byteLength - offset : integer(length) * unit;
      if (offset + size > data.byteLength || size < 0)
        throw exception('BufferSource range exceeds its storage');
      const result = ArrayBuffer.isView(data)
        ? new Uint8Array(data.buffer, data.byteOffset + offset, size)
        : new Uint8Array(data, offset, size);
      // Protected mapped views cannot escape as shared Dart/FFI storage.
      const buffer = result.buffer;
      return !(buffer instanceof ArrayBuffer) || protectedBuffers.has(buffer)
        ? result.slice()
        : result;
    }
    method('GPUQueue', 'writeTexture', (p, _, destination, data, layout, size) => {
      destination = convert('GPUTexelCopyTextureInfo', destination, pointer);
      layout = convert('GPUTexelCopyBufferLayout', layout, pointer);
      size = convert('GPUExtent3D', size, pointer);
      const a = arena(),
        bytes = byteRange(data, 0, undefined);
      try {
        proc('wgpuQueueWriteTexture')(
          p.pointer,
          a.struct('WGPUTexelCopyTextureInfo', destination).pointer,
          bytes,
          bytes.byteLength,
          a.struct('WGPUTexelCopyBufferLayout', layout).pointer,
          a.struct('WGPUExtent3D', size).pointer,
        );
      } finally {
        a.releaseAll();
      }
    });
    const uploads = new WeakMap<
      object,
      { width: number; height: number; texture: any }
    >();
    const createUpload = classes.GPUDevice.prototype.createTexture;
    const destroyUpload = classes.GPUTexture.prototype.destroy;
    method(
      'GPUQueue',
      'copyExternalImageToTexture',
      (p, self, input, destination, size) => {
        const source = convert('GPUCopyExternalImageSourceInfo', input, pointer);
        const dest = convert('GPUCopyExternalImageDestInfo', destination, pointer);
        const extent = convert('GPUExtent3D', size, pointer);
        const width = Array.isArray(extent) ? extent[0] : extent.width;
        const height = (Array.isArray(extent) ? extent[1] : extent.height) ?? 1;
        const pixels = images.read(source.source);
        const x =
          (Array.isArray(source.origin) ? source.origin[0] : source.origin.x) ?? 0;
        const y =
          (Array.isArray(source.origin) ? source.origin[1] : source.origin.y) ?? 0;
        if (x + width > pixels.width || y + height > pixels.height)
          throw exception('The copy exceeds the source image');
        let data = byteRange(pixels.data, 0, undefined);
        if (x !== 0 || y !== 0 || width !== pixels.width || height !== pixels.height) {
          data = new Uint8Array(width * height * 4);
          for (let row = 0; row < height; row++)
            data.set(
              pixels.data.subarray(
                ((y + row) * pixels.width + x) * 4,
                ((y + row) * pixels.width + x + width) * 4,
              ),
              row * width * 4,
            );
        }
        let upload = uploads.get(self);
        if (!upload || upload.width < width || upload.height < height) {
          if (upload) destroyUpload.call(upload.texture);
          upload = {
            width: Math.max(1, width),
            height: Math.max(1, height),
            texture: createUpload.call(p.device, {
              size: [Math.max(1, width), Math.max(1, height)],
              format: 'rgba8unorm',
              usage: 7,
            }),
          };
          uploads.set(self, upload);
        }
        const a = arena();
        try {
          proc('wgpuQueueWriteTexture')(
            p.pointer,
            a.struct('WGPUTexelCopyTextureInfo', { texture: upload.texture }).pointer,
            data,
            data.byteLength,
            a.struct('WGPUTexelCopyBufferLayout', { bytesPerRow: width * 4 }).pointer,
            a.struct('WGPUExtent3D', [width, height, 1]).pointer,
          );
          const conversion = (pixels.colorSpace ?? 'srgb') !== dest.colorSpace;
          const toP3 = [
            0.82259287, 0.03319951, 0.01708535, 0.17753395, 0.9667835, 0.07239572, 0, 0,
            0.91030148,
          ];
          const toSrgb = [
            1.22494018, -0.04205695, -0.01963755, -0.22494018, 1.04205695, -0.07863605,
            0, 0, 1.0982736,
          ];
          const options = a.struct('WGPUCopyTextureForBrowserOptions', {
            flipY: source.flipY,
            srcAlphaMode: pixels.premultiplied ? 'premultiplied' : 'unpremultiplied',
            dstAlphaMode: dest.premultipliedAlpha ? 'premultiplied' : 'unpremultiplied',
            needsColorSpaceConversion: conversion,
            ...(conversion
              ? {
                  srcTransferFunctionParameters: [
                    2.4,
                    1 / 1.055,
                    0.055 / 1.055,
                    1 / 12.92,
                    0.04045,
                    0,
                    0,
                  ],
                  conversionMatrix: dest.colorSpace === 'display-p3' ? toP3 : toSrgb,
                  dstTransferFunctionParameters: [
                    1 / 2.4,
                    Math.pow(1.055, 2.4),
                    0,
                    12.92,
                    0.0031308,
                    -0.055,
                    0,
                  ],
                }
              : {}),
          });
          proc('wgpuQueueCopyTextureForBrowser')(
            p.pointer,
            a.struct('WGPUTexelCopyTextureInfo', { texture: upload.texture }).pointer,
            a.struct('WGPUTexelCopyTextureInfo', dest).pointer,
            a.struct('WGPUExtent3D', extent).pointer,
            options.pointer,
          );
        } finally {
          a.releaseAll();
        }
      },
    );
    for (const [methodName, resultKind] of [
      ['beginComputePass', 'ComputePassEncoder'],
      ['beginRenderPass', 'RenderPassEncoder'],
      ['finish', 'CommandBuffer'],
    ] as const)
      method('GPUCommandEncoder', methodName, (p, _, input = {}) => {
        const descKind =
          methodName === 'finish'
            ? 'CommandBuffer'
            : resultKind.replace('Encoder', 'Descriptor');
        const type =
          methodName === 'finish' ? 'GPUCommandBufferDescriptor' : `GPU${descKind}`;
        return descriptor(type, input, (a, desc) =>
          wrap(
            `GPU${resultKind}`,
            proc(
              `wgpuCommandEncoder${methodName[0]!.toUpperCase()}${methodName.slice(1)}`,
            )(p.pointer, a.struct(`W${type}`, desc).pointer),
            p.device,
            desc,
          ),
        );
      });
    method(
      'GPUCommandEncoder',
      'copyBufferToBuffer',
      (p, _, source, sourceOffset, destination, destinationOffset, size) => {
        if (typeof sourceOffset === 'object') {
          size = destination;
          destination = sourceOffset;
          sourceOffset = 0;
          destinationOffset = 0;
        }
        size ??= source.size - Number(sourceOffset);
        proc('wgpuCommandEncoderCopyBufferToBuffer')(
          p.pointer,
          pointer(source, 'GPUBuffer'),
          integer(sourceOffset),
          pointer(destination, 'GPUBuffer'),
          integer(destinationOffset),
          integer(size),
        );
      },
    );
    method(
      'GPUCommandEncoder',
      'clearBuffer',
      (p, _, buffer, offset = 0, size = buffer.size - offset) =>
        proc('wgpuCommandEncoderClearBuffer')(
          p.pointer,
          pointer(buffer, 'GPUBuffer'),
          integer(offset),
          integer(size),
        ),
    );
    for (const [methodName, from, to] of [
      ['copyBufferToTexture', 'WGPUTexelCopyBufferInfo', 'WGPUTexelCopyTextureInfo'],
      ['copyTextureToBuffer', 'WGPUTexelCopyTextureInfo', 'WGPUTexelCopyBufferInfo'],
      ['copyTextureToTexture', 'WGPUTexelCopyTextureInfo', 'WGPUTexelCopyTextureInfo'],
    ])
      method('GPUCommandEncoder', methodName!, (p, _, source, destination, size) => {
        source = convert(from!.replace(/^WGPU/, 'GPU'), source, pointer);
        destination = convert(to!.replace(/^WGPU/, 'GPU'), destination, pointer);
        size = convert('GPUExtent3D', size, pointer);
        const a = arena();
        try {
          proc(
            `wgpuCommandEncoder${methodName![0]!.toUpperCase()}${methodName!.slice(1)}`,
          )(
            p.pointer,
            a.struct(from!, source).pointer,
            a.struct(to!, destination).pointer,
            a.struct('WGPUExtent3D', size).pointer,
          );
        } finally {
          a.releaseAll();
        }
      });
    method(
      'GPUCommandEncoder',
      'resolveQuerySet',
      (p, _, querySet, first, count, destination, offset) =>
        proc('wgpuCommandEncoderResolveQuerySet')(
          p.pointer,
          pointer(querySet, 'GPUQuerySet'),
          integer(first, 32),
          integer(count, 32),
          pointer(destination, 'GPUBuffer'),
          integer(offset),
        ),
    );
    for (const kind of [
      'ComputePassEncoder',
      'RenderPassEncoder',
      'RenderBundleEncoder',
    ]) {
      const setPipeline = proc(`wgpu${kind}SetPipeline`);
      const setBindGroup = proc(`wgpu${kind}SetBindGroup`);
      const setImmediates = proc(`wgpu${kind}SetImmediates`);
      method(
        `GPU${kind}`,
        'setImmediates',
        (p, _, rangeOffset, data, dataOffset = 0, dataSize?: number) => {
          const offset = integer(rangeOffset, 32);
          const bytes = byteRange(data, dataOffset, dataSize, true);
          if (bytes.byteLength % 4 !== 0)
            throw exception('Immediate data size must be a multiple of four bytes');
          setImmediates(p.pointer, offset, bytes, bytes.byteLength);
        },
      );
      method(`GPU${kind}`, 'setPipeline', (p, _, pipeline) =>
        setPipeline(
          p.pointer,
          pointer(
            pipeline,
            kind.startsWith('Compute') ? 'GPUComputePipeline' : 'GPURenderPipeline',
          ),
        ),
      );
      method(
        `GPU${kind}`,
        'setBindGroup',
        (p, _, index, group, offsets?: any, start = 0, length?: number) => {
          if (offsets instanceof Uint32Array) {
            start = integer(start);
            if (length !== undefined) length = integer(length, 32);
            if (
              start > offsets.length ||
              (length !== undefined && length > offsets.length - start)
            )
              throw new RangeError('Dynamic offset range exceeds its Uint32Array');
          }
          const values =
            offsets === undefined
              ? undefined
              : offsets instanceof Uint32Array
                ? Array.from(
                    offsets.subarray(
                      start,
                      length === undefined ? undefined : start + length,
                    ),
                  )
                : Array.from(offsets);
          if (!values?.length) {
            setBindGroup(
              p.pointer,
              integer(index, 32),
              group == null ? 0n : pointer(group, 'GPUBindGroup'),
              0,
              0n,
            );
            return;
          }
          const a = arena();
          try {
            setBindGroup(
              p.pointer,
              integer(index, 32),
              group == null ? 0n : pointer(group, 'GPUBindGroup'),
              values.length,
              a.array(
                'uint32_t',
                values.map((x) => integer(x, 32)),
              ),
            );
          } finally {
            a.releaseAll();
          }
        },
      );
      if (kind !== 'RenderBundleEncoder')
        method(`GPU${kind}`, 'end', (p) => proc(`wgpu${kind}End`)(p.pointer));
    }
    method('GPUComputePassEncoder', 'dispatchWorkgroups', (p, _, x, y = 1, z = 1) =>
      proc('wgpuComputePassEncoderDispatchWorkgroups')(
        p.pointer,
        integer(x, 32),
        integer(y, 32),
        integer(z, 32),
      ),
    );
    method(
      'GPUComputePassEncoder',
      'dispatchWorkgroupsIndirect',
      (p, _, buffer, offset) =>
        proc('wgpuComputePassEncoderDispatchWorkgroupsIndirect')(
          p.pointer,
          pointer(buffer, 'GPUBuffer'),
          integer(offset),
        ),
    );
    for (const kind of ['RenderPassEncoder', 'RenderBundleEncoder']) {
      const draw = proc(`wgpu${kind}Draw`);
      const drawIndexed = proc(`wgpu${kind}DrawIndexed`);
      method(
        `GPU${kind}`,
        'draw',
        (p, _, vertices, instances = 1, firstVertex = 0, firstInstance = 0) =>
          draw(
            p.pointer,
            integer(vertices, 32),
            integer(instances, 32),
            integer(firstVertex, 32),
            integer(firstInstance, 32),
          ),
      );
      method(
        `GPU${kind}`,
        'drawIndexed',
        (
          p,
          _,
          count,
          instances = 1,
          firstIndex = 0,
          baseVertex = 0,
          firstInstance = 0,
        ) =>
          drawIndexed(
            p.pointer,
            integer(count, 32),
            integer(instances, 32),
            integer(firstIndex, 32),
            Number(baseVertex),
            integer(firstInstance, 32),
          ),
      );
      method(
        `GPU${kind}`,
        'setVertexBuffer',
        (p, _, slot, buffer, offset = 0, size = buffer?.size - offset) =>
          proc(`wgpu${kind}SetVertexBuffer`)(
            p.pointer,
            integer(slot, 32),
            buffer ? pointer(buffer, 'GPUBuffer') : 0n,
            integer(offset),
            buffer ? integer(size) : 0,
          ),
      );
      method(
        `GPU${kind}`,
        'setIndexBuffer',
        (p, _, buffer, format, offset = 0, size = buffer.size - offset) =>
          proc(`wgpu${kind}SetIndexBuffer`)(
            p.pointer,
            pointer(buffer, 'GPUBuffer'),
            nativeEnum('WGPUIndexFormat', format),
            integer(offset),
            integer(size),
          ),
      );
      for (const name of ['drawIndirect', 'drawIndexedIndirect'])
        method(`GPU${kind}`, name, (p, _, buffer, offset) =>
          proc(`wgpu${kind}${name[0]!.toUpperCase()}${name.slice(1)}`)(
            p.pointer,
            pointer(buffer, 'GPUBuffer'),
            integer(offset),
          ),
        );
    }
    method('GPURenderBundleEncoder', 'finish', (p, _, input = {}) =>
      descriptor('GPURenderBundleDescriptor', input, (a, desc) =>
        wrap(
          'GPURenderBundle',
          proc('wgpuRenderBundleEncoderFinish')(
            p.pointer,
            a.struct('WGPURenderBundleDescriptor', desc).pointer,
          ),
          p.device,
          desc,
        ),
      ),
    );
    method('GPURenderPassEncoder', 'executeBundles', (p, _, input) => {
      const list = Array.from(input as Iterable<any>),
        a = arena();
      try {
        proc('wgpuRenderPassEncoderExecuteBundles')(
          p.pointer,
          list.length,
          a.array('WGPURenderBundle', list),
        );
      } finally {
        a.releaseAll();
      }
    });
    method('GPURenderPassEncoder', 'setStencilReference', (p, _, value) =>
      proc('wgpuRenderPassEncoderSetStencilReference')(p.pointer, integer(value, 32)),
    );
    method('GPURenderPassEncoder', 'setBlendConstant', (p, _, color) =>
      descriptor('GPUColor', color, (a, value) =>
        proc('wgpuRenderPassEncoderSetBlendConstant')(
          p.pointer,
          a.struct('WGPUColor', value).pointer,
        ),
      ),
    );
    method('GPURenderPassEncoder', 'beginOcclusionQuery', (p, _, index) =>
      proc('wgpuRenderPassEncoderBeginOcclusionQuery')(p.pointer, integer(index, 32)),
    );
    method('GPURenderPassEncoder', 'endOcclusionQuery', (p) =>
      proc('wgpuRenderPassEncoderEndOcclusionQuery')(p.pointer),
    );
    for (const kind of [
      'CommandEncoder',
      'ComputePassEncoder',
      'RenderPassEncoder',
      'RenderBundleEncoder',
    ]) {
      for (const name of ['insertDebugMarker', 'pushDebugGroup'])
        method(`GPU${kind}`, name, (p, _, label) => {
          const a = arena();
          try {
            proc(`wgpu${kind}${name[0]!.toUpperCase()}${name.slice(1)}`)(
              p.pointer,
              a.string(label).$bytes,
            );
          } finally {
            a.releaseAll();
          }
        });
      method(`GPU${kind}`, 'popDebugGroup', (p) =>
        proc(`wgpu${kind}PopDebugGroup`)(p.pointer),
      );
    }
    method('GPURenderPassEncoder', 'setViewport', (p, _, x, y, w, h, min, max) =>
      proc('wgpuRenderPassEncoderSetViewport')(
        p.pointer,
        convert('float', x, pointer),
        convert('float', y, pointer),
        convert('float', w, pointer),
        convert('float', h, pointer),
        convert('float', min, pointer),
        convert('float', max, pointer),
      ),
    );
    method('GPURenderPassEncoder', 'setScissorRect', (p, _, x, y, w, h) =>
      proc('wgpuRenderPassEncoderSetScissorRect')(
        p.pointer,
        integer(x, 32),
        integer(y, 32),
        integer(w, 32),
        integer(h, 32),
      ),
    );
    const gpu = new classes.GPU(secret);
    Object.assign(classes.GPU.prototype, {
      async requestAdapter(this: object, input: any = {}) {
        if (this !== gpu) throw new TypeError('Illegal GPU invocation');
        const desc = convert('GPURequestAdapterOptions', input, pointer);
        return ready.then(() => {
          if (initializationError) throw exception(initializationError);
          if (desc.featureLevel !== 'core' || desc.xrCompatible)
            throw exception(
              'This host profile supports core WebGPU without XR',
              'NotSupportedError',
            );
          return request((id) =>
            native.adapter(
              context,
              id,
              desc.powerPreference === 'low-power'
                ? 1
                : desc.powerPreference === 'high-performance'
                  ? 2
                  : 0,
              Number(desc.forceFallbackAdapter ?? false),
            ),
          ).then((event) => (event?.value === null ? null : event));
        });
      },
      getPreferredCanvasFormat(this: object) {
        if (this !== gpu) throw new TypeError('Illegal GPU invocation');
        return 'bgra8unorm';
      },
    });
    readonly(gpu, {
      wgslLanguageFeatures: featureSet(
        JSON.parse(toString(native.wgsl(context))!),
        'WGSLLanguageFeatures',
      ),
    });
    const navigator = g.navigator ?? {};
    Object.defineProperty(navigator, 'gpu', {
      value: gpu,
      configurable: true,
      enumerable: true,
    });
    if (!g.navigator)
      Object.defineProperty(g, 'navigator', { value: navigator, configurable: true });
    class GPUCanvasContext {
      #surface: bigint = 0n;
      #configuration: any = null;
      #lost = false;
      #current: any = null;
      #canvas: OffscreenCanvas;
      #target: object;
      constructor(key: object, canvas: OffscreenCanvas, target: object) {
        if (key !== secret) throw new TypeError('Illegal constructor');
        this.#canvas = canvas;
        this.#target = target;
        canvasOps.set(this, {
          flush: () => this.#flush(),
          resize: () => this.#resize(),
          close: () => this.#close(),
          device: () => this.#configuration?.device,
          lose: () => this.#lose(),
          snapshot: (transfer) => this.#snapshot(transfer),
        });
        canvasContexts.add(new WeakRef(this));
      }
      get canvas() {
        return this.#canvas;
      }
      #snapshot(transfer: boolean): ImageBitmap {
        if (!open) throw exception('The WebGPU session closed', 'InvalidStateError');
        const width = this.canvas.width,
          height = this.canvas.height;
        if (!width || !height)
          throw exception('Cannot capture an empty canvas', 'IndexSizeError');
        if (width * height > Math.floor(0x7fffffff / 4))
          throw new RangeError('Canvas snapshot is too large');
        const data = new Uint8Array(width * height * 4);
        if (this.#configuration && !this.#lost)
          check(
            native.canvas_readback(
              this.#surface,
              data,
              data.byteLength,
              Number(transfer),
            ),
          );
        if (transfer) this.#current = null;
        return images.fromPixels({
          width,
          height,
          data,
          colorSpace: 'srgb',
          premultiplied: false,
        });
      }
      configure(input: unknown) {
        if (!open) throw exception('The WebGPU session closed', 'InvalidStateError');
        const config = convert('GPUCanvasConfiguration', input, pointer);
        if (
          !['bgra8unorm', 'rgba8unorm'].includes(config.format) ||
          config.colorSpace !== 'srgb' ||
          config.viewFormats?.some(
            (format: string) =>
              format !== config.format && format !== config.format + '-srgb',
          ) ||
          config.toneMapping?.mode === 'extended'
        )
          throw exception(
            'This macOS profile supports BGRA8/RGBA8, sRGB and matching sRGB views',
            'NotSupportedError',
          );
        if (!(config.usage & 16))
          throw exception(
            'This canvas profile requires RENDER_ATTACHMENT usage',
            'NotSupportedError',
          );
        if (!registry)
          throw exception(
            'The Flutter texture registry is not ready',
            'InvalidStateError',
          );
        if (!this.#surface) {
          this.#surface = native.canvas_create(registry);
          if (!this.#surface) throw exception(toString(native.error())!);
          canvasFinalizer.attach(this, this.#surface);
        }
        check(
          native.canvas_configure(
            this.#surface,
            pointer(config.device, 'GPUDevice'),
            integer(this.canvas.width, 32),
            integer(this.canvas.height, 32),
            config.usage,
            Number(config.alphaMode === 'opaque'),
            nativeEnum('WGPUTextureFormat', config.format),
            Number(config.viewFormats?.includes(config.format + '-srgb') ?? false),
          ),
        );
        this.#current = null;
        this.#configuration = config;
        this.#lost = false;
        host('surface', this.#target, Number(native.canvas_id(this.#surface)));
      }
      unconfigure() {
        if (!open) throw exception('The WebGPU session closed', 'InvalidStateError');
        if (this.#surface) native.canvas_unconfigure(this.#surface);
        this.#current = null;
        this.#configuration = null;
        host('surface', this.#target, 0);
      }
      getConfiguration() {
        if (!open) throw exception('The WebGPU session closed', 'InvalidStateError');
        return this.#configuration
          ? {
              ...this.#configuration,
              viewFormats: [...this.#configuration.viewFormats],
            }
          : null;
      }
      getCurrentTexture() {
        if (!open || !this.#configuration)
          throw exception('The canvas is not configured', 'InvalidStateError');
        if (this.#lost) throw exception('The configured device was lost');
        if (!this.#current) {
          const handle = native.canvas_texture(this.#surface);
          if (!handle) throw exception(toString(native.error())!);
          this.#current = wrap('GPUTexture', handle, this.#configuration.device, {
            format: this.#configuration.format,
          });
          peer(this.#current).canvas = this;
        }
        return this.#current;
      }
      #flush() {
        if (!open || !this.#current) return;
        check(native.canvas_present(this.#surface));
        this.#current = null;
      }
      #resize() {
        this.#current = null;
        if (this.#configuration && !this.#lost) {
          const config = this.#configuration;
          if (!this.canvas.width || !this.canvas.height) {
            native.canvas_unconfigure(this.#surface);
            return;
          }
          check(
            native.canvas_configure(
              this.#surface,
              pointer(config.device, 'GPUDevice'),
              integer(this.canvas.width, 32),
              integer(this.canvas.height, 32),
              config.usage,
              Number(config.alphaMode === 'opaque'),
              nativeEnum('WGPUTextureFormat', config.format),
              Number(config.viewFormats?.includes(config.format + '-srgb') ?? false),
            ),
          );
        }
      }
      #lose() {
        if (this.#lost) return;
        this.#lost = true;
        if (this.#surface) native.canvas_unconfigure(this.#surface);
        this.#current = null;
        host('surface', this.#target, 0);
      }
      #close() {
        if (this.#surface) {
          canvasFinalizer.detach(this);
          native.canvas_release(this.#surface);
          this.#surface = 0n;
        }
        this.#current = null;
        this.#configuration = null;
      }
    }
    Object.defineProperty(GPUCanvasContext.prototype, Symbol.for('flax.uncloneable'), {
      value: true,
    });
    g.GPUCanvasContext = GPUCanvasContext;
    const unregisterCanvas = canvasHost.register('webgpu', (canvas, target) => {
      const context = new GPUCanvasContext(secret, canvas, target);
      const operations = canvasOps.get(context)!;
      return {
        getContext: () => context,
        resize: () => operations.resize(),
        flush: () => operations.flush(),
        snapshot: () => operations.snapshot(false),
        convertToBlob: (options) => {
          try {
            const bitmap = operations.snapshot(false);
            try {
              return images.encode(
                images.read(bitmap),
                String(options?.type ?? 'image/png').toLowerCase(),
                Number(options?.quality ?? 0.92),
              );
            } finally {
              bitmap.close();
            }
          } catch (error) {
            return Promise.reject(error);
          }
        },
        transferToImageBitmap() {
          return operations.snapshot(true);
        },
      };
    });
    const state = {
      initialize(value: string, error?: string) {
        initializationError = error;
        if (!error) registry = BigInt(value);
        initialize(true);
      },
      close() {
        if (!open) return;
        if (pumpTimer !== undefined) g.clearTimeout(pumpTimer);
        retiringDevices.clear();
        unregisterCanvas();
        for (const ref of canvasContexts) {
          const canvas = ref.deref();
          if (canvas) canvasOps.get(canvas)!.close();
        }
        canvasContexts.clear();
        initializationError = 'The WebGPU session closed';
        initialize(false);
        for (const [ref, mapping] of mapped) {
          const buffer = ref.deref();
          if (buffer) {
            memory.detachMappedArrayBuffer(buffer);
            mappingFinalizer.detach(buffer);
            native.mapped_release(mapping);
          }
        }
        mapped.clear();
        for (const ref of resources) {
          const object = ref.deref();
          if (!object) continue;
          const p = peers.get(object)!;
          if (p.kind === 'GPUDevice') {
            p.lost?.(
              dataObject('GPUDeviceLostInfo', {
                reason: 'destroyed',
                message: 'The WebGPU session closed',
              }),
            );
            proc('wgpuDeviceDestroy')(p.pointer);
          }
        }
        open = false;
        native.stop(context);
        for (const item of pending.values())
          item.reject(exception('The WebGPU session closed', 'AbortError'));
        pending.clear();
        library.unregisterCallback(notify);
        for (const ref of resources) {
          const object = ref.deref();
          if (!object) continue;
          const p = peers.get(object)!;
          finalizer(p.kind).detach(object);
          proc(`wgpu${p.kind.slice(3)}Release`)(p.pointer);
          p.live = false;
        }
        resources.clear();
        deviceObjects.clear();
        releaseContext.detach(state);
        native.release_context(context);
        library.close();
      },
      stats() {
        return JSON.parse(toString(native.stats(context))!);
      },
    };
    releaseContext.attach(state, context);
    return state;
  } catch (error) {
    if (startupNotify) library.unregisterCallback(startupNotify);
    if (startupContext) native.release_context(startupContext);
    library.close();
    throw error;
  }
}
