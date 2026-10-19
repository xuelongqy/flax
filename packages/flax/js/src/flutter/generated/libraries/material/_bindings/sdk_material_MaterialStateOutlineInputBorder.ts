// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_OutlineInputBorder';
import '@flax/flutter/material/_bindings/sdk_material_OutlineInputBorder';
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
const _flaxMemberParameters0 = [{"name":"states","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"borderRadius"},{"name":"borderSide"},{"name":"gapPadding"}] as const;
const _flaxMemberParameters3 = [{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"a","required":true,"positional":true},{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"b","required":true,"positional":true},{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"rect","required":true,"positional":true},{"name":"textDirection"}] as const;
const _flaxMemberParameters7 = [{"name":"canvas","required":true,"positional":true},{"name":"rect","required":true,"positional":true},{"name":"paint","required":true,"positional":true},{"name":"textDirection"}] as const;
const _flaxMemberParameters8 = [{"name":"canvas","required":true,"positional":true},{"name":"rect","required":true,"positional":true},{"name":"gapExtent"},{"name":"gapPercentage"},{"name":"gapStart"},{"name":"textDirection"}] as const;
const _flaxMemberParameters9 = [{"name":"other","required":true,"positional":true},{"name":"reversed"}] as const;
const _flaxMemberParameters10 = [{"name":"other","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaterialStateOutlineInputBorder extends Omit<upstream0.OutlineInputBorder, _flaxOwnMembers0>, Omit<upstream1.InputBorder, _flaxOwnMembers0 | keyof upstream0.OutlineInputBorder>, Omit<upstream2.ShapeBorder, _flaxOwnMembers0 | keyof upstream0.OutlineInputBorder | keyof upstream1.InputBorder>, Omit<upstream3.WidgetStateProperty<upstream1.InputBorder>, _flaxOwnMembers0 | keyof upstream0.OutlineInputBorder | keyof upstream1.InputBorder | keyof upstream2.ShapeBorder>, Readonly<{ "__flaxBound:package:flutter/src/material/material_state.dart::MaterialStateOutlineInputBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/material/input_border.dart::OutlineInputBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/material/input_border.dart::InputBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.InputBorder] }> { readonly __MaterialStateOutlineInputBorder: unique symbol;
readonly [_flaxDartTypeValue]: MaterialStateOutlineInputBorder;

}
defineObject("flax.core/sdk_material#type:MaterialStateOutlineInputBorder", ["gapPadding","borderRadius","isOutline","dimensions","preferPaintInterior","borderSide"], [], _flaxBindingMethods("flax.core/sdk_material#type:MaterialStateOutlineInputBorder", "object", {"resolve":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_material#type:OutlineInputBorder");
const _MaterialStateOutlineInputBorderProxy = {type: "flax.core/sdk_material#type:MaterialStateOutlineInputBorder", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"copyWith":_flaxMemberParameters2,"scale":_flaxMemberParameters3,"lerpFrom":_flaxMemberParameters4,"lerpTo":_flaxMemberParameters5,"getInnerPath":_flaxMemberParameters6,"getOuterPath":_flaxMemberParameters6,"paintInterior":_flaxMemberParameters7,"paint":_flaxMemberParameters8,"add":_flaxMemberParameters9,"toString":_flaxMemberParameters1,"resolve":_flaxMemberParameters0,"operatorAdd":_flaxMemberParameters10}, getters: ["gapPadding","borderRadius","isOutline","dimensions","preferPaintInterior","borderSide"], setters: [], contextMembers: [], superMembers: ["get:gapPadding","get:borderRadius","get:isOutline","get:dimensions","get:preferPaintInterior","get:borderSide","copyWith","scale","lerpFrom","lerpTo","getInnerPath","getOuterPath","paintInterior","paint","add","toString","operatorAdd"]} as const;
export interface MaterialStateOutlineInputBorder {
readonly [_flaxDartTypeValue]: MaterialStateOutlineInputBorder;

copyWith(options?: {borderSide?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined; gapPadding?: number | null | undefined}): upstream0.OutlineInputBorder;
scale(t: number): upstream0.OutlineInputBorder;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream2.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream2.ShapeBorder | null;
getInnerPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream9.TextDirection | null | undefined}): upstream7.Path;
getOuterPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream9.TextDirection | null | undefined}): upstream7.Path;
paintInterior(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>, options?: {textDirection?: upstream9.TextDirection | null | undefined}): void;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {gapStart?: number | null | undefined; gapExtent?: number | undefined; gapPercentage?: number | undefined; textDirection?: upstream9.TextDirection | null | undefined}): void;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): upstream2.ShapeBorder | null;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream2.ShapeBorder;
get gapPadding(): number;
get borderRadius(): upstream4.BorderRadius;
get isOutline(): boolean;
get dimensions(): upstream5.EdgeInsetsGeometry;
get preferPaintInterior(): boolean;
get borderSide(): upstream6.BorderSide;
}
export abstract class MaterialStateOutlineInputBorder extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaterialStateOutlineInputBorder>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MaterialStateOutlineInputBorder;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:MaterialStateOutlineInputBorder", readonly [], false];
constructor() { super(_MaterialStateOutlineInputBorderProxy, Array.from(arguments)); }
abstract resolve(states: DartSetInput<upstream12.WidgetState, upstream12.WidgetState>): upstream1.InputBorder;
}
_flaxDefineProxyBase(MaterialStateOutlineInputBorder.prototype, _MaterialStateOutlineInputBorderProxy);
export namespace MaterialStateOutlineInputBorder { export function implement(args: [], implementation: {resolve: ((states: DartSet<upstream12.WidgetState>) => Readonly<{ "__flaxBound:package:flutter/src/material/input_border.dart::InputBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>)}): MaterialStateOutlineInputBorder {
return constructProxy(_MaterialStateOutlineInputBorderProxy, args, implementation) as MaterialStateOutlineInputBorder; } }
_flaxBindInstanceType<MaterialStateOutlineInputBorder, typeof MaterialStateOutlineInputBorder>(MaterialStateOutlineInputBorder, "flax.core/sdk_material#type:MaterialStateOutlineInputBorder", ["flax.core/sdk_material#type:OutlineInputBorder","flax.core/sdk_material#type:InputBorder","flax.core/flutter#type:ShapeBorder","dart:core::Object","flax.core/flutter#type:WidgetStateProperty"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "gapPadding" | "borderRadius" | "isOutline" | "dimensions" | "preferPaintInterior" | "borderSide" | "copyWith" | "scale" | "lerpFrom" | "lerpTo" | "getInnerPath" | "getOuterPath" | "paintInterior" | "paint" | "add" | "toString" | "resolve" | "operatorAdd" | "__flaxBound:package:flutter/src/material/material_state.dart::MaterialStateOutlineInputBorder" | "__flaxBound:package:flutter/src/material/input_border.dart::OutlineInputBorder" | "__flaxBound:package:flutter/src/material/input_border.dart::InputBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty";
