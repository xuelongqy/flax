import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Comparable<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:dart:core::Comparable": readonly [T];
}> {
    readonly __Comparable: unique symbol;
    compareTo(other: (T | DartInput<T>)): number;
}
export declare const Comparable: object & _FlaxInstanceType<Comparable<unknown | null>> & _FlaxDartType<Comparable<unknown | null>, readonly ["class", "flax.core/flutter#type:Comparable", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        readonly prototype: Comparable<_Selected0>;
    } & _FlaxInstanceType<Comparable<_Selected0>> & _FlaxDartType<Comparable<_Selected0>> : never : never;
}
export {};
