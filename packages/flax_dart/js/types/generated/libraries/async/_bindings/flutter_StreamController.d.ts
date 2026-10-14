import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_StreamSink';
import '@flax/dart/async/_bindings/flutter_StreamSink';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_EventSink';
import '@flax/dart/async/_bindings/flutter_EventSink';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_Sink';
import '@flax/dart/core/_bindings/flutter_Sink';
import type * as upstream3 from '@flax/dart/async/_bindings/flutter_StreamConsumer';
import '@flax/dart/async/_bindings/flutter_StreamConsumer';
import type * as upstream4 from '@flax/dart/async/_bindings/flutter_Stream';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StreamController<T extends unknown | null = unknown | null> extends upstream0.StreamSink<T>, upstream1.EventSink<T>, upstream2.Sink<T>, upstream3.StreamConsumer<T>, Readonly<{
    "__flaxBound:dart:async::StreamController": readonly [T];
}> {
    readonly __StreamController: unique symbol;
    readonly done: Promise<unknown | null>;
    get onListen(): (() => void) | null;
    get onPause(): (() => void) | null;
    get onResume(): (() => void) | null;
    get onCancel(): (() => void | Promise<void>) | null;
    readonly stream: upstream4.Stream<T>;
    readonly sink: upstream0.StreamSink<T>;
    readonly isClosed: boolean;
    readonly isPaused: boolean;
    readonly hasListener: boolean;
    add(event: (T | DartInput<T>)): void;
    addError(error: {}, stackTrace?: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null): void;
    close(): Promise<unknown | null>;
    addStream(source: (upstream4.Stream<T> | upstream4.Stream<(T | DartInput<T>)>), options?: {
        cancelOnError?: boolean | null | undefined;
    }): Promise<unknown | null>;
    set onListen(value: (() => void) | null);
    set onPause(value: (() => void) | null);
    set onResume(value: (() => void) | null);
    set onCancel(value: (() => void | Promise<void>) | null);
}
declare function _StreamControllerFactory(options?: {
    onListen?: (() => void) | null | undefined;
    onPause?: (() => void) | null | undefined;
    onResume?: (() => void) | null | undefined;
    onCancel?: (() => void | Promise<void>) | null | undefined;
    sync?: boolean | undefined;
}): StreamController<unknown | null>;
declare namespace _StreamControllerFactory {
    function broadcast(options?: {
        onListen?: (() => void) | null | undefined;
        onCancel?: (() => void) | null | undefined;
        sync?: boolean | undefined;
    }): StreamController<unknown | null>;
}
export declare const StreamController: typeof _StreamControllerFactory & _FlaxInstanceType<StreamController<unknown | null>> & _FlaxDartType<StreamController<unknown | null>, readonly ["class", "flax.core/flutter#type:StreamController", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        (options?: {
            onListen?: (() => void) | null | undefined;
            onPause?: (() => void) | null | undefined;
            onResume?: (() => void) | null | undefined;
            onCancel?: (() => void | Promise<void>) | null | undefined;
            sync?: boolean | undefined;
        }): StreamController<_Selected0>;
        broadcast: (options?: {
            onListen?: (() => void) | null | undefined;
            onCancel?: (() => void) | null | undefined;
            sync?: boolean | undefined;
        }) => StreamController<_Selected0>;
        readonly prototype: StreamController<_Selected0>;
    } & _FlaxInstanceType<StreamController<_Selected0>> & _FlaxDartType<StreamController<_Selected0>> : never : never;
}
export {};
