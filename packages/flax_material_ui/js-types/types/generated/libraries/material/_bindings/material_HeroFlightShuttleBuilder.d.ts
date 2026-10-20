import { type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_HeroFlightDirection';
import '@flax/flutter/widgets/_bindings/sdk_widgets_HeroFlightDirection';
export type HeroFlightShuttleBuilder = ((flightContext: upstream0.BuildContext, animation: Readonly<{
    "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
}>, flightDirection: upstream2.HeroFlightDirection, fromHeroContext: upstream0.BuildContext, toHeroContext: upstream0.BuildContext) => Widget);
export type HeroFlightShuttleBuilderInput = ((flightContext: upstream0.BuildContext, animation: upstream1.Animation<number>, flightDirection: upstream2.HeroFlightDirection, fromHeroContext: upstream0.BuildContext, toHeroContext: upstream0.BuildContext) => Widget);
