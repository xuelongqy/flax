// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
const _flaxMemberParameters0 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SuggestionSpan extends Readonly<{ "__flaxBound:package:flutter/src/services/spell_check.dart::SuggestionSpan": readonly [] }> { readonly __SuggestionSpan: unique symbol;
readonly [_flaxDartTypeValue]: SuggestionSpan;

}
defineObject("flax.core/sdk_services#type:SuggestionSpan", ["range","suggestions"], [], _flaxBindingMethods("flax.core/sdk_services#type:SuggestionSpan", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _SuggestionSpanProxy = {type: "flax.core/sdk_services#type:SuggestionSpan", parameters: [{"name":"range","required":true,"positional":true},{"name":"suggestions","required":true,"positional":true}], constructors: {"":[{"name":"range","required":true,"positional":true},{"name":"suggestions","required":true,"positional":true}]}, methods: {"toString":_flaxMemberParameters0}, getters: ["range","suggestions"], setters: [], contextMembers: [], superMembers: ["get:range","get:suggestions","toString"]} as const;
export interface SuggestionSpan {
readonly [_flaxDartTypeValue]: SuggestionSpan;

toString(): string;
get range(): upstream0.TextRange;
get suggestions(): DartList<string>;
}
export abstract class SuggestionSpan extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SuggestionSpan>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SuggestionSpan;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:SuggestionSpan", readonly [], false];
constructor(range: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>, suggestions: DartListInput<string, string>) { super(_SuggestionSpanProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SuggestionSpan.prototype, _SuggestionSpanProxy);
export namespace SuggestionSpan { export function implement(args: [range: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>, suggestions: DartListInput<string, string>], implementation: {}): SuggestionSpan {
return constructProxy(_SuggestionSpanProxy, args, implementation) as SuggestionSpan; } }
_flaxBindInstanceType<SuggestionSpan, typeof SuggestionSpan>(SuggestionSpan, "flax.core/sdk_services#type:SuggestionSpan", ["dart:core::Object"]);
