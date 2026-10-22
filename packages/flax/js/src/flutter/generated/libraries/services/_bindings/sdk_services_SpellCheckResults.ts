// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_SuggestionSpan';
import '@flax/flutter/services/_bindings/sdk_services_SuggestionSpan';
import { _flaxMemberParameters0, _flaxMemberParameters104 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SpellCheckResults extends Readonly<{ "__flaxBound:package:flutter/src/services/spell_check.dart::SpellCheckResults": readonly [] }> { readonly __SpellCheckResults: unique symbol;
readonly [_flaxDartTypeValue]: SpellCheckResults;

readonly spellCheckedText: string;
readonly suggestionSpans: DartList<upstream0.SuggestionSpan>;
toString(): string;
}
defineObject("flax.core/sdk_services#type:SpellCheckResults", ["spellCheckedText","suggestionSpans"], [], _flaxBindingMethods("flax.core/sdk_services#type:SpellCheckResults", "object", {"toString":_flaxMemberParameters0}, {}), []);
export function _SpellCheckResultsFactory(spellCheckedText: string, suggestionSpans: DartListInput<upstream0.SuggestionSpan, Readonly<{ "__flaxBound:package:flutter/src/services/spell_check.dart::SuggestionSpan": readonly [] }>>): SpellCheckResults {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:SpellCheckResults", "", [{"name":"spellCheckedText","required":true,"positional":true},{"name":"suggestionSpans","required":true,"positional":true}], [spellCheckedText, suggestionSpans], {}) as SpellCheckResults;
}
const _SpellCheckResultsProxy = {type: "flax.core/sdk_services#type:SpellCheckResults", parameters: _flaxMemberParameters104, constructors: {"": _flaxMemberParameters104}, methods: {"toString":_flaxMemberParameters0}, getters: ["spellCheckedText","suggestionSpans"], setters: [], contextMembers: [], superMembers: ["get:spellCheckedText","get:suggestionSpans","toString"]} as const;
export interface _SpellCheckResultsNative extends SpellCheckResults {
readonly [_flaxDartTypeValue]: _SpellCheckResultsNative;

toString(): string;
get spellCheckedText(): string;
get suggestionSpans(): DartList<upstream0.SuggestionSpan>;
}
export abstract class _SpellCheckResultsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SpellCheckResults>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SpellCheckResults;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:SpellCheckResults", readonly [], false];
constructor(spellCheckedText: string, suggestionSpans: DartListInput<upstream0.SuggestionSpan, Readonly<{ "__flaxBound:package:flutter/src/services/spell_check.dart::SuggestionSpan": readonly [] }>>) { super(_SpellCheckResultsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SpellCheckResultsNative.prototype, _SpellCheckResultsProxy);
export namespace _SpellCheckResultsFactory { export function implement(args: [spellCheckedText: string, suggestionSpans: DartListInput<upstream0.SuggestionSpan, Readonly<{ "__flaxBound:package:flutter/src/services/spell_check.dart::SuggestionSpan": readonly [] }>>], implementation: {}): SpellCheckResults {
return constructProxy(_SpellCheckResultsProxy, args, implementation) as SpellCheckResults; } }
const _SpellCheckResultsBinding = _flaxProxyFactory(_SpellCheckResultsFactory, _SpellCheckResultsNative) as unknown as typeof _SpellCheckResultsFactory & (new(spellCheckedText: string, suggestionSpans: DartListInput<upstream0.SuggestionSpan, Readonly<{ "__flaxBound:package:flutter/src/services/spell_check.dart::SuggestionSpan": readonly [] }>>) => _SpellCheckResultsNative);
export const SpellCheckResults: typeof _SpellCheckResultsBinding & _FlaxInstanceType<SpellCheckResults> & _FlaxDartType<SpellCheckResults, readonly ["class", "flax.core/sdk_services#type:SpellCheckResults", readonly [], false]> = _flaxBindInstanceType<SpellCheckResults, typeof _SpellCheckResultsBinding>(_SpellCheckResultsBinding, "flax.core/sdk_services#type:SpellCheckResults", ["dart:core::Object"]) as typeof _SpellCheckResultsBinding & _FlaxInstanceType<SpellCheckResults> & _FlaxDartType<SpellCheckResults, readonly ["class", "flax.core/sdk_services#type:SpellCheckResults", readonly [], false]>;
