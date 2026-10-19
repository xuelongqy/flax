// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector4';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector4';
import type * as upstream1 from '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector3';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector3';
import type * as upstream2 from '@flax/flutter/vector_math/_bindings/sdk_dependencies_Quaternion';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Quaternion';
import type * as upstream3 from '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector2';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector2';
import type * as upstream4 from '@flax/flutter/vector_math/_bindings/sdk_dependencies_Matrix2';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Matrix2';
import type * as upstream5 from '@flax/flutter/vector_math/_bindings/sdk_dependencies_Matrix3';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Matrix3';
import { _flaxMemberParameters89, _flaxMemberParameters90, _flaxMemberParameters91, _flaxMemberParameters92, _flaxMemberParameters93, _flaxMemberParameters94, _flaxMemberParameters95, _flaxMemberParameters96, _flaxMemberParameters1, _flaxMemberParameters97, _flaxMemberParameters98, _flaxMemberParameters99, _flaxMemberParameters100, _flaxMemberParameters101, _flaxMemberParameters102, _flaxMemberParameters103, _flaxMemberParameters104, _flaxMemberParameters105, _flaxMemberParameters106, _flaxMemberParameters107, _flaxMemberParameters108, _flaxMemberParameters109, _flaxMemberParameters110, _flaxMemberParameters111, _flaxMemberParameters112, _flaxMemberParameters0, _flaxMemberParameters113, _flaxMemberParameters114, _flaxMemberParameters115, _flaxMemberParameters116, _flaxMemberParameters117, _flaxMemberParameters118, _flaxMemberParameters119, _flaxMemberParameters120, _flaxMemberParameters73 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Matrix4 extends Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> { readonly __Matrix4: unique symbol;
readonly [_flaxDartTypeValue]: Matrix4;

readonly storage: globalThis.Float64Array;
readonly dimension: number;
get row0(): upstream0.Vector4;
get row1(): upstream0.Vector4;
get row2(): upstream0.Vector4;
get row3(): upstream0.Vector4;
readonly right: upstream1.Vector3;
readonly up: upstream1.Vector3;
readonly forward: upstream1.Vector3;
index(row: number, col: number): number;
entry(row: number, col: number): number;
setEntry(row: number, col: number, v: number): void;
splatDiagonal(arg: number): void;
setValues(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number): void;
setColumns(arg0: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, arg1: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, arg2: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, arg3: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
setFrom(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
setFromTranslationRotation(arg0: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, arg1: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [] }>): void;
setFromTranslationRotationScale(translation: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, rotation: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [] }>, scale: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
setUpper2x2(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [] }>): void;
setDiagonal(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
setOuter(u: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, v: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
toString(): string;
setRow(row: number, arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
getRow(row: number): upstream0.Vector4;
setColumn(column: number, arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
getColumn(column: number): upstream0.Vector4;
clone(): Matrix4;
copyInto(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): Matrix4;
translate(x: unknown | null, y?: number, z?: number): void;
translateByDouble(tx: number, ty: number, tz: number, tw: number): void;
translateByVector2(v2: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
translateByVector3(v3: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
translateByVector4(v4: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
leftTranslate(x: unknown | null, y?: number, z?: number): void;
leftTranslateByDouble(tx: number, ty: number, tz: number, tw: number): void;
leftTranslateByVector2(v2: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
leftTranslateByVector3(v3: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
leftTranslateByVector4(v4: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
rotate(axis: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, angle: number): void;
rotateX(angle: number): void;
rotateY(angle: number): void;
rotateZ(angle: number): void;
scale(x: unknown | null, y?: number | null, z?: number | null): void;
scaleByDouble(sx: number, sy: number, sz: number, sw: number): void;
scaleByVector3(v3: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
scaleByVector4(v4: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
scaled(x: unknown | null, y?: number | null, z?: number | null): Matrix4;
scaledByDouble(x: number, y: number, z: number, t: number): Matrix4;
scaledByVector3(v3: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): Matrix4;
scaledByVector4(v4: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): Matrix4;
setZero(): void;
setIdentity(): void;
transposed(): Matrix4;
transpose(): void;
absolute(): Matrix4;
determinant(): number;
dotRow(i: number, v: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): number;
dotColumn(j: number, v: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): number;
trace(): number;
infinityNorm(): number;
relativeError(correct: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): number;
absoluteError(correct: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): number;
getTranslation(): upstream1.Vector3;
setTranslation(t: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
setTranslationRaw(x: number, y: number, z: number): void;
getRotation(): upstream5.Matrix3;
copyRotation(rotation: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [] }>): void;
setRotation(r: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [] }>): void;
getNormalMatrix(): upstream5.Matrix3;
getMaxScaleOnAxis(): number;
transposeRotation(): void;
invert(): number;
copyInverse(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): number;
invertRotation(): number;
setRotationX(radians: number): void;
setRotationY(radians: number): void;
setRotationZ(radians: number): void;
scaleAdjoint(scale: number): void;
absoluteRotate(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): upstream1.Vector3;
add(o: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
sub(o: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
negate(): void;
multiply(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
leftMultiply(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
multiplied(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): Matrix4;
transposeMultiply(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
multiplyTranspose(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
decompose(translation: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, rotation: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [] }>, scale: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
rotate3(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): upstream1.Vector3;
rotated3(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, out?: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }> | null): upstream1.Vector3;
transform3(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): upstream1.Vector3;
transformed3(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, out?: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }> | null): upstream1.Vector3;
transform(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): upstream0.Vector4;
perspectiveTransform(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): upstream1.Vector3;
transformed(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, out?: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }> | null): upstream0.Vector4;
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
set row0(value: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>);
set row1(value: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>);
set row2(value: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>);
set row3(value: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>);
}
defineObject("flax.core/sdk_rendering#type:Matrix4", ["storage","dimension","row0","row1","row2","row3","right","up","forward"], ["row0","row1","row2","row3"], _flaxBindingMethods("flax.core/sdk_rendering#type:Matrix4", "object", {"index":_flaxMemberParameters89,"entry":_flaxMemberParameters89,"setEntry":_flaxMemberParameters90,"splatDiagonal":_flaxMemberParameters91,"setValues":_flaxMemberParameters92,"setColumns":_flaxMemberParameters93,"setFrom":_flaxMemberParameters91,"setFromTranslationRotation":_flaxMemberParameters94,"setFromTranslationRotationScale":_flaxMemberParameters95,"setUpper2x2":_flaxMemberParameters91,"setDiagonal":_flaxMemberParameters91,"setOuter":_flaxMemberParameters96,"toString":_flaxMemberParameters1,"setRow":_flaxMemberParameters97,"getRow":_flaxMemberParameters98,"setColumn":_flaxMemberParameters99,"getColumn":_flaxMemberParameters100,"clone":_flaxMemberParameters1,"copyInto":_flaxMemberParameters91,"translate":_flaxMemberParameters101,"translateByDouble":_flaxMemberParameters102,"translateByVector2":_flaxMemberParameters103,"translateByVector3":_flaxMemberParameters104,"translateByVector4":_flaxMemberParameters105,"leftTranslate":_flaxMemberParameters101,"leftTranslateByDouble":_flaxMemberParameters102,"leftTranslateByVector2":_flaxMemberParameters103,"leftTranslateByVector3":_flaxMemberParameters104,"leftTranslateByVector4":_flaxMemberParameters105,"rotate":_flaxMemberParameters106,"rotateX":_flaxMemberParameters107,"rotateY":_flaxMemberParameters107,"rotateZ":_flaxMemberParameters107,"scale":_flaxMemberParameters101,"scaleByDouble":_flaxMemberParameters108,"scaleByVector3":_flaxMemberParameters104,"scaleByVector4":_flaxMemberParameters105,"scaled":_flaxMemberParameters101,"scaledByDouble":_flaxMemberParameters109,"scaledByVector3":_flaxMemberParameters104,"scaledByVector4":_flaxMemberParameters105,"setZero":_flaxMemberParameters1,"setIdentity":_flaxMemberParameters1,"transposed":_flaxMemberParameters1,"transpose":_flaxMemberParameters1,"absolute":_flaxMemberParameters1,"determinant":_flaxMemberParameters1,"dotRow":_flaxMemberParameters110,"dotColumn":_flaxMemberParameters111,"trace":_flaxMemberParameters1,"infinityNorm":_flaxMemberParameters1,"relativeError":_flaxMemberParameters112,"absoluteError":_flaxMemberParameters112,"getTranslation":_flaxMemberParameters1,"setTranslation":_flaxMemberParameters0,"setTranslationRaw":_flaxMemberParameters113,"getRotation":_flaxMemberParameters1,"copyRotation":_flaxMemberParameters114,"setRotation":_flaxMemberParameters115,"getNormalMatrix":_flaxMemberParameters1,"getMaxScaleOnAxis":_flaxMemberParameters1,"transposeRotation":_flaxMemberParameters1,"invert":_flaxMemberParameters1,"copyInverse":_flaxMemberParameters91,"invertRotation":_flaxMemberParameters1,"setRotationX":_flaxMemberParameters116,"setRotationY":_flaxMemberParameters116,"setRotationZ":_flaxMemberParameters116,"scaleAdjoint":_flaxMemberParameters117,"absoluteRotate":_flaxMemberParameters91,"add":_flaxMemberParameters118,"sub":_flaxMemberParameters118,"negate":_flaxMemberParameters1,"multiply":_flaxMemberParameters91,"leftMultiply":_flaxMemberParameters91,"multiplied":_flaxMemberParameters91,"transposeMultiply":_flaxMemberParameters91,"multiplyTranspose":_flaxMemberParameters91,"decompose":_flaxMemberParameters95,"rotate3":_flaxMemberParameters91,"rotated3":_flaxMemberParameters119,"transform3":_flaxMemberParameters91,"transformed3":_flaxMemberParameters119,"transform":_flaxMemberParameters91,"perspectiveTransform":_flaxMemberParameters91,"transformed":_flaxMemberParameters119,"copyIntoArray":_flaxMemberParameters120,"copyFromArray":_flaxMemberParameters120,"applyToVector3Array":_flaxMemberParameters120,"isIdentity":_flaxMemberParameters1,"isZero":_flaxMemberParameters1,"operatorGetIndex":_flaxMemberParameters73,"operatorSetIndex":_flaxMemberParameters110,"operatorAdd":_flaxMemberParameters91,"operatorSubtract":_flaxMemberParameters91,"operatorMultiply":_flaxMemberParameters91,"operatorNegate":_flaxMemberParameters1}, {}), []);
export function _Matrix4Factory(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 16) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "", _flaxMemberParameters92, [arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15], {}) as Matrix4;
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
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "zero", _flaxMemberParameters1, [], {}) as Matrix4;
}
}
export namespace _Matrix4Factory {
export function identity(): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "identity", _flaxMemberParameters1, [], {}) as Matrix4;
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
export function columns(arg0: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, arg1: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, arg2: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, arg3: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 4) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "columns", _flaxMemberParameters93, [arg0, arg1, arg2, arg3], {}) as Matrix4;
}
}
export namespace _Matrix4Factory {
export function outer(u: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, v: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "outer", _flaxMemberParameters96, [u, v], {}) as Matrix4;
}
}
export namespace _Matrix4Factory {
export function rotationX(radians: number): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "rotationX", _flaxMemberParameters116, [radians], {}) as Matrix4;
}
}
export namespace _Matrix4Factory {
export function rotationY(radians: number): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "rotationY", _flaxMemberParameters116, [radians], {}) as Matrix4;
}
}
export namespace _Matrix4Factory {
export function rotationZ(radians: number): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "rotationZ", _flaxMemberParameters116, [radians], {}) as Matrix4;
}
}
export namespace _Matrix4Factory {
export function translation(translation: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "translation", [{"name":"translation","required":true,"positional":true}], [translation], {}) as Matrix4;
}
}
export namespace _Matrix4Factory {
export function translationValues(x: number, y: number, z: number): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "translationValues", _flaxMemberParameters113, [x, y, z], {}) as Matrix4;
}
}
export namespace _Matrix4Factory {
export function diagonal3(scale: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "diagonal3", _flaxMemberParameters117, [scale], {}) as Matrix4;
}
}
export namespace _Matrix4Factory {
export function diagonal3Values(x: number, y: number, z: number): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "diagonal3Values", _flaxMemberParameters113, [x, y, z], {}) as Matrix4;
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
export namespace _Matrix4Factory {
export function compose(translation: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, rotation: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Quaternion": readonly [] }>, scale: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "compose", _flaxMemberParameters95, [translation, rotation, scale], {}) as Matrix4;
}
}
export namespace _Matrix4Factory { export function solve2(A: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>, x: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, b: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_rendering#function:Matrix4.solve2", [A, x, b]);
} }
export namespace _Matrix4Factory { export function solve3(A: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>, x: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, b: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_rendering#function:Matrix4.solve3", [A, x, b]);
} }
export namespace _Matrix4Factory { export function solve(A: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>, x: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, b: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_rendering#function:Matrix4.solve", [A, x, b]);
} }
export namespace _Matrix4Factory { export function tryInvert(other: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): Matrix4 | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_rendering#function:Matrix4.tryInvert", [other]);
return _flaxResult as Matrix4 | null;
} }
export const Matrix4: typeof _Matrix4Factory & _FlaxInstanceType<Matrix4> & _FlaxDartType<Matrix4, readonly ["class", "flax.core/sdk_rendering#type:Matrix4", readonly [], false]> = _flaxBindInstanceType<Matrix4, typeof _Matrix4Factory>(_Matrix4Factory, "flax.core/sdk_rendering#type:Matrix4", ["dart:core::Object"]) as typeof _Matrix4Factory & _FlaxInstanceType<Matrix4> & _FlaxDartType<Matrix4, readonly ["class", "flax.core/sdk_rendering#type:Matrix4", readonly [], false]>;
