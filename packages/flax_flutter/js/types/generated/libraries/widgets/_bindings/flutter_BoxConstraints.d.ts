export interface BoxConstraints extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
}> {
    readonly __BoxConstraints: unique symbol;
    readonly minWidth: number;
    readonly maxWidth: number;
    readonly minHeight: number;
    readonly maxHeight: number;
}
export declare function BoxConstraints(options?: {
    minWidth?: number | undefined;
    maxWidth?: number | undefined;
    minHeight?: number | undefined;
    maxHeight?: number | undefined;
}): BoxConstraints;
export declare namespace BoxConstraints {
    function tightFor(options?: {
        width?: number | null | undefined;
        height?: number | null | undefined;
    }): BoxConstraints;
}
export declare namespace BoxConstraints {
    function expand(options?: {
        width?: number | null | undefined;
        height?: number | null | undefined;
    }): BoxConstraints;
}
