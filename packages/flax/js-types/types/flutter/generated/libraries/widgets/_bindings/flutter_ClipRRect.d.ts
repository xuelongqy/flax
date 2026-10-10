import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_Clip';
import '@flax/flutter/widgets/_bindings/flutter_Clip';
export interface ClipRRect extends WidgetDescription {
    readonly type: "flax.core/flutter#type:ClipRRect";
}
declare function _ClipRRectFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    borderRadius?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }>> | undefined;
    clipBehavior?: Bindable<upstream2.Clip> | undefined;
    child?: Bindable<Widget | null> | undefined;
}): ClipRRect;
export declare const ClipRRect: typeof _ClipRRectFactory & _FlaxInstanceType<ClipRRect>;
export {};
