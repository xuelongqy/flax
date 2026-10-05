import type * as upstream0 from '@flax/dart/async/_bindings/flutter_Stream';
export interface StreamConsumer<S extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:dart:async::StreamConsumer": readonly [S];
}> {
    readonly __StreamConsumer: unique symbol;
    addStream(stream: upstream0.Stream<S>): Promise<unknown | null>;
    close(): Promise<unknown | null>;
}
export declare namespace StreamConsumer {
    function implement<S extends unknown | null = unknown | null>(args: [], implementation: {
        addStream: ((stream: upstream0.Stream<S>) => Promise<unknown | null>);
        close: (() => Promise<unknown | null>);
    }): StreamConsumer<S>;
}
