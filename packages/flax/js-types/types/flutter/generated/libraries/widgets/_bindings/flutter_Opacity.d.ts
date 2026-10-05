import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
export interface Opacity extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Opacity";
}
export declare function Opacity(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    opacity: Bindable<number>;
    alwaysIncludeSemantics?: Bindable<boolean> | undefined;
    child?: Bindable<Widget | null> | undefined;
}): Opacity;
