import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/foundation/_bindings/flutter_Key';
export interface ColoredBox extends WidgetDescription {
    readonly type: "flax.core/flutter#type:ColoredBox";
}
export declare function ColoredBox(options: {
    color: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>>;
    isAntiAlias?: Bindable<boolean> | undefined;
    child?: Bindable<Widget | null> | undefined;
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
}): ColoredBox;
