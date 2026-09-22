import { type DartValue, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Route';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
export interface MaterialPageRoute<T extends unknown | null = unknown | null> extends DartValue, Omit<upstream0.Route<T>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:material_ui/src/page.dart::MaterialPageRoute": readonly [T];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/pages.dart::PageRoute": readonly [T];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::ModalRoute": readonly [T];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::TransitionRoute": readonly [T];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::OverlayRoute": readonly [T];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::PredictiveBackRoute": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::LocalHistoryRoute": readonly [T];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:material_ui/src/page.dart::MaterialRouteTransitionMixin": readonly [T];
}>, 'type'> {
    readonly type: "flax.material/material#type:MaterialPageRoute";
    readonly __MaterialPageRoute: unique symbol;
}
export declare function MaterialPageRoute<T extends unknown | null = unknown | null>(options: {
    builder: ((context: upstream1.BuildContext) => Widget);
    settings?: upstream2.RouteSettings | null | undefined;
    maintainState?: boolean | undefined;
    fullscreenDialog?: boolean | undefined;
}): MaterialPageRoute<T>;
