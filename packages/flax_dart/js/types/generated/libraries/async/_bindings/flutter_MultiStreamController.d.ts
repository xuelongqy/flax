import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_StreamController';
import '@flax/dart/async/_bindings/flutter_StreamController';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_StreamSink';
import '@flax/dart/async/_bindings/flutter_StreamSink';
import type * as upstream2 from '@flax/dart/async/_bindings/flutter_EventSink';
import '@flax/dart/async/_bindings/flutter_EventSink';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_Sink';
import '@flax/dart/core/_bindings/flutter_Sink';
import type * as upstream4 from '@flax/dart/async/_bindings/flutter_StreamConsumer';
import '@flax/dart/async/_bindings/flutter_StreamConsumer';
import type * as upstream5 from '@flax/dart/async/_bindings/flutter_Stream';
import '@flax/dart/core/_bindings/flutter_StackTrace';
export interface MultiStreamController<T extends unknown | null = unknown | null> extends upstream0.StreamController<T>, upstream1.StreamSink<T>, upstream2.EventSink<T>, upstream3.Sink<T>, upstream4.StreamConsumer<T>, Readonly<{
    "__flaxBound:dart:async::MultiStreamController": readonly [T];
}> {
    readonly __MultiStreamController: unique symbol;
    get onListen(): (() => void) | null;
    get onPause(): (() => void) | null;
    get onResume(): (() => void) | null;
    get onCancel(): (() => void | Promise<void>) | null;
    readonly stream: upstream5.Stream<T>;
    readonly sink: upstream1.StreamSink<T>;
    readonly isClosed: boolean;
    readonly isPaused: boolean;
    readonly hasListener: boolean;
    readonly done: Promise<unknown | null>;
    add(event: T): void;
    addError(error: {}, stackTrace?: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null): void;
    close(): Promise<unknown | null>;
    addStream(source: upstream5.Stream<T>, options?: {
        cancelOnError?: boolean | null | undefined;
    }): Promise<unknown | null>;
    addSync(value: T): void;
    addErrorSync(error: {}, stackTrace?: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null): void;
    closeSync(): void;
    set onListen(value: (() => void) | null);
    set onPause(value: (() => void) | null);
    set onResume(value: (() => void) | null);
    set onCancel(value: (() => void | Promise<void>) | null);
}
export declare const MultiStreamController: object & _FlaxInstanceType<MultiStreamController<any>>;
