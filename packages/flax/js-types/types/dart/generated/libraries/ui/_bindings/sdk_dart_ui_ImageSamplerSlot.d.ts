import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ImageSamplerSlot extends Readonly<{
    "__flaxBound:dart:ui::ImageSamplerSlot": readonly [];
}> {
    readonly __ImageSamplerSlot: unique symbol;
    readonly [_flaxDartTypeValue]: ImageSamplerSlot;
    readonly shaderIndex: number;
    readonly name: string;
    set(val: Readonly<{
        "__flaxBound:dart:ui::Image": readonly [];
    }>): void;
}
export declare const ImageSamplerSlot: object & _FlaxInstanceType<ImageSamplerSlot> & _FlaxDartType<ImageSamplerSlot, readonly ["class", "flax.core/sdk_dart_ui#type:ImageSamplerSlot", readonly [], false]>;
