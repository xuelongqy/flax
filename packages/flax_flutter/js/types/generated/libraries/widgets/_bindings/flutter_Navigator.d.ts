import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput, type Bindable, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_Page';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_Route';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
export interface Navigator extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Navigator";
}
declare function _NavigatorFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    pages?: Bindable<DartListInput<upstream1.Page<unknown | null>, upstream1.Page<unknown | null>>> | undefined;
    initialRoute?: Bindable<string | null> | undefined;
    onGenerateRoute?: Bindable<((settings: upstream3.RouteSettings) => upstream2.Route<unknown | null> | null) | null> | undefined;
    onUnknownRoute?: Bindable<((settings: upstream3.RouteSettings) => upstream2.Route<unknown | null> | null) | null> | undefined;
    observers?: Bindable<DartListInput<upstream4.NavigatorObserver, Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::NavigatorObserver": readonly [];
    }>>> | undefined;
    onDidRemovePage?: Bindable<((page: upstream1.Page<unknown | null>) => void) | null> | undefined;
}): Navigator;
declare namespace _NavigatorFactory {
    function of(context: upstream6.BuildContext, options?: {
        rootNavigator?: boolean | undefined;
    }): upstream5.NavigatorState;
}
export declare const Navigator: typeof _NavigatorFactory & _FlaxInstanceType<Navigator>;
export {};
