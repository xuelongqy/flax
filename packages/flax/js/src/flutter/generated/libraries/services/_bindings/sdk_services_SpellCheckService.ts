// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_SuggestionSpan';
import '@flax/flutter/services/_bindings/sdk_services_SuggestionSpan';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
const _flaxMemberParameters0 = [{"name":"locale","required":true,"positional":true},{"name":"text","required":true,"positional":true}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SpellCheckService extends Readonly<{ "__flaxBound:package:flutter/src/services/spell_check.dart::SpellCheckService": readonly [] }> { readonly __SpellCheckService: unique symbol;
readonly [_flaxDartTypeValue]: SpellCheckService;

fetchSpellCheckSuggestions(locale: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }>, text: string): Promise<DartList<upstream0.SuggestionSpan> | null>;
}
defineObject("flax.core/sdk_services#type:SpellCheckService", [], [], _flaxBindingMethods("flax.core/sdk_services#type:SpellCheckService", "object", {"fetchSpellCheckSuggestions":_flaxMemberParameters0}, {}), []);
const _SpellCheckServiceProxy = {type: "flax.core/sdk_services#type:SpellCheckService", parameters: [], constructors: {}, methods: {"fetchSpellCheckSuggestions":_flaxMemberParameters0}, getters: [], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _SpellCheckServiceFactory { export function implement(args: [], implementation: {fetchSpellCheckSuggestions: ((locale: upstream1.Locale, text: string) => Promise<DartListInput<upstream0.SuggestionSpan, Readonly<{ "__flaxBound:package:flutter/src/services/spell_check.dart::SuggestionSpan": readonly [] }>> | null>)}): SpellCheckService {
return constructProxy(_SpellCheckServiceProxy, args, implementation) as SpellCheckService; } }
export const SpellCheckService: typeof _SpellCheckServiceFactory & _FlaxInstanceType<SpellCheckService> & _FlaxDartType<SpellCheckService, readonly ["class", "flax.core/sdk_services#type:SpellCheckService", readonly [], false]> = _flaxBindInstanceType<SpellCheckService, typeof _SpellCheckServiceFactory>(_SpellCheckServiceFactory, "flax.core/sdk_services#type:SpellCheckService", ["dart:core::Object"]) as typeof _SpellCheckServiceFactory & _FlaxInstanceType<SpellCheckService> & _FlaxDartType<SpellCheckService, readonly ["class", "flax.core/sdk_services#type:SpellCheckService", readonly [], false]>;
