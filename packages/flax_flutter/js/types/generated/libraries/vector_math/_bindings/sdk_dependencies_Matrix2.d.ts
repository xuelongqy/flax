import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector2';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector2';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Matrix2 extends Readonly<{
    "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [];
}> {
    readonly __Matrix2: unique symbol;
    readonly [_flaxDartTypeValue]: Matrix2;
    readonly storage: globalThis.Float64Array;
    readonly dimension: number;
    get row0(): upstream0.Vector2;
    get row1(): upstream0.Vector2;
    index(row: number, col: number): number;
    entry(row: number, col: number): number;
    setEntry(row: number, col: number, v: number): void;
    setValues(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setColumns(arg0: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, arg1: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    setFrom(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [];
    }>): void;
    setOuter(u: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, v: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    splatDiagonal(arg: number): void;
    setDiagonal(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    toString(): string;
    setRow(row: number, arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    getRow(row: number): upstream0.Vector2;
    setColumn(column: number, arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    getColumn(column: number): upstream0.Vector2;
    clone(): Matrix2;
    copyInto(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [];
    }>): Matrix2;
    setZero(): void;
    setIdentity(): void;
    transposed(): Matrix2;
    transpose(): void;
    absolute(): Matrix2;
    determinant(): number;
    dotRow(i: number, v: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): number;
    dotColumn(j: number, v: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): number;
    trace(): number;
    infinityNorm(): number;
    relativeError(correct: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [];
    }>): number;
    absoluteError(correct: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [];
    }>): number;
    invert(): number;
    copyInverse(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [];
    }>): number;
    setRotation(radians: number): void;
    scaleAdjoint(scale: number): void;
    scale(scale: number): void;
    scaled(scale: number): Matrix2;
    add(o: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [];
    }>): void;
    sub(o: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [];
    }>): void;
    negate(): void;
    multiply(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [];
    }>): void;
    multiplied(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [];
    }>): Matrix2;
    transposeMultiply(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [];
    }>): void;
    multiplyTranspose(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [];
    }>): void;
    transform(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): upstream0.Vector2;
    transformed(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, out?: (Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>) | null): upstream0.Vector2;
    copyIntoArray(array: DartListInput<number, number>, offset?: number): void;
    copyFromArray(array: DartListInput<number, number>, offset?: number): void;
    operatorGetIndex(i: number): number;
    operatorSetIndex(i: number, v: number): void;
    operatorAdd(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [];
    }>): Matrix2;
    operatorSubtract(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [];
    }>): Matrix2;
    operatorMultiply(arg: unknown | null): unknown | null;
    operatorNegate(): Matrix2;
    set row0(value: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>);
    set row1(value: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>);
}
export declare function _Matrix2Factory(arg0: number, arg1: number, arg2: number, arg3: number): Matrix2;
export declare namespace _Matrix2Factory {
    function fromList(values: DartListInput<number, number>): Matrix2;
}
export declare namespace _Matrix2Factory {
    function zero(): Matrix2;
}
export declare namespace _Matrix2Factory {
    function identity(): Matrix2;
}
export declare namespace _Matrix2Factory {
    function copy(other: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [];
    }>): Matrix2;
}
export declare namespace _Matrix2Factory {
    function columns(arg0: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, arg1: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): Matrix2;
}
export declare namespace _Matrix2Factory {
    function outer(u: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, v: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): Matrix2;
}
export declare namespace _Matrix2Factory {
    function rotation(radians: number): Matrix2;
}
export declare namespace _Matrix2Factory {
    function solve(A: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [];
    }>, x: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, b: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
}
export declare const Matrix2: typeof _Matrix2Factory & _FlaxInstanceType<Matrix2> & _FlaxDartType<Matrix2, readonly ["class", "flax.core/sdk_dependencies#type:Matrix2", readonly [], false]>;
