import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Sink<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:dart:core::Sink": readonly [T];
}> {
    readonly __Sink: unique symbol;
    add(data: (T | DartInput<T>)): void;
    close(): void;
}
export declare const Sink: object & _FlaxInstanceType<Sink<unknown | null>> & _FlaxDartType<Sink<unknown | null>, readonly ["class", "flax.core/flutter#type:Sink", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        readonly prototype: Sink<_Selected0>;
    } & _FlaxInstanceType<Sink<_Selected0>> & _FlaxDartType<Sink<_Selected0>> : never : never;
}
export {};
