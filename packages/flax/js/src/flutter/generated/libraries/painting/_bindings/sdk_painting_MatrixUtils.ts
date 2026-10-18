// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MatrixUtils extends Readonly<{ "__flaxBound:package:flutter/src/painting/matrix_utils.dart::MatrixUtils": readonly [] }> { readonly __MatrixUtils: unique symbol;
readonly [_flaxDartTypeValue]: MatrixUtils;

}
defineObject("flax.core/sdk_painting#type:MatrixUtils", [], [], _flaxBindingMethods("flax.core/sdk_painting#type:MatrixUtils", "object", {}, {}), []);
export namespace _MatrixUtilsFactory { export function getAsTranslation(transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): upstream0.Offset | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:MatrixUtils.getAsTranslation", [transform]);
return _flaxResult as upstream0.Offset | null;
} }
export namespace _MatrixUtilsFactory { export function getAsScale(transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): number | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:MatrixUtils.getAsScale", [transform]);
return _flaxResult as number | null;
} }
export namespace _MatrixUtilsFactory { export function multiplyInPlace(a: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>, b: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:MatrixUtils.multiplyInPlace", [a, b]);
} }
export namespace _MatrixUtilsFactory { export function matrixEquals(a: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null): boolean {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:MatrixUtils.matrixEquals", [a, b]);
return _flaxResult as boolean;
} }
export namespace _MatrixUtilsFactory { export function isIdentity(a: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:MatrixUtils.isIdentity", [a]);
return _flaxResult as boolean;
} }
export namespace _MatrixUtilsFactory { export function transformPoint(transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>, point: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream0.Offset {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:MatrixUtils.transformPoint", [transform, point]);
return _flaxResult as upstream0.Offset;
} }
export namespace _MatrixUtilsFactory { export function transformRect(transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): upstream2.Rect {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:MatrixUtils.transformRect", [transform, rect]);
return _flaxResult as upstream2.Rect;
} }
export namespace _MatrixUtilsFactory { export function inverseTransformRect(transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): upstream2.Rect {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:MatrixUtils.inverseTransformRect", [transform, rect]);
return _flaxResult as upstream2.Rect;
} }
export namespace _MatrixUtilsFactory { export function createCylindricalProjectionTransform(options: { angle: number; orientation?: upstream3.Axis | undefined; perspective?: number | undefined; radius: number }): upstream1.Matrix4 {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["angle","orientation","perspective","radius"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:MatrixUtils.createCylindricalProjectionTransform", [options.angle, options.orientation, options.perspective, options.radius]);
return _flaxResult as upstream1.Matrix4;
} }
export namespace _MatrixUtilsFactory { export function forceToPoint(offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream1.Matrix4 {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:MatrixUtils.forceToPoint", [offset]);
return _flaxResult as upstream1.Matrix4;
} }
export const MatrixUtils: typeof _MatrixUtilsFactory & _FlaxInstanceType<MatrixUtils> & _FlaxDartType<MatrixUtils, readonly ["class", "flax.core/sdk_painting#type:MatrixUtils", readonly [], false]> = _flaxBindInstanceType<MatrixUtils, typeof _MatrixUtilsFactory>(_MatrixUtilsFactory, "flax.core/sdk_painting#type:MatrixUtils", ["dart:core::Object"]) as typeof _MatrixUtilsFactory & _FlaxInstanceType<MatrixUtils> & _FlaxDartType<MatrixUtils, readonly ["class", "flax.core/sdk_painting#type:MatrixUtils", readonly [], false]>;
