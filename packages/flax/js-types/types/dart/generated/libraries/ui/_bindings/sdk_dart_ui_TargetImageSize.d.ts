import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface TargetImageSize extends Readonly<{
    "__flaxBound:dart:ui::TargetImageSize": readonly [];
}> {
    readonly __TargetImageSize: unique symbol;
    readonly [_flaxDartTypeValue]: TargetImageSize;
}
export interface TargetImageSize {
    readonly [_flaxDartTypeValue]: TargetImageSize;
    toString(): string;
    get width(): number | null;
    get height(): number | null;
}
export declare abstract class TargetImageSize extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TargetImageSize>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TargetImageSize;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:TargetImageSize", readonly [], false];
    constructor(options?: {
        width?: number | null | undefined;
        height?: number | null | undefined;
    });
}
export declare namespace TargetImageSize {
    function implement(args: [options?: {
        width?: number | null | undefined;
        height?: number | null | undefined;
    }], implementation: {}): TargetImageSize;
}
