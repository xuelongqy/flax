import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ParentData extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [];
}> {
    readonly __ParentData: unique symbol;
    readonly [_flaxDartTypeValue]: ParentData;
    detach(): void;
    toString(): string;
}
export declare function _ParentDataFactory(): ParentData;
export interface _ParentDataNative extends ParentData {
    readonly [_flaxDartTypeValue]: _ParentDataNative;
    detach(): void;
    toString(): string;
}
export declare abstract class _ParentDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ParentData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ParentData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:ParentData", readonly [], false];
    constructor();
}
export declare namespace _ParentDataFactory {
    function implement(args: [], implementation: {}): ParentData;
}
declare const _ParentDataBinding: typeof _ParentDataFactory & (new () => _ParentDataNative);
export declare const ParentData: typeof _ParentDataBinding & _FlaxInstanceType<ParentData> & _FlaxDartType<ParentData, readonly ["class", "flax.core/sdk_rendering#type:ParentData", readonly [], false]>;
export {};
