// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import { _flaxMemberParameters118, _flaxMemberParameters119, _flaxMemberParameters120, _flaxMemberParameters14, _flaxMemberParameters15, _flaxMemberParameters16, _flaxMemberParameters17, _flaxMemberParameters18, _flaxMemberParameters19, _flaxMemberParameters20, _flaxMemberParameters2, _flaxMemberParameters21 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StarBorder extends Omit<upstream0.OutlinedBorder, _flaxOwnMembers0>, Omit<upstream1.ShapeBorder, _flaxOwnMembers0 | keyof upstream0.OutlinedBorder>, Readonly<{ "__flaxBound:package:flutter/src/painting/star_border.dart::StarBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> { readonly __StarBorder: unique symbol;
readonly [_flaxDartTypeValue]: StarBorder;

readonly dimensions: upstream3.EdgeInsetsGeometry;
readonly side: upstream2.BorderSide;
readonly preferPaintInterior: boolean;
readonly points: number;
readonly innerRadiusRatio: number;
readonly pointRounding: number;
readonly valleyRounding: number;
readonly rotation: number;
readonly squash: number;
copyWith(options?: {innerRadiusRatio?: number | null | undefined; pointRounding?: number | null | undefined; points?: number | null | undefined; rotation?: number | null | undefined; side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; squash?: number | null | undefined; valleyRounding?: number | null | undefined}): StarBorder;
scale(t: number): upstream1.ShapeBorder;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): upstream1.ShapeBorder | null;
getOuterPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream6.TextDirection | null | undefined}): upstream4.Path;
getInnerPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream6.TextDirection | null | undefined}): upstream4.Path;
paintInterior(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>, options?: {textDirection?: upstream6.TextDirection | null | undefined}): void;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream6.TextDirection | null | undefined}): void;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream1.ShapeBorder;
}
defineObject("flax.core/sdk_painting#type:StarBorder", ["dimensions","side","preferPaintInterior","points","innerRadiusRatio","pointRounding","valleyRounding","rotation","squash"], [], _flaxBindingMethods("flax.core/sdk_painting#type:StarBorder", "object", {"copyWith":_flaxMemberParameters118}, {}), [], undefined, "flax.core/flutter#type:OutlinedBorder");
export function _StarBorderFactory(options: { side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; points?: number | undefined; innerRadiusRatio?: number | undefined; pointRounding?: number | undefined; valleyRounding?: number | undefined; rotation?: number | undefined; squash?: number | undefined } = {}): StarBorder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:StarBorder", "", [{"name":"side"},{"name":"points"},{"name":"innerRadiusRatio"},{"name":"pointRounding"},{"name":"valleyRounding"},{"name":"rotation"},{"name":"squash"}], [], options) as StarBorder;
}
export namespace _StarBorderFactory {
export function polygon(options: { side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; sides?: number | undefined; pointRounding?: number | undefined; rotation?: number | undefined; squash?: number | undefined } = {}): StarBorder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:StarBorder", "polygon", [{"name":"side"},{"name":"sides"},{"name":"pointRounding"},{"name":"rotation"},{"name":"squash"}], [], options) as StarBorder;
}
}
const _StarBorderProxy = {type: "flax.core/sdk_painting#type:StarBorder", parameters: _flaxMemberParameters119, constructors: {"": _flaxMemberParameters119,"polygon": _flaxMemberParameters120}, methods: {"copyWith":_flaxMemberParameters118,"scale":_flaxMemberParameters14,"lerpFrom":_flaxMemberParameters15,"lerpTo":_flaxMemberParameters16,"add":_flaxMemberParameters17,"getOuterPath":_flaxMemberParameters18,"getInnerPath":_flaxMemberParameters18,"paintInterior":_flaxMemberParameters19,"paint":_flaxMemberParameters20,"toString":_flaxMemberParameters2,"operatorAdd":_flaxMemberParameters21}, getters: ["points","innerRadiusRatio","pointRounding","valleyRounding","rotation","squash","dimensions","side","preferPaintInterior"], setters: [], contextMembers: [], superMembers: ["get:points","get:innerRadiusRatio","get:pointRounding","get:valleyRounding","get:rotation","get:squash","get:dimensions","get:side","get:preferPaintInterior","copyWith","scale","lerpFrom","lerpTo","add","getOuterPath","getInnerPath","paintInterior","paint","toString","operatorAdd"]} as const;
export interface _StarBorderNative extends StarBorder {
readonly [_flaxDartTypeValue]: _StarBorderNative;
readonly [_flaxDartConstructors]?: {"": (options?: {side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; points?: number | undefined; innerRadiusRatio?: number | undefined; pointRounding?: number | undefined; valleyRounding?: number | undefined; rotation?: number | undefined; squash?: number | undefined}) => void;"polygon": (options?: {side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; sides?: number | undefined; pointRounding?: number | undefined; rotation?: number | undefined; squash?: number | undefined}) => void;};

copyWith(options?: {side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; points?: number | null | undefined; innerRadiusRatio?: number | null | undefined; pointRounding?: number | null | undefined; valleyRounding?: number | null | undefined; rotation?: number | null | undefined; squash?: number | null | undefined}): StarBorder;
scale(t: number): upstream1.ShapeBorder;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): upstream1.ShapeBorder | null;
getOuterPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream6.TextDirection | null | undefined}): upstream4.Path;
getInnerPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream6.TextDirection | null | undefined}): upstream4.Path;
paintInterior(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>, options?: {textDirection?: upstream6.TextDirection | null | undefined}): void;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream6.TextDirection | null | undefined}): void;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream1.ShapeBorder;
get points(): number;
get innerRadiusRatio(): number;
get pointRounding(): number;
get valleyRounding(): number;
get rotation(): number;
get squash(): number;
get dimensions(): upstream3.EdgeInsetsGeometry;
get side(): upstream2.BorderSide;
get preferPaintInterior(): boolean;
}
export abstract class _StarBorderNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<StarBorder>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: StarBorder;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:StarBorder", readonly [], false];
constructor(options?: {side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; points?: number | undefined; innerRadiusRatio?: number | undefined; pointRounding?: number | undefined; valleyRounding?: number | undefined; rotation?: number | undefined; squash?: number | undefined}); constructor(call: _FlaxProxySuper<_StarBorderNative>); constructor(...args: unknown[]) { super(_StarBorderProxy, args); }
}
_flaxDefineProxyBase(_StarBorderNative.prototype, _StarBorderProxy);
export namespace _StarBorderFactory { export function implement(args: [options?: {side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; points?: number | undefined; innerRadiusRatio?: number | undefined; pointRounding?: number | undefined; valleyRounding?: number | undefined; rotation?: number | undefined; squash?: number | undefined}], implementation: {}): StarBorder {
return constructProxy(_StarBorderProxy, args, implementation) as StarBorder; } }
const _StarBorderBinding = _flaxProxyFactory(_StarBorderFactory, _StarBorderNative) as unknown as typeof _StarBorderFactory & (new(options?: {side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; points?: number | undefined; innerRadiusRatio?: number | undefined; pointRounding?: number | undefined; valleyRounding?: number | undefined; rotation?: number | undefined; squash?: number | undefined}) => _StarBorderNative) & (new(call: _FlaxProxySuper<_StarBorderNative>) => _StarBorderNative);
export const StarBorder: typeof _StarBorderBinding & _FlaxInstanceType<StarBorder> & _FlaxDartType<StarBorder, readonly ["class", "flax.core/sdk_painting#type:StarBorder", readonly [], false]> = _flaxBindInstanceType<StarBorder, typeof _StarBorderBinding>(_StarBorderBinding, "flax.core/sdk_painting#type:StarBorder", ["flax.core/flutter#type:OutlinedBorder","flax.core/flutter#type:ShapeBorder","dart:core::Object"]) as typeof _StarBorderBinding & _FlaxInstanceType<StarBorder> & _FlaxDartType<StarBorder, readonly ["class", "flax.core/sdk_painting#type:StarBorder", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "dimensions" | "side" | "preferPaintInterior" | "points" | "innerRadiusRatio" | "pointRounding" | "valleyRounding" | "rotation" | "squash" | "copyWith" | "scale" | "lerpFrom" | "lerpTo" | "add" | "getOuterPath" | "getInnerPath" | "paintInterior" | "paint" | "toString" | "operatorAdd" | "__flaxBound:package:flutter/src/painting/star_border.dart::StarBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder";
