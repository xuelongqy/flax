import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextDecorationStyle extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::TextDecorationStyle">, Readonly<{
    "__flaxBound:dart:ui::TextDecorationStyle": readonly [];
}> {
    readonly __TextDecorationStyle: unique symbol;
    readonly [_flaxDartTypeValue]: TextDecorationStyle;
    readonly name: string;
    readonly index: number;
}
export declare const TextDecorationStyle: Readonly<{
    solid: TextDecorationStyle;
    double: TextDecorationStyle;
    dotted: TextDecorationStyle;
    dashed: TextDecorationStyle;
    wavy: TextDecorationStyle;
    values: readonly TextDecorationStyle[];
} & _FlaxInstanceType<TextDecorationStyle> & _FlaxDartType<TextDecorationStyle, readonly ["class", "flax.core/sdk_dart_ui#type:TextDecorationStyle", readonly [], false]>>;
