import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Iterator<E extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:dart:core::Iterator": readonly [E];
}> {
    readonly __Iterator: unique symbol;
    readonly current: E;
    moveNext(): boolean;
}
export declare const Iterator: object & _FlaxInstanceType<Iterator<unknown | null>> & _FlaxDartType<Iterator<unknown | null>, readonly ["class", "flax.core/flutter#type:Iterator", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<{
    arguments: readonly [readonly ["any", null, readonly [], true]];
    value: {
        readonly prototype: Iterator<unknown | null>;
    } & _FlaxInstanceType<Iterator<unknown | null>> & _FlaxDartType<Iterator<unknown | null>, readonly ["class", "flax.core/flutter#type:Iterator", readonly [readonly ["any", null, readonly [], true]], false]>;
}>;
