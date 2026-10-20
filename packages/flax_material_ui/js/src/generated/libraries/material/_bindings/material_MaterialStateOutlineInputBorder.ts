// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_OutlineInputBorder';
import '@flax/material-ui/_bindings/material_OutlineInputBorder';
import type * as upstream1 from '@flax/material-ui/_bindings/material_InputBorder';
import '@flax/material-ui/_bindings/material_InputBorder';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream10 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream12 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import { _flaxMemberParameters205, _flaxMemberParameters2, _flaxMemberParameters206, _flaxMemberParameters161, _flaxMemberParameters162, _flaxMemberParameters163, _flaxMemberParameters164, _flaxMemberParameters165, _flaxMemberParameters158, _flaxMemberParameters160, _flaxMemberParameters167 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaterialStateOutlineInputBorder extends Omit<upstream0.OutlineInputBorder, _flaxOwnMembers0>, Omit<upstream1.InputBorder, _flaxOwnMembers0 | keyof upstream0.OutlineInputBorder>, Omit<upstream2.ShapeBorder, _flaxOwnMembers0 | keyof upstream0.OutlineInputBorder | keyof upstream1.InputBorder>, Omit<upstream3.WidgetStateProperty<upstream1.InputBorder>, _flaxOwnMembers0 | keyof upstream0.OutlineInputBorder | keyof upstream1.InputBorder | keyof upstream2.ShapeBorder>, Readonly<{ "__flaxBound:package:material_ui/src/material_state.dart::MaterialStateOutlineInputBorder": readonly [] }>, Readonly<{ "__flaxBound:package:material_ui/src/input_border.dart::OutlineInputBorder": readonly [] }>, Readonly<{ "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.InputBorder] }> { readonly __MaterialStateOutlineInputBorder: unique symbol;
readonly [_flaxDartTypeValue]: MaterialStateOutlineInputBorder;

readonly gapPadding: number;
readonly borderRadius: upstream5.BorderRadius;
readonly isOutline: boolean;
readonly dimensions: upstream6.EdgeInsetsGeometry;
readonly preferPaintInterior: boolean;
readonly borderSide: upstream7.BorderSide;
copyWith(options?: {borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined; borderSide?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; gapPadding?: number | null | undefined}): upstream0.OutlineInputBorder;
scale(t: number): upstream0.OutlineInputBorder;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream2.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream2.ShapeBorder | null;
getInnerPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream10.TextDirection | null | undefined}): upstream8.Path;
getOuterPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream10.TextDirection | null | undefined}): upstream8.Path;
paintInterior(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>, options?: {textDirection?: upstream10.TextDirection | null | undefined}): void;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {gapExtent?: number | undefined; gapPercentage?: number | undefined; gapStart?: number | null | undefined; textDirection?: upstream10.TextDirection | null | undefined}): void;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): upstream2.ShapeBorder | null;
toString(): string;
resolve(states: DartSetInput<upstream4.WidgetState, upstream4.WidgetState>): upstream1.InputBorder;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream2.ShapeBorder;
}
defineObject("flax.material/material#type:MaterialStateOutlineInputBorder", ["gapPadding","borderRadius","isOutline","dimensions","preferPaintInterior","borderSide"], [], _flaxBindingMethods("flax.material/material#type:MaterialStateOutlineInputBorder", "object", {"resolve":_flaxMemberParameters205}, {}), [], undefined, "flax.material/material#type:OutlineInputBorder");
export namespace _MaterialStateOutlineInputBorderFactory {
export function resolveWith(callback: ((states: DartSet<upstream4.WidgetState>) => Readonly<{ "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>)): MaterialStateOutlineInputBorder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:MaterialStateOutlineInputBorder", "resolveWith", [{"name":"callback","required":true,"positional":true}], [callback], {}) as MaterialStateOutlineInputBorder;
}
}
const _MaterialStateOutlineInputBorderProxy = {type: "flax.material/material#type:MaterialStateOutlineInputBorder", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"copyWith":_flaxMemberParameters206,"scale":_flaxMemberParameters161,"lerpFrom":_flaxMemberParameters162,"lerpTo":_flaxMemberParameters163,"getInnerPath":_flaxMemberParameters164,"getOuterPath":_flaxMemberParameters164,"paintInterior":_flaxMemberParameters165,"paint":_flaxMemberParameters158,"add":_flaxMemberParameters160,"toString":_flaxMemberParameters2,"resolve":_flaxMemberParameters205,"operatorAdd":_flaxMemberParameters167}, getters: ["gapPadding","borderRadius","isOutline","dimensions","preferPaintInterior","borderSide"], setters: [], contextMembers: [], superMembers: ["get:gapPadding","get:borderRadius","get:isOutline","get:dimensions","get:preferPaintInterior","get:borderSide","copyWith","scale","lerpFrom","lerpTo","getInnerPath","getOuterPath","paintInterior","paint","add","toString","operatorAdd"]} as const;
export interface _MaterialStateOutlineInputBorderNative extends MaterialStateOutlineInputBorder {
readonly [_flaxDartTypeValue]: _MaterialStateOutlineInputBorderNative;

copyWith(options?: {borderSide?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined; gapPadding?: number | null | undefined}): upstream0.OutlineInputBorder;
scale(t: number): upstream0.OutlineInputBorder;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream2.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream2.ShapeBorder | null;
getInnerPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream10.TextDirection | null | undefined}): upstream8.Path;
getOuterPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream10.TextDirection | null | undefined}): upstream8.Path;
paintInterior(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>, options?: {textDirection?: upstream10.TextDirection | null | undefined}): void;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {gapStart?: number | null | undefined; gapExtent?: number | undefined; gapPercentage?: number | undefined; textDirection?: upstream10.TextDirection | null | undefined}): void;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): upstream2.ShapeBorder | null;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream2.ShapeBorder;
get gapPadding(): number;
get borderRadius(): upstream5.BorderRadius;
get isOutline(): boolean;
get dimensions(): upstream6.EdgeInsetsGeometry;
get preferPaintInterior(): boolean;
get borderSide(): upstream7.BorderSide;
}
export abstract class _MaterialStateOutlineInputBorderNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaterialStateOutlineInputBorder>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MaterialStateOutlineInputBorder;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:MaterialStateOutlineInputBorder", readonly [], false];
constructor() { super(_MaterialStateOutlineInputBorderProxy, Array.from(arguments)); }
abstract resolve(states: DartSetInput<upstream4.WidgetState, upstream4.WidgetState>): upstream1.InputBorder;
}
_flaxDefineProxyBase(_MaterialStateOutlineInputBorderNative.prototype, _MaterialStateOutlineInputBorderProxy);
export namespace _MaterialStateOutlineInputBorderFactory { export function implement(args: [], implementation: {resolve: ((states: DartSet<upstream4.WidgetState>) => Readonly<{ "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>)}): MaterialStateOutlineInputBorder {
return constructProxy(_MaterialStateOutlineInputBorderProxy, args, implementation) as MaterialStateOutlineInputBorder; } }
const _MaterialStateOutlineInputBorderBinding = _flaxProxyFactory(_MaterialStateOutlineInputBorderFactory, _MaterialStateOutlineInputBorderNative) as unknown as typeof _MaterialStateOutlineInputBorderFactory & (abstract new() => _MaterialStateOutlineInputBorderNative);
export const MaterialStateOutlineInputBorder: typeof _MaterialStateOutlineInputBorderBinding & _FlaxInstanceType<MaterialStateOutlineInputBorder> & _FlaxDartType<MaterialStateOutlineInputBorder, readonly ["class", "flax.material/material#type:MaterialStateOutlineInputBorder", readonly [], false]> = _flaxBindInstanceType<MaterialStateOutlineInputBorder, typeof _MaterialStateOutlineInputBorderBinding>(_MaterialStateOutlineInputBorderBinding, "flax.material/material#type:MaterialStateOutlineInputBorder", ["flax.material/material#type:OutlineInputBorder","flax.material/material#type:InputBorder","flax.core/flutter#type:ShapeBorder","dart:core::Object","flax.core/flutter#type:WidgetStateProperty"]) as typeof _MaterialStateOutlineInputBorderBinding & _FlaxInstanceType<MaterialStateOutlineInputBorder> & _FlaxDartType<MaterialStateOutlineInputBorder, readonly ["class", "flax.material/material#type:MaterialStateOutlineInputBorder", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "gapPadding" | "borderRadius" | "isOutline" | "dimensions" | "preferPaintInterior" | "borderSide" | "copyWith" | "scale" | "lerpFrom" | "lerpTo" | "getInnerPath" | "getOuterPath" | "paintInterior" | "paint" | "add" | "toString" | "resolve" | "operatorAdd" | "__flaxBound:package:material_ui/src/material_state.dart::MaterialStateOutlineInputBorder" | "__flaxBound:package:material_ui/src/input_border.dart::OutlineInputBorder" | "__flaxBound:package:material_ui/src/input_border.dart::InputBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty";
