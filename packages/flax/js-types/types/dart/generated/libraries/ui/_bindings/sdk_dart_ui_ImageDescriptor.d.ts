import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_PixelFormat';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PixelFormat';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Codec';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Codec';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_TargetPixelFormat';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TargetPixelFormat';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ImageDescriptor extends Readonly<{
    "__flaxBound:dart:ui::ImageDescriptor": readonly [];
}> {
    readonly __ImageDescriptor: unique symbol;
    readonly [_flaxDartTypeValue]: ImageDescriptor;
    readonly width: number;
    readonly height: number;
    readonly bytesPerPixel: number;
    dispose(): void;
    instantiateCodec(options?: {
        targetFormat?: upstream3.TargetPixelFormat | undefined;
        targetHeight?: number | null | undefined;
        targetWidth?: number | null | undefined;
    }): Promise<upstream2.Codec>;
}
export declare namespace _ImageDescriptorFactory {
    function raw(buffer: Readonly<{
        "__flaxBound:dart:ui::ImmutableBuffer": readonly [];
    }>, options: {
        width: number;
        height: number;
        rowBytes?: number | null | undefined;
        pixelFormat: upstream1.PixelFormat;
    }): ImageDescriptor;
}
export declare namespace _ImageDescriptorFactory {
    function implement(args: [], implementation: {
        dispose: (() => void);
        instantiateCodec: ((options?: {
            targetWidth?: number | null | undefined;
            targetHeight?: number | null | undefined;
            targetFormat?: upstream3.TargetPixelFormat | undefined;
        }) => Promise<Readonly<{
            "__flaxBound:dart:ui::Codec": readonly [];
        }>>);
        get width(): number;
        get height(): number;
        get bytesPerPixel(): number;
    }): ImageDescriptor;
}
export declare namespace _ImageDescriptorFactory {
    function encoded(buffer: Readonly<{
        "__flaxBound:dart:ui::ImmutableBuffer": readonly [];
    }>): Promise<ImageDescriptor>;
}
export declare const ImageDescriptor: typeof _ImageDescriptorFactory & _FlaxInstanceType<ImageDescriptor> & _FlaxDartType<ImageDescriptor, readonly ["class", "flax.core/sdk_dart_ui#type:ImageDescriptor", readonly [], false]>;
