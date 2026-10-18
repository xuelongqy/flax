import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Bindable, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation';
import '@flax/flutter/foundation';
import type * as upstream1 from '@flax/flutter/foundation';
import '@flax/flutter/foundation';
import type * as upstream2 from '@flax/dart/ui';
import '@flax/dart/ui';
import type * as upstream3 from '@flax/dart/ui';
import '@flax/dart/ui';
import type * as upstream4 from '@flax/dart/core';
import '@flax/dart/core';
import '@flax/dart/ui';
import '@flax/dart/ui';
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
export interface FlaxCanvasSurface extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flax_canvas/src/surface.dart::FlaxCanvasSurface": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __FlaxCanvasSurface: unique symbol;
    readonly [_flaxDartTypeValue]: FlaxCanvasSurface;
    readonly hasListeners: boolean;
    get alpha(): boolean;
    get width(): number;
    get height(): number;
    get generation(): number;
    get sequence(): number;
    get decodedBytes(): number;
    get base(): upstream2.Image | null;
    readonly pictures: DartList<upstream3.Picture>;
    get tail(): upstream3.Picture | null;
    get compressing(): boolean;
    get compressGeneration(): number;
    get compressCount(): number;
    get compressBytes(): number;
    get closed(): boolean;
    get transferred(): boolean;
    get onError(): ((error: {}, stack: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }>) => void) | null;
    get debugRasterize(): ((base: Readonly<{
        "__flaxBound:dart:ui::Image": readonly [];
    }> | null, pictures: DartListInput<upstream3.Picture, Readonly<{
        "__flaxBound:dart:ui::Picture": readonly [];
    }>>, width: number, height: number) => Promise<upstream2.Image | null>) | null;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    resize(nextWidth: number, nextHeight: number, options?: {
        reset?: boolean | undefined;
    }): void;
    clearHistory(): void;
    addPicture(picture: Readonly<{
        "__flaxBound:dart:ui::Picture": readonly [];
    }>, bytes: number): void;
    replaceWithClear(): void;
    maybeCompress(): void;
    rasterize(): Promise<upstream2.Image | null>;
    rasterizeSync(): upstream2.Image | null;
    abandon(): void;
    paint(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): void;
    set alpha(value: boolean);
    set width(value: number);
    set height(value: number);
    set generation(value: number);
    set sequence(value: number);
    set decodedBytes(value: number);
    set base(value: Readonly<{
        "__flaxBound:dart:ui::Image": readonly [];
    }> | null);
    set tail(value: Readonly<{
        "__flaxBound:dart:ui::Picture": readonly [];
    }> | null);
    set compressing(value: boolean);
    set compressGeneration(value: number);
    set compressCount(value: number);
    set compressBytes(value: number);
    set closed(value: boolean);
    set transferred(value: boolean);
    set onError(value: ((error: {}, stack: upstream4.StackTrace) => void) | null);
    set debugRasterize(value: ((base: upstream2.Image | null, pictures: DartList<upstream3.Picture>, width: number, height: number) => Promise<Readonly<{
        "__flaxBound:dart:ui::Image": readonly [];
    }> | null>) | null);
}
export declare function _FlaxCanvasSurfaceFactory(width: number, height: number, options?: {
    alpha?: boolean | undefined;
}): FlaxCanvasSurface;
export interface FlaxCanvasView extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:flax_canvas/src/view.dart::FlaxCanvasView": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::LeafRenderObjectWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, 'type'> {
    readonly type: "flax.canvas/canvas#type:FlaxCanvasView";
}
export declare function _FlaxCanvasViewConstruct(canvas: Bindable<Readonly<{
    "__flaxBound:package:flax_canvas/src/surface.dart::FlaxCanvasSurface": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
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
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "alpha" | "width" | "height" | "generation" | "sequence" | "decodedBytes" | "base" | "pictures" | "tail" | "compressing" | "compressGeneration" | "compressCount" | "compressBytes" | "closed" | "transferred" | "onError" | "debugRasterize" | "addListener" | "removeListener" | "dispose" | "resize" | "clearHistory" | "addPicture" | "replaceWithClear" | "maybeCompress" | "rasterize" | "rasterizeSync" | "abandon" | "paint" | "__flaxBound:package:flax_canvas/src/surface.dart::FlaxCanvasSurface" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
