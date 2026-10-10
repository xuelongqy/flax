import { type FlaxInstanceType as _FlaxInstanceType, type NavigationData, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
export interface NavigatorPopHandler<T extends unknown | null = unknown | null> extends WidgetDescription {
    readonly type: "flax.core/flutter#type:NavigatorPopHandler";
}
declare function _NavigatorPopHandlerFactory<T extends unknown | null = unknown | null>(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    onPopWithResult?: Bindable<((result: NavigationData | null) => void) | null> | undefined;
    enabled?: Bindable<boolean> | undefined;
    child: Bindable<Widget>;
}): NavigatorPopHandler<T>;
export declare const NavigatorPopHandler: typeof _NavigatorPopHandlerFactory & _FlaxInstanceType<NavigatorPopHandler<any>>;
export {};
