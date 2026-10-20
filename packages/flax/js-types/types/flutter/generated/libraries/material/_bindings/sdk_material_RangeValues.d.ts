import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RangeValues extends Readonly<{
    "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeValues": readonly [];
}> {
    readonly __RangeValues: unique symbol;
    readonly [_flaxDartTypeValue]: RangeValues;
    readonly start: number;
    readonly end: number;
    toString(): string;
}
export declare function _RangeValuesFactory(start: number, end: number): RangeValues;
export interface _RangeValuesNative extends RangeValues {
    readonly [_flaxDartTypeValue]: _RangeValuesNative;
    toString(): string;
    get start(): number;
    get end(): number;
}
export declare abstract class _RangeValuesNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RangeValues>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RangeValues;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:RangeValues", readonly [], false];
    constructor(start: number, end: number);
}
export declare namespace _RangeValuesFactory {
    function implement(args: [start: number, end: number], implementation: {}): RangeValues;
}
declare const _RangeValuesBinding: typeof _RangeValuesFactory & (new (start: number, end: number) => _RangeValuesNative);
export declare const RangeValues: typeof _RangeValuesBinding & _FlaxInstanceType<RangeValues> & _FlaxDartType<RangeValues, readonly ["class", "flax.core/sdk_material#type:RangeValues", readonly [], false]>;
export {};
