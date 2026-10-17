import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MapEntry<K extends unknown | null = unknown | null, V extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:dart:core::MapEntry": readonly [K, V];
}> {
    readonly __MapEntry: unique symbol;
    readonly key: K;
    readonly value: V;
    toString(): string;
}
export declare function _MapEntryFactory<K extends unknown | null = unknown | null, V extends unknown | null = unknown | null>(key: (K | _FlaxDartOutput<K>), value: (V | _FlaxDartOutput<V>)): MapEntry<K, V>;
export declare function _MapEntryFactory(key: unknown | null, value: unknown | null): MapEntry<unknown | null, unknown | null>;
export declare const MapEntry: typeof _MapEntryFactory & _FlaxInstanceType<MapEntry<unknown | null, unknown | null>> & _FlaxDartType<MapEntry<unknown | null, unknown | null>, readonly ["class", "flax.core/flutter#type:MapEntry", readonly [readonly ["any", null, readonly [], true], readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? {
        (key: (_Selected0 | DartInput<_Selected0>), value: (_Selected1 | DartInput<_Selected1>)): MapEntry<_Selected0, _Selected1>;
        readonly prototype: MapEntry<_Selected0, _Selected1>;
    } & _FlaxInstanceType<MapEntry<_Selected0, _Selected1>> & _FlaxDartType<MapEntry<_Selected0, _Selected1>> : never : never : never;
}
export {};
