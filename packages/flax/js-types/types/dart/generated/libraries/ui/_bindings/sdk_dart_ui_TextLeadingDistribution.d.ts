import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextLeadingDistribution extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::TextLeadingDistribution">, Readonly<{
    "__flaxBound:dart:ui::TextLeadingDistribution": readonly [];
}> {
    readonly __TextLeadingDistribution: unique symbol;
    readonly [_flaxDartTypeValue]: TextLeadingDistribution;
    readonly name: string;
    readonly index: number;
}
export declare const TextLeadingDistribution: Readonly<{
    proportional: TextLeadingDistribution;
    even: TextLeadingDistribution;
    values: readonly TextLeadingDistribution[];
} & _FlaxInstanceType<TextLeadingDistribution> & _FlaxDartType<TextLeadingDistribution, readonly ["class", "flax.core/sdk_dart_ui#type:TextLeadingDistribution", readonly [], false]>>;
