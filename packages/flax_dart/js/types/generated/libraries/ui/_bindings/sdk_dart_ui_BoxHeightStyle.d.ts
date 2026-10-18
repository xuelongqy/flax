import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BoxHeightStyle extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::BoxHeightStyle">, Readonly<{
    "__flaxBound:dart:ui::BoxHeightStyle": readonly [];
}> {
    readonly __BoxHeightStyle: unique symbol;
    readonly [_flaxDartTypeValue]: BoxHeightStyle;
    readonly name: string;
    readonly index: number;
}
export declare const BoxHeightStyle: Readonly<{
    tight: BoxHeightStyle;
    max: BoxHeightStyle;
    includeLineSpacingMiddle: BoxHeightStyle;
    includeLineSpacingTop: BoxHeightStyle;
    includeLineSpacingBottom: BoxHeightStyle;
    strut: BoxHeightStyle;
    values: readonly BoxHeightStyle[];
} & _FlaxInstanceType<BoxHeightStyle> & _FlaxDartType<BoxHeightStyle, readonly ["class", "flax.core/sdk_dart_ui#type:BoxHeightStyle", readonly [], false]>>;
