import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/material/_bindings/material_NavigationDestinationLabelBehavior';
export interface NavigationBar extends WidgetDescription {
    readonly type: "flax.material/material#type:NavigationBar";
}
declare function _NavigationBarFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    selectedIndex?: Bindable<number> | undefined;
    destinations: Bindable<DartListInput<Widget, Widget>>;
    onDestinationSelected?: Bindable<((value: number) => void) | null> | undefined;
    backgroundColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    elevation?: Bindable<number | null> | undefined;
    shadowColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    indicatorColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    height?: Bindable<number | null> | undefined;
    labelBehavior?: Bindable<upstream2.NavigationDestinationLabelBehavior | null> | undefined;
}): NavigationBar;
export declare const NavigationBar: typeof _NavigationBarFactory & _FlaxInstanceType<NavigationBar>;
export {};
