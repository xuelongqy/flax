import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SemanticsInputType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::SemanticsInputType">, Readonly<{
    "__flaxBound:dart:ui::SemanticsInputType": readonly [];
}> {
    readonly __SemanticsInputType: unique symbol;
    readonly [_flaxDartTypeValue]: SemanticsInputType;
    readonly name: string;
    readonly index: number;
}
export declare const SemanticsInputType: Readonly<{
    none: SemanticsInputType;
    text: SemanticsInputType;
    url: SemanticsInputType;
    phone: SemanticsInputType;
    search: SemanticsInputType;
    email: SemanticsInputType;
    values: readonly SemanticsInputType[];
} & _FlaxInstanceType<SemanticsInputType> & _FlaxDartType<SemanticsInputType, readonly ["class", "flax.core/sdk_dart_ui#type:SemanticsInputType", readonly [], false]>>;
