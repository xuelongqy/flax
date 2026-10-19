// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_UnderlineInputBorder';
import '@flax/flutter/material/_bindings/sdk_material_UnderlineInputBorder';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_InputBorder';
import '@flax/flutter/material/_bindings/sdk_material_InputBorder';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream9 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import { _flaxMemberParameters200, _flaxMemberParameters2, _flaxMemberParameters202, _flaxMemberParameters158, _flaxMemberParameters161, _flaxMemberParameters162, _flaxMemberParameters159, _flaxMemberParameters160, _flaxMemberParameters155, _flaxMemberParameters157, _flaxMemberParameters164 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaterialStateUnderlineInputBorder extends Omit<upstream0.UnderlineInputBorder, _flaxOwnMembers0>, Omit<upstream1.InputBorder, _flaxOwnMembers0 | keyof upstream0.UnderlineInputBorder>, Omit<upstream2.ShapeBorder, _flaxOwnMembers0 | keyof upstream0.UnderlineInputBorder | keyof upstream1.InputBorder>, Omit<upstream3.WidgetStateProperty<upstream1.InputBorder>, _flaxOwnMembers0 | keyof upstream0.UnderlineInputBorder | keyof upstream1.InputBorder | keyof upstream2.ShapeBorder>, Readonly<{ "__flaxBound:package:flutter/src/material/material_state.dart::MaterialStateUnderlineInputBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/material/input_border.dart::UnderlineInputBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/material/input_border.dart::InputBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.InputBorder] }> { readonly __MaterialStateUnderlineInputBorder: unique symbol;
readonly [_flaxDartTypeValue]: MaterialStateUnderlineInputBorder;

}
defineObject("flax.core/sdk_material#type:MaterialStateUnderlineInputBorder", ["borderRadius","isOutline","dimensions","preferPaintInterior","borderSide"], [], _flaxBindingMethods("flax.core/sdk_material#type:MaterialStateUnderlineInputBorder", "object", {"resolve":_flaxMemberParameters200}, {}), [], undefined, "flax.core/sdk_material#type:UnderlineInputBorder");
const _MaterialStateUnderlineInputBorderProxy = {type: "flax.core/sdk_material#type:MaterialStateUnderlineInputBorder", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"copyWith":_flaxMemberParameters202,"scale":_flaxMemberParameters158,"getInnerPath":_flaxMemberParameters161,"getOuterPath":_flaxMemberParameters161,"paintInterior":_flaxMemberParameters162,"lerpFrom":_flaxMemberParameters159,"lerpTo":_flaxMemberParameters160,"paint":_flaxMemberParameters155,"add":_flaxMemberParameters157,"toString":_flaxMemberParameters2,"resolve":_flaxMemberParameters200,"operatorAdd":_flaxMemberParameters164}, getters: ["borderRadius","isOutline","dimensions","preferPaintInterior","borderSide"], setters: [], contextMembers: [], superMembers: ["get:borderRadius","get:isOutline","get:dimensions","get:preferPaintInterior","get:borderSide","copyWith","scale","getInnerPath","getOuterPath","paintInterior","lerpFrom","lerpTo","paint","add","toString","operatorAdd"]} as const;
export interface MaterialStateUnderlineInputBorder {
readonly [_flaxDartTypeValue]: MaterialStateUnderlineInputBorder;

copyWith(options?: {borderSide?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined}): upstream0.UnderlineInputBorder;
scale(t: number): upstream0.UnderlineInputBorder;
getInnerPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream9.TextDirection | null | undefined}): upstream7.Path;
getOuterPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream9.TextDirection | null | undefined}): upstream7.Path;
paintInterior(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>, options?: {textDirection?: upstream9.TextDirection | null | undefined}): void;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream2.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream2.ShapeBorder | null;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {gapStart?: number | null | undefined; gapExtent?: number | undefined; gapPercentage?: number | undefined; textDirection?: upstream9.TextDirection | null | undefined}): void;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): upstream2.ShapeBorder | null;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream2.ShapeBorder;
get borderRadius(): upstream4.BorderRadius;
get isOutline(): boolean;
get dimensions(): upstream5.EdgeInsetsGeometry;
get preferPaintInterior(): boolean;
get borderSide(): upstream6.BorderSide;
}
export abstract class MaterialStateUnderlineInputBorder extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaterialStateUnderlineInputBorder>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MaterialStateUnderlineInputBorder;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:MaterialStateUnderlineInputBorder", readonly [], false];
constructor() { super(_MaterialStateUnderlineInputBorderProxy, Array.from(arguments)); }
abstract resolve(states: DartSetInput<upstream12.WidgetState, upstream12.WidgetState>): upstream1.InputBorder;
}
_flaxDefineProxyBase(MaterialStateUnderlineInputBorder.prototype, _MaterialStateUnderlineInputBorderProxy);
export namespace MaterialStateUnderlineInputBorder { export function implement(args: [], implementation: {resolve: ((states: DartSet<upstream12.WidgetState>) => Readonly<{ "__flaxBound:package:flutter/src/material/input_border.dart::InputBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>)}): MaterialStateUnderlineInputBorder {
return constructProxy(_MaterialStateUnderlineInputBorderProxy, args, implementation) as MaterialStateUnderlineInputBorder; } }
_flaxBindInstanceType<MaterialStateUnderlineInputBorder, typeof MaterialStateUnderlineInputBorder>(MaterialStateUnderlineInputBorder, "flax.core/sdk_material#type:MaterialStateUnderlineInputBorder", ["flax.core/sdk_material#type:UnderlineInputBorder","flax.core/sdk_material#type:InputBorder","flax.core/flutter#type:ShapeBorder","dart:core::Object","flax.core/flutter#type:WidgetStateProperty"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "borderRadius" | "isOutline" | "dimensions" | "preferPaintInterior" | "borderSide" | "copyWith" | "scale" | "getInnerPath" | "getOuterPath" | "paintInterior" | "lerpFrom" | "lerpTo" | "paint" | "add" | "toString" | "resolve" | "operatorAdd" | "__flaxBound:package:flutter/src/material/material_state.dart::MaterialStateUnderlineInputBorder" | "__flaxBound:package:flutter/src/material/input_border.dart::UnderlineInputBorder" | "__flaxBound:package:flutter/src/material/input_border.dart::InputBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty";
