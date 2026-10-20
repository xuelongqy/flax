import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import type * as upstream1 from '@flax/dart/io/_bindings/sdk_dependencies_File';
import '@flax/dart/io/_bindings/sdk_dependencies_File';
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
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FileImage extends Omit<upstream0.ImageProvider<FileImage>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/painting/image_provider.dart::FileImage": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [FileImage];
}> {
    readonly __FileImage: unique symbol;
    readonly [_flaxDartTypeValue]: FileImage;
    readonly file: upstream1.File;
    readonly scale: number;
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
        "__flaxBound:package:flutter/src/painting/image_provider.dart::FileImage": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [FileImage];
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
    }>): Promise<FileImage>;
    loadBuffer(key: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::FileImage": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [FileImage];
    }>, decode: ((buffer: upstream9.ImmutableBuffer, options?: {
        allowUpscaling?: boolean | undefined;
        cacheHeight?: number | null | undefined;
        cacheWidth?: number | null | undefined;
    }) => Promise<Readonly<{
        "__flaxBound:dart:ui::Codec": readonly [];
    }>>)): upstream7.ImageStreamCompleter;
    loadImage(key: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::FileImage": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [FileImage];
    }>, decode: ((buffer: upstream9.ImmutableBuffer, options?: {
        getTargetSize?: ((intrinsicWidth: number, intrinsicHeight: number) => upstream10.TargetImageSize) | null | undefined;
    }) => Promise<Readonly<{
        "__flaxBound:dart:ui::Codec": readonly [];
    }>>)): upstream7.ImageStreamCompleter;
    toString(): string;
}
export declare function _FileImageFactory(file: Readonly<{
    "__flaxBound:dart:io::File": readonly [];
}> & Readonly<{
    "__flaxBound:dart:io::FileSystemEntity": readonly [];
}>, options?: {
    scale?: number | undefined;
}): FileImage;
export interface _FileImageNative extends FileImage {
    readonly [_flaxDartTypeValue]: _FileImageNative;
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
        "__flaxBound:package:flutter/src/painting/image_provider.dart::FileImage": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [FileImage];
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
    }>): Promise<FileImage>;
    loadBuffer(key: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::FileImage": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [FileImage];
    }>, decode: ((buffer: upstream9.ImmutableBuffer, options?: {
        allowUpscaling?: boolean | undefined;
        cacheHeight?: number | null | undefined;
        cacheWidth?: number | null | undefined;
    }) => Promise<Readonly<{
        "__flaxBound:dart:ui::Codec": readonly [];
    }>>)): upstream7.ImageStreamCompleter;
    loadImage(key: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::FileImage": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [FileImage];
    }>, decode: ((buffer: upstream9.ImmutableBuffer, options?: {
        getTargetSize?: ((intrinsicWidth: number, intrinsicHeight: number) => upstream10.TargetImageSize) | null | undefined;
    }) => Promise<Readonly<{
        "__flaxBound:dart:ui::Codec": readonly [];
    }>>)): upstream7.ImageStreamCompleter;
    toString(): string;
    get file(): upstream1.File;
    get scale(): number;
}
export declare abstract class _FileImageNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FileImage>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: FileImage;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:FileImage", readonly [], false];
    constructor(file: Readonly<{
        "__flaxBound:dart:io::File": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:io::FileSystemEntity": readonly [];
    }>, options?: {
        scale?: number | undefined;
    });
}
export declare namespace _FileImageFactory {
    function implement(args: [file: Readonly<{
        "__flaxBound:dart:io::File": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:io::FileSystemEntity": readonly [];
    }>, options?: {
        scale?: number | undefined;
    }], implementation: {}): FileImage;
}
declare const _FileImageBinding: typeof _FileImageFactory & (new (file: Readonly<{
    "__flaxBound:dart:io::File": readonly [];
}> & Readonly<{
    "__flaxBound:dart:io::FileSystemEntity": readonly [];
}>, options?: {
    scale?: number | undefined;
}) => _FileImageNative);
export declare const FileImage: typeof _FileImageBinding & _FlaxInstanceType<FileImage> & _FlaxDartType<FileImage, readonly ["class", "flax.core/sdk_painting#type:FileImage", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "file" | "scale" | "resolve" | "createStream" | "obtainCacheStatus" | "resolveStreamForKey" | "evict" | "obtainKey" | "loadBuffer" | "loadImage" | "toString" | "__flaxBound:package:flutter/src/painting/image_provider.dart::FileImage" | "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider";
export {};
