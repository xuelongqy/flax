import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BoxFit';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_Clip';
export interface FittedBox extends WidgetDescription {
    readonly type: "flax.core/flutter#type:FittedBox";
}
export declare function FittedBox(options?: {
    key?: upstream0.Key | null | undefined;
    fit?: Bindable<upstream1.BoxFit> | undefined;
    alignment?: Bindable<upstream2.AlignmentGeometry> | undefined;
    clipBehavior?: Bindable<upstream3.Clip> | undefined;
    child?: Bindable<Widget | null> | undefined;
}): FittedBox;
