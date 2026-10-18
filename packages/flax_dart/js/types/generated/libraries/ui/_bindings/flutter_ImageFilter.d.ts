import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_TileMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TileMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_FilterQuality';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FilterQuality';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FragmentShader';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ImageFilter extends Readonly<{
    "__flaxBound:dart:ui::ImageFilter": readonly [];
}> {
    readonly __ImageFilter: unique symbol;
    readonly [_flaxDartTypeValue]: ImageFilter;
    readonly debugShortDescription: string;
}
export declare namespace _ImageFilterFactory {
    function blur(options?: {
        sigmaX?: number | undefined;
        sigmaY?: number | undefined;
        tileMode?: upstream0.TileMode | null | undefined;
        bounds?: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }> | null | undefined;
    }): ImageFilter;
}
export declare namespace _ImageFilterFactory {
    function dilate(options?: {
        radiusX?: number | undefined;
        radiusY?: number | undefined;
    }): ImageFilter;
}
export declare namespace _ImageFilterFactory {
    function erode(options?: {
        radiusX?: number | undefined;
        radiusY?: number | undefined;
    }): ImageFilter;
}
export declare namespace _ImageFilterFactory {
    function matrix(matrix4: globalThis.Float64Array, options?: {
        filterQuality?: upstream2.FilterQuality | undefined;
    }): ImageFilter;
}
export declare namespace _ImageFilterFactory {
    function compose(options: {
        outer: Readonly<{
            "__flaxBound:dart:ui::ImageFilter": readonly [];
        }>;
        inner: Readonly<{
            "__flaxBound:dart:ui::ImageFilter": readonly [];
        }>;
    }): ImageFilter;
}
export declare namespace _ImageFilterFactory {
    function shader(shader: Readonly<{
        "__flaxBound:dart:ui::FragmentShader": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::Shader": readonly [];
    }>): ImageFilter;
}
export declare namespace _ImageFilterFactory {
    const isShaderFilterSupported: boolean;
}
export declare const ImageFilter: typeof _ImageFilterFactory & _FlaxInstanceType<ImageFilter> & _FlaxDartType<ImageFilter, readonly ["class", "flax.core/flutter#type:ImageFilter", readonly [], false]>;
