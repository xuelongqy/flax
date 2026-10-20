import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/cupertino-ui/_bindings/cupertino_NoDefaultCupertinoThemeData';
import '@flax/cupertino-ui/_bindings/cupertino_NoDefaultCupertinoThemeData';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import type * as upstream3 from '@flax/material-ui/_bindings/material_VisualDensity';
import '@flax/material-ui/_bindings/material_VisualDensity';
import type * as upstream4 from '@flax/material-ui/_bindings/material_ColorScheme';
import '@flax/material-ui/_bindings/material_ColorScheme';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_IconThemeData';
import '@flax/flutter/widgets/_bindings/sdk_widgets_IconThemeData';
import type * as upstream8 from '@flax/material-ui/_bindings/material_TextTheme';
import '@flax/material-ui/_bindings/material_TextTheme';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: ThemeData;
    readonly [_flaxDartMethodCases]?: {
        extension: _FlaxSignature0;
    };
    readonly brightness: upstream5.Brightness;
    readonly applyElevationOverlayColor: boolean;
    readonly cupertinoOverrideTheme: upstream1.NoDefaultCupertinoThemeData | null;
    readonly platform: upstream2.TargetPlatform;
    readonly useMaterial3: boolean;
    readonly visualDensity: upstream3.VisualDensity;
    readonly canvasColor: upstream6.Color;
    readonly cardColor: upstream6.Color;
    readonly colorScheme: upstream4.ColorScheme;
    readonly disabledColor: upstream6.Color;
    readonly dividerColor: upstream6.Color;
    readonly focusColor: upstream6.Color;
    readonly highlightColor: upstream6.Color;
    readonly hintColor: upstream6.Color;
    readonly hoverColor: upstream6.Color;
    readonly primaryColor: upstream6.Color;
    readonly primaryColorDark: upstream6.Color;
    readonly primaryColorLight: upstream6.Color;
    readonly scaffoldBackgroundColor: upstream6.Color;
    readonly secondaryHeaderColor: upstream6.Color;
    readonly shadowColor: upstream6.Color;
    readonly splashColor: upstream6.Color;
    readonly unselectedWidgetColor: upstream6.Color;
    readonly iconTheme: upstream7.IconThemeData;
    readonly primaryIconTheme: upstream7.IconThemeData;
    readonly primaryTextTheme: upstream8.TextTheme;
    readonly textTheme: upstream8.TextTheme;
    readonly dialogBackgroundColor: upstream6.Color;
    readonly indicatorColor: upstream6.Color;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream9.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream11.DiagnosticsTreeStyle | null | undefined;
    }): upstream10.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    extension<T extends unknown | null = unknown | null>(): _FlaxDartOutput<T> | null;
    copyWith(options?: {
        appBarTheme?: unknown | null | undefined;
        applyElevationOverlayColor?: boolean | null | undefined;
        brightness?: upstream5.Brightness | null | undefined;
        canvasColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        cardColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        colorScheme?: (Readonly<{
            "__flaxBound:package:material_ui/src/color_scheme.dart::ColorScheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        cupertinoOverrideTheme?: Readonly<{
            "__flaxBound:package:cupertino_ui/src/theme.dart::NoDefaultCupertinoThemeData": readonly [];
        }> | null | undefined;
        dialogBackgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        disabledColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        dividerColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        focusColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        highlightColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        hintColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        hoverColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        iconTheme?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        indicatorColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        inputDecorationTheme?: unknown | null | undefined;
        platform?: upstream2.TargetPlatform | null | undefined;
        primaryColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryColorDark?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryColorLight?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryIconTheme?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        primaryTextTheme?: (Readonly<{
            "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        scaffoldBackgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondaryHeaderColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        shadowColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        splashColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        textTheme?: (Readonly<{
            "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        unselectedWidgetColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        useMaterial3?: boolean | null | undefined;
        visualDensity?: (Readonly<{
            "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): ThemeData;
}
export declare function _ThemeDataFactory(options?: {
    applyElevationOverlayColor?: boolean | null | undefined;
    cupertinoOverrideTheme?: Readonly<{
        "__flaxBound:package:cupertino_ui/src/theme.dart::NoDefaultCupertinoThemeData": readonly [];
    }> | null | undefined;
    inputDecorationTheme?: unknown | null | undefined;
    platform?: upstream2.TargetPlatform | null | undefined;
    useMaterial3?: boolean | null | undefined;
    useSystemColors?: boolean | null | undefined;
    visualDensity?: (Readonly<{
        "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    colorScheme?: (Readonly<{
        "__flaxBound:package:material_ui/src/color_scheme.dart::ColorScheme": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    brightness?: upstream5.Brightness | null | undefined;
    colorSchemeSeed?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    canvasColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    cardColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    disabledColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    dividerColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    focusColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    highlightColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    hintColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    hoverColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    primaryColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    primaryColorDark?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    primaryColorLight?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    scaffoldBackgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    secondaryHeaderColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    shadowColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    splashColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    unselectedWidgetColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    fontFamily?: string | null | undefined;
    fontFamilyFallback?: DartListInput<string, string> | null | undefined;
    package?: string | null | undefined;
    iconTheme?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    primaryIconTheme?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    primaryTextTheme?: (Readonly<{
        "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    textTheme?: (Readonly<{
        "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    appBarTheme?: unknown | null | undefined;
    dialogBackgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    indicatorColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
}): ThemeData;
export declare namespace _ThemeDataFactory {
    function from(options: {
        colorScheme: Readonly<{
            "__flaxBound:package:material_ui/src/color_scheme.dart::ColorScheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        textTheme?: (Readonly<{
            "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        useMaterial3?: boolean | null | undefined;
    }): ThemeData;
}
export declare namespace _ThemeDataFactory {
    function light(options?: {
        useMaterial3?: boolean | null | undefined;
    }): ThemeData;
}
export declare namespace _ThemeDataFactory {
    function dark(options?: {
        useMaterial3?: boolean | null | undefined;
    }): ThemeData;
}
export declare namespace _ThemeDataFactory {
    function fallback(options?: {
        useMaterial3?: boolean | null | undefined;
    }): ThemeData;
}
export declare namespace _ThemeDataFactory {
    function localize(baseTheme: Readonly<{
        "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, localTextGeometry: Readonly<{
        "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): ThemeData;
}
export declare namespace _ThemeDataFactory {
    function estimateBrightnessForColor(color: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>): upstream5.Brightness;
}
export declare namespace _ThemeDataFactory {
    function lerp(a: Readonly<{
        "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, b: Readonly<{
        "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, t: number): ThemeData;
}
export declare const ThemeData: typeof _ThemeDataFactory & _FlaxInstanceType<ThemeData> & _FlaxDartType<ThemeData, readonly ["class", "flax.material/material#type:ThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "brightness" | "applyElevationOverlayColor" | "cupertinoOverrideTheme" | "platform" | "useMaterial3" | "visualDensity" | "canvasColor" | "cardColor" | "colorScheme" | "disabledColor" | "dividerColor" | "focusColor" | "highlightColor" | "hintColor" | "hoverColor" | "primaryColor" | "primaryColorDark" | "primaryColorLight" | "scaffoldBackgroundColor" | "secondaryHeaderColor" | "shadowColor" | "splashColor" | "unselectedWidgetColor" | "iconTheme" | "primaryIconTheme" | "primaryTextTheme" | "textTheme" | "dialogBackgroundColor" | "indicatorColor" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "extension" | "copyWith" | "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => _Selected0 | null : never : never;
}
export {};
