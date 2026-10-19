// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector2';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector2';
const _flaxMemberParameters0 = [{"name":"row","required":true,"positional":true},{"name":"col","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"row","required":true,"positional":true},{"name":"col","required":true,"positional":true},{"name":"v","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"arg0","required":true,"positional":true},{"name":"arg1","required":true,"positional":true},{"name":"arg2","required":true,"positional":true},{"name":"arg3","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"arg0","required":true,"positional":true},{"name":"arg1","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"arg","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"u","required":true,"positional":true},{"name":"v","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [] as const;
const _flaxMemberParameters7 = [{"name":"row","required":true,"positional":true},{"name":"arg","required":true,"positional":true}] as const;
const _flaxMemberParameters8 = [{"name":"row","required":true,"positional":true}] as const;
const _flaxMemberParameters9 = [{"name":"column","required":true,"positional":true},{"name":"arg","required":true,"positional":true}] as const;
const _flaxMemberParameters10 = [{"name":"column","required":true,"positional":true}] as const;
const _flaxMemberParameters11 = [{"name":"i","required":true,"positional":true},{"name":"v","required":true,"positional":true}] as const;
const _flaxMemberParameters12 = [{"name":"j","required":true,"positional":true},{"name":"v","required":true,"positional":true}] as const;
const _flaxMemberParameters13 = [{"name":"correct","required":true,"positional":true}] as const;
const _flaxMemberParameters14 = [{"name":"radians","required":true,"positional":true}] as const;
const _flaxMemberParameters15 = [{"name":"scale","required":true,"positional":true}] as const;
const _flaxMemberParameters16 = [{"name":"o","required":true,"positional":true}] as const;
const _flaxMemberParameters17 = [{"name":"arg","required":true,"positional":true},{"name":"out","positional":true}] as const;
const _flaxMemberParameters18 = [{"name":"array","required":true,"positional":true},{"name":"offset","positional":true}] as const;
const _flaxMemberParameters19 = [{"name":"i","required":true,"positional":true}] as const;
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
defineObject("flax.core/sdk_dependencies#type:Matrix2", ["storage","dimension","row0","row1"], ["row0","row1"], _flaxBindingMethods("flax.core/sdk_dependencies#type:Matrix2", "object", {"index":_flaxMemberParameters0,"entry":_flaxMemberParameters0,"setEntry":_flaxMemberParameters1,"setValues":_flaxMemberParameters2,"setColumns":_flaxMemberParameters3,"setFrom":_flaxMemberParameters4,"setOuter":_flaxMemberParameters5,"splatDiagonal":_flaxMemberParameters4,"setDiagonal":_flaxMemberParameters4,"toString":_flaxMemberParameters6,"setRow":_flaxMemberParameters7,"getRow":_flaxMemberParameters8,"setColumn":_flaxMemberParameters9,"getColumn":_flaxMemberParameters10,"clone":_flaxMemberParameters6,"copyInto":_flaxMemberParameters4,"setZero":_flaxMemberParameters6,"setIdentity":_flaxMemberParameters6,"transposed":_flaxMemberParameters6,"transpose":_flaxMemberParameters6,"absolute":_flaxMemberParameters6,"determinant":_flaxMemberParameters6,"dotRow":_flaxMemberParameters11,"dotColumn":_flaxMemberParameters12,"trace":_flaxMemberParameters6,"infinityNorm":_flaxMemberParameters6,"relativeError":_flaxMemberParameters13,"absoluteError":_flaxMemberParameters13,"invert":_flaxMemberParameters6,"copyInverse":_flaxMemberParameters4,"setRotation":_flaxMemberParameters14,"scaleAdjoint":_flaxMemberParameters15,"scale":_flaxMemberParameters15,"scaled":_flaxMemberParameters15,"add":_flaxMemberParameters16,"sub":_flaxMemberParameters16,"negate":_flaxMemberParameters6,"multiply":_flaxMemberParameters4,"multiplied":_flaxMemberParameters4,"transposeMultiply":_flaxMemberParameters4,"multiplyTranspose":_flaxMemberParameters4,"transform":_flaxMemberParameters4,"transformed":_flaxMemberParameters17,"copyIntoArray":_flaxMemberParameters18,"copyFromArray":_flaxMemberParameters18,"operatorGetIndex":_flaxMemberParameters19,"operatorSetIndex":_flaxMemberParameters11,"operatorAdd":_flaxMemberParameters4,"operatorSubtract":_flaxMemberParameters4,"operatorMultiply":_flaxMemberParameters4,"operatorNegate":_flaxMemberParameters6}, {}), []);
export function _Matrix2Factory(arg0: number, arg1: number, arg2: number, arg3: number): Matrix2 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 4) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Matrix2", "", _flaxMemberParameters2, [arg0, arg1, arg2, arg3], {}) as Matrix2;
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
return constructObject("object", "flax.core/sdk_dependencies#type:Matrix2", "zero", _flaxMemberParameters6, [], {}) as Matrix2;
}
}
export namespace _Matrix2Factory {
export function identity(): Matrix2 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Matrix2", "identity", _flaxMemberParameters6, [], {}) as Matrix2;
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
return constructObject("object", "flax.core/sdk_dependencies#type:Matrix2", "columns", _flaxMemberParameters3, [arg0, arg1], {}) as Matrix2;
}
}
export namespace _Matrix2Factory {
export function outer(u: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, v: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): Matrix2 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Matrix2", "outer", _flaxMemberParameters5, [u, v], {}) as Matrix2;
}
}
export namespace _Matrix2Factory {
export function rotation(radians: number): Matrix2 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Matrix2", "rotation", _flaxMemberParameters14, [radians], {}) as Matrix2;
}
}
export namespace _Matrix2Factory { export function solve(A: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [] }>, x: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, b: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dependencies#function:Matrix2.solve", [A, x, b]);
} }
export const Matrix2: typeof _Matrix2Factory & _FlaxInstanceType<Matrix2> & _FlaxDartType<Matrix2, readonly ["class", "flax.core/sdk_dependencies#type:Matrix2", readonly [], false]> = _flaxBindInstanceType<Matrix2, typeof _Matrix2Factory>(_Matrix2Factory, "flax.core/sdk_dependencies#type:Matrix2", ["dart:core::Object"]) as typeof _Matrix2Factory & _FlaxInstanceType<Matrix2> & _FlaxDartType<Matrix2, readonly ["class", "flax.core/sdk_dependencies#type:Matrix2", readonly [], false]>;
