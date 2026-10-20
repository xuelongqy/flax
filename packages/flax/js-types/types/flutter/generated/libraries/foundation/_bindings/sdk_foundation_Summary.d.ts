import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Summary extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/annotations.dart::Summary": readonly [];
}> {
    readonly __Summary: unique symbol;
    readonly [_flaxDartTypeValue]: Summary;
    readonly text: string;
}
export declare function _SummaryFactory(text: string): Summary;
export interface _SummaryNative extends Summary {
    readonly [_flaxDartTypeValue]: _SummaryNative;
    get text(): string;
}
export declare abstract class _SummaryNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Summary>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Summary;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:Summary", readonly [], false];
    constructor(text: string);
}
export declare namespace _SummaryFactory {
    function implement(args: [text: string], implementation: {}): Summary;
}
declare const _SummaryBinding: typeof _SummaryFactory & (new (text: string) => _SummaryNative);
export declare const Summary: typeof _SummaryBinding & _FlaxInstanceType<Summary> & _FlaxDartType<Summary, readonly ["class", "flax.core/sdk_foundation#type:Summary", readonly [], false]>;
export {};
