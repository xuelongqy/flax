import { type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_SelectableRegionState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SelectableRegionState';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_SelectableRegion';
export type SelectableRegionContextMenuBuilder = ((context: upstream0.BuildContext, selectableRegionState: Readonly<{
    "__flaxBound:package:flutter/src/widgets/selectable_region.dart::SelectableRegionState": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream2.SelectableRegion];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionRegistrar": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
}>) => Widget);
export type SelectableRegionContextMenuBuilderInput = ((context: upstream0.BuildContext, selectableRegionState: upstream1.SelectableRegionState) => Widget);
