import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface HSVColor extends Readonly<{
    "__flaxBound:package:flutter/src/painting/colors.dart::HSVColor": readonly [];
}> {
    readonly __HSVColor: unique symbol;
    readonly [_flaxDartTypeValue]: HSVColor;
}
export interface HSVColor {
    readonly [_flaxDartTypeValue]: HSVColor;
    withAlpha(alpha: number): HSVColor;
    withHue(hue: number): HSVColor;
    withSaturation(saturation: number): HSVColor;
    withValue(value: number): HSVColor;
    toColor(): upstream0.Color;
    toString(): string;
    get alpha(): number;
    get hue(): number;
    get saturation(): number;
    get value(): number;
}
export declare abstract class HSVColor extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<HSVColor>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: HSVColor;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:HSVColor", readonly [], false];
    constructor(alpha: number, hue: number, saturation: number, value: number);
}
export declare namespace HSVColor {
    function implement(args: [alpha: number, hue: number, saturation: number, value: number], implementation: {}): HSVColor;
}
export declare namespace HSVColor {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/colors.dart::HSVColor": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:package:flutter/src/painting/colors.dart::HSVColor": readonly [];
    }> | null, t: number): HSVColor | null;
}
