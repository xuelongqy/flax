import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
export interface Iterator<E extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:dart:core::Iterator": readonly [E];
}> {
    readonly __Iterator: unique symbol;
    readonly current: E;
    moveNext(): boolean;
}
export declare const Iterator: object & _FlaxInstanceType<Iterator<any>>;
