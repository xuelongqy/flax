import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MethodCall extends Readonly<{
    "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCall": readonly [];
}> {
    readonly __MethodCall: unique symbol;
    readonly [_flaxDartTypeValue]: MethodCall;
    readonly method: string;
    readonly arguments: unknown | null;
    toString(): string;
}
export declare function _MethodCallFactory(method: string, _flaxArg_617267756d656e7473?: unknown | null): MethodCall;
export interface _MethodCallNative extends MethodCall {
    readonly [_flaxDartTypeValue]: _MethodCallNative;
    toString(): string;
    get method(): string;
    get arguments(): unknown | null;
}
export declare abstract class _MethodCallNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MethodCall>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MethodCall;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:MethodCall", readonly [], false];
    constructor(method: string, _flaxArg_617267756d656e7473?: unknown | null);
}
export declare namespace _MethodCallFactory {
    function implement(args: [method: string, _flaxArg_617267756d656e7473?: unknown | null], implementation: {}): MethodCall;
}
declare const _MethodCallBinding: typeof _MethodCallFactory & (new (method: string, _flaxArg_617267756d656e7473?: unknown | null) => _MethodCallNative);
export declare const MethodCall: typeof _MethodCallBinding & _FlaxInstanceType<MethodCall> & _FlaxDartType<MethodCall, readonly ["class", "flax.core/sdk_services#type:MethodCall", readonly [], false]>;
export {};
