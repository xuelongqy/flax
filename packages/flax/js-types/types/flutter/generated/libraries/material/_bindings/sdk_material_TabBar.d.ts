import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/material/_bindings/sdk_material_TabController';
import '@flax/flutter/material/_bindings/sdk_material_TabController';
import type * as upstream4 from '@flax/flutter/material/_bindings/sdk_material_TabBarScrollController';
import '@flax/flutter/material/_bindings/sdk_material_TabBarScrollController';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_Decoration';
import '@flax/flutter/painting/_bindings/flutter_Decoration';
import type * as upstream8 from '@flax/flutter/material/_bindings/sdk_material_TabBarIndicatorSize';
import '@flax/flutter/material/_bindings/sdk_material_TabBarIndicatorSize';
import type * as upstream9 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream10 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream12 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import type * as upstream14 from '@flax/flutter/material/_bindings/sdk_material_InteractiveInkFeatureFactory';
import '@flax/flutter/material/_bindings/sdk_material_InteractiveInkFeatureFactory';
import type * as upstream15 from '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import type * as upstream16 from '@flax/flutter/material/_bindings/sdk_material_TabAlignment';
import '@flax/flutter/material/_bindings/sdk_material_TabAlignment';
import type * as upstream17 from '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import type * as upstream18 from '@flax/flutter/material/_bindings/sdk_material_TabIndicatorAnimation';
import '@flax/flutter/material/_bindings/sdk_material_TabIndicatorAnimation';
import type * as upstream19 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream20 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream21 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream22 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream24 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream25 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TabBar extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/material/tabs.dart::TabBar": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/preferred_size.dart::PreferredSizeWidget": readonly [];
}>, Omit<upstream1.PreferredSizeWidget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget | keyof Widget> {
    readonly __TabBar: unique symbol;
    readonly [_flaxDartTypeValue]: TabBar;
    readonly preferredSize: upstream19.Size;
    readonly tabs: DartList<Widget>;
    readonly controller: upstream3.TabController | null;
    readonly scrollController: upstream4.TabBarScrollController | null;
    readonly isScrollable: boolean;
    readonly padding: upstream5.EdgeInsetsGeometry | null;
    readonly indicatorColor: upstream6.Color | null;
    readonly indicatorWeight: number;
    readonly indicatorPadding: upstream5.EdgeInsetsGeometry;
    readonly indicator: upstream7.Decoration | null;
    readonly automaticIndicatorColorAdjustment: boolean;
    readonly indicatorSize: upstream8.TabBarIndicatorSize | null;
    readonly dividerColor: upstream6.Color | null;
    readonly dividerHeight: number | null;
    readonly labelColor: upstream6.Color | null;
    readonly unselectedLabelColor: upstream6.Color | null;
    readonly labelStyle: upstream9.TextStyle | null;
    readonly unselectedLabelStyle: upstream9.TextStyle | null;
    readonly labelPadding: upstream5.EdgeInsetsGeometry | null;
    readonly overlayColor: upstream11.WidgetStateProperty<upstream6.Color | null> | null;
    readonly dragStartBehavior: upstream10.DragStartBehavior;
    readonly mouseCursor: upstream12.MouseCursor | null;
    readonly enableFeedback: boolean | null;
    readonly onTap: ((value: number) => void) | null;
    readonly onHover: ((value: boolean, index: number) => void) | null;
    readonly onFocusChange: ((value: boolean, index: number) => void) | null;
    readonly physics: upstream13.ScrollPhysics | null;
    readonly splashFactory: upstream14.InteractiveInkFeatureFactory | null;
    readonly splashBorderRadius: upstream15.BorderRadius | null;
    readonly tabAlignment: upstream16.TabAlignment | null;
    readonly textScaler: upstream17.TextScaler | null;
    readonly indicatorAnimation: upstream18.TabIndicatorAnimation | null;
    readonly tabHasTextAndIcon: boolean;
    readonly key: upstream2.Key | null;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream20.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream20.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream22.DiagnosticsTreeStyle | null | undefined;
    }): upstream21.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream21.DiagnosticsNode>;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream20.DiagnosticLevel | undefined;
    }): string;
    createState(): upstream24.State<TabBar>;
    createElement(): upstream25.StatefulElement;
}
export declare function _TabBarFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    tabs: DartListInput<Widget, Widget>;
    controller?: (Readonly<{
        "__flaxBound:package:flutter/src/material/tab_controller.dart::TabController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null | undefined;
    scrollController?: (Readonly<{
        "__flaxBound:package:flutter/src/material/tabs.dart::TabBarScrollController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null | undefined;
    isScrollable?: boolean | undefined;
    padding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    indicatorColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    automaticIndicatorColorAdjustment?: boolean | undefined;
    indicatorWeight?: number | undefined;
    indicatorPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | undefined;
    indicator?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    indicatorSize?: upstream8.TabBarIndicatorSize | null | undefined;
    dividerColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    dividerHeight?: number | null | undefined;
    labelColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    labelStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    labelPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    unselectedLabelColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    unselectedLabelStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    dragStartBehavior?: upstream10.DragStartBehavior | undefined;
    overlayColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream6.Color | null];
    }> | null | undefined;
    mouseCursor?: (Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    enableFeedback?: boolean | null | undefined;
    onTap?: ((value: number) => void) | null | undefined;
    onHover?: ((value: boolean, index: number) => void) | null | undefined;
    onFocusChange?: ((value: boolean, index: number) => void) | null | undefined;
    physics?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null | undefined;
    splashFactory?: Readonly<{
        "__flaxBound:package:flutter/src/material/ink_well.dart::InteractiveInkFeatureFactory": readonly [];
    }> | null | undefined;
    splashBorderRadius?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }>) | null | undefined;
    tabAlignment?: upstream16.TabAlignment | null | undefined;
    textScaler?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
    }> | null | undefined;
    indicatorAnimation?: upstream18.TabIndicatorAnimation | null | undefined;
}): TabBar;
export declare namespace _TabBarFactory {
    function secondary(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        tabs: DartListInput<Widget, Widget>;
        controller?: (Readonly<{
            "__flaxBound:package:flutter/src/material/tab_controller.dart::TabController": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
        scrollController?: (Readonly<{
            "__flaxBound:package:flutter/src/material/tabs.dart::TabBarScrollController": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
        isScrollable?: boolean | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        indicatorColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        automaticIndicatorColorAdjustment?: boolean | undefined;
        indicatorWeight?: number | undefined;
        indicatorPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | undefined;
        indicator?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        indicatorSize?: upstream8.TabBarIndicatorSize | null | undefined;
        dividerColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        dividerHeight?: number | null | undefined;
        labelColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        labelStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        labelPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        unselectedLabelColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        unselectedLabelStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        dragStartBehavior?: upstream10.DragStartBehavior | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream6.Color | null];
        }> | null | undefined;
        mouseCursor?: (Readonly<{
            "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        enableFeedback?: boolean | null | undefined;
        onTap?: ((value: number) => void) | null | undefined;
        onHover?: ((value: boolean, index: number) => void) | null | undefined;
        onFocusChange?: ((value: boolean, index: number) => void) | null | undefined;
        physics?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
        }> | null | undefined;
        splashFactory?: Readonly<{
            "__flaxBound:package:flutter/src/material/ink_well.dart::InteractiveInkFeatureFactory": readonly [];
        }> | null | undefined;
        splashBorderRadius?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
        }>) | null | undefined;
        tabAlignment?: upstream16.TabAlignment | null | undefined;
        textScaler?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
        }> | null | undefined;
        indicatorAnimation?: upstream18.TabIndicatorAnimation | null | undefined;
    }): TabBar;
}
export declare const TabBar: typeof _TabBarFactory & _FlaxInstanceType<TabBar> & _FlaxDartType<TabBar, readonly ["class", "flax.core/sdk_material#type:TabBar", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "preferredSize" | "tabs" | "controller" | "scrollController" | "isScrollable" | "padding" | "indicatorColor" | "indicatorWeight" | "indicatorPadding" | "indicator" | "automaticIndicatorColorAdjustment" | "indicatorSize" | "dividerColor" | "dividerHeight" | "labelColor" | "unselectedLabelColor" | "labelStyle" | "unselectedLabelStyle" | "labelPadding" | "overlayColor" | "dragStartBehavior" | "mouseCursor" | "enableFeedback" | "onTap" | "onHover" | "onFocusChange" | "physics" | "splashFactory" | "splashBorderRadius" | "tabAlignment" | "textScaler" | "indicatorAnimation" | "tabHasTextAndIcon" | "key" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "debugFillProperties" | "toString" | "createState" | "createElement" | "__flaxBound:package:flutter/src/material/tabs.dart::TabBar" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/widgets/preferred_size.dart::PreferredSizeWidget";
export {};
