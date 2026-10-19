// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/vector_math/_bindings/sdk_dependencies_Matrix3';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Matrix3';
import type * as upstream1 from '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector3';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector3';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"source","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"x","required":true,"positional":true},{"name":"y","required":true,"positional":true},{"name":"z","required":true,"positional":true},{"name":"w","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"axis","required":true,"positional":true},{"name":"radians","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"rotationMatrix","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"a","required":true,"positional":true},{"name":"b","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"q","required":true,"positional":true},{"name":"omega","required":true,"positional":true}] as const;
const _flaxMemberParameters7 = [{"name":"yaw","required":true,"positional":true},{"name":"pitch","required":true,"positional":true},{"name":"roll","required":true,"positional":true}] as const;
const _flaxMemberParameters8 = [{"name":"v","required":true,"positional":true}] as const;
const _flaxMemberParameters9 = [{"name":"arg","required":true,"positional":true}] as const;
const _flaxMemberParameters10 = [{"name":"scale","required":true,"positional":true}] as const;
const _flaxMemberParameters11 = [{"name":"correct","required":true,"positional":true}] as const;
const _flaxMemberParameters12 = [{"name":"i","required":true,"positional":true}] as const;
const _flaxMemberParameters13 = [{"name":"i","required":true,"positional":true},{"name":"arg","required":true,"positional":true}] as const;
const _flaxMemberParameters14 = [{"name":"other","required":true,"positional":true}] as const;
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
defineObject("flax.core/sdk_dependencies#type:Quaternion", ["storage","x","y","z","w","radians","axis","length2","length"], ["x","y","z","w"], _flaxBindingMethods("flax.core/sdk_dependencies#type:Quaternion", "object", {"clone":_flaxMemberParameters0,"setFrom":_flaxMemberParameters1,"setValues":_flaxMemberParameters2,"setAxisAngle":_flaxMemberParameters3,"setFromRotation":_flaxMemberParameters4,"setFromTwoVectors":_flaxMemberParameters5,"setDQ":_flaxMemberParameters6,"setEuler":_flaxMemberParameters7,"normalize":_flaxMemberParameters0,"negate":_flaxMemberParameters0,"conjugate":_flaxMemberParameters0,"inverse":_flaxMemberParameters0,"normalized":_flaxMemberParameters0,"negated":_flaxMemberParameters0,"conjugated":_flaxMemberParameters0,"inverted":_flaxMemberParameters0,"rotated":_flaxMemberParameters8,"rotate":_flaxMemberParameters8,"add":_flaxMemberParameters9,"sub":_flaxMemberParameters9,"scale":_flaxMemberParameters10,"scaled":_flaxMemberParameters10,"asRotationMatrix":_flaxMemberParameters0,"copyRotationInto":_flaxMemberParameters4,"toString":_flaxMemberParameters0,"relativeError":_flaxMemberParameters11,"absoluteError":_flaxMemberParameters11,"operatorGetIndex":_flaxMemberParameters12,"operatorSetIndex":_flaxMemberParameters13,"operatorAdd":_flaxMemberParameters14,"operatorSubtract":_flaxMemberParameters14,"operatorMultiply":_flaxMemberParameters14,"operatorNegate":_flaxMemberParameters0}, {}), []);
export function _QuaternionFactory(x: number, y: number, z: number, w: number): Quaternion {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 4) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Quaternion", "", _flaxMemberParameters2, [x, y, z, w], {}) as Quaternion;
}
export namespace _QuaternionFactory {
export function fromRotation(rotationMatrix: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [] }>): Quaternion {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Quaternion", "fromRotation", _flaxMemberParameters4, [rotationMatrix], {}) as Quaternion;
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
return constructObject("object", "flax.core/sdk_dependencies#type:Quaternion", "fromTwoVectors", _flaxMemberParameters5, [a, b], {}) as Quaternion;
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
return constructObject("object", "flax.core/sdk_dependencies#type:Quaternion", "identity", _flaxMemberParameters0, [], {}) as Quaternion;
}
}
export namespace _QuaternionFactory {
export function dq(q: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [] }>, omega: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): Quaternion {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Quaternion", "dq", _flaxMemberParameters6, [q, omega], {}) as Quaternion;
}
}
export namespace _QuaternionFactory {
export function euler(yaw: number, pitch: number, roll: number): Quaternion {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Quaternion", "euler", _flaxMemberParameters7, [yaw, pitch, roll], {}) as Quaternion;
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
