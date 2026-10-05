import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
export interface AspectRatio extends WidgetDescription {
    readonly type: "flax.core/flutter#type:AspectRatio";
}
export declare function AspectRatio(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    aspectRatio: Bindable<number>;
    child?: Bindable<Widget | null> | undefined;
}): AspectRatio;
