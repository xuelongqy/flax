import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/widgets/_bindings/flutter_BoxConstraints';
export interface ConstrainedBox extends WidgetDescription {
    readonly type: "flax.core/flutter#type:ConstrainedBox";
}
export declare function ConstrainedBox(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    constraints: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }>>;
    child?: Bindable<Widget | null> | undefined;
}): ConstrainedBox;
