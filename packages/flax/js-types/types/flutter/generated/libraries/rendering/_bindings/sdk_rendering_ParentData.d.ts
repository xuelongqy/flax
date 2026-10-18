import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ParentData extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [];
}> {
    readonly __ParentData: unique symbol;
    readonly [_flaxDartTypeValue]: ParentData;
}
export interface ParentData {
    readonly [_flaxDartTypeValue]: ParentData;
    detach(): void;
    toString(): string;
}
export declare abstract class ParentData extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ParentData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ParentData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:ParentData", readonly [], false];
    constructor();
}
export declare namespace ParentData {
    function implement(args: [], implementation: {}): ParentData;
}
