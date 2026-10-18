import { type FlaxInstanceType as _FlaxInstanceType, type DartSet, type DartSetInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface WidgetStateColor extends Omit<upstream0.Color, _flaxOwnMembers0>, Omit<upstream1.WidgetStateProperty<upstream0.Color>, _flaxOwnMembers0 | keyof upstream0.Color>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateColor": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::Color": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream0.Color];
}> {
    readonly __WidgetStateColor: unique symbol;
    readonly [_flaxDartTypeValue]: WidgetStateColor;
}
export interface WidgetStateColor {
    readonly [_flaxDartTypeValue]: WidgetStateColor;
    toARGB32(): number;
    withValues(options?: {
        alpha?: number | null | undefined;
        red?: number | null | undefined;
        green?: number | null | undefined;
        blue?: number | null | undefined;
        colorSpace?: upstream2.ColorSpace | null | undefined;
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
    get colorSpace(): upstream2.ColorSpace;
    get value(): number;
    get alpha(): number;
    get opacity(): number;
    get red(): number;
    get green(): number;
    get blue(): number;
}
export declare abstract class WidgetStateColor extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WidgetStateColor>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: WidgetStateColor;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:WidgetStateColor", readonly [], false];
    constructor(defaultValue: number);
    abstract resolve(states: DartSetInput<upstream3.WidgetState, upstream3.WidgetState>): upstream0.Color;
}
export declare namespace WidgetStateColor {
    function implement(args: [defaultValue: number], implementation: {
        resolve: ((states: DartSet<upstream3.WidgetState>) => Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>);
    }): WidgetStateColor;
}
export declare namespace WidgetStateColor {
    const transparent: WidgetStateColor;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "a" | "r" | "g" | "b" | "colorSpace" | "value" | "alpha" | "opacity" | "red" | "green" | "blue" | "toARGB32" | "withValues" | "withAlpha" | "withOpacity" | "withRed" | "withGreen" | "withBlue" | "computeLuminance" | "toString" | "resolve" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateColor" | "__flaxBound:dart:ui::Color" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty";
export {};
