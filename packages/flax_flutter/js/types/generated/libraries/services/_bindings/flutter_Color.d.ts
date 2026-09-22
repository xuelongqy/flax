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
export declare function Color(value: number): Color;
export declare namespace Color {
    function fromARGB(a: number, r: number, g: number, b: number): Color;
}
