import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_OffsetBase';
import '@flax/dart/ui/_bindings/sdk_dart_ui_OffsetBase';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/flutter_Size';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Offset extends Omit<upstream0.OffsetBase, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:dart:ui::Offset": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}> {
    readonly __Offset: unique symbol;
    readonly [_flaxDartTypeValue]: Offset;
    readonly isInfinite: boolean;
    readonly isFinite: boolean;
    readonly dx: number;
    readonly dy: number;
    readonly distance: number;
    readonly distanceSquared: number;
    readonly direction: number;
    toString(): string;
    scale(scaleX: number, scaleY: number): Offset;
    translate(translateX: number, translateY: number): Offset;
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
    }>): Offset;
    operatorSubtract(other: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): Offset;
    operatorMultiply(operand: number): Offset;
    operatorDivide(operand: number): Offset;
    operatorTruncateDivide(operand: number): Offset;
    operatorModulo(operand: number): Offset;
    operatorBitAnd(other: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream1.Rect;
    operatorNegate(): Offset;
}
export declare function _OffsetFactory(dx: number, dy: number): Offset;
export declare namespace _OffsetFactory {
    function fromDirection(direction: number, distance?: number): Offset;
}
export declare namespace _OffsetFactory {
    const zero: Offset;
}
export declare namespace _OffsetFactory {
    const infinite: Offset;
}
export declare namespace _OffsetFactory {
    function lerp(a: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null, t: number): Offset | null;
}
export declare const Offset: typeof _OffsetFactory & _FlaxInstanceType<Offset> & _FlaxDartType<Offset, readonly ["class", "flax.core/flutter#type:Offset", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isInfinite" | "isFinite" | "dx" | "dy" | "distance" | "distanceSquared" | "direction" | "toString" | "scale" | "translate" | "operatorLessThan" | "operatorGreaterThan" | "operatorLessThanOrEqual" | "operatorGreaterThanOrEqual" | "operatorAdd" | "operatorSubtract" | "operatorMultiply" | "operatorDivide" | "operatorTruncateDivide" | "operatorModulo" | "operatorBitAnd" | "operatorNegate" | "__flaxBound:dart:ui::Offset" | "__flaxBound:dart:ui::OffsetBase";
export {};
