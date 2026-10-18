// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_MenuThemeData';
import '@flax/flutter/material/_bindings/sdk_material_MenuThemeData';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/material/_bindings/sdk_material_MenuStyle';
import '@flax/flutter/material/_bindings/sdk_material_MenuStyle';
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
const _flaxMemberParameters0 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
const _flaxMemberParameters3 = [{"name":"minLevel","required":false,"positional":false}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MenuBarThemeData extends Omit<upstream0.MenuThemeData, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.MenuThemeData>, Readonly<{ "__flaxBound:package:flutter/src/material/menu_bar_theme.dart::MenuBarThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/material/menu_theme.dart::MenuThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __MenuBarThemeData: unique symbol;
readonly [_flaxDartTypeValue]: MenuBarThemeData;

}
defineObject("flax.core/sdk_material#type:MenuBarThemeData", ["style","submenuIcon"], [], _flaxBindingMethods("flax.core/sdk_material#type:MenuBarThemeData", "object", {}, {}), [], undefined, "flax.core/sdk_material#type:MenuThemeData");
const _MenuBarThemeDataProxy = {type: "flax.core/sdk_material#type:MenuBarThemeData", parameters: [{"name":"style","required":false,"positional":false}], constructors: {"":[{"name":"style","required":false,"positional":false}]}, methods: {"debugFillProperties":_flaxMemberParameters0,"toStringShort":_flaxMemberParameters1,"toDiagnosticsNode":_flaxMemberParameters2,"toString":_flaxMemberParameters3}, getters: ["style","submenuIcon"], setters: [], contextMembers: [], superMembers: ["get:style","get:submenuIcon","debugFillProperties","toStringShort","toDiagnosticsNode","toString"]} as const;
export interface MenuBarThemeData {
readonly [_flaxDartTypeValue]: MenuBarThemeData;

debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
toString(options?: {minLevel?: upstream7.DiagnosticLevel | undefined}): string;
get style(): upstream2.MenuStyle | null;
get submenuIcon(): upstream3.WidgetStateProperty<Widget | null> | null;
}
export abstract class MenuBarThemeData extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MenuBarThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MenuBarThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:MenuBarThemeData", readonly [], false];
constructor(options?: {style?: Readonly<{ "__flaxBound:package:flutter/src/material/menu_style.dart::MenuStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}) { super(_MenuBarThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(MenuBarThemeData.prototype, _MenuBarThemeDataProxy);
export namespace MenuBarThemeData { export function implement(args: [options?: {style?: Readonly<{ "__flaxBound:package:flutter/src/material/menu_style.dart::MenuStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}], implementation: {}): MenuBarThemeData {
return constructProxy(_MenuBarThemeDataProxy, args, implementation) as MenuBarThemeData; } }
export namespace MenuBarThemeData { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/material/menu_bar_theme.dart::MenuBarThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/material/menu_theme.dart::MenuThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/material/menu_bar_theme.dart::MenuBarThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/material/menu_theme.dart::MenuThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): MenuBarThemeData | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_material#function:MenuBarThemeData.lerp", [a, b, t]);
return _flaxResult as MenuBarThemeData | null;
} }
_flaxBindInstanceType<MenuBarThemeData, typeof MenuBarThemeData>(MenuBarThemeData, "flax.core/sdk_material#type:MenuBarThemeData", ["flax.core/sdk_material#type:MenuThemeData","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "style" | "submenuIcon" | "debugFillProperties" | "toStringShort" | "toDiagnosticsNode" | "toString" | "__flaxBound:package:flutter/src/material/menu_bar_theme.dart::MenuBarThemeData" | "__flaxBound:package:flutter/src/material/menu_theme.dart::MenuThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
