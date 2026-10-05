import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
export interface Align extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Align";
}
export declare function Align(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    alignment?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }>> | undefined;
    widthFactor?: Bindable<number | null> | undefined;
    heightFactor?: Bindable<number | null> | undefined;
    child?: Bindable<Widget | null> | undefined;
}): Align;
