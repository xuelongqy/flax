import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface HSLColor extends Readonly<{
    "__flaxBound:package:flutter/src/painting/colors.dart::HSLColor": readonly [];
}> {
    readonly __HSLColor: unique symbol;
    readonly [_flaxDartTypeValue]: HSLColor;
    readonly alpha: number;
    readonly hue: number;
    readonly saturation: number;
    readonly lightness: number;
    withAlpha(alpha: number): HSLColor;
    withHue(hue: number): HSLColor;
    withSaturation(saturation: number): HSLColor;
    withLightness(lightness: number): HSLColor;
    toColor(): upstream0.Color;
    toString(): string;
}
export declare namespace _HSLColorFactory {
    function fromAHSL(alpha: number, hue: number, saturation: number, lightness: number): HSLColor;
}
export declare namespace _HSLColorFactory {
    function fromColor(color: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>): HSLColor;
}
export interface _HSLColorNative extends HSLColor {
    readonly [_flaxDartTypeValue]: _HSLColorNative;
    readonly [_flaxDartConstructors]?: {
        "fromAHSL": (alpha: number, hue: number, saturation: number, lightness: number) => void;
    };
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
export declare abstract class _HSLColorNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<HSLColor>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: HSLColor;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:HSLColor", readonly [], false];
    constructor(alpha: number, hue: number, saturation: number, lightness: number);
    constructor(call: _FlaxProxySuper<_HSLColorNative>);
}
export declare namespace _HSLColorFactory {
    function implement(args: [alpha: number, hue: number, saturation: number, lightness: number], implementation: {}): HSLColor;
}
declare const _HSLColorBinding: typeof _HSLColorFactory & (new (alpha: number, hue: number, saturation: number, lightness: number) => _HSLColorNative) & (new (call: _FlaxProxySuper<_HSLColorNative>) => _HSLColorNative);
export declare namespace _HSLColorFactory {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/colors.dart::HSLColor": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:package:flutter/src/painting/colors.dart::HSLColor": readonly [];
    }> | null, t: number): HSLColor | null;
}
export declare const HSLColor: typeof _HSLColorBinding & _FlaxInstanceType<HSLColor> & _FlaxDartType<HSLColor, readonly ["class", "flax.core/sdk_painting#type:HSLColor", readonly [], false]>;
export {};
