import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
export interface NavigationDestination extends WidgetDescription {
    readonly type: "flax.material/material#type:NavigationDestination";
}
export declare function NavigationDestination(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    icon: Bindable<Widget>;
    selectedIcon?: Bindable<Widget | null> | undefined;
    label: Bindable<string>;
    tooltip?: Bindable<string | null> | undefined;
    enabled?: Bindable<boolean> | undefined;
}): NavigationDestination;
