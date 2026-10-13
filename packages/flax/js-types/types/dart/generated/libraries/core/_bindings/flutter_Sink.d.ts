import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Sink<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:dart:core::Sink": readonly [T];
}> {
    readonly __Sink: unique symbol;
}
export declare const Sink: object & _FlaxInstanceType<Sink<unknown | null>> & _FlaxDartType<Sink<unknown | null>, readonly ["class", "flax.core/flutter#type:Sink", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<{
    arguments: readonly [readonly ["any", null, readonly [], true]];
    value: {
        readonly prototype: Sink<unknown | null>;
    } & _FlaxInstanceType<Sink<unknown | null>> & _FlaxDartType<Sink<unknown | null>, readonly ["class", "flax.core/flutter#type:Sink", readonly [readonly ["any", null, readonly [], true]], false]>;
}>;
