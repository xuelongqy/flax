import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation';
import '@flax/flutter/foundation';
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
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FlaxCanvasSurface extends upstream0.Listenable, Readonly<{
    "__flaxBound:package:flax_canvas/src/surface.dart::FlaxCanvasSurface": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}> {
    readonly __FlaxCanvasSurface: unique symbol;
    get width(): number;
    get height(): number;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    set width(value: number);
    set height(value: number);
}
export interface FlaxCanvasView extends WidgetDescription {
    readonly type: "flax.canvas/canvas#type:FlaxCanvasView";
}
declare function _FlaxCanvasViewConstruct(canvas: Bindable<Readonly<{
    "__flaxBound:package:flax_canvas/src/surface.dart::FlaxCanvasSurface": readonly [];
}>>, options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    width?: Bindable<number | null> | undefined;
    height?: Bindable<number | null> | undefined;
}): FlaxCanvasView;
export declare const FlaxCanvasSurface: object & _FlaxInstanceType<FlaxCanvasSurface> & _FlaxDartType<FlaxCanvasSurface, readonly ["class", "flax.canvas/canvas#type:FlaxCanvasSurface", readonly [], false]>;
export declare const FlaxCanvasView: object & _FlaxInstanceType<FlaxCanvasView> & _FlaxDartType<FlaxCanvasView, readonly ["class", "flax.canvas/canvas#type:FlaxCanvasView", readonly [], false]>;
export declare const CanvasView: typeof _FlaxCanvasViewConstruct & _FlaxInstanceType<FlaxCanvasView>;
export {};
