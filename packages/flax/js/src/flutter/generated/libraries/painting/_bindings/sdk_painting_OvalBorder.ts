// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_CircleBorder';
import '@flax/flutter/painting/_bindings/flutter_CircleBorder';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
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
import { _flaxMemberParameters107, _flaxMemberParameters108, _flaxMemberParameters14, _flaxMemberParameters15, _flaxMemberParameters16, _flaxMemberParameters18, _flaxMemberParameters19, _flaxMemberParameters20, _flaxMemberParameters2, _flaxMemberParameters17, _flaxMemberParameters21 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface OvalBorder extends Omit<upstream0.CircleBorder, _flaxOwnMembers0>, Omit<upstream1.OutlinedBorder, _flaxOwnMembers0 | keyof upstream0.CircleBorder>, Omit<upstream2.ShapeBorder, _flaxOwnMembers0 | keyof upstream0.CircleBorder | keyof upstream1.OutlinedBorder>, Readonly<{ "__flaxBound:package:flutter/src/painting/oval_border.dart::OvalBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/circle_border.dart::CircleBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> { readonly __OvalBorder: unique symbol;
readonly [_flaxDartTypeValue]: OvalBorder;

readonly eccentricity: number;
readonly preferPaintInterior: boolean;
readonly dimensions: upstream4.EdgeInsetsGeometry;
readonly side: upstream3.BorderSide;
scale(t: number): upstream2.ShapeBorder;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream2.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream2.ShapeBorder | null;
getInnerPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): upstream5.Path;
getOuterPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): upstream5.Path;
paintInterior(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): void;
copyWith(options?: {eccentricity?: number | null | undefined; side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}): OvalBorder;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): void;
toString(): string;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): upstream2.ShapeBorder | null;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream2.ShapeBorder;
}
defineObject("flax.core/sdk_painting#type:OvalBorder", ["eccentricity","preferPaintInterior","dimensions","side"], [], _flaxBindingMethods("flax.core/sdk_painting#type:OvalBorder", "object", {"copyWith":_flaxMemberParameters107}, {}), [], undefined, "flax.core/flutter#type:CircleBorder");
export function _OvalBorderFactory(options: { side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; eccentricity?: number | undefined } = {}): OvalBorder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:OvalBorder", "", [{"name":"side"},{"name":"eccentricity"}], [], options) as OvalBorder;
}
const _OvalBorderProxy = {type: "flax.core/sdk_painting#type:OvalBorder", parameters: _flaxMemberParameters108, constructors: {"": _flaxMemberParameters108}, methods: {"scale":_flaxMemberParameters14,"lerpFrom":_flaxMemberParameters15,"lerpTo":_flaxMemberParameters16,"getInnerPath":_flaxMemberParameters18,"getOuterPath":_flaxMemberParameters18,"paintInterior":_flaxMemberParameters19,"copyWith":_flaxMemberParameters107,"paint":_flaxMemberParameters20,"toString":_flaxMemberParameters2,"add":_flaxMemberParameters17,"operatorAdd":_flaxMemberParameters21}, getters: ["eccentricity","preferPaintInterior","dimensions","side"], setters: [], contextMembers: [], superMembers: ["get:eccentricity","get:preferPaintInterior","get:dimensions","get:side","scale","lerpFrom","lerpTo","getInnerPath","getOuterPath","paintInterior","copyWith","paint","toString","add","operatorAdd"]} as const;
export interface _OvalBorderNative extends OvalBorder {
readonly [_flaxDartTypeValue]: _OvalBorderNative;

scale(t: number): upstream2.ShapeBorder;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream2.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream2.ShapeBorder | null;
getInnerPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): upstream5.Path;
getOuterPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): upstream5.Path;
paintInterior(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): void;
copyWith(options?: {side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; eccentricity?: number | null | undefined}): OvalBorder;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): void;
toString(): string;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): upstream2.ShapeBorder | null;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream2.ShapeBorder;
get eccentricity(): number;
get preferPaintInterior(): boolean;
get dimensions(): upstream4.EdgeInsetsGeometry;
get side(): upstream3.BorderSide;
}
export abstract class _OvalBorderNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<OvalBorder>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: OvalBorder;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:OvalBorder", readonly [], false];
constructor(options?: {side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; eccentricity?: number | undefined}) { super(_OvalBorderProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_OvalBorderNative.prototype, _OvalBorderProxy);
export namespace _OvalBorderFactory { export function implement(args: [options?: {side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; eccentricity?: number | undefined}], implementation: {}): OvalBorder {
return constructProxy(_OvalBorderProxy, args, implementation) as OvalBorder; } }
const _OvalBorderBinding = _flaxProxyFactory(_OvalBorderFactory, _OvalBorderNative) as unknown as typeof _OvalBorderFactory & (new(options?: {side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; eccentricity?: number | undefined}) => _OvalBorderNative);
export const OvalBorder: typeof _OvalBorderBinding & _FlaxInstanceType<OvalBorder> & _FlaxDartType<OvalBorder, readonly ["class", "flax.core/sdk_painting#type:OvalBorder", readonly [], false]> = _flaxBindInstanceType<OvalBorder, typeof _OvalBorderBinding>(_OvalBorderBinding, "flax.core/sdk_painting#type:OvalBorder", ["flax.core/flutter#type:CircleBorder","flax.core/flutter#type:OutlinedBorder","flax.core/flutter#type:ShapeBorder","dart:core::Object"]) as typeof _OvalBorderBinding & _FlaxInstanceType<OvalBorder> & _FlaxDartType<OvalBorder, readonly ["class", "flax.core/sdk_painting#type:OvalBorder", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "eccentricity" | "preferPaintInterior" | "dimensions" | "side" | "scale" | "lerpFrom" | "lerpTo" | "getInnerPath" | "getOuterPath" | "paintInterior" | "copyWith" | "paint" | "toString" | "add" | "operatorAdd" | "__flaxBound:package:flutter/src/painting/oval_border.dart::OvalBorder" | "__flaxBound:package:flutter/src/painting/circle_border.dart::CircleBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder";
