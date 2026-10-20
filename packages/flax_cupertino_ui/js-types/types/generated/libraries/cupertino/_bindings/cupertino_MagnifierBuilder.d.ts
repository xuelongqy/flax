import { type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_MagnifierController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MagnifierController';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_MagnifierInfo';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MagnifierInfo';
export type MagnifierBuilder = ((context: upstream0.BuildContext, controller: Readonly<{
    "__flaxBound:package:flutter/src/widgets/magnifier.dart::MagnifierController": readonly [];
}>, magnifierInfo: Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream3.MagnifierInfo];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream3.MagnifierInfo];
}>) => Widget | null);
export type MagnifierBuilderInput = ((context: upstream0.BuildContext, controller: upstream1.MagnifierController, magnifierInfo: upstream2.ValueNotifier<upstream3.MagnifierInfo>) => Widget | null);
