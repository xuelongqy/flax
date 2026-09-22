import { type DartListInput, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/material/_bindings/material_NavigationDestinationLabelBehavior';
export interface NavigationBar extends WidgetDescription {
    readonly type: "flax.material/material#type:NavigationBar";
}
export declare function NavigationBar(options: {
    key?: upstream0.Key | null | undefined;
    selectedIndex?: Bindable<number> | undefined;
    destinations: Bindable<DartListInput<Widget, Widget>>;
    onDestinationSelected?: Bindable<((value: number) => void) | null> | undefined;
    backgroundColor?: Bindable<upstream1.Color | null> | undefined;
    elevation?: Bindable<number | null> | undefined;
    shadowColor?: Bindable<upstream1.Color | null> | undefined;
    indicatorColor?: Bindable<upstream1.Color | null> | undefined;
    height?: Bindable<number | null> | undefined;
    labelBehavior?: Bindable<upstream2.NavigationDestinationLabelBehavior | null> | undefined;
}): NavigationBar;
