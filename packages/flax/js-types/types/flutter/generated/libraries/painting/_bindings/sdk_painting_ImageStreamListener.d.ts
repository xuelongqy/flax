import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_ImageInfo';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageInfo';
import type * as upstream1 from '@flax/flutter/painting/_bindings/sdk_painting_ImageChunkEvent';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageChunkEvent';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ImageStreamListener extends Readonly<{
    "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamListener": readonly [];
}> {
    readonly __ImageStreamListener: unique symbol;
    readonly [_flaxDartTypeValue]: ImageStreamListener;
    readonly onImage: ((image: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageInfo": readonly [];
    }>, synchronousCall: boolean) => void);
    readonly onChunk: ((event: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageChunkEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    readonly onError: ((exception: {}, stackTrace: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null) => void) | null;
    readonly reportErrors: boolean;
}
export declare function _ImageStreamListenerFactory(onImage: ((image: upstream0.ImageInfo, synchronousCall: boolean) => void), options?: {
    onChunk?: ((event: upstream1.ImageChunkEvent) => void) | null | undefined;
    onError?: ((exception: {}, stackTrace: upstream2.StackTrace | null) => void) | null | undefined;
    reportErrors?: boolean | undefined;
}): ImageStreamListener;
export interface _ImageStreamListenerNative extends ImageStreamListener {
    readonly [_flaxDartTypeValue]: _ImageStreamListenerNative;
    get onImage(): ((image: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageInfo": readonly [];
    }>, synchronousCall: boolean) => void);
    get onChunk(): ((event: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageChunkEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onError(): ((exception: {}, stackTrace: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null) => void) | null;
    get reportErrors(): boolean;
}
export declare abstract class _ImageStreamListenerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ImageStreamListener>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ImageStreamListener;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ImageStreamListener", readonly [], false];
    constructor(onImage: ((image: upstream0.ImageInfo, synchronousCall: boolean) => void), options?: {
        onChunk?: ((event: upstream1.ImageChunkEvent) => void) | null | undefined;
        onError?: ((exception: {}, stackTrace: upstream2.StackTrace | null) => void) | null | undefined;
        reportErrors?: boolean | undefined;
    });
}
export declare namespace _ImageStreamListenerFactory {
    function implement(args: [onImage: ((image: upstream0.ImageInfo, synchronousCall: boolean) => void), options?: {
        onChunk?: ((event: upstream1.ImageChunkEvent) => void) | null | undefined;
        onError?: ((exception: {}, stackTrace: upstream2.StackTrace | null) => void) | null | undefined;
        reportErrors?: boolean | undefined;
    }], implementation: {}): ImageStreamListener;
}
declare const _ImageStreamListenerBinding: typeof _ImageStreamListenerFactory & (new (onImage: ((image: upstream0.ImageInfo, synchronousCall: boolean) => void), options?: {
    onChunk?: ((event: upstream1.ImageChunkEvent) => void) | null | undefined;
    onError?: ((exception: {}, stackTrace: upstream2.StackTrace | null) => void) | null | undefined;
    reportErrors?: boolean | undefined;
}) => _ImageStreamListenerNative);
export declare const ImageStreamListener: typeof _ImageStreamListenerBinding & _FlaxInstanceType<ImageStreamListener> & _FlaxDartType<ImageStreamListener, readonly ["class", "flax.core/sdk_painting#type:ImageStreamListener", readonly [], false]>;
export {};
