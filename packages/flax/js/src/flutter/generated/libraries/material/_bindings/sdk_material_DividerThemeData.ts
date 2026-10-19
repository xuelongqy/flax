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
import { _flaxMemberParameters118, _flaxMemberParameters119, _flaxMemberParameters2, _flaxMemberParameters3, _flaxMemberParameters4, _flaxMemberParameters5 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DividerThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/divider_theme.dart::DividerThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __DividerThemeData: unique symbol;
readonly [_flaxDartTypeValue]: DividerThemeData;

}
defineObject("flax.core/sdk_material#type:DividerThemeData", ["color","space","thickness","indent","endIndent","radius"], [], _flaxBindingMethods("flax.core/sdk_material#type:DividerThemeData", "object", {"copyWith":_flaxMemberParameters118}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _DividerThemeDataProxy = {type: "flax.core/sdk_material#type:DividerThemeData", parameters: _flaxMemberParameters119, constructors: {"": _flaxMemberParameters119}, methods: {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugFillProperties":_flaxMemberParameters5,"copyWith":_flaxMemberParameters118}, getters: ["color","space","thickness","indent","endIndent","radius"], setters: [], contextMembers: [], superMembers: ["get:color","get:space","get:thickness","get:indent","get:endIndent","get:radius","toStringShort","toString","toDiagnosticsNode","debugFillProperties","copyWith"]} as const;
export interface DividerThemeData {
readonly [_flaxDartTypeValue]: DividerThemeData;

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
export abstract class DividerThemeData extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DividerThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DividerThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:DividerThemeData", readonly [], false];
constructor(options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; space?: number | null | undefined; thickness?: number | null | undefined; indent?: number | null | undefined; endIndent?: number | null | undefined; radius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined}) { super(_DividerThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DividerThemeData.prototype, _DividerThemeDataProxy);
export namespace DividerThemeData { export function implement(args: [options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; space?: number | null | undefined; thickness?: number | null | undefined; indent?: number | null | undefined; endIndent?: number | null | undefined; radius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined}], implementation: {}): DividerThemeData {
return constructProxy(_DividerThemeDataProxy, args, implementation) as DividerThemeData; } }
export namespace DividerThemeData { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/material/divider_theme.dart::DividerThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/material/divider_theme.dart::DividerThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): DividerThemeData {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_material#function:DividerThemeData.lerp", [a, b, t]);
return _flaxResult as DividerThemeData;
} }
_flaxBindInstanceType<DividerThemeData, typeof DividerThemeData>(DividerThemeData, "flax.core/sdk_material#type:DividerThemeData", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "color" | "space" | "thickness" | "indent" | "endIndent" | "radius" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:flutter/src/material/divider_theme.dart::DividerThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
