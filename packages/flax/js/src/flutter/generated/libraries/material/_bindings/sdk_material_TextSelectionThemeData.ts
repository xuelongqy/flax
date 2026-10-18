// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
const _flaxMemberParameters0 = [{"name":"cursorColor","required":false,"positional":false},{"name":"selectionColor","required":false,"positional":false},{"name":"selectionHandleColor","required":false,"positional":false}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"minLevel","required":false,"positional":false}] as const;
const _flaxMemberParameters3 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
const _flaxMemberParameters4 = [{"name":"properties","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextSelectionThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/text_selection_theme.dart::TextSelectionThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __TextSelectionThemeData: unique symbol;
readonly [_flaxDartTypeValue]: TextSelectionThemeData;

}
defineObject("flax.core/sdk_material#type:TextSelectionThemeData", ["cursorColor","selectionColor","selectionHandleColor"], [], _flaxBindingMethods("flax.core/sdk_material#type:TextSelectionThemeData", "object", {"copyWith":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _TextSelectionThemeDataProxy = {type: "flax.core/sdk_material#type:TextSelectionThemeData", parameters: [{"name":"cursorColor","required":false,"positional":false},{"name":"selectionColor","required":false,"positional":false},{"name":"selectionHandleColor","required":false,"positional":false}], constructors: {"":[{"name":"cursorColor","required":false,"positional":false},{"name":"selectionColor","required":false,"positional":false},{"name":"selectionHandleColor","required":false,"positional":false}]}, methods: {"toStringShort":_flaxMemberParameters1,"toString":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters3,"debugFillProperties":_flaxMemberParameters4,"copyWith":_flaxMemberParameters0}, getters: ["cursorColor","selectionColor","selectionHandleColor"], setters: [], contextMembers: [], superMembers: ["get:cursorColor","get:selectionColor","get:selectionHandleColor","toStringShort","toString","toDiagnosticsNode","debugFillProperties","copyWith"]} as const;
export interface TextSelectionThemeData {
readonly [_flaxDartTypeValue]: TextSelectionThemeData;

toStringShort(): string;
toString(options?: {minLevel?: upstream2.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream4.DiagnosticsTreeStyle | null | undefined}): upstream3.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {cursorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionHandleColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}): TextSelectionThemeData;
get cursorColor(): upstream1.Color | null;
get selectionColor(): upstream1.Color | null;
get selectionHandleColor(): upstream1.Color | null;
}
export abstract class TextSelectionThemeData extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextSelectionThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextSelectionThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:TextSelectionThemeData", readonly [], false];
constructor(options?: {cursorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionHandleColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}) { super(_TextSelectionThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TextSelectionThemeData.prototype, _TextSelectionThemeDataProxy);
export namespace TextSelectionThemeData { export function implement(args: [options?: {cursorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionHandleColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}], implementation: {}): TextSelectionThemeData {
return constructProxy(_TextSelectionThemeDataProxy, args, implementation) as TextSelectionThemeData; } }
export namespace TextSelectionThemeData { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/material/text_selection_theme.dart::TextSelectionThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/material/text_selection_theme.dart::TextSelectionThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): TextSelectionThemeData | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_material#function:TextSelectionThemeData.lerp", [a, b, t]);
return _flaxResult as TextSelectionThemeData | null;
} }
_flaxBindInstanceType<TextSelectionThemeData, typeof TextSelectionThemeData>(TextSelectionThemeData, "flax.core/sdk_material#type:TextSelectionThemeData", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "cursorColor" | "selectionColor" | "selectionHandleColor" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:flutter/src/material/text_selection_theme.dart::TextSelectionThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
