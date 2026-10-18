import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import type * as upstream1 from '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ClampingScrollSimulation extends Omit<upstream0.Simulation, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_simulation.dart::ClampingScrollSimulation": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [];
}> {
    readonly __ClampingScrollSimulation: unique symbol;
    readonly [_flaxDartTypeValue]: ClampingScrollSimulation;
}
export interface ClampingScrollSimulation {
    readonly [_flaxDartTypeValue]: ClampingScrollSimulation;
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
export declare abstract class ClampingScrollSimulation extends _FlaxProxyBase {
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
export declare namespace ClampingScrollSimulation {
    function implement(args: [options: {
        position: number;
        velocity: number;
        friction?: number | undefined;
        tolerance?: Readonly<{
            "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
        }> | undefined;
    }], implementation: {}): ClampingScrollSimulation;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "tolerance" | "position" | "velocity" | "friction" | "x" | "dx" | "isDone" | "toString" | "__flaxBound:package:flutter/src/widgets/scroll_simulation.dart::ClampingScrollSimulation" | "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation";
export {};
