import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BoxWidthStyle extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::BoxWidthStyle">, Readonly<{
    "__flaxBound:dart:ui::BoxWidthStyle": readonly [];
}> {
    readonly __BoxWidthStyle: unique symbol;
    readonly [_flaxDartTypeValue]: BoxWidthStyle;
    readonly name: string;
    readonly index: number;
}
export declare const BoxWidthStyle: Readonly<{
    tight: BoxWidthStyle;
    max: BoxWidthStyle;
    values: readonly BoxWidthStyle[];
} & _FlaxInstanceType<BoxWidthStyle> & _FlaxDartType<BoxWidthStyle, readonly ["class", "flax.core/sdk_dart_ui#type:BoxWidthStyle", readonly [], false]>>;
