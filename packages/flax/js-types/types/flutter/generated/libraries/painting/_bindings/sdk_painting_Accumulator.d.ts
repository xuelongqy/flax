import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Accumulator extends Readonly<{
    "__flaxBound:package:flutter/src/painting/inline_span.dart::Accumulator": readonly [];
}> {
    readonly __Accumulator: unique symbol;
    readonly [_flaxDartTypeValue]: Accumulator;
    readonly value: number;
    increment(addend: number): void;
}
export declare function _AccumulatorFactory(_value?: number): Accumulator;
export interface _AccumulatorNative extends Accumulator {
    readonly [_flaxDartTypeValue]: _AccumulatorNative;
    increment(addend: number): void;
    get value(): number;
}
export declare abstract class _AccumulatorNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Accumulator>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Accumulator;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:Accumulator", readonly [], false];
    constructor(_value?: number);
}
export declare namespace _AccumulatorFactory {
    function implement(args: [_value?: number], implementation: {}): Accumulator;
}
declare const _AccumulatorBinding: typeof _AccumulatorFactory & (new (_value?: number) => _AccumulatorNative);
export declare const Accumulator: typeof _AccumulatorBinding & _FlaxInstanceType<Accumulator> & _FlaxDartType<Accumulator, readonly ["class", "flax.core/sdk_painting#type:Accumulator", readonly [], false]>;
export {};
