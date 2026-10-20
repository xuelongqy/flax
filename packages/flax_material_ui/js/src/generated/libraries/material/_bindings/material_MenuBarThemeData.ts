// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_MenuThemeData';
import '@flax/material-ui/_bindings/material_MenuThemeData';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/material-ui/_bindings/material_MenuStyle';
import '@flax/material-ui/_bindings/material_MenuStyle';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { _flaxMemberParameters131, _flaxMemberParameters5, _flaxMemberParameters2, _flaxMemberParameters4, _flaxMemberParameters3 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MenuBarThemeData extends Omit<upstream0.MenuThemeData, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.MenuThemeData>, Readonly<{ "__flaxBound:package:material_ui/src/menu_bar_theme.dart::MenuBarThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:material_ui/src/menu_theme.dart::MenuThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __MenuBarThemeData: unique symbol;
readonly [_flaxDartTypeValue]: MenuBarThemeData;

readonly style: upstream2.MenuStyle | null;
readonly submenuIcon: upstream3.WidgetStateProperty<Widget | null> | null;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
toString(options?: {minLevel?: upstream7.DiagnosticLevel | undefined}): string;
}
defineObject("flax.material/material#type:MenuBarThemeData", ["style","submenuIcon"], [], _flaxBindingMethods("flax.material/material#type:MenuBarThemeData", "object", {}, {}), [], undefined, "flax.material/material#type:MenuThemeData");
export function _MenuBarThemeDataFactory(options: { style?: Readonly<{ "__flaxBound:package:material_ui/src/menu_style.dart::MenuStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined } = {}): MenuBarThemeData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:MenuBarThemeData", "", [{"name":"style"}], [], options) as MenuBarThemeData;
}
const _MenuBarThemeDataProxy = {type: "flax.material/material#type:MenuBarThemeData", parameters: _flaxMemberParameters131, constructors: {"": _flaxMemberParameters131}, methods: {"debugFillProperties":_flaxMemberParameters5,"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters4,"toString":_flaxMemberParameters3}, getters: ["style","submenuIcon"], setters: [], contextMembers: [], superMembers: ["get:style","get:submenuIcon","debugFillProperties","toStringShort","toDiagnosticsNode","toString"]} as const;
export interface _MenuBarThemeDataNative extends MenuBarThemeData {
readonly [_flaxDartTypeValue]: _MenuBarThemeDataNative;

debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
toString(options?: {minLevel?: upstream7.DiagnosticLevel | undefined}): string;
get style(): upstream2.MenuStyle | null;
get submenuIcon(): upstream3.WidgetStateProperty<Widget | null> | null;
}
export abstract class _MenuBarThemeDataNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MenuBarThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MenuBarThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:MenuBarThemeData", readonly [], false];
constructor(options?: {style?: Readonly<{ "__flaxBound:package:material_ui/src/menu_style.dart::MenuStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}) { super(_MenuBarThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_MenuBarThemeDataNative.prototype, _MenuBarThemeDataProxy);
export namespace _MenuBarThemeDataFactory { export function implement(args: [options?: {style?: Readonly<{ "__flaxBound:package:material_ui/src/menu_style.dart::MenuStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}], implementation: {}): MenuBarThemeData {
return constructProxy(_MenuBarThemeDataProxy, args, implementation) as MenuBarThemeData; } }
const _MenuBarThemeDataBinding = _flaxProxyFactory(_MenuBarThemeDataFactory, _MenuBarThemeDataNative) as unknown as typeof _MenuBarThemeDataFactory & (new(options?: {style?: Readonly<{ "__flaxBound:package:material_ui/src/menu_style.dart::MenuStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}) => _MenuBarThemeDataNative);
export namespace _MenuBarThemeDataFactory { export function lerp(a: Readonly<{ "__flaxBound:package:material_ui/src/menu_bar_theme.dart::MenuBarThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:material_ui/src/menu_theme.dart::MenuThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:material_ui/src/menu_bar_theme.dart::MenuBarThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:material_ui/src/menu_theme.dart::MenuThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): MenuBarThemeData | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:MenuBarThemeData.lerp", [a, b, t]);
return _flaxResult as MenuBarThemeData | null;
} }
export const MenuBarThemeData: typeof _MenuBarThemeDataBinding & _FlaxInstanceType<MenuBarThemeData> & _FlaxDartType<MenuBarThemeData, readonly ["class", "flax.material/material#type:MenuBarThemeData", readonly [], false]> = _flaxBindInstanceType<MenuBarThemeData, typeof _MenuBarThemeDataBinding>(_MenuBarThemeDataBinding, "flax.material/material#type:MenuBarThemeData", ["flax.material/material#type:MenuThemeData","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _MenuBarThemeDataBinding & _FlaxInstanceType<MenuBarThemeData> & _FlaxDartType<MenuBarThemeData, readonly ["class", "flax.material/material#type:MenuBarThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "style" | "submenuIcon" | "debugFillProperties" | "toStringShort" | "toDiagnosticsNode" | "toString" | "__flaxBound:package:material_ui/src/menu_bar_theme.dart::MenuBarThemeData" | "__flaxBound:package:material_ui/src/menu_theme.dart::MenuThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
