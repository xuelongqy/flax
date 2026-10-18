import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CrossFadeState extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/animated_cross_fade.dart::CrossFadeState">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/animated_cross_fade.dart::CrossFadeState": readonly [];
}> {
    readonly __CrossFadeState: unique symbol;
    readonly [_flaxDartTypeValue]: CrossFadeState;
    readonly name: string;
    readonly index: number;
}
export declare const CrossFadeState: Readonly<{
    showFirst: CrossFadeState;
    showSecond: CrossFadeState;
    values: readonly CrossFadeState[];
} & _FlaxInstanceType<CrossFadeState> & _FlaxDartType<CrossFadeState, readonly ["class", "flax.core/sdk_widgets#type:CrossFadeState", readonly [], false]>>;
