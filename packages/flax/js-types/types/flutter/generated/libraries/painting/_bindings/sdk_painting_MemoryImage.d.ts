import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import type * as upstream1 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStream';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStream';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageConfiguration';
import type * as upstream3 from '@flax/flutter/painting/_bindings/sdk_painting_ImageCacheStatus';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageCacheStatus';
import type * as upstream4 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageCache_cx';
import type * as upstream6 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Codec';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_TargetImageSize';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TargetImageSize';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MemoryImage extends Omit<upstream0.ImageProvider<MemoryImage>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/painting/image_provider.dart::MemoryImage": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [MemoryImage];
}> {
    readonly __MemoryImage: unique symbol;
    readonly [_flaxDartTypeValue]: MemoryImage;
    readonly bytes: globalThis.Uint8Array;
    readonly scale: number;
    resolve(configuration: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [];
    }>): upstream1.ImageStream;
    createStream(configuration: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [];
    }>): upstream1.ImageStream;
    obtainCacheStatus(options: {
        configuration: Readonly<{
            "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [];
        }>;
        handleError?: ((exception: {}, stackTrace: upstream4.StackTrace | null) => void) | null | undefined;
    }): Promise<upstream3.ImageCacheStatus | null>;
    resolveStreamForKey(configuration: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [];
    }>, stream: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStream": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, key: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::MemoryImage": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [MemoryImage];
    }>, handleError: ((exception: {}, stackTrace: upstream4.StackTrace | null) => void)): void;
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
    }>): Promise<MemoryImage>;
    loadBuffer(key: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::MemoryImage": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [MemoryImage];
    }>, decode: ((buffer: upstream8.ImmutableBuffer, options?: {
        allowUpscaling?: boolean | undefined;
        cacheHeight?: number | null | undefined;
        cacheWidth?: number | null | undefined;
    }) => Promise<Readonly<{
        "__flaxBound:dart:ui::Codec": readonly [];
    }>>)): upstream6.ImageStreamCompleter;
    loadImage(key: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::MemoryImage": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [MemoryImage];
    }>, decode: ((buffer: upstream8.ImmutableBuffer, options?: {
        getTargetSize?: ((intrinsicWidth: number, intrinsicHeight: number) => upstream9.TargetImageSize) | null | undefined;
    }) => Promise<Readonly<{
        "__flaxBound:dart:ui::Codec": readonly [];
    }>>)): upstream6.ImageStreamCompleter;
    toString(): string;
}
export declare function _MemoryImageFactory(bytes: globalThis.Uint8Array, options?: {
    scale?: number | undefined;
}): MemoryImage;
export interface _MemoryImageNative extends MemoryImage {
    readonly [_flaxDartTypeValue]: _MemoryImageNative;
    resolve(configuration: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [];
    }>): upstream1.ImageStream;
    createStream(configuration: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [];
    }>): upstream1.ImageStream;
    obtainCacheStatus(options: {
        configuration: Readonly<{
            "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [];
        }>;
        handleError?: ((exception: {}, stackTrace: upstream4.StackTrace | null) => void) | null | undefined;
    }): Promise<upstream3.ImageCacheStatus | null>;
    resolveStreamForKey(configuration: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [];
    }>, stream: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStream": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, key: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::MemoryImage": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [MemoryImage];
    }>, handleError: ((exception: {}, stackTrace: upstream4.StackTrace | null) => void)): void;
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
    }>): Promise<MemoryImage>;
    loadBuffer(key: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::MemoryImage": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [MemoryImage];
    }>, decode: ((buffer: upstream8.ImmutableBuffer, options?: {
        allowUpscaling?: boolean | undefined;
        cacheHeight?: number | null | undefined;
        cacheWidth?: number | null | undefined;
    }) => Promise<Readonly<{
        "__flaxBound:dart:ui::Codec": readonly [];
    }>>)): upstream6.ImageStreamCompleter;
    loadImage(key: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::MemoryImage": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [MemoryImage];
    }>, decode: ((buffer: upstream8.ImmutableBuffer, options?: {
        getTargetSize?: ((intrinsicWidth: number, intrinsicHeight: number) => upstream9.TargetImageSize) | null | undefined;
    }) => Promise<Readonly<{
        "__flaxBound:dart:ui::Codec": readonly [];
    }>>)): upstream6.ImageStreamCompleter;
    toString(): string;
    get bytes(): globalThis.Uint8Array;
    get scale(): number;
}
export declare abstract class _MemoryImageNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MemoryImage>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MemoryImage;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:MemoryImage", readonly [], false];
    constructor(bytes: globalThis.Uint8Array, options?: {
        scale?: number | undefined;
    });
}
export declare namespace _MemoryImageFactory {
    function implement(args: [bytes: globalThis.Uint8Array, options?: {
        scale?: number | undefined;
    }], implementation: {}): MemoryImage;
}
declare const _MemoryImageBinding: typeof _MemoryImageFactory & (new (bytes: globalThis.Uint8Array, options?: {
    scale?: number | undefined;
}) => _MemoryImageNative);
export declare const MemoryImage: typeof _MemoryImageBinding & _FlaxInstanceType<MemoryImage> & _FlaxDartType<MemoryImage, readonly ["class", "flax.core/sdk_painting#type:MemoryImage", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "bytes" | "scale" | "resolve" | "createStream" | "obtainCacheStatus" | "resolveStreamForKey" | "evict" | "obtainKey" | "loadBuffer" | "loadImage" | "toString" | "__flaxBound:package:flutter/src/painting/image_provider.dart::MemoryImage" | "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider";
export {};
