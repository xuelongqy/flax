import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextScaler extends Readonly<{
    "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
}> {
    readonly __TextScaler: unique symbol;
    readonly [_flaxDartTypeValue]: TextScaler;
    readonly textScaleFactor: number;
    scale(fontSize: number): number;
    clamp(options?: {
        maxScaleFactor?: number | undefined;
        minScaleFactor?: number | undefined;
    }): TextScaler;
}
export declare namespace _TextScalerFactory {
    function linear(textScaleFactor: number): TextScaler;
}
export interface _TextScalerNative extends TextScaler {
    readonly [_flaxDartTypeValue]: _TextScalerNative;
    clamp(options?: {
        minScaleFactor?: number | undefined;
        maxScaleFactor?: number | undefined;
    }): TextScaler;
}
export declare abstract class _TextScalerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextScaler>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextScaler;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:TextScaler", readonly [], false];
    constructor();
    abstract scale(fontSize: number): number;
    abstract get textScaleFactor(): number;
}
export declare namespace _TextScalerFactory {
    function implement(args: [], implementation: {
        scale: ((fontSize: number) => number);
        get textScaleFactor(): number;
    }): TextScaler;
}
declare const _TextScalerBinding: typeof _TextScalerFactory & (abstract new () => _TextScalerNative);
export declare namespace _TextScalerFactory {
    const noScaling: TextScaler;
}
export declare const TextScaler: typeof _TextScalerBinding & _FlaxInstanceType<TextScaler> & _FlaxDartType<TextScaler, readonly ["class", "flax.core/sdk_painting#type:TextScaler", readonly [], false]>;
export {};
