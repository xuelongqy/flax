// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MapEntry<K extends unknown | null = unknown | null, V extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:dart:core::MapEntry": readonly [K, V] }> { readonly __MapEntry: unique symbol;

readonly key: K;
readonly value: V;
toString(): string;
}
defineObject("flax.core/flutter#type:MapEntry", ["key","value"], [], _flaxBindingMethods("flax.core/flutter#type:MapEntry", "object", {"toString":_flaxMemberParameters0}, {}), []);
export function _MapEntryFactory<K extends unknown | null = unknown | null, V extends unknown | null = unknown | null>(key: (K | _FlaxDartOutput<K>), value: (V | _FlaxDartOutput<V>)): MapEntry<K, V>;
export function _MapEntryFactory(key: unknown | null, value: unknown | null): MapEntry<unknown | null, unknown | null>;
export function _MapEntryFactory(key: unknown, value: unknown): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:MapEntry", "", [{"name":"key","required":true,"positional":true},{"name":"value","required":true,"positional":true}], [key, value], {}) as MapEntry<unknown | null, unknown | null>;
}
export const MapEntry: typeof _MapEntryFactory & _FlaxInstanceType<MapEntry<unknown | null, unknown | null>> & _FlaxDartType<MapEntry<unknown | null, unknown | null>, readonly ["class", "flax.core/flutter#type:MapEntry", readonly [readonly ["any", null, readonly [], true], readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<MapEntry<unknown | null, unknown | null>, typeof _MapEntryFactory>(_MapEntryFactory, "flax.core/flutter#type:MapEntry", ["dart:core::Object"]) as typeof _MapEntryFactory & _FlaxInstanceType<MapEntry<unknown | null, unknown | null>> & _FlaxDartType<MapEntry<unknown | null, unknown | null>, readonly ["class", "flax.core/flutter#type:MapEntry", readonly [readonly ["any", null, readonly [], true], readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(MapEntry, "flax.core/flutter#type:MapEntry", {"category":"object","constructors":{"":[{"name":"key","required":true,"positional":true},{"name":"value","required":true,"positional":true}]}});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? {(key: (_Selected0 | DartInput<_Selected0>), value: (_Selected1 | DartInput<_Selected1>)): MapEntry<_Selected0, _Selected1>;readonly prototype: MapEntry<_Selected0, _Selected1>;} & _FlaxInstanceType<MapEntry<_Selected0, _Selected1>> & _FlaxDartType<MapEntry<_Selected0, _Selected1>> : never : never : never; }
