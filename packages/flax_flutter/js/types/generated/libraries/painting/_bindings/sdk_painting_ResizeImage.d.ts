import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import type * as upstream1 from '@flax/flutter/painting/_bindings/sdk_painting_ResizeImageKey';
import '@flax/flutter/painting/_bindings/sdk_painting_ResizeImageKey';
import type * as upstream2 from '@flax/flutter/painting/_bindings/sdk_painting_ResizeImagePolicy';
import '@flax/flutter/painting/_bindings/sdk_painting_ResizeImagePolicy';
import type * as upstream3 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStream';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStream';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageConfiguration';
import type * as upstream5 from '@flax/flutter/painting/_bindings/sdk_painting_ImageCacheStatus';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageCacheStatus';
import type * as upstream6 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageCache_cx';
import type * as upstream8 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Codec';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_TargetImageSize';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TargetImageSize';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ResizeImage extends Omit<upstream0.ImageProvider<upstream1.ResizeImageKey>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/painting/image_provider.dart::ResizeImage": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [upstream1.ResizeImageKey];
}> {
    readonly __ResizeImage: unique symbol;
    readonly [_flaxDartTypeValue]: ResizeImage;
}
export interface ResizeImage {
    readonly [_flaxDartTypeValue]: ResizeImage;
    resolve(configuration: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [];
    }>): upstream3.ImageStream;
    createStream(configuration: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [];
    }>): upstream3.ImageStream;
    obtainCacheStatus(options: {
        configuration: Readonly<{
            "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [];
        }>;
        handleError?: ((exception: {}, stackTrace: upstream6.StackTrace | null) => void) | null | undefined;
    }): Promise<upstream5.ImageCacheStatus | null>;
    resolveStreamForKey(configuration: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [];
    }>, stream: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStream": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, key: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ResizeImageKey": readonly [];
    }>, handleError: ((exception: {}, stackTrace: upstream6.StackTrace | null) => void)): void;
    evict(options?: {
        cache?: Readonly<{
            "__flaxBound:package:flutter/src/painting/image_cache.dart::ImageCache": readonly [];
        }> | null | undefined;
        configuration?: Readonly<{
            "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [];
        }> | undefined;
    }): Promise<boolean>;
    obtainKey(configuration: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [];
    }>): Promise<upstream1.ResizeImageKey>;
    loadBuffer(key: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ResizeImageKey": readonly [];
    }>, decode: ((buffer: upstream10.ImmutableBuffer, options?: {
        allowUpscaling?: boolean | undefined;
        cacheHeight?: number | null | undefined;
        cacheWidth?: number | null | undefined;
    }) => Promise<Readonly<{
        "__flaxBound:dart:ui::Codec": readonly [];
    }>>)): upstream8.ImageStreamCompleter;
    loadImage(key: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ResizeImageKey": readonly [];
    }>, decode: ((buffer: upstream10.ImmutableBuffer, options?: {
        getTargetSize?: ((intrinsicWidth: number, intrinsicHeight: number) => upstream11.TargetImageSize) | null | undefined;
    }) => Promise<Readonly<{
        "__flaxBound:dart:ui::Codec": readonly [];
    }>>)): upstream8.ImageStreamCompleter;
    toString(): string;
    get imageProvider(): upstream0.ImageProvider<any>;
    get width(): number | null;
    get height(): number | null;
    get policy(): upstream2.ResizeImagePolicy;
    get allowUpscaling(): boolean;
}
export declare abstract class ResizeImage extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ResizeImage>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ResizeImage;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ResizeImage", readonly [], false];
    constructor(imageProvider: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}];
    }>, options?: {
        width?: number | null | undefined;
        height?: number | null | undefined;
        policy?: upstream2.ResizeImagePolicy | undefined;
        allowUpscaling?: boolean | undefined;
    });
}
export declare namespace ResizeImage {
    function implement(args: [imageProvider: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}];
    }>, options?: {
        width?: number | null | undefined;
        height?: number | null | undefined;
        policy?: upstream2.ResizeImagePolicy | undefined;
        allowUpscaling?: boolean | undefined;
    }], implementation: {}): ResizeImage;
}
export declare namespace ResizeImage {
    function resizeIfNeeded(cacheWidth: number | null, cacheHeight: number | null, provider: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}];
    }>): upstream0.ImageProvider<any>;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "imageProvider" | "width" | "height" | "policy" | "allowUpscaling" | "resolve" | "createStream" | "obtainCacheStatus" | "resolveStreamForKey" | "evict" | "obtainKey" | "loadBuffer" | "loadImage" | "toString" | "__flaxBound:package:flutter/src/painting/image_provider.dart::ResizeImage" | "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider";
export {};
