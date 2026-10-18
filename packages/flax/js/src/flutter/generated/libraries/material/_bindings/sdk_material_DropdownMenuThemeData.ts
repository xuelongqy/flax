// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream2 from '@flax/flutter/material/_bindings/sdk_material_MenuStyle';
import '@flax/flutter/material/_bindings/sdk_material_MenuStyle';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/material/_bindings/sdk_material_InputDecorationThemeData';
import '@flax/flutter/material/_bindings/sdk_material_InputDecorationThemeData';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
const _flaxMemberParameters0 = [{"name":"disabledColor","required":false,"positional":false},{"name":"inputDecorationTheme","required":false,"positional":false},{"name":"menuStyle","required":false,"positional":false},{"name":"textStyle","required":false,"positional":false}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"minLevel","required":false,"positional":false}] as const;
const _flaxMemberParameters3 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
const _flaxMemberParameters4 = [{"name":"properties","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DropdownMenuThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/dropdown_menu_theme.dart::DropdownMenuThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __DropdownMenuThemeData: unique symbol;
readonly [_flaxDartTypeValue]: DropdownMenuThemeData;

}
defineObject("flax.core/sdk_material#type:DropdownMenuThemeData", ["textStyle","inputDecorationTheme","menuStyle","disabledColor"], [], _flaxBindingMethods("flax.core/sdk_material#type:DropdownMenuThemeData", "object", {"copyWith":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _DropdownMenuThemeDataProxy = {type: "flax.core/sdk_material#type:DropdownMenuThemeData", parameters: [{"name":"textStyle","required":false,"positional":false},{"name":"inputDecorationTheme","required":false,"positional":false},{"name":"menuStyle","required":false,"positional":false},{"name":"disabledColor","required":false,"positional":false}], constructors: {"":[{"name":"textStyle","required":false,"positional":false},{"name":"inputDecorationTheme","required":false,"positional":false},{"name":"menuStyle","required":false,"positional":false},{"name":"disabledColor","required":false,"positional":false}]}, methods: {"toStringShort":_flaxMemberParameters1,"toString":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters3,"debugFillProperties":_flaxMemberParameters4,"copyWith":_flaxMemberParameters0}, getters: ["textStyle","inputDecorationTheme","menuStyle","disabledColor"], setters: [], contextMembers: [], superMembers: ["get:textStyle","get:inputDecorationTheme","get:menuStyle","get:disabledColor","toStringShort","toString","toDiagnosticsNode","debugFillProperties","copyWith"]} as const;
export interface DropdownMenuThemeData {
readonly [_flaxDartTypeValue]: DropdownMenuThemeData;

toStringShort(): string;
toString(options?: {minLevel?: upstream5.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {textStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; inputDecorationTheme?: unknown | null | undefined; menuStyle?: Readonly<{ "__flaxBound:package:flutter/src/material/menu_style.dart::MenuStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; disabledColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}): DropdownMenuThemeData;
get textStyle(): upstream1.TextStyle | null;
get inputDecorationTheme(): upstream4.InputDecorationThemeData | null;
get menuStyle(): upstream2.MenuStyle | null;
get disabledColor(): upstream3.Color | null;
}
export abstract class DropdownMenuThemeData extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DropdownMenuThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DropdownMenuThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:DropdownMenuThemeData", readonly [], false];
constructor(options?: {textStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; inputDecorationTheme?: unknown | null | undefined; menuStyle?: Readonly<{ "__flaxBound:package:flutter/src/material/menu_style.dart::MenuStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; disabledColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}) { super(_DropdownMenuThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DropdownMenuThemeData.prototype, _DropdownMenuThemeDataProxy);
export namespace DropdownMenuThemeData { export function implement(args: [options?: {textStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; inputDecorationTheme?: unknown | null | undefined; menuStyle?: Readonly<{ "__flaxBound:package:flutter/src/material/menu_style.dart::MenuStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; disabledColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}], implementation: {}): DropdownMenuThemeData {
return constructProxy(_DropdownMenuThemeDataProxy, args, implementation) as DropdownMenuThemeData; } }
export namespace DropdownMenuThemeData { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/material/dropdown_menu_theme.dart::DropdownMenuThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/material/dropdown_menu_theme.dart::DropdownMenuThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): DropdownMenuThemeData {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_material#function:DropdownMenuThemeData.lerp", [a, b, t]);
return _flaxResult as DropdownMenuThemeData;
} }
_flaxBindInstanceType<DropdownMenuThemeData, typeof DropdownMenuThemeData>(DropdownMenuThemeData, "flax.core/sdk_material#type:DropdownMenuThemeData", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "textStyle" | "inputDecorationTheme" | "menuStyle" | "disabledColor" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:flutter/src/material/dropdown_menu_theme.dart::DropdownMenuThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
