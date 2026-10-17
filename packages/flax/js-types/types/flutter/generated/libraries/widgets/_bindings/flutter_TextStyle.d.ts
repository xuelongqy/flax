import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_FontWeight';
import '@flax/flutter/services/_bindings/flutter_FontWeight';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_FontStyle';
import '@flax/flutter/widgets/_bindings/flutter_FontStyle';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_TextBaseline';
import '@flax/flutter/widgets/_bindings/flutter_TextBaseline';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_TextOverflow';
import '@flax/flutter/widgets/_bindings/flutter_TextOverflow';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextStyle extends Readonly<{
    "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __TextStyle: unique symbol;
    readonly inherit: boolean;
    readonly color: upstream0.Color | null;
    readonly backgroundColor: upstream0.Color | null;
    readonly fontFamily: string | null;
    readonly fontFamilyFallback: DartList<string> | null;
    readonly fontSize: number | null;
    readonly fontWeight: upstream1.FontWeight | null;
    readonly fontStyle: upstream2.FontStyle | null;
    readonly letterSpacing: number | null;
    readonly wordSpacing: number | null;
    readonly textBaseline: upstream3.TextBaseline | null;
    readonly height: number | null;
    readonly decorationColor: upstream0.Color | null;
    readonly decorationThickness: number | null;
    readonly debugLabel: string | null;
    readonly overflow: upstream4.TextOverflow | null;
    copyWith(options?: {
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        debugLabel?: string | null | undefined;
        decorationColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        decorationThickness?: number | null | undefined;
        fontFamily?: string | null | undefined;
        fontFamilyFallback?: DartListInput<string, string> | null | undefined;
        fontSize?: number | null | undefined;
        fontStyle?: upstream2.FontStyle | null | undefined;
        fontWeight?: Readonly<{
            "__flaxBound:dart:ui::FontWeight": readonly [];
        }> | null | undefined;
        height?: number | null | undefined;
        inherit?: boolean | null | undefined;
        letterSpacing?: number | null | undefined;
        overflow?: upstream4.TextOverflow | null | undefined;
        package?: string | null | undefined;
        textBaseline?: upstream3.TextBaseline | null | undefined;
        wordSpacing?: number | null | undefined;
    }): TextStyle;
    apply(options?: {
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        decorationColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        decorationThicknessDelta?: number | undefined;
        decorationThicknessFactor?: number | undefined;
        fontFamily?: string | null | undefined;
        fontFamilyFallback?: DartListInput<string, string> | null | undefined;
        fontSizeDelta?: number | undefined;
        fontSizeFactor?: number | undefined;
        fontStyle?: upstream2.FontStyle | null | undefined;
        fontWeightDelta?: number | undefined;
        heightDelta?: number | undefined;
        heightFactor?: number | undefined;
        letterSpacingDelta?: number | undefined;
        letterSpacingFactor?: number | undefined;
        overflow?: upstream4.TextOverflow | null | undefined;
        package?: string | null | undefined;
        textBaseline?: upstream3.TextBaseline | null | undefined;
        wordSpacingDelta?: number | undefined;
        wordSpacingFactor?: number | undefined;
    }): TextStyle;
    merge(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null): TextStyle;
    toStringShort(): string;
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
    fontStyle?: upstream2.FontStyle | null | undefined;
    letterSpacing?: number | null | undefined;
    wordSpacing?: number | null | undefined;
    textBaseline?: upstream3.TextBaseline | null | undefined;
    height?: number | null | undefined;
    decorationColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    decorationThickness?: number | null | undefined;
    debugLabel?: string | null | undefined;
    fontFamily?: string | null | undefined;
    fontFamilyFallback?: DartListInput<string, string> | null | undefined;
    package?: string | null | undefined;
    overflow?: upstream4.TextOverflow | null | undefined;
}): TextStyle;
export declare namespace _TextStyleFactory {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null, t: number): TextStyle | null;
}
export declare const TextStyle: typeof _TextStyleFactory & _FlaxInstanceType<TextStyle> & _FlaxDartType<TextStyle, readonly ["class", "flax.core/flutter#type:TextStyle", readonly [], false]>;
