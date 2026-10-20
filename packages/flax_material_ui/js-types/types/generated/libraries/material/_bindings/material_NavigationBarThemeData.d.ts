import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_IconThemeData';
import '@flax/flutter/widgets/_bindings/sdk_widgets_IconThemeData';
import type * as upstream6 from '@flax/material-ui/_bindings/material_NavigationDestinationLabelBehavior';
import '@flax/material-ui/_bindings/material_NavigationDestinationLabelBehavior';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface NavigationBarThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:material_ui/src/navigation_bar_theme.dart::NavigationBarThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __NavigationBarThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: NavigationBarThemeData;
    readonly height: number | null;
    readonly backgroundColor: upstream1.Color | null;
    readonly elevation: number | null;
    readonly shadowColor: upstream1.Color | null;
    readonly surfaceTintColor: upstream1.Color | null;
    readonly indicatorColor: upstream1.Color | null;
    readonly indicatorShape: upstream2.ShapeBorder | null;
    readonly labelTextStyle: upstream3.WidgetStateProperty<upstream4.TextStyle | null> | null;
    readonly iconTheme: upstream3.WidgetStateProperty<upstream5.IconThemeData | null> | null;
    readonly labelBehavior: upstream6.NavigationDestinationLabelBehavior | null;
    readonly overlayColor: upstream3.WidgetStateProperty<upstream1.Color | null> | null;
    readonly labelPadding: upstream7.EdgeInsetsGeometry | null;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream8.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream10.DiagnosticsTreeStyle | null | undefined;
    }): upstream9.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        elevation?: number | null | undefined;
        height?: number | null | undefined;
        iconTheme?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.IconThemeData | null];
        }> | null | undefined;
        indicatorColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        indicatorShape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        labelBehavior?: upstream6.NavigationDestinationLabelBehavior | null | undefined;
        labelPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        labelTextStyle?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.TextStyle | null];
        }> | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.Color | null];
        }> | null | undefined;
        shadowColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceTintColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
    }): NavigationBarThemeData;
}
export declare function _NavigationBarThemeDataFactory(options?: {
    height?: number | null | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    elevation?: number | null | undefined;
    shadowColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    surfaceTintColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    indicatorColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    indicatorShape?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null | undefined;
    labelTextStyle?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.TextStyle | null];
    }> | null | undefined;
    iconTheme?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.IconThemeData | null];
    }> | null | undefined;
    labelBehavior?: upstream6.NavigationDestinationLabelBehavior | null | undefined;
    overlayColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.Color | null];
    }> | null | undefined;
    labelPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
}): NavigationBarThemeData;
export interface _NavigationBarThemeDataNative extends NavigationBarThemeData {
    readonly [_flaxDartTypeValue]: _NavigationBarThemeDataNative;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream8.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream10.DiagnosticsTreeStyle | null | undefined;
    }): upstream9.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        height?: number | null | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        elevation?: number | null | undefined;
        shadowColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceTintColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        indicatorColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        indicatorShape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        labelTextStyle?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.TextStyle | null];
        }> | null | undefined;
        iconTheme?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.IconThemeData | null];
        }> | null | undefined;
        labelBehavior?: upstream6.NavigationDestinationLabelBehavior | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.Color | null];
        }> | null | undefined;
        labelPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
    }): NavigationBarThemeData;
    get height(): number | null;
    get backgroundColor(): upstream1.Color | null;
    get elevation(): number | null;
    get shadowColor(): upstream1.Color | null;
    get surfaceTintColor(): upstream1.Color | null;
    get indicatorColor(): upstream1.Color | null;
    get indicatorShape(): upstream2.ShapeBorder | null;
    get labelTextStyle(): upstream3.WidgetStateProperty<upstream4.TextStyle | null> | null;
    get iconTheme(): upstream3.WidgetStateProperty<upstream5.IconThemeData | null> | null;
    get labelBehavior(): upstream6.NavigationDestinationLabelBehavior | null;
    get overlayColor(): upstream3.WidgetStateProperty<upstream1.Color | null> | null;
    get labelPadding(): upstream7.EdgeInsetsGeometry | null;
}
export declare abstract class _NavigationBarThemeDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<NavigationBarThemeData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: NavigationBarThemeData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:NavigationBarThemeData", readonly [], false];
    constructor(options?: {
        height?: number | null | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        elevation?: number | null | undefined;
        shadowColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceTintColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        indicatorColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        indicatorShape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        labelTextStyle?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.TextStyle | null];
        }> | null | undefined;
        iconTheme?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.IconThemeData | null];
        }> | null | undefined;
        labelBehavior?: upstream6.NavigationDestinationLabelBehavior | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.Color | null];
        }> | null | undefined;
        labelPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
    });
}
export declare namespace _NavigationBarThemeDataFactory {
    function implement(args: [options?: {
        height?: number | null | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        elevation?: number | null | undefined;
        shadowColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceTintColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        indicatorColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        indicatorShape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        labelTextStyle?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.TextStyle | null];
        }> | null | undefined;
        iconTheme?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.IconThemeData | null];
        }> | null | undefined;
        labelBehavior?: upstream6.NavigationDestinationLabelBehavior | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.Color | null];
        }> | null | undefined;
        labelPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
    }], implementation: {}): NavigationBarThemeData;
}
declare const _NavigationBarThemeDataBinding: typeof _NavigationBarThemeDataFactory & (new (options?: {
    height?: number | null | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    elevation?: number | null | undefined;
    shadowColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    surfaceTintColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    indicatorColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    indicatorShape?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null | undefined;
    labelTextStyle?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.TextStyle | null];
    }> | null | undefined;
    iconTheme?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.IconThemeData | null];
    }> | null | undefined;
    labelBehavior?: upstream6.NavigationDestinationLabelBehavior | null | undefined;
    overlayColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.Color | null];
    }> | null | undefined;
    labelPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
}) => _NavigationBarThemeDataNative);
export declare namespace _NavigationBarThemeDataFactory {
    function lerp(a: (Readonly<{
        "__flaxBound:package:material_ui/src/navigation_bar_theme.dart::NavigationBarThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:material_ui/src/navigation_bar_theme.dart::NavigationBarThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, t: number): NavigationBarThemeData | null;
}
export declare const NavigationBarThemeData: typeof _NavigationBarThemeDataBinding & _FlaxInstanceType<NavigationBarThemeData> & _FlaxDartType<NavigationBarThemeData, readonly ["class", "flax.material/material#type:NavigationBarThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "height" | "backgroundColor" | "elevation" | "shadowColor" | "surfaceTintColor" | "indicatorColor" | "indicatorShape" | "labelTextStyle" | "iconTheme" | "labelBehavior" | "overlayColor" | "labelPadding" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:material_ui/src/navigation_bar_theme.dart::NavigationBarThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
