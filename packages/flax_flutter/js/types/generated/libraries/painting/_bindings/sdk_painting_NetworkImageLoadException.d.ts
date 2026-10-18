import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/core/_bindings/flutter_Uri';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface NetworkImageLoadException extends Readonly<{
    "__flaxBound:package:flutter/src/painting/image_provider.dart::NetworkImageLoadException": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::Exception": readonly [];
}> {
    readonly __NetworkImageLoadException: unique symbol;
    readonly [_flaxDartTypeValue]: NetworkImageLoadException;
}
export interface NetworkImageLoadException {
    readonly [_flaxDartTypeValue]: NetworkImageLoadException;
    toString(): string;
    get statusCode(): number;
    get uri(): upstream0.Uri;
}
export declare abstract class NetworkImageLoadException extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<NetworkImageLoadException>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: NetworkImageLoadException;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:NetworkImageLoadException", readonly [], false];
    constructor(options: {
        statusCode: number;
        uri: DartInput<Readonly<{
            "__flaxBound:dart:core::Uri": readonly [];
        }>>;
    });
}
export declare namespace NetworkImageLoadException {
    function implement(args: [options: {
        statusCode: number;
        uri: DartInput<Readonly<{
            "__flaxBound:dart:core::Uri": readonly [];
        }>>;
    }], implementation: {}): NetworkImageLoadException;
}
