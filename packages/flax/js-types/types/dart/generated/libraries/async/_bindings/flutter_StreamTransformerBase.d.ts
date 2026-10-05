import type * as upstream0 from '@flax/dart/async/_bindings/flutter_StreamTransformer';
import '@flax/dart/async/_bindings/flutter_StreamTransformer';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_Stream';
export interface StreamTransformerBase<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null> extends upstream0.StreamTransformer<S, T>, Readonly<{
    "__flaxBound:dart:async::StreamTransformerBase": readonly [S, T];
}> {
    readonly __StreamTransformerBase: unique symbol;
}
export declare abstract class StreamTransformerBase<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null> {
    constructor();
    cast<RS extends unknown | null = unknown | null, RT extends unknown | null = unknown | null>(): upstream0.StreamTransformer<RS, RT>;
    abstract bind(stream: upstream1.Stream<S>): upstream1.Stream<T>;
}
export declare namespace StreamTransformerBase {
    function implement<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(args: [], implementation: {
        bind: ((stream: upstream1.Stream<S>) => upstream1.Stream<T>);
    }): StreamTransformerBase<S, T>;
}
