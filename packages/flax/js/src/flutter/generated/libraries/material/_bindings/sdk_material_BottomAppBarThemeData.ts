// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/painting/_bindings/sdk_painting_NotchedShape';
import '@flax/flutter/painting/_bindings/sdk_painting_NotchedShape';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
const _flaxMemberParameters0 = [{"name":"color"},{"name":"elevation"},{"name":"height"},{"name":"padding"},{"name":"shadowColor"},{"name":"shape"},{"name":"surfaceTintColor"}] as const;
const _flaxMemberParameters1 = [{"name":"color"},{"name":"elevation"},{"name":"shape"},{"name":"height"},{"name":"surfaceTintColor"},{"name":"shadowColor"},{"name":"padding"}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"minLevel"}] as const;
const _flaxMemberParameters4 = [{"name":"name"},{"name":"style"}] as const;
const _flaxMemberParameters5 = [{"name":"properties","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BottomAppBarThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/bottom_app_bar_theme.dart::BottomAppBarThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __BottomAppBarThemeData: unique symbol;
readonly [_flaxDartTypeValue]: BottomAppBarThemeData;

}
defineObject("flax.core/sdk_material#type:BottomAppBarThemeData", ["color","elevation","shape","height","surfaceTintColor","shadowColor","padding"], [], _flaxBindingMethods("flax.core/sdk_material#type:BottomAppBarThemeData", "object", {"copyWith":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _BottomAppBarThemeDataProxy = {type: "flax.core/sdk_material#type:BottomAppBarThemeData", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugFillProperties":_flaxMemberParameters5,"copyWith":_flaxMemberParameters0}, getters: ["color","elevation","shape","height","surfaceTintColor","shadowColor","padding"], setters: [], contextMembers: [], superMembers: ["get:color","get:elevation","get:shape","get:height","get:surfaceTintColor","get:shadowColor","get:padding","toStringShort","toString","toDiagnosticsNode","debugFillProperties","copyWith"]} as const;
export interface BottomAppBarThemeData {
readonly [_flaxDartTypeValue]: BottomAppBarThemeData;

toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; elevation?: number | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/notched_shapes.dart::NotchedShape": readonly [] }> | null | undefined; height?: number | null | undefined; surfaceTintColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; shadowColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined}): BottomAppBarThemeData;
get color(): upstream1.Color | null;
get elevation(): number | null;
get shape(): upstream2.NotchedShape | null;
get height(): number | null;
get surfaceTintColor(): upstream1.Color | null;
get shadowColor(): upstream1.Color | null;
get padding(): upstream3.EdgeInsetsGeometry | null;
}
export abstract class BottomAppBarThemeData extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BottomAppBarThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: BottomAppBarThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:BottomAppBarThemeData", readonly [], false];
constructor(options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; elevation?: number | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/notched_shapes.dart::NotchedShape": readonly [] }> | null | undefined; height?: number | null | undefined; surfaceTintColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; shadowColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined}) { super(_BottomAppBarThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(BottomAppBarThemeData.prototype, _BottomAppBarThemeDataProxy);
export namespace BottomAppBarThemeData { export function implement(args: [options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; elevation?: number | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/notched_shapes.dart::NotchedShape": readonly [] }> | null | undefined; height?: number | null | undefined; surfaceTintColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; shadowColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined}], implementation: {}): BottomAppBarThemeData {
return constructProxy(_BottomAppBarThemeDataProxy, args, implementation) as BottomAppBarThemeData; } }
export namespace BottomAppBarThemeData { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/material/bottom_app_bar_theme.dart::BottomAppBarThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/material/bottom_app_bar_theme.dart::BottomAppBarThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): BottomAppBarThemeData {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_material#function:BottomAppBarThemeData.lerp", [a, b, t]);
return _flaxResult as BottomAppBarThemeData;
} }
_flaxBindInstanceType<BottomAppBarThemeData, typeof BottomAppBarThemeData>(BottomAppBarThemeData, "flax.core/sdk_material#type:BottomAppBarThemeData", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "color" | "elevation" | "shape" | "height" | "surfaceTintColor" | "shadowColor" | "padding" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:flutter/src/material/bottom_app_bar_theme.dart::BottomAppBarThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
