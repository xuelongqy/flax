import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
export interface Padding extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Padding";
}
export declare function Padding(options: {
    key?: upstream0.Key | null | undefined;
    padding: Bindable<upstream1.EdgeInsetsGeometry>;
    child?: Bindable<Widget | null> | undefined;
}): Padding;
