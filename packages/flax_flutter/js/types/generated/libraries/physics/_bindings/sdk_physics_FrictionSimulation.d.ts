import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import type * as upstream1 from '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface FrictionSimulation extends Omit<upstream0.Simulation, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/physics/friction_simulation.dart::FrictionSimulation": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [];
}> {
    readonly __FrictionSimulation: unique symbol;
    readonly [_flaxDartTypeValue]: FrictionSimulation;
}
export interface FrictionSimulation {
    readonly [_flaxDartTypeValue]: FrictionSimulation;
    x(time: number): number;
    dx(time: number): number;
    isDone(time: number): boolean;
    toString(): string;
    timeAtX(x: number): number;
    get finalX(): number;
    get tolerance(): upstream1.Tolerance;
    set tolerance(value: Readonly<{
        "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
    }>);
}
export declare abstract class FrictionSimulation extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FrictionSimulation>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: FrictionSimulation;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_physics#type:FrictionSimulation", readonly [], false];
    constructor(drag: number, position: number, velocity: number, options?: {
        tolerance?: Readonly<{
            "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
        }> | undefined;
        constantDeceleration?: number | undefined;
    });
}
export declare namespace FrictionSimulation {
    function implement(args: [drag: number, position: number, velocity: number, options?: {
        tolerance?: Readonly<{
            "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
        }> | undefined;
        constantDeceleration?: number | undefined;
    }], implementation: {}): FrictionSimulation;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "tolerance" | "finalX" | "x" | "dx" | "isDone" | "toString" | "timeAtX" | "__flaxBound:package:flutter/src/physics/friction_simulation.dart::FrictionSimulation" | "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation";
export {};
