import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import type * as upstream1 from '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface GravitySimulation extends Omit<upstream0.Simulation, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/physics/gravity_simulation.dart::GravitySimulation": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [];
}> {
    readonly __GravitySimulation: unique symbol;
    readonly [_flaxDartTypeValue]: GravitySimulation;
}
export interface GravitySimulation {
    readonly [_flaxDartTypeValue]: GravitySimulation;
    x(time: number): number;
    dx(time: number): number;
    isDone(time: number): boolean;
    toString(): string;
    get tolerance(): upstream1.Tolerance;
    set tolerance(value: Readonly<{
        "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
    }>);
}
export declare abstract class GravitySimulation extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GravitySimulation>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: GravitySimulation;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_physics#type:GravitySimulation", readonly [], false];
    constructor(acceleration: number, distance: number, endDistance: number, velocity: number);
}
export declare namespace GravitySimulation {
    function implement(args: [acceleration: number, distance: number, endDistance: number, velocity: number], implementation: {}): GravitySimulation;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "tolerance" | "x" | "dx" | "isDone" | "toString" | "__flaxBound:package:flutter/src/physics/gravity_simulation.dart::GravitySimulation" | "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation";
export {};
