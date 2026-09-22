import { type DartListInput, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_Axis';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_WrapAlignment';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_WrapCrossAlignment';
import type * as upstream4 from '@flax/flutter/services/_bindings/flutter_TextDirection';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_VerticalDirection';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_Clip';
export interface Wrap extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Wrap";
}
export declare function Wrap(options?: {
    key?: upstream0.Key | null | undefined;
    direction?: Bindable<upstream1.Axis> | undefined;
    alignment?: Bindable<upstream2.WrapAlignment> | undefined;
    spacing?: Bindable<number> | undefined;
    runAlignment?: Bindable<upstream2.WrapAlignment> | undefined;
    runSpacing?: Bindable<number> | undefined;
    crossAxisAlignment?: Bindable<upstream3.WrapCrossAlignment> | undefined;
    textDirection?: Bindable<upstream4.TextDirection | null> | undefined;
    verticalDirection?: Bindable<upstream5.VerticalDirection> | undefined;
    clipBehavior?: Bindable<upstream6.Clip> | undefined;
    children?: Bindable<DartListInput<Widget, Widget>> | undefined;
}): Wrap;
