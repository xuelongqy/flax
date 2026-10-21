// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector3';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector3';
import type * as upstream1 from '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector2';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector2';
import type * as upstream2 from '@flax/flutter/vector_math/_bindings/sdk_dependencies_Matrix2';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Matrix2';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import { _flaxMemberParameters63, _flaxMemberParameters64, _flaxMemberParameters65, _flaxMemberParameters83, _flaxMemberParameters84, _flaxMemberParameters68, _flaxMemberParameters69, _flaxMemberParameters2, _flaxMemberParameters70, _flaxMemberParameters71, _flaxMemberParameters72, _flaxMemberParameters73, _flaxMemberParameters74, _flaxMemberParameters75, _flaxMemberParameters76, _flaxMemberParameters77, _flaxMemberParameters78, _flaxMemberParameters79, _flaxMemberParameters80, _flaxMemberParameters81, _flaxMemberParameters82 } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Matrix3 extends Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [] }> { readonly __Matrix3: unique symbol;
readonly [_flaxDartTypeValue]: Matrix3;

readonly storage: globalThis.Float64Array;
readonly dimension: number;
get row0(): upstream0.Vector3;
get row1(): upstream0.Vector3;
get row2(): upstream0.Vector3;
readonly right: upstream0.Vector3;
readonly up: upstream0.Vector3;
readonly forward: upstream0.Vector3;
index(row: number, col: number): number;
entry(row: number, col: number): number;
setEntry(row: number, col: number, v: number): void;
setValues(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
setColumns(arg0: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, arg1: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, arg2: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
setFrom(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [] }>): void;
setOuter(u: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, v: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
splatDiagonal(arg: number): void;
setDiagonal(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
setUpper2x2(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [] }>): void;
toString(): string;
setRow(row: number, arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
getRow(row: number): upstream0.Vector3;
setColumn(column: number, arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
getColumn(column: number): upstream0.Vector3;
clone(): Matrix3;
copyInto(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [] }>): Matrix3;
setZero(): void;
setIdentity(): void;
transposed(): Matrix3;
transpose(): void;
absolute(): Matrix3;
determinant(): number;
dotRow(i: number, v: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): number;
dotColumn(j: number, v: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): number;
trace(): number;
infinityNorm(): number;
relativeError(correct: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [] }>): number;
absoluteError(correct: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [] }>): number;
invert(): number;
copyInverse(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [] }>): number;
copyNormalMatrix(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
setRotationX(radians: number): void;
setRotationY(radians: number): void;
setRotationZ(radians: number): void;
scaleAdjoint(scale: number): void;
absoluteRotate(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): upstream0.Vector3;
absoluteRotate2(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): upstream1.Vector2;
transform2(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): upstream1.Vector2;
scale(scale: number): void;
scaled(scale: number): Matrix3;
add(o: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [] }>): void;
sub(o: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [] }>): void;
negate(): void;
multiply(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [] }>): void;
multiplied(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [] }>): Matrix3;
transposeMultiply(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [] }>): void;
multiplyTranspose(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [] }>): void;
transform(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): upstream0.Vector3;
transformed(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, out?: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }> | null): upstream0.Vector3;
copyIntoArray(array: DartListInput<number, number>, offset?: number): void;
copyFromArray(array: DartListInput<number, number>, offset?: number): void;
applyToVector3Array(array: DartListInput<number, number>, offset?: number): DartList<number>;
isIdentity(): boolean;
isZero(): boolean;
operatorGetIndex(i: number): number;
operatorSetIndex(i: number, v: number): void;
operatorAdd(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [] }>): Matrix3;
operatorSubtract(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [] }>): Matrix3;
operatorMultiply(arg: unknown | null): unknown | null;
operatorNegate(): Matrix3;
set row0(value: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>);
set row1(value: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>);
set row2(value: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>);
}
defineObject("flax.core/sdk_dependencies#type:Matrix3", ["storage","dimension","row0","row1","row2","right","up","forward"], ["row0","row1","row2"], _flaxBindingMethods("flax.core/sdk_dependencies#type:Matrix3", "object", {"index":_flaxMemberParameters64,"entry":_flaxMemberParameters64,"setEntry":_flaxMemberParameters65,"setValues":_flaxMemberParameters83,"setColumns":_flaxMemberParameters84,"setFrom":_flaxMemberParameters68,"setOuter":_flaxMemberParameters69,"splatDiagonal":_flaxMemberParameters68,"setDiagonal":_flaxMemberParameters68,"setUpper2x2":_flaxMemberParameters68,"toString":_flaxMemberParameters2,"setRow":_flaxMemberParameters70,"getRow":_flaxMemberParameters71,"setColumn":_flaxMemberParameters72,"getColumn":_flaxMemberParameters73,"clone":_flaxMemberParameters2,"copyInto":_flaxMemberParameters68,"setZero":_flaxMemberParameters2,"setIdentity":_flaxMemberParameters2,"transposed":_flaxMemberParameters2,"transpose":_flaxMemberParameters2,"absolute":_flaxMemberParameters2,"determinant":_flaxMemberParameters2,"dotRow":_flaxMemberParameters74,"dotColumn":_flaxMemberParameters75,"trace":_flaxMemberParameters2,"infinityNorm":_flaxMemberParameters2,"relativeError":_flaxMemberParameters76,"absoluteError":_flaxMemberParameters76,"invert":_flaxMemberParameters2,"copyInverse":_flaxMemberParameters68,"copyNormalMatrix":_flaxMemberParameters68,"setRotationX":_flaxMemberParameters77,"setRotationY":_flaxMemberParameters77,"setRotationZ":_flaxMemberParameters77,"scaleAdjoint":_flaxMemberParameters78,"absoluteRotate":_flaxMemberParameters68,"absoluteRotate2":_flaxMemberParameters68,"transform2":_flaxMemberParameters68,"scale":_flaxMemberParameters78,"scaled":_flaxMemberParameters78,"add":_flaxMemberParameters79,"sub":_flaxMemberParameters79,"negate":_flaxMemberParameters2,"multiply":_flaxMemberParameters68,"multiplied":_flaxMemberParameters68,"transposeMultiply":_flaxMemberParameters68,"multiplyTranspose":_flaxMemberParameters68,"transform":_flaxMemberParameters68,"transformed":_flaxMemberParameters80,"copyIntoArray":_flaxMemberParameters81,"copyFromArray":_flaxMemberParameters81,"applyToVector3Array":_flaxMemberParameters81,"isIdentity":_flaxMemberParameters2,"isZero":_flaxMemberParameters2,"operatorGetIndex":_flaxMemberParameters82,"operatorSetIndex":_flaxMemberParameters74,"operatorAdd":_flaxMemberParameters68,"operatorSubtract":_flaxMemberParameters68,"operatorMultiply":_flaxMemberParameters68,"operatorNegate":_flaxMemberParameters2}, {}), []);
export function _Matrix3Factory(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): Matrix3 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 9) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Matrix3", "", _flaxMemberParameters83, [arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8], {}) as Matrix3;
}
export namespace _Matrix3Factory {
export function fromList(values: DartListInput<number, number>): Matrix3 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Matrix3", "fromList", [{"name":"values","required":true,"positional":true}], [values], {}) as Matrix3;
}
}
export namespace _Matrix3Factory {
export function zero(): Matrix3 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Matrix3", "zero", _flaxMemberParameters2, [], {}) as Matrix3;
}
}
export namespace _Matrix3Factory {
export function identity(): Matrix3 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Matrix3", "identity", _flaxMemberParameters2, [], {}) as Matrix3;
}
}
export namespace _Matrix3Factory {
export function copy(other: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [] }>): Matrix3 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Matrix3", "copy", [{"name":"other","required":true,"positional":true}], [other], {}) as Matrix3;
}
}
export namespace _Matrix3Factory {
export function columns(arg0: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, arg1: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, arg2: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): Matrix3 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Matrix3", "columns", _flaxMemberParameters84, [arg0, arg1, arg2], {}) as Matrix3;
}
}
export namespace _Matrix3Factory {
export function outer(u: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, v: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): Matrix3 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Matrix3", "outer", _flaxMemberParameters69, [u, v], {}) as Matrix3;
}
}
export namespace _Matrix3Factory {
export function rotationX(radians: number): Matrix3 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Matrix3", "rotationX", _flaxMemberParameters77, [radians], {}) as Matrix3;
}
}
export namespace _Matrix3Factory {
export function rotationY(radians: number): Matrix3 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Matrix3", "rotationY", _flaxMemberParameters77, [radians], {}) as Matrix3;
}
}
export namespace _Matrix3Factory {
export function rotationZ(radians: number): Matrix3 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Matrix3", "rotationZ", _flaxMemberParameters77, [radians], {}) as Matrix3;
}
}
export namespace _Matrix3Factory { export function solve2(A: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [] }>, x: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, b: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dependencies#function:Matrix3.solve2", [A, x, b], _flaxMemberParameters63);
} }
export namespace _Matrix3Factory { export function solve(A: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix3": readonly [] }>, x: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, b: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dependencies#function:Matrix3.solve", [A, x, b], _flaxMemberParameters63);
} }
export const Matrix3: typeof _Matrix3Factory & _FlaxInstanceType<Matrix3> & _FlaxDartType<Matrix3, readonly ["class", "flax.core/sdk_dependencies#type:Matrix3", readonly [], false]> = _flaxBindInstanceType<Matrix3, typeof _Matrix3Factory>(_Matrix3Factory, "flax.core/sdk_dependencies#type:Matrix3", ["dart:core::Object"]) as typeof _Matrix3Factory & _FlaxInstanceType<Matrix3> & _FlaxDartType<Matrix3, readonly ["class", "flax.core/sdk_dependencies#type:Matrix3", readonly [], false]>;
