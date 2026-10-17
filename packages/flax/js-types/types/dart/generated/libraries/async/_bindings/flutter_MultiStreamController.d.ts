import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
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
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MultiStreamController<T extends unknown | null = unknown | null> extends Omit<upstream0.StreamController<T>, typeof _flaxDartTypeValue | "stream" | "onListen" | "onPause" | "onResume" | "onCancel" | "sink" | "isClosed" | "isPaused" | "hasListener" | "done" | "add" | "addError" | "close" | "addStream" | "addSync" | "addErrorSync" | "closeSync">, Omit<upstream1.StreamSink<T>, typeof _flaxDartTypeValue | "stream" | "onListen" | "onPause" | "onResume" | "onCancel" | "sink" | "isClosed" | "isPaused" | "hasListener" | "done" | "add" | "addError" | "close" | "addStream" | "addSync" | "addErrorSync" | "closeSync">, Omit<upstream2.EventSink<T>, typeof _flaxDartTypeValue | "stream" | "onListen" | "onPause" | "onResume" | "onCancel" | "sink" | "isClosed" | "isPaused" | "hasListener" | "done" | "add" | "addError" | "close" | "addStream" | "addSync" | "addErrorSync" | "closeSync">, Omit<upstream3.Sink<T>, typeof _flaxDartTypeValue | "stream" | "onListen" | "onPause" | "onResume" | "onCancel" | "sink" | "isClosed" | "isPaused" | "hasListener" | "done" | "add" | "addError" | "close" | "addStream" | "addSync" | "addErrorSync" | "closeSync">, Omit<upstream4.StreamConsumer<T>, typeof _flaxDartTypeValue | "stream" | "onListen" | "onPause" | "onResume" | "onCancel" | "sink" | "isClosed" | "isPaused" | "hasListener" | "done" | "add" | "addError" | "close" | "addStream" | "addSync" | "addErrorSync" | "closeSync">, Readonly<{
    "__flaxBound:dart:async::MultiStreamController": readonly [T];
}> {
    readonly __MultiStreamController: unique symbol;
    readonly stream: upstream5.Stream<T>;
    get onListen(): (() => void) | null;
    get onPause(): (() => void) | null;
    get onResume(): (() => void) | null;
    get onCancel(): (() => void | Promise<void>) | null;
    readonly sink: upstream1.StreamSink<T>;
    readonly isClosed: boolean;
    readonly isPaused: boolean;
    readonly hasListener: boolean;
    readonly done: Promise<unknown | null>;
    add(event: (T | DartInput<T>)): void;
    addError(error: {}, stackTrace?: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null): void;
    close(): Promise<unknown | null>;
    addStream(source: (upstream5.Stream<T> | upstream5.Stream<(T | DartInput<T>)>), options?: {
        cancelOnError?: boolean | null | undefined;
    }): Promise<unknown | null>;
    addSync(value: (T | DartInput<T>)): void;
    addErrorSync(error: {}, stackTrace?: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null): void;
    closeSync(): void;
    set onListen(value: (() => void) | null);
    set onPause(value: (() => void) | null);
    set onResume(value: (() => void) | null);
    set onCancel(value: (() => void | Promise<void>) | null);
}
export declare const MultiStreamController: object & _FlaxInstanceType<MultiStreamController<unknown | null>> & _FlaxDartType<MultiStreamController<unknown | null>, readonly ["class", "flax.core/flutter#type:MultiStreamController", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        readonly prototype: MultiStreamController<_Selected0>;
    } & _FlaxInstanceType<MultiStreamController<_Selected0>> & _FlaxDartType<MultiStreamController<_Selected0>> : never : never;
}
export {};
