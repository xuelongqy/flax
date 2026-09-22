import type * as upstream0 from '@flax/flutter/material/_bindings/material_ColorScheme';
import '@flax/flutter/material/_bindings/material_ColorScheme';
import type * as upstream1 from '@flax/flutter/material/_bindings/material_Brightness';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_Color';
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
        colorScheme?: upstream0.ColorScheme | null | undefined;
        textTheme?: upstream3.TextTheme | null | undefined;
    }): ThemeData;
}
export declare function ThemeData(options?: {
    colorScheme?: upstream0.ColorScheme | null | undefined;
    brightness?: upstream1.Brightness | null | undefined;
    colorSchemeSeed?: upstream2.Color | null | undefined;
    textTheme?: upstream3.TextTheme | null | undefined;
}): ThemeData;
