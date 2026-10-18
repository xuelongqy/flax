import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextDecoration';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextDecorationStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextDecorationStyle';
import '@flax/dart/ui/_bindings/flutter_FontWeight';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_FontStyle';
import '@flax/dart/ui/_bindings/flutter_FontStyle';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_TextBaseline';
import '@flax/dart/ui/_bindings/flutter_TextBaseline';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextLeadingDistribution';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextLeadingDistribution';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_Shadow';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Shadow';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_FontFeature';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FontFeature';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_FontVariation';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FontVariation';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface TextStyle extends Readonly<{
    "__flaxBound:dart:ui::TextStyle": readonly [];
}> {
    readonly __TextStyle: unique symbol;
    readonly [_flaxDartTypeValue]: TextStyle;
}
export interface TextStyle {
    readonly [_flaxDartTypeValue]: TextStyle;
    toString(): string;
}
export declare abstract class TextStyle extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextStyle>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextStyle;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:TextStyle", readonly [], false];
    constructor(options?: {
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        decoration?: Readonly<{
            "__flaxBound:dart:ui::TextDecoration": readonly [];
        }> | null | undefined;
        decorationColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        decorationStyle?: upstream2.TextDecorationStyle | null | undefined;
        decorationThickness?: number | null | undefined;
        fontWeight?: Readonly<{
            "__flaxBound:dart:ui::FontWeight": readonly [];
        }> | null | undefined;
        fontStyle?: upstream4.FontStyle | null | undefined;
        textBaseline?: upstream5.TextBaseline | null | undefined;
        fontFamily?: string | null | undefined;
        fontFamilyFallback?: DartListInput<string, string> | null | undefined;
        fontSize?: number | null | undefined;
        letterSpacing?: number | null | undefined;
        wordSpacing?: number | null | undefined;
        height?: number | null | undefined;
        leadingDistribution?: upstream6.TextLeadingDistribution | null | undefined;
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        background?: Readonly<{
            "__flaxBound:dart:ui::Paint": readonly [];
        }> | null | undefined;
        foreground?: Readonly<{
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
    });
}
export declare namespace TextStyle {
    function implement(args: [options?: {
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        decoration?: Readonly<{
            "__flaxBound:dart:ui::TextDecoration": readonly [];
        }> | null | undefined;
        decorationColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        decorationStyle?: upstream2.TextDecorationStyle | null | undefined;
        decorationThickness?: number | null | undefined;
        fontWeight?: Readonly<{
            "__flaxBound:dart:ui::FontWeight": readonly [];
        }> | null | undefined;
        fontStyle?: upstream4.FontStyle | null | undefined;
        textBaseline?: upstream5.TextBaseline | null | undefined;
        fontFamily?: string | null | undefined;
        fontFamilyFallback?: DartListInput<string, string> | null | undefined;
        fontSize?: number | null | undefined;
        letterSpacing?: number | null | undefined;
        wordSpacing?: number | null | undefined;
        height?: number | null | undefined;
        leadingDistribution?: upstream6.TextLeadingDistribution | null | undefined;
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        background?: Readonly<{
            "__flaxBound:dart:ui::Paint": readonly [];
        }> | null | undefined;
        foreground?: Readonly<{
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
    }], implementation: {}): TextStyle;
}
