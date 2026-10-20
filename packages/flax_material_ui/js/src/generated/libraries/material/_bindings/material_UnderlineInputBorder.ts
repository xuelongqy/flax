// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_InputBorder';
import '@flax/material-ui/_bindings/material_InputBorder';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import { _flaxMemberParameters206, _flaxMemberParameters161, _flaxMemberParameters327, _flaxMemberParameters158, _flaxMemberParameters160, _flaxMemberParameters162, _flaxMemberParameters163, _flaxMemberParameters164, _flaxMemberParameters165, _flaxMemberParameters2, _flaxMemberParameters167 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface UnderlineInputBorder extends Omit<upstream0.InputBorder, _flaxOwnMembers0>, Omit<upstream1.ShapeBorder, _flaxOwnMembers0 | keyof upstream0.InputBorder>, Readonly<{ "__flaxBound:package:material_ui/src/input_border.dart::UnderlineInputBorder": readonly [] }>, Readonly<{ "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> { readonly __UnderlineInputBorder: unique symbol;
readonly [_flaxDartTypeValue]: UnderlineInputBorder;

readonly borderSide: upstream2.BorderSide;
readonly isOutline: boolean;
readonly dimensions: upstream4.EdgeInsetsGeometry;
readonly preferPaintInterior: boolean;
readonly borderRadius: upstream3.BorderRadius;
copyWith(options?: {borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined; borderSide?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}): UnderlineInputBorder;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {gapExtent?: number | undefined; gapPercentage?: number | undefined; gapStart?: number | null | undefined; textDirection?: upstream7.TextDirection | null | undefined}): void;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): upstream1.ShapeBorder | null;
scale(t: number): UnderlineInputBorder;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
getOuterPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): upstream8.Path;
getInnerPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): upstream8.Path;
paintInterior(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): void;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream1.ShapeBorder;
}
defineObject("flax.material/material#type:UnderlineInputBorder", ["borderSide","isOutline","dimensions","preferPaintInterior","borderRadius"], [], _flaxBindingMethods("flax.material/material#type:UnderlineInputBorder", "object", {"copyWith":_flaxMemberParameters206,"scale":_flaxMemberParameters161}, {}), [], undefined, "flax.material/material#type:InputBorder");
export function _UnderlineInputBorderFactory(options: { borderSide?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | undefined } = {}): UnderlineInputBorder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:UnderlineInputBorder", "", [{"name":"borderSide"},{"name":"borderRadius"}], [], options) as UnderlineInputBorder;
}
const _UnderlineInputBorderProxy = {type: "flax.material/material#type:UnderlineInputBorder", parameters: _flaxMemberParameters327, constructors: {"": _flaxMemberParameters327}, methods: {"copyWith":_flaxMemberParameters206,"paint":_flaxMemberParameters158,"add":_flaxMemberParameters160,"scale":_flaxMemberParameters161,"lerpFrom":_flaxMemberParameters162,"lerpTo":_flaxMemberParameters163,"getOuterPath":_flaxMemberParameters164,"getInnerPath":_flaxMemberParameters164,"paintInterior":_flaxMemberParameters165,"toString":_flaxMemberParameters2,"operatorAdd":_flaxMemberParameters167}, getters: ["borderRadius","isOutline","dimensions","preferPaintInterior","borderSide"], setters: [], contextMembers: [], superMembers: ["get:borderRadius","get:isOutline","get:dimensions","get:preferPaintInterior","get:borderSide","copyWith","paint","add","scale","lerpFrom","lerpTo","getOuterPath","getInnerPath","paintInterior","toString","operatorAdd"]} as const;
export interface _UnderlineInputBorderNative extends UnderlineInputBorder {
readonly [_flaxDartTypeValue]: _UnderlineInputBorderNative;

copyWith(options?: {borderSide?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined}): UnderlineInputBorder;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {gapStart?: number | null | undefined; gapExtent?: number | undefined; gapPercentage?: number | undefined; textDirection?: upstream7.TextDirection | null | undefined}): void;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): upstream1.ShapeBorder | null;
scale(t: number): UnderlineInputBorder;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
getOuterPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): upstream8.Path;
getInnerPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): upstream8.Path;
paintInterior(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): void;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream1.ShapeBorder;
get borderRadius(): upstream3.BorderRadius;
get isOutline(): boolean;
get dimensions(): upstream4.EdgeInsetsGeometry;
get preferPaintInterior(): boolean;
get borderSide(): upstream2.BorderSide;
}
export abstract class _UnderlineInputBorderNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<UnderlineInputBorder>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: UnderlineInputBorder;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:UnderlineInputBorder", readonly [], false];
constructor(options?: {borderSide?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | undefined}) { super(_UnderlineInputBorderProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_UnderlineInputBorderNative.prototype, _UnderlineInputBorderProxy);
export namespace _UnderlineInputBorderFactory { export function implement(args: [options?: {borderSide?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | undefined}], implementation: {}): UnderlineInputBorder {
return constructProxy(_UnderlineInputBorderProxy, args, implementation) as UnderlineInputBorder; } }
const _UnderlineInputBorderBinding = _flaxProxyFactory(_UnderlineInputBorderFactory, _UnderlineInputBorderNative) as unknown as typeof _UnderlineInputBorderFactory & (new(options?: {borderSide?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | undefined}) => _UnderlineInputBorderNative);
export const UnderlineInputBorder: typeof _UnderlineInputBorderBinding & _FlaxInstanceType<UnderlineInputBorder> & _FlaxDartType<UnderlineInputBorder, readonly ["class", "flax.material/material#type:UnderlineInputBorder", readonly [], false]> = _flaxBindInstanceType<UnderlineInputBorder, typeof _UnderlineInputBorderBinding>(_UnderlineInputBorderBinding, "flax.material/material#type:UnderlineInputBorder", ["flax.material/material#type:InputBorder","flax.core/flutter#type:ShapeBorder","dart:core::Object"]) as typeof _UnderlineInputBorderBinding & _FlaxInstanceType<UnderlineInputBorder> & _FlaxDartType<UnderlineInputBorder, readonly ["class", "flax.material/material#type:UnderlineInputBorder", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "borderSide" | "isOutline" | "dimensions" | "preferPaintInterior" | "borderRadius" | "copyWith" | "paint" | "add" | "scale" | "lerpFrom" | "lerpTo" | "getOuterPath" | "getInnerPath" | "paintInterior" | "toString" | "operatorAdd" | "__flaxBound:package:material_ui/src/input_border.dart::UnderlineInputBorder" | "__flaxBound:package:material_ui/src/input_border.dart::InputBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder";
