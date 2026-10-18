import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface RangeLabels extends Readonly<{
    "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeLabels": readonly [];
}> {
    readonly __RangeLabels: unique symbol;
    readonly [_flaxDartTypeValue]: RangeLabels;
}
export interface RangeLabels {
    readonly [_flaxDartTypeValue]: RangeLabels;
    toString(): string;
    get start(): string;
    get end(): string;
}
export declare abstract class RangeLabels extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RangeLabels>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RangeLabels;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:RangeLabels", readonly [], false];
    constructor(start: string, end: string);
}
export declare namespace RangeLabels {
    function implement(args: [start: string, end: string], implementation: {}): RangeLabels;
}
