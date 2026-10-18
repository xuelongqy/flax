import { type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
export type CupertinoToolbarBuilder = ((context: upstream0.BuildContext, anchorAbove: Readonly<{
    "__flaxBound:dart:ui::Offset": readonly [];
}> & Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}>, anchorBelow: Readonly<{
    "__flaxBound:dart:ui::Offset": readonly [];
}> & Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}>, child: Widget) => Widget);
export type CupertinoToolbarBuilderInput = ((context: upstream0.BuildContext, anchorAbove: upstream1.Offset, anchorBelow: upstream1.Offset, child: Widget) => Widget);
