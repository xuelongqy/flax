import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ImageRepeat extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/painting/decoration_image.dart::ImageRepeat">, Readonly<{
    "__flaxBound:package:flutter/src/painting/decoration_image.dart::ImageRepeat": readonly [];
}> {
    readonly __ImageRepeat: unique symbol;
    readonly [_flaxDartTypeValue]: ImageRepeat;
    readonly name: string;
    readonly index: number;
}
export declare const ImageRepeat: Readonly<{
    repeat: ImageRepeat;
    repeatX: ImageRepeat;
    repeatY: ImageRepeat;
    noRepeat: ImageRepeat;
    values: readonly ImageRepeat[];
} & _FlaxInstanceType<ImageRepeat> & _FlaxDartType<ImageRepeat, readonly ["class", "flax.core/sdk_painting#type:ImageRepeat", readonly [], false]>>;
