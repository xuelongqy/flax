import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
export interface NavigationDestination extends WidgetDescription {
    readonly type: "flax.material/material#type:NavigationDestination";
}
export declare function NavigationDestination(options: {
    key?: upstream0.Key | null | undefined;
    icon: Bindable<Widget>;
    selectedIcon?: Bindable<Widget | null> | undefined;
    label: Bindable<string>;
    tooltip?: Bindable<string | null> | undefined;
    enabled?: Bindable<boolean> | undefined;
}): NavigationDestination;
