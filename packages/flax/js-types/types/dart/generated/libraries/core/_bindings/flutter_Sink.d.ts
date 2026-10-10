import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
export interface Sink<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:dart:core::Sink": readonly [T];
}> {
    readonly __Sink: unique symbol;
}
export declare const Sink: object & _FlaxInstanceType<Sink<any>>;
