import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream2 from '@flax/flutter/painting/_bindings/sdk_painting_ImageCacheStatus';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageCacheStatus';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ImageCache extends Readonly<{
    "__flaxBound:package:flutter/src/painting/image_cache.dart::ImageCache": readonly [];
}> {
    readonly __ImageCache: unique symbol;
    readonly [_flaxDartTypeValue]: ImageCache;
}
export interface ImageCache {
    readonly [_flaxDartTypeValue]: ImageCache;
    clear(): void;
    evict(key: {}, options?: {
        includeLive?: boolean | undefined;
    }): boolean;
    putIfAbsent(key: {}, loader: (() => Readonly<{
        "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamCompleter": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>), options?: {
        onError?: ((exception: {}, stackTrace: upstream1.StackTrace | null) => void) | null | undefined;
    }): upstream0.ImageStreamCompleter | null;
    statusForKey(key: {}): upstream2.ImageCacheStatus;
    containsKey(key: {}): boolean;
    clearLiveImages(): void;
    get maximumSize(): number;
    get currentSize(): number;
    get maximumSizeBytes(): number;
    get currentSizeBytes(): number;
    get liveImageCount(): number;
    get pendingImageCount(): number;
    set maximumSize(value: number);
    set maximumSizeBytes(value: number);
}
export declare abstract class ImageCache extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ImageCache>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ImageCache;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ImageCache", readonly [], false];
    constructor();
}
export declare namespace ImageCache {
    function implement(args: [], implementation: {}): ImageCache;
}
