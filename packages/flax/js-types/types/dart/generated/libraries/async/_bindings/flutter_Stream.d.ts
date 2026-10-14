import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput, type DartList, type DartSet, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_MultiStreamController';
import '@flax/dart/async/_bindings/flutter_MultiStreamController';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream3 from '@flax/dart/async/_bindings/flutter_EventSink';
import '@flax/dart/async/_bindings/flutter_EventSink';
import type * as upstream4 from '@flax/dart/async/_bindings/flutter_StreamSubscription';
import '@flax/dart/async/_bindings/flutter_StreamSubscription';
import '@flax/dart/async/_bindings/flutter_StreamConsumer';
import '@flax/dart/async/_bindings/flutter_StreamTransformer';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Stream<T extends unknown | null = unknown | null> extends AsyncIterable<T> {
    readonly __Stream: unique symbol;
    readonly [_flaxDartMethodCases]?: {
        map: _FlaxSignature2<T>;
        asyncMap: _FlaxSignature3<T>;
        asyncExpand: _FlaxSignature4<T>;
        expand: _FlaxSignature5<T>;
        transform: _FlaxSignature6<T>;
        fold: _FlaxSignature7<T>;
        cast: _FlaxSignature8<T>;
        drain: _FlaxSignature9<T>;
    };
    readonly isBroadcast: boolean;
    readonly length: Promise<number>;
    readonly isEmpty: Promise<boolean>;
    readonly first: Promise<T>;
    readonly last: Promise<T>;
    readonly single: Promise<T>;
    asBroadcastStream(options?: {
        onCancel?: ((subscription: upstream4.StreamSubscription<T>) => void) | null | undefined;
        onListen?: ((subscription: upstream4.StreamSubscription<T>) => void) | null | undefined;
    }): Stream<T>;
    listen(onData: ((event: T) => void) | null, options?: {
        cancelOnError?: boolean | null | undefined;
        onDone?: (() => void) | null | undefined;
        onError?: ((p0: {}, p1?: upstream0.StackTrace) => void) | null | undefined;
    }): upstream4.StreamSubscription<T>;
    where(test: ((event: T) => boolean)): Stream<T>;
    map<S extends unknown | null = unknown | null>(convert: ((event: T) => (S | _FlaxDartOutput<S>))): Stream<_FlaxDartOutput<S>>;
    asyncMap<E extends unknown | null = unknown | null>(convert: ((event: T) => (E | _FlaxDartOutput<E>) | Promise<(E | _FlaxDartOutput<E>)>)): Stream<_FlaxDartOutput<E>>;
    asyncExpand<E extends unknown | null = unknown | null>(convert: ((event: T) => (Stream<_FlaxDartOutput<E>> | Stream<(E | _FlaxDartOutput<E>)>) | null)): Stream<_FlaxDartOutput<E>>;
    handleError(onError: ((p0: {}, p1?: upstream0.StackTrace) => void), options?: {
        test?: ((error: unknown | null) => boolean) | null | undefined;
    }): Stream<T>;
    expand<S extends unknown | null = unknown | null>(convert: ((element: T) => DartIterableInput<_FlaxDartOutput<S>, (S | _FlaxDartOutput<S>)>)): Stream<_FlaxDartOutput<S>>;
    pipe(streamConsumer: Readonly<{
        "__flaxBound:dart:async::StreamConsumer": readonly [T];
    }>): Promise<unknown | null>;
    transform<S extends unknown | null = unknown | null>(streamTransformer: Readonly<{
        "__flaxBound:dart:async::StreamTransformer": readonly [T, _FlaxDartOutput<S>];
    }>): Stream<_FlaxDartOutput<S>>;
    reduce(combine: ((previous: T, element: T) => (T | DartInput<T>))): Promise<T>;
    fold<S extends unknown | null = unknown | null>(initialValue: (S | _FlaxDartOutput<S>), combine: ((previous: _FlaxDartOutput<S>, element: T) => (S | _FlaxDartOutput<S>))): Promise<_FlaxDartOutput<S>>;
    join(separator?: string): Promise<string>;
    contains(needle: unknown | null): Promise<boolean>;
    forEach(action: ((element: T) => void)): Promise<void>;
    every(test: ((element: T) => boolean)): Promise<boolean>;
    any(test: ((element: T) => boolean)): Promise<boolean>;
    cast<R extends unknown | null = unknown | null>(): Stream<_FlaxDartOutput<R>>;
    toList(): Promise<DartList<T>>;
    toSet(): Promise<DartSet<T>>;
    drain<E extends unknown | null = unknown | null>(futureValue?: (E | _FlaxDartOutput<E>) | null): Promise<_FlaxDartOutput<E>>;
    take(count: number): Stream<T>;
    takeWhile(test: ((element: T) => boolean)): Stream<T>;
    skip(count: number): Stream<T>;
    skipWhile(test: ((element: T) => boolean)): Stream<T>;
    distinct(equals?: ((previous: T, next: T) => boolean) | null): Stream<T>;
    firstWhere(test: ((element: T) => boolean), options?: {
        orElse?: (() => (T | DartInput<T>)) | null | undefined;
    }): Promise<T>;
    lastWhere(test: ((element: T) => boolean), options?: {
        orElse?: (() => (T | DartInput<T>)) | null | undefined;
    }): Promise<T>;
    singleWhere(test: ((element: T) => boolean), options?: {
        orElse?: (() => (T | DartInput<T>)) | null | undefined;
    }): Promise<T>;
    elementAt(index: number): Promise<T>;
    timeout(timeLimit: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }>, options?: {
        onTimeout?: ((sink: upstream3.EventSink<T>) => void) | null | undefined;
    }): Stream<T>;
}
declare namespace _StreamFactory {
    function fromAsyncIterable<T extends unknown | null>(source: AsyncIterable<T>): Stream<T>;
}
declare namespace _StreamFactory {
    function empty<T extends unknown | null = unknown | null>(options?: {
        broadcast?: boolean | undefined;
    }): Stream<T>;
}
declare namespace _StreamFactory {
    function value<T extends unknown | null = unknown | null>(value: (T | DartInput<T>)): Stream<T>;
}
declare namespace _StreamFactory {
    function error<T extends unknown | null = unknown | null>(error: {}, stackTrace?: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null): Stream<T>;
}
declare namespace _StreamFactory {
    function fromFuture<T extends unknown | null = unknown | null>(future: Promise<(T | DartInput<T>)>): Stream<T>;
}
declare namespace _StreamFactory {
    function fromFutures<T extends unknown | null = unknown | null>(futures: DartIterableInput<Promise<T>, Promise<(T | DartInput<T>)>>): Stream<T>;
}
declare namespace _StreamFactory {
    function fromIterable<T extends unknown | null = unknown | null>(elements: DartIterableInput<T, (T | DartInput<T>)>): Stream<T>;
}
declare namespace _StreamFactory {
    function multi<T extends unknown | null = unknown | null>(onListen: ((p0: upstream1.MultiStreamController<T>) => void), options?: {
        isBroadcast?: boolean | undefined;
    }): Stream<T>;
}
declare namespace _StreamFactory {
    function periodic<T extends unknown | null = unknown | null>(period: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }>, computation?: ((computationCount: number) => (T | DartInput<T>)) | null): Stream<T>;
}
declare namespace _StreamFactory {
    function eventTransformed<T extends unknown | null = unknown | null>(source: Stream<unknown | null>, mapSink: ((sink: upstream3.EventSink<T>) => Readonly<{
        "__flaxBound:dart:async::EventSink": readonly [unknown | null];
    }>)): Stream<T>;
}
declare namespace _StreamFactory {
    function _flaxDefault_castFrom<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(source: (Stream<_FlaxDartOutput<S>> | Stream<(S | _FlaxDartOutput<S>)>)): Stream<_FlaxDartOutput<T>>;
    export const castFrom: _FlaxDartCallable<typeof _flaxDefault_castFrom, _FlaxSignature1>;
    export {};
}
export declare const Stream: typeof _StreamFactory & _FlaxInstanceType<Stream<unknown | null>> & _FlaxDartType<Stream<unknown | null>, readonly ["class", "flax.core/flutter#type:Stream", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        empty: (options?: {
            broadcast?: boolean | undefined;
        }) => Stream<_Selected0>;
        value: (value: (_Selected0 | DartInput<_Selected0>)) => Stream<_Selected0>;
        error: (error: {}, stackTrace?: Readonly<{
            "__flaxBound:dart:core::StackTrace": readonly [];
        }> | null) => Stream<_Selected0>;
        fromFuture: (future: Promise<(_Selected0 | DartInput<_Selected0>)>) => Stream<_Selected0>;
        fromFutures: (futures: DartIterableInput<Promise<_Selected0>, Promise<(_Selected0 | DartInput<_Selected0>)>>) => Stream<_Selected0>;
        fromIterable: (elements: DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>) => Stream<_Selected0>;
        multi: (onListen: ((p0: upstream1.MultiStreamController<_Selected0>) => void), options?: {
            isBroadcast?: boolean | undefined;
        }) => Stream<_Selected0>;
        periodic: (period: Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }>, computation?: ((computationCount: number) => (_Selected0 | DartInput<_Selected0>)) | null) => Stream<_Selected0>;
        eventTransformed: (source: Stream<unknown | null>, mapSink: ((sink: upstream3.EventSink<_Selected0>) => Readonly<{
            "__flaxBound:dart:async::EventSink": readonly [unknown | null];
        }>)) => Stream<_Selected0>;
        readonly prototype: Stream<_Selected0>;
    } & _FlaxInstanceType<Stream<_Selected0>> & _FlaxDartType<Stream<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (source: (Stream<_Selected0> | Stream<(_Selected0 | DartInput<_Selected0>)>)) => Stream<_Selected1> : never : never : never;
}
interface _FlaxSignature2<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((event: _OwnerType0) => (_Selected0 | DartInput<_Selected0>))) => Stream<_Selected0> : never : never;
}
interface _FlaxSignature3<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((event: _OwnerType0) => (_Selected0 | DartInput<_Selected0>) | Promise<(_Selected0 | DartInput<_Selected0>)>)) => Stream<_Selected0> : never : never;
}
interface _FlaxSignature4<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((event: _OwnerType0) => (Stream<_Selected0> | Stream<(_Selected0 | DartInput<_Selected0>)>) | null)) => Stream<_Selected0> : never : never;
}
interface _FlaxSignature5<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((element: _OwnerType0) => DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>)) => Stream<_Selected0> : never : never;
}
interface _FlaxSignature6<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (streamTransformer: Readonly<{
        "__flaxBound:dart:async::StreamTransformer": readonly [_OwnerType0, _Selected0];
    }>) => Stream<_Selected0> : never : never;
}
interface _FlaxSignature7<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (initialValue: (_Selected0 | DartInput<_Selected0>), combine: ((previous: _Selected0, element: _OwnerType0) => (_Selected0 | DartInput<_Selected0>))) => Promise<_Selected0> : never : never;
}
interface _FlaxSignature8<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => Stream<_Selected0> : never : never;
}
interface _FlaxSignature9<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (futureValue?: (_Selected0 | DartInput<_Selected0>) | null) => Promise<_Selected0> : never : never;
}
export {};
