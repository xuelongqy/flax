import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface FontFeature extends Readonly<{
    "__flaxBound:dart:ui::FontFeature": readonly [];
}> {
    readonly __FontFeature: unique symbol;
    readonly [_flaxDartTypeValue]: FontFeature;
}
export interface FontFeature {
    readonly [_flaxDartTypeValue]: FontFeature;
    toString(): string;
    get feature(): string;
    get value(): number;
}
export declare abstract class FontFeature extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FontFeature>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: FontFeature;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:FontFeature", readonly [], false];
    constructor(feature: string, value?: number);
}
export declare namespace FontFeature {
    function implement(args: [feature: string, value?: number], implementation: {}): FontFeature;
}
