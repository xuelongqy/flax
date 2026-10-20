import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SpringDescription extends Readonly<{
    "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringDescription": readonly [];
}> {
    readonly __SpringDescription: unique symbol;
    readonly [_flaxDartTypeValue]: SpringDescription;
    readonly mass: number;
    readonly stiffness: number;
    readonly damping: number;
    readonly duration: upstream0.Duration;
    readonly bounce: number;
    toString(): string;
}
export declare function _SpringDescriptionFactory(options: {
    mass: number;
    stiffness: number;
    damping: number;
}): SpringDescription;
export declare namespace _SpringDescriptionFactory {
    function withDampingRatio(options: {
        mass: number;
        stiffness: number;
        ratio?: number | undefined;
    }): SpringDescription;
}
export declare namespace _SpringDescriptionFactory {
    function withDurationAndBounce(options?: {
        duration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
        }>) | undefined;
        bounce?: number | undefined;
    }): SpringDescription;
}
export interface _SpringDescriptionNative extends SpringDescription {
    readonly [_flaxDartTypeValue]: _SpringDescriptionNative;
    readonly [_flaxDartConstructors]?: {
        "": (options: {
            mass: number;
            stiffness: number;
            damping: number;
        }) => void;
        "withDampingRatio": (options: {
            mass: number;
            stiffness: number;
            ratio?: number | undefined;
        }) => void;
    };
    toString(): string;
    get mass(): number;
    get stiffness(): number;
    get damping(): number;
    get duration(): upstream0.Duration;
    get bounce(): number;
}
export declare abstract class _SpringDescriptionNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SpringDescription>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SpringDescription;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_physics#type:SpringDescription", readonly [], false];
    constructor(options: {
        mass: number;
        stiffness: number;
        damping: number;
    });
    constructor(call: _FlaxProxySuper<_SpringDescriptionNative>);
}
export declare namespace _SpringDescriptionFactory {
    function implement(args: [options: {
        mass: number;
        stiffness: number;
        damping: number;
    }], implementation: {}): SpringDescription;
}
declare const _SpringDescriptionBinding: typeof _SpringDescriptionFactory & (new (options: {
    mass: number;
    stiffness: number;
    damping: number;
}) => _SpringDescriptionNative) & (new (call: _FlaxProxySuper<_SpringDescriptionNative>) => _SpringDescriptionNative);
export declare const SpringDescription: typeof _SpringDescriptionBinding & _FlaxInstanceType<SpringDescription> & _FlaxDartType<SpringDescription, readonly ["class", "flax.core/sdk_physics#type:SpringDescription", readonly [], false]>;
export {};
