import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_Stream';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StreamConsumer<S extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:dart:async::StreamConsumer": readonly [S];
}> {
    readonly __StreamConsumer: unique symbol;
    readonly [_flaxDartTypeValue]: StreamConsumer<S>;
    addStream(stream: (upstream0.Stream<S> | upstream0.Stream<(S | DartInput<S>)>)): Promise<unknown | null>;
    close(): Promise<unknown | null>;
}
export declare namespace _StreamConsumerFactory {
    function implement<S extends unknown | null = unknown | null>(args: [], implementation: {
        addStream: ((stream: upstream0.Stream<S>) => Promise<unknown | null>);
        close: (() => Promise<unknown | null>);
    }): StreamConsumer<S>;
}
export declare const StreamConsumer: typeof _StreamConsumerFactory & _FlaxInstanceType<StreamConsumer<unknown | null>> & _FlaxDartType<StreamConsumer<unknown | null>, readonly ["class", "flax.core/flutter#type:StreamConsumer", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        readonly prototype: StreamConsumer<_Selected0>;
        implement(args: readonly [], implementation: Partial<StreamConsumer<_Selected0>>): StreamConsumer<_Selected0>;
    } & _FlaxInstanceType<StreamConsumer<_Selected0>> & _FlaxDartType<StreamConsumer<_Selected0>> : never : never;
}
export {};
