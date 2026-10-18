import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MatrixUtils extends Readonly<{
    "__flaxBound:package:flutter/src/painting/matrix_utils.dart::MatrixUtils": readonly [];
}> {
    readonly __MatrixUtils: unique symbol;
    readonly [_flaxDartTypeValue]: MatrixUtils;
}
export declare namespace _MatrixUtilsFactory {
    function getAsTranslation(transform: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): upstream0.Offset | null;
}
export declare namespace _MatrixUtilsFactory {
    function getAsScale(transform: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): number | null;
}
export declare namespace _MatrixUtilsFactory {
    function multiplyInPlace(a: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>, b: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): void;
}
export declare namespace _MatrixUtilsFactory {
    function matrixEquals(a: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }> | null): boolean;
}
export declare namespace _MatrixUtilsFactory {
    function isIdentity(a: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): boolean;
}
export declare namespace _MatrixUtilsFactory {
    function transformPoint(transform: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>, point: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream0.Offset;
}
export declare namespace _MatrixUtilsFactory {
    function transformRect(transform: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>): upstream2.Rect;
}
export declare namespace _MatrixUtilsFactory {
    function inverseTransformRect(transform: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>): upstream2.Rect;
}
export declare namespace _MatrixUtilsFactory {
    function createCylindricalProjectionTransform(options: {
        angle: number;
        orientation?: upstream3.Axis | undefined;
        perspective?: number | undefined;
        radius: number;
    }): upstream1.Matrix4;
}
export declare namespace _MatrixUtilsFactory {
    function forceToPoint(offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream1.Matrix4;
}
export declare const MatrixUtils: typeof _MatrixUtilsFactory & _FlaxInstanceType<MatrixUtils> & _FlaxDartType<MatrixUtils, readonly ["class", "flax.core/sdk_painting#type:MatrixUtils", readonly [], false]>;
