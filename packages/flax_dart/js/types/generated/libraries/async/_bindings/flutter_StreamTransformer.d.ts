import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import '@flax/dart/async/_bindings/flutter_StreamSubscription';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream2 from '@flax/dart/async/_bindings/flutter_EventSink';
import '@flax/dart/async/_bindings/flutter_EventSink';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StreamTransformer<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:dart:async::StreamTransformer": readonly [S, T];
}> {
    readonly __StreamTransformer: unique symbol;
    bind(stream: upstream1.Stream<S>): upstream1.Stream<T>;
    cast<RS extends unknown | null = unknown | null, RT extends unknown | null = unknown | null>(): StreamTransformer<_FlaxDartOutput<RS>, _FlaxDartOutput<RT>>;
}
declare function _StreamTransformerFactory(onListen: ((stream: upstream1.Stream<unknown | null>, cancelOnError: boolean) => Readonly<{
    "__flaxBound:dart:async::StreamSubscription": readonly [unknown | null];
}>)): StreamTransformer<unknown | null, unknown | null>;
declare namespace _StreamTransformerFactory {
    function fromHandlers(options?: {
        handleData?: ((data: unknown | null, sink: upstream2.EventSink<unknown | null>) => void) | null | undefined;
        handleError?: ((error: {}, stackTrace: upstream3.StackTrace, sink: upstream2.EventSink<unknown | null>) => void) | null | undefined;
        handleDone?: ((sink: upstream2.EventSink<unknown | null>) => void) | null | undefined;
    }): StreamTransformer<unknown | null, unknown | null>;
}
declare namespace _StreamTransformerFactory {
    function fromBind(bind: ((p0: upstream1.Stream<unknown | null>) => upstream1.Stream<unknown | null>)): StreamTransformer<unknown | null, unknown | null>;
}
declare namespace _StreamTransformerFactory {
    function implement<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(args: [], implementation: {
        bind: ((stream: upstream1.Stream<S>) => upstream1.Stream<T>);
        cast: (<RS extends unknown | null, RT extends unknown | null>() => Readonly<{
            "__flaxBound:dart:async::StreamTransformer": readonly [_FlaxDartOutput<RS>, _FlaxDartOutput<RT>];
        }>);
    }): StreamTransformer<S, T>;
}
declare namespace _StreamTransformerFactory {
    function castFrom<SS extends unknown | null = unknown | null, ST extends unknown | null = unknown | null, TS extends unknown | null = unknown | null, TT extends unknown | null = unknown | null>(source: Readonly<{
        "__flaxBound:dart:async::StreamTransformer": readonly [_FlaxDartOutput<SS>, _FlaxDartOutput<ST>];
    }>): StreamTransformer<_FlaxDartOutput<TS>, _FlaxDartOutput<TT>>;
}
export declare const StreamTransformer: typeof _StreamTransformerFactory & _FlaxInstanceType<StreamTransformer<unknown | null, unknown | null>> & _FlaxDartType<StreamTransformer<unknown | null, unknown | null>, readonly ["class", "flax.core/flutter#type:StreamTransformer", readonly [readonly ["any", null, readonly [], true], readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<{
    arguments: readonly [readonly ["any", null, readonly [], true], readonly ["any", null, readonly [], true]];
    value: {
        (onListen: ((stream: upstream1.Stream<unknown | null>, cancelOnError: boolean) => Readonly<{
            "__flaxBound:dart:async::StreamSubscription": readonly [unknown | null];
        }>)): StreamTransformer<unknown | null, unknown | null>;
        fromHandlers: (options?: {
            handleData?: ((data: unknown | null, sink: upstream2.EventSink<unknown | null>) => void) | null | undefined;
            handleError?: ((error: {}, stackTrace: upstream3.StackTrace, sink: upstream2.EventSink<unknown | null>) => void) | null | undefined;
            handleDone?: ((sink: upstream2.EventSink<unknown | null>) => void) | null | undefined;
        }) => StreamTransformer<unknown | null, unknown | null>;
        fromBind: (bind: ((p0: upstream1.Stream<unknown | null>) => upstream1.Stream<unknown | null>)) => StreamTransformer<unknown | null, unknown | null>;
        readonly prototype: StreamTransformer<unknown | null, unknown | null>;
        implement(args: [], implementation: {
            bind: ((stream: upstream1.Stream<unknown | null>) => upstream1.Stream<unknown | null>);
            cast: (<RS extends unknown | null, RT extends unknown | null>() => Readonly<{
                "__flaxBound:dart:async::StreamTransformer": readonly [unknown | null, unknown | null];
            }>);
        }): StreamTransformer<unknown | null, unknown | null>;
    } & _FlaxInstanceType<StreamTransformer<unknown | null, unknown | null>> & _FlaxDartType<StreamTransformer<unknown | null, unknown | null>, readonly ["class", "flax.core/flutter#type:StreamTransformer", readonly [readonly ["any", null, readonly [], true], readonly ["any", null, readonly [], true]], false]>;
}>;
export {};
