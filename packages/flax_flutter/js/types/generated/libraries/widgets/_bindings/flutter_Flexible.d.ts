import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_FlexFit';
export interface Flexible extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Flexible";
}
export declare function Flexible(options: {
    key?: upstream0.Key | null | undefined;
    flex?: Bindable<number> | undefined;
    fit?: Bindable<upstream1.FlexFit> | undefined;
    child: Bindable<Widget>;
}): Flexible;
