import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PlatformException extends Readonly<{
    "__flaxBound:package:flutter/src/services/message_codec.dart::PlatformException": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::Exception": readonly [];
}> {
    readonly __PlatformException: unique symbol;
    readonly [_flaxDartTypeValue]: PlatformException;
    readonly code: string;
    readonly message: string | null;
    readonly details: unknown | null;
    readonly stacktrace: string | null;
    toString(): string;
}
export declare function _PlatformExceptionFactory(options: {
    code: string;
    message?: string | null | undefined;
    details?: unknown | null | undefined;
    stacktrace?: string | null | undefined;
}): PlatformException;
export interface _PlatformExceptionNative extends PlatformException {
    readonly [_flaxDartTypeValue]: _PlatformExceptionNative;
    toString(): string;
    get code(): string;
    get message(): string | null;
    get details(): unknown | null;
    get stacktrace(): string | null;
}
export declare abstract class _PlatformExceptionNative extends _FlaxProxyBase {
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
export declare namespace _PlatformExceptionFactory {
    function implement(args: [options: {
        code: string;
        message?: string | null | undefined;
        details?: unknown | null | undefined;
        stacktrace?: string | null | undefined;
    }], implementation: {}): PlatformException;
}
declare const _PlatformExceptionBinding: typeof _PlatformExceptionFactory & (new (options: {
    code: string;
    message?: string | null | undefined;
    details?: unknown | null | undefined;
    stacktrace?: string | null | undefined;
}) => _PlatformExceptionNative);
export declare const PlatformException: typeof _PlatformExceptionBinding & _FlaxInstanceType<PlatformException> & _FlaxDartType<PlatformException, readonly ["class", "flax.core/sdk_services#type:PlatformException", readonly [], false]>;
export {};
