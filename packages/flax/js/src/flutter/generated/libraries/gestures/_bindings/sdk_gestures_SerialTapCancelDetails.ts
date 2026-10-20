// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters90, _flaxMemberParameters7, _flaxMemberParameters16, _flaxMemberParameters15, _flaxMemberParameters9 } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SerialTapCancelDetails extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/gestures/multitap.dart::SerialTapCancelDetails": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __SerialTapCancelDetails: unique symbol;
readonly [_flaxDartTypeValue]: SerialTapCancelDetails;

readonly count: number;
toStringShort(): string;
toString(options?: {minLevel?: upstream1.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream3.DiagnosticsTreeStyle | null | undefined}): upstream2.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
}
defineObject("flax.core/sdk_gestures#type:SerialTapCancelDetails", ["count"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:SerialTapCancelDetails", "object", {}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _SerialTapCancelDetailsFactory(options: { count?: number | undefined } = {}): SerialTapCancelDetails {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_gestures#type:SerialTapCancelDetails", "", [{"name":"count"}], [], options) as SerialTapCancelDetails;
}
const _SerialTapCancelDetailsProxy = {type: "flax.core/sdk_gestures#type:SerialTapCancelDetails", parameters: _flaxMemberParameters90, constructors: {"": _flaxMemberParameters90}, methods: {"toStringShort":_flaxMemberParameters7,"toString":_flaxMemberParameters16,"toDiagnosticsNode":_flaxMemberParameters15,"debugFillProperties":_flaxMemberParameters9}, getters: ["count"], setters: [], contextMembers: [], superMembers: ["get:count","toStringShort","toString","toDiagnosticsNode","debugFillProperties"]} as const;
export interface _SerialTapCancelDetailsNative extends SerialTapCancelDetails {
readonly [_flaxDartTypeValue]: _SerialTapCancelDetailsNative;

toStringShort(): string;
toString(options?: {minLevel?: upstream1.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream3.DiagnosticsTreeStyle | null | undefined}): upstream2.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
get count(): number;
}
export abstract class _SerialTapCancelDetailsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SerialTapCancelDetails>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SerialTapCancelDetails;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:SerialTapCancelDetails", readonly [], false];
constructor(options?: {count?: number | undefined}) { super(_SerialTapCancelDetailsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SerialTapCancelDetailsNative.prototype, _SerialTapCancelDetailsProxy);
export namespace _SerialTapCancelDetailsFactory { export function implement(args: [options?: {count?: number | undefined}], implementation: {}): SerialTapCancelDetails {
return constructProxy(_SerialTapCancelDetailsProxy, args, implementation) as SerialTapCancelDetails; } }
const _SerialTapCancelDetailsBinding = _flaxProxyFactory(_SerialTapCancelDetailsFactory, _SerialTapCancelDetailsNative) as unknown as typeof _SerialTapCancelDetailsFactory & (new(options?: {count?: number | undefined}) => _SerialTapCancelDetailsNative);
export const SerialTapCancelDetails: typeof _SerialTapCancelDetailsBinding & _FlaxInstanceType<SerialTapCancelDetails> & _FlaxDartType<SerialTapCancelDetails, readonly ["class", "flax.core/sdk_gestures#type:SerialTapCancelDetails", readonly [], false]> = _flaxBindInstanceType<SerialTapCancelDetails, typeof _SerialTapCancelDetailsBinding>(_SerialTapCancelDetailsBinding, "flax.core/sdk_gestures#type:SerialTapCancelDetails", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _SerialTapCancelDetailsBinding & _FlaxInstanceType<SerialTapCancelDetails> & _FlaxDartType<SerialTapCancelDetails, readonly ["class", "flax.core/sdk_gestures#type:SerialTapCancelDetails", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "count" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/gestures/multitap.dart::SerialTapCancelDetails" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
