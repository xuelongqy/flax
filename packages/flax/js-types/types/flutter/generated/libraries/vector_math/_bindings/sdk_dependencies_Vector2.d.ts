import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector3';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector3';
import type * as upstream1 from '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector4';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector4';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Matrix2';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Vector2 extends Readonly<{
    "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
}>, Readonly<{
    "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
}> {
    readonly __Vector2: unique symbol;
    readonly [_flaxDartTypeValue]: Vector2;
    readonly storage: globalThis.Float64Array;
    get length(): number;
    readonly length2: number;
    readonly isInfinite: boolean;
    readonly isNaN: boolean;
    readonly xx: Vector2;
    get xy(): Vector2;
    get yx(): Vector2;
    readonly yy: Vector2;
    readonly xxx: upstream0.Vector3;
    readonly xxy: upstream0.Vector3;
    readonly xyx: upstream0.Vector3;
    readonly xyy: upstream0.Vector3;
    readonly yxx: upstream0.Vector3;
    readonly yxy: upstream0.Vector3;
    readonly yyx: upstream0.Vector3;
    readonly yyy: upstream0.Vector3;
    readonly xxxx: upstream1.Vector4;
    readonly xxxy: upstream1.Vector4;
    readonly xxyx: upstream1.Vector4;
    readonly xxyy: upstream1.Vector4;
    readonly xyxx: upstream1.Vector4;
    readonly xyxy: upstream1.Vector4;
    readonly xyyx: upstream1.Vector4;
    readonly xyyy: upstream1.Vector4;
    readonly yxxx: upstream1.Vector4;
    readonly yxxy: upstream1.Vector4;
    readonly yxyx: upstream1.Vector4;
    readonly yxyy: upstream1.Vector4;
    readonly yyxx: upstream1.Vector4;
    readonly yyxy: upstream1.Vector4;
    readonly yyyx: upstream1.Vector4;
    readonly yyyy: upstream1.Vector4;
    get r(): number;
    get g(): number;
    get s(): number;
    get t(): number;
    get x(): number;
    get y(): number;
    readonly rr: Vector2;
    get rg(): Vector2;
    get gr(): Vector2;
    readonly gg: Vector2;
    readonly rrr: upstream0.Vector3;
    readonly rrg: upstream0.Vector3;
    readonly rgr: upstream0.Vector3;
    readonly rgg: upstream0.Vector3;
    readonly grr: upstream0.Vector3;
    readonly grg: upstream0.Vector3;
    readonly ggr: upstream0.Vector3;
    readonly ggg: upstream0.Vector3;
    readonly rrrr: upstream1.Vector4;
    readonly rrrg: upstream1.Vector4;
    readonly rrgr: upstream1.Vector4;
    readonly rrgg: upstream1.Vector4;
    readonly rgrr: upstream1.Vector4;
    readonly rgrg: upstream1.Vector4;
    readonly rggr: upstream1.Vector4;
    readonly rggg: upstream1.Vector4;
    readonly grrr: upstream1.Vector4;
    readonly grrg: upstream1.Vector4;
    readonly grgr: upstream1.Vector4;
    readonly grgg: upstream1.Vector4;
    readonly ggrr: upstream1.Vector4;
    readonly ggrg: upstream1.Vector4;
    readonly gggr: upstream1.Vector4;
    readonly gggg: upstream1.Vector4;
    readonly ss: Vector2;
    get st(): Vector2;
    get ts(): Vector2;
    readonly tt: Vector2;
    readonly sss: upstream0.Vector3;
    readonly sst: upstream0.Vector3;
    readonly sts: upstream0.Vector3;
    readonly stt: upstream0.Vector3;
    readonly tss: upstream0.Vector3;
    readonly tst: upstream0.Vector3;
    readonly tts: upstream0.Vector3;
    readonly ttt: upstream0.Vector3;
    readonly ssss: upstream1.Vector4;
    readonly ssst: upstream1.Vector4;
    readonly ssts: upstream1.Vector4;
    readonly sstt: upstream1.Vector4;
    readonly stss: upstream1.Vector4;
    readonly stst: upstream1.Vector4;
    readonly stts: upstream1.Vector4;
    readonly sttt: upstream1.Vector4;
    readonly tsss: upstream1.Vector4;
    readonly tsst: upstream1.Vector4;
    readonly tsts: upstream1.Vector4;
    readonly tstt: upstream1.Vector4;
    readonly ttss: upstream1.Vector4;
    readonly ttst: upstream1.Vector4;
    readonly ttts: upstream1.Vector4;
    readonly tttt: upstream1.Vector4;
    setValues(x_: number, y_: number): void;
    setZero(): void;
    setFrom(other: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    splat(arg: number): void;
    toString(): string;
    normalize(): number;
    normalizeLength(): number;
    normalized(): Vector2;
    normalizeInto(out: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): Vector2;
    distanceTo(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): number;
    distanceToSquared(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): number;
    angleTo(other: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): number;
    angleToSigned(other: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): number;
    dot(other: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): number;
    postmultiply(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [];
    }>): void;
    cross(other: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): number;
    scaleOrthogonalInto(scale: number, out: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): Vector2;
    reflect(normal: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    reflected(normal: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): Vector2;
    relativeError(correct: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): number;
    absoluteError(correct: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): number;
    add(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    addScaled(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, factor: number): void;
    sub(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    multiply(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    divide(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    scale(arg: number): void;
    scaled(arg: number): Vector2;
    negate(): void;
    absolute(): void;
    clamp(min: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, max: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    clampScalar(min: number, max: number): void;
    floor(): void;
    ceil(): void;
    round(): void;
    roundToZero(): void;
    clone(): Vector2;
    copyInto(arg: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): Vector2;
    copyIntoArray(array: DartListInput<number, number>, offset?: number): void;
    copyFromArray(array: DartListInput<number, number>, offset?: number): void;
    operatorGetIndex(i: number): number;
    operatorSetIndex(i: number, v: number): void;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): Vector2;
    operatorSubtract(other: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): Vector2;
    operatorMultiply(scale: number): Vector2;
    operatorDivide(scale: number): Vector2;
    operatorNegate(): Vector2;
    set length(value: number);
    set xy(value: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>);
    set yx(value: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>);
    set r(value: number);
    set g(value: number);
    set s(value: number);
    set t(value: number);
    set x(value: number);
    set y(value: number);
    set rg(value: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>);
    set gr(value: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>);
    set st(value: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>);
    set ts(value: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>);
}
export declare function _Vector2Factory(x: number, y: number): Vector2;
export declare namespace _Vector2Factory {
    function array(array: DartListInput<number, number>, offset?: number): Vector2;
}
export declare namespace _Vector2Factory {
    function zero(): Vector2;
}
export declare namespace _Vector2Factory {
    function all(value: number): Vector2;
}
export declare namespace _Vector2Factory {
    function copy(other: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): Vector2;
}
export declare namespace _Vector2Factory {
    function fromFloat64List(_v2storage: globalThis.Float64Array): Vector2;
}
export declare namespace _Vector2Factory {
    function fromBuffer(buffer: globalThis.ArrayBuffer, offset: number): Vector2;
}
export declare namespace _Vector2Factory {
    function min(a: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, b: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, result: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
}
export declare namespace _Vector2Factory {
    function max(a: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, b: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, result: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
}
export declare namespace _Vector2Factory {
    function mix(min: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, max: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, a: number, result: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
}
export declare const Vector2: typeof _Vector2Factory & _FlaxInstanceType<Vector2> & _FlaxDartType<Vector2, readonly ["class", "flax.core/sdk_dependencies#type:Vector2", readonly [], false]>;
