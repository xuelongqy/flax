// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream2 from '@flax/material-ui/_bindings/material_MenuStyle';
import '@flax/material-ui/_bindings/material_MenuStyle';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/material-ui/_bindings/material_InputDecorationThemeData';
import '@flax/material-ui/_bindings/material_InputDecorationThemeData';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters129, _flaxMemberParameters130, _flaxMemberParameters2, _flaxMemberParameters3, _flaxMemberParameters4, _flaxMemberParameters5 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DropdownMenuThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:material_ui/src/dropdown_menu_theme.dart::DropdownMenuThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __DropdownMenuThemeData: unique symbol;
readonly [_flaxDartTypeValue]: DropdownMenuThemeData;

readonly textStyle: upstream1.TextStyle | null;
readonly inputDecorationTheme: upstream4.InputDecorationThemeData | null;
readonly menuStyle: upstream2.MenuStyle | null;
readonly disabledColor: upstream3.Color | null;
toStringShort(): string;
toString(options?: {minLevel?: upstream5.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {disabledColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; inputDecorationTheme?: unknown | null | undefined; menuStyle?: Readonly<{ "__flaxBound:package:material_ui/src/menu_style.dart::MenuStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; textStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}): DropdownMenuThemeData;
}
defineObject("flax.material/material#type:DropdownMenuThemeData", ["textStyle","inputDecorationTheme","menuStyle","disabledColor"], [], _flaxBindingMethods("flax.material/material#type:DropdownMenuThemeData", "object", {"copyWith":_flaxMemberParameters129}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _DropdownMenuThemeDataFactory(options: { textStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; inputDecorationTheme?: unknown | null | undefined; menuStyle?: Readonly<{ "__flaxBound:package:material_ui/src/menu_style.dart::MenuStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; disabledColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined } = {}): DropdownMenuThemeData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:DropdownMenuThemeData", "", [{"name":"textStyle"},{"name":"inputDecorationTheme"},{"name":"menuStyle"},{"name":"disabledColor"}], [], options) as DropdownMenuThemeData;
}
const _DropdownMenuThemeDataProxy = {type: "flax.material/material#type:DropdownMenuThemeData", parameters: _flaxMemberParameters130, constructors: {"": _flaxMemberParameters130}, methods: {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugFillProperties":_flaxMemberParameters5,"copyWith":_flaxMemberParameters129}, getters: ["textStyle","inputDecorationTheme","menuStyle","disabledColor"], setters: [], contextMembers: [], superMembers: ["get:textStyle","get:inputDecorationTheme","get:menuStyle","get:disabledColor","toStringShort","toString","toDiagnosticsNode","debugFillProperties","copyWith"]} as const;
export interface _DropdownMenuThemeDataNative extends DropdownMenuThemeData {
readonly [_flaxDartTypeValue]: _DropdownMenuThemeDataNative;

toStringShort(): string;
toString(options?: {minLevel?: upstream5.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {textStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; inputDecorationTheme?: unknown | null | undefined; menuStyle?: Readonly<{ "__flaxBound:package:material_ui/src/menu_style.dart::MenuStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; disabledColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}): DropdownMenuThemeData;
get textStyle(): upstream1.TextStyle | null;
get inputDecorationTheme(): upstream4.InputDecorationThemeData | null;
get menuStyle(): upstream2.MenuStyle | null;
get disabledColor(): upstream3.Color | null;
}
export abstract class _DropdownMenuThemeDataNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DropdownMenuThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DropdownMenuThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:DropdownMenuThemeData", readonly [], false];
constructor(options?: {textStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; inputDecorationTheme?: unknown | null | undefined; menuStyle?: Readonly<{ "__flaxBound:package:material_ui/src/menu_style.dart::MenuStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; disabledColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}) { super(_DropdownMenuThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_DropdownMenuThemeDataNative.prototype, _DropdownMenuThemeDataProxy);
export namespace _DropdownMenuThemeDataFactory { export function implement(args: [options?: {textStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; inputDecorationTheme?: unknown | null | undefined; menuStyle?: Readonly<{ "__flaxBound:package:material_ui/src/menu_style.dart::MenuStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; disabledColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}], implementation: {}): DropdownMenuThemeData {
return constructProxy(_DropdownMenuThemeDataProxy, args, implementation) as DropdownMenuThemeData; } }
const _DropdownMenuThemeDataBinding = _flaxProxyFactory(_DropdownMenuThemeDataFactory, _DropdownMenuThemeDataNative) as unknown as typeof _DropdownMenuThemeDataFactory & (new(options?: {textStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; inputDecorationTheme?: unknown | null | undefined; menuStyle?: Readonly<{ "__flaxBound:package:material_ui/src/menu_style.dart::MenuStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; disabledColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}) => _DropdownMenuThemeDataNative);
export namespace _DropdownMenuThemeDataFactory { export function lerp(a: Readonly<{ "__flaxBound:package:material_ui/src/dropdown_menu_theme.dart::DropdownMenuThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:material_ui/src/dropdown_menu_theme.dart::DropdownMenuThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): DropdownMenuThemeData {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:DropdownMenuThemeData.lerp", [a, b, t]);
return _flaxResult as DropdownMenuThemeData;
} }
export const DropdownMenuThemeData: typeof _DropdownMenuThemeDataBinding & _FlaxInstanceType<DropdownMenuThemeData> & _FlaxDartType<DropdownMenuThemeData, readonly ["class", "flax.material/material#type:DropdownMenuThemeData", readonly [], false]> = _flaxBindInstanceType<DropdownMenuThemeData, typeof _DropdownMenuThemeDataBinding>(_DropdownMenuThemeDataBinding, "flax.material/material#type:DropdownMenuThemeData", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _DropdownMenuThemeDataBinding & _FlaxInstanceType<DropdownMenuThemeData> & _FlaxDartType<DropdownMenuThemeData, readonly ["class", "flax.material/material#type:DropdownMenuThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "textStyle" | "inputDecorationTheme" | "menuStyle" | "disabledColor" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:material_ui/src/dropdown_menu_theme.dart::DropdownMenuThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
