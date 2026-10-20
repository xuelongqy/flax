import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type DartMapInput, type DartSet, type DartSetInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesConstraint';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesConstraint';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_FontWeight';
import '@flax/dart/ui/_bindings/flutter_FontWeight';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_FontStyle';
import '@flax/dart/ui/_bindings/flutter_FontStyle';
import type * as upstream8 from '@flax/dart/ui/_bindings/flutter_TextBaseline';
import '@flax/dart/ui/_bindings/flutter_TextBaseline';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextLeadingDistribution';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextLeadingDistribution';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import type * as upstream12 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextDecoration';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextDecoration';
import type * as upstream13 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextDecorationStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextDecorationStyle';
import type * as upstream14 from '@flax/dart/ui/_bindings/sdk_dart_ui_Shadow';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Shadow';
import type * as upstream15 from '@flax/dart/ui/_bindings/sdk_dart_ui_FontFeature';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FontFeature';
import type * as upstream16 from '@flax/dart/ui/_bindings/sdk_dart_ui_FontVariation';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FontVariation';
import type * as upstream17 from '@flax/flutter/painting/_bindings/flutter_TextOverflow';
import '@flax/flutter/painting/_bindings/flutter_TextOverflow';
import type * as upstream18 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextStyle';
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
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream27 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream28 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream29 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
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
    readonly inherit: boolean;
    readonly color: upstream5.Color | null;
    readonly backgroundColor: upstream5.Color | null;
    readonly fontFamily: string | null;
    readonly fontFamilyFallback: DartList<string> | null;
    readonly fontSize: number | null;
    readonly fontWeight: upstream6.FontWeight | null;
    readonly fontStyle: upstream7.FontStyle | null;
    readonly letterSpacing: number | null;
    readonly wordSpacing: number | null;
    readonly textBaseline: upstream8.TextBaseline | null;
    readonly height: number | null;
    readonly leadingDistribution: upstream9.TextLeadingDistribution | null;
    readonly locale: upstream10.Locale | null;
    readonly foreground: upstream11.Paint | null;
    readonly background: upstream11.Paint | null;
    readonly decoration: upstream12.TextDecoration | null;
    readonly decorationColor: upstream5.Color | null;
    readonly decorationStyle: upstream13.TextDecorationStyle | null;
    readonly decorationThickness: number | null;
    readonly debugLabel: string | null;
    readonly shadows: DartList<upstream14.Shadow> | null;
    readonly fontFeatures: DartList<upstream15.FontFeature> | null;
    readonly fontVariations: DartList<upstream16.FontVariation> | null;
    readonly overflow: upstream17.TextOverflow | null;
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
        fontFeatures?: DartListInput<upstream15.FontFeature, Readonly<{
            "__flaxBound:dart:ui::FontFeature": readonly [];
        }>> | null | undefined;
        fontSize?: number | null | undefined;
        fontStyle?: upstream7.FontStyle | null | undefined;
        fontVariations?: DartListInput<upstream16.FontVariation, Readonly<{
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
        leadingDistribution?: upstream9.TextLeadingDistribution | null | undefined;
        letterSpacing?: number | null | undefined;
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        overflow?: upstream17.TextOverflow | null | undefined;
        package?: string | null | undefined;
        shadows?: DartListInput<upstream14.Shadow, Readonly<{
            "__flaxBound:dart:ui::Shadow": readonly [];
        }>> | null | undefined;
        textBaseline?: upstream8.TextBaseline | null | undefined;
        wordSpacing?: number | null | undefined;
    }): upstream0.TextStyle;
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
        fontFeatures?: DartListInput<upstream15.FontFeature, Readonly<{
            "__flaxBound:dart:ui::FontFeature": readonly [];
        }>> | null | undefined;
        fontSizeDelta?: number | undefined;
        fontSizeFactor?: number | undefined;
        fontStyle?: upstream7.FontStyle | null | undefined;
        fontVariations?: DartListInput<upstream16.FontVariation, Readonly<{
            "__flaxBound:dart:ui::FontVariation": readonly [];
        }>> | null | undefined;
        fontWeightDelta?: number | undefined;
        heightDelta?: number | undefined;
        heightFactor?: number | undefined;
        leadingDistribution?: upstream9.TextLeadingDistribution | null | undefined;
        letterSpacingDelta?: number | undefined;
        letterSpacingFactor?: number | undefined;
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        overflow?: upstream17.TextOverflow | null | undefined;
        package?: string | null | undefined;
        shadows?: DartListInput<upstream14.Shadow, Readonly<{
            "__flaxBound:dart:ui::Shadow": readonly [];
        }>> | null | undefined;
        textBaseline?: upstream8.TextBaseline | null | undefined;
        wordSpacingDelta?: number | undefined;
        wordSpacingFactor?: number | undefined;
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
    }): upstream18.TextStyle;
    getParagraphStyle(options?: {
        ellipsis?: string | null | undefined;
        fontFamily?: string | null | undefined;
        fontSize?: number | null | undefined;
        fontStyle?: upstream7.FontStyle | null | undefined;
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
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>, options?: {
        prefix?: string | undefined;
    }): void;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream28.DiagnosticsTreeStyle | null | undefined;
    }): upstream27.DiagnosticsNode;
    toString(options?: {
        minLevel?: upstream29.DiagnosticLevel | undefined;
    }): string;
    resolve(states: DartSetInput<upstream3.WidgetState, upstream3.WidgetState>): upstream0.TextStyle;
}
export declare namespace _WidgetStateTextStyleFactory {
    function resolveWith(callback: ((states: DartSet<upstream3.WidgetState>) => Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>)): WidgetStateTextStyle;
}
export declare namespace _WidgetStateTextStyleFactory {
    function fromMap(map: DartMapInput<upstream4.WidgetStatesConstraint, upstream0.TextStyle, Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [];
    }>, Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>): WidgetStateTextStyle;
}
export interface _WidgetStateTextStyleNative extends WidgetStateTextStyle {
    readonly [_flaxDartTypeValue]: _WidgetStateTextStyleNative;
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
        fontStyle?: upstream7.FontStyle | null | undefined;
        letterSpacing?: number | null | undefined;
        wordSpacing?: number | null | undefined;
        textBaseline?: upstream8.TextBaseline | null | undefined;
        height?: number | null | undefined;
        leadingDistribution?: upstream9.TextLeadingDistribution | null | undefined;
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        foreground?: Readonly<{
            "__flaxBound:dart:ui::Paint": readonly [];
        }> | null | undefined;
        background?: Readonly<{
            "__flaxBound:dart:ui::Paint": readonly [];
        }> | null | undefined;
        shadows?: DartListInput<upstream14.Shadow, Readonly<{
            "__flaxBound:dart:ui::Shadow": readonly [];
        }>> | null | undefined;
        fontFeatures?: DartListInput<upstream15.FontFeature, Readonly<{
            "__flaxBound:dart:ui::FontFeature": readonly [];
        }>> | null | undefined;
        fontVariations?: DartListInput<upstream16.FontVariation, Readonly<{
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
        overflow?: upstream17.TextOverflow | null | undefined;
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
        decorationStyle?: upstream13.TextDecorationStyle | null | undefined;
        decorationThicknessFactor?: number | undefined;
        decorationThicknessDelta?: number | undefined;
        fontFamily?: string | null | undefined;
        fontFamilyFallback?: DartListInput<string, string> | null | undefined;
        fontSizeFactor?: number | undefined;
        fontSizeDelta?: number | undefined;
        fontWeightDelta?: number | undefined;
        fontStyle?: upstream7.FontStyle | null | undefined;
        letterSpacingFactor?: number | undefined;
        letterSpacingDelta?: number | undefined;
        wordSpacingFactor?: number | undefined;
        wordSpacingDelta?: number | undefined;
        heightFactor?: number | undefined;
        heightDelta?: number | undefined;
        textBaseline?: upstream8.TextBaseline | null | undefined;
        leadingDistribution?: upstream9.TextLeadingDistribution | null | undefined;
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        shadows?: DartListInput<upstream14.Shadow, Readonly<{
            "__flaxBound:dart:ui::Shadow": readonly [];
        }>> | null | undefined;
        fontFeatures?: DartListInput<upstream15.FontFeature, Readonly<{
            "__flaxBound:dart:ui::FontFeature": readonly [];
        }>> | null | undefined;
        fontVariations?: DartListInput<upstream16.FontVariation, Readonly<{
            "__flaxBound:dart:ui::FontVariation": readonly [];
        }>> | null | undefined;
        package?: string | null | undefined;
        overflow?: upstream17.TextOverflow | null | undefined;
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
    }): upstream18.TextStyle;
    getParagraphStyle(options?: {
        textAlign?: upstream22.TextAlign | null | undefined;
        textDirection?: upstream23.TextDirection | null | undefined;
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
        fontStyle?: upstream7.FontStyle | null | undefined;
        height?: number | null | undefined;
        strutStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): upstream20.ParagraphStyle;
    compareTo(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): upstream25.RenderComparison;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>, options?: {
        prefix?: string | undefined;
    }): void;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream28.DiagnosticsTreeStyle | null | undefined;
    }): upstream27.DiagnosticsNode;
    toString(options?: {
        minLevel?: upstream29.DiagnosticLevel | undefined;
    }): string;
    get inherit(): boolean;
    get color(): upstream5.Color | null;
    get backgroundColor(): upstream5.Color | null;
    get fontFamily(): string | null;
    get fontFamilyFallback(): DartList<string> | null;
    get fontSize(): number | null;
    get fontWeight(): upstream6.FontWeight | null;
    get fontStyle(): upstream7.FontStyle | null;
    get letterSpacing(): number | null;
    get wordSpacing(): number | null;
    get textBaseline(): upstream8.TextBaseline | null;
    get height(): number | null;
    get leadingDistribution(): upstream9.TextLeadingDistribution | null;
    get locale(): upstream10.Locale | null;
    get foreground(): upstream11.Paint | null;
    get background(): upstream11.Paint | null;
    get decoration(): upstream12.TextDecoration | null;
    get decorationColor(): upstream5.Color | null;
    get decorationStyle(): upstream13.TextDecorationStyle | null;
    get decorationThickness(): number | null;
    get debugLabel(): string | null;
    get shadows(): DartList<upstream14.Shadow> | null;
    get fontFeatures(): DartList<upstream15.FontFeature> | null;
    get fontVariations(): DartList<upstream16.FontVariation> | null;
    get overflow(): upstream17.TextOverflow | null;
}
export declare abstract class _WidgetStateTextStyleNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WidgetStateTextStyle>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: WidgetStateTextStyle;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:WidgetStateTextStyle", readonly [], false];
    constructor();
    abstract resolve(states: DartSetInput<upstream3.WidgetState, upstream3.WidgetState>): upstream0.TextStyle;
}
export declare namespace _WidgetStateTextStyleFactory {
    function implement(args: [], implementation: {
        resolve: ((states: DartSet<upstream3.WidgetState>) => Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>);
    }): WidgetStateTextStyle;
}
declare const _WidgetStateTextStyleBinding: typeof _WidgetStateTextStyleFactory & (abstract new () => _WidgetStateTextStyleNative);
export declare const WidgetStateTextStyle: typeof _WidgetStateTextStyleBinding & _FlaxInstanceType<WidgetStateTextStyle> & _FlaxDartType<WidgetStateTextStyle, readonly ["class", "flax.core/sdk_widgets#type:WidgetStateTextStyle", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "inherit" | "color" | "backgroundColor" | "fontFamily" | "fontFamilyFallback" | "fontSize" | "fontWeight" | "fontStyle" | "letterSpacing" | "wordSpacing" | "textBaseline" | "height" | "leadingDistribution" | "locale" | "foreground" | "background" | "decoration" | "decorationColor" | "decorationStyle" | "decorationThickness" | "debugLabel" | "shadows" | "fontFeatures" | "fontVariations" | "overflow" | "copyWith" | "apply" | "merge" | "getTextStyle" | "getParagraphStyle" | "compareTo" | "toStringShort" | "debugFillProperties" | "toDiagnosticsNode" | "toString" | "resolve" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateTextStyle" | "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty";
export {};
