import { type Bindable, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
export interface Spacer extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Spacer";
}
export declare function Spacer(options?: {
    key?: upstream0.Key | null | undefined;
    flex?: Bindable<number> | undefined;
}): Spacer;
