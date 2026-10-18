export type AsyncValueSetter<T extends unknown | null = unknown | null> = ((value: T) => Promise<void>);
export type AsyncValueSetterInput<T extends unknown | null = unknown | null> = ((value: T) => Promise<void>);
