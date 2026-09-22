import { type Bindable, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
export interface Checkbox extends WidgetDescription {
    readonly type: "flax.material/material#type:Checkbox";
}
export declare function Checkbox(options: {
    key?: upstream0.Key | null | undefined;
    value: Bindable<boolean | null>;
    tristate?: Bindable<boolean> | undefined;
    onChanged: Bindable<((value: boolean | null) => void) | null>;
    activeColor?: Bindable<upstream1.Color | null> | undefined;
    fillColor?: Bindable<upstream2.WidgetStateProperty<upstream1.Color | null> | null> | undefined;
    checkColor?: Bindable<upstream1.Color | null> | undefined;
    overlayColor?: Bindable<upstream2.WidgetStateProperty<upstream1.Color | null> | null> | undefined;
    focusNode?: Bindable<upstream3.FocusNode | null> | undefined;
    autofocus?: Bindable<boolean> | undefined;
    isError?: Bindable<boolean> | undefined;
}): Checkbox;
