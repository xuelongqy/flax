import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_Axis';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import '@flax/flutter/widgets/_bindings/flutter_ScrollController';
export interface SingleChildScrollView extends WidgetDescription {
    readonly type: "flax.core/flutter#type:SingleChildScrollView";
}
export declare function SingleChildScrollView(options?: {
    key?: upstream0.Key | null | undefined;
    scrollDirection?: Bindable<upstream1.Axis> | undefined;
    reverse?: Bindable<boolean> | undefined;
    padding?: Bindable<upstream2.EdgeInsetsGeometry | null> | undefined;
    primary?: Bindable<boolean | null> | undefined;
    physics?: Bindable<upstream3.ScrollPhysics | null> | undefined;
    controller?: Bindable<upstream4.ScrollController | null> | undefined;
    child?: Bindable<Widget | null> | undefined;
}): SingleChildScrollView;
