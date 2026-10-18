import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartMapInput, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ColorSwatch<T extends unknown | null = unknown | null> extends Omit<upstream0.Color, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/painting/colors.dart::ColorSwatch": readonly [T];
}>, Readonly<{
    "__flaxBound:dart:ui::Color": readonly [];
}> {
    readonly __ColorSwatch: unique symbol;
    readonly [_flaxDartTypeValue]: ColorSwatch<T>;
}
export interface ColorSwatch<T extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: ColorSwatch<T>;
    toARGB32(): number;
    withValues(options?: {
        alpha?: number | null | undefined;
        red?: number | null | undefined;
        green?: number | null | undefined;
        blue?: number | null | undefined;
        colorSpace?: upstream1.ColorSpace | null | undefined;
    }): upstream0.Color;
    withAlpha(a: number): upstream0.Color;
    withOpacity(opacity: number): upstream0.Color;
    withRed(r: number): upstream0.Color;
    withGreen(g: number): upstream0.Color;
    withBlue(b: number): upstream0.Color;
    computeLuminance(): number;
    toString(): string;
    operatorGetIndex(key: (T | DartInput<T>)): upstream0.Color | null;
    get keys(): DartIterable<T>;
    get a(): number;
    get r(): number;
    get g(): number;
    get b(): number;
    get colorSpace(): upstream1.ColorSpace;
    get value(): number;
    get alpha(): number;
    get opacity(): number;
    get red(): number;
    get green(): number;
    get blue(): number;
}
export declare abstract class ColorSwatch<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ColorSwatch<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ColorSwatch<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ColorSwatch", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature2;
    constructor(primary: number, _swatch: DartMapInput<unknown | null, upstream0.Color, unknown | null, Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>>);
}
export declare namespace ColorSwatch {
    function implement<T extends unknown | null = unknown | null>(args: [primary: number, _swatch: DartMapInput<unknown | null, upstream0.Color, unknown | null, Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>>], implementation: {}): ColorSwatch<T>;
}
export declare namespace ColorSwatch {
    function _flaxDefault_lerp<T extends unknown | null = unknown | null>(a: (Readonly<{
        "__flaxBound:package:flutter/src/painting/colors.dart::ColorSwatch": readonly [_FlaxDartOutput<T>];
    }> & Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:flutter/src/painting/colors.dart::ColorSwatch": readonly [_FlaxDartOutput<T>];
    }> & Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>) | null, t: number): ColorSwatch<_FlaxDartOutput<T>> | null;
    export const lerp: _FlaxDartCallable<typeof _flaxDefault_lerp, _FlaxSignature1>;
    export {};
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "a" | "r" | "g" | "b" | "colorSpace" | "value" | "alpha" | "opacity" | "red" | "green" | "blue" | "keys" | "toARGB32" | "withValues" | "withAlpha" | "withOpacity" | "withRed" | "withGreen" | "withBlue" | "computeLuminance" | "toString" | "operatorGetIndex" | "__flaxBound:package:flutter/src/painting/colors.dart::ColorSwatch" | "__flaxBound:dart:ui::Color";
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (a: (Readonly<{
        "__flaxBound:package:flutter/src/painting/colors.dart::ColorSwatch": readonly [_Selected0];
    }> & Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:flutter/src/painting/colors.dart::ColorSwatch": readonly [_Selected0];
    }> & Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>) | null, t: number) => ColorSwatch<_Selected0> | null : never : never;
}
interface _FlaxSignature2 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (primary: number, _swatch: DartMapInput<unknown | null, upstream0.Color, unknown | null, Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>>) => ColorSwatch<_Selected0>) & {
        readonly prototype: ColorSwatch<_Selected0>;
        implement(args: readonly [number, DartMapInput<unknown | null, upstream0.Color, unknown | null, Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>>], implementation: Partial<ColorSwatch<_Selected0>>): ColorSwatch<_Selected0>;
    } & _FlaxInstanceType<ColorSwatch<_Selected0>> & _FlaxDartType<ColorSwatch<_Selected0>> : never : never;
}
export {};
