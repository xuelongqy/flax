import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface PlatformException extends Readonly<{
    "__flaxBound:package:flutter/src/services/message_codec.dart::PlatformException": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::Exception": readonly [];
}> {
    readonly __PlatformException: unique symbol;
    readonly [_flaxDartTypeValue]: PlatformException;
}
export interface PlatformException {
    readonly [_flaxDartTypeValue]: PlatformException;
    toString(): string;
    get code(): string;
    get message(): string | null;
    get details(): unknown | null;
    get stacktrace(): string | null;
}
export declare abstract class PlatformException extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PlatformException>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PlatformException;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:PlatformException", readonly [], false];
    constructor(options: {
        code: string;
        message?: string | null | undefined;
        details?: unknown | null | undefined;
        stacktrace?: string | null | undefined;
    });
}
export declare namespace PlatformException {
    function implement(args: [options: {
        code: string;
        message?: string | null | undefined;
        details?: unknown | null | undefined;
        stacktrace?: string | null | undefined;
    }], implementation: {}): PlatformException;
}
