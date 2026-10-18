import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_BlendMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BlendMode';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_PaintingStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PaintingStyle';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_StrokeCap';
import '@flax/dart/ui/_bindings/sdk_dart_ui_StrokeCap';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_StrokeJoin';
import '@flax/dart/ui/_bindings/sdk_dart_ui_StrokeJoin';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_MaskFilter';
import '@flax/dart/ui/_bindings/sdk_dart_ui_MaskFilter';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_FilterQuality';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FilterQuality';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_Shader';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Shader';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_ColorFilter';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ColorFilter';
import type * as upstream9 from '@flax/dart/ui/_bindings/flutter_ImageFilter';
import '@flax/dart/ui/_bindings/flutter_ImageFilter';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Paint extends Readonly<{
    "__flaxBound:dart:ui::Paint": readonly [];
}> {
    readonly __Paint: unique symbol;
    readonly [_flaxDartTypeValue]: Paint;
    get isAntiAlias(): boolean;
    get color(): upstream0.Color;
    get blendMode(): upstream1.BlendMode;
    get style(): upstream2.PaintingStyle;
    get strokeWidth(): number;
    get strokeCap(): upstream3.StrokeCap;
    get strokeJoin(): upstream4.StrokeJoin;
    get strokeMiterLimit(): number;
    get maskFilter(): upstream5.MaskFilter | null;
    get filterQuality(): upstream6.FilterQuality;
    get shader(): upstream7.Shader | null;
    get colorFilter(): upstream8.ColorFilter | null;
    get imageFilter(): upstream9.ImageFilter | null;
    get invertColors(): boolean;
    toString(): string;
    set isAntiAlias(value: boolean);
    set color(value: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>);
    set blendMode(value: upstream1.BlendMode);
    set style(value: upstream2.PaintingStyle);
    set strokeWidth(value: number);
    set strokeCap(value: upstream3.StrokeCap);
    set strokeJoin(value: upstream4.StrokeJoin);
    set strokeMiterLimit(value: number);
    set maskFilter(value: Readonly<{
        "__flaxBound:dart:ui::MaskFilter": readonly [];
    }> | null);
    set filterQuality(value: upstream6.FilterQuality);
    set shader(value: Readonly<{
        "__flaxBound:dart:ui::Shader": readonly [];
    }> | null);
    set colorFilter(value: (Readonly<{
        "__flaxBound:dart:ui::ColorFilter": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::ImageFilter": readonly [];
    }>) | null);
    set imageFilter(value: Readonly<{
        "__flaxBound:dart:ui::ImageFilter": readonly [];
    }> | null);
    set invertColors(value: boolean);
}
export declare function _PaintFactory(): Paint;
export declare namespace _PaintFactory {
    function from(other: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>): Paint;
}
export declare const Paint: typeof _PaintFactory & _FlaxInstanceType<Paint> & _FlaxDartType<Paint, readonly ["class", "flax.core/sdk_dart_ui#type:Paint", readonly [], false]>;
