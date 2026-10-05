import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_Clip';
export interface Drawer extends WidgetDescription {
    readonly type: "flax.material/material#type:Drawer";
}
export declare function Drawer(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    backgroundColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    elevation?: Bindable<number | null> | undefined;
    shadowColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    width?: Bindable<number | null> | undefined;
    child?: Bindable<Widget | null> | undefined;
    semanticLabel?: Bindable<string | null> | undefined;
    clipBehavior?: Bindable<upstream2.Clip | null> | undefined;
}): Drawer;
