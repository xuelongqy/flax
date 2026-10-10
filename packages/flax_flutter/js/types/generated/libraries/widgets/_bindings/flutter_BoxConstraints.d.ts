import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
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
declare function _BoxConstraintsFactory(options?: {
    minWidth?: number | undefined;
    maxWidth?: number | undefined;
    minHeight?: number | undefined;
    maxHeight?: number | undefined;
}): BoxConstraints;
declare namespace _BoxConstraintsFactory {
    function tightFor(options?: {
        width?: number | null | undefined;
        height?: number | null | undefined;
    }): BoxConstraints;
}
declare namespace _BoxConstraintsFactory {
    function expand(options?: {
        width?: number | null | undefined;
        height?: number | null | undefined;
    }): BoxConstraints;
}
export declare const BoxConstraints: typeof _BoxConstraintsFactory & _FlaxInstanceType<BoxConstraints>;
export {};
