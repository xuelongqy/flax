import { type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_ViewportOffset';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ViewportOffset';
export type TwoDimensionalViewportBuilder = ((context: upstream0.BuildContext, verticalPosition: Readonly<{
    "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}>, horizontalPosition: Readonly<{
    "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}>) => Widget);
export type TwoDimensionalViewportBuilderInput = ((context: upstream0.BuildContext, verticalPosition: upstream1.ViewportOffset, horizontalPosition: upstream1.ViewportOffset) => Widget);
