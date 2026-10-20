// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { _flaxMemberParameters2, _flaxMemberParameters8, _flaxMemberParameters5, _flaxMemberParameters9 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AutocompleteNextPageOptionIntent extends Omit<upstream0.Intent, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Intent>, Readonly<{ "__flaxBound:package:flutter/src/widgets/autocomplete.dart::AutocompleteNextPageOptionIntent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __AutocompleteNextPageOptionIntent: unique symbol;
readonly [_flaxDartTypeValue]: AutocompleteNextPageOptionIntent;

toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream3.DiagnosticsTreeStyle | null | undefined}): upstream2.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream5.DiagnosticLevel | undefined}): string;
}
defineObject("flax.core/sdk_widgets#type:AutocompleteNextPageOptionIntent", [], [], _flaxBindingMethods("flax.core/sdk_widgets#type:AutocompleteNextPageOptionIntent", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:Intent");
export function _AutocompleteNextPageOptionIntentFactory(): AutocompleteNextPageOptionIntent {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:AutocompleteNextPageOptionIntent", "", [], [], {}) as AutocompleteNextPageOptionIntent;
}
const _AutocompleteNextPageOptionIntentProxy = {type: "flax.core/sdk_widgets#type:AutocompleteNextPageOptionIntent", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters5,"toString":_flaxMemberParameters9}, getters: [], setters: [], contextMembers: [], superMembers: ["toStringShort","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface _AutocompleteNextPageOptionIntentNative extends AutocompleteNextPageOptionIntent {
readonly [_flaxDartTypeValue]: _AutocompleteNextPageOptionIntentNative;

toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream3.DiagnosticsTreeStyle | null | undefined}): upstream2.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream5.DiagnosticLevel | undefined}): string;
}
export abstract class _AutocompleteNextPageOptionIntentNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AutocompleteNextPageOptionIntent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AutocompleteNextPageOptionIntent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:AutocompleteNextPageOptionIntent", readonly [], false];
constructor() { super(_AutocompleteNextPageOptionIntentProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_AutocompleteNextPageOptionIntentNative.prototype, _AutocompleteNextPageOptionIntentProxy);
export namespace _AutocompleteNextPageOptionIntentFactory { export function implement(args: [], implementation: {}): AutocompleteNextPageOptionIntent {
return constructProxy(_AutocompleteNextPageOptionIntentProxy, args, implementation) as AutocompleteNextPageOptionIntent; } }
const _AutocompleteNextPageOptionIntentBinding = _flaxProxyFactory(_AutocompleteNextPageOptionIntentFactory, _AutocompleteNextPageOptionIntentNative) as unknown as typeof _AutocompleteNextPageOptionIntentFactory & (new() => _AutocompleteNextPageOptionIntentNative);
export const AutocompleteNextPageOptionIntent: typeof _AutocompleteNextPageOptionIntentBinding & _FlaxInstanceType<AutocompleteNextPageOptionIntent> & _FlaxDartType<AutocompleteNextPageOptionIntent, readonly ["class", "flax.core/sdk_widgets#type:AutocompleteNextPageOptionIntent", readonly [], false]> = _flaxBindInstanceType<AutocompleteNextPageOptionIntent, typeof _AutocompleteNextPageOptionIntentBinding>(_AutocompleteNextPageOptionIntentBinding, "flax.core/sdk_widgets#type:AutocompleteNextPageOptionIntent", ["flax.core/sdk_widgets#type:Intent","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _AutocompleteNextPageOptionIntentBinding & _FlaxInstanceType<AutocompleteNextPageOptionIntent> & _FlaxDartType<AutocompleteNextPageOptionIntent, readonly ["class", "flax.core/sdk_widgets#type:AutocompleteNextPageOptionIntent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/autocomplete.dart::AutocompleteNextPageOptionIntent" | "__flaxBound:package:flutter/src/widgets/actions.dart::Intent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
