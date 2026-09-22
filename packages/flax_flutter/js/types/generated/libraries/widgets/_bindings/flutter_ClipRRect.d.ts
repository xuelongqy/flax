import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_Clip';
export interface ClipRRect extends WidgetDescription {
    readonly type: "flax.core/flutter#type:ClipRRect";
}
export declare function ClipRRect(options?: {
    key?: upstream0.Key | null | undefined;
    borderRadius?: Bindable<upstream1.BorderRadiusGeometry> | undefined;
    clipBehavior?: Bindable<upstream2.Clip> | undefined;
    child?: Bindable<Widget | null> | undefined;
}): ClipRRect;
