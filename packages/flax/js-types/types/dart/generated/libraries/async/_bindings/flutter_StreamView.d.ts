import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput, type DartList, type DartSet, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_StreamSubscription';
import '@flax/dart/async/_bindings/flutter_StreamSubscription';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/async/_bindings/flutter_StreamConsumer';
import '@flax/dart/async/_bindings/flutter_StreamTransformer';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream6 from '@flax/dart/async/_bindings/flutter_EventSink';
import '@flax/dart/async/_bindings/flutter_EventSink';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StreamView<T extends unknown | null = unknown | null> extends AsyncIterable<T> {
    readonly __StreamView: unique symbol;
    readonly [_flaxDartMethodCases]?: {
        map: _FlaxSignature1<T>;
        asyncMap: _FlaxSignature2<T>;
        asyncExpand: _FlaxSignature3<T>;
        expand: _FlaxSignature4<T>;
        transform: _FlaxSignature5<T>;
        fold: _FlaxSignature6<T>;
        cast: _FlaxSignature7<T>;
        drain: _FlaxSignature8<T>;
    };
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
    map<S extends unknown | null = unknown | null>(convert: ((event: T) => (S | _FlaxDartOutput<S>))): upstream0.Stream<_FlaxDartOutput<S>>;
    asyncMap<E extends unknown | null = unknown | null>(convert: ((event: T) => (E | _FlaxDartOutput<E>) | Promise<(E | _FlaxDartOutput<E>)>)): upstream0.Stream<_FlaxDartOutput<E>>;
    asyncExpand<E extends unknown | null = unknown | null>(convert: ((event: T) => (upstream0.Stream<_FlaxDartOutput<E>> | upstream0.Stream<(E | _FlaxDartOutput<E>)>) | null)): upstream0.Stream<_FlaxDartOutput<E>>;
    handleError(onError: ((p0: {}, p1?: upstream2.StackTrace) => void), options?: {
        test?: ((error: unknown | null) => boolean) | null | undefined;
    }): upstream0.Stream<T>;
    expand<S extends unknown | null = unknown | null>(convert: ((element: T) => DartIterableInput<_FlaxDartOutput<S>, (S | _FlaxDartOutput<S>)>)): upstream0.Stream<_FlaxDartOutput<S>>;
    pipe(streamConsumer: Readonly<{
        "__flaxBound:dart:async::StreamConsumer": readonly [T];
    }>): Promise<unknown | null>;
    transform<S extends unknown | null = unknown | null>(streamTransformer: Readonly<{
        "__flaxBound:dart:async::StreamTransformer": readonly [T, _FlaxDartOutput<S>];
    }>): upstream0.Stream<_FlaxDartOutput<S>>;
    reduce(combine: ((previous: T, element: T) => (T | DartInput<T>))): Promise<T>;
    fold<S extends unknown | null = unknown | null>(initialValue: (S | _FlaxDartOutput<S>), combine: ((previous: _FlaxDartOutput<S>, element: T) => (S | _FlaxDartOutput<S>))): Promise<_FlaxDartOutput<S>>;
    join(separator?: string): Promise<string>;
    contains(needle: unknown | null): Promise<boolean>;
    forEach(action: ((element: T) => void)): Promise<void>;
    every(test: ((element: T) => boolean)): Promise<boolean>;
    any(test: ((element: T) => boolean)): Promise<boolean>;
    cast<R extends unknown | null = unknown | null>(): upstream0.Stream<_FlaxDartOutput<R>>;
    toList(): Promise<DartList<T>>;
    toSet(): Promise<DartSet<T>>;
    drain<E extends unknown | null = unknown | null>(futureValue?: (E | _FlaxDartOutput<E>) | null): Promise<_FlaxDartOutput<E>>;
    take(count: number): upstream0.Stream<T>;
    takeWhile(test: ((element: T) => boolean)): upstream0.Stream<T>;
    skip(count: number): upstream0.Stream<T>;
    skipWhile(test: ((element: T) => boolean)): upstream0.Stream<T>;
    distinct(equals?: ((previous: T, next: T) => boolean) | null): upstream0.Stream<T>;
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
        onTimeout?: ((sink: upstream6.EventSink<T>) => void) | null | undefined;
    }): upstream0.Stream<T>;
}
declare function _StreamViewFactory<T extends unknown | null = unknown | null>(stream: (upstream0.Stream<T> | upstream0.Stream<(T | DartInput<T>)>)): StreamView<T>;
export declare const StreamView: typeof _StreamViewFactory & _FlaxInstanceType<StreamView<unknown | null>> & _FlaxDartType<StreamView<unknown | null>, readonly ["class", "flax.core/flutter#type:StreamView", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        (stream: (upstream0.Stream<_Selected0> | upstream0.Stream<(_Selected0 | DartInput<_Selected0>)>)): StreamView<_Selected0>;
        readonly prototype: StreamView<_Selected0>;
    } & _FlaxInstanceType<StreamView<_Selected0>> & _FlaxDartType<StreamView<_Selected0>> : never : never;
}
interface _FlaxSignature1<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((event: _OwnerType0) => (_Selected0 | DartInput<_Selected0>))) => upstream0.Stream<_Selected0> : never : never;
}
interface _FlaxSignature2<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((event: _OwnerType0) => (_Selected0 | DartInput<_Selected0>) | Promise<(_Selected0 | DartInput<_Selected0>)>)) => upstream0.Stream<_Selected0> : never : never;
}
interface _FlaxSignature3<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((event: _OwnerType0) => (upstream0.Stream<_Selected0> | upstream0.Stream<(_Selected0 | DartInput<_Selected0>)>) | null)) => upstream0.Stream<_Selected0> : never : never;
}
interface _FlaxSignature4<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((element: _OwnerType0) => DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>)) => upstream0.Stream<_Selected0> : never : never;
}
interface _FlaxSignature5<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (streamTransformer: Readonly<{
        "__flaxBound:dart:async::StreamTransformer": readonly [_OwnerType0, _Selected0];
    }>) => upstream0.Stream<_Selected0> : never : never;
}
interface _FlaxSignature6<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (initialValue: (_Selected0 | DartInput<_Selected0>), combine: ((previous: _Selected0, element: _OwnerType0) => (_Selected0 | DartInput<_Selected0>))) => Promise<_Selected0> : never : never;
}
interface _FlaxSignature7<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => upstream0.Stream<_Selected0> : never : never;
}
interface _FlaxSignature8<_OwnerType0 extends unknown | null> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (futureValue?: (_Selected0 | DartInput<_Selected0>) | null) => Promise<_Selected0> : never : never;
}
export {};
