// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters0, _flaxMemberParameters64 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Locale extends Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> { readonly __Locale: unique symbol;
readonly [_flaxDartTypeValue]: Locale;

}
defineObject("flax.core/sdk_dart_ui#type:Locale", ["languageCode","scriptCode","countryCode"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:Locale", "object", {"toString":_flaxMemberParameters0,"toLanguageTag":_flaxMemberParameters0}, {}), []);
const _LocaleProxy = {type: "flax.core/sdk_dart_ui#type:Locale", parameters: _flaxMemberParameters64, constructors: {"": _flaxMemberParameters64}, methods: {"toString":_flaxMemberParameters0,"toLanguageTag":_flaxMemberParameters0}, getters: ["languageCode","scriptCode","countryCode"], setters: [], contextMembers: [], superMembers: ["get:languageCode","get:scriptCode","get:countryCode","toString","toLanguageTag"]} as const;
export interface Locale {
readonly [_flaxDartTypeValue]: Locale;

toString(): string;
toLanguageTag(): string;
get languageCode(): string;
get scriptCode(): string | null;
get countryCode(): string | null;
}
export abstract class Locale extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Locale>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Locale;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:Locale", readonly [], false];
constructor(_languageCode: string, _countryCode?: string | null) { super(_LocaleProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(Locale.prototype, _LocaleProxy);
export namespace Locale { export function implement(args: [_languageCode: string, _countryCode?: string | null], implementation: {}): Locale {
return constructProxy(_LocaleProxy, args, implementation) as Locale; } }
_flaxBindInstanceType<Locale, typeof Locale>(Locale, "flax.core/sdk_dart_ui#type:Locale", ["dart:core::Object"]);
