import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/material/_bindings/material_MaterialType';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_Clip';
export interface Material extends WidgetDescription {
    readonly type: "flax.material/material#type:Material";
}
export declare function Material(options?: {
    key?: upstream0.Key | null | undefined;
    type?: Bindable<upstream1.MaterialType> | undefined;
    elevation?: Bindable<number> | undefined;
    color?: Bindable<upstream2.Color | null> | undefined;
    shadowColor?: Bindable<upstream2.Color | null> | undefined;
    surfaceTintColor?: Bindable<upstream2.Color | null> | undefined;
    textStyle?: Bindable<upstream3.TextStyle | null> | undefined;
    borderRadius?: Bindable<upstream4.BorderRadiusGeometry | null> | undefined;
    shape?: Bindable<upstream5.ShapeBorder | null> | undefined;
    clipBehavior?: Bindable<upstream6.Clip> | undefined;
    child?: Bindable<Widget | null> | undefined;
}): Material;
