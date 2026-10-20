// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/painting/_bindings/flutter_BorderRadiusGeometry';
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
import { _flaxMemberParameters12, _flaxMemberParameters13, _flaxMemberParameters14, _flaxMemberParameters15, _flaxMemberParameters16, _flaxMemberParameters17, _flaxMemberParameters18, _flaxMemberParameters19, _flaxMemberParameters20, _flaxMemberParameters2, _flaxMemberParameters21 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RoundedSuperellipseBorder extends Omit<upstream0.OutlinedBorder, _flaxOwnMembers0>, Omit<upstream1.ShapeBorder, _flaxOwnMembers0 | keyof upstream0.OutlinedBorder>, Readonly<{ "__flaxBound:package:flutter/src/painting/rounded_rectangle_border.dart::RoundedSuperellipseBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/rounded_rectangle_border.dart::_RRectLikeBorder": readonly [] }> { readonly __RoundedSuperellipseBorder: unique symbol;
readonly [_flaxDartTypeValue]: RoundedSuperellipseBorder;

readonly dimensions: upstream4.EdgeInsetsGeometry;
readonly side: upstream2.BorderSide;
readonly preferPaintInterior: boolean;
readonly borderRadius: upstream3.BorderRadiusGeometry;
copyWith(options?: {borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined; side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}): RoundedSuperellipseBorder;
scale(t: number): upstream1.ShapeBorder;
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
defineObject("flax.core/sdk_painting#type:RoundedSuperellipseBorder", ["dimensions","side","preferPaintInterior","borderRadius"], [], _flaxBindingMethods("flax.core/sdk_painting#type:RoundedSuperellipseBorder", "object", {"copyWith":_flaxMemberParameters12}, {}), [], undefined, "flax.core/flutter#type:OutlinedBorder");
export function _RoundedSuperellipseBorderFactory(options: { side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined } = {}): RoundedSuperellipseBorder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:RoundedSuperellipseBorder", "", [{"name":"side"},{"name":"borderRadius"}], [], options) as RoundedSuperellipseBorder;
}
const _RoundedSuperellipseBorderProxy = {type: "flax.core/sdk_painting#type:RoundedSuperellipseBorder", parameters: _flaxMemberParameters13, constructors: {"": _flaxMemberParameters13}, methods: {"copyWith":_flaxMemberParameters12,"scale":_flaxMemberParameters14,"lerpFrom":_flaxMemberParameters15,"lerpTo":_flaxMemberParameters16,"add":_flaxMemberParameters17,"getOuterPath":_flaxMemberParameters18,"getInnerPath":_flaxMemberParameters18,"paintInterior":_flaxMemberParameters19,"paint":_flaxMemberParameters20,"toString":_flaxMemberParameters2,"operatorAdd":_flaxMemberParameters21}, getters: ["borderRadius","preferPaintInterior","dimensions","side"], setters: [], contextMembers: [], superMembers: ["get:borderRadius","get:preferPaintInterior","get:dimensions","get:side","copyWith","scale","lerpFrom","lerpTo","add","getOuterPath","getInnerPath","paintInterior","paint","toString","operatorAdd"]} as const;
export interface _RoundedSuperellipseBorderNative extends RoundedSuperellipseBorder {
readonly [_flaxDartTypeValue]: _RoundedSuperellipseBorderNative;

copyWith(options?: {side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined}): RoundedSuperellipseBorder;
scale(t: number): upstream1.ShapeBorder;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): upstream1.ShapeBorder | null;
getOuterPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): upstream5.Path;
getInnerPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): upstream5.Path;
paintInterior(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): void;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): void;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream1.ShapeBorder;
get borderRadius(): upstream3.BorderRadiusGeometry;
get preferPaintInterior(): boolean;
get dimensions(): upstream4.EdgeInsetsGeometry;
get side(): upstream2.BorderSide;
}
export abstract class _RoundedSuperellipseBorderNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RoundedSuperellipseBorder>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RoundedSuperellipseBorder;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:RoundedSuperellipseBorder", readonly [], false];
constructor(options?: {side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined}) { super(_RoundedSuperellipseBorderProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_RoundedSuperellipseBorderNative.prototype, _RoundedSuperellipseBorderProxy);
export namespace _RoundedSuperellipseBorderFactory { export function implement(args: [options?: {side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined}], implementation: {}): RoundedSuperellipseBorder {
return constructProxy(_RoundedSuperellipseBorderProxy, args, implementation) as RoundedSuperellipseBorder; } }
const _RoundedSuperellipseBorderBinding = _flaxProxyFactory(_RoundedSuperellipseBorderFactory, _RoundedSuperellipseBorderNative) as unknown as typeof _RoundedSuperellipseBorderFactory & (new(options?: {side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined}) => _RoundedSuperellipseBorderNative);
export const RoundedSuperellipseBorder: typeof _RoundedSuperellipseBorderBinding & _FlaxInstanceType<RoundedSuperellipseBorder> & _FlaxDartType<RoundedSuperellipseBorder, readonly ["class", "flax.core/sdk_painting#type:RoundedSuperellipseBorder", readonly [], false]> = _flaxBindInstanceType<RoundedSuperellipseBorder, typeof _RoundedSuperellipseBorderBinding>(_RoundedSuperellipseBorderBinding, "flax.core/sdk_painting#type:RoundedSuperellipseBorder", ["flax.core/flutter#type:OutlinedBorder","flax.core/flutter#type:ShapeBorder","dart:core::Object","package:flutter/src/painting/rounded_rectangle_border.dart::_RRectLikeBorder"]) as typeof _RoundedSuperellipseBorderBinding & _FlaxInstanceType<RoundedSuperellipseBorder> & _FlaxDartType<RoundedSuperellipseBorder, readonly ["class", "flax.core/sdk_painting#type:RoundedSuperellipseBorder", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "dimensions" | "side" | "preferPaintInterior" | "borderRadius" | "copyWith" | "scale" | "lerpFrom" | "lerpTo" | "add" | "getOuterPath" | "getInnerPath" | "paintInterior" | "paint" | "toString" | "operatorAdd" | "__flaxBound:package:flutter/src/painting/rounded_rectangle_border.dart::RoundedSuperellipseBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder" | "__flaxBound:package:flutter/src/painting/rounded_rectangle_border.dart::_RRectLikeBorder";
