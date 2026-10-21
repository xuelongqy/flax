// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters0, _flaxMemberParameters46, _flaxMemberParameters47, _flaxMemberParameters48, _flaxMemberParameters49, _flaxMemberParameters50 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FontFeature extends Readonly<{ "__flaxBound:dart:ui::FontFeature": readonly [] }> { readonly __FontFeature: unique symbol;
readonly [_flaxDartTypeValue]: FontFeature;

readonly feature: string;
readonly value: number;
toString(): string;
}
defineObject("flax.core/sdk_dart_ui#type:FontFeature", ["feature","value"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:FontFeature", "object", {"toString":_flaxMemberParameters0}, {}), []);
export function _FontFeatureFactory(feature: string, value?: number): FontFeature {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontFeature", "", [{"name":"feature","required":true,"positional":true},{"name":"value","positional":true}], [feature, value], {}) as FontFeature;
}
export namespace _FontFeatureFactory {
export function enable(feature: string): FontFeature {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontFeature", "enable", [{"name":"feature","required":true,"positional":true}], [feature], {}) as FontFeature;
}
}
export namespace _FontFeatureFactory {
export function disable(feature: string): FontFeature {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontFeature", "disable", [{"name":"feature","required":true,"positional":true}], [feature], {}) as FontFeature;
}
}
export namespace _FontFeatureFactory {
export function alternative(value: number): FontFeature {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontFeature", "alternative", [{"name":"value","required":true,"positional":true}], [value], {}) as FontFeature;
}
}
export namespace _FontFeatureFactory {
export function alternativeFractions(): FontFeature {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontFeature", "alternativeFractions", _flaxMemberParameters0, [], {}) as FontFeature;
}
}
export namespace _FontFeatureFactory {
export function contextualAlternates(): FontFeature {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontFeature", "contextualAlternates", _flaxMemberParameters0, [], {}) as FontFeature;
}
}
export namespace _FontFeatureFactory {
export function caseSensitiveForms(): FontFeature {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontFeature", "caseSensitiveForms", _flaxMemberParameters0, [], {}) as FontFeature;
}
}
export namespace _FontFeatureFactory {
export function characterVariant(value: number): FontFeature {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontFeature", "characterVariant", [{"name":"value","required":true,"positional":true}], [value], {}) as FontFeature;
}
}
export namespace _FontFeatureFactory {
export function denominator(): FontFeature {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontFeature", "denominator", _flaxMemberParameters0, [], {}) as FontFeature;
}
}
export namespace _FontFeatureFactory {
export function fractions(): FontFeature {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontFeature", "fractions", _flaxMemberParameters0, [], {}) as FontFeature;
}
}
export namespace _FontFeatureFactory {
export function historicalForms(): FontFeature {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontFeature", "historicalForms", _flaxMemberParameters0, [], {}) as FontFeature;
}
}
export namespace _FontFeatureFactory {
export function historicalLigatures(): FontFeature {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontFeature", "historicalLigatures", _flaxMemberParameters0, [], {}) as FontFeature;
}
}
export namespace _FontFeatureFactory {
export function liningFigures(): FontFeature {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontFeature", "liningFigures", _flaxMemberParameters0, [], {}) as FontFeature;
}
}
export namespace _FontFeatureFactory {
export function localeAware(options: { enable?: boolean | undefined } = {}): FontFeature {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontFeature", "localeAware", [{"name":"enable"}], [], options) as FontFeature;
}
}
export namespace _FontFeatureFactory {
export function notationalForms(value?: number): FontFeature {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontFeature", "notationalForms", [{"name":"value","positional":true}], [value], {}) as FontFeature;
}
}
export namespace _FontFeatureFactory {
export function numerators(): FontFeature {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontFeature", "numerators", _flaxMemberParameters0, [], {}) as FontFeature;
}
}
export namespace _FontFeatureFactory {
export function oldstyleFigures(): FontFeature {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontFeature", "oldstyleFigures", _flaxMemberParameters0, [], {}) as FontFeature;
}
}
export namespace _FontFeatureFactory {
export function ordinalForms(): FontFeature {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontFeature", "ordinalForms", _flaxMemberParameters0, [], {}) as FontFeature;
}
}
export namespace _FontFeatureFactory {
export function proportionalFigures(): FontFeature {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontFeature", "proportionalFigures", _flaxMemberParameters0, [], {}) as FontFeature;
}
}
export namespace _FontFeatureFactory {
export function randomize(): FontFeature {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontFeature", "randomize", _flaxMemberParameters0, [], {}) as FontFeature;
}
}
export namespace _FontFeatureFactory {
export function stylisticAlternates(): FontFeature {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontFeature", "stylisticAlternates", _flaxMemberParameters0, [], {}) as FontFeature;
}
}
export namespace _FontFeatureFactory {
export function scientificInferiors(): FontFeature {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontFeature", "scientificInferiors", _flaxMemberParameters0, [], {}) as FontFeature;
}
}
export namespace _FontFeatureFactory {
export function stylisticSet(value: number): FontFeature {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontFeature", "stylisticSet", [{"name":"value","required":true,"positional":true}], [value], {}) as FontFeature;
}
}
export namespace _FontFeatureFactory {
export function subscripts(): FontFeature {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontFeature", "subscripts", _flaxMemberParameters0, [], {}) as FontFeature;
}
}
export namespace _FontFeatureFactory {
export function superscripts(): FontFeature {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontFeature", "superscripts", _flaxMemberParameters0, [], {}) as FontFeature;
}
}
export namespace _FontFeatureFactory {
export function swash(value?: number): FontFeature {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontFeature", "swash", [{"name":"value","positional":true}], [value], {}) as FontFeature;
}
}
export namespace _FontFeatureFactory {
export function tabularFigures(): FontFeature {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontFeature", "tabularFigures", _flaxMemberParameters0, [], {}) as FontFeature;
}
}
export namespace _FontFeatureFactory {
export function slashedZero(): FontFeature {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:FontFeature", "slashedZero", _flaxMemberParameters0, [], {}) as FontFeature;
}
}
const _FontFeatureProxy = {type: "flax.core/sdk_dart_ui#type:FontFeature", parameters: _flaxMemberParameters46, constructors: {"": _flaxMemberParameters46,"enable": _flaxMemberParameters47,"disable": _flaxMemberParameters47,"alternative": _flaxMemberParameters48,"alternativeFractions": _flaxMemberParameters0,"contextualAlternates": _flaxMemberParameters0,"caseSensitiveForms": _flaxMemberParameters0,"denominator": _flaxMemberParameters0,"fractions": _flaxMemberParameters0,"historicalForms": _flaxMemberParameters0,"historicalLigatures": _flaxMemberParameters0,"liningFigures": _flaxMemberParameters0,"localeAware": _flaxMemberParameters49,"notationalForms": _flaxMemberParameters50,"numerators": _flaxMemberParameters0,"oldstyleFigures": _flaxMemberParameters0,"ordinalForms": _flaxMemberParameters0,"proportionalFigures": _flaxMemberParameters0,"randomize": _flaxMemberParameters0,"stylisticAlternates": _flaxMemberParameters0,"scientificInferiors": _flaxMemberParameters0,"subscripts": _flaxMemberParameters0,"superscripts": _flaxMemberParameters0,"swash": _flaxMemberParameters50,"tabularFigures": _flaxMemberParameters0,"slashedZero": _flaxMemberParameters0}, methods: {"toString":_flaxMemberParameters0}, getters: ["feature","value"], setters: [], contextMembers: [], superMembers: ["get:feature","get:value","toString"]} as const;
export interface _FontFeatureNative extends FontFeature {
readonly [_flaxDartTypeValue]: _FontFeatureNative;
readonly [_flaxDartConstructors]?: {"": (feature: string, value?: number) => void;"enable": (feature: string) => void;"disable": (feature: string) => void;"alternative": (value: number) => void;"alternativeFractions": () => void;"contextualAlternates": () => void;"caseSensitiveForms": () => void;"denominator": () => void;"fractions": () => void;"historicalForms": () => void;"historicalLigatures": () => void;"liningFigures": () => void;"localeAware": (options?: {enable?: boolean | undefined}) => void;"notationalForms": (value?: number) => void;"numerators": () => void;"oldstyleFigures": () => void;"ordinalForms": () => void;"proportionalFigures": () => void;"randomize": () => void;"stylisticAlternates": () => void;"scientificInferiors": () => void;"subscripts": () => void;"superscripts": () => void;"swash": (value?: number) => void;"tabularFigures": () => void;"slashedZero": () => void;};

toString(): string;
get feature(): string;
get value(): number;
}
export abstract class _FontFeatureNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FontFeature>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: FontFeature;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:FontFeature", readonly [], false];
constructor(feature: string, value?: number); constructor(call: _FlaxProxySuper<_FontFeatureNative>); constructor(...args: unknown[]) { super(_FontFeatureProxy, args); }
}
_flaxDefineProxyBase(_FontFeatureNative.prototype, _FontFeatureProxy);
export namespace _FontFeatureFactory { export function implement(args: [feature: string, value?: number], implementation: {}): FontFeature {
return constructProxy(_FontFeatureProxy, args, implementation) as FontFeature; } }
const _FontFeatureBinding = _flaxProxyFactory(_FontFeatureFactory, _FontFeatureNative) as unknown as typeof _FontFeatureFactory & (new(feature: string, value?: number) => _FontFeatureNative) & (new(call: _FlaxProxySuper<_FontFeatureNative>) => _FontFeatureNative);
export const FontFeature: typeof _FontFeatureBinding & _FlaxInstanceType<FontFeature> & _FlaxDartType<FontFeature, readonly ["class", "flax.core/sdk_dart_ui#type:FontFeature", readonly [], false]> = _flaxBindInstanceType<FontFeature, typeof _FontFeatureBinding>(_FontFeatureBinding, "flax.core/sdk_dart_ui#type:FontFeature", ["dart:core::Object"]) as typeof _FontFeatureBinding & _FlaxInstanceType<FontFeature> & _FlaxDartType<FontFeature, readonly ["class", "flax.core/sdk_dart_ui#type:FontFeature", readonly [], false]>;
