import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PointMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::PointMode">, Readonly<{
    "__flaxBound:dart:ui::PointMode": readonly [];
}> {
    readonly __PointMode: unique symbol;
    readonly [_flaxDartTypeValue]: PointMode;
    readonly name: string;
    readonly index: number;
}
export declare const PointMode: Readonly<{
    points: PointMode;
    lines: PointMode;
    polygon: PointMode;
    values: readonly PointMode[];
} & _FlaxInstanceType<PointMode> & _FlaxDartType<PointMode, readonly ["class", "flax.core/sdk_dart_ui#type:PointMode", readonly [], false]>>;
