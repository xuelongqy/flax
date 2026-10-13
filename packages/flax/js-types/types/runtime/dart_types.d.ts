import type { DartList, DartIterable, DartMap, DartSet, FlaxDartInstance, FlaxInstanceType } from './bindings.js';
export declare const flaxDartTypeValue: unique symbol;
export declare const flaxDartTypeKey: unique symbol;
export declare const flaxDartTypeCases: unique symbol;
export type FlaxDartTypeDescription = readonly [
    kind: string,
    id: string | null,
    arguments: readonly FlaxDartTypeDescription[],
    nullable: boolean
];
/** A type description, not a Dart object or a constructor. */
export interface FlaxDartType<T, K extends FlaxDartTypeDescription = FlaxDartTypeDescription> {
    readonly [flaxDartTypeValue]: T;
    readonly [flaxDartTypeKey]: K;
}
export type FlaxDartTypeInput = FlaxDartType<unknown> | FlaxInstanceType<unknown>;
export type FlaxDartTypeValue<T> = T extends FlaxDartType<infer V> ? V : FlaxDartInstance<T>;
type Key<T> = T extends FlaxDartType<unknown, infer K> ? K : FlaxDartTypeDescription;
export interface FlaxDartTypeCases<Cases> {
    readonly [flaxDartTypeCases]: Cases;
}
type Arguments<A extends readonly FlaxDartTypeInput[]> = {
    [K in keyof A]: Key<A[K]>;
};
type Select<Case, A> = Case extends {
    arguments: infer P;
    value: infer V;
} ? [P] extends [A] ? [A] extends [P] ? V : never : never : never;
type WithStatics<C, V> = V extends unknown ? V & Omit<C, keyof V | typeof flaxDartTypeCases> : never;
export type FlaxDartTypeSelection<C, A extends readonly FlaxDartTypeInput[]> = A extends readonly [] ? C : C extends FlaxDartTypeCases<infer Cases> ? WithStatics<C, Select<Cases, Arguments<A>>> : never;
export declare function registerDartTypeDescription(value: object, description: FlaxDartTypeDescription): void;
export declare function dartTypeDescription<T>(value: T): Key<T>;
/** Composes finite Dart type descriptions without creating bridge resources. */
export declare const dartTypes: Readonly<{
    string: FlaxDartType<string, readonly ["String", null, readonly [], false]>;
    bool: FlaxDartType<boolean, readonly ["bool", null, readonly [], false]>;
    int: FlaxDartType<number, readonly ["int", null, readonly [], false]>;
    double: FlaxDartType<number, readonly ["double", null, readonly [], false]>;
    num: FlaxDartType<number, readonly ["num", null, readonly [], false]>;
    object: FlaxDartType<{}, readonly ["any", null, readonly [], false]>;
    unknown: FlaxDartType<unknown, readonly ["any", null, readonly [], true]>;
    list<T extends FlaxDartTypeInput>(item: T): FlaxDartType<DartList<FlaxDartTypeValue<T>>, readonly ['list', null, readonly [Key<T>], false]>;
    iterable<T extends FlaxDartTypeInput>(item: T): FlaxDartType<DartIterable<FlaxDartTypeValue<T>>, readonly ['iterable', null, readonly [Key<T>], false]>;
    map<K extends FlaxDartTypeInput, V extends FlaxDartTypeInput>(key: K, value: V): FlaxDartType<DartMap<FlaxDartTypeValue<K>, FlaxDartTypeValue<V>>, readonly ['map', null, readonly [Key<K>, Key<V>], false]>;
    set<T extends FlaxDartTypeInput>(item: T): FlaxDartType<DartSet<FlaxDartTypeValue<T>>, readonly ['set', null, readonly [Key<T>], false]>;
    nullable<T extends FlaxDartTypeInput>(type: T): FlaxDartType<FlaxDartTypeValue<T> | null, readonly [Key<T>[0], Key<T>[1], Key<T>[2], true]>;
}>;
export {};
