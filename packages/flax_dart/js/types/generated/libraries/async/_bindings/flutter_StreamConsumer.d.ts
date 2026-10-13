import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_Stream';
import { type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StreamConsumer<S extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:dart:async::StreamConsumer": readonly [S];
}> {
    readonly __StreamConsumer: unique symbol;
    addStream(stream: upstream0.Stream<S>): Promise<unknown | null>;
    close(): Promise<unknown | null>;
}
declare namespace _StreamConsumerFactory {
    function implement<S extends unknown | null = unknown | null>(args: [], implementation: {
        addStream: ((stream: upstream0.Stream<S>) => Promise<unknown | null>);
        close: (() => Promise<unknown | null>);
    }): StreamConsumer<S>;
}
export declare const StreamConsumer: typeof _StreamConsumerFactory & _FlaxInstanceType<StreamConsumer<unknown | null>> & _FlaxDartType<StreamConsumer<unknown | null>, readonly ["class", "flax.core/flutter#type:StreamConsumer", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<{
    arguments: readonly [readonly ["any", null, readonly [], true]];
    value: {
        readonly prototype: StreamConsumer<unknown | null>;
        implement(args: [], implementation: {
            addStream: ((stream: upstream0.Stream<unknown | null>) => Promise<unknown | null>);
            close: (() => Promise<unknown | null>);
        }): StreamConsumer<unknown | null>;
    } & _FlaxInstanceType<StreamConsumer<unknown | null>> & _FlaxDartType<StreamConsumer<unknown | null>, readonly ["class", "flax.core/flutter#type:StreamConsumer", readonly [readonly ["any", null, readonly [], true]], false]>;
}>;
export {};
