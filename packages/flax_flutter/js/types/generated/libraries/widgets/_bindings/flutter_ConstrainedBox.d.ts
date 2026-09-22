import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BoxConstraints';
import '@flax/flutter/widgets/_bindings/flutter_BoxConstraints';
export interface ConstrainedBox extends WidgetDescription {
    readonly type: "flax.core/flutter#type:ConstrainedBox";
}
export declare function ConstrainedBox(options: {
    key?: upstream0.Key | null | undefined;
    constraints: Bindable<upstream1.BoxConstraints>;
    child?: Bindable<Widget | null> | undefined;
}): ConstrainedBox;
