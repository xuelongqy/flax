import { type DartIterableInput, type DartList, type DartSet } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_StreamSubscription';
import '@flax/dart/async/_bindings/flutter_StreamSubscription';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream3 from '@flax/dart/async/_bindings/flutter_StreamConsumer';
import '@flax/dart/async/_bindings/flutter_StreamConsumer';
import type * as upstream4 from '@flax/dart/async/_bindings/flutter_StreamTransformer';
import '@flax/dart/async/_bindings/flutter_StreamTransformer';
import type * as upstream5 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream6 from '@flax/dart/async/_bindings/flutter_EventSink';
import '@flax/dart/async/_bindings/flutter_EventSink';
export interface StreamView<T extends unknown | null = unknown | null> extends AsyncIterable<T> {
    readonly __StreamView: unique symbol;
    readonly isBroadcast: boolean;
    readonly length: Promise<number>;
    readonly isEmpty: Promise<boolean>;
    readonly first: Promise<T>;
    readonly last: Promise<T>;
    readonly single: Promise<T>;
    asBroadcastStream(options?: {
        onCancel?: ((subscription: upstream1.StreamSubscription<T>) => void) | null | undefined;
        onListen?: ((subscription: upstream1.StreamSubscription<T>) => void) | null | undefined;
    }): upstream0.Stream<T>;
    listen(onData: ((value: T) => void) | null, options?: {
        cancelOnError?: boolean | null | undefined;
        onDone?: (() => void) | null | undefined;
        onError?: ((p0: {}, p1?: upstream2.StackTrace) => void) | null | undefined;
    }): upstream1.StreamSubscription<T>;
    where(test: ((event: T) => boolean)): upstream0.Stream<T>;
    map<S extends unknown | null = unknown | null>(convert: ((event: T) => S)): upstream0.Stream<S>;
    asyncMap<E extends unknown | null = unknown | null>(convert: ((event: T) => E | Promise<E>)): upstream0.Stream<E>;
    asyncExpand<E extends unknown | null = unknown | null>(convert: ((event: T) => upstream0.Stream<E> | null)): upstream0.Stream<E>;
    handleError(onError: ((p0: {}, p1?: upstream2.StackTrace) => void), options?: {
        test?: ((error: unknown | null) => boolean) | null | undefined;
    }): upstream0.Stream<T>;
    expand<S extends unknown | null = unknown | null>(convert: ((element: T) => DartIterableInput<S, S>)): upstream0.Stream<S>;
    pipe(streamConsumer: upstream3.StreamConsumer<T>): Promise<unknown | null>;
    transform<S extends unknown | null = unknown | null>(streamTransformer: upstream4.StreamTransformer<T, S>): upstream0.Stream<S>;
    reduce(combine: ((previous: T, element: T) => T)): Promise<T>;
    fold<S extends unknown | null = unknown | null>(initialValue: S, combine: ((previous: S, element: T) => S)): Promise<S>;
    join(separator?: string): Promise<string>;
    contains(needle: unknown | null): Promise<boolean>;
    forEach(action: ((element: T) => void)): Promise<void>;
    every(test: ((element: T) => boolean)): Promise<boolean>;
    any(test: ((element: T) => boolean)): Promise<boolean>;
    cast<R extends unknown | null = unknown | null>(): upstream0.Stream<R>;
    toList(): Promise<DartList<T>>;
    toSet(): Promise<DartSet<T>>;
    drain<E extends unknown | null = unknown | null>(futureValue?: E | null): Promise<E>;
    take(count: number): upstream0.Stream<T>;
    takeWhile(test: ((element: T) => boolean)): upstream0.Stream<T>;
    skip(count: number): upstream0.Stream<T>;
    skipWhile(test: ((element: T) => boolean)): upstream0.Stream<T>;
    distinct(equals?: ((previous: T, next: T) => boolean) | null): upstream0.Stream<T>;
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
    timeout(timeLimit: upstream5.Duration, options?: {
        onTimeout?: ((sink: upstream6.EventSink<T>) => void) | null | undefined;
    }): upstream0.Stream<T>;
}
export declare function StreamView<T extends unknown | null = unknown | null>(stream: upstream0.Stream<T>): StreamView<T>;
