import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
export interface Color extends Readonly<{
    "__flaxBound:dart:ui::Color": readonly [];
}> {
    readonly __Color: unique symbol;
    readonly a: number;
    readonly r: number;
    readonly g: number;
    readonly b: number;
    toARGB32(): number;
}
declare function _ColorFactory(value: number): Color;
declare namespace _ColorFactory {
    function fromARGB(a: number, r: number, g: number, b: number): Color;
}
export declare const Color: typeof _ColorFactory & _FlaxInstanceType<Color>;
export {};
