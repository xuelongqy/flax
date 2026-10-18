import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface StrokeJoin extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::StrokeJoin">, Readonly<{
    "__flaxBound:dart:ui::StrokeJoin": readonly [];
}> {
    readonly __StrokeJoin: unique symbol;
    readonly [_flaxDartTypeValue]: StrokeJoin;
    readonly name: string;
    readonly index: number;
}
export declare const StrokeJoin: Readonly<{
    miter: StrokeJoin;
    round: StrokeJoin;
    bevel: StrokeJoin;
    values: readonly StrokeJoin[];
} & _FlaxInstanceType<StrokeJoin> & _FlaxDartType<StrokeJoin, readonly ["class", "flax.core/sdk_dart_ui#type:StrokeJoin", readonly [], false]>>;
