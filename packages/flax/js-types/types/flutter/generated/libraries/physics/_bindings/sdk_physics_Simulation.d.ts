import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface Simulation extends Readonly<{
    "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [];
}> {
    readonly __Simulation: unique symbol;
    readonly [_flaxDartTypeValue]: Simulation;
}
export interface Simulation {
    readonly [_flaxDartTypeValue]: Simulation;
    toString(): string;
    get tolerance(): upstream0.Tolerance;
    set tolerance(value: Readonly<{
        "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
    }>);
}
export declare abstract class Simulation extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Simulation>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Simulation;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_physics#type:Simulation", readonly [], false];
    constructor(options?: {
        tolerance?: Readonly<{
            "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
        }> | undefined;
    });
    abstract x(time: number): number;
    abstract dx(time: number): number;
    abstract isDone(time: number): boolean;
}
export declare namespace Simulation {
    function implement(args: [options?: {
        tolerance?: Readonly<{
            "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
        }> | undefined;
    }], implementation: {
        x: ((time: number) => number);
        dx: ((time: number) => number);
        isDone: ((time: number) => boolean);
    }): Simulation;
}
