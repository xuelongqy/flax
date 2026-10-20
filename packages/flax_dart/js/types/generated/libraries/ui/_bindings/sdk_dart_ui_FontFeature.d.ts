import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FontFeature extends Readonly<{
    "__flaxBound:dart:ui::FontFeature": readonly [];
}> {
    readonly __FontFeature: unique symbol;
    readonly [_flaxDartTypeValue]: FontFeature;
    readonly feature: string;
    readonly value: number;
    toString(): string;
}
export declare function _FontFeatureFactory(feature: string, value?: number): FontFeature;
export declare namespace _FontFeatureFactory {
    function enable(feature: string): FontFeature;
}
export declare namespace _FontFeatureFactory {
    function disable(feature: string): FontFeature;
}
export declare namespace _FontFeatureFactory {
    function alternative(value: number): FontFeature;
}
export declare namespace _FontFeatureFactory {
    function alternativeFractions(): FontFeature;
}
export declare namespace _FontFeatureFactory {
    function contextualAlternates(): FontFeature;
}
export declare namespace _FontFeatureFactory {
    function caseSensitiveForms(): FontFeature;
}
export declare namespace _FontFeatureFactory {
    function characterVariant(value: number): FontFeature;
}
export declare namespace _FontFeatureFactory {
    function denominator(): FontFeature;
}
export declare namespace _FontFeatureFactory {
    function fractions(): FontFeature;
}
export declare namespace _FontFeatureFactory {
    function historicalForms(): FontFeature;
}
export declare namespace _FontFeatureFactory {
    function historicalLigatures(): FontFeature;
}
export declare namespace _FontFeatureFactory {
    function liningFigures(): FontFeature;
}
export declare namespace _FontFeatureFactory {
    function localeAware(options?: {
        enable?: boolean | undefined;
    }): FontFeature;
}
export declare namespace _FontFeatureFactory {
    function notationalForms(value?: number): FontFeature;
}
export declare namespace _FontFeatureFactory {
    function numerators(): FontFeature;
}
export declare namespace _FontFeatureFactory {
    function oldstyleFigures(): FontFeature;
}
export declare namespace _FontFeatureFactory {
    function ordinalForms(): FontFeature;
}
export declare namespace _FontFeatureFactory {
    function proportionalFigures(): FontFeature;
}
export declare namespace _FontFeatureFactory {
    function randomize(): FontFeature;
}
export declare namespace _FontFeatureFactory {
    function stylisticAlternates(): FontFeature;
}
export declare namespace _FontFeatureFactory {
    function scientificInferiors(): FontFeature;
}
export declare namespace _FontFeatureFactory {
    function stylisticSet(value: number): FontFeature;
}
export declare namespace _FontFeatureFactory {
    function subscripts(): FontFeature;
}
export declare namespace _FontFeatureFactory {
    function superscripts(): FontFeature;
}
export declare namespace _FontFeatureFactory {
    function swash(value?: number): FontFeature;
}
export declare namespace _FontFeatureFactory {
    function tabularFigures(): FontFeature;
}
export declare namespace _FontFeatureFactory {
    function slashedZero(): FontFeature;
}
export interface _FontFeatureNative extends FontFeature {
    readonly [_flaxDartTypeValue]: _FontFeatureNative;
    readonly [_flaxDartConstructors]?: {
        "": (feature: string, value?: number) => void;
        "enable": (feature: string) => void;
        "disable": (feature: string) => void;
        "alternative": (value: number) => void;
        "alternativeFractions": () => void;
        "contextualAlternates": () => void;
        "caseSensitiveForms": () => void;
        "denominator": () => void;
        "fractions": () => void;
        "historicalForms": () => void;
        "historicalLigatures": () => void;
        "liningFigures": () => void;
        "localeAware": (options?: {
            enable?: boolean | undefined;
        }) => void;
        "notationalForms": (value?: number) => void;
        "numerators": () => void;
        "oldstyleFigures": () => void;
        "ordinalForms": () => void;
        "proportionalFigures": () => void;
        "randomize": () => void;
        "stylisticAlternates": () => void;
        "scientificInferiors": () => void;
        "subscripts": () => void;
        "superscripts": () => void;
        "swash": (value?: number) => void;
        "tabularFigures": () => void;
        "slashedZero": () => void;
    };
    toString(): string;
    get feature(): string;
    get value(): number;
}
export declare abstract class _FontFeatureNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FontFeature>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: FontFeature;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:FontFeature", readonly [], false];
    constructor(feature: string, value?: number);
    constructor(call: _FlaxProxySuper<_FontFeatureNative>);
}
export declare namespace _FontFeatureFactory {
    function implement(args: [feature: string, value?: number], implementation: {}): FontFeature;
}
declare const _FontFeatureBinding: typeof _FontFeatureFactory & (new (feature: string, value?: number) => _FontFeatureNative) & (new (call: _FlaxProxySuper<_FontFeatureNative>) => _FontFeatureNative);
export declare const FontFeature: typeof _FontFeatureBinding & _FlaxInstanceType<FontFeature> & _FlaxDartType<FontFeature, readonly ["class", "flax.core/sdk_dart_ui#type:FontFeature", readonly [], false]>;
export {};
