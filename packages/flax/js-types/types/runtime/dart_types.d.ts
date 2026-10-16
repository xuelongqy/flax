import type { DartList, DartIterable, DartMap, DartSet, FlaxDartInstance, FlaxInstanceType, FlaxStreamReference, Widget } from './bindings.js';
export declare const flaxDartTypeValue: unique symbol;
export declare const flaxDartTypeKey: unique symbol;
export declare const flaxDartTypeCases: unique symbol;
export declare const flaxDartMethodCases: unique symbol;
export declare const flaxDartExtensionTypes: unique symbol;
export type FlaxDartTypeDescription = readonly [
    kind: string,
    id: string | null,
    arguments: readonly FlaxDartTypeDescription[],
    nullable: boolean
];
/** Authenticated Type token; its real Dart handle is resolved and cached on first use. */
export interface FlaxDartType<T, K extends FlaxDartTypeDescription = FlaxDartTypeDescription> {
    readonly [flaxDartTypeValue]: T;
    readonly [flaxDartTypeKey]: K;
}
export type FlaxDartTypeInput = FlaxDartType<unknown> | FlaxInstanceType<unknown>;
export type FlaxDartTypeValue<T> = T extends FlaxDartType<infer V> ? V : FlaxDartInstance<T>;
type Key<T> = T extends FlaxDartType<unknown, infer K> ? K : FlaxDartTypeDescription;
export interface FlaxDartTypeCases<Cases> {
    readonly [flaxDartTypeCases]: Cases;
    /** Selects real Dart type arguments without changing constructor arguments. */
    $type<C extends FlaxInstanceType<unknown> | Function, const A extends readonly FlaxDartTypeInput[]>(this: C, ...types: A & (FlaxDartTypeSelection<C, A> extends never ? never : unknown)): FlaxDartTypeSelection<C, A>;
}
/** Optional metadata lets ordinary JS overrides remain structurally compatible. */
export type FlaxDartCallable<F extends Function, Cases> = F & {
    readonly [flaxDartTypeCases]?: Cases;
};
/** Created for one native generic override invocation; safe to retain across await. */
export interface FlaxGenericCall<F extends Function> {
    readonly super: F;
}
export interface FlaxDartMethodCases<Methods> {
    readonly [flaxDartMethodCases]?: Methods;
}
type MethodCases<C> = C extends FlaxInstanceType<unknown> ? FlaxDartInstance<C> extends FlaxDartMethodCases<infer M> ? M : never : C extends FlaxDartMethodCases<infer M> ? M : never;
type Receiver<F, C> = F extends (...args: infer P) => infer R ? (this: FlaxDartInstance<C>, ...args: P) => R : never;
export type FlaxDartMethodSelection<C, M, A extends readonly FlaxDartTypeInput[]> = M extends keyof MethodCases<C> ? A extends readonly [] ? C extends FlaxInstanceType<unknown> ? M extends keyof FlaxDartInstance<C> ? Receiver<FlaxDartInstance<C>[M], C> : never : M extends keyof C ? C[M] : never : C extends FlaxInstanceType<unknown> ? Receiver<Select<MethodCases<C>[M], Arguments<A>>, C> : Select<MethodCases<C>[M], Arguments<A>> : never;
type Arguments<A extends readonly FlaxDartTypeInput[]> = {
    readonly [K in keyof A]: FlaxDartTypeValue<A[K]>;
};
/** One signature template, applied to the selected values instead of a tuple catalog. */
export interface FlaxDartSignature {
    readonly arguments: readonly unknown[];
    readonly call: unknown;
}
type Select<S, A extends readonly unknown[]> = S extends FlaxDartSignature ? (S & {
    readonly arguments: A;
})['call'] : never;
type WithStatics<C, V> = V extends unknown ? V & Omit<C, keyof V | typeof flaxDartTypeCases> : never;
export type FlaxDartTypeSelection<C, A extends readonly FlaxDartTypeInput[]> = A extends readonly [] ? C : C extends {
    readonly [flaxDartTypeCases]?: infer S;
} ? WithStatics<C, Select<S, Arguments<A>>> : never;
export declare function installDartTypeUnwrap(unwrap: (value: unknown) => unknown): void;
export declare function registerDartTypeDescription(value: object, description: FlaxDartTypeDescription): void;
export declare function dartTypeDescription<T>(value: T): Key<T>;
type DartOrigin<T> = T extends {
    readonly [flaxDartTypeValue]: infer Native;
} ? Native : T;
/** Composes Dart types; the engine checks their actual bounds when selected. */
export declare const dartTypes: Readonly<{
    of<T extends object>(value: T): FlaxDartType<DartOrigin<T>>;
    string: FlaxDartType<string, readonly ["String", null, readonly [], false]>;
    bool: FlaxDartType<boolean, readonly ["bool", null, readonly [], false]>;
    int: FlaxDartType<number, readonly ["int", null, readonly [], false]>;
    double: FlaxDartType<number, readonly ["double", null, readonly [], false]>;
    num: FlaxDartType<number, readonly ["num", null, readonly [], false]>;
    bigInt: FlaxDartType<bigint, readonly ["BigInt", null, readonly [], false]>;
    void: FlaxDartType<void, readonly ["void", null, readonly [], false]>;
    never: FlaxDartType<never, readonly ["Never", null, readonly [], false]>;
    null: FlaxDartType<null, readonly ["Null", null, readonly [], true]>;
    object: FlaxDartType<{}, readonly ["any", null, readonly [], false]>;
    unknown: FlaxDartType<unknown, readonly ["any", null, readonly [], true]>;
    widget: FlaxDartType<Widget, readonly ["widget", null, readonly [], false]>;
    list<T extends FlaxDartTypeInput>(item: T): FlaxDartType<DartList<FlaxDartTypeValue<T>>, readonly ['list', null, readonly [Key<T>], false]>;
    iterable<T extends FlaxDartTypeInput>(item: T): FlaxDartType<DartIterable<FlaxDartTypeValue<T>>, readonly ['iterable', null, readonly [Key<T>], false]>;
    map<K extends FlaxDartTypeInput, V extends FlaxDartTypeInput>(key: K, value: V): FlaxDartType<DartMap<FlaxDartTypeValue<K>, FlaxDartTypeValue<V>>, readonly ['map', null, readonly [Key<K>, Key<V>], false]>;
    set<T extends FlaxDartTypeInput>(item: T): FlaxDartType<DartSet<FlaxDartTypeValue<T>>, readonly ['set', null, readonly [Key<T>], false]>;
    future<T extends FlaxDartTypeInput>(item: T): FlaxDartType<Promise<FlaxDartTypeValue<T>>, readonly ['future', null, readonly [Key<T>], false]>;
    futureOr<T extends FlaxDartTypeInput>(item: T): FlaxDartType<FlaxDartTypeValue<T> | Promise<FlaxDartTypeValue<T>>, readonly ['futureOr', null, readonly [Key<T>], false]>;
    stream<T extends FlaxDartTypeInput>(item: T): FlaxDartType<FlaxStreamReference<FlaxDartTypeValue<T>>, readonly ['stream', null, readonly [Key<T>], false]>;
    nullable<T extends FlaxDartTypeInput>(type: T): FlaxDartType<FlaxDartTypeValue<T> | null, readonly [Key<T>[0], Key<T>[1], Key<T>[2], true]>;
}>;
export {};
