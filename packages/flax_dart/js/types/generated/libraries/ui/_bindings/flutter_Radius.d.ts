import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Radius extends Readonly<{
    "__flaxBound:dart:ui::Radius": readonly [];
}> {
    readonly __Radius: unique symbol;
    readonly [_flaxDartTypeValue]: Radius;
    readonly x: number;
    readonly y: number;
    clamp(options?: {
        maximum?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | null | undefined;
        minimum?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | null | undefined;
    }): Radius;
    clampValues(options?: {
        maximumX?: number | null | undefined;
        maximumY?: number | null | undefined;
        minimumX?: number | null | undefined;
        minimumY?: number | null | undefined;
    }): Radius;
    toString(): string;
    operatorAdd(other: Readonly<{
        "__flaxBound:dart:ui::Radius": readonly [];
    }>): Radius;
    operatorSubtract(other: Readonly<{
        "__flaxBound:dart:ui::Radius": readonly [];
    }>): Radius;
    operatorMultiply(operand: number): Radius;
    operatorDivide(operand: number): Radius;
    operatorTruncateDivide(operand: number): Radius;
    operatorModulo(operand: number): Radius;
    operatorNegate(): Radius;
}
export declare namespace _RadiusFactory {
    function circular(radius: number): Radius;
}
export declare namespace _RadiusFactory {
    function elliptical(x: number, y: number): Radius;
}
export declare namespace _RadiusFactory {
    const zero: Radius;
}
export declare namespace _RadiusFactory {
    function lerp(a: Readonly<{
        "__flaxBound:dart:ui::Radius": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:dart:ui::Radius": readonly [];
    }> | null, t: number): Radius | null;
}
export declare const Radius: typeof _RadiusFactory & _FlaxInstanceType<Radius> & _FlaxDartType<Radius, readonly ["class", "flax.core/flutter#type:Radius", readonly [], false]>;
