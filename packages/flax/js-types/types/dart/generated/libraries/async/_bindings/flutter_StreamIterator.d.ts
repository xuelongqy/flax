import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_Stream';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StreamIterator<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:dart:async::StreamIterator": readonly [T];
}> {
    readonly __StreamIterator: unique symbol;
    readonly current: T;
    moveNext(): Promise<boolean>;
    cancel(): Promise<unknown | null>;
}
declare function _StreamIteratorFactory<T extends unknown | null = unknown | null>(stream: (upstream0.Stream<_FlaxDartOutput<T>> | upstream0.Stream<(T | _FlaxDartOutput<T>)>)): StreamIterator<T>;
declare function _StreamIteratorFactory(stream: upstream0.Stream<unknown | null>): StreamIterator<unknown | null>;
export declare const StreamIterator: typeof _StreamIteratorFactory & _FlaxInstanceType<StreamIterator<unknown | null>> & _FlaxDartType<StreamIterator<unknown | null>, readonly ["class", "flax.core/flutter#type:StreamIterator", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        (stream: (upstream0.Stream<_Selected0> | upstream0.Stream<(_Selected0 | DartInput<_Selected0>)>)): StreamIterator<_Selected0>;
        readonly prototype: StreamIterator<_Selected0>;
    } & _FlaxInstanceType<StreamIterator<_Selected0>> & _FlaxDartType<StreamIterator<_Selected0>> : never : never;
}
export {};
