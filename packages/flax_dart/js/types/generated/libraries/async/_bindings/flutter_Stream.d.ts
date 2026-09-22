import { type DartIterableInput, type DartList, type DartSet } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_MultiStreamController';
import '@flax/dart/async/_bindings/flutter_MultiStreamController';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream3 from '@flax/dart/async/_bindings/flutter_EventSink';
import '@flax/dart/async/_bindings/flutter_EventSink';
import type * as upstream4 from '@flax/dart/async/_bindings/flutter_StreamSubscription';
import '@flax/dart/async/_bindings/flutter_StreamSubscription';
import type * as upstream5 from '@flax/dart/async/_bindings/flutter_StreamConsumer';
import '@flax/dart/async/_bindings/flutter_StreamConsumer';
import type * as upstream6 from '@flax/dart/async/_bindings/flutter_StreamTransformer';
import '@flax/dart/async/_bindings/flutter_StreamTransformer';
export interface Stream<T extends unknown | null = unknown | null> extends AsyncIterable<T> {
    readonly __Stream: unique symbol;
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
    map<S extends unknown | null = unknown | null>(convert: ((event: T) => S)): Stream<S>;
    asyncMap<E extends unknown | null = unknown | null>(convert: ((event: T) => E | Promise<E>)): Stream<E>;
    asyncExpand<E extends unknown | null = unknown | null>(convert: ((event: T) => Stream<E> | null)): Stream<E>;
    handleError(onError: ((p0: {}, p1?: upstream0.StackTrace) => void), options?: {
        test?: ((error: unknown | null) => boolean) | null | undefined;
    }): Stream<T>;
    expand<S extends unknown | null = unknown | null>(convert: ((element: T) => DartIterableInput<S, S>)): Stream<S>;
    pipe(streamConsumer: upstream5.StreamConsumer<T>): Promise<unknown | null>;
    transform<S extends unknown | null = unknown | null>(streamTransformer: upstream6.StreamTransformer<T, S>): Stream<S>;
    reduce(combine: ((previous: T, element: T) => T)): Promise<T>;
    fold<S extends unknown | null = unknown | null>(initialValue: S, combine: ((previous: S, element: T) => S)): Promise<S>;
    join(separator?: string): Promise<string>;
    contains(needle: unknown | null): Promise<boolean>;
    forEach(action: ((element: T) => void)): Promise<void>;
    every(test: ((element: T) => boolean)): Promise<boolean>;
    any(test: ((element: T) => boolean)): Promise<boolean>;
    cast<R extends unknown | null = unknown | null>(): Stream<R>;
    toList(): Promise<DartList<T>>;
    toSet(): Promise<DartSet<T>>;
    drain<E extends unknown | null = unknown | null>(futureValue?: E | null): Promise<E>;
    take(count: number): Stream<T>;
    takeWhile(test: ((element: T) => boolean)): Stream<T>;
    skip(count: number): Stream<T>;
    skipWhile(test: ((element: T) => boolean)): Stream<T>;
    distinct(equals?: ((previous: T, next: T) => boolean) | null): Stream<T>;
    firstWhere(test: ((element: T) => boolean), options?: {
        orElse?: (() => T) | null | undefined;
    }): Promise<T>;
    lastWhere(test: ((element: T) => boolean), options?: {
        orElse?: (() => T) | null | undefined;
    }): Promise<T>;
    singleWhere(test: ((element: T) => boolean), options?: {
        orElse?: (() => T) | null | undefined;
    }): Promise<T>;
    elementAt(index: number): Promise<T>;
    timeout(timeLimit: upstream2.Duration, options?: {
        onTimeout?: ((sink: upstream3.EventSink<T>) => void) | null | undefined;
    }): Stream<T>;
}
export declare namespace Stream {
    function fromAsyncIterable<T extends unknown | null>(source: AsyncIterable<T>): Stream<T>;
}
export declare namespace Stream {
    function empty<T extends unknown | null = unknown | null>(options?: {
        broadcast?: boolean | undefined;
    }): Stream<T>;
}
export declare namespace Stream {
    function value<T extends unknown | null = unknown | null>(value: T): Stream<T>;
}
export declare namespace Stream {
    function error<T extends unknown | null = unknown | null>(error: {}, stackTrace?: upstream0.StackTrace | null): Stream<T>;
}
export declare namespace Stream {
    function fromFuture<T extends unknown | null = unknown | null>(future: Promise<T>): Stream<T>;
}
export declare namespace Stream {
    function fromFutures<T extends unknown | null = unknown | null>(futures: DartIterableInput<Promise<T>, Promise<T>>): Stream<T>;
}
export declare namespace Stream {
    function fromIterable<T extends unknown | null = unknown | null>(elements: DartIterableInput<T, T>): Stream<T>;
}
export declare namespace Stream {
    function multi<T extends unknown | null = unknown | null>(onListen: ((p0: upstream1.MultiStreamController<T>) => void), options?: {
        isBroadcast?: boolean | undefined;
    }): Stream<T>;
}
export declare namespace Stream {
    function periodic<T extends unknown | null = unknown | null>(period: upstream2.Duration, computation?: ((computationCount: number) => T) | null): Stream<T>;
}
export declare namespace Stream {
    function eventTransformed<T extends unknown | null = unknown | null>(source: Stream<unknown | null>, mapSink: ((sink: upstream3.EventSink<T>) => upstream3.EventSink<unknown | null>)): Stream<T>;
}
export declare namespace Stream {
    function castFrom<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(source: Stream<S>): Stream<T>;
}
