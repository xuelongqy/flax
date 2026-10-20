import { type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_ViewportOffset';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ViewportOffset';
export type ViewportBuilder = ((context: upstream0.BuildContext, position: Readonly<{
    "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}>) => Widget);
export type ViewportBuilderInput = ((context: upstream0.BuildContext, position: upstream1.ViewportOffset) => Widget);
