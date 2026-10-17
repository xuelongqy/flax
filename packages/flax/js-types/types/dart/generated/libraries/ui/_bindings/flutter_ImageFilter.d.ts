import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ImageFilter extends Readonly<{
    "__flaxBound:dart:ui::ImageFilter": readonly [];
}> {
    readonly __ImageFilter: unique symbol;
    readonly debugShortDescription: string;
}
export declare namespace _ImageFilterFactory {
    function blur(options?: {
        sigmaX?: number | undefined;
        sigmaY?: number | undefined;
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
    function matrix(matrix4: globalThis.Float64Array): ImageFilter;
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
    const isShaderFilterSupported: boolean;
}
export declare const ImageFilter: typeof _ImageFilterFactory & _FlaxInstanceType<ImageFilter> & _FlaxDartType<ImageFilter, readonly ["class", "flax.core/flutter#type:ImageFilter", readonly [], false]>;
