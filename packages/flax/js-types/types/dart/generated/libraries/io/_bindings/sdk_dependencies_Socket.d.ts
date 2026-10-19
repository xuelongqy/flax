import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput, type DartList, type DartListInput, type DartInput } from '@flax/core/bindings';
import type { DartFunction as _FlaxDartFunction } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_StreamSink';
import '@flax/dart/async/_bindings/flutter_StreamSink';
import type * as upstream2 from '@flax/dart/async/_bindings/flutter_EventSink';
import '@flax/dart/async/_bindings/flutter_EventSink';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_Sink';
import '@flax/dart/core/_bindings/flutter_Sink';
import type * as upstream4 from '@flax/dart/async/_bindings/flutter_StreamConsumer';
import '@flax/dart/async/_bindings/flutter_StreamConsumer';
import type * as upstream5 from '@flax/dart/io/_bindings/sdk_dependencies_InternetAddress';
import '@flax/dart/io/_bindings/sdk_dependencies_InternetAddress';
import type * as upstream6 from '@flax/dart/convert/_bindings/sdk_dependencies_Encoding';
import '@flax/dart/convert/_bindings/sdk_dependencies_Encoding';
import type * as upstream7 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/io/_bindings/sdk_dependencies_SocketOption';
import '@flax/dart/io/_bindings/sdk_dependencies_RawSocketOption';
import type * as upstream11 from '@flax/dart/async/_bindings/flutter_StreamSubscription';
import '@flax/dart/async/_bindings/flutter_StreamSubscription';
import '@flax/dart/async/_bindings/flutter_StreamTransformer';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Socket extends Omit<upstream0.Stream<globalThis.Uint8Array>, _flaxOwnMembers0>, Omit<upstream1.StreamSink<DartList<number>>, _flaxOwnMembers0 | keyof upstream0.Stream<globalThis.Uint8Array>>, Omit<upstream2.EventSink<DartList<number>>, _flaxOwnMembers0 | keyof upstream0.Stream<globalThis.Uint8Array> | keyof upstream1.StreamSink<DartList<number>>>, Omit<upstream3.Sink<DartList<number>>, _flaxOwnMembers0 | keyof upstream0.Stream<globalThis.Uint8Array> | keyof upstream1.StreamSink<DartList<number>> | keyof upstream2.EventSink<DartList<number>>>, Omit<upstream4.StreamConsumer<DartList<number>>, _flaxOwnMembers0 | keyof upstream0.Stream<globalThis.Uint8Array> | keyof upstream1.StreamSink<DartList<number>> | keyof upstream2.EventSink<DartList<number>> | keyof upstream3.Sink<DartList<number>>>, Readonly<{
    "__flaxBound:dart:io::Socket": readonly [];
}>, Readonly<{
    "__flaxBound:dart:async::Stream": readonly [globalThis.Uint8Array];
}>, Readonly<{
    "__flaxBound:dart:io::IOSink": readonly [];
}>, Readonly<{
    "__flaxBound:dart:async::StreamSink": readonly [DartList<number>];
}>, Readonly<{
    "__flaxBound:dart:async::EventSink": readonly [DartList<number>];
}>, Readonly<{
    "__flaxBound:dart:core::Sink": readonly [DartList<number>];
}>, Readonly<{
    "__flaxBound:dart:async::StreamConsumer": readonly [DartList<number>];
}>, Readonly<{
    "__flaxBound:dart:core::StringSink": readonly [];
}> {
    readonly __Socket: unique symbol;
    readonly [_flaxDartTypeValue]: Socket;
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
    readonly done: Promise<unknown | null>;
    readonly port: number;
    readonly remotePort: number;
    readonly address: upstream5.InternetAddress;
    readonly remoteAddress: upstream5.InternetAddress;
    readonly isBroadcast: boolean;
    readonly length: Promise<number>;
    readonly isEmpty: Promise<boolean>;
    readonly first: Promise<globalThis.Uint8Array>;
    readonly last: Promise<globalThis.Uint8Array>;
    readonly single: Promise<globalThis.Uint8Array>;
    get encoding(): upstream6.Encoding;
    close(): Promise<unknown | null>;
    add(data: DartListInput<number, number>): void;
    addError(error: {}, stackTrace?: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null): void;
    addStream(stream: (upstream0.Stream<DartList<number>> | upstream0.Stream<DartListInput<number, number>>)): Promise<unknown | null>;
    destroy(): void;
    setOption(option: Readonly<{
        "__flaxBound:dart:io::SocketOption": readonly [];
    }>, enabled: boolean): boolean;
    getRawOption(option: Readonly<{
        "__flaxBound:dart:io::RawSocketOption": readonly [];
    }>): globalThis.Uint8Array;
    setRawOption(option: Readonly<{
        "__flaxBound:dart:io::RawSocketOption": readonly [];
    }>): void;
    asBroadcastStream: upstream0.Stream<globalThis.Uint8Array>["asBroadcastStream"];
    listen(onData: ((event: globalThis.Uint8Array) => void) | null, options?: {
        cancelOnError?: boolean | null | undefined;
        onDone?: (() => void) | null | undefined;
        onError?: _FlaxDartFunction | null | undefined;
    }): upstream11.StreamSubscription<globalThis.Uint8Array>;
    where: upstream0.Stream<globalThis.Uint8Array>["where"];
    map: upstream0.Stream<globalThis.Uint8Array>["map"];
    asyncMap: upstream0.Stream<globalThis.Uint8Array>["asyncMap"];
    asyncExpand: upstream0.Stream<globalThis.Uint8Array>["asyncExpand"];
    handleError(onError: _FlaxDartFunction, options?: {
        test?: ((error: unknown | null) => boolean) | null | undefined;
    }): upstream0.Stream<globalThis.Uint8Array>;
    expand: upstream0.Stream<globalThis.Uint8Array>["expand"];
    pipe: upstream0.Stream<globalThis.Uint8Array>["pipe"];
    transform: upstream0.Stream<globalThis.Uint8Array>["transform"];
    reduce: upstream0.Stream<globalThis.Uint8Array>["reduce"];
    fold: upstream0.Stream<globalThis.Uint8Array>["fold"];
    join: upstream0.Stream<globalThis.Uint8Array>["join"];
    contains: upstream0.Stream<globalThis.Uint8Array>["contains"];
    forEach: upstream0.Stream<globalThis.Uint8Array>["forEach"];
    every: upstream0.Stream<globalThis.Uint8Array>["every"];
    any: upstream0.Stream<globalThis.Uint8Array>["any"];
    cast: upstream0.Stream<globalThis.Uint8Array>["cast"];
    toList: upstream0.Stream<globalThis.Uint8Array>["toList"];
    toSet: upstream0.Stream<globalThis.Uint8Array>["toSet"];
    drain: upstream0.Stream<globalThis.Uint8Array>["drain"];
    take: upstream0.Stream<globalThis.Uint8Array>["take"];
    takeWhile: upstream0.Stream<globalThis.Uint8Array>["takeWhile"];
    skip: upstream0.Stream<globalThis.Uint8Array>["skip"];
    skipWhile: upstream0.Stream<globalThis.Uint8Array>["skipWhile"];
    distinct: upstream0.Stream<globalThis.Uint8Array>["distinct"];
    firstWhere: upstream0.Stream<globalThis.Uint8Array>["firstWhere"];
    lastWhere: upstream0.Stream<globalThis.Uint8Array>["lastWhere"];
    singleWhere: upstream0.Stream<globalThis.Uint8Array>["singleWhere"];
    elementAt: upstream0.Stream<globalThis.Uint8Array>["elementAt"];
    timeout: upstream0.Stream<globalThis.Uint8Array>["timeout"];
    write(object: unknown | null): void;
    writeAll(objects: DartIterableInput<unknown | null, unknown | null>, separator?: string): void;
    writeln(object?: unknown | null): void;
    writeCharCode(charCode: number): void;
    flush(): Promise<unknown | null>;
    set encoding(value: Readonly<{
        "__flaxBound:dart:convert::Encoding": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:convert::Codec": readonly [string, DartList<number>];
    }>);
}
export declare namespace _SocketFactory {
    function connect(host: unknown | null, port: number, options?: {
        sourceAddress?: unknown | null | undefined;
        sourcePort?: number | undefined;
        timeout?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream7.Duration];
        }>) | null | undefined;
    }): Promise<Socket>;
}
export declare const Socket: typeof _SocketFactory & _FlaxInstanceType<Socket> & _FlaxDartType<Socket, readonly ["class", "flax.core/sdk_dependencies#type:Socket", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "done" | "port" | "remotePort" | "address" | "remoteAddress" | "isBroadcast" | "length" | "isEmpty" | "first" | "last" | "single" | "encoding" | "close" | "add" | "addError" | "addStream" | "destroy" | "setOption" | "getRawOption" | "setRawOption" | "asBroadcastStream" | "listen" | "where" | "map" | "asyncMap" | "asyncExpand" | "handleError" | "expand" | "pipe" | "transform" | "reduce" | "fold" | "join" | "contains" | "forEach" | "every" | "any" | "cast" | "toList" | "toSet" | "drain" | "take" | "takeWhile" | "skip" | "skipWhile" | "distinct" | "firstWhere" | "lastWhere" | "singleWhere" | "elementAt" | "timeout" | "write" | "writeAll" | "writeln" | "writeCharCode" | "flush" | "__flaxBound:dart:io::Socket" | "__flaxBound:dart:async::Stream" | "__flaxBound:dart:io::IOSink" | "__flaxBound:dart:async::StreamSink" | "__flaxBound:dart:async::EventSink" | "__flaxBound:dart:core::Sink" | "__flaxBound:dart:async::StreamConsumer" | "__flaxBound:dart:core::StringSink";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((event: globalThis.Uint8Array) => (_Selected0 | DartInput<_Selected0>))) => upstream0.Stream<_Selected0> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((event: globalThis.Uint8Array) => (_Selected0 | DartInput<_Selected0>) | Promise<(_Selected0 | DartInput<_Selected0>)>)) => upstream0.Stream<_Selected0> : never : never;
}
interface _FlaxSignature2 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((event: globalThis.Uint8Array) => (upstream0.Stream<_Selected0> | upstream0.Stream<(_Selected0 | DartInput<_Selected0>)>) | null)) => upstream0.Stream<_Selected0> : never : never;
}
interface _FlaxSignature3 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((element: globalThis.Uint8Array) => DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>)) => upstream0.Stream<_Selected0> : never : never;
}
interface _FlaxSignature4 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (streamTransformer: Readonly<{
        "__flaxBound:dart:async::StreamTransformer": readonly [globalThis.Uint8Array, _Selected0];
    }>) => upstream0.Stream<_Selected0> : never : never;
}
interface _FlaxSignature5 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (initialValue: (_Selected0 | DartInput<_Selected0>), combine: ((previous: _Selected0, element: globalThis.Uint8Array) => (_Selected0 | DartInput<_Selected0>))) => Promise<_Selected0> : never : never;
}
interface _FlaxSignature6 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => upstream0.Stream<_Selected0> : never : never;
}
interface _FlaxSignature7 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (futureValue?: (_Selected0 | DartInput<_Selected0>) | null) => Promise<_Selected0> : never : never;
}
export {};
