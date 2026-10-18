import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AnimationBehavior extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/animation/animation_controller.dart::AnimationBehavior">, Readonly<{
    "__flaxBound:package:flutter/src/animation/animation_controller.dart::AnimationBehavior": readonly [];
}> {
    readonly __AnimationBehavior: unique symbol;
    readonly [_flaxDartTypeValue]: AnimationBehavior;
    readonly name: string;
    readonly index: number;
}
export declare const AnimationBehavior: Readonly<{
    normal: AnimationBehavior;
    preserve: AnimationBehavior;
    values: readonly AnimationBehavior[];
} & _FlaxInstanceType<AnimationBehavior> & _FlaxDartType<AnimationBehavior, readonly ["class", "flax.core/sdk_animation#type:AnimationBehavior", readonly [], false]>>;
