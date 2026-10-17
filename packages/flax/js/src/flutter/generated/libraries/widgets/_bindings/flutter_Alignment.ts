// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"other","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"direction","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_TextDirection';
import '@flax/flutter/services/_bindings/flutter_TextDirection';
import type * as upstream2 from '@flax/flutter/gestures/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_Size';
import '@flax/flutter/services/_bindings/flutter_Size';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Alignment extends Omit<upstream0.AlignmentGeometry, typeof _flaxDartTypeValue | "x" | "y" | "add" | "resolve" | "toString" | "alongOffset" | "alongSize" | "operatorMultiply" | "operatorDivide" | "operatorTruncateDivide" | "operatorModulo" | "operatorNegate" | "operatorAdd" | "operatorSubtract">, Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [] }> { readonly __Alignment: unique symbol;

readonly x: number;
readonly y: number;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }>): upstream0.AlignmentGeometry;
resolve(direction: upstream1.TextDirection | null): Alignment;
toString(): string;
alongOffset(other: upstream2.Offset): upstream2.Offset;
alongSize(other: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }>): upstream2.Offset;
operatorMultiply(other: number): Alignment;
operatorDivide(other: number): Alignment;
operatorTruncateDivide(other: number): Alignment;
operatorModulo(other: number): Alignment;
operatorNegate(): Alignment;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [] }>): Alignment;
operatorSubtract(other: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [] }>): Alignment;
}
defineObject("flax.core/flutter#type:Alignment", ["x","y"], [], _flaxBindingMethods("flax.core/flutter#type:Alignment", "object", {"add":_flaxMemberParameters0,"resolve":_flaxMemberParameters1,"toString":_flaxMemberParameters2,"alongOffset":_flaxMemberParameters0,"alongSize":_flaxMemberParameters0,"operatorMultiply":_flaxMemberParameters0,"operatorDivide":_flaxMemberParameters0,"operatorTruncateDivide":_flaxMemberParameters0,"operatorModulo":_flaxMemberParameters0,"operatorNegate":_flaxMemberParameters2,"operatorAdd":_flaxMemberParameters0,"operatorSubtract":_flaxMemberParameters0}, {}), []);
export function _AlignmentFactory(x: number, y: number): Alignment {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Alignment", "", [{"name":"x","required":true,"positional":true},{"name":"y","required":true,"positional":true}], [x, y], {}) as Alignment;
}
export namespace _AlignmentFactory { export declare const topLeft: Alignment; }
Object.defineProperty(_AlignmentFactory, "topLeft", { get: () => invokeTopLevel("flax.core/flutter#read:Alignment.topLeft", []) });
export namespace _AlignmentFactory { export declare const topCenter: Alignment; }
Object.defineProperty(_AlignmentFactory, "topCenter", { get: () => invokeTopLevel("flax.core/flutter#read:Alignment.topCenter", []) });
export namespace _AlignmentFactory { export declare const topRight: Alignment; }
Object.defineProperty(_AlignmentFactory, "topRight", { get: () => invokeTopLevel("flax.core/flutter#read:Alignment.topRight", []) });
export namespace _AlignmentFactory { export declare const centerLeft: Alignment; }
Object.defineProperty(_AlignmentFactory, "centerLeft", { get: () => invokeTopLevel("flax.core/flutter#read:Alignment.centerLeft", []) });
export namespace _AlignmentFactory { export declare const center: Alignment; }
Object.defineProperty(_AlignmentFactory, "center", { get: () => invokeTopLevel("flax.core/flutter#read:Alignment.center", []) });
export namespace _AlignmentFactory { export declare const centerRight: Alignment; }
Object.defineProperty(_AlignmentFactory, "centerRight", { get: () => invokeTopLevel("flax.core/flutter#read:Alignment.centerRight", []) });
export namespace _AlignmentFactory { export declare const bottomLeft: Alignment; }
Object.defineProperty(_AlignmentFactory, "bottomLeft", { get: () => invokeTopLevel("flax.core/flutter#read:Alignment.bottomLeft", []) });
export namespace _AlignmentFactory { export declare const bottomCenter: Alignment; }
Object.defineProperty(_AlignmentFactory, "bottomCenter", { get: () => invokeTopLevel("flax.core/flutter#read:Alignment.bottomCenter", []) });
export namespace _AlignmentFactory { export declare const bottomRight: Alignment; }
Object.defineProperty(_AlignmentFactory, "bottomRight", { get: () => invokeTopLevel("flax.core/flutter#read:Alignment.bottomRight", []) });
export namespace _AlignmentFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [] }> | null, t: number): Alignment | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Alignment.lerp", [a, b, t]);
return _flaxResult as Alignment | null;
} }
export const Alignment: typeof _AlignmentFactory & _FlaxInstanceType<Alignment> & _FlaxDartType<Alignment, readonly ["class", "flax.core/flutter#type:Alignment", readonly [], false]> = _flaxBindInstanceType<Alignment, typeof _AlignmentFactory>(_AlignmentFactory, "flax.core/flutter#type:Alignment", ["flax.core/flutter#type:AlignmentGeometry","dart:core::Object"]) as typeof _AlignmentFactory & _FlaxInstanceType<Alignment> & _FlaxDartType<Alignment, readonly ["class", "flax.core/flutter#type:Alignment", readonly [], false]>;
