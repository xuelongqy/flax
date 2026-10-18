import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface FontVariation extends Readonly<{
    "__flaxBound:dart:ui::FontVariation": readonly [];
}> {
    readonly __FontVariation: unique symbol;
    readonly [_flaxDartTypeValue]: FontVariation;
}
export interface FontVariation {
    readonly [_flaxDartTypeValue]: FontVariation;
    toString(): string;
    get axis(): string;
    get value(): number;
}
export declare abstract class FontVariation extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FontVariation>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: FontVariation;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:FontVariation", readonly [], false];
    constructor(axis: string, value: number);
}
export declare namespace FontVariation {
    function implement(args: [axis: string, value: number], implementation: {}): FontVariation;
}
export declare namespace FontVariation {
    function lerp(a: Readonly<{
        "__flaxBound:dart:ui::FontVariation": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:dart:ui::FontVariation": readonly [];
    }> | null, t: number): FontVariation | null;
}
