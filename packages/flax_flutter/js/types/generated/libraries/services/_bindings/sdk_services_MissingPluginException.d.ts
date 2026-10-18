import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface MissingPluginException extends Readonly<{
    "__flaxBound:package:flutter/src/services/message_codec.dart::MissingPluginException": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::Exception": readonly [];
}> {
    readonly __MissingPluginException: unique symbol;
    readonly [_flaxDartTypeValue]: MissingPluginException;
}
export interface MissingPluginException {
    readonly [_flaxDartTypeValue]: MissingPluginException;
    toString(): string;
    get message(): string | null;
}
export declare abstract class MissingPluginException extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MissingPluginException>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MissingPluginException;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:MissingPluginException", readonly [], false];
    constructor(message?: string | null);
}
export declare namespace MissingPluginException {
    function implement(args: [message?: string | null], implementation: {}): MissingPluginException;
}
