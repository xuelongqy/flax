import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartMapInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_ColorSwatch';
import '@flax/flutter/painting/_bindings/sdk_painting_ColorSwatch';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MaterialColor extends Omit<upstream0.ColorSwatch<number>, _flaxOwnMembers0>, Omit<upstream1.Color, _flaxOwnMembers0 | keyof upstream0.ColorSwatch<number>>, Readonly<{
    "__flaxBound:package:flutter/src/material/colors.dart::MaterialColor": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/colors.dart::ColorSwatch": readonly [number];
}>, Readonly<{
    "__flaxBound:dart:ui::Color": readonly [];
}> {
    readonly __MaterialColor: unique symbol;
    readonly [_flaxDartTypeValue]: MaterialColor;
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
    readonly shade50: upstream1.Color;
    readonly shade100: upstream1.Color;
    readonly shade200: upstream1.Color;
    readonly shade300: upstream1.Color;
    readonly shade400: upstream1.Color;
    readonly shade500: upstream1.Color;
    readonly shade600: upstream1.Color;
    readonly shade700: upstream1.Color;
    readonly shade800: upstream1.Color;
    readonly shade900: upstream1.Color;
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
export declare function _MaterialColorFactory(primary: number, swatch: DartMapInput<number, upstream1.Color, number, Readonly<{
    "__flaxBound:dart:ui::Color": readonly [];
}>>): MaterialColor;
export interface _MaterialColorNative extends MaterialColor {
    readonly [_flaxDartTypeValue]: _MaterialColorNative;
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
    get shade50(): upstream1.Color;
    get shade100(): upstream1.Color;
    get shade200(): upstream1.Color;
    get shade300(): upstream1.Color;
    get shade400(): upstream1.Color;
    get shade500(): upstream1.Color;
    get shade600(): upstream1.Color;
    get shade700(): upstream1.Color;
    get shade800(): upstream1.Color;
    get shade900(): upstream1.Color;
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
export declare abstract class _MaterialColorNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaterialColor>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MaterialColor;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:MaterialColor", readonly [], false];
    constructor(primary: number, swatch: DartMapInput<number, upstream1.Color, number, Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>>);
}
export declare namespace _MaterialColorFactory {
    function implement(args: [primary: number, swatch: DartMapInput<number, upstream1.Color, number, Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>>], implementation: {}): MaterialColor;
}
declare const _MaterialColorBinding: typeof _MaterialColorFactory & (new (primary: number, swatch: DartMapInput<number, upstream1.Color, number, Readonly<{
    "__flaxBound:dart:ui::Color": readonly [];
}>>) => _MaterialColorNative);
export declare const MaterialColor: typeof _MaterialColorBinding & _FlaxInstanceType<MaterialColor> & _FlaxDartType<MaterialColor, readonly ["class", "flax.core/sdk_material#type:MaterialColor", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "keys" | "a" | "r" | "g" | "b" | "colorSpace" | "value" | "alpha" | "opacity" | "red" | "green" | "blue" | "shade50" | "shade100" | "shade200" | "shade300" | "shade400" | "shade500" | "shade600" | "shade700" | "shade800" | "shade900" | "toString" | "toARGB32" | "withValues" | "withAlpha" | "withOpacity" | "withRed" | "withGreen" | "withBlue" | "computeLuminance" | "operatorGetIndex" | "__flaxBound:package:flutter/src/material/colors.dart::MaterialColor" | "__flaxBound:package:flutter/src/painting/colors.dart::ColorSwatch" | "__flaxBound:dart:ui::Color";
export {};
