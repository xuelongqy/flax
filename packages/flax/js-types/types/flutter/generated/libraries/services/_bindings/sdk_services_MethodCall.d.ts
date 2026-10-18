import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface MethodCall extends Readonly<{
    "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCall": readonly [];
}> {
    readonly __MethodCall: unique symbol;
    readonly [_flaxDartTypeValue]: MethodCall;
}
export interface MethodCall {
    readonly [_flaxDartTypeValue]: MethodCall;
    toString(): string;
    get method(): string;
    get arguments(): unknown | null;
}
export declare abstract class MethodCall extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MethodCall>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MethodCall;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:MethodCall", readonly [], false];
    constructor(method: string, _flaxArg_617267756d656e7473?: unknown | null);
}
export declare namespace MethodCall {
    function implement(args: [method: string, _flaxArg_617267756d656e7473?: unknown | null], implementation: {}): MethodCall;
}
