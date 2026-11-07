import type { Event, EventTarget, DOMExceptionConstructor } from './events.js';
import type { OffscreenCanvas } from './canvas.js';
import type { HTMLImageElement, PixelImage } from './images.js';
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
    observe(canvas: CanvasElement, options?: {
        box?: 'content-box' | 'border-box' | 'device-pixel-content-box';
    }): void;
    unobserve(canvas: CanvasElement): void;
    disconnect(): void;
}
export type ResizeObserverCallback = (entries: ResizeObserverEntry[], observer: ResizeObserver) => void;
export interface CanvasDocument extends EventTarget {
    cookie: string;
    readonly defaultView: typeof globalThis;
    readonly activeElement: (OffscreenCanvas & CanvasElement) | null;
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
    [K in keyof CanvasEventMap as `on${K}`]: ((event: CanvasEventMap[K]) => unknown) | null;
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
    focus(options?: {
        preventScroll?: boolean;
    }): void;
    blur(): void;
    setPointerCapture(id: number): void;
    releasePointerCapture(id: number): void;
    hasPointerCapture(id: number): boolean;
    setAttribute(name: string, value: string): void;
    getAttribute(name: string): string | null;
    removeAttribute(name: string): void;
}
export interface HTMLCanvasElement extends OffscreenCanvas, CanvasElement {
    transferControlToOffscreen(): OffscreenCanvas;
    toBlob(callback: (blob: import('./canvas.js').CanvasBlob | null) => unknown, type?: string, quality?: number): void;
    toDataURL(type?: string, quality?: number): string;
}
export type CanvasInputInit = Record<string, unknown> & {
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
};
declare function eventConstructors(BaseEvent: typeof Event): {
    MouseEvent: {
        new (type: string, init?: CanvasInputInit): {
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
            get x(): number;
            get y(): number;
            getModifierState(key: string): boolean;
            readonly type: string;
            readonly bubbles: boolean;
            readonly cancelable: boolean;
            readonly composed: boolean;
            readonly isTrusted: false;
            readonly timeStamp: number;
            target: EventTarget | null;
            currentTarget: EventTarget | null;
            eventPhase: number;
            defaultPrevented: boolean;
            dispatching: boolean;
            immediate: boolean;
            passive: boolean;
            path: EventTarget[];
            cancelBubble: boolean;
            preventDefault(): void;
            stopPropagation(): void;
            stopImmediatePropagation(): void;
            composedPath(): EventTarget[];
            get returnValue(): boolean;
            set returnValue(value: boolean);
        };
        readonly NONE: 0;
        readonly CAPTURING_PHASE: 1;
        readonly AT_TARGET: 2;
        readonly BUBBLING_PHASE: 3;
    };
    PointerEvent: {
        new (type: string, init?: CanvasInputInit): {
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
            getCoalescedEvents(): /*elided*/ any[];
            getPredictedEvents(): /*elided*/ any[];
            readonly type: string;
            readonly bubbles: boolean;
            readonly cancelable: boolean;
            readonly composed: boolean;
            readonly isTrusted: false;
            readonly timeStamp: number;
            target: EventTarget | null;
            currentTarget: EventTarget | null;
            eventPhase: number;
            defaultPrevented: boolean;
            dispatching: boolean;
            immediate: boolean;
            passive: boolean;
            path: EventTarget[];
            cancelBubble: boolean;
            preventDefault(): void;
            stopPropagation(): void;
            stopImmediatePropagation(): void;
            composedPath(): EventTarget[];
            get returnValue(): boolean;
            set returnValue(value: boolean);
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
            get x(): number;
            get y(): number;
            getModifierState(key: string): boolean;
        };
        readonly NONE: 0;
        readonly CAPTURING_PHASE: 1;
        readonly AT_TARGET: 2;
        readonly BUBBLING_PHASE: 3;
    };
    WheelEvent: {
        new (type: string, init?: CanvasInputInit): {
            readonly deltaX: number;
            readonly deltaY: number;
            readonly deltaZ: number;
            readonly deltaMode: number;
            readonly type: string;
            readonly bubbles: boolean;
            readonly cancelable: boolean;
            readonly composed: boolean;
            readonly isTrusted: false;
            readonly timeStamp: number;
            target: EventTarget | null;
            currentTarget: EventTarget | null;
            eventPhase: number;
            defaultPrevented: boolean;
            dispatching: boolean;
            immediate: boolean;
            passive: boolean;
            path: EventTarget[];
            cancelBubble: boolean;
            preventDefault(): void;
            stopPropagation(): void;
            stopImmediatePropagation(): void;
            composedPath(): EventTarget[];
            get returnValue(): boolean;
            set returnValue(value: boolean);
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
            get x(): number;
            get y(): number;
            getModifierState(key: string): boolean;
        };
        readonly DOM_DELTA_PIXEL: 0;
        readonly DOM_DELTA_LINE: 1;
        readonly DOM_DELTA_PAGE: 2;
        readonly NONE: 0;
        readonly CAPTURING_PHASE: 1;
        readonly AT_TARGET: 2;
        readonly BUBBLING_PHASE: 3;
    };
    KeyboardEvent: {
        new (type: string, init?: CanvasInputInit): {
            readonly key: string;
            readonly code: string;
            readonly location: number;
            readonly repeat: boolean;
            readonly isComposing: boolean;
            readonly ctrlKey: boolean;
            readonly shiftKey: boolean;
            readonly altKey: boolean;
            readonly metaKey: boolean;
            getModifierState(key: string): boolean;
            readonly type: string;
            readonly bubbles: boolean;
            readonly cancelable: boolean;
            readonly composed: boolean;
            readonly isTrusted: false;
            readonly timeStamp: number;
            target: EventTarget | null;
            currentTarget: EventTarget | null;
            eventPhase: number;
            defaultPrevented: boolean;
            dispatching: boolean;
            immediate: boolean;
            passive: boolean;
            path: EventTarget[];
            cancelBubble: boolean;
            preventDefault(): void;
            stopPropagation(): void;
            stopImmediatePropagation(): void;
            composedPath(): EventTarget[];
            get returnValue(): boolean;
            set returnValue(value: boolean);
        };
        readonly NONE: 0;
        readonly CAPTURING_PHASE: 1;
        readonly AT_TARGET: 2;
        readonly BUBBLING_PHASE: 3;
    };
};
export type MouseEvent = InstanceType<ReturnType<typeof eventConstructors>['MouseEvent']>;
export type PointerEvent = InstanceType<ReturnType<typeof eventConstructors>['PointerEvent']>;
export type WheelEvent = InstanceType<ReturnType<typeof eventConstructors>['WheelEvent']>;
export type KeyboardEvent = InstanceType<ReturnType<typeof eventConstructors>['KeyboardEvent']>;
type Call = (operation: string, ...args: unknown[]) => unknown;
/** A canvas host surface, not a DOM representation of the Flutter Widget tree. */
export declare function installCanvasDom(global: typeof globalThis, call: Call, create: () => HTMLCanvasElement, EventTarget: typeof import('./events.js').EventTarget, DOMException: DOMExceptionConstructor, Event: typeof import('./events.js').Event): {
    readonly hasSources: boolean;
    configureSources(names: string[]): void;
    decorateHtml(canvas: HTMLCanvasElement): void;
    updateSource(name: string, width: number, height: number, buffer: ArrayBuffer | null): void;
    sourcePixels(value: unknown): PixelImage;
    decorate(canvas: OffscreenCanvas, target: object): void;
    observe(canvas: object): void;
    receive(target: object, input: Record<string, any>): boolean;
    close(): void;
};
export {};
