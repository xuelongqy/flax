import type { EventTarget, Event, DOMExceptionConstructor } from './events.js';
import { installCanvasDom, type CanvasElement } from './canvas-dom.js';
import { imageHost, type ImageBitmap } from './images.js';

export interface CanvasContextMap {
  bitmaprenderer: ImageBitmapRenderingContext;
}
export interface CanvasContextOptionsMap {
  bitmaprenderer: { alpha?: boolean };
}
export interface ImageBitmapRenderingContext {
  readonly canvas: OffscreenCanvas;
  transferFromImageBitmap(bitmap: ImageBitmap | null): void;
}
export interface CanvasImageBitmap {
  readonly width: number;
  readonly height: number;
  close(): void;
}
export interface CanvasBlob {
  readonly type: string;
  arrayBuffer(): Promise<ArrayBuffer>;
}
export interface OffscreenCanvas extends CanvasElement {
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

/** @internal A context provider owns its renderer; Core owns the canvas. */
export interface CanvasBackend {
  getContext(options?: unknown): object | null;
  resize(width: number, height: number): void;
  convertToBlob(options?: { type?: string; quality?: number }): Promise<CanvasBlob>;
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
  mode: string | null;
  backend?: CanvasBackend;
  backends: Map<string, CanvasBackend>;
};
const hostKey = Symbol.for('flax.canvas.host');
const modes = new Set(['2d', 'bitmaprenderer', 'webgl', 'webgl2', 'webgpu']);

export interface CanvasHost {
  register(mode: string, factory: Factory): () => void;
  backend(canvas: object, mode?: string): CanvasBackend | undefined;
  target(canvas: object): object;
  hold(view: object, canvas: object): void;
  held(view: object): object | undefined;
  isCanvas(value: unknown): value is OffscreenCanvas;
  present(): void;
  receive(target: object, event: Record<string, unknown>): boolean;
  close(): void;
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
): CanvasHost {
  const states = new WeakMap<object, State>();
  const providers = new Map<string, Factory>();
  const holds = new WeakMap<object, object>();
  const resources: { owner: WeakRef<object>; target: object }[] = [];
  let open = true;
  function state(canvas: object): State {
    if (!open) throw new Exception('The session is closed', 'InvalidStateError');
    const value = states.get(canvas);
    if (!value) throw new TypeError('Illegal OffscreenCanvas invocation');
    return value;
  }
  function sweep() {
    for (let i = resources.length - 1; i >= 0; i--) {
      const item = resources[i]!;
      if (item.owner.deref() !== undefined) continue;
      resources.splice(i, 1);
      call('canvasRelease', item.target);
    }
  }
  let dom: ReturnType<typeof installCanvasDom>;
  interface HostCanvas extends OffscreenCanvas {}
  class HostCanvas extends EventTargetClass {
    constructor(width: number, height: number) {
      super();
      const w = dimension(width),
        h = dimension(height);
      if (!open) throw new Exception('The session is closed', 'InvalidStateError');
      sweep();
      // Global-only callers also need the generated target wrapper before Dart returns it.
      (
        global as { __flaxModules?: { require(name: string): unknown } }
      ).__flaxModules?.require('@flax/core/navigation');
      const target = call('canvasCreate', w, h) as object;
      states.set(this, {
        width: w,
        height: h,
        target,
        mode: null,
        backends: new Map(),
      });
      Object.defineProperty(this, hostKey, { value: host });
      resources.push({ owner: new WeakRef(this), target });
      dom.decorate(this as unknown as OffscreenCanvas, target);
    }
    protected override listenersChanged(_type: string) {
      dom.observe(this);
    }
    get width() {
      return state(this).width;
    }
    set width(value: number) {
      this.resize(dimension(value), this.height);
    }
    get height() {
      return state(this).height;
    }
    set height(value: number) {
      this.resize(this.width, dimension(value));
    }
    private resize(width: number, height: number) {
      const s = state(this);
      call('canvasResize', s.target, width, height);
      s.width = width;
      s.height = height;
      for (const backend of s.backends.values()) backend.resize(width, height);
    }
    getContext(type: string, options?: unknown): object | null {
      const mode = String(type);
      if (!modes.has(mode)) throw new TypeError('Invalid OffscreenCanvas context type');
      const s = state(this);
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
      const s = state(this);
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
      const s = state(this);
      if (!s.mode)
        throw new Exception('The canvas needs a context', 'InvalidStateError');
      return s.backend!.transferToImageBitmap();
    }
    /** @internal Retained for the existing Canvas encoder fixtures. */
    flush() {
      state(this).backend?.flush?.();
    }
    /** @internal Existing Canvas pixel-read convenience. */
    readPixels(sx: number, sy: number, sw: number, sh: number): Promise<unknown> {
      const backend = state(this).backend;
      if (!backend?.readPixels)
        return Promise.reject(
          new Exception('Pixel reads are unavailable', 'NotSupportedError'),
        );
      return backend.readPixels(sx, sy, sw, sh);
    }
  }
  class HostOffscreenCanvas extends HostCanvas {}
  class HostHTMLCanvasElement extends HostCanvas {
    constructor() {
      super(300, 150);
      dom.observe(this);
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
      const images = imageHost(global);
      return images.dataURL(images.read(this), type, quality);
    }
  }
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
    register(mode, factory) {
      if (!open || !modes.has(mode) || providers.has(mode))
        throw new TypeError('Duplicate or invalid canvas provider');
      providers.set(mode, factory);
      return () => {
        if (providers.get(mode) === factory) providers.delete(mode);
      };
    },
    backend(canvas, mode) {
      const s = state(canvas);
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
      return dom.receive(target, event);
    },
    isCanvas(value): value is OffscreenCanvas {
      return typeof value === 'object' && value !== null && states.has(value);
    },
    present() {
      if (!open) return;
      for (const item of resources) {
        const owner = item.owner.deref();
        if (owner) states.get(owner)?.backend?.flush?.();
      }
      sweep();
    },
    close() {
      open = false;
      providers.clear();
      dom.close();
      resources.length = 0;
    },
  };
  Object.defineProperty(global, 'OffscreenCanvas', {
    value: HostOffscreenCanvas,
    configurable: true,
    writable: true,
  });
  Object.defineProperty(global, 'HTMLCanvasElement', {
    value: HostHTMLCanvasElement,
    configurable: true,
    writable: true,
  });
  Object.defineProperty(global, '__flaxCanvasHost', {
    value: host,
    configurable: true,
  });
  return host;
}
