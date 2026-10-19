// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"key","required":true,"positional":true},{"name":"value","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"key","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PersistentHashMap<K extends {} = {}, V extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:flutter/src/foundation/persistent_hash_map.dart::PersistentHashMap": readonly [K, V] }> { readonly __PersistentHashMap: unique symbol;
readonly [_flaxDartTypeValue]: PersistentHashMap<K, V>;

}
defineObject("flax.core/sdk_foundation#type:PersistentHashMap", [], [], _flaxBindingMethods("flax.core/sdk_foundation#type:PersistentHashMap", "object", {"put":_flaxMemberParameters0,"operatorGetIndex":_flaxMemberParameters1}, {}), []);
const _PersistentHashMapProxy = {type: "flax.core/sdk_foundation#type:PersistentHashMap", parameters: _flaxMemberParameters2, constructors: {"empty": _flaxMemberParameters2}, methods: {"put":_flaxMemberParameters0,"operatorGetIndex":_flaxMemberParameters1}, getters: [], setters: [], contextMembers: [], superMembers: ["put","operatorGetIndex"]} as const;
export interface PersistentHashMap<K extends {} = {}, V extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: PersistentHashMap<K, V>;

put(key: (K | DartInput<K>), value: (V | DartInput<V>)): PersistentHashMap<K, V>;
operatorGetIndex(key: (K | DartInput<K>)): V | null;
}
export abstract class PersistentHashMap<K extends {} = {}, V extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PersistentHashMap<{}, unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PersistentHashMap<{}, unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:PersistentHashMap", readonly [readonly ["any", null, readonly [], false], readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor() { super(_PersistentHashMapProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(PersistentHashMap.prototype, _PersistentHashMapProxy);
export namespace PersistentHashMap { export function implement<K extends {} = {}, V extends unknown | null = unknown | null>(args: [], implementation: {}): PersistentHashMap<K, V> {
return constructProxy(_PersistentHashMapProxy, args, implementation) as PersistentHashMap<K, V>; } }
_flaxBindInstanceType<PersistentHashMap<{}, unknown | null>, typeof PersistentHashMap>(PersistentHashMap, "flax.core/sdk_foundation#type:PersistentHashMap", ["dart:core::Object"]);
_flaxDefineDartTypes(PersistentHashMap, "flax.core/sdk_foundation#type:PersistentHashMap", {...{"category":"object","constructors":{}}, proxy: _PersistentHashMapProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [{}] ? [_Selected1] extends [unknown | null] ? (abstract new () => PersistentHashMap<_Selected0, _Selected1>) & {readonly prototype: PersistentHashMap<_Selected0, _Selected1>;implement(args: readonly [], implementation: Partial<PersistentHashMap<_Selected0, _Selected1>>): PersistentHashMap<_Selected0, _Selected1>;} & _FlaxInstanceType<PersistentHashMap<_Selected0, _Selected1>> & _FlaxDartType<PersistentHashMap<_Selected0, _Selected1>> : never : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [{}] ? [_Selected1] extends [unknown | null] ? (abstract new () => PersistentHashMap<_Selected0, _Selected1>) & {readonly prototype: PersistentHashMap<_Selected0, _Selected1>;implement(args: readonly [], implementation: Partial<PersistentHashMap<_Selected0, _Selected1>>): PersistentHashMap<_Selected0, _Selected1>;} & _FlaxInstanceType<PersistentHashMap<_Selected0, _Selected1>> & _FlaxDartType<PersistentHashMap<_Selected0, _Selected1>> : never : never : never; }
