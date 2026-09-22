export interface Radius extends Readonly<{
    "__flaxBound:dart:ui::Radius": readonly [];
}> {
    readonly __Radius: unique symbol;
    readonly x: number;
    readonly y: number;
}
export declare namespace Radius {
    function circular(radius: number): Radius;
}
export declare namespace Radius {
    function elliptical(x: number, y: number): Radius;
}
export declare namespace Radius {
    const zero: Radius;
}
