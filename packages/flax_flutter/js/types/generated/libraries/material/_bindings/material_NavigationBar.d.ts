import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import type * as upstream4 from '@flax/flutter/material/_bindings/material_NavigationDestinationLabelBehavior';
import '@flax/flutter/material/_bindings/material_NavigationDestinationLabelBehavior';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface NavigationBar extends WidgetDescription {
    readonly type: "flax.material/material#type:NavigationBar";
}
export declare function _NavigationBarFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    animationDuration?: Bindable<Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> | null> | undefined;
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
    surfaceTintColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    indicatorColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    indicatorShape?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null> | undefined;
    height?: Bindable<number | null> | undefined;
    labelBehavior?: Bindable<upstream4.NavigationDestinationLabelBehavior | null> | undefined;
    overlayColor?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null> | undefined;
    labelTextStyle?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream6.TextStyle | null];
    }> | null> | undefined;
    labelPadding?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null> | undefined;
    maintainBottomViewPadding?: Bindable<boolean> | undefined;
}): NavigationBar;
export declare const NavigationBar: typeof _NavigationBarFactory & _FlaxInstanceType<NavigationBar> & _FlaxDartType<NavigationBar, readonly ["class", "flax.material/material#type:NavigationBar", readonly [], false]>;
