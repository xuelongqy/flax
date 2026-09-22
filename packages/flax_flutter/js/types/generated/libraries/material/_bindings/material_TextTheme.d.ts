import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import '@flax/flutter/widgets/_bindings/flutter_TextStyle';
export interface TextTheme extends Readonly<{
    "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __TextTheme: unique symbol;
    readonly titleLarge: upstream0.TextStyle | null;
    readonly titleMedium: upstream0.TextStyle | null;
    readonly bodyLarge: upstream0.TextStyle | null;
    readonly bodyMedium: upstream0.TextStyle | null;
    readonly labelLarge: upstream0.TextStyle | null;
    copyWith(options?: {
        bodyLarge?: upstream0.TextStyle | null | undefined;
        bodyMedium?: upstream0.TextStyle | null | undefined;
        labelLarge?: upstream0.TextStyle | null | undefined;
        titleLarge?: upstream0.TextStyle | null | undefined;
        titleMedium?: upstream0.TextStyle | null | undefined;
    }): TextTheme;
}
export declare function TextTheme(options?: {
    titleLarge?: upstream0.TextStyle | null | undefined;
    titleMedium?: upstream0.TextStyle | null | undefined;
    bodyLarge?: upstream0.TextStyle | null | undefined;
    bodyMedium?: upstream0.TextStyle | null | undefined;
    labelLarge?: upstream0.TextStyle | null | undefined;
}): TextTheme;
