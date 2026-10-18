import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import type * as upstream2 from '@flax/flutter/material/_bindings/sdk_material_TextTheme';
import '@flax/flutter/material/_bindings/sdk_material_TextTheme';
import '@flax/flutter/material/_bindings/sdk_material_ColorScheme';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/material/_bindings/sdk_material_ScriptCategory';
import '@flax/flutter/material/_bindings/sdk_material_ScriptCategory';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Typography extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/material/typography.dart::Typography": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __Typography: unique symbol;
    readonly [_flaxDartTypeValue]: Typography;
    readonly black: upstream2.TextTheme;
    readonly white: upstream2.TextTheme;
    readonly englishLike: upstream2.TextTheme;
    readonly dense: upstream2.TextTheme;
    readonly tall: upstream2.TextTheme;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream4.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream6.DiagnosticsTreeStyle | null | undefined;
    }): upstream5.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    geometryThemeFor(category: upstream8.ScriptCategory): upstream2.TextTheme;
    copyWith(options?: {
        black?: (Readonly<{
            "__flaxBound:package:flutter/src/material/text_theme.dart::TextTheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        dense?: (Readonly<{
            "__flaxBound:package:flutter/src/material/text_theme.dart::TextTheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        englishLike?: (Readonly<{
            "__flaxBound:package:flutter/src/material/text_theme.dart::TextTheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        tall?: (Readonly<{
            "__flaxBound:package:flutter/src/material/text_theme.dart::TextTheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        white?: (Readonly<{
            "__flaxBound:package:flutter/src/material/text_theme.dart::TextTheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): Typography;
}
export declare function _TypographyFactory(options?: {
    platform?: upstream1.TargetPlatform | null | undefined;
    black?: (Readonly<{
        "__flaxBound:package:flutter/src/material/text_theme.dart::TextTheme": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    white?: (Readonly<{
        "__flaxBound:package:flutter/src/material/text_theme.dart::TextTheme": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    englishLike?: (Readonly<{
        "__flaxBound:package:flutter/src/material/text_theme.dart::TextTheme": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    dense?: (Readonly<{
        "__flaxBound:package:flutter/src/material/text_theme.dart::TextTheme": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    tall?: (Readonly<{
        "__flaxBound:package:flutter/src/material/text_theme.dart::TextTheme": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
}): Typography;
export declare namespace _TypographyFactory {
    function material2014(options?: {
        platform?: upstream1.TargetPlatform | null | undefined;
        black?: (Readonly<{
            "__flaxBound:package:flutter/src/material/text_theme.dart::TextTheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        white?: (Readonly<{
            "__flaxBound:package:flutter/src/material/text_theme.dart::TextTheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        englishLike?: (Readonly<{
            "__flaxBound:package:flutter/src/material/text_theme.dart::TextTheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        dense?: (Readonly<{
            "__flaxBound:package:flutter/src/material/text_theme.dart::TextTheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        tall?: (Readonly<{
            "__flaxBound:package:flutter/src/material/text_theme.dart::TextTheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): Typography;
}
export declare namespace _TypographyFactory {
    function material2018(options?: {
        platform?: upstream1.TargetPlatform | null | undefined;
        black?: (Readonly<{
            "__flaxBound:package:flutter/src/material/text_theme.dart::TextTheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        white?: (Readonly<{
            "__flaxBound:package:flutter/src/material/text_theme.dart::TextTheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        englishLike?: (Readonly<{
            "__flaxBound:package:flutter/src/material/text_theme.dart::TextTheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        dense?: (Readonly<{
            "__flaxBound:package:flutter/src/material/text_theme.dart::TextTheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        tall?: (Readonly<{
            "__flaxBound:package:flutter/src/material/text_theme.dart::TextTheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): Typography;
}
export declare namespace _TypographyFactory {
    function material2021(options?: {
        platform?: upstream1.TargetPlatform | null | undefined;
        colorScheme?: (Readonly<{
            "__flaxBound:package:flutter/src/material/color_scheme.dart::ColorScheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | undefined;
        black?: (Readonly<{
            "__flaxBound:package:flutter/src/material/text_theme.dart::TextTheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        white?: (Readonly<{
            "__flaxBound:package:flutter/src/material/text_theme.dart::TextTheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        englishLike?: (Readonly<{
            "__flaxBound:package:flutter/src/material/text_theme.dart::TextTheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        dense?: (Readonly<{
            "__flaxBound:package:flutter/src/material/text_theme.dart::TextTheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        tall?: (Readonly<{
            "__flaxBound:package:flutter/src/material/text_theme.dart::TextTheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): Typography;
}
export declare namespace _TypographyFactory {
    function implement(args: [], implementation: {
        toStringShort: (() => string);
        toString: ((options?: {
            minLevel?: upstream4.DiagnosticLevel | undefined;
        }) => string);
        toDiagnosticsNode: ((options?: {
            name?: string | null | undefined;
            style?: upstream6.DiagnosticsTreeStyle | null | undefined;
        }) => Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }>);
        debugFillProperties: ((properties: upstream7.DiagnosticPropertiesBuilder) => void);
        geometryThemeFor: ((category: upstream8.ScriptCategory) => Readonly<{
            "__flaxBound:package:flutter/src/material/text_theme.dart::TextTheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>);
        copyWith: ((options?: {
            black?: upstream2.TextTheme | null | undefined;
            white?: upstream2.TextTheme | null | undefined;
            englishLike?: upstream2.TextTheme | null | undefined;
            dense?: upstream2.TextTheme | null | undefined;
            tall?: upstream2.TextTheme | null | undefined;
        }) => Readonly<{
            "__flaxBound:package:flutter/src/material/typography.dart::Typography": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>);
        get black(): Readonly<{
            "__flaxBound:package:flutter/src/material/text_theme.dart::TextTheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        get white(): Readonly<{
            "__flaxBound:package:flutter/src/material/text_theme.dart::TextTheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        get englishLike(): Readonly<{
            "__flaxBound:package:flutter/src/material/text_theme.dart::TextTheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        get dense(): Readonly<{
            "__flaxBound:package:flutter/src/material/text_theme.dart::TextTheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        get tall(): Readonly<{
            "__flaxBound:package:flutter/src/material/text_theme.dart::TextTheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        get hashCode(): number;
    }): Typography;
}
export declare namespace _TypographyFactory {
    const blackMountainView: upstream2.TextTheme;
}
export declare namespace _TypographyFactory {
    const whiteMountainView: upstream2.TextTheme;
}
export declare namespace _TypographyFactory {
    const blackRedmond: upstream2.TextTheme;
}
export declare namespace _TypographyFactory {
    const whiteRedmond: upstream2.TextTheme;
}
export declare namespace _TypographyFactory {
    const blackHelsinki: upstream2.TextTheme;
}
export declare namespace _TypographyFactory {
    const whiteHelsinki: upstream2.TextTheme;
}
export declare namespace _TypographyFactory {
    const blackCupertino: upstream2.TextTheme;
}
export declare namespace _TypographyFactory {
    const whiteCupertino: upstream2.TextTheme;
}
export declare namespace _TypographyFactory {
    const blackRedwoodCity: upstream2.TextTheme;
}
export declare namespace _TypographyFactory {
    const whiteRedwoodCity: upstream2.TextTheme;
}
export declare namespace _TypographyFactory {
    const englishLike2014: upstream2.TextTheme;
}
export declare namespace _TypographyFactory {
    const englishLike2018: upstream2.TextTheme;
}
export declare namespace _TypographyFactory {
    const dense2014: upstream2.TextTheme;
}
export declare namespace _TypographyFactory {
    const dense2018: upstream2.TextTheme;
}
export declare namespace _TypographyFactory {
    const tall2014: upstream2.TextTheme;
}
export declare namespace _TypographyFactory {
    const tall2018: upstream2.TextTheme;
}
export declare namespace _TypographyFactory {
    const englishLike2021: upstream2.TextTheme;
}
export declare namespace _TypographyFactory {
    const dense2021: upstream2.TextTheme;
}
export declare namespace _TypographyFactory {
    const tall2021: upstream2.TextTheme;
}
export declare namespace _TypographyFactory {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/material/typography.dart::Typography": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, b: Readonly<{
        "__flaxBound:package:flutter/src/material/typography.dart::Typography": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, t: number): Typography;
}
export declare const Typography: typeof _TypographyFactory & _FlaxInstanceType<Typography> & _FlaxDartType<Typography, readonly ["class", "flax.core/sdk_material#type:Typography", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "black" | "white" | "englishLike" | "dense" | "tall" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "geometryThemeFor" | "copyWith" | "__flaxBound:package:flutter/src/material/typography.dart::Typography" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
