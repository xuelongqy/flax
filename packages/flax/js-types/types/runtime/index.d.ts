export interface Binding<T> {
    readonly kind: 'binding';
    read(): T;
    observe(token: number): () => void;
}
export interface ReadonlySignal<T> {
    readonly value: T;
    readonly bind: Binding<T>;
}
export interface Signal<T> extends ReadonlySignal<T> {
    value: T;
}
/** A lazy property binding. Each mounted property owns a separate subscription. */
export declare function bind<T>(read: () => T): Binding<T>;
export declare function signal<T>(value: T): Signal<T>;
export declare function computed<T>(read: () => T): ReadonlySignal<T>;
export declare function batch<T>(action: () => T): T;
