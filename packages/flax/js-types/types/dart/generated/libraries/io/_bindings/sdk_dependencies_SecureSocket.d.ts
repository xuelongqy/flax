import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput, type DartList, type DartListInput, type DartInput } from '@flax/core/bindings';
import type { DartFunction as _FlaxDartFunction } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/io/_bindings/sdk_dependencies_Socket';
import '@flax/dart/io/_bindings/sdk_dependencies_Socket';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream2 from '@flax/dart/async/_bindings/flutter_StreamSink';
import '@flax/dart/async/_bindings/flutter_StreamSink';
import type * as upstream3 from '@flax/dart/async/_bindings/flutter_EventSink';
import '@flax/dart/async/_bindings/flutter_EventSink';
import type * as upstream4 from '@flax/dart/core/_bindings/flutter_Sink';
import '@flax/dart/core/_bindings/flutter_Sink';
import type * as upstream5 from '@flax/dart/async/_bindings/flutter_StreamConsumer';
import '@flax/dart/async/_bindings/flutter_StreamConsumer';
import type * as upstream6 from '@flax/dart/io/_bindings/sdk_dependencies_InternetAddress';
import '@flax/dart/io/_bindings/sdk_dependencies_InternetAddress';
import type * as upstream7 from '@flax/dart/convert/_bindings/sdk_dependencies_Encoding';
import '@flax/dart/convert/_bindings/sdk_dependencies_Encoding';
import type * as upstream8 from '@flax/dart/io/_bindings/sdk_dependencies_X509Certificate';
import '@flax/dart/io/_bindings/sdk_dependencies_X509Certificate';
import '@flax/dart/io/_bindings/sdk_dependencies_SecurityContext';
import type * as upstream10 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/io/_bindings/sdk_dependencies_SocketOption';
import '@flax/dart/io/_bindings/sdk_dependencies_RawSocketOption';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream14 from '@flax/dart/async/_bindings/flutter_StreamSubscription';
import '@flax/dart/async/_bindings/flutter_StreamSubscription';
import '@flax/dart/async/_bindings/flutter_StreamTransformer';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SecureSocket extends Omit<upstream0.Socket, _flaxOwnMembers0>, Omit<upstream1.Stream<globalThis.Uint8Array>, _flaxOwnMembers0 | keyof upstream0.Socket>, Omit<upstream2.StreamSink<DartList<number>>, _flaxOwnMembers0 | keyof upstream0.Socket | keyof upstream1.Stream<globalThis.Uint8Array>>, Omit<upstream3.EventSink<DartList<number>>, _flaxOwnMembers0 | keyof upstream0.Socket | keyof upstream1.Stream<globalThis.Uint8Array> | keyof upstream2.StreamSink<DartList<number>>>, Omit<upstream4.Sink<DartList<number>>, _flaxOwnMembers0 | keyof upstream0.Socket | keyof upstream1.Stream<globalThis.Uint8Array> | keyof upstream2.StreamSink<DartList<number>> | keyof upstream3.EventSink<DartList<number>>>, Omit<upstream5.StreamConsumer<DartList<number>>, _flaxOwnMembers0 | keyof upstream0.Socket | keyof upstream1.Stream<globalThis.Uint8Array> | keyof upstream2.StreamSink<DartList<number>> | keyof upstream3.EventSink<DartList<number>> | keyof upstream4.Sink<DartList<number>>>, Readonly<{
    "__flaxBound:dart:io::SecureSocket": readonly [];
}>, Readonly<{
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
    readonly __SecureSocket: unique symbol;
    readonly [_flaxDartTypeValue]: SecureSocket;
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
    readonly port: number;
    readonly remotePort: number;
    readonly address: upstream6.InternetAddress;
    readonly remoteAddress: upstream6.InternetAddress;
    readonly done: Promise<unknown | null>;
    readonly isBroadcast: boolean;
    readonly length: Promise<number>;
    readonly isEmpty: Promise<boolean>;
    readonly first: Promise<globalThis.Uint8Array>;
    readonly last: Promise<globalThis.Uint8Array>;
    readonly single: Promise<globalThis.Uint8Array>;
    get encoding(): upstream7.Encoding;
    readonly peerCertificate: upstream8.X509Certificate | null;
    readonly selectedProtocol: string | null;
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
    addError(error: {}, stackTrace?: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null): void;
    close(): Promise<unknown | null>;
    asBroadcastStream: upstream1.Stream<globalThis.Uint8Array>["asBroadcastStream"];
    listen(onData: ((event: globalThis.Uint8Array) => void) | null, options?: {
        cancelOnError?: boolean | null | undefined;
        onDone?: (() => void) | null | undefined;
        onError?: _FlaxDartFunction | null | undefined;
    }): upstream14.StreamSubscription<globalThis.Uint8Array>;
    where: upstream1.Stream<globalThis.Uint8Array>["where"];
    map: upstream1.Stream<globalThis.Uint8Array>["map"];
    asyncMap: upstream1.Stream<globalThis.Uint8Array>["asyncMap"];
    asyncExpand: upstream1.Stream<globalThis.Uint8Array>["asyncExpand"];
    handleError(onError: _FlaxDartFunction, options?: {
        test?: ((error: unknown | null) => boolean) | null | undefined;
    }): upstream1.Stream<globalThis.Uint8Array>;
    expand: upstream1.Stream<globalThis.Uint8Array>["expand"];
    pipe: upstream1.Stream<globalThis.Uint8Array>["pipe"];
    transform: upstream1.Stream<globalThis.Uint8Array>["transform"];
    reduce: upstream1.Stream<globalThis.Uint8Array>["reduce"];
    fold: upstream1.Stream<globalThis.Uint8Array>["fold"];
    join: upstream1.Stream<globalThis.Uint8Array>["join"];
    contains: upstream1.Stream<globalThis.Uint8Array>["contains"];
    forEach: upstream1.Stream<globalThis.Uint8Array>["forEach"];
    every: upstream1.Stream<globalThis.Uint8Array>["every"];
    any: upstream1.Stream<globalThis.Uint8Array>["any"];
    cast: upstream1.Stream<globalThis.Uint8Array>["cast"];
    toList: upstream1.Stream<globalThis.Uint8Array>["toList"];
    toSet: upstream1.Stream<globalThis.Uint8Array>["toSet"];
    drain: upstream1.Stream<globalThis.Uint8Array>["drain"];
    take: upstream1.Stream<globalThis.Uint8Array>["take"];
    takeWhile: upstream1.Stream<globalThis.Uint8Array>["takeWhile"];
    skip: upstream1.Stream<globalThis.Uint8Array>["skip"];
    skipWhile: upstream1.Stream<globalThis.Uint8Array>["skipWhile"];
    distinct: upstream1.Stream<globalThis.Uint8Array>["distinct"];
    firstWhere: upstream1.Stream<globalThis.Uint8Array>["firstWhere"];
    lastWhere: upstream1.Stream<globalThis.Uint8Array>["lastWhere"];
    singleWhere: upstream1.Stream<globalThis.Uint8Array>["singleWhere"];
    elementAt: upstream1.Stream<globalThis.Uint8Array>["elementAt"];
    timeout: upstream1.Stream<globalThis.Uint8Array>["timeout"];
    add(data: DartListInput<number, number>): void;
    write(object: unknown | null): void;
    writeAll(objects: DartIterableInput<unknown | null, unknown | null>, separator?: string): void;
    writeln(object?: unknown | null): void;
    writeCharCode(charCode: number): void;
    addStream(stream: (upstream1.Stream<DartList<number>> | upstream1.Stream<DartListInput<number, number>>)): Promise<unknown | null>;
    flush(): Promise<unknown | null>;
    renegotiate(options?: {
        requestClientCertificate?: boolean | undefined;
        requireClientCertificate?: boolean | undefined;
        useSessionCache?: boolean | undefined;
    }): void;
    set encoding(value: Readonly<{
        "__flaxBound:dart:convert::Encoding": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:convert::Codec": readonly [string, DartList<number>];
    }>);
}
export declare namespace _SecureSocketFactory {
    function connect(host: unknown | null, port: number, options?: {
        context?: Readonly<{
            "__flaxBound:dart:io::SecurityContext": readonly [];
        }> | null | undefined;
        keyLog?: ((line: string) => void) | null | undefined;
        onBadCertificate?: ((certificate: upstream8.X509Certificate) => boolean) | null | undefined;
        supportedProtocols?: DartListInput<string, string> | null | undefined;
        timeout?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream10.Duration];
        }>) | null | undefined;
    }): Promise<SecureSocket>;
}
export declare namespace _SecureSocketFactory {
    function secure(socket: Readonly<{
        "__flaxBound:dart:io::Socket": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:async::Stream": readonly [globalThis.Uint8Array];
    }> & Readonly<{
        "__flaxBound:dart:io::IOSink": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:async::StreamSink": readonly [DartList<number>];
    }> & Readonly<{
        "__flaxBound:dart:async::EventSink": readonly [DartList<number>];
    }> & Readonly<{
        "__flaxBound:dart:core::Sink": readonly [DartList<number>];
    }> & Readonly<{
        "__flaxBound:dart:async::StreamConsumer": readonly [DartList<number>];
    }> & Readonly<{
        "__flaxBound:dart:core::StringSink": readonly [];
    }>, options?: {
        context?: Readonly<{
            "__flaxBound:dart:io::SecurityContext": readonly [];
        }> | null | undefined;
        host?: unknown | null | undefined;
        keyLog?: ((line: string) => void) | null | undefined;
        onBadCertificate?: ((certificate: upstream8.X509Certificate) => boolean) | null | undefined;
        supportedProtocols?: DartListInput<string, string> | null | undefined;
    }): Promise<SecureSocket>;
}
export declare namespace _SecureSocketFactory {
    function secureServer(socket: Readonly<{
        "__flaxBound:dart:io::Socket": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:async::Stream": readonly [globalThis.Uint8Array];
    }> & Readonly<{
        "__flaxBound:dart:io::IOSink": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:async::StreamSink": readonly [DartList<number>];
    }> & Readonly<{
        "__flaxBound:dart:async::EventSink": readonly [DartList<number>];
    }> & Readonly<{
        "__flaxBound:dart:core::Sink": readonly [DartList<number>];
    }> & Readonly<{
        "__flaxBound:dart:async::StreamConsumer": readonly [DartList<number>];
    }> & Readonly<{
        "__flaxBound:dart:core::StringSink": readonly [];
    }>, context: Readonly<{
        "__flaxBound:dart:io::SecurityContext": readonly [];
    }> | null, options?: {
        bufferedData?: DartListInput<number, number> | null | undefined;
        requestClientCertificate?: boolean | undefined;
        requireClientCertificate?: boolean | undefined;
        supportedProtocols?: DartListInput<string, string> | null | undefined;
    }): Promise<SecureSocket>;
}
export declare const SecureSocket: typeof _SecureSocketFactory & _FlaxInstanceType<SecureSocket> & _FlaxDartType<SecureSocket, readonly ["class", "flax.core/sdk_dependencies#type:SecureSocket", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "port" | "remotePort" | "address" | "remoteAddress" | "done" | "isBroadcast" | "length" | "isEmpty" | "first" | "last" | "single" | "encoding" | "peerCertificate" | "selectedProtocol" | "destroy" | "setOption" | "getRawOption" | "setRawOption" | "addError" | "close" | "asBroadcastStream" | "listen" | "where" | "map" | "asyncMap" | "asyncExpand" | "handleError" | "expand" | "pipe" | "transform" | "reduce" | "fold" | "join" | "contains" | "forEach" | "every" | "any" | "cast" | "toList" | "toSet" | "drain" | "take" | "takeWhile" | "skip" | "skipWhile" | "distinct" | "firstWhere" | "lastWhere" | "singleWhere" | "elementAt" | "timeout" | "add" | "write" | "writeAll" | "writeln" | "writeCharCode" | "addStream" | "flush" | "renegotiate" | "__flaxBound:dart:io::SecureSocket" | "__flaxBound:dart:io::Socket" | "__flaxBound:dart:async::Stream" | "__flaxBound:dart:io::IOSink" | "__flaxBound:dart:async::StreamSink" | "__flaxBound:dart:async::EventSink" | "__flaxBound:dart:core::Sink" | "__flaxBound:dart:async::StreamConsumer" | "__flaxBound:dart:core::StringSink";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((event: globalThis.Uint8Array) => (_Selected0 | DartInput<_Selected0>))) => upstream1.Stream<_Selected0> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((event: globalThis.Uint8Array) => (_Selected0 | DartInput<_Selected0>) | Promise<(_Selected0 | DartInput<_Selected0>)>)) => upstream1.Stream<_Selected0> : never : never;
}
interface _FlaxSignature2 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((event: globalThis.Uint8Array) => (upstream1.Stream<_Selected0> | upstream1.Stream<(_Selected0 | DartInput<_Selected0>)>) | null)) => upstream1.Stream<_Selected0> : never : never;
}
interface _FlaxSignature3 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((element: globalThis.Uint8Array) => DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>)) => upstream1.Stream<_Selected0> : never : never;
}
interface _FlaxSignature4 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (streamTransformer: Readonly<{
        "__flaxBound:dart:async::StreamTransformer": readonly [globalThis.Uint8Array, _Selected0];
    }>) => upstream1.Stream<_Selected0> : never : never;
}
interface _FlaxSignature5 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (initialValue: (_Selected0 | DartInput<_Selected0>), combine: ((previous: _Selected0, element: globalThis.Uint8Array) => (_Selected0 | DartInput<_Selected0>))) => Promise<_Selected0> : never : never;
}
interface _FlaxSignature6 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => upstream1.Stream<_Selected0> : never : never;
}
interface _FlaxSignature7 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (futureValue?: (_Selected0 | DartInput<_Selected0>) | null) => Promise<_Selected0> : never : never;
}
export {};
