import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_TextDirection';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_Clip';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_StackFit';
export interface IndexedStack extends WidgetDescription {
    readonly type: "flax.core/flutter#type:IndexedStack";
}
declare function _IndexedStackFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    alignment?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }>> | undefined;
    textDirection?: Bindable<upstream2.TextDirection | null> | undefined;
    clipBehavior?: Bindable<upstream3.Clip> | undefined;
    sizing?: Bindable<upstream4.StackFit> | undefined;
    index?: Bindable<number | null> | undefined;
    children?: Bindable<DartListInput<Widget, Widget>> | undefined;
}): IndexedStack;
export declare const IndexedStack: typeof _IndexedStackFactory & _FlaxInstanceType<IndexedStack>;
export {};
