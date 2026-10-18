import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ImageByteFormat extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::ImageByteFormat">, Readonly<{
    "__flaxBound:dart:ui::ImageByteFormat": readonly [];
}> {
    readonly __ImageByteFormat: unique symbol;
    readonly [_flaxDartTypeValue]: ImageByteFormat;
    readonly name: string;
    readonly index: number;
}
export declare const ImageByteFormat: Readonly<{
    rawRgba: ImageByteFormat;
    rawStraightRgba: ImageByteFormat;
    rawUnmodified: ImageByteFormat;
    rawExtendedRgba128: ImageByteFormat;
    png: ImageByteFormat;
    values: readonly ImageByteFormat[];
} & _FlaxInstanceType<ImageByteFormat> & _FlaxDartType<ImageByteFormat, readonly ["class", "flax.core/sdk_dart_ui#type:ImageByteFormat", readonly [], false]>>;
