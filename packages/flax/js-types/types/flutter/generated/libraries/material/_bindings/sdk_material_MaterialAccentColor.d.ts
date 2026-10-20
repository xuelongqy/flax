import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartMapInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_ColorSwatch';
import '@flax/flutter/painting/_bindings/sdk_painting_ColorSwatch';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MaterialAccentColor extends Omit<upstream0.ColorSwatch<number>, _flaxOwnMembers0>, Omit<upstream1.Color, _flaxOwnMembers0 | keyof upstream0.ColorSwatch<number>>, Readonly<{
    "__flaxBound:package:flutter/src/material/colors.dart::MaterialAccentColor": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/colors.dart::ColorSwatch": readonly [number];
}>, Readonly<{
    "__flaxBound:dart:ui::Color": readonly [];
}> {
    readonly __MaterialAccentColor: unique symbol;
    readonly [_flaxDartTypeValue]: MaterialAccentColor;
    readonly keys: DartIterable<number>;
    readonly a: number;
    readonly r: number;
    readonly g: number;
    readonly b: number;
    readonly colorSpace: upstream2.ColorSpace;
    readonly value: number;
    readonly alpha: number;
    readonly opacity: number;
    readonly red: number;
    readonly green: number;
    readonly blue: number;
    readonly shade100: upstream1.Color;
    readonly shade200: upstream1.Color;
    readonly shade400: upstream1.Color;
    readonly shade700: upstream1.Color;
    toString(): string;
    toARGB32(): number;
    withValues(options?: {
        alpha?: number | null | undefined;
        blue?: number | null | undefined;
        colorSpace?: upstream2.ColorSpace | null | undefined;
        green?: number | null | undefined;
        red?: number | null | undefined;
    }): upstream1.Color;
    withAlpha(a: number): upstream1.Color;
    withOpacity(opacity: number): upstream1.Color;
    withRed(r: number): upstream1.Color;
    withGreen(g: number): upstream1.Color;
    withBlue(b: number): upstream1.Color;
    computeLuminance(): number;
    operatorGetIndex(key: number): upstream1.Color | null;
}
export declare function _MaterialAccentColorFactory(primary: number, swatch: DartMapInput<number, upstream1.Color, number, Readonly<{
    "__flaxBound:dart:ui::Color": readonly [];
}>>): MaterialAccentColor;
export interface _MaterialAccentColorNative extends MaterialAccentColor {
    readonly [_flaxDartTypeValue]: _MaterialAccentColorNative;
    toString(): string;
    toARGB32(): number;
    withValues(options?: {
        alpha?: number | null | undefined;
        red?: number | null | undefined;
        green?: number | null | undefined;
        blue?: number | null | undefined;
        colorSpace?: upstream2.ColorSpace | null | undefined;
    }): upstream1.Color;
    withAlpha(a: number): upstream1.Color;
    withOpacity(opacity: number): upstream1.Color;
    withRed(r: number): upstream1.Color;
    withGreen(g: number): upstream1.Color;
    withBlue(b: number): upstream1.Color;
    computeLuminance(): number;
    operatorGetIndex(key: number): upstream1.Color | null;
    get shade100(): upstream1.Color;
    get shade200(): upstream1.Color;
    get shade400(): upstream1.Color;
    get shade700(): upstream1.Color;
    get keys(): DartIterable<number>;
    get a(): number;
    get r(): number;
    get g(): number;
    get b(): number;
    get colorSpace(): upstream2.ColorSpace;
    get value(): number;
    get alpha(): number;
    get opacity(): number;
    get red(): number;
    get green(): number;
    get blue(): number;
}
export declare abstract class _MaterialAccentColorNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaterialAccentColor>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MaterialAccentColor;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:MaterialAccentColor", readonly [], false];
    constructor(primary: number, swatch: DartMapInput<number, upstream1.Color, number, Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>>);
}
export declare namespace _MaterialAccentColorFactory {
    function implement(args: [primary: number, swatch: DartMapInput<number, upstream1.Color, number, Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>>], implementation: {}): MaterialAccentColor;
}
declare const _MaterialAccentColorBinding: typeof _MaterialAccentColorFactory & (new (primary: number, swatch: DartMapInput<number, upstream1.Color, number, Readonly<{
    "__flaxBound:dart:ui::Color": readonly [];
}>>) => _MaterialAccentColorNative);
export declare const MaterialAccentColor: typeof _MaterialAccentColorBinding & _FlaxInstanceType<MaterialAccentColor> & _FlaxDartType<MaterialAccentColor, readonly ["class", "flax.core/sdk_material#type:MaterialAccentColor", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "keys" | "a" | "r" | "g" | "b" | "colorSpace" | "value" | "alpha" | "opacity" | "red" | "green" | "blue" | "shade100" | "shade200" | "shade400" | "shade700" | "toString" | "toARGB32" | "withValues" | "withAlpha" | "withOpacity" | "withRed" | "withGreen" | "withBlue" | "computeLuminance" | "operatorGetIndex" | "__flaxBound:package:flutter/src/material/colors.dart::MaterialAccentColor" | "__flaxBound:package:flutter/src/painting/colors.dart::ColorSwatch" | "__flaxBound:dart:ui::Color";
export {};
