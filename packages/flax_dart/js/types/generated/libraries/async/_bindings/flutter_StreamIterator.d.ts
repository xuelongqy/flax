import type * as upstream0 from '@flax/dart/async/_bindings/flutter_Stream';
export interface StreamIterator<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:dart:async::StreamIterator": readonly [T];
}> {
    readonly __StreamIterator: unique symbol;
    readonly current: T;
    moveNext(): Promise<boolean>;
    cancel(): Promise<unknown | null>;
}
export declare function StreamIterator<T extends unknown | null = unknown | null>(stream: upstream0.Stream<T>): StreamIterator<T>;
