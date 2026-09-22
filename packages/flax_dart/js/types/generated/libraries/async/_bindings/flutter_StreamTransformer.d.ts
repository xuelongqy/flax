import type * as upstream0 from '@flax/dart/async/_bindings/flutter_StreamSubscription';
import '@flax/dart/async/_bindings/flutter_StreamSubscription';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream2 from '@flax/dart/async/_bindings/flutter_EventSink';
import '@flax/dart/async/_bindings/flutter_EventSink';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
export interface StreamTransformer<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:dart:async::StreamTransformer": readonly [S, T];
}> {
    readonly __StreamTransformer: unique symbol;
    bind(stream: upstream1.Stream<S>): upstream1.Stream<T>;
    cast<RS extends unknown | null = unknown | null, RT extends unknown | null = unknown | null>(): StreamTransformer<RS, RT>;
}
export declare function StreamTransformer<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(onListen: ((stream: upstream1.Stream<S>, cancelOnError: boolean) => upstream0.StreamSubscription<T>)): StreamTransformer<S, T>;
export declare namespace StreamTransformer {
    function fromHandlers<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(options?: {
        handleData?: ((data: S, sink: upstream2.EventSink<T>) => void) | null | undefined;
        handleError?: ((error: {}, stackTrace: upstream3.StackTrace, sink: upstream2.EventSink<T>) => void) | null | undefined;
        handleDone?: ((sink: upstream2.EventSink<T>) => void) | null | undefined;
    }): StreamTransformer<S, T>;
}
export declare namespace StreamTransformer {
    function fromBind<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(bind: ((p0: upstream1.Stream<S>) => upstream1.Stream<T>)): StreamTransformer<S, T>;
}
export declare namespace StreamTransformer {
    function implement<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(args: [], implementation: {
        bind: ((stream: upstream1.Stream<S>) => upstream1.Stream<T>);
        cast: (<RS extends unknown | null, RT extends unknown | null>() => StreamTransformer<RS, RT>);
    }): StreamTransformer<S, T>;
}
export declare namespace StreamTransformer {
    function castFrom<SS extends unknown | null = unknown | null, ST extends unknown | null = unknown | null, TS extends unknown | null = unknown | null, TT extends unknown | null = unknown | null>(source: StreamTransformer<SS, ST>): StreamTransformer<TS, TT>;
}
