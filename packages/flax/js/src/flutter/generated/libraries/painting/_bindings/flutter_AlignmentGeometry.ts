// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_Alignment';
import '@flax/flutter/painting/_bindings/flutter_Alignment';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { _flaxMemberParameters0, _flaxMemberParameters1, _flaxMemberParameters5, _flaxMemberParameters4 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AlignmentGeometry extends Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> { readonly __AlignmentGeometry: unique symbol;
readonly [_flaxDartTypeValue]: AlignmentGeometry;

add(other: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }>): AlignmentGeometry;
resolve(direction: upstream1.TextDirection | null): upstream0.Alignment;
toString(): string;
operatorMultiply(other: number): AlignmentGeometry;
operatorDivide(other: number): AlignmentGeometry;
operatorTruncateDivide(other: number): AlignmentGeometry;
operatorModulo(other: number): AlignmentGeometry;
operatorNegate(): AlignmentGeometry;
}
defineObject("flax.core/flutter#type:AlignmentGeometry", [], [], _flaxBindingMethods("flax.core/flutter#type:AlignmentGeometry", "object", {"add":_flaxMemberParameters1,"resolve":_flaxMemberParameters5,"toString":_flaxMemberParameters4,"operatorMultiply":_flaxMemberParameters1,"operatorDivide":_flaxMemberParameters1,"operatorTruncateDivide":_flaxMemberParameters1,"operatorModulo":_flaxMemberParameters1,"operatorNegate":_flaxMemberParameters4}, {}), []);
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
export namespace _AlignmentGeometryFactory { export declare const topCenter: AlignmentGeometry; }
export namespace _AlignmentGeometryFactory { export declare const topRight: AlignmentGeometry; }
export namespace _AlignmentGeometryFactory { export declare const topStart: AlignmentGeometry; }
export namespace _AlignmentGeometryFactory { export declare const topEnd: AlignmentGeometry; }
export namespace _AlignmentGeometryFactory { export declare const centerLeft: AlignmentGeometry; }
export namespace _AlignmentGeometryFactory { export declare const center: AlignmentGeometry; }
export namespace _AlignmentGeometryFactory { export declare const centerRight: AlignmentGeometry; }
export namespace _AlignmentGeometryFactory { export declare const centerStart: AlignmentGeometry; }
export namespace _AlignmentGeometryFactory { export declare const centerEnd: AlignmentGeometry; }
export namespace _AlignmentGeometryFactory { export declare const bottomLeft: AlignmentGeometry; }
export namespace _AlignmentGeometryFactory { export declare const bottomCenter: AlignmentGeometry; }
export namespace _AlignmentGeometryFactory { export declare const bottomRight: AlignmentGeometry; }
export namespace _AlignmentGeometryFactory { export declare const bottomStart: AlignmentGeometry; }
export namespace _AlignmentGeometryFactory { export declare const bottomEnd: AlignmentGeometry; }
_flaxDefineStaticGetters(_AlignmentGeometryFactory, "flax.core/flutter#read:AlignmentGeometry.", ["topLeft","topCenter","topRight","topStart","topEnd","centerLeft","center","centerRight","centerStart","centerEnd","bottomLeft","bottomCenter","bottomRight","bottomStart","bottomEnd"]);
export namespace _AlignmentGeometryFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | null, t: number): AlignmentGeometry | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:AlignmentGeometry.lerp", [a, b, t], _flaxMemberParameters0);
return _flaxResult as AlignmentGeometry | null;
} }
export const AlignmentGeometry: typeof _AlignmentGeometryFactory & _FlaxInstanceType<AlignmentGeometry> & _FlaxDartType<AlignmentGeometry, readonly ["class", "flax.core/flutter#type:AlignmentGeometry", readonly [], false]> = _flaxBindInstanceType<AlignmentGeometry, typeof _AlignmentGeometryFactory>(_AlignmentGeometryFactory, "flax.core/flutter#type:AlignmentGeometry", ["dart:core::Object"]) as typeof _AlignmentGeometryFactory & _FlaxInstanceType<AlignmentGeometry> & _FlaxDartType<AlignmentGeometry, readonly ["class", "flax.core/flutter#type:AlignmentGeometry", readonly [], false]>;
