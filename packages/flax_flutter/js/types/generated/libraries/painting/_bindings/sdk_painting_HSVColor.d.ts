import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface HSVColor extends Readonly<{
    "__flaxBound:package:flutter/src/painting/colors.dart::HSVColor": readonly [];
}> {
    readonly __HSVColor: unique symbol;
    readonly [_flaxDartTypeValue]: HSVColor;
    readonly alpha: number;
    readonly hue: number;
    readonly saturation: number;
    readonly value: number;
    withAlpha(alpha: number): HSVColor;
    withHue(hue: number): HSVColor;
    withSaturation(saturation: number): HSVColor;
    withValue(value: number): HSVColor;
    toColor(): upstream0.Color;
    toString(): string;
}
export declare namespace _HSVColorFactory {
    function fromAHSV(alpha: number, hue: number, saturation: number, value: number): HSVColor;
}
export declare namespace _HSVColorFactory {
    function fromColor(color: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>): HSVColor;
}
export interface _HSVColorNative extends HSVColor {
    readonly [_flaxDartTypeValue]: _HSVColorNative;
    readonly [_flaxDartConstructors]?: {
        "fromAHSV": (alpha: number, hue: number, saturation: number, value: number) => void;
    };
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
export declare abstract class _HSVColorNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<HSVColor>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: HSVColor;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:HSVColor", readonly [], false];
    constructor(alpha: number, hue: number, saturation: number, value: number);
    constructor(call: _FlaxProxySuper<_HSVColorNative>);
}
export declare namespace _HSVColorFactory {
    function implement(args: [alpha: number, hue: number, saturation: number, value: number], implementation: {}): HSVColor;
}
declare const _HSVColorBinding: typeof _HSVColorFactory & (new (alpha: number, hue: number, saturation: number, value: number) => _HSVColorNative) & (new (call: _FlaxProxySuper<_HSVColorNative>) => _HSVColorNative);
export declare namespace _HSVColorFactory {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/colors.dart::HSVColor": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:package:flutter/src/painting/colors.dart::HSVColor": readonly [];
    }> | null, t: number): HSVColor | null;
}
export declare const HSVColor: typeof _HSVColorBinding & _FlaxInstanceType<HSVColor> & _FlaxDartType<HSVColor, readonly ["class", "flax.core/sdk_painting#type:HSVColor", readonly [], false]>;
export {};
