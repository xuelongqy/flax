import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextStyle';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_FontWeight';
import '@flax/dart/ui/_bindings/flutter_FontWeight';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_FontStyle';
import '@flax/dart/ui/_bindings/flutter_FontStyle';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_TextBaseline';
import '@flax/dart/ui/_bindings/flutter_TextBaseline';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextLeadingDistribution';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextLeadingDistribution';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_Shadow';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Shadow';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_FontFeature';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FontFeature';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_FontVariation';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FontVariation';
import type * as upstream12 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextDecoration';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextDecoration';
import type * as upstream13 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextDecorationStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextDecorationStyle';
import type * as upstream14 from '@flax/flutter/painting/_bindings/flutter_TextOverflow';
import '@flax/flutter/painting/_bindings/flutter_TextOverflow';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream17 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import type * as upstream20 from '@flax/dart/ui/_bindings/sdk_dart_ui_ParagraphStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ParagraphStyle';
import '@flax/flutter/painting/_bindings/sdk_painting_StrutStyle';
import type * as upstream22 from '@flax/dart/ui/_bindings/flutter_TextAlign';
import '@flax/dart/ui/_bindings/flutter_TextAlign';
import type * as upstream23 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextHeightBehavior';
import type * as upstream25 from '@flax/flutter/painting/_bindings/sdk_painting_RenderComparison';
import '@flax/flutter/painting/_bindings/sdk_painting_RenderComparison';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextStyle extends Omit<upstream1.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __TextStyle: unique symbol;
    readonly [_flaxDartTypeValue]: TextStyle;
    readonly inherit: boolean;
    readonly color: upstream2.Color | null;
    readonly backgroundColor: upstream2.Color | null;
    readonly fontFamily: string | null;
    readonly fontFamilyFallback: DartList<string> | null;
    readonly fontSize: number | null;
    readonly fontWeight: upstream3.FontWeight | null;
    readonly fontStyle: upstream4.FontStyle | null;
    readonly letterSpacing: number | null;
    readonly wordSpacing: number | null;
    readonly textBaseline: upstream5.TextBaseline | null;
    readonly height: number | null;
    readonly leadingDistribution: upstream6.TextLeadingDistribution | null;
    readonly locale: upstream7.Locale | null;
    readonly foreground: upstream8.Paint | null;
    readonly background: upstream8.Paint | null;
    readonly decoration: upstream12.TextDecoration | null;
    readonly decorationColor: upstream2.Color | null;
    readonly decorationStyle: upstream13.TextDecorationStyle | null;
    readonly decorationThickness: number | null;
    readonly debugLabel: string | null;
    readonly shadows: DartList<upstream9.Shadow> | null;
    readonly fontFeatures: DartList<upstream10.FontFeature> | null;
    readonly fontVariations: DartList<upstream11.FontVariation> | null;
    readonly overflow: upstream14.TextOverflow | null;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream15.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream17.DiagnosticsTreeStyle | null | undefined;
    }): upstream16.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>, options?: {
        prefix?: string | undefined;
    }): void;
    copyWith(options?: {
        background?: Readonly<{
            "__flaxBound:dart:ui::Paint": readonly [];
        }> | null | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        debugLabel?: string | null | undefined;
        decoration?: Readonly<{
            "__flaxBound:dart:ui::TextDecoration": readonly [];
        }> | null | undefined;
        decorationColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        decorationStyle?: upstream13.TextDecorationStyle | null | undefined;
        decorationThickness?: number | null | undefined;
        fontFamily?: string | null | undefined;
        fontFamilyFallback?: DartListInput<string, string> | null | undefined;
        fontFeatures?: DartListInput<upstream10.FontFeature, Readonly<{
            "__flaxBound:dart:ui::FontFeature": readonly [];
        }>> | null | undefined;
        fontSize?: number | null | undefined;
        fontStyle?: upstream4.FontStyle | null | undefined;
        fontVariations?: DartListInput<upstream11.FontVariation, Readonly<{
            "__flaxBound:dart:ui::FontVariation": readonly [];
        }>> | null | undefined;
        fontWeight?: Readonly<{
            "__flaxBound:dart:ui::FontWeight": readonly [];
        }> | null | undefined;
        foreground?: Readonly<{
            "__flaxBound:dart:ui::Paint": readonly [];
        }> | null | undefined;
        height?: number | null | undefined;
        inherit?: boolean | null | undefined;
        leadingDistribution?: upstream6.TextLeadingDistribution | null | undefined;
        letterSpacing?: number | null | undefined;
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        overflow?: upstream14.TextOverflow | null | undefined;
        package?: string | null | undefined;
        shadows?: DartListInput<upstream9.Shadow, Readonly<{
            "__flaxBound:dart:ui::Shadow": readonly [];
        }>> | null | undefined;
        textBaseline?: upstream5.TextBaseline | null | undefined;
        wordSpacing?: number | null | undefined;
    }): TextStyle;
    apply(options?: {
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        decoration?: Readonly<{
            "__flaxBound:dart:ui::TextDecoration": readonly [];
        }> | null | undefined;
        decorationColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        decorationStyle?: upstream13.TextDecorationStyle | null | undefined;
        decorationThicknessDelta?: number | undefined;
        decorationThicknessFactor?: number | undefined;
        fontFamily?: string | null | undefined;
        fontFamilyFallback?: DartListInput<string, string> | null | undefined;
        fontFeatures?: DartListInput<upstream10.FontFeature, Readonly<{
            "__flaxBound:dart:ui::FontFeature": readonly [];
        }>> | null | undefined;
        fontSizeDelta?: number | undefined;
        fontSizeFactor?: number | undefined;
        fontStyle?: upstream4.FontStyle | null | undefined;
        fontVariations?: DartListInput<upstream11.FontVariation, Readonly<{
            "__flaxBound:dart:ui::FontVariation": readonly [];
        }>> | null | undefined;
        fontWeightDelta?: number | undefined;
        heightDelta?: number | undefined;
        heightFactor?: number | undefined;
        leadingDistribution?: upstream6.TextLeadingDistribution | null | undefined;
        letterSpacingDelta?: number | undefined;
        letterSpacingFactor?: number | undefined;
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        overflow?: upstream14.TextOverflow | null | undefined;
        package?: string | null | undefined;
        shadows?: DartListInput<upstream9.Shadow, Readonly<{
            "__flaxBound:dart:ui::Shadow": readonly [];
        }>> | null | undefined;
        textBaseline?: upstream5.TextBaseline | null | undefined;
        wordSpacingDelta?: number | undefined;
        wordSpacingFactor?: number | undefined;
    }): TextStyle;
    merge(other: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null): TextStyle;
    getTextStyle(options?: {
        textScaleFactor?: number | undefined;
        textScaler?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
        }> | undefined;
    }): upstream0.TextStyle;
    getParagraphStyle(options?: {
        ellipsis?: string | null | undefined;
        fontFamily?: string | null | undefined;
        fontSize?: number | null | undefined;
        fontStyle?: upstream4.FontStyle | null | undefined;
        fontWeight?: Readonly<{
            "__flaxBound:dart:ui::FontWeight": readonly [];
        }> | null | undefined;
        height?: number | null | undefined;
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        maxLines?: number | null | undefined;
        strutStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        textAlign?: upstream22.TextAlign | null | undefined;
        textDirection?: upstream23.TextDirection | null | undefined;
        textHeightBehavior?: Readonly<{
            "__flaxBound:dart:ui::TextHeightBehavior": readonly [];
        }> | null | undefined;
        textScaler?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
        }> | undefined;
    }): upstream20.ParagraphStyle;
    compareTo(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): upstream25.RenderComparison;
}
export declare function _TextStyleFactory(options?: {
    inherit?: boolean | undefined;
    color?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    fontSize?: number | null | undefined;
    fontWeight?: Readonly<{
        "__flaxBound:dart:ui::FontWeight": readonly [];
    }> | null | undefined;
    fontStyle?: upstream4.FontStyle | null | undefined;
    letterSpacing?: number | null | undefined;
    wordSpacing?: number | null | undefined;
    textBaseline?: upstream5.TextBaseline | null | undefined;
    height?: number | null | undefined;
    leadingDistribution?: upstream6.TextLeadingDistribution | null | undefined;
    locale?: Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }> | null | undefined;
    foreground?: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }> | null | undefined;
    background?: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }> | null | undefined;
    shadows?: DartListInput<upstream9.Shadow, Readonly<{
        "__flaxBound:dart:ui::Shadow": readonly [];
    }>> | null | undefined;
    fontFeatures?: DartListInput<upstream10.FontFeature, Readonly<{
        "__flaxBound:dart:ui::FontFeature": readonly [];
    }>> | null | undefined;
    fontVariations?: DartListInput<upstream11.FontVariation, Readonly<{
        "__flaxBound:dart:ui::FontVariation": readonly [];
    }>> | null | undefined;
    decoration?: Readonly<{
        "__flaxBound:dart:ui::TextDecoration": readonly [];
    }> | null | undefined;
    decorationColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    decorationStyle?: upstream13.TextDecorationStyle | null | undefined;
    decorationThickness?: number | null | undefined;
    debugLabel?: string | null | undefined;
    fontFamily?: string | null | undefined;
    fontFamilyFallback?: DartListInput<string, string> | null | undefined;
    package?: string | null | undefined;
    overflow?: upstream14.TextOverflow | null | undefined;
}): TextStyle;
export declare namespace _TextStyleFactory {
    function lerp(a: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, t: number): TextStyle | null;
}
export declare const TextStyle: typeof _TextStyleFactory & _FlaxInstanceType<TextStyle> & _FlaxDartType<TextStyle, readonly ["class", "flax.core/flutter#type:TextStyle", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "inherit" | "color" | "backgroundColor" | "fontFamily" | "fontFamilyFallback" | "fontSize" | "fontWeight" | "fontStyle" | "letterSpacing" | "wordSpacing" | "textBaseline" | "height" | "leadingDistribution" | "locale" | "foreground" | "background" | "decoration" | "decorationColor" | "decorationStyle" | "decorationThickness" | "debugLabel" | "shadows" | "fontFeatures" | "fontVariations" | "overflow" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "apply" | "merge" | "getTextStyle" | "getParagraphStyle" | "compareTo" | "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
