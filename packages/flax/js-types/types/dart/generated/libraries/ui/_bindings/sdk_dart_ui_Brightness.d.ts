import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Brightness extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::Brightness">, Readonly<{
    "__flaxBound:dart:ui::Brightness": readonly [];
}> {
    readonly __Brightness: unique symbol;
    readonly [_flaxDartTypeValue]: Brightness;
    readonly name: string;
    readonly index: number;
}
export declare const Brightness: Readonly<{
    dark: Brightness;
    light: Brightness;
    values: readonly Brightness[];
} & _FlaxInstanceType<Brightness> & _FlaxDartType<Brightness, readonly ["class", "flax.core/sdk_dart_ui#type:Brightness", readonly [], false]>>;
