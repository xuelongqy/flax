import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import '@flax/dart/async/_bindings/flutter_StreamSubscription';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream2 from '@flax/dart/async/_bindings/flutter_EventSink';
import '@flax/dart/async/_bindings/flutter_EventSink';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StreamTransformer<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:dart:async::StreamTransformer": readonly [S, T];
}> {
    readonly __StreamTransformer: unique symbol;
    readonly [_flaxDartMethodCases]?: {
        cast: _FlaxSignature2<S, T>;
    };
    bind(stream: (upstream1.Stream<S> | upstream1.Stream<(S | DartInput<S>)>)): upstream1.Stream<T>;
    cast<RS extends unknown | null = unknown | null, RT extends unknown | null = unknown | null>(): StreamTransformer<_FlaxDartOutput<RS>, _FlaxDartOutput<RT>>;
}
export declare function _StreamTransformerFactory<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(onListen: ((stream: upstream1.Stream<_FlaxDartOutput<S>>, cancelOnError: boolean) => Readonly<{
    "__flaxBound:dart:async::StreamSubscription": readonly [_FlaxDartOutput<T>];
}>)): StreamTransformer<S, T>;
export declare function _StreamTransformerFactory(onListen: ((stream: upstream1.Stream<unknown | null>, cancelOnError: boolean) => Readonly<{
    "__flaxBound:dart:async::StreamSubscription": readonly [unknown | null];
}>)): StreamTransformer<unknown | null, unknown | null>;
export declare namespace _StreamTransformerFactory {
    function fromHandlers<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(options?: {
        handleData?: ((data: _FlaxDartOutput<S>, sink: upstream2.EventSink<_FlaxDartOutput<T>>) => void) | null | undefined;
        handleError?: ((error: {}, stackTrace: upstream3.StackTrace, sink: upstream2.EventSink<_FlaxDartOutput<T>>) => void) | null | undefined;
        handleDone?: ((sink: upstream2.EventSink<_FlaxDartOutput<T>>) => void) | null | undefined;
    }): StreamTransformer<S, T>;
    function fromHandlers(options?: {
        handleData?: ((data: unknown | null, sink: upstream2.EventSink<unknown | null>) => void) | null | undefined;
        handleError?: ((error: {}, stackTrace: upstream3.StackTrace, sink: upstream2.EventSink<unknown | null>) => void) | null | undefined;
        handleDone?: ((sink: upstream2.EventSink<unknown | null>) => void) | null | undefined;
    }): StreamTransformer<unknown | null, unknown | null>;
}
export declare namespace _StreamTransformerFactory {
    function fromBind<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(bind: ((p0: upstream1.Stream<_FlaxDartOutput<S>>) => (upstream1.Stream<_FlaxDartOutput<T>> | upstream1.Stream<(T | _FlaxDartOutput<T>)>))): StreamTransformer<S, T>;
    function fromBind(bind: ((p0: upstream1.Stream<unknown | null>) => upstream1.Stream<unknown | null>)): StreamTransformer<unknown | null, unknown | null>;
}
export declare namespace _StreamTransformerFactory {
    function implement<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(args: [], implementation: {
        bind: ((stream: upstream1.Stream<S>) => (upstream1.Stream<T> | upstream1.Stream<(T | DartInput<T>)>));
        cast: (<RS extends unknown | null, RT extends unknown | null>() => Readonly<{
            "__flaxBound:dart:async::StreamTransformer": readonly [_FlaxDartOutput<RS>, _FlaxDartOutput<RT>];
        }>);
    }): StreamTransformer<S, T>;
}
export declare namespace _StreamTransformerFactory {
    function _flaxDefault_castFrom<SS extends unknown | null = unknown | null, ST extends unknown | null = unknown | null, TS extends unknown | null = unknown | null, TT extends unknown | null = unknown | null>(source: Readonly<{
        "__flaxBound:dart:async::StreamTransformer": readonly [_FlaxDartOutput<SS>, _FlaxDartOutput<ST>];
    }>): StreamTransformer<_FlaxDartOutput<TS>, _FlaxDartOutput<TT>>;
    export const castFrom: _FlaxDartCallable<typeof _flaxDefault_castFrom, _FlaxSignature1>;
    export {};
}
export declare const StreamTransformer: typeof _StreamTransformerFactory & _FlaxInstanceType<StreamTransformer<unknown | null, unknown | null>> & _FlaxDartType<StreamTransformer<unknown | null, unknown | null>, readonly ["class", "flax.core/flutter#type:StreamTransformer", readonly [readonly ["any", null, readonly [], true], readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? {
        (onListen: ((stream: upstream1.Stream<_Selected0>, cancelOnError: boolean) => Readonly<{
            "__flaxBound:dart:async::StreamSubscription": readonly [_Selected1];
        }>)): StreamTransformer<_Selected0, _Selected1>;
        fromHandlers: (options?: {
            handleData?: ((data: _Selected0, sink: upstream2.EventSink<_Selected1>) => void) | null | undefined;
            handleError?: ((error: {}, stackTrace: upstream3.StackTrace, sink: upstream2.EventSink<_Selected1>) => void) | null | undefined;
            handleDone?: ((sink: upstream2.EventSink<_Selected1>) => void) | null | undefined;
        }) => StreamTransformer<_Selected0, _Selected1>;
        fromBind: (bind: ((p0: upstream1.Stream<_Selected0>) => (upstream1.Stream<_Selected1> | upstream1.Stream<(_Selected1 | DartInput<_Selected1>)>))) => StreamTransformer<_Selected0, _Selected1>;
        readonly prototype: StreamTransformer<_Selected0, _Selected1>;
        implement(args: readonly [], implementation: Partial<StreamTransformer<_Selected0, _Selected1>>): StreamTransformer<_Selected0, _Selected1>;
    } & _FlaxInstanceType<StreamTransformer<_Selected0, _Selected1>> & _FlaxDartType<StreamTransformer<_Selected0, _Selected1>> : never : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1, infer _Selected2, infer _Selected3] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? [_Selected2] extends [unknown | null] ? [_Selected3] extends [unknown | null] ? (source: Readonly<{
        "__flaxBound:dart:async::StreamTransformer": readonly [_Selected0, _Selected1];
    }>) => StreamTransformer<_Selected2, _Selected3> : never : never : never : never : never;
}
interface _FlaxSignature2<_OwnerType0 extends unknown | null, _OwnerType1 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? () => StreamTransformer<_Selected0, _Selected1> : never : never : never;
}
export {};
