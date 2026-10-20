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
    readonly a: number;
    readonly r: number;
    readonly g: number;
    readonly b: number;
    readonly colorSpace: upstream1.ColorSpace;
    readonly value: number;
    readonly alpha: number;
    readonly opacity: number;
    readonly red: number;
    readonly green: number;
    readonly blue: number;
    readonly keys: DartIterable<T>;
    toARGB32(): number;
    withValues(options?: {
        alpha?: number | null | undefined;
        blue?: number | null | undefined;
        colorSpace?: upstream1.ColorSpace | null | undefined;
        green?: number | null | undefined;
        red?: number | null | undefined;
    }): upstream0.Color;
    withAlpha(a: number): upstream0.Color;
    withOpacity(opacity: number): upstream0.Color;
    withRed(r: number): upstream0.Color;
    withGreen(g: number): upstream0.Color;
    withBlue(b: number): upstream0.Color;
    computeLuminance(): number;
    toString(): string;
    operatorGetIndex(key: (T | DartInput<T>)): upstream0.Color | null;
}
export declare function _ColorSwatchFactory<T extends unknown | null = unknown | null>(primary: number, _swatch: DartMapInput<_FlaxDartOutput<T>, upstream0.Color, (T | _FlaxDartOutput<T>), Readonly<{
    "__flaxBound:dart:ui::Color": readonly [];
}>>): ColorSwatch<T>;
export declare function _ColorSwatchFactory(primary: number, _swatch: DartMapInput<unknown | null, upstream0.Color, unknown | null, Readonly<{
    "__flaxBound:dart:ui::Color": readonly [];
}>>): ColorSwatch<unknown | null>;
export interface _ColorSwatchNative<T extends unknown | null = unknown | null> extends ColorSwatch<T> {
    readonly [_flaxDartTypeValue]: _ColorSwatchNative<T>;
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
export declare abstract class _ColorSwatchNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ColorSwatch<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ColorSwatch<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ColorSwatch", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature2;
    constructor(primary: number, _swatch: DartMapInput<unknown | null, upstream0.Color, unknown | null, Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>>);
}
export declare namespace _ColorSwatchFactory {
    function implement<T extends unknown | null = unknown | null>(args: [primary: number, _swatch: DartMapInput<unknown | null, upstream0.Color, unknown | null, Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>>], implementation: {}): ColorSwatch<T>;
}
declare const _ColorSwatchBinding: typeof _ColorSwatchFactory & (new <T extends unknown | null = unknown | null>(primary: number, _swatch: DartMapInput<unknown | null, upstream0.Color, unknown | null, Readonly<{
    "__flaxBound:dart:ui::Color": readonly [];
}>>) => _ColorSwatchNative<T>);
export declare namespace _ColorSwatchFactory {
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
export declare const ColorSwatch: typeof _ColorSwatchBinding & _FlaxInstanceType<ColorSwatch<unknown | null>> & _FlaxDartType<ColorSwatch<unknown | null>, readonly ["class", "flax.core/sdk_painting#type:ColorSwatch", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "a" | "r" | "g" | "b" | "colorSpace" | "value" | "alpha" | "opacity" | "red" | "green" | "blue" | "keys" | "toARGB32" | "withValues" | "withAlpha" | "withOpacity" | "withRed" | "withGreen" | "withBlue" | "computeLuminance" | "toString" | "operatorGetIndex" | "__flaxBound:package:flutter/src/painting/colors.dart::ColorSwatch" | "__flaxBound:dart:ui::Color";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (primary: number, _swatch: DartMapInput<unknown | null, upstream0.Color, unknown | null, Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>>) => _ColorSwatchNative<_Selected0>) & {
        (primary: number, _swatch: DartMapInput<_Selected0, upstream0.Color, (_Selected0 | DartInput<_Selected0>), Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>>): _ColorSwatchNative<_Selected0>;
        readonly prototype: _ColorSwatchNative<_Selected0>;
        implement(args: readonly [number, DartMapInput<unknown | null, upstream0.Color, unknown | null, Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>>], implementation: Partial<_ColorSwatchNative<_Selected0>>): _ColorSwatchNative<_Selected0>;
    } & _FlaxInstanceType<_ColorSwatchNative<_Selected0>> & _FlaxDartType<_ColorSwatchNative<_Selected0>> : never : never;
}
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
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (primary: number, _swatch: DartMapInput<unknown | null, upstream0.Color, unknown | null, Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>>) => _ColorSwatchNative<_Selected0>) & {
        (primary: number, _swatch: DartMapInput<_Selected0, upstream0.Color, (_Selected0 | DartInput<_Selected0>), Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>>): _ColorSwatchNative<_Selected0>;
        readonly prototype: _ColorSwatchNative<_Selected0>;
        implement(args: readonly [number, DartMapInput<unknown | null, upstream0.Color, unknown | null, Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>>], implementation: Partial<_ColorSwatchNative<_Selected0>>): _ColorSwatchNative<_Selected0>;
    } & _FlaxInstanceType<_ColorSwatchNative<_Selected0>> & _FlaxDartType<_ColorSwatchNative<_Selected0>> : never : never;
}
export {};
