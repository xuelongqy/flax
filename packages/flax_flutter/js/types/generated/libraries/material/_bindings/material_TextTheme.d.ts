import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/services/_bindings/flutter_Color';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextTheme extends Readonly<{
    "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __TextTheme: unique symbol;
    readonly displayLarge: upstream0.TextStyle | null;
    readonly displayMedium: upstream0.TextStyle | null;
    readonly displaySmall: upstream0.TextStyle | null;
    readonly headlineLarge: upstream0.TextStyle | null;
    readonly headlineMedium: upstream0.TextStyle | null;
    readonly headlineSmall: upstream0.TextStyle | null;
    readonly titleLarge: upstream0.TextStyle | null;
    readonly titleMedium: upstream0.TextStyle | null;
    readonly titleSmall: upstream0.TextStyle | null;
    readonly bodyLarge: upstream0.TextStyle | null;
    readonly bodyMedium: upstream0.TextStyle | null;
    readonly bodySmall: upstream0.TextStyle | null;
    readonly labelLarge: upstream0.TextStyle | null;
    readonly labelMedium: upstream0.TextStyle | null;
    readonly labelSmall: upstream0.TextStyle | null;
    copyWith(options?: {
        bodyLarge?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
        bodyMedium?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
        bodySmall?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
        displayLarge?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
        displayMedium?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
        displaySmall?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
        headlineLarge?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
        headlineMedium?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
        headlineSmall?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
        labelLarge?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
        labelMedium?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
        labelSmall?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
        titleLarge?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
        titleMedium?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
        titleSmall?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
    }): TextTheme;
    merge(other: Readonly<{
        "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [];
    }> | null): TextTheme;
    apply(options?: {
        bodyColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        decorationColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        displayColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        fontFamily?: string | null | undefined;
        fontFamilyFallback?: DartListInput<string, string> | null | undefined;
        fontSizeDelta?: number | undefined;
        fontSizeFactor?: number | undefined;
        heightDelta?: number | undefined;
        heightFactor?: number | undefined;
        letterSpacingDelta?: number | undefined;
        letterSpacingFactor?: number | undefined;
        package?: string | null | undefined;
        wordSpacingDelta?: number | undefined;
        wordSpacingFactor?: number | undefined;
    }): TextTheme;
    toStringShort(): string;
}
export declare function _TextThemeFactory(options?: {
    displayLarge?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null | undefined;
    displayMedium?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null | undefined;
    displaySmall?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null | undefined;
    headlineLarge?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null | undefined;
    headlineMedium?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null | undefined;
    headlineSmall?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null | undefined;
    titleLarge?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null | undefined;
    titleMedium?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null | undefined;
    titleSmall?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null | undefined;
    bodyLarge?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null | undefined;
    bodyMedium?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null | undefined;
    bodySmall?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null | undefined;
    labelLarge?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null | undefined;
    labelMedium?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null | undefined;
    labelSmall?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null | undefined;
}): TextTheme;
export declare namespace _TextThemeFactory {
    function lerp(a: Readonly<{
        "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [];
    }> | null, t: number): TextTheme;
}
export declare namespace _TextThemeFactory {
    function of(context: upstream1.BuildContext): TextTheme;
}
export declare namespace _TextThemeFactory {
    function primaryOf(context: upstream1.BuildContext): TextTheme;
}
export declare const TextTheme: typeof _TextThemeFactory & _FlaxInstanceType<TextTheme> & _FlaxDartType<TextTheme, readonly ["class", "flax.material/material#type:TextTheme", readonly [], false]>;
