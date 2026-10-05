import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/material/_bindings/material_Brightness';
export interface ColorScheme extends Readonly<{
    "__flaxBound:package:material_ui/src/color_scheme.dart::ColorScheme": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ColorScheme: unique symbol;
    readonly brightness: upstream1.Brightness;
    readonly primary: upstream0.Color;
    readonly onPrimary: upstream0.Color;
    readonly surface: upstream0.Color;
    readonly onSurface: upstream0.Color;
    readonly error: upstream0.Color;
    readonly onError: upstream0.Color;
    copyWith(options?: {
        brightness?: upstream1.Brightness | null | undefined;
        error?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onError?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSurface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
    }): ColorScheme;
}
export declare namespace ColorScheme {
    function fromSeed(options: {
        seedColor: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        brightness?: upstream1.Brightness | undefined;
    }): ColorScheme;
}
