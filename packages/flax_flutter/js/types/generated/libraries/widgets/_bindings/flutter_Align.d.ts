import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
export interface Align extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Align";
}
export declare function Align(options?: {
    key?: upstream0.Key | null | undefined;
    alignment?: Bindable<upstream1.AlignmentGeometry> | undefined;
    widthFactor?: Bindable<number | null> | undefined;
    heightFactor?: Bindable<number | null> | undefined;
    child?: Bindable<Widget | null> | undefined;
}): Align;
