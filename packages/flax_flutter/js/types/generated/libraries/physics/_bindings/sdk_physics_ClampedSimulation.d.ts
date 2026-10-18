import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import type * as upstream1 from '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ClampedSimulation extends Omit<upstream0.Simulation, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/physics/clamped_simulation.dart::ClampedSimulation": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [];
}> {
    readonly __ClampedSimulation: unique symbol;
    readonly [_flaxDartTypeValue]: ClampedSimulation;
}
export interface ClampedSimulation {
    readonly [_flaxDartTypeValue]: ClampedSimulation;
    x(time: number): number;
    dx(time: number): number;
    isDone(time: number): boolean;
    toString(): string;
    get simulation(): upstream0.Simulation;
    get xMin(): number;
    get xMax(): number;
    get dxMin(): number;
    get dxMax(): number;
    get tolerance(): upstream1.Tolerance;
    set tolerance(value: Readonly<{
        "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
    }>);
}
export declare abstract class ClampedSimulation extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ClampedSimulation>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ClampedSimulation;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_physics#type:ClampedSimulation", readonly [], false];
    constructor(simulation: Readonly<{
        "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [];
    }>, options?: {
        xMin?: number | undefined;
        xMax?: number | undefined;
        dxMin?: number | undefined;
        dxMax?: number | undefined;
    });
}
export declare namespace ClampedSimulation {
    function implement(args: [simulation: Readonly<{
        "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [];
    }>, options?: {
        xMin?: number | undefined;
        xMax?: number | undefined;
        dxMin?: number | undefined;
        dxMax?: number | undefined;
    }], implementation: {}): ClampedSimulation;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "tolerance" | "simulation" | "xMin" | "xMax" | "dxMin" | "dxMax" | "x" | "dx" | "isDone" | "toString" | "__flaxBound:package:flutter/src/physics/clamped_simulation.dart::ClampedSimulation" | "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation";
export {};
