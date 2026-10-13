import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_Stream';
import { type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StreamIterator<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:dart:async::StreamIterator": readonly [T];
}> {
    readonly __StreamIterator: unique symbol;
    readonly current: T;
    moveNext(): Promise<boolean>;
    cancel(): Promise<unknown | null>;
}
declare function _StreamIteratorFactory(stream: upstream0.Stream<unknown | null>): StreamIterator<unknown | null>;
export declare const StreamIterator: typeof _StreamIteratorFactory & _FlaxInstanceType<StreamIterator<unknown | null>> & _FlaxDartType<StreamIterator<unknown | null>, readonly ["class", "flax.core/flutter#type:StreamIterator", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<{
    arguments: readonly [readonly ["any", null, readonly [], true]];
    value: {
        (stream: upstream0.Stream<unknown | null>): StreamIterator<unknown | null>;
        readonly prototype: StreamIterator<unknown | null>;
    } & _FlaxInstanceType<StreamIterator<unknown | null>> & _FlaxDartType<StreamIterator<unknown | null>, readonly ["class", "flax.core/flutter#type:StreamIterator", readonly [readonly ["any", null, readonly [], true]], false]>;
}>;
export {};
