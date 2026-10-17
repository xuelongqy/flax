import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_EventSink';
import '@flax/dart/async/_bindings/flutter_EventSink';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Sink';
import '@flax/dart/core/_bindings/flutter_Sink';
import type * as upstream2 from '@flax/dart/async/_bindings/flutter_StreamConsumer';
import '@flax/dart/async/_bindings/flutter_StreamConsumer';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream4 from '@flax/dart/async/_bindings/flutter_Stream';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StreamSink<S extends unknown | null = unknown | null> extends Omit<upstream0.EventSink<S>, typeof _flaxDartTypeValue | "done" | "add" | "addError" | "close" | "addStream">, Omit<upstream1.Sink<S>, typeof _flaxDartTypeValue | "done" | "add" | "addError" | "close" | "addStream">, Omit<upstream2.StreamConsumer<S>, typeof _flaxDartTypeValue | "done" | "add" | "addError" | "close" | "addStream">, Readonly<{
    "__flaxBound:dart:async::StreamSink": readonly [S];
}> {
    readonly __StreamSink: unique symbol;
    readonly done: Promise<unknown | null>;
    add(event: (S | DartInput<S>)): void;
    addError(error: {}, stackTrace?: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null): void;
    close(): Promise<unknown | null>;
    addStream(stream: (upstream4.Stream<S> | upstream4.Stream<(S | DartInput<S>)>)): Promise<unknown | null>;
}
export declare const StreamSink: object & _FlaxInstanceType<StreamSink<unknown | null>> & _FlaxDartType<StreamSink<unknown | null>, readonly ["class", "flax.core/flutter#type:StreamSink", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        readonly prototype: StreamSink<_Selected0>;
    } & _FlaxInstanceType<StreamSink<_Selected0>> & _FlaxDartType<StreamSink<_Selected0>> : never : never;
}
export {};
