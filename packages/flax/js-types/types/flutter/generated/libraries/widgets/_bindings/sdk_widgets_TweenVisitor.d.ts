import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
export type TweenVisitor<T extends {} = {}> = ((tween: (Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [T];
}> & Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [T];
}>) | null, targetValue: T, constructor: ((targetValue: T) => Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [T];
}> & Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [T];
}>)) => upstream0.Tween<T> | null);
export type TweenVisitorInput<T extends {} = {}> = ((tween: upstream0.Tween<T> | null, targetValue: T, constructor: ((targetValue: T) => upstream0.Tween<T>)) => (Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [T];
}> & Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [T];
}>) | null);
