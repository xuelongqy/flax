// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import { _flaxMemberParameters174, _flaxMemberParameters175, _flaxMemberParameters176, _flaxMemberParameters177, _flaxMemberParameters178, _flaxMemberParameters179, _flaxMemberParameters180, _flaxMemberParameters181, _flaxMemberParameters182, _flaxMemberParameters4, _flaxMemberParameters183 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface InputBorder extends Omit<upstream0.ShapeBorder, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> { readonly __InputBorder: unique symbol;
readonly [_flaxDartTypeValue]: InputBorder;

}
defineObject("flax.material/material#type:InputBorder", ["dimensions","preferPaintInterior","borderSide","isOutline"], [], _flaxBindingMethods("flax.material/material#type:InputBorder", "object", {"paint":_flaxMemberParameters174,"copyWith":_flaxMemberParameters175}, {}), [], undefined, "flax.core/flutter#type:ShapeBorder");
const _InputBorderProxy = {type: "flax.material/material#type:InputBorder", parameters: _flaxMemberParameters175, constructors: {"": _flaxMemberParameters175}, methods: {"add":_flaxMemberParameters176,"scale":_flaxMemberParameters177,"lerpFrom":_flaxMemberParameters178,"lerpTo":_flaxMemberParameters179,"getOuterPath":_flaxMemberParameters180,"getInnerPath":_flaxMemberParameters180,"paintInterior":_flaxMemberParameters181,"paint":_flaxMemberParameters182,"toString":_flaxMemberParameters4,"copyWith":_flaxMemberParameters175,"operatorAdd":_flaxMemberParameters183}, getters: ["borderSide","isOutline","dimensions","preferPaintInterior"], setters: [], contextMembers: [], superMembers: ["get:borderSide","get:preferPaintInterior","add","lerpFrom","lerpTo","paintInterior","toString","operatorAdd"]} as const;
export interface InputBorder {
readonly [_flaxDartTypeValue]: InputBorder;

add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): upstream0.ShapeBorder | null;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream0.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream0.ShapeBorder | null;
paintInterior(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>, options?: {textDirection?: upstream5.TextDirection | null | undefined}): void;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream0.ShapeBorder;
get borderSide(): upstream1.BorderSide;
get preferPaintInterior(): boolean;
}
export abstract class InputBorder extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<InputBorder>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: InputBorder;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:InputBorder", readonly [], false];
constructor(options?: {borderSide?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined}) { super(_InputBorderProxy, Array.from(arguments)); }
abstract scale(t: number): upstream0.ShapeBorder;
abstract getOuterPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream5.TextDirection | null | undefined}): upstream3.Path;
abstract getInnerPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream5.TextDirection | null | undefined}): upstream3.Path;
abstract paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {gapStart?: number | null | undefined; gapExtent?: number | undefined; gapPercentage?: number | undefined; textDirection?: upstream5.TextDirection | null | undefined}): void;
abstract copyWith(options?: {borderSide?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}): InputBorder;
abstract get isOutline(): boolean;
abstract get dimensions(): upstream2.EdgeInsetsGeometry;
}
_flaxDefineProxyBase(InputBorder.prototype, _InputBorderProxy);
export namespace InputBorder { export function implement(args: [options?: {borderSide?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined}], implementation: {scale: ((t: number) => Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>); getOuterPath: ((rect: upstream4.Rect, options?: { textDirection?: upstream5.TextDirection | null | undefined }) => Readonly<{ "__flaxBound:dart:ui::Path": readonly [] }>); getInnerPath: ((rect: upstream4.Rect, options?: { textDirection?: upstream5.TextDirection | null | undefined }) => Readonly<{ "__flaxBound:dart:ui::Path": readonly [] }>); paint: ((canvas: upstream6.Canvas, rect: upstream4.Rect, options?: { gapStart?: number | null | undefined; gapExtent?: number | undefined; gapPercentage?: number | undefined; textDirection?: upstream5.TextDirection | null | undefined }) => void); copyWith: ((options?: { borderSide?: upstream1.BorderSide | null | undefined }) => Readonly<{ "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>); get isOutline(): boolean; get dimensions(): Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }>}): InputBorder {
return constructProxy(_InputBorderProxy, args, implementation) as InputBorder; } }
export namespace InputBorder { export declare const none: InputBorder; }
_flaxDefineStaticGetters(InputBorder, "flax.material/material#read:InputBorder.", ["none"]);
_flaxBindInstanceType<InputBorder, typeof InputBorder>(InputBorder, "flax.material/material#type:InputBorder", ["flax.core/flutter#type:ShapeBorder","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "dimensions" | "preferPaintInterior" | "borderSide" | "isOutline" | "add" | "scale" | "lerpFrom" | "lerpTo" | "getOuterPath" | "getInnerPath" | "paintInterior" | "paint" | "toString" | "copyWith" | "operatorAdd" | "__flaxBound:package:material_ui/src/input_border.dart::InputBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder";
