import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ImageFilterContext extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/image_filter_config.dart::ImageFilterContext": readonly [];
}> {
    readonly __ImageFilterContext: unique symbol;
    readonly [_flaxDartTypeValue]: ImageFilterContext;
    readonly bounds: upstream0.Rect;
}
export declare function _ImageFilterContextFactory(options: {
    bounds: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>;
}): ImageFilterContext;
export interface _ImageFilterContextNative extends ImageFilterContext {
    readonly [_flaxDartTypeValue]: _ImageFilterContextNative;
    get bounds(): upstream0.Rect;
}
export declare abstract class _ImageFilterContextNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ImageFilterContext>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ImageFilterContext;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:ImageFilterContext", readonly [], false];
    constructor(options: {
        bounds: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>;
    });
}
export declare namespace _ImageFilterContextFactory {
    function implement(args: [options: {
        bounds: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>;
    }], implementation: {}): ImageFilterContext;
}
declare const _ImageFilterContextBinding: typeof _ImageFilterContextFactory & (new (options: {
    bounds: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>;
}) => _ImageFilterContextNative);
export declare const ImageFilterContext: typeof _ImageFilterContextBinding & _FlaxInstanceType<ImageFilterContext> & _FlaxDartType<ImageFilterContext, readonly ["class", "flax.core/sdk_rendering#type:ImageFilterContext", readonly [], false]>;
export {};
