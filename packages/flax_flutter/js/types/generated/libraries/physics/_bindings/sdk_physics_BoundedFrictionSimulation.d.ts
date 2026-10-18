import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/physics/_bindings/sdk_physics_FrictionSimulation';
import '@flax/flutter/physics/_bindings/sdk_physics_FrictionSimulation';
import type * as upstream1 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import type * as upstream2 from '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface BoundedFrictionSimulation extends Omit<upstream0.FrictionSimulation, _flaxOwnMembers0>, Omit<upstream1.Simulation, _flaxOwnMembers0 | keyof upstream0.FrictionSimulation>, Readonly<{
    "__flaxBound:package:flutter/src/physics/friction_simulation.dart::BoundedFrictionSimulation": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/physics/friction_simulation.dart::FrictionSimulation": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [];
}> {
    readonly __BoundedFrictionSimulation: unique symbol;
    readonly [_flaxDartTypeValue]: BoundedFrictionSimulation;
}
export interface BoundedFrictionSimulation {
    readonly [_flaxDartTypeValue]: BoundedFrictionSimulation;
    x(time: number): number;
    dx(time: number): number;
    timeAtX(x: number): number;
    isDone(time: number): boolean;
    toString(): string;
    get finalX(): number;
    get tolerance(): upstream2.Tolerance;
    set tolerance(value: Readonly<{
        "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
    }>);
}
export declare abstract class BoundedFrictionSimulation extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BoundedFrictionSimulation>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: BoundedFrictionSimulation;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_physics#type:BoundedFrictionSimulation", readonly [], false];
    constructor(drag: number, position: number, velocity: number, _minX: number, _maxX: number);
}
export declare namespace BoundedFrictionSimulation {
    function implement(args: [drag: number, position: number, velocity: number, _minX: number, _maxX: number], implementation: {}): BoundedFrictionSimulation;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "finalX" | "tolerance" | "x" | "dx" | "timeAtX" | "isDone" | "toString" | "__flaxBound:package:flutter/src/physics/friction_simulation.dart::BoundedFrictionSimulation" | "__flaxBound:package:flutter/src/physics/friction_simulation.dart::FrictionSimulation" | "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation";
export {};
