import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextLeadingDistribution';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextLeadingDistribution';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_FontWeight';
import '@flax/dart/ui/_bindings/flutter_FontWeight';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_FontStyle';
import '@flax/dart/ui/_bindings/flutter_FontStyle';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/painting/_bindings/sdk_painting_RenderComparison';
import '@flax/flutter/painting/_bindings/sdk_painting_RenderComparison';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface StrutStyle extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __StrutStyle: unique symbol;
    readonly [_flaxDartTypeValue]: StrutStyle;
}
export interface StrutStyle {
    readonly [_flaxDartTypeValue]: StrutStyle;
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
    }>, options?: {
        prefix?: string | undefined;
    }): void;
    compareTo(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): upstream8.RenderComparison;
    inheritFromTextStyle(other: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null): StrutStyle;
    merge(other: (Readonly<{
        "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null): StrutStyle;
    get fontFamily(): string | null;
    get fontFamilyFallback(): DartList<string> | null;
    get fontSize(): number | null;
    get height(): number | null;
    get leadingDistribution(): upstream1.TextLeadingDistribution | null;
    get fontWeight(): upstream2.FontWeight | null;
    get fontStyle(): upstream3.FontStyle | null;
    get leading(): number | null;
    get forceStrutHeight(): boolean | null;
    get debugLabel(): string | null;
}
export declare abstract class StrutStyle extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<StrutStyle>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: StrutStyle;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:StrutStyle", readonly [], false];
    constructor(options?: {
        fontFamily?: string | null | undefined;
        fontFamilyFallback?: DartListInput<string, string> | null | undefined;
        fontSize?: number | null | undefined;
        height?: number | null | undefined;
        leadingDistribution?: upstream1.TextLeadingDistribution | null | undefined;
        leading?: number | null | undefined;
        fontWeight?: Readonly<{
            "__flaxBound:dart:ui::FontWeight": readonly [];
        }> | null | undefined;
        fontStyle?: upstream3.FontStyle | null | undefined;
        forceStrutHeight?: boolean | null | undefined;
        debugLabel?: string | null | undefined;
        package?: string | null | undefined;
    });
}
export declare namespace StrutStyle {
    function implement(args: [options?: {
        fontFamily?: string | null | undefined;
        fontFamilyFallback?: DartListInput<string, string> | null | undefined;
        fontSize?: number | null | undefined;
        height?: number | null | undefined;
        leadingDistribution?: upstream1.TextLeadingDistribution | null | undefined;
        leading?: number | null | undefined;
        fontWeight?: Readonly<{
            "__flaxBound:dart:ui::FontWeight": readonly [];
        }> | null | undefined;
        fontStyle?: upstream3.FontStyle | null | undefined;
        forceStrutHeight?: boolean | null | undefined;
        debugLabel?: string | null | undefined;
        package?: string | null | undefined;
    }], implementation: {}): StrutStyle;
}
export declare namespace StrutStyle {
    const disabled: StrutStyle;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "fontFamily" | "fontFamilyFallback" | "fontSize" | "height" | "leadingDistribution" | "fontWeight" | "fontStyle" | "leading" | "forceStrutHeight" | "debugLabel" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "compareTo" | "inheritFromTextStyle" | "merge" | "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
