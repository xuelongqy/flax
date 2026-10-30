import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CornerRounding extends Readonly<{
    "__flaxBound:package:material_ui/src/shapes/corner_rounding.dart::CornerRounding": readonly [];
}> {
    readonly __CornerRounding: unique symbol;
    readonly [_flaxDartTypeValue]: CornerRounding;
    readonly radius: number;
    readonly smoothing: number;
    toString(): string;
}
export declare function _CornerRoundingFactory(options?: {
    radius?: number | undefined;
    smoothing?: number | undefined;
}): CornerRounding;
export interface _CornerRoundingNative extends CornerRounding {
    readonly [_flaxDartTypeValue]: _CornerRoundingNative;
    toString(): string;
    get radius(): number;
    get smoothing(): number;
}
export declare abstract class _CornerRoundingNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CornerRounding>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CornerRounding;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:CornerRounding", readonly [], false];
    constructor(options?: {
        radius?: number | undefined;
        smoothing?: number | undefined;
    });
}
export declare namespace _CornerRoundingFactory {
    function implement(args: [options?: {
        radius?: number | undefined;
        smoothing?: number | undefined;
    }], implementation: {}): CornerRounding;
}
declare const _CornerRoundingBinding: typeof _CornerRoundingFactory & (new (options?: {
    radius?: number | undefined;
    smoothing?: number | undefined;
}) => _CornerRoundingNative);
export declare namespace _CornerRoundingFactory {
    const unrounded: CornerRounding;
}
export declare const CornerRounding: typeof _CornerRoundingBinding & _FlaxInstanceType<CornerRounding> & _FlaxDartType<CornerRounding, readonly ["class", "flax.material/material#type:CornerRounding", readonly [], false]>;
export {};
