import { type FlaxInstanceType as _FlaxInstanceType, type DartMap, type DartMapInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import type * as upstream1 from '@flax/flutter/painting/_bindings/sdk_painting_WebHtmlElementStrategy';
import '@flax/flutter/painting/_bindings/sdk_painting_WebHtmlElementStrategy';
import type * as upstream2 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStream';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStream';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageConfiguration';
import type * as upstream4 from '@flax/flutter/painting/_bindings/sdk_painting_ImageCacheStatus';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageCacheStatus';
import type * as upstream5 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageCache_cx';
import type * as upstream7 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Codec';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_TargetImageSize';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TargetImageSize';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface NetworkImage extends Omit<upstream0.ImageProvider<NetworkImage>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/painting/image_provider.dart::NetworkImage": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [NetworkImage];
}> {
    readonly __NetworkImage: unique symbol;
    readonly [_flaxDartTypeValue]: NetworkImage;
    readonly url: string;
    readonly scale: number;
    readonly headers: DartMap<string, string> | null;
    readonly webHtmlElementStrategy: upstream1.WebHtmlElementStrategy;
    resolve(configuration: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [];
    }>): upstream2.ImageStream;
    createStream(configuration: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [];
    }>): upstream2.ImageStream;
    obtainCacheStatus(options: {
        configuration: Readonly<{
            "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [];
        }>;
        handleError?: ((exception: {}, stackTrace: upstream5.StackTrace | null) => void) | null | undefined;
    }): Promise<upstream4.ImageCacheStatus | null>;
    resolveStreamForKey(configuration: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [];
    }>, stream: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStream": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, key: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::NetworkImage": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [NetworkImage];
    }>, handleError: ((exception: {}, stackTrace: upstream5.StackTrace | null) => void)): void;
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
    }>): Promise<NetworkImage>;
    loadBuffer(key: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::NetworkImage": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [NetworkImage];
    }>, decode: ((buffer: upstream9.ImmutableBuffer, options?: {
        allowUpscaling?: boolean | undefined;
        cacheHeight?: number | null | undefined;
        cacheWidth?: number | null | undefined;
    }) => Promise<Readonly<{
        "__flaxBound:dart:ui::Codec": readonly [];
    }>>)): upstream7.ImageStreamCompleter;
    loadImage(key: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::NetworkImage": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [NetworkImage];
    }>, decode: ((buffer: upstream9.ImmutableBuffer, options?: {
        getTargetSize?: ((intrinsicWidth: number, intrinsicHeight: number) => upstream10.TargetImageSize) | null | undefined;
    }) => Promise<Readonly<{
        "__flaxBound:dart:ui::Codec": readonly [];
    }>>)): upstream7.ImageStreamCompleter;
    toString(): string;
}
export declare function _NetworkImageFactory(url: string, options?: {
    scale?: number | undefined;
    headers?: DartMapInput<string, string, string, string> | null | undefined;
    webHtmlElementStrategy?: upstream1.WebHtmlElementStrategy | undefined;
}): NetworkImage;
export declare const NetworkImage: typeof _NetworkImageFactory & _FlaxInstanceType<NetworkImage> & _FlaxDartType<NetworkImage, readonly ["class", "flax.core/sdk_painting#type:NetworkImage", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "url" | "scale" | "headers" | "webHtmlElementStrategy" | "resolve" | "createStream" | "obtainCacheStatus" | "resolveStreamForKey" | "evict" | "obtainKey" | "loadBuffer" | "loadImage" | "toString" | "__flaxBound:package:flutter/src/painting/image_provider.dart::NetworkImage" | "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider";
export {};
