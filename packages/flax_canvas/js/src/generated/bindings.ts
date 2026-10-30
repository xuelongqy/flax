// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
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
import type * as upstream5 from '@flax/dart/ui';
import '@flax/dart/ui';
import type * as upstream6 from '@flax/dart/ui';
import '@flax/dart/ui';
import type * as upstream7 from '@flax/flutter/foundation';
import '@flax/flutter/foundation';
const _flaxMemberParameters0 = [{"name":"nextWidth","required":true,"positional":true},{"name":"nextHeight","required":true,"positional":true},{"name":"reset"}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"picture","required":true,"positional":true},{"name":"bytes","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"canvas","required":true,"positional":true},{"name":"size","required":true,"positional":true}] as const;
export const canvasBindingModule = _flaxInstallBindingModule("flax.canvas/canvas", 24, Object.freeze(["call-layouts","generic-member-views","inherited-binding-members","instance-checks","native-navigation-objects","native-widget-proxies","shared-static-readers"]) as readonly string[]);
const { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineDartTypes: _flaxDefineDartTypes, bindInstanceType: _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } = canvasBindingModule;
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FlaxCanvasSurface extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{ "__flaxBound:package:flax_canvas/src/surface.dart::FlaxCanvasSurface": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __FlaxCanvasSurface: unique symbol;
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
get onError(): ((error: {}, stack: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }>) => void) | null;
get debugRasterize(): ((base: Readonly<{ "__flaxBound:dart:ui::Image": readonly [] }> | null, pictures: DartListInput<upstream3.Picture, Readonly<{ "__flaxBound:dart:ui::Picture": readonly [] }>>, width: number, height: number) => Promise<upstream2.Image | null>) | null;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
resize(nextWidth: number, nextHeight: number, options?: {reset?: boolean | undefined}): void;
clearHistory(): void;
addPicture(picture: Readonly<{ "__flaxBound:dart:ui::Picture": readonly [] }>, bytes: number): void;
replaceWithClear(): void;
maybeCompress(): void;
rasterize(): Promise<upstream2.Image | null>;
rasterizeSync(): upstream2.Image | null;
abandon(): void;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): void;
set alpha(value: boolean);
set width(value: number);
set height(value: number);
set generation(value: number);
set sequence(value: number);
set decodedBytes(value: number);
set base(value: Readonly<{ "__flaxBound:dart:ui::Image": readonly [] }> | null);
set tail(value: Readonly<{ "__flaxBound:dart:ui::Picture": readonly [] }> | null);
set compressing(value: boolean);
set compressGeneration(value: number);
set compressCount(value: number);
set compressBytes(value: number);
set closed(value: boolean);
set transferred(value: boolean);
set onError(value: ((error: {}, stack: upstream4.StackTrace) => void) | null);
set debugRasterize(value: ((base: upstream2.Image | null, pictures: DartList<upstream3.Picture>, width: number, height: number) => Promise<Readonly<{ "__flaxBound:dart:ui::Image": readonly [] }> | null>) | null);
}
defineObject("flax.canvas/canvas#type:FlaxCanvasSurface", ["hasListeners","alpha","width","height","generation","sequence","decodedBytes","base","pictures","tail","compressing","compressGeneration","compressCount","compressBytes","closed","transferred","onError","debugRasterize"], ["alpha","width","height","generation","sequence","decodedBytes","base","tail","compressing","compressGeneration","compressCount","compressBytes","closed","transferred","onError","debugRasterize"], _flaxBindingMethods("flax.canvas/canvas#type:FlaxCanvasSurface", "object", {"resize":_flaxMemberParameters0,"clearHistory":_flaxMemberParameters1,"addPicture":_flaxMemberParameters2,"replaceWithClear":_flaxMemberParameters1,"maybeCompress":_flaxMemberParameters1,"rasterize":_flaxMemberParameters1,"rasterizeSync":_flaxMemberParameters1,"abandon":_flaxMemberParameters1,"paint":_flaxMemberParameters3}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
export function _FlaxCanvasSurfaceFactory(width: number, height: number, options: { alpha?: boolean | undefined } = {}): FlaxCanvasSurface {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.canvas/canvas#type:FlaxCanvasSurface", "", [{"name":"width","required":true,"positional":true},{"name":"height","required":true,"positional":true},{"name":"alpha"}], [width, height], options) as FlaxCanvasSurface;
}
export interface FlaxCanvasView extends WidgetDescription, Omit<Readonly<{ "__flaxBound:package:flax_canvas/src/view.dart::FlaxCanvasView": readonly [] }>, 'type'>, Omit<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::LeafRenderObjectWidget": readonly [] }>, 'type'>, Omit<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget": readonly [] }>, 'type'>, Omit<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, 'type'>, Omit<Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, 'type'>, Omit<Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, 'type'> { readonly type: "flax.canvas/canvas#type:FlaxCanvasView";  }
export function _FlaxCanvasViewConstruct(canvas: Bindable<Readonly<{ "__flaxBound:package:flax_canvas/src/surface.dart::FlaxCanvasSurface": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>>, options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; width?: Bindable<number | null> | undefined; height?: Bindable<number | null> | undefined } = {}): FlaxCanvasView {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.canvas/canvas#type:FlaxCanvasView", "", [{"name":"canvas","required":true,"positional":true},{"name":"key"},{"name":"width"},{"name":"height"}], [canvas], options) as FlaxCanvasView;
}
export declare namespace _FlaxCanvasViewConstruct { const __flaxJsx: { readonly props: ({ "canvas": globalThis.Parameters<typeof _FlaxCanvasViewConstruct>[0] } & globalThis.NonNullable<globalThis.Parameters<typeof _FlaxCanvasViewConstruct>[1]>); readonly slot: null; readonly many: false; }; }
export namespace _FlaxCanvasSurfaceFactory { export declare const pictureLimit: number; }
export namespace _FlaxCanvasSurfaceFactory { export declare const commandBytesLimit: number; }
_flaxDefineStaticGetters(_FlaxCanvasSurfaceFactory, "flax.canvas/canvas#read:FlaxCanvasSurface.", ["pictureLimit","commandBytesLimit"]);
export const FlaxCanvasSurface: typeof _FlaxCanvasSurfaceFactory & _FlaxInstanceType<FlaxCanvasSurface> & _FlaxDartType<FlaxCanvasSurface, readonly ["class", "flax.canvas/canvas#type:FlaxCanvasSurface", readonly [], false]> = _flaxBindInstanceType<FlaxCanvasSurface, typeof _FlaxCanvasSurfaceFactory>(_FlaxCanvasSurfaceFactory, "flax.canvas/canvas#type:FlaxCanvasSurface", ["flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]) as typeof _FlaxCanvasSurfaceFactory & _FlaxInstanceType<FlaxCanvasSurface> & _FlaxDartType<FlaxCanvasSurface, readonly ["class", "flax.canvas/canvas#type:FlaxCanvasSurface", readonly [], false]>;
export const FlaxCanvasView: object & _FlaxInstanceType<FlaxCanvasView> & _FlaxDartType<FlaxCanvasView, readonly ["class", "flax.canvas/canvas#type:FlaxCanvasView", readonly [], false]> = _flaxBindInstanceType<FlaxCanvasView, object>({}, "flax.canvas/canvas#type:FlaxCanvasView", ["flax.core/sdk_widgets#type:LeafRenderObjectWidget","flax.core/sdk_widgets#type:RenderObjectWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as object & _FlaxInstanceType<FlaxCanvasView> & _FlaxDartType<FlaxCanvasView, readonly ["class", "flax.canvas/canvas#type:FlaxCanvasView", readonly [], false]>;
export const CanvasView: typeof _FlaxCanvasViewConstruct & _FlaxInstanceType<FlaxCanvasView> = _flaxBindInstanceType<FlaxCanvasView, typeof _FlaxCanvasViewConstruct>(_FlaxCanvasViewConstruct, "flax.canvas/canvas#type:FlaxCanvasView", ["flax.core/sdk_widgets#type:LeafRenderObjectWidget","flax.core/sdk_widgets#type:RenderObjectWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "alpha" | "width" | "height" | "generation" | "sequence" | "decodedBytes" | "base" | "pictures" | "tail" | "compressing" | "compressGeneration" | "compressCount" | "compressBytes" | "closed" | "transferred" | "onError" | "debugRasterize" | "addListener" | "removeListener" | "dispose" | "resize" | "clearHistory" | "addPicture" | "replaceWithClear" | "maybeCompress" | "rasterize" | "rasterizeSync" | "abandon" | "paint" | "__flaxBound:package:flax_canvas/src/surface.dart::FlaxCanvasSurface" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
