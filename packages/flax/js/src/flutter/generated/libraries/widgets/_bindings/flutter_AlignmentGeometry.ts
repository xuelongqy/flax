// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"other","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"direction","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Alignment';
import '@flax/flutter/widgets/_bindings/flutter_Alignment';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_TextDirection';
import '@flax/flutter/services/_bindings/flutter_TextDirection';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AlignmentGeometry extends Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> { readonly __AlignmentGeometry: unique symbol;

add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }>): AlignmentGeometry;
resolve(direction: upstream1.TextDirection | null): upstream0.Alignment;
toString(): string;
operatorMultiply(other: number): AlignmentGeometry;
operatorDivide(other: number): AlignmentGeometry;
operatorTruncateDivide(other: number): AlignmentGeometry;
operatorModulo(other: number): AlignmentGeometry;
operatorNegate(): AlignmentGeometry;
}
defineObject("flax.core/flutter#type:AlignmentGeometry", [], [], _flaxBindingMethods("flax.core/flutter#type:AlignmentGeometry", "object", {"add":_flaxMemberParameters0,"resolve":_flaxMemberParameters1,"toString":_flaxMemberParameters2,"operatorMultiply":_flaxMemberParameters0,"operatorDivide":_flaxMemberParameters0,"operatorTruncateDivide":_flaxMemberParameters0,"operatorModulo":_flaxMemberParameters0,"operatorNegate":_flaxMemberParameters2}, {}), []);
export namespace _AlignmentGeometryFactory {
export function xy(x: number, y: number): AlignmentGeometry {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:AlignmentGeometry", "xy", [{"name":"x","required":true,"positional":true},{"name":"y","required":true,"positional":true}], [x, y], {}) as AlignmentGeometry;
}
}
export namespace _AlignmentGeometryFactory {
export function directional(start: number, y: number): AlignmentGeometry {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:AlignmentGeometry", "directional", [{"name":"start","required":true,"positional":true},{"name":"y","required":true,"positional":true}], [start, y], {}) as AlignmentGeometry;
}
}
export namespace _AlignmentGeometryFactory { export declare const topLeft: AlignmentGeometry; }
Object.defineProperty(_AlignmentGeometryFactory, "topLeft", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentGeometry.topLeft", []) });
export namespace _AlignmentGeometryFactory { export declare const topCenter: AlignmentGeometry; }
Object.defineProperty(_AlignmentGeometryFactory, "topCenter", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentGeometry.topCenter", []) });
export namespace _AlignmentGeometryFactory { export declare const topRight: AlignmentGeometry; }
Object.defineProperty(_AlignmentGeometryFactory, "topRight", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentGeometry.topRight", []) });
export namespace _AlignmentGeometryFactory { export declare const topStart: AlignmentGeometry; }
Object.defineProperty(_AlignmentGeometryFactory, "topStart", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentGeometry.topStart", []) });
export namespace _AlignmentGeometryFactory { export declare const topEnd: AlignmentGeometry; }
Object.defineProperty(_AlignmentGeometryFactory, "topEnd", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentGeometry.topEnd", []) });
export namespace _AlignmentGeometryFactory { export declare const centerLeft: AlignmentGeometry; }
Object.defineProperty(_AlignmentGeometryFactory, "centerLeft", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentGeometry.centerLeft", []) });
export namespace _AlignmentGeometryFactory { export declare const center: AlignmentGeometry; }
Object.defineProperty(_AlignmentGeometryFactory, "center", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentGeometry.center", []) });
export namespace _AlignmentGeometryFactory { export declare const centerRight: AlignmentGeometry; }
Object.defineProperty(_AlignmentGeometryFactory, "centerRight", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentGeometry.centerRight", []) });
export namespace _AlignmentGeometryFactory { export declare const centerStart: AlignmentGeometry; }
Object.defineProperty(_AlignmentGeometryFactory, "centerStart", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentGeometry.centerStart", []) });
export namespace _AlignmentGeometryFactory { export declare const centerEnd: AlignmentGeometry; }
Object.defineProperty(_AlignmentGeometryFactory, "centerEnd", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentGeometry.centerEnd", []) });
export namespace _AlignmentGeometryFactory { export declare const bottomLeft: AlignmentGeometry; }
Object.defineProperty(_AlignmentGeometryFactory, "bottomLeft", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentGeometry.bottomLeft", []) });
export namespace _AlignmentGeometryFactory { export declare const bottomCenter: AlignmentGeometry; }
Object.defineProperty(_AlignmentGeometryFactory, "bottomCenter", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentGeometry.bottomCenter", []) });
export namespace _AlignmentGeometryFactory { export declare const bottomRight: AlignmentGeometry; }
Object.defineProperty(_AlignmentGeometryFactory, "bottomRight", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentGeometry.bottomRight", []) });
export namespace _AlignmentGeometryFactory { export declare const bottomStart: AlignmentGeometry; }
Object.defineProperty(_AlignmentGeometryFactory, "bottomStart", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentGeometry.bottomStart", []) });
export namespace _AlignmentGeometryFactory { export declare const bottomEnd: AlignmentGeometry; }
Object.defineProperty(_AlignmentGeometryFactory, "bottomEnd", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentGeometry.bottomEnd", []) });
export namespace _AlignmentGeometryFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | null, t: number): AlignmentGeometry | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:AlignmentGeometry.lerp", [a, b, t]);
return _flaxResult as AlignmentGeometry | null;
} }
export const AlignmentGeometry: typeof _AlignmentGeometryFactory & _FlaxInstanceType<AlignmentGeometry> & _FlaxDartType<AlignmentGeometry, readonly ["class", "flax.core/flutter#type:AlignmentGeometry", readonly [], false]> = _flaxBindInstanceType<AlignmentGeometry, typeof _AlignmentGeometryFactory>(_AlignmentGeometryFactory, "flax.core/flutter#type:AlignmentGeometry", ["dart:core::Object"]) as typeof _AlignmentGeometryFactory & _FlaxInstanceType<AlignmentGeometry> & _FlaxDartType<AlignmentGeometry, readonly ["class", "flax.core/flutter#type:AlignmentGeometry", readonly [], false]>;
