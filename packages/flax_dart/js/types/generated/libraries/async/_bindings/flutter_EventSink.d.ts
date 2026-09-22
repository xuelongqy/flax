import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Sink';
import '@flax/dart/core/_bindings/flutter_Sink';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
export interface EventSink<T extends unknown | null = unknown | null> extends upstream0.Sink<T>, Readonly<{
    "__flaxBound:dart:async::EventSink": readonly [T];
}> {
    readonly __EventSink: unique symbol;
    add(event: T): void;
    addError(error: {}, stackTrace?: upstream1.StackTrace | null): void;
    close(): void;
}
export declare namespace EventSink {
    function implement<T extends unknown | null = unknown | null>(args: [], implementation: {
        add: ((event: T) => void);
        addError: ((error: {}, stackTrace?: upstream1.StackTrace | null) => void);
        close: (() => void);
    }): EventSink<T>;
}
