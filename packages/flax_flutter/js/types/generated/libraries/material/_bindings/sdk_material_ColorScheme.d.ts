import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream3 from '@flax/flutter/material/_bindings/sdk_material_DynamicSchemeVariant';
import '@flax/flutter/material/_bindings/sdk_material_DynamicSchemeVariant';
import '@flax/flutter/material/_bindings/sdk_material_MaterialColor';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ColorScheme extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/material/color_scheme.dart::ColorScheme": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ColorScheme: unique symbol;
    readonly [_flaxDartTypeValue]: ColorScheme;
    readonly brightness: upstream1.Brightness;
    readonly primary: upstream2.Color;
    readonly onPrimary: upstream2.Color;
    readonly primaryContainer: upstream2.Color;
    readonly onPrimaryContainer: upstream2.Color;
    readonly primaryFixed: upstream2.Color;
    readonly primaryFixedDim: upstream2.Color;
    readonly onPrimaryFixed: upstream2.Color;
    readonly onPrimaryFixedVariant: upstream2.Color;
    readonly secondary: upstream2.Color;
    readonly onSecondary: upstream2.Color;
    readonly secondaryContainer: upstream2.Color;
    readonly onSecondaryContainer: upstream2.Color;
    readonly secondaryFixed: upstream2.Color;
    readonly secondaryFixedDim: upstream2.Color;
    readonly onSecondaryFixed: upstream2.Color;
    readonly onSecondaryFixedVariant: upstream2.Color;
    readonly tertiary: upstream2.Color;
    readonly onTertiary: upstream2.Color;
    readonly tertiaryContainer: upstream2.Color;
    readonly onTertiaryContainer: upstream2.Color;
    readonly tertiaryFixed: upstream2.Color;
    readonly tertiaryFixedDim: upstream2.Color;
    readonly onTertiaryFixed: upstream2.Color;
    readonly onTertiaryFixedVariant: upstream2.Color;
    readonly error: upstream2.Color;
    readonly onError: upstream2.Color;
    readonly errorContainer: upstream2.Color;
    readonly onErrorContainer: upstream2.Color;
    readonly surface: upstream2.Color;
    readonly onSurface: upstream2.Color;
    readonly surfaceVariant: upstream2.Color;
    readonly surfaceDim: upstream2.Color;
    readonly surfaceBright: upstream2.Color;
    readonly surfaceContainerLowest: upstream2.Color;
    readonly surfaceContainerLow: upstream2.Color;
    readonly surfaceContainer: upstream2.Color;
    readonly surfaceContainerHigh: upstream2.Color;
    readonly surfaceContainerHighest: upstream2.Color;
    readonly onSurfaceVariant: upstream2.Color;
    readonly outline: upstream2.Color;
    readonly outlineVariant: upstream2.Color;
    readonly shadow: upstream2.Color;
    readonly scrim: upstream2.Color;
    readonly inverseSurface: upstream2.Color;
    readonly onInverseSurface: upstream2.Color;
    readonly inversePrimary: upstream2.Color;
    readonly surfaceTint: upstream2.Color;
    readonly background: upstream2.Color;
    readonly onBackground: upstream2.Color;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream7.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream9.DiagnosticsTreeStyle | null | undefined;
    }): upstream8.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        background?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        brightness?: upstream1.Brightness | null | undefined;
        error?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        errorContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        inversePrimary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        inverseSurface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onBackground?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onError?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onErrorContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onInverseSurface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimaryFixedVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondaryFixedVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSurface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSurfaceVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiaryFixedVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        outline?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        outlineVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryFixedDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        scrim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondaryFixedDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        shadow?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceBright?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerHigh?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerHighest?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerLow?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerLowest?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceTint?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiaryFixedDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
    }): ColorScheme;
}
export declare function _ColorSchemeFactory(options: {
    brightness: upstream1.Brightness;
    primary: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    onPrimary: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    primaryContainer?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    onPrimaryContainer?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    primaryFixed?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    primaryFixedDim?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    onPrimaryFixed?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    onPrimaryFixedVariant?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    secondary: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    onSecondary: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    secondaryContainer?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    onSecondaryContainer?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    secondaryFixed?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    secondaryFixedDim?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    onSecondaryFixed?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    onSecondaryFixedVariant?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    tertiary?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    onTertiary?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    tertiaryContainer?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    onTertiaryContainer?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    tertiaryFixed?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    tertiaryFixedDim?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    onTertiaryFixed?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    onTertiaryFixedVariant?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    error: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    onError: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    errorContainer?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    onErrorContainer?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    surface: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    onSurface: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    surfaceDim?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    surfaceBright?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    surfaceContainerLowest?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    surfaceContainerLow?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    surfaceContainer?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    surfaceContainerHigh?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    surfaceContainerHighest?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    onSurfaceVariant?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    outline?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    outlineVariant?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    shadow?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    scrim?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    inverseSurface?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    onInverseSurface?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    inversePrimary?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    surfaceTint?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    background?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    onBackground?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    surfaceVariant?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
}): ColorScheme;
export declare namespace _ColorSchemeFactory {
    function fromSeed(options: {
        seedColor: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        brightness?: upstream1.Brightness | undefined;
        dynamicSchemeVariant?: upstream3.DynamicSchemeVariant | undefined;
        contrastLevel?: number | undefined;
        primary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryFixedDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimaryFixedVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondaryFixedDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondaryFixedVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiaryFixedDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiaryFixedVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        error?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onError?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        errorContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onErrorContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        outline?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        outlineVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSurface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceBright?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerLowest?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerLow?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerHigh?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerHighest?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSurfaceVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        inverseSurface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onInverseSurface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        inversePrimary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        shadow?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        scrim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceTint?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        background?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onBackground?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
    }): ColorScheme;
}
export declare namespace _ColorSchemeFactory {
    function light(options?: {
        brightness?: upstream1.Brightness | undefined;
        primary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        onPrimary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        primaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryFixedDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimaryFixedVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        onSecondary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        secondaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondaryFixedDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondaryFixedVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiaryFixedDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiaryFixedVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        error?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        onError?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        errorContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onErrorContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        onSurface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        surfaceDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceBright?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerLowest?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerLow?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerHigh?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerHighest?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSurfaceVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        outline?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        outlineVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        shadow?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        scrim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        inverseSurface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onInverseSurface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        inversePrimary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceTint?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        background?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onBackground?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
    }): ColorScheme;
}
export declare namespace _ColorSchemeFactory {
    function dark(options?: {
        brightness?: upstream1.Brightness | undefined;
        primary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        onPrimary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        primaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryFixedDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimaryFixedVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        onSecondary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        secondaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondaryFixedDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondaryFixedVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiaryFixedDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiaryFixedVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        error?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        onError?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        errorContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onErrorContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        onSurface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        surfaceDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceBright?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerLowest?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerLow?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerHigh?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerHighest?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSurfaceVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        outline?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        outlineVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        shadow?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        scrim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        inverseSurface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onInverseSurface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        inversePrimary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceTint?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        background?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onBackground?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
    }): ColorScheme;
}
export declare namespace _ColorSchemeFactory {
    function highContrastLight(options?: {
        brightness?: upstream1.Brightness | undefined;
        primary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        onPrimary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        primaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryFixedDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimaryFixedVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        onSecondary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        secondaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondaryFixedDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondaryFixedVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiaryFixedDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiaryFixedVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        error?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        onError?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        errorContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onErrorContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        onSurface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        surfaceDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceBright?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerLowest?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerLow?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerHigh?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerHighest?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSurfaceVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        outline?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        outlineVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        shadow?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        scrim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        inverseSurface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onInverseSurface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        inversePrimary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceTint?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        background?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onBackground?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
    }): ColorScheme;
}
export declare namespace _ColorSchemeFactory {
    function highContrastDark(options?: {
        brightness?: upstream1.Brightness | undefined;
        primary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        onPrimary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        primaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryFixedDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimaryFixedVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        onSecondary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        secondaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondaryFixedDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondaryFixedVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiaryFixedDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiaryFixedVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        error?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        onError?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        errorContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onErrorContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        onSurface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        surfaceDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceBright?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerLowest?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerLow?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerHigh?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerHighest?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSurfaceVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        outline?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        outlineVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        shadow?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        scrim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        inverseSurface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onInverseSurface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        inversePrimary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceTint?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        background?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onBackground?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
    }): ColorScheme;
}
export declare namespace _ColorSchemeFactory {
    function fromSwatch(options?: {
        primarySwatch?: (Readonly<{
            "__flaxBound:package:flutter/src/material/colors.dart::MaterialColor": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/colors.dart::ColorSwatch": readonly [number];
        }> & Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>) | undefined;
        accentColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        cardColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        errorColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        brightness?: upstream1.Brightness | undefined;
    }): ColorScheme;
}
export interface _ColorSchemeNative extends ColorScheme {
    readonly [_flaxDartTypeValue]: _ColorSchemeNative;
    readonly [_flaxDartConstructors]?: {
        "": (options: {
            brightness: upstream1.Brightness;
            primary: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }>;
            onPrimary: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }>;
            primaryContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onPrimaryContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            primaryFixed?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            primaryFixedDim?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onPrimaryFixed?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onPrimaryFixedVariant?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            secondary: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }>;
            onSecondary: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }>;
            secondaryContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onSecondaryContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            secondaryFixed?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            secondaryFixedDim?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onSecondaryFixed?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onSecondaryFixedVariant?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            tertiary?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onTertiary?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            tertiaryContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onTertiaryContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            tertiaryFixed?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            tertiaryFixedDim?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onTertiaryFixed?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onTertiaryFixedVariant?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            error: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }>;
            onError: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }>;
            errorContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onErrorContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surface: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }>;
            onSurface: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }>;
            surfaceDim?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceBright?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceContainerLowest?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceContainerLow?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceContainerHigh?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceContainerHighest?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onSurfaceVariant?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            outline?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            outlineVariant?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            shadow?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            scrim?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            inverseSurface?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onInverseSurface?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            inversePrimary?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceTint?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            background?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onBackground?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceVariant?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
        }) => void;
        "light": (options?: {
            brightness?: upstream1.Brightness | undefined;
            primary?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            onPrimary?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            primaryContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onPrimaryContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            primaryFixed?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            primaryFixedDim?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onPrimaryFixed?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onPrimaryFixedVariant?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            secondary?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            onSecondary?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            secondaryContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onSecondaryContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            secondaryFixed?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            secondaryFixedDim?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onSecondaryFixed?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onSecondaryFixedVariant?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            tertiary?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onTertiary?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            tertiaryContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onTertiaryContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            tertiaryFixed?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            tertiaryFixedDim?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onTertiaryFixed?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onTertiaryFixedVariant?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            error?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            onError?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            errorContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onErrorContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surface?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            onSurface?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            surfaceDim?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceBright?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceContainerLowest?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceContainerLow?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceContainerHigh?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceContainerHighest?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onSurfaceVariant?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            outline?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            outlineVariant?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            shadow?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            scrim?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            inverseSurface?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onInverseSurface?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            inversePrimary?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceTint?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            background?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onBackground?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceVariant?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
        }) => void;
        "dark": (options?: {
            brightness?: upstream1.Brightness | undefined;
            primary?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            onPrimary?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            primaryContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onPrimaryContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            primaryFixed?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            primaryFixedDim?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onPrimaryFixed?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onPrimaryFixedVariant?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            secondary?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            onSecondary?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            secondaryContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onSecondaryContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            secondaryFixed?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            secondaryFixedDim?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onSecondaryFixed?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onSecondaryFixedVariant?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            tertiary?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onTertiary?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            tertiaryContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onTertiaryContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            tertiaryFixed?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            tertiaryFixedDim?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onTertiaryFixed?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onTertiaryFixedVariant?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            error?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            onError?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            errorContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onErrorContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surface?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            onSurface?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            surfaceDim?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceBright?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceContainerLowest?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceContainerLow?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceContainerHigh?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceContainerHighest?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onSurfaceVariant?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            outline?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            outlineVariant?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            shadow?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            scrim?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            inverseSurface?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onInverseSurface?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            inversePrimary?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceTint?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            background?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onBackground?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceVariant?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
        }) => void;
        "highContrastLight": (options?: {
            brightness?: upstream1.Brightness | undefined;
            primary?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            onPrimary?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            primaryContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onPrimaryContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            primaryFixed?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            primaryFixedDim?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onPrimaryFixed?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onPrimaryFixedVariant?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            secondary?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            onSecondary?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            secondaryContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onSecondaryContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            secondaryFixed?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            secondaryFixedDim?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onSecondaryFixed?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onSecondaryFixedVariant?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            tertiary?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onTertiary?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            tertiaryContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onTertiaryContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            tertiaryFixed?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            tertiaryFixedDim?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onTertiaryFixed?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onTertiaryFixedVariant?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            error?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            onError?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            errorContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onErrorContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surface?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            onSurface?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            surfaceDim?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceBright?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceContainerLowest?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceContainerLow?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceContainerHigh?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceContainerHighest?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onSurfaceVariant?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            outline?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            outlineVariant?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            shadow?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            scrim?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            inverseSurface?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onInverseSurface?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            inversePrimary?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceTint?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            background?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onBackground?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceVariant?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
        }) => void;
        "highContrastDark": (options?: {
            brightness?: upstream1.Brightness | undefined;
            primary?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            onPrimary?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            primaryContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onPrimaryContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            primaryFixed?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            primaryFixedDim?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onPrimaryFixed?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onPrimaryFixedVariant?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            secondary?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            onSecondary?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            secondaryContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onSecondaryContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            secondaryFixed?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            secondaryFixedDim?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onSecondaryFixed?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onSecondaryFixedVariant?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            tertiary?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onTertiary?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            tertiaryContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onTertiaryContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            tertiaryFixed?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            tertiaryFixedDim?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onTertiaryFixed?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onTertiaryFixedVariant?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            error?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            onError?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            errorContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onErrorContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surface?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            onSurface?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            surfaceDim?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceBright?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceContainerLowest?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceContainerLow?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceContainer?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceContainerHigh?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceContainerHighest?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onSurfaceVariant?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            outline?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            outlineVariant?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            shadow?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            scrim?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            inverseSurface?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onInverseSurface?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            inversePrimary?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceTint?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            background?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            onBackground?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceVariant?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
        }) => void;
    };
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream7.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream9.DiagnosticsTreeStyle | null | undefined;
    }): upstream8.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        brightness?: upstream1.Brightness | null | undefined;
        primary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryFixedDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimaryFixedVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondaryFixedDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondaryFixedVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiaryFixedDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiaryFixedVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        error?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onError?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        errorContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onErrorContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSurface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceBright?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerLowest?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerLow?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerHigh?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerHighest?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSurfaceVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        outline?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        outlineVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        shadow?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        scrim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        inverseSurface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onInverseSurface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        inversePrimary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceTint?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        background?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onBackground?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
    }): ColorScheme;
    get brightness(): upstream1.Brightness;
    get primary(): upstream2.Color;
    get onPrimary(): upstream2.Color;
    get primaryContainer(): upstream2.Color;
    get onPrimaryContainer(): upstream2.Color;
    get primaryFixed(): upstream2.Color;
    get primaryFixedDim(): upstream2.Color;
    get onPrimaryFixed(): upstream2.Color;
    get onPrimaryFixedVariant(): upstream2.Color;
    get secondary(): upstream2.Color;
    get onSecondary(): upstream2.Color;
    get secondaryContainer(): upstream2.Color;
    get onSecondaryContainer(): upstream2.Color;
    get secondaryFixed(): upstream2.Color;
    get secondaryFixedDim(): upstream2.Color;
    get onSecondaryFixed(): upstream2.Color;
    get onSecondaryFixedVariant(): upstream2.Color;
    get tertiary(): upstream2.Color;
    get onTertiary(): upstream2.Color;
    get tertiaryContainer(): upstream2.Color;
    get onTertiaryContainer(): upstream2.Color;
    get tertiaryFixed(): upstream2.Color;
    get tertiaryFixedDim(): upstream2.Color;
    get onTertiaryFixed(): upstream2.Color;
    get onTertiaryFixedVariant(): upstream2.Color;
    get error(): upstream2.Color;
    get onError(): upstream2.Color;
    get errorContainer(): upstream2.Color;
    get onErrorContainer(): upstream2.Color;
    get surface(): upstream2.Color;
    get onSurface(): upstream2.Color;
    get surfaceVariant(): upstream2.Color;
    get surfaceDim(): upstream2.Color;
    get surfaceBright(): upstream2.Color;
    get surfaceContainerLowest(): upstream2.Color;
    get surfaceContainerLow(): upstream2.Color;
    get surfaceContainer(): upstream2.Color;
    get surfaceContainerHigh(): upstream2.Color;
    get surfaceContainerHighest(): upstream2.Color;
    get onSurfaceVariant(): upstream2.Color;
    get outline(): upstream2.Color;
    get outlineVariant(): upstream2.Color;
    get shadow(): upstream2.Color;
    get scrim(): upstream2.Color;
    get inverseSurface(): upstream2.Color;
    get onInverseSurface(): upstream2.Color;
    get inversePrimary(): upstream2.Color;
    get surfaceTint(): upstream2.Color;
    get background(): upstream2.Color;
    get onBackground(): upstream2.Color;
}
export declare abstract class _ColorSchemeNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ColorScheme>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ColorScheme;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:ColorScheme", readonly [], false];
    constructor(options: {
        brightness: upstream1.Brightness;
        primary: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        onPrimary: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        primaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryFixedDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimaryFixedVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondary: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        onSecondary: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        secondaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondaryFixedDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondaryFixedVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiaryFixedDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiaryFixedVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        error: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        onError: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        errorContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onErrorContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surface: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        onSurface: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        surfaceDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceBright?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerLowest?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerLow?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerHigh?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerHighest?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSurfaceVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        outline?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        outlineVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        shadow?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        scrim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        inverseSurface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onInverseSurface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        inversePrimary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceTint?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        background?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onBackground?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
    });
    constructor(call: _FlaxProxySuper<_ColorSchemeNative>);
}
export declare namespace _ColorSchemeFactory {
    function implement(args: [options: {
        brightness: upstream1.Brightness;
        primary: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        onPrimary: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        primaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryFixedDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimaryFixedVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondary: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        onSecondary: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        secondaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondaryFixedDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondaryFixedVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiaryFixedDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiaryFixedVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        error: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        onError: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        errorContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onErrorContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surface: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        onSurface: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        surfaceDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceBright?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerLowest?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerLow?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerHigh?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerHighest?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSurfaceVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        outline?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        outlineVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        shadow?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        scrim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        inverseSurface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onInverseSurface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        inversePrimary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceTint?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        background?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onBackground?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
    }], implementation: {}): ColorScheme;
}
declare const _ColorSchemeBinding: typeof _ColorSchemeFactory & (new (options: {
    brightness: upstream1.Brightness;
    primary: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    onPrimary: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    primaryContainer?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    onPrimaryContainer?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    primaryFixed?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    primaryFixedDim?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    onPrimaryFixed?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    onPrimaryFixedVariant?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    secondary: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    onSecondary: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    secondaryContainer?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    onSecondaryContainer?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    secondaryFixed?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    secondaryFixedDim?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    onSecondaryFixed?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    onSecondaryFixedVariant?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    tertiary?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    onTertiary?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    tertiaryContainer?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    onTertiaryContainer?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    tertiaryFixed?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    tertiaryFixedDim?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    onTertiaryFixed?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    onTertiaryFixedVariant?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    error: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    onError: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    errorContainer?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    onErrorContainer?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    surface: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    onSurface: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    surfaceDim?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    surfaceBright?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    surfaceContainerLowest?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    surfaceContainerLow?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    surfaceContainer?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    surfaceContainerHigh?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    surfaceContainerHighest?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    onSurfaceVariant?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    outline?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    outlineVariant?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    shadow?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    scrim?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    inverseSurface?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    onInverseSurface?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    inversePrimary?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    surfaceTint?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    background?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    onBackground?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    surfaceVariant?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
}) => _ColorSchemeNative) & (new (call: _FlaxProxySuper<_ColorSchemeNative>) => _ColorSchemeNative);
export declare namespace _ColorSchemeFactory {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/material/color_scheme.dart::ColorScheme": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, b: Readonly<{
        "__flaxBound:package:flutter/src/material/color_scheme.dart::ColorScheme": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, t: number): ColorScheme;
}
export declare namespace _ColorSchemeFactory {
    function fromImageProvider(options: {
        background?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        brightness?: upstream1.Brightness | undefined;
        contrastLevel?: number | undefined;
        dynamicSchemeVariant?: upstream3.DynamicSchemeVariant | undefined;
        error?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        errorContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        inversePrimary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        inverseSurface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onBackground?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onError?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onErrorContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onInverseSurface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onPrimaryFixedVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSecondaryFixedVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSurface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onSurfaceVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        onTertiaryFixedVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        outline?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        outlineVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryFixedDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        provider: Readonly<{
            "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}];
        }>;
        scrim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondaryFixedDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        shadow?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surface?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceBright?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerHigh?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerHighest?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerLow?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceContainerLowest?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceTint?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceVariant?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiary?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiaryContainer?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiaryFixed?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tertiaryFixedDim?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
    }): Promise<ColorScheme>;
}
export declare namespace _ColorSchemeFactory {
    function of(context: upstream6.BuildContext): ColorScheme;
}
export declare const ColorScheme: typeof _ColorSchemeBinding & _FlaxInstanceType<ColorScheme> & _FlaxDartType<ColorScheme, readonly ["class", "flax.core/sdk_material#type:ColorScheme", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "brightness" | "primary" | "onPrimary" | "primaryContainer" | "onPrimaryContainer" | "primaryFixed" | "primaryFixedDim" | "onPrimaryFixed" | "onPrimaryFixedVariant" | "secondary" | "onSecondary" | "secondaryContainer" | "onSecondaryContainer" | "secondaryFixed" | "secondaryFixedDim" | "onSecondaryFixed" | "onSecondaryFixedVariant" | "tertiary" | "onTertiary" | "tertiaryContainer" | "onTertiaryContainer" | "tertiaryFixed" | "tertiaryFixedDim" | "onTertiaryFixed" | "onTertiaryFixedVariant" | "error" | "onError" | "errorContainer" | "onErrorContainer" | "surface" | "onSurface" | "surfaceVariant" | "surfaceDim" | "surfaceBright" | "surfaceContainerLowest" | "surfaceContainerLow" | "surfaceContainer" | "surfaceContainerHigh" | "surfaceContainerHighest" | "onSurfaceVariant" | "outline" | "outlineVariant" | "shadow" | "scrim" | "inverseSurface" | "onInverseSurface" | "inversePrimary" | "surfaceTint" | "background" | "onBackground" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:flutter/src/material/color_scheme.dart::ColorScheme" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
