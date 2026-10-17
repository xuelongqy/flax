import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation';
import '@flax/flutter/foundation';
import type * as upstream1 from '@flax/dart/core';
import '@flax/dart/core';
import '@flax/flutter/foundation';
export declare const canvasBindingModule: Readonly<{
    moduleId: string;
    uiProtocol: 24;
    requiredCapabilities: readonly string[];
    construct: typeof import("@flax/core/bindings").construct;
    constructProxy: typeof import("@flax/core/bindings").constructProxy;
    constructObject: typeof import("@flax/core/bindings").constructObject;
    constructDeferredObject: typeof import("@flax/core/bindings").constructDeferredObject;
    constructStream: typeof import("@flax/core/bindings").constructStream;
    constructAsyncIterableStream: typeof import("@flax/core/bindings").constructAsyncIterableStream;
    bindInstanceType: typeof import("@flax/core/bindings").bindInstanceType;
    defineDartTypes: typeof import("@flax/core/bindings").defineDartTypes;
    defineObject: typeof import("@flax/core/bindings").defineObject;
    defineStream: typeof import("@flax/core/bindings").defineStream;
    invokeObject: typeof import("@flax/core/bindings").invokeObject;
    invokeObjectStatic: typeof import("@flax/core/bindings").invokeObjectStatic;
    invokeStream: typeof import("@flax/core/bindings").invokeStream;
    enumValue: typeof import("@flax/core/bindings").enumValue;
    defineEnum: typeof import("@flax/core/bindings").defineEnum;
    invokeEnum: typeof import("@flax/core/bindings").invokeEnum;
    defineContext: typeof import("@flax/core/bindings").defineContext;
    defineState: typeof import("@flax/core/bindings").defineState;
    contextHandle: typeof import("@flax/core/bindings").contextHandle;
    invokeStatic: typeof import("@flax/core/bindings").invokeStatic;
    invokeInstance: typeof import("@flax/core/bindings").invokeInstance;
    invokeTopLevel: typeof import("@flax/core/bindings").invokeTopLevel;
}>;
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FlaxCanvasSurface extends Omit<upstream0.Listenable, typeof _flaxDartTypeValue | "alpha" | "width" | "height" | "generation" | "sequence" | "decodedBytes" | "compressing" | "compressGeneration" | "compressCount" | "compressBytes" | "closed" | "transferred" | "onError" | "hasListeners" | "addListener" | "removeListener" | "resize" | "clearHistory" | "replaceWithClear" | "maybeCompress" | "abandon" | "dispose">, Readonly<{
    "__flaxBound:package:flax_canvas/src/surface.dart::FlaxCanvasSurface": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}> {
    readonly __FlaxCanvasSurface: unique symbol;
    get alpha(): boolean;
    get width(): number;
    get height(): number;
    get generation(): number;
    get sequence(): number;
    get decodedBytes(): number;
    get compressing(): boolean;
    get compressGeneration(): number;
    get compressCount(): number;
    get compressBytes(): number;
    get closed(): boolean;
    get transferred(): boolean;
    get onError(): ((error: {}, stack: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }>) => void) | null;
    readonly hasListeners: boolean;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    resize(nextWidth: number, nextHeight: number, options?: {
        reset?: boolean | undefined;
    }): void;
    clearHistory(): void;
    replaceWithClear(): void;
    maybeCompress(): void;
    abandon(): void;
    dispose(): void;
    set alpha(value: boolean);
    set width(value: number);
    set height(value: number);
    set generation(value: number);
    set sequence(value: number);
    set decodedBytes(value: number);
    set compressing(value: boolean);
    set compressGeneration(value: number);
    set compressCount(value: number);
    set compressBytes(value: number);
    set closed(value: boolean);
    set transferred(value: boolean);
    set onError(value: ((error: {}, stack: upstream1.StackTrace) => void) | null);
}
export declare function _FlaxCanvasSurfaceFactory(width: number, height: number, options?: {
    alpha?: boolean | undefined;
}): FlaxCanvasSurface;
export interface FlaxCanvasView extends WidgetDescription {
    readonly type: "flax.canvas/canvas#type:FlaxCanvasView";
}
export declare function _FlaxCanvasViewConstruct(canvas: Bindable<Readonly<{
    "__flaxBound:package:flax_canvas/src/surface.dart::FlaxCanvasSurface": readonly [];
}>>, options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    width?: Bindable<number | null> | undefined;
    height?: Bindable<number | null> | undefined;
}): FlaxCanvasView;
export declare namespace _FlaxCanvasSurfaceFactory {
    const pictureLimit: number;
}
export declare namespace _FlaxCanvasSurfaceFactory {
    const commandBytesLimit: number;
}
export declare const FlaxCanvasSurface: typeof _FlaxCanvasSurfaceFactory & _FlaxInstanceType<FlaxCanvasSurface> & _FlaxDartType<FlaxCanvasSurface, readonly ["class", "flax.canvas/canvas#type:FlaxCanvasSurface", readonly [], false]>;
export declare const FlaxCanvasView: object & _FlaxInstanceType<FlaxCanvasView> & _FlaxDartType<FlaxCanvasView, readonly ["class", "flax.canvas/canvas#type:FlaxCanvasView", readonly [], false]>;
export declare const CanvasView: typeof _FlaxCanvasViewConstruct & _FlaxInstanceType<FlaxCanvasView>;
