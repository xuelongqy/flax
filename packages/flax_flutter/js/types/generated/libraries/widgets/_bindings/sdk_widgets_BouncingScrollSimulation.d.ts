import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import type * as upstream1 from '@flax/flutter/physics/_bindings/sdk_physics_SpringDescription';
import '@flax/flutter/physics/_bindings/sdk_physics_SpringDescription';
import type * as upstream2 from '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface BouncingScrollSimulation extends Omit<upstream0.Simulation, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_simulation.dart::BouncingScrollSimulation": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [];
}> {
    readonly __BouncingScrollSimulation: unique symbol;
    readonly [_flaxDartTypeValue]: BouncingScrollSimulation;
}
export interface BouncingScrollSimulation {
    readonly [_flaxDartTypeValue]: BouncingScrollSimulation;
    x(time: number): number;
    dx(time: number): number;
    isDone(time: number): boolean;
    toString(): string;
    get leadingExtent(): number;
    get trailingExtent(): number;
    get spring(): upstream1.SpringDescription;
    get tolerance(): upstream2.Tolerance;
    set tolerance(value: Readonly<{
        "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
    }>);
}
export declare abstract class BouncingScrollSimulation extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BouncingScrollSimulation>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: BouncingScrollSimulation;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:BouncingScrollSimulation", readonly [], false];
    constructor(options: {
        position: number;
        velocity: number;
        leadingExtent: number;
        trailingExtent: number;
        spring: Readonly<{
            "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringDescription": readonly [];
        }>;
        constantDeceleration?: number | undefined;
        tolerance?: Readonly<{
            "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
        }> | undefined;
    });
}
export declare namespace BouncingScrollSimulation {
    function implement(args: [options: {
        position: number;
        velocity: number;
        leadingExtent: number;
        trailingExtent: number;
        spring: Readonly<{
            "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringDescription": readonly [];
        }>;
        constantDeceleration?: number | undefined;
        tolerance?: Readonly<{
            "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [];
        }> | undefined;
    }], implementation: {}): BouncingScrollSimulation;
}
export declare namespace BouncingScrollSimulation {
    const maxSpringTransferVelocity: number;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "tolerance" | "leadingExtent" | "trailingExtent" | "spring" | "x" | "dx" | "isDone" | "toString" | "__flaxBound:package:flutter/src/widgets/scroll_simulation.dart::BouncingScrollSimulation" | "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation";
export {};
