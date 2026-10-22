// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_InputBorder';
import '@flax/material-ui/_bindings/material_InputBorder';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import { _flaxMemberParameters306, _flaxMemberParameters177, _flaxMemberParameters307, _flaxMemberParameters174, _flaxMemberParameters176, _flaxMemberParameters178, _flaxMemberParameters179, _flaxMemberParameters180, _flaxMemberParameters181, _flaxMemberParameters4, _flaxMemberParameters183 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ShapedInputBorder extends Omit<upstream0.InputBorder, _flaxOwnMembers0>, Omit<upstream1.ShapeBorder, _flaxOwnMembers0 | keyof upstream0.InputBorder>, Readonly<{ "__flaxBound:package:material_ui/src/input_border.dart::ShapedInputBorder": readonly [] }>, Readonly<{ "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> { readonly __ShapedInputBorder: unique symbol;
readonly [_flaxDartTypeValue]: ShapedInputBorder;

readonly borderSide: upstream2.BorderSide;
readonly isOutline: boolean;
readonly dimensions: upstream3.EdgeInsetsGeometry;
readonly preferPaintInterior: boolean;
readonly gapPadding: number;
readonly shape: upstream1.ShapeBorder;
copyWith(options?: {borderSide?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; gapPadding?: number | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined}): ShapedInputBorder;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {gapExtent?: number | undefined; gapPercentage?: number | undefined; gapStart?: number | null | undefined; textDirection?: upstream6.TextDirection | null | undefined}): void;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): upstream1.ShapeBorder | null;
scale(t: number): ShapedInputBorder;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
getOuterPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream6.TextDirection | null | undefined}): upstream7.Path;
getInnerPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream6.TextDirection | null | undefined}): upstream7.Path;
paintInterior(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>, options?: {textDirection?: upstream6.TextDirection | null | undefined}): void;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream1.ShapeBorder;
}
defineObject("flax.material/material#type:ShapedInputBorder", ["borderSide","isOutline","dimensions","preferPaintInterior","gapPadding","shape"], [], _flaxBindingMethods("flax.material/material#type:ShapedInputBorder", "object", {"copyWith":_flaxMemberParameters306,"scale":_flaxMemberParameters177}, {}), [], undefined, "flax.material/material#type:InputBorder");
export function _ShapedInputBorderFactory(options: { borderSide?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; shape: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>; gapPadding?: number | undefined }): ShapedInputBorder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:ShapedInputBorder", "", [{"name":"borderSide"},{"name":"shape","required":true},{"name":"gapPadding"}], [], options) as ShapedInputBorder;
}
const _ShapedInputBorderProxy = {type: "flax.material/material#type:ShapedInputBorder", parameters: _flaxMemberParameters307, constructors: {"": _flaxMemberParameters307}, methods: {"copyWith":_flaxMemberParameters306,"paint":_flaxMemberParameters174,"add":_flaxMemberParameters176,"scale":_flaxMemberParameters177,"lerpFrom":_flaxMemberParameters178,"lerpTo":_flaxMemberParameters179,"getOuterPath":_flaxMemberParameters180,"getInnerPath":_flaxMemberParameters180,"paintInterior":_flaxMemberParameters181,"toString":_flaxMemberParameters4,"operatorAdd":_flaxMemberParameters183}, getters: ["gapPadding","shape","isOutline","dimensions","preferPaintInterior","borderSide"], setters: [], contextMembers: [], superMembers: ["get:gapPadding","get:shape","get:isOutline","get:dimensions","get:preferPaintInterior","get:borderSide","copyWith","paint","add","scale","lerpFrom","lerpTo","getOuterPath","getInnerPath","paintInterior","toString","operatorAdd"]} as const;
export interface _ShapedInputBorderNative extends ShapedInputBorder {
readonly [_flaxDartTypeValue]: _ShapedInputBorderNative;

copyWith(options?: {borderSide?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; gapPadding?: number | null | undefined}): ShapedInputBorder;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {gapStart?: number | null | undefined; gapExtent?: number | undefined; gapPercentage?: number | undefined; textDirection?: upstream6.TextDirection | null | undefined}): void;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): upstream1.ShapeBorder | null;
scale(t: number): ShapedInputBorder;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
getOuterPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream6.TextDirection | null | undefined}): upstream7.Path;
getInnerPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream6.TextDirection | null | undefined}): upstream7.Path;
paintInterior(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>, options?: {textDirection?: upstream6.TextDirection | null | undefined}): void;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream1.ShapeBorder;
get gapPadding(): number;
get shape(): upstream1.ShapeBorder;
get isOutline(): boolean;
get dimensions(): upstream3.EdgeInsetsGeometry;
get preferPaintInterior(): boolean;
get borderSide(): upstream2.BorderSide;
}
export abstract class _ShapedInputBorderNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ShapedInputBorder>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ShapedInputBorder;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:ShapedInputBorder", readonly [], false];
constructor(options: {borderSide?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; shape: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>; gapPadding?: number | undefined}) { super(_ShapedInputBorderProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ShapedInputBorderNative.prototype, _ShapedInputBorderProxy);
export namespace _ShapedInputBorderFactory { export function implement(args: [options: {borderSide?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; shape: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>; gapPadding?: number | undefined}], implementation: {}): ShapedInputBorder {
return constructProxy(_ShapedInputBorderProxy, args, implementation) as ShapedInputBorder; } }
const _ShapedInputBorderBinding = _flaxProxyFactory(_ShapedInputBorderFactory, _ShapedInputBorderNative) as unknown as typeof _ShapedInputBorderFactory & (new(options: {borderSide?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; shape: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>; gapPadding?: number | undefined}) => _ShapedInputBorderNative);
export const ShapedInputBorder: typeof _ShapedInputBorderBinding & _FlaxInstanceType<ShapedInputBorder> & _FlaxDartType<ShapedInputBorder, readonly ["class", "flax.material/material#type:ShapedInputBorder", readonly [], false]> = _flaxBindInstanceType<ShapedInputBorder, typeof _ShapedInputBorderBinding>(_ShapedInputBorderBinding, "flax.material/material#type:ShapedInputBorder", ["flax.material/material#type:InputBorder","flax.core/flutter#type:ShapeBorder","dart:core::Object"]) as typeof _ShapedInputBorderBinding & _FlaxInstanceType<ShapedInputBorder> & _FlaxDartType<ShapedInputBorder, readonly ["class", "flax.material/material#type:ShapedInputBorder", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "borderSide" | "isOutline" | "dimensions" | "preferPaintInterior" | "gapPadding" | "shape" | "copyWith" | "paint" | "add" | "scale" | "lerpFrom" | "lerpTo" | "getOuterPath" | "getInnerPath" | "paintInterior" | "toString" | "operatorAdd" | "__flaxBound:package:material_ui/src/input_border.dart::ShapedInputBorder" | "__flaxBound:package:material_ui/src/input_border.dart::InputBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder";
