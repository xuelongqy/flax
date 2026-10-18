import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_TargetPixelFormat';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TargetPixelFormat';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Picture extends Readonly<{
    "__flaxBound:dart:ui::Picture": readonly [];
}> {
    readonly __Picture: unique symbol;
    readonly [_flaxDartTypeValue]: Picture;
    readonly debugDisposed: boolean;
    readonly approximateBytesUsed: number;
    toImage(width: number, height: number): Promise<upstream0.Image>;
    toImageSync(width: number, height: number, options?: {
        targetFormat?: upstream1.TargetPixelFormat | undefined;
    }): upstream0.Image;
    dispose(): void;
}
export declare namespace _PictureFactory {
    function implement(args: [], implementation: {
        toImage: ((width: number, height: number) => Promise<Readonly<{
            "__flaxBound:dart:ui::Image": readonly [];
        }>>);
        toImageSync: ((width: number, height: number, options?: {
            targetFormat?: upstream1.TargetPixelFormat | undefined;
        }) => Readonly<{
            "__flaxBound:dart:ui::Image": readonly [];
        }>);
        dispose: (() => void);
        get debugDisposed(): boolean;
        get approximateBytesUsed(): number;
    }): Picture;
}
export declare namespace _PictureFactory {
    function setOnCreate(value: ((picture: Picture) => void) | null): void;
}
export declare namespace _PictureFactory {
    function setOnDispose(value: ((picture: Picture) => void) | null): void;
}
export declare namespace _PictureFactory {
    const onCreate: ((picture: Readonly<{
        "__flaxBound:dart:ui::Picture": readonly [];
    }>) => void) | null;
}
export declare namespace _PictureFactory {
    const onDispose: ((picture: Readonly<{
        "__flaxBound:dart:ui::Picture": readonly [];
    }>) => void) | null;
}
export declare const Picture: typeof _PictureFactory & _FlaxInstanceType<Picture> & _FlaxDartType<Picture, readonly ["class", "flax.core/sdk_dart_ui#type:Picture", readonly [], false]>;
