export type TaskCallback<T extends unknown | null = unknown | null> = (() => T | Promise<T>);
export type TaskCallbackInput<T extends unknown | null = unknown | null> = (() => T | Promise<T>);
