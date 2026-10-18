import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_ImageFilter';
import '@flax/dart/ui/_bindings/flutter_ImageFilter';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_TileMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TileMode';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_ImageFilterContext';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ImageFilterContext';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ImageFilterConfig extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/image_filter_config.dart::ImageFilterConfig": readonly [];
}> {
    readonly __ImageFilterConfig: unique symbol;
    readonly [_flaxDartTypeValue]: ImageFilterConfig;
    readonly filter: upstream0.ImageFilter | null;
    readonly debugShortDescription: string;
    resolve(context: Readonly<{
        "__flaxBound:package:flutter/src/rendering/image_filter_config.dart::ImageFilterContext": readonly [];
    }>): upstream0.ImageFilter;
    toString(): string;
}
export declare function _ImageFilterConfigFactory(filter: Readonly<{
    "__flaxBound:dart:ui::ImageFilter": readonly [];
}>): ImageFilterConfig;
export declare namespace _ImageFilterConfigFactory {
    function blur(options?: {
        sigmaX?: number | undefined;
        sigmaY?: number | undefined;
        tileMode?: upstream1.TileMode | undefined;
        bounded?: boolean | undefined;
    }): ImageFilterConfig;
}
export declare namespace _ImageFilterConfigFactory {
    function compose(options: {
        outer: Readonly<{
            "__flaxBound:package:flutter/src/rendering/image_filter_config.dart::ImageFilterConfig": readonly [];
        }>;
        inner: Readonly<{
            "__flaxBound:package:flutter/src/rendering/image_filter_config.dart::ImageFilterConfig": readonly [];
        }>;
    }): ImageFilterConfig;
}
export declare namespace _ImageFilterConfigFactory {
    function implement(args: [], implementation: {
        resolve: ((context: upstream2.ImageFilterContext) => Readonly<{
            "__flaxBound:dart:ui::ImageFilter": readonly [];
        }>);
        toString: (() => string);
        get filter(): Readonly<{
            "__flaxBound:dart:ui::ImageFilter": readonly [];
        }> | null;
        get debugShortDescription(): string;
    }): ImageFilterConfig;
}
export declare const ImageFilterConfig: typeof _ImageFilterConfigFactory & _FlaxInstanceType<ImageFilterConfig> & _FlaxDartType<ImageFilterConfig, readonly ["class", "flax.core/sdk_rendering#type:ImageFilterConfig", readonly [], false]>;
