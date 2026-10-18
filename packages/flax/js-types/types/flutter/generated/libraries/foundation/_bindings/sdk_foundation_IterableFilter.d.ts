import { type DartIterable, type DartIterableInput } from '@flax/core/bindings';
export type IterableFilter<T extends unknown | null = unknown | null> = ((input: DartIterableInput<T, T>) => DartIterable<T>);
export type IterableFilterInput<T extends unknown | null = unknown | null> = ((input: DartIterable<T>) => DartIterableInput<T, T>);
