import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_IconThemeData';
import '@flax/flutter/widgets/_bindings/sdk_widgets_IconThemeData';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream4 from '@flax/material-ui/_bindings/material_BottomNavigationBarType';
import '@flax/material-ui/_bindings/material_BottomNavigationBarType';
import type * as upstream5 from '@flax/material-ui/_bindings/material_BottomNavigationBarLandscapeLayout';
import '@flax/material-ui/_bindings/material_BottomNavigationBarLandscapeLayout';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream7 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BottomNavigationBarThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:material_ui/src/bottom_navigation_bar_theme.dart::BottomNavigationBarThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __BottomNavigationBarThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: BottomNavigationBarThemeData;
    readonly backgroundColor: upstream1.Color | null;
    readonly elevation: number | null;
    readonly selectedIconTheme: upstream2.IconThemeData | null;
    readonly unselectedIconTheme: upstream2.IconThemeData | null;
    readonly selectedItemColor: upstream1.Color | null;
    readonly unselectedItemColor: upstream1.Color | null;
    readonly selectedLabelStyle: upstream3.TextStyle | null;
    readonly unselectedLabelStyle: upstream3.TextStyle | null;
    readonly showSelectedLabels: boolean | null;
    readonly showUnselectedLabels: boolean | null;
    readonly type: upstream4.BottomNavigationBarType | null;
    readonly enableFeedback: boolean | null;
    readonly landscapeLayout: upstream5.BottomNavigationBarLandscapeLayout | null;
    readonly mouseCursor: upstream6.WidgetStateProperty<upstream7.MouseCursor | null> | null;
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
        enableFeedback?: boolean | null | undefined;
        landscapeLayout?: upstream5.BottomNavigationBarLandscapeLayout | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream7.MouseCursor | null];
        }> | null | undefined;
        selectedIconTheme?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        selectedItemColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        selectedLabelStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        showSelectedLabels?: boolean | null | undefined;
        showUnselectedLabels?: boolean | null | undefined;
        type?: upstream4.BottomNavigationBarType | null | undefined;
        unselectedIconTheme?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        unselectedItemColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        unselectedLabelStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): BottomNavigationBarThemeData;
}
export declare function _BottomNavigationBarThemeDataFactory(options?: {
    backgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    elevation?: number | null | undefined;
    selectedIconTheme?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    unselectedIconTheme?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    selectedItemColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    unselectedItemColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    selectedLabelStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    unselectedLabelStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    showSelectedLabels?: boolean | null | undefined;
    showUnselectedLabels?: boolean | null | undefined;
    type?: upstream4.BottomNavigationBarType | null | undefined;
    enableFeedback?: boolean | null | undefined;
    landscapeLayout?: upstream5.BottomNavigationBarLandscapeLayout | null | undefined;
    mouseCursor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream7.MouseCursor | null];
    }> | null | undefined;
}): BottomNavigationBarThemeData;
export interface _BottomNavigationBarThemeDataNative extends BottomNavigationBarThemeData {
    readonly [_flaxDartTypeValue]: _BottomNavigationBarThemeDataNative;
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
        selectedIconTheme?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        unselectedIconTheme?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        selectedItemColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        unselectedItemColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        selectedLabelStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        unselectedLabelStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        showSelectedLabels?: boolean | null | undefined;
        showUnselectedLabels?: boolean | null | undefined;
        type?: upstream4.BottomNavigationBarType | null | undefined;
        enableFeedback?: boolean | null | undefined;
        landscapeLayout?: upstream5.BottomNavigationBarLandscapeLayout | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream7.MouseCursor | null];
        }> | null | undefined;
    }): BottomNavigationBarThemeData;
    get backgroundColor(): upstream1.Color | null;
    get elevation(): number | null;
    get selectedIconTheme(): upstream2.IconThemeData | null;
    get unselectedIconTheme(): upstream2.IconThemeData | null;
    get selectedItemColor(): upstream1.Color | null;
    get unselectedItemColor(): upstream1.Color | null;
    get selectedLabelStyle(): upstream3.TextStyle | null;
    get unselectedLabelStyle(): upstream3.TextStyle | null;
    get showSelectedLabels(): boolean | null;
    get showUnselectedLabels(): boolean | null;
    get type(): upstream4.BottomNavigationBarType | null;
    get enableFeedback(): boolean | null;
    get landscapeLayout(): upstream5.BottomNavigationBarLandscapeLayout | null;
    get mouseCursor(): upstream6.WidgetStateProperty<upstream7.MouseCursor | null> | null;
}
export declare abstract class _BottomNavigationBarThemeDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BottomNavigationBarThemeData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: BottomNavigationBarThemeData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:BottomNavigationBarThemeData", readonly [], false];
    constructor(options?: {
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        elevation?: number | null | undefined;
        selectedIconTheme?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        unselectedIconTheme?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        selectedItemColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        unselectedItemColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        selectedLabelStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        unselectedLabelStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        showSelectedLabels?: boolean | null | undefined;
        showUnselectedLabels?: boolean | null | undefined;
        type?: upstream4.BottomNavigationBarType | null | undefined;
        enableFeedback?: boolean | null | undefined;
        landscapeLayout?: upstream5.BottomNavigationBarLandscapeLayout | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream7.MouseCursor | null];
        }> | null | undefined;
    });
}
export declare namespace _BottomNavigationBarThemeDataFactory {
    function implement(args: [options?: {
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        elevation?: number | null | undefined;
        selectedIconTheme?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        unselectedIconTheme?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        selectedItemColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        unselectedItemColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        selectedLabelStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        unselectedLabelStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        showSelectedLabels?: boolean | null | undefined;
        showUnselectedLabels?: boolean | null | undefined;
        type?: upstream4.BottomNavigationBarType | null | undefined;
        enableFeedback?: boolean | null | undefined;
        landscapeLayout?: upstream5.BottomNavigationBarLandscapeLayout | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream7.MouseCursor | null];
        }> | null | undefined;
    }], implementation: {}): BottomNavigationBarThemeData;
}
declare const _BottomNavigationBarThemeDataBinding: typeof _BottomNavigationBarThemeDataFactory & (new (options?: {
    backgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    elevation?: number | null | undefined;
    selectedIconTheme?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    unselectedIconTheme?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    selectedItemColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    unselectedItemColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    selectedLabelStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    unselectedLabelStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    showSelectedLabels?: boolean | null | undefined;
    showUnselectedLabels?: boolean | null | undefined;
    type?: upstream4.BottomNavigationBarType | null | undefined;
    enableFeedback?: boolean | null | undefined;
    landscapeLayout?: upstream5.BottomNavigationBarLandscapeLayout | null | undefined;
    mouseCursor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream7.MouseCursor | null];
    }> | null | undefined;
}) => _BottomNavigationBarThemeDataNative);
export declare namespace _BottomNavigationBarThemeDataFactory {
    function lerp(a: (Readonly<{
        "__flaxBound:package:material_ui/src/bottom_navigation_bar_theme.dart::BottomNavigationBarThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:material_ui/src/bottom_navigation_bar_theme.dart::BottomNavigationBarThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, t: number): BottomNavigationBarThemeData;
}
export declare const BottomNavigationBarThemeData: typeof _BottomNavigationBarThemeDataBinding & _FlaxInstanceType<BottomNavigationBarThemeData> & _FlaxDartType<BottomNavigationBarThemeData, readonly ["class", "flax.material/material#type:BottomNavigationBarThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "backgroundColor" | "elevation" | "selectedIconTheme" | "unselectedIconTheme" | "selectedItemColor" | "unselectedItemColor" | "selectedLabelStyle" | "unselectedLabelStyle" | "showSelectedLabels" | "showUnselectedLabels" | "type" | "enableFeedback" | "landscapeLayout" | "mouseCursor" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:material_ui/src/bottom_navigation_bar_theme.dart::BottomNavigationBarThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
