import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface HSLColor extends Readonly<{
    "__flaxBound:package:flutter/src/painting/colors.dart::HSLColor": readonly [];
}> {
    readonly __HSLColor: unique symbol;
    readonly [_flaxDartTypeValue]: HSLColor;
}
export interface HSLColor {
    readonly [_flaxDartTypeValue]: HSLColor;
    withAlpha(alpha: number): HSLColor;
    withHue(hue: number): HSLColor;
    withSaturation(saturation: number): HSLColor;
    withLightness(lightness: number): HSLColor;
    toColor(): upstream0.Color;
    toString(): string;
    get alpha(): number;
    get hue(): number;
    get saturation(): number;
    get lightness(): number;
}
export declare abstract class HSLColor extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<HSLColor>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: HSLColor;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:HSLColor", readonly [], false];
    constructor(alpha: number, hue: number, saturation: number, lightness: number);
}
export declare namespace HSLColor {
    function implement(args: [alpha: number, hue: number, saturation: number, lightness: number], implementation: {}): HSLColor;
}
export declare namespace HSLColor {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/colors.dart::HSLColor": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:package:flutter/src/painting/colors.dart::HSLColor": readonly [];
    }> | null, t: number): HSLColor | null;
}
