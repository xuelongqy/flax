import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_EventSink';
import '@flax/dart/async/_bindings/flutter_EventSink';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Sink';
import '@flax/dart/core/_bindings/flutter_Sink';
import type * as upstream2 from '@flax/dart/async/_bindings/flutter_StreamConsumer';
import '@flax/dart/async/_bindings/flutter_StreamConsumer';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream4 from '@flax/dart/async/_bindings/flutter_Stream';
import { type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StreamSink<S extends unknown | null = unknown | null> extends upstream0.EventSink<S>, upstream1.Sink<S>, upstream2.StreamConsumer<S>, Readonly<{
    "__flaxBound:dart:async::StreamSink": readonly [S];
}> {
    readonly __StreamSink: unique symbol;
    readonly done: Promise<unknown | null>;
    add(event: S): void;
    addError(error: {}, stackTrace?: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null): void;
    close(): Promise<unknown | null>;
    addStream(stream: upstream4.Stream<S>): Promise<unknown | null>;
}
export declare const StreamSink: object & _FlaxInstanceType<StreamSink<unknown | null>> & _FlaxDartType<StreamSink<unknown | null>, readonly ["class", "flax.core/flutter#type:StreamSink", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<{
    arguments: readonly [readonly ["any", null, readonly [], true]];
    value: {
        readonly prototype: StreamSink<unknown | null>;
    } & _FlaxInstanceType<StreamSink<unknown | null>> & _FlaxDartType<StreamSink<unknown | null>, readonly ["class", "flax.core/flutter#type:StreamSink", readonly [readonly ["any", null, readonly [], true]], false]>;
}>;
