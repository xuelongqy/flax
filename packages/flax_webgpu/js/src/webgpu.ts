import { DynamicLibrary, NativeFinalizer, toArrayBuffer, toString } from '@flax/ffi';
import { definitions } from './generated/definitions.g.js';
import {
  DescriptorArena,
  convert,
  sequence,
  integer,
  signedInteger,
  nativeEnum,
  text,
} from './convert.js';
import type { CanvasHost, OffscreenCanvas } from '@flax/core-runtime/host/canvas';
import arities from './arity.g.js';
import { imageHost, type PixelImage } from '@flax/core-runtime/host/images';
import { gpuDiagnosticsHost } from '@flax/core-runtime/host/gpu-diagnostics';

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

export function installWebGpu(global: typeof globalThis, host: Call, worker = false) {
  const g = global as any;
  const images = () => imageHost(global);
  const diagnostics = gpuDiagnosticsHost(global);
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
    if (worker && typeof memory.ownedArrayBuffer !== 'function') {
      throw new Error(
        'Worker WebGPU requires the maintained owned-buffer engine extension',
      );
    }
    const context = native.create();
    startupContext = context;
    if (!context) throw new Error(toString(native.error()) ?? 'Cannot initialize Dawn');
    const releaseContext = new NativeFinalizer(native.release_context);
    const mappingFinalizer = new NativeFinalizer(native.mapped_release);
    const canvasFinalizer = new NativeFinalizer(native.canvas_release);
    const displayFinalizer = new NativeFinalizer(native.canvas_display_release);
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
    const displays = new Map<WeakRef<object>, bigint>();
    const pendingDisplays: { canvas: object; target: object; display: bigint }[] = [];
    function resizeDisplays(id: number) {
      for (const [ref, display] of displays) {
        const canvas = ref.deref();
        if (!canvas || Number(native.canvas_display_id(display)) !== id) continue;
        const size = native.canvas_display_size(display) as bigint;
        host(
          'resize',
          canvasHost.target(canvas),
          Number(size >> 32n),
          Number(size & 0xffffffffn),
        );
      }
    }
    function attachDisplay(canvas: object, target: object, token: ArrayBuffer) {
      if (worker) return;
      const display = native.canvas_token_display(token);
      if (!display) throw exception(toString(native.error())!);
      try {
        displayFinalizer.attach(canvas, display);
      } catch (error) {
        native.canvas_display_release(display);
        throw error;
      }
      displays.set(new WeakRef(canvas), display);
      if (registry) host('surface', target, Number(native.canvas_display_id(display)));
      else pendingDisplays.push({ canvas, target, display });
    }
    const unregisterTransfers =
      typeof memory.ownedArrayBuffer === 'function'
        ? canvasHost.registerTransfers({
            create(canvas, target, width, height) {
              const token = native.canvas_token_create(
                registry,
                integer(width, 32),
                integer(height, 32),
              );
              if (!token) throw exception(toString(native.error())!);
              let buffer: ArrayBuffer;
              try {
                buffer = memory.ownedArrayBuffer(
                  token,
                  1,
                  native.canvas_token_release,
                  token,
                );
              } catch (error) {
                native.canvas_token_release(token);
                throw error;
              }
              attachDisplay(canvas, target, buffer);
              return buffer;
            },
            adopt: attachDisplay,
            dimensions(token) {
              return [
                native.canvas_token_dimension(token, 0),
                native.canvas_token_dimension(token, 1),
              ];
            },
            resize(token, width, height) {
              check(
                native.canvas_token_resize(
                  token,
                  integer(width, 32),
                  integer(height, 32),
                ),
              );
              const id = Number(native.canvas_token_id(token));
              if (worker) host('resize', id);
              else resizeDisplays(id);
            },
          })
        : () => {};
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
    ]) {
      const Class = class {
        constructor(key: object) {
          if (key !== secret) throw new TypeError('Illegal constructor');
        }
      };
      Object.defineProperty(Class, 'name', { value: kind });
      Object.defineProperty(Class, 'length', { value: 0 });
      Object.defineProperty(Class.prototype, Symbol.toStringTag, {
        value: kind,
        configurable: true,
      });
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
        if (!images().isSource(value))
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
        value = new NativeFinalizer(
          kind === 'GPUDevice'
            ? native.release_device
            : proc(`wgpu${kind.slice(3)}Release`),
        );
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
      required = (arities as Record<string, Record<string, number>>)[kind]?.[name] ?? 0,
    ) {
      // WebGPU methods take at most six arguments; avoid arrays on every draw.
      Object.defineProperty(classes[kind].prototype, name, {
        configurable: true,
        enumerable: true,
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
            return fn(p, this, a, b, c, d, e, f, arguments.length);
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
      Object.defineProperty(classes[kind].prototype[name], 'name', { value: name });
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
      const Class =
        kind === 'GPUDevice'
          ? class extends g.EventTarget {
              constructor(key: object) {
                super();
                if (key !== secret) throw new TypeError('Illegal constructor');
              }
            }
          : class {
              constructor(key: object) {
                if (key !== secret) throw new TypeError('Illegal constructor');
              }
            };
      Object.defineProperty(Class, 'name', { value: kind });
      Object.defineProperty(Class, 'length', { value: 0 });
      Object.defineProperty(Class.prototype, Symbol.toStringTag, {
        value: kind,
        configurable: true,
      });
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
          configurable: true,
          enumerable: true,
          get() {
            return peer(this, kind).label;
          },
          set(value) {
            const p = peer(this, kind),
              label = text(value).toWellFormed(),
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
    const errorMessages = new WeakMap<object, string>();
    g.GPUError = class GPUError {
      constructor(key: object, message: string) {
        if (key !== secret) throw new TypeError('Illegal constructor');
        errorMessages.set(this, message);
      }
    };
    Object.defineProperty(g.GPUError, 'length', { value: 0 });
    Object.defineProperties(g.GPUError.prototype, {
      message: {
        enumerable: true,
        configurable: true,
        get() {
          if (!errorMessages.has(this)) throw new TypeError('Illegal invocation');
          return errorMessages.get(this);
        },
      },
      [Symbol.toStringTag]: { value: 'GPUError', configurable: true },
      [Symbol.for('flax.uncloneable')]: { value: true },
    });
    for (const name of [
      'GPUValidationError',
      'GPUOutOfMemoryError',
      'GPUInternalError',
    ]) {
      const Class = class extends g.GPUError {
        constructor(message: string) {
          if (!arguments.length) throw new TypeError(`${name} needs a message`);
          super(secret, text(message));
        }
      };
      Object.defineProperty(Class, 'name', { value: name });
      Object.defineProperty(Class.prototype, Symbol.toStringTag, {
        value: name,
        configurable: true,
      });
      g[name] = Class;
    }
    const eventErrors = new WeakMap<object, object>();
    g.GPUUncapturedErrorEvent = class GPUUncapturedErrorEvent extends g.Event {
      constructor(type: string, init: any) {
        if (arguments.length < 2)
          throw new TypeError('GPUUncapturedErrorEvent needs two arguments');
        const eventType = text(type);
        if (init != null && !['object', 'function'].includes(typeof init))
          throw new TypeError('Expected GPUUncapturedErrorEventInit');
        const options = {
          bubbles: Boolean(init?.bubbles),
          cancelable: Boolean(init?.cancelable),
          composed: Boolean(init?.composed),
        };
        const error = init?.error;
        if (!errorMessages.has(error)) throw new TypeError('Expected a GPUError');
        super(eventType, options);
        eventErrors.set(this, error);
      }
    };
    Object.defineProperties(g.GPUUncapturedErrorEvent.prototype, {
      error: {
        configurable: true,
        enumerable: true,
        get() {
          const error = eventErrors.get(this);
          if (!error) throw new TypeError('Illegal invocation');
          return error;
        },
      },
      [Symbol.toStringTag]: { value: 'GPUUncapturedErrorEvent', configurable: true },
      [Symbol.for('flax.uncloneable')]: { value: true },
    });
    const pipelineReasons = new WeakMap<object, string>();
    g.GPUPipelineError = class GPUPipelineError extends g.DOMException {
      constructor(message = '', input: any) {
        const convertedMessage = text(message);
        const options = convert('GPUPipelineErrorInit', input, pointer);
        super(convertedMessage, 'GPUPipelineError');
        pipelineReasons.set(this, options.reason);
      }
    };
    Object.defineProperties(g.GPUPipelineError.prototype, {
      reason: {
        enumerable: true,
        configurable: true,
        get() {
          const reason = pipelineReasons.get(this);
          if (!reason) throw new TypeError('Illegal invocation');
          return reason;
        },
      },
      [Symbol.toStringTag]: { value: 'GPUPipelineError', configurable: true },
    });
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
        TRANSIENT_ATTACHMENT: 32,
      },
      GPUShaderStage: { VERTEX: 1, FRAGMENT: 2, COMPUTE: 4 },
      GPUMapMode: { READ: 1, WRITE: 2 },
      GPUColorWrite: { RED: 1, GREEN: 2, BLUE: 4, ALPHA: 8, ALL: 15 },
    };
    for (const [name, values] of Object.entries(constantGroups))
      g[name] = Object.freeze(values);
    const readonlyValues = new WeakMap<
      object,
      { prototype: object; fields: Record<string, unknown> }
    >();
    function readonly(object: object, fields: Record<string, unknown>) {
      const values = readonlyValues.get(object) ?? {
        prototype: Object.getPrototypeOf(object),
        fields: {},
      };
      Object.assign(values.fields, fields);
      readonlyValues.set(object, values);
      const prototype = values.prototype;
      for (const key of Object.keys(fields)) {
        if (Object.hasOwn(prototype, key)) continue;
        Object.defineProperty(prototype, key, {
          enumerable: true,
          configurable: true,
          get() {
            const data = readonlyValues.get(this);
            if (
              !data ||
              data.prototype !== prototype ||
              !Object.hasOwn(data.fields, key)
            )
              throw new TypeError('Illegal invocation');
            return data.fields[key];
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
    const uncapturedListeners = new WeakMap<object, any>();
    Object.defineProperty(classes.GPUDevice.prototype, 'onuncapturederror', {
      configurable: true,
      enumerable: true,
      get() {
        peer(this, 'GPUDevice');
        return uncapturedListeners.get(this) ?? null;
      },
      set(fn) {
        peer(this, 'GPUDevice');
        const listener = uncapturedListeners.get(this);
        if (listener) this.removeEventListener('uncapturederror', listener);
        const next = typeof fn === 'function' ? fn : null;
        uncapturedListeners.set(this, next);
        if (next) this.addEventListener('uncapturederror', next);
      },
    });
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
    }
    method('GPUAdapter', 'requestDevice', (p, self, input) => {
      const desc = convert('GPUDeviceDescriptor', input, pointer);
      for (const feature of desc.requiredFeatures ?? [])
        if (!self.features.has(feature))
          return Promise.reject(new TypeError(`Unsupported feature: ${feature}`));
      return request((id) =>
        native.device(context, p.pointer, id, JSON.stringify(desc)),
      ).then((value) => {
        readonly(value, {
          adapterInfo: dataObject('GPUAdapterInfo', {
            ...readonlyValues.get(self.info)!.fields,
          }),
        });
        peer(value).label = desc.label ?? '';
        peer(value.queue).label = desc.defaultQueue.label;
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
      method('GPUDevice', `create${kind}`, (p, self, input) => {
        if (kind === 'CommandEncoder' && input == null)
          return wrap(
            'GPUCommandEncoder',
            proc('wgpuDeviceCreateCommandEncoder')(p.pointer, 0n),
            self,
          );
        return descriptor(`GPU${kind}Descriptor`, input, (a, desc) => {
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
        });
      });
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
        diagnostics.info(
          event.messages.map((message: any) => diagnostics.message(message)),
        ),
      ),
    );
    getter('GPUBuffer', 'size', (p) => p.descriptor.size);
    getter('GPUBuffer', 'usage', (p) => p.descriptor.usage);
    getter('GPUBuffer', 'mapState', (p) =>
      p.pendingMap ? 'pending' : p.mapMode ? 'mapped' : 'unmapped',
    );
    method('GPUBuffer', 'mapAsync', (p, _, mode, offset = 0, size?: number) => {
      mode = integer(mode, 32);
      offset = integer(offset);
      size =
        size === undefined ? Math.max(0, p.descriptor.size - offset) : integer(size);
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
    });
    method('GPUBuffer', 'getMappedRange', (p, _, at = 0, length?: number) => {
      const offset = integer(at),
        size = length === undefined ? p.descriptor.size - offset : integer(length);
      if (
        !p.mapMode ||
        size < 0 ||
        offset % 8 ||
        size % 4 ||
        offset < p.mapOffset! ||
        offset + size > p.mapOffset! + p.mapSize! ||
        p.ranges!.some(
          (range) => offset < range.offset + range.size && range.offset < offset + size,
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
    });
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
    method('GPUTexture', 'createView', (p, _, input) => {
      if (input == null)
        return wrap(
          'GPUTextureView',
          proc('wgpuTextureCreateView')(p.pointer, 0n),
          p.device,
        );
      return descriptor('GPUTextureViewDescriptor', input, (a, desc) =>
        wrap(
          'GPUTextureView',
          proc('wgpuTextureCreateView')(
            p.pointer,
            a.struct('WGPUTextureViewDescriptor', desc).pointer,
          ),
          p.device,
          desc,
        ),
      );
    });
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
    const commandBufferPointer = (value: unknown) => pointer(value, 'GPUCommandBuffer');
    method('GPUQueue', 'submit', (p, _, commands) => {
      const list = sequence(commands, commandBufferPointer);
      const a = arena();
      try {
        proc('wgpuQueueSubmit')(p.pointer, list.length, a.array('pointer', list));
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
        const handle = pointer(buffer, 'GPUBuffer');
        bufferOffset = integer(bufferOffset);
        const source = byteRange(data, dataOffset, size, true);
        if (source.byteLength % 4 !== 0)
          throw exception('Write buffer data size must be a multiple of four bytes');
        proc('wgpuQueueWriteBuffer')(
          p.pointer,
          handle,
          bufferOffset,
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
    const createTexture = classes.GPUDevice.prototype.createTexture;
    const destroyTexture = classes.GPUTexture.prototype.destroy;
    function uploadExternalPixels(
      p: Peer,
      self: object,
      pixels: PixelImage,
      dest: any,
      extent: any,
      width: number,
      height: number,
      data: Uint8Array,
      flipY: boolean,
    ) {
      let upload = uploads.get(self);
      if (!upload || upload.width < width || upload.height < height) {
        if (upload) destroyTexture.call(upload.texture);
        upload = {
          width: Math.max(1, width),
          height: Math.max(1, height),
          texture: createTexture.call(p.device, {
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
          1.22494018, -0.04205695, -0.01963755, -0.22494018, 1.04205695, -0.07863605, 0,
          0, 1.0982736,
        ];
        const options = a.struct('WGPUCopyTextureForBrowserOptions', {
          flipY,
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
    }
    method(
      'GPUQueue',
      'copyExternalImageToTexture',
      (p, self, input, destination, size) => {
        const source = convert('GPUCopyExternalImageSourceInfo', input, pointer);
        const dest = convert('GPUCopyExternalImageDestInfo', destination, pointer);
        const extent = convert('GPUExtent3D', size, pointer);
        const width = Array.isArray(extent) ? extent[0] : extent.width;
        const height = (Array.isArray(extent) ? extent[1] : extent.height) ?? 1;
        const pixels = images().read(source.source);
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
        uploadExternalPixels(
          p,
          self,
          pixels,
          dest,
          extent,
          width,
          height,
          data,
          source.flipY,
        );
      },
    );
    if (!worker && canvasHost.hasSources) {
      for (const name of ['copyElementImageToTexture', 'drawElementImageToTexture']) {
        const legacy = name === 'copyElementImageToTexture';
        const rectNames = legacy
          ? ['sx', 'sy', 'swidth', 'sheight']
          : ['sourceX', 'sourceY', 'sourceWidth', 'sourceHeight'];
        method(
          'GPUQueue',
          name,
          (p, self, input, destination) => {
            if (
              input == null ||
              !['object', 'function'].includes(typeof input) ||
              destination == null ||
              !['object', 'function'].includes(typeof destination)
            ) {
              throw new TypeError(
                'Expected element source and destination dictionaries',
              );
            }
            const source = input.source;
            const rect = rectNames.map((key) => {
              const value = input[key];
              return value === undefined ? undefined : convert('float', value, pointer);
            });
            const hasRect = rect.some((value) => value !== undefined);
            if (hasRect && rect.some((value) => value === undefined))
              throw exception('Specify all four source rectangle values');

            const dest = convert(
              'GPUCopyExternalImageDestInfo',
              legacy ? destination.destination : destination,
              pointer,
            );
            let extent;
            if (legacy) {
              const width = destination.width;
              const height = destination.height;
              if ((width === undefined) !== (height === undefined))
                throw exception('Specify both destination width and height');
              if (width !== undefined)
                extent = [integer(width, 32), integer(height, 32)];
            } else {
              const size = destination.size;
              if (size !== undefined) extent = convert('GPUExtent3D', size, pointer);
            }
            const layers =
              (Array.isArray(extent) ? extent[2] : extent?.depthOrArrayLayers) ?? 1;
            if (layers !== 1)
              throw exception('An element image copies to a single texture layer');

            // Read the snapshot after all application dictionary getters and conversions.
            const pixels = canvasHost.sourcePixels(source);
            let [x = 0, y = 0, sw = pixels.width, sh = pixels.height] = rect;
            if (sw === 0 || sh === 0)
              throw exception('The source rectangle is empty', 'DataError');
            if (sw < 0) x += sw;
            if (sh < 0) y += sh;
            sw = Math.abs(sw);
            sh = Math.abs(sh);
            const requestedWidth =
              (Array.isArray(extent) ? extent[0] : extent?.width) ?? Math.ceil(sw);
            const requestedHeight = extent
              ? ((Array.isArray(extent) ? extent[1] : extent.height) ?? 1)
              : Math.ceil(sh);
            if (!requestedWidth || !requestedHeight) return;

            // Chromium clips oversized draws to the texture; Dawn validates subresources.
            const target = peer(dest.texture, 'GPUTexture');
            const width = Math.min(
              requestedWidth,
              Number(proc('wgpuTextureGetWidth')(target.pointer)),
            );
            const height = Math.min(
              requestedHeight,
              Number(proc('wgpuTextureGetHeight')(target.pointer)),
            );
            if (width * height > 0x1fffffff)
              throw exception('The element image upload is too large');
            let data = pixels.data;
            if (
              x !== 0 ||
              y !== 0 ||
              sw !== pixels.width ||
              sh !== pixels.height ||
              requestedWidth !== sw ||
              requestedHeight !== sh ||
              width !== pixels.width ||
              height !== pixels.height
            ) {
              const output = new Uint32Array(width * height);
              const input = new Uint32Array(
                data.buffer,
                data.byteOffset,
                data.byteLength / 4,
              );
              for (let row = 0; row < height; row++) {
                const sy = Math.floor(y + ((row + 0.5) * sh) / requestedHeight);
                if (sy < 0 || sy >= pixels.height) continue;
                for (let col = 0; col < width; col++) {
                  const sx = Math.floor(x + ((col + 0.5) * sw) / requestedWidth);
                  if (sx >= 0 && sx < pixels.width)
                    output[row * width + col] = input[sy * pixels.width + sx]!;
                }
              }
              data = new Uint8Array(output.buffer);
            }
            uploadExternalPixels(
              p,
              self,
              pixels,
              dest,
              [width, height, 1],
              width,
              height,
              data,
              false,
            );
          },
          2,
        );
      }
    }
    for (const [methodName, resultKind] of [
      ['beginComputePass', 'ComputePassEncoder'],
      ['beginRenderPass', 'RenderPassEncoder'],
      ['finish', 'CommandBuffer'],
    ] as const)
      method('GPUCommandEncoder', methodName, (p, _, input) => {
        if (methodName === 'finish' && input == null)
          return wrap(
            'GPUCommandBuffer',
            proc('wgpuCommandEncoderFinish')(p.pointer, 0n),
            p.device,
          );
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
      (
        p,
        _,
        source,
        sourceOffset,
        destination,
        destinationOffset,
        size,
        _sixth,
        count,
      ) => {
        const sourceHandle = pointer(source, 'GPUBuffer');
        if (count <= 3) {
          size = destination;
          destination = sourceOffset;
          sourceOffset = 0;
          destinationOffset = 0;
        }
        sourceOffset = integer(sourceOffset);
        const destinationHandle = pointer(destination, 'GPUBuffer');
        destinationOffset = integer(destinationOffset);
        size =
          size === undefined
            ? Math.max(0, peer(source).descriptor.size - sourceOffset)
            : integer(size);
        proc('wgpuCommandEncoderCopyBufferToBuffer')(
          p.pointer,
          sourceHandle,
          sourceOffset,
          destinationHandle,
          destinationOffset,
          size,
        );
      },
    );
    method(
      'GPUCommandEncoder',
      'clearBuffer',
      (p, _, buffer, offset = 0, size?: number) => {
        const handle = pointer(buffer, 'GPUBuffer');
        offset = integer(offset);
        const range = size === undefined ? 0xffffffffffffffffn : integer(size);
        proc('wgpuCommandEncoderClearBuffer')(p.pointer, handle, offset, range);
      },
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
    const dynamicOffset = (value: unknown) => integer(value, 32);
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
        (p, _, index, group, offsets, start, length, _sixth, count) => {
          if (count === 4)
            throw new TypeError('setBindGroup needs two, three or five arguments');
          index = integer(index, 32);
          const handle = group == null ? 0n : pointer(group, 'GPUBindGroup');
          let values: number[] | undefined;
          if (count >= 5) {
            if (!(offsets instanceof Uint32Array))
              throw new TypeError('Expected Uint32Array');
            start = integer(start);
            length = integer(length, 32);
            if (start > offsets.length || length > offsets.length - start)
              throw new RangeError('Dynamic offset range exceeds its Uint32Array');
            values = Array.from(offsets.subarray(start, start + length));
          } else if (offsets !== undefined) {
            values = sequence(offsets, dynamicOffset);
          }
          if (!values?.length) {
            setBindGroup(p.pointer, index, handle, 0, 0n);
            return;
          }
          const a = arena();
          try {
            setBindGroup(
              p.pointer,
              index,
              handle,
              values.length,
              a.array('uint32_t', values),
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
            signedInteger(baseVertex),
            integer(firstInstance, 32),
          ),
      );
      method(
        `GPU${kind}`,
        'setVertexBuffer',
        (p, _, slot, buffer, offset = 0, size?: number) => {
          slot = integer(slot, 32);
          const handle = buffer == null ? 0n : pointer(buffer, 'GPUBuffer');
          offset = integer(offset);
          // WGPU_WHOLE_SIZE lets Dawn derive the remaining range after conversion.
          const range = size === undefined ? 0xffffffffffffffffn : integer(size);
          proc(`wgpu${kind}SetVertexBuffer`)(
            p.pointer,
            slot,
            handle,
            offset,
            !handle && size === undefined ? 0 : range,
          );
        },
      );
      method(
        `GPU${kind}`,
        'setIndexBuffer',
        (p, _, buffer, format, offset = 0, size?: number) => {
          const handle = pointer(buffer, 'GPUBuffer');
          const nativeFormat = nativeEnum('WGPUIndexFormat', format);
          offset = integer(offset);
          const range = size === undefined ? 0xffffffffffffffffn : integer(size);
          proc(`wgpu${kind}SetIndexBuffer`)(
            p.pointer,
            handle,
            nativeFormat,
            offset,
            range,
          );
        },
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
    method('GPURenderBundleEncoder', 'finish', (p, _, input) =>
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
    const renderBundlePointer = (value: unknown) => pointer(value, 'GPURenderBundle');
    method('GPURenderPassEncoder', 'executeBundles', (p, _, input) => {
      const list = sequence(input, renderBundlePointer),
        a = arena();
      try {
        proc('wgpuRenderPassEncoderExecuteBundles')(
          p.pointer,
          list.length,
          a.array('pointer', list),
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
      async requestAdapter(this: object, input: any = undefined) {
        if (this !== gpu) throw new TypeError('Illegal GPU invocation');
        const desc = convert('GPURequestAdapterOptions', input, pointer);
        if (desc.featureLevel !== 'core' && desc.featureLevel !== 'compatibility')
          return null;
        const preference = Object.hasOwn(desc, 'powerPreference')
          ? desc.powerPreference
          : undefined;
        return ready.then(() => {
          if (initializationError) throw exception(initializationError);
          if (desc.xrCompatible)
            throw exception(
              'This host profile does not support XR',
              'NotSupportedError',
            );
          return request((id) =>
            native.adapter(
              context,
              id,
              preference === 'low-power'
                ? 1
                : preference === 'high-performance'
                  ? 2
                  : 0,
              Number(desc.forceFallbackAdapter ?? false),
              desc.featureLevel === 'compatibility' ? 1 : 2,
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
        else if (this.#configuration?.alphaMode === 'opaque') {
          // Device loss skips readback but still requires configured opaque alpha.
          for (let i = 3; i < data.length; i += 4) data[i] = 255;
        }
        if (transfer) this.#expire();
        return images().fromPixels({
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
        const features = featureValues.get(
          readonlyValues.get(config.device)!.fields.features as object,
        )!;
        // Required features precede both canvas-format and profile restrictions.
        for (const format of [config.format, ...config.viewFormats]) {
          let feature: string | undefined;
          if (format === 'depth32float-stencil8') feature = format;
          else if (format.startsWith('bc')) feature = 'texture-compression-bc';
          else if (format.startsWith('etc2') || format.startsWith('eac'))
            feature = 'texture-compression-etc2';
          else if (format.startsWith('astc')) feature = 'texture-compression-astc';
          else if (/^(r|rg|rgba)16(unorm|snorm)$/.test(format))
            feature = 'texture-formats-tier1';
          if (feature && !features.has(feature))
            throw new TypeError(`Texture format ${format} requires ${feature}`);
        }
        if (!['bgra8unorm', 'rgba8unorm', 'rgba16float'].includes(config.format))
          throw new TypeError(`Unsupported canvas texture format: ${config.format}`);
        if (config.usage & constantGroups.GPUTextureUsage.TRANSIENT_ATTACHMENT)
          throw new TypeError('Canvas textures cannot use TRANSIENT_ATTACHMENT');
        if (
          config.format === 'rgba16float' ||
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
        const lost = peer(config.device).destroyed === true;
        if (!lost && !registry)
          throw exception(
            'The Flutter texture registry is not ready',
            'InvalidStateError',
          );
        if (!lost && !this.#surface) {
          const token = canvasHost.transferToken(this.canvas);
          this.#surface = token
            ? native.canvas_from_token(context, token)
            : native.canvas_create(context, registry);
          if (!this.#surface) throw exception(toString(native.error())!);
          canvasFinalizer.attach(this, this.#surface);
        }
        if (!lost) {
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
        } else if (this.#surface) {
          native.canvas_unconfigure(this.#surface);
        }
        this.#expire();
        this.#configuration = config;
        this.#lost = lost;
        host(
          'surface',
          this.#target,
          lost ? 0 : Number(native.canvas_id(this.#surface)),
        );
      }
      unconfigure() {
        if (!open) throw exception('The WebGPU session closed', 'InvalidStateError');
        if (this.#surface) native.canvas_unconfigure(this.#surface);
        this.#expire();
        this.#configuration = null;
        host('surface', this.#target, 0);
      }
      getConfiguration() {
        if (!open) throw exception('The WebGPU session closed', 'InvalidStateError');
        return this.#configuration
          ? {
              ...this.#configuration,
              viewFormats: [...this.#configuration.viewFormats],
              toneMapping: { ...this.#configuration.toneMapping },
            }
          : null;
      }
      getCurrentTexture() {
        if (!open || !this.#configuration)
          throw exception('The canvas is not configured', 'InvalidStateError');
        if (!this.#current) {
          const config = this.#configuration;
          const desc = {
            size: [this.canvas.width, this.canvas.height, 1],
            format: config.format,
            usage: config.usage,
            viewFormats: config.viewFormats,
          };
          // Dawn creates a real error texture on a lost device, with the full
          // descriptor and ordinary GPUTexture ownership, without surface storage.
          if (this.#lost) this.#current = createTexture.call(config.device, desc);
          else {
            const handle = native.canvas_texture(this.#surface);
            if (!handle) throw exception(toString(native.error())!);
            this.#current = wrap('GPUTexture', handle, config.device, desc);
          }
          peer(this.#current).canvas = this;
        }
        return this.#current;
      }
      #flush() {
        if (!open || !this.#current) return;
        if (!this.#lost) check(native.canvas_present(this.#surface));
        this.#expire();
      }
      #expire() {
        if (!this.#current) return;
        destroyTexture.call(this.#current);
        this.#current = null;
      }
      #resize() {
        try {
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
        } catch (error) {
          native.canvas_unconfigure(this.#surface);
          throw error;
        } finally {
          // Retire shared native access before destroying the cached texture.
          this.#expire();
        }
      }
      #lose() {
        if (this.#lost) return;
        this.#lost = true;
        if (this.#surface) native.canvas_unconfigure(this.#surface);
        // Loss destroys the backing storage but does not expire currentTexture.
        host('surface', this.#target, 0);
      }
      #close() {
        if (this.#surface) {
          canvasFinalizer.detach(this);
          native.canvas_release(this.#surface);
          this.#surface = 0n;
        }
        this.#expire();
        this.#configuration = null;
      }
    }
    Object.defineProperty(GPUCanvasContext.prototype, Symbol.for('flax.uncloneable'), {
      value: true,
    });
    Object.defineProperty(GPUCanvasContext, 'length', { value: 0 });
    Object.defineProperty(GPUCanvasContext.prototype, Symbol.toStringTag, {
      value: 'GPUCanvasContext',
      configurable: true,
    });
    for (const name of [
      'canvas',
      'configure',
      'unconfigure',
      'getConfiguration',
      'getCurrentTexture',
    ])
      Object.defineProperty(GPUCanvasContext.prototype, name, { enumerable: true });
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
              return images().encode(
                images().read(bitmap),
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
      resize: resizeDisplays,
      initialize(value: string, error?: string) {
        initializationError = error;
        if (!error) registry = BigInt(value);
        if (registry) {
          for (const { target, display } of pendingDisplays) {
            check(native.canvas_display_initialize(display, registry));
            host('surface', target, Number(native.canvas_display_id(display)));
          }
          pendingDisplays.length = 0;
        }
        initialize(true);
      },
      close() {
        if (!open) return;
        if (pumpTimer !== undefined) g.clearTimeout(pumpTimer);
        retiringDevices.clear();
        unregisterCanvas();
        unregisterTransfers();
        pendingDisplays.length = 0;
        for (const [ref, display] of displays) {
          const canvas = ref.deref();
          if (canvas) {
            displayFinalizer.detach(canvas);
            native.canvas_display_release(display);
          }
        }
        displays.clear();
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
