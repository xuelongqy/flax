import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector3';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector3';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Quad extends Readonly<{
    "__flaxBound:package:vector_math/vector_math_64.dart::Quad": readonly [];
}> {
    readonly __Quad: unique symbol;
    readonly [_flaxDartTypeValue]: Quad;
    readonly point0: upstream0.Vector3;
    readonly point1: upstream0.Vector3;
    readonly point2: upstream0.Vector3;
    readonly point3: upstream0.Vector3;
    copyFrom(other: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Quad": readonly [];
    }>): void;
    copyNormalInto(normal: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    transform(t: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): void;
    translate(offset: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): void;
    toString(): string;
}
export declare function _QuadFactory(): Quad;
export declare namespace _QuadFactory {
    function copy(other: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Quad": readonly [];
    }>): Quad;
}
export declare namespace _QuadFactory {
    function points(point0: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, point1: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, point2: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>, point3: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [];
    }> & Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [];
    }>): Quad;
}
export declare const Quad: typeof _QuadFactory & _FlaxInstanceType<Quad> & _FlaxDartType<Quad, readonly ["class", "flax.core/sdk_dependencies#type:Quad", readonly [], false]>;
