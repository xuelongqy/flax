// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_Alignment';
import '@flax/flutter/painting/_bindings/flutter_Alignment';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
const _flaxMemberParameters0 = [{"name":"other","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AlignmentDirectional extends Omit<upstream0.AlignmentGeometry, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentDirectional": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> { readonly __AlignmentDirectional: unique symbol;
readonly [_flaxDartTypeValue]: AlignmentDirectional;

readonly start: number;
readonly y: number;
add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }>): upstream0.AlignmentGeometry;
resolve(direction: upstream2.TextDirection | null): upstream1.Alignment;
toString(): string;
operatorMultiply(other: number): AlignmentDirectional;
operatorDivide(other: number): AlignmentDirectional;
operatorTruncateDivide(other: number): AlignmentDirectional;
operatorModulo(other: number): AlignmentDirectional;
operatorNegate(): AlignmentDirectional;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentDirectional": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }>): AlignmentDirectional;
operatorSubtract(other: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentDirectional": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }>): AlignmentDirectional;
}
defineObject("flax.core/flutter#type:AlignmentDirectional", ["start","y"], [], _flaxBindingMethods("flax.core/flutter#type:AlignmentDirectional", "object", {"operatorMultiply":_flaxMemberParameters0,"operatorDivide":_flaxMemberParameters0,"operatorTruncateDivide":_flaxMemberParameters0,"operatorModulo":_flaxMemberParameters0,"operatorNegate":_flaxMemberParameters1,"operatorAdd":_flaxMemberParameters0,"operatorSubtract":_flaxMemberParameters0}, {}), [], undefined, "flax.core/flutter#type:AlignmentGeometry");
export function _AlignmentDirectionalFactory(start: number, y: number): AlignmentDirectional {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:AlignmentDirectional", "", [{"name":"start","required":true,"positional":true},{"name":"y","required":true,"positional":true}], [start, y], {}) as AlignmentDirectional;
}
export namespace _AlignmentDirectionalFactory { export declare const topStart: AlignmentDirectional; }
export namespace _AlignmentDirectionalFactory { export declare const topCenter: AlignmentDirectional; }
export namespace _AlignmentDirectionalFactory { export declare const topEnd: AlignmentDirectional; }
export namespace _AlignmentDirectionalFactory { export declare const centerStart: AlignmentDirectional; }
export namespace _AlignmentDirectionalFactory { export declare const center: AlignmentDirectional; }
export namespace _AlignmentDirectionalFactory { export declare const centerEnd: AlignmentDirectional; }
export namespace _AlignmentDirectionalFactory { export declare const bottomStart: AlignmentDirectional; }
export namespace _AlignmentDirectionalFactory { export declare const bottomCenter: AlignmentDirectional; }
export namespace _AlignmentDirectionalFactory { export declare const bottomEnd: AlignmentDirectional; }
_flaxDefineStaticGetters(_AlignmentDirectionalFactory, "flax.core/flutter#read:AlignmentDirectional.", ["topStart","topCenter","topEnd","centerStart","center","centerEnd","bottomStart","bottomCenter","bottomEnd"]);
export namespace _AlignmentDirectionalFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentDirectional": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentDirectional": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | null, t: number): AlignmentDirectional | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:AlignmentDirectional.lerp", [a, b, t]);
return _flaxResult as AlignmentDirectional | null;
} }
export const AlignmentDirectional: typeof _AlignmentDirectionalFactory & _FlaxInstanceType<AlignmentDirectional> & _FlaxDartType<AlignmentDirectional, readonly ["class", "flax.core/flutter#type:AlignmentDirectional", readonly [], false]> = _flaxBindInstanceType<AlignmentDirectional, typeof _AlignmentDirectionalFactory>(_AlignmentDirectionalFactory, "flax.core/flutter#type:AlignmentDirectional", ["flax.core/flutter#type:AlignmentGeometry","dart:core::Object"]) as typeof _AlignmentDirectionalFactory & _FlaxInstanceType<AlignmentDirectional> & _FlaxDartType<AlignmentDirectional, readonly ["class", "flax.core/flutter#type:AlignmentDirectional", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "start" | "y" | "add" | "resolve" | "toString" | "operatorMultiply" | "operatorDivide" | "operatorTruncateDivide" | "operatorModulo" | "operatorNegate" | "operatorAdd" | "operatorSubtract" | "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentDirectional" | "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry";
