export interface Size extends Readonly<{
    "__flaxBound:dart:ui::Size": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}> {
    readonly __Size: unique symbol;
    readonly width: number;
    readonly height: number;
}
export declare function Size(width: number, height: number): Size;
export declare namespace Size {
    function fromHeight(height: number): Size;
}
