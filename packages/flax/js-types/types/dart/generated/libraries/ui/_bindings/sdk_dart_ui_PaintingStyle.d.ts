import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PaintingStyle extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::PaintingStyle">, Readonly<{
    "__flaxBound:dart:ui::PaintingStyle": readonly [];
}> {
    readonly __PaintingStyle: unique symbol;
    readonly [_flaxDartTypeValue]: PaintingStyle;
    readonly name: string;
    readonly index: number;
}
export declare const PaintingStyle: Readonly<{
    fill: PaintingStyle;
    stroke: PaintingStyle;
    values: readonly PaintingStyle[];
} & _FlaxInstanceType<PaintingStyle> & _FlaxDartType<PaintingStyle, readonly ["class", "flax.core/sdk_dart_ui#type:PaintingStyle", readonly [], false]>>;
