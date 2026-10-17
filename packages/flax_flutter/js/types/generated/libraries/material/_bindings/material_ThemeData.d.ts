import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import type * as upstream1 from '@flax/flutter/material/_bindings/material_VisualDensity';
import '@flax/flutter/material/_bindings/material_VisualDensity';
import type * as upstream2 from '@flax/flutter/material/_bindings/material_ColorScheme';
import '@flax/flutter/material/_bindings/material_ColorScheme';
import type * as upstream3 from '@flax/flutter/material/_bindings/material_Brightness';
import '@flax/flutter/material/_bindings/material_Brightness';
import type * as upstream4 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream5 from '@flax/flutter/material/_bindings/material_TextTheme';
import '@flax/flutter/material/_bindings/material_TextTheme';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ThemeData extends Readonly<{
    "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ThemeData: unique symbol;
    readonly [_flaxDartMethodCases]?: {
        extension: _FlaxSignature0;
    };
    readonly brightness: upstream3.Brightness;
    readonly applyElevationOverlayColor: boolean;
    readonly platform: upstream0.TargetPlatform;
    readonly useMaterial3: boolean;
    readonly visualDensity: upstream1.VisualDensity;
    readonly canvasColor: upstream4.Color;
    readonly cardColor: upstream4.Color;
    readonly colorScheme: upstream2.ColorScheme;
    readonly disabledColor: upstream4.Color;
    readonly dividerColor: upstream4.Color;
    readonly focusColor: upstream4.Color;
    readonly highlightColor: upstream4.Color;
    readonly hintColor: upstream4.Color;
    readonly hoverColor: upstream4.Color;
    readonly primaryColor: upstream4.Color;
    readonly primaryColorDark: upstream4.Color;
    readonly primaryColorLight: upstream4.Color;
    readonly scaffoldBackgroundColor: upstream4.Color;
    readonly secondaryHeaderColor: upstream4.Color;
    readonly shadowColor: upstream4.Color;
    readonly splashColor: upstream4.Color;
    readonly unselectedWidgetColor: upstream4.Color;
    readonly primaryTextTheme: upstream5.TextTheme;
    readonly textTheme: upstream5.TextTheme;
    readonly dialogBackgroundColor: upstream4.Color;
    readonly indicatorColor: upstream4.Color;
    extension<T extends unknown | null = unknown | null>(): _FlaxDartOutput<T> | null;
    copyWith(options?: {
        appBarTheme?: unknown | null | undefined;
        applyElevationOverlayColor?: boolean | null | undefined;
        brightness?: upstream3.Brightness | null | undefined;
        canvasColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        cardColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        colorScheme?: Readonly<{
            "__flaxBound:package:material_ui/src/color_scheme.dart::ColorScheme": readonly [];
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
        indicatorColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        inputDecorationTheme?: unknown | null | undefined;
        platform?: upstream0.TargetPlatform | null | undefined;
        primaryColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryColorDark?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryColorLight?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryTextTheme?: Readonly<{
            "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [];
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
        textTheme?: Readonly<{
            "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [];
        }> | null | undefined;
        unselectedWidgetColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        useMaterial3?: boolean | null | undefined;
        visualDensity?: Readonly<{
            "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
        }> | null | undefined;
    }): ThemeData;
    toStringShort(): string;
}
export declare function _ThemeDataFactory(options?: {
    applyElevationOverlayColor?: boolean | null | undefined;
    inputDecorationTheme?: unknown | null | undefined;
    platform?: upstream0.TargetPlatform | null | undefined;
    useMaterial3?: boolean | null | undefined;
    useSystemColors?: boolean | null | undefined;
    visualDensity?: Readonly<{
        "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
    }> | null | undefined;
    colorScheme?: Readonly<{
        "__flaxBound:package:material_ui/src/color_scheme.dart::ColorScheme": readonly [];
    }> | null | undefined;
    brightness?: upstream3.Brightness | null | undefined;
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
    primaryTextTheme?: Readonly<{
        "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [];
    }> | null | undefined;
    textTheme?: Readonly<{
        "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [];
    }> | null | undefined;
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
        }>;
        textTheme?: Readonly<{
            "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [];
        }> | null | undefined;
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
    }>, localTextGeometry: Readonly<{
        "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [];
    }>): ThemeData;
}
export declare namespace _ThemeDataFactory {
    function estimateBrightnessForColor(color: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>): upstream3.Brightness;
}
export declare namespace _ThemeDataFactory {
    function lerp(a: Readonly<{
        "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [];
    }>, b: Readonly<{
        "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [];
    }>, t: number): ThemeData;
}
export declare const ThemeData: typeof _ThemeDataFactory & _FlaxInstanceType<ThemeData> & _FlaxDartType<ThemeData, readonly ["class", "flax.material/material#type:ThemeData", readonly [], false]>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => _Selected0 | null : never : never;
}
export {};
