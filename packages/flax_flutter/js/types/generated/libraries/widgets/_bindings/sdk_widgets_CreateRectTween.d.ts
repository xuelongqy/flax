import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
export type CreateRectTween = ((begin: Readonly<{
    "__flaxBound:dart:ui::Rect": readonly [];
}> | null, end: Readonly<{
    "__flaxBound:dart:ui::Rect": readonly [];
}> | null) => upstream0.Tween<upstream1.Rect | null>);
export type CreateRectTweenInput = ((begin: upstream1.Rect | null, end: upstream1.Rect | null) => Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [upstream1.Rect | null];
}> & Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [upstream1.Rect | null];
}>);
