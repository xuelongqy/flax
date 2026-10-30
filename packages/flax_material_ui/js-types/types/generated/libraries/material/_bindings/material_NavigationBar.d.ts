import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream4 from '@flax/material-ui/_bindings/material_NavigationDestinationLabelBehavior';
import '@flax/material-ui/_bindings/material_NavigationDestinationLabelBehavior';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface NavigationBar extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:material_ui/src/navigation_bar.dart::NavigationBar": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, 'type'> {
    readonly type: "flax.material/material#type:NavigationBar";
}
export declare function _NavigationBarFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    animationDuration?: Bindable<(Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
    }>) | null> | undefined;
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
export declare namespace _NavigationBarFactory {
    const __flaxJsx: {
        readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof _NavigationBarFactory>[0]>);
        readonly slot: null;
        readonly many: false;
    };
}
export declare const NavigationBar: typeof _NavigationBarFactory & _FlaxInstanceType<NavigationBar> & _FlaxDartType<NavigationBar, readonly ["class", "flax.material/material#type:NavigationBar", readonly [], false]>;
