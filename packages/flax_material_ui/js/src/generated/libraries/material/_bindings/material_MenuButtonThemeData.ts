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
import { _flaxMemberParameters2, _flaxMemberParameters142, _flaxMemberParameters4, _flaxMemberParameters5, _flaxMemberParameters6, _flaxMemberParameters7 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MenuButtonThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:material_ui/src/menu_button_theme.dart::MenuButtonThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __MenuButtonThemeData: unique symbol;
readonly [_flaxDartTypeValue]: MenuButtonThemeData;

readonly style: upstream1.ButtonStyle | null;
toStringShort(): string;
toString(options?: {minLevel?: upstream2.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream4.DiagnosticsTreeStyle | null | undefined}): upstream3.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
}
defineObject("flax.material/material#type:MenuButtonThemeData", ["style"], [], _flaxBindingMethods("flax.material/material#type:MenuButtonThemeData", "object", {}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _MenuButtonThemeDataFactory(options: { style?: Readonly<{ "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined } = {}): MenuButtonThemeData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:MenuButtonThemeData", "", [{"name":"style"}], [], options) as MenuButtonThemeData;
}
const _MenuButtonThemeDataProxy = {type: "flax.material/material#type:MenuButtonThemeData", parameters: _flaxMemberParameters142, constructors: {"": _flaxMemberParameters142}, methods: {"toStringShort":_flaxMemberParameters4,"toString":_flaxMemberParameters5,"toDiagnosticsNode":_flaxMemberParameters6,"debugFillProperties":_flaxMemberParameters7}, getters: ["style"], setters: [], contextMembers: [], superMembers: ["get:style","toStringShort","toString","toDiagnosticsNode","debugFillProperties"]} as const;
export interface _MenuButtonThemeDataNative extends MenuButtonThemeData {
readonly [_flaxDartTypeValue]: _MenuButtonThemeDataNative;

toStringShort(): string;
toString(options?: {minLevel?: upstream2.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream4.DiagnosticsTreeStyle | null | undefined}): upstream3.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
get style(): upstream1.ButtonStyle | null;
}
export abstract class _MenuButtonThemeDataNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MenuButtonThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MenuButtonThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:MenuButtonThemeData", readonly [], false];
constructor(options?: {style?: Readonly<{ "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}) { super(_MenuButtonThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_MenuButtonThemeDataNative.prototype, _MenuButtonThemeDataProxy);
export namespace _MenuButtonThemeDataFactory { export function implement(args: [options?: {style?: Readonly<{ "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}], implementation: {}): MenuButtonThemeData {
return constructProxy(_MenuButtonThemeDataProxy, args, implementation) as MenuButtonThemeData; } }
const _MenuButtonThemeDataBinding = _flaxProxyFactory(_MenuButtonThemeDataFactory, _MenuButtonThemeDataNative) as unknown as typeof _MenuButtonThemeDataFactory & (new(options?: {style?: Readonly<{ "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}) => _MenuButtonThemeDataNative);
export namespace _MenuButtonThemeDataFactory { export function lerp(a: Readonly<{ "__flaxBound:package:material_ui/src/menu_button_theme.dart::MenuButtonThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:material_ui/src/menu_button_theme.dart::MenuButtonThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): MenuButtonThemeData | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:MenuButtonThemeData.lerp", [a, b, t], _flaxMemberParameters2);
return _flaxResult as MenuButtonThemeData | null;
} }
export const MenuButtonThemeData: typeof _MenuButtonThemeDataBinding & _FlaxInstanceType<MenuButtonThemeData> & _FlaxDartType<MenuButtonThemeData, readonly ["class", "flax.material/material#type:MenuButtonThemeData", readonly [], false]> = _flaxBindInstanceType<MenuButtonThemeData, typeof _MenuButtonThemeDataBinding>(_MenuButtonThemeDataBinding, "flax.material/material#type:MenuButtonThemeData", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _MenuButtonThemeDataBinding & _FlaxInstanceType<MenuButtonThemeData> & _FlaxDartType<MenuButtonThemeData, readonly ["class", "flax.material/material#type:MenuButtonThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "style" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:material_ui/src/menu_button_theme.dart::MenuButtonThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
