import {
  Buffer,
  DynamicLibrary,
  NativeFinalizer,
  toArrayBuffer,
  toString,
} from '@flax/ffi';
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
import type { GPURenderPipelineDescriptor } from './types.g.js';
import { imageHost, type PixelImage } from '@flax/core-runtime/host/images';
import { gpuDiagnosticsHost } from '@flax/core-runtime/host/gpu-diagnostics';
import { installVideoFrames, type VideoSources } from './video-frames.js';

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
  commandEncoder?: Peer | undefined;
  externalTextures?: Set<object> | undefined;
};

export function installWebGpu(
  global: typeof globalThis,
  host: Call,
  worker = false,
  videoSources: VideoSources = [],
) {
  const g = global as any;
  const images = () => imageHost(global);
  const diagnostics = gpuDiagnosticsHost(global);
  const hasVideoSources = videoSources.length > 0;
  const library = DynamicLibrary.codeAsset('@flax/webgpu/dawn');
  const signatures = definitions as any;
  const native: Record<string, any> = {};
  let startupContext = 0n,
    startupNotify = 0n;
  let startupVideo: ReturnType<typeof installVideoFrames> | undefined;
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
    const minResourceSweepInterval = 16_384;
    let resourcesUntilSweep = minResourceSweepInterval;
    // Video creates short-lived GPU wrappers at playback rate.
    const collectedResources = hasVideoSources
      ? new FinalizationRegistry<WeakRef<object>>((ref) => resources.delete(ref))
      : undefined;
    const deviceObjects = new Map<string, WeakRef<any>>();
    const mapped = new Map<WeakRef<ArrayBuffer>, bigint>();
    const protectedBuffers = new WeakSet<ArrayBuffer>();
    const pending = new Map<
      number,
      { resolve: (value: any) => void; reject: (reason: unknown) => void }
    >();
    const finalizers = new Map<string, NativeFinalizer>();
    let registry: bigint = 0n;
    const video = (startupVideo = installVideoFrames(
      global,
      native,
      () => registry,
      videoSources,
    ));
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
        resize(width: number, height: number): void;
        close(): void;
        device(): unknown;
        lose(): void;
        destroyCurrentTexture(texture: object, handle: bigint): boolean;
        snapshot(transfer: boolean): ImageBitmap;
        captureEncoding(): { pixels: PixelImage; extended: boolean };
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
      if (kind === 'VideoFrame') {
        if (!video.frame(value))
          throw new TypeError('Expected a VideoFrame from this session');
        return 0n;
      }
      if (kind === 'GPUCopyExternalImageSource') {
        if (!video.frame(value) && !images().isSource(value))
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
    function injectValidationError(device: Peer, message: string) {
      const a = arena();
      try {
        proc('wgpuDeviceInjectError')(
          device.pointer,
          nativeEnum('WGPUErrorType', 'validation'),
          a.string(message).$bytes,
        );
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
      const ref = new WeakRef(result);
      resources.add(ref);
      if (collectedResources) {
        collectedResources.register(result, ref);
      } else if (--resourcesUntilSweep === 0) {
        for (const entry of resources) {
          if (entry.deref() === undefined) resources.delete(entry);
        }
        // Scale the next interval to avoid repeatedly scanning live wrappers.
        resourcesUntilSweep = Math.max(minResourceSweepInterval, resources.size);
      }
      return result;
    }
    function retainExternalTextures(encoder: Peer, textures: Set<object>) {
      const retained = (encoder.externalTextures ??= new Set());
      for (const texture of textures) retained.add(texture);
    }
    function moveExternalTextures(encoder: Peer, result: object) {
      if (!encoder.externalTextures) return;
      peer(result).externalTextures = encoder.externalTextures;
      encoder.externalTextures = undefined;
    }
    function startRequest(
      start: (id: number) => number,
      resolve: (value: any) => void,
      reject: (reason: unknown) => void,
    ) {
      if (!open) {
        reject(exception('The WebGPU session is closed', 'InvalidStateError'));
        return;
      }
      const id = nextRequest++;
      pending.set(id, { resolve, reject });
      try {
        check(start(id));
        schedulePump();
      } catch (error) {
        pending.delete(id);
        reject(error);
      }
    }
    function request(start: (id: number) => number): Promise<any> {
      return new Promise((resolve, reject) => startRequest(start, resolve, reject));
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
    function copyEncodedImage(handle: bigint): ArrayBuffer {
      const length = new BigUint64Array(1);
      const bytes = native.encoded_image_bytes(handle, length);
      return toArrayBuffer(bytes, Number(length[0]));
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
        else if (event.kind === 'EncodedImage') {
          try {
            item.resolve(copyEncodedImage(BigInt(event.handle)));
          } catch (error) {
            item.reject(error);
          }
        } else if (event.kind) {
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
      'GPUExternalTexture',
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
    function deviceFeatures(device: object) {
      const features = readonlyValues.get(device)!.fields.features as object;
      return featureValues.get(features)!;
    }
    function validateTextureFormat(device: object, format?: string | null) {
      if (format == null) return;
      let feature: string | undefined;
      if (format === 'depth32float-stencil8') feature = format;
      else if (format.startsWith('bc')) feature = 'texture-compression-bc';
      else if (format.startsWith('etc2') || format.startsWith('eac'))
        feature = 'texture-compression-etc2';
      else if (format.startsWith('astc')) feature = 'texture-compression-astc';
      else if (/^(r|rg|rgba)16(unorm|snorm)$/.test(format))
        feature = 'texture-formats-tier1';
      if (feature && !deviceFeatures(device).has(feature))
        throw new TypeError(`Texture format ${format} requires ${feature}`);
    }
    function validateRenderPipelineFormats(
      device: object,
      desc: GPURenderPipelineDescriptor,
    ) {
      if (desc.fragment)
        for (const target of desc.fragment.targets)
          validateTextureFormat(device, target?.format);
      validateTextureFormat(device, desc.depthStencil?.format);
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
    const { addEventListener, removeEventListener } = g.EventTarget.prototype;
    const uncapturedListeners = new WeakMap<
      object,
      { callback: Function; listener: (event: unknown) => void }
    >();
    Object.defineProperty(classes.GPUDevice.prototype, 'onuncapturederror', {
      configurable: true,
      enumerable: true,
      get() {
        peer(this, 'GPUDevice');
        return uncapturedListeners.get(this)?.callback ?? null;
      },
      set(fn) {
        peer(this, 'GPUDevice');
        const handler = uncapturedListeners.get(this);
        const callback = typeof fn === 'function' ? fn : null;
        if (handler) {
          if (callback) handler.callback = callback;
          else {
            removeEventListener.call(this, 'uncapturederror', handler.listener);
            uncapturedListeners.delete(this);
          }
        } else if (callback) {
          // Keep the same listener position while the handler callback changes.
          const entry = {
            callback,
            listener: (event: unknown): void => {
              Reflect.apply(entry.callback, this, [event]);
            },
          };
          uncapturedListeners.set(this, entry);
          addEventListener.call(this, 'uncapturederror', entry.listener);
        }
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
    function liveVideoHandle(frame: { handle: bigint }) {
      if (!frame.handle)
        throw exception('The video frame is closed', 'InvalidStateError');
      return frame.handle;
    }
    function importVideo(device: bigint, frame: bigint, colorSpace: string) {
      const handle = native.video_frame_import(
        device,
        frame,
        colorSpace === 'display-p3' ? 1 : 0,
      );
      if (!handle)
        throw exception(toString(native.error()) || 'Cannot import the video frame');
      return handle;
    }
    const setExternalTextureLabel = Object.getOwnPropertyDescriptor(
      classes.GPUExternalTexture.prototype,
      'label',
    )!.set!;
    method('GPUDevice', 'importExternalTexture', (p, self, input) => {
      const desc = convert('GPUExternalTextureDescriptor', input, pointer);
      const frame = liveVideoHandle(video.frame(desc.source)!);
      // The descriptor keeps the frame alive with the imported texture.
      const texture = wrap(
        'GPUExternalTexture',
        importVideo(p.pointer, frame, desc.colorSpace),
        self,
        desc,
      );
      if (desc.label) setExternalTextureLabel.call(texture, desc.label);
      return texture;
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
          switch (kind) {
            case 'ShaderModule': {
              const source = a.struct('WGPUShaderSourceWGSL', { code: desc.code });
              desc = { ...desc, nextInChain: source.pointer };
              break;
            }
            case 'Texture':
              validateTextureFormat(self, desc.format);
              for (const format of desc.viewFormats)
                validateTextureFormat(self, format);
              break;
            case 'BindGroupLayout':
              for (const entry of desc.entries)
                validateTextureFormat(self, entry.storageTexture?.format);
              break;
            case 'RenderPipeline':
              validateRenderPipelineFormats(self, desc);
              break;
            case 'RenderBundleEncoder':
              for (const format of desc.colorFormats)
                validateTextureFormat(self, format);
              validateTextureFormat(self, desc.depthStencilFormat);
              break;
            case 'QuerySet':
              if (
                desc.type === 'timestamp' &&
                !deviceFeatures(self).has('timestamp-query')
              )
                throw new TypeError('Timestamp query sets require timestamp-query');
              break;
          }
          const mappedAtCreation = kind === 'Buffer' && desc.mappedAtCreation;
          if (mappedAtCreation && desc.size % 4 !== 0)
            throw new RangeError(
              'A buffer mapped at creation must have a size divisible by 4',
            );
          const packed = a.struct(`WGPU${kind}Descriptor`, desc);
          const handle = proc(`wgpuDeviceCreate${kind}`)(p.pointer, packed.pointer);
          // Dawn returns null if it cannot allocate the initial buffer mapping.
          if (!handle && mappedAtCreation)
            throw new RangeError('Cannot allocate the initial buffer mapping');
          const object = wrap(`GPU${kind}`, handle, self, desc);
          if (a.externalTextures) peer(object).externalTextures = a.externalTextures;
          if (kind === 'Buffer') {
            const b = peer(object);
            b.mapMode = mappedAtCreation ? 2 : 0;
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
        descriptor(`GPU${kind}Descriptor`, input, (a, desc) => {
          if (kind === 'RenderPipeline') validateRenderPipelineFormats(self, desc);
          // Settle directly to preserve ordering with the device's lost promise.
          return new Promise((resolve, reject) =>
            startRequest(
              (id) =>
                native.pipeline(
                  context,
                  p.pointer,
                  id,
                  type,
                  a.struct(`WGPU${kind}Descriptor`, desc).pointer,
                ),
              (value) => {
                const result = peer(value);
                result.device = self;
                result.label = desc.label ?? '';
                resolve(value);
              },
              reject,
            ),
          );
        }),
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
      if (p.pendingMap || p.mapMode) {
        const message = 'The buffer is already mapped or pending';
        injectValidationError(peer(p.device, 'GPUDevice'), message);
        return Promise.reject(exception(message));
      }
      return new Promise<void>((resolve, reject) =>
        startRequest(
          (id) => {
            p.pendingMap = id;
            return native.map(context, p.pointer, id, mode, offset, size);
          },
          () => {
            p.pendingMap = 0;
            p.mapMode = mode;
            p.mapOffset = offset;
            p.mapSize = size;
            resolve();
          },
          (error) => {
            p.pendingMap = 0;
            reject(error);
          },
        ),
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
      if (p.pendingMap) {
        const item = pending.get(p.pendingMap);
        pending.delete(p.pendingMap);
        item?.reject(exception('Mapping was cancelled', 'AbortError'));
      }
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
    method('GPUTexture', 'destroy', (p, self) => {
      if (p.canvas && canvasOps.get(p.canvas)!.destroyCurrentTexture(self, p.pointer))
        return;
      proc('wgpuTextureDestroy')(p.pointer);
    });
    method('GPUTexture', 'createView', (p, _, input) => {
      if (input == null)
        return wrap(
          'GPUTextureView',
          proc('wgpuTextureCreateView')(p.pointer, 0n),
          p.device,
        );
      return descriptor('GPUTextureViewDescriptor', input, (a, desc) => {
        validateTextureFormat(p.device, desc.format);
        return wrap(
          'GPUTextureView',
          proc('wgpuTextureCreateView')(
            p.pointer,
            a.struct('WGPUTextureViewDescriptor', desc).pointer,
          ),
          p.device,
          desc,
        );
      });
    });
    // OffscreenCanvas dimensions can exceed the native texture's 32-bit fields.
    getter('GPUTexture', 'width', (p) =>
      p.canvas ? p.descriptor.size[0] : Number(proc('wgpuTextureGetWidth')(p.pointer)),
    );
    getter('GPUTexture', 'height', (p) =>
      p.canvas ? p.descriptor.size[1] : Number(proc('wgpuTextureGetHeight')(p.pointer)),
    );
    for (const [name, nativeName] of Object.entries({
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
      let retained: object[] | undefined;
      const list = sequence(
        commands,
        hasVideoSources
          ? (value) => {
              const command = peer(value, 'GPUCommandBuffer');
              if (command.externalTextures) (retained ??= []).push(value);
              return command.pointer;
            }
          : commandBufferPointer,
      );
      const a = arena();
      try {
        proc('wgpuQueueSubmit')(p.pointer, list.length, a.array('pointer', list));
        // Dawn consumes command buffers even when submission validation fails.
        if (retained)
          for (const command of retained)
            peers.get(command)!.externalTextures = undefined;
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
      Partial<
        Record<
          'rgba8unorm' | 'rgba16float',
          { width: number; height: number; texture: any }
        >
      >
    >();
    const createTexture = classes.GPUDevice.prototype.createTexture;
    const destroyTexture = classes.GPUTexture.prototype.destroy;
    const srgbToP3 = [
      0.82246197, 0.0331942, 0.01708263, 0.17753803, 0.9668058, 0.07239744, 0, 0,
      0.91051993,
    ];
    const p3ToSrgb = [
      1.22494018, -0.04205695, -0.01963755, -0.22494018, 1.04205695, -0.07863605, 0, 0,
      1.0982736,
    ];
    const decodeSrgb = [2.4, 1 / 1.055, 0.055 / 1.055, 1 / 12.92, 0.04045, 0, 0];
    const encodeSrgb = [1 / 2.4, 1.055 ** 2.4, 0, 12.92, 0.0031308, -0.055, 0];
    function validateExternalCopyFormat(queue: Peer, texture: object) {
      const format = peer(texture, 'GPUTexture').descriptor.format;
      // Dawn's browser copy also accepts snorm, which WebGPU excludes.
      if (!format.endsWith('snorm')) return true;
      injectValidationError(
        peer(queue.device, 'GPUDevice'),
        'External images cannot be copied to signed-normalized textures',
      );
      return false;
    }
    function uploadExternalPixels(
      p: Peer,
      self: object,
      pixels: PixelImage,
      dest: any,
      extent: any,
      flipY: boolean,
      x = 0,
      y = 0,
    ) {
      const width = Array.isArray(extent) ? extent[0] : extent.width;
      const height = (Array.isArray(extent) ? extent[1] : extent.height) ?? 1;
      const layers =
        (Array.isArray(extent) ? extent[2] : extent.depthOrArrayLayers) ?? 1;
      if (x + width > pixels.width || y + height > pixels.height || layers > 1)
        throw exception('The copy exceeds the source image');
      if (!validateExternalCopyFormat(p, dest.texture)) return;
      const fp16 = pixels.pixelFormat === 'rgba-float16';
      const format = fp16 ? 'rgba16float' : 'rgba8unorm';
      const bytesPerPixel = fp16 ? 8 : 4;
      let staging = uploads.get(self);
      if (!staging) uploads.set(self, (staging = {}));
      let upload = staging[format];
      if (!upload || upload.width < width || upload.height < height) {
        if (upload) destroyTexture.call(upload.texture);
        upload = {
          width: Math.max(1, width),
          height: Math.max(1, height),
          texture: createTexture.call(p.device, {
            size: [Math.max(1, width), Math.max(1, height)],
            format,
            usage: 7,
          }),
        };
        staging[format] = upload;
      }
      const a = arena();
      try {
        const stagingImage = a.struct('WGPUTexelCopyTextureInfo', {
          texture: upload.texture,
        });
        if (width && height && layers) {
          const data = byteRange(pixels.data, 0, undefined);
          const layout = a.struct('WGPUTexelCopyBufferLayout', {
            offset: (y * pixels.width + x) * bytesPerPixel,
            bytesPerRow: pixels.width * bytesPerPixel,
          });
          proc('wgpuQueueWriteTexture')(
            p.pointer,
            stagingImage.pointer,
            data,
            data.byteLength,
            layout.pointer,
            a.struct('WGPUExtent3D', [width, height, 1]).pointer,
          );
        }
        const conversion = (pixels.colorSpace ?? 'srgb') !== dest.colorSpace;
        const options = a.struct('WGPUCopyTextureForBrowserOptions', {
          flipY,
          srcAlphaMode: pixels.premultiplied ? 'premultiplied' : 'unpremultiplied',
          dstAlphaMode: dest.premultipliedAlpha ? 'premultiplied' : 'unpremultiplied',
          needsColorSpaceConversion: conversion,
          ...(conversion
            ? {
                srcTransferFunctionParameters: decodeSrgb,
                conversionMatrix:
                  dest.colorSpace === 'display-p3' ? srgbToP3 : p3ToSrgb,
                dstTransferFunctionParameters: encodeSrgb,
              }
            : {}),
        });
        proc('wgpuQueueCopyTextureForBrowser')(
          p.pointer,
          stagingImage.pointer,
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
        const x =
          (Array.isArray(source.origin) ? source.origin[0] : source.origin.x) ?? 0;
        const y =
          (Array.isArray(source.origin) ? source.origin[1] : source.origin.y) ?? 0;
        const frame = video.frame(source.source);
        if (frame) {
          const frameHandle = liveVideoHandle(frame);
          const { displayWidth, displayHeight } = frame.info;
          const width = Array.isArray(extent) ? extent[0] : extent.width;
          const height = (Array.isArray(extent) ? extent[1] : extent.height) ?? 1;
          const layers =
            (Array.isArray(extent) ? extent[2] : extent.depthOrArrayLayers) ?? 1;
          if (x + width > displayWidth || y + height > displayHeight || layers > 1)
            throw exception('The copy exceeds the source video frame');
          if (!validateExternalCopyFormat(p, dest.texture)) return;
          const a = arena();
          let handle = 0n;
          try {
            handle = importVideo(
              peer(p.device, 'GPUDevice').pointer,
              frameHandle,
              dest.colorSpace,
            );
            const copy = a.struct('WGPUImageCopyExternalTexture', {
              origin: [x, y, 0],
              naturalSize: { width: displayWidth, height: displayHeight },
            });
            copy.value.externalTexture = handle;
            proc('wgpuQueueCopyExternalTextureForBrowser')(
              p.pointer,
              copy.pointer,
              a.struct('WGPUTexelCopyTextureInfo', dest).pointer,
              a.struct('WGPUExtent3D', extent).pointer,
              a.struct('WGPUCopyTextureForBrowserOptions', {
                flipY: source.flipY,
                dstAlphaMode: dest.premultipliedAlpha
                  ? 'premultiplied'
                  : 'unpremultiplied',
              }).pointer,
            );
          } finally {
            if (handle) proc('wgpuExternalTextureRelease')(handle);
            a.releaseAll();
          }
          return;
        }
        const pixels = images().read(source.source);
        uploadExternalPixels(p, self, pixels, dest, extent, source.flipY, x, y);
      },
    );
    if (worker || canvasHost.hasSources) {
      const elementImageMethods = worker
        ? ['drawElementImageToTexture']
        : ['copyElementImageToTexture', 'drawElementImageToTexture'];
      for (const name of elementImageMethods) {
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
            const pixels =
              (legacy ? undefined : images().readElementImage(source)) ??
              canvasHost.sourcePixels(source);
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
              data === pixels.data ? pixels : { ...pixels, width, height, data },
              dest,
              [width, height, 1],
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
    ] as const) {
      const finish = methodName === 'finish';
      const type = finish
        ? 'GPUCommandBufferDescriptor'
        : `GPU${resultKind.replace('Encoder', 'Descriptor')}`;
      const nativeName = `wgpuCommandEncoder${methodName[0]!.toUpperCase()}${methodName.slice(1)}`;
      method('GPUCommandEncoder', methodName, (p, _, input) => {
        const result =
          finish && input == null
            ? wrap('GPUCommandBuffer', proc(nativeName)(p.pointer, 0n), p.device)
            : descriptor(type, input, (a, desc) =>
                wrap(
                  `GPU${resultKind}`,
                  proc(nativeName)(p.pointer, a.struct(`W${type}`, desc).pointer),
                  p.device,
                  desc,
                ),
              );
        if (finish) moveExternalTextures(p, result);
        else if (hasVideoSources) peer(result).commandEncoder = p;
        return result;
      });
    }
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
          const binding = group == null ? undefined : peer(group, 'GPUBindGroup');
          const handle = binding?.pointer ?? 0n;
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
          if (binding?.externalTextures)
            retainExternalTextures(p.commandEncoder ?? p, binding.externalTextures);
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
        method(`GPU${kind}`, 'end', (p) => {
          proc(`wgpu${kind}End`)(p.pointer);
          if (p.commandEncoder) p.commandEncoder = undefined;
        });
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
      descriptor('GPURenderBundleDescriptor', input, (a, desc) => {
        const result = wrap(
          'GPURenderBundle',
          proc('wgpuRenderBundleEncoderFinish')(
            p.pointer,
            a.struct('WGPURenderBundleDescriptor', desc).pointer,
          ),
          p.device,
          desc,
        );
        moveExternalTextures(p, result);
        return result;
      }),
    );
    const renderBundlePointer = (value: unknown) => pointer(value, 'GPURenderBundle');
    method('GPURenderPassEncoder', 'executeBundles', (p, _, input) => {
      let retained: object[] | undefined;
      const list = sequence(
        input,
        hasVideoSources
          ? (value) => {
              const bundle = peer(value, 'GPURenderBundle');
              if (bundle.externalTextures) (retained ??= []).push(value);
              return bundle.pointer;
            }
          : renderBundlePointer,
      );
      const a = arena();
      try {
        proc('wgpuRenderPassEncoderExecuteBundles')(
          p.pointer,
          list.length,
          a.array('pointer', list),
        );
        if (retained)
          for (const bundle of retained)
            retainExternalTextures(
              p.commandEncoder ?? p,
              peers.get(bundle)!.externalTextures!,
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
    const nativeCanvasDimension = (value: number) => Math.min(value, 0xffffffff);
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
          resize: (width, height) => this.#resize(width, height),
          close: () => this.#close(),
          device: () => this.#configuration?.device,
          lose: () => this.#lose(),
          destroyCurrentTexture: (texture, handle) => {
            if (this.#lost || this.#current !== texture) return false;
            check(native.canvas_destroy_texture(this.#surface, handle));
            return true;
          },
          snapshot: (transfer) => images().fromPixels(this.#snapshotPixels(transfer)),
          captureEncoding: () => ({
            pixels: this.#snapshotPixels(false),
            extended: this.#configuration?.toneMapping.mode === 'extended',
          }),
        });
        canvasContexts.add(new WeakRef(this));
      }
      get canvas() {
        return this.#canvas;
      }
      #snapshotPixels(transfer: boolean): PixelImage {
        if (!open) throw exception('The WebGPU session closed', 'InvalidStateError');
        const width = this.canvas.width,
          height = this.canvas.height;
        if (!width || !height)
          throw exception('Cannot capture an empty canvas', 'IndexSizeError');
        const config = this.#configuration;
        const fp16 = config?.format === 'rgba16float';
        const bytesPerPixel = fp16 ? 8 : 4;
        if (width * height > Math.floor(0x7fffffff / bytesPerPixel))
          throw new RangeError('Canvas snapshot is too large');
        const data = new Uint8Array(width * height * bytesPerPixel);
        if (config && !this.#lost)
          check(
            native.canvas_readback(
              this.#surface,
              data,
              data.byteLength,
              Number(transfer),
            ),
          );
        else if (config?.alphaMode === 'opaque') {
          // Device loss skips readback but still requires configured opaque alpha.
          if (fp16) {
            const components = new Uint16Array(data.buffer);
            for (let i = 3; i < components.length; i += 4) components[i] = 0x3c00;
          } else {
            for (let i = 3; i < data.length; i += 4) data[i] = 255;
          }
        }
        if (transfer) this.#expire();
        return {
          width,
          height,
          data,
          colorSpace: config?.colorSpace ?? 'srgb',
          pixelFormat: fp16 ? 'rgba-float16' : 'rgba-unorm8',
          premultiplied: config?.alphaMode === 'premultiplied',
        };
      }
      configure(input: unknown) {
        if (!open) throw exception('The WebGPU session closed', 'InvalidStateError');
        const config = convert('GPUCanvasConfiguration', input, pointer);
        // Required features are checked before the canvas format and usage.
        validateTextureFormat(config.device, config.format);
        for (const format of config.viewFormats)
          validateTextureFormat(config.device, format);
        if (!['bgra8unorm', 'rgba8unorm', 'rgba16float'].includes(config.format))
          throw new TypeError(`Unsupported canvas texture format: ${config.format}`);
        if (config.usage & constantGroups.GPUTextureUsage.TRANSIENT_ATTACHMENT)
          throw new TypeError('Canvas textures cannot use TRANSIENT_ATTACHMENT');
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
          const a = arena();
          try {
            const desc = this.#textureDescriptor(config);
            desc.size = desc.size.map(nativeCanvasDimension);
            check(
              native.canvas_configure(
                this.#surface,
                pointer(config.device, 'GPUDevice'),
                a.struct('WGPUTextureDescriptor', desc).pointer,
                Number(config.alphaMode === 'opaque'),
                Number(config.colorSpace === 'display-p3'),
                Number(config.toneMapping.mode === 'extended'),
              ),
            );
          } finally {
            a.releaseAll();
          }
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
      #textureDescriptor(config: any) {
        return {
          size: [this.canvas.width, this.canvas.height, 1],
          format: config.format,
          usage: config.usage,
          viewFormats: config.viewFormats,
        };
      }
      getCurrentTexture() {
        if (!open || !this.#configuration)
          throw exception('The canvas is not configured', 'InvalidStateError');
        if (!this.#current) {
          const config = this.#configuration;
          const desc = this.#textureDescriptor(config);
          // Dawn creates a real error texture on a lost device, with the full
          // descriptor and ordinary GPUTexture ownership, without surface storage.
          if (this.#lost) {
            this.#current = createTexture.call(config.device, {
              ...desc,
              size: desc.size.map(nativeCanvasDimension),
            });
            peer(this.#current).descriptor = desc;
          } else {
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
        proc('wgpuTextureDestroy')(peer(this.#current).pointer);
        this.#current = null;
      }
      #resize(width: number, height: number) {
        try {
          if (this.#configuration && !this.#lost)
            native.canvas_resize(
              this.#surface,
              nativeCanvasDimension(width),
              nativeCanvasDimension(height),
            );
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
      const canvasContext = new GPUCanvasContext(secret, canvas, target);
      const operations = canvasOps.get(canvasContext)!;
      function capture(type = 'image/png', quality = 0.92) {
        type = String(type).toLowerCase();
        if (!['image/png', 'image/jpeg', 'image/webp'].includes(type))
          type = 'image/png';
        if (!Number.isFinite(quality) || quality < 0 || quality > 1) quality = 0.92;
        const { pixels, extended } = operations.captureEncoding();
        const fp16 = pixels.pixelFormat === 'rgba-float16';
        const p3 = pixels.colorSpace === 'display-p3';
        const args =
          type !== 'image/webp' && (fp16 || p3)
            ? [
                pixels.data,
                pixels.data.byteLength,
                pixels.width,
                pixels.height,
                Number(fp16),
                Number(p3),
                Number(pixels.premultiplied),
                type === 'image/jpeg' ? 1 : fp16 && extended ? 2 : 0,
                quality,
              ]
            : null;
        return { type, quality, pixels, args };
      }
      return {
        getContext: () => canvasContext,
        resize: (width, height) => operations.resize(width, height),
        flush: () => operations.flush(),
        snapshot: () => operations.snapshot(false),
        async convertToBlob(options) {
          const { type, quality, pixels, args } = capture(
            options?.type,
            Number(options?.quality ?? 0.92),
          );
          if (!args) return images().encode(pixels, type, quality);
          return request((id) => native.encode_image_async(context, id, ...args)).then(
            (bytes) => new g.Blob([bytes], { type }),
          );
        },
        toDataURL(requestedType, requestedQuality) {
          const { type, quality, pixels, args } = capture(
            requestedType,
            requestedQuality,
          );
          if (!args) return images().dataURL(pixels, type, quality);
          const encoded = native.encode_image(...args);
          if (!encoded) return 'data:,';
          try {
            const data = Buffer.from(copyEncodedImage(encoded)).toString('base64');
            return `data:${type};base64,${data}`;
          } finally {
            native.encoded_image_release(encoded);
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
        video.close();
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
          if (p.commandEncoder) p.commandEncoder = undefined;
          if (p.externalTextures) p.externalTextures = undefined;
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
    startupVideo?.close();
    if (startupNotify) library.unregisterCallback(startupNotify);
    if (startupContext) native.release_context(startupContext);
    library.close();
    throw error;
  }
}
