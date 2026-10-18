import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface Tolerance extends Readonly<{
    "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
}> {
    readonly __Tolerance: unique symbol;
    readonly [_flaxDartTypeValue]: Tolerance;
}
export interface Tolerance {
    readonly [_flaxDartTypeValue]: Tolerance;
    toString(): string;
    get distance(): number;
    get time(): number;
    get velocity(): number;
}
export declare abstract class Tolerance extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Tolerance>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Tolerance;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_physics#type:Tolerance", readonly [], false];
    constructor(options?: {
        distance?: number | undefined;
        time?: number | undefined;
        velocity?: number | undefined;
    });
}
export declare namespace Tolerance {
    function implement(args: [options?: {
        distance?: number | undefined;
        time?: number | undefined;
        velocity?: number | undefined;
    }], implementation: {}): Tolerance;
}
export declare namespace Tolerance {
    const defaultTolerance: Tolerance;
}
