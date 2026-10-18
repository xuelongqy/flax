import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextWidthBasis extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/painting/text_painter.dart::TextWidthBasis">, Readonly<{
    "__flaxBound:package:flutter/src/painting/text_painter.dart::TextWidthBasis": readonly [];
}> {
    readonly __TextWidthBasis: unique symbol;
    readonly [_flaxDartTypeValue]: TextWidthBasis;
    readonly name: string;
    readonly index: number;
}
export declare const TextWidthBasis: Readonly<{
    parent: TextWidthBasis;
    longestLine: TextWidthBasis;
    values: readonly TextWidthBasis[];
} & _FlaxInstanceType<TextWidthBasis> & _FlaxDartType<TextWidthBasis, readonly ["class", "flax.core/sdk_painting#type:TextWidthBasis", readonly [], false]>>;
