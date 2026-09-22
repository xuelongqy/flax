import { type Bindable, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
export interface Switch extends WidgetDescription {
    readonly type: "flax.material/material#type:Switch";
}
export declare function Switch(options: {
    key?: upstream0.Key | null | undefined;
    value: Bindable<boolean>;
    onChanged: Bindable<((value: boolean) => void) | null>;
    activeThumbColor?: Bindable<upstream1.Color | null> | undefined;
    activeTrackColor?: Bindable<upstream1.Color | null> | undefined;
    inactiveThumbColor?: Bindable<upstream1.Color | null> | undefined;
    focusNode?: Bindable<upstream2.FocusNode | null> | undefined;
    autofocus?: Bindable<boolean> | undefined;
    padding?: Bindable<upstream3.EdgeInsetsGeometry | null> | undefined;
}): Switch;
