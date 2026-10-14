import type {
  DartList,
  DartIterable,
  DartMap,
  DartSet,
  FlaxDartInstance,
  FlaxInstanceType,
} from './bindings.js';

export const flaxDartTypeValue: unique symbol = Symbol('Flax Dart type value');
export const flaxDartTypeKey: unique symbol = Symbol('Flax Dart type key');
export const flaxDartTypeCases: unique symbol = Symbol('Flax Dart type cases');
export const flaxDartMethodCases: unique symbol = Symbol('Flax Dart method cases');

export type FlaxDartTypeDescription = readonly [
  kind: string,
  id: string | null,
  arguments: readonly FlaxDartTypeDescription[],
  nullable: boolean,
];

/** Authenticated Type token; its real Dart handle is resolved and cached on first use. */
export interface FlaxDartType<
  T,
  K extends FlaxDartTypeDescription = FlaxDartTypeDescription,
> {
  readonly [flaxDartTypeValue]: T;
  readonly [flaxDartTypeKey]: K;
}
export type FlaxDartTypeInput = FlaxDartType<unknown> | FlaxInstanceType<unknown>;
export type FlaxDartTypeValue<T> =
  T extends FlaxDartType<infer V> ? V : FlaxDartInstance<T>;
type Key<T> = T extends FlaxDartType<unknown, infer K> ? K : FlaxDartTypeDescription;
export interface FlaxDartTypeCases<Cases> {
  readonly [flaxDartTypeCases]: Cases;
  /** Selects real Dart type arguments without changing constructor arguments. */
  $type<
    C extends FlaxInstanceType<unknown> | Function,
    const A extends readonly FlaxDartTypeInput[],
  >(
    this: C,
    ...types: A & (FlaxDartTypeSelection<C, A> extends never ? never : unknown)
  ): FlaxDartTypeSelection<C, A>;
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
type MethodCases<C> =
  C extends FlaxInstanceType<unknown>
    ? FlaxDartInstance<C> extends FlaxDartMethodCases<infer M>
      ? M
      : never
    : C extends FlaxDartMethodCases<infer M>
      ? M
      : never;
type Receiver<F, C> = F extends (...args: infer P) => infer R
  ? (this: FlaxDartInstance<C>, ...args: P) => R
  : never;
export type FlaxDartMethodSelection<
  C,
  M,
  A extends readonly FlaxDartTypeInput[],
> = M extends keyof MethodCases<C>
  ? A extends readonly []
    ? C extends FlaxInstanceType<unknown>
      ? M extends keyof FlaxDartInstance<C>
        ? Receiver<FlaxDartInstance<C>[M], C>
        : never
      : M extends keyof C
        ? C[M]
        : never
    : C extends FlaxInstanceType<unknown>
      ? Receiver<Select<MethodCases<C>[M], Arguments<A>>, C>
      : Select<MethodCases<C>[M], Arguments<A>>
  : never;
type Arguments<A extends readonly FlaxDartTypeInput[]> = {
  readonly [K in keyof A]: FlaxDartTypeValue<A[K]>;
};
/** One signature template, applied to the selected values instead of a tuple catalog. */
export interface FlaxDartSignature {
  readonly arguments: readonly unknown[];
  readonly call: unknown;
}
type Select<S, A extends readonly unknown[]> = S extends FlaxDartSignature
  ? (S & { readonly arguments: A })['call']
  : never;
type WithStatics<C, V> = V extends unknown
  ? V & Omit<C, keyof V | typeof flaxDartTypeCases>
  : never;
export type FlaxDartTypeSelection<
  C,
  A extends readonly FlaxDartTypeInput[],
> = A extends readonly []
  ? C
  : C extends { readonly [flaxDartTypeCases]?: infer S }
    ? WithStatics<C, Select<S, Arguments<A>>>
    : never;

let unwrapTypeResult: (value: unknown) => unknown = (value) => value;
export function installDartTypeUnwrap(unwrap: (value: unknown) => unknown): void {
  unwrapTypeResult = unwrap;
}

// The WeakMap authenticates descriptions; user properties cannot forge them.
const descriptions = new WeakMap<object, FlaxDartTypeDescription>();
export function registerDartTypeDescription(
  value: object,
  description: FlaxDartTypeDescription,
): void {
  descriptions.set(value, description);
}
export function dartTypeDescription<T>(value: T): Key<T> {
  const description =
    value !== null && (typeof value === 'object' || typeof value === 'function')
      ? descriptions.get(value as object)
      : undefined;
  if (!description) throw new TypeError('Expected an authenticated Dart type');
  return description as Key<T>;
}
function token<T, const K extends FlaxDartTypeDescription>(
  description: K,
): FlaxDartType<T, K> {
  const value = Object.freeze({});
  descriptions.set(value, Object.freeze(description));
  return value as FlaxDartType<T, K>;
}
type Primitive = {
  String: string;
  bool: boolean;
  int: number;
  double: number;
  num: number;
  any: unknown;
};
function primitive<const K extends keyof Primitive, const N extends boolean>(
  kind: K,
  nullable: N,
): FlaxDartType<
  N extends true ? Primitive[K] : NonNullable<Primitive[K]>,
  readonly [K, null, readonly [], N]
> {
  return token([kind, null, [], nullable]);
}

// A JS subclass shares its Dart proxy class; JS-only members are not Dart types.
type DartOrigin<T> = T extends { readonly [flaxDartTypeValue]: infer Native }
  ? Native
  : T;

/** Composes Dart types; the engine checks their actual bounds when selected. */
export const dartTypes = Object.freeze({
  of<T extends object>(value: T): FlaxDartType<DartOrigin<T>> {
    const host = globalThis as typeof globalThis & {
      __flaxDartType?: (version: number, operation: string, value: object) => unknown;
    };
    if (!host.__flaxDartType) throw new Error('Dart types require the Flax engine');
    const result = host.__flaxDartType(24, 'of', value);
    // Shared binding entry unwraps Dart exceptions without changing their identity.
    return unwrapTypeResult(result) as FlaxDartType<DartOrigin<T>>;
  },
  string: primitive('String', false),
  bool: primitive('bool', false),
  int: primitive('int', false),
  double: primitive('double', false),
  num: primitive('num', false),
  object: primitive('any', false),
  unknown: primitive('any', true),
  list<T extends FlaxDartTypeInput>(
    item: T,
  ): FlaxDartType<
    DartList<FlaxDartTypeValue<T>>,
    readonly ['list', null, readonly [Key<T>], false]
  > {
    return token(['list', null, [dartTypeDescription(item)], false]);
  },
  iterable<T extends FlaxDartTypeInput>(
    item: T,
  ): FlaxDartType<
    DartIterable<FlaxDartTypeValue<T>>,
    readonly ['iterable', null, readonly [Key<T>], false]
  > {
    return token(['iterable', null, [dartTypeDescription(item)], false]);
  },
  map<K extends FlaxDartTypeInput, V extends FlaxDartTypeInput>(
    key: K,
    value: V,
  ): FlaxDartType<
    DartMap<FlaxDartTypeValue<K>, FlaxDartTypeValue<V>>,
    readonly ['map', null, readonly [Key<K>, Key<V>], false]
  > {
    return token([
      'map',
      null,
      [dartTypeDescription(key), dartTypeDescription(value)],
      false,
    ]);
  },
  set<T extends FlaxDartTypeInput>(
    item: T,
  ): FlaxDartType<
    DartSet<FlaxDartTypeValue<T>>,
    readonly ['set', null, readonly [Key<T>], false]
  > {
    return token(['set', null, [dartTypeDescription(item)], false]);
  },
  nullable<T extends FlaxDartTypeInput>(
    type: T,
  ): FlaxDartType<
    FlaxDartTypeValue<T> | null,
    readonly [Key<T>[0], Key<T>[1], Key<T>[2], true]
  > {
    const [kind, id, args] = dartTypeDescription(type);
    return token([kind, id, args, true]);
  },
});
