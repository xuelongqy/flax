import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BoxFit';
import '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_Clip';
export interface FittedBox extends WidgetDescription {
    readonly type: "flax.core/flutter#type:FittedBox";
}
export declare function FittedBox(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    fit?: Bindable<upstream1.BoxFit> | undefined;
    alignment?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }>> | undefined;
    clipBehavior?: Bindable<upstream3.Clip> | undefined;
    child?: Bindable<Widget | null> | undefined;
}): FittedBox;
