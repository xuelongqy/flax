import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SpringDescription extends Readonly<{
    "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringDescription": readonly [];
}> {
    readonly __SpringDescription: unique symbol;
    readonly [_flaxDartTypeValue]: SpringDescription;
}
export interface SpringDescription {
    readonly [_flaxDartTypeValue]: SpringDescription;
    toString(): string;
    get mass(): number;
    get stiffness(): number;
    get damping(): number;
    get duration(): upstream0.Duration;
    get bounce(): number;
}
export declare abstract class SpringDescription extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SpringDescription>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SpringDescription;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_physics#type:SpringDescription", readonly [], false];
    constructor(options: {
        mass: number;
        stiffness: number;
        damping: number;
    });
}
export declare namespace SpringDescription {
    function implement(args: [options: {
        mass: number;
        stiffness: number;
        damping: number;
    }], implementation: {}): SpringDescription;
}
