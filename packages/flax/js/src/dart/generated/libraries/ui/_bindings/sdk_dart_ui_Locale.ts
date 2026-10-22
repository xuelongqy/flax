// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters0, _flaxMemberParameters73, _flaxMemberParameters74 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Locale extends Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> { readonly __Locale: unique symbol;
readonly [_flaxDartTypeValue]: Locale;

readonly languageCode: string;
readonly scriptCode: string | null;
readonly countryCode: string | null;
toString(): string;
toLanguageTag(): string;
}
defineObject("flax.core/sdk_dart_ui#type:Locale", ["languageCode","scriptCode","countryCode"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:Locale", "object", {"toString":_flaxMemberParameters0,"toLanguageTag":_flaxMemberParameters0}, {}), []);
export function _LocaleFactory(_languageCode: string, _countryCode?: string | null): Locale {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:Locale", "", [{"name":"_languageCode","required":true,"positional":true},{"name":"_countryCode","positional":true}], [_languageCode, _countryCode], {}) as Locale;
}
export namespace _LocaleFactory {
export function fromSubtags(options: { languageCode?: string | undefined; scriptCode?: string | null | undefined; countryCode?: string | null | undefined } = {}): Locale {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:Locale", "fromSubtags", [{"name":"languageCode"},{"name":"scriptCode"},{"name":"countryCode"}], [], options) as Locale;
}
}
const _LocaleProxy = {type: "flax.core/sdk_dart_ui#type:Locale", parameters: _flaxMemberParameters73, constructors: {"": _flaxMemberParameters73,"fromSubtags": _flaxMemberParameters74}, methods: {"toString":_flaxMemberParameters0,"toLanguageTag":_flaxMemberParameters0}, getters: ["languageCode","scriptCode","countryCode"], setters: [], contextMembers: [], superMembers: ["get:languageCode","get:scriptCode","get:countryCode","toString","toLanguageTag"]} as const;
export interface _LocaleNative extends Locale {
readonly [_flaxDartTypeValue]: _LocaleNative;
readonly [_flaxDartConstructors]?: {"": (_languageCode: string, _countryCode?: string | null) => void;"fromSubtags": (options?: {languageCode?: string | undefined; scriptCode?: string | null | undefined; countryCode?: string | null | undefined}) => void;};

toString(): string;
toLanguageTag(): string;
get languageCode(): string;
get scriptCode(): string | null;
get countryCode(): string | null;
}
export abstract class _LocaleNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Locale>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Locale;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:Locale", readonly [], false];
constructor(_languageCode: string, _countryCode?: string | null); constructor(call: _FlaxProxySuper<_LocaleNative>); constructor(...args: unknown[]) { super(_LocaleProxy, args); }
}
_flaxDefineProxyBase(_LocaleNative.prototype, _LocaleProxy);
export namespace _LocaleFactory { export function implement(args: [_languageCode: string, _countryCode?: string | null], implementation: {}): Locale {
return constructProxy(_LocaleProxy, args, implementation) as Locale; } }
const _LocaleBinding = _flaxProxyFactory(_LocaleFactory, _LocaleNative) as unknown as typeof _LocaleFactory & (new(_languageCode: string, _countryCode?: string | null) => _LocaleNative) & (new(call: _FlaxProxySuper<_LocaleNative>) => _LocaleNative);
export const Locale: typeof _LocaleBinding & _FlaxInstanceType<Locale> & _FlaxDartType<Locale, readonly ["class", "flax.core/sdk_dart_ui#type:Locale", readonly [], false]> = _flaxBindInstanceType<Locale, typeof _LocaleBinding>(_LocaleBinding, "flax.core/sdk_dart_ui#type:Locale", ["dart:core::Object"]) as typeof _LocaleBinding & _FlaxInstanceType<Locale> & _FlaxDartType<Locale, readonly ["class", "flax.core/sdk_dart_ui#type:Locale", readonly [], false]>;
