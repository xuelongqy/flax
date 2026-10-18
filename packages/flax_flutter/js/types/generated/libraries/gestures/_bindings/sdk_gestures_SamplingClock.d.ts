import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SamplingClock extends Readonly<{
    "__flaxBound:package:flutter/src/gestures/binding.dart::SamplingClock": readonly [];
}> {
    readonly __SamplingClock: unique symbol;
    readonly [_flaxDartTypeValue]: SamplingClock;
}
export interface SamplingClock {
    readonly [_flaxDartTypeValue]: SamplingClock;
    now(): upstream0.DateTime;
}
export declare abstract class SamplingClock extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SamplingClock>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SamplingClock;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:SamplingClock", readonly [], false];
    constructor();
}
export declare namespace SamplingClock {
    function implement(args: [], implementation: {}): SamplingClock;
}
