export interface ImageFilter extends Readonly<{
    "__flaxBound:dart:ui::ImageFilter": readonly [];
}> {
    readonly __ImageFilter: unique symbol;
}
export declare namespace ImageFilter {
    function blur(options?: {
        sigmaX?: number | undefined;
        sigmaY?: number | undefined;
    }): ImageFilter;
}
export declare namespace ImageFilter {
    function dilate(options?: {
        radiusX?: number | undefined;
        radiusY?: number | undefined;
    }): ImageFilter;
}
export declare namespace ImageFilter {
    function erode(options?: {
        radiusX?: number | undefined;
        radiusY?: number | undefined;
    }): ImageFilter;
}
export declare namespace ImageFilter {
    function compose(options: {
        outer: ImageFilter;
        inner: ImageFilter;
    }): ImageFilter;
}
