import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput, type DartList, type DartInput } from '@flax/core/bindings';
import type { DartFunction as _FlaxDartFunction } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_Stream';
import '@flax/dart/core/_bindings/flutter_Uri';
import type * as upstream2 from '@flax/dart/async/_bindings/flutter_StreamSubscription';
import '@flax/dart/async/_bindings/flutter_StreamSubscription';
import '@flax/dart/async/_bindings/flutter_StreamConsumer';
import '@flax/dart/async/_bindings/flutter_StreamTransformer';
import '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/async/_bindings/flutter_EventSink';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface HttpClientResponse extends Omit<upstream0.Stream<DartList<number>>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:dart:_http::HttpClientResponse": readonly [];
}>, Readonly<{
    "__flaxBound:dart:async::Stream": readonly [DartList<number>];
}> {
    readonly __HttpClientResponse: unique symbol;
    readonly [_flaxDartTypeValue]: HttpClientResponse;
    readonly [_flaxDartMethodCases]?: {
        map: _FlaxSignature0;
        asyncMap: _FlaxSignature1;
        asyncExpand: _FlaxSignature2;
        expand: _FlaxSignature3;
        transform: _FlaxSignature4;
        fold: _FlaxSignature5;
        cast: _FlaxSignature6;
        drain: _FlaxSignature7;
    };
    readonly statusCode: number;
    readonly reasonPhrase: string;
    readonly contentLength: number;
    readonly persistentConnection: boolean;
    readonly isRedirect: boolean;
    readonly isBroadcast: boolean;
    readonly length: Promise<number>;
    readonly isEmpty: Promise<boolean>;
    readonly first: Promise<DartList<number>>;
    readonly last: Promise<DartList<number>>;
    readonly single: Promise<DartList<number>>;
    redirect(method?: string | null, url?: DartInput<Readonly<{
        "__flaxBound:dart:core::Uri": readonly [];
    }>> | null, followLoops?: boolean | null): Promise<HttpClientResponse>;
    asBroadcastStream: upstream0.Stream<DartList<number>>["asBroadcastStream"];
    listen(onData: ((event: DartList<number>) => void) | null, options?: {
        cancelOnError?: boolean | null | undefined;
        onDone?: (() => void) | null | undefined;
        onError?: _FlaxDartFunction | null | undefined;
    }): upstream2.StreamSubscription<DartList<number>>;
    where: upstream0.Stream<DartList<number>>["where"];
    map: upstream0.Stream<DartList<number>>["map"];
    asyncMap: upstream0.Stream<DartList<number>>["asyncMap"];
    asyncExpand: upstream0.Stream<DartList<number>>["asyncExpand"];
    handleError(onError: _FlaxDartFunction, options?: {
        test?: ((error: unknown | null) => boolean) | null | undefined;
    }): upstream0.Stream<DartList<number>>;
    expand: upstream0.Stream<DartList<number>>["expand"];
    pipe: upstream0.Stream<DartList<number>>["pipe"];
    transform: upstream0.Stream<DartList<number>>["transform"];
    reduce: upstream0.Stream<DartList<number>>["reduce"];
    fold: upstream0.Stream<DartList<number>>["fold"];
    join: upstream0.Stream<DartList<number>>["join"];
    contains: upstream0.Stream<DartList<number>>["contains"];
    forEach: upstream0.Stream<DartList<number>>["forEach"];
    every: upstream0.Stream<DartList<number>>["every"];
    any: upstream0.Stream<DartList<number>>["any"];
    cast: upstream0.Stream<DartList<number>>["cast"];
    toList: upstream0.Stream<DartList<number>>["toList"];
    toSet: upstream0.Stream<DartList<number>>["toSet"];
    drain: upstream0.Stream<DartList<number>>["drain"];
    take: upstream0.Stream<DartList<number>>["take"];
    takeWhile: upstream0.Stream<DartList<number>>["takeWhile"];
    skip: upstream0.Stream<DartList<number>>["skip"];
    skipWhile: upstream0.Stream<DartList<number>>["skipWhile"];
    distinct: upstream0.Stream<DartList<number>>["distinct"];
    firstWhere: upstream0.Stream<DartList<number>>["firstWhere"];
    lastWhere: upstream0.Stream<DartList<number>>["lastWhere"];
    singleWhere: upstream0.Stream<DartList<number>>["singleWhere"];
    elementAt: upstream0.Stream<DartList<number>>["elementAt"];
    timeout: upstream0.Stream<DartList<number>>["timeout"];
}
export declare const HttpClientResponse: object & _FlaxInstanceType<HttpClientResponse> & _FlaxDartType<HttpClientResponse, readonly ["class", "flax.core/sdk_foundation#type:HttpClientResponse", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "statusCode" | "reasonPhrase" | "contentLength" | "persistentConnection" | "isRedirect" | "isBroadcast" | "length" | "isEmpty" | "first" | "last" | "single" | "redirect" | "asBroadcastStream" | "listen" | "where" | "map" | "asyncMap" | "asyncExpand" | "handleError" | "expand" | "pipe" | "transform" | "reduce" | "fold" | "join" | "contains" | "forEach" | "every" | "any" | "cast" | "toList" | "toSet" | "drain" | "take" | "takeWhile" | "skip" | "skipWhile" | "distinct" | "firstWhere" | "lastWhere" | "singleWhere" | "elementAt" | "timeout" | "__flaxBound:dart:_http::HttpClientResponse" | "__flaxBound:dart:async::Stream";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((event: DartList<number>) => (_Selected0 | DartInput<_Selected0>))) => upstream0.Stream<_Selected0> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((event: DartList<number>) => (_Selected0 | DartInput<_Selected0>) | Promise<(_Selected0 | DartInput<_Selected0>)>)) => upstream0.Stream<_Selected0> : never : never;
}
interface _FlaxSignature2 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((event: DartList<number>) => (upstream0.Stream<_Selected0> | upstream0.Stream<(_Selected0 | DartInput<_Selected0>)>) | null)) => upstream0.Stream<_Selected0> : never : never;
}
interface _FlaxSignature3 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((element: DartList<number>) => DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>)) => upstream0.Stream<_Selected0> : never : never;
}
interface _FlaxSignature4 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (streamTransformer: Readonly<{
        "__flaxBound:dart:async::StreamTransformer": readonly [DartList<number>, _Selected0];
    }>) => upstream0.Stream<_Selected0> : never : never;
}
interface _FlaxSignature5 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (initialValue: (_Selected0 | DartInput<_Selected0>), combine: ((previous: _Selected0, element: DartList<number>) => (_Selected0 | DartInput<_Selected0>))) => Promise<_Selected0> : never : never;
}
interface _FlaxSignature6 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => upstream0.Stream<_Selected0> : never : never;
}
interface _FlaxSignature7 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (futureValue?: (_Selected0 | DartInput<_Selected0>) | null) => Promise<_Selected0> : never : never;
}
export {};
