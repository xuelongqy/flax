type ReferenceHandle = {
    type: string;
    id: number;
    alive: boolean;
};
/** Weak aliases share one Dart identity; the cache never roots a JS wrapper. */
export declare class ReferenceCache {
    readonly handles: WeakMap<object, ReferenceHandle>;
    private readonly aliases;
    private cursor;
    private uncached?;
    private uncachedFinalizer?;
    get(type: string, id: number): object | null;
    track(value: object, type: string, id: number): void;
    trackUncached(value: object, type: string, id: number): void;
    private forgetUncached;
    releaseUncached(value: object): void;
    transfer(source: object, target: object): void;
    release(id: number): void;
    sweep(): number[];
}
export {};
