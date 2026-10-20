import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PersistentHashMap<K extends {} = {}, V extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/persistent_hash_map.dart::PersistentHashMap": readonly [K, V];
}> {
    readonly __PersistentHashMap: unique symbol;
    readonly [_flaxDartTypeValue]: PersistentHashMap<K, V>;
    put(key: (K | DartInput<K>), value: (V | DartInput<V>)): PersistentHashMap<K, V>;
    operatorGetIndex(key: (K | DartInput<K>)): V | null;
}
export declare namespace _PersistentHashMapFactory {
    function empty<K extends {} = {}, V extends unknown | null = unknown | null>(): PersistentHashMap<K, V>;
    function empty(): PersistentHashMap<{}, unknown | null>;
}
export interface _PersistentHashMapNative<K extends {} = {}, V extends unknown | null = unknown | null> extends PersistentHashMap<K, V> {
    readonly [_flaxDartTypeValue]: _PersistentHashMapNative<K, V>;
    readonly [_flaxDartConstructors]?: {
        "empty": () => void;
    };
    put(key: (K | DartInput<K>), value: (V | DartInput<V>)): PersistentHashMap<K, V>;
    operatorGetIndex(key: (K | DartInput<K>)): V | null;
}
export declare abstract class _PersistentHashMapNative<K extends {} = {}, V extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PersistentHashMap<{}, unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PersistentHashMap<{}, unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:PersistentHashMap", readonly [readonly ["any", null, readonly [], false], readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor();
    constructor(call: _FlaxProxySuper<_PersistentHashMapNative<K, V>>);
}
export declare namespace _PersistentHashMapFactory {
    function implement<K extends {} = {}, V extends unknown | null = unknown | null>(args: [], implementation: {}): PersistentHashMap<K, V>;
}
declare const _PersistentHashMapBinding: typeof _PersistentHashMapFactory & (new <K extends {} = {}, V extends unknown | null = unknown | null>() => _PersistentHashMapNative<K, V>) & (new <K extends {} = {}, V extends unknown | null = unknown | null>(call: _FlaxProxySuper<_PersistentHashMapNative<K, V>>) => _PersistentHashMapNative<K, V>);
export declare const PersistentHashMap: typeof _PersistentHashMapBinding & _FlaxInstanceType<PersistentHashMap<{}, unknown | null>> & _FlaxDartType<PersistentHashMap<{}, unknown | null>, readonly ["class", "flax.core/sdk_foundation#type:PersistentHashMap", readonly [readonly ["any", null, readonly [], false], readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [{}] ? [_Selected1] extends [unknown | null] ? (new () => _PersistentHashMapNative<_Selected0, _Selected1>) & (new (call: _FlaxProxySuper<_PersistentHashMapNative<_Selected0, _Selected1>>) => _PersistentHashMapNative<_Selected0, _Selected1>) & {
        empty: () => _PersistentHashMapNative<_Selected0, _Selected1>;
        readonly prototype: _PersistentHashMapNative<_Selected0, _Selected1>;
        implement(args: readonly [], implementation: Partial<_PersistentHashMapNative<_Selected0, _Selected1>>): _PersistentHashMapNative<_Selected0, _Selected1>;
    } & _FlaxInstanceType<_PersistentHashMapNative<_Selected0, _Selected1>> & _FlaxDartType<_PersistentHashMapNative<_Selected0, _Selected1>> : never : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [{}] ? [_Selected1] extends [unknown | null] ? (new () => _PersistentHashMapNative<_Selected0, _Selected1>) & (new (call: _FlaxProxySuper<_PersistentHashMapNative<_Selected0, _Selected1>>) => _PersistentHashMapNative<_Selected0, _Selected1>) & {
        empty: () => _PersistentHashMapNative<_Selected0, _Selected1>;
        readonly prototype: _PersistentHashMapNative<_Selected0, _Selected1>;
        implement(args: readonly [], implementation: Partial<_PersistentHashMapNative<_Selected0, _Selected1>>): _PersistentHashMapNative<_Selected0, _Selected1>;
    } & _FlaxInstanceType<_PersistentHashMapNative<_Selected0, _Selected1>> & _FlaxDartType<_PersistentHashMapNative<_Selected0, _Selected1>> : never : never : never;
}
export {};
