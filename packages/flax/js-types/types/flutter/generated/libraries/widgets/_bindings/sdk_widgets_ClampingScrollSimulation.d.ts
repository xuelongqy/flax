import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import type * as upstream1 from '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ClampingScrollSimulation extends Omit<upstream0.Simulation, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_simulation.dart::ClampingScrollSimulation": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [];
}> {
    readonly __ClampingScrollSimulation: unique symbol;
    readonly [_flaxDartTypeValue]: ClampingScrollSimulation;
    get tolerance(): upstream1.Tolerance;
    readonly position: number;
    readonly velocity: number;
    readonly friction: number;
    x(time: number): number;
    dx(time: number): number;
    isDone(time: number): boolean;
    toString(): string;
    set tolerance(value: Readonly<{
        "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
    }>);
}
export declare function _ClampingScrollSimulationFactory(options: {
    position: number;
    velocity: number;
    friction?: number | undefined;
    tolerance?: Readonly<{
        "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
    }> | undefined;
}): ClampingScrollSimulation;
export interface _ClampingScrollSimulationNative extends ClampingScrollSimulation {
    readonly [_flaxDartTypeValue]: _ClampingScrollSimulationNative;
    x(time: number): number;
    dx(time: number): number;
    isDone(time: number): boolean;
    toString(): string;
    get position(): number;
    get velocity(): number;
    get friction(): number;
    get tolerance(): upstream1.Tolerance;
    set tolerance(value: Readonly<{
        "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
    }>);
}
export declare abstract class _ClampingScrollSimulationNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ClampingScrollSimulation>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ClampingScrollSimulation;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ClampingScrollSimulation", readonly [], false];
    constructor(options: {
        position: number;
        velocity: number;
        friction?: number | undefined;
        tolerance?: Readonly<{
            "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
        }> | undefined;
    });
}
export declare namespace _ClampingScrollSimulationFactory {
    function implement(args: [options: {
        position: number;
        velocity: number;
        friction?: number | undefined;
        tolerance?: Readonly<{
            "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
        }> | undefined;
    }], implementation: {}): ClampingScrollSimulation;
}
declare const _ClampingScrollSimulationBinding: typeof _ClampingScrollSimulationFactory & (new (options: {
    position: number;
    velocity: number;
    friction?: number | undefined;
    tolerance?: Readonly<{
        "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
    }> | undefined;
}) => _ClampingScrollSimulationNative);
export declare const ClampingScrollSimulation: typeof _ClampingScrollSimulationBinding & _FlaxInstanceType<ClampingScrollSimulation> & _FlaxDartType<ClampingScrollSimulation, readonly ["class", "flax.core/sdk_widgets#type:ClampingScrollSimulation", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "tolerance" | "position" | "velocity" | "friction" | "x" | "dx" | "isDone" | "toString" | "__flaxBound:package:flutter/src/widgets/scroll_simulation.dart::ClampingScrollSimulation" | "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation";
export {};
