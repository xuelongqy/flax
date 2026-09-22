import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_Decoration';
import '@flax/flutter/widgets/_bindings/flutter_Decoration';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_DecorationPosition';
export interface DecoratedBox extends WidgetDescription {
    readonly type: "flax.core/flutter#type:DecoratedBox";
}
export declare function DecoratedBox(options: {
    key?: upstream0.Key | null | undefined;
    decoration: Bindable<upstream1.Decoration>;
    position?: Bindable<upstream2.DecorationPosition> | undefined;
    child?: Bindable<Widget | null> | undefined;
}): DecoratedBox;
