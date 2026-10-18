import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_CacheExtentStyle';
import '@flax/flutter/rendering/_bindings/sdk_rendering_CacheExtentStyle';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScrollCacheExtent extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/viewport.dart::ScrollCacheExtent": readonly [];
}> {
    readonly __ScrollCacheExtent: unique symbol;
    readonly [_flaxDartTypeValue]: ScrollCacheExtent;
    readonly style: upstream0.CacheExtentStyle;
    readonly value: number;
}
export declare namespace _ScrollCacheExtentFactory {
    function pixels(pixels: number): ScrollCacheExtent;
}
export declare namespace _ScrollCacheExtentFactory {
    function viewport(value: number): ScrollCacheExtent;
}
export declare const ScrollCacheExtent: typeof _ScrollCacheExtentFactory & _FlaxInstanceType<ScrollCacheExtent> & _FlaxDartType<ScrollCacheExtent, readonly ["class", "flax.core/sdk_rendering#type:ScrollCacheExtent", readonly [], false]>;
