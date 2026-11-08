import type { EventTarget, Event, DOMExceptionConstructor } from './events.js';
import type { Blob } from './data.js';
import { installCanvasDom, type CanvasElement } from './canvas-dom.js';
import { imageHost, type ImageBitmap, type PixelImage } from './images.js';
import type { CanvasContextMap, CanvasContextOptionsMap } from './canvas-contexts.js';
export type { CanvasContextMap, CanvasContextOptionsMap } from './canvas-contexts.js';
export interface ImageBitmapRenderingContext {
  readonly canvas: OffscreenCanvas;
  transferFromImageBitmap(bitmap: ImageBitmap | null): void;
}
export interface CanvasImageBitmap {
  readonly width: number;
  readonly height: number;
  close(): void;
}
export type CanvasBlob = Blob;
export interface OffscreenCanvas extends EventTarget {
  width: number;
  height: number;
  getContext<K extends keyof CanvasContextMap>(
    type: K,
    options?: K extends keyof CanvasContextOptionsMap
      ? CanvasContextOptionsMap[K]
      : unknown,
  ): CanvasContextMap[K] | null;
  getContext(type: string, options?: unknown): object | null;
  convertToBlob(options?: { type?: string; quality?: number }): Promise<CanvasBlob>;
  transferToImageBitmap(): CanvasImageBitmap;
}
export interface OffscreenCanvasConstructor {
  new (width: number, height: number): OffscreenCanvas;
}

/** @internal A context provider owns its renderer; Core owns the canvas. */
export interface CanvasBackend {
  getContext(options?: unknown): object | null;
  resize(width: number, height: number): void;
  convertToBlob(options?: { type?: string; quality?: number }): Promise<CanvasBlob>;
  toDataURL?(type?: string, quality?: number): string;
  transferToImageBitmap(): CanvasImageBitmap;
  flush?(): void;
  readPixels?(sx: number, sy: number, sw: number, sh: number): Promise<unknown>;
  snapshot?(): ImageBitmap;
}
type Call = (operation: string, ...args: unknown[]) => unknown;
type Factory = (canvas: OffscreenCanvas, target: object) => CanvasBackend;
type State = {
  width: number;
  height: number;
  target: object;
  targetOwner?: object;
  mode: string | null;
  backend?: CanvasBackend;
  backends: Map<string, CanvasBackend>;
  token: ArrayBuffer | undefined;
  placeholder?: boolean;
  html?: boolean;
};
const hostKey = Symbol.for('flax.canvas.host');
const modes = new Set(['2d', 'bitmaprenderer', 'webgl', 'webgl2', 'webgpu']);

export interface CanvasHost {
  /** @internal A native provider owns leases; Core owns their transfer semantics. */
  registerTransfers(provider: CanvasTransferProvider): () => void;
  transferToken(canvas: object): ArrayBuffer | undefined;
  prepareTransfers(list: unknown[]): CanvasTransfers;
  restoreTransfer(token: ArrayBuffer): OffscreenCanvas;
  register(mode: string, factory: Factory): () => void;
  backend(canvas: object, mode?: string): CanvasBackend | undefined;
  target(canvas: object): object;
  hold(view: object, canvas: object): void;
  held(view: object): object | undefined;
  isCanvas(value: unknown): value is OffscreenCanvas;
  present(): void;
  receive(target: object, event: Record<string, unknown>): boolean;
  configureSources(names: string[]): void;
  updateSource(
    name: string,
    width: number,
    height: number,
    buffer: ArrayBuffer | null,
  ): void;
  sourcePixels(value: unknown): PixelImage;
  readonly hasSources: boolean;
  close(): void;
}

export interface CanvasTransferProvider {
  create(canvas: object, target: object, width: number, height: number): ArrayBuffer;
  adopt(canvas: object, target: object, token: ArrayBuffer): void;
  dimensions(token: ArrayBuffer): [number, number];
  resize(token: ArrayBuffer, width: number, height: number): void;
}
export interface CanvasTransfers {
  buffers: unknown[];
  serialize(value: object): unknown[] | undefined;
  validate(): void;
}

export function canvasHost<T = CanvasHost>(value: object): T {
  const host = (value as { [hostKey]?: CanvasHost })[hostKey];
  if (!host?.isCanvas(value)) throw new TypeError('Expected an OffscreenCanvas');
  return host as T;
}

function dimension(value: unknown): number {
  const number = +(value as number);
  if (
    !Number.isFinite(number) ||
    number < 0 ||
    Math.trunc(number) > Number.MAX_SAFE_INTEGER
  )
    throw new TypeError('Invalid canvas dimension');
  return Math.trunc(number);
}

export function installCanvasHost(
  global: typeof globalThis,
  call: Call,
  EventTargetClass: typeof EventTarget,
  Exception: DOMExceptionConstructor,
  EventClass: typeof Event = global.Event ?? globalThis.Event,
  worker = false,
): CanvasHost {
  const states = new WeakMap<object, State>();
  const providers = new Map<string, Factory>();
  const holds = new WeakMap<object, object>();
  const resources: { owner: WeakRef<object>; target?: object }[] = [];
  let transfers: CanvasTransferProvider | undefined;
  const transferVersion = (global as any).__flaxNativeWorker?.canvasTransferVersion;
  const adoption = {};
  const bufferLength = Object.getOwnPropertyDescriptor(
    (global.ArrayBuffer ?? ArrayBuffer).prototype,
    'byteLength',
  )!.get!;
  const apply = Reflect.apply;
  const byteLength = (buffer: ArrayBuffer) => apply(bufferLength, buffer, []) as number;
  let open = true;
  function state(canvas: object): State {
    if (!open) throw new Exception('The session is closed', 'InvalidStateError');
    const value = states.get(canvas);
    if (!value) throw new TypeError('Illegal OffscreenCanvas invocation');
    return value;
  }
  const detached = (s: State) => s.token !== undefined && byteLength(s.token) === 0;
  function attached(canvas: object): State {
    const s = state(canvas);
    if (detached(s))
      throw new Exception('The canvas was transferred', 'InvalidStateError');
    return s;
  }
  function transferable(canvas: object): State {
    const s = attached(canvas);
    if (s.html) throw new Exception('Expected an OffscreenCanvas', 'DataCloneError');
    if (s.mode !== null)
      throw new Exception(
        'A canvas with a context cannot be transferred',
        'InvalidStateError',
      );
    if (!transfers || transferVersion !== 1)
      throw new Exception(
        'Canvas transfer requires the maintained native provider',
        'NotSupportedError',
      );
    return s;
  }
  function sweep() {
    for (let i = resources.length - 1; i >= 0; i--) {
      const item = resources[i]!;
      if (item.owner.deref() !== undefined) continue;
      resources.splice(i, 1);
      if (item.target) call('canvasRelease', item.target);
    }
  }
  let dom: ReturnType<typeof installCanvasDom> | undefined;
  interface HostCanvas extends OffscreenCanvas {}
  class HostCanvas extends EventTargetClass {
    constructor(
      width: number,
      height: number,
      inherited?: State,
      key = undefined as object | undefined,
    ) {
      super();
      const w = dimension(width),
        h = dimension(height);
      if (!open) throw new Exception('The session is closed', 'InvalidStateError');
      sweep();
      // Global-only callers also need the generated target wrapper before Dart returns it.
      if (!worker && key !== adoption)
        (
          global as { __flaxModules?: { require(name: string): unknown } }
        ).__flaxModules?.require('@flax/core/navigation');
      const target =
        key === adoption
          ? inherited!.target
          : worker
            ? {}
            : (call('canvasCreate', w, h) as object);
      states.set(this, {
        width: w,
        height: h,
        target,
        mode: null,
        backends: new Map(),
        token: key === adoption ? inherited!.token : undefined,
        html: false,
        placeholder: false,
      });
      Object.defineProperty(this, hostKey, { value: host });
      resources.push({
        owner: new WeakRef(this),
        ...(!worker && key !== adoption ? { target } : {}),
      });
      if (key !== adoption) dom?.decorate(this as unknown as OffscreenCanvas, target);
    }
    protected override listenersChanged(_type: string) {
      dom?.observe(this);
    }
    get width() {
      const s = state(this);
      return detached(s) ? 0 : s.token ? transfers!.dimensions(s.token)[0] : s.width;
    }
    set width(value: number) {
      this.resize(dimension(value), this.height);
    }
    get height() {
      const s = state(this);
      return detached(s) ? 0 : s.token ? transfers!.dimensions(s.token)[1] : s.height;
    }
    set height(value: number) {
      this.resize(this.width, dimension(value));
    }
    private resize(width: number, height: number) {
      const s = attached(this);
      if (s.placeholder)
        throw new Exception(
          'The canvas is an offscreen placeholder',
          'InvalidStateError',
        );
      if (s.token) transfers!.resize(s.token, width, height);
      else if (!worker) call('canvasResize', s.target, width, height);
      s.width = width;
      s.height = height;
      for (const backend of s.backends.values()) backend.resize(width, height);
    }
    getContext(type: string, options?: unknown): object | null {
      const mode = String(type);
      if (!modes.has(mode)) throw new TypeError('Invalid OffscreenCanvas context type');
      const s = attached(this);
      if (s.placeholder) return null;
      if (s.mode !== null) return s.mode === mode ? s.backend!.getContext() : null;
      const factory = providers.get(mode);
      if (!factory) return null;
      let backend = s.backends.get(mode);
      if (!backend) {
        backend = factory(this as OffscreenCanvas, s.target);
        s.backends.set(mode, backend);
      }
      const context = backend.getContext(options);
      if (context !== null) {
        s.backend = backend;
        s.mode = mode;
      }
      return context;
    }
    convertToBlob(options?: { type?: string; quality?: number }): Promise<CanvasBlob> {
      const s = attached(this);
      // Blank-canvas serialization uses the installed image backend without selecting a context.
      const backend = s.backend ?? host.backend(this, '2d');
      if (!backend)
        try {
          const images = imageHost(global);
          return images.encode(
            images.read(this),
            options?.type ?? 'image/png',
            options?.quality,
          );
        } catch (error) {
          return Promise.reject(error);
        }
      return backend.convertToBlob(options);
    }
    transferToImageBitmap(): CanvasImageBitmap {
      const s = attached(this);
      if (!s.mode)
        throw new Exception('The canvas needs a context', 'InvalidStateError');
      return s.backend!.transferToImageBitmap();
    }
    /** @internal Retained for the existing Canvas encoder fixtures. */
    flush() {
      attached(this).backend?.flush?.();
    }
    /** @internal Existing Canvas pixel-read convenience. */
    readPixels(sx: number, sy: number, sw: number, sh: number): Promise<unknown> {
      const backend = attached(this).backend;
      if (!backend?.readPixels)
        return Promise.reject(
          new Exception('Pixel reads are unavailable', 'NotSupportedError'),
        );
      return backend.readPixels(sx, sy, sw, sh);
    }
  }
  class HostOffscreenCanvas extends HostCanvas {}
  interface HostHTMLCanvasElement extends Omit<CanvasElement, keyof EventTarget> {}
  class HostHTMLCanvasElement extends HostCanvas {
    constructor() {
      super(300, 150);
      state(this).html = true;
      dom?.observe(this);
      dom?.decorateHtml(this);
    }
    transferControlToOffscreen(): OffscreenCanvas {
      const s = attached(this);
      if (s.mode !== null || s.placeholder)
        throw new Exception(
          'The canvas already has a context or placeholder',
          'InvalidStateError',
        );
      if (!transfers || transferVersion !== 1)
        throw new Exception(
          'Canvas transfer requires the maintained native provider',
          'NotSupportedError',
        );
      const result = new HostOffscreenCanvas(s.width, s.height, s, adoption);
      const output = state(result);
      // The shared target is released through the HTML wrapper's resource record.
      output.targetOwner = this;
      output.token = transfers.create(this, s.target, s.width, s.height);
      s.placeholder = true;
      return result as OffscreenCanvas;
    }
    toBlob(
      callback: (blob: CanvasBlob | null) => unknown,
      type?: string,
      quality?: number,
    ): void {
      if (typeof callback !== 'function') throw new TypeError('Expected a callback');
      void this.convertToBlob({
        ...(type === undefined ? {} : { type }),
        ...(quality === undefined ? {} : { quality }),
      }).then(callback, () => callback(null));
    }
    toDataURL(type?: string, quality?: number): string {
      if (!this.width || !this.height) return 'data:,';
      const backend = attached(this).backend;
      if (backend?.toDataURL) return backend.toDataURL(type, quality);
      const images = imageHost(global);
      return images.dataURL(images.read(this), type, quality);
    }
  }
  if (!worker)
    dom = installCanvasDom(
      global,
      call,
      () => new HostHTMLCanvasElement(),
      EventTargetClass,
      Exception,
      EventClass,
    );
  Object.defineProperty(HostOffscreenCanvas, 'name', { value: 'OffscreenCanvas' });
  const host: CanvasHost = {
    get hasSources() {
      return dom?.hasSources ?? false;
    },
    configureSources(names) {
      dom?.configureSources(names);
    },
    updateSource(name, width, height, buffer) {
      dom?.updateSource(name, width, height, buffer);
    },
    sourcePixels(value) {
      if (!dom) throw new TypeError('Widget canvases are unavailable');
      return dom.sourcePixels(value);
    },
    registerTransfers(provider) {
      if (transfers) throw new TypeError('Duplicate canvas transfer provider');
      transfers = provider;
      return () => {
        if (transfers === provider) transfers = undefined;
      };
    },
    transferToken(canvas) {
      const s = attached(canvas);
      if (!s.token && worker) {
        if (!transfers)
          throw new Exception('No native canvas provider', 'NotSupportedError');
        s.token = transfers.create(canvas, s.target, s.width, s.height);
      }
      return s.token;
    },
    prepareTransfers(list) {
      const selected = new Map<object, State>();
      const validated: State[] = [];
      const buffers = list.map((value) => {
        if (!host.isCanvas(value)) return value;
        const s = transferable(value);
        s.token ??= transfers!.create(value, s.target, s.width, s.height);
        selected.set(value, s);
        validated.push(s);
        return s.token;
      });
      return {
        buffers,
        serialize(value) {
          if (!host.isCanvas(value)) return undefined;
          const s = selected.get(value);
          if (!s)
            throw new Exception(
              'OffscreenCanvas must be transferred',
              'DataCloneError',
            );
          return ['OffscreenCanvas', s.token];
        },
        validate() {
          if (!validated.length) return;
          if (!open || !transfers)
            throw new Exception('The canvas provider closed', 'InvalidStateError');
          // Graph getters may replace collection prototypes; this phase invokes no hooks.
          for (let index = 0; index < validated.length; index++) {
            const s = validated[index]!;
            if (detached(s) || s.mode !== null)
              throw new Exception(
                'The canvas transfer state changed',
                'InvalidStateError',
              );
          }
        },
      };
    },
    restoreTransfer(token) {
      if (!transfers || !byteLength(token))
        throw new Exception(
          'Canvas transfer provider is unavailable',
          'DataCloneError',
        );
      const [width, height] = transfers.dimensions(token);
      if (!worker) {
        const canvas = new HostOffscreenCanvas(width, height);
        const s = state(canvas);
        s.token = token;
        transfers.adopt(canvas, s.target, token);
        return canvas as OffscreenCanvas;
      }
      return new HostOffscreenCanvas(
        width,
        height,
        { width, height, target: {}, mode: null, backends: new Map(), token },
        adoption,
      ) as OffscreenCanvas;
    },
    register(mode, factory) {
      if (!open || !modes.has(mode) || providers.has(mode))
        throw new TypeError('Duplicate or invalid canvas provider');
      providers.set(mode, factory);
      return () => {
        if (providers.get(mode) === factory) providers.delete(mode);
      };
    },
    backend(canvas, mode) {
      const s = attached(canvas);
      if (!mode) return s.backend;
      if (s.mode !== null && s.mode !== mode)
        throw new Exception('The canvas uses another context', 'NotSupportedError');
      let backend = s.backends.get(mode);
      const factory = providers.get(mode);
      if (!backend && factory) {
        backend = factory(canvas as OffscreenCanvas, s.target);
        s.backends.set(mode, backend);
      }
      return backend;
    },
    target(canvas) {
      return state(canvas).target;
    },
    hold(view, canvas) {
      state(canvas);
      holds.set(view, canvas);
    },
    held(view) {
      return holds.get(view);
    },
    receive(target, event) {
      return dom?.receive(target, event) ?? false;
    },
    isCanvas(value): value is OffscreenCanvas {
      return typeof value === 'object' && value !== null && states.has(value);
    },
    present() {
      if (!open) return;
      for (const item of resources) {
        const owner = item.owner.deref();
        if (owner) {
          const s = states.get(owner)!;
          if (!detached(s)) s.backend?.flush?.();
        }
      }
      sweep();
    },
    close() {
      open = false;
      providers.clear();
      dom?.close();
      resources.length = 0;
    },
  };
  Object.defineProperty(global, 'OffscreenCanvas', {
    value: HostOffscreenCanvas,
    configurable: true,
    writable: true,
  });
  if (!worker)
    Object.defineProperty(global, 'HTMLCanvasElement', {
      value: HostHTMLCanvasElement,
      configurable: true,
      writable: true,
    });
  Object.defineProperty(global, '__flaxCanvasHost', {
    value: host,
    configurable: true,
  });
  Object.defineProperty(HostCanvas.prototype, Symbol.for('flax.uncloneable'), {
    value: true,
  });
  return host;
}
