import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_StreamSink';
import '@flax/dart/async/_bindings/flutter_StreamSink';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_EventSink';
import '@flax/dart/async/_bindings/flutter_EventSink';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_Sink';
import '@flax/dart/core/_bindings/flutter_Sink';
import type * as upstream3 from '@flax/dart/async/_bindings/flutter_StreamConsumer';
import '@flax/dart/async/_bindings/flutter_StreamConsumer';
import type * as upstream4 from '@flax/dart/io/_bindings/sdk_dependencies_HttpClientResponse';
import '@flax/dart/io/_bindings/sdk_dependencies_HttpClientResponse';
import type * as upstream5 from '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/core/_bindings/flutter_Uri';
import type * as upstream6 from '@flax/dart/io/_bindings/sdk_dependencies_HttpHeaders';
import '@flax/dart/io/_bindings/sdk_dependencies_HttpHeaders';
import type * as upstream7 from '@flax/dart/io/_bindings/sdk_dependencies_Cookie';
import '@flax/dart/io/_bindings/sdk_dependencies_Cookie';
import type * as upstream8 from '@flax/dart/io/_bindings/sdk_dependencies_HttpConnectionInfo';
import '@flax/dart/io/_bindings/sdk_dependencies_HttpConnectionInfo';
import type * as upstream9 from '@flax/dart/convert/_bindings/sdk_dependencies_Encoding';
import '@flax/dart/convert/_bindings/sdk_dependencies_Encoding';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream11 from '@flax/dart/async/_bindings/flutter_Stream';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface HttpClientRequest extends Omit<upstream0.StreamSink<DartList<number>>, _flaxOwnMembers0>, Omit<upstream1.EventSink<DartList<number>>, _flaxOwnMembers0 | keyof upstream0.StreamSink<DartList<number>>>, Omit<upstream2.Sink<DartList<number>>, _flaxOwnMembers0 | keyof upstream0.StreamSink<DartList<number>> | keyof upstream1.EventSink<DartList<number>>>, Omit<upstream3.StreamConsumer<DartList<number>>, _flaxOwnMembers0 | keyof upstream0.StreamSink<DartList<number>> | keyof upstream1.EventSink<DartList<number>> | keyof upstream2.Sink<DartList<number>>>, Readonly<{
    "__flaxBound:dart:_http::HttpClientRequest": readonly [];
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
    readonly __HttpClientRequest: unique symbol;
    readonly [_flaxDartTypeValue]: HttpClientRequest;
    readonly done: Promise<upstream4.HttpClientResponse>;
    get persistentConnection(): boolean;
    get followRedirects(): boolean;
    get maxRedirects(): number;
    readonly method: string;
    readonly uri: upstream5.Uri;
    get contentLength(): number;
    get bufferOutput(): boolean;
    readonly headers: upstream6.HttpHeaders;
    readonly cookies: DartList<upstream7.Cookie>;
    readonly connectionInfo: upstream8.HttpConnectionInfo | null;
    get encoding(): upstream9.Encoding;
    close(): Promise<upstream4.HttpClientResponse>;
    add(data: DartListInput<number, number>): void;
    addError(error: {}, stackTrace?: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null): void;
    addStream(stream: (upstream11.Stream<DartList<number>> | upstream11.Stream<DartListInput<number, number>>)): Promise<unknown | null>;
    abort(exception?: unknown | null, stackTrace?: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null): void;
    write(object: unknown | null): void;
    writeAll(objects: DartIterableInput<unknown | null, unknown | null>, separator?: string): void;
    writeln(object?: unknown | null): void;
    writeCharCode(charCode: number): void;
    flush(): Promise<unknown | null>;
    set persistentConnection(value: boolean);
    set followRedirects(value: boolean);
    set maxRedirects(value: number);
    set contentLength(value: number);
    set bufferOutput(value: boolean);
    set encoding(value: Readonly<{
        "__flaxBound:dart:convert::Encoding": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:convert::Codec": readonly [string, DartList<number>];
    }>);
}
export declare const HttpClientRequest: object & _FlaxInstanceType<HttpClientRequest> & _FlaxDartType<HttpClientRequest, readonly ["class", "flax.core/sdk_dependencies#type:HttpClientRequest", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "done" | "persistentConnection" | "followRedirects" | "maxRedirects" | "method" | "uri" | "contentLength" | "bufferOutput" | "headers" | "cookies" | "connectionInfo" | "encoding" | "close" | "add" | "addError" | "addStream" | "abort" | "write" | "writeAll" | "writeln" | "writeCharCode" | "flush" | "__flaxBound:dart:_http::HttpClientRequest" | "__flaxBound:dart:io::IOSink" | "__flaxBound:dart:async::StreamSink" | "__flaxBound:dart:async::EventSink" | "__flaxBound:dart:core::Sink" | "__flaxBound:dart:async::StreamConsumer" | "__flaxBound:dart:core::StringSink";
export {};
