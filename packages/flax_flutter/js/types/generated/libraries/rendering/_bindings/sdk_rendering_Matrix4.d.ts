import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Matrix4 extends Readonly<{
    "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
}> {
    readonly __Matrix4: unique symbol;
    readonly [_flaxDartTypeValue]: Matrix4;
    readonly storage: globalThis.Float64Array;
    readonly dimension: number;
    index(row: number, col: number): number;
    entry(row: number, col: number): number;
    setEntry(row: number, col: number, v: number): void;
    splatDiagonal(arg: number): void;
    setValues(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number): void;
    setFrom(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): void;
    toString(): string;
    clone(): Matrix4;
    copyInto(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): Matrix4;
    translate(x: unknown | null, y?: number, z?: number): void;
    translateByDouble(tx: number, ty: number, tz: number, tw: number): void;
    leftTranslate(x: unknown | null, y?: number, z?: number): void;
    leftTranslateByDouble(tx: number, ty: number, tz: number, tw: number): void;
    rotateX(angle: number): void;
    rotateY(angle: number): void;
    rotateZ(angle: number): void;
    scale(x: unknown | null, y?: number | null, z?: number | null): void;
    scaleByDouble(sx: number, sy: number, sz: number, sw: number): void;
    scaled(x: unknown | null, y?: number | null, z?: number | null): Matrix4;
    scaledByDouble(x: number, y: number, z: number, t: number): Matrix4;
    setZero(): void;
    setIdentity(): void;
    transposed(): Matrix4;
    transpose(): void;
    absolute(): Matrix4;
    determinant(): number;
    trace(): number;
    infinityNorm(): number;
    relativeError(correct: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): number;
    absoluteError(correct: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): number;
    setTranslationRaw(x: number, y: number, z: number): void;
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
    function rotationX(radians: number): Matrix4;
}
export declare namespace _Matrix4Factory {
    function rotationY(radians: number): Matrix4;
}
export declare namespace _Matrix4Factory {
    function rotationZ(radians: number): Matrix4;
}
export declare namespace _Matrix4Factory {
    function translationValues(x: number, y: number, z: number): Matrix4;
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
    function tryInvert(other: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): Matrix4 | null;
}
export declare const Matrix4: typeof _Matrix4Factory & _FlaxInstanceType<Matrix4> & _FlaxDartType<Matrix4, readonly ["class", "flax.core/sdk_rendering#type:Matrix4", readonly [], false]>;
