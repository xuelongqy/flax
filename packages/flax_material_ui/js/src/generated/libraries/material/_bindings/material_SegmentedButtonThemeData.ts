// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/material-ui/_bindings/material_ButtonStyle';
import '@flax/material-ui/_bindings/material_ButtonStyle';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters2, _flaxMemberParameters304, _flaxMemberParameters305, _flaxMemberParameters4, _flaxMemberParameters5, _flaxMemberParameters6, _flaxMemberParameters7 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SegmentedButtonThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:material_ui/src/segmented_button_theme.dart::SegmentedButtonThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __SegmentedButtonThemeData: unique symbol;
readonly [_flaxDartTypeValue]: SegmentedButtonThemeData;

readonly style: upstream1.ButtonStyle | null;
readonly selectedIcon: Widget | null;
toStringShort(): string;
toString(options?: {minLevel?: upstream2.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream4.DiagnosticsTreeStyle | null | undefined}): upstream3.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {selectedIcon?: Widget | null | undefined; style?: Readonly<{ "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}): SegmentedButtonThemeData;
}
defineObject("flax.material/material#type:SegmentedButtonThemeData", ["style","selectedIcon"], [], _flaxBindingMethods("flax.material/material#type:SegmentedButtonThemeData", "object", {"copyWith":_flaxMemberParameters304}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _SegmentedButtonThemeDataFactory(options: { style?: Readonly<{ "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; selectedIcon?: Widget | null | undefined } = {}): SegmentedButtonThemeData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:SegmentedButtonThemeData", "", [{"name":"style"},{"name":"selectedIcon"}], [], options) as SegmentedButtonThemeData;
}
const _SegmentedButtonThemeDataProxy = {type: "flax.material/material#type:SegmentedButtonThemeData", parameters: _flaxMemberParameters305, constructors: {"": _flaxMemberParameters305}, methods: {"toStringShort":_flaxMemberParameters4,"toString":_flaxMemberParameters5,"toDiagnosticsNode":_flaxMemberParameters6,"debugFillProperties":_flaxMemberParameters7,"copyWith":_flaxMemberParameters304}, getters: ["style","selectedIcon"], setters: [], contextMembers: [], superMembers: ["get:style","get:selectedIcon","toStringShort","toString","toDiagnosticsNode","debugFillProperties","copyWith"]} as const;
export interface _SegmentedButtonThemeDataNative extends SegmentedButtonThemeData {
readonly [_flaxDartTypeValue]: _SegmentedButtonThemeDataNative;

toStringShort(): string;
toString(options?: {minLevel?: upstream2.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream4.DiagnosticsTreeStyle | null | undefined}): upstream3.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {style?: Readonly<{ "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; selectedIcon?: Widget | null | undefined}): SegmentedButtonThemeData;
get style(): upstream1.ButtonStyle | null;
get selectedIcon(): Widget | null;
}
export abstract class _SegmentedButtonThemeDataNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SegmentedButtonThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SegmentedButtonThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:SegmentedButtonThemeData", readonly [], false];
constructor(options?: {style?: Readonly<{ "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; selectedIcon?: Widget | null | undefined}) { super(_SegmentedButtonThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SegmentedButtonThemeDataNative.prototype, _SegmentedButtonThemeDataProxy);
export namespace _SegmentedButtonThemeDataFactory { export function implement(args: [options?: {style?: Readonly<{ "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; selectedIcon?: Widget | null | undefined}], implementation: {}): SegmentedButtonThemeData {
return constructProxy(_SegmentedButtonThemeDataProxy, args, implementation) as SegmentedButtonThemeData; } }
const _SegmentedButtonThemeDataBinding = _flaxProxyFactory(_SegmentedButtonThemeDataFactory, _SegmentedButtonThemeDataNative) as unknown as typeof _SegmentedButtonThemeDataFactory & (new(options?: {style?: Readonly<{ "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; selectedIcon?: Widget | null | undefined}) => _SegmentedButtonThemeDataNative);
export namespace _SegmentedButtonThemeDataFactory { export function lerp(a: Readonly<{ "__flaxBound:package:material_ui/src/segmented_button_theme.dart::SegmentedButtonThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:material_ui/src/segmented_button_theme.dart::SegmentedButtonThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): SegmentedButtonThemeData {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:SegmentedButtonThemeData.lerp", [a, b, t], _flaxMemberParameters2);
return _flaxResult as SegmentedButtonThemeData;
} }
export const SegmentedButtonThemeData: typeof _SegmentedButtonThemeDataBinding & _FlaxInstanceType<SegmentedButtonThemeData> & _FlaxDartType<SegmentedButtonThemeData, readonly ["class", "flax.material/material#type:SegmentedButtonThemeData", readonly [], false]> = _flaxBindInstanceType<SegmentedButtonThemeData, typeof _SegmentedButtonThemeDataBinding>(_SegmentedButtonThemeDataBinding, "flax.material/material#type:SegmentedButtonThemeData", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _SegmentedButtonThemeDataBinding & _FlaxInstanceType<SegmentedButtonThemeData> & _FlaxDartType<SegmentedButtonThemeData, readonly ["class", "flax.material/material#type:SegmentedButtonThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "style" | "selectedIcon" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:material_ui/src/segmented_button_theme.dart::SegmentedButtonThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
