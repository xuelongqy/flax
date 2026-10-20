import { type FlaxInstanceType as _FlaxInstanceType, type DartMapInput, type DartSet, type DartSetInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesConstraint';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesConstraint';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface WidgetStateColor extends Omit<upstream0.Color, _flaxOwnMembers0>, Omit<upstream1.WidgetStateProperty<upstream0.Color>, _flaxOwnMembers0 | keyof upstream0.Color>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateColor": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::Color": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream0.Color];
}> {
    readonly __WidgetStateColor: unique symbol;
    readonly [_flaxDartTypeValue]: WidgetStateColor;
    readonly a: number;
    readonly r: number;
    readonly g: number;
    readonly b: number;
    readonly colorSpace: upstream4.ColorSpace;
    readonly value: number;
    readonly alpha: number;
    readonly opacity: number;
    readonly red: number;
    readonly green: number;
    readonly blue: number;
    toARGB32(): number;
    withValues(options?: {
        alpha?: number | null | undefined;
        blue?: number | null | undefined;
        colorSpace?: upstream4.ColorSpace | null | undefined;
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
    resolve(states: DartSetInput<upstream2.WidgetState, upstream2.WidgetState>): upstream0.Color;
}
export declare namespace _WidgetStateColorFactory {
    function resolveWith(callback: ((states: DartSet<upstream2.WidgetState>) => Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>)): WidgetStateColor;
}
export declare namespace _WidgetStateColorFactory {
    function fromMap(map: DartMapInput<upstream3.WidgetStatesConstraint, upstream0.Color, Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [];
    }>, Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>>): WidgetStateColor;
}
export interface _WidgetStateColorNative extends WidgetStateColor {
    readonly [_flaxDartTypeValue]: _WidgetStateColorNative;
    toARGB32(): number;
    withValues(options?: {
        alpha?: number | null | undefined;
        red?: number | null | undefined;
        green?: number | null | undefined;
        blue?: number | null | undefined;
        colorSpace?: upstream4.ColorSpace | null | undefined;
    }): upstream0.Color;
    withAlpha(a: number): upstream0.Color;
    withOpacity(opacity: number): upstream0.Color;
    withRed(r: number): upstream0.Color;
    withGreen(g: number): upstream0.Color;
    withBlue(b: number): upstream0.Color;
    computeLuminance(): number;
    toString(): string;
    get a(): number;
    get r(): number;
    get g(): number;
    get b(): number;
    get colorSpace(): upstream4.ColorSpace;
    get value(): number;
    get alpha(): number;
    get opacity(): number;
    get red(): number;
    get green(): number;
    get blue(): number;
}
export declare abstract class _WidgetStateColorNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WidgetStateColor>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: WidgetStateColor;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:WidgetStateColor", readonly [], false];
    constructor(defaultValue: number);
    abstract resolve(states: DartSetInput<upstream2.WidgetState, upstream2.WidgetState>): upstream0.Color;
}
export declare namespace _WidgetStateColorFactory {
    function implement(args: [defaultValue: number], implementation: {
        resolve: ((states: DartSet<upstream2.WidgetState>) => Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>);
    }): WidgetStateColor;
}
declare const _WidgetStateColorBinding: typeof _WidgetStateColorFactory & (abstract new (defaultValue: number) => _WidgetStateColorNative);
export declare namespace _WidgetStateColorFactory {
    const transparent: WidgetStateColor;
}
export declare const WidgetStateColor: typeof _WidgetStateColorBinding & _FlaxInstanceType<WidgetStateColor> & _FlaxDartType<WidgetStateColor, readonly ["class", "flax.core/sdk_widgets#type:WidgetStateColor", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "a" | "r" | "g" | "b" | "colorSpace" | "value" | "alpha" | "opacity" | "red" | "green" | "blue" | "toARGB32" | "withValues" | "withAlpha" | "withOpacity" | "withRed" | "withGreen" | "withBlue" | "computeLuminance" | "toString" | "resolve" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateColor" | "__flaxBound:dart:ui::Color" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty";
export {};
