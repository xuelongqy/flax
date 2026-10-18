import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_AssetBundleImageProvider';
import '@flax/flutter/painting/_bindings/sdk_painting_AssetBundleImageProvider';
import type * as upstream1 from '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import type * as upstream2 from '@flax/flutter/painting/_bindings/sdk_painting_AssetBundleImageKey';
import '@flax/flutter/painting/_bindings/sdk_painting_AssetBundleImageKey';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import type * as upstream4 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Codec';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_TargetImageSize';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TargetImageSize';
import type * as upstream8 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStream';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStream';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageConfiguration';
import type * as upstream10 from '@flax/flutter/painting/_bindings/sdk_painting_ImageCacheStatus';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageCacheStatus';
import type * as upstream11 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageCache_cx';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ExactAssetImage extends Omit<upstream0.AssetBundleImageProvider, _flaxOwnMembers0>, Omit<upstream1.ImageProvider<upstream2.AssetBundleImageKey>, _flaxOwnMembers0 | keyof upstream0.AssetBundleImageProvider>, Readonly<{
    "__flaxBound:package:flutter/src/painting/image_provider.dart::ExactAssetImage": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/image_provider.dart::AssetBundleImageProvider": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [upstream2.AssetBundleImageKey];
}> {
    readonly __ExactAssetImage: unique symbol;
    readonly [_flaxDartTypeValue]: ExactAssetImage;
}
export interface ExactAssetImage {
    readonly [_flaxDartTypeValue]: ExactAssetImage;
    loadImage(key: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::AssetBundleImageKey": readonly [];
    }>, decode: ((buffer: upstream6.ImmutableBuffer, options?: {
        getTargetSize?: ((intrinsicWidth: number, intrinsicHeight: number) => upstream7.TargetImageSize) | null | undefined;
    }) => Promise<Readonly<{
        "__flaxBound:dart:ui::Codec": readonly [];
    }>>)): upstream4.ImageStreamCompleter;
    loadBuffer(key: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::AssetBundleImageKey": readonly [];
    }>, decode: ((buffer: upstream6.ImmutableBuffer, options?: {
        allowUpscaling?: boolean | undefined;
        cacheHeight?: number | null | undefined;
        cacheWidth?: number | null | undefined;
    }) => Promise<Readonly<{
        "__flaxBound:dart:ui::Codec": readonly [];
    }>>)): upstream4.ImageStreamCompleter;
    createStream(configuration: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [];
    }>): upstream8.ImageStream;
    obtainCacheStatus(options: {
        configuration: Readonly<{
            "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [];
        }>;
        handleError?: ((exception: {}, stackTrace: upstream11.StackTrace | null) => void) | null | undefined;
    }): Promise<upstream10.ImageCacheStatus | null>;
    resolveStreamForKey(configuration: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [];
    }>, stream: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStream": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, key: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::AssetBundleImageKey": readonly [];
    }>, handleError: ((exception: {}, stackTrace: upstream11.StackTrace | null) => void)): void;
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
    }>): Promise<upstream2.AssetBundleImageKey>;
    toString(): string;
    get assetName(): string;
    get keyName(): string;
    get scale(): number;
    get bundle(): upstream3.AssetBundle | null;
    get package(): string | null;
}
export declare abstract class ExactAssetImage extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ExactAssetImage>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ExactAssetImage;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ExactAssetImage", readonly [], false];
    constructor(assetName: string, options?: {
        scale?: number | undefined;
        bundle?: Readonly<{
            "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle": readonly [];
        }> | null | undefined;
        package?: string | null | undefined;
    });
}
export declare namespace ExactAssetImage {
    function implement(args: [assetName: string, options?: {
        scale?: number | undefined;
        bundle?: Readonly<{
            "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle": readonly [];
        }> | null | undefined;
        package?: string | null | undefined;
    }], implementation: {}): ExactAssetImage;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "assetName" | "keyName" | "scale" | "bundle" | "package" | "loadImage" | "loadBuffer" | "createStream" | "obtainCacheStatus" | "resolveStreamForKey" | "evict" | "obtainKey" | "toString" | "__flaxBound:package:flutter/src/painting/image_provider.dart::ExactAssetImage" | "__flaxBound:package:flutter/src/painting/image_provider.dart::AssetBundleImageProvider" | "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider";
export {};
