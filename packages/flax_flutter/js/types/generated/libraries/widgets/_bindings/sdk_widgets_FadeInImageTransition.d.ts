import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FadeInImageTransition extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/fade_in_image.dart::FadeInImageTransition">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/fade_in_image.dart::FadeInImageTransition": readonly [];
}> {
    readonly __FadeInImageTransition: unique symbol;
    readonly [_flaxDartTypeValue]: FadeInImageTransition;
    readonly name: string;
    readonly index: number;
}
export declare const FadeInImageTransition: Readonly<{
    sequential: FadeInImageTransition;
    fadeInOver: FadeInImageTransition;
    values: readonly FadeInImageTransition[];
} & _FlaxInstanceType<FadeInImageTransition> & _FlaxDartType<FadeInImageTransition, readonly ["class", "flax.core/sdk_widgets#type:FadeInImageTransition", readonly [], false]>>;
