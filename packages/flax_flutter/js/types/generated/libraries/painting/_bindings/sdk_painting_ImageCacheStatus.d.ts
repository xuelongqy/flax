import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ImageCacheStatus extends Readonly<{
    "__flaxBound:package:flutter/src/painting/image_cache.dart::ImageCacheStatus": readonly [];
}> {
    readonly __ImageCacheStatus: unique symbol;
    readonly [_flaxDartTypeValue]: ImageCacheStatus;
    readonly pending: boolean;
    readonly keepAlive: boolean;
    readonly live: boolean;
    readonly tracked: boolean;
    readonly untracked: boolean;
    toString(): string;
}
export declare namespace _ImageCacheStatusFactory {
    function implement(args: [], implementation: {
        toString: (() => string);
        get pending(): boolean;
        get keepAlive(): boolean;
        get live(): boolean;
        get tracked(): boolean;
        get untracked(): boolean;
        get hashCode(): number;
    }): ImageCacheStatus;
}
export declare const ImageCacheStatus: typeof _ImageCacheStatusFactory & _FlaxInstanceType<ImageCacheStatus> & _FlaxDartType<ImageCacheStatus, readonly ["class", "flax.core/sdk_painting#type:ImageCacheStatus", readonly [], false]>;
