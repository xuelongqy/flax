import { type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
export type LayoutWidgetBuilder = ((context: upstream0.BuildContext, constraints: Readonly<{
    "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
}>) => Widget);
export type LayoutWidgetBuilderInput = ((context: upstream0.BuildContext, constraints: upstream1.BoxConstraints) => Widget);
