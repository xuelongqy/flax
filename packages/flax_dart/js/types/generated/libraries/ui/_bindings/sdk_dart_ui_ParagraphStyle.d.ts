import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_TextAlign';
import '@flax/dart/ui/_bindings/flutter_TextAlign';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextHeightBehavior';
import '@flax/dart/ui/_bindings/flutter_FontWeight';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_FontStyle';
import '@flax/dart/ui/_bindings/flutter_FontStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_StrutStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ParagraphStyle extends Readonly<{
    "__flaxBound:dart:ui::ParagraphStyle": readonly [];
}> {
    readonly __ParagraphStyle: unique symbol;
    readonly [_flaxDartTypeValue]: ParagraphStyle;
    toString(): string;
}
export declare function _ParagraphStyleFactory(options?: {
    textAlign?: upstream0.TextAlign | null | undefined;
    textDirection?: upstream1.TextDirection | null | undefined;
    maxLines?: number | null | undefined;
    fontFamily?: string | null | undefined;
    fontSize?: number | null | undefined;
    height?: number | null | undefined;
    textHeightBehavior?: Readonly<{
        "__flaxBound:dart:ui::TextHeightBehavior": readonly [];
    }> | null | undefined;
    fontWeight?: Readonly<{
        "__flaxBound:dart:ui::FontWeight": readonly [];
    }> | null | undefined;
    fontStyle?: upstream4.FontStyle | null | undefined;
    strutStyle?: Readonly<{
        "__flaxBound:dart:ui::StrutStyle": readonly [];
    }> | null | undefined;
    ellipsis?: string | null | undefined;
    locale?: Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }> | null | undefined;
}): ParagraphStyle;
export interface _ParagraphStyleNative extends ParagraphStyle {
    readonly [_flaxDartTypeValue]: _ParagraphStyleNative;
    toString(): string;
}
export declare abstract class _ParagraphStyleNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ParagraphStyle>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ParagraphStyle;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:ParagraphStyle", readonly [], false];
    constructor(options?: {
        textAlign?: upstream0.TextAlign | null | undefined;
        textDirection?: upstream1.TextDirection | null | undefined;
        maxLines?: number | null | undefined;
        fontFamily?: string | null | undefined;
        fontSize?: number | null | undefined;
        height?: number | null | undefined;
        textHeightBehavior?: Readonly<{
            "__flaxBound:dart:ui::TextHeightBehavior": readonly [];
        }> | null | undefined;
        fontWeight?: Readonly<{
            "__flaxBound:dart:ui::FontWeight": readonly [];
        }> | null | undefined;
        fontStyle?: upstream4.FontStyle | null | undefined;
        strutStyle?: Readonly<{
            "__flaxBound:dart:ui::StrutStyle": readonly [];
        }> | null | undefined;
        ellipsis?: string | null | undefined;
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
    });
}
export declare namespace _ParagraphStyleFactory {
    function implement(args: [options?: {
        textAlign?: upstream0.TextAlign | null | undefined;
        textDirection?: upstream1.TextDirection | null | undefined;
        maxLines?: number | null | undefined;
        fontFamily?: string | null | undefined;
        fontSize?: number | null | undefined;
        height?: number | null | undefined;
        textHeightBehavior?: Readonly<{
            "__flaxBound:dart:ui::TextHeightBehavior": readonly [];
        }> | null | undefined;
        fontWeight?: Readonly<{
            "__flaxBound:dart:ui::FontWeight": readonly [];
        }> | null | undefined;
        fontStyle?: upstream4.FontStyle | null | undefined;
        strutStyle?: Readonly<{
            "__flaxBound:dart:ui::StrutStyle": readonly [];
        }> | null | undefined;
        ellipsis?: string | null | undefined;
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
    }], implementation: {}): ParagraphStyle;
}
declare const _ParagraphStyleBinding: typeof _ParagraphStyleFactory & (new (options?: {
    textAlign?: upstream0.TextAlign | null | undefined;
    textDirection?: upstream1.TextDirection | null | undefined;
    maxLines?: number | null | undefined;
    fontFamily?: string | null | undefined;
    fontSize?: number | null | undefined;
    height?: number | null | undefined;
    textHeightBehavior?: Readonly<{
        "__flaxBound:dart:ui::TextHeightBehavior": readonly [];
    }> | null | undefined;
    fontWeight?: Readonly<{
        "__flaxBound:dart:ui::FontWeight": readonly [];
    }> | null | undefined;
    fontStyle?: upstream4.FontStyle | null | undefined;
    strutStyle?: Readonly<{
        "__flaxBound:dart:ui::StrutStyle": readonly [];
    }> | null | undefined;
    ellipsis?: string | null | undefined;
    locale?: Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }> | null | undefined;
}) => _ParagraphStyleNative);
export declare const ParagraphStyle: typeof _ParagraphStyleBinding & _FlaxInstanceType<ParagraphStyle> & _FlaxDartType<ParagraphStyle, readonly ["class", "flax.core/sdk_dart_ui#type:ParagraphStyle", readonly [], false]>;
export {};
