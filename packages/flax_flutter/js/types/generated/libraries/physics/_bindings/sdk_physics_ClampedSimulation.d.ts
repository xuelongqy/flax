import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import type * as upstream1 from '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ClampedSimulation extends Omit<upstream0.Simulation, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/physics/clamped_simulation.dart::ClampedSimulation": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [];
}> {
    readonly __ClampedSimulation: unique symbol;
    readonly [_flaxDartTypeValue]: ClampedSimulation;
    get tolerance(): upstream1.Tolerance;
    readonly simulation: upstream0.Simulation;
    readonly xMin: number;
    readonly xMax: number;
    readonly dxMin: number;
    readonly dxMax: number;
    x(time: number): number;
    dx(time: number): number;
    isDone(time: number): boolean;
    toString(): string;
    set tolerance(value: Readonly<{
        "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
    }>);
}
export declare function _ClampedSimulationFactory(simulation: Readonly<{
    "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [];
}>, options?: {
    xMin?: number | undefined;
    xMax?: number | undefined;
    dxMin?: number | undefined;
    dxMax?: number | undefined;
}): ClampedSimulation;
export interface _ClampedSimulationNative extends ClampedSimulation {
    readonly [_flaxDartTypeValue]: _ClampedSimulationNative;
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
export declare abstract class _ClampedSimulationNative extends _FlaxProxyBase {
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
export declare namespace _ClampedSimulationFactory {
    function implement(args: [simulation: Readonly<{
        "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [];
    }>, options?: {
        xMin?: number | undefined;
        xMax?: number | undefined;
        dxMin?: number | undefined;
        dxMax?: number | undefined;
    }], implementation: {}): ClampedSimulation;
}
declare const _ClampedSimulationBinding: typeof _ClampedSimulationFactory & (new (simulation: Readonly<{
    "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [];
}>, options?: {
    xMin?: number | undefined;
    xMax?: number | undefined;
    dxMin?: number | undefined;
    dxMax?: number | undefined;
}) => _ClampedSimulationNative);
export declare const ClampedSimulation: typeof _ClampedSimulationBinding & _FlaxInstanceType<ClampedSimulation> & _FlaxDartType<ClampedSimulation, readonly ["class", "flax.core/sdk_physics#type:ClampedSimulation", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "tolerance" | "simulation" | "xMin" | "xMax" | "dxMin" | "dxMax" | "x" | "dx" | "isDone" | "toString" | "__flaxBound:package:flutter/src/physics/clamped_simulation.dart::ClampedSimulation" | "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation";
export {};
