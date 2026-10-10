import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
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
        bodyLarge?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
        bodyMedium?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
        labelLarge?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
        titleLarge?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
        titleMedium?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
    }): TextTheme;
}
declare function _TextThemeFactory(options?: {
    titleLarge?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null | undefined;
    titleMedium?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null | undefined;
    bodyLarge?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null | undefined;
    bodyMedium?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null | undefined;
    labelLarge?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null | undefined;
}): TextTheme;
export declare const TextTheme: typeof _TextThemeFactory & _FlaxInstanceType<TextTheme>;
export {};
