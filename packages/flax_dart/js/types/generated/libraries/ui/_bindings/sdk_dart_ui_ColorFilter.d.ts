import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_ImageFilter';
import '@flax/dart/ui/_bindings/flutter_ImageFilter';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_BlendMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BlendMode';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ColorFilter extends Omit<upstream0.ImageFilter, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:dart:ui::ColorFilter": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::ImageFilter": readonly [];
}> {
    readonly __ColorFilter: unique symbol;
    readonly [_flaxDartTypeValue]: ColorFilter;
    readonly debugShortDescription: string;
    toString(): string;
}
export declare namespace _ColorFilterFactory {
    function mode(color: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>, blendMode: upstream2.BlendMode): ColorFilter;
}
export declare namespace _ColorFilterFactory {
    function matrix(matrix: DartListInput<number, number>): ColorFilter;
}
export declare namespace _ColorFilterFactory {
    function linearToSrgbGamma(): ColorFilter;
}
export declare namespace _ColorFilterFactory {
    function srgbToLinearGamma(): ColorFilter;
}
export declare namespace _ColorFilterFactory {
    function saturation(saturation: number): ColorFilter;
}
export declare const ColorFilter: typeof _ColorFilterFactory & _FlaxInstanceType<ColorFilter> & _FlaxDartType<ColorFilter, readonly ["class", "flax.core/sdk_dart_ui#type:ColorFilter", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "debugShortDescription" | "toString" | "__flaxBound:dart:ui::ColorFilter" | "__flaxBound:dart:ui::ImageFilter";
export {};
