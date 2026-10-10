import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
export interface FontWeight extends Readonly<{
    "__flaxBound:dart:ui::FontWeight": readonly [];
}> {
    readonly __FontWeight: unique symbol;
    readonly value: number;
}
declare function _FontWeightFactory(value: number): FontWeight;
declare namespace _FontWeightFactory {
    const w100: FontWeight;
}
declare namespace _FontWeightFactory {
    const w200: FontWeight;
}
declare namespace _FontWeightFactory {
    const w300: FontWeight;
}
declare namespace _FontWeightFactory {
    const w400: FontWeight;
}
declare namespace _FontWeightFactory {
    const w500: FontWeight;
}
declare namespace _FontWeightFactory {
    const w600: FontWeight;
}
declare namespace _FontWeightFactory {
    const w700: FontWeight;
}
declare namespace _FontWeightFactory {
    const w800: FontWeight;
}
declare namespace _FontWeightFactory {
    const w900: FontWeight;
}
declare namespace _FontWeightFactory {
    const normal: FontWeight;
}
declare namespace _FontWeightFactory {
    const bold: FontWeight;
}
export declare const FontWeight: typeof _FontWeightFactory & _FlaxInstanceType<FontWeight>;
export {};
