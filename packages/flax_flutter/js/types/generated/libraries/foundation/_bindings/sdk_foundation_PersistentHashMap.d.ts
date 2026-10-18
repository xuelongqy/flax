import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PersistentHashMap<K extends {} = {}, V extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/persistent_hash_map.dart::PersistentHashMap": readonly [K, V];
}> {
    readonly __PersistentHashMap: unique symbol;
    readonly [_flaxDartTypeValue]: PersistentHashMap<K, V>;
}
export interface PersistentHashMap<K extends {} = {}, V extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: PersistentHashMap<K, V>;
    put(key: (K | DartInput<K>), value: (V | DartInput<V>)): PersistentHashMap<K, V>;
    operatorGetIndex(key: (K | DartInput<K>)): V | null;
}
export declare abstract class PersistentHashMap<K extends {} = {}, V extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PersistentHashMap<{}, unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PersistentHashMap<{}, unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:PersistentHashMap", readonly [readonly ["any", null, readonly [], false], readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor();
}
export declare namespace PersistentHashMap {
    function implement<K extends {} = {}, V extends unknown | null = unknown | null>(args: [], implementation: {}): PersistentHashMap<K, V>;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [{}] ? [_Selected1] extends [unknown | null] ? (abstract new () => PersistentHashMap<_Selected0, _Selected1>) & {
        readonly prototype: PersistentHashMap<_Selected0, _Selected1>;
        implement(args: readonly [], implementation: Partial<PersistentHashMap<_Selected0, _Selected1>>): PersistentHashMap<_Selected0, _Selected1>;
    } & _FlaxInstanceType<PersistentHashMap<_Selected0, _Selected1>> & _FlaxDartType<PersistentHashMap<_Selected0, _Selected1>> : never : never : never;
}
export {};
