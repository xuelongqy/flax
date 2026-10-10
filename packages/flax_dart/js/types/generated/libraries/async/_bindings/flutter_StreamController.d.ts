import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
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
    add(event: T): void;
    addError(error: {}, stackTrace?: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null): void;
    close(): Promise<unknown | null>;
    addStream(source: upstream4.Stream<T>, options?: {
        cancelOnError?: boolean | null | undefined;
    }): Promise<unknown | null>;
    set onListen(value: (() => void) | null);
    set onPause(value: (() => void) | null);
    set onResume(value: (() => void) | null);
    set onCancel(value: (() => void | Promise<void>) | null);
}
declare function _StreamControllerFactory<T extends unknown | null = unknown | null>(options?: {
    onListen?: (() => void) | null | undefined;
    onPause?: (() => void) | null | undefined;
    onResume?: (() => void) | null | undefined;
    onCancel?: (() => void | Promise<void>) | null | undefined;
    sync?: boolean | undefined;
}): StreamController<T>;
declare namespace _StreamControllerFactory {
    function broadcast<T extends unknown | null = unknown | null>(options?: {
        onListen?: (() => void) | null | undefined;
        onCancel?: (() => void) | null | undefined;
        sync?: boolean | undefined;
    }): StreamController<T>;
}
export declare const StreamController: typeof _StreamControllerFactory & _FlaxInstanceType<StreamController<any>>;
export {};
