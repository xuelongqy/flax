import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream3 from '@flax/material-ui/_bindings/material_NavigationRailDestination';
import '@flax/material-ui/_bindings/material_NavigationRailDestination';
import type * as upstream4 from '@flax/material-ui/_bindings/material_NavigationRailLabelType';
import '@flax/material-ui/_bindings/material_NavigationRailLabelType';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_IconThemeData';
import '@flax/flutter/widgets/_bindings/sdk_widgets_IconThemeData';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream8 from '@flax/flutter/rendering/_bindings/flutter_MainAxisAlignment';
import '@flax/flutter/rendering/_bindings/flutter_MainAxisAlignment';
import type * as upstream9 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface NavigationRail extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:material_ui/src/navigation_rail.dart::NavigationRail": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __NavigationRail: unique symbol;
    readonly [_flaxDartTypeValue]: NavigationRail;
    readonly backgroundColor: upstream2.Color | null;
    readonly extended: boolean;
    readonly leading: Widget | null;
    readonly trailing: Widget | null;
    readonly destinations: DartList<upstream3.NavigationRailDestination>;
    readonly selectedIndex: number | null;
    readonly onDestinationSelected: ((value: number) => void) | null;
    readonly elevation: number | null;
    readonly groupAlignment: number | null;
    readonly labelType: upstream4.NavigationRailLabelType | null;
    readonly unselectedLabelTextStyle: upstream5.TextStyle | null;
    readonly selectedLabelTextStyle: upstream5.TextStyle | null;
    readonly unselectedIconTheme: upstream6.IconThemeData | null;
    readonly selectedIconTheme: upstream6.IconThemeData | null;
    readonly minWidth: number | null;
    readonly minExtendedWidth: number | null;
    readonly useIndicator: boolean | null;
    readonly indicatorColor: upstream2.Color | null;
    readonly indicatorShape: upstream7.ShapeBorder | null;
    readonly leadingAtTop: boolean;
    readonly trailingAtBottom: boolean;
    readonly scrollable: boolean;
    readonly mainAxisAlignment: upstream8.MainAxisAlignment | null;
    readonly key: upstream1.Key | null;
    createState(): upstream11.State<NavigationRail>;
    createElement(): upstream12.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream14.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream14.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream16.DiagnosticsTreeStyle | null | undefined;
    }): upstream15.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream15.DiagnosticsNode>;
}
export declare function _NavigationRailFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    extended?: boolean | undefined;
    leading?: Widget | null | undefined;
    trailing?: Widget | null | undefined;
    destinations: DartListInput<upstream3.NavigationRailDestination, Readonly<{
        "__flaxBound:package:material_ui/src/navigation_rail.dart::NavigationRailDestination": readonly [];
    }>>;
    selectedIndex: number | null;
    onDestinationSelected?: ((value: number) => void) | null | undefined;
    elevation?: number | null | undefined;
    groupAlignment?: number | null | undefined;
    labelType?: upstream4.NavigationRailLabelType | null | undefined;
    unselectedLabelTextStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    selectedLabelTextStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    unselectedIconTheme?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    selectedIconTheme?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    minWidth?: number | null | undefined;
    minExtendedWidth?: number | null | undefined;
    useIndicator?: boolean | null | undefined;
    indicatorColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    indicatorShape?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null | undefined;
    leadingAtTop?: boolean | undefined;
    trailingAtBottom?: boolean | undefined;
    scrollable?: boolean | undefined;
    mainAxisAlignment?: upstream8.MainAxisAlignment | null | undefined;
}): NavigationRail;
export declare namespace _NavigationRailFactory {
    const __flaxJsx: {
        readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof _NavigationRailFactory>[0]>);
        readonly slot: null;
        readonly many: false;
    };
}
export declare namespace _NavigationRailFactory {
    function extendedAnimation(context: upstream10.BuildContext): upstream9.Animation<number>;
}
export declare const NavigationRail: typeof _NavigationRailFactory & _FlaxInstanceType<NavigationRail> & _FlaxDartType<NavigationRail, readonly ["class", "flax.material/material#type:NavigationRail", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "backgroundColor" | "extended" | "leading" | "trailing" | "destinations" | "selectedIndex" | "onDestinationSelected" | "elevation" | "groupAlignment" | "labelType" | "unselectedLabelTextStyle" | "selectedLabelTextStyle" | "unselectedIconTheme" | "selectedIconTheme" | "minWidth" | "minExtendedWidth" | "useIndicator" | "indicatorColor" | "indicatorShape" | "leadingAtTop" | "trailingAtBottom" | "scrollable" | "mainAxisAlignment" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/navigation_rail.dart::NavigationRail" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
