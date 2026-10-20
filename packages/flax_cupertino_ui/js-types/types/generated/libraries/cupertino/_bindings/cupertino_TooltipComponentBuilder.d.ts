import { type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
export type TooltipComponentBuilder = ((context: upstream0.BuildContext, animation: Readonly<{
    "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
}>) => Widget);
export type TooltipComponentBuilderInput = ((context: upstream0.BuildContext, animation: upstream1.Animation<number>) => Widget);
