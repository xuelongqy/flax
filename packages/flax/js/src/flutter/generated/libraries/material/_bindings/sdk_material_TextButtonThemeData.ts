// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_ButtonStyle';
import '@flax/flutter/material/_bindings/sdk_material_ButtonStyle';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters129, _flaxMemberParameters2, _flaxMemberParameters3, _flaxMemberParameters4, _flaxMemberParameters5 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextButtonThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/text_button_theme.dart::TextButtonThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __TextButtonThemeData: unique symbol;
readonly [_flaxDartTypeValue]: TextButtonThemeData;

}
defineObject("flax.core/sdk_material#type:TextButtonThemeData", ["style"], [], _flaxBindingMethods("flax.core/sdk_material#type:TextButtonThemeData", "object", {}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _TextButtonThemeDataProxy = {type: "flax.core/sdk_material#type:TextButtonThemeData", parameters: _flaxMemberParameters129, constructors: {"": _flaxMemberParameters129}, methods: {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugFillProperties":_flaxMemberParameters5}, getters: ["style"], setters: [], contextMembers: [], superMembers: ["get:style","toStringShort","toString","toDiagnosticsNode","debugFillProperties"]} as const;
export interface TextButtonThemeData {
readonly [_flaxDartTypeValue]: TextButtonThemeData;

toStringShort(): string;
toString(options?: {minLevel?: upstream2.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream4.DiagnosticsTreeStyle | null | undefined}): upstream3.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
get style(): upstream1.ButtonStyle | null;
}
export abstract class TextButtonThemeData extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextButtonThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextButtonThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:TextButtonThemeData", readonly [], false];
constructor(options?: {style?: Readonly<{ "__flaxBound:package:flutter/src/material/button_style.dart::ButtonStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}) { super(_TextButtonThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TextButtonThemeData.prototype, _TextButtonThemeDataProxy);
export namespace TextButtonThemeData { export function implement(args: [options?: {style?: Readonly<{ "__flaxBound:package:flutter/src/material/button_style.dart::ButtonStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}], implementation: {}): TextButtonThemeData {
return constructProxy(_TextButtonThemeDataProxy, args, implementation) as TextButtonThemeData; } }
export namespace TextButtonThemeData { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/material/text_button_theme.dart::TextButtonThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/material/text_button_theme.dart::TextButtonThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): TextButtonThemeData | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_material#function:TextButtonThemeData.lerp", [a, b, t]);
return _flaxResult as TextButtonThemeData | null;
} }
_flaxBindInstanceType<TextButtonThemeData, typeof TextButtonThemeData>(TextButtonThemeData, "flax.core/sdk_material#type:TextButtonThemeData", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "style" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/material/text_button_theme.dart::TextButtonThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
