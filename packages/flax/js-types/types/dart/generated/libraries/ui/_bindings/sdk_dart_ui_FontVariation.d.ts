import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FontVariation extends Readonly<{
    "__flaxBound:dart:ui::FontVariation": readonly [];
}> {
    readonly __FontVariation: unique symbol;
    readonly [_flaxDartTypeValue]: FontVariation;
    readonly axis: string;
    readonly value: number;
    toString(): string;
}
export declare function _FontVariationFactory(axis: string, value: number): FontVariation;
export declare namespace _FontVariationFactory {
    function italic(value: number): FontVariation;
}
export declare namespace _FontVariationFactory {
    function opticalSize(value: number): FontVariation;
}
export declare namespace _FontVariationFactory {
    function slant(value: number): FontVariation;
}
export declare namespace _FontVariationFactory {
    function width(value: number): FontVariation;
}
export declare namespace _FontVariationFactory {
    function weight(value: number): FontVariation;
}
export interface _FontVariationNative extends FontVariation {
    readonly [_flaxDartTypeValue]: _FontVariationNative;
    readonly [_flaxDartConstructors]?: {
        "": (axis: string, value: number) => void;
        "italic": (value: number) => void;
        "opticalSize": (value: number) => void;
        "slant": (value: number) => void;
        "width": (value: number) => void;
        "weight": (value: number) => void;
    };
    toString(): string;
    get axis(): string;
    get value(): number;
}
export declare abstract class _FontVariationNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FontVariation>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: FontVariation;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:FontVariation", readonly [], false];
    constructor(axis: string, value: number);
    constructor(call: _FlaxProxySuper<_FontVariationNative>);
}
export declare namespace _FontVariationFactory {
    function implement(args: [axis: string, value: number], implementation: {}): FontVariation;
}
declare const _FontVariationBinding: typeof _FontVariationFactory & (new (axis: string, value: number) => _FontVariationNative) & (new (call: _FlaxProxySuper<_FontVariationNative>) => _FontVariationNative);
export declare namespace _FontVariationFactory {
    function lerp(a: Readonly<{
        "__flaxBound:dart:ui::FontVariation": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:dart:ui::FontVariation": readonly [];
    }> | null, t: number): FontVariation | null;
}
export declare const FontVariation: typeof _FontVariationBinding & _FlaxInstanceType<FontVariation> & _FlaxDartType<FontVariation, readonly ["class", "flax.core/sdk_dart_ui#type:FontVariation", readonly [], false]>;
export {};
