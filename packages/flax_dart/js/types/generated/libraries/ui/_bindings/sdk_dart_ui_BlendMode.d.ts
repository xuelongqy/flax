import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BlendMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::BlendMode">, Readonly<{
    "__flaxBound:dart:ui::BlendMode": readonly [];
}> {
    readonly __BlendMode: unique symbol;
    readonly [_flaxDartTypeValue]: BlendMode;
    readonly name: string;
    readonly index: number;
}
export declare const BlendMode: Readonly<{
    clear: BlendMode;
    src: BlendMode;
    dst: BlendMode;
    srcOver: BlendMode;
    dstOver: BlendMode;
    srcIn: BlendMode;
    dstIn: BlendMode;
    srcOut: BlendMode;
    dstOut: BlendMode;
    srcATop: BlendMode;
    dstATop: BlendMode;
    xor: BlendMode;
    plus: BlendMode;
    modulate: BlendMode;
    screen: BlendMode;
    overlay: BlendMode;
    darken: BlendMode;
    lighten: BlendMode;
    colorDodge: BlendMode;
    colorBurn: BlendMode;
    hardLight: BlendMode;
    softLight: BlendMode;
    difference: BlendMode;
    exclusion: BlendMode;
    multiply: BlendMode;
    hue: BlendMode;
    saturation: BlendMode;
    color: BlendMode;
    luminosity: BlendMode;
    values: readonly BlendMode[];
} & _FlaxInstanceType<BlendMode> & _FlaxDartType<BlendMode, readonly ["class", "flax.core/sdk_dart_ui#type:BlendMode", readonly [], false]>>;
