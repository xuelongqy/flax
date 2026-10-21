// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream3 from '@flax/flutter/painting/_bindings/sdk_painting_LinearBorderEdge';
import '@flax/flutter/painting/_bindings/sdk_painting_LinearBorderEdge';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import { _flaxMemberParameters99, _flaxMemberParameters14, _flaxMemberParameters100, _flaxMemberParameters101, _flaxMemberParameters15, _flaxMemberParameters16, _flaxMemberParameters17, _flaxMemberParameters18, _flaxMemberParameters19, _flaxMemberParameters20, _flaxMemberParameters2, _flaxMemberParameters21 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LinearBorder extends Omit<upstream0.OutlinedBorder, _flaxOwnMembers0>, Omit<upstream1.ShapeBorder, _flaxOwnMembers0 | keyof upstream0.OutlinedBorder>, Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> { readonly __LinearBorder: unique symbol;
readonly [_flaxDartTypeValue]: LinearBorder;

readonly dimensions: upstream4.EdgeInsetsGeometry;
readonly side: upstream2.BorderSide;
readonly preferPaintInterior: boolean;
readonly start: upstream3.LinearBorderEdge | null;
readonly end: upstream3.LinearBorderEdge | null;
readonly top: upstream3.LinearBorderEdge | null;
readonly bottom: upstream3.LinearBorderEdge | null;
copyWith(options?: {bottom?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined; side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; start?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined; top?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined}): LinearBorder;
scale(t: number): LinearBorder;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): upstream1.ShapeBorder | null;
getOuterPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): upstream5.Path;
getInnerPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): upstream5.Path;
paintInterior(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): void;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): void;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream1.ShapeBorder;
}
defineObject("flax.core/sdk_painting#type:LinearBorder", ["dimensions","side","preferPaintInterior","start","end","top","bottom"], [], _flaxBindingMethods("flax.core/sdk_painting#type:LinearBorder", "object", {"copyWith":_flaxMemberParameters99,"scale":_flaxMemberParameters14}, {}), [], undefined, "flax.core/flutter#type:OutlinedBorder");
export function _LinearBorderFactory(options: { side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; start?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined; top?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined; bottom?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined } = {}): LinearBorder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:LinearBorder", "", [{"name":"side"},{"name":"start"},{"name":"end"},{"name":"top"},{"name":"bottom"}], [], options) as LinearBorder;
}
export namespace _LinearBorderFactory {
export function start(options: { side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; alignment?: number | undefined; size?: number | undefined } = {}): LinearBorder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:LinearBorder", "start", [{"name":"side"},{"name":"alignment"},{"name":"size"}], [], options) as LinearBorder;
}
}
export namespace _LinearBorderFactory {
export function end(options: { side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; alignment?: number | undefined; size?: number | undefined } = {}): LinearBorder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:LinearBorder", "end", [{"name":"side"},{"name":"alignment"},{"name":"size"}], [], options) as LinearBorder;
}
}
export namespace _LinearBorderFactory {
export function top(options: { side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; alignment?: number | undefined; size?: number | undefined } = {}): LinearBorder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:LinearBorder", "top", [{"name":"side"},{"name":"alignment"},{"name":"size"}], [], options) as LinearBorder;
}
}
export namespace _LinearBorderFactory {
export function bottom(options: { side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; alignment?: number | undefined; size?: number | undefined } = {}): LinearBorder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:LinearBorder", "bottom", [{"name":"side"},{"name":"alignment"},{"name":"size"}], [], options) as LinearBorder;
}
}
const _LinearBorderProxy = {type: "flax.core/sdk_painting#type:LinearBorder", parameters: _flaxMemberParameters100, constructors: {"": _flaxMemberParameters100,"start": _flaxMemberParameters101,"end": _flaxMemberParameters101,"top": _flaxMemberParameters101,"bottom": _flaxMemberParameters101}, methods: {"copyWith":_flaxMemberParameters99,"scale":_flaxMemberParameters14,"lerpFrom":_flaxMemberParameters15,"lerpTo":_flaxMemberParameters16,"add":_flaxMemberParameters17,"getOuterPath":_flaxMemberParameters18,"getInnerPath":_flaxMemberParameters18,"paintInterior":_flaxMemberParameters19,"paint":_flaxMemberParameters20,"toString":_flaxMemberParameters2,"operatorAdd":_flaxMemberParameters21}, getters: ["start","end","top","bottom","dimensions","side","preferPaintInterior"], setters: [], contextMembers: [], superMembers: ["get:start","get:end","get:top","get:bottom","get:dimensions","get:side","get:preferPaintInterior","copyWith","scale","lerpFrom","lerpTo","add","getOuterPath","getInnerPath","paintInterior","paint","toString","operatorAdd"]} as const;
export interface _LinearBorderNative extends LinearBorder {
readonly [_flaxDartTypeValue]: _LinearBorderNative;
readonly [_flaxDartConstructors]?: {"": (options?: {side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; start?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined; top?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined; bottom?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined}) => void;"start": (options?: {side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; alignment?: number | undefined; size?: number | undefined}) => void;"end": (options?: {side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; alignment?: number | undefined; size?: number | undefined}) => void;"top": (options?: {side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; alignment?: number | undefined; size?: number | undefined}) => void;"bottom": (options?: {side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; alignment?: number | undefined; size?: number | undefined}) => void;};

copyWith(options?: {side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; start?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined; top?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined; bottom?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined}): LinearBorder;
scale(t: number): LinearBorder;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): upstream1.ShapeBorder | null;
getOuterPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): upstream5.Path;
getInnerPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): upstream5.Path;
paintInterior(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): void;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): void;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream1.ShapeBorder;
get start(): upstream3.LinearBorderEdge | null;
get end(): upstream3.LinearBorderEdge | null;
get top(): upstream3.LinearBorderEdge | null;
get bottom(): upstream3.LinearBorderEdge | null;
get dimensions(): upstream4.EdgeInsetsGeometry;
get side(): upstream2.BorderSide;
get preferPaintInterior(): boolean;
}
export abstract class _LinearBorderNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LinearBorder>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: LinearBorder;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:LinearBorder", readonly [], false];
constructor(options?: {side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; start?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined; top?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined; bottom?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined}); constructor(call: _FlaxProxySuper<_LinearBorderNative>); constructor(...args: unknown[]) { super(_LinearBorderProxy, args); }
}
_flaxDefineProxyBase(_LinearBorderNative.prototype, _LinearBorderProxy);
export namespace _LinearBorderFactory { export function implement(args: [options?: {side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; start?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined; top?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined; bottom?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined}], implementation: {}): LinearBorder {
return constructProxy(_LinearBorderProxy, args, implementation) as LinearBorder; } }
const _LinearBorderBinding = _flaxProxyFactory(_LinearBorderFactory, _LinearBorderNative) as unknown as typeof _LinearBorderFactory & (new(options?: {side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; start?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined; top?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined; bottom?: Readonly<{ "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [] }> | null | undefined}) => _LinearBorderNative) & (new(call: _FlaxProxySuper<_LinearBorderNative>) => _LinearBorderNative);
export namespace _LinearBorderFactory { export declare const none: LinearBorder; }
_flaxDefineStaticGetters(_LinearBorderFactory, "flax.core/sdk_painting#read:LinearBorder.", ["none"]);
export const LinearBorder: typeof _LinearBorderBinding & _FlaxInstanceType<LinearBorder> & _FlaxDartType<LinearBorder, readonly ["class", "flax.core/sdk_painting#type:LinearBorder", readonly [], false]> = _flaxBindInstanceType<LinearBorder, typeof _LinearBorderBinding>(_LinearBorderBinding, "flax.core/sdk_painting#type:LinearBorder", ["flax.core/flutter#type:OutlinedBorder","flax.core/flutter#type:ShapeBorder","dart:core::Object"]) as typeof _LinearBorderBinding & _FlaxInstanceType<LinearBorder> & _FlaxDartType<LinearBorder, readonly ["class", "flax.core/sdk_painting#type:LinearBorder", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "dimensions" | "side" | "preferPaintInterior" | "start" | "end" | "top" | "bottom" | "copyWith" | "scale" | "lerpFrom" | "lerpTo" | "add" | "getOuterPath" | "getInnerPath" | "paintInterior" | "paint" | "toString" | "operatorAdd" | "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder";
