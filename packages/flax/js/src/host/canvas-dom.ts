import type { Event, EventTarget, DOMExceptionConstructor } from './events.js';
import type { OffscreenCanvas } from './canvas.js';
import type { HTMLImageElement } from './images.js';

export interface CanvasRect {
  readonly x: number;
  readonly y: number;
  readonly left: number;
  readonly top: number;
  readonly right: number;
  readonly bottom: number;
  readonly width: number;
  readonly height: number;
  toJSON(): Record<string, number>;
}
export interface CanvasStyle {
  width: string;
  height: string;
  cursor: string;
  touchAction: string;
}
export interface ResizeObserverEntry {
  readonly target: CanvasElement;
  readonly contentRect: CanvasRect;
  readonly contentBoxSize: readonly ResizeObserverSize[];
  readonly borderBoxSize: readonly ResizeObserverSize[];
  readonly devicePixelContentBoxSize: readonly ResizeObserverSize[];
}
export interface ResizeObserverSize {
  readonly inlineSize: number;
  readonly blockSize: number;
}
export interface ResizeObserver {
  observe(
    canvas: CanvasElement,
    options?: { box?: 'content-box' | 'border-box' | 'device-pixel-content-box' },
  ): void;
  unobserve(canvas: CanvasElement): void;
  disconnect(): void;
}
export type ResizeObserverCallback = (
  entries: ResizeObserverEntry[],
  observer: ResizeObserver,
) => void;
export interface CanvasDocument extends EventTarget {
  cookie: string;
  readonly defaultView: typeof globalThis;
  readonly activeElement: OffscreenCanvas | null;
  createElement(name: 'canvas'): HTMLCanvasElement;
  createElement(name: 'img'): HTMLImageElement;
  createElementNS(namespace: string, name: 'canvas'): HTMLCanvasElement;
  createElementNS(namespace: string, name: 'img'): HTMLImageElement;
  getElementById(id: string): HTMLCanvasElement | null;
  querySelector(selector: string): HTMLCanvasElement | null;
}
export type CanvasEventMap = {
  pointerdown: PointerEvent;
  pointermove: PointerEvent;
  pointerup: PointerEvent;
  pointercancel: PointerEvent;
  pointerenter: PointerEvent;
  pointerleave: PointerEvent;
  gotpointercapture: PointerEvent;
  lostpointercapture: PointerEvent;
  mousedown: MouseEvent;
  mousemove: MouseEvent;
  mouseup: MouseEvent;
  mouseenter: MouseEvent;
  mouseleave: MouseEvent;
  click: MouseEvent;
  wheel: WheelEvent;
  keydown: KeyboardEvent;
  keyup: KeyboardEvent;
  focus: Event;
  blur: Event;
};
type CanvasEventHandlers = {
  [K in keyof CanvasEventMap as `on${K}`]:
    ((event: CanvasEventMap[K]) => unknown) | null;
};
export interface CanvasElement extends EventTarget, CanvasEventHandlers {
  id: string;
  tabIndex: number;
  readonly ownerDocument: CanvasDocument;
  readonly style: CanvasStyle;
  readonly clientWidth: number;
  readonly clientHeight: number;
  readonly clientLeft: number;
  readonly clientTop: number;
  readonly isConnected: boolean;
  getBoundingClientRect(): CanvasRect;
  getRootNode(): CanvasDocument;
  focus(options?: { preventScroll?: boolean }): void;
  blur(): void;
  setPointerCapture(id: number): void;
  releasePointerCapture(id: number): void;
  hasPointerCapture(id: number): boolean;
  setAttribute(name: string, value: string): void;
  getAttribute(name: string): string | null;
  removeAttribute(name: string): void;
}
export interface HTMLCanvasElement extends OffscreenCanvas {
  toBlob(
    callback: (blob: import('./canvas.js').CanvasBlob | null) => unknown,
    type?: string,
    quality?: number,
  ): void;
  toDataURL(type?: string, quality?: number): string;
}
export type CanvasInputInit = Record<string, unknown> & {
  bubbles?: boolean;
  cancelable?: boolean;
  composed?: boolean;
};

function eventConstructors(BaseEvent: typeof Event) {
  class MouseEvent extends BaseEvent {
    readonly clientX: number;
    readonly clientY: number;
    readonly screenX: number;
    readonly screenY: number;
    readonly pageX: number;
    readonly pageY: number;
    readonly offsetX: number;
    readonly offsetY: number;
    readonly movementX: number;
    readonly movementY: number;
    readonly button: number;
    readonly buttons: number;
    readonly ctrlKey: boolean;
    readonly shiftKey: boolean;
    readonly altKey: boolean;
    readonly metaKey: boolean;
    constructor(type: string, init: CanvasInputInit = {}) {
      super(type, init);
      this.clientX = Number(init.clientX ?? 0);
      this.clientY = Number(init.clientY ?? 0);
      this.screenX = Number(init.screenX ?? 0);
      this.screenY = Number(init.screenY ?? 0);
      this.pageX = Number(init.pageX ?? this.clientX);
      this.pageY = Number(init.pageY ?? this.clientY);
      this.offsetX = Number(init.offsetX ?? 0);
      this.offsetY = Number(init.offsetY ?? 0);
      this.movementX = Number(init.movementX ?? 0);
      this.movementY = Number(init.movementY ?? 0);
      this.button = Number(init.button ?? 0);
      this.buttons = Number(init.buttons ?? 0);
      this.ctrlKey = Boolean(init.ctrlKey);
      this.shiftKey = Boolean(init.shiftKey);
      this.altKey = Boolean(init.altKey);
      this.metaKey = Boolean(init.metaKey);
    }
    get x() {
      return this.clientX;
    }
    get y() {
      return this.clientY;
    }
    getModifierState(key: string) {
      return Boolean(
        (
          {
            Control: this.ctrlKey,
            Shift: this.shiftKey,
            Alt: this.altKey,
            Meta: this.metaKey,
          } as Record<string, boolean>
        )[key],
      );
    }
  }
  class PointerEvent extends MouseEvent {
    readonly pointerId: number;
    readonly pointerType: string;
    readonly width: number;
    readonly height: number;
    readonly pressure: number;
    readonly tangentialPressure: number;
    readonly tiltX: number;
    readonly tiltY: number;
    readonly twist: number;
    readonly isPrimary: boolean;
    constructor(type: string, init: CanvasInputInit = {}) {
      super(type, init);
      this.pointerId = Number(init.pointerId ?? 0);
      this.pointerType = String(init.pointerType ?? '');
      this.width = Number(init.width ?? 1);
      this.height = Number(init.height ?? 1);
      this.pressure = Number(init.pressure ?? 0);
      this.tangentialPressure = Number(init.tangentialPressure ?? 0);
      this.tiltX = Number(init.tiltX ?? 0);
      this.tiltY = Number(init.tiltY ?? 0);
      this.twist = Number(init.twist ?? 0);
      this.isPrimary = Boolean(init.isPrimary);
    }
    getCoalescedEvents(): PointerEvent[] {
      return [];
    }
    getPredictedEvents(): PointerEvent[] {
      return [];
    }
  }
  class WheelEvent extends MouseEvent {
    static readonly DOM_DELTA_PIXEL = 0;
    static readonly DOM_DELTA_LINE = 1;
    static readonly DOM_DELTA_PAGE = 2;
    readonly deltaX: number;
    readonly deltaY: number;
    readonly deltaZ: number;
    readonly deltaMode: number;
    constructor(type: string, init: CanvasInputInit = {}) {
      super(type, init);
      this.deltaX = Number(init.deltaX ?? 0);
      this.deltaY = Number(init.deltaY ?? 0);
      this.deltaZ = Number(init.deltaZ ?? 0);
      this.deltaMode = Number(init.deltaMode ?? 0);
    }
  }
  class KeyboardEvent extends BaseEvent {
    readonly key: string;
    readonly code: string;
    readonly location: number;
    readonly repeat: boolean;
    readonly isComposing: boolean;
    readonly ctrlKey: boolean;
    readonly shiftKey: boolean;
    readonly altKey: boolean;
    readonly metaKey: boolean;
    constructor(type: string, init: CanvasInputInit = {}) {
      super(type, init);
      this.key = String(init.key ?? '');
      this.code = String(init.code ?? '');
      this.location = Number(init.location ?? 0);
      this.repeat = Boolean(init.repeat);
      this.isComposing = Boolean(init.isComposing);
      this.ctrlKey = Boolean(init.ctrlKey);
      this.shiftKey = Boolean(init.shiftKey);
      this.altKey = Boolean(init.altKey);
      this.metaKey = Boolean(init.metaKey);
    }
    getModifierState(key: string) {
      return Boolean(
        (
          {
            Control: this.ctrlKey,
            Shift: this.shiftKey,
            Alt: this.altKey,
            Meta: this.metaKey,
          } as Record<string, boolean>
        )[key],
      );
    }
  }
  return { MouseEvent, PointerEvent, WheelEvent, KeyboardEvent };
}
export type MouseEvent = InstanceType<
  ReturnType<typeof eventConstructors>['MouseEvent']
>;
export type PointerEvent = InstanceType<
  ReturnType<typeof eventConstructors>['PointerEvent']
>;
export type WheelEvent = InstanceType<
  ReturnType<typeof eventConstructors>['WheelEvent']
>;
export type KeyboardEvent = InstanceType<
  ReturnType<typeof eventConstructors>['KeyboardEvent']
>;

type Geometry = {
  left: number;
  top: number;
  width: number;
  height: number;
  connected: boolean;
  clientWidth?: number;
  clientHeight?: number;
};
type ElementState = {
  canvas: OffscreenCanvas;
  target: object;
  observed: boolean;
  id: string;
  attributes: Map<string, string>;
  style: CanvasStyle;
  geometry: Geometry;
};
type Call = (operation: string, ...args: unknown[]) => unknown;

/** A canvas host surface, not a DOM representation of the Flutter Widget tree. */
export function installCanvasDom(
  global: typeof globalThis,
  call: Call,
  create: () => HTMLCanvasElement,
  EventTarget: typeof import('./events.js').EventTarget,
  DOMException: DOMExceptionConstructor,
  Event: typeof import('./events.js').Event,
) {
  const g = global as any;
  const { MouseEvent, PointerEvent, WheelEvent, KeyboardEvent } =
    eventConstructors(Event);
  const elements = new WeakMap<object, ElementState>();
  const targets = new WeakMap<object, WeakRef<OffscreenCanvas>>();
  const registry = new Set<WeakRef<OffscreenCanvas>>();
  const active = new Map<number, OffscreenCanvas>();
  const captures = new Map<number, OffscreenCanvas>();
  const suppressedMouse = new Set<number>();
  const observers = new Set<CanvasResizeObserver>();
  let focused: OffscreenCanvas | null = null;
  let open = true,
    viewport = { width: 0, height: 0, devicePixelRatio: 1 };
  function state(canvas: object) {
    if (!open) throw new DOMException('The canvas session closed', 'InvalidStateError');
    const value = elements.get(canvas);
    if (!value) throw new TypeError('Expected a canvas from this session');
    return value;
  }
  function observe(value: ElementState) {
    if (!value.observed) {
      value.observed = true;
      call('canvasObserve', value.target);
    }
  }
  function emit(canvas: OffscreenCanvas, event: Event) {
    return EventTarget.dispatchPath(event, [canvas, document, global as any]);
  }
  function captureEvent(canvas: OffscreenCanvas, type: string, id: number) {
    emit(canvas, new PointerEvent(type, { pointerId: id, bubbles: true }));
  }
  function find(selector: (value: ElementState) => boolean): HTMLCanvasElement | null {
    for (const ref of registry) {
      const canvas = ref.deref();
      if (!canvas) {
        registry.delete(ref);
        continue;
      }
      const value = state(canvas);
      if (value.geometry.connected && selector(value))
        return canvas as HTMLCanvasElement;
    }
    return null;
  }
  const document: CanvasDocument = Object.assign(new EventTarget(), {
    defaultView: global,
    cookie: '',
    get activeElement() {
      return focused;
    },
    createElement(name: string) {
      if (String(name).toLowerCase() === 'img') return new g.Image();
      if (String(name).toLowerCase() !== 'canvas')
        throw new DOMException(
          'Only canvas and image resources are supported',
          'NotSupportedError',
        );
      return create();
    },
    createElementNS(namespace: string, name: string) {
      if (namespace !== 'http://www.w3.org/1999/xhtml')
        throw new DOMException(
          'Only HTML canvas elements are supported',
          'NotSupportedError',
        );
      return (document.createElement as (name: string) => any)(name);
    },
    getElementById(id: string) {
      return find((value) => value.id === String(id));
    },
    querySelector(selector: string) {
      if (selector === 'canvas') return find(() => true);
      if (/^#[A-Za-z_][\w-]*$/.test(selector))
        return document.getElementById(selector.slice(1));
      throw new DOMException(
        'Only canvas and #id selectors are supported',
        'NotSupportedError',
      );
    },
  });
  Object.defineProperty(document, 'activeElement', { get: () => focused });
  Object.defineProperty(document, 'cookie', {
    get: () => '',
    set() {
      throw new DOMException(
        'Document cookie storage is unavailable',
        'NotSupportedError',
      );
    },
  });
  function rect(value: Geometry): CanvasRect {
    const result = {
      x: value.left,
      y: value.top,
      left: value.left,
      top: value.top,
      right: value.left + value.width,
      bottom: value.top + value.height,
      width: value.width,
      height: value.height,
    };
    return Object.freeze({ ...result, toJSON: () => ({ ...result }) });
  }
  class CanvasResizeObserver implements ResizeObserver {
    readonly observed = new Map<CanvasElement, { box: string; last?: string }>();
    readonly pending = new Map<CanvasElement, ResizeObserverEntry>();
    queued = false;
    constructor(readonly callback: ResizeObserverCallback) {
      if (typeof callback !== 'function')
        throw new TypeError('Expected a resize callback');
    }
    observe(canvas: CanvasElement, options: { box?: string } = {}) {
      const value = state(canvas),
        box = String(options?.box ?? 'content-box');
      if (!['content-box', 'border-box', 'device-pixel-content-box'].includes(box))
        throw new TypeError('Invalid resize box');
      observe(value);
      observers.add(this);
      if (this.observed.get(canvas)?.box !== box) this.observed.set(canvas, { box });
      this.update(canvas);
    }
    unobserve(canvas: CanvasElement) {
      state(canvas);
      this.observed.delete(canvas);
      this.pending.delete(canvas);
      if (!this.observed.size) observers.delete(this);
    }
    disconnect() {
      this.observed.clear();
      this.pending.clear();
      observers.delete(this);
    }
    update(canvas: CanvasElement) {
      const item = this.observed.get(canvas);
      if (!item) return;
      const geometry = state(canvas).geometry;
      const width = geometry.connected ? (geometry.clientWidth ?? geometry.width) : 0;
      const height = geometry.connected
        ? (geometry.clientHeight ?? geometry.height)
        : 0;
      const physicalWidth = Math.round(width * viewport.devicePixelRatio),
        physicalHeight = Math.round(height * viewport.devicePixelRatio);
      const key =
        item.box === 'device-pixel-content-box'
          ? physicalWidth + ',' + physicalHeight
          : width + ',' + height;
      if (item.last === key) return;
      item.last = key;
      const logical = Object.freeze([{ inlineSize: width, blockSize: height }]);
      this.pending.set(
        canvas,
        Object.freeze({
          target: canvas,
          contentRect: rect({
            left: 0,
            top: 0,
            width,
            height,
            connected: geometry.connected,
          }),
          contentBoxSize: logical,
          borderBoxSize: logical,
          devicePixelContentBoxSize: Object.freeze([
            { inlineSize: physicalWidth, blockSize: physicalHeight },
          ]),
        }),
      );
      if (this.queued) return;
      this.queued = true;
      (g.queueMicrotask ?? globalThis.queueMicrotask)(() => {
        this.queued = false;
        if (!open || !this.pending.size) return;
        const entries = [...this.pending.values()];
        this.pending.clear();
        this.callback(entries, this);
      });
    }
  }
  Object.defineProperty(CanvasResizeObserver, 'name', { value: 'ResizeObserver' });
  g.ResizeObserver = CanvasResizeObserver;
  const methods = {
    getBoundingClientRect(this: OffscreenCanvas) {
      const value = state(this);
      observe(value);
      return rect(value.geometry);
    },
    getRootNode() {
      return document;
    },
    focus(this: OffscreenCanvas) {
      const value = state(this);
      observe(value);
      call('canvasInput', value.target, 'focus');
    },
    blur(this: OffscreenCanvas) {
      call('canvasInput', state(this).target, 'blur');
    },
    setPointerCapture(this: OffscreenCanvas, id: number) {
      state(this);
      id = Number(id);
      if (!active.has(id))
        throw new DOMException('No active pointer has this id', 'NotFoundError');
      const previous = captures.get(id);
      if (previous === this) return;
      if (previous) captureEvent(previous, 'lostpointercapture', id);
      captures.set(id, this);
      captureEvent(this, 'gotpointercapture', id);
    },
    releasePointerCapture(this: OffscreenCanvas, id: number) {
      state(this);
      id = Number(id);
      if (captures.get(id) === this) {
        captures.delete(id);
        captureEvent(this, 'lostpointercapture', id);
      }
    },
    hasPointerCapture(this: OffscreenCanvas, id: number) {
      state(this);
      return captures.get(Number(id)) === this;
    },
    setAttribute(this: OffscreenCanvas, name: string, input: string) {
      const value = state(this),
        key = String(name).toLowerCase(),
        text = String(input);
      if (key === 'width' || key === 'height')
        this[key] = /^\d+$/.test(text) ? Number(text) : key === 'width' ? 300 : 150;
      else if (key === 'id') value.id = text;
      else if (key === 'tabindex')
        call('canvasInput', value.target, 'tabIndex', Number(text));
      else if (key !== 'data-engine' && key !== 'aria-label')
        throw new DOMException(
          'Unsupported canvas attribute: ' + key,
          'NotSupportedError',
        );
      value.attributes.set(key, text);
    },
    getAttribute(this: OffscreenCanvas, name: string) {
      const value = state(this);
      return name === 'id'
        ? value.id || null
        : (value.attributes.get(String(name).toLowerCase()) ?? null);
    },
    removeAttribute(this: OffscreenCanvas, name: string) {
      const value = state(this);
      value.attributes.delete(name);
      if (name === 'id') value.id = '';
    },
  };
  Object.assign(g, {
    document,
    self: global,
    MouseEvent,
    PointerEvent,
    WheelEvent,
    KeyboardEvent,
  });
  for (const [name, read] of Object.entries({
    devicePixelRatio: () => viewport.devicePixelRatio,
    innerWidth: () => viewport.width,
    innerHeight: () => viewport.height,
  }))
    Object.defineProperty(g, name, { configurable: true, get: read });
  return {
    decorate(canvas: OffscreenCanvas, target: object) {
      const style = {} as CanvasStyle;
      const value: ElementState = {
        canvas,
        target,
        observed: false,
        id: '',
        attributes: new Map(),
        style,
        geometry: { left: 0, top: 0, width: 0, height: 0, connected: false },
      };
      elements.set(canvas, value);
      targets.set(target, new WeakRef(canvas));
      registry.add(new WeakRef(canvas));
      for (const key of ['width', 'height', 'cursor', 'touchAction'] as const) {
        let text = '';
        Object.defineProperty(style, key, {
          enumerable: true,
          get: () => text,
          set: (input: unknown) => {
            const next = String(input);
            if (
              (key === 'width' || key === 'height') &&
              next !== '' &&
              !/^(?:\d+(?:\.\d+)?)px$/.test(next)
            )
              throw new DOMException(
                'Canvas display lengths must use px',
                'NotSupportedError',
              );
            if (key === 'touchAction' && !['', 'auto', 'none'].includes(next))
              throw new DOMException(
                'Unsupported canvas touch action',
                'NotSupportedError',
              );
            if (
              key === 'cursor' &&
              ![
                '',
                'auto',
                'default',
                'pointer',
                'grab',
                'grabbing',
                'crosshair',
                'move',
                'text',
                'none',
                'wait',
                'not-allowed',
              ].includes(next)
            )
              throw new DOMException('Unsupported canvas cursor', 'NotSupportedError');
            if (text === next) return;
            text = next;
            observe(value);
            call('canvasInput', target, key, next);
          },
        });
      }
      Object.preventExtensions(style);
      Object.defineProperties(canvas, {
        ownerDocument: { value: document },
        style: { value: style },
        id: {
          get: () => value.id,
          set: (id: unknown) => {
            value.id = String(id);
          },
        },
        tabIndex: {
          get: () => Number(value.attributes.get('tabindex') ?? 0),
          set: (input: unknown) =>
            methods.setAttribute.call(canvas, 'tabindex', String(input)),
        },
        clientLeft: { value: 0 },
        clientTop: { value: 0 },
        isConnected: { get: () => value.geometry.connected },
        clientWidth: {
          get: () => {
            observe(value);
            return Math.floor(value.geometry.clientWidth ?? value.geometry.width);
          },
        },
        clientHeight: {
          get: () => {
            observe(value);
            return Math.floor(value.geometry.clientHeight ?? value.geometry.height);
          },
        },
      });
      for (const [name, fn] of Object.entries(methods))
        Object.defineProperty(canvas, name, {
          value: fn,
          configurable: true,
          writable: true,
        });
      for (const type of [
        'pointerdown',
        'pointermove',
        'pointerup',
        'pointercancel',
        'pointerenter',
        'pointerleave',
        'gotpointercapture',
        'lostpointercapture',
        'mousedown',
        'mousemove',
        'mouseup',
        'mouseenter',
        'mouseleave',
        'click',
        'wheel',
        'keydown',
        'keyup',
        'focus',
        'blur',
      ]) {
        let listener: ((event: Event) => void) | null = null;
        Object.defineProperty(canvas, 'on' + type, {
          configurable: true,
          enumerable: true,
          get: () => listener,
          set(input: unknown) {
            if (listener) canvas.removeEventListener(type, listener);
            listener =
              typeof input === 'function' ? (input as (event: Event) => void) : null;
            if (listener) canvas.addEventListener(type, listener);
          },
        });
      }
    },
    observe(canvas: object) {
      const value = elements.get(canvas);
      if (value) observe(value);
    },
    receive(target: object, input: Record<string, any>) {
      if (!open) return false;
      const original = targets.get(target)?.deref();
      if (!original) return false;
      const value = state(original),
        type = String(input.type);
      if (type === 'layout') {
        value.geometry = {
          left: input.left,
          top: input.top,
          width: input.width,
          height: input.height,
          connected: input.connected,
          clientWidth: input.clientWidth,
          clientHeight: input.clientHeight,
        };
        const changed =
          viewport.width !== input.innerWidth ||
          viewport.height !== input.innerHeight ||
          viewport.devicePixelRatio !== input.devicePixelRatio;
        viewport = {
          width: input.innerWidth,
          height: input.innerHeight,
          devicePixelRatio: input.devicePixelRatio,
        };
        for (const observer of observers) observer.update(original);
        if (changed && typeof g.dispatchEvent === 'function')
          g.dispatchEvent(new Event('resize'));
        if (!input.connected) {
          for (const [id, canvas] of captures)
            if (canvas === original) methods.releasePointerCapture.call(original, id);
          for (const [id, canvas] of active) if (canvas === original) active.delete(id);
          if (focused === original) {
            focused = null;
            emit(original, new Event('blur'));
          }
        }
        return false;
      }
      if (type === 'focus') focused = original;
      if (type === 'blur' && focused === original) focused = null;
      if (type === 'pointerdown') active.set(input.pointerId, original);
      const canvas = captures.get(input.pointerId) ?? original;
      const event =
        type === 'wheel'
          ? new WheelEvent(type, input)
          : type.startsWith('pointer')
            ? new PointerEvent(type, input)
            : type.startsWith('key')
              ? new KeyboardEvent(type, input)
              : new Event(type, input);
      const allowed = emit(canvas, event);
      if (type === 'pointerdown' && !allowed) suppressedMouse.add(input.pointerId);
      if (input.pointerType === 'mouse' && !suppressedMouse.has(input.pointerId)) {
        const mouseType = (
          {
            pointerdown: 'mousedown',
            pointermove: 'mousemove',
            pointerup: 'mouseup',
            pointerenter: 'mouseenter',
            pointerleave: 'mouseleave',
          } as Record<string, string>
        )[type];
        if (mouseType)
          emit(
            canvas,
            new MouseEvent(mouseType, {
              ...input,
              bubbles: !['mouseenter', 'mouseleave'].includes(mouseType),
            }),
          );
        if (
          type === 'pointerup' &&
          input.button === 0 &&
          active.get(input.pointerId) === canvas
        )
          emit(canvas, new MouseEvent('click', { ...input, bubbles: true }));
      }
      if (type === 'pointerup' || type === 'pointercancel') {
        methods.releasePointerCapture.call(canvas, input.pointerId);
        active.delete(input.pointerId);
        suppressedMouse.delete(input.pointerId);
      }
      return !allowed;
    },
    close() {
      for (const observer of observers) observer.disconnect();
      suppressedMouse.clear();
      if (typeof EventTarget.clear === 'function') {
        EventTarget.clear(document);
        for (const ref of registry) {
          const canvas = ref.deref();
          if (canvas instanceof EventTarget) EventTarget.clear(canvas);
        }
      }
      open = false;
      focused = null;
      active.clear();
      captures.clear();
      registry.clear();
    },
  };
}
