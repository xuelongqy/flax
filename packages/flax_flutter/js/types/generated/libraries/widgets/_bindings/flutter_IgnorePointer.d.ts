import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
export interface IgnorePointer extends WidgetDescription {
    readonly type: "flax.core/flutter#type:IgnorePointer";
}
export declare function IgnorePointer(options?: {
    key?: upstream0.Key | null | undefined;
    ignoring?: Bindable<boolean> | undefined;
    child?: Bindable<Widget | null> | undefined;
}): IgnorePointer;
