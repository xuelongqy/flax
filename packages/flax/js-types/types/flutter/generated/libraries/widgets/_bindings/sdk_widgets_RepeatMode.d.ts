import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RepeatMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/repeating_animation_builder.dart::RepeatMode">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/repeating_animation_builder.dart::RepeatMode": readonly [];
}> {
    readonly __RepeatMode: unique symbol;
    readonly [_flaxDartTypeValue]: RepeatMode;
    readonly name: string;
    readonly index: number;
}
export declare const RepeatMode: Readonly<{
    restart: RepeatMode;
    reverse: RepeatMode;
    values: readonly RepeatMode[];
} & _FlaxInstanceType<RepeatMode> & _FlaxDartType<RepeatMode, readonly ["class", "flax.core/sdk_widgets#type:RepeatMode", readonly [], false]>>;
