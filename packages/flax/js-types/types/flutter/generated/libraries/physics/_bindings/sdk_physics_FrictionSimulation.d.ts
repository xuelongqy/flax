import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import type * as upstream1 from '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FrictionSimulation extends Omit<upstream0.Simulation, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/physics/friction_simulation.dart::FrictionSimulation": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [];
}> {
    readonly __FrictionSimulation: unique symbol;
    readonly [_flaxDartTypeValue]: FrictionSimulation;
    get tolerance(): upstream1.Tolerance;
    readonly finalX: number;
    x(time: number): number;
    dx(time: number): number;
    isDone(time: number): boolean;
    toString(): string;
    timeAtX(x: number): number;
    set tolerance(value: Readonly<{
        "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
    }>);
}
export declare function _FrictionSimulationFactory(drag: number, position: number, velocity: number, options?: {
    tolerance?: Readonly<{
        "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
    }> | undefined;
    constantDeceleration?: number | undefined;
}): FrictionSimulation;
export declare namespace _FrictionSimulationFactory {
    function through(startPosition: number, endPosition: number, startVelocity: number, endVelocity: number): FrictionSimulation;
}
export interface _FrictionSimulationNative extends FrictionSimulation {
    readonly [_flaxDartTypeValue]: _FrictionSimulationNative;
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
export declare abstract class _FrictionSimulationNative extends _FlaxProxyBase {
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
export declare namespace _FrictionSimulationFactory {
    function implement(args: [drag: number, position: number, velocity: number, options?: {
        tolerance?: Readonly<{
            "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
        }> | undefined;
        constantDeceleration?: number | undefined;
    }], implementation: {}): FrictionSimulation;
}
declare const _FrictionSimulationBinding: typeof _FrictionSimulationFactory & (new (drag: number, position: number, velocity: number, options?: {
    tolerance?: Readonly<{
        "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
    }> | undefined;
    constantDeceleration?: number | undefined;
}) => _FrictionSimulationNative);
export declare const FrictionSimulation: typeof _FrictionSimulationBinding & _FlaxInstanceType<FrictionSimulation> & _FlaxDartType<FrictionSimulation, readonly ["class", "flax.core/sdk_physics#type:FrictionSimulation", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "tolerance" | "finalX" | "x" | "dx" | "isDone" | "toString" | "timeAtX" | "__flaxBound:package:flutter/src/physics/friction_simulation.dart::FrictionSimulation" | "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation";
export {};
