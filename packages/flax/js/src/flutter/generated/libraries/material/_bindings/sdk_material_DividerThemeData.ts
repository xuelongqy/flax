// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/painting/_bindings/flutter_BorderRadiusGeometry';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters120, _flaxMemberParameters121, _flaxMemberParameters2, _flaxMemberParameters3, _flaxMemberParameters4, _flaxMemberParameters5 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DividerThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/divider_theme.dart::DividerThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __DividerThemeData: unique symbol;
readonly [_flaxDartTypeValue]: DividerThemeData;

readonly color: upstream1.Color | null;
readonly space: number | null;
readonly thickness: number | null;
readonly indent: number | null;
readonly endIndent: number | null;
readonly radius: upstream2.BorderRadiusGeometry | null;
toStringShort(): string;
toString(options?: {minLevel?: upstream3.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream5.DiagnosticsTreeStyle | null | undefined}): upstream4.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; endIndent?: number | null | undefined; indent?: number | null | undefined; radius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined; space?: number | null | undefined; thickness?: number | null | undefined}): DividerThemeData;
}
defineObject("flax.core/sdk_material#type:DividerThemeData", ["color","space","thickness","indent","endIndent","radius"], [], _flaxBindingMethods("flax.core/sdk_material#type:DividerThemeData", "object", {"copyWith":_flaxMemberParameters120}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _DividerThemeDataFactory(options: { color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; space?: number | null | undefined; thickness?: number | null | undefined; indent?: number | null | undefined; endIndent?: number | null | undefined; radius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined } = {}): DividerThemeData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:DividerThemeData", "", [{"name":"color"},{"name":"space"},{"name":"thickness"},{"name":"indent"},{"name":"endIndent"},{"name":"radius"}], [], options) as DividerThemeData;
}
const _DividerThemeDataProxy = {type: "flax.core/sdk_material#type:DividerThemeData", parameters: _flaxMemberParameters121, constructors: {"": _flaxMemberParameters121}, methods: {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugFillProperties":_flaxMemberParameters5,"copyWith":_flaxMemberParameters120}, getters: ["color","space","thickness","indent","endIndent","radius"], setters: [], contextMembers: [], superMembers: ["get:color","get:space","get:thickness","get:indent","get:endIndent","get:radius","toStringShort","toString","toDiagnosticsNode","debugFillProperties","copyWith"]} as const;
export interface _DividerThemeDataNative extends DividerThemeData {
readonly [_flaxDartTypeValue]: _DividerThemeDataNative;

toStringShort(): string;
toString(options?: {minLevel?: upstream3.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream5.DiagnosticsTreeStyle | null | undefined}): upstream4.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; space?: number | null | undefined; thickness?: number | null | undefined; indent?: number | null | undefined; endIndent?: number | null | undefined; radius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined}): DividerThemeData;
get color(): upstream1.Color | null;
get space(): number | null;
get thickness(): number | null;
get indent(): number | null;
get endIndent(): number | null;
get radius(): upstream2.BorderRadiusGeometry | null;
}
export abstract class _DividerThemeDataNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DividerThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DividerThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:DividerThemeData", readonly [], false];
constructor(options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; space?: number | null | undefined; thickness?: number | null | undefined; indent?: number | null | undefined; endIndent?: number | null | undefined; radius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined}) { super(_DividerThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_DividerThemeDataNative.prototype, _DividerThemeDataProxy);
export namespace _DividerThemeDataFactory { export function implement(args: [options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; space?: number | null | undefined; thickness?: number | null | undefined; indent?: number | null | undefined; endIndent?: number | null | undefined; radius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined}], implementation: {}): DividerThemeData {
return constructProxy(_DividerThemeDataProxy, args, implementation) as DividerThemeData; } }
const _DividerThemeDataBinding = _flaxProxyFactory(_DividerThemeDataFactory, _DividerThemeDataNative) as unknown as typeof _DividerThemeDataFactory & (new(options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; space?: number | null | undefined; thickness?: number | null | undefined; indent?: number | null | undefined; endIndent?: number | null | undefined; radius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined}) => _DividerThemeDataNative);
export namespace _DividerThemeDataFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/material/divider_theme.dart::DividerThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/material/divider_theme.dart::DividerThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): DividerThemeData {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_material#function:DividerThemeData.lerp", [a, b, t]);
return _flaxResult as DividerThemeData;
} }
export const DividerThemeData: typeof _DividerThemeDataBinding & _FlaxInstanceType<DividerThemeData> & _FlaxDartType<DividerThemeData, readonly ["class", "flax.core/sdk_material#type:DividerThemeData", readonly [], false]> = _flaxBindInstanceType<DividerThemeData, typeof _DividerThemeDataBinding>(_DividerThemeDataBinding, "flax.core/sdk_material#type:DividerThemeData", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _DividerThemeDataBinding & _FlaxInstanceType<DividerThemeData> & _FlaxDartType<DividerThemeData, readonly ["class", "flax.core/sdk_material#type:DividerThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "color" | "space" | "thickness" | "indent" | "endIndent" | "radius" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:flutter/src/material/divider_theme.dart::DividerThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
