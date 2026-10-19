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
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AutocompleteFirstOptionIntent extends Omit<upstream0.Intent, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Intent>, Readonly<{ "__flaxBound:package:flutter/src/widgets/autocomplete.dart::AutocompleteFirstOptionIntent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __AutocompleteFirstOptionIntent: unique symbol;
readonly [_flaxDartTypeValue]: AutocompleteFirstOptionIntent;

}
defineObject("flax.core/sdk_widgets#type:AutocompleteFirstOptionIntent", [], [], _flaxBindingMethods("flax.core/sdk_widgets#type:AutocompleteFirstOptionIntent", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:Intent");
const _AutocompleteFirstOptionIntentProxy = {type: "flax.core/sdk_widgets#type:AutocompleteFirstOptionIntent", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters5,"toString":_flaxMemberParameters9}, getters: [], setters: [], contextMembers: [], superMembers: ["toStringShort","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface AutocompleteFirstOptionIntent {
readonly [_flaxDartTypeValue]: AutocompleteFirstOptionIntent;

toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream3.DiagnosticsTreeStyle | null | undefined}): upstream2.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream5.DiagnosticLevel | undefined}): string;
}
export abstract class AutocompleteFirstOptionIntent extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AutocompleteFirstOptionIntent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AutocompleteFirstOptionIntent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:AutocompleteFirstOptionIntent", readonly [], false];
constructor() { super(_AutocompleteFirstOptionIntentProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(AutocompleteFirstOptionIntent.prototype, _AutocompleteFirstOptionIntentProxy);
export namespace AutocompleteFirstOptionIntent { export function implement(args: [], implementation: {}): AutocompleteFirstOptionIntent {
return constructProxy(_AutocompleteFirstOptionIntentProxy, args, implementation) as AutocompleteFirstOptionIntent; } }
_flaxBindInstanceType<AutocompleteFirstOptionIntent, typeof AutocompleteFirstOptionIntent>(AutocompleteFirstOptionIntent, "flax.core/sdk_widgets#type:AutocompleteFirstOptionIntent", ["flax.core/sdk_widgets#type:Intent","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/autocomplete.dart::AutocompleteFirstOptionIntent" | "__flaxBound:package:flutter/src/widgets/actions.dart::Intent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
