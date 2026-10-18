import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextLeadingDistribution';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextLeadingDistribution';
import '@flax/dart/ui/_bindings/flutter_FontWeight';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_FontStyle';
import '@flax/dart/ui/_bindings/flutter_FontStyle';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface StrutStyle extends Readonly<{
    "__flaxBound:dart:ui::StrutStyle": readonly [];
}> {
    readonly __StrutStyle: unique symbol;
    readonly [_flaxDartTypeValue]: StrutStyle;
}
export declare function _StrutStyleFactory(options?: {
    fontFamily?: string | null | undefined;
    fontFamilyFallback?: DartListInput<string, string> | null | undefined;
    fontSize?: number | null | undefined;
    height?: number | null | undefined;
    leadingDistribution?: upstream0.TextLeadingDistribution | null | undefined;
    leading?: number | null | undefined;
    fontWeight?: Readonly<{
        "__flaxBound:dart:ui::FontWeight": readonly [];
    }> | null | undefined;
    fontStyle?: upstream2.FontStyle | null | undefined;
    forceStrutHeight?: boolean | null | undefined;
}): StrutStyle;
export declare const StrutStyle: typeof _StrutStyleFactory & _FlaxInstanceType<StrutStyle> & _FlaxDartType<StrutStyle, readonly ["class", "flax.core/sdk_dart_ui#type:StrutStyle", readonly [], false]>;
