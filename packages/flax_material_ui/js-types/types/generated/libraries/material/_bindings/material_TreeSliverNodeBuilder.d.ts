import { type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_TreeSliverNode';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TreeSliverNode';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationStyle';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationStyle';
export type TreeSliverNodeBuilder = ((context: upstream0.BuildContext, node: Readonly<{
    "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null];
}>, animationStyle: Readonly<{
    "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>) => Widget);
export type TreeSliverNodeBuilderInput = ((context: upstream0.BuildContext, node: upstream1.TreeSliverNode<unknown | null>, animationStyle: upstream2.AnimationStyle) => Widget);
