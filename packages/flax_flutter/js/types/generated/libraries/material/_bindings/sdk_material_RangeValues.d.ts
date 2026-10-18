import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface RangeValues extends Readonly<{
    "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeValues": readonly [];
}> {
    readonly __RangeValues: unique symbol;
    readonly [_flaxDartTypeValue]: RangeValues;
}
export interface RangeValues {
    readonly [_flaxDartTypeValue]: RangeValues;
    toString(): string;
    get start(): number;
    get end(): number;
}
export declare abstract class RangeValues extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RangeValues>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RangeValues;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:RangeValues", readonly [], false];
    constructor(start: number, end: number);
}
export declare namespace RangeValues {
    function implement(args: [start: number, end: number], implementation: {}): RangeValues;
}
