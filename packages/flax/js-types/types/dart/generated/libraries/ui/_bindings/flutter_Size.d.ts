import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_OffsetBase';
import '@flax/dart/ui/_bindings/sdk_dart_ui_OffsetBase';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Size extends Omit<upstream0.OffsetBase, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:dart:ui::Size": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}> {
    readonly __Size: unique symbol;
    readonly [_flaxDartTypeValue]: Size;
    readonly isInfinite: boolean;
    readonly isFinite: boolean;
    readonly width: number;
    readonly height: number;
    readonly aspectRatio: number;
    readonly isEmpty: boolean;
    readonly shortestSide: number;
    readonly longestSide: number;
    readonly flipped: Size;
    toString(): string;
    topLeft(origin: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream1.Offset;
    topCenter(origin: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream1.Offset;
    topRight(origin: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream1.Offset;
    centerLeft(origin: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream1.Offset;
    center(origin: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream1.Offset;
    centerRight(origin: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream1.Offset;
    bottomLeft(origin: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream1.Offset;
    bottomCenter(origin: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream1.Offset;
    bottomRight(origin: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream1.Offset;
    contains(offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): boolean;
    operatorLessThan(other: Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): boolean;
    operatorGreaterThan(other: Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): boolean;
    operatorLessThanOrEqual(other: Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): boolean;
    operatorGreaterThanOrEqual(other: Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): boolean;
    operatorAdd(other: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): Size;
    operatorSubtract(other: Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream0.OffsetBase;
    operatorMultiply(operand: number): Size;
    operatorDivide(operand: number): Size;
    operatorTruncateDivide(operand: number): Size;
    operatorModulo(operand: number): Size;
}
export declare function _SizeFactory(width: number, height: number): Size;
export declare namespace _SizeFactory {
    function copy(source: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
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
    function lerp(a: (Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null, t: number): Size | null;
}
export declare const Size: typeof _SizeFactory & _FlaxInstanceType<Size> & _FlaxDartType<Size, readonly ["class", "flax.core/flutter#type:Size", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isInfinite" | "isFinite" | "width" | "height" | "aspectRatio" | "isEmpty" | "shortestSide" | "longestSide" | "flipped" | "toString" | "topLeft" | "topCenter" | "topRight" | "centerLeft" | "center" | "centerRight" | "bottomLeft" | "bottomCenter" | "bottomRight" | "contains" | "operatorLessThan" | "operatorGreaterThan" | "operatorLessThanOrEqual" | "operatorGreaterThanOrEqual" | "operatorAdd" | "operatorSubtract" | "operatorMultiply" | "operatorDivide" | "operatorTruncateDivide" | "operatorModulo" | "__flaxBound:dart:ui::Size" | "__flaxBound:dart:ui::OffsetBase";
export {};
