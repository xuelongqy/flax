// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Radius';
import '@flax/dart/ui/_bindings/flutter_Radius';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
const _flaxMemberParameters0 = [{"name":"crossAxisMargin"},{"name":"interactive"},{"name":"mainAxisMargin"},{"name":"minThumbLength"},{"name":"radius"},{"name":"thickness"},{"name":"thumbColor"},{"name":"thumbVisibility"},{"name":"trackBorderColor"},{"name":"trackColor"},{"name":"trackVisibility"}] as const;
const _flaxMemberParameters1 = [{"name":"thumbVisibility"},{"name":"thickness"},{"name":"trackVisibility"},{"name":"radius"},{"name":"thumbColor"},{"name":"trackColor"},{"name":"trackBorderColor"},{"name":"crossAxisMargin"},{"name":"mainAxisMargin"},{"name":"minThumbLength"},{"name":"interactive"}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"minLevel"}] as const;
const _flaxMemberParameters4 = [{"name":"name"},{"name":"style"}] as const;
const _flaxMemberParameters5 = [{"name":"properties","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScrollbarThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/scrollbar_theme.dart::ScrollbarThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ScrollbarThemeData: unique symbol;
readonly [_flaxDartTypeValue]: ScrollbarThemeData;

}
defineObject("flax.core/sdk_material#type:ScrollbarThemeData", ["thumbVisibility","thickness","trackVisibility","interactive","radius","thumbColor","trackColor","trackBorderColor","crossAxisMargin","mainAxisMargin","minThumbLength"], [], _flaxBindingMethods("flax.core/sdk_material#type:ScrollbarThemeData", "object", {"copyWith":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _ScrollbarThemeDataProxy = {type: "flax.core/sdk_material#type:ScrollbarThemeData", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugFillProperties":_flaxMemberParameters5,"copyWith":_flaxMemberParameters0}, getters: ["thumbVisibility","thickness","trackVisibility","interactive","radius","thumbColor","trackColor","trackBorderColor","crossAxisMargin","mainAxisMargin","minThumbLength"], setters: [], contextMembers: [], superMembers: ["get:thumbVisibility","get:thickness","get:trackVisibility","get:interactive","get:radius","get:thumbColor","get:trackColor","get:trackBorderColor","get:crossAxisMargin","get:mainAxisMargin","get:minThumbLength","toStringShort","toString","toDiagnosticsNode","debugFillProperties","copyWith"]} as const;
export interface ScrollbarThemeData {
readonly [_flaxDartTypeValue]: ScrollbarThemeData;

toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {thumbVisibility?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [boolean | null] }> | null | undefined; thickness?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null] }> | null | undefined; trackVisibility?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [boolean | null] }> | null | undefined; interactive?: boolean | null | undefined; radius?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null | undefined; thumbColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; trackColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; trackBorderColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; crossAxisMargin?: number | null | undefined; mainAxisMargin?: number | null | undefined; minThumbLength?: number | null | undefined}): ScrollbarThemeData;
get thumbVisibility(): upstream1.WidgetStateProperty<boolean | null> | null;
get thickness(): upstream1.WidgetStateProperty<number | null> | null;
get trackVisibility(): upstream1.WidgetStateProperty<boolean | null> | null;
get interactive(): boolean | null;
get radius(): upstream2.Radius | null;
get thumbColor(): upstream1.WidgetStateProperty<upstream3.Color | null> | null;
get trackColor(): upstream1.WidgetStateProperty<upstream3.Color | null> | null;
get trackBorderColor(): upstream1.WidgetStateProperty<upstream3.Color | null> | null;
get crossAxisMargin(): number | null;
get mainAxisMargin(): number | null;
get minThumbLength(): number | null;
}
export abstract class ScrollbarThemeData extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScrollbarThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ScrollbarThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:ScrollbarThemeData", readonly [], false];
constructor(options?: {thumbVisibility?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [boolean | null] }> | null | undefined; thickness?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null] }> | null | undefined; trackVisibility?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [boolean | null] }> | null | undefined; radius?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null | undefined; thumbColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; trackColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; trackBorderColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; crossAxisMargin?: number | null | undefined; mainAxisMargin?: number | null | undefined; minThumbLength?: number | null | undefined; interactive?: boolean | null | undefined}) { super(_ScrollbarThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ScrollbarThemeData.prototype, _ScrollbarThemeDataProxy);
export namespace ScrollbarThemeData { export function implement(args: [options?: {thumbVisibility?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [boolean | null] }> | null | undefined; thickness?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null] }> | null | undefined; trackVisibility?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [boolean | null] }> | null | undefined; radius?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null | undefined; thumbColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; trackColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; trackBorderColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; crossAxisMargin?: number | null | undefined; mainAxisMargin?: number | null | undefined; minThumbLength?: number | null | undefined; interactive?: boolean | null | undefined}], implementation: {}): ScrollbarThemeData {
return constructProxy(_ScrollbarThemeDataProxy, args, implementation) as ScrollbarThemeData; } }
export namespace ScrollbarThemeData { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/material/scrollbar_theme.dart::ScrollbarThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/material/scrollbar_theme.dart::ScrollbarThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): ScrollbarThemeData {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_material#function:ScrollbarThemeData.lerp", [a, b, t]);
return _flaxResult as ScrollbarThemeData;
} }
_flaxBindInstanceType<ScrollbarThemeData, typeof ScrollbarThemeData>(ScrollbarThemeData, "flax.core/sdk_material#type:ScrollbarThemeData", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "thumbVisibility" | "thickness" | "trackVisibility" | "interactive" | "radius" | "thumbColor" | "trackColor" | "trackBorderColor" | "crossAxisMargin" | "mainAxisMargin" | "minThumbLength" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:flutter/src/material/scrollbar_theme.dart::ScrollbarThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
