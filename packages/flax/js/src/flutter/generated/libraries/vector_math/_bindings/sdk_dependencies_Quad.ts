// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector3';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector3';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import { _flaxMemberParameters75, _flaxMemberParameters76, _flaxMemberParameters77, _flaxMemberParameters78, _flaxMemberParameters2 } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Quad extends Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Quad": readonly [] }> { readonly __Quad: unique symbol;
readonly [_flaxDartTypeValue]: Quad;

readonly point0: upstream0.Vector3;
readonly point1: upstream0.Vector3;
readonly point2: upstream0.Vector3;
readonly point3: upstream0.Vector3;
copyFrom(other: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Quad": readonly [] }>): void;
copyNormalInto(normal: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
transform(t: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
translate(offset: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
toString(): string;
}
defineObject("flax.core/sdk_dependencies#type:Quad", ["point0","point1","point2","point3"], [], _flaxBindingMethods("flax.core/sdk_dependencies#type:Quad", "object", {"copyFrom":_flaxMemberParameters75,"copyNormalInto":_flaxMemberParameters76,"transform":_flaxMemberParameters77,"translate":_flaxMemberParameters78,"toString":_flaxMemberParameters2}, {}), []);
export function _QuadFactory(): Quad {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Quad", "", _flaxMemberParameters2, [], {}) as Quad;
}
export namespace _QuadFactory {
export function copy(other: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Quad": readonly [] }>): Quad {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Quad", "copy", _flaxMemberParameters75, [other], {}) as Quad;
}
}
export namespace _QuadFactory {
export function points(point0: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, point1: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, point2: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, point3: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): Quad {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 4) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Quad", "points", [{"name":"point0","required":true,"positional":true},{"name":"point1","required":true,"positional":true},{"name":"point2","required":true,"positional":true},{"name":"point3","required":true,"positional":true}], [point0, point1, point2, point3], {}) as Quad;
}
}
export const Quad: typeof _QuadFactory & _FlaxInstanceType<Quad> & _FlaxDartType<Quad, readonly ["class", "flax.core/sdk_dependencies#type:Quad", readonly [], false]> = _flaxBindInstanceType<Quad, typeof _QuadFactory>(_QuadFactory, "flax.core/sdk_dependencies#type:Quad", ["dart:core::Object"]) as typeof _QuadFactory & _FlaxInstanceType<Quad> & _FlaxDartType<Quad, readonly ["class", "flax.core/sdk_dependencies#type:Quad", readonly [], false]>;
