import { type DartListInput, type Widget } from '@flax/core/bindings';
import '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
declare function _flaxTopLevel_showAdaptiveAboutDialog(options: {
    anchorPoint?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    applicationIcon?: Widget | null | undefined;
    applicationLegalese?: string | null | undefined;
    applicationName?: string | null | undefined;
    applicationVersion?: string | null | undefined;
    barrierColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    barrierDismissible?: boolean | undefined;
    barrierLabel?: string | null | undefined;
    children?: DartListInput<Widget, Widget> | null | undefined;
    context: upstream2.BuildContext;
    routeSettings?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }> | null | undefined;
    useRootNavigator?: boolean | undefined;
}): void;
export { _flaxTopLevel_showAdaptiveAboutDialog as showAdaptiveAboutDialog };
