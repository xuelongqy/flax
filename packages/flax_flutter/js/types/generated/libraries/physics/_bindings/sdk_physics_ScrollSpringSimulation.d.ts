import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/physics/_bindings/sdk_physics_SpringSimulation';
import '@flax/flutter/physics/_bindings/sdk_physics_SpringSimulation';
import type * as upstream1 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_SpringDescription';
import type * as upstream3 from '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import type * as upstream4 from '@flax/flutter/physics/_bindings/sdk_physics_SpringType';
import '@flax/flutter/physics/_bindings/sdk_physics_SpringType';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScrollSpringSimulation extends Omit<upstream0.SpringSimulation, _flaxOwnMembers0>, Omit<upstream1.Simulation, _flaxOwnMembers0 | keyof upstream0.SpringSimulation>, Readonly<{
    "__flaxBound:package:flutter/src/physics/spring_simulation.dart::ScrollSpringSimulation": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringSimulation": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [];
}> {
    readonly __ScrollSpringSimulation: unique symbol;
    readonly [_flaxDartTypeValue]: ScrollSpringSimulation;
    readonly type: upstream4.SpringType;
    get tolerance(): upstream3.Tolerance;
    x(time: number): number;
    dx(time: number): number;
    isDone(time: number): boolean;
    toString(): string;
    set tolerance(value: Readonly<{
        "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
    }>);
}
export declare function _ScrollSpringSimulationFactory(spring: Readonly<{
    "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringDescription": readonly [];
}>, start: number, end: number, velocity: number, options?: {
    tolerance?: Readonly<{
        "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
    }> | undefined;
}): ScrollSpringSimulation;
export interface _ScrollSpringSimulationNative extends ScrollSpringSimulation {
    readonly [_flaxDartTypeValue]: _ScrollSpringSimulationNative;
    x(time: number): number;
    dx(time: number): number;
    isDone(time: number): boolean;
    toString(): string;
    get type(): upstream4.SpringType;
    get tolerance(): upstream3.Tolerance;
    set tolerance(value: Readonly<{
        "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
    }>);
}
export declare abstract class _ScrollSpringSimulationNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScrollSpringSimulation>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ScrollSpringSimulation;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_physics#type:ScrollSpringSimulation", readonly [], false];
    constructor(spring: Readonly<{
        "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringDescription": readonly [];
    }>, start: number, end: number, velocity: number, options?: {
        tolerance?: Readonly<{
            "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
        }> | undefined;
    });
}
export declare namespace _ScrollSpringSimulationFactory {
    function implement(args: [spring: Readonly<{
        "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringDescription": readonly [];
    }>, start: number, end: number, velocity: number, options?: {
        tolerance?: Readonly<{
            "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
        }> | undefined;
    }], implementation: {}): ScrollSpringSimulation;
}
declare const _ScrollSpringSimulationBinding: typeof _ScrollSpringSimulationFactory & (new (spring: Readonly<{
    "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringDescription": readonly [];
}>, start: number, end: number, velocity: number, options?: {
    tolerance?: Readonly<{
        "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
    }> | undefined;
}) => _ScrollSpringSimulationNative);
export declare const ScrollSpringSimulation: typeof _ScrollSpringSimulationBinding & _FlaxInstanceType<ScrollSpringSimulation> & _FlaxDartType<ScrollSpringSimulation, readonly ["class", "flax.core/sdk_physics#type:ScrollSpringSimulation", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "type" | "tolerance" | "x" | "dx" | "isDone" | "toString" | "__flaxBound:package:flutter/src/physics/spring_simulation.dart::ScrollSpringSimulation" | "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringSimulation" | "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation";
export {};
