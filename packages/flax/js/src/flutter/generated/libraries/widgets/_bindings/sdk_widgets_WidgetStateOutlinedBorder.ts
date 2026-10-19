// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
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
import type * as upstream10 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
const _flaxMemberParameters0 = [{"name":"states","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"side"}] as const;
const _flaxMemberParameters3 = [{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"a","required":true,"positional":true},{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"b","required":true,"positional":true},{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"other","required":true,"positional":true},{"name":"reversed"}] as const;
const _flaxMemberParameters7 = [{"name":"rect","required":true,"positional":true},{"name":"textDirection"}] as const;
const _flaxMemberParameters8 = [{"name":"canvas","required":true,"positional":true},{"name":"rect","required":true,"positional":true},{"name":"paint","required":true,"positional":true},{"name":"textDirection"}] as const;
const _flaxMemberParameters9 = [{"name":"canvas","required":true,"positional":true},{"name":"rect","required":true,"positional":true},{"name":"textDirection"}] as const;
const _flaxMemberParameters10 = [{"name":"other","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface WidgetStateOutlinedBorder extends Omit<upstream0.OutlinedBorder, _flaxOwnMembers0>, Omit<upstream1.ShapeBorder, _flaxOwnMembers0 | keyof upstream0.OutlinedBorder>, Omit<upstream2.WidgetStateProperty<upstream0.OutlinedBorder | null>, _flaxOwnMembers0 | keyof upstream0.OutlinedBorder | keyof upstream1.ShapeBorder>, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateOutlinedBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream0.OutlinedBorder | null] }> { readonly __WidgetStateOutlinedBorder: unique symbol;
readonly [_flaxDartTypeValue]: WidgetStateOutlinedBorder;

}
defineObject("flax.core/sdk_widgets#type:WidgetStateOutlinedBorder", ["dimensions","side","preferPaintInterior"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:WidgetStateOutlinedBorder", "object", {"resolve":_flaxMemberParameters0}, {}), [], undefined, "flax.core/flutter#type:OutlinedBorder");
const _WidgetStateOutlinedBorderProxy = {type: "flax.core/sdk_widgets#type:WidgetStateOutlinedBorder", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"copyWith":_flaxMemberParameters2,"scale":_flaxMemberParameters3,"lerpFrom":_flaxMemberParameters4,"lerpTo":_flaxMemberParameters5,"add":_flaxMemberParameters6,"getOuterPath":_flaxMemberParameters7,"getInnerPath":_flaxMemberParameters7,"paintInterior":_flaxMemberParameters8,"paint":_flaxMemberParameters9,"toString":_flaxMemberParameters1,"resolve":_flaxMemberParameters0,"operatorAdd":_flaxMemberParameters10}, getters: ["dimensions","side","preferPaintInterior"], setters: [], contextMembers: [], superMembers: ["get:dimensions","get:side","get:preferPaintInterior","lerpFrom","lerpTo","add","paintInterior","toString","operatorAdd"]} as const;
export interface WidgetStateOutlinedBorder {
readonly [_flaxDartTypeValue]: WidgetStateOutlinedBorder;

lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null, t: number): upstream1.ShapeBorder | null;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, options?: {reversed?: boolean | undefined}): upstream1.ShapeBorder | null;
paintInterior(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): void;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>): upstream1.ShapeBorder;
get dimensions(): upstream3.EdgeInsetsGeometry;
get side(): upstream4.BorderSide;
get preferPaintInterior(): boolean;
}
export abstract class WidgetStateOutlinedBorder extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WidgetStateOutlinedBorder>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: WidgetStateOutlinedBorder;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:WidgetStateOutlinedBorder", readonly [], false];
constructor() { super(_WidgetStateOutlinedBorderProxy, Array.from(arguments)); }
abstract copyWith(options?: {side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}): upstream0.OutlinedBorder;
abstract scale(t: number): upstream1.ShapeBorder;
abstract getOuterPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): upstream5.Path;
abstract getInnerPath(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): upstream5.Path;
abstract paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream7.TextDirection | null | undefined}): void;
abstract resolve(states: DartSetInput<upstream10.WidgetState, upstream10.WidgetState>): upstream0.OutlinedBorder | null;
}
_flaxDefineProxyBase(WidgetStateOutlinedBorder.prototype, _WidgetStateOutlinedBorderProxy);
export namespace WidgetStateOutlinedBorder { export function implement(args: [], implementation: {copyWith: ((options?: { side?: upstream4.BorderSide | null | undefined }) => Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>); scale: ((t: number) => Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>); getOuterPath: ((rect: upstream6.Rect, options?: { textDirection?: upstream7.TextDirection | null | undefined }) => Readonly<{ "__flaxBound:dart:ui::Path": readonly [] }>); getInnerPath: ((rect: upstream6.Rect, options?: { textDirection?: upstream7.TextDirection | null | undefined }) => Readonly<{ "__flaxBound:dart:ui::Path": readonly [] }>); paint: ((canvas: upstream8.Canvas, rect: upstream6.Rect, options?: { textDirection?: upstream7.TextDirection | null | undefined }) => void); resolve: ((states: DartSet<upstream10.WidgetState>) => Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null)}): WidgetStateOutlinedBorder {
return constructProxy(_WidgetStateOutlinedBorderProxy, args, implementation) as WidgetStateOutlinedBorder; } }
_flaxBindInstanceType<WidgetStateOutlinedBorder, typeof WidgetStateOutlinedBorder>(WidgetStateOutlinedBorder, "flax.core/sdk_widgets#type:WidgetStateOutlinedBorder", ["flax.core/flutter#type:OutlinedBorder","flax.core/flutter#type:ShapeBorder","dart:core::Object","flax.core/flutter#type:WidgetStateProperty"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "dimensions" | "side" | "preferPaintInterior" | "copyWith" | "scale" | "lerpFrom" | "lerpTo" | "add" | "getOuterPath" | "getInnerPath" | "paintInterior" | "paint" | "toString" | "resolve" | "operatorAdd" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateOutlinedBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty";
