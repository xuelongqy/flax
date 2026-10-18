import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ImageFilterContext extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/image_filter_config.dart::ImageFilterContext": readonly [];
}> {
    readonly __ImageFilterContext: unique symbol;
    readonly [_flaxDartTypeValue]: ImageFilterContext;
}
export interface ImageFilterContext {
    readonly [_flaxDartTypeValue]: ImageFilterContext;
    get bounds(): upstream0.Rect;
}
export declare abstract class ImageFilterContext extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ImageFilterContext>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ImageFilterContext;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:ImageFilterContext", readonly [], false];
    constructor(options: {
        bounds: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>;
    });
}
export declare namespace ImageFilterContext {
    function implement(args: [options: {
        bounds: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>;
    }], implementation: {}): ImageFilterContext;
}
