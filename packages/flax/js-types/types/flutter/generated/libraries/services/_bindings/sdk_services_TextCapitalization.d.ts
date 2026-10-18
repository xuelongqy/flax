import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextCapitalization extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/services/text_input.dart::TextCapitalization">, Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::TextCapitalization": readonly [];
}> {
    readonly __TextCapitalization: unique symbol;
    readonly [_flaxDartTypeValue]: TextCapitalization;
    readonly name: string;
    readonly index: number;
}
export declare const TextCapitalization: Readonly<{
    words: TextCapitalization;
    sentences: TextCapitalization;
    characters: TextCapitalization;
    none: TextCapitalization;
    values: readonly TextCapitalization[];
} & _FlaxInstanceType<TextCapitalization> & _FlaxDartType<TextCapitalization, readonly ["class", "flax.core/sdk_services#type:TextCapitalization", readonly [], false]>>;
