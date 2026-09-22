import { type DartListInput, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_TextDirection';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_Clip';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_StackFit';
export interface IndexedStack extends WidgetDescription {
    readonly type: "flax.core/flutter#type:IndexedStack";
}
export declare function IndexedStack(options?: {
    key?: upstream0.Key | null | undefined;
    alignment?: Bindable<upstream1.AlignmentGeometry> | undefined;
    textDirection?: Bindable<upstream2.TextDirection | null> | undefined;
    clipBehavior?: Bindable<upstream3.Clip> | undefined;
    sizing?: Bindable<upstream4.StackFit> | undefined;
    index?: Bindable<number | null> | undefined;
    children?: Bindable<DartListInput<Widget, Widget>> | undefined;
}): IndexedStack;
