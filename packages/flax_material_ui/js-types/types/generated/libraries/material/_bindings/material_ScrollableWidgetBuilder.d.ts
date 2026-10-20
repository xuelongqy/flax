import { type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import '@flax/flutter/widgets/_bindings/flutter_ScrollController';
export type ScrollableWidgetBuilder = ((context: upstream0.BuildContext, scrollController: Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}>) => Widget);
export type ScrollableWidgetBuilderInput = ((context: upstream0.BuildContext, scrollController: upstream1.ScrollController) => Widget);
