import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/vector_math/_bindings/sdk_dependencies_Matrix3';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Matrix3';
import type * as upstream1 from '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector3';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector3';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Quaternion extends Readonly<{
    "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [];
}> {
    readonly __Quaternion: unique symbol;
    readonly [_flaxDartTypeValue]: Quaternion;
    readonly storage: globalThis.Float64Array;
    get x(): number;
    get y(): number;
    get z(): number;
    get w(): number;
    readonly radians: number;
    readonly axis: upstream1.Vector3;
    readonly length2: number;
    readonly length: number;
    clone(): Quaternion;
    setFrom(source: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [];
    }>): void;
    setValues(x: number, y: number, z: number, w: number): void;
    setAxisAngle(axis: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, radians: number): void;
    setFromRotation(rotationMatrix: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [];
    }>): void;
    setFromTwoVectors(a: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, b: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    setDQ(q: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [];
    }>, omega: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    setEuler(yaw: number, pitch: number, roll: number): void;
    normalize(): number;
    negate(): void;
    conjugate(): void;
    inverse(): void;
    normalized(): Quaternion;
    negated(): Quaternion;
    conjugated(): Quaternion;
    inverted(): Quaternion;
    rotated(v: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): upstream1.Vector3;
    rotate(v: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): upstream1.Vector3;
    add(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [];
    }>): void;
    sub(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [];
    }>): void;
    scale(scale: number): void;
    scaled(scale: number): Quaternion;
    asRotationMatrix(): upstream0.Matrix3;
    copyRotationInto(rotationMatrix: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [];
    }>): upstream0.Matrix3;
    toString(): string;
    relativeError(correct: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [];
    }>): number;
    absoluteError(correct: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [];
    }>): number;
    operatorGetIndex(i: number): number;
    operatorSetIndex(i: number, arg: number): void;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [];
    }>): Quaternion;
    operatorSubtract(other: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [];
    }>): Quaternion;
    operatorMultiply(other: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [];
    }>): Quaternion;
    operatorNegate(): Quaternion;
    set x(value: number);
    set y(value: number);
    set z(value: number);
    set w(value: number);
}
export declare function _QuaternionFactory(x: number, y: number, z: number, w: number): Quaternion;
export declare namespace _QuaternionFactory {
    function fromRotation(rotationMatrix: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [];
    }>): Quaternion;
}
export declare namespace _QuaternionFactory {
    function axisAngle(axis: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, angle: number): Quaternion;
}
export declare namespace _QuaternionFactory {
    function fromTwoVectors(a: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, b: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): Quaternion;
}
export declare namespace _QuaternionFactory {
    function copy(original: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [];
    }>): Quaternion;
}
export declare namespace _QuaternionFactory {
    function identity(): Quaternion;
}
export declare namespace _QuaternionFactory {
    function dq(q: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [];
    }>, omega: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): Quaternion;
}
export declare namespace _QuaternionFactory {
    function euler(yaw: number, pitch: number, roll: number): Quaternion;
}
export declare namespace _QuaternionFactory {
    function fromFloat64List(_qStorage: globalThis.Float64Array): Quaternion;
}
export declare namespace _QuaternionFactory {
    function fromBuffer(buffer: globalThis.ArrayBuffer, offset: number): Quaternion;
}
export declare const Quaternion: typeof _QuaternionFactory & _FlaxInstanceType<Quaternion> & _FlaxDartType<Quaternion, readonly ["class", "flax.core/sdk_dependencies#type:Quaternion", readonly [], false]>;
