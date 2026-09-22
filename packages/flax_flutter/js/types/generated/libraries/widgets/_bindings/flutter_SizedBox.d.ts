import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
export interface SizedBox extends WidgetDescription {
    readonly type: "flax.core/flutter#type:SizedBox";
}
export declare function SizedBox(options?: {
    key?: upstream0.Key | null | undefined;
    width?: Bindable<number | null> | undefined;
    height?: Bindable<number | null> | undefined;
    child?: Bindable<Widget | null> | undefined;
}): SizedBox;
