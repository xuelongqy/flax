import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_SpringDescription';
import type * as upstream2 from '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import type * as upstream3 from '@flax/flutter/physics/_bindings/sdk_physics_SpringType';
import '@flax/flutter/physics/_bindings/sdk_physics_SpringType';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SpringSimulation extends Omit<upstream0.Simulation, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringSimulation": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [];
}> {
    readonly __SpringSimulation: unique symbol;
    readonly [_flaxDartTypeValue]: SpringSimulation;
}
export interface SpringSimulation {
    readonly [_flaxDartTypeValue]: SpringSimulation;
    x(time: number): number;
    dx(time: number): number;
    isDone(time: number): boolean;
    toString(): string;
    get type(): upstream3.SpringType;
    get tolerance(): upstream2.Tolerance;
    set tolerance(value: Readonly<{
        "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
    }>);
}
export declare abstract class SpringSimulation extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SpringSimulation>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SpringSimulation;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_physics#type:SpringSimulation", readonly [], false];
    constructor(spring: Readonly<{
        "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringDescription": readonly [];
    }>, start: number, end: number, velocity: number, options?: {
        snapToEnd?: boolean | undefined;
        tolerance?: Readonly<{
            "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
        }> | undefined;
    });
}
export declare namespace SpringSimulation {
    function implement(args: [spring: Readonly<{
        "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringDescription": readonly [];
    }>, start: number, end: number, velocity: number, options?: {
        snapToEnd?: boolean | undefined;
        tolerance?: Readonly<{
            "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
        }> | undefined;
    }], implementation: {}): SpringSimulation;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "tolerance" | "type" | "x" | "dx" | "isDone" | "toString" | "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringSimulation" | "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation";
export {};
