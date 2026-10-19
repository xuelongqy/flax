import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_Draggable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
export type DragAnchorStrategy = ((draggable: upstream1.Draggable<any>, context: upstream2.BuildContext, position: Readonly<{
    "__flaxBound:dart:ui::Offset": readonly [];
}> & Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}>) => upstream0.Offset);
export type DragAnchorStrategyInput = ((draggable: upstream1.Draggable<any>, context: upstream2.BuildContext, position: upstream0.Offset) => Readonly<{
    "__flaxBound:dart:ui::Offset": readonly [];
}> & Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}>);
