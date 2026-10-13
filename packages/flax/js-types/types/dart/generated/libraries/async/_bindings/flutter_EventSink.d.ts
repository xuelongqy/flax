import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Sink';
import '@flax/dart/core/_bindings/flutter_Sink';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface EventSink<T extends unknown | null = unknown | null> extends upstream0.Sink<T>, Readonly<{
    "__flaxBound:dart:async::EventSink": readonly [T];
}> {
    readonly __EventSink: unique symbol;
    add(event: T): void;
    addError(error: {}, stackTrace?: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null): void;
    close(): void;
}
declare namespace _EventSinkFactory {
    function implement<T extends unknown | null = unknown | null>(args: [], implementation: {
        add: ((event: T) => void);
        addError: ((error: {}, stackTrace?: upstream1.StackTrace | null) => void);
        close: (() => void);
    }): EventSink<T>;
}
export declare const EventSink: typeof _EventSinkFactory & _FlaxInstanceType<EventSink<unknown | null>> & _FlaxDartType<EventSink<unknown | null>, readonly ["class", "flax.core/flutter#type:EventSink", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<{
    arguments: readonly [readonly ["any", null, readonly [], true]];
    value: {
        readonly prototype: EventSink<unknown | null>;
        implement(args: [], implementation: {
            add: ((event: unknown | null) => void);
            addError: ((error: {}, stackTrace?: upstream1.StackTrace | null) => void);
            close: (() => void);
        }): EventSink<unknown | null>;
    } & _FlaxInstanceType<EventSink<unknown | null>> & _FlaxDartType<EventSink<unknown | null>, readonly ["class", "flax.core/flutter#type:EventSink", readonly [readonly ["any", null, readonly [], true]], false]>;
}>;
export {};
