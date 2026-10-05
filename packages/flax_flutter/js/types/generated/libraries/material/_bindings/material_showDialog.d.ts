import { type NavigationData, type Widget } from '@flax/core/bindings';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
declare function _flaxTopLevel_showDialog<T extends NavigationData | null = NavigationData | null>(options: {
    barrierColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    barrierDismissible?: boolean | undefined;
    barrierLabel?: string | null | undefined;
    builder: ((context: upstream1.BuildContext) => Widget);
    context: upstream1.BuildContext;
    fullscreenDialog?: boolean | undefined;
    requestFocus?: boolean | null | undefined;
    routeSettings?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }> | null | undefined;
    useRootNavigator?: boolean | undefined;
    useSafeArea?: boolean | undefined;
}): Promise<T | null>;
export { _flaxTopLevel_showDialog as showDialog };
