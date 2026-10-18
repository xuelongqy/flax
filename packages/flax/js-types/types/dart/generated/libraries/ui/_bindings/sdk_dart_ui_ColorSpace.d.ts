import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ColorSpace extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::ColorSpace">, Readonly<{
    "__flaxBound:dart:ui::ColorSpace": readonly [];
}> {
    readonly __ColorSpace: unique symbol;
    readonly [_flaxDartTypeValue]: ColorSpace;
    readonly name: string;
    readonly index: number;
}
export declare const ColorSpace: Readonly<{
    sRGB: ColorSpace;
    extendedSRGB: ColorSpace;
    displayP3: ColorSpace;
    values: readonly ColorSpace[];
} & _FlaxInstanceType<ColorSpace> & _FlaxDartType<ColorSpace, readonly ["class", "flax.core/sdk_dart_ui#type:ColorSpace", readonly [], false]>>;
