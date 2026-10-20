import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RangeLabels extends Readonly<{
    "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeLabels": readonly [];
}> {
    readonly __RangeLabels: unique symbol;
    readonly [_flaxDartTypeValue]: RangeLabels;
    readonly start: string;
    readonly end: string;
    toString(): string;
}
export declare function _RangeLabelsFactory(start: string, end: string): RangeLabels;
export interface _RangeLabelsNative extends RangeLabels {
    readonly [_flaxDartTypeValue]: _RangeLabelsNative;
    toString(): string;
    get start(): string;
    get end(): string;
}
export declare abstract class _RangeLabelsNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RangeLabels>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RangeLabels;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:RangeLabels", readonly [], false];
    constructor(start: string, end: string);
}
export declare namespace _RangeLabelsFactory {
    function implement(args: [start: string, end: string], implementation: {}): RangeLabels;
}
declare const _RangeLabelsBinding: typeof _RangeLabelsFactory & (new (start: string, end: string) => _RangeLabelsNative);
export declare const RangeLabels: typeof _RangeLabelsBinding & _FlaxInstanceType<RangeLabels> & _FlaxDartType<RangeLabels, readonly ["class", "flax.core/sdk_material#type:RangeLabels", readonly [], false]>;
export {};
