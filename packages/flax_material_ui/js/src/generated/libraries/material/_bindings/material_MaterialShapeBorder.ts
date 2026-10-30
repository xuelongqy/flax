// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/material-ui/_bindings/material_RoundedPolygon';
import '@flax/material-ui/_bindings/material_RoundedPolygon';
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
import { _flaxMemberParameters222, _flaxMemberParameters223, _flaxMemberParameters178, _flaxMemberParameters179, _flaxMemberParameters180, _flaxMemberParameters181, _flaxMemberParameters182, _flaxMemberParameters183, _flaxMemberParameters224, _flaxMemberParameters4, _flaxMemberParameters185 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaterialShapeBorder extends Omit<upstream0.OutlinedBorder, _flaxOwnMembers0>, Omit<upstream1.ShapeBorder, _flaxOwnMembers0 | keyof upstream0.OutlinedBorder>, Readonly<{ "__flaxBound:package:material_ui/src/material_shape_border.dart::MaterialShapeBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> { readonly __MaterialShapeBorder: unique symbol;
readonly [_flaxDartTypeValue]: MaterialShapeBorder;

readonly dimensions: upstream4.EdgeInsetsGeometry;
readonly preferPaintInterior: boolean;
readonly side: upstream3.BorderSide;
readonly shape: upstream2.RoundedPolygon;
readonly squash: number;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): upstream1.ShapeBorder | null;
scale(t: number): upstream1.ShapeBorder;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
getOuterPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): upstream5.Path;
getInnerPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): upstream5.Path;
paintInterior(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): void;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): void;
toString(): string;
copyWith(options?: {shape?: Readonly<{ "__flaxBound:package:material_ui/src/shapes/rounded_polygon.dart::RoundedPolygon": readonly [] }> | null | undefined; side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; squash?: number | null | undefined}): MaterialShapeBorder;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream1.ShapeBorder;
}
defineObject("flax.material/material#type:MaterialShapeBorder", ["dimensions","preferPaintInterior","side","shape","squash"], [], _flaxBindingMethods("flax.material/material#type:MaterialShapeBorder", "object", {"copyWith":_flaxMemberParameters222}, {}), [], undefined, "flax.core/flutter#type:OutlinedBorder");
export function _MaterialShapeBorderFactory(options: { shape: Readonly<{ "__flaxBound:package:material_ui/src/shapes/rounded_polygon.dart::RoundedPolygon": readonly [] }>; side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; squash?: number | undefined }): MaterialShapeBorder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:MaterialShapeBorder", "", [{"name":"shape","required":true},{"name":"side"},{"name":"squash"}], [], options) as MaterialShapeBorder;
}
const _MaterialShapeBorderProxy = {type: "flax.material/material#type:MaterialShapeBorder", parameters: _flaxMemberParameters223, constructors: {"": _flaxMemberParameters223}, methods: {"add":_flaxMemberParameters178,"scale":_flaxMemberParameters179,"lerpFrom":_flaxMemberParameters180,"lerpTo":_flaxMemberParameters181,"getOuterPath":_flaxMemberParameters182,"getInnerPath":_flaxMemberParameters182,"paintInterior":_flaxMemberParameters183,"paint":_flaxMemberParameters224,"toString":_flaxMemberParameters4,"copyWith":_flaxMemberParameters222,"operatorAdd":_flaxMemberParameters185}, getters: ["shape","squash","dimensions","side","preferPaintInterior"], setters: [], contextMembers: [], superMembers: ["get:shape","get:squash","get:dimensions","get:side","get:preferPaintInterior","add","scale","lerpFrom","lerpTo","getOuterPath","getInnerPath","paintInterior","paint","toString","copyWith","operatorAdd"]} as const;
export interface _MaterialShapeBorderNative extends MaterialShapeBorder {
readonly [_flaxDartTypeValue]: _MaterialShapeBorderNative;

add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): upstream1.ShapeBorder | null;
scale(t: number): upstream1.ShapeBorder;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
getOuterPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): upstream5.Path;
getInnerPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): upstream5.Path;
paintInterior(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): void;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): void;
toString(): string;
copyWith(options?: {shape?: Readonly<{ "__flaxBound:package:material_ui/src/shapes/rounded_polygon.dart::RoundedPolygon": readonly [] }> | null | undefined; side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; squash?: number | null | undefined}): MaterialShapeBorder;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream1.ShapeBorder;
get shape(): upstream2.RoundedPolygon;
get squash(): number;
get dimensions(): upstream4.EdgeInsetsGeometry;
get side(): upstream3.BorderSide;
get preferPaintInterior(): boolean;
}
export abstract class _MaterialShapeBorderNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaterialShapeBorder>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MaterialShapeBorder;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:MaterialShapeBorder", readonly [], false];
constructor(options: {shape: Readonly<{ "__flaxBound:package:material_ui/src/shapes/rounded_polygon.dart::RoundedPolygon": readonly [] }>; side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; squash?: number | undefined}) { super(_MaterialShapeBorderProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_MaterialShapeBorderNative.prototype, _MaterialShapeBorderProxy);
export namespace _MaterialShapeBorderFactory { export function implement(args: [options: {shape: Readonly<{ "__flaxBound:package:material_ui/src/shapes/rounded_polygon.dart::RoundedPolygon": readonly [] }>; side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; squash?: number | undefined}], implementation: {}): MaterialShapeBorder {
return constructProxy(_MaterialShapeBorderProxy, args, implementation) as MaterialShapeBorder; } }
const _MaterialShapeBorderBinding = _flaxProxyFactory(_MaterialShapeBorderFactory, _MaterialShapeBorderNative) as unknown as typeof _MaterialShapeBorderFactory & (new(options: {shape: Readonly<{ "__flaxBound:package:material_ui/src/shapes/rounded_polygon.dart::RoundedPolygon": readonly [] }>; side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; squash?: number | undefined}) => _MaterialShapeBorderNative);
export const MaterialShapeBorder: typeof _MaterialShapeBorderBinding & _FlaxInstanceType<MaterialShapeBorder> & _FlaxDartType<MaterialShapeBorder, readonly ["class", "flax.material/material#type:MaterialShapeBorder", readonly [], false]> = _flaxBindInstanceType<MaterialShapeBorder, typeof _MaterialShapeBorderBinding>(_MaterialShapeBorderBinding, "flax.material/material#type:MaterialShapeBorder", ["flax.core/flutter#type:OutlinedBorder","flax.core/flutter#type:ShapeBorder","dart:core::Object"]) as typeof _MaterialShapeBorderBinding & _FlaxInstanceType<MaterialShapeBorder> & _FlaxDartType<MaterialShapeBorder, readonly ["class", "flax.material/material#type:MaterialShapeBorder", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "dimensions" | "preferPaintInterior" | "side" | "shape" | "squash" | "add" | "scale" | "lerpFrom" | "lerpTo" | "getOuterPath" | "getInnerPath" | "paintInterior" | "paint" | "toString" | "copyWith" | "operatorAdd" | "__flaxBound:package:material_ui/src/material_shape_border.dart::MaterialShapeBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder";
