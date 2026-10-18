import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BlurStyle extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::BlurStyle">, Readonly<{
    "__flaxBound:dart:ui::BlurStyle": readonly [];
}> {
    readonly __BlurStyle: unique symbol;
    readonly [_flaxDartTypeValue]: BlurStyle;
    readonly name: string;
    readonly index: number;
}
export declare const BlurStyle: Readonly<{
    normal: BlurStyle;
    solid: BlurStyle;
    outer: BlurStyle;
    inner: BlurStyle;
    values: readonly BlurStyle[];
} & _FlaxInstanceType<BlurStyle> & _FlaxDartType<BlurStyle, readonly ["class", "flax.core/sdk_dart_ui#type:BlurStyle", readonly [], false]>>;
