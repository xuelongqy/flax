import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DynamicSchemeVariant extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/material/color_scheme.dart::DynamicSchemeVariant">, Readonly<{
    "__flaxBound:package:flutter/src/material/color_scheme.dart::DynamicSchemeVariant": readonly [];
}> {
    readonly __DynamicSchemeVariant: unique symbol;
    readonly [_flaxDartTypeValue]: DynamicSchemeVariant;
    readonly name: string;
    readonly index: number;
}
export declare const DynamicSchemeVariant: Readonly<{
    tonalSpot: DynamicSchemeVariant;
    fidelity: DynamicSchemeVariant;
    monochrome: DynamicSchemeVariant;
    neutral: DynamicSchemeVariant;
    vibrant: DynamicSchemeVariant;
    expressive: DynamicSchemeVariant;
    content: DynamicSchemeVariant;
    rainbow: DynamicSchemeVariant;
    fruitSalad: DynamicSchemeVariant;
    values: readonly DynamicSchemeVariant[];
} & _FlaxInstanceType<DynamicSchemeVariant> & _FlaxDartType<DynamicSchemeVariant, readonly ["class", "flax.core/sdk_material#type:DynamicSchemeVariant", readonly [], false]>>;
