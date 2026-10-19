// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector3';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector3';
import type * as upstream1 from '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector4';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Vector4';
import type * as upstream2 from '@flax/flutter/vector_math/_bindings/sdk_dependencies_Matrix2';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Matrix2';
const _flaxMemberParameters0 = [{"name":"x_","required":true,"positional":true},{"name":"y_","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"other","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"arg","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"out","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"scale","required":true,"positional":true},{"name":"out","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"normal","required":true,"positional":true}] as const;
const _flaxMemberParameters7 = [{"name":"correct","required":true,"positional":true}] as const;
const _flaxMemberParameters8 = [{"name":"arg","required":true,"positional":true},{"name":"factor","required":true,"positional":true}] as const;
const _flaxMemberParameters9 = [{"name":"min","required":true,"positional":true},{"name":"max","required":true,"positional":true}] as const;
const _flaxMemberParameters10 = [{"name":"array","required":true,"positional":true},{"name":"offset","positional":true}] as const;
const _flaxMemberParameters11 = [{"name":"i","required":true,"positional":true}] as const;
const _flaxMemberParameters12 = [{"name":"i","required":true,"positional":true},{"name":"v","required":true,"positional":true}] as const;
const _flaxMemberParameters13 = [{"name":"scale","required":true,"positional":true}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Vector2 extends Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }>, Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }> { readonly __Vector2: unique symbol;
readonly [_flaxDartTypeValue]: Vector2;

readonly storage: globalThis.Float64Array;
get length(): number;
readonly length2: number;
readonly isInfinite: boolean;
readonly isNaN: boolean;
readonly xx: Vector2;
get xy(): Vector2;
get yx(): Vector2;
readonly yy: Vector2;
readonly xxx: upstream0.Vector3;
readonly xxy: upstream0.Vector3;
readonly xyx: upstream0.Vector3;
readonly xyy: upstream0.Vector3;
readonly yxx: upstream0.Vector3;
readonly yxy: upstream0.Vector3;
readonly yyx: upstream0.Vector3;
readonly yyy: upstream0.Vector3;
readonly xxxx: upstream1.Vector4;
readonly xxxy: upstream1.Vector4;
readonly xxyx: upstream1.Vector4;
readonly xxyy: upstream1.Vector4;
readonly xyxx: upstream1.Vector4;
readonly xyxy: upstream1.Vector4;
readonly xyyx: upstream1.Vector4;
readonly xyyy: upstream1.Vector4;
readonly yxxx: upstream1.Vector4;
readonly yxxy: upstream1.Vector4;
readonly yxyx: upstream1.Vector4;
readonly yxyy: upstream1.Vector4;
readonly yyxx: upstream1.Vector4;
readonly yyxy: upstream1.Vector4;
readonly yyyx: upstream1.Vector4;
readonly yyyy: upstream1.Vector4;
get r(): number;
get g(): number;
get s(): number;
get t(): number;
get x(): number;
get y(): number;
readonly rr: Vector2;
get rg(): Vector2;
get gr(): Vector2;
readonly gg: Vector2;
readonly rrr: upstream0.Vector3;
readonly rrg: upstream0.Vector3;
readonly rgr: upstream0.Vector3;
readonly rgg: upstream0.Vector3;
readonly grr: upstream0.Vector3;
readonly grg: upstream0.Vector3;
readonly ggr: upstream0.Vector3;
readonly ggg: upstream0.Vector3;
readonly rrrr: upstream1.Vector4;
readonly rrrg: upstream1.Vector4;
readonly rrgr: upstream1.Vector4;
readonly rrgg: upstream1.Vector4;
readonly rgrr: upstream1.Vector4;
readonly rgrg: upstream1.Vector4;
readonly rggr: upstream1.Vector4;
readonly rggg: upstream1.Vector4;
readonly grrr: upstream1.Vector4;
readonly grrg: upstream1.Vector4;
readonly grgr: upstream1.Vector4;
readonly grgg: upstream1.Vector4;
readonly ggrr: upstream1.Vector4;
readonly ggrg: upstream1.Vector4;
readonly gggr: upstream1.Vector4;
readonly gggg: upstream1.Vector4;
readonly ss: Vector2;
get st(): Vector2;
get ts(): Vector2;
readonly tt: Vector2;
readonly sss: upstream0.Vector3;
readonly sst: upstream0.Vector3;
readonly sts: upstream0.Vector3;
readonly stt: upstream0.Vector3;
readonly tss: upstream0.Vector3;
readonly tst: upstream0.Vector3;
readonly tts: upstream0.Vector3;
readonly ttt: upstream0.Vector3;
readonly ssss: upstream1.Vector4;
readonly ssst: upstream1.Vector4;
readonly ssts: upstream1.Vector4;
readonly sstt: upstream1.Vector4;
readonly stss: upstream1.Vector4;
readonly stst: upstream1.Vector4;
readonly stts: upstream1.Vector4;
readonly sttt: upstream1.Vector4;
readonly tsss: upstream1.Vector4;
readonly tsst: upstream1.Vector4;
readonly tsts: upstream1.Vector4;
readonly tstt: upstream1.Vector4;
readonly ttss: upstream1.Vector4;
readonly ttst: upstream1.Vector4;
readonly ttts: upstream1.Vector4;
readonly tttt: upstream1.Vector4;
setValues(x_: number, y_: number): void;
setZero(): void;
setFrom(other: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
splat(arg: number): void;
toString(): string;
normalize(): number;
normalizeLength(): number;
normalized(): Vector2;
normalizeInto(out: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): Vector2;
distanceTo(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): number;
distanceToSquared(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): number;
angleTo(other: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): number;
angleToSigned(other: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): number;
dot(other: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): number;
postmultiply(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix2": readonly [] }>): void;
cross(other: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): number;
scaleOrthogonalInto(scale: number, out: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): Vector2;
reflect(normal: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
reflected(normal: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): Vector2;
relativeError(correct: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): number;
absoluteError(correct: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): number;
add(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
addScaled(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, factor: number): void;
sub(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
multiply(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
divide(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
scale(arg: number): void;
scaled(arg: number): Vector2;
negate(): void;
absolute(): void;
clamp(min: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, max: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void;
clampScalar(min: number, max: number): void;
floor(): void;
ceil(): void;
round(): void;
roundToZero(): void;
clone(): Vector2;
copyInto(arg: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): Vector2;
copyIntoArray(array: DartListInput<number, number>, offset?: number): void;
copyFromArray(array: DartListInput<number, number>, offset?: number): void;
operatorGetIndex(i: number): number;
operatorSetIndex(i: number, v: number): void;
operatorAdd(other: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): Vector2;
operatorSubtract(other: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): Vector2;
operatorMultiply(scale: number): Vector2;
operatorDivide(scale: number): Vector2;
operatorNegate(): Vector2;
set length(value: number);
set xy(value: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>);
set yx(value: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>);
set r(value: number);
set g(value: number);
set s(value: number);
set t(value: number);
set x(value: number);
set y(value: number);
set rg(value: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>);
set gr(value: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>);
set st(value: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>);
set ts(value: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>);
}
defineObject("flax.core/sdk_dependencies#type:Vector2", ["storage","length","length2","isInfinite","isNaN","xx","xy","yx","yy","xxx","xxy","xyx","xyy","yxx","yxy","yyx","yyy","xxxx","xxxy","xxyx","xxyy","xyxx","xyxy","xyyx","xyyy","yxxx","yxxy","yxyx","yxyy","yyxx","yyxy","yyyx","yyyy","r","g","s","t","x","y","rr","rg","gr","gg","rrr","rrg","rgr","rgg","grr","grg","ggr","ggg","rrrr","rrrg","rrgr","rrgg","rgrr","rgrg","rggr","rggg","grrr","grrg","grgr","grgg","ggrr","ggrg","gggr","gggg","ss","st","ts","tt","sss","sst","sts","stt","tss","tst","tts","ttt","ssss","ssst","ssts","sstt","stss","stst","stts","sttt","tsss","tsst","tsts","tstt","ttss","ttst","ttts","tttt"], ["length","xy","yx","r","g","s","t","x","y","rg","gr","st","ts"], _flaxBindingMethods("flax.core/sdk_dependencies#type:Vector2", "object", {"setValues":_flaxMemberParameters0,"setZero":_flaxMemberParameters1,"setFrom":_flaxMemberParameters2,"splat":_flaxMemberParameters3,"toString":_flaxMemberParameters1,"normalize":_flaxMemberParameters1,"normalizeLength":_flaxMemberParameters1,"normalized":_flaxMemberParameters1,"normalizeInto":_flaxMemberParameters4,"distanceTo":_flaxMemberParameters3,"distanceToSquared":_flaxMemberParameters3,"angleTo":_flaxMemberParameters2,"angleToSigned":_flaxMemberParameters2,"dot":_flaxMemberParameters2,"postmultiply":_flaxMemberParameters3,"cross":_flaxMemberParameters2,"scaleOrthogonalInto":_flaxMemberParameters5,"reflect":_flaxMemberParameters6,"reflected":_flaxMemberParameters6,"relativeError":_flaxMemberParameters7,"absoluteError":_flaxMemberParameters7,"add":_flaxMemberParameters3,"addScaled":_flaxMemberParameters8,"sub":_flaxMemberParameters3,"multiply":_flaxMemberParameters3,"divide":_flaxMemberParameters3,"scale":_flaxMemberParameters3,"scaled":_flaxMemberParameters3,"negate":_flaxMemberParameters1,"absolute":_flaxMemberParameters1,"clamp":_flaxMemberParameters9,"clampScalar":_flaxMemberParameters9,"floor":_flaxMemberParameters1,"ceil":_flaxMemberParameters1,"round":_flaxMemberParameters1,"roundToZero":_flaxMemberParameters1,"clone":_flaxMemberParameters1,"copyInto":_flaxMemberParameters3,"copyIntoArray":_flaxMemberParameters10,"copyFromArray":_flaxMemberParameters10,"operatorGetIndex":_flaxMemberParameters11,"operatorSetIndex":_flaxMemberParameters12,"operatorAdd":_flaxMemberParameters2,"operatorSubtract":_flaxMemberParameters2,"operatorMultiply":_flaxMemberParameters13,"operatorDivide":_flaxMemberParameters13,"operatorNegate":_flaxMemberParameters1}, {}), []);
export function _Vector2Factory(x: number, y: number): Vector2 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Vector2", "", [{"name":"x","required":true,"positional":true},{"name":"y","required":true,"positional":true}], [x, y], {}) as Vector2;
}
export namespace _Vector2Factory {
export function array(array: DartListInput<number, number>, offset?: number): Vector2 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Vector2", "array", _flaxMemberParameters10, [array, offset], {}) as Vector2;
}
}
export namespace _Vector2Factory {
export function zero(): Vector2 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Vector2", "zero", _flaxMemberParameters1, [], {}) as Vector2;
}
}
export namespace _Vector2Factory {
export function all(value: number): Vector2 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Vector2", "all", [{"name":"value","required":true,"positional":true}], [value], {}) as Vector2;
}
}
export namespace _Vector2Factory {
export function copy(other: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): Vector2 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Vector2", "copy", _flaxMemberParameters2, [other], {}) as Vector2;
}
}
export namespace _Vector2Factory {
export function fromFloat64List(_v2storage: globalThis.Float64Array): Vector2 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Vector2", "fromFloat64List", [{"name":"_v2storage","required":true,"positional":true}], [_v2storage], {}) as Vector2;
}
}
export namespace _Vector2Factory {
export function fromBuffer(buffer: globalThis.ArrayBuffer, offset: number): Vector2 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Vector2", "fromBuffer", [{"name":"buffer","required":true,"positional":true},{"name":"offset","required":true,"positional":true}], [buffer, offset], {}) as Vector2;
}
}
export namespace _Vector2Factory { export function min(a: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, b: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, result: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dependencies#function:Vector2.min", [a, b, result]);
} }
export namespace _Vector2Factory { export function max(a: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, b: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, result: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dependencies#function:Vector2.max", [a, b, result]);
} }
export namespace _Vector2Factory { export function mix(min: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, max: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, a: number, result: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector2": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): void {
if (arguments.length > 4) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dependencies#function:Vector2.mix", [min, max, a, result]);
} }
export const Vector2: typeof _Vector2Factory & _FlaxInstanceType<Vector2> & _FlaxDartType<Vector2, readonly ["class", "flax.core/sdk_dependencies#type:Vector2", readonly [], false]> = _flaxBindInstanceType<Vector2, typeof _Vector2Factory>(_Vector2Factory, "flax.core/sdk_dependencies#type:Vector2", ["dart:core::Object","package:vector_math/vector_math_64.dart::Vector"]) as typeof _Vector2Factory & _FlaxInstanceType<Vector2> & _FlaxDartType<Vector2, readonly ["class", "flax.core/sdk_dependencies#type:Vector2", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "storage" | "length" | "length2" | "isInfinite" | "isNaN" | "xx" | "xy" | "yx" | "yy" | "xxx" | "xxy" | "xyx" | "xyy" | "yxx" | "yxy" | "yyx" | "yyy" | "xxxx" | "xxxy" | "xxyx" | "xxyy" | "xyxx" | "xyxy" | "xyyx" | "xyyy" | "yxxx" | "yxxy" | "yxyx" | "yxyy" | "yyxx" | "yyxy" | "yyyx" | "yyyy" | "r" | "g" | "s" | "t" | "x" | "y" | "rr" | "rg" | "gr" | "gg" | "rrr" | "rrg" | "rgr" | "rgg" | "grr" | "grg" | "ggr" | "ggg" | "rrrr" | "rrrg" | "rrgr" | "rrgg" | "rgrr" | "rgrg" | "rggr" | "rggg" | "grrr" | "grrg" | "grgr" | "grgg" | "ggrr" | "ggrg" | "gggr" | "gggg" | "ss" | "st" | "ts" | "tt" | "sss" | "sst" | "sts" | "stt" | "tss" | "tst" | "tts" | "ttt" | "ssss" | "ssst" | "ssts" | "sstt" | "stss" | "stst" | "stts" | "sttt" | "tsss" | "tsst" | "tsts" | "tstt" | "ttss" | "ttst" | "ttts" | "tttt" | "setValues" | "setZero" | "setFrom" | "splat" | "toString" | "normalize" | "normalizeLength" | "normalized" | "normalizeInto" | "distanceTo" | "distanceToSquared" | "angleTo" | "angleToSigned" | "dot" | "postmultiply" | "cross" | "scaleOrthogonalInto" | "reflect" | "reflected" | "relativeError" | "absoluteError" | "add" | "addScaled" | "sub" | "multiply" | "divide" | "scale" | "scaled" | "negate" | "absolute" | "clamp" | "clampScalar" | "floor" | "ceil" | "round" | "roundToZero" | "clone" | "copyInto" | "copyIntoArray" | "copyFromArray" | "operatorGetIndex" | "operatorSetIndex" | "operatorAdd" | "operatorSubtract" | "operatorMultiply" | "operatorDivide" | "operatorNegate" | "__flaxBound:package:vector_math/vector_math_64.dart::Vector2" | "__flaxBound:package:vector_math/vector_math_64.dart::Vector";
