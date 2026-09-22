import { type DartListInput, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_MainAxisAlignment';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_MainAxisSize';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_CrossAxisAlignment';
import type * as upstream4 from '@flax/flutter/services/_bindings/flutter_TextDirection';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_VerticalDirection';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_TextBaseline';
export interface Row extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Row";
}
export declare function Row(options?: {
    key?: upstream0.Key | null | undefined;
    mainAxisAlignment?: Bindable<upstream1.MainAxisAlignment> | undefined;
    mainAxisSize?: Bindable<upstream2.MainAxisSize> | undefined;
    crossAxisAlignment?: Bindable<upstream3.CrossAxisAlignment> | undefined;
    textDirection?: Bindable<upstream4.TextDirection | null> | undefined;
    verticalDirection?: Bindable<upstream5.VerticalDirection> | undefined;
    textBaseline?: Bindable<upstream6.TextBaseline | null> | undefined;
    spacing?: Bindable<number> | undefined;
    children?: Bindable<DartListInput<Widget, Widget>> | undefined;
}): Row;
