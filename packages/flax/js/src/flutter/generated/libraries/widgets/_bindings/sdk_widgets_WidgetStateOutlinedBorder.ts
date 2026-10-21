// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesConstraint';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesConstraint';
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
import { _flaxMemberParameters514, _flaxMemberParameters2, _flaxMemberParameters525, _flaxMemberParameters47, _flaxMemberParameters526, _flaxMemberParameters527, _flaxMemberParameters528, _flaxMemberParameters529, _flaxMemberParameters530, _flaxMemberParameters531, _flaxMemberParameters61 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface WidgetStateOutlinedBorder extends Omit<upstream0.OutlinedBorder, _flaxOwnMembers0>, Omit<upstream1.ShapeBorder, _flaxOwnMembers0 | keyof upstream0.OutlinedBorder>, Omit<upstream2.WidgetStateProperty<upstream0.OutlinedBorder | null>, _flaxOwnMembers0 | keyof upstream0.OutlinedBorder | keyof upstream1.ShapeBorder>, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateOutlinedBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream0.OutlinedBorder | null] }> { readonly __WidgetStateOutlinedBorder: unique symbol;
readonly [_flaxDartTypeValue]: WidgetStateOutlinedBorder;

readonly dimensions: upstream5.EdgeInsetsGeometry;
readonly side: upstream6.BorderSide;
readonly preferPaintInterior: boolean;
copyWith(options?: {side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}): upstream0.OutlinedBorder;
scale(t: number): upstream1.ShapeBorder;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): upstream1.ShapeBorder | null;
getOuterPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream9.TextDirection | null | undefined}): upstream7.Path;
getInnerPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream9.TextDirection | null | undefined}): upstream7.Path;
paintInterior(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>, options?: {textDirection?: upstream9.TextDirection | null | undefined}): void;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream9.TextDirection | null | undefined}): void;
toString(): string;
resolve(states: DartSetInput<upstream3.WidgetState, upstream3.WidgetState>): upstream0.OutlinedBorder | null;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream1.ShapeBorder;
}
defineObject("flax.core/sdk_widgets#type:WidgetStateOutlinedBorder", ["dimensions","side","preferPaintInterior"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:WidgetStateOutlinedBorder", "object", {"resolve":_flaxMemberParameters514}, {}), [], undefined, "flax.core/flutter#type:OutlinedBorder");
export namespace _WidgetStateOutlinedBorderFactory {
export function resolveWith(callback: ((states: DartSet<upstream3.WidgetState>) => Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null)): WidgetStateOutlinedBorder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:WidgetStateOutlinedBorder", "resolveWith", [{"name":"callback","required":true,"positional":true}], [callback], {}) as WidgetStateOutlinedBorder;
}
}
export namespace _WidgetStateOutlinedBorderFactory {
export function fromMap(map: DartMapInput<upstream4.WidgetStatesConstraint, upstream0.OutlinedBorder | null, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null>): WidgetStateOutlinedBorder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:WidgetStateOutlinedBorder", "fromMap", [{"name":"map","required":true,"positional":true}], [map], {}) as WidgetStateOutlinedBorder;
}
}
const _WidgetStateOutlinedBorderProxy = {type: "flax.core/sdk_widgets#type:WidgetStateOutlinedBorder", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"copyWith":_flaxMemberParameters525,"scale":_flaxMemberParameters47,"lerpFrom":_flaxMemberParameters526,"lerpTo":_flaxMemberParameters527,"add":_flaxMemberParameters528,"getOuterPath":_flaxMemberParameters529,"getInnerPath":_flaxMemberParameters529,"paintInterior":_flaxMemberParameters530,"paint":_flaxMemberParameters531,"toString":_flaxMemberParameters2,"resolve":_flaxMemberParameters514,"operatorAdd":_flaxMemberParameters61}, getters: ["dimensions","side","preferPaintInterior"], setters: [], contextMembers: [], superMembers: ["get:dimensions","get:side","get:preferPaintInterior","lerpFrom","lerpTo","add","paintInterior","toString","operatorAdd"]} as const;
export interface _WidgetStateOutlinedBorderNative extends WidgetStateOutlinedBorder {
readonly [_flaxDartTypeValue]: _WidgetStateOutlinedBorderNative;

lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): upstream1.ShapeBorder | null;
paintInterior(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>, options?: {textDirection?: upstream9.TextDirection | null | undefined}): void;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream1.ShapeBorder;
get dimensions(): upstream5.EdgeInsetsGeometry;
get side(): upstream6.BorderSide;
get preferPaintInterior(): boolean;
}
export abstract class _WidgetStateOutlinedBorderNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WidgetStateOutlinedBorder>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: WidgetStateOutlinedBorder;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:WidgetStateOutlinedBorder", readonly [], false];
constructor() { super(_WidgetStateOutlinedBorderProxy, Array.from(arguments)); }
abstract copyWith(options?: {side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}): upstream0.OutlinedBorder;
abstract scale(t: number): upstream1.ShapeBorder;
abstract getOuterPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream9.TextDirection | null | undefined}): upstream7.Path;
abstract getInnerPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream9.TextDirection | null | undefined}): upstream7.Path;
abstract paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream9.TextDirection | null | undefined}): void;
abstract resolve(states: DartSetInput<upstream3.WidgetState, upstream3.WidgetState>): upstream0.OutlinedBorder | null;
}
_flaxDefineProxyBase(_WidgetStateOutlinedBorderNative.prototype, _WidgetStateOutlinedBorderProxy);
export namespace _WidgetStateOutlinedBorderFactory { export function implement(args: [], implementation: {copyWith: ((options?: { side?: upstream6.BorderSide | null | undefined }) => Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>); scale: ((t: number) => Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>); getOuterPath: ((rect: upstream8.Rect, options?: { textDirection?: upstream9.TextDirection | null | undefined }) => Readonly<{ "__flaxBound:dart:ui::Path": readonly [] }>); getInnerPath: ((rect: upstream8.Rect, options?: { textDirection?: upstream9.TextDirection | null | undefined }) => Readonly<{ "__flaxBound:dart:ui::Path": readonly [] }>); paint: ((canvas: upstream10.Canvas, rect: upstream8.Rect, options?: { textDirection?: upstream9.TextDirection | null | undefined }) => void); resolve: ((states: DartSet<upstream3.WidgetState>) => Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null)}): WidgetStateOutlinedBorder {
return constructProxy(_WidgetStateOutlinedBorderProxy, args, implementation) as WidgetStateOutlinedBorder; } }
const _WidgetStateOutlinedBorderBinding = _flaxProxyFactory(_WidgetStateOutlinedBorderFactory, _WidgetStateOutlinedBorderNative) as unknown as typeof _WidgetStateOutlinedBorderFactory & (abstract new() => _WidgetStateOutlinedBorderNative);
export const WidgetStateOutlinedBorder: typeof _WidgetStateOutlinedBorderBinding & _FlaxInstanceType<WidgetStateOutlinedBorder> & _FlaxDartType<WidgetStateOutlinedBorder, readonly ["class", "flax.core/sdk_widgets#type:WidgetStateOutlinedBorder", readonly [], false]> = _flaxBindInstanceType<WidgetStateOutlinedBorder, typeof _WidgetStateOutlinedBorderBinding>(_WidgetStateOutlinedBorderBinding, "flax.core/sdk_widgets#type:WidgetStateOutlinedBorder", ["flax.core/flutter#type:OutlinedBorder","flax.core/flutter#type:ShapeBorder","dart:core::Object","flax.core/flutter#type:WidgetStateProperty"]) as typeof _WidgetStateOutlinedBorderBinding & _FlaxInstanceType<WidgetStateOutlinedBorder> & _FlaxDartType<WidgetStateOutlinedBorder, readonly ["class", "flax.core/sdk_widgets#type:WidgetStateOutlinedBorder", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "dimensions" | "side" | "preferPaintInterior" | "copyWith" | "scale" | "lerpFrom" | "lerpTo" | "add" | "getOuterPath" | "getInnerPath" | "paintInterior" | "paint" | "toString" | "resolve" | "operatorAdd" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateOutlinedBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty";
