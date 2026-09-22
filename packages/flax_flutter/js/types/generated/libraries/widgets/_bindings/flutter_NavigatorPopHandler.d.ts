import { type NavigationData, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
export interface NavigatorPopHandler<T extends unknown | null = unknown | null> extends WidgetDescription {
    readonly type: "flax.core/flutter#type:NavigatorPopHandler";
}
export declare function NavigatorPopHandler<T extends unknown | null = unknown | null>(options: {
    key?: upstream0.Key | null | undefined;
    onPopWithResult?: Bindable<((result: NavigationData | null) => void) | null> | undefined;
    enabled?: Bindable<boolean> | undefined;
    child: Bindable<Widget>;
}): NavigatorPopHandler<T>;
