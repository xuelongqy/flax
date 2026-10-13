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

export type FlaxDartTypeDescription = readonly [
  kind: string,
  id: string | null,
  arguments: readonly FlaxDartTypeDescription[],
  nullable: boolean,
];

/** A type description, not a Dart object or a constructor. */
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
}
type Arguments<A extends readonly FlaxDartTypeInput[]> = { [K in keyof A]: Key<A[K]> };
type Select<Case, A> = Case extends { arguments: infer P; value: infer V }
  ? [P] extends [A]
    ? [A] extends [P]
      ? V
      : never
    : never
  : never;
type WithStatics<C, V> = V extends unknown
  ? V & Omit<C, keyof V | typeof flaxDartTypeCases>
  : never;
export type FlaxDartTypeSelection<
  C,
  A extends readonly FlaxDartTypeInput[],
> = A extends readonly []
  ? C
  : C extends FlaxDartTypeCases<infer Cases>
    ? WithStatics<C, Select<Cases, Arguments<A>>>
    : never;

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

/** Composes finite Dart type descriptions without creating bridge resources. */
export const dartTypes = Object.freeze({
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
