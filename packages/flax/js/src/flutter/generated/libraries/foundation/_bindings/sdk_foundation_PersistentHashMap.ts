// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters89, _flaxMemberParameters90, _flaxMemberParameters1 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PersistentHashMap<K extends {} = {}, V extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:flutter/src/foundation/persistent_hash_map.dart::PersistentHashMap": readonly [K, V] }> { readonly __PersistentHashMap: unique symbol;
readonly [_flaxDartTypeValue]: PersistentHashMap<K, V>;

put(key: (K | DartInput<K>), value: (V | DartInput<V>)): PersistentHashMap<K, V>;
operatorGetIndex(key: (K | DartInput<K>)): V | null;
}
defineObject("flax.core/sdk_foundation#type:PersistentHashMap", [], [], _flaxBindingMethods("flax.core/sdk_foundation#type:PersistentHashMap", "object", {"put":_flaxMemberParameters89,"operatorGetIndex":_flaxMemberParameters90}, {}), []);
export namespace _PersistentHashMapFactory {
export function empty<K extends {} = {}, V extends unknown | null = unknown | null>(): PersistentHashMap<K, V>;
export function empty(): PersistentHashMap<{}, unknown | null>;
export function empty(): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:PersistentHashMap", "empty", [], [], {}) as PersistentHashMap<{}, unknown | null>;
}
}
const _PersistentHashMapProxy = {type: "flax.core/sdk_foundation#type:PersistentHashMap", parameters: _flaxMemberParameters1, constructors: {"empty": _flaxMemberParameters1}, methods: {"put":_flaxMemberParameters89,"operatorGetIndex":_flaxMemberParameters90}, getters: [], setters: [], contextMembers: [], superMembers: ["put","operatorGetIndex"]} as const;
export interface _PersistentHashMapNative<K extends {} = {}, V extends unknown | null = unknown | null> extends PersistentHashMap<K, V> {
readonly [_flaxDartTypeValue]: _PersistentHashMapNative<K, V>;
readonly [_flaxDartConstructors]?: {"empty": () => void;};

put(key: (K | DartInput<K>), value: (V | DartInput<V>)): PersistentHashMap<K, V>;
operatorGetIndex(key: (K | DartInput<K>)): V | null;
}
export abstract class _PersistentHashMapNative<K extends {} = {}, V extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PersistentHashMap<{}, unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PersistentHashMap<{}, unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:PersistentHashMap", readonly [readonly ["any", null, readonly [], false], readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(); constructor(call: _FlaxProxySuper<_PersistentHashMapNative<K, V>>); constructor(...args: unknown[]) { super(_PersistentHashMapProxy, args); }
}
_flaxDefineProxyBase(_PersistentHashMapNative.prototype, _PersistentHashMapProxy);
export namespace _PersistentHashMapFactory { export function implement<K extends {} = {}, V extends unknown | null = unknown | null>(args: [], implementation: {}): PersistentHashMap<K, V> {
return constructProxy(_PersistentHashMapProxy, args, implementation) as PersistentHashMap<K, V>; } }
const _PersistentHashMapBinding = _flaxProxyFactory(_PersistentHashMapFactory, _PersistentHashMapNative) as unknown as typeof _PersistentHashMapFactory & (new<K extends {} = {}, V extends unknown | null = unknown | null>() => _PersistentHashMapNative<K, V>) & (new<K extends {} = {}, V extends unknown | null = unknown | null>(call: _FlaxProxySuper<_PersistentHashMapNative<K, V>>) => _PersistentHashMapNative<K, V>);
export const PersistentHashMap: typeof _PersistentHashMapBinding & _FlaxInstanceType<PersistentHashMap<{}, unknown | null>> & _FlaxDartType<PersistentHashMap<{}, unknown | null>, readonly ["class", "flax.core/sdk_foundation#type:PersistentHashMap", readonly [readonly ["any", null, readonly [], false], readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<PersistentHashMap<{}, unknown | null>, typeof _PersistentHashMapBinding>(_PersistentHashMapBinding, "flax.core/sdk_foundation#type:PersistentHashMap", ["dart:core::Object"]) as typeof _PersistentHashMapBinding & _FlaxInstanceType<PersistentHashMap<{}, unknown | null>> & _FlaxDartType<PersistentHashMap<{}, unknown | null>, readonly ["class", "flax.core/sdk_foundation#type:PersistentHashMap", readonly [readonly ["any", null, readonly [], false], readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(PersistentHashMap, "flax.core/sdk_foundation#type:PersistentHashMap", {...{"category":"object","constructors":{"empty":[]}}, proxy: _PersistentHashMapProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [{}] ? [_Selected1] extends [unknown | null] ? (new () => _PersistentHashMapNative<_Selected0, _Selected1>) & (new (call: _FlaxProxySuper<_PersistentHashMapNative<_Selected0, _Selected1>>) => _PersistentHashMapNative<_Selected0, _Selected1>) & {empty: ()=> _PersistentHashMapNative<_Selected0, _Selected1>;readonly prototype: _PersistentHashMapNative<_Selected0, _Selected1>;implement(args: readonly [], implementation: Partial<_PersistentHashMapNative<_Selected0, _Selected1>>): _PersistentHashMapNative<_Selected0, _Selected1>;} & _FlaxInstanceType<_PersistentHashMapNative<_Selected0, _Selected1>> & _FlaxDartType<_PersistentHashMapNative<_Selected0, _Selected1>> : never : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [{}] ? [_Selected1] extends [unknown | null] ? (new () => _PersistentHashMapNative<_Selected0, _Selected1>) & (new (call: _FlaxProxySuper<_PersistentHashMapNative<_Selected0, _Selected1>>) => _PersistentHashMapNative<_Selected0, _Selected1>) & {empty: ()=> _PersistentHashMapNative<_Selected0, _Selected1>;readonly prototype: _PersistentHashMapNative<_Selected0, _Selected1>;implement(args: readonly [], implementation: Partial<_PersistentHashMapNative<_Selected0, _Selected1>>): _PersistentHashMapNative<_Selected0, _Selected1>;} & _FlaxInstanceType<_PersistentHashMapNative<_Selected0, _Selected1>> & _FlaxDartType<_PersistentHashMapNative<_Selected0, _Selected1>> : never : never : never; }
