import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MissingPluginException extends Readonly<{
    "__flaxBound:package:flutter/src/services/message_codec.dart::MissingPluginException": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::Exception": readonly [];
}> {
    readonly __MissingPluginException: unique symbol;
    readonly [_flaxDartTypeValue]: MissingPluginException;
    readonly message: string | null;
    toString(): string;
}
export declare function _MissingPluginExceptionFactory(message?: string | null): MissingPluginException;
export interface _MissingPluginExceptionNative extends MissingPluginException {
    readonly [_flaxDartTypeValue]: _MissingPluginExceptionNative;
    toString(): string;
    get message(): string | null;
}
export declare abstract class _MissingPluginExceptionNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MissingPluginException>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MissingPluginException;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:MissingPluginException", readonly [], false];
    constructor(message?: string | null);
}
export declare namespace _MissingPluginExceptionFactory {
    function implement(args: [message?: string | null], implementation: {}): MissingPluginException;
}
declare const _MissingPluginExceptionBinding: typeof _MissingPluginExceptionFactory & (new (message?: string | null) => _MissingPluginExceptionNative);
export declare const MissingPluginException: typeof _MissingPluginExceptionBinding & _FlaxInstanceType<MissingPluginException> & _FlaxDartType<MissingPluginException, readonly ["class", "flax.core/sdk_services#type:MissingPluginException", readonly [], false]>;
export {};
