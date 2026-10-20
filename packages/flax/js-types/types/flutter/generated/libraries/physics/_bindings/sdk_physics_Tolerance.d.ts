import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Tolerance extends Readonly<{
    "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
}> {
    readonly __Tolerance: unique symbol;
    readonly [_flaxDartTypeValue]: Tolerance;
    readonly distance: number;
    readonly time: number;
    readonly velocity: number;
    toString(): string;
}
export declare function _ToleranceFactory(options?: {
    distance?: number | undefined;
    time?: number | undefined;
    velocity?: number | undefined;
}): Tolerance;
export interface _ToleranceNative extends Tolerance {
    readonly [_flaxDartTypeValue]: _ToleranceNative;
    toString(): string;
    get distance(): number;
    get time(): number;
    get velocity(): number;
}
export declare abstract class _ToleranceNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Tolerance>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Tolerance;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_physics#type:Tolerance", readonly [], false];
    constructor(options?: {
        distance?: number | undefined;
        time?: number | undefined;
        velocity?: number | undefined;
    });
}
export declare namespace _ToleranceFactory {
    function implement(args: [options?: {
        distance?: number | undefined;
        time?: number | undefined;
        velocity?: number | undefined;
    }], implementation: {}): Tolerance;
}
declare const _ToleranceBinding: typeof _ToleranceFactory & (new (options?: {
    distance?: number | undefined;
    time?: number | undefined;
    velocity?: number | undefined;
}) => _ToleranceNative);
export declare namespace _ToleranceFactory {
    const defaultTolerance: Tolerance;
}
export declare const Tolerance: typeof _ToleranceBinding & _FlaxInstanceType<Tolerance> & _FlaxDartType<Tolerance, readonly ["class", "flax.core/sdk_physics#type:Tolerance", readonly [], false]>;
export {};
