import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface Summary extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/annotations.dart::Summary": readonly [];
}> {
    readonly __Summary: unique symbol;
    readonly [_flaxDartTypeValue]: Summary;
}
export interface Summary {
    readonly [_flaxDartTypeValue]: Summary;
    get text(): string;
}
export declare abstract class Summary extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Summary>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Summary;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:Summary", readonly [], false];
    constructor(text: string);
}
export declare namespace Summary {
    function implement(args: [text: string], implementation: {}): Summary;
}
