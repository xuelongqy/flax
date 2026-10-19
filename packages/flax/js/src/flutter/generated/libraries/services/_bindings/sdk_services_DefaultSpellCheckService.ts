// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_SpellCheckService';
import '@flax/flutter/services/_bindings/sdk_services_SpellCheckService';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_SpellCheckResults';
import '@flax/flutter/services/_bindings/sdk_services_SpellCheckResults';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_MethodChannel';
import '@flax/flutter/services/_bindings/sdk_services_MethodChannel';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_SuggestionSpan';
import '@flax/flutter/services/_bindings/sdk_services_SuggestionSpan';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import { _flaxMemberParameters0, _flaxMemberParameters29 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DefaultSpellCheckService extends Omit<upstream0.SpellCheckService, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/spell_check.dart::DefaultSpellCheckService": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/spell_check.dart::SpellCheckService": readonly [] }> { readonly __DefaultSpellCheckService: unique symbol;
readonly [_flaxDartTypeValue]: DefaultSpellCheckService;

}
defineObject("flax.core/sdk_services#type:DefaultSpellCheckService", ["lastSavedResults","spellCheckChannel"], ["lastSavedResults","spellCheckChannel"], _flaxBindingMethods("flax.core/sdk_services#type:DefaultSpellCheckService", "object", {}, {}), [], undefined, "flax.core/sdk_services#type:SpellCheckService");
const _DefaultSpellCheckServiceProxy = {type: "flax.core/sdk_services#type:DefaultSpellCheckService", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"fetchSpellCheckSuggestions":_flaxMemberParameters29}, getters: ["lastSavedResults","spellCheckChannel"], setters: ["lastSavedResults","spellCheckChannel"], contextMembers: [], superMembers: ["get:lastSavedResults","get:spellCheckChannel","set:lastSavedResults","set:spellCheckChannel","fetchSpellCheckSuggestions"]} as const;
export interface DefaultSpellCheckService {
readonly [_flaxDartTypeValue]: DefaultSpellCheckService;

fetchSpellCheckSuggestions(locale: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }>, text: string): Promise<DartList<upstream3.SuggestionSpan> | null>;
get lastSavedResults(): upstream1.SpellCheckResults | null;
get spellCheckChannel(): upstream2.MethodChannel;
set lastSavedResults(value: Readonly<{ "__flaxBound:package:flutter/src/services/spell_check.dart::SpellCheckResults": readonly [] }> | null);
set spellCheckChannel(value: Readonly<{ "__flaxBound:package:flutter/src/services/platform_channel.dart::MethodChannel": readonly [] }>);
}
export abstract class DefaultSpellCheckService extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DefaultSpellCheckService>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DefaultSpellCheckService;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:DefaultSpellCheckService", readonly [], false];
constructor() { super(_DefaultSpellCheckServiceProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DefaultSpellCheckService.prototype, _DefaultSpellCheckServiceProxy);
export namespace DefaultSpellCheckService { export function implement(args: [], implementation: {}): DefaultSpellCheckService {
return constructProxy(_DefaultSpellCheckServiceProxy, args, implementation) as DefaultSpellCheckService; } }
export namespace DefaultSpellCheckService { export function mergeResults(oldResults: DartListInput<upstream3.SuggestionSpan, Readonly<{ "__flaxBound:package:flutter/src/services/spell_check.dart::SuggestionSpan": readonly [] }>>, newResults: DartListInput<upstream3.SuggestionSpan, Readonly<{ "__flaxBound:package:flutter/src/services/spell_check.dart::SuggestionSpan": readonly [] }>>): DartList<upstream3.SuggestionSpan> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:DefaultSpellCheckService.mergeResults", [oldResults, newResults]);
return _flaxResult as DartList<upstream3.SuggestionSpan>;
} }
_flaxBindInstanceType<DefaultSpellCheckService, typeof DefaultSpellCheckService>(DefaultSpellCheckService, "flax.core/sdk_services#type:DefaultSpellCheckService", ["dart:core::Object","flax.core/sdk_services#type:SpellCheckService"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "lastSavedResults" | "spellCheckChannel" | "fetchSpellCheckSuggestions" | "__flaxBound:package:flutter/src/services/spell_check.dart::DefaultSpellCheckService" | "__flaxBound:package:flutter/src/services/spell_check.dart::SpellCheckService";
