import { bindInstanceType as _flaxHostBindInstanceType, type FlaxInstanceType as _FlaxInstanceType, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineEnum as _flaxHostDefineEnum, invokeEnum as _flaxHostInvokeEnum, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type Bindable, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation';
import '@flax/flutter/foundation';
import '@flax/flutter/foundation';
export declare const canvasBindingModule: Readonly<{
    moduleId: string;
    uiProtocol: 24;
    requiredCapabilities: readonly string[];
    construct: typeof _flaxHostConstruct;
    constructProxy: typeof _flaxHostConstructProxy;
    constructObject: typeof _flaxHostConstructObject;
    constructDeferredObject: typeof _flaxHostConstructDeferredObject;
    constructStream: typeof _flaxHostConstructStream;
    constructAsyncIterableStream: typeof _flaxHostConstructAsyncIterableStream;
    bindInstanceType: typeof _flaxHostBindInstanceType;
    defineObject: typeof _flaxHostDefineObject;
    defineStream: typeof _flaxHostDefineStream;
    invokeObject: typeof _flaxHostInvokeObject;
    invokeObjectStatic: typeof _flaxHostInvokeObjectStatic;
    invokeStream: typeof _flaxHostInvokeStream;
    enumValue: typeof _flaxHostEnumValue;
    defineEnum: typeof _flaxHostDefineEnum;
    invokeEnum: typeof _flaxHostInvokeEnum;
    defineContext: typeof _flaxHostDefineContext;
    defineState: typeof _flaxHostDefineState;
    contextHandle: typeof _flaxHostContextHandle;
    invokeStatic: typeof _flaxHostInvokeStatic;
    invokeInstance: typeof _flaxHostInvokeInstance;
    invokeTopLevel: typeof _flaxHostInvokeTopLevel;
}>;
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
export declare const FlaxCanvasSurface: object & _FlaxInstanceType<FlaxCanvasSurface>;
export declare const FlaxCanvasView: object & _FlaxInstanceType<FlaxCanvasView>;
export declare const CanvasView: typeof _FlaxCanvasViewConstruct & _FlaxInstanceType<FlaxCanvasView>;
export {};
