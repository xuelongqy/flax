// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"row","required":true,"positional":true},{"name":"col","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"row","required":true,"positional":true},{"name":"col","required":true,"positional":true},{"name":"v","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"arg","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"arg0","required":true,"positional":true},{"name":"arg1","required":true,"positional":true},{"name":"arg2","required":true,"positional":true},{"name":"arg3","required":true,"positional":true},{"name":"arg4","required":true,"positional":true},{"name":"arg5","required":true,"positional":true},{"name":"arg6","required":true,"positional":true},{"name":"arg7","required":true,"positional":true},{"name":"arg8","required":true,"positional":true},{"name":"arg9","required":true,"positional":true},{"name":"arg10","required":true,"positional":true},{"name":"arg11","required":true,"positional":true},{"name":"arg12","required":true,"positional":true},{"name":"arg13","required":true,"positional":true},{"name":"arg14","required":true,"positional":true},{"name":"arg15","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [] as const;
const _flaxMemberParameters5 = [{"name":"x","required":true,"positional":true},{"name":"y","required":false,"positional":true},{"name":"z","required":false,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"tx","required":true,"positional":true},{"name":"ty","required":true,"positional":true},{"name":"tz","required":true,"positional":true},{"name":"tw","required":true,"positional":true}] as const;
const _flaxMemberParameters7 = [{"name":"angle","required":true,"positional":true}] as const;
const _flaxMemberParameters8 = [{"name":"sx","required":true,"positional":true},{"name":"sy","required":true,"positional":true},{"name":"sz","required":true,"positional":true},{"name":"sw","required":true,"positional":true}] as const;
const _flaxMemberParameters9 = [{"name":"x","required":true,"positional":true},{"name":"y","required":true,"positional":true},{"name":"z","required":true,"positional":true},{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters10 = [{"name":"correct","required":true,"positional":true}] as const;
const _flaxMemberParameters11 = [{"name":"x","required":true,"positional":true},{"name":"y","required":true,"positional":true},{"name":"z","required":true,"positional":true}] as const;
const _flaxMemberParameters12 = [{"name":"radians","required":true,"positional":true}] as const;
const _flaxMemberParameters13 = [{"name":"scale","required":true,"positional":true}] as const;
const _flaxMemberParameters14 = [{"name":"o","required":true,"positional":true}] as const;
const _flaxMemberParameters15 = [{"name":"array","required":true,"positional":true},{"name":"offset","required":false,"positional":true}] as const;
const _flaxMemberParameters16 = [{"name":"i","required":true,"positional":true}] as const;
const _flaxMemberParameters17 = [{"name":"i","required":true,"positional":true},{"name":"v","required":true,"positional":true}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Matrix4 extends Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> { readonly __Matrix4: unique symbol;
readonly [_flaxDartTypeValue]: Matrix4;

readonly storage: globalThis.Float64Array;
readonly dimension: number;
index(row: number, col: number): number;
entry(row: number, col: number): number;
setEntry(row: number, col: number, v: number): void;
splatDiagonal(arg: number): void;
setValues(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number): void;
setFrom(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
toString(): string;
clone(): Matrix4;
copyInto(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): Matrix4;
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
relativeError(correct: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): number;
absoluteError(correct: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): number;
setTranslationRaw(x: number, y: number, z: number): void;
getMaxScaleOnAxis(): number;
transposeRotation(): void;
invert(): number;
copyInverse(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): number;
invertRotation(): number;
setRotationX(radians: number): void;
setRotationY(radians: number): void;
setRotationZ(radians: number): void;
scaleAdjoint(scale: number): void;
add(o: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
sub(o: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
negate(): void;
multiply(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
leftMultiply(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
multiplied(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): Matrix4;
transposeMultiply(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
multiplyTranspose(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
copyIntoArray(array: DartListInput<number, number>, offset?: number): void;
copyFromArray(array: DartListInput<number, number>, offset?: number): void;
applyToVector3Array(array: DartListInput<number, number>, offset?: number): DartList<number>;
isIdentity(): boolean;
isZero(): boolean;
operatorGetIndex(i: number): number;
operatorSetIndex(i: number, v: number): void;
operatorAdd(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): Matrix4;
operatorSubtract(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): Matrix4;
operatorMultiply(arg: unknown | null): unknown | null;
operatorNegate(): Matrix4;
}
defineObject("flax.core/sdk_rendering#type:Matrix4", ["storage","dimension"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:Matrix4", "object", {"index":_flaxMemberParameters0,"entry":_flaxMemberParameters0,"setEntry":_flaxMemberParameters1,"splatDiagonal":_flaxMemberParameters2,"setValues":_flaxMemberParameters3,"setFrom":_flaxMemberParameters2,"toString":_flaxMemberParameters4,"clone":_flaxMemberParameters4,"copyInto":_flaxMemberParameters2,"translate":_flaxMemberParameters5,"translateByDouble":_flaxMemberParameters6,"leftTranslate":_flaxMemberParameters5,"leftTranslateByDouble":_flaxMemberParameters6,"rotateX":_flaxMemberParameters7,"rotateY":_flaxMemberParameters7,"rotateZ":_flaxMemberParameters7,"scale":_flaxMemberParameters5,"scaleByDouble":_flaxMemberParameters8,"scaled":_flaxMemberParameters5,"scaledByDouble":_flaxMemberParameters9,"setZero":_flaxMemberParameters4,"setIdentity":_flaxMemberParameters4,"transposed":_flaxMemberParameters4,"transpose":_flaxMemberParameters4,"absolute":_flaxMemberParameters4,"determinant":_flaxMemberParameters4,"trace":_flaxMemberParameters4,"infinityNorm":_flaxMemberParameters4,"relativeError":_flaxMemberParameters10,"absoluteError":_flaxMemberParameters10,"setTranslationRaw":_flaxMemberParameters11,"getMaxScaleOnAxis":_flaxMemberParameters4,"transposeRotation":_flaxMemberParameters4,"invert":_flaxMemberParameters4,"copyInverse":_flaxMemberParameters2,"invertRotation":_flaxMemberParameters4,"setRotationX":_flaxMemberParameters12,"setRotationY":_flaxMemberParameters12,"setRotationZ":_flaxMemberParameters12,"scaleAdjoint":_flaxMemberParameters13,"add":_flaxMemberParameters14,"sub":_flaxMemberParameters14,"negate":_flaxMemberParameters4,"multiply":_flaxMemberParameters2,"leftMultiply":_flaxMemberParameters2,"multiplied":_flaxMemberParameters2,"transposeMultiply":_flaxMemberParameters2,"multiplyTranspose":_flaxMemberParameters2,"copyIntoArray":_flaxMemberParameters15,"copyFromArray":_flaxMemberParameters15,"applyToVector3Array":_flaxMemberParameters15,"isIdentity":_flaxMemberParameters4,"isZero":_flaxMemberParameters4,"operatorGetIndex":_flaxMemberParameters16,"operatorSetIndex":_flaxMemberParameters17,"operatorAdd":_flaxMemberParameters2,"operatorSubtract":_flaxMemberParameters2,"operatorMultiply":_flaxMemberParameters2,"operatorNegate":_flaxMemberParameters4}, {}), []);
export function _Matrix4Factory(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 16) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "", [{"name":"arg0","required":true,"positional":true},{"name":"arg1","required":true,"positional":true},{"name":"arg2","required":true,"positional":true},{"name":"arg3","required":true,"positional":true},{"name":"arg4","required":true,"positional":true},{"name":"arg5","required":true,"positional":true},{"name":"arg6","required":true,"positional":true},{"name":"arg7","required":true,"positional":true},{"name":"arg8","required":true,"positional":true},{"name":"arg9","required":true,"positional":true},{"name":"arg10","required":true,"positional":true},{"name":"arg11","required":true,"positional":true},{"name":"arg12","required":true,"positional":true},{"name":"arg13","required":true,"positional":true},{"name":"arg14","required":true,"positional":true},{"name":"arg15","required":true,"positional":true}], [arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15], {}) as Matrix4;
}
export namespace _Matrix4Factory {
export function fromList(values: DartListInput<number, number>): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "fromList", [{"name":"values","required":true,"positional":true}], [values], {}) as Matrix4;
}
}
export namespace _Matrix4Factory {
export function zero(): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "zero", [], [], {}) as Matrix4;
}
}
export namespace _Matrix4Factory {
export function identity(): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "identity", [], [], {}) as Matrix4;
}
}
export namespace _Matrix4Factory {
export function copy(other: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "copy", [{"name":"other","required":true,"positional":true}], [other], {}) as Matrix4;
}
}
export namespace _Matrix4Factory {
export function inverted(other: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "inverted", [{"name":"other","required":true,"positional":true}], [other], {}) as Matrix4;
}
}
export namespace _Matrix4Factory {
export function rotationX(radians: number): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "rotationX", [{"name":"radians","required":true,"positional":true}], [radians], {}) as Matrix4;
}
}
export namespace _Matrix4Factory {
export function rotationY(radians: number): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "rotationY", [{"name":"radians","required":true,"positional":true}], [radians], {}) as Matrix4;
}
}
export namespace _Matrix4Factory {
export function rotationZ(radians: number): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "rotationZ", [{"name":"radians","required":true,"positional":true}], [radians], {}) as Matrix4;
}
}
export namespace _Matrix4Factory {
export function translationValues(x: number, y: number, z: number): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "translationValues", [{"name":"x","required":true,"positional":true},{"name":"y","required":true,"positional":true},{"name":"z","required":true,"positional":true}], [x, y, z], {}) as Matrix4;
}
}
export namespace _Matrix4Factory {
export function diagonal3Values(x: number, y: number, z: number): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "diagonal3Values", [{"name":"x","required":true,"positional":true},{"name":"y","required":true,"positional":true},{"name":"z","required":true,"positional":true}], [x, y, z], {}) as Matrix4;
}
}
export namespace _Matrix4Factory {
export function skewX(alpha: number): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "skewX", [{"name":"alpha","required":true,"positional":true}], [alpha], {}) as Matrix4;
}
}
export namespace _Matrix4Factory {
export function skewY(beta: number): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "skewY", [{"name":"beta","required":true,"positional":true}], [beta], {}) as Matrix4;
}
}
export namespace _Matrix4Factory {
export function skew(alpha: number, beta: number): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "skew", [{"name":"alpha","required":true,"positional":true},{"name":"beta","required":true,"positional":true}], [alpha, beta], {}) as Matrix4;
}
}
export namespace _Matrix4Factory {
export function fromFloat64List(_m4storage: globalThis.Float64Array): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "fromFloat64List", [{"name":"_m4storage","required":true,"positional":true}], [_m4storage], {}) as Matrix4;
}
}
export namespace _Matrix4Factory {
export function fromBuffer(buffer: globalThis.ArrayBuffer, offset: number): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "fromBuffer", [{"name":"buffer","required":true,"positional":true},{"name":"offset","required":true,"positional":true}], [buffer, offset], {}) as Matrix4;
}
}
export namespace _Matrix4Factory { export function tryInvert(other: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): Matrix4 | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_rendering#function:Matrix4.tryInvert", [other]);
return _flaxResult as Matrix4 | null;
} }
export const Matrix4: typeof _Matrix4Factory & _FlaxInstanceType<Matrix4> & _FlaxDartType<Matrix4, readonly ["class", "flax.core/sdk_rendering#type:Matrix4", readonly [], false]> = _flaxBindInstanceType<Matrix4, typeof _Matrix4Factory>(_Matrix4Factory, "flax.core/sdk_rendering#type:Matrix4", ["dart:core::Object"]) as typeof _Matrix4Factory & _FlaxInstanceType<Matrix4> & _FlaxDartType<Matrix4, readonly ["class", "flax.core/sdk_rendering#type:Matrix4", readonly [], false]>;
