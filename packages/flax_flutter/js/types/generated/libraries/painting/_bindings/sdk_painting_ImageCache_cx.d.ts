import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream2 from '@flax/flutter/painting/_bindings/sdk_painting_ImageCacheStatus';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageCacheStatus';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ImageCache extends Readonly<{
    "__flaxBound:package:flutter/src/painting/image_cache.dart::ImageCache": readonly [];
}> {
    readonly __ImageCache: unique symbol;
    readonly [_flaxDartTypeValue]: ImageCache;
    get maximumSize(): number;
    readonly currentSize: number;
    get maximumSizeBytes(): number;
    readonly currentSizeBytes: number;
    readonly liveImageCount: number;
    readonly pendingImageCount: number;
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
    set maximumSize(value: number);
    set maximumSizeBytes(value: number);
}
export declare function _ImageCacheFactory(): ImageCache;
export interface _ImageCacheNative extends ImageCache {
    readonly [_flaxDartTypeValue]: _ImageCacheNative;
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
export declare abstract class _ImageCacheNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ImageCache>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ImageCache;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ImageCache", readonly [], false];
    constructor();
}
export declare namespace _ImageCacheFactory {
    function implement(args: [], implementation: {}): ImageCache;
}
declare const _ImageCacheBinding: typeof _ImageCacheFactory & (new () => _ImageCacheNative);
export declare const ImageCache: typeof _ImageCacheBinding & _FlaxInstanceType<ImageCache> & _FlaxDartType<ImageCache, readonly ["class", "flax.core/sdk_painting#type:ImageCache", readonly [], false]>;
export {};
