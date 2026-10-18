import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type DartSet, type DartSetInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_FontWeight';
import '@flax/dart/ui/_bindings/flutter_FontWeight';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_FontStyle';
import '@flax/dart/ui/_bindings/flutter_FontStyle';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_TextBaseline';
import '@flax/dart/ui/_bindings/flutter_TextBaseline';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextLeadingDistribution';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextLeadingDistribution';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextDecoration';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextDecoration';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextDecorationStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextDecorationStyle';
import type * as upstream12 from '@flax/dart/ui/_bindings/sdk_dart_ui_Shadow';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Shadow';
import type * as upstream13 from '@flax/dart/ui/_bindings/sdk_dart_ui_FontFeature';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FontFeature';
import type * as upstream14 from '@flax/dart/ui/_bindings/sdk_dart_ui_FontVariation';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FontVariation';
import type * as upstream15 from '@flax/flutter/painting/_bindings/flutter_TextOverflow';
import '@flax/flutter/painting/_bindings/flutter_TextOverflow';
import type * as upstream16 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextStyle';
import '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import type * as upstream18 from '@flax/dart/ui/_bindings/sdk_dart_ui_ParagraphStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ParagraphStyle';
import '@flax/flutter/painting/_bindings/sdk_painting_StrutStyle';
import type * as upstream20 from '@flax/dart/ui/_bindings/flutter_TextAlign';
import '@flax/dart/ui/_bindings/flutter_TextAlign';
import type * as upstream21 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextHeightBehavior';
import type * as upstream23 from '@flax/flutter/painting/_bindings/sdk_painting_RenderComparison';
import '@flax/flutter/painting/_bindings/sdk_painting_RenderComparison';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream25 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream26 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream27 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream28 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface WidgetStateTextStyle extends Omit<upstream0.TextStyle, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.TextStyle>, Omit<upstream2.WidgetStateProperty<upstream0.TextStyle>, _flaxOwnMembers0 | keyof upstream0.TextStyle | keyof upstream1.Diagnosticable>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateTextStyle": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream0.TextStyle];
}> {
    readonly __WidgetStateTextStyle: unique symbol;
    readonly [_flaxDartTypeValue]: WidgetStateTextStyle;
}
export interface WidgetStateTextStyle {
    readonly [_flaxDartTypeValue]: WidgetStateTextStyle;
    copyWith(options?: {
        inherit?: boolean | null | undefined;
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
        fontStyle?: upstream5.FontStyle | null | undefined;
        letterSpacing?: number | null | undefined;
        wordSpacing?: number | null | undefined;
        textBaseline?: upstream6.TextBaseline | null | undefined;
        height?: number | null | undefined;
        leadingDistribution?: upstream7.TextLeadingDistribution | null | undefined;
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        foreground?: Readonly<{
            "__flaxBound:dart:ui::Paint": readonly [];
        }> | null | undefined;
        background?: Readonly<{
            "__flaxBound:dart:ui::Paint": readonly [];
        }> | null | undefined;
        shadows?: DartListInput<upstream12.Shadow, Readonly<{
            "__flaxBound:dart:ui::Shadow": readonly [];
        }>> | null | undefined;
        fontFeatures?: DartListInput<upstream13.FontFeature, Readonly<{
            "__flaxBound:dart:ui::FontFeature": readonly [];
        }>> | null | undefined;
        fontVariations?: DartListInput<upstream14.FontVariation, Readonly<{
            "__flaxBound:dart:ui::FontVariation": readonly [];
        }>> | null | undefined;
        decoration?: Readonly<{
            "__flaxBound:dart:ui::TextDecoration": readonly [];
        }> | null | undefined;
        decorationColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        decorationStyle?: upstream11.TextDecorationStyle | null | undefined;
        decorationThickness?: number | null | undefined;
        debugLabel?: string | null | undefined;
        fontFamily?: string | null | undefined;
        fontFamilyFallback?: DartListInput<string, string> | null | undefined;
        package?: string | null | undefined;
        overflow?: upstream15.TextOverflow | null | undefined;
    }): upstream0.TextStyle;
    apply(options?: {
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        decoration?: Readonly<{
            "__flaxBound:dart:ui::TextDecoration": readonly [];
        }> | null | undefined;
        decorationColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        decorationStyle?: upstream11.TextDecorationStyle | null | undefined;
        decorationThicknessFactor?: number | undefined;
        decorationThicknessDelta?: number | undefined;
        fontFamily?: string | null | undefined;
        fontFamilyFallback?: DartListInput<string, string> | null | undefined;
        fontSizeFactor?: number | undefined;
        fontSizeDelta?: number | undefined;
        fontWeightDelta?: number | undefined;
        fontStyle?: upstream5.FontStyle | null | undefined;
        letterSpacingFactor?: number | undefined;
        letterSpacingDelta?: number | undefined;
        wordSpacingFactor?: number | undefined;
        wordSpacingDelta?: number | undefined;
        heightFactor?: number | undefined;
        heightDelta?: number | undefined;
        textBaseline?: upstream6.TextBaseline | null | undefined;
        leadingDistribution?: upstream7.TextLeadingDistribution | null | undefined;
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        shadows?: DartListInput<upstream12.Shadow, Readonly<{
            "__flaxBound:dart:ui::Shadow": readonly [];
        }>> | null | undefined;
        fontFeatures?: DartListInput<upstream13.FontFeature, Readonly<{
            "__flaxBound:dart:ui::FontFeature": readonly [];
        }>> | null | undefined;
        fontVariations?: DartListInput<upstream14.FontVariation, Readonly<{
            "__flaxBound:dart:ui::FontVariation": readonly [];
        }>> | null | undefined;
        package?: string | null | undefined;
        overflow?: upstream15.TextOverflow | null | undefined;
    }): upstream0.TextStyle;
    merge(other: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null): upstream0.TextStyle;
    getTextStyle(options?: {
        textScaleFactor?: number | undefined;
        textScaler?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
        }> | undefined;
    }): upstream16.TextStyle;
    getParagraphStyle(options?: {
        textAlign?: upstream20.TextAlign | null | undefined;
        textDirection?: upstream21.TextDirection | null | undefined;
        textScaler?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
        }> | undefined;
        ellipsis?: string | null | undefined;
        maxLines?: number | null | undefined;
        textHeightBehavior?: Readonly<{
            "__flaxBound:dart:ui::TextHeightBehavior": readonly [];
        }> | null | undefined;
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        fontFamily?: string | null | undefined;
        fontSize?: number | null | undefined;
        fontWeight?: Readonly<{
            "__flaxBound:dart:ui::FontWeight": readonly [];
        }> | null | undefined;
        fontStyle?: upstream5.FontStyle | null | undefined;
        height?: number | null | undefined;
        strutStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): upstream18.ParagraphStyle;
    compareTo(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): upstream23.RenderComparison;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>, options?: {
        prefix?: string | undefined;
    }): void;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream26.DiagnosticsTreeStyle | null | undefined;
    }): upstream25.DiagnosticsNode;
    toString(options?: {
        minLevel?: upstream27.DiagnosticLevel | undefined;
    }): string;
    get inherit(): boolean;
    get color(): upstream3.Color | null;
    get backgroundColor(): upstream3.Color | null;
    get fontFamily(): string | null;
    get fontFamilyFallback(): DartList<string> | null;
    get fontSize(): number | null;
    get fontWeight(): upstream4.FontWeight | null;
    get fontStyle(): upstream5.FontStyle | null;
    get letterSpacing(): number | null;
    get wordSpacing(): number | null;
    get textBaseline(): upstream6.TextBaseline | null;
    get height(): number | null;
    get leadingDistribution(): upstream7.TextLeadingDistribution | null;
    get locale(): upstream8.Locale | null;
    get foreground(): upstream9.Paint | null;
    get background(): upstream9.Paint | null;
    get decoration(): upstream10.TextDecoration | null;
    get decorationColor(): upstream3.Color | null;
    get decorationStyle(): upstream11.TextDecorationStyle | null;
    get decorationThickness(): number | null;
    get debugLabel(): string | null;
    get shadows(): DartList<upstream12.Shadow> | null;
    get fontFeatures(): DartList<upstream13.FontFeature> | null;
    get fontVariations(): DartList<upstream14.FontVariation> | null;
    get overflow(): upstream15.TextOverflow | null;
}
export declare abstract class WidgetStateTextStyle extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WidgetStateTextStyle>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: WidgetStateTextStyle;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:WidgetStateTextStyle", readonly [], false];
    constructor();
    abstract resolve(states: DartSetInput<upstream28.WidgetState, upstream28.WidgetState>): upstream0.TextStyle;
}
export declare namespace WidgetStateTextStyle {
    function implement(args: [], implementation: {
        resolve: ((states: DartSet<upstream28.WidgetState>) => Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>);
    }): WidgetStateTextStyle;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "inherit" | "color" | "backgroundColor" | "fontFamily" | "fontFamilyFallback" | "fontSize" | "fontWeight" | "fontStyle" | "letterSpacing" | "wordSpacing" | "textBaseline" | "height" | "leadingDistribution" | "locale" | "foreground" | "background" | "decoration" | "decorationColor" | "decorationStyle" | "decorationThickness" | "debugLabel" | "shadows" | "fontFeatures" | "fontVariations" | "overflow" | "copyWith" | "apply" | "merge" | "getTextStyle" | "getParagraphStyle" | "compareTo" | "toStringShort" | "debugFillProperties" | "toDiagnosticsNode" | "toString" | "resolve" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateTextStyle" | "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty";
export {};
