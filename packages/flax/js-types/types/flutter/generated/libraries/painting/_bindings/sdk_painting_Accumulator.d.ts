import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface Accumulator extends Readonly<{
    "__flaxBound:package:flutter/src/painting/inline_span.dart::Accumulator": readonly [];
}> {
    readonly __Accumulator: unique symbol;
    readonly [_flaxDartTypeValue]: Accumulator;
}
export interface Accumulator {
    readonly [_flaxDartTypeValue]: Accumulator;
    increment(addend: number): void;
    get value(): number;
}
export declare abstract class Accumulator extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Accumulator>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Accumulator;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:Accumulator", readonly [], false];
    constructor(_value?: number);
}
export declare namespace Accumulator {
    function implement(args: [_value?: number], implementation: {}): Accumulator;
}
