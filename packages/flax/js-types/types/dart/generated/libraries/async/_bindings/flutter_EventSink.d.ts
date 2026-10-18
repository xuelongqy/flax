import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Sink';
import '@flax/dart/core/_bindings/flutter_Sink';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface EventSink<T extends unknown | null = unknown | null> extends Omit<upstream0.Sink<T>, typeof _flaxDartTypeValue | "add" | "close" | "addError" | "__flaxBound:dart:async::EventSink" | "__flaxBound:dart:core::Sink">, Readonly<{
    "__flaxBound:dart:async::EventSink": readonly [T];
}>, Readonly<{
    "__flaxBound:dart:core::Sink": readonly [T];
}> {
    readonly __EventSink: unique symbol;
    readonly [_flaxDartTypeValue]: EventSink<T>;
    add(event: (T | DartInput<T>)): void;
    close(): void;
    addError(error: {}, stackTrace?: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null): void;
}
export declare namespace _EventSinkFactory {
    function implement<T extends unknown | null = unknown | null>(args: [], implementation: {
        add: ((event: T) => void);
        close: (() => void);
        addError: ((error: {}, stackTrace?: upstream1.StackTrace | null) => void);
    }): EventSink<T>;
}
export declare const EventSink: typeof _EventSinkFactory & _FlaxInstanceType<EventSink<unknown | null>> & _FlaxDartType<EventSink<unknown | null>, readonly ["class", "flax.core/flutter#type:EventSink", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        readonly prototype: EventSink<_Selected0>;
        implement(args: readonly [], implementation: Partial<EventSink<_Selected0>>): EventSink<_Selected0>;
    } & _FlaxInstanceType<EventSink<_Selected0>> & _FlaxDartType<EventSink<_Selected0>> : never : never;
}
export {};
