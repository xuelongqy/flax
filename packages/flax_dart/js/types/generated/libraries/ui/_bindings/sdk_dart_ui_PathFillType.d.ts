import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PathFillType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::PathFillType">, Readonly<{
    "__flaxBound:dart:ui::PathFillType": readonly [];
}> {
    readonly __PathFillType: unique symbol;
    readonly [_flaxDartTypeValue]: PathFillType;
    readonly name: string;
    readonly index: number;
}
export declare const PathFillType: Readonly<{
    nonZero: PathFillType;
    evenOdd: PathFillType;
    values: readonly PathFillType[];
} & _FlaxInstanceType<PathFillType> & _FlaxDartType<PathFillType, readonly ["class", "flax.core/sdk_dart_ui#type:PathFillType", readonly [], false]>>;
