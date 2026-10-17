import { type FlaxInstanceType as _FlaxInstanceType, type DartList } from '@flax/core/bindings';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FontWeight extends Readonly<{
    "__flaxBound:dart:ui::FontWeight": readonly [];
}> {
    readonly __FontWeight: unique symbol;
    readonly index: number;
    readonly value: number;
    toString(): string;
}
export declare function _FontWeightFactory(value: number): FontWeight;
export declare namespace _FontWeightFactory {
    const w100: FontWeight;
}
export declare namespace _FontWeightFactory {
    const w200: FontWeight;
}
export declare namespace _FontWeightFactory {
    const w300: FontWeight;
}
export declare namespace _FontWeightFactory {
    const w400: FontWeight;
}
export declare namespace _FontWeightFactory {
    const w500: FontWeight;
}
export declare namespace _FontWeightFactory {
    const w600: FontWeight;
}
export declare namespace _FontWeightFactory {
    const w700: FontWeight;
}
export declare namespace _FontWeightFactory {
    const w800: FontWeight;
}
export declare namespace _FontWeightFactory {
    const w900: FontWeight;
}
export declare namespace _FontWeightFactory {
    const normal: FontWeight;
}
export declare namespace _FontWeightFactory {
    const bold: FontWeight;
}
export declare namespace _FontWeightFactory {
    const values: DartList<FontWeight>;
}
export declare namespace _FontWeightFactory {
    function lerp(a: Readonly<{
        "__flaxBound:dart:ui::FontWeight": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:dart:ui::FontWeight": readonly [];
    }> | null, t: number): FontWeight | null;
}
export declare const FontWeight: typeof _FontWeightFactory & _FlaxInstanceType<FontWeight> & _FlaxDartType<FontWeight, readonly ["class", "flax.core/flutter#type:FontWeight", readonly [], false]>;
