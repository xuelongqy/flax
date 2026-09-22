import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
export interface Expanded extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Expanded";
}
export declare function Expanded(options: {
    key?: upstream0.Key | null | undefined;
    flex?: Bindable<number> | undefined;
    child: Bindable<Widget>;
}): Expanded;
