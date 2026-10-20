import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_Decoration';
import '@flax/flutter/painting/_bindings/flutter_Decoration';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream3 from '@flax/material-ui/_bindings/material_TabBarIndicatorSize';
import '@flax/material-ui/_bindings/material_TabBarIndicatorSize';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream7 from '@flax/material-ui/_bindings/material_InteractiveInkFeatureFactory';
import '@flax/material-ui/_bindings/material_InteractiveInkFeatureFactory';
import type * as upstream8 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream9 from '@flax/material-ui/_bindings/material_TabAlignment';
import '@flax/material-ui/_bindings/material_TabAlignment';
import type * as upstream10 from '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import type * as upstream11 from '@flax/material-ui/_bindings/material_TabIndicatorAnimation';
import '@flax/material-ui/_bindings/material_TabIndicatorAnimation';
import type * as upstream12 from '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TabBarThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:material_ui/src/tab_bar_theme.dart::TabBarThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __TabBarThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: TabBarThemeData;
    readonly indicator: upstream1.Decoration | null;
    readonly indicatorColor: upstream2.Color | null;
    readonly indicatorSize: upstream3.TabBarIndicatorSize | null;
    readonly dividerColor: upstream2.Color | null;
    readonly dividerHeight: number | null;
    readonly labelColor: upstream2.Color | null;
    readonly labelPadding: upstream4.EdgeInsetsGeometry | null;
    readonly labelStyle: upstream5.TextStyle | null;
    readonly unselectedLabelColor: upstream2.Color | null;
    readonly unselectedLabelStyle: upstream5.TextStyle | null;
    readonly overlayColor: upstream6.WidgetStateProperty<upstream2.Color | null> | null;
    readonly splashFactory: upstream7.InteractiveInkFeatureFactory | null;
    readonly mouseCursor: upstream6.WidgetStateProperty<upstream8.MouseCursor | null> | null;
    readonly tabAlignment: upstream9.TabAlignment | null;
    readonly textScaler: upstream10.TextScaler | null;
    readonly indicatorAnimation: upstream11.TabIndicatorAnimation | null;
    readonly splashBorderRadius: upstream12.BorderRadius | null;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream13.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream15.DiagnosticsTreeStyle | null | undefined;
    }): upstream14.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        dividerColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        dividerHeight?: number | null | undefined;
        indicator?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        indicatorAnimation?: upstream11.TabIndicatorAnimation | null | undefined;
        indicatorColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        indicatorSize?: upstream3.TabBarIndicatorSize | null | undefined;
        labelColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        labelPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        labelStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream8.MouseCursor | null];
        }> | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        splashBorderRadius?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
        }>) | null | undefined;
        splashFactory?: Readonly<{
            "__flaxBound:package:material_ui/src/ink_well.dart::InteractiveInkFeatureFactory": readonly [];
        }> | null | undefined;
        tabAlignment?: upstream9.TabAlignment | null | undefined;
        textScaler?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
        }> | null | undefined;
        unselectedLabelColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        unselectedLabelStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): TabBarThemeData;
}
export declare function _TabBarThemeDataFactory(options?: {
    indicator?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    indicatorColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    indicatorSize?: upstream3.TabBarIndicatorSize | null | undefined;
    dividerColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    dividerHeight?: number | null | undefined;
    labelColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    labelPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    labelStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    unselectedLabelColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    unselectedLabelStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    overlayColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null | undefined;
    splashFactory?: Readonly<{
        "__flaxBound:package:material_ui/src/ink_well.dart::InteractiveInkFeatureFactory": readonly [];
    }> | null | undefined;
    mouseCursor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream8.MouseCursor | null];
    }> | null | undefined;
    tabAlignment?: upstream9.TabAlignment | null | undefined;
    textScaler?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
    }> | null | undefined;
    indicatorAnimation?: upstream11.TabIndicatorAnimation | null | undefined;
    splashBorderRadius?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }>) | null | undefined;
}): TabBarThemeData;
export interface _TabBarThemeDataNative extends TabBarThemeData {
    readonly [_flaxDartTypeValue]: _TabBarThemeDataNative;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream13.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream15.DiagnosticsTreeStyle | null | undefined;
    }): upstream14.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        indicator?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        indicatorColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        indicatorSize?: upstream3.TabBarIndicatorSize | null | undefined;
        dividerColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        dividerHeight?: number | null | undefined;
        labelColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        labelPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        labelStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        unselectedLabelColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        unselectedLabelStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        splashFactory?: Readonly<{
            "__flaxBound:package:material_ui/src/ink_well.dart::InteractiveInkFeatureFactory": readonly [];
        }> | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream8.MouseCursor | null];
        }> | null | undefined;
        tabAlignment?: upstream9.TabAlignment | null | undefined;
        textScaler?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
        }> | null | undefined;
        indicatorAnimation?: upstream11.TabIndicatorAnimation | null | undefined;
        splashBorderRadius?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
        }>) | null | undefined;
    }): TabBarThemeData;
    get indicator(): upstream1.Decoration | null;
    get indicatorColor(): upstream2.Color | null;
    get indicatorSize(): upstream3.TabBarIndicatorSize | null;
    get dividerColor(): upstream2.Color | null;
    get dividerHeight(): number | null;
    get labelColor(): upstream2.Color | null;
    get labelPadding(): upstream4.EdgeInsetsGeometry | null;
    get labelStyle(): upstream5.TextStyle | null;
    get unselectedLabelColor(): upstream2.Color | null;
    get unselectedLabelStyle(): upstream5.TextStyle | null;
    get overlayColor(): upstream6.WidgetStateProperty<upstream2.Color | null> | null;
    get splashFactory(): upstream7.InteractiveInkFeatureFactory | null;
    get mouseCursor(): upstream6.WidgetStateProperty<upstream8.MouseCursor | null> | null;
    get tabAlignment(): upstream9.TabAlignment | null;
    get textScaler(): upstream10.TextScaler | null;
    get indicatorAnimation(): upstream11.TabIndicatorAnimation | null;
    get splashBorderRadius(): upstream12.BorderRadius | null;
}
export declare abstract class _TabBarThemeDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TabBarThemeData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TabBarThemeData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:TabBarThemeData", readonly [], false];
    constructor(options?: {
        indicator?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        indicatorColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        indicatorSize?: upstream3.TabBarIndicatorSize | null | undefined;
        dividerColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        dividerHeight?: number | null | undefined;
        labelColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        labelPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        labelStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        unselectedLabelColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        unselectedLabelStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        splashFactory?: Readonly<{
            "__flaxBound:package:material_ui/src/ink_well.dart::InteractiveInkFeatureFactory": readonly [];
        }> | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream8.MouseCursor | null];
        }> | null | undefined;
        tabAlignment?: upstream9.TabAlignment | null | undefined;
        textScaler?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
        }> | null | undefined;
        indicatorAnimation?: upstream11.TabIndicatorAnimation | null | undefined;
        splashBorderRadius?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
        }>) | null | undefined;
    });
}
export declare namespace _TabBarThemeDataFactory {
    function implement(args: [options?: {
        indicator?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        indicatorColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        indicatorSize?: upstream3.TabBarIndicatorSize | null | undefined;
        dividerColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        dividerHeight?: number | null | undefined;
        labelColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        labelPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        labelStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        unselectedLabelColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        unselectedLabelStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        splashFactory?: Readonly<{
            "__flaxBound:package:material_ui/src/ink_well.dart::InteractiveInkFeatureFactory": readonly [];
        }> | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream8.MouseCursor | null];
        }> | null | undefined;
        tabAlignment?: upstream9.TabAlignment | null | undefined;
        textScaler?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
        }> | null | undefined;
        indicatorAnimation?: upstream11.TabIndicatorAnimation | null | undefined;
        splashBorderRadius?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
        }>) | null | undefined;
    }], implementation: {}): TabBarThemeData;
}
declare const _TabBarThemeDataBinding: typeof _TabBarThemeDataFactory & (new (options?: {
    indicator?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    indicatorColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    indicatorSize?: upstream3.TabBarIndicatorSize | null | undefined;
    dividerColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    dividerHeight?: number | null | undefined;
    labelColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    labelPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    labelStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    unselectedLabelColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    unselectedLabelStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    overlayColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null | undefined;
    splashFactory?: Readonly<{
        "__flaxBound:package:material_ui/src/ink_well.dart::InteractiveInkFeatureFactory": readonly [];
    }> | null | undefined;
    mouseCursor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream8.MouseCursor | null];
    }> | null | undefined;
    tabAlignment?: upstream9.TabAlignment | null | undefined;
    textScaler?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
    }> | null | undefined;
    indicatorAnimation?: upstream11.TabIndicatorAnimation | null | undefined;
    splashBorderRadius?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }>) | null | undefined;
}) => _TabBarThemeDataNative);
export declare namespace _TabBarThemeDataFactory {
    function lerp(a: Readonly<{
        "__flaxBound:package:material_ui/src/tab_bar_theme.dart::TabBarThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, b: Readonly<{
        "__flaxBound:package:material_ui/src/tab_bar_theme.dart::TabBarThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, t: number): TabBarThemeData;
}
export declare const TabBarThemeData: typeof _TabBarThemeDataBinding & _FlaxInstanceType<TabBarThemeData> & _FlaxDartType<TabBarThemeData, readonly ["class", "flax.material/material#type:TabBarThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "indicator" | "indicatorColor" | "indicatorSize" | "dividerColor" | "dividerHeight" | "labelColor" | "labelPadding" | "labelStyle" | "unselectedLabelColor" | "unselectedLabelStyle" | "overlayColor" | "splashFactory" | "mouseCursor" | "tabAlignment" | "textScaler" | "indicatorAnimation" | "splashBorderRadius" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:material_ui/src/tab_bar_theme.dart::TabBarThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
