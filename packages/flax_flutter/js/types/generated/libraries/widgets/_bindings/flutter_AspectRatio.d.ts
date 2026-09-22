import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
export interface AspectRatio extends WidgetDescription {
    readonly type: "flax.core/flutter#type:AspectRatio";
}
export declare function AspectRatio(options: {
    key?: upstream0.Key | null | undefined;
    aspectRatio: Bindable<number>;
    child?: Bindable<Widget | null> | undefined;
}): AspectRatio;
