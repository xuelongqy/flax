import { type Bindable, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
export interface Divider extends WidgetDescription {
    readonly type: "flax.material/material#type:Divider";
}
export declare function Divider(options?: {
    key?: upstream0.Key | null | undefined;
    height?: Bindable<number | null> | undefined;
    thickness?: Bindable<number | null> | undefined;
    indent?: Bindable<number | null> | undefined;
    endIndent?: Bindable<number | null> | undefined;
    color?: Bindable<upstream1.Color | null> | undefined;
    radius?: Bindable<upstream2.BorderRadiusGeometry | null> | undefined;
}): Divider;
