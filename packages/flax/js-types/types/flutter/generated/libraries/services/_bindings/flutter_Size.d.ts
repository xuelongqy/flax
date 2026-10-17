import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/flutter_Offset';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Size extends Readonly<{
    "__flaxBound:dart:ui::Size": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}> {
    readonly __Size: unique symbol;
    readonly width: number;
    readonly height: number;
    readonly aspectRatio: number;
    readonly isEmpty: boolean;
    readonly shortestSide: number;
    readonly longestSide: number;
    readonly flipped: Size;
    readonly isInfinite: boolean;
    readonly isFinite: boolean;
    topLeft(origin: upstream0.Offset): upstream0.Offset;
    topCenter(origin: upstream0.Offset): upstream0.Offset;
    topRight(origin: upstream0.Offset): upstream0.Offset;
    centerLeft(origin: upstream0.Offset): upstream0.Offset;
    center(origin: upstream0.Offset): upstream0.Offset;
    centerRight(origin: upstream0.Offset): upstream0.Offset;
    bottomLeft(origin: upstream0.Offset): upstream0.Offset;
    bottomCenter(origin: upstream0.Offset): upstream0.Offset;
    bottomRight(origin: upstream0.Offset): upstream0.Offset;
    contains(offset: upstream0.Offset): boolean;
    toString(): string;
    operatorAdd(other: upstream0.Offset): Size;
    operatorMultiply(operand: number): Size;
    operatorDivide(operand: number): Size;
    operatorTruncateDivide(operand: number): Size;
    operatorModulo(operand: number): Size;
}
export declare function _SizeFactory(width: number, height: number): Size;
export declare namespace _SizeFactory {
    function copy(source: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }>): Size;
}
export declare namespace _SizeFactory {
    function square(dimension: number): Size;
}
export declare namespace _SizeFactory {
    function fromWidth(width: number): Size;
}
export declare namespace _SizeFactory {
    function fromHeight(height: number): Size;
}
export declare namespace _SizeFactory {
    function fromRadius(radius: number): Size;
}
export declare namespace _SizeFactory {
    const zero: Size;
}
export declare namespace _SizeFactory {
    const infinite: Size;
}
export declare namespace _SizeFactory {
    function lerp(a: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> | null, t: number): Size | null;
}
export declare const Size: typeof _SizeFactory & _FlaxInstanceType<Size> & _FlaxDartType<Size, readonly ["class", "flax.core/flutter#type:Size", readonly [], false]>;
