export type AsyncValueGetter<T extends unknown | null = unknown | null> = (() => Promise<T>);
export type AsyncValueGetterInput<T extends unknown | null = unknown | null> = (() => Promise<T>);
