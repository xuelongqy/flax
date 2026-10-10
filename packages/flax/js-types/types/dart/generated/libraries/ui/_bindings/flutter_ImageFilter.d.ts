import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
export interface ImageFilter extends Readonly<{
    "__flaxBound:dart:ui::ImageFilter": readonly [];
}> {
    readonly __ImageFilter: unique symbol;
}
declare namespace _ImageFilterFactory {
    function blur(options?: {
        sigmaX?: number | undefined;
        sigmaY?: number | undefined;
    }): ImageFilter;
}
declare namespace _ImageFilterFactory {
    function dilate(options?: {
        radiusX?: number | undefined;
        radiusY?: number | undefined;
    }): ImageFilter;
}
declare namespace _ImageFilterFactory {
    function erode(options?: {
        radiusX?: number | undefined;
        radiusY?: number | undefined;
    }): ImageFilter;
}
declare namespace _ImageFilterFactory {
    function compose(options: {
        outer: Readonly<{
            "__flaxBound:dart:ui::ImageFilter": readonly [];
        }>;
        inner: Readonly<{
            "__flaxBound:dart:ui::ImageFilter": readonly [];
        }>;
    }): ImageFilter;
}
export declare const ImageFilter: typeof _ImageFilterFactory & _FlaxInstanceType<ImageFilter>;
export {};
