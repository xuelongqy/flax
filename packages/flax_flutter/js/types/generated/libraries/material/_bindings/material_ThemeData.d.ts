import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/material_ColorScheme';
import '@flax/flutter/material/_bindings/material_ColorScheme';
import type * as upstream1 from '@flax/flutter/material/_bindings/material_Brightness';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream3 from '@flax/flutter/material/_bindings/material_TextTheme';
import '@flax/flutter/material/_bindings/material_TextTheme';
export interface ThemeData extends Readonly<{
    "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ThemeData: unique symbol;
    readonly brightness: upstream1.Brightness;
    readonly colorScheme: upstream0.ColorScheme;
    readonly textTheme: upstream3.TextTheme;
    copyWith(options?: {
        brightness?: upstream1.Brightness | null | undefined;
        colorScheme?: Readonly<{
            "__flaxBound:package:material_ui/src/color_scheme.dart::ColorScheme": readonly [];
        }> | null | undefined;
        textTheme?: Readonly<{
            "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [];
        }> | null | undefined;
    }): ThemeData;
}
declare function _ThemeDataFactory(options?: {
    colorScheme?: Readonly<{
        "__flaxBound:package:material_ui/src/color_scheme.dart::ColorScheme": readonly [];
    }> | null | undefined;
    brightness?: upstream1.Brightness | null | undefined;
    colorSchemeSeed?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    textTheme?: Readonly<{
        "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [];
    }> | null | undefined;
}): ThemeData;
export declare const ThemeData: typeof _ThemeDataFactory & _FlaxInstanceType<ThemeData>;
export {};
