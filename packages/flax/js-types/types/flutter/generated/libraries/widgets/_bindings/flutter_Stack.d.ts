import { type DartListInput, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_TextDirection';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_StackFit';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_Clip';
export interface Stack extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Stack";
}
export declare function Stack(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    alignment?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }>> | undefined;
    textDirection?: Bindable<upstream2.TextDirection | null> | undefined;
    fit?: Bindable<upstream3.StackFit> | undefined;
    clipBehavior?: Bindable<upstream4.Clip> | undefined;
    children?: Bindable<DartListInput<Widget, Widget>> | undefined;
}): Stack;
