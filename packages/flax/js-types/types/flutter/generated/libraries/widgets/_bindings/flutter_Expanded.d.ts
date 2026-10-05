import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
export interface Expanded extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Expanded";
}
export declare function Expanded(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    flex?: Bindable<number> | undefined;
    child: Bindable<Widget>;
}): Expanded;
