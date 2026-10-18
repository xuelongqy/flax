export type ComputeCallback<M extends unknown | null = unknown | null, R extends unknown | null = unknown | null> = ((message: M) => R | Promise<R>);
export type ComputeCallbackInput<M extends unknown | null = unknown | null, R extends unknown | null = unknown | null> = ((message: M) => R | Promise<R>);
