import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector4';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector4';
import type * as upstream1 from '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector3';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector3';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Quaternion';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector2';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Matrix2';
import type * as upstream5 from '@flax/flutter/vector_math/_bindings/sdk_dependencies_Matrix3';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Matrix3';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Matrix4 extends Readonly<{
    "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
}> {
    readonly __Matrix4: unique symbol;
    readonly [_flaxDartTypeValue]: Matrix4;
    readonly storage: globalThis.Float64Array;
    readonly dimension: number;
    get row0(): upstream0.Vector4;
    get row1(): upstream0.Vector4;
    get row2(): upstream0.Vector4;
    get row3(): upstream0.Vector4;
    readonly right: upstream1.Vector3;
    readonly up: upstream1.Vector3;
    readonly forward: upstream1.Vector3;
    index(row: number, col: number): number;
    entry(row: number, col: number): number;
    setEntry(row: number, col: number, v: number): void;
    splatDiagonal(arg: number): void;
    setValues(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number): void;
    setColumns(arg0: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, arg1: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, arg2: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, arg3: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    setFrom(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): void;
    setFromTranslationRotation(arg0: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, arg1: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [];
    }>): void;
    setFromTranslationRotationScale(translation: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, rotation: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [];
    }>, scale: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    setUpper2x2(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [];
    }>): void;
    setDiagonal(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    setOuter(u: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, v: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    toString(): string;
    setRow(row: number, arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    getRow(row: number): upstream0.Vector4;
    setColumn(column: number, arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    getColumn(column: number): upstream0.Vector4;
    clone(): Matrix4;
    copyInto(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): Matrix4;
    translate(x: unknown | null, y?: number, z?: number): void;
    translateByDouble(tx: number, ty: number, tz: number, tw: number): void;
    translateByVector2(v2: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    translateByVector3(v3: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    translateByVector4(v4: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    leftTranslate(x: unknown | null, y?: number, z?: number): void;
    leftTranslateByDouble(tx: number, ty: number, tz: number, tw: number): void;
    leftTranslateByVector2(v2: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    leftTranslateByVector3(v3: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    leftTranslateByVector4(v4: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    rotate(axis: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, angle: number): void;
    rotateX(angle: number): void;
    rotateY(angle: number): void;
    rotateZ(angle: number): void;
    scale(x: unknown | null, y?: number | null, z?: number | null): void;
    scaleByDouble(sx: number, sy: number, sz: number, sw: number): void;
    scaleByVector3(v3: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    scaleByVector4(v4: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    scaled(x: unknown | null, y?: number | null, z?: number | null): Matrix4;
    scaledByDouble(x: number, y: number, z: number, t: number): Matrix4;
    scaledByVector3(v3: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): Matrix4;
    scaledByVector4(v4: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): Matrix4;
    setZero(): void;
    setIdentity(): void;
    transposed(): Matrix4;
    transpose(): void;
    absolute(): Matrix4;
    determinant(): number;
    dotRow(i: number, v: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): number;
    dotColumn(j: number, v: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): number;
    trace(): number;
    infinityNorm(): number;
    relativeError(correct: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): number;
    absoluteError(correct: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): number;
    getTranslation(): upstream1.Vector3;
    setTranslation(t: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    setTranslationRaw(x: number, y: number, z: number): void;
    getRotation(): upstream5.Matrix3;
    copyRotation(rotation: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [];
    }>): void;
    setRotation(r: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [];
    }>): void;
    getNormalMatrix(): upstream5.Matrix3;
    getMaxScaleOnAxis(): number;
    transposeRotation(): void;
    invert(): number;
    copyInverse(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): number;
    invertRotation(): number;
    setRotationX(radians: number): void;
    setRotationY(radians: number): void;
    setRotationZ(radians: number): void;
    scaleAdjoint(scale: number): void;
    absoluteRotate(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): upstream1.Vector3;
    add(o: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): void;
    sub(o: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): void;
    negate(): void;
    multiply(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): void;
    leftMultiply(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): void;
    multiplied(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): Matrix4;
    transposeMultiply(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): void;
    multiplyTranspose(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): void;
    decompose(translation: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, rotation: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [];
    }>, scale: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    rotate3(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): upstream1.Vector3;
    rotated3(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, out?: (Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>) | null): upstream1.Vector3;
    transform3(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): upstream1.Vector3;
    transformed3(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, out?: (Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>) | null): upstream1.Vector3;
    transform(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): upstream0.Vector4;
    perspectiveTransform(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): upstream1.Vector3;
    transformed(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, out?: (Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>) | null): upstream0.Vector4;
    copyIntoArray(array: DartListInput<number, number>, offset?: number): void;
    copyFromArray(array: DartListInput<number, number>, offset?: number): void;
    applyToVector3Array(array: DartListInput<number, number>, offset?: number): DartList<number>;
    isIdentity(): boolean;
    isZero(): boolean;
    operatorGetIndex(i: number): number;
    operatorSetIndex(i: number, v: number): void;
    operatorAdd(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): Matrix4;
    operatorSubtract(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): Matrix4;
    operatorMultiply(arg: unknown | null): unknown | null;
    operatorNegate(): Matrix4;
    set row0(value: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>);
    set row1(value: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>);
    set row2(value: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>);
    set row3(value: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>);
}
export declare function _Matrix4Factory(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number): Matrix4;
export declare namespace _Matrix4Factory {
    function fromList(values: DartListInput<number, number>): Matrix4;
}
export declare namespace _Matrix4Factory {
    function zero(): Matrix4;
}
export declare namespace _Matrix4Factory {
    function identity(): Matrix4;
}
export declare namespace _Matrix4Factory {
    function copy(other: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): Matrix4;
}
export declare namespace _Matrix4Factory {
    function inverted(other: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): Matrix4;
}
export declare namespace _Matrix4Factory {
    function columns(arg0: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, arg1: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, arg2: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, arg3: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): Matrix4;
}
export declare namespace _Matrix4Factory {
    function outer(u: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, v: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): Matrix4;
}
export declare namespace _Matrix4Factory {
    function rotationX(radians: number): Matrix4;
}
export declare namespace _Matrix4Factory {
    function rotationY(radians: number): Matrix4;
}
export declare namespace _Matrix4Factory {
    function rotationZ(radians: number): Matrix4;
}
export declare namespace _Matrix4Factory {
    function translation(translation: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): Matrix4;
}
export declare namespace _Matrix4Factory {
    function translationValues(x: number, y: number, z: number): Matrix4;
}
export declare namespace _Matrix4Factory {
    function diagonal3(scale: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): Matrix4;
}
export declare namespace _Matrix4Factory {
    function diagonal3Values(x: number, y: number, z: number): Matrix4;
}
export declare namespace _Matrix4Factory {
    function skewX(alpha: number): Matrix4;
}
export declare namespace _Matrix4Factory {
    function skewY(beta: number): Matrix4;
}
export declare namespace _Matrix4Factory {
    function skew(alpha: number, beta: number): Matrix4;
}
export declare namespace _Matrix4Factory {
    function fromFloat64List(_m4storage: globalThis.Float64Array): Matrix4;
}
export declare namespace _Matrix4Factory {
    function fromBuffer(buffer: globalThis.ArrayBuffer, offset: number): Matrix4;
}
export declare namespace _Matrix4Factory {
    function compose(translation: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, rotation: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [];
    }>, scale: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): Matrix4;
}
export declare namespace _Matrix4Factory {
    function solve2(A: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
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
export declare namespace _Matrix4Factory {
    function solve3(A: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
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
export declare namespace _Matrix4Factory {
    function solve(A: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>, x: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, b: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
}
export declare namespace _Matrix4Factory {
    function tryInvert(other: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): Matrix4 | null;
}
export declare const Matrix4: typeof _Matrix4Factory & _FlaxInstanceType<Matrix4> & _FlaxDartType<Matrix4, readonly ["class", "flax.core/sdk_rendering#type:Matrix4", readonly [], false]>;
