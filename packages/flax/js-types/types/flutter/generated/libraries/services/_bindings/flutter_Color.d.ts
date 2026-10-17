import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Color extends Readonly<{
    "__flaxBound:dart:ui::Color": readonly [];
}> {
    readonly __Color: unique symbol;
    readonly a: number;
    readonly r: number;
    readonly g: number;
    readonly b: number;
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
        green?: number | null | undefined;
        red?: number | null | undefined;
    }): Color;
    withAlpha(a: number): Color;
    withOpacity(opacity: number): Color;
    withRed(r: number): Color;
    withGreen(g: number): Color;
    withBlue(b: number): Color;
    computeLuminance(): number;
    toString(): string;
}
export declare function _ColorFactory(value: number): Color;
export declare namespace _ColorFactory {
    function from(options: {
        alpha: number;
        red: number;
        green: number;
        blue: number;
    }): Color;
}
export declare namespace _ColorFactory {
    function fromARGB(a: number, r: number, g: number, b: number): Color;
}
export declare namespace _ColorFactory {
    function fromRGBO(r: number, g: number, b: number, opacity: number): Color;
}
export declare namespace _ColorFactory {
    function lerp(x: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null, y: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null, t: number): Color | null;
}
export declare namespace _ColorFactory {
    function alphaBlend(foreground: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>, background: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>): Color;
}
export declare namespace _ColorFactory {
    function getAlphaFromOpacity(opacity: number): number;
}
export declare const Color: typeof _ColorFactory & _FlaxInstanceType<Color> & _FlaxDartType<Color, readonly ["class", "flax.core/flutter#type:Color", readonly [], false]>;
