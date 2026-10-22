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
import { _flaxMemberParameters2, _flaxMemberParameters335, _flaxMemberParameters4, _flaxMemberParameters5, _flaxMemberParameters6, _flaxMemberParameters7 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextSelectionThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:material_ui/src/text_selection_theme.dart::TextSelectionThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __TextSelectionThemeData: unique symbol;
readonly [_flaxDartTypeValue]: TextSelectionThemeData;

readonly cursorColor: upstream1.Color | null;
readonly selectionColor: upstream1.Color | null;
readonly selectionHandleColor: upstream1.Color | null;
toStringShort(): string;
toString(options?: {minLevel?: upstream2.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream4.DiagnosticsTreeStyle | null | undefined}): upstream3.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {cursorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionHandleColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}): TextSelectionThemeData;
}
defineObject("flax.material/material#type:TextSelectionThemeData", ["cursorColor","selectionColor","selectionHandleColor"], [], _flaxBindingMethods("flax.material/material#type:TextSelectionThemeData", "object", {"copyWith":_flaxMemberParameters335}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _TextSelectionThemeDataFactory(options: { cursorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionHandleColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined } = {}): TextSelectionThemeData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:TextSelectionThemeData", "", _flaxMemberParameters335, [], options) as TextSelectionThemeData;
}
const _TextSelectionThemeDataProxy = {type: "flax.material/material#type:TextSelectionThemeData", parameters: _flaxMemberParameters335, constructors: {"": _flaxMemberParameters335}, methods: {"toStringShort":_flaxMemberParameters4,"toString":_flaxMemberParameters5,"toDiagnosticsNode":_flaxMemberParameters6,"debugFillProperties":_flaxMemberParameters7,"copyWith":_flaxMemberParameters335}, getters: ["cursorColor","selectionColor","selectionHandleColor"], setters: [], contextMembers: [], superMembers: ["get:cursorColor","get:selectionColor","get:selectionHandleColor","toStringShort","toString","toDiagnosticsNode","debugFillProperties","copyWith"]} as const;
export interface _TextSelectionThemeDataNative extends TextSelectionThemeData {
readonly [_flaxDartTypeValue]: _TextSelectionThemeDataNative;

toStringShort(): string;
toString(options?: {minLevel?: upstream2.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream4.DiagnosticsTreeStyle | null | undefined}): upstream3.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {cursorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionHandleColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}): TextSelectionThemeData;
get cursorColor(): upstream1.Color | null;
get selectionColor(): upstream1.Color | null;
get selectionHandleColor(): upstream1.Color | null;
}
export abstract class _TextSelectionThemeDataNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextSelectionThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextSelectionThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:TextSelectionThemeData", readonly [], false];
constructor(options?: {cursorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionHandleColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}) { super(_TextSelectionThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_TextSelectionThemeDataNative.prototype, _TextSelectionThemeDataProxy);
export namespace _TextSelectionThemeDataFactory { export function implement(args: [options?: {cursorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionHandleColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}], implementation: {}): TextSelectionThemeData {
return constructProxy(_TextSelectionThemeDataProxy, args, implementation) as TextSelectionThemeData; } }
const _TextSelectionThemeDataBinding = _flaxProxyFactory(_TextSelectionThemeDataFactory, _TextSelectionThemeDataNative) as unknown as typeof _TextSelectionThemeDataFactory & (new(options?: {cursorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionHandleColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}) => _TextSelectionThemeDataNative);
export namespace _TextSelectionThemeDataFactory { export function lerp(a: Readonly<{ "__flaxBound:package:material_ui/src/text_selection_theme.dart::TextSelectionThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:material_ui/src/text_selection_theme.dart::TextSelectionThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): TextSelectionThemeData | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:TextSelectionThemeData.lerp", [a, b, t], _flaxMemberParameters2);
return _flaxResult as TextSelectionThemeData | null;
} }
export const TextSelectionThemeData: typeof _TextSelectionThemeDataBinding & _FlaxInstanceType<TextSelectionThemeData> & _FlaxDartType<TextSelectionThemeData, readonly ["class", "flax.material/material#type:TextSelectionThemeData", readonly [], false]> = _flaxBindInstanceType<TextSelectionThemeData, typeof _TextSelectionThemeDataBinding>(_TextSelectionThemeDataBinding, "flax.material/material#type:TextSelectionThemeData", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _TextSelectionThemeDataBinding & _FlaxInstanceType<TextSelectionThemeData> & _FlaxDartType<TextSelectionThemeData, readonly ["class", "flax.material/material#type:TextSelectionThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "cursorColor" | "selectionColor" | "selectionHandleColor" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:material_ui/src/text_selection_theme.dart::TextSelectionThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
