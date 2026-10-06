/** Weak aliases share one Dart identity; the cache never roots a JS wrapper. */
export declare class ReferenceCache {
    readonly handles: WeakMap<object, {
        type: string;
        id: number;
        alive: boolean;
    }>;
    private readonly aliases;
    private cursor;
    get(type: string, id: number): object | null;
    track(value: object, type: string, id: number): void;
    transfer(source: object, target: object): void;
    release(id: number): void;
    sweep(): number[];
}
