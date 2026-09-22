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
import type * as upstream6 from '@flax/dart/core/_bindings/flutter_StackTrace';
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
    addError(error: {}, stackTrace?: upstream6.StackTrace | null): void;
    close(): Promise<unknown | null>;
    addStream(source: upstream5.Stream<T>, options?: {
        cancelOnError?: boolean | null | undefined;
    }): Promise<unknown | null>;
    addSync(value: T): void;
    addErrorSync(error: {}, stackTrace?: upstream6.StackTrace | null): void;
    closeSync(): void;
    set onListen(value: (() => void) | null);
    set onPause(value: (() => void) | null);
    set onResume(value: (() => void) | null);
    set onCancel(value: (() => void | Promise<void>) | null);
}
