import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface StrokeCap extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::StrokeCap">, Readonly<{
    "__flaxBound:dart:ui::StrokeCap": readonly [];
}> {
    readonly __StrokeCap: unique symbol;
    readonly [_flaxDartTypeValue]: StrokeCap;
    readonly name: string;
    readonly index: number;
}
export declare const StrokeCap: Readonly<{
    butt: StrokeCap;
    round: StrokeCap;
    square: StrokeCap;
    values: readonly StrokeCap[];
} & _FlaxInstanceType<StrokeCap> & _FlaxDartType<StrokeCap, readonly ["class", "flax.core/sdk_dart_ui#type:StrokeCap", readonly [], false]>>;
