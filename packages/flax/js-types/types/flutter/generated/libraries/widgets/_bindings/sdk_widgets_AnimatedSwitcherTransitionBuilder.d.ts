import { type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
export type AnimatedSwitcherTransitionBuilder = ((child: Widget, animation: Readonly<{
    "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
}>) => Widget);
export type AnimatedSwitcherTransitionBuilderInput = ((child: Widget, animation: upstream0.Animation<number>) => Widget);
