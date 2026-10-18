import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Thumb extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/material/slider_theme.dart::Thumb">, Readonly<{
    "__flaxBound:package:flutter/src/material/slider_theme.dart::Thumb": readonly [];
}> {
    readonly __Thumb: unique symbol;
    readonly [_flaxDartTypeValue]: Thumb;
    readonly name: string;
    readonly index: number;
}
export declare const Thumb: Readonly<{
    start: Thumb;
    end: Thumb;
    values: readonly Thumb[];
} & _FlaxInstanceType<Thumb> & _FlaxDartType<Thumb, readonly ["class", "flax.core/sdk_material#type:Thumb", readonly [], false]>>;
