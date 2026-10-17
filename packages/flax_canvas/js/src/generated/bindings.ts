// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"listener","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"nextWidth","required":true,"positional":true},{"name":"nextHeight","required":true,"positional":true},{"name":"reset","required":false,"positional":false}] as const;
const _flaxMemberParameters2 = [] as const;
import type * as upstream0 from '@flax/flutter/foundation';
import '@flax/flutter/foundation';
import type * as upstream1 from '@flax/dart/core';
import '@flax/dart/core';
import type * as upstream2 from '@flax/flutter/foundation';
import '@flax/flutter/foundation';
export const canvasBindingModule = _flaxInstallBindingModule("flax.canvas/canvas", 24, Object.freeze(["generic-member-views","instance-checks","native-navigation-objects","native-widget-proxies"]) as readonly string[]);
const { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineDartTypes: _flaxDefineDartTypes, bindInstanceType: _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } = canvasBindingModule;
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FlaxCanvasSurface extends Omit<upstream0.Listenable, typeof _flaxDartTypeValue | "alpha" | "width" | "height" | "generation" | "sequence" | "decodedBytes" | "compressing" | "compressGeneration" | "compressCount" | "compressBytes" | "closed" | "transferred" | "onError" | "hasListeners" | "addListener" | "removeListener" | "resize" | "clearHistory" | "replaceWithClear" | "maybeCompress" | "abandon" | "dispose">, Readonly<{ "__flaxBound:package:flax_canvas/src/surface.dart::FlaxCanvasSurface": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> { readonly __FlaxCanvasSurface: unique symbol;

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
get onError(): ((error: {}, stack: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }>) => void) | null;
readonly hasListeners: boolean;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
resize(nextWidth: number, nextHeight: number, options?: {reset?: boolean | undefined}): void;
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
defineObject("flax.canvas/canvas#type:FlaxCanvasSurface", ["alpha","width","height","generation","sequence","decodedBytes","compressing","compressGeneration","compressCount","compressBytes","closed","transferred","onError","hasListeners"], ["alpha","width","height","generation","sequence","decodedBytes","compressing","compressGeneration","compressCount","compressBytes","closed","transferred","onError"], _flaxBindingMethods("flax.canvas/canvas#type:FlaxCanvasSurface", "object", {"addListener":_flaxMemberParameters0,"removeListener":_flaxMemberParameters0,"resize":_flaxMemberParameters1,"clearHistory":_flaxMemberParameters2,"replaceWithClear":_flaxMemberParameters2,"maybeCompress":_flaxMemberParameters2,"abandon":_flaxMemberParameters2,"dispose":_flaxMemberParameters2}, {}), ["removeListener"]);
export function _FlaxCanvasSurfaceFactory(width: number, height: number, options: { alpha?: boolean | undefined } = {}): FlaxCanvasSurface {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.canvas/canvas#type:FlaxCanvasSurface", "", [{"name":"width","required":true,"positional":true},{"name":"height","required":true,"positional":true},{"name":"alpha","required":false,"positional":false}], [width, height], options) as FlaxCanvasSurface;
}
export interface FlaxCanvasView extends WidgetDescription { readonly type: "flax.canvas/canvas#type:FlaxCanvasView";  }
export function _FlaxCanvasViewConstruct(canvas: Bindable<Readonly<{ "__flaxBound:package:flax_canvas/src/surface.dart::FlaxCanvasSurface": readonly [] }>>, options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; width?: Bindable<number | null> | undefined; height?: Bindable<number | null> | undefined } = {}): FlaxCanvasView {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.canvas/canvas#type:FlaxCanvasView", "", [{"name":"canvas","required":true,"positional":true},{"name":"key","required":false,"positional":false},{"name":"width","required":false,"positional":false},{"name":"height","required":false,"positional":false}], [canvas], options) as FlaxCanvasView;
}
export namespace _FlaxCanvasSurfaceFactory { export declare const pictureLimit: number; }
Object.defineProperty(_FlaxCanvasSurfaceFactory, "pictureLimit", { get: () => invokeTopLevel("flax.canvas/canvas#read:FlaxCanvasSurface.pictureLimit", []) });
export namespace _FlaxCanvasSurfaceFactory { export declare const commandBytesLimit: number; }
Object.defineProperty(_FlaxCanvasSurfaceFactory, "commandBytesLimit", { get: () => invokeTopLevel("flax.canvas/canvas#read:FlaxCanvasSurface.commandBytesLimit", []) });
export const FlaxCanvasSurface: typeof _FlaxCanvasSurfaceFactory & _FlaxInstanceType<FlaxCanvasSurface> & _FlaxDartType<FlaxCanvasSurface, readonly ["class", "flax.canvas/canvas#type:FlaxCanvasSurface", readonly [], false]> = _flaxBindInstanceType<FlaxCanvasSurface, typeof _FlaxCanvasSurfaceFactory>(_FlaxCanvasSurfaceFactory, "flax.canvas/canvas#type:FlaxCanvasSurface", ["package:flutter/src/foundation/change_notifier.dart::ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]) as typeof _FlaxCanvasSurfaceFactory & _FlaxInstanceType<FlaxCanvasSurface> & _FlaxDartType<FlaxCanvasSurface, readonly ["class", "flax.canvas/canvas#type:FlaxCanvasSurface", readonly [], false]>;
export const FlaxCanvasView: object & _FlaxInstanceType<FlaxCanvasView> & _FlaxDartType<FlaxCanvasView, readonly ["class", "flax.canvas/canvas#type:FlaxCanvasView", readonly [], false]> = _flaxBindInstanceType<FlaxCanvasView, object>({}, "flax.canvas/canvas#type:FlaxCanvasView", ["package:flutter/src/widgets/framework.dart::LeafRenderObjectWidget","package:flutter/src/widgets/framework.dart::RenderObjectWidget","package:flutter/src/widgets/framework.dart::Widget","package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree","dart:core::Object","package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]) as object & _FlaxInstanceType<FlaxCanvasView> & _FlaxDartType<FlaxCanvasView, readonly ["class", "flax.canvas/canvas#type:FlaxCanvasView", readonly [], false]>;
export const CanvasView: typeof _FlaxCanvasViewConstruct & _FlaxInstanceType<FlaxCanvasView> = _flaxBindInstanceType<FlaxCanvasView, typeof _FlaxCanvasViewConstruct>(_FlaxCanvasViewConstruct, "flax.canvas/canvas#type:FlaxCanvasView", ["package:flutter/src/widgets/framework.dart::LeafRenderObjectWidget","package:flutter/src/widgets/framework.dart::RenderObjectWidget","package:flutter/src/widgets/framework.dart::Widget","package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree","dart:core::Object","package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);
