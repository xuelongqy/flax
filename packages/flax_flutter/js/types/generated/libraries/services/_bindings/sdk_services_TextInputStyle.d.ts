import { type FlaxInstanceType as _FlaxInstanceType, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_FontWeight';
import '@flax/dart/ui/_bindings/flutter_FontWeight';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_TextAlign';
import '@flax/dart/ui/_bindings/flutter_TextAlign';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextInputStyle extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::TextInputStyle": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __TextInputStyle: unique symbol;
    readonly [_flaxDartTypeValue]: TextInputStyle;
    readonly fontFamily: string | null;
    readonly fontSize: number | null;
    readonly fontWeight: upstream1.FontWeight | null;
    readonly textDirection: upstream2.TextDirection;
    readonly textAlign: upstream3.TextAlign;
    readonly letterSpacing: number | null;
    readonly wordSpacing: number | null;
    readonly lineHeight: number | null;
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
    toJson(): DartMap<string, unknown | null>;
}
export declare function _TextInputStyleFactory(options: {
    fontFamily?: string | null | undefined;
    fontSize?: number | null | undefined;
    fontWeight?: Readonly<{
        "__flaxBound:dart:ui::FontWeight": readonly [];
    }> | null | undefined;
    textDirection: upstream2.TextDirection;
    textAlign: upstream3.TextAlign;
    letterSpacing?: number | null | undefined;
    wordSpacing?: number | null | undefined;
    lineHeight?: number | null | undefined;
}): TextInputStyle;
export declare const TextInputStyle: typeof _TextInputStyleFactory & _FlaxInstanceType<TextInputStyle> & _FlaxDartType<TextInputStyle, readonly ["class", "flax.core/sdk_services#type:TextInputStyle", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "fontFamily" | "fontSize" | "fontWeight" | "textDirection" | "textAlign" | "letterSpacing" | "wordSpacing" | "lineHeight" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "toJson" | "__flaxBound:package:flutter/src/services/text_input.dart::TextInputStyle" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
