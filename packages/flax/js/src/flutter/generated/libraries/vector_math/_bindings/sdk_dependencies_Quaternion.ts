// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/vector_math/_bindings/sdk_dependencies_Matrix3';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Matrix3';
import type * as upstream1 from '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector3';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector3';
import { _flaxMemberParameters2, _flaxMemberParameters0, _flaxMemberParameters89, _flaxMemberParameters90, _flaxMemberParameters91, _flaxMemberParameters92, _flaxMemberParameters93, _flaxMemberParameters94, _flaxMemberParameters95, _flaxMemberParameters68, _flaxMemberParameters78, _flaxMemberParameters76, _flaxMemberParameters82, _flaxMemberParameters96, _flaxMemberParameters85 } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Quaternion extends Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [] }> { readonly __Quaternion: unique symbol;
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
setFrom(source: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [] }>): void;
setValues(x: number, y: number, z: number, w: number): void;
setAxisAngle(axis: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, radians: number): void;
setFromRotation(rotationMatrix: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [] }>): void;
setFromTwoVectors(a: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, b: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
setDQ(q: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [] }>, omega: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
setEuler(yaw: number, pitch: number, roll: number): void;
normalize(): number;
negate(): void;
conjugate(): void;
inverse(): void;
normalized(): Quaternion;
negated(): Quaternion;
conjugated(): Quaternion;
inverted(): Quaternion;
rotated(v: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): upstream1.Vector3;
rotate(v: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): upstream1.Vector3;
add(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [] }>): void;
sub(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [] }>): void;
scale(scale: number): void;
scaled(scale: number): Quaternion;
asRotationMatrix(): upstream0.Matrix3;
copyRotationInto(rotationMatrix: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [] }>): upstream0.Matrix3;
toString(): string;
relativeError(correct: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [] }>): number;
absoluteError(correct: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [] }>): number;
operatorGetIndex(i: number): number;
operatorSetIndex(i: number, arg: number): void;
operatorAdd(other: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [] }>): Quaternion;
operatorSubtract(other: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [] }>): Quaternion;
operatorMultiply(other: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [] }>): Quaternion;
operatorNegate(): Quaternion;
set x(value: number);
set y(value: number);
set z(value: number);
set w(value: number);
}
defineObject("flax.core/sdk_dependencies#type:Quaternion", ["storage","x","y","z","w","radians","axis","length2","length"], ["x","y","z","w"], _flaxBindingMethods("flax.core/sdk_dependencies#type:Quaternion", "object", {"clone":_flaxMemberParameters2,"setFrom":_flaxMemberParameters0,"setValues":_flaxMemberParameters89,"setAxisAngle":_flaxMemberParameters90,"setFromRotation":_flaxMemberParameters91,"setFromTwoVectors":_flaxMemberParameters92,"setDQ":_flaxMemberParameters93,"setEuler":_flaxMemberParameters94,"normalize":_flaxMemberParameters2,"negate":_flaxMemberParameters2,"conjugate":_flaxMemberParameters2,"inverse":_flaxMemberParameters2,"normalized":_flaxMemberParameters2,"negated":_flaxMemberParameters2,"conjugated":_flaxMemberParameters2,"inverted":_flaxMemberParameters2,"rotated":_flaxMemberParameters95,"rotate":_flaxMemberParameters95,"add":_flaxMemberParameters68,"sub":_flaxMemberParameters68,"scale":_flaxMemberParameters78,"scaled":_flaxMemberParameters78,"asRotationMatrix":_flaxMemberParameters2,"copyRotationInto":_flaxMemberParameters91,"toString":_flaxMemberParameters2,"relativeError":_flaxMemberParameters76,"absoluteError":_flaxMemberParameters76,"operatorGetIndex":_flaxMemberParameters82,"operatorSetIndex":_flaxMemberParameters96,"operatorAdd":_flaxMemberParameters85,"operatorSubtract":_flaxMemberParameters85,"operatorMultiply":_flaxMemberParameters85,"operatorNegate":_flaxMemberParameters2}, {}), []);
export function _QuaternionFactory(x: number, y: number, z: number, w: number): Quaternion {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 4) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Quaternion", "", _flaxMemberParameters89, [x, y, z, w], {}) as Quaternion;
}
export namespace _QuaternionFactory {
export function fromRotation(rotationMatrix: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [] }>): Quaternion {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Quaternion", "fromRotation", _flaxMemberParameters91, [rotationMatrix], {}) as Quaternion;
}
}
export namespace _QuaternionFactory {
export function axisAngle(axis: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, angle: number): Quaternion {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Quaternion", "axisAngle", [{"name":"axis","required":true,"positional":true},{"name":"angle","required":true,"positional":true}], [axis, angle], {}) as Quaternion;
}
}
export namespace _QuaternionFactory {
export function fromTwoVectors(a: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, b: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): Quaternion {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Quaternion", "fromTwoVectors", _flaxMemberParameters92, [a, b], {}) as Quaternion;
}
}
export namespace _QuaternionFactory {
export function copy(original: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [] }>): Quaternion {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Quaternion", "copy", [{"name":"original","required":true,"positional":true}], [original], {}) as Quaternion;
}
}
export namespace _QuaternionFactory {
export function identity(): Quaternion {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Quaternion", "identity", _flaxMemberParameters2, [], {}) as Quaternion;
}
}
export namespace _QuaternionFactory {
export function dq(q: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [] }>, omega: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): Quaternion {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Quaternion", "dq", _flaxMemberParameters93, [q, omega], {}) as Quaternion;
}
}
export namespace _QuaternionFactory {
export function euler(yaw: number, pitch: number, roll: number): Quaternion {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Quaternion", "euler", _flaxMemberParameters94, [yaw, pitch, roll], {}) as Quaternion;
}
}
export namespace _QuaternionFactory {
export function fromFloat64List(_qStorage: globalThis.Float64Array): Quaternion {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Quaternion", "fromFloat64List", [{"name":"_qStorage","required":true,"positional":true}], [_qStorage], {}) as Quaternion;
}
}
export namespace _QuaternionFactory {
export function fromBuffer(buffer: globalThis.ArrayBuffer, offset: number): Quaternion {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Quaternion", "fromBuffer", [{"name":"buffer","required":true,"positional":true},{"name":"offset","required":true,"positional":true}], [buffer, offset], {}) as Quaternion;
}
}
export const Quaternion: typeof _QuaternionFactory & _FlaxInstanceType<Quaternion> & _FlaxDartType<Quaternion, readonly ["class", "flax.core/sdk_dependencies#type:Quaternion", readonly [], false]> = _flaxBindInstanceType<Quaternion, typeof _QuaternionFactory>(_QuaternionFactory, "flax.core/sdk_dependencies#type:Quaternion", ["dart:core::Object"]) as typeof _QuaternionFactory & _FlaxInstanceType<Quaternion> & _FlaxDartType<Quaternion, readonly ["class", "flax.core/sdk_dependencies#type:Quaternion", readonly [], false]>;
