import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_StreamSubscription';
import '@flax/dart/async/_bindings/flutter_StreamSubscription';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/async/_bindings/flutter_StreamConsumer';
import '@flax/dart/async/_bindings/flutter_StreamTransformer';
import '@flax/dart/core/_bindings/flutter_Duration';
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
    asBroadcastStream: upstream0.Stream<T>["asBroadcastStream"];
    listen(onData: ((value: T) => void) | null, options?: {
        cancelOnError?: boolean | null | undefined;
        onDone?: (() => void) | null | undefined;
        onError?: ((p0: {}, p1?: upstream2.StackTrace) => void) | null | undefined;
    }): upstream1.StreamSubscription<T>;
    where: upstream0.Stream<T>["where"];
    map: upstream0.Stream<T>["map"];
    asyncMap: upstream0.Stream<T>["asyncMap"];
    asyncExpand: upstream0.Stream<T>["asyncExpand"];
    handleError: upstream0.Stream<T>["handleError"];
    expand: upstream0.Stream<T>["expand"];
    pipe: upstream0.Stream<T>["pipe"];
    transform: upstream0.Stream<T>["transform"];
    reduce: upstream0.Stream<T>["reduce"];
    fold: upstream0.Stream<T>["fold"];
    join: upstream0.Stream<T>["join"];
    contains: upstream0.Stream<T>["contains"];
    forEach: upstream0.Stream<T>["forEach"];
    every: upstream0.Stream<T>["every"];
    any: upstream0.Stream<T>["any"];
    cast: upstream0.Stream<T>["cast"];
    toList: upstream0.Stream<T>["toList"];
    toSet: upstream0.Stream<T>["toSet"];
    drain: upstream0.Stream<T>["drain"];
    take: upstream0.Stream<T>["take"];
    takeWhile: upstream0.Stream<T>["takeWhile"];
    skip: upstream0.Stream<T>["skip"];
    skipWhile: upstream0.Stream<T>["skipWhile"];
    distinct: upstream0.Stream<T>["distinct"];
    firstWhere: upstream0.Stream<T>["firstWhere"];
    lastWhere: upstream0.Stream<T>["lastWhere"];
    singleWhere: upstream0.Stream<T>["singleWhere"];
    elementAt: upstream0.Stream<T>["elementAt"];
    timeout: upstream0.Stream<T>["timeout"];
}
export declare function _StreamViewFactory<T extends unknown | null = unknown | null>(stream: (upstream0.Stream<T> | upstream0.Stream<(T | DartInput<T>)>)): StreamView<T>;
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
