import { type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_GlobalKey';
import '@flax/flutter/widgets/_bindings/sdk_widgets_GlobalKey';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
export type ExitWidgetSelectionButtonBuilder = ((context: upstream0.BuildContext, options: {
    key: Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::GlobalKey": readonly [upstream2.State<upstream3.StatefulWidget>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }>;
    onPressed: (() => void);
    semanticsLabel: string;
}) => Widget);
export type ExitWidgetSelectionButtonBuilderInput = ((context: upstream0.BuildContext, options: {
    key: upstream1.GlobalKey<upstream2.State<upstream3.StatefulWidget>>;
    onPressed: (() => void);
    semanticsLabel: string;
}) => Widget);
