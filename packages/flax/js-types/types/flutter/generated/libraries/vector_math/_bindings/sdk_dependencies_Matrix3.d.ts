import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector3';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector3';
import type * as upstream1 from '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector2';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector2';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Matrix2';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Matrix3 extends Readonly<{
    "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [];
}> {
    readonly __Matrix3: unique symbol;
    readonly [_flaxDartTypeValue]: Matrix3;
    readonly storage: globalThis.Float64Array;
    readonly dimension: number;
    get row0(): upstream0.Vector3;
    get row1(): upstream0.Vector3;
    get row2(): upstream0.Vector3;
    readonly right: upstream0.Vector3;
    readonly up: upstream0.Vector3;
    readonly forward: upstream0.Vector3;
    index(row: number, col: number): number;
    entry(row: number, col: number): number;
    setEntry(row: number, col: number, v: number): void;
    setValues(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
    setColumns(arg0: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, arg1: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, arg2: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    setFrom(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [];
    }>): void;
    setOuter(u: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, v: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    splatDiagonal(arg: number): void;
    setDiagonal(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    setUpper2x2(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [];
    }>): void;
    toString(): string;
    setRow(row: number, arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    getRow(row: number): upstream0.Vector3;
    setColumn(column: number, arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    getColumn(column: number): upstream0.Vector3;
    clone(): Matrix3;
    copyInto(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [];
    }>): Matrix3;
    setZero(): void;
    setIdentity(): void;
    transposed(): Matrix3;
    transpose(): void;
    absolute(): Matrix3;
    determinant(): number;
    dotRow(i: number, v: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): number;
    dotColumn(j: number, v: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): number;
    trace(): number;
    infinityNorm(): number;
    relativeError(correct: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [];
    }>): number;
    absoluteError(correct: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [];
    }>): number;
    invert(): number;
    copyInverse(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [];
    }>): number;
    copyNormalMatrix(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): void;
    setRotationX(radians: number): void;
    setRotationY(radians: number): void;
    setRotationZ(radians: number): void;
    scaleAdjoint(scale: number): void;
    absoluteRotate(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): upstream0.Vector3;
    absoluteRotate2(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): upstream1.Vector2;
    transform2(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): upstream1.Vector2;
    scale(scale: number): void;
    scaled(scale: number): Matrix3;
    add(o: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [];
    }>): void;
    sub(o: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [];
    }>): void;
    negate(): void;
    multiply(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [];
    }>): void;
    multiplied(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [];
    }>): Matrix3;
    transposeMultiply(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [];
    }>): void;
    multiplyTranspose(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [];
    }>): void;
    transform(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): upstream0.Vector3;
    transformed(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, out?: (Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>) | null): upstream0.Vector3;
    copyIntoArray(array: DartListInput<number, number>, offset?: number): void;
    copyFromArray(array: DartListInput<number, number>, offset?: number): void;
    applyToVector3Array(array: DartListInput<number, number>, offset?: number): DartList<number>;
    isIdentity(): boolean;
    isZero(): boolean;
    operatorGetIndex(i: number): number;
    operatorSetIndex(i: number, v: number): void;
    operatorAdd(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [];
    }>): Matrix3;
    operatorSubtract(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [];
    }>): Matrix3;
    operatorMultiply(arg: unknown | null): unknown | null;
    operatorNegate(): Matrix3;
    set row0(value: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>);
    set row1(value: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>);
    set row2(value: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>);
}
export declare function _Matrix3Factory(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): Matrix3;
export declare namespace _Matrix3Factory {
    function fromList(values: DartListInput<number, number>): Matrix3;
}
export declare namespace _Matrix3Factory {
    function zero(): Matrix3;
}
export declare namespace _Matrix3Factory {
    function identity(): Matrix3;
}
export declare namespace _Matrix3Factory {
    function copy(other: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [];
    }>): Matrix3;
}
export declare namespace _Matrix3Factory {
    function columns(arg0: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, arg1: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, arg2: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): Matrix3;
}
export declare namespace _Matrix3Factory {
    function outer(u: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, v: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): Matrix3;
}
export declare namespace _Matrix3Factory {
    function rotationX(radians: number): Matrix3;
}
export declare namespace _Matrix3Factory {
    function rotationY(radians: number): Matrix3;
}
export declare namespace _Matrix3Factory {
    function rotationZ(radians: number): Matrix3;
}
export declare namespace _Matrix3Factory {
    function solve2(A: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [];
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
export declare namespace _Matrix3Factory {
    function solve(A: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [];
    }>, x: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, b: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
}
export declare const Matrix3: typeof _Matrix3Factory & _FlaxInstanceType<Matrix3> & _FlaxDartType<Matrix3, readonly ["class", "flax.core/sdk_dependencies#type:Matrix3", readonly [], false]>;
