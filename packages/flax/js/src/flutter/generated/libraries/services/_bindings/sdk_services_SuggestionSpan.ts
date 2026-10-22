// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import { _flaxMemberParameters0, _flaxMemberParameters109 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SuggestionSpan extends Readonly<{ "__flaxBound:package:flutter/src/services/spell_check.dart::SuggestionSpan": readonly [] }> { readonly __SuggestionSpan: unique symbol;
readonly [_flaxDartTypeValue]: SuggestionSpan;

readonly range: upstream0.TextRange;
readonly suggestions: DartList<string>;
toString(): string;
}
defineObject("flax.core/sdk_services#type:SuggestionSpan", ["range","suggestions"], [], _flaxBindingMethods("flax.core/sdk_services#type:SuggestionSpan", "object", {"toString":_flaxMemberParameters0}, {}), []);
export function _SuggestionSpanFactory(range: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>, suggestions: DartListInput<string, string>): SuggestionSpan {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:SuggestionSpan", "", [{"name":"range","required":true,"positional":true},{"name":"suggestions","required":true,"positional":true}], [range, suggestions], {}) as SuggestionSpan;
}
const _SuggestionSpanProxy = {type: "flax.core/sdk_services#type:SuggestionSpan", parameters: _flaxMemberParameters109, constructors: {"": _flaxMemberParameters109}, methods: {"toString":_flaxMemberParameters0}, getters: ["range","suggestions"], setters: [], contextMembers: [], superMembers: ["get:range","get:suggestions","toString"]} as const;
export interface _SuggestionSpanNative extends SuggestionSpan {
readonly [_flaxDartTypeValue]: _SuggestionSpanNative;

toString(): string;
get range(): upstream0.TextRange;
get suggestions(): DartList<string>;
}
export abstract class _SuggestionSpanNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SuggestionSpan>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SuggestionSpan;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:SuggestionSpan", readonly [], false];
constructor(range: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>, suggestions: DartListInput<string, string>) { super(_SuggestionSpanProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SuggestionSpanNative.prototype, _SuggestionSpanProxy);
export namespace _SuggestionSpanFactory { export function implement(args: [range: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>, suggestions: DartListInput<string, string>], implementation: {}): SuggestionSpan {
return constructProxy(_SuggestionSpanProxy, args, implementation) as SuggestionSpan; } }
const _SuggestionSpanBinding = _flaxProxyFactory(_SuggestionSpanFactory, _SuggestionSpanNative) as unknown as typeof _SuggestionSpanFactory & (new(range: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>, suggestions: DartListInput<string, string>) => _SuggestionSpanNative);
export const SuggestionSpan: typeof _SuggestionSpanBinding & _FlaxInstanceType<SuggestionSpan> & _FlaxDartType<SuggestionSpan, readonly ["class", "flax.core/sdk_services#type:SuggestionSpan", readonly [], false]> = _flaxBindInstanceType<SuggestionSpan, typeof _SuggestionSpanBinding>(_SuggestionSpanBinding, "flax.core/sdk_services#type:SuggestionSpan", ["dart:core::Object"]) as typeof _SuggestionSpanBinding & _FlaxInstanceType<SuggestionSpan> & _FlaxDartType<SuggestionSpan, readonly ["class", "flax.core/sdk_services#type:SuggestionSpan", readonly [], false]>;
