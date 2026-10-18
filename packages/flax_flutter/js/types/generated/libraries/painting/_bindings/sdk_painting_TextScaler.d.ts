import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface TextScaler extends Readonly<{
    "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
}> {
    readonly __TextScaler: unique symbol;
    readonly [_flaxDartTypeValue]: TextScaler;
}
export interface TextScaler {
    readonly [_flaxDartTypeValue]: TextScaler;
    clamp(options?: {
        minScaleFactor?: number | undefined;
        maxScaleFactor?: number | undefined;
    }): TextScaler;
}
export declare abstract class TextScaler extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextScaler>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextScaler;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:TextScaler", readonly [], false];
    constructor();
    abstract scale(fontSize: number): number;
    abstract get textScaleFactor(): number;
}
export declare namespace TextScaler {
    function implement(args: [], implementation: {
        scale: ((fontSize: number) => number);
        get textScaleFactor(): number;
    }): TextScaler;
}
export declare namespace TextScaler {
    const noScaling: TextScaler;
}
