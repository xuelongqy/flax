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
const _flaxMemberParameters0 = [{"name":"row","required":true,"positional":true},{"name":"col","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"row","required":true,"positional":true},{"name":"col","required":true,"positional":true},{"name":"v","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"arg","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"arg0","required":true,"positional":true},{"name":"arg1","required":true,"positional":true},{"name":"arg2","required":true,"positional":true},{"name":"arg3","required":true,"positional":true},{"name":"arg4","required":true,"positional":true},{"name":"arg5","required":true,"positional":true},{"name":"arg6","required":true,"positional":true},{"name":"arg7","required":true,"positional":true},{"name":"arg8","required":true,"positional":true},{"name":"arg9","required":true,"positional":true},{"name":"arg10","required":true,"positional":true},{"name":"arg11","required":true,"positional":true},{"name":"arg12","required":true,"positional":true},{"name":"arg13","required":true,"positional":true},{"name":"arg14","required":true,"positional":true},{"name":"arg15","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"arg0","required":true,"positional":true},{"name":"arg1","required":true,"positional":true},{"name":"arg2","required":true,"positional":true},{"name":"arg3","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"arg0","required":true,"positional":true},{"name":"arg1","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"translation","required":true,"positional":true},{"name":"rotation","required":true,"positional":true},{"name":"scale","required":true,"positional":true}] as const;
const _flaxMemberParameters7 = [{"name":"u","required":true,"positional":true},{"name":"v","required":true,"positional":true}] as const;
const _flaxMemberParameters8 = [] as const;
const _flaxMemberParameters9 = [{"name":"row","required":true,"positional":true},{"name":"arg","required":true,"positional":true}] as const;
const _flaxMemberParameters10 = [{"name":"row","required":true,"positional":true}] as const;
const _flaxMemberParameters11 = [{"name":"column","required":true,"positional":true},{"name":"arg","required":true,"positional":true}] as const;
const _flaxMemberParameters12 = [{"name":"column","required":true,"positional":true}] as const;
const _flaxMemberParameters13 = [{"name":"x","required":true,"positional":true},{"name":"y","positional":true},{"name":"z","positional":true}] as const;
const _flaxMemberParameters14 = [{"name":"tx","required":true,"positional":true},{"name":"ty","required":true,"positional":true},{"name":"tz","required":true,"positional":true},{"name":"tw","required":true,"positional":true}] as const;
const _flaxMemberParameters15 = [{"name":"v2","required":true,"positional":true}] as const;
const _flaxMemberParameters16 = [{"name":"v3","required":true,"positional":true}] as const;
const _flaxMemberParameters17 = [{"name":"v4","required":true,"positional":true}] as const;
const _flaxMemberParameters18 = [{"name":"axis","required":true,"positional":true},{"name":"angle","required":true,"positional":true}] as const;
const _flaxMemberParameters19 = [{"name":"angle","required":true,"positional":true}] as const;
const _flaxMemberParameters20 = [{"name":"sx","required":true,"positional":true},{"name":"sy","required":true,"positional":true},{"name":"sz","required":true,"positional":true},{"name":"sw","required":true,"positional":true}] as const;
const _flaxMemberParameters21 = [{"name":"x","required":true,"positional":true},{"name":"y","required":true,"positional":true},{"name":"z","required":true,"positional":true},{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters22 = [{"name":"i","required":true,"positional":true},{"name":"v","required":true,"positional":true}] as const;
const _flaxMemberParameters23 = [{"name":"j","required":true,"positional":true},{"name":"v","required":true,"positional":true}] as const;
const _flaxMemberParameters24 = [{"name":"correct","required":true,"positional":true}] as const;
const _flaxMemberParameters25 = [{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters26 = [{"name":"x","required":true,"positional":true},{"name":"y","required":true,"positional":true},{"name":"z","required":true,"positional":true}] as const;
const _flaxMemberParameters27 = [{"name":"rotation","required":true,"positional":true}] as const;
const _flaxMemberParameters28 = [{"name":"r","required":true,"positional":true}] as const;
const _flaxMemberParameters29 = [{"name":"radians","required":true,"positional":true}] as const;
const _flaxMemberParameters30 = [{"name":"scale","required":true,"positional":true}] as const;
const _flaxMemberParameters31 = [{"name":"o","required":true,"positional":true}] as const;
const _flaxMemberParameters32 = [{"name":"arg","required":true,"positional":true},{"name":"out","positional":true}] as const;
const _flaxMemberParameters33 = [{"name":"array","required":true,"positional":true},{"name":"offset","positional":true}] as const;
const _flaxMemberParameters34 = [{"name":"i","required":true,"positional":true}] as const;
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
defineObject("flax.core/sdk_rendering#type:Matrix4", ["storage","dimension","row0","row1","row2","row3","right","up","forward"], ["row0","row1","row2","row3"], _flaxBindingMethods("flax.core/sdk_rendering#type:Matrix4", "object", {"index":_flaxMemberParameters0,"entry":_flaxMemberParameters0,"setEntry":_flaxMemberParameters1,"splatDiagonal":_flaxMemberParameters2,"setValues":_flaxMemberParameters3,"setColumns":_flaxMemberParameters4,"setFrom":_flaxMemberParameters2,"setFromTranslationRotation":_flaxMemberParameters5,"setFromTranslationRotationScale":_flaxMemberParameters6,"setUpper2x2":_flaxMemberParameters2,"setDiagonal":_flaxMemberParameters2,"setOuter":_flaxMemberParameters7,"toString":_flaxMemberParameters8,"setRow":_flaxMemberParameters9,"getRow":_flaxMemberParameters10,"setColumn":_flaxMemberParameters11,"getColumn":_flaxMemberParameters12,"clone":_flaxMemberParameters8,"copyInto":_flaxMemberParameters2,"translate":_flaxMemberParameters13,"translateByDouble":_flaxMemberParameters14,"translateByVector2":_flaxMemberParameters15,"translateByVector3":_flaxMemberParameters16,"translateByVector4":_flaxMemberParameters17,"leftTranslate":_flaxMemberParameters13,"leftTranslateByDouble":_flaxMemberParameters14,"leftTranslateByVector2":_flaxMemberParameters15,"leftTranslateByVector3":_flaxMemberParameters16,"leftTranslateByVector4":_flaxMemberParameters17,"rotate":_flaxMemberParameters18,"rotateX":_flaxMemberParameters19,"rotateY":_flaxMemberParameters19,"rotateZ":_flaxMemberParameters19,"scale":_flaxMemberParameters13,"scaleByDouble":_flaxMemberParameters20,"scaleByVector3":_flaxMemberParameters16,"scaleByVector4":_flaxMemberParameters17,"scaled":_flaxMemberParameters13,"scaledByDouble":_flaxMemberParameters21,"scaledByVector3":_flaxMemberParameters16,"scaledByVector4":_flaxMemberParameters17,"setZero":_flaxMemberParameters8,"setIdentity":_flaxMemberParameters8,"transposed":_flaxMemberParameters8,"transpose":_flaxMemberParameters8,"absolute":_flaxMemberParameters8,"determinant":_flaxMemberParameters8,"dotRow":_flaxMemberParameters22,"dotColumn":_flaxMemberParameters23,"trace":_flaxMemberParameters8,"infinityNorm":_flaxMemberParameters8,"relativeError":_flaxMemberParameters24,"absoluteError":_flaxMemberParameters24,"getTranslation":_flaxMemberParameters8,"setTranslation":_flaxMemberParameters25,"setTranslationRaw":_flaxMemberParameters26,"getRotation":_flaxMemberParameters8,"copyRotation":_flaxMemberParameters27,"setRotation":_flaxMemberParameters28,"getNormalMatrix":_flaxMemberParameters8,"getMaxScaleOnAxis":_flaxMemberParameters8,"transposeRotation":_flaxMemberParameters8,"invert":_flaxMemberParameters8,"copyInverse":_flaxMemberParameters2,"invertRotation":_flaxMemberParameters8,"setRotationX":_flaxMemberParameters29,"setRotationY":_flaxMemberParameters29,"setRotationZ":_flaxMemberParameters29,"scaleAdjoint":_flaxMemberParameters30,"absoluteRotate":_flaxMemberParameters2,"add":_flaxMemberParameters31,"sub":_flaxMemberParameters31,"negate":_flaxMemberParameters8,"multiply":_flaxMemberParameters2,"leftMultiply":_flaxMemberParameters2,"multiplied":_flaxMemberParameters2,"transposeMultiply":_flaxMemberParameters2,"multiplyTranspose":_flaxMemberParameters2,"decompose":_flaxMemberParameters6,"rotate3":_flaxMemberParameters2,"rotated3":_flaxMemberParameters32,"transform3":_flaxMemberParameters2,"transformed3":_flaxMemberParameters32,"transform":_flaxMemberParameters2,"perspectiveTransform":_flaxMemberParameters2,"transformed":_flaxMemberParameters32,"copyIntoArray":_flaxMemberParameters33,"copyFromArray":_flaxMemberParameters33,"applyToVector3Array":_flaxMemberParameters33,"isIdentity":_flaxMemberParameters8,"isZero":_flaxMemberParameters8,"operatorGetIndex":_flaxMemberParameters34,"operatorSetIndex":_flaxMemberParameters22,"operatorAdd":_flaxMemberParameters2,"operatorSubtract":_flaxMemberParameters2,"operatorMultiply":_flaxMemberParameters2,"operatorNegate":_flaxMemberParameters8}, {}), []);
export function _Matrix4Factory(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 16) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "", _flaxMemberParameters3, [arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15], {}) as Matrix4;
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
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "zero", _flaxMemberParameters8, [], {}) as Matrix4;
}
}
export namespace _Matrix4Factory {
export function identity(): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "identity", _flaxMemberParameters8, [], {}) as Matrix4;
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
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "columns", _flaxMemberParameters4, [arg0, arg1, arg2, arg3], {}) as Matrix4;
}
}
export namespace _Matrix4Factory {
export function outer(u: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>, v: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector4": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "outer", _flaxMemberParameters7, [u, v], {}) as Matrix4;
}
}
export namespace _Matrix4Factory {
export function rotationX(radians: number): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "rotationX", _flaxMemberParameters29, [radians], {}) as Matrix4;
}
}
export namespace _Matrix4Factory {
export function rotationY(radians: number): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "rotationY", _flaxMemberParameters29, [radians], {}) as Matrix4;
}
}
export namespace _Matrix4Factory {
export function rotationZ(radians: number): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "rotationZ", _flaxMemberParameters29, [radians], {}) as Matrix4;
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
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "translationValues", _flaxMemberParameters26, [x, y, z], {}) as Matrix4;
}
}
export namespace _Matrix4Factory {
export function diagonal3(scale: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector3": readonly [] }> & Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Vector": readonly [] }>): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "diagonal3", _flaxMemberParameters30, [scale], {}) as Matrix4;
}
}
export namespace _Matrix4Factory {
export function diagonal3Values(x: number, y: number, z: number): Matrix4 {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "diagonal3Values", _flaxMemberParameters26, [x, y, z], {}) as Matrix4;
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
return constructObject("object", "flax.core/sdk_rendering#type:Matrix4", "compose", _flaxMemberParameters6, [translation, rotation, scale], {}) as Matrix4;
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
