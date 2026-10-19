// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector2';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector2';
import { _flaxMemberParameters54, _flaxMemberParameters55, _flaxMemberParameters56, _flaxMemberParameters57, _flaxMemberParameters58, _flaxMemberParameters59, _flaxMemberParameters2, _flaxMemberParameters60, _flaxMemberParameters61, _flaxMemberParameters62, _flaxMemberParameters63, _flaxMemberParameters64, _flaxMemberParameters65, _flaxMemberParameters66, _flaxMemberParameters67, _flaxMemberParameters68, _flaxMemberParameters69, _flaxMemberParameters70, _flaxMemberParameters71, _flaxMemberParameters72 } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Matrix2 extends Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [] }> { readonly __Matrix2: unique symbol;
readonly [_flaxDartTypeValue]: Matrix2;

readonly storage: globalThis.Float64Array;
readonly dimension: number;
get row0(): upstream0.Vector2;
get row1(): upstream0.Vector2;
index(row: number, col: number): number;
entry(row: number, col: number): number;
setEntry(row: number, col: number, v: number): void;
setValues(arg0: number, arg1: number, arg2: number, arg3: number): void;
setColumns(arg0: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, arg1: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
setFrom(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [] }>): void;
setOuter(u: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, v: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
splatDiagonal(arg: number): void;
setDiagonal(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
toString(): string;
setRow(row: number, arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
getRow(row: number): upstream0.Vector2;
setColumn(column: number, arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
getColumn(column: number): upstream0.Vector2;
clone(): Matrix2;
copyInto(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [] }>): Matrix2;
setZero(): void;
setIdentity(): void;
transposed(): Matrix2;
transpose(): void;
absolute(): Matrix2;
determinant(): number;
dotRow(i: number, v: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): number;
dotColumn(j: number, v: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): number;
trace(): number;
infinityNorm(): number;
relativeError(correct: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [] }>): number;
absoluteError(correct: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [] }>): number;
invert(): number;
copyInverse(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [] }>): number;
setRotation(radians: number): void;
scaleAdjoint(scale: number): void;
scale(scale: number): void;
scaled(scale: number): Matrix2;
add(o: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [] }>): void;
sub(o: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [] }>): void;
negate(): void;
multiply(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [] }>): void;
multiplied(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [] }>): Matrix2;
transposeMultiply(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [] }>): void;
multiplyTranspose(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [] }>): void;
transform(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): upstream0.Vector2;
transformed(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, out?: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }> | null): upstream0.Vector2;
copyIntoArray(array: DartListInput<number, number>, offset?: number): void;
copyFromArray(array: DartListInput<number, number>, offset?: number): void;
operatorGetIndex(i: number): number;
operatorSetIndex(i: number, v: number): void;
operatorAdd(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [] }>): Matrix2;
operatorSubtract(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [] }>): Matrix2;
operatorMultiply(arg: unknown | null): unknown | null;
operatorNegate(): Matrix2;
set row0(value: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>);
set row1(value: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>);
}
defineObject("flax.core/sdk_dependencies#type:Matrix2", ["storage","dimension","row0","row1"], ["row0","row1"], _flaxBindingMethods("flax.core/sdk_dependencies#type:Matrix2", "object", {"index":_flaxMemberParameters54,"entry":_flaxMemberParameters54,"setEntry":_flaxMemberParameters55,"setValues":_flaxMemberParameters56,"setColumns":_flaxMemberParameters57,"setFrom":_flaxMemberParameters58,"setOuter":_flaxMemberParameters59,"splatDiagonal":_flaxMemberParameters58,"setDiagonal":_flaxMemberParameters58,"toString":_flaxMemberParameters2,"setRow":_flaxMemberParameters60,"getRow":_flaxMemberParameters61,"setColumn":_flaxMemberParameters62,"getColumn":_flaxMemberParameters63,"clone":_flaxMemberParameters2,"copyInto":_flaxMemberParameters58,"setZero":_flaxMemberParameters2,"setIdentity":_flaxMemberParameters2,"transposed":_flaxMemberParameters2,"transpose":_flaxMemberParameters2,"absolute":_flaxMemberParameters2,"determinant":_flaxMemberParameters2,"dotRow":_flaxMemberParameters64,"dotColumn":_flaxMemberParameters65,"trace":_flaxMemberParameters2,"infinityNorm":_flaxMemberParameters2,"relativeError":_flaxMemberParameters66,"absoluteError":_flaxMemberParameters66,"invert":_flaxMemberParameters2,"copyInverse":_flaxMemberParameters58,"setRotation":_flaxMemberParameters67,"scaleAdjoint":_flaxMemberParameters68,"scale":_flaxMemberParameters68,"scaled":_flaxMemberParameters68,"add":_flaxMemberParameters69,"sub":_flaxMemberParameters69,"negate":_flaxMemberParameters2,"multiply":_flaxMemberParameters58,"multiplied":_flaxMemberParameters58,"transposeMultiply":_flaxMemberParameters58,"multiplyTranspose":_flaxMemberParameters58,"transform":_flaxMemberParameters58,"transformed":_flaxMemberParameters70,"copyIntoArray":_flaxMemberParameters71,"copyFromArray":_flaxMemberParameters71,"operatorGetIndex":_flaxMemberParameters72,"operatorSetIndex":_flaxMemberParameters64,"operatorAdd":_flaxMemberParameters58,"operatorSubtract":_flaxMemberParameters58,"operatorMultiply":_flaxMemberParameters58,"operatorNegate":_flaxMemberParameters2}, {}), []);
export function _Matrix2Factory(arg0: number, arg1: number, arg2: number, arg3: number): Matrix2 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 4) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Matrix2", "", _flaxMemberParameters56, [arg0, arg1, arg2, arg3], {}) as Matrix2;
}
export namespace _Matrix2Factory {
export function fromList(values: DartListInput<number, number>): Matrix2 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Matrix2", "fromList", [{"name":"values","required":true,"positional":true}], [values], {}) as Matrix2;
}
}
export namespace _Matrix2Factory {
export function zero(): Matrix2 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Matrix2", "zero", _flaxMemberParameters2, [], {}) as Matrix2;
}
}
export namespace _Matrix2Factory {
export function identity(): Matrix2 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Matrix2", "identity", _flaxMemberParameters2, [], {}) as Matrix2;
}
}
export namespace _Matrix2Factory {
export function copy(other: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [] }>): Matrix2 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Matrix2", "copy", [{"name":"other","required":true,"positional":true}], [other], {}) as Matrix2;
}
}
export namespace _Matrix2Factory {
export function columns(arg0: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, arg1: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): Matrix2 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Matrix2", "columns", _flaxMemberParameters57, [arg0, arg1], {}) as Matrix2;
}
}
export namespace _Matrix2Factory {
export function outer(u: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, v: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): Matrix2 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Matrix2", "outer", _flaxMemberParameters59, [u, v], {}) as Matrix2;
}
}
export namespace _Matrix2Factory {
export function rotation(radians: number): Matrix2 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Matrix2", "rotation", _flaxMemberParameters67, [radians], {}) as Matrix2;
}
}
export namespace _Matrix2Factory { export function solve(A: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [] }>, x: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, b: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dependencies#function:Matrix2.solve", [A, x, b]);
} }
export const Matrix2: typeof _Matrix2Factory & _FlaxInstanceType<Matrix2> & _FlaxDartType<Matrix2, readonly ["class", "flax.core/sdk_dependencies#type:Matrix2", readonly [], false]> = _flaxBindInstanceType<Matrix2, typeof _Matrix2Factory>(_Matrix2Factory, "flax.core/sdk_dependencies#type:Matrix2", ["dart:core::Object"]) as typeof _Matrix2Factory & _FlaxInstanceType<Matrix2> & _FlaxDartType<Matrix2, readonly ["class", "flax.core/sdk_dependencies#type:Matrix2", readonly [], false]>;
