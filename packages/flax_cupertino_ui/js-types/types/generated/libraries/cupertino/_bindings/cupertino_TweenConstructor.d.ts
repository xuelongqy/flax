import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
export type TweenConstructor<T extends {} = {}> = ((targetValue: T) => upstream0.Tween<T>);
export type TweenConstructorInput<T extends {} = {}> = ((targetValue: T) => Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [T];
}> & Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [T];
}>);
