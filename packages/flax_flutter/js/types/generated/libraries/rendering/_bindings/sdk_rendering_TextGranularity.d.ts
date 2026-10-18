import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextGranularity extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/rendering/selection.dart::TextGranularity">, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::TextGranularity": readonly [];
}> {
    readonly __TextGranularity: unique symbol;
    readonly [_flaxDartTypeValue]: TextGranularity;
    readonly name: string;
    readonly index: number;
}
export declare const TextGranularity: Readonly<{
    character: TextGranularity;
    word: TextGranularity;
    paragraph: TextGranularity;
    line: TextGranularity;
    document: TextGranularity;
    values: readonly TextGranularity[];
} & _FlaxInstanceType<TextGranularity> & _FlaxDartType<TextGranularity, readonly ["class", "flax.core/sdk_rendering#type:TextGranularity", readonly [], false]>>;
